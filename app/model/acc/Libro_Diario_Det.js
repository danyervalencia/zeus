Ext.define('Siace.model.accounting.Libro_Diario_Det', {
	extend: 'Ext.data.Model',
	idProperty: 'libdiadet_id',

	fields: [
		{ name: 'libdiadet_id', type: 'int' },
		{ name: 'libdiadet_flga', type: 'string' },
		{ name: 'libdia_id', type: 'int' },
		{ name: 'libdiadet_item', type: 'int' },
		{ name: 'tablex', type: 'int' },
		{ name: 'tablex_id', type: 'int' },
		{ name: 'pctbl_id', type: 'int' },
		{ name: 'cencos_id', type: 'int' },
		{ name: 'libdiadet_parent', type: 'int' },
		{ name: 'libdiadet_type', type: 'int' },
		{ name: 'libdiadet_monto', type: 'float' },
		{ name: 'libdiadet_monto_me', type: 'float' },
		{ name: 'libdiadet_monto_ajuste', type: 'float' },
		{ name: 'libdiadet_observ', type: 'string' },
		{ name: 'libdiadet_estado', type: 'int' },
		{ name: 'doc_flga', type: 'string' },
		{ name: 'doc_abrev', type: 'string' },
		{ name: 'doc_fecha', type: 'date', dateFormat: 'Y-m-d' },
		{ name: 'mone_id', type: 'int' },
		{ name: 'mone_abrev', type: 'string' },
		{ name: 'tipmone_abrev', type: 'string' },
		{ name: 'documento', type: 'string' },
		{ name: 'detalle', type: 'string' },
		{ name: 'anexo', type: 'string' },
		{ name: 'pctbl_cuenta', type: 'string' },
		{ name: 'pctbl_nombre', type: 'string' },
		{ name: 'pctbl_codename', type: 'string' },
		{ name: 'libdiadet_debe', type: 'float' },
		{ name: 'libdiadet_haber', type: 'float' },
		{ name: 'tipcamb_monto', type: 'float' },
		{ name: 'sucr_id', type: 'int' },
		{ name: 'year_id', type: 'int' },
		{ name: 'mes_id', type: 'int' },
		{ name: 'subdia_id', type: 'int' },
		{ name: 'libdia_nro', type: 'int' },
		{ name: 'libdia_fecha', type: 'date', dateFormat: 'Y-m-d' },
		{ name: 'libdia_record', type: 'string' },
		{ name: 'subdia_code', type: 'string' },		
	]
});