Ext.define('Siace.store.treasury.Recibos', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.treasury.Recibo',
		'Siace.proxy.General',
	],
	model: 'Siace.model.treasury.Recibo',
	storeId: 'treasury_recibos',
	proxy: {
		type: 'general',
		url: 'php/treasury_recibos_json_records.php'
	}
});