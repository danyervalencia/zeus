Ext.define('Siace.model.budget.Iyueffed', {
	extend: 'Ext.data.Model', idProperty: 'iyufe_id',
	fields: [
		{ name: 'iyufe_id', type: 'int' }, { name: 'iyufe_key', type: 'string' }, { name: 'iyufe_flga', type: 'string' },
		{ name: 'year_id', type: 'int' }, { name: 'unieje_id', type: 'int' }, { name: 'fuefin_id', type: 'int' }, { name: 'espedet_id', type: 'int' },
		{ name: 'iyufe_pia', type: 'float' }, { name: 'iyufe_haber', type: 'float' }, { name: 'iyufe_ingreso', type: 'float' }, { name: 'iyufe_ingreso_ctbl', type: 'float' },
		{ name: 'iyufe_observ' }, { name: 'iyufe_estado' }, { name: 'iyufe_documento' },
		{ name: 'fuefin_code', type: 'string' }, { name: 'fuefin_nombre', type: 'string' },
		{ name: 'espedet_nombre', type: 'string' }, { name: 'espedet_codigo', type: 'string' },
	]
});