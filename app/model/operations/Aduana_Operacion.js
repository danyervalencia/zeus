Ext.define('Siace.model.operations.Aduana_Operacion', {
	extend: 'Ext.data.Model',
	idProperty: 'aduaoper_id',

	fields: [
		{ name: 'aduaoper_id', type: 'int' },
		{ name: 'aduaoper_flga', type: 'string' },
		{ name: 'aduaoper_nombre', type: 'string' },
		{ name: 'aduaoper_abrev', type: 'string' },
		{ name: 'aduaoper_code', type: 'string' },
		{ name: 'aduaoper_fechaini', type: 'date' },
		{ name: 'aduaoper_fechafin', type: 'date' },
		{ name: 'aduaoper_observ', type: 'string' },
		{ name: 'aduaoper_estado', type: 'int' },
	]
});