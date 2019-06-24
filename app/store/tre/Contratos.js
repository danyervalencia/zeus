Ext.define('Siace.store.treasury.Contratos', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.treasury.Contrato',
		'Siace.proxy.General',
	],
	model: 'Siace.model.treasury.Contrato',
	storeId: 'treasury_contratos',
	proxy: {
		type: 'general',
		url: 'php/treasury_contratos_json_records.php'
	}
});