Ext.define('Siace.controller.accounting.Plan_Contable', {
	extend: 'Ext.app.Controller',
	views: ['accounting.Plan_ContableBrowse', 'accounting.Plan_ContableEdit',],

	init: function(application) {
		this.control({
			'accounting_plan_contablebrowse': { beforerender: this.apcb_BeforeRender, },
			'accounting_plan_contablebrowse #panAccounting_plan_contable #opc_id': { change: this.apcb_papc_opc_idChange, },
			'accounting_plan_contablebrowse #panAccounting_plan_contable #btnNew': { click: this.apcb_papc_btnNewClick, },
			'accounting_plan_contablebrowse #panAccounting_plan_contable #btnModify': { click: this.apcb_papc_btnModifyClick, },
			'accounting_plan_contablebrowse #panAccounting_plan_contable #btnQuery': { click: this.apcb_papc_btnQueryClick, },
			'accounting_plan_contablebrowse #panAccounting_plan_contable #btnPrinter': {  },
			'accounting_plan_contablebrowse #panAccounting_plan_contable #grdAccounting_plan_contable': { selectionchange: this.apcb_papc_grdAccounting_plan_contableSelectionchange, },
			//'accounting_plan_contablebrowse #panAccounting_plan_contable #mone_id': { change: this.apcb_papc_mone_id Change, },
			'accounting_plan_contablebrowse #panAccounting_plan_contable #pctbl_cuenta': { change: this.apcb_papc_pctbl_cuentaChange, },
			'accounting_plan_contablebrowse #panAccounting_plan_contable #pctbl_nombre': { change: this.apcb_papc_pctbl_nombreChange, },
			'accounting_plan_contablebrowse #panAccounting_plan_contable #tipcta_id': { change: this.apcb_papc_tipcta_idChange, },
			'accounting_plan_contablebrowse #tabAccounting_libro_diario_det #fechaini': { change: this.apcb_taldd_fechainiChange, },
			'accounting_plan_contablebrowse #tabAccounting_libro_diario_det #fechafin': { change: this.apcb_taldd_fechafinChange, },
			'accounting_plan_contablebrowse #tabAccounting_libro_diario_det #mes_id': { change: this.apcb_taldd_mes_idChange, },
			'accounting_plan_contablebrowse #tabAccounting_libro_diario_det #subdia_id': { change: this.apcb_taldd_subdia_idChange, },
			'accounting_plan_contablebrowse #tabAccounting_libro_diario_det #year_id': { change: this.apcb_taldd_year_idChange, },

            'accounting_plan_contableedit': { beforeshow: this.apce_BeforeShow },
            'accounting_plan_contableedit #btnSave': { click: this.apce_btnSaveClick, },
            'accounting_plan_contableedit #btnUndo': { click: this.apce_btnUndoClick, },
            'accounting_plan_contableedit #btnExit': { click: this.apce_btnExitClick, },
		});
	},

	apcb_BeforeRender: function(component, options) {
		var _menu_id = component.getMenuId(); var _panAPC = component.down('#panAccounting_plan_contable'); var _tabALDD = component.down('#tabAccounting_libro_diario_det');
		var _gridAPC = _panAPC.down('#grdAccounting_plan_contable'); var _pagAPC = _panAPC.down('#pagAccounting_plan_contable');  var _tab = component.down('#tab01'); var _me = this;
		fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': _panAPC.down('#opc_id'), 'menu_id': _menu_id });
		fextpub_tablas_generalesFilter({'objeto': _panAPC.down('#tipcta_id'), 'tabgen_parent': '3000', 'tabgen_estado': '1', 'type_record': 'combo_codename'});
		fextpub_yearsValue(_tabALDD.down('#year_id'), '');
		fextpub_tablas_generalesFilter({'objeto': _tabALDD.down('#subdia_id'), 'tabgen_parent': '3900', 'type_record': 'combo_codename'});

		var _storeALDD = Ext.create('Siace.store.accounting.Libro_Diario_Det');
		var _gridALDD = _tabALDD.down('#grdAccounting_libro_diario_det'); var _pagALDD = _tabALDD.down('#pagAccounting_libro_diario_det');
		_gridALDD.bindStore(_storeALDD);  _pagALDD.bindStore(_storeALDD);
		_storeALDD.sort('libdia_fecha', 'ASC'); _storeALDD.pageSize = 500;
		_storeALDD.on('beforeload', function(store, operations, options) {
			//_tabALDD.down('#btnModify').disable(); _tabALDD.down('#btnQuery').disable(); _tabALDD.down('#btnDelete').disable();
		    var _record = _gridAPC.getSelectionModel().getSelection()[0];
	    	store.getProxy().setExtraParam('xxPctbl_id', _record.data.pctbl_id);
	    	store.getProxy().setExtraParam('xxYear_id', _tabALDD.down('#year_id').getValue());
	    	store.getProxy().setExtraParam('xxMes_id', _tabALDD.down('#mes_id').getValue());
	    	store.getProxy().setExtraParam('xxSubdia_id', _tabALDD.down('#subdia_id').getValue());
			store.getProxy().setExtraParam('xxFechaini', _tabALDD.down('#fechaini').getSubmitData());
			store.getProxy().setExtraParam('xxFechafin', _tabALDD.down('#fechafin').getSubmitData());

		    store.getProxy().setExtraParam('xxType_record', 'grid_accounting_plan_contablebrowse');
		    //store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		    store.getProxy().setExtraParam('xxPaginate', '1');
		});

		var _storeAPC = Ext.create('Siace.store.accounting.Plan_Contable');
		_gridAPC.bindStore(_storeAPC);  _pagAPC.bindStore(_storeAPC);
		_storeAPC.sort('pctbl_cuenta', 'ASC'); _storeAPC.pageSize = 500;
		_storeAPC.on('beforeload', function(store, opertations, eoptions) {
			_panAPC.down('#btnModify').disable(); _panAPC.down('#btnQuery').disable();
			_me.apcb_tabsClean(component, true);

		    store.getProxy().setExtraParam('xxPctbl_cuenta', _panAPC.down('#pctbl_cuenta').getValue());
		    store.getProxy().setExtraParam('xxPctbl_nombre', _panAPC.down('#pctbl_nombre').getValue());
		    store.getProxy().setExtraParam('xxTipcta_id', _panAPC.down('#tipcta_id').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});

		this.apcb_tabsClean(component, true);
	},

	apcb_tabsClean: function(poComponent, pbBoolean) {
		var _tabALDD = poComponent.down('#tabAccounting_libro_diario_det');
		var _pagALDD = _tabALDD.down('#pagAccounting_libro_diario_det'); var _storeALDD = _pagALDD.getStore();
		fext_gridClean(_storeALDD, _pagALDD);
		_pagALDD.setDisabled(pbBoolean); _tabALDD.down('#year_id').setDisabled(pbBoolean); _tabALDD.down('#mes_id').setDisabled(pbBoolean); _tabALDD.down('#subdia_id').setDisabled(pbBoolean); _tabALDD.down('#fechaini').setDisabled(pbBoolean); _tabALDD.down('#fechafin').setDisabled(pbBoolean);
	},

	apcb_papc_Clean: function(poComponent) {
		var _pag = poComponent.down('#pagAccounting_plan_contable'); var _store = _pag.getStore();
		fext_gridClean(_store, _pag);

		poComponent.down('#btnModify').disable(); poComponent.down('#btnQuery').disable(); poComponent.down('#btnAnnular').disable(); poComponent.down('#btnPrinter').disable();
	},

	apcb_papc_ViewEdit: function(poComponent, pcTypeEdit) {
		if ( fjsIn_array(pcTypeEdit, ['2','3']) ) {
	    	var _record = poComponent.down('#grdAccounting_plan_contable').getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }
	    }

		Ext.get(poComponent.getEl()).mask(translations.mensaje_esperar, 'loading');
	    var _win = Ext.create('Siace.view.accounting.Plan_ContableEdit');
	    _win.setTypeEdit(pcTypeEdit); _win.setCallStore(poComponent.down('#grdAccounting_plan_contable').getStore());
	    if ( pcTypeEdit == '1' ) {  }
	    else if (fjsIn_array(pcTypeEdit, ['2','3'])) { _win.setCallId(_record.data.pctbl_id); }
	    _win.show();
	    Ext.get(poComponent.getEl()).unmask();
	},

	apcb_papc_opc_idChange: function(combo, newValue, oldValue, options) {
		combo.up('panel').down('#btnNew').setDisabled(fextpub_uamoButtons(combo, 1));
	},

	apcb_papc_btnNewClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 1) ) { return false; } this.apcb_papc_ViewEdit(button.up('panel'), '1');
	},

	apcb_papc_btnModifyClick: function(button, e, options) {
        if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 2) ) { return false; } this.apcb_papc_ViewEdit(button.up('panel'), '2');
	},

	apcb_papc_btnQueryClick: function(button, e, options) {
        if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 3) ) { return false; } this.apcb_papc_ViewEdit(button.up('panel'), '3');
	},

	apcb_papc_btnPrinterClick: function(button, e, options) {
	},

	apcb_papc_grdAccounting_plan_contableSelectionchange: function(model, record, options) {			
		if ( record.length == 1 ) {
			var _panel = model.view.panel.up('panel'); var _cboOpc_id = _panel.down('#opc_id');
			_panel.down('#btnModify').setDisabled(fextpub_uamoButtons(_cboOpc_id, 2));
			_panel.down('#btnQuery').setDisabled(fextpub_uamoButtons(_cboOpc_id, 3));
			this.apcb_tabsClean(_panel.up('panel'), false);
		}
	},

	apcb_papc_pctbl_cuentaChange: function(textfield, newValue, oldValue, options) {
		this.apcb_papc_Clean(textfield.up('panel'));
	},

	apcb_papc_pctbl_nombreChange: function(textfield, newValue, oldValue, options) {
		this.apcb_papc_Clean(textfield.up('panel'));
	},

	apcb_papc_tipcta_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.apcb_papc_Clean(combo.up('panel')); }
	},

	apcb_taldd_Clean: function(poComponent) {
		var _pag = poComponent.down('#pagAccounting_libro_diario_det'); var _store = _pag.getStore();
		fext_gridClean(_store, _pag);
	},

	apcb_taldd_fechainiChange: function(datefield, newValue, oldValue, options) {
		this.apcb_taldd_Clean(datefield.up('panel'));
	},

	apcb_taldd_fechafinChange: function(datefield, newValue, oldValue, options) {
		this.apcb_taldd_Clean(datefield.up('panel'));
	},

	apcb_taldd_mes_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.apcb_taldd_Clean(combo.up('panel')); }
	},

	apcb_taldd_subdia_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.apcb_taldd_Clean(combo.up('panel')); }
	},

	apcb_taldd_year_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.apcb_taldd_Clean(combo.up('panel')); }
	},

	apce_BeforeShow: function(component, options) {
		var _typeEdit = component.getTypeEdit();
		fextpub_tablas_generalesFilter({'objeto': component.down('#tipcta_id'), 'tabgen_parent': '3000', 'type_record': 'combo_codename', 'disabled': (_typeEdit == '3' ? true : false)});
		fextpub_tablas_generalesFilter({'objeto': component.down('#tipanal_id'), 'tabgen_parent': '3040', 'type_record': 'combo_codename', 'disabled': (_typeEdit == '3' ? true : false)});
		fextpub_tablas_generalesFilter({'objeto': component.down('#tipanx_id'), 'tabgen_parent': '3020', 'type_record': 'combo_codename', 'disabled': (_typeEdit == '3' ? true : false)});

        if ( _typeEdit == '1' ) {
        	var _icon = 'icon_New_90'; var _title = 'Nueva Cuenta Contable';
        } else if ( fjsIn_array(_typeEdit, ['2','3']) ) {
	        var _form = component.down('form');
	   		_form.load({
	   			method: 'POST', url: 'php/accounting_plan_contable_json_records.php',
	            params: { xxPctbl_id: component.getCallId(), xxType_record: 'form' },
	            waitMsg: 'Loading...',
	            success: function (form, action) {
	                try {
	                    var _model = Ext.create('Siace.model.accounting.Plan_Contable'); var _result = Ext.decode(action.response.responseText);
	                    if ( _result.data[0] ) {
	                        _model.set(_result.data[0]);  _form.loadRecord(_model);
	                    }
	                }
	                catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
	            },
	            failure: function (form, action) { Ext.Msg.alert("Load failed", action.result.errorMessage); }
	        });

        	if ( _typeEdit == '2' ) { 
        		var _icon = 'icon_Modify_90'; var _title = 'Modificación Cuenta Contable';
        	} else { 
        		var _icon = 'icon_Query_90'; var _title = 'Consulta de Cuenta Contable'; 
				component.down('#pctbl_cuenta').disable(); component.down('#pctbl_nombre').disable(); 
				component.down('#tipcta_id').disable(); component.down('#tipanal_id').disable(); component.down('#tipanx_id').disable(); component.down('#mone_id').disable(); component.down('#pctbl_observ').disable();
				component.down('#btnSave').disable(); component.down('#btnUndo').disable(); component.down('#btnExit').enable();
        	}
        }
        component.setIconCls(_icon); component.setTitle(_title);
	},

	apce_Close: function(panel, options) {
		//if ( this.getPps_Public_PersonasSearch() !== undefined ) { this.getPps_Public_PersonasSearch().close();  this.getPps_Public_PersonasSearch().destroy(); }
	},

	apce_btnSaveClick: function(button, e, options) {
	    var _win = button.up('window'); var _frm = _win.down('form');
	    if ( _win.down('#pctbl_cuenta').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar la CUENTA CONTABLE', function() { _frm.down('#pctbl_cuenta').focus(); }); return false ; }
	    if ( _win.down('#pctbl_nombre').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar la DESCRIPCION de la cuenta contable', function() { _frm.down('#pctbl_nombre').focus(); }); return false ; }


	    if ( _frm.getForm().isValid() ) {
			Ext.Msg.confirm(translations.confirmar, translations.mensaje_pregunta_guardar, function(btn){
			if ( btn == 'yes' ) {
			    var _vs = fextpub_sessionVariables();
			    _frm.getForm().submit({
					method: 'POST', url: 'php/accounting_plan_contable_save.php',
					params:{ xx0005: 'YES',   xxType_edit: _win.getTypeEdit(),
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

	apce_btnUndoClick: function(button, e, options) {
		button.up('window').close();
	},

	apce_btnExitClick: function(button, e, options) {
		button.up('window').close();
	},
});