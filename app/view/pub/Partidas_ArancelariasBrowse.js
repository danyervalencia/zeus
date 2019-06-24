Ext.define('Siace.view.public.Partidas_ArancelariasBrowse', {
	extend: 'Siace.view.PanelBrowse',
	alias: 'widget.public_partidas_arancelariasbrowse',
	layout: { type: 'hbox', },

    items: [
		{
			xtype : 'panel', itemId: 'panPublic_partidas_arancelarias', layout: { type: 'fit', }, height: '100%', width: '58%',
			items: [
        		{
		            xtype: 'grid', itemId: 'grdPublic_partidas_arancelarias', autoHeight: true, columnLines: true, stripeRows: true,
		            columns: [
						{	dataIndex: 'partaran_codigo', text: 'Partida', width: 90, },
						{	dataIndex: 'partaran_nombre', text: 'Descripción', width: 750, },
						
					]
				}
			],
			dockedItems: [
			    {
			        xtype: 'toolbar',  dock: 'top', layout: 'hbox', padding: '1 0 3 2', ui: 'footer',
			        items: [
			        	{	xtype: 'component_combo', itemId: 'opc_id', valueField: 'opc_id', disabled: true, hidden: true, },
			            {	xtype: 'component_combotop', itemId: 'partarancapi_code', valueField: 'partarancapi_code', displayField: 'partarancapi_code', editable: true, fieldLabel: '&nbsp;Capít.', listConfig: { cls: 'item00001', minWidth: 650 }, tpl:'<tpl for="."><div class="x-boundlist-item">{partarancapi_codename}&nbsp;</div></tpl>', width: 50, },
						{	xtype: 'component_textfieldtop', itemId: 'partaran_nombre', fieldCls: 'txt00001', fieldLabel: '&nbsp;Descripción', maxLength: 50, width: 250, },
			        ]
			    },	
				{
		            xtype: 'toolbar', dock: 'bottom', ui: 'footer',
		            items: [
		                { xtype: 'component_buttonNew' },
		                { xtype: 'component_buttonModify' },
		                { xtype: 'component_buttonQuery' },
		                { xtype: 'component_buttonDelete' },
		                { xtype: 'component_buttonPrinter' }            
		            ]
				},
				{	xtype: 'component_pagingtoolbar', itemId: 'pagPublic_partidas_arancelarias', }
			],
		},
		{	xtype: 'panel', border: false, height: '100%', width: '2%', },
		{
			xtype: 'tabpanel', itemId: 'tab01', height: '100%', plain: true, width: '40%',
			items: [
				{
					xtype: 'panel', itemId: 'tabPublic_partidas_arancelarias_tributos', height: '100%', layout: { type: 'fit', }, title: 'Aranceles',
					items: [
				        {
				            xtype: 'grid', itemId: 'grdPublic_partidas_arancelarias_tributos', autoHeight: true, columnLines: true, stripeRows: true,
				            columns: [
				            	{ 	xtype: 'rownumberer', width: 30 },
								{	dataIndex: 'year_id', text: 'Año', align: 'right', width: 60, },
								{	dataIndex: 'partarantrib_advalorem', text: 'Advalorem', align: 'right', renderer: Ext.util.Format.numberRenderer('000.000'), width: 70, },
								{	dataIndex: 'partarantrib_isc', text: 'ISC', align: 'right', renderer: Ext.util.Format.numberRenderer('000.000'), width: 70, },
								{	dataIndex: 'partarantrib_igv', text: 'IGV', align: 'right', renderer: Ext.util.Format.numberRenderer('000.000'), width: 70, },
								{	dataIndex: 'partarantrib_seguro', text: 'Seguro', align: 'right', renderer: Ext.util.Format.numberRenderer('000.000'), width: 70, },
								{	dataIndex: '', text: '', width: 70, },
							]
						},
					],
					dockedItems: [
						{
						    xtype: 'toolbar', dock: 'bottom', ui: 'footer',
						    items: [
						        { xtype: 'component_buttonNew' },
						        { xtype: 'component_buttonModify' },
						        { xtype: 'component_buttonDelete' },
						    ]
						},
						{	xtype: 'component_pagingtoolbar', itemId: 'pagPublic_partidas_arancelarias_tributos', disabled: true, },
					]
				},
				{
					xtype: 'panel', itemId: 'tabPublic_bienes_servs', height: '100%', layout: { type: 'fit', }, title: 'Mercancías',
					items: [
				        {
				            xtype: 'grid', itemId: 'grdPublic_bienes_servs', autoHeight: true, columnLines: true, stripeRows: true,
				            columns: [
				            	{ 	xtype: 'rownumberer', width: 30 },
								{	dataIndex: 'bs_codigo', text: 'Código', width: 80, },
								{	dataIndex: 'bs_nombre', text: 'Descripción', width: 350, },
								{	dataIndex: 'unimed_nombre', text: 'U.M.', width: 100, },
							]
						},
					],
					dockedItems: [
						{
						    xtype: 'toolbar', dock: 'bottom', ui: 'footer',
						    items: [
						        { xtype: 'component_buttonQuery' },
						        { xtype: 'component_buttonModify' },
						    ]
						},
						{	xtype: 'component_pagingtoolbar', itemId: 'pagPublic_bienes_servs', disabled: true, },
					]
				},
			]
		}
	]
});