Ext.define('Siace.store.budget.IyueffConsolidado', {
	extend: 'Ext.data.Store', requires: ['Siace.model.budget.Iyueff', 'Siace.proxy.General'], model: 'Siace.model.budget.Iyueff',
	storeId: 'budget_iyueffconsolidado', proxy: { type: 'general', url: 'php/budget_iyueff_json_records.php' }
});