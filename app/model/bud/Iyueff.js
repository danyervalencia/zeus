Ext.define('Siace.model.budget.Iyueff', { extend: 'Ext.data.Model', idProperty: 'iyuf_id', fields: [
{ name: 'iyuf_id', type: 'int' }, { name: 'iyuf_key', type: 'string' }, { name: 'iyuf_flga', type: 'string' },
{ name: 'year_id', type: 'int' }, { name: 'unieje_id', type: 'int' }, { name: 'fuefin_id', type: 'int' },
{ name: 'iyuf_pia', type: 'float' }, { name: 'iyuf_haber', type: 'float' }, { name: 'iyuf_debe', type: 'float' }, { name: 'iyuf_ingreso', type: 'float' }, { name: 'iyuf_ingreso_ctbl', type: 'float' },{ name: 'iyuf_egreso', type: 'float' }, { name: 'iyuf_egreso_ctbl', type: 'float' },
{ name: 'iyuf_observ', type: 'string' }, { name: 'iyuf_estado', type: 'int' }, { name: 'iyuf_documento', type: 'string' },
{ name: 'fuefin_code', type: 'string' }, { name: 'fuefin_nombre', type: 'string' }, { name: 'fuefin_codename', type: 'string' },
{ name: 'espedet_nombre', type: 'string' }, { name: 'espedet_codigo', type: 'string' },
]});