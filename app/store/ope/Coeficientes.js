Ext.define('Siace.store.operations.Coeficientes', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.operations.Coeficiente',
		'Siace.proxy.General'
	],
	model: 'Siace.model.operations.Coeficiente',
	storeId: 'operations_coeficientes',
	proxy: {
		type: 'general',
		url: 'php/operations_coeficientes_json_records.php',
	}
});