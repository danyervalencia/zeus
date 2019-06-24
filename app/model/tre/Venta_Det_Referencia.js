Ext.define('Siace.model.treasury.Venta_Det_Referencia', {
	extend: 'Ext.data.Model',
	idProperty: 'ventdetref_id',

	fields: [
		{ name: 'ventdetref_id', type: 'int' },
		{ name: 'ventdetref_key', type: 'string' },
		{ name: 'vent_id', type: 'int' },
		{ name: 'ventdet_id', type: 'int' },
		{ name: 'ventdetref_item', type: 'int' },
		{ name: 'ref_id', type: 'int' },
		{ name: 'tablex', type: 'int' },
		{ name: 'tablex_id', type: 'int' },
		{ name: 'tablex_fechaini', type: 'date', dateFormat: 'Y-m-d', defaultValue: null },
		{ name: 'tablex_fechafin', type: 'date', dateFormat: 'Y-m-d', defaultValue: null },
		{ name: 'tablex_varchar', type: 'string' },
		{ name: 'ventdetref_estado', type: 'int' },

		{ name: 'bs_id', type: 'int' },
		{ name: 'tablex_data0', type: 'string' },
		{ name: 'tablex_data1', type: 'string' },
		{ name: 'tablex_data2', type: 'string' },
		{ name: 'tablex_data3', type: 'string' },
		{ name: 'tablex_data4', type: 'string' },
		{ name: 'tablex_data5', type: 'string' },
		{ name: 'tablex_data6', type: 'string' },
	]
});