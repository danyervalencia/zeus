Ext.define('Siace.store.operations.Industrias_Productos', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.operations.Industria_Producto',
		'Siace.proxy.General',
	],
	model: 'Siace.model.operations.Industria_Producto',
	storeId: 'operations_industrias_productos',
	proxy: {
		type: 'general',
		url: 'php/operations_industrias_productos_json_records.php'
	}
});