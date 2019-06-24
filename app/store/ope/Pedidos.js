Ext.define('Siace.store.operations.Pedidos', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.operations.Pedido',
		'Siace.proxy.General',
	],
	model: 'Siace.model.operations.Pedido',
	storeId: 'operations_pedidos',
	proxy: {
		type: 'general',
		url: 'php/operations_pedidos_json_records.php',
	}
});