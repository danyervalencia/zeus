Ext.define('Siace.store.treasury.Recibos_Det', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.treasury.Recibo_Det',
		'Siace.proxy.General',
	],
	model: 'Siace.model.treasury.Recibo_Det',
	storeId: 'treasury_recibos_det',
	proxy: {
		type: 'general',
		url: 'php/treasury_recibos_det_json_records.php'
	}
});