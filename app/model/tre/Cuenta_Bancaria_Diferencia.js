Ext.define('Siace.model.treasury.Cuenta_Bancaria_Diferencia', {
	extend: 'Ext.data.Model',
	idProperty: 'cuebancdif_id',

	fields: [
		{ name: 'cuebancdif_id', type: 'int' },
		{ name: 'cuebancdif_key', type: 'string' },
		{ name: 'cuebancdif_flga', type: 'string' },
		{ name: 'cuebanc_id', type: 'int' },
		{ name: 'cuebancdif_fecha', type: 'date', dateFormat: 'Y-m-d' },
		{ name: 'espedet_id', type: 'int' },
		{ name: 'cuebancdif_caj_debe', type: 'float' },
		{ name: 'cuebancdif_caj_haber', type: 'float' },
		{ name: 'cuebancdif_debe', type: 'float' },
		{ name: 'cuebancdif_haber', type: 'float' },
		{ name: 'cuebancdif_tctype', type: 'int' },
		{ name: 'cuebancdif_observ', type: 'string' },
		{ name: 'cuebancdif_estado', type: 'int' },
		{ name: 'tipcamb_monto', type: 'float' },
		{ name: 'espedet_codigo', type: 'string' },
	]
});