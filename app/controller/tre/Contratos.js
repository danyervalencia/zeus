Ext.define('Siace.controller.treasury.Contratos', {
	extend: 'Ext.app.Controller',
	views: ['treasury.ContratosBrowse', 'treasury.ContratosEdit', 'treasury.ContratosSearchxInvoice'],
    refs: [
        { ref: 'tcrv_grdTreasury_Ventas', selector: 'treasury_contratosrv #grdTreasury_ventas' },
        { ref: 'pps_Public_PersonasSearch', selector: 'public_personassearch' },
        { ref: 'tbss_Treasury_Bienes_ServsSearch', selector: 'treasury_bienes_servssearch' },
        { ref: 'oas_Operations_ActividadesSearch', selector: 'operations_actividadessearch' },
    ],

	init: function(application) {
		this.control({
			'treasury_contratosbrowse': { beforerender: this.tcb_BeforeRender, close: this.tcb_Close, },
			'treasury_contratosbrowse #opc_id': { change: this.tcb_opc_idChange, },
			'treasury_contratosbrowse #btnNew': { click: this.tcb_btnNewClick, },
			'treasury_contratosbrowse #btnModify': { click: this.tcb_btnModifyClick, },
			'treasury_contratosbrowse #btnQuery': { click: this.tcb_btnQueryClick, },
			'treasury_contratosbrowse #btnPrinter': { },
			'treasury_contratosbrowse #btnSales': { click: this.tcb_btnSalesClick, },
			'treasury_contratosbrowse #btnPers_search': { click: this.tcb_btnPers_searchClick, },
			'treasury_contratosbrowse #bscat_id': { change: this.tcb_bscat_idChange, },
			'treasury_contratosbrowse actioncolumn#acTC': { click: this.tcb_acTCDownload, },
			'treasury_contratosbrowse #grdTreasury_contratos': { selectionchange: this.tcb_grdTreasury_contratosSelectionchange, },
			'treasury_contratosbrowse #mone_id': { change: this.tcb_mone_idChange, },
            'treasury_contratosbrowse #pers_ruc': { blur: this.tcb_pers_rucBlur, change: this.tcb_pers_rucChange, focus: this.tcb_pers_rucFocus, keypress: this.tcb_pers_rucKeypress, },
			'treasury_contratosbrowse #year_id': { change: this.tcb_year_idChange, },

            'treasury_contratosedit': { beforeshow: this.tce_BeforeShow, close: this.tce_Close, },
            'treasury_contratosedit #btnSave': { click: this.tce_btnSaveClick, },
            'treasury_contratosedit #btnUndo': { click: this.tce_btnUndoClick, },
            'treasury_contratosedit #btnExit': { click: this.tce_btnExitClick, },
            'treasury_contratosedit #btnActivAdd': { click: this.tce_btnActivAddClick, },
            'treasury_contratosedit #btnActivSuppress': { click: this.tce_btnActivSuppressClick, },
            'treasury_contratosedit #btnContr_pdfDelete': { click: this.tce_btnContr_pdfDeleteClick, },
            'treasury_contratosedit #btnContr_pdfDownload': { click: this.tce_btnContr_pdfDownloadClick, },
            'treasury_contratosedit #btnPers_search': { click: this.tce_btnPers_searchClick, },
            'treasury_contratosedit #btnServAdd': { click: this.tce_btnServAddClick, },
            'treasury_contratosedit #btnServSuppress': { click: this.tce_btnServSuppressClick, },
			'treasury_contratosedit #bscat_id': { change: this.tce_bscat_idChange, },
			'treasury_contratosedit #contr_estado': { change: this.tce_contr_estadoChange, },
            'treasury_contratosedit #ffiContr_pdf': { change: this.tce_ffiContr_pdfChange, },
            'treasury_contratosedit #grdActividades': { selectionchange: this.tce_grdActividadesSelectionchange, },
            'treasury_contratosedit #grdServicios': { selectionchange: this.tce_grdServiciosSelectionchange, },
			'treasury_contratosedit #pers_ruc': { blur: this.tce_pers_rucBlur, focus: this.tce_pers_rucFocus, keypress: this.tce_pers_rucKeypress, },

			'treasury_contratosrv': { beforerender: this.tcrv_BeforeRender, },
			'treasury_contratosrv #btnNew': { click: this.tcrv_btnNewClick, },
			'treasury_contratosrv #btnQuery': { click: this.tcrv_btnQueryClick, },
			'treasury_contratosrv #btnReceipts': { click: this.tcrv_btnReceiptsClick, },
			'treasury_contratosrv #btnExit': { click: this.tcrv_btnExitClick, },
			'treasury_contratosrv #grdTreasury_ventas': { selectionchange: this.tcrv_grdTreasury_ventasSelectionchange, },

			'treasury_contratossearchxinvoice': { beforerender: this.tcsxi_BeforeRender, },
			'treasury_contratossearchxinvoice #btnInvoice': { click: this.tcsxi_btnInvoiceClick, },
			'treasury_contratossearchxinvoice #btnExit': { click: this.tcsxi_btnExitClick, },
			'treasury_contratossearchxinvoice #grdTreasury_contratos': { itemdblclick: this.tcsxi_grdTreasury_contratosItemDblClick, selectionchange: this.tcsxi_grdTreasury_contratosSelectionChange, },
      	});
	},

	tcb_BeforeRender: function( component, options ) {
		fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': component.down('#opc_id'), 'menu_id': component.getMenuId() });
		fexttre_bienes_servs_categoriasFilter({'objeto': component.down('#bscat_id'), 'bscat_type': '2', 'type_record': 'combo'});

		var _storeTC = Ext.create('Siace.store.treasury.Contratos');
		var _grdTC = component.down('#grdTreasury_contratos'); var _pagTC = component.down('#pagTreasury_contratos');
		_grdTC.bindStore(_storeTC);  _pagTC.bindStore(_storeTC);
		_storeTC.sort('contr_fechaini', 'ASC'); _storeTC.pageSize = 500;
		_storeTC.on('beforeload', function(store, operations, eoptions) {
			component.down('#btnModify').disable(); component.down('#btnQuery').disable(); component.down('#btnSales').disable();

		    store.getProxy().setExtraParam('xxYear_id', component.down('#year_id').getValue());
		    store.getProxy().setExtraParam('xxBscat_id', component.down('#bscat_id').getValue());
		    store.getProxy().setExtraParam('xxMone_id', component.down('#mone_id').getValue());
		    store.getProxy().setExtraParam('xxPers_ruc', component.down('#pers_ruc').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		}); _storeTC.load();
	},

	tcb_Close: function( component, options ) {
		if ( this.getPps_Public_PersonasSearch() !== undefined ) { this.getPps_Public_PersonasSearch().close();  this.getPps_Public_PersonasSearch().destroy(); }
	},

	tcb_Clean: function(poComponent) {
		var _pag = poComponent.down('#pagTreasury_contratos'); var _store = _pag.getStore();
		fext_gridClean(_store, _pag);

		poComponent.down('#btnModify').disable(); poComponent.down('#btnQuery').disable(); poComponent.down('#btnAnnular').disable(); poComponent.down('#btnPrinter').disable(); poComponent.down('#btnSales').disable();
	},

	tcb_viewEdit: function(pcTypeEdit, poComponent){		
	    if ( fjsIn_array(pcTypeEdit, ['2','3']) ) {
	    	var _record = poComponent.down('#grdTreasury_contratos').getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }
	    }

		Ext.get(poComponent.getEl()).mask(translations.mensaje_esperar, 'loading');
	    var _win = Ext.create('Siace.view.treasury.ContratosEdit');
	    _win.setTypeEdit(pcTypeEdit); _win.setCallStore(poComponent.down('#grdTreasury_contratos').getStore());
	    if ( fjsIn_array(pcTypeEdit, ['2','3']) ) { _win.setCallKey(_record.data.contr_key); }
	    _win.show();
	    Ext.get(poComponent.getEl()).unmask();
	},

	tcb_opc_idChange: function(combo, newValue, oldValue, options) {
		combo.up('panel').down('#btnNew').setDisabled(fextpub_uamoButtons(combo, 1));
	},

	tcb_btnNewClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 1) ) { return false; } this.tcb_viewEdit('1', button.up('panel'));
	},

	tcb_btnModifyClick: function(button, e, options) {
        if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 2) ) { return false; } this.tcb_viewEdit('2', button.up('panel'));
	},

	tcb_btnQueryClick: function(button, e, options) {
        if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 3) ) { return false; } this.tcb_viewEdit('3', button.up('panel'));
	},

	tcb_btnSalesClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 4096) ) { return false; }
		var _panel = button.up('panel');
	    Ext.get(_panel.getEl()).mask(translations.mensaje_esperar, 'loading');
    	var _record = _panel.down('#grdTreasury_contratos').getSelectionModel().getSelection()[0];
        if ( !_record ) { return false; }

	    var _win = Ext.create('Siace.view.treasury.ContratosRV');
	    _win.setIconCls('icon_Venta'); _win.setTitle(translations.treasury_contratosrv_title);
	    _win.setCallKey(_record.data.contr_key);  _win.show();
	    Ext.get(_panel.getEl()).unmask();
	},

	tcb_btnPers_searchClick: function(button, e, options) {
		fext_windowSearch(this.getPps_Public_PersonasSearch(), button.up('panel'), 'Siace.view.public.PersonasSearch', translations.public_personassearch_title, button.up('panel').down('#pers_key').getValue(), '', '', false);
	},

	tcb_acTCDownload: function(grid, cell, row, col, e, record, t) {
		if ( record.data.contr_pdf == '' ) {
			var _win = Ext.create('Siace.view.dataGeneral.WindowFileUpload');
			_win.setTypeFile(/pdf/);
			_win.setTypeMessage('[PDF]');
			_win.setSizeMax(1048576);
			_win.setSizeMessage('1 MB');
			_win.setCallStore(grid.getStore());
			_win.setSchemaTable('treasury.contratos');
			_win.setTableField('contr_key');
			_win.setRecordKey(record.data.contr_key);
			_win.setRecordField('contr_pdf');
			_win.setTable('treasury_contratos');
			_win.setField('pdf');
			_win.down('#documento').setValue(record.data.contr_documento);
			_win.show();
		} else {
			var _src = 'php/resources/download_file.php?xxSchema_table=treasury.contratos&xxTable_field=contr_key&xxRecord_key=' + record.data.contr_key + '&xxRecord_field=contr_pdf&xxTable=treasury_contratos&xxField=pdf';
			fext_FileDownload(undefined, _src);
		}
	},

	tcb_bscat_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.tcb_Clean(combo.up('panel')); }
	},

	tcb_grdTreasury_contratosSelectionchange: function(model, record, options) {			
		if ( record.length == 1 ) {
			var _panel = model.view.panel.up('panel'); var _cboOpc_id = _panel.down('#opc_id'); _flga = record[0].data.contr_flga;
			_panel.down('#btnModify').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 2));
			_panel.down('#btnQuery').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 3));
			_panel.down('#btnPrinter').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 8));
			_panel.down('#btnSales').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 4096));
		}
	},

	tcb_mone_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.tcb_Clean(combo.up('panel')); }
	},

	tcb_pers_rucBlur: function(textfield, The, options) {
		this.tcb_pers_rucSearch('0', textfield.up('panel'));
	},

	tcb_pers_rucChange: function(textfield, newValue, oldValue, options) {
		this.tcb_Clean(textfield.up('panel'));
	},

	tcb_pers_rucFocus: function(textfield, The, options) {
		this.tcb_pers_rucSearch('1', textfield.up('panel'));
	},

	tcb_pers_rucKeypress: function(textfield, e, options) {
		if( e.getCharCode() == 13 ) { this.tcb_pers_rucSearch('13', textfield.up('panel')); }
	},

	tcb_pers_rucSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['pers_key', 'PERS_RUC', 'pers_ruc', 'pers_nombre'], 
			            ['php/public_personas_json_records.php', 'xxPers_ruc', 'textfield_search', ''], '', '');
	},

	tcb_year_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.tcb_Clean(combo.up('panel')); }
	},

	tce_BeforeShow: function(component, options) {
		var _typeEdit = component.getTypeEdit();
		fexttre_bienes_servs_categoriasFilter({'objeto': component.down('#bscat_id'), 'bscat_type': '2', 'type_record': 'combo', 'add_blank': 'NO', 'disabled': (_typeEdit == '3' ? true : false), 'setValue': (_typeEdit == '1' ? true : false)});

		var _grdServicios = component.down('#grdServicios');
		var _storeServicios = Ext.create('Siace.store.treasury.Contratos_Det');
		_grdServicios.bindStore(_storeServicios); _storeServicios.pageSize = 500;
		_storeServicios.on('beforeload', function(store, operations, eoptions) {
			component.down('#btnServSuppress').disable();
		    store.getProxy().setExtraParam('xxTablex', '106');
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    //store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});

		var _grdActividades = component.down('#grdActividades');
		var _storeActividades = Ext.create('Siace.store.treasury.Contratos_Det');
		_grdActividades.bindStore(_storeActividades);
		_storeActividades.sort('tablex_codigo', 'ASC'); _storeActividades.pageSize = 500;
		_storeActividades.on('beforeload', function(store, operations, eoptions) {
			component.down('#btnActivSuppress').setDisabled(true);
			store.getProxy().setExtraParam('xxTablex', '308');
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});

        if ( _typeEdit == '1' ) {
        	var _icon = 'icon_New_90'; var _title = translations.treasury_contratosedit_title_new;
        	component.down('#bscat_id').setValue(14);
        } else if ( fjsIn_array(_typeEdit, ['2','3']) ) {
	        var _form = component.down('form');
	   		_form.load({
	   			method: 'POST', url: 'php/treasury_contratos_json_records.php',
	            params: { xxContr_key: component.getCallKey(),  xxType_record: 'form' },
	            waitMsg: 'Loading...',
	            success: function (form, action) {
	                try {
	                    var _model = Ext.create('Siace.model.treasury.Contrato');
	                    var _result = Ext.decode(action.response.responseText);
	                    if ( _result.data[0] ) {
	                        _model.set(_result.data[0]);  _form.loadRecord(_model);

							component.down('#contr_estado').setValue( _model.data.contr_estado == '1' ? true : false);
        					if ( _model.data.contr_pdf !== '' ) {
        						component.down('#btnContr_pdfDownload').setDisabled(false);
        						if ( _typeEdit == '2' ) { component.down('#ffiContr_pdf').hide(); component.down('#btnContr_pdfDelete').show(); }
        					}

        					component.down('#grdServicios').getStore().load({
        						params: { xxContr_key: component.getCallKey(), xxTablex_doc: '1', xxType_record: 'form' }
        					});
        					component.down('#grdActividades').getStore().load({
        						params: { xxContr_key: component.getCallKey(), xxTablex_doc: '2', xxType_record: 'form' }
        					});
	                    }
	                }
	                catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
	            },
	            failure: function (form, action) { Ext.Msg.alert("Load failed", action.result.errorMessage); }
	        });

        	if ( _typeEdit == '2' ) { 
        		var _icon = 'icon_Modify_90'; var _title = translations.treasury_contratosedit_title_modify; 
        	} else { 
        		var _icon = 'icon_Query_90'; var _title = translations.treasury_contratosedit_title_query; 
				component.down('#bscat_id').disable(); component.down('#year_id').disable(); component.down('#contr_nro').disable(); //component.down('#contr_fecha').disable();
				component.down('#contr_fechaini').disable(); component.down('#contr_fechafin').disable(); component.down('#ffiContr_pdf').disable();
				component.down('#pers_ruc').disable(); component.down('#btnPers_search').disable(); component.down('#unimed_id').disable(); //component.down('#contr_observ').setdisable();
				component.down('#btnServAdd').disable();  component.down('#btnActivAdd').disable(); 
				component.down('#btnSave').disable(); component.down('#btnUndo').disable(); component.down('#btnExit').enable();
        	}
        }
        component.setIconCls(_icon); component.setTitle(_title);
	},

	tce_Close: function(panel, options) {
		if ( this.getPps_Public_PersonasSearch() !== undefined ) { this.getPps_Public_PersonasSearch().close(); this.getPps_Public_PersonasSearch().destroy(); }
		if ( this.getTbss_Treasury_Bienes_ServsSearch() !== undefined ) { this.getTbss_Treasury_Bienes_ServsSearch().close();  this.getTbss_Treasury_Bienes_ServsSearch().destroy(); }
		if ( this.getOas_Operations_ActividadesSearch() !== undefined ) { this.getOas_Operations_ActividadesSearch().close();  this.getOas_Operations_ActividadesSearch().destroy(); }
	},

	tce_btnSaveClick: function(button, e, options) {
	    var _win = button.up('window'); var _frm = _win.down('form');
	    if ( _win.down('#bscat_id').getValue() == '' || _win.down('#bscat_id').getValue()*1 <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar la CATEGORIA del contrato', function() { _win.down('#bscat_id').focus(); }); return false ; }
	    if ( _win.down('#year_id').getValue() == '' || _win.down('#year_id').getValue()*1 <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el AÑO', function() { _win.down('#year_id').focus(); }); return false ; }
	    if ( _win.down('#contr_nro').getValue() == '' || _win.down('#contr_nro').getValue()*1 <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar NUMERO del contrato', function() { _win.down('#contr_nro').focus(); }); return false ; }
	    //if ( _win.down('#contr_fecha').getRawValue() == '' ) {
	    //	Ext.Msg.alert(translations.mensaje, 'Debe indicar el FECHA del contrato', function() { _win.down('#contr_fecha').focus(); }); return false ; }
	    if ( _win.down('#pers_key').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el CLIENTE del contrato', function() { _win.down('#pers_ruc').focus(); }); return false ; }
	    if ( _win.down('#contr_fechaini').getRawValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el FECHA INICIAL del contrato', function() { _win.down('#contr_fechaini').focus(); }); return false ; }
	    if ( _win.down('#contr_fechafin').getRawValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el FECHA FINAL del contrato', function() { _win.down('#contr_fechafin').focus(); }); return false ; }
		if ( !_win.down('#contr_fechaini').isValid() ) {
			Ext.Msg.alert(translations.mensaje, 'Fecha Inicial NO es Válida', function() { _win.down('#contr_fechaini').focus(); }); return false ; }
		if ( !_win.down('#contr_fechafin').isValid() ) {
			Ext.Msg.alert(translations.mensaje, 'Fecha Final NO es Válida', function() { _win.down('#contr_fechafin').focus(); }); return false ; }
	    if ( _win.down('#unimed_id').getValue() == '' || _win.down('#unimed_id').getValue() <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el Periodo del contrato', function() { _win.down('#unimed_id').focus(); }); return false ; }

		var _servicios = ''; var _actividades = '';
		var _recordsServicios = _win.down('#grdServicios').getStore().getRange();
		for ( var _i = 0;  _i < _recordsServicios.length; _i++ ){
			_servicios += (_i == 0 ? '' : ',') + '{' + _recordsServicios[_i].get('tablex_id') + ',' +_recordsServicios[_i].get('contrdet_preuni')+ '}';
		}
		if ( _servicios == '' ) { Ext.Msg.alert(translations.mensaje, 'Debe seleccionar por lo menos un SERVICIO para el contrato', function() { _frm.down('#btnServAdd').focus(); }); return false ; }
		
		if ( _win.down('#bscat_id').getValue() == '14' ) {
			var _recordsActividades = _win.down('#grdActividades').getStore().getRange();
			for ( var _j = 0;  _j < _recordsActividades.length; _j++ ) {
				_actividades += (_j == 0 ? '' : ',') + '{' + _recordsActividades[_j].get('tablex_id') + ',0}';
			}
			if ( _actividades == '' ) { Ext.Msg.alert(translations.mensaje, 'Debe seleccionar por lo menos una ACTIVIDAD para el contrato', function() { _frm.down('#btnActivAdd').focus(); }); return false ; }
		} else {
			_actividades = '{0,0}';
		}

	    if ( _frm.getForm().isValid() ) {
			Ext.Msg.confirm(translations.confirmar, translations.mensaje_pregunta_guardar, function(btn){
			if ( btn == 'yes' ) {
				var _vs = fextpub_sessionVariables();
			    _frm.getForm().submit({
					method: 'POST', url: 'php/treasury_contratos_save.php',
					params:{ xx0005: 'YES', xxBscat_id: _win.down('#bscat_id').getValue(), xxMone_id: _win.down('#mone_id').getValue(), xxContr_monto: _win.down('#contr_monto').getValue(), xxServicios: _servicios, xxActividades: _actividades,
							 zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
		            waitTitle: translations.valida_titulo, waitMsg: translations.valida_mensaje01,
			        success: function(form, action) {
			            var result = Siace.util.Util.decodeJSON(action.response.responseText);
			            if ( result.success ) {
			               	//Siace.util.Alert.msg('Success!', 'User saved.');
			               	if ( _win.getCallStore() !== '' ) { _win.getCallStore().load(); }
			                _win.close();
			            } else { Siace.util.Util.showErrorMsg(result.msg); }
			        },
			        failure: function(form, action) { Siace.util.Util.showErrorMsg(action.response.responseText); }
			    });
			}});
	    }
	},

	tce_btnUndoClick: function(button, e, options) {
		button.up('window').close();
	},

	tce_btnExitClick: function(button, e, options) {
		button.up('window').close();
	},

	tce_btnActivAddClick: function(button, e, options) {
		fext_windowSearch(this.getOas_Operations_ActividadesSearch(), button.up('window'), 'Siace.view.operations.ActividadesSearch', translations.operations_actividadessearch_title, '', 'ONLY_PARENT', 'ADD_CONTRATOS', false);
	},

	tce_btnActivSuppressClick: function(button, e, options) {
		var _record = this.getTce_grdAtividades().getSelectionModel().getSelection()[0];
        if ( _record ) {
        	button.setDisabled(true);
        	this.getTce_grdActividades().getStore().remove(_record);
		}
	},

	tce_btnActivSuppressClick: function(button, e, options) {
		//var _selection = this.getave_grdtreasury_Ventas_Det().getView().getSelectionModel().getSelection()[0]; // este metodo tambien sirve
		var _win = button.up('window');
		var _record = _win.down('#grdServicios').getSelectionModel().getSelection()[0];
        if ( _record ) {
        	button.disable();
        	_win.down('#grdServicios').getStore().remove(_record);
        	
        	var _contr_monto = fjsRound(_win.down('#contr_monto').getValue()*1 - _record.data.contrdet_preuni*1, 2);
        	_win.down('#contr_monto').setValue(_contr_monto);
         	if ( _contr_monto <= 0  ) { _win.down('#bscat_id').enable(); }
		}
	},

	tce_btnContr_pdfDeleteClick: function(button, e, options) {
		var _win = button.up('window');
		_win.down('#ffiContr_pdf').reset();
		_win.down('#Contr_pdf').setValue('');
		_win.down('#ffiContr_pdf').show(); button.hide(); _win.down('#btnContr_pdfDownload').setDisabled(true);
    },

	tce_btnContr_pdfDownloadClick: function(button, e, options) {
		var _file = button.up('window').down('#ffiContr_pdf').fileInputEl.dom.files[0];
		var _src = 'php/resources/download_file.php?xxTable=treasury_contratos&xxField=pdf&xxFile_name=' + button.up('window').down('#contr_key').getValue() +'_'+ button.up('window').down('#contr_pdf').getValue();
		fext_FileDownload(_file, _src);
	},

	tce_btnPers_searchClick: function(button, e, options) {
		fext_windowSearch(this.getPps_Public_PersonasSearch(), button.up('window'), 'Siace.view.public.PersonasSearch', translations.public_personassearch_title_cliente, button.up('window').down('#pers_key').getValue(), 'ONLY_WITH_RUC', '', false);
	},

	tce_btnServAddClick: function(button, e, options) {
		var _typeQuery = (button.up('window').down('#bscat_id').getValue() == '14' ? 'ADD_CONTRATOS_CCU' : 'ADD_CONTRATOS_OC');
		fext_windowSearch(this.getTbss_Treasury_Bienes_ServsSearch(), button.up('window'), 'Siace.view.treasury.Bienes_ServsSearch', translations.treasury_bienes_servsssearch_title_cu, '', _typeQuery, 'ADD_CONTRATOS', false);
	},

	tce_btnServSuppressClick: function(button, e, options) {
		var _win = button.up('window');
		var _record = _win.down('#grdServicios').getSelectionModel().getSelection()[0];
        if ( _record ) {
        	button.disable();
        	_win.down('#grdServicios').getStore().remove(_record);
        	var _contr_monto = fjsRound(_win.down('#contr_monto').getValue()*1 - _record.data.contrdet_preuni*1, 2);
        	_win.down('#contr_monto').setValue(_contr_monto);
         	if ( _contr_monto <= 0  ) { _win.down('#bscat_id').enable(); }
		}
	},

	tce_bscat_idChange: function(combo, newValue, oldValue, options) {
		combo.up('window').down('#panActividades').setDisabled( newValue == '14' ? false : true);
	},

	tce_contr_estadoChange: function(checkbox, newValue, oldValue, options) {
		fext_removeAddCls(checkbox.up('window').down('#lblContr_estado'), newValue == true ? 'lbl00303' : 'lbl00003', newValue == true ? 'lbl00003' : 'lbl00303');
	},

	tce_ffiContr_pdfChange: function(filefield, value, options) {
		var _win = filefield.up('window');
		fext_FileReader(filefield, /pdf/, '[PDF]', 1048576, '1 MB', _win.down('#btnContr_pdfDelete'), _win.down('#btnContr_pdfDownload'));
	},

	tce_grdActividadesAdd: function(poComponent, record, arrayAdd) {
        var _store = poComponent.down('#grdActividades').getStore();
		var _model = _store.findRecord('activ_id', record.data.activ_id);
		_close = false;
        if ( _model == null ) {
			_close = true;
	    	_store.add({
	    		tablex_doc: 2,
	       		tablex_id: record.data.activ_id,
	       		tablex_codigo: record.data.activ_codigo,
	        	tablex_nombre: record.data.activ_nombre,
	   		});
	   	} else {
	    	Ext.Msg.alert(translations.mensaje, 'servicio seleccionado ya se encuentra establecido');
	  	}

		return _close;
	},

	tce_grdServiciosAdd: function(poComponent, record, arrayAdd) {
        var _store = poComponent.down('#grdServicios').getStore();
		var _model = _store.findRecord('tablex_id', record.data.bs_id);
		_close = false;
        if ( _model == null ) {
        	var _monto = poComponent.down('#contr_monto').getValue();
        	if ( _monto*1 > 0 ) {
        		if ( record.data.mone_id !== poComponent.down('#mone_id').getValue() ) {
					Ext.Msg.alert(translations.mensaje, 'moneda de servicio seleccionado es diferente al establecido en el contrato'); return false; }
        	} else {
        		poComponent.down('#bscat_id').disable();
        		poComponent.down('#mone_id').setValue(record.data.mone_id);
        	}
        	poComponent.down('#contr_monto').setValue( fjsRound(poComponent.down('#contr_monto').getValue()*1 + record.data.bs_importe, 2) );
			_close = true;
	    	_store.add({
	    		tablex_doc: 1,
	       		tablex_id: record.data.bs_id,
	       		tablex_codigo: record.data.bs_codigo,
	        	tablex_nombre: record.data.bs_nombre,
	        	unimed_abrev: record.data.unimed_abrev,
	        	contrdet_preuni: record.data.bs_importe,
	   		});
	   	} else {
	    	Ext.Msg.alert(translations.mensaje, 'servicio seleccionado ya se encuentra establecido');
	  	}

		return _close;
	},

	tce_grdActividadesSelectionchange: function(model, record, options) {
		var _win = model.view.panel.up('window');
		if ( record.length == 1 && fjsIn_array(_win.getTypeEdit,['1','2']) ) {
			_win.down('#btnActivSuppress').enable();
		}
	},

	tce_grdServiciosSelectionchange: function(model, record, options) {
		var _win = model.view.panel.up('window');
		if ( record.length == 1 && fjsIn_array(_win.getTypeEdit(),['1','2']) ) {
			_win.down('#btnServSuppress').enable();
		}
	},

	tce_pers_rucBlur: function(textfield, e, options) {
		this.tce_pers_rucSearch('0', textfield.up('form'));
	},

	tce_pers_rucFocus: function(textfield, e, options) {
		this.tce_pers_rucSearch('1', textfield.up('form'));
	},

	tce_pers_rucKeypress: function(textfield, e, options) {
		if( e.getCharCode() == 13 ) { this.tce_pers_rucSearch('13', textfield.up('form')); }
	},

	tce_pers_rucSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['pers_key', 'PERS_RUC', 'pers_ruc', 'pers_nombre'],
			            ['php/public_personas_json_records.php', 'xxPers_ruc', 'textfield_search', ''], '1',
			            ['Siace.view.public.PersonasEdit', translations.public_personasedit_title_new, ['pers_ruc'], ''], '');
	},

	/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
	tcrv_BeforeRender: function(component, options) {
		var _store = Ext.create('Siace.store.treasury.Ventas');
		var _grid = component.down('#grdTreasury_ventas');
		var _pagingtoolbar = component.down('#pgtTreasury_ventas');
		_grid.bindStore(_store);  _pagingtoolbar.bindStore(_store);
		_store.sort('vent_documento', 'DESC');
		_store.on('beforeload', function(store, operations, eOpts) {
			component.down('#btnQuery').disable(); component.down('#btnReceipts').disable();

		    store.getProxy().setExtraParam('xxRef_tablex', '103');
		    store.getProxy().setExtraParam('xxRef_tablex_id', component.down('#contr_id').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'grid_referencias');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});
		_store.pageSize = 500;

        //console.log(_grid.getView());
		//console.log(_grid.columns[0].select('.x-grid3-header'));
		var _form = component.down('form');
	   	_form.load({
	   		method: 'POST', url: 'php/treasury_contratos_json_records.php',
	        params: { xxContr_key: component.getCallKey(),  xxType_record: 'window', xxOrder_by: 'contr_key' },
	        waitMsg: 'Loading...',
	        success: function (form, action) {
	            try {
	                var _model = Ext.create('Siace.model.treasury.Contrato');
					var _result = Ext.decode(action.response.responseText);
	                if ( _result.data[0] ) {
	                    _model.set(_result.data[0]);  _form.loadRecord(_model);
	                    //component.down('#contr_monto').setFieldLabel('Importe ('+_result.data[0].mone_abrev+')');
	                    component.down('#contr_monto').setValue(_result.data[0].mone_abrev+' '+fjsFormatNumeric(_result.data[0].contr_monto,2));
	                    component.down('#contr_periodo').setValue(fjsDateDDMMAAAA(_result.data[0].contr_fechaini) +' \xa0 al \xa0 '+ fjsDateDDMMAAAA(_result.data[0].contr_fechafin));
	                    _store.load();
	                }
                }
                catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
            },
            failure: function (form, action) {
                Ext.Msg.alert("Load failed", action.result.errorMessage);
            }
        });
	},

	tcrv_ViewEdit: function(pcTypeEdit, poWindow){
		if ( pcTypeEdit == '1' ) {
		} else if ( fjsIn_array(pcTypeEdit, ['2','3']) ) {
	    	var _record = this.getTcrv_grdPublic_Usuarios_Accesos().getSelectionModel().getSelection();
	        if ( _record.length !== 1 ) { return false; }
	    }

		Ext.get(poWindow.getEl()).mask(translations.mensaje_esperar, 'loading');
	    var _win = Ext.create('Siace.view.public.Usuarios_AccesosEdit');
	    _win.setTypeEdit(pcTypeEdit); _win.setCallStore(this.getTcrv_grdPublic_Usuarios_Accesos().getStore());
	    if ( fjsIn_array(pcTypeEdit, ['2','3']) ) { _win.setCallKey(_record[0].data.usuracce_key); }
	    _win.down('#usur_key').setValue(poWindow.getCallKey());  _win.show();
	    Ext.get(poWindow.getEl()).unmask();
	},

	tcrv_btnNewClick: function(button, e, options) {
		//this.tcrv_ViewEdit('1', button.up('window'));
	},

	tcrv_btnQueryClick: function(button, e, options) {
	    var _record = this.getTcrv_grdTreasury_Ventas().getSelectionModel().getSelection();
	    if ( _record.length !== 1 ) { return false; }

		Ext.get(button.up('window').getEl()).mask(translations.mensaje_esperar, 'loading');
	    var _win = Ext.create('Siace.view.treasury.VentasEdit');
	    _win.setTypeEdit(3);  _win.setCallKey(_record[0].data.vent_key); _win.show();
	    Ext.get(button.up('window').getEl()).unmask();
	},

	tcrv_btnReceiptsClick: function(button, e, options) {
	    Ext.get(button.up('panel').getEl()).mask(translations.mensaje_esperar, 'loading');

    	var _record = this.getTcrv_grdTreasury_Ventas().getSelectionModel().getSelection();
        if ( _record.length !== 1 ) { return false; }

	    var _win = Ext.create('Siace.view.treasury.VentasRI');
	    _win.setIconCls('icon_Receipts'); _win.setTitle(translations.treasury_ventasri_title);
	    _win.setCallKey(_record[0].data.vent_key);  _win.show();
	    Ext.get(button.up('panel').getEl()).unmask();
	},

	tcrv_btnExitClick: function(button, e, options) {
		button.up('window').close();
	},

	tcrv_grdTreasury_ventasSelectionchange: function(model, record, options) {			
		if ( record.length == 1 ) {
			var _panel = this.getTcrv_grdTreasury_Ventas().up('panel');
			_panel.down('#btnQuery').enable();
			_panel.down('#btnReceipts').enable();
		}
	},

	/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	tcsxi_BeforeRender: function( component, options ) {
		var _store = Ext.create('Siace.store.treasury.Contratos');
		var _grid = component.down('#grdTreasury_contratos'); var _pagtool = component.down('#pgtTreasury_contratos');
		_grid.bindStore(_store);  _pagtool.bindStore(_store);
		_store.sort('tablex_fechaini', 'ASC'); _store.pageSize = 500;
		_store.on('beforeload', function(store, scope, options) {
			component.down('#btnInvoice').disable();

		    store.getProxy().setExtraParam('xxType_record', 'grid_generate_invoices');
		    store.getProxy().setExtraParam('xxType_query', component.getTypeQuery());
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		}); _store.load();
	},

	tcsxi_btnInvoiceClick: function(button, e, options) {
		var _win = button.up('window');
		var _grid = _win.down('#grdTreasury_contratos');
        var _record = _grid.getSelectionModel().getSelection()[0];
        var _close = true;

        if ( _record ) {
  		    _close = Siace.app.getController('treasury.Ventas').tvb_ContratoInvoice(_win.getCallWindow(), _record.data.contr_key);
        	if ( _close ) { _win.close(); }
		}
	},

	tcsxi_btnExitClick: function(button, e, options) {
		button.up('window').close();
	},

	tcsxi_grdTreasury_contratosItemDblClick: function(component, record, item, index, e, options) {
		var _btnInvoice = component.up('window').down('#btnInvoice');
        _btnInvoice.fireEvent('click', _btnInvoice, e, options);
	},

	tcsxi_grdTreasury_contratosSelectionChange: function(model, record, options) {
		if ( record.length == 1 ) { var _win = model.view.panel.up('window'); _win.down('#btnInvoice').enable(); }
	},
});