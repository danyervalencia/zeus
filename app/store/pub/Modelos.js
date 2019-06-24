Ext.define('Siace.store.public.Modelos', {
	extend: 'Ext.data.Store', requires: ['Siace.model.public.Modelo', 'Siace.proxy.General'], model: 'Siace.model.public.Modelo',
	storeId: 'public_modelos', proxy: { type: 'general', url: 'php/public_modelos_json_records.php' }
});