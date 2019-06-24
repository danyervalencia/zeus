Ext.define('Siace.controller.treasury.Cuentas_Bancarias', {
	extend: 'Ext.app.Controller',
	views: ['treasury.Cuentas_BancariasBrowse', 'treasury.Cuentas_BancariasEdit', 'treasury.Cuentas_Bancarias_MovimientosReports',],
    refs: [
        { ref: 'tcbmb_grdTreasury_Cuentas_Bancarias_Movimientos', selector: 'treasury_cuentas_bancarias_movimientosbrow #grdTreasury_cuentas_bancarias_movimientos' },
        { ref: 'tcbmeci_grdTreasury', selector: 'treasury_cuentas_bancarias_movimientoseditci #grdTreasury' },
    ],

	init: function(application) {
		this.control({
			'treasury_cuentas_bancariasbrowse': { beforerender: this.tcbb_BeforeRender,},
			'treasury_cuentas_bancariasbrowse #opc_id': { change: this.tcbb_opc_idChange, },
			'treasury_cuentas_bancariasbrowse #btnNew': { click: this.tcbb_btnNewClick, },
			'treasury_cuentas_bancariasbrowse #btnModify': { click: this.tcbb_btnModifyClick, },
			'treasury_cuentas_bancariasbrowse #btnQuery': { click: this.tcbb_btnQueryClick, },
			'treasury_cuentas_bancariasbrowse #btnMovements': { click: this.tcbb_btnMovementsClick, },
			'treasury_cuentas_bancariasbrowse #btnDifferential': { click: this.tcbb_btnDifferentialClick, },
            'treasury_cuentas_bancariasbrowse #cuebanc_nro': { change: this.tcbb_cuebanc_nroChange, },
            'treasury_cuentas_bancariasbrowse #entibanc_key': { change: this.tcbb_entibanc_keyChange, },
			'treasury_cuentas_bancariasbrowse #grdTreasury_cuentas_bancarias': { selectionchange: this.tcbb_grdTreasury_cuentas_bancariasSelectionchange, },
            'treasury_cuentas_bancariasbrowse #mone_id': { change: this.tcbb_mone_idChange, },
            'treasury_cuentas_bancariasbrowse #tipcuebanc_id': { change: this.tcbb_tipcuebanc_idChange, },

            'treasury_cuentas_bancariasedit': { beforeshow: this.tcbe_BeforeShow, },
            'treasury_cuentas_bancariasedit #btnSave': { click: this.tcbe_btnSaveClick, },
            'treasury_cuentas_bancariasedit #btnUndo': { click: this.tcbe_btnUndoClick, },
            'treasury_cuentas_bancariasedit #btnExit': { click: this.tcbe_btnExitClick, },
            'treasury_cuentas_bancariasedit #btnPctbl_search': { click: this.tcbe_btnPctbl_searchClick, },
            'treasury_cuentas_bancariasedit #pctbl_cuenta': { blur: this.tcbe_pctbl_cuentaBlur, focus: this.tcbe_pctbl_cuentaFocus, keypress: this.tcbe_pctbl_cuentaKeypress, },

			'treasury_cuentas_bancarias_diferenciabrow': { beforerender: this.tcbdb_BeforeRender, },
			'treasury_cuentas_bancarias_diferenciabrow #opc_id': { change: this.tcbdb_opc_idChange, },
			'treasury_cuentas_bancarias_diferenciabrow #btnNew': { click: this.tcbdb_btnNewClick, },
			'treasury_cuentas_bancarias_diferenciabrow #btnModify': { click: this.tcbdb_btnModifyClick, },
			'treasury_cuentas_bancarias_diferenciabrow #btnQuery': { click: this.tcbdb_btnQueryClick, },
			'treasury_cuentas_bancarias_diferenciabrow #btnReport': { click: this.tcbdb_btnReportClick, },
			'treasury_cuentas_bancarias_diferenciabrow #btnExit': { click: this.tcbdb_btnExitClick, },
            'treasury_cuentas_bancarias_diferenciabrow #cuebancmov_nro': { change: this.tcbdb_Clean, },
            'treasury_cuentas_bancarias_diferenciabrow #fechaini': { change: this.tcbdb_Clean, },
            'treasury_cuentas_bancarias_diferenciabrow #fechafin': { change: this.tcbdb_Clean, },
			'treasury_cuentas_bancarias_diferenciabrow #grdTreasury_cuentas_bancarias_diferencia': { selectionchange: this.tcbdb_grdTreasury_cuentas_bancarias_diferenciaSelectionchange, },

            'treasury_cuentas_bancarias_diferenciaedit': { beforeshow: this.tcbde_BeforeShow, },
            'treasury_cuentas_bancarias_diferenciaedit #btnSave': { click: this.tcbde_btnSaveClick, },
            'treasury_cuentas_bancarias_diferenciaedit #btnUndo': { click: this.tcbde_btnUndoClick, },
            'treasury_cuentas_bancarias_diferenciaedit #btnExit': { click: this.tcbde_btnExitClick, },
            'treasury_cuentas_bancarias_diferenciaedit #cuebancdif_debe': { change: this.tcbde_cuebancdif_debeChange, },
            'treasury_cuentas_bancarias_diferenciaedit #cuebancdif_haber': { change: this.tcbde_cuebancdif_haberChange, },
            'treasury_cuentas_bancarias_diferenciaedit #cuebancdif_caj_debe': { change: this.tcbde_cuebancdif_caj_debeChange, },
            'treasury_cuentas_bancarias_diferenciaedit #cuebancdif_caj_haber': { change: this.tcbde_cuebancdif_caj_haberChange, },

			'treasury_cuentas_bancarias_movimientosbrow': { beforerender: this.tcbmb_BeforeRender, },
			'treasury_cuentas_bancarias_movimientosbrow #opc_id': { change: this.tcbmb_opc_idChange, },
			'treasury_cuentas_bancarias_movimientosbrow #btnNew': { click: this.tcbmb_btnNewClick, },
			'treasury_cuentas_bancarias_movimientosbrow #btnQuery': { click: this.tcbmb_btnQueryClick, },
			'treasury_cuentas_bancarias_movimientosbrow #btnReport': { click: this.tcbmb_btnReportClick, },
			'treasury_cuentas_bancarias_movimientosbrow #btnExit': { click: this.tcbmb_btnExitClick, },
            'treasury_cuentas_bancarias_movimientosbrow #cuebancmov_nro': { change: this.tcbmb_cuebanc_nroChange, },
            'treasury_cuentas_bancarias_movimientosbrow #fechaini': { change: this.tcbmb_fechainiChange, },
            'treasury_cuentas_bancarias_movimientosbrow #fechafin': { change: this.tcbmb_fechafinChange, },
			'treasury_cuentas_bancarias_movimientosbrow #grdTreasury_cuentas_bancarias_movimientos': { selectionchange: this.tcbmb_grdTreasury_cuentas_bancarias_movimientosSelectionchange, },

            'treasury_cuentas_bancarias_movimientoseditchq': { beforeshow: this.tcbmechq_BeforeShow, close: this.tcbmechq_Close, },
            'treasury_cuentas_bancarias_movimientoseditchq #btnSave': { click: this.tcbmechq_btnSaveClick, },
            'treasury_cuentas_bancarias_movimientoseditchq #btnUndo': { click: this.tcbmechq_btnUndoClick, },
            'treasury_cuentas_bancarias_movimientoseditchq #btnExit': { click: this.tcbmechq_btnExitClick, },

            'treasury_cuentas_bancarias_movimientoseditci': { beforeshow: this.tcbmeci_BeforeShow, close: this.tcbmeci_Close, },
            'treasury_cuentas_bancarias_movimientoseditci #btnSave': { click: this.tcbmeci_btnSaveClick, },
            'treasury_cuentas_bancarias_movimientoseditci #btnUndo': { click: this.tcbmeci_btnUndoClick, },
            'treasury_cuentas_bancarias_movimientoseditci #btnExit': { click: this.tcbmeci_btnExitClick, },
            'treasury_cuentas_bancarias_movimientoseditci #comprob_nro': { blur: this.tcbmeci_comprob_nroBlur, focus: this.tcbmeci_comprob_nroFocus, keypress: this.tcbmeci_comprob_nroKeypress, },
            'treasury_cuentas_bancarias_movimientoseditci #comprob_serie': { change: this.tcbmeci_comprob_serieChange, },
			'treasury_cuentas_bancarias_movimientoseditci #grdTreasury': { selectionchange: this.tcbmeci_grdTreasurySelectionchange, },
            'treasury_cuentas_bancarias_movimientoseditci #year_id': { change: this.tcbmeci_year_idChange, },

			'treasury_cuentas_bancarias_movimientosreports': { beforerender: this.tcbmr_BeforeRender, close: this.tcbmr_Close, },
			'treasury_cuentas_bancarias_movimientosreports #btnPdf': { click: this.tcbmr_btnPdfClick, },
			'treasury_cuentas_bancarias_movimientosreports #btnExcel': { click: this.tcbmr_btnExcelClick, },
		});
	},

	tcbb_BeforeRender: function(component, options) {
		fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': component.down('#opc_id'), 'menu_id': component.getMenuId() });
		fextpub_tablas_generalesFilter({'objeto': component.down('#entibanc_id'), 'tabgen_parent': '200'});
		fextpub_tablas_generalesFilter({'objeto': component.down('#tipcuebanc_id'), 'tabgen_parent': '160', 'type_record': 'combo_codename', 'order_by': 'tabgen_orden'});

		var _store = Ext.create('Siace.store.treasury.Cuentas_Bancarias');
		var _grid = component.down('#grdTreasury_cuentas_bancarias'); var _pagtool = component.down('#pgtTreasury_cuentas_bancarias');
		_grid.bindStore(_store);  _pagtool.bindStore(_store);
		_store.sort('cuebanc_nro', 'ASC'); _store.pageSize = 500;
		_store.on('beforeload', function(store, treasury, eOpts) {
			component.down('#btnModify').disable(); component.down('#btnQuery').disable(); component.down('#btnDelete').disable(); component.down('#btnMovements').disable(); component.down('#btnDifferential').disable();
		    store.getProxy().setExtraParam('xxEntibanc_id', component.down('#entibanc_id').getValue());
		    store.getProxy().setExtraParam('xxTipcuebanc_id', component.down('#tipcuebanc_id').getValue());
		    store.getProxy().setExtraParam('xxMone_id', component.down('#mone_id').getValue());
		    store.getProxy().setExtraParam('xxCuebanc_nro', component.down('#cuebanc_nro').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});  _store.load();
	},

	tcbb_Clean: function(poComponent) {
		var _store = poComponent.down('#pgtTreasury_cuentas_bancarias').getStore();
		var _pagingtoolbar = poComponent.down('#pgtTreasury_cuentas_bancarias');
		fext_gridClean(_store, _pagingtoolbar);

		poComponent.down('#btnModify').disable(); poComponent.down('#btnQuery').disable(); poComponent.down('#btnDelete').disable(); poComponent.down('#btnMovements').disable(); poComponent.down('#btnDifferential').disable();
	},

	tcbb_ViewEdit: function(pcTypeEdit, poComponent){
		if ( fjsIn_array(pcTypeEdit, ['2','3']) ) {
        	var _record = poComponent.down('#grdTreasury_cuentas_bancarias').getSelectionModel().getSelection();
        	if ( _record.length !== 1 ) { return false; }
        }
	    var _win = Ext.create('Siace.view.treasury.Cuentas_BancariasEdit');
	    _win.setTypeEdit(pcTypeEdit); _win.setCallStore(poComponent.down('#grdTreasury_cuentas_bancarias').getStore());
	    if ( fjsIn_array(pcTypeEdit, ['2','3']) ) { _win.setCallKey(_record[0].data.cuebanc_key); }
	    _win.show();
	},

	tcbb_opc_idChange: function(combo, newValue, oldValue, options) {
		combo.up('panel').down('#btnNew').setDisabled(fextpub_uamoButtons(combo, 1));
	},

	tcbb_btnNewClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 1) ) { return false; } this.tcbb_ViewEdit('1', button.up('panel'));
	},

	tcbb_btnModifyClick: function(button, e, options) {
        if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 2) ) { return false; } this.tcbb_ViewEdit('2', button.up('panel'));
	},

	tcbb_btnQueryClick: function(button, e, options) {
        if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 3) ) { return false; } this.tcbb_ViewEdit('3', button.up('panel'));
	},

	tcbb_btnMovementsClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 58) ) { return false; } 
		var _panel = button.up('panel');
	    Ext.get(_panel.getEl()).mask(translations.mensaje_esperar, 'loading');
    	var _record = _panel.down('#grdTreasury_cuentas_bancarias').getSelectionModel().getSelection()[0];
        if ( !_record ) { return false; }

	    var _win = Ext.create('Siace.view.treasury.Cuentas_Bancarias_MovimientosBrow');
	    _win.setIconCls('icon_Venta'); _win.setTitle(translations.treasury_cuentas_bancarias_movimientosbrow_title);
	    _win.down('#cuebanc_key').setValue(_record.data.cuebanc_key);  _win.show();
	    Ext.get(_panel.getEl()).unmask();
	},

	tcbb_btnDifferentialClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 4003) ) { return false; } 
		var _panel = button.up('panel');
	    Ext.get(_panel.getEl()).mask(translations.mensaje_esperar, 'loading');
    	var _record = _panel.down('#grdTreasury_cuentas_bancarias').getSelectionModel().getSelection()[0];
        if ( !_record ) { return false; }

	    var _win = Ext.create('Siace.view.treasury.Cuentas_Bancarias_DiferenciaBrow');
	    _win.setTitle('Diferencial de Cambio'); //_win.setIconCls('icon_Venta'); 
	    _win.down('#cuebanc_key').setValue(_record.data.cuebanc_key);  _win.show();
	    Ext.get(_panel.getEl()).unmask();
	},

	tcbb_cuebanc_nroChange: function(textfield, newValue, oldValue, options) {
		this.tcbb_Clean(textfield.up('panel'));
	},

	tcbb_entibanc_keyChange: function(combo, newValue, oldValue, options) {
		this.tcbb_Clean(combo.up('panel'));
	},

	tcbb_grdTreasury_cuentas_bancariasSelectionchange: function(model, record, options) {			
		if ( record.length == 1 ) {
			var _panel = model.view.panel.up('panel'); var _cboOpc_id = _panel.down('#opc_id'); _flga = record[0].data.cuebanc_flga;
			_panel.down('#btnModify').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 2));
			_panel.down('#btnQuery').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 3));
			_panel.down('#btnDelete').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 7));
			_panel.down('#btnMovements').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 58));
			_panel.down('#btnDifferential').setDisabled(_flga == '98' || record[0].data.mone_id == '1' ? true : fextpub_uamoButtons(_cboOpc_id, 4003));
		}
	},

	tcbb_mone_idChange: function(combo, newValue, oldValue, options) {
		this.tcbb_Clean(combo.up('panel'));
	},

	tcbb_tipcuebanc_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.tcbb_Clean(combo.up('panel')); }
	},

	/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	tcbe_BeforeShow: function(component, options) {
		var _typeEdit = component.getTypeEdit();
		fextpub_tablas_generalesFilter({'objeto': component.down('#entibanc_id'), 'tabgen_parent': '200', 'add_blank': 'NO', 'disabled': (_typeEdit == '3' ? true : false), 'setValue': (_typeEdit == '1' ? true : false)});
		fextpub_tablas_generalesFilter({'objeto': component.down('#tipcuebanc_id'), 'tabgen_parent': '160', 'add_blank': 'NO', 'disabled': (_typeEdit == '3' ? true : false), 'setValue': (_typeEdit == '1' ? true : false)});
		fextbud_fuentes_financiamientoFilter({'panel': component, 'fuefin_estado': 1, 'disabled': (_typeEdit == '3' ? true : false), 'setValue': (_typeEdit == '1' ? true : false)});

        if ( _typeEdit == '1' ) {
        	var _icon = 'icon_New_90'; var _title = translations.treasury_cuentas_bancariasedit_title_new;
        } else if ( fjsIn_array(_typeEdit, ['2','3']) ) {
	        var _form = component.down('form');
	   		_form.load({
	   			method: 'POST', url: 'php/treasury_cuentas_bancarias_json_records.php',
	            params: { xxCuebanc_key: component.getCallKey(),  xxType_record: 'form' }, waitMsg: 'Loading...',
	            success: function (form, action) {
	                try {
	                    var _model = Ext.create('Siace.model.treasury.Cuenta_Bancaria'); var _result = Ext.decode(action.response.responseText);
	                    if ( _result.data[0] ) {
	                        _model.set(_result.data[0]);  _form.loadRecord(_model);
							component.down('#PCTBL_CUENTA').setValue(_model.data.pctbl_cuenta);
	                    }
	                }
	                catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
	            },
	            failure: function (form, action) { Ext.Msg.alert("Load failed", action.result.errorMessage); }
	        });

        	if ( _typeEdit == '2' ) { 
        		var _icon = 'icon_Modify_90'; var _title = translations.treasury_cuentas_bancariasedit_title_modify;
        	} else { 
        		var _icon = 'icon_Query_90'; var _title = translations.treasury_cuentas_bancariasedit_title_query; 
				component.down('#entibanc_id').disable(); component.down('#tipcuebanc_id').disable(); component.down('#mone_id').disable();
				component.down('#cuebanc_nro').disable(); component.down('#cuebanc_fechaini').disable();
				component.down('#pctbl_cuenta').disable(); component.down('#btnPctbl_search').disable(); component.down('#fuefin_id').disable(); component.down('#cuebanc_observ').disable();
				component.down('#btnSave').disable(); component.down('#btnUndo').disable(); component.down('#btnExit').enable();
        	}
        }
        component.setIconCls(_icon); component.setTitle(_title);
	},

	tcbe_btnSaveClick: function(button, e, options) {
	    var _win = button.up('window'); var _frm = _win.down('form');
	    if ( _win.down('#entibanc_id').getValue() == '' || _win.down('#entibanc_id').getValue()*1 <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar la ENTIDAD BANCARIA', function() { _win.down('#entibanc_id').focus(); }); return false ; }
	    if ( _win.down('#tipcuebanc_id').getValue() == '' || _win.down('#tipcuebanc_id').getValue()*1 <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el TIPO DE CUENTA', function() { _win.down('#tipcuebanc_id').focus(); }); return false ; }
	    if ( _win.down('#mone_id').getValue() == '' || _win.down('#mone_id').getValue()*1 <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el MONEDA de la Cuenta Bancaria', function() { _win.down('#mone_id').focus(); }); return false ; }
	    if ( _win.down('#cuebanc_nro').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar El NUMERO de la Cuenta Bancaria', function() { _win.down('#cuebanc_nro').focus(); }); return false ; }
	    //if ( _win.down('#cuebanc_fechaini').getRawValue() == '' ) {
	    //	Ext.Msg.alert(translations.mensaje, 'Debe indicar la FECHA DE INICIO de la Cuenta Bancaria', function() { _win.down('#cuebanc_fechaini').focus(); }); return false ; }
	    if ( _win.down('#pctbl_id').getValue() == '' || _win.down('#pctbl_id').getValue()*1 <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar la CUENTA CONTABLE del concepto', function() { _win.down('#pctbl_cuenta').focus(); }); return false ; }

	    if ( _frm.getForm().isValid() ) {
			Ext.Msg.confirm(translations.confirmar, translations.mensaje_pregunta_guardar, function(btn){
			if ( btn == 'yes' ) {
			    var _vs = fextpub_sessionVariables();
			    _frm.getForm().submit({
					method: 'POST', url: 'php/treasury_cuentas_bancarias_save.php',
					params:{ xx0005: 'YES', 
							 zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
		            waitTitle: translations.valida_titulo, waitMsg: translations.valida_mensaje01,
			        success: function(form, action) {
			            var result = Siace.util.Util.decodeJSON(action.response.responseText);
			            if ( result.success ) {
				            if ( _win.getCallStore() !== null ) { _win.getCallStore().load(); } 
						    else if ( _win.getCallWindow() !== null ) { }
	            	        _win.close();
			            } else { Siace.util.Util.showErrorMsg(result.msg); }
			        },
			        failure: function(form, action) { Siace.util.Util.showErrorMsg(action.response.responseText); }
			    });
			}});
	    }
	},

	tcbe_btnUndoClick: function(button, e, options) {
		button.up('window').close();
	},

	tcbe_btnExitClick: function(button, e, options) {
		button.up('window').close();
	},

	tcbe_btnPctbl_searchClick: function(button, e, options) {
	},

	tcbe_pctbl_cuentaBlur: function(textfield, The, options) {
		this.tcbe_pctbl_cuentaSearch('0', textfield.up('form'));
	},

	tcbe_pctbl_cuentaFocus: function(textfield, The, options) {
		this.tcbe_pctbl_cuentaSearch('1', textfield.up('form'));
	},

	tcbe_pctbl_cuentaKeypress: function(textfield, e, options) {
		if( e.getCharCode() == 13 ) { this.tcbe_pctbl_cuentaSearch('13', textfield.up('form')); }
	},

	tcbe_pctbl_cuentaSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['pctbl_id', 'PCTBL_CUENTA', 'pctbl_cuenta', 'pctbl_nombre'], 
			            ['php/accounting_plan_contable_json_records.php', 'xxPctbl_cuenta', 'textfield_search', 'ONLY_RECORD'], '', '');
	},

	/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
	tcbdb_BeforeRender: function(component, options) {
		fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': component.down('#opc_id'), 'menu_id':  '4112'});
		component.down('#fechaini').setValue(fjsDateFirstDayYear('')); component.down('#fechafin').setValue(fjsDateCurrent(''));
		var _store = Ext.create('Siace.store.treasury.Cuentas_Bancarias_Diferencia');
		var _grid = component.down('#grdTreasury_cuentas_bancarias_diferencia'); var _pagtool = component.down('#pgtTreasury_cuentas_bancarias_diferencia');
		_grid.bindStore(_store);  _pagtool.bindStore(_store);
		_store.sort('cuebancdif_fecha', 'DESC'); _store.pageSize = 500;  
		_store.on('beforeload', function(store, operations, eOpts) {
			component.down('#btnQuery').disable(); component.down('#btnModify').disable();

			store.getProxy().setExtraParam('xxCuebanc_key', component.down('#cuebanc_key').getValue());
		    store.getProxy().setExtraParam('xxFechaini', component.down('#fechaini').getSubmitData());
		    store.getProxy().setExtraParam('xxFechafin', component.down('#fechafin').getSubmitData());
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		}); _store.load();

		var _form = component.down('form');
	   	_form.load({
	   		method: 'POST', url: 'php/treasury_cuentas_bancarias_json_records.php',
	        params: { xxCuebanc_key: component.down('#cuebanc_key').getValue(),  xxType_record: 'window', xxOrder_by: 'cuebanc_key' },
	        waitMsg: 'Loading...',
	        success: function (form, action) {
	            try {
	                var _model = Ext.create('Siace.model.treasury.Cuenta_Bancaria'); var _result = Ext.decode(action.response.responseText);
	                if ( _result.data[0] ) {
	                    _model.set(_result.data[0]);  _form.loadRecord(_model);
	                    component.down('#fuefin_codeabrev').setValue(_result.data[0].fuefin_code+' - '+_result.data[0].fuefin_abrev);
	                }
                }
                catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
            },
            failure: function (form, action) { Ext.Msg.alert("Load failed", action.result.errorMessage); }
        });
	},

	tcbdb_Clean: function() {
	},

	tcbdb_ViewEdit: function(pcTypeEdit, poComponent){
		if ( pcTypeEdit == '1' ) {
		} else if ( fjsIn_array(pcTypeEdit, ['2','3']) ) {
			var _record = poComponent.down('#grdTreasury_cuentas_bancarias_diferencia').getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }
	    }

		Ext.get(poComponent.getEl()).mask(translations.mensaje_esperar, 'loading');
	    var _win = Ext.create('Siace.view.treasury.Cuentas_Bancarias_DiferenciaEdit');
	    _win.setTypeEdit(pcTypeEdit); _win.setCallStore(poComponent.down('#grdTreasury_cuentas_bancarias_diferencia').getStore());
    	_win.down('#cuebanc_key').setValue(poComponent.down('#cuebanc_key').getValue());
    	_win.down('#entibanc_nombre').setValue(poComponent.down('#entibanc_nombre').getValue());
    	_win.down('#cuebanc_nro').setValue(poComponent.down('#cuebanc_nro').getValue());
	    if ( fjsIn_array(pcTypeEdit, ['1']) ) {
	    } else if ( fjsIn_array(pcTypeEdit, ['2','3']) ) { _win.setCallKey(_record.data.cuebancdif_key); }
	    _win.show();
	    Ext.get(poComponent.getEl()).unmask();
	},

	tcbdb_opc_idChange: function(combo, newValue, oldValue, options) {
		combo.up('panel').down('#btnNew').setDisabled(fextpub_uamoButtons(combo, 1));
	},

	tcbdb_btnNewClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 1) ) { return false; } this.tcbdb_ViewEdit('1', button.up('window'));
	},

	tcbdb_btnModifyClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 2) ) { return false; } this.tcbdb_ViewEdit('2', button.up('window'));
	},

	tcbdb_btnQueryClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 3) ) { return false; } this.tcbdb_ViewEdit('3', button.up('window'));
	},

	tcbdb_btnReportClick: function(button, e, options) {
		var _win = button.up('window');
		if ( !_win.down('#fechaini').isValid() ) {
			Ext.Msg.alert(translations.mensaje, 'Fecha Inicial NO es Válida', function() { _win.down('#fechaini').focus(); }); return false ; }
		if ( !_win.down('#fechafin').isValid() ) {
			Ext.Msg.alert(translations.mensaje, 'Fecha Final NO es Válida', function() { _win.down('#fechafin').focus(); }); return false ; }

		var _fechaini = fjsDateSQL(_win.down('#fechaini').getRawValue());  var _fechafin = fjsDateSQL(_win.down('#fechafin').getRawValue());
		var _get = 'xxFormat=P&xxType_record=REPORT&xxCuebanc_key='+_win.getCallKey() + '&xxCuebanc_nrobanco='+_win.down('#cuebanc_nro').getValue();
		fext_pdf('', 'Reporte Movimientos Bancarios', 'php/pdf/pdf_treasury_cuentas_bancarias_movimientos_report.php?'+_get);
	},

	tcbdb_btnExitClick: function(button, e, options) {
		button.up('window').close();
	},

	tcbdb_grdTreasury_cuentas_bancarias_diferenciaSelectionchange: function(model, record, options) {			
		if ( record.length == 1 ) {
			var _panel = model.view.panel.up('panel'); var _cboOpc_id = _panel.down('#opc_id');
			_panel.down('#btnModify').setDisabled(fextpub_uamoButtons(_cboOpc_id, 2));
			_panel.down('#btnQuery').setDisabled(fextpub_uamoButtons(_cboOpc_id, 3));
		}
	},

	/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
	tcbde_BeforeShow: function(component, options) {
		var _typeEdit = component.getTypeEdit();
		var _str = Ext.create('Ext.data.Store', {
			fields: [{ name: 'tabgen_id', type: 'int' }, { name: 'tabgen_nombre', type: 'string' }],
			data: [{ tabgen_id: 1, tabgen_nombre: 'Compra' }, { tabgen_id: 2, tabgen_nombre: 'Venta' }]
		});
		var _cboCuebancdif_tctype = component.down('#cuebancdif_tctype');
		_cboCuebancdif_tctype.bindStore(_str);
		_cboCuebancdif_tctype.getStore().load({ callback: function(records, operations, success) { _cboCuebancdif_tctype.setValue(2); } });

        if ( _typeEdit == '1' ) {
        	var _icon = 'icon_New_90'; var _title = 'Nuevo Diferencial de Cambio';
        } else if ( fjsIn_array(_typeEdit, ['2','3']) ) {
	        var _form = component.down('form');
	   		_form.load({
	   			method: 'POST', url: 'php/treasury_cuentas_bancarias_diferencia_json_records.php',
	            params: { xxCuebancdif_key: component.getCallKey(),  xxType_record: 'form' },
	            waitMsg: 'Loading...',
	            success: function (form, action) {
	                try {
	                    var _model = Ext.create('Siace.model.treasury.Cuenta_Bancaria_Diferencia'); var _result = Ext.decode(action.response.responseText);
	                    if ( _result.data[0] ) {
	                        _model.set(_result.data[0]);  _form.loadRecord(_model);
	                        component.down('#cuebancdif_caj_saldo').setValue(_result.data[0].cuebancdif_caj_debe*1 - _result.data[0].cuebancdif_caj_haber*1);
	                        component.down('#cuebancdif_saldo').setValue(_result.data[0].cuebancdif_debe*1 - _result.data[0].cuebancdif_haber*1);
	                    }
	                }
	                catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
	            },
	            failure: function (form, action) { Ext.Msg.alert("Load failed", action.result.errorMessage); }
	        });

        	if ( _typeEdit == '2' ) { 
        		var _icon = 'icon_Modify_90'; var _title = 'Modificar Diferencial de Cambio';
        	} else { 
        		var _icon = 'icon_Query_90'; var _title = 'Consulta Diferencial de Cambio'; 
				component.down('#cuebancdif_fecha').disable(); component.down('#cuebancdif_tctype').disable();
				component.down('#cuebancdif_caj_debe').disable(); component.down('#cuebancdif_caj_haber').disable(); 
				component.down('#cuebancdif_debe').disable(); component.down('#cuebancdif_haber').disable(); //component.down('#cuebancdif_observ').disable();
				component.down('#btnSave').disable(); component.down('#btnUndo').disable(); component.down('#btnExit').enable();
        	}
        }

        component.setIconCls(_icon); component.setTitle(_title);
	},

	tcbde_Close: function(panel, options) {
		//if ( this.getPps_Public_PersonasSearch() !== undefined ) { this.getPps_Public_PersonasSearch().close();  this.getPps_Public_PersonasSearch().destroy(); }
	},

	tcbde_btnSaveClick: function(button, e, options) {
	    var _win = button.up('window'); var _frm = _win.down('form');
	    if ( _win.down('#cuebancdif_fecha').getValue() == null || !_win.down('#cuebancdif_fecha').isValid() || _win.down('#cuebancdif_fecha').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar la FECHA para el diferencial de Cambio', function() { _win.down('#cuebancdif_fecha').focus() }); return false ; }
	    if ( _win.down('#cuebancdif_tctype').getValue() == '' || _win.down('#cuebancdif_tctype').getValue()*1 <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el TIPO DE CAMBIO', function() { _win.down('#cuebancdif_tctype').focus(); }); return false ; }
	    if ( _win.down('#cuebancdif_caj_debe').getValue() == '' || _win.down('#cuebancdif_caj_debe').getValue()*1 <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el importe para el DEBE del Libro Caja ', function() { _frm.down('#cuebancdif_caj_debe').focus(); }); return false ; }
	    if ( _win.down('#cuebancdif_caj_haber').getValue() == '' || _win.down('#cuebancdif_caj_haber').getValue()*1 <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el importe para el HABER del Libro Caja ', function() { _frm.down('#cuebancdif_caj_haber').focus(); }); return false ; }
	    if ( _win.down('#cuebancdif_debe').getValue() == '' || _win.down('#cuebancdif_debe').getValue()*1 <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el importe para el DEBE de la Cuenta Bancaria', function() { _frm.down('#cuebancdif_debe').focus(); }); return false ; }
	    if ( _win.down('#cuebancdif_haber').getValue() == '' || _win.down('#cuebancdif_haber').getValue()*1 <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el importe para el HABER de la Cuenta Bancaria', function() { _frm.down('#cuebancdif_haber').focus(); }); return false ; }


	    if ( _frm.getForm().isValid() ) {
			Ext.Msg.confirm(translations.confirmar, translations.mensaje_pregunta_guardar, function(btn){
			if ( btn == 'yes' ) {
			    var _vs = fextpub_sessionVariables();
			    _frm.getForm().submit({
					method: 'POST', url: 'php/treasury_cuentas_bancarias_diferencia_save.php',
					params:{ xx0005: 'YES', xxType_edit: _win.getTypeEdit(),
							 zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
		            waitTitle: translations.valida_titulo, waitMsg: translations.valida_mensaje01,
			        success: function(form, action) {
			            var result = Siace.util.Util.decodeJSON(action.response.responseText);
			            if ( result.success ) {
				            if ( _win.getCallStore() !== null ) { _win.getCallStore().load();
						    } else if ( _win.getCallWindow() !== null ) { }
	            	        _win.close();
			            } else { Siace.util.Util.showErrorMsg(result.msg); }
			        },
			        failure: function(form, action) { Siace.util.Util.showErrorMsg(action.response.responseText); }
			    });
			}});
	    }
	},

	tcbde_btnUndoClick: function(button, e, options) {
		button.up('window').close();
	},

	tcbde_btnExitClick: function(button, e, options) {
		button.up('window').close();
	},

	tcbde_cuebancdif_caj_debeChange: function(textfield, newValue, oldValue, options) {
		var _win = textfield.up('window');
		if ( fjsIn_array(_win.getTypeEdit(), ['1','2']) ) {
			_win.down('#cuebancdif_caj_saldo').setValue( _win.down('#cuebancdif_caj_debe').getValue()*1 - _win.down('#cuebancdif_caj_haber').getValue()*1 );
		}
	},

	tcbde_cuebancdif_caj_haberChange: function(textfield, newValue, oldValue, options) {
		var _win = textfield.up('window');
		if ( fjsIn_array(_win.getTypeEdit(), ['1','2']) ) {
			_win.down('#cuebancdif_caj_saldo').setValue( _win.down('#cuebancdif_caj_debe').getValue()*1 - _win.down('#cuebancdif_caj_haber').getValue()*1 );
		}
	},

	tcbde_cuebancdif_debeChange: function(textfield, newValue, oldValue, options) {
		var _win = textfield.up('window');
		if ( fjsIn_array(_win.getTypeEdit(), ['1','2']) ) {
			_win.down('#cuebancdif_saldo').setValue( _win.down('#cuebancdif_debe').getValue()*1 - _win.down('#cuebancdif_haber').getValue()*1 );
		}
	},

	tcbde_cuebancdif_haberChange: function(textfield, newValue, oldValue, options) {
		var _win = textfield.up('window');
		if ( fjsIn_array(_win.getTypeEdit(), ['1','2']) ) {
			_win.down('#cuebancdif_saldo').setValue( _win.down('#cuebancdif_debe').getValue()*1 - _win.down('#cuebancdif_haber').getValue()*1 );
		}
	},

	/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
	tcbmb_BeforeRender: function(component, options) {
		fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': component.down('#opc_id'), 'menu_id': '4111' });
		component.down('#fechaini').setValue(fjsDateFirstDayMonth('')); component.down('#fechafin').setValue(fjsDateCurrent(''));
		var _store = Ext.create('Siace.store.treasury.Cuentas_Bancarias_Movimientos');
		var _grid = component.down('#grdTreasury_cuentas_bancarias_movimientos'); var _pagtool = component.down('#pgtTreasury_cuentas_bancarias_movimientos');
		_grid.bindStore(_store);  _pagtool.bindStore(_store);
		_store.sort('cuebancmov_fecha', 'ASC'); _store.pageSize = 500;
		_store.on('beforeload', function(store, operations, eOpts) {
			component.down('#btnQuery').disable();

			store.getProxy().setExtraParam('xxCuebanc_key', component.down('#cuebanc_key').getValue());
		    store.getProxy().setExtraParam('xxFechaini', component.down('#fechaini').getSubmitData());
		    store.getProxy().setExtraParam('xxFechafin', component.down('#fechafin').getSubmitData());
		    store.getProxy().setExtraParam('xxCuebancmov_nro', component.down('#cuebancmov_nro').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		}); _store.load();

		var _form = component.down('form');
	   	_form.load({
	   		method: 'POST', url: 'php/treasury_cuentas_bancarias_json_records.php',
	        params: { xxCuebanc_key: component.down('#cuebanc_key').getValue(),  xxType_record: 'window', xxOrder_by: 'cuebanc_key' },
	        waitMsg: 'Loading...',
	        success: function (form, action) {
	            try {
	                var _model = Ext.create('Siace.model.treasury.Cuenta_Bancaria'); var _result = Ext.decode(action.response.responseText);
	                if ( _result.data[0] ) {
	                    _model.set(_result.data[0]);  _form.loadRecord(_model);
	                    component.down('#fuefin_codeabrev').setValue(_result.data[0].fuefin_code+' - '+_result.data[0].fuefin_abrev);
	                }
                }
                catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
            },
            failure: function (form, action) { Ext.Msg.alert("Load failed", action.result.errorMessage); }
        });
	},

	tcbmb_Clean: function(poComponent) {
		var _store = poComponent.down('#pgtTreasury_cuentas_bancarias_movimientos').getStore();
		var _pagtool = poComponent.down('#pgtTreasury_cuentas_bancarias_movimientos');
		fext_gridClean(_store, _pagtool);

		poComponent.down('#btnQuery').disable();
	},

	tcbmb_ViewEdit: function(pcTypeEdit, poComponent){
		if ( pcTypeEdit == '1' ) {
		} else if ( fjsIn_array(pcTypeEdit, ['2','3']) ) {
	    	//var _record = this.getTcbmb_grdPublic_Usuarios_Accesos().getSelectionModel().getSelection();
	        //if ( _record.length !== 1 ) { return false; }
	    }

		Ext.get(poComponent.getEl()).mask(translations.mensaje_esperar, 'loading');
	    var _win = Ext.create('Siace.view.treasury.Cuentas_Bancarias_MovimientosEditCI');
	    _win.setTypeEdit(pcTypeEdit); _win.setCallStore(poComponent.down('#grdTreasury_cuentas_bancarias_movimientos').getStore());
	    if ( fjsIn_array(pcTypeEdit, ['1']) ) {
	    	_win.down('#cuebanc_key').setValue(poComponent.down('#cuebanc_key').getValue());
	    	_win.down('#entibanc_nombre').setValue(poComponent.down('#entibanc_nombre').getValue());
	    	_win.down('#cuebanc_nro').setValue(poComponent.down('#cuebanc_nro').getValue());
	    } else if ( fjsIn_array(pcTypeEdit, ['2','3']) ) { _win.setCallKey(_record[0].data.cuebancmov_key); }
	    _win.show();
	    Ext.get(poComponent.getEl()).unmask();
	},

	tcbmb_opc_idChange: function(combo, newValue, oldValue, options) {
		combo.up('panel').down('#btnNew').setDisabled(fextpub_uamoButtons(combo, 1));
	},

	tcbmb_btnNewClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 1) ) { return false; } this.tcbmb_ViewEdit('1', button.up('window'));
	},

	tcbmb_btnQueryClick: function(button, e, options) {
	},

	tcbmb_btnReportClick: function(button, e, options) {
		var _win = button.up('window');
		if ( !_win.down('#fechaini').isValid() ) {
			Ext.Msg.alert(translations.mensaje, 'Fecha Inicial NO es Válida', function() { _win.down('#fechaini').focus(); }); return false ; }
		if ( !_win.down('#fechafin').isValid() ) {
			Ext.Msg.alert(translations.mensaje, 'Fecha Final NO es Válida', function() { _win.down('#fechafin').focus(); }); return false ; }

		var _fechaini = fjsDateSQL(_win.down('#fechaini').getRawValue());  var _fechafin = fjsDateSQL(_win.down('#fechafin').getRawValue());
		var _get = 'xxFormat=P&xxType_record=REPORT&xxCuebanc_key='+_win.getCallKey() + '&xxCuebanc_nrobanco='+_win.down('#cuebanc_nro').getValue();
		fext_pdf('', 'Reporte Movimientos Bancarios', 'php/pdf/pdf_treasury_cuentas_bancarias_movimientos_report.php?'+_get);
	},

	tcbmb_btnExitClick: function(button, e, options) {
		button.up('window').close();
	},

	tcbmb_cuebanc_nroChange: function(textfield, newValue, oldValue, options) {
		this.tcbmb_Clean(textfield.up('window'));
	},

	tcbmb_fechainiChange: function(datefield, newValue, oldValue, options) {
		this.tcbmb_Clean(datefield.up('window'));
	},

	tcbmb_fechafinChange: function(datefield, newValue, oldValue, options) {
		this.tcbmb_Clean(datefield.up('window'));
	},

	tcbmb_grdTreasury_cuentas_bancarias_movimientosSelectionchange: function(model, record, options) {			
		if ( record.length == 1 ) {
			var _win = model.view.panel.up('window'); var _cboOpc_id = _win.down('#opc_id');
			_win.down('#btnQuery').setDisabled(fextpub_uamoButtons(_cboOpc_id, 3));
		}
	},

	/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
	tcbmechq_BeforeShow: function(component, options) {
		var _typeEdit = component.getTypeEdit();
		
        if ( _typeEdit == '1' ) {
        	var _icon = 'icon_New_90'; var _title = 'Nuevo Movimiento Bancario [Abono]';
			var _cboCuebanc_key = component.down('#cuebanc_key');
			_cboCuebanc_key.bindStore(Ext.create('Siace.store.treasury.Cuentas_Bancarias'));
			_cboCuebanc_key.getStore().load({
				params: { xxType_record: 'combo' },
				callback: function(records, operations, success) { }
			});
        } else if ( fjsIn_array(_typeEdit, ['2','3']) ) {
        }
        component.setIconCls(_icon); component.setTitle(_title);
	},

	tcbmechq_Close: function(panel, options) {
		//if ( this.getPps_Public_PersonasSearch() !== undefined ) { this.getPps_Public_PersonasSearch().close();  this.getPps_Public_PersonasSearch().destroy(); }
	},

	tcbmechq_btnSaveClick: function(button, e, options) {
	    var _win = button.up('window'); var _frm = _win.down('form');
	    if ( _win.down('#entibancchq_key').getValue() == '' || _win.down('#entibancchq_key').getValue() == null ) {
	    	Ext.Msg.alert(translations.mensaje, 'No se ha indicado el  CHEQUE al que realizara la operación de depósito', function() { }); return false ; }
	    if ( _win.down('#cuebanc_key').getValue() == '' || _win.down('#cuebanc_key').getValue() == null ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar la  CUENTA BANCARIA en la que se realizara el depósito', function() { _frm.down('#cuebanc_key').focus(); }); return false ; }
	    if ( !_win.down('#cuebancmov_fecha').isValid() ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar la FECHA del depósito', function() { _frm.down('#cuebancmov_fecha').focus(); }); return false ; }
	    if ( _win.down('#cuebancmov_nro').getValue() == '' || _win.down('#cuebancmov_nro').getValue()*1 <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el NUMERO DE OPERACION del documento', function() { _win.down('#cuebancmov_nro').focus(); }); return false ; }

	    if ( _frm.getForm().isValid() ) {
			Ext.Msg.confirm(translations.confirmar, translations.mensaje_pregunta_guardar, function(btn){
			if ( btn == 'yes' ) {
			    var _vs = fextpub_sessionVariables();
			    _frm.getForm().submit({
					method: 'POST', url: 'php/treasury_cuentas_bancarias_movimientos_save_ci04.php',
					params:{ xx0005: 'YES', xxType_edit: _win.getTypeEdit(),
							 zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
		            waitTitle: translations.valida_titulo, waitMsg: translations.valida_mensaje01,
			        success: function(form, action) {
			            var result = Siace.util.Util.decodeJSON(action.response.responseText);
			            if ( result.success ) {
				            if ( _win.getCallStore() !== null ) { _win.getCallStore().load();
						    } else if ( _win.getCallWindow() !== null ) { }
	            	        _win.close();
			            } else { Siace.util.Util.showErrorMsg(result.msg); }
			        },
			        failure: function(form, action) { Siace.util.Util.showErrorMsg(action.response.responseText); }
			    });
			}});
	    }
	},

	tcbmechq_btnUndoClick: function(button, e, options) {
		button.up('window').close();
	},

	tcbmechq_btnExitClick: function(button, e, options) {
		button.up('window').close();
	},

	/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
	tcbmeci_BeforeShow: function(component, options) {
		var _typeEdit = component.getTypeEdit();
		component.down('#comprob_serie').bindStore(Ext.create('Siace.store.public.Documentos_Series'));
		
        if ( _typeEdit == '1' ) {
        	var _icon = 'icon_New_90'; var _title = 'Nuevo Movimiento Bancario [Abono]';

			var _storeCD = Ext.create('Siace.store.treasury.Comprobantes_Det');
			component.down('#grdTreasury').bindStore(_storeCD);
			_storeCD.on('beforeload', function(store, operations, eOpts) {
			   store.getProxy().setExtraParam('xxComprob_key', component.down('#comprob_key').getValue());
			   store.getProxy().setExtraParam('xxType_record', 'grid_cuentas_bancarias_movimientos_editci');
			});

			var _cboComprob_serie = component.down('#comprob_serie');
			_cboComprob_serie.bindStore(Ext.create('Siace.store.public.Documentos_Series'));
			_cboComprob_serie.getStore().on('beforeload', function(store, operations, eOpts) {
			    store.getProxy().setExtraParam('xxYear_id', component.down('#year_id').getValue());
			    store.getProxy().setExtraParam('xxDoc_id', '512');
			    store.getProxy().setExtraParam('xxType_record', 'combo');
			});
			component.down('#year_id').setValue(fjsDateCurrent('').substr(0,4)*1);
        } else if ( fjsIn_array(_typeEdit, ['2','3']) ) {
	        var _form = component.down('form');
	   		_form.load({
	   			method: 'POST', url: 'php/treasury_comprobantes_json_records.php',
	            params: { xxComprob_key: component.getCallKey(), xxType_record: 'form', xxOrder_by: 'c.comprob_id' },
	            waitMsg: 'Loading...',
	            success: function (form, action) {
	                try {
	                    var _model = Ext.create('Siace.model.treasury.Comprobante'); var _result = Ext.decode(action.response.responseText);
	                    if ( _result.data[0] ) {
	                        _model.set(_result.data[0]);  _form.loadRecord(_model);
							component.down('#comprob_serie').getStore().add({ docser_serie: _model.data.comprob_serie, docser_format: fjsLpad(_model.data.comprob_serie, 3, '0'), });
							component.down('#comprob_serie').setValue(_model.data.comprob_serie);
							component.down('#comprob_nro').setValue(fjsLpad(_model.data.comprob_nro, 6, '0'));
							_storeCD.load(); _storeCED.load();
	                    }
	                }
	                catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
	            },
	            failure: function (form, action) { Ext.Msg.alert("Load failed", action.result.errorMessage); }
	        });

        	if ( _typeEdit == '2' ) { 
        		var _icon = 'icon_Modify_90'; var _title = translations.treasury_comprobantesedit_title_modify;
        	} else { 
        		var _icon = 'icon_Query_90'; var _title = translations.treasury_comprobantesedit_title_query; 
				component.down('#comprob_nro').disable(); component.down('#comprob_fecha').disable(); component.down('#cuebanc_key').disable(); component.down('#fuefin_id').disable();
				component.down('#comprob_observ').disable();
				component.down('#btnSave').disable(); component.down('#btnUndo').disable(); component.down('#btnExit').enable();

        	}
        }
        component.setIconCls(_icon); component.setTitle(_title);
	},

	tcbmeci_Close: function(panel, options) {
		//if ( this.getPps_Public_PersonasSearch() !== undefined ) { this.getPps_Public_PersonasSearch().close();  this.getPps_Public_PersonasSearch().destroy(); }
	},

	tcbmeci_btnSaveClick: function(button, e, options) {
	    var _win = button.up('window'); var _frm = _win.down('form');
	    if ( !_win.down('#cuebancmov_fecha').isValid() ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar la FECHA del documento', function() { _frm.down('#cuebancmov_fecha').focus(); }); return false ; }
	    if ( _win.down('#cuebancmov_nro').getValue() == '' || _win.down('#cuebancmov_nro').getValue()*1 <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el NUMERO DE OPERACION del documento', function() { _win.down('#cuebancmov_nro').focus(); }); return false ; }
	    if ( _win.down('#comprob_key').getValue() == '' || _win.down('#comprob_key').getValue() == null ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el COMPROBANTE al que se realizara el abono', function() { _win.down('#comprob_nro').focus(); }); return false ; }

		var _detalle = ''; _cuebancmov_monto = 0.00;
		var _recCD = _win.down('#grdTreasury').getStore().getRange();
		for ( var _i = 0;  _i < _recCD.length; _i++ ) {
			_detalle += (_i == 0 ? '' : ',') +'{'+ _recCD[_i].get('tablex') +','+ _recCD[_i].get('tablex_key') +',0,'+_recCD[_i].get('tabley')+','+_recCD[_i].get('tabley_id') +','+ _recCD[_i].get('tablex_monto_pago') +',0,0}';
			_cuebancmov_monto += (fjsRound(Number(_recCD[_i].get('tablex_monto_pago')), 2)*1);
		}
		_cuebancmov_monto = fjsRound(_cuebancmov_monto,2);
		if ( _detalle == '' ) { Ext.Msg.alert(translations.mensaje, 'Documento no registra detalle', function() { _frm.down('#btnAdd').focus(); }); return false ; }
		if ( _cuebancmov_monto*1 <= 0 ) { Ext.Msg.alert(translations.mensaje, 'No se ha seleccionado ningun detalle de documento', function() { }); return false ; }
		if ( _cuebancmov_monto*1 !== _win.down('#cuebancmov_monto').getValue()*1 ) { Ext.Msg.alert(translations.mensaje, 'Inconsistencia en importe de documento: '+_cuebancmov_monto +' - '+ _win.down('#cuebancmov_monto').getValue(), function() { }); return false ; }

	    if ( _frm.getForm().isValid() ) {
			Ext.Msg.confirm(translations.confirmar, translations.mensaje_pregunta_guardar, function(btn){
			if ( btn == 'yes' ) {
			    var _vs = fextpub_sessionVariables();
			    _frm.getForm().submit({
					method: 'POST', url: 'php/treasury_cuentas_bancarias_movimientos_save_ci01.php',
					params:{ xx0005: 'YES', xxType_edit: _win.getTypeEdit(), xxCuebancmov_monto: _win.down('#cuebancmov_monto').getValue(), xxDetalle: _detalle,
							 zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
		            waitTitle: translations.valida_titulo, waitMsg: translations.valida_mensaje01,
			        success: function(form, action) {
			            var result = Siace.util.Util.decodeJSON(action.response.responseText);
			            if ( result.success ) {
				            if ( _win.getCallStore() !== null ) { _win.getCallStore().load(); } 
						    else if ( _win.getCallWindow() !== null ) { }
	            	        _win.close();
			            } else { Siace.util.Util.showErrorMsg(result.msg); }
			        },
			        failure: function(form, action) { Siace.util.Util.showErrorMsg(action.response.responseText); }
			    });
			}});
	    }
	},

	tcbmeci_btnUndoClick: function(button, e, options) {
		button.up('window').close();
	},

	tcbmeci_btnExitClick: function(button, e, options) {
		button.up('window').close();
	},

	tcbmeci_comprob_nroBlur: function(textfield, The, options) {
		var _win = textfield.up('window');
		if ( textfield.getValue() !== _win.down('#COMPROB_NRO').getValue() ) { this.tcbmeci_comprob_nroSearch('1', _win); }
	},

	tcbmeci_comprob_nroFocus: function(textfield, The, options) {
		textfield.up('window').down('#COMPROB_NRO').setValue(textfield.getValue());
	},

	tcbmeci_comprob_nroKeypress: function(textfield, e, options) {
		if( e.getCharCode() == 13 ) { this.tcbmeci_comprob_nroSearch('13', textfield.up('window')); }
	},

	tcbmeci_comprob_nroSearch: function(pcType, poWin) {
		if ( poWin.down('#comprob_nro').getValue() !== '' && poWin.down('#comprob_nro').getValue()*1 > 0 ) {
			Ext.Ajax.request({
		        method: 'POST', url: 'php/treasury_comprobantes_json_records.php',
			    params: { xxYear_id: poWin.down('#year_id').getValue(), xxComprob_serie: poWin.down('#comprob_serie').getValue(), xxComprob_nro: poWin.down('#comprob_nro').getValue(), 
			              xxType_record: 'window_cuentas_bancarias_movimientos_editci', xxOrder_by: 'comprob_key' },
				success : function(response, options) {
				    var _result = Siace.util.Util.decodeJSON(response.responseText);
				    if ( _result.success ) {
				    	if ( _result.data.length == 0 ) {
							poWin.down('#comprob_key').setValue(''); poWin.down('#comprob_fecha').setValue(''); poWin.down('#grdTreasury').getStore().removeAll();
				    	} else {
				       		poWin.down('#comprob_key').setValue(_result.data[0].comprob_key);
				       		poWin.down('#comprob_fecha').setValue(fjsDateDDMMAAAA(_result.data[0].comprob_fecha));
				       		poWin.down('#grdTreasury').getStore().load();
				       	}
					}
				},
				failure : function(response, options) { }
			});
		} else {
			poWin.down('#comprob_key').setValue(''); poWin.down('#comprob_fecha').setValue(''); poWin.down('#grdTreasury').getStore().removeAll();
		}
		poWin.down('#cuebancmov_monto').setValue('');
	},

	tcbmeci_comprob_serieChange: function(combo, newValue, oldValue, options) {
		if ( combo.up('window').getTypeEdit() == '1' ) { this.tcbmeci_comprob_nroSearch('13', combo.up('window')); }
	},

	tcbmeci_grdTreasurySelectionchange: function(model, record, options) {
		var _win = this.getTcbmeci_grdTreasury().up('window');
		if ( record.length > 0 ) {
			var _monto = 0;
			for ( var _i=0; _i<record.length; _i++) {
				_monto += record[_i].data.tablex_monto_pago*1;
			}
			_win.down('#cuebancmov_monto').setValue(_monto);
		} else {
			_win.down('#cuebancmov_monto').setValue('');
		}
	},

	tcbmeci_year_idChange: function(combo, newValue, oldValue, options) {
		if ( combo.up('window').getTypeEdit() == '1' ) { 
			var _cboComprob_serie = combo.up('panel').down('#comprob_serie');
			var _me = this;
			_cboComprob_serie.getStore().load({
				callback: function(records, operations, success) {
					if ( records.length > 0 ) { _cboComprob_serie.enable();  _cboComprob_serie.setValue(records[0].data.docser_serie); }
					else { _cboComprob_serie.disable(); _cboComprob_serie.setValue(''); }
					_me.tcbmeci_comprob_nroSearch('13', combo.up('window'));
				}
			});
		}
	},

	/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
 	tcbmr_BeforeRender: function(component, options) {
		var _str = Ext.create('Ext.data.Store', {
			fields: [ { name: 'typrec_id', type: 'string' }, { name: 'typrec_nombre', type: 'string' }, ],
			data: [
				{ typrec_id: 'REPORT', typrec_nombre: 'Movimientos Bancarios' },
				{ typrec_id: 'REPORT_LIBRO_BANCOS', typrec_nombre: 'Libro Bancos' },
			]
		});
		var _cboType_record = component.down('#type_record');
		_cboType_record.bindStore(_str);
		_cboType_record.getStore().load({ callback: function(records, operations, success) {  _cboType_record.setValue('REPORT'); } });


		var _cboCuebanc_key = component.down('#cuebanc_key');
		_cboCuebanc_key.bindStore(Ext.create('Siace.store.treasury.Cuentas_Bancarias'));
		_cboCuebanc_key.getStore().load({ 
			params: { xxType_record: 'combo_comprobantes', xxOrder_by: 'cuebanc_nro', xxAdd_blank: 'YES' },
			callback: function(records, operations, success) {
				if ( records.length > 0 ) { _cboCuebanc_key.enable();  _cboCuebanc_key.setValue(records[0].data.cuebanc_key); }
				else { _cboCuebanc_key.disable(); _cboCuebanc_key.setValue(''); }
			}
		})

		var _cboFuefin_id = component.down('#fuefin_id');
		_cboFuefin_id.bindStore(Ext.create('Siace.store.budget.Iyueff'));
		_cboFuefin_id.getStore().load({ 
			params: { xxType_record: 'combo_fuefin_codename', xxOrder_by: 'fuefin_code', xxAdd_blank: 'YES' },
			callback: function(records, operations, success) { 
			   	if ( records.length > 0 ) { _cboFuefin_id.enable(); _cboFuefin_id.setValue(records[0].data.fuefin_id); }
			    else { _cboFuefin_id.disable();  _cboFuefin_id.setValue(''); }
    		}
		});
	},

	tcbmr_Close: function(panel, options) {
		//if ( this.getPns_Public_NandinasSearch() !== undefined ) { this.getPns_Public_NandinasSearch().close();  this.getPns_Public_NandinasSearch().destroy(); }
	},

	tcbmr_ViewReport: function(pcFormat, poPanel){
		if ( !poPanel.down('#fechaini').isValid() ) {
			Ext.Msg.alert(translations.mensaje, 'Fecha Inicial NO es Válida', function() { poPanel.down('#fechaini').focus(); }); return false ; }
		if ( !poPanel.down('#fechafin').isValid() ) {
			Ext.Msg.alert(translations.mensaje, 'Fecha Final NO es Válida', function() { poPanel.down('#fechafin').focus(); }); return false ; }

		var _type_record = poPanel.down('#type_record').getValue();
		var _fechaini = fjsDateSQL(poPanel.down('#fechaini').getRawValue());  var _fechafin = fjsDateSQL(poPanel.down('#fechafin').getRawValue());
		var _get = 'xxFormat='+pcFormat +'&xxType_record='+_type_record +'&xxCuebanc_key='+poPanel.down('#cuebanc_key').getValue() + '&xxCuebanc_nrobanco='+poPanel.down('#cuebanc_key').getRawValue() +'&xxFuefin_id='+poPanel.down('#fuefin_id').getValue() +'&xxFuefin_code='+poPanel.down('#fuefin_id').getRawValue().substr(0,2) +'&xxFuefin_nombre='+poPanel.down('#fuefin_id').getRawValue().substr(3) +'&xxFechaini='+_fechaini +'&xxFechafin='+_fechafin;
		if ( fjsIn_array(_type_record, ['REPORT']) ) { fext_pdf('', 'Reporte Movimientos Bancarios', 'php/pdf/pdf_treasury_cuentas_bancarias_movimientos_report.php?'+_get); } 
		else if ( fjsIn_array(_type_record, ['REPORT_LIBRO_BANCOS']) ) { fext_pdf('', 'Reporte Libro Bancos', 'php/pdf/pdf_treasury_cuentas_bancarias_movimientos_report_libro_bancos.php?'+_get); } 
	},

	tcbmr_btnPdfClick: function(button, e, options) {
		this.tcbmr_ViewReport('P', button.up('panel'));
	},

	tcbmr_btnExcelClick: function(button, e, options) {
		this.tcbmr_ViewReport('E', button.up('panel'));
	},
});