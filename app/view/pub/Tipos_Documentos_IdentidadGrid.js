Ext.define('Siace.view.public.Tipos_Documentos_IdentidadGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.tipos_documentos_identidadgrid',

	store: Ext.create('Siace.store.public.Tipos_Documentos_Identidad'), // #1

	frame: true,
	columnLines: true,

	columns: [
		{
			dataIndex: 'tipdocident_id',
			text: 'DI',
			width: 50,
			tooltip: ' ID '
		},
		{
			dataIndex: 'tipdocident_nombre',
			text: 'Nombre',
			width: 250
		},
		{
			dataIndex: 'tipdocident_abrev',
			text: 'Abrev',
			width: 80
		},
		{
			dataIndex: 'tipdocident_code',
			text: 'Código',
			width: 50
		},
		{
			dataIndex: '',
			text: 'danyer',
			width: 80
		}
	]
});