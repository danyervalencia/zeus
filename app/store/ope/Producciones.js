Ext.define('Siace.store.operations.Producciones', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.operations.Produccion',
		'Siace.proxy.General'
	],
	model: 'Siace.model.operations.Produccion',
	storeId: 'operations_producciones',
	proxy: {
		type: 'general',
		url: 'php/operations_producciones_json_records.php'
	}
});