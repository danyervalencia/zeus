Ext.define('Siace.store.public.Partidas_Arancelarias', {
	extend: 'Ext.data.Store', requires: ['Siace.model.public.Partida_Arancelaria', 'Siace.proxy.General'], model: 'Siace.model.public.Partida_Arancelaria',
	storeId: 'public_partidas_arancelarias', proxy: { type: 'general', url: 'php/public_partidas_arancelarias_json_records.php' }
});