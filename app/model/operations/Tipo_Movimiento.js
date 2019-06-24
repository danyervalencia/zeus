Ext.define('Siace.model.operations.Tipo_Movimiento', {
	extend: 'Ext.data.Model',
	idProperty: 'tipmov_id',
	fields: [
		{ name: 'tipmov_id', type: 'int' },
		{ name: 'tipmov_nombre', type: 'string' },
		{ name: 'tipmov_abrev', type: 'string' },
		{ name: 'tipmov_code', type: 'string' },
		{ name: 'tipmov_orden', type: 'int' },
		{ name: 'tipmov_estado_ingresos', type: 'int' },
		{ name: 'tipmov_estado_salidas', type: 'int' },
		{ name: 'tipmov_estado_regadua', type: 'int' },
		{ name: 'tipmov_estado_pais', type: 'int' },
	]
});