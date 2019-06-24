Ext.define('Siace.model.public.Tipo_Vehiculo', { extend: 'Ext.data.Model', idProperty: 'tipveh_id',
	fields: [{ name: 'tipveh_id', type: 'int' }, { name: 'tipveh_flga', type: 'string' }, { name: 'tipveh_nombre', type: 'string' }, { name: 'tipveh_abrev', type: 'string' }, { name: 'tipdocident_estado' }]
});