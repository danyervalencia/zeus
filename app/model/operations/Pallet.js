Ext.define('Siace.model.operations.Pallet', {
	extend: 'Ext.data.Model',
	idProperty: 'pall_id',

	fields: [
		{ name: 'pall_id', type: 'int' },
		{ name: 'pall_key', type: 'string' },
		{ name: 'pall_nro', type: 'int' },
		{ name: 'pall_peso', type: 'float' },
		{ name: 'pall_observ', type: 'string' },
		{ name: 'pall_codigo', type: 'string' },
		{ name: 'pack_key', type: 'string' },
	]
});