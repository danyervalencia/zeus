Ext.define('Siace.model.dataGeneral.Public_Aduanas', {
	extend: 'Ext.data.Model',

	idProperty: 'adua_id',

	fields: [
		{ name: 'adua_id' },
		{ name: 'adua_nombre' },
		{ name: 'adua_abrev' },
		{ name: 'adua_code' },
		{ name: 'adua_fechaini' },
		{ name: 'adua_fechafin' },
		{ name: 'adua_observ' },
		{ name: 'adua_estado' }
	]
});