Ext.define('Siace.model.operations.Ingreso_Documento', {
	extend: 'Ext.data.Model',
	idProperty: '_key',

	fields: [
		{ name: '_schema_table', type: 'string' },
		{ name: '_table_field', type: 'string' },
		{ name: '_record_field', type: 'string' },
		{ name: '_table', type: 'string' },
		{ name: '_field', type: 'string' },
		{ name: '_key', type: 'string' },
		{ name: '_flga', type: 'string' },
		{ name: '_fecha', type: 'date', dateFormat: 'Y-m-d' },
		{ name: '_documento', type: 'string' },
		{ name: '_file', type: 'string' },
	]
});