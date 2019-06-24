Ext.define('Siace.view.public.Personas_TransportistasSearch', {
	extend: 'Siace.view.WindowSearch',
	alias: 'widget.public_personas_transportistassearch',
	width: 460,

	items: [
		{
			xtype: 'form', itemId: 'frmPublic_personas_transportistas',
			//bodyPadding: 4,
			frame: true,
			items: [
		        {
		            xtype: 'container', layout: 'hbox', margin: '0 0 5 0',
		            items: [
		                {
		                    xtype: 'component_textfieldtop', itemId: 'perstransp_code',
		                    fieldLabel: '&nbsp;'+translations.codigo,
		                    maxLength: 15, width: 60,
		                },
		                {
		                    xtype: 'component_textfieldtop', itemId: 'pers_nombre',
		                    fieldLabel: '&nbsp;'+translations.razon_social,
		                    maxLength: 15, width: 220,
		                }
		            ]
		        },
		        {
		            xtype: 'grid', itemId: 'grdPublic_personas_transportistas',
		            columnLines: true, height: 320,
		            columns: [
		                {
		                    dataIndex: 'perstransp_code',
		                    text: translations.codigo,
		                    width: 50,
		                },
		                {
		                    dataIndex: 'pers_nombre',
		                    text: translations.razon_social,
		                    flex: 1,
		                }
		            ]
		        },
		        {
		            xtype: 'component_pagingtoolbar',
		            itemId: 'pgtPublic_personas_transportistas',
		        }
			],
		}
	],
});