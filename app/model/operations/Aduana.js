Ext.define('Siace.model.operations.Aduana', {
	extend: 'Ext.data.Model',
	idProperty: 'adua_id',

	fields: [
		{ name: 'adua_id', type: 'int' },
		{ name: 'adua_flga', type: 'string' },
		{ name: 'adua_nombre', type: 'string' },
		{ name: 'adua_abrev', type: 'string' },
		{ name: 'adua_code', type: 'string' },
		{ name: 'adua_fechaini', type: 'date' },
		{ name: 'adua_fechafin', type: 'date' },
		{ name: 'adua_observ', type: 'string' },
		{ name: 'adua_estado', type: 'int' },
	]
});