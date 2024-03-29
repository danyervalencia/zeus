Ext.define('Siace.model.operations.Packing_Det', {
	extend: 'Ext.data.Model',
	idProperty: 'packdet_key',

	fields: [
		{ name: 'packdet_key', type: 'string' },
		{ name: 'packdet_flga', type: 'string' },
		{ name: 'pall_id', type: 'int' },
		{ name: 'packdet_item', type: 'int' },
		{ name: 'packdet_cantid', type: 'float' },
		{ name: 'packdet_peso', type: 'float' },
		{ name: 'fase_id', type: 'int' },
		{ name: 'packdetfase_fechaing' },
		{ name: 'packdetfase_usur_id', type: 'int' },
		{ name: 'packdet_estado', type: 'string' },
		{ name: 'pall_key', type: 'string' },
		{ name: 'pall_nro', type: 'int' },
		{ name: 'pall_peso', type: 'float' },
		{ name: 'pall_codigo', type: 'string' },
		{ name: 'bs_key', type: 'string' },
		{ name: 'bs_code', type: 'string' },
		{ name: 'bs_nombre', type: 'string' },
		{ name: 'bs_abrev', type: 'string' },
		{ name: 'unimed_id', type: 'int' },
		{ name: 'bsg_nombre', type: 'string' },
		{ name: 'bsc_nombre', type: 'string' },
		{ name: 'bsf_nombre', type: 'string' },
		{ name: 'bs_codigo', type: 'string' },
		{ name: 'unimed_nombre', type: 'string' },
		{ name: 'unimed_abrev', type: 'string' },
		{ name: 'marc_nombre', type: 'string' },
		{ name: 'marc_abrev', type: 'string' },
		{ name: 'mod_nombre', type: 'string' },
		{ name: 'nand_codigo', type: 'string' },
		{ name: 'mod_abrev', type: 'string' },
		{ name: 'fase_nombre', type: 'string' },
		{ name: 'fase_abrev', type: 'string' },
		{ name: 'fase_color', type: 'string' },
		{ name: 'pack_key', type: 'string' },
		{ name: 'pack_flga', type: 'string' },
		{ name: 'doc_id', type: 'int' },
		{ name: 'pack_serie', type: 'int' },
		{ name: 'pack_nro', type: 'int' },
		{ name: 'pack_fecha', type: 'date', dateFormat: 'Y-m-d' },
		{ name: 'pack_observ' },
		{ name: 'pack_estado', type: 'string' },
		{ name: 'alma_key', type: 'string' },
		{ name: 'alma_code', type: 'string' },
		{ name: 'alma_nombre', type: 'string' },
		{ name: 'alma_abrev', type: 'string' },
		{ name: 'bsalma_key', type: 'string' },
		{ name: 'bsalma_code', type: 'string' },
		{ name: 'doc_nombre', type: 'string' },
		{ name: 'doc_abrev', type: 'string' },
		{ name: 'pers_key', type: 'string' },
		{ name: 'pers_ruc', type: 'string' },
		{ name: 'pers_nombre', type: 'string' },
	]
});