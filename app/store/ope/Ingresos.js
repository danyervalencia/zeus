Ext.define('Siace.store.operations.Ingresos', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.operations.Ingreso',
		'Siace.proxy.General'
	],
	model: 'Siace.model.operations.Ingreso',
	storeId: 'operations_ingresos',
	proxy: {
		type: 'general',
		url: 'php/operations_ingresos_json_records.php'
	}
});