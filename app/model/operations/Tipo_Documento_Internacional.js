Ext.define('Siace.model.operations.Tipo_Documento_Internacional', {
	extend: 'Ext.data.Model',
	idProperty: 'tipdocint_id',

	fields: [
		{ name: 'tipdocint_id', type: 'int' },
		{ name: 'tipdocint_nombre', type: 'string' },
		{ name: 'tipdocint_abrev', type: 'string' },
	]
});