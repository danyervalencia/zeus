Ext.define('Siace.store.operations.Ingresos_Compras', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.operations.Ingreso_Compra',
		'Siace.proxy.General'
	],
	model: 'Siace.model.operations.Ingreso_Compra',
	storeId: 'operations_ingresos_compras',
	proxy: {
		type: 'general',
		url: 'php/operations_ingresos_compras_json_records.php'
	}
});