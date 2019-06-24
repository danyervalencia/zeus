Ext.define('Siace.store.treasury.Comprobantes', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.treasury.Comprobante',
		'Siace.proxy.General',
	],
	model: 'Siace.model.treasury.Comprobante',
	storeId: 'treasury_comprobantes',
	proxy: {
		type: 'general',
		url: 'php/treasury_comprobantes_json_records.php'
	}
});