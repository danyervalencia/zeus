Ext.define('Siace.store.public.Partidas_Arancelarias_Capitulos', {
	extend: 'Ext.data.Store', requires: ['Siace.model.public.Partida_Arancelaria_Capitulo', 'Siace.proxy.General'], model: 'Siace.model.public.Partida_Arancelaria_Capitulo',
	storeId: 'public_partidas_arancelarias_capitulos', proxy: { type: 'general', url: 'php/public_partidas_arancelarias_capitulos_json_records.php' }
});