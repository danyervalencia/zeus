Ext.define('Siace.model.treasury.Contrato_Det', {
	extend: 'Ext.data.Model',
	idProperty: 'contrdet_id',

	fields: [
		{ name: 'contrdet_id', type: 'int' },
		{ name: 'contrdet_flga', type: 'int' },
		{ name: 'contr_id', type: 'int' },
		{ name: 'contrdet_item', type: 'int' },
		{ name: 'tablex', type: 'int' },
		{ name: 'tablex_id', type: 'int' },
		{ name: 'tablex_item', type: 'int' },
		{ name: 'contrdet_preuni', type: 'float' },
		{ name: 'contrdet_fecha', type: 'date', dateFormat: 'Y-m-d' },
		{ name: 'contrdet_fechafin', type: 'date', dateFormat: 'Y-m-d' },
		{ name: 'contrdet_observ', type: 'string' },
		{ name: 'contrdet_estado', type: 'int' },
		{ name: 'tablex_codigo', type: 'string' },
		{ name: 'tablex_nombre', type: 'string' },
	]
});