Ext.define('Siace.store.operations.Aduanas', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.operations.Aduana',
		'Siace.proxy.General',
	],
	model: 'Siace.model.operations.Aduana',
	storeId: 'operations_aduanas',
	proxy: {
		type: 'general',
		url: 'php/operations_aduanas_json_records.php',
	}
});