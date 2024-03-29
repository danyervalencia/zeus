Ext.define('Siace.model.operations.Registro_Aduana', {
	extend: 'Ext.data.Model',

	idProperty: 'regadua_id',

	fields: [
		{ name: 'regadua_id', type: 'int' },
		{ name: 'regadua_key', type: 'string' },
		{ name: 'regadua_flga', type: 'string' },
		{ name: 'alma_id', type: 'int' },
		{ name: 'tipregadua_id', type: 'int' },
		{ name: 'tipmov_id', type: 'int' },
		{ name: 'tipdocadua_id', type: 'int' },
		{ name: 'year_id', type: 'int' },
		{ name: 'adua_id', type: 'int' },
		{ name: 'aduaoper_id', type: 'int' },
		{ name: 'regadua_nro', type: 'int' },
		{ name: 'regadua_fecha', type: 'date', dateFormat: 'Y-m-d' },
		{ name: 'mone_id', type: 'int' },
		{ name: 'regadua_monto_seguro', type: 'float' },
		{ name: 'regint_id', type: 'int' },
		{ name: 'pers_id', type: 'int' },
		{ name: 'tipbul_id', type: 'int' },
		{ name: 'regadua_cantid', type: 'float' },
		{ name: 'regadua_observ', type: 'string' },
		{ name: 'regadua_pdf', type: 'string' },
		{ name: 'regadua_estado', type: 'string' },
		{ name: 'regadua_documento', type: 'string' },

		{ name: 'alma_key', type: 'string' },
		{ name: 'alma_nombre', type: 'string' },
		{ name: 'alma_abrev', type: 'string' },
		{ name: 'tipmov_nombre', type: 'string' },
		{ name: 'tipmov_abrev', type: 'string' },
		{ name: 'tipdocadua_nombre', type: 'string' },
		{ name: 'tipdocadua_nombre02', type: 'string' },
		{ name: 'tipdocadua_abrev', type: 'string' },
		{ name: 'adua_nombre', type: 'string' },
		{ name: 'aduaoper_nombre', type: 'string' },
		{ name: 'pers_key', type: 'string' },
		{ name: 'pers_ruc', type: 'string' },
		{ name: 'pers_nombre', type: 'string' },
		{ name: 'pers_abrev', type: 'string' },
		{ name: 'persimpor_key', type: 'string' },
		{ name: 'persimpor_ruc', type: 'string' },
		{ name: 'persimpor_nombre', type: 'string' },
		{ name: 'mone_nombre', type: 'string' },
		{ name: 'mone_abrev', type: 'string' },
		{ name: 'regint_key', type: 'string' },
		{ name: 'regint_nro', type: 'string' },
		{ name: 'regint_fecha', type: 'date', dateFormat: 'Y-m-d' },
		{ name: 'regint_monto_flete', type: 'float' },
		{ name: 'regint_documento', type: 'string' },
		{ name: 'regint_nombre', type: 'string' },
		{ name: 'tipdocint_nombre', type: 'string' },
		{ name: 'tipdocint_abrev', type: 'string' },
		{ name: 'guia_id', type: 'int' },
		{ name: 'guia_fecha', type: 'date', dateFormat: 'Y-m-d' },
		{ name: 'guia_peso_neto', type: 'float' },
		{ name: 'guia_documento', type: 'string' },
		{ name: 'veh_key', type: 'string' },
		{ name: 'veh_placa', type: 'string' },
		{ name: 'ingregadua_rows' },
		{ name: 'ingregadua_monto_flete' },
		{ name: 'ingregadua_monto_seguro' },
		{ name: 'ceticos_documento', type: 'string' },
	]
});
