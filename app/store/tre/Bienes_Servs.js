Ext.define('Siace.store.treasury.Bienes_Servs', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.treasury.Bien_Serv',
		'Siace.proxy.General',
	],
	model: 'Siace.model.treasury.Bien_Serv',
	storeId: 'treasury_bienes_servs',
	proxy: {
		type: 'general',
		url: 'php/treasury_bienes_servs_json_records.php'
	}
});