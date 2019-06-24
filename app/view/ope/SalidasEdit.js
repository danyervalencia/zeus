Ext.define('Siace.view.operations.SalidasEdit', {
	extend: 'Siace.view.WindowEdit',
	alias: 'widget.operations_salidasedit',
	width: 900,

	items: [
		{
			xtype: 'form', name: 'frmOperations_salidas', bodyPadding: 8, border: true, defaults: { labelWidth: 55, },
			items: [
				{	xtype: 'hiddenfield', itemId: 'sal_key', name: 'sal_key', },
				{	xtype: 'component_combo', itemId: 'alma_key', name: 'alma_key', valueField: 'alma_key', displayField: 'alma_nombre', allowBlank: false, anchor: '100%', fieldLabel: translations.usuario, },
				{
					xtype: 'container', defaults: {	anchor: '100%', }, margin: '0 0 5 0', layout: 'hbox',
					items: [
						{
							xtype : 'fieldcontainer', fieldLabel: translations.operations_industriasedit_cip_nro,
							labelClsExtra: 'lbl00001',
							labelWidth: 55,
							layout: 'hbox',
							width: 475,
							items : [
					            {
					                xtype: 'component_combo',
					                name: 'sal_serie',
					                valueField: 'year_id',
					                displayField: 'year_nro',
					                disabled: true,
					                listConfig: { cls: 'item00001', minWidth: 60, },
					                width: 60,
					            },
					            {
					                xtype: 'textfield',
					                name: 'sal_nro',
					                disabled: true,
					                enforceMaxLength: true,
					                fieldCls: 'txt00001',
					                maxLength: 20,
					                width: 60,
					            },
					        ]
					    },
						{
							xtype : 'fieldcontainer',
							fieldLabel: translations.fecha,
							labelClsExtra: 'lbl00001',
							labelWidth: 40,
							layout: 'hbox',
							items : [
								{
							        xtype: 'component_datefield',
							        name: 'sal_fecha',
							        disabled: true,
							    }
							]
						}
			        ]
			    },
			    {
					xtype: 'fieldcontainer',
					defaults: {
					    hideLabel: 'true',
					},
					fieldLabel: translations.producto,
					labelClsExtra: 'lbl00001',
					layout: 'hbox',
					items: [
						{
							xtype: 'hiddenfield',
							name: 'bs_key',
						},					
						{
							xtype: 'hiddenfield',
							name: 'BS_CODIGO',
						},
						{
							xtype: 'textfield',
							name: 'bs_codigo',
							enableKeyEvents: true,
							enforceMaxLength: true,
							fieldCls: 'txt00001',
							margin: '0 4 0 0',
							maxLength: 15,
							width: 80,
						},
						{
							xtype: 'component_button_imagesearch',
							name: 'btnBs_search',
						},
						{
							xtype: 'displayfield',
							name: 'bs_nombre',
							fieldCls: 'df00101',
						}
					]
				},
			    {
					xtype: 'grid',
					name: 'grdOperations_salidas_det',
					columnLines: true,
					height: 180,
					columns: [
						{
							dataIndex: 'bs_codigo',
							text : translations.codigo,
							width: 80,
						},
						{
							dataIndex: 'bs_nombre',
							text : translations.descripcion,
							flex: 1,
						},
						{
							dataIndex: 'unimed_abrev',
							text : translations.unidad_medida_abrev,
							tooltip: translations.unidad_medida,
							width: 50,
						},
						{
							dataIndex: 'saldet_cantid',
							text : translations.cantidad,
							//tooltip: translations.unidad_medida,
							width: 80,
						},
						{
							dataIndex: 'saldet_cifuni',
							text : translations.cantidad,
							//tooltip: translations.unidad_medida,
							width: 80,
						},
						{
							dataIndex: 'saldet_ciftot',
							text : translations.cantidad,
							//tooltip: translations.unidad_medida,
							width: 80,
						},
					],
					dockedItems: [
						{
				            xtype: 'toolbar',
				            dock: 'bottom',
				            //ui: 'footer',
				            items: [
				                {
				                    xtype: 'button',
				                    name: 'btn0013',
				                    iconCls: 'icon_Add',
				                    text: translations.agregar_insumo,
				                },
				                {
				                    xtype: 'button',
				                    name: 'btn0014',
				                    disabled: true,
				                    iconCls: 'icon_Suppress',
				                    text: translations.quitar_insumo,
				                },
				            ]
				        }
					]

				},
			]
		}
	],
});