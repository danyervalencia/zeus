Ext.define('Siace.model.accounting.Libro_Diario', {
	extend: 'Ext.data.Model', idProperty: 'libdia_id',
	fields: [
		{ name: 'libdia_id', type: 'int' }, { name: 'libdia_flga', type: 'string' }, { name: 'sucr_id', type: 'int' }, { name: 'year_id', type: 'int' },
		{ name: 'mes_id', type: 'int' }, { name: 'subdia_id', type: 'int' }, { name: 'libdia_nro', type: 'int' }, { name: 'libdia_fecha', type: 'date', dateFormat: 'Y-m-d' },
		{ name: 'tablex', type: 'int' }, { name: 'tablex_id', type: 'int' }, { name: 'libdia_monto', type: 'float' }, { name: 'libdia_monto_me', type: 'float' }, { name: 'libdia_observ', type: 'string' }, { name: 'libdia_estado', type: 'int' }, { name: 'libdia_record', type: 'string' },
		{ name: 'subdia_code', type: 'string' }, { name: 'doc_flga', type: 'string' }, { name: 'doc_abrev', type: 'string' }, { name: 'doc_fecha', type: 'date', dateFormat: 'Y-m-d' },
		{ name: 'mone_id', type: 'int' }, { name: 'mone_abrev', type: 'string' }, { name: 'tipmone_abrev', type: 'string' }, { name: 'tipcamb_monto', type: 'float' },
		{ name: 'documento', type: 'string' }, { name: 'detalle', type: 'string' }, { name: 'anexo', type: 'string' },
	]
});