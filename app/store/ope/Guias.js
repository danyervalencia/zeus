Ext.define('Siace.store.operations.Guias', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.operations.Guia',
		'Siace.proxy.General'
	],
	model: 'Siace.model.operations.Guia',
	storeId: 'operations_guias',
	proxy: {
		type: 'general',
		url: 'php/operations_guias_json_records.php',
	}
});