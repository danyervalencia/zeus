Ext.define('Siace.store.public.Tipos_Vehiculo', {
	extend: 'Ext.data.Store', requires: ['Siace.model.public.Tipo_Vehiculo', 'Siace.proxy.General'], model: 'Siace.model.public.Tipo_Vehiculo',
	storeId: 'public_tipos_vehiculo', proxy: { type: 'general', url: 'php/public_tipos_vehiculo_json_records.php' }
});