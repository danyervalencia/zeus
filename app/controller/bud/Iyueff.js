Ext.define('Siace.controller.budget.Iyueff', {
	extend: 'Ext.app.Controller',
	views: [ 'budget.IyueffBrowse', ],
    refs: [
        { ref: 'bib_grdBudget_Iyueff', selector: 'budget_iyueffbrowse #grdBudget_iyueff' },
    ],
    stores: [ 'budget.IyueffConsolidado', ],    

	init: function(application) {
		this.control({
			'budget_iyueffbrowse': { beforerender: this.bib_BeforeRender, close: this.bib_Close, },
			'budget_iyueffbrowse #opc_id': { change: this.bib_opc_idChange, },
			'budget_iyueffbrowse #btnNew': { click: this.bib_btnNewClick, },
			'budget_iyueffbrowse #btnModify': { click: this.bib_btnModifyClick, },
			'budget_iyueffbrowse #btnQuery': { click: this.bib_btnQueryClick, },
			'budget_iyueffbrowse #btnPrinter': { },
            'budget_iyueffbrowse #fuefin_id': { change: this.bib_fuefin_idChange, },
			'budget_iyueffbrowse #grdBudget_iyueff': { selectionchange: this.bib_grdBudget_iyueffSelectionchange, },
            'budget_iyueffbrowse #year_id': { change: this.bib_year_idChange, },
		});
	},

	bib_BeforeRender: function( component, options ) {
		fextpub_yearsValue(component.down('#year_id'));

		/*var _cboFuefin_id = component.down('#fuefin_id');
		_cboFuefin_id.bindStore(Ext.create('Siace.store.budget.Iyueff'));
		_cboFuefin_id.getStore().load({
			params: { xxOrder_by: 'fuefin_code', xxType_record: 'combo_fuefin_id', xxAdd_blank: 'YES' },
			callback: function(opt,success,respon) {
			   	if ( _cboFuefin_id.getStore().getCount() > 0 ) { _cboFuefin_id.setValue(_cboFuefin_id.getStore().getAt(0).data.fuefin_id); }
    		}			
		}); */

		var _storeChart = Ext.create('Siace.store.budget.IyueffConsolidado');
		var _chart = component.down('#chrBudget_iyueff');
		_chart.bindStore(_storeChart);
		_storeChart.on('beforeload', function(store, budget, eOpts) {
			store.getProxy().setExtraParam('xxYear_id', component.down('#year_id').getValue());
			store.getProxy().setExtraParam('xxFuefin_id', component.down('#fuefin_id').getValue());
			store.getProxy().setExtraParam('xxType_record', 'INGRESOS_CONSOLIDADO');
			store.getProxy().setExtraParam('xxOrder_by', '1');
		});

		var _store = Ext.create('Siace.store.budget.Iyueff');
		var _grid = component.down('#grdBudget_iyueff'); var _pagtool = component.down('#pgtBudget_iyueff');
		_grid.bindStore(_store);  _pagtool.bindStore(_store);
		_store.sort('fuefin_code', 'ASC'); _store.pageSize = 500; 
		_store.on('beforeload', function(store, operations, options) {
			component.down('#btnModify').disable(); component.down('#btnQuery').disable();

		    store.getProxy().setExtraParam('xxYear_id', component.down('#year_id').getValue());
		    store.getProxy().setExtraParam('xxFuefin_id', component.down('#fuefin_id').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);

		    component.down('#chrBudget_iyueff').getStore().load();
		}); _store.load();
	},

	bib_Close: function( component, options ) {
	},

	bib_Clean: function(poComponent) {
		var _panel = this.getBib_grdBudget_Iyueff().up('panel');
		var _store = _panel.down('#pgtBudget_iyueff').getStore();
		var _pagingtoolbar = _panel.down('#pgtBudget_iyueff');
		fext_gridClean(_store, _pagingtoolbar);

		var _chart = _panel.down('#chrBudget_iyueff');
		_chart.getStore().removeAll();
		_panel.down('#btnModify').disable(); _panel.down('#btnQuery').disable(); _panel.down('#btnDelete').disable(); _panel.down('#btnPrinter').disable();
	},

	bib_opc_idChange: function(combo, newValue, oldValue, options) {
		combo.up('panel').down('#btnNew').setDisabled(fextpub_uamoButtons(combo, 1));
	},

	bib_btnNewClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 1) ) { return false; }
	},


	bib_btnModifyClick: function(button, e, options) {
        if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 2) ) { return false; }
	},

	bib_btnQueryClick: function(button, e, options) {
        if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 3) ) { return false; }
	},

	bib_btnPrinterClick: function(button, e, options) {
	},

	bib_espedet_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.bib_Clean(combo.up('panel')); }
	},

	bib_fuefin_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.bib_Clean(combo.up('panel')); }
	},

	bib_grdBudget_iyueffSelectionchange: function(model, record, options) {
		if ( record.length == 1 ) {
			var _panel = model.view.panel.up('panel'); var _cboOpc_id = _panel.down('#opc_id');
			_panel.down('#btnModify').setDisabled(fextpub_uamoButtons(_cboOpc_id, 2));
			_panel.down('#btnQuery').setDisabled(fextpub_uamoButtons(_cboOpc_id, 3));
		}
	},

	bib_year_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.bib_Clean(combo.up('panel')); }
	},
});