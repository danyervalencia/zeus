Ext.define('Siace.store.operations.Industrias_Coeficientes', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.operations.Industria_Coeficiente',
		'Siace.proxy.General',
	],
	model: 'Siace.model.operations.Industria_Coeficiente',
	storeId: 'operations_industrias_coeficientes',
	proxy: {
		type: 'general',
		url: 'php/operations_industrias_coeficientes_json_records.php'
	}
});