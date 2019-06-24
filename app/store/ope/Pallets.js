Ext.define('Siace.store.operations.Pallets', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.operations.Pallet',
		'Siace.proxy.General'
	],
	model: 'Siace.model.operations.Pallet',
	storeId: 'operations_pallets',
	proxy: {
		type: 'general',
		url: 'php/operations_pallets_json_records.php'
	}
});