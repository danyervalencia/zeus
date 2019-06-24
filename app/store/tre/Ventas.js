Ext.define('Siace.store.treasury.Ventas', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.treasury.Venta',
		'Siace.proxy.General',
	],
	model: 'Siace.model.treasury.Venta',
	storeId: 'treasury_ventas',
	proxy: {
		type: 'general',
		url: 'php/treasury_ventas_json_records.php'
	}
});