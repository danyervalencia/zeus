Ext.define('Siace.store.operations.Guias_Registros_Aduanas', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.operations.Guia_Registro_Aduana',
		'Siace.proxy.General'
	],
	model: 'Siace.model.operations.Guia_Registro_Aduana',
	storeId: 'operations_guias_registros_aduanas',
	proxy: {
		type: 'general',
		url: 'php/operations_guias_registros_aduanas_json_records.php',
	}
});