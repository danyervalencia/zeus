Ext.define('Siace.view.operations.ProduccionesEdit', {
	extend: 'Siace.view.WindowEdit',
	alias: 'widget.operations_produccionesedit',
	width: 650,

	items: [
		{
			xtype: 'form', itemId: 'frmOperations_producciones',
			bodyPadding: 8, border: true, defaults: { labelWidth: 55, },
			items: [
				{  	xtype: 'hiddenfield', itemId: 'prdcc_key', name: 'prdcc_key', },
				{	xtype: 'component_combo', itemId: 'alma_key', name: 'alma_key', valueField: 'alma_key', displayField: 'alma_nombre', fieldLabel: translations.usuario, allowBlank: false, anchor: '100%', },
				{
					xtype: 'container', defaults: {	anchor: '100%', }, margin: '0 0 5 0', layout: 'hbox',
					items: [
						{
							xtype : 'fieldcontainer', fieldLabel: translations.informe, labelClsExtra: 'lbl00001', labelWidth: 55, layout: 'hbox', width: 475,
							items : [
					            {	xtype: 'component_combotop', itemId: 'prdcc_serie', name: 'prdcc_serie', valueField: 'year_id', displayField: 'year_nro', disabled: true, listConfig: { cls: 'item00001', minWidth: 60, }, width: 60, },
					            { 	xtype: 'component_textfield', itemId: 'prcc_nro', align: 'center', disabled: true, width: 60, },
					        ]
					    },
						{
							xtype : 'fieldcontainer', fieldLabel: translations.fecha, labelClsExtra: 'lbl00001', labelWidth: 40, layout: 'hbox',
							items : [
								{ 	xtype: 'component_datefield', itemId: 'indus_fecha', name: 'indus_fecha', disabled: true, }
							]
						}
			        ]
			    },
				{
					xtype: 'component_combo', itemId: 'indus_key',name: 'indus_key', valueField: 'indus_key', displayField: 'indus_documento', allowBlank: false, fieldLabel: translations.operations_produccionesedit_cip_nro, width: 200,
					tpl:'<tpl for="."><div class="x-boundlist-item">{indus_documento}&nbsp;</div></tpl>',
				},
			    {
					xtype: 'grid', itemId: 'grdOperations_industrias_productos',
					columnLines: true, height: 65,
					columns: [
						{ 	xtype: 'rownumberer', text: 'N°',  },
						{	dataIndex: 'bs_codigo', text : translations.codigo, width: 80, },
						{	dataIndex: 'bs_nombre', text : translations.operations_produccionesedit_grid_header_descripcion_producto, flex: 1, },
						{	dataIndex: 'indusprod_cantid', text : translations.cantidad, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.000'), width: 120,
							editor: { xtype: 'component_numberfield', itemId: 'indusprod_cantid', allowBlank: false, decimalPrecision: 3, maxLength: 15, maxValue: 999999999, value: '', }
						},
					],
				    selType: 'rowmodel',
				    plugins: [
				        Ext.create('Ext.grid.plugin.CellEditing', { clicksToEdit: 1, })
				    ],
				},
			    {
					xtype: 'grid', itemId: 'grdOperations_industrias_insumos',
					columnLines: true, height: 180, padding: '4 0 0 0',
					columns: [
						{	dataIndex: 'bs_codigo', text : translations.codigo, width: 80, },
						{	dataIndex: 'bs_nombre', text : translations.insumos_opcionales, flex: 1, },
						{ 	dataIndex: 'indusinsu_cantid', text : translations.cantidad, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.000'), width: 120,
						    editor: { xtype: 'component_numberfield', itemId: 'indusinsu_cantid', decimalPrecision: 3, maxLength: 15, maxValue: 999999999, value: '', }
						},
					],
				    selType: 'cellmodel',
				    plugins: [
				        Ext.create('Ext.grid.plugin.CellEditing', { clicksToEdit: 1, })
				    ],
				}
			]
		}
	],
});