Ext.define('Siace.store.operations.Registros_Internacionales', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.operations.Registro_Internacional',
		'Siace.proxy.General'
	],
	model: 'Siace.model.operations.Registro_Internacional',
	storeId: 'operations_registros_internacionales',
	proxy: {
		type: 'general',
		url: 'php/operations_registros_internacionales_json_records.php',
	}
});