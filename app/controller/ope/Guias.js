Ext.define('Siace.controller.operations.Guias', {
	extend: 'Ext.app.Controller',
	views: ['operations.GuiasBrowse', 'operations.GuiasEdit', 'operations.GuiasBrowseWeighing',],
	stores: ['operations.Guias', 'public.Personas', 'public.Individuos',],
    refs: [
        { ref: 'ogbw_grdOperations_Guias', selector: 'operations_guiasbrowseweighing #grdOperations_guias' },
        { ref: 'oge_frmOperations_Guias', selector: 'operations_guiasedit #frmOperations_guias' },
        { ref: 'oge_grdOperations_Guias_Registros_Aduanas', selector: 'operations_guiasedit #grdOperations_guias_registros_aduanas' },
        { ref: 'orasta_Operations_Registros_AduanasSearchToAdd', selector: 'operations_registros_aduanassearchtoadd' },
        { ref: 'pcs_Public_ContenedoresSearch', selector: 'public_contenedoressearch' },
        { ref: 'pis_Public_IndividuosSearch', selector: 'public_individuossearch' },
        { ref: 'pps_Public_PersonasSearch', selector: 'public_personassearch' },
        { ref: 'ppts_Public_Personas_TransportistasSearch', selector: 'public_personas_transportistassearch' },
        { ref: 'pvs_Public_RemolquesSearch', selector: 'public_vehiculossearch' },
        { ref: 'pvs_Public_VehiculosSearch', selector: 'public_vehiculossearch' },
    ],

	init: function(application) {
		this.control({
			'operations_guiasbrowse': {	beforerender: this.ogb_BeforeRender, },
			'operations_guiasbrowse #opc_id': { change: this.ogb_opc_idChange, },
			'operations_guiasbrowse #btnNew': {	click: this.ogb_btnNewClick, },
			'operations_guiasbrowse #btnQuery': {	click: this.ogb_btnQueryClick, },
			'operations_guiasbrowse #btnAnnular': { click: this.ogb_btnAnnularClick, },
			'operations_guiasbrowse #btnEntry': { click: this.ogb_btnEntryClick, },
			'operations_guiasbrowse #btnOutput': {	click: this.ogb_btnOutputClick, },
			'operations_guiasbrowse #btnPrinter': { click: this.ogb_btnPrinterClick, },			
            'operations_guiasbrowse #alma_key': { change: this.ogb_alma_keyChange, },
			'operations_guiasbrowse #fechafin': { change: this.ogb_fechafinChange, },
			'operations_guiasbrowse #fechaini': { change: this.ogb_fechainiChange, },
			'operations_guiasbrowse #guia_nro': { change: this.ogb_guia_nroChange, },
			'operations_guiasbrowse #grdOperations_guias': { selectionchange: this.ogb_grdOperations_guiasSelectionchange, },
            'operations_guiasbrowse #guia_serie': { change: this.ogb_guia_serieChange, },

			'operations_guiasbrowseweighing': {	beforerender: this.ogbw_BeforeRender, },
			'operations_guiasbrowseweighing #opc_id': { change: this.ogbw_opc_idChange, },
			'operations_guiasbrowseweighing #btnInput': {	click: this.ogbw_btnInputClick, },
			'operations_guiasbrowseweighing #btnOutput': {	click: this.ogbw_btnOutputClick, },
			'operations_guiasbrowseweighing #btnQuery': {	click: this.ogbw_btnQueryClick, },
			'operations_guiasbrowseweighing #btnAnnular': { click: this.ogbw_btnAnnularClick, },
			'operations_guiasbrowseweighing #btnPrinter': { click: this.ogbw_btnPrinterClick, },
			'operations_guiasbrowseweighing #doc_id': { change: this.ogbw_doc_idChange, },
			'operations_guiasbrowseweighing #fechafin': { change: this.ogbw_Clean },
			'operations_guiasbrowseweighing #fechaini': { change: this.ogbw_Clean, },
			'operations_guiasbrowseweighing #grdOperations_guias': { selectionchange: this.ogbw_grdOperations_guiasSelectionchange, },
			'operations_guiasbrowseweighing #guia_nro': { change: this.ogbw_Clean },
            'operations_guiasbrowseweighing #guia_serie': { change: this.ogbw_guia_serieChange, },

			'operations_guiasedit': { beforeshow: this.oge_BeforeShow, close: this.oge_Close, },
            'operations_guiasedit #btnSave': { click: this.oge_btnSaveClick, },
            'operations_guiasedit #btnUndo': { click: this.oge_btnUndoClick, },
            'operations_guiasedit #btnExit': { click: this.oge_btnExitClick, },
            'operations_guiasedit #btnAdd': { click: this.oge_btnAddClick, },
            'operations_guiasedit #btnCont_search': { click: this.oge_btnCont_searchClick, },
            'operations_guiasedit #btnIndiv_search': { click: this.oge_btnIndiv_searchClick, },
            'operations_guiasedit #btnPerstransp_search': { click: this.oge_btnPerstransp_searchClick, },
            'operations_guiasedit #btnQuery': { click: this.oge_btnQueryClick, },
            'operations_guiasedit #btnSuppress': { click: this.oge_btnSuppressClick, },
            'operations_guiasedit #btnTrac_search': { click: this.oge_btnTrac_searchClick, },
            'operations_guiasedit #btnVeh_search': { click: this.oge_btnVeh_searchClick, },
			'operations_guiasedit actioncolumn#acOperations_guias_registros_aduanas': { click: this.oge_grdOperations_guias_registros_aduanasRecordDownload, },
			'operations_guiasedit #alma_key': { change: this.oge_alma_keyChange, },
            'operations_guiasedit #cont_placa': { blur: this.oge_cont_placaBlur, focus: this.oge_cont_placaFocus, keypress: this.oge_cont_placaKeypress, },
			'operations_guiasedit #grdOperations_guias_registros_aduanas': { selectionchange: this.oge_grdOperations_guias_registros_aduanasSelectionchange, },
            'operations_guiasedit #indiv_dni': { blur: this.oge_indiv_dniBlur, focus: this.oge_indiv_dniFocus, keypress: this.oge_indiv_dniKeypress, },
			'operations_guiasedit #perstransp_code': { blur: this.oge_perstransp_codeBlur, focus: this.oge_perstransp_codeFocus, keypress: this.oge_perstransp_codeKeypress, },
            'operations_guiasedit #tipaux_id': { change: this.oge_tipaux_idChange, },
            'operations_guiasedit #tipdocident_id': { change: this.oge_tipdocident_idChange, },
			'operations_guiasedit #trac_placa': { blur: this.oge_trac_placaBlur, focus: this.oge_trac_placaFocus, keypress: this.oge_trac_placaKeypress, },
			'operations_guiasedit #veh_placa': { blur: this.oge_veh_placaBlur, focus: this.oge_veh_placaFocus, keypress: this.oge_veh_placaKeypress, },

			'operations_guiaseditweighing': { beforeshow: this.ogew_BeforeShow, close: this.ogew_Close, },
            'operations_guiaseditweighing #btnSave': { click: this.ogew_btnSaveClick, },
            'operations_guiaseditweighing #btnUndo': { click: this.ogew_btnUndoClick, },
            'operations_guiaseditweighing #btnExit': { click: this.ogew_btnExitClick, },
            'operations_guiaseditweighing #btnIndiv_search': { click: this.ogew_btnIndiv_searchClick, },
            'operations_guiaseditweighing #btnIndiv_modify': { click: this.ogew_btnIndiv_modifyClick, },
            'operations_guiaseditweighing #btnPers_search': { click: this.ogew_btnPers_searchClick, },
            'operations_guiaseditweighing #btnPers_modify': { click: this.ogew_btnPers_modifyClick, },
            'operations_guiaseditweighing #btnVeh_search': { click: this.ogew_btnVeh_searchClick, },
            'operations_guiaseditweighing #btnVeh_modify': { click: this.ogew_btnVeh_modifyClick, },
            'operations_guiaseditweighing #indiv_key': { change: this.ogew_indiv_keyChange, },
            'operations_guiaseditweighing #indiv_dni': { blur: this.ogew_indiv_dniBlur, focus: this.ogew_indiv_dniFocus, keypress: this.ogew_indiv_dniKeypress, },
            'operations_guiaseditweighing #pers_key': { change: this.ogew_pers_keyChange, },
            'operations_guiaseditweighing #pers_ruc': { blur: this.ogew_pers_rucBlur, focus: this.ogew_pers_rucFocus, keypress: this.ogew_pers_rucKeypress, },
            'operations_guiaseditweighing #tipdocident_id': { change: this.ogew_tipdocident_idChange, },
			'operations_guiaseditweighing #veh_key': { change: this.ogew_veh_keyChange, },
			'operations_guiaseditweighing #veh_placa': { blur: this.ogew_veh_placaBlur, focus: this.ogew_veh_placaFocus, keypress: this.ogew_veh_placaKeypress, },
		});
	},

	ogb_BeforeRender: function(component, options) {
		fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': component.down('#opc_id'), 'menu_id': component.getMenuId() });
		fextope_almacenesFilter({'objeto': component.down('#alma_key'), 'add_blank': (Ext.getCmp('ah_txtAlma_key').getValue() == '' ? 'YES' : 'NO')});

		var _store = Ext.create('Siace.store.operations.Guias');
		var _grid = component.down('#grdOperations_guias'); var _pag = component.down('#pagOperations_guias');
		_grid.bindStore(_store);  _pag.bindStore(_store);
		_store.sort('guia_fecha', 'DESC'); _store.pageSize = 500;
		_store.on('beforeload', function(store, operations, eoptions) {
			component.down('#btnModify').disable(); component.down('#btnQuery').disable(); component.down('#btnAnnular').disable(); component.down('#btnPrinter').disable(); component.down('#btnEntry').disable(); component.down('#btnOutput').disable();

		    store.getProxy().setExtraParam('xxAlma_key', component.down('#alma_key').getValue());
		    store.getProxy().setExtraParam('xxDoc_id', '801');
		    store.getProxy().setExtraParam('xxGuia_serie', component.down('#guia_serie').getValue());
		    store.getProxy().setExtraParam('xxGuia_nro', component.down('#guia_nro').getValue());
		    store.getProxy().setExtraParam('xxFechaini', component.down('#fechaini').getSubmitData());
		    store.getProxy().setExtraParam('xxFechafin', component.down('#fechafin').getSubmitData());
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});
	},

	ogb_Clean: function(poComponent) {
		var _pag = poComponent.down('#pagOperations_guias'); var _store = _pag.getStore();
		fext_gridClean(_store, _pag);

		poComponent.down('#btnModify').disable(); poComponent.down('#btnQuery').disable(); poComponent.down('#btnAnnular').disable(); poComponent.down('#btnPrinter').disable(); poComponent.down('#btnEntry').disable(); poComponent.down('#btnOutput').disable();
	},

	ogb_ViewEdit: function(poComponent, pcTypeEdit){		
	    if ( fjsIn_array(pcTypeEdit, ['2','3','11','12']) ) {
	    	var _record = poComponent.down('#grdOperations_guias').getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }
	    }
	    var _win = Ext.create('Siace.view.operations.GuiasEdit');
	    _win.setTypeEdit(pcTypeEdit); _win.setCallStore(poComponent.down('#grdOperations_guias').getStore());
	    if ( fjsIn_array(pcTypeEdit, ['2','3','11','12']) ) { _win.setCallKey(_record.data.guia_key); }
	    _win.show();
	},

	ogb_opc_idChange: function(combo, newValue, oldValue, options) {
		combo.up('panel').down('#btnNew').setDisabled(fextpub_uamoButtons(combo, 1));
	},

	ogb_btnNewClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 1) ) { return false; } this.ogb_ViewEdit(button.up('panel'), '1');
	},

	ogb_btnModifyClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 2) ) { return false; } this.ogb_ViewEdit(button.up('panel'), '2');
	},

	ogb_btnQueryClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 3) ) { return false; } this.ogb_ViewEdit(button.up('panel'), '3');
	},

	ogb_btnAnnularClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 7) ) { return false; } 
		if ( options == undefined ) {
	        var _record = button.up('panel').down('#grdOperations_guias').getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }

			Ext.Msg.confirm('Confirmación', '¿Esta Ud. seguro de ANULAR el registro seleccionado?', function(btn){
				if ( btn == 'yes' ) {
					var _win = Ext.create('Siace.view.public.UsuariosPsw2');
					_win.setCallButton(button); _win.setFormType('10')
					_win.setCallKey(_record.data.guia_key); _win.setSubTitle(_record.data.guia_documento);
					_win.show();
				}
			});
		} else {
			var _win = options.win;
			var _panel = this.getOgb_grdOperations_Guias().up('panel'); var _store = this.getOgb_grdOperations_Guias().getStore();
			Ext.get(_panel.getEl()).mask('Validando información... por favor espere un momento...', 'loading');
			var _vs = fextpub_sessionVariables();
			Ext.Ajax.request({
				url: 'php/operations_guias_delete.php',
				params: { xx0007: 'YES', xxType_edit: '10', xxGuia_key: options.key, xxUsur_psw2: options.usur_psw2, xxGuia_observ: options.observ, xxMenu_id: _panel.getMenuId(),
					      zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
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

	ogb_btnPrinterClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 8) ) { return false; } 
		var _record = button.up('panel').down('#grdOperations_guias').getSelectionModel().getSelection()[0];
		if ( !_record ) { return false; }

        fext_pdf('', translations.pdf_operations_guias_printer_title, 'php/pdf/pdf_operations_guias_printer.php?xxGuia_key='+_record.data.guia_key);
	},

	ogb_btnEntryClick: function(button, e, options) {
		var _panel = button.up('panel');
		if ( fextpub_uamoButtons(_panel.down('#opc_id'), 8002) ) { return false; } 
		if ( options == undefined ) {
			var _record = _panel.down('#grdOperations_guias').getSelectionModel().getSelection()[0];
			if ( !_record ) { return false; }
			if ( _record.data.guia_ing_fecha == null ) { this.ogb_ViewEdit('11', button.up('panel')); } 
			else { 
				Ext.Msg.confirm('Confirmación', '¿Esta Ud. seguro de Quitar el Pesaje de Ingreso al Ticket seleccionado?', function(btn){
					if ( btn == 'yes' ) {
						var _win = Ext.create('Siace.view.public.UsuariosPsw2');
						_win.setCallButton(button); _win.setFormType('202');
						_win.setCallKey(_record.data.guia_key); _win.setSubTitle(_record.data.guia_documento); _win.show();
					}
				});
			}
		} else {
			var _win = options.win; var _store = _panel.down('#grdOperations_guias').getStore();
			Ext.get(_panel.getEl()).mask('Validando información... por favor espere un momento...', 'loading');
	    	var _vs = fextpub_sessionVariables();
			Ext.Ajax.request({
				url: 'php/operations_guias_delete.php',
				params: { xx0007: 'YES', xxType_edit: '21', xxGuia_key: options.key, xxUsur_psw2: options.usur_psw2, xxGuia_observ: options.observ, xxMenu_id: _panel.getMenuId(),
					      zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
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

	ogb_btnOutputClick: function(button, e, options) {
		var _panel = button.up('panel');
		if ( fextpub_uamoButtons(_panel.down('#opc_id'), 8003) ) { return false; } 
		if ( options == undefined ) {
			var _record = _panel.down('#grdOperations_guias').getSelectionModel().getSelection()[0];
			if ( !_record ) { return false; }
			if ( _record.data.guia_sal_fecha == null ) { this.ogb_ViewEdit('12', button.up('panel')); } 
			else { 
				Ext.Msg.confirm('Confirmación', '¿Esta Ud. seguro de Quitar el Pesaje de Salida al Ticket seleccionado?', function(btn){
					if ( btn == 'yes' ) {
						var _win = Ext.create('Siace.view.public.UsuariosPsw2');
						_win.setCallButton(button); _win.setFormType('203');
						_win.setCallKey(_record.data.guia_key); _win.setSubTitle(_record.data.guia_documento); _win.show();
					}
				});
			}
		} else {
			var _win = options.win; var _store = _panel.down('#grdOperations_guias').getStore();
			Ext.get(_panel.getEl()).mask('Validando información... por favor espere un momento...', 'loading');
	    	var _vs = fextpub_sessionVariables();
			Ext.Ajax.request({
				url: 'php/operations_guias_delete.php',
				params: { xx0007: 'YES', xxType_edit: '22', xxGuia_key: options.key, xxUsur_psw2: options.usur_psw2, xxGuia_observ: options.observ, xxMenu_id: _panel.getMenuId(),
					      zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
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

	ogb_alma_keyChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.ogb_Clean(combo.up('panel')); }
	},

	ogb_fechafinChange: function(datefield, newValue, oldValue, options) {
		this.ogb_Clean(datefield.up('panel'));
	},

	ogb_fechainiChange: function(datefield, newValue, oldValue, options) {
		this.ogb_Clean(datefield.up('panel'));
	},

	ogb_sal_nroChange: function(textfield, newValue, oldValue, options) {
		this.ogb_Clean(textfield.up('panel'));
	},

	ogb_grdOperations_guiasSelectionchange: function(model, record, options) {
		if ( record.length == 1 ) {
			var _panel = model.view.panel.up('panel').up('panel'); var _cboOpc_id = _panel.down('#opc_id'); 
			var _flga = record[0].data.guia_flga; var _fechaing = record[0].data.guia_ing_fecha; var _fechasal = record[0].data.guia_sal_fecha;
			_panel.down('#btnModify').setDisabled(_flga == '98' || _fechaing !== null ? true : fextpub_uamoButtons(_cboOpc_id, 2));
			_panel.down('#btnQuery').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 3));
			_panel.down('#btnAnnular').setDisabled(_flga == '98' || _fechaing !== null ? true : fextpub_uamoButtons(_cboOpc_id, 10));
			_panel.down('#btnPrinter').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 8));
			if ( _flga == '98' ) {
				_panel.down('#btnEntry').disable(); _panel.down('#btnOutput').disable();
				_panel.down('#btnEntry').setIcon('resources/icons/btnEntry.jpg'); _panel.down('#btnOutput').setIcon('resources/icons/btnOutput.jpg');
			} else if ( _fechaing == null ) {
				_panel.down('#btnEntry').setDisabled(fextpub_uamoButtons(_cboOpc_id, 8002)); _panel.down('#btnOutput').disable();
				_panel.down('#btnEntry').setIcon('resources/icons/btnEntry.jpg'); _panel.down('#btnOutput').setIcon('resources/icons/btnOutput.jpg');
			} else if ( _fechaing !== null && _fechasal == null ) {
				_panel.down('#btnEntry').setDisabled(fextpub_uamoButtons(_cboOpc_id, 8002)); _panel.down('#btnOutput').setDisabled(fextpub_uamoButtons(_cboOpc_id, 203));
				_panel.down('#btnEntry').setIcon('resources/icons/btnUndo.png'); _panel.down('#btnOutput').setIcon('resources/icons/btnOutput.jpg');
			} else {
				_panel.down('#btnEntry').disable(); _panel.down('#btnOutput').setDisabled(fextpub_uamoButtons(_cboOpc_id, 8003));
				_panel.down('#btnEntry').setIcon('resources/icons/btnEntry.jpg'); _panel.down('#btnOutput').setIcon('resources/icons/btnUndo.png');
			}
		}
	},

	ogb_guia_serieChange: function(combo, newValue, oldValue, options) {
		this.ogb_Clean(combo.up('panel'));
	},

	/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
	ogbw_BeforeRender: function(component, options) {
		fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': component.down('#opc_id'), 'menu_id': component.getMenuId() });
		fextpub_documentos_seriesParameters({'panel': component, 'itemId': 'guia_serie'});

		var _str = Ext.create('Ext.data.Store', {
			fields: [ { name: 'doc_id', type: 'int' }, { name: 'doc_nombre', type: 'string' }, ],
			data: [	{ doc_id: '812', doc_nombre: 'Ticket de Pesaje' }, ]
		});
		var _cboDoc_id = component.down('#doc_id');
		_cboDoc_id.bindStore(_str);
		_cboDoc_id.getStore().load({ callback: function(records, operations, success) { _cboDoc_id.setValue(812); }});

		var _store = Ext.create('Siace.store.operations.Guias');
		var _grid = component.down('#grdOperations_guias'); var _pagtool = component.down('#pgtOperations_guias');
		_grid.bindStore(_store);  _pagtool.bindStore(_store);
		_store.sort('guia_fecha', 'DESC'); _store.pageSize = 500;
		_store.on('beforeload', function(store, operations, eoptions) {
			component.down('#btnOutput').disable(); component.down('#btnQuery').disable(); component.down('#btnAnnular').disable(); component.down('#btnPrinter').disable();

		    store.getProxy().setExtraParam('xxDoc_id', component.down('#doc_id').getValue());
		    store.getProxy().setExtraParam('xxGuia_serie', component.down('#guia_serie').getValue());
		    store.getProxy().setExtraParam('xxGuia_nro', component.down('#guia_nro').getValue());
		    store.getProxy().setExtraParam('xxFechaini', component.down('#fechaini').getSubmitData());
		    store.getProxy().setExtraParam('xxFechafin', component.down('#fechafin').getSubmitData());
		    store.getProxy().setExtraParam('xxType_record', 'gridweighing');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});
	},

	ogbw_Clean: function(poComponent) {
		var _panel = this.getOgbw_grdOperations_Guias().up('panel');
		var _store = _panel.down('#pgtOperations_guias').getStore();
		var _pagingtoolbar = _panel.down('#pgtOperations_guias');
		fext_gridClean(_store, _pagingtoolbar);

		_panel.down('#btnOutput').disable(); _panel.down('#btnQuery').disable(); _panel.down('#btnAnnular').disable(); _panel.down('#btnPrinter').disable();
	},

	ogbw_ViewEdit: function(pcTypeEdit, poComponent) {
		if ( fjsIn_array(pcTypeEdit, ['1']) ) {
			if ( poComponent.down('#doc_id').getValue() == '' || poComponent.down('#doc_id').getValue()*1 <= 0 ) {
			    Ext.MessageBox.alert(translations.mensaje, 'Debe indicar el Documento', function() { poComponent.down('#doc_id').focus(); }); return false ; }
			if ( poComponent.down('#guia_serie').getValue() == '' || poComponent.down('#guia_serie').getValue()*1 <= 0 ) {
				Ext.MessageBox.alert(translations.mensaje, 'Debe indicar la Serie del Documento', function() { poComponent.down('#guia_serie').focus(); }); return false ; }
	    } else if ( fjsIn_array(pcTypeEdit, ['12','3']) ) {
	    	var _record = poComponent.down('#grdOperations_guias').getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }
	    }

	    var _win = Ext.create('Siace.view.operations.GuiasEditWeighing');
	    _win.setTypeEdit(pcTypeEdit); _win.setCallStore(poComponent.down('#grdOperations_guias').getStore()); _win.setDoc_id(poComponent.down('#doc_id').getValue());
	    if ( fjsIn_array(pcTypeEdit, ['1']) ) { _win.setGuia_serie(poComponent.down('#guia_serie').getValue()); }
	    else if ( fjsIn_array(pcTypeEdit, ['12','3']) ) { _win.setCallKey(_record.data.guia_key); }
	    _win.show();
	},

	ogbw_opc_idChange: function(combo, newValue, oldValue, options) {
		combo.up('panel').down('#btnInput').setDisabled(fextpub_uamoButtons(combo, 202));
	},

	ogbw_btnInputClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 1) ) { return false; } this.ogbw_ViewEdit('1', button.up('panel'));
	},

	ogbw_btnOutputClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 2) ) { return false; } this.ogbw_ViewEdit('12', button.up('panel'));
	},

	ogbw_btnQueryClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 3) ) { return false; } this.ogbw_ViewEdit('3', button.up('panel') );
	},

	ogbw_btnAnnularClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 10) ) { return false; }
		var _panel = button.up('panel');
		if ( options == undefined ) {
	        var _record = _panel.down('#grdOperations_guias').getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }

			Ext.Msg.confirm('Confirmación', '¿Esta Ud. seguro de ANULAR el registro seleccionado?', function(btn){
				if ( btn == 'yes' ) {
					var _win = Ext.create('Siace.view.public.UsuariosPsw2');
					_win.setCallButton(button);
					_win.setCallKey(_record.data.guia_key);
					_win.setSubTitle(_record.data.guia_documento);
					_win.show();
				}
			});
		} else {
			var _win = options.win; var _store = _panel.down('#grdOperations_guias').getStore();
			Ext.get(_panel.getEl()).mask('Validando información... por favor espere un momento...', 'loading');
			fextpub_sessionVariables();
			Ext.Ajax.request({
				url: 'php/operations_guias_delete.php',
				params: { xx0007: 'YES', xxType_edit: '10', xxGuia_key: options.key, xxUsur_psw2: options.usur_psw2, xxGuia_observ: options.observ,
					      xxUsursess_key: xxUsursess_key, xxUsur_key: xxUsur_key, xxAlma_key: xxAlma_key },
				success: function(conn, response, options, eOpts) {
					var _result = Siace.util.Util.decodeJSON(conn.responseText);
					if ( _result.success ) {
						_win.close();
			            _store.load({
			            	callback: function(opt, success, respon) { Ext.get(_panel.getEl()).unmask(); }
			            });
					} else { Ext.get(_panel.getEl()).unmask(); Siace.util.Util.showErrorMsg(_result.msg); }
				},
				failure: function(conn, response, options, eOpts) { Ext.get(_panel.getEl()).unmask(); Siace.util.Util.showErrorMsg(conn.responseText); }
			});
		}
	},

	ogbw_doc_idChange: function(combo, newValue, oldValue, options) {
		fextpub_documentos_seriesLoad({'panel': combo.up('panel'), 'itemId': 'guia_serie'});
		if ( oldValue !== undefined ) { this.tcb_Clean(); }
	},

	ogbw_grdOperations_guiasSelectionchange: function(model, record, options) {			
		if ( record.length == 1 ) {
			var _panel = model.view.panel.up('panel'); var _cboOpc_id = _panel.down('#opc_id'); _flga = record[0].data.guia_flga;
			_panel.down('#btnOutput').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 203));
			_panel.down('#btnQuery').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 3));
			_panel.down('#btnAnnular').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 10));
			_panel.down('#btnPrinter').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 8));
		}
	},

	ogbw_guia_serieChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.ogbw_Clean(); }
	},

	/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
	oge_BeforeShow: function(component, options) {
		var _store = Ext.create('Siace.store.operations.Guias_Registros_Aduanas');
		var _grid = component.down('#grdOperations_guias_registros_aduanas');
		_grid.bindStore(_store);
		_store.sort('regadua_fecha', 'DESC'); _store.pageSize = 500;
		_store.on('beforeload', function(store, operations, eOpts) {
			component.down('#btnQuery').disable(); component.down('#btnSuppress').disable();

		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});

		var _typeEdit = component.getTypeEdit();
	    if ( _typeEdit == '1' ) {
	    	fextope_almacenesFilter({'objeto': component.down('#alma_key'), 'type_record': 'combo', 'add_blank': 'NO'});
	    	component.down('#guia_fecha').setValue(fjsDateCurrent(''));
	    	fext_removeAddConfig(component.down('#fcGuia_ing_peso'), '', 'lbl00601');
	    	fext_removeAddConfig(component.down('#fcGuia_sal_peso'), '', 'lbl00601');

	        var _icon = 'icon_New_90'; var _title = translations.operations_guiasedit_title_new;
	    } else if ( fjsIn_array(_typeEdit, ['2','3','11','12']) ) {
	    	fextope_almacenesFilter({'objeto': component.down('#alma_key'), 'type_record': 'combo', 'add_blank': 'NO'});
	    	//fextope_almacenesCombo(component.down('#alma_key'), true, '', '', '', 'combo', '');
	        var _form = component.down('form');
	        _form.load({
	            method: 'POST', url: 'php/operations_guias_json_records.php',
	            params: { xxGuia_key: component.getCallKey(),  xxType_record: 'form', xxOrder_by: 'guia_key' },
	            waitMsg: 'Loading...',
	            success: function (form, action) {
	                try {
	                    var _model = Ext.create('Siace.model.operations.Guia'); var _result = Ext.decode(action.response.responseText);
	                    if ( _result.data[0] ) {
	                        _model.set(_result.data[0]);  _form.loadRecord(_model); var _data = _result.data[0];
	                        component.down('#PERSTRANSP_CODE').setValue(_data.perstransp_code); component.down('#perstransp_code').setValue(_data.perstransp_code); component.down('#perstransp_nombre').setValue(_data.perstransp_nombre);
	                        component.down('#VEH_PLACA').setValue(_data.veh_placa); component.down('#veh_placa').setValue(_data.veh_placa); component.down('#tipveh_nombre').setValue(_data.tipveh_nombre);
	                        component.down('#TRAC_PLACA').setValue(_data.trac_placa); component.down('#trac_placa').setValue(_data.trac_placa);
	                        component.down('#CONT_PLACA').setValue(_data.cont_placa); component.down('#cont_placa').setValue(_data.cont_placa);
        					component.down('#grdOperations_guias_registros_aduanas').getStore().load({
        						params: { xxGuia_key: component.getCallKey(), xxType_record: 'grid_guia' }
        					});
        					if ( _data.guia_nro*1 > 0 ) { component.down('#guia_nro').setValue(fjsLpad(_data.guia_nro, 5, '0')); }
	                    }
	                }
	                catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
	            },
	            failure: function (form, action) { Ext.Msg.alert("Load failed", action.result.errorMessage); }
	        });

	        if ( _typeEdit == '2' ) {
	            var _icon = 'icon_Modify_90'; var _title = translations.public_individuosedit_title_modify; 
	            component.down('#indiv_dni').setDisabled( component.down('#tipdocident_id').getValue() == '99' ? true : false );
	        } else { 
	            var _icon = 'icon_Query_90'; var _title = 'Consulta Ticket de Pesaje'; 
	            component.down('#pnl03').tab.show();
	            component.down('#alma_key').disable(); component.down('#perstransp_code').disable(); component.down('#btnPerstransp_search').disable(); component.down('#indiv_dni').disable(); component.down('#btnIndiv_search').disable();
	            component.down('#veh_placa').disable(); component.down('#btnVeh_search').disable(); component.down('#trac_placa').disable(); component.down('#btnTrac_search').disable();
	            component.down('#cont_placa').disable(); component.down('#btnCont_search').disable(); component.down('#tipaux_id').disable(); component.down('#guia_code').disable();
	            component.down('#btnAdd').disable();
	            if ( _typeEdit == '3' ) {
	            	component.down('#guia_observ').disable();
					component.down('#btnSave').disable(); component.down('#btnUndo').disable(); component.down('#btnExit').enable();
				} else if ( _typeEdit == '11' ) {
					component.down('#tabOperations_guias').setActiveTab(2); component.down('#guia_ing_peso').enable(); component.down('#guia_ing_peso').focus(true);
				} else if ( _typeEdit == '12' ) {
					component.down('#tabOperations_guias').setActiveTab(2); component.down('#guia_sal_peso').enable(); component.down('#guia_sal_peso').focus();
				}
	        }
	    }
	    component.setIconCls(_icon); component.setTitle(_title);
	},

	oge_Close: function(panel, options) {
		// es aconsejable usar con destroy para destruir totalmente el componente
		if ( this.getPcs_Public_ContenedoresSearch() !== undefined ) { this.getPcs_Public_ContenedoresSearch().close();  this.getPcs_Public_ContenedoresSearch().destroy(); }
		if ( this.getPis_Public_IndividuosSearch() !== undefined ) { this.getPis_Public_IndividuosSearch().close();  this.getPis_Public_IndividuosSearch().destroy(); }
		if ( this.getPpts_Public_Personas_TransportistasSearch() !== undefined ) { this.getPpts_Public_Personas_TransportistasSearch().close();  this.getPpts_Public_Personas_TransportistasSearch().destroy(); }
		if ( this.getPvs_Public_VehiculosSearch() !== undefined ) { this.getPvs_Public_VehiculosSearch().close();  this.getPvs_Public_VehiculosSearch().destroy(); }
		if ( this.getOrasta_Operations_Registros_AduanasSearchToAdd() !== undefined ) { this.getOrasta_Operations_Registros_AduanasSearchToAdd().close();  this.getOrasta_Operations_Registros_AduanasSearchToAdd().destroy(); }
	},

	oge_btnSaveClick: function(button, e, options) {
	    var _win = button.up('window'); var _frm = _win.down('form');
	    if ( _win.down('#alma_key').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el Usuario', function() { _win.down('#alma_key').focus(); }); return false ; }
	    if ( _win.down('#perstransp_key').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el Transportista', function() { _win.down('#perstransp_code').focus(); }); return false ; }
	    if ( _win.down('#veh_key').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el Vehículo de transporte', function() { _win.down('#veh_placa').focus(); }); return false ; }
	    if ( _win.down('#tipaux_id').getValue()*1 > 0 && _win.down('#guia_code').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el codigo del '+_win.down('#tipaux_id').getRawValue(), function() { _win.down('#guia_code').focus(); }); return false ; }

		if ( this.getOge_grdOperations_Guias_Registros_Aduanas().getStore().getCount() <= 0 ) {
			Ext.Msg.alert(translations.mensaje, 'Debe seleccionar por ll menos un registro aduanero'); return false ; }
		var _regadua_key = ''; var _recordsRA = _win.down('#grdOperations_guias_registros_aduanas').getStore().getRange();
		for ( var _i = 0;  _i < _recordsRA.length; _i++ ){
			_regadua_key += (_i == 0 ? '' : ',') + '{' + _recordsRA[_i].get('regadua_key') + '}';
		}

	    var _guia_ing_peso = 0;  var _guia_sal_peso = 0;
	    if ( _win.getTypeEdit() == '11' ) {
	        if ( _win.down('#guia_ing_peso').getValue() == '' || _win.down('#guia_ing_peso').getValue()*1 <= 0 ) {
	        	Ext.Msg.alert(translations.mensaje, '! Pesaje de Ingreso no puede ser vacio ¡', function() { _win.down('#guia_ing_peso').focus(); }); return false ; }
	        _guia_ing_peso = _win.down('#guia_ing_peso').getValue();
	    } else if ( _win.getTypeEdit() == '12' ) {
	        if ( _win.down('#guia_sal_peso').getValue() == '' || _win.down('#guia_sal_peso').getValue()*1 <= 0 ) {
	        	Ext.Msg.alert(translations.mensaje, '! Pesaje de Salida no puede ser vacio ¡', function() { _win.down('#guia_sal_peso').focus(); }); return false ; }
	        if ( _win.down('#guia_sal_peso').getValue()*1 > _win.down('#guia_ing_peso').getValue()*1  ) {
	  		    Ext.Msg.alert(translations.mensaje, '! Pesaje de Salida no puede ser mayor a Pesaje de Ingreso¡', function() { _win.down('#guia_sal_peso').focus(); }); return false ; }
	        _guia_sal_peso = _win.down('#guia_sal_peso').getValue();
	    }
	    if ( _frm.getForm().isValid() ) {
	    	var _vs = fextpub_sessionVariables();
	        _frm.getForm().submit({
				method: 'POST', url: 'php/operations_guias_save.php',
				params:{ xx0005: 'OK', xxType_edit: _win.getTypeEdit(), Alma_key: _win.down('#alma_key').getValue(),
				         xxGuia_ing_peso: _guia_ing_peso, xxGuia_sal_peso: _guia_sal_peso, xxRegadua_key: _regadua_key,
					     zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
                waitTitle: translations.valida_titulo, waitMsg: translations.valida_mensaje01,
	            
	            success: function(form, action) {
	            	var _result = Siace.util.Util.decodeJSON(action.response.responseText);
	                if ( _result.success ) {
			            if ( _win.getCallStore() !== null ) { _win.getCallStore().load(); }
					    else if ( _win.getCallWindow() !== null ) { }
	                    _win.close();
	                } else { Siace.util.Util.showErrorMsg(_result.msg); }
	            },
	            failure: function(form, action) { Siace.util.Util.showErrorMsg(action.response.responseText); }
	        });
	    }
	},

	oge_btnUndoClick: function(button, e, options) {
		button.up('window').close();
	},

	oge_btnExitClick: function(button, e, options) {
		button.up('window').close();
	},

	oge_btnAddClick: function(button, e, options) {
		fext_windowSearch(this.getOrasta_Operations_Registros_AduanasSearchToAdd(), button.up('window'), 'Siace.view.operations.Registros_AduanasSearchToAdd', translations.operations_registros_aduanassearchtoadd_title, '', '1'+button.up('window').down('#alma_key').getValue(), 'GUIA_ADD', false);
	},

	oge_btnCont_searchClick: function(button, e, options) {
		fext_windowSearch(this.getPcs_Public_ContenedoresSearch(), button.up('window'), 'Siace.view.public.ContenedoresSearch', translations.public_contenedoressearch_title, button.up('window').down('#cont_id').getValue(), '', '', '');
	},

	oge_btnIndiv_searchClick: function(button, e, options) {
		fext_windowSearch(this.getPis_Public_IndividuosSearch(), button.up('window'), 'Siace.view.public.IndividuosSearch', translations.public_individuossearch_title, button.up('window').down('#indiv_key').getValue(), '');
	},

	oge_btnPerstransp_searchClick: function(button, e, options) {
		fext_windowSearch(this.getPpts_Public_Personas_TransportistasSearch(), button.up('window'), 'Siace.view.public.Personas_TransportistasSearch', translations.public_personas_transportistassearch_title, button.up('window').down('#perstransp_key').getValue(), '');
	},

	oge_btnQueryClick: function(button, e, options) {
        var _record = this.getOge_grdOperations_Guias_Registros_Aduanas().getSelectionModel().getSelection()[0];
        if ( !_record ) { return false; }
	    var _win = Ext.create('Siace.view.operations.Registros_AduanasEdit');
	    _win.setTypeEdit('3'); _win.setCallKey(_record.data.regadua_key); _win.show();
	},

	oge_btnSuppressClick: function(button, e, options) {
		//var _selection = this.getOie_grdOperations_industrias_insumos().getView().getSelectionModel().getSelection()[0]; // este metodo tambien sirve
		var _selection = this.getOge_grdOperations_Guias_Registros_Aduanas().getSelectionModel().getSelection()[0];
        if ( _selection ) {
            this.getOge_grdOperations_Guias_Registros_Aduanas().getStore().remove(_selection);
            button.setDisabled(true);
            if ( this.getOge_grdOperations_Guias_Registros_Aduanas().getStore().getCount() <= 0 ) {
            	button.up('form').down('#alma_key').setDisabled(false);
            }
		}
	},

	oge_btnTrac_searchClick: function(button, e, options) {
		fext_windowSearch(undefined, button.up('window'), 'Siace.view.public.VehiculosSearch', translations.public_vehiculossearch_title, button.up('window').down('#trac_key').getValue(), 'SOLO_TRACTOS', 'TRACTOS', true);
	},

	oge_btnVeh_searchClick: function(button, e, options) {
		fext_windowSearch(undefined, button.up('window'), 'Siace.view.public.VehiculosSearch', translations.public_vehiculossearch_title, button.up('window').down('#veh_key').getValue(), 'SOLO_VEHICULOS', '', true);
	},

	oge_alma_keyChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) {
			if ( this.getOrasta_Operations_Registros_AduanasSearchToAdd() !== undefined ) { this.getOrasta_Operations_Registros_AduanasSearchToAdd().close();  this.getOrasta_Operations_Registros_AduanasSearchToAdd().destroy(); }
		}
	},

	oge_cont_placaBlur: function(textfield, e, options) {
		if ( textfield.isValid() ) { this.oge_cont_placaSearch('0', textfield.up('form')); }
	},

	oge_cont_placaFocus: function(textfield, e, options) {
		this.oge_cont_placaSearch('1', textfield.up('form'));
	},

	oge_cont_placaKeypress: function(textfield, e, options) {
		if ( textfield.isValid() && e.getCharCode() == 13 ) {  this.oge_cont_placaSearch('13', textfield.up('form')); }
	},

	oge_cont_placaSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['cont_id', 'CONT_PLACA', 'cont_placa', 'tipcont_nombre'],
			            ['php/public_contenedores_json_records.php', 'xxCont_placa', 'textfield_search', ''], '1',
			            ['Siace.view.public.ContenedoresEdit', translations.public_contenedoresedit_title_new, ['cont_serie','cont_nro', '-'], '']);
	},

	oge_grdOperations_guias_registros_aduanasRecordDownload: function(grid, cell, row, col, e, record, t) {
		if ( record.data.regadua_pdf == '' ) {
		} else {
			var _src = 'php/resources/download_file.php?xxSchema_table=siace.registros_aduanas&xxTable_field=regadua_key&xxRecord_key=' + record.data.regadua_key + '&xxRecord_field=regadua_pdf&xxTable=operations_registros_aduanas&xxField=pdf';
			fext_FileDownload(undefined, _src);
		}
	},

	oge_grdOperations_guias_registros_aduanasSelectionchange: function(model, record, options) {
		if ( record.length == 1 ) {
			var _win = this.getOge_grdOperations_Guias_Registros_Aduanas().up('window');
			_win.down('#btnQuery').setDisabled(false);
			if ( fjsIn_array(_win.getTypeEdit(), ['1','2']) ) { _win.down('#btnSuppress').setDisabled(false); }
		}
	},

	oge_indiv_dniBlur: function(textfield, The, options) {
		this.oge_indiv_dniSearch('0', textfield.up('form'));
	},

	oge_indiv_dniFocus: function(textfield, The, options) {
		this.oge_indiv_dniSearch('1', textfield.up('form'));
	},

	oge_indiv_dniKeypress: function(textfield, e, options) {
		if( e.getCharCode() == 13 ) { this.oge_indiv_dniSearch('13', textfield.up('form')); }
	},

	oge_indiv_dniSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['indiv_key', 'INDIV_DNI', 'indiv_dni', 'indiv_apenom'], 
			            ['php/public_individuos_json_records.php', 'xxIndiv_dni', 'textfield_search', ''], '1', 
			            ['Siace.view.public.IndividuosEdit', translations.public_individuossedit_title_new, ['indiv_dni'], '']);
	},

	oge_pais_idSelect: function(combo, record, options) {
		var _cboDpto_id = combo.up('window').down('combo[name=dpto_id]');
		var _pais_id =  record[0].data.pais_id;
		_cboDpto_id.getStore().load({
			params: { xxPais_id: _pais_id, xxType_record: 'cboPais_id' }
		});

		/*_cboDpto_id.getStore().insert(0, [{
             dpto_id: 0,  dpto_nomnbre: '&nbsp;',
         }]);*/
	},

	oge_perstransp_codeBlur: function(textfield, e, options) {
		this.oge_perstransp_codeSearch('0', textfield.up('form'));
	},

	oge_perstransp_codeFocus: function(textfield, e, options) {
		this.oge_perstransp_codeSearch('1', textfield.up('form'));
	},

	oge_perstransp_codeKeypress: function(textfield, e, options) {
		if( e.getCharCode() == 13 ) { this.oge_perstransp_codeSearch('13', textfield.up('form')); }
	},

	oge_perstransp_codeSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['perstransp_key', 'PERSTRANSP_CODE', 'perstransp_code', 'perstransp_nombre'],
			            ['php/public_personas_json_records.php', 'xxPerstransp_code', 'textfield_search_transportista', 'TRANSPORTISTAS'], '1',
			            ['Siace.view.public.Personas_TransportistasEdit', translations.public_personas_transportistasedit_title_new, ['perstransp_code'], '']);
	},

	oge_tipaux_idChange: function(combo, newValue, oldValue, options) {
		var _win = combo.up('window');
		if ( fjsIn_array(_win.getTypeEdit(), ['1','2']) ) {
			if ( newValue*1 > 0 ) { _win.down('#guia_code').enable(); } 
			else { _win.down('#guia_code').disable(); _win.down('#guia_code').setValue(''); }
		}
	},

	/*oge_tipdocident_idChange: function(combo, newValue, oldValue, options) {
		combo.up('form').down('textfield[name=pers_ruc]').setDisabled( combo.getValue() == '99' ? true : false );
		var _pais_id = combo.getStore().findRecord('tipdocident_id', combo.getValue()).data['pais_id'];
		var _cboPais_id = combo.up('form').down('combo[name=pais_id]');
		if ( _pais_id*1 > 0 ) {
			_cboPais_id.setValue(_pais_id);
			_cboPais_id.setDisabled('disabled');
		} else {
			_cboPais_id.setDisabled(false);
		}
	}, */

	oge_trac_placaBlur: function(textfield, e, options) {
		if ( textfield.isValid() ) { this.oge_trac_placaSearch('0', textfield.up('form')); }
	},

	oge_trac_placaFocus: function(textfield, e, options) {
		this.oge_trac_placaSearch('1', textfield.up('form'));
	},

	oge_trac_placaKeypress: function(textfield, e, options) {
		if ( textfield.isValid() && e.getCharCode() == 13 ) {  this.oge_trac_placaSearch('13', textfield.up('form')); }
	},

	oge_trac_placaSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['trac_key', 'TRAC_PLACA', 'trac_placa', 'tractipveh_nombre'],
			            ['php/public_vehiculos_json_records.php', 'xxVeh_placa', 'textfield_search', 'SOLO_TRACTOS'], '1',
			            ['Siace.view.public.VehiculosEdit', translations.public_vehiculosedit_title_new, ['veh_serie','veh_nro', '-'], 'SOLO_TRACTOS']);
	},

	oge_veh_placaBlur: function(textfield, e, options) {
		if ( textfield.isValid() ) { this.oge_veh_placaSearch('0', textfield.up('form')); }
	},

	oge_veh_placaFocus: function(textfield, e, options) {
		this.oge_veh_placaSearch('1', textfield.up('form'));
	},

	oge_veh_placaKeypress: function(textfield, e, options) {
		if ( textfield.isValid() && e.getCharCode() == 13 ) {  this.oge_veh_placaSearch('13', textfield.up('form')); }
		//fext_vehiculosPlacaSearch('13', textfield.up('form'), '1', 'Nuevo Vehículo', 'SOLO_VEHICULOS');
	},

	oge_veh_placaSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['veh_key', 'VEH_PLACA', 'veh_placa', 'tipveh_nombre'],
			            ['php/public_vehiculos_json_records.php', 'xxVeh_placa', 'textfield_search', 'SOLO_VEHICULOS'], '1',
			            ['Siace.view.public.VehiculosEdit', translations.public_vehiculosedit_title_new, ['veh_serie','veh_nro', '-'], 'SOLO_VEHICULOS']);
	},

	/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
	/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
	ogew_BeforeShow: function(component, options) {
		var _typeEdit = component.getTypeEdit();
		var _cboDoc_id = component.down('#doc_id'); var _cboGuia_serie = component.down('#guia_serie'); var _cboVentdet_key = component.down('#ventdet_key');
		_cboDoc_id.bindStore(Ext.create('Siace.store.public.Documentos'));
		_cboGuia_serie.bindStore(Ext.create('Siace.store.public.Documentos_Series'));
		_cboDoc_id.getStore().add({doc_id: component.getDoc_id(), doc_nombre: 'Ticket de Pesaje'});
		_cboVentdet_key.bindStore(Ext.create('Siace.store.treasury.Ventas_Det'));
			
	    if ( _typeEdit == '1' ) {
        	_cboDoc_id.setValue(component.getDoc_id());
			_cboGuia_serie.getStore().add({docser_serie: component.getGuia_serie(), docser_format: fjsLpad(component.getGuia_serie(), 3, '0')});
			_cboGuia_serie.setValue(component.getGuia_serie());
	    	component.down('#guia_fecha').setValue(fjsDateCurrent(''));
	    	component.down('#tipdocident_id').setValue(1);
	    	fext_removeAddCls(component.down('#guia_sal_fecha'), 'myDisabledClass', 'x-item-disabled'); component.down('#guia_sal_fecha').disable(); component.down('#guia_sal_fecha').setValue('');
			fext_removeAddCls(component.down('#guia_sal_hora'), 'myDisabledClass', 'x-item-disabled'); component.down('#guia_sal_hora').disable(); component.down('#guia_sal_hora').setValue('');
	    	fext_removeAddCls(component.down('#guia_sal_peso'), 'myDisabledClass', 'x-item-disabled'); component.down('#guia_sal_peso').disable(); component.down('#guia_sal_peso').setValue('');
			_cboVentdet_key.getStore().load({
				params: { xxType_record: 'combo_guiaseditweighing', xxOrder_by: 'vent_documento' },
				callback: function(records, operations, success) { }
			});

	        var _icon = 'icon_New_90'; var _title = 'Nuevo Ticket de Pesaje';
	    } else if ( fjsIn_array(_typeEdit, ['3','12']) ) {
	        var _form = component.down('form');
	        _form.load({
	            method: 'POST', url: 'php/operations_guias_json_records.php',
	            params: { xxGuia_key: component.getCallKey(),  xxType_record: 'formweighing', xxOrder_by: 'guia_key' }, waitMsg: 'Loading...',
	            success: function (form, action) {
	                try {
	                    var _model = Ext.create('Siace.model.operations.Guia'); var _result = Ext.decode(action.response.responseText);
	                    if ( _result.data[0] ) {
	                        _model.set(_result.data[0]);  _form.loadRecord(_model);
							_cboGuia_serie.getStore().add({ docser_serie: _result.data[0].guia_serie*1, docser_format: fjsLpad(_result.data[0].guia_serie, 3, '0'), });
							_cboGuia_serie.setValue(_result.data[0].guia_serie*1);
							component.down('#guia_nro').setValue(fjsLpad(_result.data[0].guia_nro, 6, '0'));

	                        if ( _result.data[0].tipdocident_id == '1' ) {
	                        	component.down('#indiv_key').setValue(_result.data[0].pers_key); component.down('#indiv_dni').setValue(_result.data[0].pers_ruc); component.down('#indiv_apenom').setValue(_result.data[0].pers_nombre);
	                        	component.down('#pers_key').setValue(''); component.down('#pers_ruc').setValue(''); component.down('#pers_nombre').setValue('');
	                        } else {
	                        	component.down('#indiv_key').setValue(''); component.down('#indiv_dni').setValue(''); component.down('#indiv_apenom').setValue('');
	                        	component.down('#pers_key').setValue(_result.data[0].pers_key); component.down('#pers_ruc').setValue(_result.data[0].pers_ruc); component.down('#pers_nombre').setValue(_result.data[0].pers_nombre);
	                        }
							_cboVentdet_key.getStore().add({ ventdet_key: _result.data[0].tablex_key, vent_documento: _result.data[0].tablex_documento, });
							_cboVentdet_key.setValue(_result.data[0].tablex_key);
	                    }
	                }
	                catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
	            },
	            failure: function (form, action) { Ext.Msg.alert("Load failed", action.result.errorMessage); }
	        });

			component.down('#guia_nro').disable(); component.down('#guia_fecha').disable(); component.down('#tipdocident_id').disable();
			component.down('#indiv_dni').disable(); component.down('#btnIndiv_search').disable(); component.down('#btnIndiv_modify').disable();
			component.down('#pers_ruc').disable(); component.down('#btnPers_search').disable(); component.down('#btnPers_modify').disable();
			component.down('#veh_placa').disable(); component.down('#btnVeh_search').disable(); component.down('#btnVeh_modify').disable();
			component.down('#guia_ing_fecha').disable(); component.down('#guia_ing_hora').disable(); component.down('#guia_ing_peso').disable(); 
	        component.down('#ventdet_key').disable(); 
	        if ( _typeEdit == '12' ) {
	            var _icon = 'icon_Modify_90'; var _title = 'Editar Ticket de Pesaje [Segunda Pesada]';
		    	fext_removeAddCls(component.down('#guia_sal_fecha'), 'x-item-disabled', 'myDisabledClass');
				fext_removeAddCls(component.down('#guia_sal_hora'), 'x-item-disabled', 'myDisabledClass');
	    		fext_removeAddCls(component.down('#guia_sal_peso'),  'x-item-disabled', 'myDisabledClass');
	    		component.down('#guia_sal_fecha').enable(); component.down('#guia_sal_hora').enable(); component.down('#guia_sal_peso').enable();
	        } else { 
	            var _icon = 'icon_Query_90'; var _title = 'Consulta ticket de Pesaje'; 
	            component.down('#guia_observ').disable();
	            component.down('#btnSave').disable(); component.down('#btnUndo').disable(); component.down('#btnExit').enable();
	        }
	    }
	    component.setIconCls(_icon); component.setTitle(_title);
	},

	ogew_Close: function(panel, options) {
		if ( this.getPis_Public_IndividuosSearch() !== undefined ) { this.getPis_Public_IndividuosSearch().close();  this.getPis_Public_IndividuosSearch().destroy(); }
		if ( this.getPps_Public_PersonasSearch() !== undefined ) { this.getPps_Public_PersonasSearch().close();  this.getPps_Public_PersonasSearch().destroy(); }
		if ( this.getPvs_Public_VehiculosSearch() !== undefined ) { this.getPvs_Public_VehiculosSearch().close();  this.getPvs_Public_VehiculosSearch().destroy(); }
	},

	ogew_btnSaveClick: function(button, e, options) {
	    var _win = button.up('window'); var _frm = _win.down('form');
	    if ( _win.down('#doc_id').getValue() == '' || _win.down('#doc_id').getValue() == null ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el Documento'); return false ; }
	    if ( !_win.down('#guia_fecha').isValid() || _win.down('#guia_fecha').getValue() == null ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar la FECHA del documento', function() { _frm.down('#guia_fecha').focus(); }); return false ; }	    	
	    var _key = ( _win.down('#cntPersonas').isVisible() ? _win.down('#pers_key') : _win.down('#indiv_key'));
	    if ( _key.getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar CONSIGNATARIO al que se emitirá el documento', function() { _win.down('#indiv_dni').focus(); }); return false ; }
	    if ( _win.down('#veh_key').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar la PLACA del vehículo', function() { _frm.down('#veh_placa').focus(); }); return false ; }

	    if ( _win.getTypeEdit() == '1' ) {
		    if ( !_win.down('#guia_ing_fecha').isValid() || _win.down('#guia_ing_fecha').getValue() == null ) {
		    	Ext.Msg.alert(translations.mensaje, 'Debe indicar la fecha del PRIMER pesaje', function() { _frm.down('#guia_ing_fecha').focus(); }); return false ; }
	        if ( _win.down('#guia_ing_peso').getValue() == '' || _win.down('#guia_ing_peso').getValue()*1 <= 0 ) {
	        	Ext.Msg.alert(translations.mensaje, 'Debe indicar el PRIMER Pesaje', function() { _frm.down('#guia_ing_peso').focus(); }); return false ; }
	        _guia_ing_peso = _win.down('#guia_ing_peso').getValue();
	    } else if ( _win.getTypeEdit() == '12' ) {
		    if ( !_win.down('#guia_sal_fecha').isValid() || _win.down('#guia_sal_fecha').getValue() == null ) {
		    	Ext.Msg.alert(translations.mensaje, 'Debe indicar la fecha del SEGUNDO pesaje', function() { _frm.down('#guia_sal_fecha').focus(); }); return false ; }
	        if ( _win.down('#guia_sal_peso').getValue() == '' || _win.down('#guia_sal_peso').getValue()*1 <= 0 ) {
	        	Ext.Msg.alert(translations.mensaje, 'Debe indicar el SEGUNDO Pesaje', function() { _frm.down('#guia_sal_peso').focus(); }); return false ; }
	        _guia_sal_peso = _win.down('#guia_sal_peso').getValue();
	    }
	    if ( _win.down('#ventdet_key').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el Registro de Venta', function() { _frm.down('#ventdet_key').focus(); }); return false ; }

	    if ( _frm.getForm().isValid() ) {
	    	var _vs = fextpub_sessionVariables();
	        _frm.getForm().submit({
				method: 'POST', url: 'php/operations_guias_saveweighing.php',
				params:{ xx0005: 'OK', xxType_edit: _win.getTypeEdit(), xxGuia_serie: _win.down('#guia_serie').getValue(), xxGuia_nro: _win.down('#guia_nro').getValue(),
						 xxPers_key: _key.getValue(), 
					     zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
                waitTitle: translations.valida_titulo, waitMsg: translations.valida_mensaje01,
	            
	            success: function(form, action) {
	            	var _result = Siace.util.Util.decodeJSON(action.response.responseText);
	                if ( _result.success ) {
			            if ( _win.getCallStore() !== null ) { _win.getCallStore().load(); } 
					    else if ( _win.getCallWindow() !== null ) { }
	                    _win.close();
	                } else { Siace.util.Util.showErrorMsg(_result.msg); }
	            },
	            failure: function(form, action) { Siace.util.Util.showErrorMsg(action.response.responseText); }
	        });
	    }
	},

	ogew_btnUndoClick: function(button, e, options) {
		button.up('window').close();
	},

	ogew_btnExitClick: function(button, e, options) {
		button.up('window').close();
	},

	ogew_btnIndiv_searchClick: function(button, e, options) {
		fext_windowSearch(this.getPis_Public_IndividuosSearch(), button.up('window'), 'Siace.view.public.IndividuosSearch', translations.public_individuossearch_title, button.up('window').down('#indiv_key').getValue(), '');
	},

	ogew_btnIndiv_modifyClick: function(button, e, options) {
		var _w = button.up('window');
		if  ( _w.down('#indiv_key').getValue() == '' ) { return false; }
	    var _win = Ext.create('Siace.view.public.IndividuosEdit');
	    _win.setTypeEdit(2); _win.setCallWindow(_w); _win.setCallKey(_w.down('#indiv_key').getValue());
	    _win.show();
	},

	ogew_btnPers_searchClick: function(button, e, options) {
		fext_windowSearch(this.getPps_Public_PersonasSearch(), button.up('window'), 'Siace.view.public.PersonasSearch', translations.public_personassearch_title_cliente, button.up('window').down('#pers_key').getValue(), 'ONLY_WITH_RUC', '', false);
	},

	ogew_btnPers_modifyClick: function(button, e, options) {
		var _w = button.up('window');
		if  ( _w.down('#pers_key').getValue() == '' ) { return false; }
	    var _win = Ext.create('Siace.view.public.PersonasEdit');
	    _win.setTypeEdit(2); _win.setCallWindow(_w); _win.setCallKey(_w.down('#pers_key').getValue());
	    _win.show();
	},

	ogew_btnVeh_searchClick: function(button, e, options) {
		fext_windowSearch(this.getPvs_Public_VehiculosSearch(), button.up('window'), 'Siace.view.public.VehiculosSearch', translations.public_vehiculossearch_title, button.up('window').down('#veh_key').getValue(), 'SOLO_VEHICULOS', '', '');
	},

	ogew_btnVeh_modifyClick: function(button, e, options) {
		var _w = button.up('window');
		if  ( _w.down('#veh_key').getValue() == '' ) { return false; }
	    var _win = Ext.create('Siace.view.public.VehiculosEdit');
	    _win.setTypeEdit(2); _win.setCallWindow(_w); _win.setCallKey(_w.down('#veh_key').getValue());
	    _win.show();
	},

	ogew_indiv_keyChange: function(combo, newValue, oldValue, options) {
		combo.up('window').down('#btnIndiv_modify').setDisabled(newValue == '' || combo.up('window').getTypeEdit() !== '1' ? true : false);
	},

	ogew_indiv_dniBlur: function(textfield, The, options) {
		this.ogew_indiv_dniSearch('0', textfield.up('form'));
	},

	ogew_indiv_dniFocus: function(textfield, The, options) {
		this.ogew_indiv_dniSearch('1', textfield.up('form'));
	},

	ogew_indiv_dniKeypress: function(textfield, e, options) {
		if( e.getCharCode() == 13 ) { this.ogew_indiv_dniSearch('13', textfield.up('form')); }
	},

	ogew_indiv_dniSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['indiv_key', 'INDIV_DNI', 'indiv_dni', 'indiv_apenom'], 
			            ['php/public_individuos_json_records.php', 'xxIndiv_dni', 'textfield_search', ''], '1', 
			            ['Siace.view.public.IndividuosEdit', translations.public_individuossedit_title_new, ['indiv_dni'], '']);
	},

	ogew_pers_keyChange: function(combo, newValue, oldValue, options) {
		combo.up('window').down('#btnPers_modify').setDisabled(newValue == ''  || combo.up('window').getTypeEdit() !== '1' ? true : false);
	},

	ogew_pers_rucBlur: function(textfield, e, options) {
		this.ogew_pers_rucSearch('0', textfield.up('form'));
	},

	ogew_pers_rucFocus: function(textfield, e, options) {
		this.ogew_pers_rucSearch('1', textfield.up('form'));
	},

	ogew_pers_rucKeypress: function(textfield, e, options) {
		if( e.getCharCode() == 13 ) { this.ogew_pers_rucSearch('13', textfield.up('form')); }
	},

	ogew_pers_rucSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['pers_key', 'PERS_RUC', 'pers_ruc', 'pers_nombre'],
			            ['php/public_personas_json_records.php', 'xxPers_ruc', 'textfield_search', ''], '1',
			            ['Siace.view.public.PersonasEdit', translations.public_personasedit_title_new, ['pers_ruc'], ''], '');
	},

	ogew_tipdocident_idChange: function(combo, newValue, oldValue, options) {
		var _win = combo.up('window');
		if ( newValue == '1' ) { _win.down('#cntIndividuos').setVisible(true);  _win.down('#cntPersonas').setVisible(false); }
		else { _win.down('#cntPersonas').setVisible(true);  _win.down('#cntIndividuos').setVisible(false); }
	},

	ogew_veh_keyChange: function(combo, newValue, oldValue, options) {
		combo.up('window').down('#btnVeh_modify').setDisabled(newValue == '' || combo.up('window').getTypeEdit() !== '1' ? true : false);
	},

	ogew_veh_placaBlur: function(textfield, e, options) {
		if ( textfield.isValid() ) { this.oge_veh_placaSearch('0', textfield.up('form')); }
	},

	ogew_veh_placaFocus: function(textfield, e, options) {
		this.oge_veh_placaSearch('1', textfield.up('form'));
	},

	ogew_veh_placaKeypress: function(textfield, e, options) {
		if ( textfield.isValid() && e.getCharCode() == 13 ) {  this.oge_veh_placaSearch('13', textfield.up('form')); }
		//fext_vehiculosPlacaSearch('13', textfield.up('form'), '1', 'Nuevo Vehículo', 'SOLO_VEHICULOS');
	},

	ogew_veh_placaSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['veh_key', 'VEH_PLACA', 'veh_placa', 'tipveh_nombre'],
			            ['php/public_vehiculos_json_records.php', 'xxVeh_placa', 'textfield_search', 'SOLO_VEHICULOS'], '1',
			            ['Siace.view.public.VehiculosEdit', translations.public_vehiculosedit_title_new, ['veh_serie','veh_nro', '-'], 'SOLO_VEHICULOS']);
	},
});