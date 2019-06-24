Ext.define('Siace.store.operations.Ingresos_Det', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.operations.Ingreso_Det',
		'Siace.proxy.General'
	],
	model: 'Siace.model.operations.Ingreso_Det',
	storeId: 'operations_ingresos_det',
	proxy: {
		type: 'general',
		url: 'php/operations_ingresos_det_json_records.php'
	}
});