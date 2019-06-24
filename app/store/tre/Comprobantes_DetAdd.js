Ext.define('Siace.store.treasury.Comprobantes_DetAdd', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.treasury.Comprobante_Det',
		'Siace.proxy.General',
	],
	model: 'Siace.model.treasury.Comprobante_Det',
	storeId: 'treasury_comprobantes_detadd',
	proxy: {
		type: 'general',
		url: 'php/treasury_comprobantes_det_json_records_add.php'
	}
});