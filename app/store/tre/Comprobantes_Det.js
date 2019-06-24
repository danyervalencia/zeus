Ext.define('Siace.store.treasury.Comprobantes_Det', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.treasury.Comprobante_Det',
		'Siace.proxy.General',
	],
	model: 'Siace.model.treasury.Comprobante_Det',
	storeId: 'treasury_comprobantes_det',
	proxy: {
		type: 'general',
		url: 'php/treasury_comprobantes_det_json_records.php'
	}
});