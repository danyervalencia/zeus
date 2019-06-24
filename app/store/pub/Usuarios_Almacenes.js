Ext.define('Siace.store.public.Usuarios_Almacenes', {
	extend: 'Ext.data.Store', requires: ['Siace.model.public.Usuario_Almacen', 'Siace.proxy.General'], model: 'Siace.model.public.Usuario_Almacen',
	storeId: 'public.usuarios_almacenes', proxy: { type: 'general', url: 'php/public_usuarios_almacenes_json_records.php' }
});