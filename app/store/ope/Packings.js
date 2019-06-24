Ext.define('Siace.store.operations.Packings', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.operations.Packing',
		'Siace.proxy.General'
	],
	model: 'Siace.model.operations.Packing',
	storeId: 'operations_packings',
	proxy: {
		type: 'general',
		url: 'php/operations_packings_json_records.php'
	}
});