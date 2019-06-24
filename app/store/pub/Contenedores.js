Ext.define('Siace.store.public.Contenedores', {
	extend: 'Ext.data.Store', requires: ['Siace.model.public.Contenedor', 'Siace.proxy.General'], model: 'Siace.model.public.Contenedor',
	storeId: 'public_contenedores', proxy: { type: 'general', url: 'php/public_contenedores_json_records.php' }
});