Ext.define('Siace.model.treasury.Comprobante_Especifica_Det', {
	extend: 'Ext.data.Model',
	idProperty: 'comprobespedet_id',

	fields: [
		{ name: 'comprobespedet_id', type: 'int' },
		{ name: 'comprobespedet_key', type: 'string' },
		{ name: 'comprob_id', type: 'int' },
		{ name: 'comprobespedet_item ', type: 'int' },
		{ name: 'espedet_id', type: 'int' },
		{ name: 'comprobespedet_monto', type: 'float' },
		{ name: 'comprobespedet_monto_igv', type: 'float' },
		{ name: 'espedet_codigo', type: 'string' },
		{ name: 'espedet_nombre', type: 'string' },
		{ name: 'espedet_codename', type: 'string' },
	]
});