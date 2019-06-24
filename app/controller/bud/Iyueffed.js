Ext.define('Siace.controller.budget.Iyueffed', {
	extend: 'Ext.app.Controller',
	views: ['budget.IyueffedBrowse', 'budget.IyueffedReports'],
    stores: ['budget.IyueffedConsolidado'],

	init: function(application) {
		this.control({
			'budget_iyueffedbrowse': { beforerender: this.bib_BeforeRender, },
			'budget_iyueffedbrowse #panBudget_iyueffed #opc_id': { change: this.bib_pbi_opc_idChange, },
			'budget_iyueffedbrowse #panBudget_iyueffed #btnNew': { click: this.bib_pbi_btnNewClick, },
			'budget_iyueffedbrowse #panBudget_iyueffed #btnModify': { click: this.bib_pbi_btnModifyClick, },
			'budget_iyueffedbrowse #panBudget_iyueffed #btnQuery': { click: this.bib_pbi_btnQueryClick, },
			//'budget_iyueffedbrowse #btnPrinter': { },
			'budget_iyueffedbrowse #panBudget_iyueffed #espedet_id': { change: this.bib_pbi_espedet_idChange, },
            'budget_iyueffedbrowse #panBudget_iyueffed #fuefin_id': { change: this.bib_pbi_fuefin_idChange, },
			'budget_iyueffedbrowse #panBudget_iyueffed #grdBudget_iyueffed': { selectionchange: this.bib_pbi_grdBudget_iyueffedSelectionchange, },
            'budget_iyueffedbrowse #panBudget_iyueffed #year_id': { change: this.bib_pbi_year_idChange, },
            
            'budget_iyueffedbrowse #tabTreasury_comprobantes #btnQuery': { click: this.bib_ttc_btnQueryClick, },
            'budget_iyueffedbrowse #tabTreasury_comprobantes #btnDetail': { click: this.bib_ttc_btnDetailClick, },
            'budget_iyueffedbrowse #tabTreasury_comprobantes #btnPrinter': { click: this.bib_ttc_btnPrinterClick, },
			'budget_iyueffedbrowse #tabTreasury_comprobantes #comprob_nro': { change: this.bib_ttc_comprob_nroChange, },
			'budget_iyueffedbrowse #tabTreasury_comprobantes #fechaini': { change: this.bib_ttc_fechainiChange, },
			'budget_iyueffedbrowse #tabTreasury_comprobantes #fechafin': { change: this.bib_ttc_fechafinChange, },
			'budget_iyueffedbrowse #tabTreasury_comprobantes #grdTreasury_comprobantes': { selectionchange: this.bib_ttc_grdTreasury_comprobantesSelectionchange, },
			'budget_iyueffedbrowse #tabTreasury_comprobantes #tipcomprob_id': { change: this.bib_ttc_tipcomprob_idChange, },

			'budget_iyueffedreports': { beforerender: this.bir_BeforeRender, close: this.bir_Close, },
			'budget_iyueffedreports #btnPdf': { click: this.bir_btnPdfClick, },
			'budget_iyueffedreports #btnExcel': { click: this.bir_btnExcelClick, },
		});
	},

	bib_BeforeRender: function(component, options) {
		fextpub_yearsValue(component.down('#year_id'));
		fextbud_fuentes_financiamientoFilter({'panel': component.down('#panBudget_iyueffed')});
		var _cboEspedet_id = component.down('#espedet_id');
		_cboEspedet_id.bindStore(Ext.create('Siace.store.budget.Iyueffed'));
		_cboEspedet_id.getStore().load({
			params: { xxOrder_by: 'espedet_codigo', xxType_record: 'combo_espedet_id', xxAdd_blank: 'YES' },
			callback: function(records, operations, success) { if ( records.length > 0 ) { _cboEspedet_id.setValue(records[0].data.espedet_id); }}
		});

		var _storeChart = Ext.create('Siace.store.budget.IyueffedConsolidado');
		var _chart = component.down('#chrBudget_iyueffed');
		_chart.bindStore(_storeChart);
		_storeChart.on('beforeload', function(store, operations, eoptions) {
			var _panBI = component.down('#panBudget_iyueffed');
			store.getProxy().setExtraParam('xxYear_id', _panBI.down('#year_id').getValue());
			store.getProxy().setExtraParam('xxFuefin_id', _panBI.down('#fuefin_id').getValue());
		    store.getProxy().setExtraParam('xxEspedet_id', _panBI.down('#espedet_id').getValue());
			store.getProxy().setExtraParam('xxType_record', 'INGRESOS_CONSOLIDADO');
			store.getProxy().setExtraParam('xxOrder_by', '1');
		});

		var _tabTC = component.down('#tabTreasury_comprobantes');
		fextpub_tablas_generalesFilter({'objeto': _tabTC.down('#tipcomprob_id'), 'tabgen_parent': '240', 'disabled': true});
		var _storeTC = Ext.create('Siace.store.treasury.Comprobantes');
		var _grdTC = _tabTC.down('#grdTreasury_comprobantes'); var _pagTC = _tabTC.down('#pagTreasury_comprobantes');
		_grdTC.bindStore(_storeTC);  _pagTC.bindStore(_storeTC);
		_storeTC.sort('comprob_fecha', 'ASC'); _storeTC.pageSize = 500;
		_storeTC.on('beforeload', function(store, operations, eoptions) {
			var _tabTC = component.down('#tabTreasury_comprobantes');
			//_panTC.down('#btnModify').disable(); _panTF.down('#btnQuery').disable(); 
		    var _record = component.down('#grdBudget_iyueffed').getSelectionModel().getSelection()[0];
		    store.getProxy().setExtraParam('xxYear_id', _record.data.year_id);
		    store.getProxy().setExtraParam('xxFuefin_id', _record.data.fuefin_id);
		    store.getProxy().setExtraParam('xxEspedet_id', _record.data.espedet_id);
			store.getProxy().setExtraParam('xxComprob_nro', _tabTC.down('#comprob_nro').getSubmitData());
			store.getProxy().setExtraParam('xxFechaini', _tabTC.down('#fechaini').getSubmitData());
			store.getProxy().setExtraParam('xxFechafin', _tabTC.down('#fechafin').getSubmitData());
			store.getProxy().setExtraParam('xxTipcomprob_id', _tabTC.down('#tipcomprob_id').getSubmitData());
		    
		    store.getProxy().setExtraParam('xxType_record', 'grid_budget_iyueffedbrowse');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});

		var _panBI = component.down('#panBudget_iyueffed');
		var _storeBI = Ext.create('Siace.store.budget.Iyueffed'); var _me = this;
		var _grdBI = _panBI.down('#grdBudget_iyueffed'); var _pagBI = _panBI.down('#pagBudget_iyueffed');
		_grdBI.bindStore(_storeBI);  _pagBI.bindStore(_storeBI);
		_storeBI.sort('fuefin_code', 'ASC'); _storeBI.pageSize = 500;
		_storeBI.on('beforeload', function(store, operations, options) {
			//var _panBI = component.down('#panBudget_iyueffed');
			_panBI.down('#btnModify').disable(); _panBI.down('#btnQuery').disable(); _panBI.down('#btnPrinter').disable();
			_me.bib_tabsClean(component, true);

		    store.getProxy().setExtraParam('xxYear_id', _panBI.down('#year_id').getValue());
		    store.getProxy().setExtraParam('xxFuefin_id', _panBI.down('#fuefin_id').getValue());
		    store.getProxy().setExtraParam('xxEspedet_id', _panBI.down('#espedet_id').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);

		    component.down('#chrBudget_iyueffed').getStore().load();
		}); _storeBI.load();
	},

	bib_tabsClean: function(poComponent, pbStatus) {
		var _tabTC = poComponent.down('#tabTreasury_comprobantes');
		var _pagTC = _tabTC.down('#pagTreasury_comprobantes'); var _storeTC = _pagTC.getStore();
		fext_gridClean(_storeTC, _pagTC);
		_pagTC.setDisabled(pbStatus); _tabTC.down('#comprob_nro').setDisabled(pbStatus); _tabTC.down('#fechaini').setDisabled(pbStatus); _tabTC.down('#fechafin').setDisabled(pbStatus); _tabTC.down('#tipcomprob_id').setDisabled(pbStatus);
		_tabTC.down('#btnQuery').disable(); _tabTC.down('#btnDetail').disable(); _tabTC.down('#btnPrinter').disable();
	},

	bib_pbi_Clean: function(poComponent) {
		var _panBI = poComponent.down('#panBudget_iyueffed')
		var _pagBI = _panBI.down('#pagBudget_iyueffed'); var _storeBI = _pagBI.getStore();
		fext_gridClean(_storeBI, _pagBI);

		_panBI.down('#btnModify').disable(); _panBI.down('#btnQuery').disable(); _panBI.down('#btnDelete').disable(); _panBI.down('#btnPrinter').disable();
		this.bib_tabsClean(poComponent, true);
	},

	bib_pbi_opc_idChange: function(combo, newValue, oldValue, options) {
		combo.up('panel').down('#btnNew').setDisabled(fextpub_uamoButtons(combo, 1));
	},

	bib_pbi_btnNewClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 1) ) { return false; }
	},

	bib_pbi_btnModifyClick: function(button, e, options) {
        if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 2) ) { return false; }
	},

	bib_pbi_btnQueryClick: function(button, e, options) {
        if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 3) ) { return false; }
	},

	bib_btnPrinterClick: function(button, e, options) {
	},

	bib_pbi_espedet_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.bib_pbi_Clean(combo.up('panel')); }
	},

	bib_pbi_fuefin_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.bib_pbi_Clean(combo.up('panel')); }
	},

	bib_pbi_grdBudget_iyueffedSelectionchange: function(model, record, options) {
		if ( record.length == 1 ) {
			var _panBI = model.view.panel.up('panel'); var _cboOpc_id = _panBI.down('#opc_id');
			_panBI.down('#btnModify').setDisabled(fextpub_uamoButtons(_cboOpc_id, 2));
			_panBI.down('#btnQuery').setDisabled(fextpub_uamoButtons(_cboOpc_id, 3));

			this.bib_tabsClean(_panBI.up('panel'), false);
		}
	},

	bib_pbi_year_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.bib_pbi_Clean(combo.up('panel')); }
	},

	bib_ttc_Clean: function(poComponent) {
		var _pagTC = poComponent.down('#pagTreasury_comprobantes');  var _storeTC = _pagTC.getStore();		
		fext_gridClean(_storeTC, _pagTC);
		//poComponent.down('#btnModify').disable(); poComponent.down('#btnQuery').disable(); poComponent.down('#btnDelete').disable();
	},

	bib_ttc_btnQueryClick: function(button, e, options) {
	},

	bib_ttc_btnDetailClick: function(button, e, options) {
		//if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 15) ) { return false; }
		var _record = button.up('panel').down('#grdTreasury_comprobantes').getSelectionModel().getSelection()[0];
		if ( !_record ) { return false; }
        fext_pdf('', 'Detalle Comrpobante Ingreso', 'php/pdf/pdf_treasury_comprobantes_det_printer.php?xxComprob_key='+_record.data.comprob_key);
    },

	bib_ttc_btnPrinterClick: function(button, e, options) {
		//if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 8) ) { return false; }
		var _record = button.up('panel').down('#grdTreasury_comprobantes').getSelectionModel().getSelection()[0];
		if ( !_record ) { return false; }
        fext_pdf('', 'Comprobante de Ingreso', 'php/pdf/pdf_treasury_comprobantes_printer.php?xxComprob_key='+_record.data.comprob_key);
    },

	bib_ttc_comprob_nroChange: function(textfield, newValue, oldValue, options) {
		this.bib_ttc_Clean(textfield.up('panel'));
	},

	bib_ttc_fechainiChange: function(datefield, newValue, oldValue, options) {
		this.bib_ttc_Clean(datefield.up('panel'));
	},

	bib_ttc_fechafinChange: function(datefield, newValue, oldValue, options) {
		this.bib_ttc_Clean(datefield.up('panel'));
	},

	bib_ttc_grdTreasury_comprobantesSelectionchange: function(model, record, options) {
		if ( record.length == 1 ) {
			var _panel = model.view.panel.up('panel');
			_panel.down('#btnQuery').setDisabled(false);
			_panel.down('#btnDetail').setDisabled(false);
			_panel.down('#btnPrinter').setDisabled(false);
		}
	},

	bib_ttc_tipcomprob_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.bib_ttc_Clean(combo.up('panel')); }
	},

	/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
 	bir_BeforeRender: function(component, options) {
		var _str = Ext.create('Ext.data.Store', {
			fields: [ { name: 'typrec_id', type: 'string' }, { name: 'typrec_nombre', type: 'string' }, { name: 'typque_id', type: 'string' } ],
			data: [
				{ typrec_id: 'CONSOLIDADO_MES_GENE', typrec_nombre: 'Consolidado de Ingresos Mensual x Genérica' },
				{ typrec_id: 'CONSOLIDADO_MES_ESPEDET', typrec_nombre: 'Consolidado de Ingresos Mensual x Clasificador' },
				{ typrec_id: 'CONSOLIDADO_TRIMESTRE_GENE', typrec_nombre: 'Consolidado de Ingresos Trimestral x Genérica' },
				{ typrec_id: 'CONSOLIDADO_TRIMESTRE_ESPEDET', typrec_nombre: 'Consolidado de Ingresos Trimestral x Clasificador' },
				{ typrec_id: 'EJECUCION_MES_ESPEDET', typrec_nombre: 'Consolidado de Ejecución Mensual x Clasificador' },
				{ typrec_id: 'EJECUCION_TRIMESTRE_ESPEDET', typrec_nombre: 'Consolidado de Ejecución Trimestral x Clasificador' },
				{ typrec_id: 'EJECUCION_TRIMESTRE_ESPEDET_DETALLE', typrec_nombre: 'Consolidado de Ejecución Trimestral x Clasificador (Detalle)' },
			]
		});
		var _cboType_record = component.down('#type_record');
		_cboType_record.bindStore(_str);
		_cboType_record.getStore().load({ callback: function(records, operations, success) {  _cboType_record.setValue('CONSOLIDADO_MES_GENE'); } });

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

	bir_Close: function(panel, options) {
		//if ( this.getPns_Public_NandinasSearch() !== undefined ) { this.getPns_Public_NandinasSearch().close();  this.getPns_Public_NandinasSearch().destroy(); }
	},

	bir_ViewReport: function(pcFormat, poPanel){
		if ( !poPanel.down('#fechaini').isValid() ) {
			Ext.Msg.alert(translations.mensaje, 'Fecha Inicial NO es Válida', function() { poPanel.down('#fechaini').focus(); }); return false ; }
		if ( !poPanel.down('#fechafin').isValid() ) {
			Ext.Msg.alert(translations.mensaje, 'Fecha Final NO es Válida', function() { poPanel.down('#fechafin').focus(); }); return false ; }

		var _type_record = poPanel.down('#type_record').getValue();
		var _fechaini = fjsDateSQL(poPanel.down('#fechaini').getRawValue());  var _fechafin = fjsDateSQL(poPanel.down('#fechafin').getRawValue());

		var _get = 'xxFormat='+pcFormat +'&xxType_record='+_type_record +'&xxFuefin_id='+poPanel.down('#fuefin_id').getValue() +'&xxFuefin_code='+poPanel.down('#fuefin_id').getRawValue().substr(0,2) +'&xxFuefin_nombre='+poPanel.down('#fuefin_id').getRawValue().substr(3) +'&xxFechaini='+_fechaini +'&xxFechafin='+_fechafin;
		if ( fjsIn_array(_type_record, ['CONSOLIDADO_MES_GENE','CONSOLIDADO_MES_ESPEDET','CONSOLIDADO_TRIMESTRE_GENE','CONSOLIDADO_TRIMESTRE_ESPEDET']) ) {
        	fext_pdf('', 'Reporte Presupuestal', 'php/pdf/pdf_budget_iyueffed_report.php?'+_get);
		} else if ( fjsIn_array(_type_record, ['EJECUCION_MES_ESPEDET','EJECUCION_TRIMESTRE_ESPEDET','EJECUCION_TRIMESTRE_ESPEDET_DETALLE']) ) {
        	fext_pdf('', 'Reporte Presupuestal', 'php/pdf/pdf_budget_iyueffed_report_execution.php?'+_get);
		} else if ( fjsIn_array(_type_record, ['REPORT_CLASIFICADOR']) ) {
        	fext_pdf('', 'Reporte Comprobantes - Clasificador', 'php/pdf/pdf_treasury_comprobantes_report_clasificador.php?'+_get);
		}
	},

	bir_btnPdfClick: function(button, e, options) {
		this.bir_ViewReport('P', button.up('panel'));
	},

	bir_btnExcelClick: function(button, e, options) {
		this.bir_ViewReport('E', button.up('panel'));
	},

});