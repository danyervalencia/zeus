Ext.define('Siace.model.operations.Almacen', {
	extend: 'Ext.data.Model',
	idProperty: 'alma_id',

	fields: [
		{ name: 'alma_id', type: 'int' },
		{ name: 'alma_key', type: 'string' },
		{ name: 'alma_flga', type: 'string' },
		{ name: 'sucur_id', type: 'int' },
		{ name: 'pers_id', type: 'int' },
		{ name: 'alma_nombre', type: 'string' },
		{ name: 'alma_abrev', type: 'string' },
		{ name: 'alma_code', type: 'string' },
		{ name: 'alma_fechaini', type: 'date' },
		{ name: 'alma_fechafin', type: 'date' },
		{ name: 'alma_estado', type: 'int' },
		{ name: 'pers_key', type: 'string' },
		{ name: 'pers_ruc', type: 'string' },
		{ name: 'pers_nombre', type: 'string' },
		{ name: 'cantid_lotes', type: 'int' },
		{ name: 'cantid_usuarios', type: 'int' }
	]
});