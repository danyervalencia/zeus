Ext.define('Siace.store.operations.Ingresos_Compras_Det', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.operations.Ingreso_Compra_Det',
		'Siace.proxy.General'
	],
	model: 'Siace.model.operations.Ingreso_Compra_Det',
	storeId: 'operations_ingresos_compras_det',
	proxy: {
		type: 'general',
		url: 'php/operations_ingresos_compras_det_json_records.php'
	}
});