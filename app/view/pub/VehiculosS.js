Ext.define('Siace.view.public.VehiculosS', {
	extend: 'Siace.view.WindowSearch',
	alias: 'widget.public_vehiculossearch',
	width: 500,

	items: [
		{
			xtype: 'form', itemId: 'frmPublic_vehiculos', frame: true,
			items: [
		        {
		            xtype: 'container', layout: 'hbox', margin: '0 0 5 0',
		            items: [
		                {	xtype: 'component_combotop', itemId: 'tipveh_id', valueField: 'tipveh_id', displayField: 'tipveh_nombre', fieldLabel: '&nbsp;'+translations.tipo, tpl:'<tpl for="."><div class="x-boundlist-item">{tipveh_nombre}&nbsp;</div></tpl>',  width: 160, },
		                {	xtype: 'component_textfieldtop', itemId: 'veh_placa', fieldLabel: '&nbsp;'+translations.placa, maxLength: 15, width: 100, },
		            ]
		        },
		        {
		            xtype: 'grid', itemId: 'grdPublic_vehiculos', columnLines: true, height: 278,
		            columns: [
		                {   dataIndex: 'tipveh_nombre', text: translations.tipo, width: 160, },
		                {   dataIndex: 'veh_placa', text: translations.placa, width: 100, },
		                {	dataIndex: 'marc_nombre', text: translations.marca, flex: 1, },
		            ]
		        },
		        {	xtype: 'component_pagingtoolbar', itemId: 'pgtPublic_vehiculos', }
			],
		}
	]
});