Ext.define('Siace.store.treasury.Conceptos', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.treasury.Concepto',
		'Siace.proxy.General',
	],
	model: 'Siace.model.treasury.Concepto',
	storeId: 'treasury_conceptos',
	proxy: {
		type: 'general',
		url: 'php/treasury_conceptos_json_records.php'
	}
});