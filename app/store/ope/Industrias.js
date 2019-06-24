Ext.define('Siace.store.operations.Industrias', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.operations.Industria',
		'Siace.proxy.General',
	],
	model: 'Siace.model.operations.Industria',
	storeId: 'operations_industrias',
	proxy: {
		type: 'general',
		url: 'php/operations_industrias_json_records.php'
	}
});