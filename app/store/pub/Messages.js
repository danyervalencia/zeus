Ext.define('Siace.store.public.Messages', {
	extend: 'Ext.data.Store', requires: ['Siace.model.public.Message', 'Siace.proxy.General'], model: 'Siace.model.public.Message',
	storeId: 'public_messages', proxy: { type: 'general', url: 'php/public_messages_json_records.php' }
});