Ext.define('Siace.store.operations.Salidas', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.operations.Salida',
		'Siace.proxy.General'
	],
	model: 'Siace.model.operations.Salida',
	storeId: 'operations_salidas',
	proxy: {
		type: 'general',
		url: 'php/operations_salidas_json_records.php'
	}
});