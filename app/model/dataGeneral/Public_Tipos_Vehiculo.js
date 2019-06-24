Ext.define('Siace.model.dataGeneral.Public_Tipos_Vehiculo', {
	extend: 'Ext.data.Model',

	idProperty: 'tipveh_id',

	fields: [
		{ name: 'tipveh_id' },
		{ name: 'tipveh_nombre' },
		{ name: 'tipveh_abrev' },
		{ name: 'tipveh_observ' },
		{ name: 'tipveh_estado' },
		{ name: 'tipveh_fechaing' },
		{ name: 'tipveh_key' }
	]
});