Ext.define('Siace.store.operations.Salidas_Det', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.operations.Salida_Det',
		'Siace.proxy.General'
	],
	model: 'Siace.model.operations.Salida_Det',
	storeId: 'operations_salidas_det',
	proxy: {
		type: 'general',
		url: 'php/operations_salidas_det_json_records.php'
	}
});