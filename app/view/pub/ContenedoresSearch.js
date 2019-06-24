Ext.define('Siace.view.public.ContenedoresSearch', {
	extend: 'Siace.view.WindowSearch',
	alias: 'widget.public_contenedoressearch',
	width: 400,

	items: [
		{
			xtype: 'form', itemId: 'frmPublic_contenedores',
			frame: true,
			items: [
		        {
		            xtype: 'container', layout: 'hbox', margin: '0 0 5 0',
		            items: [
		                {
		                    xtype: 'component_combotop', itemId: 'tipcont_id',
		                    valueField: 'tipcont_id', displayField: 'tipcont_nombre',
		                    tpl:'<tpl for="."><div class="x-boundlist-item">{tipcont_nombre}&nbsp;</div></tpl>',
		                    fieldLabel: '&nbsp;'+translations.tipo,
		                    width: 180,
		                },
		                {
		                    xtype: 'component_textfieldtop', itemId: 'cont_placa',
		                    fieldLabel: '&nbsp;'+translations.placa,
		                    maxLength: 11, width: 170,
		                },		                
		            ]
		        },
		        {
		            xtype: 'grid', itemId: 'grdPublic_contenedores',
		            columnLines: true,
		            height: 278,
		            columns: [
		                {
		                    dataIndex: 'cont_placa', text: translations.contenedor,
		                    flex: 6,
		                },
		                {
		                    dataIndex: 'tipcont_nombre', text: translations.tipo,
		                    flex: 4,
		                },
		            ]
		        },
		        {
		            xtype: 'component_pagingtoolbar',
		            itemId: 'pgtPublic_contenedores',
		        }		        
			],
		}
	]
});