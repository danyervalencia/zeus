Ext.define('Siace.controller.operations.Lotes', {
	extend: 'Ext.app.Controller',
	views: [
		'operations.LotesBrowse', //'operations.lotesEdit',
	],
    refs: [
        { ref: 'olb_grdOperations_Lotes', selector: 'operations_lotesbrowse #grdOperations_lotes' },
    ],

	init: function(application) {
		this.control({
			'operations_lotesbrowse': {
				beforerender: this.olb_BeforeRender,
			},
			'operations_lotesbrowse #btnNew': {
				click: this.olb_btnNewClick,
			},
			'operations_lotesbrowse #btnDelete': {
				click: this.olb_btnDeleteClick,
			},
			'operations_lotesbrowse #btnPrinter': {
				click: this.olb_btnPrinterClick,
			},
			'operations_lotesbrowse #alma_estado': {
				change: this.olb_Clean,
			},
			'operations_lotesbrowse #alma_nombre': {
				change: this.olb_Clean,
			},
			'operations_lotesbrowse #grdOperations_lotes': {
				selectionchange: this.olb_grdOperations_lotesSelectionchange,
			},
		});
	},

	olb_BeforeRender: function(component, options) {
		var _storeOL = Ext.create('Siace.store.operations.Lotes');
		var _grdOL = component.down('#grdOperations_lotes');
		var _pgtOL = component.down('#pgtOperations_lotes');
		_grdOL.bindStore(_storeOL);  _pgtOL.bindStore(_storeOL);
		_storeOL.sort('lote_nombre', 'ASC');
		_storeOL.on('beforeload', function(store, operations, eOpts) {
			component.down('#btnModify').setDisabled(true);
			component.down('#btnQuery').setDisabled(true);
			//component.down('#btnDelete').setDisabled(true);

		    //store.getProxy().setExtraParam('xxAlma_nombre', component.down('#alma_nombre').getValue());
		    //store.getProxy().setExtraParam('xxAlma_estado', component.down('#alma_estado').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});
		_storeOL.pageSize = 500;  _storeOL.load();
	},

	olb_Clean: function() {
		var _panel = this.getOlb_grdOperations_Lotes().up('panel');
		var _store = _panel.down('#pgtOperations_lotes').getStore();
		var _pgt = _panel.down('#pgtOperations_lotes');
		fext_gridClean(_store, _pgt);

		_panel.down('#btnModify').setDisabled(true);
		_panel.down('#btnQuery').setDisabled(true);
	},

	olb_ViewEdit: function(pcTypeEdit, poPanel){		
	    if ( fjsIn_array(pcTypeEdit, ['2','3']) ) {
	    	var _record = this.getolb_grdOperations_lotes().getSelectionModel().getSelection();
	        if ( _record.length !== 1 ) { return false; }
	    }

	    var _win = Ext.create('Siace.view.operations.lotesEdit');
	    _win.setTypeEdit(pcTypeEdit); _win.setCallStore(this.getolb_grdOperations_lotes().getStore());
	    if ( fjsIn_array(pcTypeEdit, ['2','3']) ) { _win.setCallKey(_record[0].data.guia_key); }
	    _win.show();
	    //Ext.get(poPanel.getEl()).mask(translations.mensaje_esperar, 'loading');
	},

	olb_btnNewClick: function(button, e, options) {
		this.olb_ViewEdit('1', button.up('panel'));
	},

	olb_btnModifyClick: function(button, e, options) {
		this.olb_ViewEdit('2', button.up('panel'));
	},

	olb_btnQueryClick: function(button, e, options) {
		this.olb_ViewEdit('3', button.up('panel') );
	},

	olb_alma_keyChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.olb_Clean(); }
	},

	olb_grdOperations_lotesSelectionchange: function(model, record, options) {			
		if ( record.length == 1 ) {
			var _panel = this.getOlb_grdOperations_Lotes().up('panel');
			var _flga = record[0].data.guia_flga;
			var _modify = (_flga == '98' ? true : false);
			_panel.down('#btnModify').setDisabled(_modify);
			var _query = (_flga == '98' ? true : false);
			_panel.down('#btnQuery').setDisabled(_query);
			var _delete = (_flga == '98' ? true : false);
		}
	},
});