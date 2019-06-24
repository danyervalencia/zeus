Ext.define('Siace.model.operations.Actividad', {
	extend: 'Ext.data.Model',
	idProperty: 'activ_id',

	fields: [
		{ name: 'activ_id', type: 'int' },
		{ name: 'activ_key', type: 'string' },
		{ name: 'activ_flga', type: 'string' },
		{ name: 'activ_parent', type: 'int' },
		{ name: 'activ_nombre', type: 'string' },
		{ name: 'activ_abrev', type: 'string' },
		{ name: 'activ_code', type: 'string' },
		{ name: 'activ_codigo', type: 'string' },
		{ name: 'activ_codename', type: 'string' },		
		{ name: 'parent_nombre', type: 'string' },
		{ name: 'parent_abrev', type: 'string' },
		{ name: 'parent_code', type: 'string' },
	]
});