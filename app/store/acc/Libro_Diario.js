Ext.define('Siace.store.accounting.Libro_Diario', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.accounting.Libro_Diario',
		'Siace.proxy.General',
	],
	model: 'Siace.model.accounting.Libro_Diario',
	storeId: 'accounting_libro_diario',
	proxy: {
		type: 'general',
		url: 'php/accounting_libro_diario_json_records.php'
	}
});