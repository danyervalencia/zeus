Ext.define('Siace.store.operations.Registros_Aduanas', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.operations.Registro_Aduana',
		'Siace.proxy.General'
	],
	model: 'Siace.model.operations.Registro_Aduana',
	storeId: 'operations_registros_aduanas',
	proxy: {
		type: 'general',
		url: 'php/operations_registros_aduanas_json_records.php',
	}
});