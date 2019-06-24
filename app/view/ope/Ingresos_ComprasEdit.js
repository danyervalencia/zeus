Ext.define('Siace.view.operations.Ingresos_ComprasEdit', {
	extend: 'Siace.view.WindowEdit',
	alias: 'widget.operations_ingresos_comprasedit',
	width: 800,

	items: [
		{
			xtype: 'form', bodyPadding: 8, border: false, defaults: { labelWidth: 60, }, layout: { type: 'vbox' },
			items: [
				{	xtype: 'hiddenfield', itemId: 'ingcomp_id',  name: 'ingcomp_id', },
				{	xtype: 'hiddenfield', itemId: 'ingcomp_key',  name: 'ingcomp_key', },
				{	xtype: 'component_combo', itemId: 'alma_key', name: 'alma_key', valueField: 'alma_key', displayField: 'alma_nombre', fieldLabel: 'Usuario', allowBlank: false, width: 415, },
				{
					xtype : 'fieldcontainer', fieldLabel: 'Documento', labelClsExtra: 'lbl00001', layout: 'hbox', width: '100%',
					items : [
				        {	xtype: 'component_combotop', itemId: 'doc_id', name: 'doc_id', valueField: 'doc_id', displayField: 'doc_nombre', width: 130, },
					    { 	xtype: 'component_textfieldtop', itemId: 'ingcomp_serie', width: 60, },
					    { 	xtype: 'component_textfieldtop', itemId: 'ingcomp_nro', width: 100, },
						{   xtype: 'hiddenfield', itemId: 'ingcomp_pdf', name: 'ingcomp_pdf', },
						{   xtype: 'component_filefield', itemId: 'ffiIngcomp_pdf', name: 'ffiIngcomp_pdf' },
						{	xtype: 'component_button_imagepdf', itemId: 'btnIngcomp_pdfDelete', hidden: true, iconCls: 'icon_Delete_90', },
						{	xtype: 'component_button_imagepdf', itemId: 'btnIngcomp_pdfDownload', disabled: true, margin: '0 0 0 0', },
					    { 	xtype: 'displayfield', flex: 1, },
						{	xtype: 'component_datefield', itemId: 'ingcomp_fecha', name: 'ingcomp_fecha', fieldLabel: 'Fecha', allowBlank: false, labelWidth: 45, width: 150, }
					]
				},
			    {
					xtype: 'fieldcontainer', fieldLabel: 'Proveedor', labelClsExtra: 'lbl00001', layout: { type: 'hbox' }, 
					items: [
						{ 	xtype: 'hiddenfield', itemId: 'pers_key', },
						{   xtype: 'hiddenfield', itemId: 'PERS_RUC', },
						{	xtype: 'component_textfieldtop', itemId: 'pers_ruc', enableKeyEvents: true, maxLength: 11, },
						{	xtype: 'component_button_imagesearch', itemId: 'btnPers_search', },
						{	xtype: 'displayfield', itemId: 'pers_nombre', name: 'pers_nombre', fieldCls: 'df00101', }
					]
				},
			    {
					xtype: 'fieldcontainer', fieldLabel: 'Operador', labelClsExtra: 'lbl00001', layout: { type: 'hbox' }, 
					items: [
						{ 	xtype: 'hiddenfield', itemId: 'impor_key', },
						{   xtype: 'hiddenfield', itemId: 'IMPOR_RUC', },
						{	xtype: 'component_textfieldtop', itemId: 'impor_ruc', enableKeyEvents: true, maxLength: 11, },
						{	xtype: 'component_button_imagesearch', itemId: 'btnImpor_search', },
						{	xtype: 'displayfield', itemId: 'impor_nombre', name: 'impor_nombre', fieldCls: 'df00101', }
					]
				},

				{
					xtype: 'tabpanel', activeTab: 0, plain: true, width: '100%',
					items: [
						{
							xtype: 'panel', itemId: 'panDetalle', title: 'Detalle de Compra', height: 200,
							items: [
							    {
									xtype: 'grid', itemId: 'grdOperations_ingresos_compras_det', columnLines: true, height: 200,
									columns: [
										{	dataIndex: 'bs_codigo', text : translations.codigo, sortable: false, width: 80, },
										{	dataIndex: 'bs_nombre', text : translations.descripcion, flex: 1, sortable: false, },
										{
											dataIndex: 'ingcompdet_cantid', text: translations.cantidad, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000.00'), sortable: false, width: 80,
								            editor: { xtype: 'component_numberfield', itemId: 'ingcompdet_cantid', allowBlank: false, decimalPrecision: 2, maxLength: 9, maxValue: 999999, value: '', }
										},
										{	
											dataIndex: 'ingcompdet_preuni', text: translations.precio_unitario_abrev, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), sortable: false, width: 90, 
								            editor: { xtype: 'component_numberfield', itemId: 'ingcompdet_preuni', allowBlank: false, decimalPrecision: 2, maxLength: 9, maxValue: 999999, value: '', }
										},
										{	dataIndex: 'ingcompdet_pretot', text: 'SubTotal', align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), sortable: false, width: 95, },
									],
								},
							]
						},
						{
							xtype: 'panel', itemId: 'pan', title: 'Comentario', bodyPadding: 8, height: 200, width: '100%', layout: 'vbox',
							items: [
								{	xtype: 'component_textarea', itemId: 'ingcomp_observ', name: 'ingcomp_observ', fieldLabel: 'Comentario', labelWidth: 65, width: '100%', height: 120 }
							],
						}
					]
				},
				{
					xtype : 'container', layout: 'hbox', width: '100%',
					items : [
				        {   
							xtype : 'container', layout: 'hbox', width: 200, margin: '3 0 0 0',
							items: [
				        		{	xtype: 'button', itemId: 'btnAdd', text: 'Agregar', iconCls: 'icon_Add', margin: '0 5', padding: '2 6 2 8' },
				        		{   xtype: 'button', itemId: 'btnSuppress', text: 'Eliminar', disabled: true, iconCls: 'icon_Suppress', padding: '2 6 2 8', },
				        	]
				        },
						{   xtype: 'displayfield', flex: 1, },
						{   xtype: 'fieldcontainer', fieldLabel: translations.importe, margin: '3 0 0 0',
							labelClsExtra: 'lbl00001', labelWidth: 50, layout: { type: 'hbox' },
							items : [
								{	xtype: 'component_combo', itemId: 'mone_id', name: 'mone_id', store: 'array.Monedas', valueField: 'mone_id', displayField: 'mone_nombre', disabled: true, margin: '0 3', width: 130, },
								{ 	xtype: 'component_currencyfield', itemId: 'ingcomp_monto', name: 'ingcomp_monto', disabled: true, value: '', width: 96, }
						    ]
						}
			        ]
			    },
			]
		}
	],

	__winPPS: '', __winPPIS: '', __winPBSS: '',
	setWinPPS: function(pcWinPPS) { this.__winPPS = pcWinPPS; },
	getWinPPS: function() { return this.__winPPS; },
	setWinPPIS: function(pcWinPPIS) { this.__winPPIS = pcWinPPIS; },
	getWinPPIS: function() { return this.__winPPIS; },
	setWinPBSS: function(pcWinPBSS) { this.__winPBSS = pcWinPBSS; },
	getWinPBSS: function() { return this.__winPBSS; },
});