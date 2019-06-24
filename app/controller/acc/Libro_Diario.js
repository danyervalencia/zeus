Ext.define('Siace.controller.accounting.Libro_Diario', {
	extend: 'Ext.app.Controller',
	stores: [ 'array.MesesAB' ],
	views: [ 'accounting.Libro_DiarioBrowse', 'accounting.Libro_DiarioReports'],
    refs: [
    ],

	init: function(application) {
		this.control({
			'accounting_libro_diariobrowse': { beforerender: this.aldb_BeforeRender, },
			'accounting_libro_diariobrowse #panAccounting_libro_diario #opc_id': { change: this.aldb_pald_opc_idChange, },
			'accounting_libro_diariobrowse #panAccounting_libro_diario #btnNew': { click: this.aldb_pald_btnNewClick, },
			'accounting_libro_diariobrowse #panAccounting_libro_diario #btnModify': { click: this.aldb_pald_btnModifyClick, },
			'accounting_libro_diariobrowse #panAccounting_libro_diario #btnQuery': { click: this.aldb_pald_btnQueryClick, },
			'accounting_libro_diariobrowse #panAccounting_libro_diario #libdia_nro': { },
			'accounting_libro_diariobrowse #panAccounting_libro_diario #grdAccounting_libro_diario': { selectionchange: this.aldb_pald_grdAccounting_libro_diarioSelectionchange, },
			'accounting_libro_diariobrowse #panAccounting_libro_diario #mes_id': { change: this.aldb_pald_mes_idChange, },
			'accounting_libro_diariobrowse #panAccounting_libro_diario #subdia_id': { change: this.aldb_pald_subdia_idChange, },
			'accounting_libro_diariobrowse #panAccounting_libro_diario #year_id': { change: this.aldb_pald_year_idChange, },
			//'accounting_libro_diariobrowse #tabAccounting_libro_diario_det #opc_id': { change: this.aldb_taldd_opc_idChange, },
			'accounting_libro_diariobrowse #tabAccounting_libro_diario_det #btnNew': { click: this.aldb_taldd_btnNewClick },
			'accounting_libro_diariobrowse #tabAccounting_libro_diario_det #btnModify': { click: this.aldb_taldd_btnModifyClick },
			'accounting_libro_diariobrowse #tabAccounting_libro_diario_det #btnQuery': { click: this.aldb_taldd_btnQueryClick },
			'accounting_libro_diariobrowse #tabAccounting_libro_diario_det #grdAccounting_libro_diario_det': { selectionchange: this.aldb_taldd_grdAccounting_libro_diario_detSelectionChange, },

			'accounting_libro_diarioreports': { beforerender: this.aldr_BeforeRender, close: this.aldr_Close, },
			'accounting_libro_diarioreports #btnPdf': { click: this.aldr_btnPdfClick, },
			'accounting_libro_diarioreports #btnExcel': { click: this.aldr_btnExcelClick, },
		});
	},

	aldb_BeforeRender: function(component, options) {
		var _menu_id = component.getMenuId(); var _panALD = component.down('#panAccounting_libro_diario'); var _tabALDD = component.down('#tabAccounting_libro_diario_det');
		var _gridALD = _panALD.down('#grdAccounting_libro_diario'); var _pagALD = _panALD.down('#pagAccounting_libro_diario');  var _tab = component.down('#tab01'); var _me = this;
		fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': _panALD.down('#opc_id'), 'menu_id': _menu_id });
		fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': _tabALDD.down('#opc_id'), 'menu_id': 3106 });
		fextpub_yearsValue(_panALD.down('#year_id'));
		fextpub_tablas_generalesFilter({'objeto': _panALD.down('#subdia_id'), 'tabgen_parent': '3900', 'type_record': 'combo_codename'});

		var _storeALDD = Ext.create('Siace.store.accounting.Libro_Diario_Det');
		var _gridALDD = _tabALDD.down('#grdAccounting_libro_diario_det'); var _pagALDD = _tabALDD.down('#pagAccounting_libro_diario_det');
		_gridALDD.bindStore(_storeALDD);  _pagALDD.bindStore(_storeALDD);
		_storeALDD.pageSize = 500; //_storeALDD.sort('persfono_nro', 'ASC'); 
		_storeALDD.on('beforeload', function(store, operations, options) {
			_tabALDD.down('#btnModify').disable(); _tabALDD.down('#btnQuery').disable(); _tabALDD.down('#btnDelete').disable();
		    var _record = _gridALD.getSelectionModel().getSelection()[0];
	    	store.getProxy().setExtraParam('xxLibdia_id', _record.data.libdia_id);
		    store.getProxy().setExtraParam('xxType_record', 'grid_accounting_libro_diariobrowse');
		    //store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		    store.getProxy().setExtraParam('xxPaginate', '1');
		});

		var _storeALD = Ext.create('Siace.store.accounting.Libro_Diario');
		_gridALD.bindStore(_storeALD);  _pagALD.bindStore(_storeALD);
		_storeALD.pageSize = 500; //_store.sort('bs_nombre', 'ASC');
		_storeALD.on('beforeload', function(store, operations, eoptions) {
			_panALD.down('#btnModify').disable(); _panALD.down('#btnQuery').disable();
			_me.aldb_tabsClean(component, true);

			store.getProxy().setExtraParam('xxYear_id', _panALD.down('#year_id').getValue());
			store.getProxy().setExtraParam('xxMes_id', _panALD.down('#mes_id').getValue());
			store.getProxy().setExtraParam('xxSubdia_id', _panALD.down('#subdia_id').getValue());
			store.getProxy().setExtraParam('xxFechaini', _panALD.down('#fechaini').getSubmitData());
			store.getProxy().setExtraParam('xxFechafin', _panALD.down('#fechafin').getSubmitData());
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    //store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});
	},

	aldb_tabsClean: function(poComponent, pbBoolean) {
		var _tabALDD = poComponent.down('#tabAccounting_libro_diario_det');
		var _pagALDD = _tabALDD.down('#pagAccounting_libro_diario_det'); var _storeALDD = _pagALDD.getStore();
		fext_gridClean(_storeALDD, _pagALDD);
		_pagALDD.setDisabled(pbBoolean); _tabALDD.down('#btnNew').setDisabled(pbBoolean == true ? true : fextpub_uamoButtons(_tabALDD.down('#opc_id'), 1)); _tabALDD.down('#btnModify').disable(); _tabALDD.down('#btnDelete').disable();
	},

	aldb_pald_Clean: function(poComponent) {
		var _pag = poComponent.down('#pagAccounting_libro_diario'); var _store = _pag.getStore();
		fext_gridClean(_store, _pag);

		poComponent.down('#btnModify').disable(); poComponent.down('#btnQuery').disable();
	},

	aldb_pald_opc_idChange: function(combo, newValue, oldValue, options) {
		combo.up('panel').down('#btnNew').setDisabled(fextpub_uamoButtons(combo, 1));
	},

	aldb_pald_btnNewClick: function(button, e, options) {
		//if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 1) ) { return false; } this.aldb_pald_viewEdit(button.up('panel'), '1');
	},

	aldb_pald_btnModifyClick: function(button, e, options) {
        //if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 2) ) { return false; } this.aldb_pald_viewEdit(button.up('panel'), '2');
	},

	aldb_pald_btnQueryClick: function(button, e, options) {
        if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 3) ) { return false; } this.aldb_pald_viewEdit(button.up('panel'), '3');
	},

	aldb_pald_grdAccounting_libro_diarioSelectionchange: function(model, record, options) {
		if ( record.length == 1 ) {
			var _panel = model.view.panel.up('panel'); var _cboOpc_id = _panel.down('#opc_id'); _flga = record[0].data.cuebanc_flga;
			//_panel.down('#btnModify').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 2));
			this.aldb_tabsClean(_panel.up('panel'), false);
		}		
	},

	aldb_pald_mes_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.aldb_pald_Clean(combo.up('panel')); }
	},

	aldb_pald_subdia_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.aldb_pald_Clean(combo.up('panel')); }
	},

	aldb_pald_year_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.aldb_pald_Clean(combo.up('panel')); }
	},

	aldb_taldd_ViewEdit: function(poComponent, pcTypeEdit){
    	var _recALD = poComponent.up('panel').up('panel').down('#grdAccounting_libro_diario').getSelectionModel().getSelection()[0];
        if ( !_recALD ) { return false; }

	    if ( fjsIn_array(pcTypeEdit, ['2','3']) ) {
	    	var _record = poComponent.down('#grdAccounting_libro_diario_det').getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }
	    }

	    var _win = Ext.create('Siace.view.accounting.Libro_Diario_DetEdit');
	    _win.setTypeEdit(pcTypeEdit); _win.setCallStore(poComponent.down('#grdAccounting_libro_diario_det').getStore()); _win.setMenuId(poComponent.up('panel').up('panel').getMenuId());
	    _win.down('#libdia_id').setValue(_recALD.data.libdia_id); //_win.down('#subdia_codename').setValue(_recALD.data.subdia_code);
	    //_win.down('#libdia_record').setValue(_recALD.data.libdia_record); _win.down('#documento').setValue(_recALD.data.doc_abrev +'/ '+ _recALD.data.documento +'   &nbsp; &nbsp; '+ Ext.Date.format(_recALD.data.doc_fecha, 'd/m/Y'));
	    if ( fjsIn_array(pcTypeEdit, ['2','3']) ) { _win.setCallKey(_record.data.libdiadet_id); }
	    _win.show();
	},

	aldb_taldd_btnNewClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 1) ) { return false; } this.aldb_taldd_ViewEdit(button.up('panel'), '1');
	},

	aldb_taldd_btnModifyClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 2) ) { return false; } this.aldb_taldd_ViewEdit(button.up('panel'), '2');
	},

	aldb_taldd_btnQueryClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 3) ) { return false; } this.aldb_taldd_ViewEdit(button.up('panel'), '3');
	},

	aldb_taldd_grdAccounting_libro_diario_detSelectionChange: function(model, record, options) {	
		if ( record.length == 1 ) {
			var _panel = model.view.panel.up('panel'); var _cboOpc_id = _panel.down('#opc_id'); var _type = record[0].data.libdiadet_type;
			_panel.down('#btnModify').setDisabled(fextpub_uamoButtons(_cboOpc_id, 2)); 
			_panel.down('#btnQuery').setDisabled(fextpub_uamoButtons(_cboOpc_id, 3)); 
			_panel.down('#btnDelete').setDisabled( _type == '1' ? true : fextpub_uamoButtons(_cboOpc_id, 7));
		}
	},

	/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
 	aldr_BeforeRender: function(component, options) {
		var _str = Ext.create('Ext.data.Store', {
			fields: [ { name: 'typrec_id', type: 'string' }, { name: 'typrec_nombre', type: 'string' }, ],
			data: [
				{ typrec_id: 'REPORT', typrec_nombre: 'Libro Diario' },
				{ typrec_id: 'REPORT_MENSUAL', typrec_nombre: 'Libro Diario - Consolidad Mensual' },
				{ typrec_id: 'REPORT_ANUAL', typrec_nombre: 'Libro Diario - Consolidado Anual' },
				{ typrec_id: 'REPORT_MAYOR', typrec_nombre: 'Libro Mayor' },
			]
		});
		var _cboType_record = component.down('#type_record');
		_cboType_record.bindStore(_str);
		_cboType_record.getStore().load({ callback: function(records, operations, success) { _cboType_record.setValue('REPORT'); } });

		var _cboSubdia_id = component.down('#subdia_id');
		_cboSubdia_id.bindStore(Ext.create('Siace.store.public.Tablas_Generales'));
		_cboSubdia_id.getStore().load({ 
			params: { xxTabgen_parent: '500', xxType_record: 'combo_codename', xxAdd_blank: 'YES' },
			callback: function(records, operations, success){ if ( records.length > 0 ) { _cboSubdia_id.setValue(records[0].data.tabgen_id); }}
		});

		fextpub_yearsCombo(component.down('#year_id'), '1', 'combo', '');
	},

	aldr_Close: function(panel, options) {
		//if ( this.getPns_Public_NandinasSearch() !== undefined ) { this.getPns_Public_NandinasSearch().close();  this.getPns_Public_NandinasSearch().destroy(); }
	},

	aldr_ViewReport: function(pcFormat, poPanel){
		var _type_record = poPanel.down('#type_record').getValue();
		var _get = 'xxFormat='+pcFormat +'&xxType_record='+_type_record +'&xxSubdia_id='+poPanel.down('#subdia_id').getValue() +'&xxSubdia_nombre='+poPanel.down('#subdia_id').getRawValue() +'&xxYear_id='+poPanel.down('#year_id').getValue() +'&xxMes_id='+poPanel.down('#mes_id').getValue() +'&xxMes_nombre='+poPanel.down('#mes_id').getRawValue();
		if ( fjsIn_array(_type_record, ['REPORT']) ) {
        	fext_pdf('', translations.pdf_accounting_libro_diario_report_title, 'php/pdf/pdf_accounting_libro_diario_report.php?'+_get, 'Destroy');
		} else if ( fjsIn_array(_type_record, ['REPORT_MENSUAL']) ) {
        	fext_pdf('', translations.pdf_accounting_libro_diario_report_title, 'php/pdf/pdf_accounting_libro_diario_report_mensual.php?'+_get);
		} else if ( fjsIn_array(_type_report, ['SA']) ) {
		}
	},

	aldr_btnPdfClick: function(button, e, options) {
		this.aldr_ViewReport('P', button.up('panel'));
	},

	aldr_btnExcelClick: function(button, e, options) {
		this.aldr_ViewReport('E', button.up('panel'));
	},
});