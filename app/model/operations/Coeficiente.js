Ext.define('Siace.model.operations.Coeficiente', {
	extend: 'Ext.data.Model',

	idProperty: 'coef_id',

	fields: [
		{ name: 'coef_id', type: 'int' },
		{ name: 'coef_key', type: 'string' },
		{ name: 'coef_flga', type: 'string' },
		{ name: 'coef_nombre', type: 'string' },
		{ name: 'coef_abrev', type: 'string' },
		{ name: 'tipcoef_id', type: 'int' },
		{ name: 'doc_id', type: 'int' },
		{ name: 'coef_estado', type: 'string' },
		{ name: 'tipcoef_nombre', type: 'string' },
		{ name: 'tipcoef_abrev', type: 'string' },
	]
});
