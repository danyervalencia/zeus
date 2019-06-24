Ext.define('Siace.model.operations.Tipo_Documento_Aduana', {
	extend: 'Ext.data.Model',
	idProperty: 'tipdocadua_id',

	fields: [
		{ name: 'tipdocadua_id', type: 'int' },
		{ name: 'tipdocadua_nombre', type: 'string' },
		{ name: 'tipdocadua_nombre02', type: 'string' },
		{ name: 'tipdocadua_abrev', type: 'string' },
		{ name: 'tipdocadua_ingreso', type: 'int' },
		{ name: 'tipdocadua_salida', type: 'int' },
		{ name: 'tipdocadua_estado_aduanas', type: 'int' },
		{ name: 'tipdocadua_estado_years', type: 'int' },
		{ name: 'tipdocadua_estado_aduanas_operaciones', type: 'int' },
		{ name: 'tipdocadua_estado_regint', type: 'int' },
		{ name: 'tipdocint_id', type: 'int' },
	]
});