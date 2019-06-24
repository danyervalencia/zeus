Ext.define('Siace.view.operations.SalidasDocuments', {
	extend: 'Siace.view.WindowBrowse',
	alias: 'widget.operations_salidasdocuments',
	closable: true, height: 300, width: 400,

	items: [
		{
			xtype: 'form', itemId: 'frmOperations_salidas',
			border: false, layout: { type: 'fit' },
			items: [
				{
					xtype: 'grid', itemId: 'grdOperations_salidas_documentos',
					columnLines: true, height: '100%', width: '100%',
					columns: [
					   	{ 	xtype: 'rownumberer', width: 30, },
						{
							dataIndex: '_documento', text : translations.documento,
							flex: 1,
						},
						{
							dataIndex: '_fecha', text: translations.fecha,
							align: 'center', sortable : true, renderer: Ext.util.Format.dateRenderer('d/m/Y'), width: 85,
						},
						{
							xtype: 'actioncolumn', itemId: 'acOperations_salidas_documentos', align: 'center', width: 30,
							items: [
								{
		        					tooltip: '<b>DESCARGAR </b>, archivo adjunto.',
		        					getClass: function(value, metadata, record) {
										if ( record.get('_file') == '' ) { return 'x-hide-display'; }
										else { return 'icon_Download'; }
		        					}
		    					},
								{
		        					tooltip: '<b>VISUALIZAR </b>, impresión PDF.',
		        					getClass: function(value, metadata, record) {
										if ( record.get('_file') == '' && record.get('_record_field') == '' ) { return 'icon_Pdf'; }
										else { return 'x-hide-display'; }
		        					}
		    					},
		    				]
						}
					]
				}
			],
			dockedItems: [
	    		{
	        		xtype: 'toolbar', dock: 'top', layout: 'hbox', padding: '1 0 3 2', ui: 'footer',
	        		items: [
	        			{ xtype: 'displayfield', itemId: 'documento', fieldCls: 'df00104', }
	        		]
	        	}
	        ]
		}
	],
});