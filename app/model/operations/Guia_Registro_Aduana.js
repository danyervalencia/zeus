Ext.define('Siace.model.operations.Guia_Registro_Aduana', {
	extend: 'Ext.data.Model',
	idProperty: 'guiaregadua_key',

	fields: [
		{ name: 'guiaregadua_key', type: 'string' },
		{ name: 'guiaregadua_item', type: 'int' },
		{ name: 'guiaregadua_estado', type: 'string' },
		{ name: 'guia_key', type: 'string' },
		{ name: 'guia_code', type: 'string' },
		{ name: 'guia_observ', type: 'string' },
		{ name: 'guia_ing_fecha', type: 'date', dateFormat: 'Y-m-d' },
		{ name: 'guia_ing_hora', type: 'string' },
		{ name: 'guia_ing_usur_id', type: 'int' },
		{ name: 'guia_ing_peso', type: 'float' },
		{ name: 'guia_sal_fecha', type: 'date', dateFormat: 'Y-m-d' },
		{ name: 'guia_sal_hora', type: 'string' },
		{ name: 'guia_sal_usur_id', type: 'int' },
		{ name: 'guia_sal_peso', type: 'float' },

		{ name: 'alma_key', type: 'string' },
		{ name: 'alma_nombre', type: 'string' },
		{ name: 'alma_abrev', type: 'string' },
		{ name: 'perstransp_key', type: 'string' },
		{ name: 'perstransp_ruc', type: 'string' },
		{ name: 'perstransp_nombre', type: 'string' },
		{ name: 'perstransp_code', type: 'string' },
		{ name: 'veh_key', type: 'string' },
		{ name: 'veh_serie', type: 'string' },
		{ name: 'veh_nro', type: 'string' },
		{ name: 'veh_placa', type: 'string' },
		{ name: 'trac_key', type: 'string' },
		{ name: 'trac_serie', type: 'string' },
		{ name: 'trac_nro', type: 'string' },
		{ name: 'trac_placa', type: 'string' },
		{ name: 'cont_key', type: 'string' },
		{ name: 'cont_serie', type: 'string' },
		{ name: 'cont_nro', type: 'string' },
		{ name: 'cont_placa', type: 'string' },
		{ name: 'tipaux_nombre', type: 'string' },
		{ name: 'tipaux_abrev', type: 'string' },
		{ name: 'regadua_key', type: 'string' },
		{ name: 'regadua_flga', type: 'string' },
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
		{ name: 'tipbul_id', type: 'int' },
		{ name: 'regadua_cantid', type: 'float' },
		{ name: 'regadua_observ', type: 'string' },
		{ name: 'regadua_pdf', type: 'string' },
		{ name: 'regadua_estado', type: 'string' },
		{ name: 'regadua_documento', type: 'string' },
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
	]
});