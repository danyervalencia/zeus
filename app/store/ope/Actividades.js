Ext.define('Siace.store.operations.Actividades', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.operations.Actividad',
		'Siace.proxy.General',
	],
	model: 'Siace.model.operations.Actividad',
	storeId: 'operations_actividades',
	proxy: {
		type: 'general',
		url: 'php/operations_actividades_json_records.php',
	}
});