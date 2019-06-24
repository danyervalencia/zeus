Ext.define('Siace.view.operations.Industrias_InsumosWindowOptional', {
	extend: 'Siace.view.WindowBrowse',
	alias: 'widget.operations_industrias_insumoswindowoptional',
	//icon: 'resources/icons/btnAccess.png', 
	width: 600,

	items: [
		{
			xtype: 'form', itemId: 'frmPublic_industrias_insumos', border: false, layout: 'vbox',
		    items: [
			    {
			        xtype: 'toolbar', layout: 'vbox', padding: '1 0 3 2', ui: 'footer', width: '100%',
			        items: [
						{	xtype: 'hiddenfield', itemId: 'indus_key' },
						{
							xtype: 'container', layout: 'hbox', width: '100%',
						    items: [
								{   xtype: 'displayfield', itemId: 'alma_nombre', name: 'alma_nombre', 
								    fieldLabel: 'Usuario', fieldCls: 'df00104', labelClsExtra: 'lbl00101', labelWidth: 110, padding: '0 0 0 0', width: 320,
								},
							]
						},
						{   xtype: 'displayfield', itemId: 'bs_nombre', name: 'bs_nombre', 
						    fieldLabel: 'Producto', fieldCls: 'df00104', labelClsExtra: 'lbl00101', labelWidth: 110, padding: '-4 0 -2 0',
						},
					]
			    },
		        {
		            xtype: 'grid', itemId: 'grdOperations_industrias_insumos',
		            autoHeight: true, columnLines: true, height: 200, stripeRows: true, width: '100%',
					viewConfig: {
				    	getRowClass: function(record, rowIndex, rowParams, store){
				        	return (record.get('indusinsu_estado') == '0' ? 'mx-letra-rojo' : 'mx-letra-negro');
				    	}
					},		            
		            columns: [
		            	{ 	xtype: 'rownumberer', width: 30, },
						{	dataIndex: 'bs_codigo', text: translations.codigo, width: 80, },
						{   dataIndex: 'bs_nombre', text: translations.descripcion_insumo, flex: 1, },
						{	dataIndex: 'unimed_abrev', text: translations.unidad_medida_abrev, width: 40 },
					],
				},

				{
		            xtype: 'toolbar', dock: 'bottom', ui: 'footer',
		            items: [
		                { xtype: 'button', itemId: 'btnAdd', iconCls: 'icon_Add', text: translations.agregar_insumo, },
		                { xtype: 'component_buttonExit', disabled: false, },
		            ]
				},				
			],
		}
	]
});