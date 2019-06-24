Ext.define('Siace.controller.treasury.Ventas', {
	extend: 'Ext.app.Controller',
	stores: [ 'array.DocumentosVenta', 'array.DocumentosVentaAB', 'array.Tipos_Documentos_IdentidadVenta', 'array.Tipos_Documentos_IdentidadVentaAB', 'array.Monedas', ],
	views: [ 'treasury.VentasBrowse', 'treasury.VentasEdit', 'treasury.VentasOK', 'treasury.VentasSearchxCharge', 'treasury.VentasReports', ],
    refs: [
        { ref: 'tve_grdTreasury_Ventas_Det', selector: 'treasury_ventasedit #grdTreasury_ventas_det' },
        { ref: 'tvs_Treasury_VentasSearch', selector: 'treasury_ventassearch' },
        { ref: 'tvs_grdTreasury_Ventas', selector: 'treasury_ventassearch #grdTreasury_ventas' },
        { ref: 'tvsxc_grdTreasury_Ventas', selector: 'treasury_ventassearchxcharge #grdTreasury_ventas' },
        { ref: 'tbss_Treasury_Bienes_ServsSearch', selector: 'treasury_bienes_servssearch' },
        { ref: 'ois_Operations_IngresosSearch', selector: 'operations_ingresossearch' },
        { ref: 'oss_Operations_SalidasSearch', selector: 'operations_salidassearch' },        
        { ref: 'pps_Public_PersonasSearch', selector: 'public_personassearch' },
        { ref: 'pis_Public_IndividuosSearch', selector: 'public_individuossearch' },        
        { ref: 'pvs_Public_VehiculosSearch', selector: 'public_vehiculossearch' },
    ],

	init: function(application) {
		this.control({
			'treasury_ventasbrowse': { beforerender: this.tvb_BeforeRender, },
			'treasury_ventasbrowse #opc_id': { change: this.tvb_opc_idChange, },
			'treasury_ventasbrowse #btnNew': { click: this.tvb_btnNewClick, },
			'treasury_ventasbrowse #btnInvoice': { click: this.tvb_btnInvoiceClick, },
			'treasury_ventasbrowse #btnQuery': { click: this.tvb_btnQueryClick, },
			'treasury_ventasbrowse #btnAnnular': { click: this.tvb_btnAnnularClick, },
			'treasury_ventasbrowse #btnPrinter': { click: this.tvb_btnPrinterClick, },
			'treasury_ventasbrowse #btnHide': { click: this.tvb_btnHideClick, },
			'treasury_ventasbrowse #btnPers_search': { click: this.tvb_btnPers_searchClick, },
            'treasury_ventasbrowse #doc_id': { change: this.tvb_doc_idChange, },
			'treasury_ventasbrowse #fechafin': { change: this.tvb_fechainiChange },
			'treasury_ventasbrowse #fechaini': { change: this.tvb_fechafinChange, },
			'treasury_ventasbrowse #grdTreasury_ventas': { selectionchange: this.tvb_grdTreasury_ventasSelectionchange, },
            'treasury_ventasbrowse #pers_ruc': { blur: this.tvb_pers_rucBlur, change: this.tvb_pers_rucChange, focus: this.tvb_pers_rucFocus, keypress: this.tvb_pers_rucKeypress, },
            'treasury_ventasbrowse #vent_nro': { change: this.tvb_vent_nroChange },
            'treasury_ventasbrowse #vent_serie': { change: this.tvb_vent_serieChange, },

			'treasury_ventasedit': { beforeshow: this.tve_BeforeShow, close: this.tve_Close, },
            'treasury_ventasedit #btnSave': { click: this.tve_btnSaveClick, },
            'treasury_ventasedit #btnUndo': { click: this.tve_btnUndoClick, },
            'treasury_ventasedit #btnExit': { click: this.tve_btnExitClick, },
            'treasury_ventasedit #btnAnnular': { click: this.tve_btnAnnularClick, },
            'treasury_ventasedit #btnAdd': { click: this.tve_btnAddClick, },
            'treasury_ventasedit #btnIndiv_search': { click: this.tve_btnIndiv_searchClick },
            'treasury_ventasedit #btnPers_search': { click: this.tve_btnPers_searchClick, },
            'treasury_ventasedit #btnRef_new': { click: this.tve_btnRef_newClick },
            'treasury_ventasedit #btnRef_search': { click: this.tve_btnRef_searchClick },
            'treasury_ventasedit #btnRef_suppress': { click: this.tve_btnRef_suppressClick },
            'treasury_ventasedit #btnSuppress': { click: this.tve_btnSuppressClick, },
			'treasury_ventasedit #grdTreasury_ventas_det': { selectionchange: this.tve_grdTreasury_ventas_detSelectionchange, },
			'treasury_ventasedit #grdTreasury_ventas_det_referencias': { selectionchange: this.tve_grdTreasury_ventas_det_referenciasSelectionchange, },
            'treasury_ventasedit #indiv_dni': { blur: this.tve_indiv_dniBlur, focus: this.tve_indiv_dniFocus, keypress: this.tve_indiv_dniKeypress, },
			'treasury_ventasedit #panDetalle': { activate: this.tve_panDetalleActivate, },
			'treasury_ventasedit #panDet_referencias': { activate: this.tve_panDet_referenciasActivate, },
			'treasury_ventasedit #pers_ruc': { blur: this.tve_pers_rucBlur, focus: this.tve_pers_rucFocus, keypress: this.tve_pers_rucKeypress, },
            'treasury_ventasedit #tipdocident_id': { change: this.tve_tipdocident_idChange, },
			'treasury_ventasedit #tippag_id': { change: this.tve_tippag_idChange, },
            'treasury_ventasedit #vent_monto': { change: this.tve_vent_montoChange, },

			'treasury_ventasok': { beforeshow: this.tvo_BeforeShow, },
			'treasury_ventasok #btnNew': { click: this.tvo_btnNewClick, },
			'treasury_ventasok #btnPrinter': { click: this.tvo_btnPrinterClick, },
			'treasury_ventasok #btnExit': { click: this.tvo_btnExitClick, },

			'treasury_ventasreports': { beforerender: this.tvr_BeforeRender, close: this.tvr_Close, },
			'treasury_ventasreports #btnPdf': { click: this.tvr_btnPdfClick, },
			'treasury_ventasreports #btnExcel': { click: this.tvr_btnExcelClick, },
            'treasury_ventasreports #btnIndiv_search': { click: this.tvr_btnIndiv_searchClick },
            'treasury_ventasreports #btnPers_search': { click: this.tvr_btnPers_searchClick, },
            'treasury_ventasreports #indiv_dni': { blur: this.tvr_indiv_dniBlur, focus: this.tvr_indiv_dniFocus, keypress: this.tvr_indiv_dniKeypress, },
            'treasury_ventasreports #pers_ruc': { blur: this.tvr_pers_rucBlur, focus: this.tvr_pers_rucFocus, keypress: this.tvr_pers_rucKeypress, },
			'treasury_ventasreports #tipdocident_id': { change: this.tvr_tipdocident_idChange, },
			'treasury_ventasreports #type_record': { change: this.tvr_type_recordChange, },

			'treasury_ventasri': { render: this.tvri_Render, },

			'treasury_ventassearch': { beforerender: this.tvs_BeforeRender, },
			'treasury_ventassearch #btnAccept': { click: this.tvs_btnAcceptClick, },
			'treasury_ventassearch #btnCancel': { click: this.tvs_btnCancelClick, },
			'treasury_ventassearch #doc_id': { change: this.tvs_doc_idChange },
			'treasury_ventassearch #fechaini': { change: this.tvs_Clean },
			'treasury_ventassearch #fechafin': { change: this.tvs_Clean },
			'treasury_ventassearch #grdTreasury_ventas': { itemdblclick: this.tvs_grdTreasury_ventasItemDblClick, selectionchange: this.tvs_grdTreasury_ventasSelectionChange, },
			'treasury_ventassearch #pers_nombre': { change: this.tvs_Clean },
			'treasury_ventassearch #pers_ruc': { change: this.tvs_Clean },
			'treasury_ventassearch #tipdocident_id': { change: this.tvs_tipdocident_idChange, },

			'treasury_ventassearchxcharge': { beforerender: this.tvsxc_BeforeRender, },
			'treasury_ventassearchxcharge #btnAccept': { click: this.tvsxc_btnAcceptClick, },
			'treasury_ventassearchxcharge #btnCancel': { click: this.tvsxc_btnCancelClick, },
			'treasury_ventassearchxcharge #grdTreasury_ventas': { itemdblclick: this.tvsxc_grdTreasury_ventasItemDblClick, selectionchange: this.tvsxc_grdTreasury_ventasSelectionChange, },
		});
	},

	tvb_BeforeRender: function(component, options) {
		fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': component.down('#opc_id'), 'menu_id': component.getMenuId() });
		fextpub_documentos_seriesParameters({'panel': component, 'itemId': 'vent_serie'});
		fextpub_documentosFilter({'objeto':component.down('#doc_id'), 'doc_esventa': '1', 'add_blank': 'NO'});
		//fexttre_bienes_servs_categoriasFilter({'objeto': component.down('#bscat_id')});

		var _store = Ext.create('Siace.store.treasury.Ventas');
		var _grid = component.down('#grdTreasury_ventas'); var _pagtool = component.down('#pgtTreasury_ventas');
		_grid.bindStore(_store);  _pagtool.bindStore(_store);
		_store.sort('vent_fecha', 'DESC'); _store.pageSize = 500;
		_store.on('beforeload', function(store, operations, eOpts) {
			component.down('#btnQuery').disable(); component.down('#btnAnnular').disable(); component.down('#btnPrinter').disable();

		    store.getProxy().setExtraParam('xxDoc_id', component.down('#doc_id').getValue());
		    store.getProxy().setExtraParam('xxVent_serie', component.down('#vent_serie').getValue());
		    store.getProxy().setExtraParam('xxVent_nro', component.down('#vent_nro').getValue());
		    store.getProxy().setExtraParam('xxFechaini', component.down('#fechaini').getSubmitData());
		    store.getProxy().setExtraParam('xxFechafin', component.down('#fechafin').getSubmitData());
		    store.getProxy().setExtraParam('xxTippag_id', component.down('#tippag_id').getValue());
		    store.getProxy().setExtraParam('xxPers_ruc', component.down('#pers_ruc').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});
	},

	tvb_Clean: function(poComponent) {
		var _store = poComponent.down('#pgtTreasury_ventas').getStore();
		var _pagingtoolbar = poComponent.down('#pgtTreasury_ventas');
		fext_gridClean(_store, _pagingtoolbar);

		poComponent.down('#btnQuery').disable(); poComponent.down('#btnAnnular').disable(); poComponent.down('#btnPrinter').disable();
	},

	tvb_ContratoInvoice: function(poComponent, pcContr_key){
		if ( poComponent.down('#doc_id').getValue() == '' || poComponent.down('#doc_id').getValue()*1 <= 0 ) {
		    Ext.MessageBox.alert(translations.mensaje, 'Debe indicar el Documento de Venta', function() { poComponent.down('#vent_nro').focus(); }); return false ; }
		if ( poComponent.down('#vent_serie').getValue() == '' || poComponent.down('#vent_serie').getValue()*1 <= 0 ) {
			Ext.MessageBox.alert(translations.mensaje, 'Debe indicar la Serie del Documento de Venta', function() { poComponent.down('#vent_serie').focus(); }); return false ; }
		this.tvb_ViewEdit('11', poComponent, pcContr_key);
		return true;
	},

	tvb_ViewEdit: function(pcTypeEdit, poComponent, pcContr_key){
		if ( fjsIn_array(pcTypeEdit, ['1']) ) {
			if ( poComponent.down('#doc_id').getValue() == '' || poComponent.down('#doc_id').getValue()*1 <= 0 ) {
			    Ext.MessageBox.alert(translations.mensaje, 'Debe indicar el Documento de Venta', function() { poComponent.down('#doc_id').focus(); }); return false ; }
			if ( poComponent.down('#vent_serie').getValue() == '' || poComponent.down('#vent_serie').getValue()*1 <= 0 ) {
				Ext.MessageBox.alert(translations.mensaje, 'Debe indicar la Serie del Documento de Venta', function() { poComponent.down('#vent_serie').focus(); }); return false ; }
		} else if ( fjsIn_array(pcTypeEdit, ['2','3']) ) {
	    	var _record = poComponent.down('#grdTreasury_ventas').getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }
	    }

		Ext.get(poComponent.getEl()).mask(translations.mensaje_esperar, 'loading');
	    var _win = Ext.create('Siace.view.treasury.VentasEdit');
	    _win.setTypeEdit(pcTypeEdit); _win.setCallStore(poComponent.down('#grdTreasury_ventas').getStore());
	    if ( fjsIn_array(pcTypeEdit, ['1','11']) ) { _win.setDoc_id(poComponent.down('#doc_id').getValue()); _win.setVent_serie(poComponent.down('#vent_serie').getValue()); _win.setContr_key(pcContr_key); }
	    else if (fjsIn_array(pcTypeEdit, ['2','3'])) { _win.setCallKey(_record.data.vent_key); }
	    _win.show();
	    Ext.get(poComponent.getEl()).unmask();
	},

	tvb_opc_idChange: function(combo, newValue, oldValue, options) {
		combo.up('panel').down('#btnNew').setDisabled(fextpub_uamoButtons(combo, 1));
		combo.up('panel').down('#btnInvoice').setDisabled(fextpub_uamoButtons(combo, 4001));
	},

	tvb_btnNewClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 1) ) { return false; } this.tvb_ViewEdit('1', button.up('panel'), '');
	},

	tvb_btnInvoiceClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 4001) ) { return false; }
		Ext.get(button.up('panel').getEl()).mask(translations.mensaje_esperar, 'loading');
	    var _win = Ext.create('Siace.view.treasury.ContratosSearchxInvoice');
	    _win.setCallWindow(button.up('panel')); _win.show();
	    Ext.get(button.up('panel').getEl()).unmask();
	},

	tvb_btnQueryClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 3) ) { return false; } this.tvb_ViewEdit('3', button.up('panel'), '');
	},

	tvb_btnAnnularClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 10) ) { return false; }
		var _panel = button.up('panel');
		if ( options == undefined ) {
	        var _record = _panel.down('#grdTreasury_ventas').getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }

			Ext.Msg.confirm('Confirmación', '¿Esta Ud. seguro de ANULAR el Registro de Venta seleccionado?', function(btn){
				if ( btn == 'yes' ) {
					var _win = Ext.create('Siace.view.public.UsuariosPsw2');
					_win.setCallButton(button);
					_win.setCallKey(_record.data.vent_key);
					_win.setSubTitle(_record.data.vent_documento);
					_win.setFormType('10');
					_win.show();
				}
			});
		} else {
			var _win = options.win;
			var _store = _panel.down('#grdTreasury_ventas').getStore(); var _menu_id = _panel.getMenuId();
			Ext.get(_panel.getEl()).mask('Validando información... por favor espere un momento...', 'loading');
			var _vs = fextpub_sessionVariables();
			Ext.Ajax.request({
				url: 'php/treasury_ventas_delete.php',
				params: { xx0010: 'YES', xxType_edit: '10', xxVent_key: options.key, xxUsur_psw2: options.usur_psw2, xxVent_observ: options.observ,
					      zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'], xxMenu_id: _menu_id },
				success: function(conn, response, options, eOpts) {
					var _result = Siace.util.Util.decodeJSON(conn.responseText);
					if ( _result.success ) {
						_win.close(); _win.destroy();
			            _store.load({ callback: function(opt, success, respon) { Ext.get(_panel.getEl()).unmask(); } });
					} else { Ext.get(_panel.getEl()).unmask(); Siace.util.Util.showErrorMsg(_result.msg); }
				},
				failure: function(conn, response, options, eOpts) { Ext.get(_panel.getEl()).unmask(); Siace.util.Util.showErrorMsg(conn.responseText); }
			});
		}		
	},

	tvb_btnHideClick: function(button, e, options) {
    	var _ventimp = window.open('', '');
    	_ventimp.document.write('<html><head><link rel="stylesheet" type="text/css" href="resources/css/style_printer.css?version=15"><\/head><body style=\"background-color: #FFFFFF\">');
    	_ventimp.document.write(options);
    	_ventimp.document.close();
	},

	tvb_btnPrinterClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 8) ) { return false; } 
		var _panel = button.up('panel');
		var _record = _panel.down('#grdTreasury_ventas').getSelectionModel().getSelection()[0];
		if ( !_record ) { return false; }
		
		Ext.Ajax.request({
		    method: 'POST', url: 'php/treasury_ventas_printer.php',
			params: { xxVent_key: _record.data.vent_key,  xxType_record: 'printer', xxOrder_by: 'vent_key' },
			success : function(response, options) {
				_panel.down('#btnHide').fireEvent('click', _panel.down('#btnHide'), '', response.responseText);
			},
			failure : function(response, options) { }
		});
	},

	tvb_btnPers_searchClick: function(button, e, options) {
		fext_windowSearch(this.getPps_Public_PersonasSearch(), button.up('panel'), 'Siace.view.public.PersonasSearch', translations.public_personassearch_title, button.up('panel').down('#pers_key').getValue(), '', '', false);
	},

	tvb_doc_idChange: function(combo, newValue, oldValue, options) {
		fextpub_documentos_seriesLoad({'panel': combo.up('panel'), 'itemId': 'vent_serie'});
		if ( oldValue !== undefined ) { this.tvb_Clean(combo.up('panel')); }
	},

	tvb_fechainiChange: function(datefield, newValue, oldValue, options) {
		this.tvb_Clean(datefield.up('panel'));
	},

	tvb_fechafinChange: function(datefield, newValue, oldValue, options) {
		this.tvb_Clean(datefield.up('panel'));
	},

	tvb_grdTreasury_ventasSelectionchange: function(model, record, options) {
		if ( record.length == 1 ) {
			var _panel = model.view.panel.up('panel'); var _cboOpc_id = _panel.down('#opc_id'); _flga = record[0].data.vent_flga;
			//_panel.down('#btnModify').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 2));
			_panel.down('#btnQuery').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 3));
			_panel.down('#btnAnnular').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 10));
			_panel.down('#btnPrinter').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 8));
		}
	},

	tvb_pers_rucBlur: function(textfield, The, options) {
		this.tvb_pers_rucSearch('0', textfield.up('panel'));
	},

	tvb_pers_rucChange: function(textfield, newValue, oldValue, options) {
		this.tvb_Clean(textfield.up('panel'));
	},

	tvb_pers_rucFocus: function(textfield, The, options) {
		this.tvb_pers_rucSearch('1', textfield.up('panel'));
	},

	tvb_pers_rucKeypress: function(textfield, e, options) {
		if( e.getCharCode() == 13 ) { this.tvb_pers_rucSearch('13', textfield.up('panel')); }
	},

	tvb_pers_rucSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['pers_key', 'PERS_RUC', 'pers_ruc', 'pers_nombre'], 
			            ['php/public_personas_json_records.php', 'xxPers_ruc', 'textfield_search', ''], '', '');
	},

	tvb_vent_serieChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.tvb_Clean(combo.up('panel')); }
	},

	tvb_vent_nroChange: function(textfield, newValue, oldValue, options) {
		this.tvb_Clean(textfield.up('panel'));
	},

	/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
	tve_BeforeShow: function(component, options) {
		var _typeEdit = component.getTypeEdit();
		component.down('#vent_serie').bindStore(Ext.create('Siace.store.public.Documentos_Series'));
		component.down('#entibanc_id').bindStore(Ext.create('Siace.store.public.Tablas_Generales'));
		component.down('#cuebanc_key').bindStore(Ext.create('Siace.store.treasury.Cuentas_Bancarias'));

		var _cboTippag_id = component.down('#tippag_id');
		_cboTippag_id.bindStore(Ext.create('Siace.store.public.Tipos_Pago'));
		_cboTippag_id.getStore().load({
			params: { xxTippag_esventa: '1', xxType_record: 'combo' },
			callback: function(records, operations, success) { 
				if ( records.length > 0 && fjsIn_array(_typeEdit, ['1','11']) ) { _cboTippag_id.setValue(records[0].data.tippag_id); }
			}
		});

		var _me = this;
		var _txtVent_monto = component.down('#vent_monto'); var _txtVent_monto_inafecto = component.down('#vent_monto_inafecto');
		var _storeVent_det = Ext.create('Siace.store.treasury.Ventas_Det',{
	        listeners : {
	            update: function(store, record, operation, options){
	                var _monto = 0; var _inafecto = 0;
	                store.each(function(record){ _monto += record.get('ventdet_pretot'); if (record.get('bs_inafecto') == '1') { _inafecto += record.get('ventdet_pretot'); } });
	                _txtVent_monto.setValue(_monto); _txtVent_monto_inafecto.setValue(_inafecto);
	                _me.tve_CalcularVventaIgv(component);
	            }
	        }
		});

		var _ce = Ext.create('Ext.grid.plugin.CellEditing', {
			itemId: 'cetreasury_ventas_det', clicksToEdit: 1,
			listeners: {
			    edit: function(editor, e, options) {
			        var _record = (parseInt(Ext.versions.extjs.shortVersion) >= 410) ? e.record : editor.record;
			        _record.set('ventdet_pretot', fjsRound(_record.data.ventdet_cantid * _record.data.ventdet_preuni, 2));
			    },
			}
	    });

		var _grdVent_det = component.down('#grdTreasury_ventas_det');
		_ce.init(_grdVent_det);
		_grdVent_det.bindStore(_storeVent_det);
		_grdVent_det.getView().refresh();
		_storeVent_det.sort('ventdet_item', 'ASC'); _storeVent_det.pageSize = 500;
		_storeVent_det.on('beforeload', function(store, operations, eOpts) {
			component.down('#btnSuppress').setDisabled(true);
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});

		var _storeVDR = Ext.create('Siace.store.treasury.Ventas_Det_Referencias');
		var _grdVDR = component.down('#grdTreasury_ventas_det_referencias');
		_grdVDR.bindStore(_storeVDR);
		_storeVDR.on('beforeload', function(store, operations, eOpts) {
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		});

	    if ( fjsIn_array(_typeEdit, ['1','11']) ) {
	    	component.down('#doc_id').setValue(component.getDoc_id());
        	var _cboVent_serie = component.down('#vent_serie');
			_cboVent_serie.getStore().add({ docser_serie: component.getVent_serie(), docser_format: fjsLpad(component.getVent_serie(), 3, '0'), });
			_cboVent_serie.setValue(component.getVent_serie());
			Ext.Ajax.request({
	            method: 'POST', url: 'php/public_documentos_series_json_records.php',
		        params: { xxDoc_id: component.getDoc_id(),  xxDocser_serie: component.getVent_serie(),  xxType_record: 'search_nro' },
				success : function(response, options) {
				    var _result = Siace.util.Util.decodeJSON(response.responseText);
				    if ( _result.success ) { component.down('#vent_nro').setValue( fjsLpad(_result.data[0].docser_nro*1 + 1, _result.data[0].docser_nro_length, '0') ); }
				},
				failure : function(response, options) { component.down('#btnSave').disable(); }
		    });

	    	component.down('#vent_fecha').setValue(fjsDateCurrent(''));
	    	if ( component.down('#doc_id').getValue() == '3' ) { component.down('#tipdocident_id').setValue(1);  component.down('#tipdocident_id').setDisabled(false); component.down('#vent_vventa').setVisible(false); component.down('#vent_igv').setVisible(false); }
	    	else { component.down('#tipdocident_id').setValue(3); }
	    	if ( component.getContr_key() !== '' ) {
	    		component.down('#pers_ruc').disable(); component.down('#btnPers_search').disable(); component.down('#indiv_dni').disable(); component.down('#btnIndiv_search').disable();
	    		component.down('#cntReferencias').setVisible(true); component.down('#cntReferencias_data').setVisible(true); component.down('#btnAdd').disable();
	    		var _storeVD = this.getTve_grdTreasury_Ventas_Det().getStore(); var lnVent_monto = 0; var lnVent_monto_inafecto = 0;
				Ext.Ajax.request({
		            method: 'POST', url: 'php/treasury_contratos_json_records.php',
			        params: { xxContr_key: component.getContr_key(), xxType_record: 'generate_invoices' },
					success : function(response, options) {
					    var _result = Siace.util.Util.decodeJSON(response.responseText);
					    if ( _result.success ) { 
					    	component.down('#pers_key').setValue( _result.data[0].pers_key ); component.down('#pers_ruc').setValue( _result.data[0].pers_ruc ); component.down('#pers_nombre').setValue( _result.data[0].pers_nombre );
							component.down('#mone_id').setValue( _result.data[0].mone_id*1 );
					    	component.down('#ref_tablex').setValue(_result.data[0].tablex);
					    	component.down('#ref_tablex_key').setValue( _result.data[0].contr_key ); 
					    	component.down('#ref_tablex_documento').setValue( _result.data[0].contr_documento );
					    	component.down('#ref_tablex_fecha').setValue( fjsDateDDMMAAAA(_result.data[0].contr_fecha) );
					    	component.down('#ref_unimed_nombre').setValue( '('+_result.data[0].unimed_nombre+')' );
					    	component.down('#ref_tablex_monto').setFieldLabel('Importe ('+_result.data[0].mone_abrev+')');
					    	component.down('#ref_tablex_monto').setValue(fjsFormatNumeric(_result.data[0].contr_monto, 2));
					    	component.down('#ref_tablex_fechaini').setValue( _result.data[0].tablex_fechaini );
					    	component.down('#ref_tablex_fechafin').setValue( _result.data[0].tablex_fechafin );

							Ext.Ajax.request({
					            method: 'POST', url: 'php/treasury_contratos_det_json_records.php',
						        params: { xxContr_key: component.getContr_key(), xxTablex: '106', xxType_record: 'generate_invoices' },
								success : function(response, options) {
								    var _result = Siace.util.Util.decodeJSON(response.responseText);
								    if ( _result.success ) {
								    	for ( _i=0; _i <= _result.data.length-1; _i++ ) {
											_storeVD.add({ bs_id: _result.data[_i].tablex_id, bs_codigo: _result.data[_i].tablex_codigo, bs_nombre: _result.data[_i].tablex_nombre, bs_inafecto: _result.data[_i].tablex_inafecto, unimed_abrev: _result.data[_i].unimed_abrev, ventdet_cantid: 1, ventdet_preuni: _result.data[_i].tablex_preuni, ventdet_pretot: _result.data[_i].tablex_preuni });
											lnVent_monto += (_result.data[_i].tablex_preuni*1);
											lnVent_monto_inafecto += (_result.data[_i].tablex_inafecto == '1' ? _result.data[_i].tablex_preuni*1 : 0);
										}
										component.down('#vent_monto').setValue(lnVent_monto); component.down('#vent_monto_inafecto').setValue(lnVent_monto_inafecto);
										_me.tve_CalcularVventaIgv(component);
								    }
								}
							});
					    }
					},
					failure : function(response, options) { component.down('#btnSave').disable(); }
			    });
	    	}
	    	if ( _typeEdit == '1' ) { component.down('#btnAnnular').setVisible(true); component.down('#btnAnnular').setText('Anular Documento'); component.down('#btnAnnular').enable(); }
	        var _icon = 'icon_New_90'; var _title = translations.treasury_ventasedit_title_new;
	    } else if ( fjsIn_array(_typeEdit, ['2','3']) ) {
	        //fextpub_almacenesCombo(component.down('#alma_key'), true, '', '', 'combo');
	        var _form = component.down('form'); var _me = this;
	        _form.load({
	            method: 'POST', url: 'php/treasury_ventas_json_records.php',
	            params: { xxVent_key: component.getCallKey(),  xxType_record: 'form', xxOrder_by: 'vent_key' },
	            waitMsg: 'Loading...',
	            success: function (form, action) {
	                try {
	                    var _model = Ext.create('Siace.model.treasury.Venta');
	                    var _result = Ext.decode(action.response.responseText);
	                    if ( _result.data[0] ) {
	                        _model.set(_result.data[0]);  _form.loadRecord(_model);
							component.down('#vent_serie').getStore().add({ docser_serie: _result.data[0].vent_serie, docser_format: fjsLpad(_result.data[0].vent_serie, _result.data[0].docser_serie_length, '0'), });
							component.down('#vent_serie').setValue(_result.data[0].vent_serie*1);
							component.down('#vent_nro').setValue(fjsLpad(_result.data[0].vent_nro, _result.data[0].docser_nro_length, '0'));
							if ( _result.data[0].tipdocident_id == '3' ) {
								component.down('#pers_ruc').setValue(_result.data[0].pers_ruc);
							} else {
								component.down('#cntPersonas').setVisible(false); component.down('#cntIndividuos').setVisible(true);
								component.down('#indiv_dni').setValue(_result.data[0].pers_ruc);
								component.down('#indiv_apenom').setValue(_result.data[0].pers_nombre);
							}
        					component.down('#grdTreasury_ventas_det').getStore().load({
        						params: { xxVent_key: component.getCallKey(), xxType_record: 'form' }
        					});

							if ( _result.data[0].doc_id == '3' ) { component.down('#vent_vventa').setVisible(false); component.down('#vent_igv').setVisible(false); } 
							else { _me.tve_CalcularVventaIgv(component); }
	                    }
	                }
	                catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
	            },
	            failure: function (form, action) {
	                Ext.Msg.alert("Load failed", action.result.errorMessage);
	            }
	        });

	        if ( _typeEdit == '2' ) {
	            var _icon = 'icon_Modify_90'; var _title = translations.treasury_ventasedit_title_modify; 
	            component.down('#indiv_dni').setDisabled( component.down('#tipdocident_id').getValue() == '99' ? true : false );
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

	tve_CalcularVventaIgv: function(poPanel) {
        poPanel.down('#vent_vventa').setValue(fjsCalculateVVenta(poPanel.down('#vent_monto').getValue(), poPanel.down('#vent_monto_inafecto').getValue(), poPanel.down('#tribval_contable').getValue()));
        poPanel.down('#vent_igv').setValue(poPanel.down('#vent_monto').getValue()*1 - poPanel.down('#vent_vventa').getValue()*1);
    },

	tve_Close: function(panel, options) {
		if ( this.getPps_Public_PersonasSearch() !== undefined ) { this.getPps_Public_PersonasSearch().close();  this.getPps_Public_PersonasSearch().destroy(); }
		if ( this.getPis_Public_IndividuosSearch() !== undefined ) { this.getPis_Public_IndividuosSearch().close();  this.getPis_Public_IndividuosSearch().destroy(); }
		if ( this.getTbss_Treasury_Bienes_ServsSearch() !== undefined ) { this.getTbss_Treasury_Bienes_ServsSearch().close();  this.getTbss_Treasury_Bienes_ServsSearch().destroy(); }
		if ( this.getPvs_Public_VehiculosSearch() !== undefined ) { this.getPvs_Public_VehiculosSearch().close();  this.getPvs_Public_VehiculosSearch().destroy(); }
		if ( this.getOss_Operations_SalidasSearch() !== undefined ) { this.getOss_Operations_SalidasSearch().close();  this.getOss_Operations_SalidasSearch().destroy(); }
		if ( this.getOis_Operations_IngresosSearch() !== undefined ) { this.getOis_Operations_IngresosSearch().close();  this.getOis_Operations_IngresosSearch().destroy(); }
	},

	tve_btnSaveClick: function(button, e, options) {
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

	tve_btnUndoClick: function(button, e, options) {
		button.up('window').close();
	},

	tve_btnExitClick: function(button, e, options) {
		button.up('window').close();
	},

	tve_btnAnnularClick: function(button, e, options) {
		var _w = button.up('window');
		if ( options == undefined ) {
			Ext.Msg.confirm('Confirmación', '¿Esta Ud. seguro de ANULAR el documento seleccionado?', function(btn){
				if ( btn == 'yes' ) {
					var _win = Ext.create('Siace.view.public.UsuariosPsw2');
					_win.setCallButton(button); _win.setFormType('10'); _win.setCallKey('');
					_win.setSubTitle(_w.down('#doc_id').getRawValue().toUpperCase()+'/ '+_w.down('#vent_serie').getRawValue()+'-'+_w.down('#vent_nro').getValue());
					_win.show();
				}
			});
		} else {
			var _win = options.win;
			Ext.get(_w.getEl()).mask('Validando información... por favor espere un momento...', 'loading');
			var _vs = fextpub_sessionVariables();
			Ext.Ajax.request({
				url: 'php/treasury_ventas_delete.php',
				params: { xx0010: 'YES', xxVent_key: '', xxUsur_psw2: options.usur_psw2, xxVent_observ: options.observ,
				          xxDoc_id: _w.down('#doc_id').getValue(), xxVent_serie: _w.down('#vent_serie').getValue(), xxVent_nro: _w.down('#vent_nro').getValue()*1, xxVent_fecha: _w.down('#vent_fecha').getSubmitData(),
					      zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
				success: function(conn, response, options, eOpts) {
					var _result = Siace.util.Util.decodeJSON(conn.responseText);
					if ( _result.success ) {
						_win.close(); _win.destroy(); _w.close();
			            if ( _w.getCallStore() !== null ) { _w.getCallStore().load(); }
					} else {
						Ext.get(_w.getEl()).unmask();
						Siace.util.Util.showErrorMsg(_result.msg);
					}
				},
				failure: function(conn, response, options, eOpts) {
					Ext.get(_w.getEl()).unmask(); Siace.util.Util.showErrorMsg(conn.responseText);
				}
			});
		}
	},

	tve_btnAddClick: function(button, e, options) {
		fext_windowSearch(this.getTbss_Treasury_Bienes_ServsSearch(), button.up('window'), 'Siace.view.treasury.Bienes_ServsSearch', translations.treasury_bienes_servsssearch_title, '', 'ADD_VENTAS', 'ADD_VENTAS', false);
	},

	tve_btnIndiv_searchClick: function(button, e, options) {
 		fext_windowSearch(this.getPis_Public_IndividuosSearch(), button.up('window'), 'Siace.view.public.IndividuosSearch', translations.public_individuossearch_title, button.up('window').down('#indiv_key').getValue(), '', '', false);
	},

	tve_btnPers_searchClick: function(button, e, options) {
		fext_windowSearch(this.getPps_Public_PersonasSearch(), button.up('window'), 'Siace.view.public.PersonasSearch', translations.public_personassearch_title_cliente, button.up('window').down('#pers_key').getValue(), 'ONLY_WITH_RUC', '', false);
	},

	tve_btnRef_newClick: function(button, e, options) {
		var _panel = button.up('panel');
		_panel.getEl().mask(translations.mensaje_esperar, 'loading');
	    var _win = Ext.create('Siace.view.public.VehiculosEdit');
	    _win.setTypeEdit('1'); _win.setCallWindow(_panel); _win.setTypeReturn('ADD_VENTAS'); _win.show();
	    _panel.getEl().unmask();
	},

	tve_btnRef_searchClick: function(button, e, options) {
		var _win = button.up('window');
		if ( _win.down('#tipdocident_id').getValue() == '1' ) {
			if ( _win.down('#indiv_key').getValue() == '' ) { 
				Ext.Msg.alert(translations.mensaje, 'Debe indicar el CLIENTE', function() { _win.down('#indiv_dni').focus(); }); return false ; }
		} else {
			if ( _win.down('#pers_key').getValue() == '' ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar el CLIENTE', function() { _win.down('#pers_ruc').focus(); }); return false ; }
		}
		var _record = this.getTve_grdTreasury_Ventas_Det().getSelectionModel().getSelection()[0];
        if ( _record ) {
			if ( _record.data.tablex == '204' ) {
				fext_windowSearch(this.getPvs_Public_VehiculosSearch(), button.up('window'), 'Siace.view.public.VehiculosSearch', translations.public_vehiculossearch_title, '', '', 'ADD_VENTAS', false);
			} else if ( _record.data.tablex == '303' ) {
				fext_windowSearch(this.getOis_Operations_IngresosSearch(), button.up('window'), 'Siace.view.operations.IngresosSearch', translations.operations_ingresossearch_title, '', 'ADD_VENTAS', 'ADD_VENTAS', false);
			} else if ( _record.data.tablex == '304' ) {
				fext_windowSearch(this.getOss_Operations_SalidasSearch(), button.up('window'), 'Siace.view.operations.SalidasSearch', translations.operations_salidassearch_title, '', 'ADD_VENTAS', 'ADD_VENTAS', false);
			} else if ( _record.data.tablex == '101' ) {
				fext_windowSearch(undefined, button.up('window'), 'Siace.view.treasury.VentasSearch', translations.treasury_ventassearch_title, '', 'ADD_VENTAS', 'ADD_VENTAS', true);
				var _winVS = this.getTvs_Treasury_VentasSearch();
				_winVS.down('#doc_id').setValue(1); _winVS.down('#doc_id').disable();
				_winVS.down('#tipdocident_id').setValue(3); _winVS.down('#tipdocident_id').disable();
				_winVS.down('#pers_ruc').setValue(_win.down('#pers_ruc').getValue()); _winVS.down('#pers_ruc').disable(); _winVS.down('#pers_nombre').disable();
			}
		}
	},

	tve_btnRef_suppressClick: function(button, e, options) {
		var _win = button.up('window');
		var _recVDR = _win.down('#grdTreasury_ventas_det_referencias').getSelectionModel().getSelection()[0];
		if ( _recVDR ) {
			_win.down('#grdTreasury_ventas_det_referencias').getStore().remove(_recVDR);
		}
	},

	tve_btnSuppressClick: function(button, e, options) {
		//var _selection = this.gettve_grdtreasury_Ventas_Det().getView().getSelectionModel().getSelection()[0]; // este metodo tambien sirve
		var _record = this.getTve_grdTreasury_Ventas_Det().getSelectionModel().getSelection()[0];
        if ( _record ) {
        	button.setDisabled(true);
        	this.getTve_grdTreasury_Ventas_Det().getStore().remove(_record);
        	var _win = button.up('window');
        	_win.down('#grdTreasury_ventas_det_referencias').getStore().removeAll();
        	var _vent_monto = fjsRound(_win.down('#vent_monto').getValue()*1 - _record.data.ventdet_pretot*1, 2);
        	_win.down('#vent_monto').setValue(_vent_monto);
        	if ( _vent_monto <= 0  ) { _win.down('#vent_monto').setValue(''); _win.down('#mone_id').setValue(''); }
		}
	},

	tve_grdTreasury_ventas_detAdd: function(record) {
		var _store = this.getTve_grdTreasury_Ventas_Det().getStore();
        var _model = _store.findRecord('bs_id', record.data.bs_id);
        var _close = false;
        if ( _model == null ) {
        	var _win = this.getTve_grdTreasury_Ventas_Det().up('window');
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
	        this.tve_CalcularVventaIgv(_win);
	    } else {
	    	Ext.Msg.alert(translations.mensaje, 'servicio seleccionado ya se encuentra establecido');
	    }
		
		return _close;
	},

	tve_grdTreasury_ventas_detSelectionchange: function(model, record, options) {		
		if ( record.length == 1 ) {
			var _me = this;
			var _win = _me.getTve_grdTreasury_Ventas_Det().up('window');	
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
							_me.tve_panDet_referenciasConfigure(_win, record[0]);
						}
					},
					failure : function(response, options) { }
		        });
			} else {
				_me.tve_panDet_referenciasConfigure(_win, record[0]);
			}
		}
	},

	tve_grdTreasury_ventas_det_referenciasAdd: function(recordAdd, arrayAdd) {
		var _win = this.getTve_grdTreasury_Ventas_Det().up('window');
  		var _recVD = _win.down('#grdTreasury_ventas_det').getSelectionModel().getSelection()[0];
		var _storeVDR = _win.down('#grdTreasury_ventas_det_referencias').getStore();
		var _close = false;

		if ( _recVD.data.tablex == '204' ) {
	        var _model = _storeVDR.findRecord('tablex_id', (recordAdd == undefined ? arrayAdd['veh_id'] : recordAdd.data.veh_id));
	        if ( _model == null ) {
	        	if ( recordAdd == undefined ) {
	        		_storeVDR.add({ bs_id: _recVD.data.bs_id, tablex_id: arrayAdd['veh_id'], tablex_data0: arrayAdd['tipveh_nombre'], tablex_data1: arrayAdd['pais_abrev03'], tablex_data2: arrayAdd['veh_placa'], tablex_data4: arrayAdd['marc_nombre'] });
	        	} else {
			        _storeVDR.add({ bs_id: _recVD.data.bs_id, tablex_id: recordAdd.data.veh_id, tablex_data0: recordAdd.data.tipveh_nombre, tablex_data1: recordAdd.data.pais_abrev03, tablex_data2: recordAdd.data.veh_placa, tablex_data4: recordAdd.data.marc_nombre });
			    }
		    	_close = true;
		    } else {
		    	Ext.Msg.alert(translations.mensaje, 'Unidad Vehicular seleccionado ya se encuentra establecido en las referencias del detalle');
		    }
		} else if ( _recVD.data.tablex == '303' ) {
	        var _model = _storeVDR.findRecord('tablex_id', recordAdd.data.ing_id);
	        if ( _model == null ) {
				Ext.Ajax.request({
		            method: 'POST', url: 'php/operations_ingresos_json_records.php',
		            params: { xxIng_id: recordAdd.data.ing_id,  xxType_record: 'record_data', xxOrder_by: 'i.ing_id' },
					success : function(response, options) {
				        var _result = Siace.util.Util.decodeJSON(response.responseText);
				        if ( _result.success ) {
					        _storeVDR.add({ bs_id: _recVD.data.bs_id, tablex_id: recordAdd.data.ing_id, tablex_data0: recordAdd.data.ing_documento, tablex_data1: Ext.Date.format(recordAdd.data.ing_fecha,'d/m/Y'), tablex_data2: recordAdd.data.alma_abrev, tablex_data3: _result.data[0].tipmov_nombre, tablex_data4: _result.data[0].regadua_documento, tablex_data5: _result.data[0].pers_nombre });
						}
					}, failure : function(response, options){  }
		        });
				_close = true;
		    } else {
		    	Ext.Msg.alert(translations.mensaje, 'Documento seleccionado ya se encuentra establecido en las referencias del detalle');
		    }
		} else if ( _recVD.data.tablex == '304' ) {
	        var _model = _storeVDR.findRecord('tablex_id', recordAdd.data.sal_id);
	        if ( _model == null ) {
				Ext.Ajax.request({
		            method: 'POST', url: 'php/operations_salidas_json_records.php',
		            params: { xxSal_id: recordAdd.data.sal_id,  xxType_record: 'record_data', xxOrder_by: 's.sal_id' },
					success : function(response, options) {
				        var _result = Siace.util.Util.decodeJSON(response.responseText);
				        if ( _result.success ) {
					        _storeVDR.add({ bs_id: _recVD.data.bs_id, tablex_id: recordAdd.data.sal_id, tablex_data0: recordAdd.data.sal_documento, tablex_data1: Ext.Date.format(recordAdd.data.sal_fecha,'d/m/Y'), tablex_data2: recordAdd.data.alma_abrev, tablex_data3: _result.data[0].tipmov_nombre, tablex_data4: _result.data[0].regadua_documento, tablex_data5: _result.data[0].pers_nombre });
					    }
					}, failure : function(response, options){  }
		        });
		    	_close = true;
		    } else {
		    	Ext.Msg.alert(translations.mensaje, 'Documento seleccionado ya se encuentra establecido en las referencias del detalle');
		    }
		} else if ( _recVD.data.tablex == '101' ) {
	        var _model = _storeVDR.findRecord('tablex_id', (recordAdd == undefined ? arrayAdd['vent_id'] : recordAdd.data.vent_id));
	        if ( _model == null ) {
	        	if ( recordAdd == undefined ) {
	        		//_storeVDR.add({ bs_id: _recVD.data.bs_id, tablex_id: arrayAdd['vent_key'], tablex_data0: arrayAdd['vent_documento'], tablex_data1: arrayAdd['pais_abrev03'], tablex_data2: arrayAdd['veh_placa'], tablex_data4: arrayAdd['marc_nombre'] });
	        	} else {
			        _storeVDR.add({ bs_id: _recVD.data.bs_id, tablex_id: recordAdd.data.vent_id, tablex_data0: recordAdd.data.vent_documento, tablex_data1: Ext.Date.format(recordAdd.data.vent_fecha,'d/m/Y'), tablex_data2: recordAdd.data.pers_nombre, tablex_data3: recordAdd.data.tippag_abrev, tablex_data4: recordAdd.data.mone_abrev, tablex_data5: fjsRound(recordAdd.data.vent_monto,2) });
			    }
		    	_close = true;
		    } else {
		    	Ext.Msg.alert(translations.mensaje, 'Registro seleccionado ya se encuentra establecido en las referencias del detalle');
		    }
		}

		return _close;
	},

	tve_grdTreasury_ventas_det_referenciasSelectionchange: function(model, record, options) {
		var _win = this.getTve_grdTreasury_Ventas_Det().up('window');
		if ( record.length == 1 && _win.getTypeEdit() == '1' ) { _win.down('#btnRef_suppress').enable(); }
	},

	tve_indiv_dniBlur: function(textfield, The, options) {
		this.tve_indiv_dniSearch('0', textfield.up('form'));
	},

	tve_indiv_dniFocus: function(textfield, The, options) {
		this.tve_indiv_dniSearch('1', textfield.up('form'));
	},

	tve_indiv_dniKeypress: function(textfield, e, options) {
		if( e.getCharCode() == 13 ) { this.tve_indiv_dniSearch('13', textfield.up('form')); }
	},

	tve_indiv_dniSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['indiv_key', 'INDIV_DNI', 'indiv_dni', 'indiv_apenom'], 
			            ['php/public_individuos_json_records.php', 'xxIndiv_dni', 'textfield_search', ''], '1', 
			            ['Siace.view.public.IndividuosEdit', translations.public_individuossedit_title_new, ['indiv_dni'], '']);
	},

	tve_panDetalleActivate: function(component, options) {
		var _win = component.up('window');
		if ( _win.getTypeEdit() == '1' ) {
			_win.down('#btnAdd').enable();
        	var _record = _win.down('#grdTreasury_ventas_det').getSelectionModel().getSelection()[0];
			_win.down('#btnSuppress').setDisabled(_record ? false : true);
		}
	},

	tve_panDet_referenciasActivate: function(component, options) {
		component.up('window').down('#btnAdd').disable();  component.up('window').down('#btnSuppress').disable();
	},

	tve_panDet_referenciasConfigure: function(win, record) {
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

	tve_pers_rucBlur: function(textfield, e, options) {
		this.tve_pers_rucSearch('0', textfield.up('form'));
	},

	tve_pers_rucFocus: function(textfield, e, options) {
		this.tve_pers_rucSearch('1', textfield.up('form'));
	},

	tve_pers_rucKeypress: function(textfield, e, options) {
		if( e.getCharCode() == 13 ) { this.tve_pers_rucSearch('13', textfield.up('form')); }
	},

	tve_pers_rucSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['pers_key', 'PERS_RUC', 'pers_ruc', 'pers_nombre'],
			            ['php/public_personas_json_records.php', 'xxPers_ruc', 'textfield_search', ''], '1',
			            ['Siace.view.public.PersonasEdit', translations.public_personasedit_title_new, ['pers_ruc'], ''], '');
	},

	tve_tipdocident_idChange: function(combo, newValue, oldValue, options) {
		var _win = combo.up('window');
		if ( newValue == '1' ) { _win.down('#cntIndividuos').setVisible(true);  _win.down('#cntPersonas').setVisible(false); } 
		else { _win.down('#cntPersonas').setVisible(true);  _win.down('#cntIndividuos').setVisible(false); }
	},

	tve_tippag_idChange: function(combo, newValue, oldValue, options) {
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

	tve_vent_montoChange: function(textfield, newValue, oldValue, options) {
	},

	/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
	tvo_BeforeShow: function(component, options) {
		Ext.Ajax.request({
            method: 'POST', url: 'php/treasury_ventas_json_records.php',
            params: { xxVent_key: component.getCallKey(),  xxType_record: 'save_ok', xxOrder_by: 'vent_documento' },
			success : function(response, options) {
		        var _result = Siace.util.Util.decodeJSON(response.responseText);
		        if ( _result.success ) {
					component.down('#doc_nombre').setText(_result.data[0].doc_nombre.toUpperCase());
		        	component.down('#vent_documento').setText(_result.data[0].vent_documento);
				}
			},
			failure : function(response, options){ 
			}
        });
	},

	tvo_btnNewClick: function(button, e, options) {
		button.up('window').close();  button.up('window').destroy();
		this.tvb_ViewEdit('1', button.up('panel'));
	},

	tvo_btnPrinterClick: function(button, e, options) {
	},

	tvo_btnExitClick: function(button, e, options) {
		button.up('window').close();
	},

	/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
 	tvr_BeforeRender: function(component, options) {
		var _str = Ext.create('Ext.data.Store', {
			fields: [ { name: 'typrec_id', type: 'string' }, { name: 'typrec_nombre', type: 'string' }, ],
			data: [
				{ typrec_id: 'REPORT', typrec_nombre: 'Registro de Ventas' },
				{ typrec_id: 'REPORT_DETAIL', typrec_nombre: 'Registro de Ventas - Detalle' },
				{ typrec_id: 'REPORT_SUNAT', typrec_nombre: 'Registro de Ventas (SUNAT)' },
				{ typrec_id: 'REPORT_x_PERSONA', typrec_nombre: 'Registro de Ventas x Cliente' },
				{ typrec_id: 'REPORT_x_BS', typrec_nombre: 'Registro de Ventas x Servicio' },
				{ typrec_id: 'REPORT_x_BSCAT', typrec_nombre: 'Registro de Ventas x Categoría' },
				{ typrec_id: 'REPORT_x_PCTBL', typrec_nombre: 'Registro de Ventas x Cuenta Contable' },
				{ typrec_id: 'REPORT_x_ESPEDET', typrec_nombre: 'Registro de Ventas x Clasificador Presupuestal' },
			]
		});
		var _cboType_record = component.down('#type_record');
		_cboType_record.bindStore(_str);
		_cboType_record.getStore().load({ callback: function(records, operations, success) {  _cboType_record.setValue('REPORT'); } });
		fextpub_documentosFilter({'objeto': component.down('#doc_id'), 'doc_esventa': '1'});
		fextpub_tipos_pagoFilter({'objeto': component.down('#tippag_id'), 'tippag_esventa': '1'})
		fexttre_bienes_servs_categoriasFilter({'objeto': component.down('#bscat_id'), 'type_record': 'combo', 'disabled': true});
	},

	tvr_Close: function(panel, options) {
		//if ( this.getPns_Public_NandinasSearch() !== undefined ) { this.getPns_Public_NandinasSearch().close();  this.getPns_Public_NandinasSearch().destroy(); }
	},

	tvr_ViewReport: function(poComponent, pcFormat){
		if ( !poComponent.down('#fechaini').isValid() ) {
			Ext.Msg.alert(translations.mensaje, 'Fecha Inicial NO es Válida', function() { poComponent.down('#fechaini').focus(); }); return false ; }
		if ( !poComponent.down('#fechafin').isValid() ) {
			Ext.Msg.alert(translations.mensaje, 'Fecha Final NO es Válida', function() { poComponent.down('#fechafin').focus(); }); return false ; }

		var _type_record = poComponent.down('#type_record').getValue();
		var _fechaini = fjsDateSQL(poComponent.down('#fechaini').getRawValue());  var _fechafin = fjsDateSQL(poComponent.down('#fechafin').getRawValue());

		var _get = 'xxFormat='+pcFormat +'&xxType_record='+_type_record +'&xxDoc_id='+poComponent.down('#doc_id').getValue() +'&xxDoc_nombre='+poComponent.down('#doc_id').getRawValue() +'&xxTipdocident_id='+poComponent.down('#tipdocident_id').getValue() +'&xxPers_key='+(poComponent.down('#tipdocident_id').getValue() == '3' ? poComponent.down('#pers_key').getValue() : poComponent.down('#indiv_key').getValue()) +'&xxPers_ruc='+(poComponent.down('#tipdocident_id').getValue() == '3' ? poComponent.down('#pers_ruc').getValue() : poComponent.down('#indiv_dni').getValue()) +'&xxPers_nombre='+(poComponent.down('#tipdocident_id').getValue() == '3' ? poComponent.down('#pers_nombre').getValue() : poComponent.down('#indiv_apenom').getValue()) +'&xxTippag_id='+poComponent.down('#tippag_id').getValue() + '&xxTippag_nombre='+poComponent.down('#tippag_id').getRawValue() +'&xxBscat_id='+poComponent.down('#bscat_id').getValue() + '&xxBscat_nombre='+poComponent.down('#bscat_id').getRawValue() +'&xxMone_id='+poComponent.down('#mone_id').getValue() +'&xxMone_nombre='+poComponent.down('#mone_id').getRawValue() +'&xxFechaini='+_fechaini +'&xxFechafin='+_fechafin +'&xxOrder_by=vent_documento';
		if ( fjsIn_array(_type_record, ['REPORT']) ) {
        	fext_pdf('', 'Reporte de Ventas', 'php/pdf/pdf_treasury_ventas_report.php?'+_get);
		} else if ( fjsIn_array(_type_record, ['REPORT_SUNAT']) ) {
        	fext_pdf('', 'Reporte de Ventas (SUNAT)', 'php/pdf/pdf_treasury_ventas_report_sunat.php?'+_get);
		} else if ( fjsIn_array(_type_record, ['REPORT_x_BS']) ) {
			fext_pdf('', 'Reporte Ventas x Servicio', 'php/pdf/pdf_treasury_ventas_report_x_bs.php?'+_get);
		} else if ( fjsIn_array(_type_record, ['REPORT_x_BSCAT']) ) {
			fext_pdf('', 'Reporte Ventas x Categoría', 'php/pdf/pdf_treasury_ventas_report_x_bscat.php?'+_get);
		} else if ( fjsIn_array(_type_record, ['REPORT_x_ESPEDET']) ) {
			fext_pdf('', 'Reporte Ventas x Clasificador', 'php/pdf/pdf_treasury_ventas_report_x_espedet.php?'+_get);
		} else if ( fjsIn_array(_type_record, ['REPORT_x_PCTBL']) ) {
			fext_pdf('', 'Reporte Ventas x Cuenta Contable', 'php/pdf/pdf_treasury_ventas_report_x_pctbl.php?'+_get);
		} else if ( fjsIn_array(_type_record, ['REPORT_x_PERSONA']) ) {
			fext_pdf('', 'Reporte Ventas x Cliente', 'php/pdf/pdf_treasury_ventas_report_x_persona.php?'+_get);
		}
	},

	tvr_btnPdfClick: function(button, e, options) {
		this.tvr_ViewReport(button.up('panel'), 'P');
	},

	tvr_btnExcelClick: function(button, e, options) {
		this.tvr_ViewReport(button.up('panel'), 'E');
	},

	tvr_btnIndiv_searchClick: function(button, e, options) {
		var _pan = button.up('panel');
		if ( _pan.getWinPIS() == '' ) { _pan.setWinPIS(Ext.create('Siace.view.public.IndividuosSearch')); }
		fext_winSearch({'win': _pan.getWinPIS(), 'callWin': _pan, 'callKey': _pan.down('#indiv_key').getValue(), 'title': 'Buscar Cliente'});
 		//fext_windowSearch(this.getPis_Public_IndividuosSearch(), button.up('window'), 'Siace.view.public.IndividuosSearch', translations.public_individuossearch_title, button.up('window').down('#indiv_key').getValue(), '', '', false);
	},

	tvr_btnPers_searchClick: function(button, e, options) {
		var _pan = button.up('panel');
		if ( _pan.getWinPPS() == '' ) { _pan.setWinPPS(Ext.create('Siace.view.public.PersonasSearch')); }
		fext_winSearch({'win': _pan.getWinPPS(), 'callWin': _pan, 'callKey': _pan.down('#pers_key').getValue(), 'title': 'Buscar Cliente', 'typeQuery': 'ONLY_WITH_RUC'});
	},

	tvr_indiv_dniBlur: function(textfield, The, options) {
		this.tvr_indiv_dniSearch('0', textfield.up('panel'));
	},

	tvr_indiv_dniFocus: function(textfield, The, options) {
		this.tvr_indiv_dniSearch('1', textfield.up('panel'));
	},

	tvr_indiv_dniKeypress: function(textfield, e, options) {
		if( e.getCharCode() == 13 ) { this.tvr_indiv_dniSearch('13', textfield.up('panel')); }
	},

	tvr_indiv_dniSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['indiv_key', 'INDIV_DNI', 'indiv_dni', 'indiv_apenom'], 
			            ['php/public_individuos_json_records.php', 'xxIndiv_dni', 'textfield_search', ''], '', 
			            ['', '', '', '']);
	},

	tvr_pers_rucBlur: function(textfield, e, options) {
		this.tvr_pers_rucSearch('0', textfield.up('panel'));
	},

	tvr_pers_rucFocus: function(textfield, e, options) {
		this.tvr_pers_rucSearch('1', textfield.up('panel'));
	},

	tvr_pers_rucKeypress: function(textfield, e, options) {
		if( e.getCharCode() == 13 ) { this.tvr_pers_rucSearch('13', textfield.up('panel')); }
	},

	tvr_pers_rucSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['pers_key', 'PERS_RUC', 'pers_ruc', 'pers_nombre'],
			            ['php/public_personas_json_records.php', 'xxPers_ruc', 'textfield_search', ''], '',
			            ['', '', '', ''], '');
	},

	tvr_tipdocident_idChange: function(combo, newValue, oldValue, options) {
		var _pan = combo.up('panel');
		if ( newValue == '1' ) { _pan.down('#cntIndividuos').setVisible(true);  _pan.down('#cntPersonas').setVisible(false); } 
		else { _pan.down('#cntIndividuos').setVisible(false); _pan.down('#cntPersonas').setVisible(true); }
	},

	tvr_type_recordChange: function(combo, newValue, oldValue, options) {
		if ( oldValue != undefined ) { 
			var _pan = combo.up('panel');
			if ( fjsIn_array(newValue, ['REPORT_x_BS']) ) { _pan.down('#bscat_id').enable(); } 
			else { _pan.down('#bscat_id').disable(); _pan.down('#bscat_id').setValue(0); }
			_pan.down('#btnPdf').setDisabled(newValue == 'REPORT_SUNAT' ? true : false);
		}
	},

	/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	tvri_Render: function(component, options) {
		var _store = Ext.create('Siace.store.treasury.Recibos_Det');
		var _grid = component.down('#grdTreasury_recibos');
		_grid.bindStore(_store);
		_store.sort('recib_documento', 'ASC');
		_store.on('beforeload', function(store, operations, eOpts) {
		    store.getProxy().setExtraParam('xxTablex', '101');
		    store.getProxy().setExtraParam('xxTablex_id', component.down('#vent_id').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'grid_ventasri');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});
		_store.pageSize = 500;

		var _form = component.down('form');
	   	_form.load({
	   		method: 'POST', url: 'php/treasury_ventas_json_records.php',
	        params: { xxVent_key: component.getCallKey(),  xxType_record: 'window_ri', xxOrder_by: 'vent_key' },
	        waitMsg: 'Loading...',
	        success: function (form, action) {
	            try {
	                var _model = Ext.create('Siace.model.treasury.Venta');
					var _result = Ext.decode(action.response.responseText);
	                if ( _result.data[0] ) {
	                    _model.set(_result.data[0]);  _form.loadRecord(_model);
	                    component.down('#vent_fecha').setValue(fjsDateDDMMAAAA(_result.data[0].vent_fecha));
	                    component.down('#vent_monto').setValue(_result.data[0].mone_abrev+' '+fjsFormatNumeric(_result.data[0].vent_monto,2));
	                    component.down('#vent_monto_saldo').setValue(fjsFormatNumeric(_result.data[0].vent_monto_saldo,2));
	                    component.down('#pers_ruc').setFieldLabel(_result.data[0].tipdocident_abrev);
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

	/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	tvs_BeforeRender: function( component, options ) {
		var _store = Ext.create('Siace.store.treasury.Ventas');
		var _grid = component.down('#grdTreasury_ventas');
		var _pagingtoolbar = component.down('#pgtTreasury_ventas');
		_grid.bindStore(_store);  _pagingtoolbar.bindStore(_store);
		_store.sort('vent_documento', 'ASC');
		_store.on('beforeload', function(store, scope, options) {
			component.down('#btnAccept').setDisabled(true);

		    store.getProxy().setExtraParam('xxDoc_id', component.down('#doc_id').getValue());
		    store.getProxy().setExtraParam('xxTipdocident_id', component.down('#tipdocident_id').getValue());
		    store.getProxy().setExtraParam('xxPers_ruc', component.down('#pers_ruc').getValue());
		    store.getProxy().setExtraParam('xxPers_nombre', component.down('#pers_nombre').getValue());
		    store.getProxy().setExtraParam('xxFechaini', component.down('#fechaini').getRawValue());
		    store.getProxy().setExtraParam('xxFechafin', component.down('#fechafin').getRawValue());
		    store.getProxy().setExtraParam('xxType_record', 'grid_search');
		    store.getProxy().setExtraParam('xxType_query', component.getTypeQuery());
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});
		_store.pageSize = 500;
	},

	tvs_Clean: function() {
		var _win = this.getTvs_grdTreasury_Ventas().up('window');
		var _store = _win.down('#pgtTreasury_ventas').getStore();
		var _pagingtoolbar = _win.down('#pgtTreasury_ventas');
		fext_gridClean(_store, _pagingtoolbar);

		_win.down('#btnAccept').setDisabled(true);
	},

	tvs_btnAcceptClick: function(button, e, options) {
		var _win = button.up('window');
		var _grid = _win.down('#grdTreasury_ventas');
        var _record = _grid.getSelectionModel().getSelection()[0];
        var _close = true;

        if ( _record && _record.data.veh_id !== _win.getCallKey() ) {        	
        	if ( _win.getCallWindow() !== null ) {
  		      	if ( _win.getTypeReturn() == 'ADD_VENTAS' ) {
  		      		//_close = Siace.app.getController('treasury.Ventas').tve_grdtreasury_ventas_det_referenciasAdd(_record);
  		      		_close = this.tve_grdTreasury_ventas_det_referenciasAdd(_record);
        		} else {
        		}
        	}
        	if ( _close ) { _win.close(); if ( _win.getActionDestroy() == true ) { _win.destroy(); } }
		}
	},

	tvs_btnCancelClick: function(button, e, options) {
		button.up('window').close(); if ( button.up('window').getActionDestroy() == true ) { button.up('window').destroy(); }
	},

	tvs_doc_idChange: function(component, newValue, oldValue, options) {
		if ( oldValue != undefined ) { this.tvb_Clean(); }
	},

	tvs_grdTreasury_ventasItemDblClick: function(component, record, item, index, e, options) {
		var _btnAccept = component.up('window').down('#btnAccept');
        _btnAccept.fireEvent('click', _btnAccept, e, options);
	},

	tvs_grdTreasury_ventasSelectionChange: function(model, record, options) {
		if ( record.length == 1 ) {
			_win = this.getTvs_grdTreasury_Ventas().up('window');
			_win.down('#btnAccept').setDisabled( record[0].data.vent_key == _win.getCallKey() ? true : false );
		}
	},

	tvs_tipdocident_idChange: function(component, newValue, oldValue, options) {
		if ( oldValue != undefined ) { this.tvb_Clean(); }
	},

	/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	tvsxc_BeforeRender: function( component, options ) {
		var _store = Ext.create('Siace.store.treasury.Ventas');
		var _grid = component.down('#grdTreasury_ventas');
		var _pagingtoolbar = component.down('#pgtTreasury_ventas');
		_grid.bindStore(_store);  _pagingtoolbar.bindStore(_store);
		_store.sort('vent_fecha', 'ASC');
		_store.on('beforeload', function(store, scope, options) {
			component.down('#btnAccept').setDisabled(true);

		    store.getProxy().setExtraParam('xxPers_key', component.getPers_key());
		    store.getProxy().setExtraParam('xxTippag_id', '15');
		    store.getProxy().setExtraParam('xxType_record', 'grid_searchxcharge');
		    store.getProxy().setExtraParam('xxType_query', component.getTypeQuery());
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});
		_store.pageSize = 500;
	},

	tvsxc_btnAcceptClick: function(button, e, options) {
		var _win = button.up('window');
		var _grid = _win.down('#grdTreasury_ventas');
        var _record = _grid.getSelectionModel().getSelection()[0];
        var _close = true;

        if ( _record && _record.data.vent_key !== _win.getCallKey() ) {        	
  		    if ( _win.getTypeReturn() == 'ADD_RECIBOS' ) {
  		    	_close = Siace.app.getController('treasury.Recibos').tre_grdTreasury_recibos_detAdd(_record);
        	} else {
        	}
        	if ( _close ) { _win.close(); if ( _win.getActionDestroy() == true ) { _win.destroy(); } }
		}
	},

	tvsxc_btnCancelClick: function(button, e, options) {
		button.up('window').close(); if ( button.up('window').getActionDestroy() == true ) { button.up('window').destroy(); }
	},

	tvsxc_grdTreasury_ventasItemDblClick: function(component, record, item, index, e, options) {
		var _btnAccept = component.up('window').down('#btnAccept');
        _btnAccept.fireEvent('click', _btnAccept, e, options);
	},

	tvsxc_grdTreasury_ventasSelectionChange: function(model, record, options) {
		if ( record.length == 1 ) {
			_win = this.getTvsxc_grdTreasury_Ventas().up('window');
			_win.down('#btnAccept').setDisabled( record[0].data.vent_key == _win.getCallKey() ? true : false );
		}
	},
});