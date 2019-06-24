Ext.define('Siace.store.treasury.Ventas_Det_Referencias', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.treasury.Venta_Det_Referencia',
		'Siace.proxy.General',
	],
	model: 'Siace.model.treasury.Venta_Det_Referencia',
	storeId: 'treasury_ventas_det_referencias',
	proxy: {
		type: 'general',
		url: 'php/treasury_ventas_det_referencias_json_records.php'
	}
});