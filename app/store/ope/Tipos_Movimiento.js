Ext.define('Siace.store.operations.Tipos_Movimiento', {
	extend: 'Ext.data.Store',
	requires: [
		'Siace.model.operations.Tipo_Movimiento',
		'Siace.proxy.General'
	],
	model: 'Siace.model.operations.Tipo_Movimiento',
	storeId: 'operations_tipos_movimiento',
	proxy: {
		type: 'general',
		url: 'php/operations_tipos_movimiento_json_records.php',
	}
});