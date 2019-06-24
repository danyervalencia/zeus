Ext.define('Siace.controller.operations.Actividades', {
	extend: 'Ext.app.Controller',
	views: ['operations.ActividadesSearch',],

	init: function(application) {
		this.control({
			'operations_actividadesbrowse': { beforerender: this.oab_BeforeRender, },
			'operations_actividadesbrowse #btnNew': { },
			'operations_actividadesbrowse #btnModify': { click: this.oab_btnModifyClick, },
			'operations_actividadesbrowse #btnQuery': { click: this.oab_btnQueryClick, },
			'operations_actividadesbrowse #bs_nombre': { change: this.oab_Clean 			},
			'operations_actividadesbrowse #grdOperations_actividades': { selectionchange: this.oab_grdOperations_actividadesSelectionchange, },

			'operations_actividadessearch': { beforerender: this.oas_BeforeRender, },
			'operations_actividadessearch #btnAccept': { click: this.oas_btnAcceptClick, },
			'operations_actividadessearch #btnCancel': { click: this.oas_btnCancelClick, },
			'operations_actividadessearch #activ_nombre': { change: this.oas_activ_nombreChange, },
			'operations_actividadessearch #grdOperations_actividades': { itemdblclick: this.oas_grdOperations_actividadesItemdblclick, selectionchange: this.oas_grdOperations_actividadesSelectionchange, },
		});
	},

	oab_BeforeRender: function( component, options ) {
		component.down('#bst_id').setValue(2);
		var _store = Ext.create('Siace.store.operations.actividades');
		var _grid = component.down('#grdoperations_actividades');
		var _pagingtoolbar = component.down('#pgtoperations_actividades');
		_grid.bindStore(_store);  _pagingtoolbar.bindStore(_store);
		_store.sort('bs_nombre', 'ASC');
		_store.on('beforeload', function(store, operations, eOpts) {
			component.down('#btnModify').setDisabled(true);
			component.down('#btnQuery').setDisabled(true);
			component.down('#btnDelete').setDisabled(true);
			component.down('#btnPrinter').setDisabled(true);

			store.getProxy().setExtraParam('xxBs_nombre', component.down('#bs_nombre').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});
		_store.pageSize = 500; _store.load();
	},

	oab_Clean: function() {
		var _panel = this.getOab_grdOperations_Actividades().up('panel');
		var _store = _panel.down('#pgtOperations_actividades').getStore();
		var _pagingtoolbar = _panel.down('#pgtOperations_actividades');
		fext_gridClean(_store, _pagingtoolbar);

		_panel.down('#btnModify').setDisabled(true);
		_panel.down('#btnQuery').setDisabled(true);
		//_panel.down('#btn0007').setDisabled(true);
		_panel.down('#btnDelete').setDisabled(true);
	},

	oab_btnModifyClick: function(button, e, options) {
        this.oab_viewEdit('2');
	},

	oab_btnQueryClick: function(button, e, options) {
        this.oab_viewEdit('3');
	},

	oab_grdoperations_bienes_servsSelectionchange: function(model, record, options) {			
		if ( record.length == 1 ) {
			var _panel = this.getoab_grdoperations_Bienes_Servs().up('panel');
			_modify = (record[0].data.indus_flga == '98' || record[0].data.fase_id == '320' ? true : false);
			_panel.down('#btnModify').setDisabled(_modify);
			_query = (record[0].data.indus_flga == '98' ? true : false);
			_panel.down('#btnQuery').setDisabled(_query);
			_delete = (record[0].data.indus_flga == '98' ? true : false);
			_panel.down('#btnDelete').setDisabled(_delete);
		}
	},

	/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	oas_BeforeRender: function(component, options) {
		var _store = Ext.create('Siace.store.operations.Actividades');
		var _grid = component.down('#grdOperations_actividades'); var _pagtool = component.down('#pgtOperations_actividades');
		_grid.bindStore(_store);  _pagtool.bindStore(_store);
		_store.sort('activ_codigo', 'ASC'); _store.pageSize = 500;
		_store.on('beforeload', function(store, operations, eoptions) {
			component.down('#btnAccept').disable();
		    store.getProxy().setExtraParam('xxActiv_nombre', component.down('#activ_nombre').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'grid_search');
		    store.getProxy().setExtraParam('xxType_query', component.getTypeQuery());
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		    store.getProxy().setExtraParam('xxPaginate', '1');
		});  _store.load();
	},

	oas_Clean: function(poComponent) {
		var _store = poComponent.down('#pgtOperations_actividades').getStore();
		var _pagingtoolbar = poComponent.down('#pgtOperations_actividades');
		fext_gridClean(_store, _pagingtoolbar);

		poComponent.down('#btnAccept').disable();
	},

	oas_btnAcceptClick: function(button, e, options) {
		var _win = button.up('window');
		var _grid = _win.down('#grdOperations_actividades');
        var _record = _grid.getSelectionModel().getSelection()[0];
        var _close = true;

        if ( _record && _record.data.activ_id !== _win.getCallKey() ) {
        	if ( _win.getTypeReturn() == 'ADD_CONTRATOS' ) {
        		_close = Siace.app.getController('treasury.Contratos').tce_grdActividadesAdd(_win.getCallWindow(), _record);
        	} else if ( _win.getCallWindow() !== null ) {
        	} else {
       			_win.getCallWindow().down('#activ_id').setValue(_record.data.activ_id);
       			_win.getCallWindow().down('#activ_codigo').setValue(_record.data.activ_codigo);
       			_win.getCallWindow().down('#activ_nombre').setValue(_record.data.activ_nombre);
        	}
        	if ( _close ) { _win.close();  if ( _win.getActionDestroy() == true ) { _win.destroy(); } }
		}
	},

	oas_btnCancelClick: function(button, e, options) {
		var _win = button.up('window');
		_win.close();  if ( _win.getActionDestroy() == true ) { _win.destroy(); }
	},

	oas_activ_nombreChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.oas_Clean(combo.up('window')); }
	},

	oas_grdOperations_actividadesItemdblclick: function(component, record, item, index, e, options) {
		var _btnAccept = component.up('window').down('#btnAccept');
        _btnAccept.fireEvent('click', _btnAccept, e, options);
	},


	oas_grdOperations_actividadesSelectionchange: function(model, record, options) {
		if ( record.length == 1 ) {
			var _win = model.view.panel.up('window');
			_win.down('#btnAccept').setDisabled( record[0].data.activ_id == _win.getCallKey() ? true : false );
		}
	},
});