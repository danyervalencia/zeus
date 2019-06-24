Ext.define('Siace.store.operations.Almacenes', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.operations.Almacen',
		'Siace.proxy.General',
	],
	model: 'Siace.model.operations.Almacen',
	storeId: 'operations_almacenes',
	proxy: {
		type: 'general',
		url: 'php/operations_almacenes_json_records.php',
	}
});