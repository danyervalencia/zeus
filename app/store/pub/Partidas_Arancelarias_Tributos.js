Ext.define('Siace.store.public.Partidas_Arancelarias_Tributos', {
	extend: 'Ext.data.Store', requires: ['Siace.model.public.Partida_Arancelaria_Tributo', 'Siace.proxy.General'], model: 'Siace.model.public.Partida_Arancelaria_Tributo',
	storeId: 'public_partidas_arancelarias_tributos', proxy: { type: 'general', url: 'php/public_partidas_arancelarias_tributos_json_records.php'}
});