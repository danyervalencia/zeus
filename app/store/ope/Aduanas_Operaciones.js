Ext.define('Siace.store.operations.Aduanas_Operaciones', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.operations.Aduana_Operacion',
		'Siace.proxy.General',
	],
	model: 'Siace.model.operations.Aduana_Operacion',
	storeId: 'operations_aduanas_operaciones',
	proxy: {
		type: 'general',
		url: 'php/operations_aduanas_operaciones_json_records.php',
	}
});