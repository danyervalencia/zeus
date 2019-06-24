Ext.define('Siace.view.public.Partidas_ArancelariasSearch', {
	extend: 'Siace.view.WindowSearch',
	alias: 'widget.public_partidas_arancelariassearch',
	width: 750,

	items: [
		{
			xtype: 'form', name: 'frmPublic_partidas_arancelarias', frame: false,
			items: [
		        {
		            xtype: 'container', layout: 'hbox', margin: '0 0 5 0',
		            items: [
		                {	xtype: 'component_textfieldtop', itemId: 'partaran_codigo', fieldLabel: translations.partida, maxLength: 13, width: 90, },
		                {	xtype: 'component_textfieldtop', itemId: 'partaran_nombre', fieldLabel: translations.descripcion, maxLength: 50, width: 250, },
		            ]
		        },
		        {
		            xtype: 'grid', itemId: 'grdPublic_partidas_arancelarias', columnLines: true, height: 320,
		            columns: [
		                {	dataIndex: 'partaran_codigo', text: translations.codigo, width: 90, },
		                { 	dataIndex: 'partaran_nombre', text: translations.descripcion, flex: 1, },
		            ]
		        },
		        { 	xtype: 'component_pagingtoolbar', itemId: 'pagPublic_partidas_arancelarias', }
			],
		}
	],
});