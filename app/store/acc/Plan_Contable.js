Ext.define('Siace.store.accounting.Plan_Contable', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.accounting.Plan_Contable',
		'Siace.proxy.General',
	],
	model: 'Siace.model.accounting.Plan_Contable',
	storeId: 'accounting_plan_contable',
	proxy: {
		type: 'general',
		url: 'php/accounting_plan_contable_json_records.php'
	}
});