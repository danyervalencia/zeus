Ext.define('Siace.view.operations.ActividadesSearch', {
	extend: 'Siace.view.WindowSearch',
	alias: 'widget.operations_actividadessearch',
	width: 500,

	items: [
		{
			xtype: 'form', itemId: 'frmOperations_actividades',
			bodyPadding: 0, layout: 'fit',
			items: [
		        {
		            xtype: 'grid', itemId: 'grdOperations_actividades',
		            border: false, columnLines: true, height: 320,
		            columns: [
		                {	dataIndex: 'activ_codigo', text: translations.codigo, width: 50, },
		                {	dataIndex: 'activ_nombre', text: translations.descripcion, width: 400, },
		                {   dataIndex: 'parent_nombre', text: '', width: 400, },
		            ]
		        },
			],
			dockedItems: [
	    		{
	        		xtype: 'toolbar', dock: 'top', layout: 'hbox', padding: '1 0 3 1', ui: 'footer',
	        		items: [
						{
			                xtype: 'component_textfieldtop', itemId: 'activ_nombre',
			                fieldLabel: '&nbsp;'+translations.descripcion, maxLength: 50, width: 250,
			            },
	        		]
	    		},
		        {	xtype: 'component_pagingtoolbar', itemId: 'pgtOperations_actividades', }
			]
		}
	]
});