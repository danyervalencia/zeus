Ext.define('Siace.model.treasury.Bien_Serv_Categoria', {
	extend: 'Ext.data.Model',
	idProperty: 'bscat_id',

	fields: [
		{ name: 'bscat_id', type: 'int' },
		{ name: 'bscat_key', type: 'string' },
		{ name: 'bscat_flga', type: 'string' },
		{ name: 'bscat_nombre', type: 'string' },
		{ name: 'bscat_abrev', type: 'string' },
		{ name: 'bscat_code', type: 'string' },
		{ name: 'bscat_observ' },
		{ name: 'bscat_estado', type: 'string' },
	]
});