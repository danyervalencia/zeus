Ext.define('Siace.model.treasury.Cuenta_Bancaria_Movimiento', {
	extend: 'Ext.data.Model',
	idProperty: 'cuebancmov_id',

	fields: [
		{ name: 'cuebancmov_id', type: 'int' },
		{ name: 'cuebancmov_key', type: 'string' },
		{ name: 'cuebancmov_flga', type: 'string' },
		{ name: 'cuebanc_id', type: 'int' },
		{ name: 'cuebancmov_fecha', type: 'date', dateFormat: 'Y-m-d' },
		{ name: 'cuebancmov_hora', type: 'string' },
		{ name: 'cuebancmov_type', type: 'int' },
		{ name: 'cuebancmov_nro', type: 'string' },
		{ name: 'cuebancmov_monto', type: 'float' },
		{ name: 'cuebancmov_observ', type: 'string' },
		{ name: 'cuebancmov_estado', type: 'int' },
		{ name: 'cuebancmov_monto_debe', type: 'float' },
		{ name: 'cuebancmov_monto_haber', type: 'float' },
		{ name: 'comprob_documento', type: 'string' },
		{ name: 'cuebancmov_concepto', type: 'string' },
	]
});