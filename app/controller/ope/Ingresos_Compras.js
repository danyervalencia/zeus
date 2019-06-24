Ext.define('Siace.controller.operations.Ingresos_Compras', {
	extend: 'Ext.app.Controller',
	views: [ 'operations.Ingresos_ComprasBrowse',  ],
    refs: [
        { ref: 'pps_Public_PersonasSearch', selector: 'public_personassearch' },
    ],

	init: function(application) {
		this.control({
			'operations_ingresos_comprasbrowse': { beforerender: this.oicb_BeforeRender, },
			'operations_ingresos_comprasbrowse #opc_id': { change: this.oicb_opc_idChange, },
			'operations_ingresos_comprasbrowse #btnNew': { click: this.oicb_btnNewClick, },
			'operations_ingresos_comprasbrowse #btnModify': { click: this.oicb_btnModifyClick, },
			'operations_ingresos_comprasbrowse #btnQuery': { click: this.oicb_btnQueryClick, },
            'operations_ingresos_comprasbrowse #btnImpor_search': { click: this.oicb_btnImpor_searchClick },
			'operations_ingresos_comprasbrowse actioncolumn#acOperations_ingresos_compras': { click: this.orib_grdOperations_ingresos_comprasRecordActionCLick, },
            'operations_ingresos_comprasbrowse #alma_key': { change: this.oicb_alma_keyChange, },
            'operations_ingresos_comprasbrowse #doc_id': { change: this.oicb_doc_idChange, },
			'operations_ingresos_comprasbrowse #fechafin': { change: this.oicb_fechafinChange, },
			'operations_ingresos_comprasbrowse #fechaini': { change: this.oicb_fechainiChange, },
			'operations_ingresos_comprasbrowse #grdOperations_ingresos_compras': { selectionchange: this.oicb_grdOperations_ingresos_comprasSelectionchange, },
			'operations_ingresos_comprasbrowse #impor_ruc': { blur: this.oicb_impor_rucBlur, change: this.oicb_impor_rucChange, focus: this.oicb_impor_rucFocus, keypress: this.oicb_impor_rucKeypress, },
			'operations_ingresos_comprasbrowse #ingcomp_nro': { change: this.oicb_ingcomp_nroChange, },
			'operations_ingresos_comprasbrowse #ingcomp_serie': { change: this.oicb_ingcomp_serieChange, },

			'operations_ingresos_comprasedit': { beforeshow: this.oice_BeforeShow, close: this.oice_Close, },
            'operations_ingresos_comprasedit #btnSave': { click: this.oice_btnSaveClick, },
            'operations_ingresos_comprasedit #btnUndo': { click: this.oice_btnUndoClick, },
            'operations_ingresos_comprasedit #btnExit': { click: this.oice_btnExitClick, },
            'operations_ingresos_comprasedit #btnAdd': { click: this.oice_btnAddClick, },
            'operations_ingresos_comprasedit #btnSuppress': { click: this.oice_btnSuppressClick, },
            'operations_ingresos_comprasedit #btnIngcomp_pdfDownload': { click: this.oice_btnIngcomp_pdfDownloadClick, },
            'operations_ingresos_comprasedit #btnIngcomp_pdfDelete': { click: this.oice_btnIngcomp_pdfDeleteClick, },
            'operations_ingresos_comprasedit #ffiIngcomp_pdf': { change: this.oice_ffiIngcomp_pdfChange, },
            'operations_ingresos_comprasedit #btnPers_search': { click: this.oice_btnPers_searchClick, },
            'operations_ingresos_comprasedit #btnImpor_search': { click: this.oice_btnImpor_searchClick },
			'operations_ingresos_comprasedit #grdoperations_ingresos_compras_det': { selectionchange: this.oice_grdOperations_ingresos_compras_detSelectionchange, },
			//'operations_ingresos_comprasedit #panDetalle': { activate: this.oice_panDetalleActivate, },
			//'operations_ingresos_comprasedit #panDet_referencias': { activate: this.oice_panDet_referenciasActivate, },
			'operations_ingresos_comprasedit #impor_ruc': { blur: this.oice_impor_rucBlur, focus: this.oice_impor_rucFocus, keypress: this.oice_impor_rucKeypress, },
			'operations_ingresos_comprasedit #pers_ruc': { blur: this.oice_pers_rucBlur, focus: this.oice_pers_rucFocus, keypress: this.oice_pers_rucKeypress, },

            'operations_ingresos_comprasedit #btnRegadua_pdfDelete': {
            	click: this.orae_btnRegadua_pdfDeleteClick,
            },
            'operations_ingresos_comprasedit #btnRegadua_pdfDownload': {
            	click: this.orae_btnRegadua_pdfDownloadClick,
            },
            'operations_ingresos_comprasedit #ffiRegadua_pdf': {
                change: this.orae_ffiRegadua_pdfChange,
            },            
		});
	},

	oicb_BeforeRender: function(component, options) {
		fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': component.down('#opc_id'), 'menu_id': component.getMenuId() });
		fextope_almacenesFilter({'objeto': component.down('#alma_key'), 'add_blank': (Ext.getCmp('ah_txtAlma_key').getValue() == '' ? 'YES' : 'NO')});
		fextpub_documentosFilter({'objeto': component.down('#doc_id'), 'doc_esexportar': '1', 'type_record': 'combo_abrev'})

		var _store = Ext.create('Siace.store.operations.Ingresos_Compras');
		var _grid = component.down('#grdOperations_ingresos_compras'); var _pag = component.down('#pagOperations_ingresos_compras');
		_grid.bindStore(_store);  _pag.bindStore(_store);
		_store.sort('ingcomp_fecha', 'DESC'); _store.pageSize = 500;
		_store.on('beforeload', function(store, operations, eOpts) {
			component.down('#btnModify').disable(); component.down('#btnQuery').disable(); component.down('#btnDelete').disable();

		    store.getProxy().setExtraParam('xxAlma_key', component.down('#alma_key').getValue());
		    store.getProxy().setExtraParam('xxDoc_id', component.down('#doc_id').getValue());
		    store.getProxy().setExtraParam('xxIngcomp_serie', component.down('#ingcomp_serie').getValue());
		    store.getProxy().setExtraParam('xxIngcomp_nro', component.down('#ingcomp_nro').getValue());
		    store.getProxy().setExtraParam('xxImpor_ruc', component.down('#impor_ruc').getValue());
		    store.getProxy().setExtraParam('xxFechaini', component.down('#fechaini').getSubmitData());
		    store.getProxy().setExtraParam('xxFechafin', component.down('#fechafin').getSubmitData());
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});
	},

	oicb_Clean: function(poComponent) {
		var _pag = poComponent.down('#pagOperations_ingresos_compras'); var _store = _pag.getStore();
		fext_gridClean(_store, _pag);

		poComponent.down('#btnModify').disable(); poComponent.down('#btnQuery').disable(); poComponent.down('#btnDelete').disable();
	},

	oicb_ViewEdit: function(poComponent, pcTypeEdit){
		if ( fjsIn_array(pcTypeEdit, ['1']) ) {
		} else if ( fjsIn_array(pcTypeEdit, ['2','3']) ) {
	    	var _record = poComponent.down('#grdOperations_ingresos_compras').getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }
	    }

		Ext.get(poComponent.getEl()).mask(translations.mensaje_esperar, 'loading');
	    var _win = Ext.create('Siace.view.operations.Ingresos_ComprasEdit');
	    _win.setTypeEdit(pcTypeEdit); _win.setCallStore(poComponent.down('#grdOperations_ingresos_compras').getStore());
	    if ( fjsIn_array(pcTypeEdit, ['1','11']) ) {  }
	    else if (fjsIn_array(pcTypeEdit, ['2','3'])) { _win.setCallKey(_record.data.ingcomp_key); }
	    _win.show();
	    Ext.get(poComponent.getEl()).unmask();
	},

	oicb_opc_idChange: function(combo, newValue, oldValue, options) {
		combo.up('panel').down('#btnNew').setDisabled(fextpub_uamoButtons(combo, 1));
	},

	oicb_btnNewClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 1) ) { return false; } this.oicb_ViewEdit(button.up('panel'), '1');
	},

	oicb_btnModifyClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 2) ) { return false; } this.oicb_ViewEdit(button.up('panel'), '2');
	},

	oicb_btnQueryClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 3) ) { return false; } this.oicb_ViewEdit(button.up('panel'), '3');
	},

	oicb_btnImpor_searchClick: function(button, e, options) {
		var _pan = button.up('panel');
		if ( _pan.getWinPPIS() == '' ) { _pan.setWinPPIS(Ext.create('Siace.view.public.PersonasSearch')); }
		fext_winSearch({'win': _pan.getWinPPIS(), 'callWin': _pan, 'callKey': _pan.down('#impor_key').getValue(), 'title': 'Buscar Operador', 'typeQuery': 'IMPORTADORES', 'typeReturn': 'IMPORTADORES'});

		//fext_windowSearch(this.getPps_Public_PersonasSearch(), button.up('panel'), 'Siace.view.public.PersonasSearch', translations.public_personas_search_title, button.up('panel').down('#pers_key').getValue(), '', '', true);
	},

	oicb_alma_keyChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.oicb_Clean(combo.up('panel')); }
	},

	oicb_doc_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.oicb_Clean(combo.up('panel')); }
	},

	oicb_fechafinChange: function(datefield, newValue, oldValue, options) {
		this.oicb_Clean(datefield.up('panel'));
	},

	oicb_fechainiChange: function(datefield, newValue, oldValue, options) {
		this.oicb_Clean(datefield.up('panel'));
	},

	orib_grdOperations_ingresos_comprasRecordActionCLick: function(grid, cell, row, col, e, record, t) {
		if ( record.data.ingcomp_pdf == '' ) {
			var _win = Ext.create('Siace.view.dataGeneral.WindowFileUpload');
			_win.setTypeFile(/pdf/);
			_win.setTypeMessage('[PDF]');
			_win.setSizeMax(1048576);
			_win.setSizeMessage('1 MB');
			_win.setCallStore(grid.getStore());
			_win.setSchemaTable('siace.ingresos_compras');
			_win.setTableField('ingcomp_key');
			_win.setRecordKey(record.data.ingcomp_key);
			_win.setRecordField('ingcomp_pdf');
			_win.setTable('operations_ingresos_compras');
			_win.setField('pdf');
			_win.down('#documento').setValue(record.data.ingcomp_documento);
			_win.show();
		} else {
			var _src = 'php/resources/download_file.php?xxSchema_table=siace.ingresos_compras&xxTable_field=ingcomp_key&xxRecord_key=' + record.data.ingcomp_key + '&xxRecord_field=ingcomp_pdf&xxTable=operations_ingresos_compras&xxField=pdf';
			console.log(_src);
			fext_FileDownload(undefined, _src);
		}
	},

	oicb_grdOperations_ingresos_comprasSelectionchange: function(model, record, options) {			
		if ( record.length == 1 ) {
			var _panel = model.view.panel.up('panel').up('panel'); var _cboOpc_id = _panel.down('#opc_id');
			_panel.down('#btnModify').setDisabled(fextpub_uamoButtons(_cboOpc_id, 2));
			_panel.down('#btnQuery').setDisabled(fextpub_uamoButtons(_cboOpc_id, 3));
			_panel.down('#btnDelete').setDisabled(fextpub_uamoButtons(_cboOpc_id, 7));
		}
	},

	oicb_ingcomp_nroChange: function(textfield, newValue, oldValue, options) {
		this.oicb_Clean(textfield.up('panel'));
	},

	oicb_ingcomp_serieChange: function(textfield, newValue, oldValue, options) {
		this.oicb_Clean(textfield.up('panel'));
	},

	oicb_impor_rucBlur: function(textfield, The, options) {
		this.oicb_impor_rucSearch('0', textfield.up('panel'));
	},

	oicb_impor_rucChange: function(textfield, newValue, oldValue, options) {
		this.oicb_Clean(textfield.up('panel'));
	},

	oicb_impor_rucFocus: function(textfield, The, options) {
		this.oicb_impor_rucSearch('1', textfield.up('panel'));
	},

	oicb_impor_rucKeypress: function(textfield, e, options) {
		if( e.getCharCode() == 13 ) { this.oicb_impor_rucSearch('13', textfield.up('panel')); }
	},

	oicb_impor_rucSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['impor_key', 'IMPOR_RUC', 'impor_ruc', 'impor_nombre'],
			            ['php/public_personas_json_records.php', 'xxPers_ruc', 'textfield_search', 'IMPORTADORES'], '', '');
	},

	/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
	oice_BeforeShow: function(component, options) {
		var _typeEdit = component.getTypeEdit();
		fextpub_documentosFilter({'objeto': component.down('#doc_id'), 'doc_esexportar': '1', 'add_blank': 'NO' })

		var _me = this;
		var _txtIngcomp_monto = component.down('#ingcomp_monto');
		var _storeOICD = Ext.create('Siace.store.operations.Ingresos_Compras_Det',{
	        listeners : {
	            update: function(store, record, operation, options){
	                var _monto = 0;
	                store.each(function(record){ _monto += record.get('ingcompdet_pretot'); });
	                _txtIngcomp_monto.setValue(_monto);
	                //_me.oice_CalcularVventaIgv(component);
	            }
	        }
		});

		var _ce = Ext.create('Ext.grid.plugin.CellEditing', {
			itemId: 'ceOperations_ingresos_compras_det', clicksToEdit: 1,
			listeners: {
			    edit: function(editor, e, options) {
			        var _record = (parseInt(Ext.versions.extjs.shortVersion) >= 410) ? e.record : editor.record;
			        _record.set('ingcompdet_pretot', fjsRound(_record.data.ingcompdet_cantid * _record.data.ingcompdet_preuni, 2));
			    },
			}
	    });

		var _grdOICD = component.down('#grdOperations_ingresos_compras_det');
		_ce.init(_grdOICD);
		_grdOICD.bindStore(_storeOICD);
		_grdOICD.getView().refresh();
		_storeOICD.sort('ingcompdet_item', 'ASC'); _storeOICD.pageSize = 500;
		_storeOICD.on('beforeload', function(store, operations, eOpts) {
			component.down('#btnSuppress').setDisabled(true);
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});

	    if ( fjsIn_array(_typeEdit, ['1','11']) ) {
	    	fextope_almacenesFilter({'objeto': component.down('#alma_key'), 'type_record': 'combo', 'add_blank': 'NO'});
	        var _icon = 'icon_New_90'; var _title = 'Nuego registro de compra';
	    } else if ( fjsIn_array(_typeEdit, ['2','3']) ) {
	        //fextpub_almacenesCombo(component.down('#alma_key'), true, '', '', 'combo');
	        var _form = component.down('form'); var _me = this;
	        _form.load({
	            method: 'POST', url: 'php/operations_ingresos_compras_json_records.php',
	            params: { xxIngcomp_key: component.getCallKey(),  xxType_record: 'form', xxOrder_by: 'ingcomp_key' },
	            waitMsg: 'Loading...',
	            success: function (form, action) {
	                try {
	                    var _model = Ext.create('Siace.model.operations.Ingresos_Compras'); var _result = Ext.decode(action.response.responseText);
	                    if ( _result.data[0] ) {
	                        _model.set(_result.data[0]);  _form.loadRecord(_model);
        					component.down('#grdOperations_ingresos_compras_det').getStore().load({
        						params: { xxIngcomp_key: component.getCallKey(), xxType_record: 'form' }
        					});
	                    }
	                }
	                catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
	            },
	            failure: function (form, action) { Ext.Msg.alert("Load failed", action.result.errorMessage); }
	        });

	        if ( _typeEdit == '2' ) {
	            var _icon = 'icon_Modify_90'; var _title = 'Modificar registro de compra'; 
	            //component.down('#indiv_dni').setDisabled( component.down('#tipdocident_id').getValue() == '99' ? true : false );
	        } else { 
	            var _icon = 'icon_Query_90'; var _title = translations.treasury_ventasedit_title_query; 
	            component.down('#vent_fecha').disable(); component.down('#tipdocident_id').disable(); 
	            component.down('#indiv_dni').disable(); component.down('#btnIndiv_search').disable(); component.down('#pers_ruc').disable(); component.down('#btnPers_search').disable();
	            component.down('#tippag_id').disable();
	            component.down('#btnSave').disable(); component.down('#btnUndo').disable(); component.down('#btnExit').enable();
	        }
	    }
	    component.setIconCls(_icon); component.setTitle(_title);
	},

	oice_CalcularVventaIgv: function(poPanel) {
        poPanel.down('#vent_vventa').setValue(fjsCalculateVVenta(poPanel.down('#vent_monto').getValue(), poPanel.down('#vent_monto_inafecto').getValue(), poPanel.down('#tribval_contable').getValue()));
        poPanel.down('#vent_igv').setValue(poPanel.down('#vent_monto').getValue()*1 - poPanel.down('#vent_vventa').getValue()*1);
    },

	oice_Close: function(panel, options) {
		//if ( this.getPps_Public_PersonasSearch() !== undefined ) { this.getPps_Public_PersonasSearch().close();  this.getPps_Public_PersonasSearch().destroy(); }
		//if ( this.getPis_Public_IndividuosSearch() !== undefined ) { this.getPis_Public_IndividuosSearch().close();  this.getPis_Public_IndividuosSearch().destroy(); }
	},

	oice_btnSaveClick: function(button, e, options) {
	    var _win = button.up('window'); var _frm = _win.down('form');
	    if ( _win.down('#doc_id').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'No se ha establecido el DOCUMENTO de Venta'); return false ; }
	    if ( _win.down('#vent_serie').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'No se ha establecido la SERIE del documento de Venta'); return false ; }
	    if ( _win.down('#vent_nro').getValue() == '' || _win.down('#vent_nro').getValue()*1 <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'No se ha establecido el NUMERO del documento de Venta'); return false ; }
	    if ( _win.down('#vent_fecha').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar la FECHA del documento', function() { _win.down('#vent_fecha').focus(); }); return false ; }
	    var _key = ( _win.down('#cntPersonas').isVisible() ? _win.down('#pers_key') : _win.down('#indiv_key'));
	    if ( _key.getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar CLIENTE al que se emitirá el documento', function() { _win.down('#pers_ruc').focus(); }); return false ; }
	    if ( _win.down('#tippag_id').getValue() == '4' && (_win.down('#entibanc_id').getValue() == '' || _win.down('#entibanc_id').getValue() == null || _win.down('#entibanc_id').getValue() == undefined) ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar la ENTIDAD BANCARIA a la que corresponde el cheque', function() { _frm.down('#entibanc_id').focus(); }); return false ; }
	    if ( _win.down('#tippag_id').getValue() == '4' && _win.down('#cheq_nro').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el Número de Cheque', function() { _frm.down('#cheq_nro').focus(); }); return false ; }
	    if ( _win.down('#tippag_id').getValue() == '5' && (_win.down('#cuebanc_key').getValue() == '' || _win.down('#cuebanc_key').getValue() == null || _win.down('#cuebanc_key').getValue() == undefined) ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar la CUENTA BANCARIA a la que corresponde el depósito', function() { _frm.down('#cueban_key').focus(); }); return false ; }
	    if ( _win.down('#tippag_id').getValue() == '5' && _win.down('#oper_nro').getValue() == '' ) {	    	
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el Número de Operación', function() { _frm.down('#oper_nro').focus(); }); return false ; }
	    if ( _win.down('#vent_monto').getValue() == '' || _win.down('#vent_monto').getValue()*1 <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'IMPORTE de documento no puede ser cero(0)', function() { }); return false ; }

		var _detalle = ''; var _referencias = ''; var _vent_monto = 0; var _cantid_ref = 0.00;
		var _recVD = _win.down('#grdTreasury_ventas_det').getStore().getRange();
		var _recR = _win.down('#grdTreasury_ventas_det_referencias').getStore().getRange();
		for ( var _i = 0;  _i < _recVD.length; _i++ ) {
			if ( _recVD[_i].get('ventdet_cantid') == '' || _recVD[_i].get('ventdet_cantid')*1 <= 0 ) {
				Ext.Msg.alert(translations.mensaje, 'Cantidad en detalle de venta no pueder ser cero (0)', function() { }); return false ; }
			_detalle += (_i == 0 ? '' : ',') +'{'+ _recVD[_i].get('ventdet_id') +','+ _i +','+ _recVD[_i].get('bs_id') +','+ _recVD[_i].get('ventdet_cantid') +','+ _recVD[_i].get('ventdet_preuni') +','+ _recVD[_i].get('ventdet_pretot') +','+ _recVD[_i].get('bs_inafecto') +','+ _recVD[_i].get('ref_id') +',0,0}';
			_vent_monto += fjsRound(_recVD[_i].get('ventdet_pretot'), 2)*1;
			if ( _recVD[_i].get('referencias') == '1' ) {
				_cantid_ref = 0;
				for ( var _j = 0;  _j < _recR.length; _j++ ) {
					if ( _recR[_j].get('bs_id') == _recVD[_i].get('bs_id') ) {
						_referencias += (_referencias == '' ? '' : ',') +'{'+ _recR[_j].get('bs_id') +','+ _recVD[_i].get('ref_id') +','+ _recVD[_i].get('tablex') +','+ _recR[_j].get('tablex_id') +','+ _recR[_j].get('tablex_fechaini') +','+ _recR[_j].get('tablex_fechafin') +'}';
						_cantid_ref++; 
					}
				}
				if ( fjsIn_array(_frm.down('#doc_id').getValue(), ['1','3']) ) {
					if ( _cantid_ref !== _recVD[_i].get('ventdet_cantid') ) {
						//Ext.Msg.alert(translations.mensaje, 'Cantidad de referencias de: '+_recVD[_i].get('bs_nombre') +', es diferente al detalle', function() { }); return false ; 
					}
				} else {
					if ( _cantid_ref*1 == 0 ) {
						Ext.Msg.alert(translations.mensaje, 'Debe establecer la(s) Referencia(s) del item: '+_recVD[_i].get('bs_nombre'), function() { }); return false ; }
				}
			}
		}
		if ( _detalle == '' ) { Ext.Msg.alert(translations.mensaje, 'Documento no registra detalle de venta', function() { _frm.down('#btnAdd').focus(); }); return false ; }
		if ( _vent_monto*1 !== _frm.down('#vent_monto').getValue()*1 ) { Ext.Msg.alert(translations.mensaje, 'Importe en sumatoria de detalle ['+_vent_monto+'], es diferente al importe del documento de venta ['+_frm.down('#vent_monto').getValue()+']', function() { }); return false ; }

	    if ( _frm.getForm().isValid() ) {
			Ext.Msg.confirm(translations.confirmar, translations.mensaje_pregunta_guardar, function(btn){
			if ( btn == 'yes' ) {    	
		    	var _vs = fextpub_sessionVariables();
		        _frm.getForm().submit({
					method: 'POST', url: 'php/treasury_ventas_save.php',
					params:{ xx0005: 'YES', xxType_edit: _win.getTypeEdit(), xxDoc_id: _win.down('#doc_id').getValue(), xxVent_serie: _win.down('#vent_serie').getValue(), xxVent_nro: _win.down('#vent_nro').getValue()*1,
							 xxTipdocident_id: _win.down('#tipdocident_id').getValue(), xxPers_key: _key.getValue(), xxMone_id: _win.down('#mone_id').getValue(), xxVent_monto: _win.down('#vent_monto').getValue(), xxVent_monto_inafecto: _win.down('#vent_monto_inafecto').getValue(), 
							 xxDetalle: _detalle, xxReferencias: _referencias, xxRef_tablex_fechaini: fjsDateSQL(_win.down('#ref_tablex_fechaini').getRawValue()),
						     zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
	                waitTitle: translations.valida_titulo, waitMsg: translations.valida_mensaje01,
		            
		            success: function(form, action) {
		            	var _result = Siace.util.Util.decodeJSON(action.response.responseText);
		                if ( _result.success ) {
		                	if ( _win.getTypeEdit() == '1' ) {
		                		_win.close(); _win.destroy();
								var _winF = Ext.create('Siace.view.treasury.VentasOK');
								_winF.setCallKey(_result.key); _winF.show();
							} else {
					            if ( _win.getCallStore() !== null ) { _win.getCallStore().load(); } 
							    else if ( _win.getCallWindow() !== null ) { }
			                    _win.close();
			                }
		                } else { Siace.util.Util.showErrorMsg(_result.msg); }
		            },
		            failure: function(form, action) { Siace.util.Util.showErrorMsg(action.response.responseText); }
		        });
			}});
	    }
	},

	oice_btnUndoClick: function(button, e, options) {
		button.up('window').close();
	},

	oice_btnExitClick: function(button, e, options) {
		button.up('window').close();
	},


	oice_btnAddClick: function(button, e, options) {
		var _pan = button.up('window');
		if ( _pan.getWinPBSS() == '' ) { _pan.setWinPBSS(Ext.create('Siace.view.public.Bienes_ServsSearch')); _pan.getWinPBSS().setBst_id(1); }
		fext_winSearch({'win': _pan.getWinPBSS(), 'callWin': _pan, 'title': 'Buscar Mercancía', 'typeRecord': 'grid_search_operations'});

		//fext_windowSearch(this.getTbss_Treasury_Bienes_ServsSearch(), button.up('window'), 'Siace.view.treasury.Bienes_ServsSearch', translations.treasury_bienes_servsssearch_title, '', 'ADD_VENTAS', 'ADD_VENTAS', false);
	},

	oice_btnSuppressClick: function(button, e, options) {
		//var _selection = this.getoice_grdtreasury_Ventas_Det().getView().getSelectionModel().getSelection()[0]; // este metodo tambien sirve
		var _record = this.getoice_grdTreasury_Ventas_Det().getSelectionModel().getSelection()[0];
        if ( _record ) {
        	button.setDisabled(true);
        	this.getoice_grdTreasury_Ventas_Det().getStore().remove(_record);
        	var _win = button.up('window');
        	_win.down('#grdTreasury_ventas_det_referencias').getStore().removeAll();
        	var _vent_monto = fjsRound(_win.down('#vent_monto').getValue()*1 - _record.data.ventdet_pretot*1, 2);
        	_win.down('#vent_monto').setValue(_vent_monto);
        	if ( _vent_monto <= 0  ) { _win.down('#vent_monto').setValue(''); _win.down('#mone_id').setValue(''); }
		}
	},

	oice_btnIngcomp_pdfDownloadClick: function(button, e, options) {
		var _win = button.up('window');
		var _file = _win.down('#ffiIngcomp_pdf').fileInputEl.dom.files[0];
		var _src = 'php/resources/download_file.php?xxTable=operations_ingresos_compras&xxField=pdf&xxFile_name=' + _win.down('#ingcomp_key').getValue() +'_'+ _win.down('#ingcomp_pdf').getValue();
		fext_FileDownload(_file, _src);
	},

	oice_btnIngcomp_pdfDeleteClick: function(button, e, options) {
		var _win = button.up('window');
		_win.down('#ffiIngcomp_pdf').reset();
		_win.down('#ingcomp_pdf').setValue('');
		_win.down('#ffiIngcomp_pdf').show(); button.hide(); _win.down('#btnIngcomp_pdfDownload').disable();
    },


	oice_ffiIngcomp_pdfChange: function(filefield, value, options) {
		var _win = filefield.up('window'); // 2097152
		fext_FileReader(filefield, /pdf/, '[PDF]', 1048576, '1 MB', _win.down('#btnIngcomp_pdfDelete'), _win.down('#btnIngcomp_pdfDownload'));
	},

	oice_btnPers_searchClick: function(button, e, options) {
		var _pan = button.up('window');
		if ( _pan.getWinPPS() == '' ) { _pan.setWinPPS(Ext.create('Siace.view.public.PersonasSearch')); }
		fext_winSearch({'win': _pan.getWinPPS(), 'callWin': _pan, 'callKey': _pan.down('#pers_key').getValue(), 'title': 'Buscar Proveedor', 'typeQuery': 'ONLY_WITH_RUC'});
	},

	oice_btnImpor_searchClick: function(button, e, options) {
		var _pan = button.up('window');
		if ( _pan.getWinPPIS() == '' ) { _pan.setWinPPIS(Ext.create('Siace.view.public.PersonasSearch')); }
		fext_winSearch({'win': _pan.getWinPPIS(), 'callWin': _pan, 'callKey': _pan.down('#impor_key').getValue(), 'title': 'Buscar Operador', 'typeQuery': 'IMPORTADORES', 'typeReturn': 'IMPORTADORES'});
	},


	oice_grdOperations_ingresos_compras_detAdd: function(record) {
		var _store = this.getoice_grdTreasury_Ventas_Det().getStore();
        var _model = _store.findRecord('bs_id', record.data.bs_id);
        var _close = false;
        if ( _model == null ) {
        	var _win = this.getoice_grdTreasury_Ventas_Det().up('window');
        	var _monto = _win.down('#vent_monto').getValue();
        	if ( _monto*1 > 0 ) {
        		if ( record.data.mone_id !== _win.down('#mone_id').getValue() ) {
					Ext.Msg.alert(translations.mensaje, 'moneda de servicio seleccionado es diferente al establecido en el documento de venta'); return false; }
        	} else {
        		_win.down('#mone_id').setValue(record.data.mone_id);
        	}
        	if ( record.data.bs_inafecto == '1' ) { _win.down('#vent_monto_inafecto').setValue( _win.down('#vent_monto_inafecto').getValue()*1 + record.data.bs_importe*1); }
        	_win.down('#vent_monto').setValue( _win.down('#vent_monto').getValue()*1 + record.data.bs_importe ); _close = true;
	        _store.add({ bs_id: record.data.bs_id, bs_codigo: record.data.bs_codigo, bs_nombre: record.data.bs_nombre, bs_inafecto: record.data.bs_inafecto, unimed_abrev: record.data.unimed_abrev, ventdet_cantid: 1, ventdet_preuni: record.data.bs_importe, ventdet_pretot: record.data.bs_importe });
	        this.oice_CalcularVventaIgv(_win);
	    } else {
	    	Ext.Msg.alert(translations.mensaje, 'servicio seleccionado ya se encuentra establecido');
	    }
		
		return _close;
	},

	oice_grdOperations_ingresos_compras_detSelectionchange: function(model, record, options) {		
		if ( record.length == 1 ) {
			var _me = this;
			var _win = _me.getoice_grdTreasury_Ventas_Det().up('window');	
			if ( _win.getTypeEdit() == '1' ) { _win.down('#btnSuppress').enable(); }

			if ( record[0].data.referencias == '' ) {
				Ext.Ajax.request({
		            method: 'POST', url: 'php/treasury_referencias_json_records.php',
		            params: { xxBs_id: record[0].data.bs_id, xxReftyp_id: '1', xxRef_estado: '1', xxType_record: 'search_table' },
					success : function(response, options) {
				        var _result = Siace.util.Util.decodeJSON(response.responseText);
				        if ( _result.success ) {
				        	if ( _result.subtotal == '0' ) {
				        		record[0].set('referencias', '0');
				        	} else {
				        		record[0].set('referencias', '1');
				        		record[0].set('ref_id', _result.data[0].ref_id);
				        		record[0].set('tablex', _result.data[0].tablex);
				        		record[0].set('tablex_nombre', _result.data[0].tablex_nombre);
				        		record[0].set('tablex_new', _result.data[0].tablex_new);
				        	}
							_me.oice_panDet_referenciasConfigure(_win, record[0]);
						}
					},
					failure : function(response, options) { }
		        });
			} else {
				_me.oice_panDet_referenciasConfigure(_win, record[0]);
			}
		}
	},


	oice_impor_rucBlur: function(textfield, The, options) {
		this.oice_impor_rucSearch('0', textfield.up('panel'));
	},

	oice_impor_rucChange: function(textfield, newValue, oldValue, options) {
		this.oice_Clean(textfield.up('panel'));
	},

	oice_impor_rucFocus: function(textfield, The, options) {
		this.oice_impor_rucSearch('1', textfield.up('panel'));
	},

	oice_impor_rucKeypress: function(textfield, e, options) {
		if( e.getCharCode() == 13 ) { this.oice_impor_rucSearch('13', textfield.up('panel')); }
	},

	oice_impor_rucSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['impor_key', 'IMPOR_RUC', 'impor_ruc', 'impor_nombre'],
			            ['php/public_personas_json_records.php', 'xxPers_ruc', 'textfield_search', 'IMPORTADORES'], '', '');
	},


	oice_panDetalleActivate: function(component, options) {
		var _win = component.up('window');
		if ( _win.getTypeEdit() == '1' ) {
			_win.down('#btnAdd').enable();
        	var _record = _win.down('#grdTreasury_ventas_det').getSelectionModel().getSelection()[0];
			_win.down('#btnSuppress').setDisabled(_record ? false : true);
		}
	},

	oice_panDet_referenciasActivate: function(component, options) {
		component.up('window').down('#btnAdd').disable();  component.up('window').down('#btnSuppress').disable();
	},

	oice_panDet_referenciasConfigure: function(win, record) {
       	var _grid = win.down('#grdTreasury_ventas_det_referencias');
       	_grid.getStore().clearFilter(true);
       	_grid.getStore().filter('bs_id', record.data.bs_id);

		if ( record.data.ref_id == '0' ) {
			win.down('#panDet_referencias').disable();
		} else {
			win.down('#panDet_referencias').enable();
			win.down('#btnRef_new').setDisabled(record.data.tablex_new == '0' && win.getTypeEdit() == '1' ? true : false);
        	if ( record.data.tablex == '204' ) {
				_grid.columns[0].setText(translations.tipo_vehiculo); _grid.columns[1].setText(translations.pais); _grid.columns[2].setText(translations.placa); _grid.columns[3].setText(translations.categoria); _grid.columns[4].setText(translations.marca); _grid.columns[5].setText(translations.modelo);
				_grid.columns[0].setWidth(160); _grid.columns[1].setWidth(50); _grid.columns[2].setWidth(100); _grid.columns[3].setWidth(100); _grid.columns[4].setWidth(150); _grid.columns[5].setWidth(200);
	       	} else if ( fjsIn_array(record.data.tablex, ['303','304']) ) {
				_grid.columns[0].setText(translations.documento); _grid.columns[1].setText(translations.fecha); _grid.columns[2].setText(translations.usuario); _grid.columns[3].setText(translations.tipo); _grid.columns[4].setText(translations.registro_aduanero); _grid.columns[5].setText(translations.operador);
				_grid.columns[0].setWidth(120); _grid.columns[1].setWidth(85); _grid.columns[2].setWidth(100); _grid.columns[3].setWidth(180); _grid.columns[4].setWidth(200); _grid.columns[5].setWidth(350);
	       	} else if ( fjsIn_array(record.data.tablex, ['101']) ) {
				_grid.columns[0].setText(translations.documento); _grid.columns[1].setText(translations.fecha); _grid.columns[2].setText(translations.cliente); _grid.columns[3].setText(translations.tipo_pago_siglas); _grid.columns[4].setText(translations.moneda_abrev); _grid.columns[5].setText(translations.importe);
				_grid.columns[0].setWidth(120); _grid.columns[1].setWidth(85); _grid.columns[2].setWidth(300); _grid.columns[3].setWidth(45); _grid.columns[4].setWidth(40); _grid.columns[5].setWidth(90);
	       	}
	   	}
		_grid.getView().refresh();
	},

	oice_pers_rucBlur: function(textfield, e, options) {
		this.oice_pers_rucSearch('0', textfield.up('form'));
	},

	oice_pers_rucFocus: function(textfield, e, options) {
		this.oice_pers_rucSearch('1', textfield.up('form'));
	},

	oice_pers_rucKeypress: function(textfield, e, options) {
		if( e.getCharCode() == 13 ) { this.oice_pers_rucSearch('13', textfield.up('form')); }
	},

	oice_pers_rucSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['pers_key', 'PERS_RUC', 'pers_ruc', 'pers_nombre'],
			            ['php/public_personas_json_records.php', 'xxPers_ruc', 'textfield_search', ''], '1',
			            ['Siace.view.public.PersonasEdit', translations.public_personasedit_title_new, ['pers_ruc'], ''], '');
	},

	oice_tipdocident_idChange: function(combo, newValue, oldValue, options) {
		var _win = combo.up('window');
		if ( newValue == '1' ) { _win.down('#cntIndividuos').setVisible(true);  _win.down('#cntPersonas').setVisible(false); } 
		else { _win.down('#cntPersonas').setVisible(true);  _win.down('#cntIndividuos').setVisible(false); }
	},

	oice_tippag_idChange: function(combo, newValue, oldValue, options) {
		var _win = combo.up('window');
		if ( newValue == '1' || newValue == '15' ) {
			_win.down('#entibanc_id').removeCls('myDisabledClass'); _win.down('#entibanc_id').addCls('x-item-disabled'); _win.down('#entibanc_id').disable(); _win.down('#entibanc_id').setValue(''); _win.down('#entibanc_id').setVisible(false); _win.down('#cheq_nro').setVisible(false); _win.down('#cheq_nro').setValue('');
			_win.down('#cuebanc_key').removeCls('myDisabledClass'); _win.down('#cuebanc_key').addCls('x-item-disabled'); _win.down('#cuebanc_key').disable(); _win.down('#cuebanc_key').setValue(''); _win.down('#cuebanc_key').setVisible(false); _win.down('#oper_nro').setVisible(false); _win.down('#oper_nro').setValue('');
			_win.down('#mone_id').setDisabled(fjsIn_array(_win.getTypeEdit(), ['1','2']) ? false : true);
		} else if ( newValue == '4' ) {
			_win.down('#entibanc_id').removeCls('x-item-disabled'); _win.down('#entibanc_id').addCls('myDisabledClass'); _win.down('#entibanc_id').setDisabled(fjsIn_array(_win.getTypeEdit(), ['1','11']) ? false : true);  _win.down('#entibanc_id').setVisible(true); _win.down('#cheq_nro').setVisible(true);  _win.down('#cheq_nro').setDisabled(fjsIn_array(_win.getTypeEdit(), ['1','11']) ? false : true);
			_win.down('#cuebanc_key').removeCls('myDisabledClass'); _win.down('#cuebanc_key').addCls('x-item-disabled'); _win.down('#cuebanc_key').disable(); _win.down('#cuebanc_key').setValue(''); _win.down('#cuebanc_key').setVisible(false); _win.down('#oper_nro').setVisible(false); _win.down('#oper_nro').setValue('');
			if ( _win.down('#entibanc_id').getStore().getCount() == '0' ) {
				_win.down('#entibanc_id').getStore().load({ params: { xxTabgen_parent: '200', xxType_record: 'combo', xxOrder_by: 'tabgen_nombre' } })
			}
			_win.down('#mone_id').setDisabled(fjsIn_array(_win.getTypeEdit(), ['1','2']) ? false : true);
		} else {
			_win.down('#entibanc_id').removeCls('myDisabledClass'); _win.down('#entibanc_id').addCls('x-item-disabled'); _win.down('#entibanc_id').disable(); _win.down('#entibanc_id').setValue(''); _win.down('#entibanc_id').setVisible(false);  _win.down('#cheq_nro').setVisible(false); _win.down('#cheq_nro').setValue('');
			_win.down('#cuebanc_key').removeCls('x-item-disabled'); _win.down('#cuebanc_key').addCls('myDisabledClass'); _win.down('#cuebanc_key').setDisabled(fjsIn_array(_win.getTypeEdit(), ['1','11']) ? false : true); _win.down('#cuebanc_key').setVisible(true); _win.down('#oper_nro').setVisible(true); _win.down('#oper_nro').setDisabled(fjsIn_array(_win.getTypeEdit(), ['1','11']) ? false : true);
			if ( _win.down('#cuebanc_key').getStore().getCount() == '0' ) {
				_win.down('#cuebanc_key').getStore().load({ params: { xxType_record: 'combo_recibo', xxOrder_by: 'cuebanc_nro' } })
			}
			_win.down('#mone_id').disable();
		}
	},

	orae_btnRegadua_pdfDeleteClick: function(button, e, options) {
		var _win = button.up('window');
		_win.down('#ffiRegadua_pdf').reset();
		_win.down('#regadua_pdf').setValue('');
		_win.down('#ffiRegadua_pdf').show(); button.hide(); _win.down('#btnRegadua_pdfDownload').setDisabled(true);
    },

	orae_btnRegadua_pdfDownloadClick: function(button, e, options) {
		var _file = button.up('window').down('#ffiRegadua_pdf').fileInputEl.dom.files[0];
		var _src = 'php/resources/download_file.php?xxTable=operations_ingresos_compras&xxField=pdf&xxFile_name=' + button.up('window').down('#regadua_key').getValue() +'_'+ button.up('window').down('#regadua_pdf').getValue();
		fext_FileDownload(_file, _src);
	},

	orae_ffiRegadua_pdfChange: function(filefield, value, options) {
		var _win = filefield.up('window');
		fext_FileReader(filefield, /pdf/, 1048576, '1 MB', '[PDF]', _win.down('#btnRegadua_pdfDelete'), _win.down('#btnRegadua_pdfDownload'));
	},

});