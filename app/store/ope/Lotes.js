Ext.define('Siace.store.operations.Lotes', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.operations.Lote',
		'Siace.proxy.General',
	],
	model: 'Siace.model.operations.Lote',
	storeId: 'operations_lotes',
	proxy: {
		type: 'general',
		url: 'php/operations_lotes_json_records.php',
	}
});