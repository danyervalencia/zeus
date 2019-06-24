Ext.define('Siace.model.public.Contenedor', {
	extend: 'Ext.data.Model',
	idProperty: 'cont_id',
	fields: [
		{ name: 'cont_id' },
		{ name: 'cont_serie' },
		{ name: 'cont_nro' },
		{ name: 'tipcont_id' },
		{ name: 'cont_estado' },
		{ name: 'cont_placa', type: 'string' },
		{ name: 'tipcont_nombre' },
		{ name: 'tipcont_abrev' },
	]
});