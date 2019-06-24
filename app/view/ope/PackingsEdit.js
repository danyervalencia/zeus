Ext.define('Siace.view.operations.PackingsEdit', {
	extend: 'Siace.view.WindowEdit',
	alias: 'widget.operations_packingsedit',
	width: 850,

	items: [
		{
			xtype: 'form', name: 'frmOperations_packings', bodyPadding: 6, border: true, defaults: { labelWidth: 60, msgTarget: 'title', },
			items: [
				{ 	xtype: 'hiddenfield', itemId: 'pack_key', name: 'pack_key', },
				{   xtype: 'component_combo', itemId: 'alma_key', name: 'alma_key', valueField: 'alma_key', displayField: 'alma_nombre', fieldLabel: translations.usuario, allowBlank: false, anchor: '100%', },
				{
					xtype: 'container',
					layout: 'hbox', margin: '0 0 5 0', width: '100%',
					items: [
						{
							xtype : 'fieldcontainer', fieldLabel: translations.documento, labelClsExtra: 'lbl00001', labelWidth: 60, layout: 'hbox', flex: 1,
							items : [
								{   xtype: 'component_combotop', itemId: 'doc_id', valueField: 'doc_id', displayField: 'doc_nombre', store: ['Packing List'], width: 150, },
					            {
					                xtype: 'component_textfieldtop', itemId: 'pack_serie', name: 'pack_serie',
					                disabled: true, maxLength: 5, width: 60,
					            },
					            {
					                xtype: 'component_textfieldtop', itemId: 'pack_nro', name: 'pack_nro',
					                maxLength: 10, width: 100,
					            },
								{   xtype: 'hiddenfield', itemId: 'pack_pdf', name: 'pack_pdf', },
								{   xtype: 'component_filefield', itemId: 'ffiPack_pdf', name: 'ffiPack_pdf' },
								{
									xtype: 'component_button_imagepdf', itemId: 'btnPack_pdfDelete',
									hidden: true, iconCls: 'icon_Delete_90',
								},
								{
									xtype: 'component_button_imagepdf', itemId: 'btnPack_pdfDownload',
									disabled: true, margin: '0 0 0 0',
								}					            
					        ]
					    },
						{
							xtype : 'fieldcontainer', fieldLabel: translations.fecha,
							labelClsExtra: 'lbl00001', labelWidth: 40, layout: 'hbox', width: 145,
							items : [
								{	xtype: 'component_datefield', itemId: 'pack_fecha', name: 'pack_fecha', }
							]
						}
			        ]
			    },
			    {
					xtype: 'fieldcontainer', fieldLabel: translations.proveedor,
					labelClsExtra: 'lbl00001', layout: 'hbox',
					items: [
						{ 	xtype: 'hiddenfield', itemId: 'pers_key', name: 'pers_key', },
						{   xtype: 'hiddenfield', itemId: 'PERS_RUC', name: 'PERS_RUC', },
						{
							xtype: 'component_textfieldtop', itemId: 'pers_ruc', name: 'pers_ruc',
							enableKeyEvents: true, maxLength: 15,
						},
						{	xtype: 'component_button_imagesearch', itemId: 'btnPers_search', },
						{	xtype: 'displayfield', itemId: 'pers_nombre', name: 'pers_nombre', fieldCls: 'df00101', }
					]
				},
				{
					xtype: 'container',
					layout: 'hbox', margin: '0 0 5 0', width: '100%',
					items: [
						{
							xtype : 'fieldcontainer', fieldLabel: 'Pallet',
							labelClsExtra: 'lbl00001', labelWidth: 60, layout: 'hbox', flex: 1,
							items : [
								{   
									xtype: 'component_combotop', itemId: 'pall_id',
									valueField: 'pall_id', displayField: 'pall_codigo',
									tpl:'<tpl for="."><div class="x-boundlist-item">{pall_codigo}&nbsp;</div></tpl>',
									listConfig: { cls: 'item00001', minWidth: 50, }, width: 50,
								},
								{	xtype: 'component_button_imagenew', itemId: 'btnPall_new', iconCls: 'icon_Add_90' },
								{	xtype: 'displayfield', itemId: 'pall_detalle', fieldCls: 'df00101', }								
					        ]
					    },
						{
							xtype : 'container',
							layout: { type: 'hbox', pack: 'end'}, width: 320,
							items : [
				                {
				                    xtype: 'button', itemId: 'btnAdd', text: translations.agregar_item,
				                    iconCls: 'icon_Add_90', margin: '0 4 0 0', padding: '2 2 2 6'
				                },
				                {
				                    xtype: 'button', itemId: 'btnSuppress', text: translations.quitar_item,
				                    disabled: true, iconCls: 'icon_Suppress_90', padding: '2 2 2 6'
				                },
				                {
				                    xtype: 'button', itemId: 'btnReject', text: translations.rechazar + ' Item',
				                    disabled: true, iconCls: 'icon_Reject_90', padding: '2 2 2 6', hidden: true,
				                },
				            ]
				        }
			        ]
			    },
			    {
					xtype: 'grid', itemId: 'grdOperations_packings_det',
					columnLines: true, height: 300, selType: 'cellmodel',
				    plugins: [
				        Ext.create('Ext.grid.plugin.CellEditing', {
				            clicksToEdit: 1,
				        })
				    ],
					viewConfig: {
						//stripeRows: true, // alterna el color de fondo de las celdas
				    	getRowClass: function(record, rowIndex, rowParams, store){
				        	return (record.get('fase_id')*1 == 320 ? 'mx-letra-verde' : (record.get('fase_id')*1 == 310 ? 'mx-letra-rojo':'mx-letra-negro'));
				    	}
					},				    
					columns: [
						{
							xtype: 'actioncolumn', itemId: 'acOperations_packings_det', align: 'center', width: 25, hidden: true,
							items: [
								{
		        					tooltip: '<b>Vobo</b>, Item Packing List.',
		        					getClass: function(value, metadata, record) {
										if ( record.get('fase_id') == '320' ) { return 'x-hide-display'; }
										else { return 'icon_Vobo_80'; }
		        					}
		    					},
								{
		        					tooltip: '<b>Quitar Vobo</b>, Item Packing List.',
		        					getClass: function(value, metadata, record) {
										if ( record.get('fase_id') == '320' ) { return 'icon_Return_80'; }
										else { return 'x-hide-display'; }
		        					}
		    					},
		    				]
						},				
						{
							dataIndex: 'pall_codigo', text : 'Pallet',
							width: 45,
						},
						{
							dataIndex: 'bs_codigo', text : translations.codigo,
							width: 100,
		            		renderer: function(value, metaData, record, rowIdx, colIdx, store, view) {
		                		return (record.get('bsalma_code') == '' ? record.get('bs_codigo') : record.get('bsalma_code'));
		            		},
						},
						{
							dataIndex: 'bs_nombre', text: translations.descripcion_mercancia,
							width: 430,
						},
						{
							dataIndex: 'packdet_cantid', text: translations.cantidad,
							align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.000'), width: 90,
				            field: {
								xtype: 'component_numberfield', allowBlank: false, decimalPrecision: 3, maxLength: 12, maxValue: 99999999, value: ''
				            }
						},						
						{
							dataIndex: 'unimed_abrev', text: translations.unidad_medida_siglas,
							tooltip: translations.unidad_medida, width: 50,
						},
						{
							dataIndex: 'packdet_peso', text: translations.peso,
							align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.000'), width: 90,
				            field: {
								xtype: 'component_numberfield',
								allowBlank: false, decimalPrecision: 3, maxLength: 12, maxValue: 999, value: ''
				            }
						},
						{
							dataIndex: 'nand_codigo', text: translations.partida,
							width: 90,
						},						
					],
					/*dockedItems: [
						{
				            xtype: 'toolbar', dock: 'bottom',  //ui: 'footer',
				            items: [
				                {
				                    xtype: 'button', itemId: 'btnAdd', text: translations.agregar_item,
				                    iconCls: 'icon_Add',
				                },
				                {
				                    xtype: 'button', itemId: 'btnSuppress', text: translations.quitar_item,
				                    disabled: true, iconCls: 'icon_Suppress',
				                },
				                {
				                    xtype: 'button', itemId: 'btnReject', text: translations.rechazar + ' Item',
				                    disabled: true, iconCls: 'icon_Reject', visible: false,
				                },
				            ]
				        }
					]*/

				},
			]
		}
	],
});