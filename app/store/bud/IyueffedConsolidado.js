Ext.define('Siace.store.budget.IyueffedConsolidado', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.budget.Iyueffed',
		'Siace.proxy.General',
	],
	model: 'Siace.model.budget.Iyueffed',
	storeId: 'budget_iyueffedconsolidado',
	proxy: {
		type: 'general',
		url: 'php/budget_iyueffed_json_records.php'
	}
});