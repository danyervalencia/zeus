Ext.define('Siace.store.treasury.Contratos_Det', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.treasury.Contrato_Det',
		'Siace.proxy.General',
	],
	model: 'Siace.model.treasury.Contrato_Det',
	storeId: 'treasury_contratos_det',
	proxy: {
		type: 'general',
		url: 'php/treasury_contratos_det_json_records.php'
	}
});