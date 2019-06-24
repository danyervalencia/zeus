Ext.define('Siace.store.treasury.Bienes_Servs_Categorias', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.treasury.Bien_Serv_Categoria',
		'Siace.proxy.General',
	],
	model: 'Siace.model.treasury.Bien_Serv_Categoria',
	storeId: 'treasury_bienes_servs_categorias',
	proxy: {
		type: 'general',
		url: 'php/treasury_bienes_servs_categorias_json_records.php',
	}
});