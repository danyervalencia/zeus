Ext.define('Siace.view.operations.IndustriasEdit', {
	extend: 'Siace.view.WindowEdit',
	alias: 'widget.operations_industriasedit',
	width: 650,

	items: [
		{
			xtype: 'form', itemId: 'frmOperations_industrias',
			bodyPadding: 8, border: true, defaults: { labelWidth: 55, msgTarget: 'title', },
			items: [
				{   xtype: 'hiddenfield', itemId: 'indus_key', name: 'indus_key', },
				{	xtype: 'component_combo', itemId: 'alma_key', name: 'alma_key', valueField: 'alma_key', displayField: 'alma_nombre', fieldLabel: translations.usuario, allowBlank: false, anchor: '100%', },
				{
					xtype: 'container', defaults: {	anchor: '100%', }, margin: '0 0 5 0', layout: 'hbox',
					items: [
						{
							xtype : 'fieldcontainer', fieldLabel: translations.operations_industriasedit_cip_nro, labelClsExtra: 'lbl00001', labelWidth: 55, layout: 'hbox', width: 475,
							items : [
					            {	xtype: 'component_combotop', itemId: 'indus_serie', name: 'indus_serie', valueField: 'year_id', displayField: 'year_nro', disabled: true, listConfig: { cls: 'item00001', minWidth: 60, }, width: 60, },
					            { 	xtype: 'component_textfield', itemId: 'indus_nro', align: 'center', disabled: true, width: 60, },
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
					xtype: 'fieldcontainer', defaults: { hideLabel: 'true', },
					fieldLabel: translations.producto, labelClsExtra: 'lbl00001', layout: 'hbox',
					items: [
						{ 	xtype: 'hiddenfield', itemId: 'bs_key', name: 'bs_key', },
						{ 	xtype: 'hiddenfield', itemId: 'BS_CODIGO', name: 'BS_CODIGO', },
						{ 	xtype: 'component_textfieldtop', itemId: 'bs_codigo', name: 'bs_codigo', enableKeyEvents: true, maxLength: 15, width: 80, },
						{	xtype: 'component_button_imagesearch', itemId: 'btnBs_search', },
						{	xtype: 'displayfield', itemId: 'bs_nombre', name: 'bs_nombre', fieldCls: 'df00101', value: '' }
					]
				},
			    {
					xtype: 'grid', itemId: 'grdOperations_industrias_insumos',
					columnLines: true, height: 180,
					columns: [
						{	dataIndex: 'bs_codigo', text : translations.codigo, width: 80, },
						{	dataIndex: 'bs_nombre', text : translations.descripcion_insumo, flex: 1, },
						{	dataIndex: 'unimed_abrev', text : translations.unidad_medida_abrev, tooltip: translations.unidad_medida, width: 50, },
					],
					dockedItems: [
						{
				            xtype: 'toolbar', dock: 'bottom', //ui: 'footer',
				            items: [
				                {	xtype: 'button', itemId: 'btnAdd', iconCls: 'icon_Add', text: translations.agregar_insumo, },
				                {	xtype: 'button', itemId: 'btnSuppress', disabled: true, iconCls: 'icon_Suppress', text: translations.quitar_insumo, },
								{	xtype: 'tbfill', },
				                {	xtype: 'button', itemId: 'btnCoefAdd', disabled: true, iconCls: 'icon_Add', text: translations.agregar_coeficiente, },
				                {	xtype: 'button', itemId: 'btnCoefDel', disabled: true, iconCls: 'icon_Suppress', text: translations.quitar_coeficiente, },
				            ]
				        }
					]

				},
			    {
					xtype: 'grid', itemId: 'grdOperations_industrias_coeficientes',
					columnLines: true, height: 160, padding: '4 0 0 0',
					//selModel: {
            		//	selType: 'cellmodel'
        			//},
        			//store: 'operations.Industrias_Coeficientes',
					columns: [
						{	dataIndex: 'coef_nombre', text : translations.coeficiente, flex: 1, },
						{	dataIndex: 'induscoef_cantid', text : translations.cantidad, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000.00000000'), sortable: false,  width: 120,
							editor: { xtype: 'component_numberfield', itemId: 'induscoef_cantid', allowBlank: false, decimalPrecision: 8, maxLength: 12, maxValue: 999999, value: '', }
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