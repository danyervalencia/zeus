Ext.define('Siace.store.operations.Industrias_Insumos', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.operations.Industria_Insumo',
		'Siace.proxy.General',
	],
	model: 'Siace.model.operations.Industria_Insumo',
	storeId: 'operations_industrias_insumos',
	proxy: {
		type: 'general',
		url: 'php/operations_industrias_insumos_json_records.php'
	}
});