Ext.define('Siace.store.budget.Iyueff', {
	extend: 'Ext.data.Store', requires: ['Siace.model.budget.Iyueff','Siace.proxy.General'], model: 'Siace.model.budget.Iyueff',
	storeId: 'budget_iyueff', proxy: { type: 'general', url: 'php/budget_iyueff_json_records.php' }
});