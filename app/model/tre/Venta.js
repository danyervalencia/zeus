Ext.define('Siace.model.treasury.Venta', {
	extend: 'Ext.data.Model',
	idProperty: 'vent_id',

	fields: [
		{ name: 'vent_id', type: 'int' },
		{ name: 'vent_key', type: 'string' },
		{ name: 'vent_flga', type: 'string' },
		{ name: 'doc_id', type: 'int' },
		{ name: 'vent_serie', type: 'int' },
		{ name: 'vent_nro', type: 'int' },
		{ name: 'vent_fecha', type: 'date', dateFormat: 'Y-m-d' },
		{ name: 'tipdocident_id', type: 'int' },
		{ name: 'pers_id', type: 'int' },
		{ name: 'tippag_id', type: 'int' },
		{ name: 'mone_id', type: 'int' },
		{ name: 'vent_monto', type: 'float' },
		{ name: 'vent_monto_inafecto', type: 'float' },
		{ name: 'vent_monto_percep', type: 'float' },
		{ name: 'vent_monto_pago', type: 'float' },
		{ name: 'vent_monto_debe', type: 'float' },
		{ name: 'vent_monto_saldo', type: 'float' },
		{ name: 'vent_observ', type: 'string' },
		{ name: 'vent_estado' },
		{ name: 'vent_documento', type: 'string' },
		{ name: 'vent_monto_letras', type: 'string' },
		{ name: 'doc_code', type: 'string' },
		{ name: 'docser_serie_length', type: 'int' },
		{ name: 'docser_nro_length', type: 'int' },
		{ name: 'tribval_porcentaje', type: 'float' },
		{ name: 'tribval_contable', type: 'float' },
		{ name: 'tipdocident_abrev', type: 'string' },
		{ name: 'pers_key', type: 'string' },
		{ name: 'pers_ruc', type: 'string' },
		{ name: 'pers_nombre', type: 'string' },
		{ name: 'pers_domicilio', type: 'string' },
		{ name: 'mone_nombre', type: 'string' },
		{ name: 'mone_abrev', type: 'string' },
		{ name: 'tippag_nombre', type: 'string' },
		{ name: 'tippag_abrev', type: 'string' },
		{ name: 'tablex_fechaini', type: 'date', dateFormat: 'Y-m-d' },
		{ name: 'tablex_fechafin', type: 'date', dateFormat: 'Y-m-d' },
		{ name: 'tablex_documento', type: 'string' },
	]
});