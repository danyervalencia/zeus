Ext.define('Siace.store.treasury.Ventas_Det', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.treasury.Venta_Det',
		'Siace.proxy.General',
	],
	model: 'Siace.model.treasury.Venta_Det',
	storeId: 'treasury_ventas_det',
	proxy: {
		type: 'general',
		url: 'php/treasury_ventas_det_json_records.php'
	}
});