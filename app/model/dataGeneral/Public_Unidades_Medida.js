Ext.define('Siace.model.dataGeneric.Public_Tipos_Vehiculo', {
	extend: 'Ext.data.Model',

	idProperty: 'unimed_id',

	fields: [
		{ name: 'unimed_id' },
		{ name: 'unimed_nombre' },
		{ name: 'unimed_abrev' },
		{ name: 'unimed_equiv' },
		{ name: 'unimed_bien' },
		{ name: 'unimed_serv' },
		{ name: 'unimed_observ' },
		{ name: 'unimed_estado' }
	]
});