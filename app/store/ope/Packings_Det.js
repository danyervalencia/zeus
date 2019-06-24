Ext.define('Siace.store.operations.Packings_Det', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.operations.Packing_Det',
		'Siace.proxy.General'
	],
	model: 'Siace.model.operations.Packing_Det',
	storeId: 'operations_packings_det',
	proxy: {
		type: 'general',
		url: 'php/operations_packings_det_json_records.php'
	}
});