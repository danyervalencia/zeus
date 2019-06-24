Ext.define('Siace.store.accounting.Libro_Diario_Det', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.accounting.Libro_Diario_Det',
		'Siace.proxy.General',
	],
	model: 'Siace.model.accounting.Libro_Diario_Det',
	storeId: 'accounting_libro_diario_det',
	proxy: {
		type: 'general',
		url: 'php/accounting_libro_diario_det_json_records.php'
	}
});