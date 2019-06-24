Ext.define('Siace.view.public.UsuariosGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.public_usuariosgrid',
	autoHeight: true, columnLines: true, stripeRows: true,

	columns: [
		{ 	xtype: 'rownumberer', width: 30, },
		{	dataIndex: 'usur_login', text: translations.usuario, width: 150 },
		{	dataIndex: 'indiv_apenom', text: translations.apellidos_y_nombres, flex: 1 },
		{	dataIndex: 'tipdocident_abrev', text: translations.documento_identidad_siglas, tooltip: translations.documento_identidad, width: 50 },
		{	dataIndex: 'indiv_dni', text: '# ' + translations.documento_identidad_siglas, tooltip: translations.numero +' '+ translations.documento_identidad, width: 100 },
		{	dataIndex: '', text: 'PA', tooltip: ' Permisos Accesos ', width: 50, }
	]
});