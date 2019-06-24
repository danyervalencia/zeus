Ext.define('Siace.view.treasury.VentasEdit', {
	extend: 'Siace.view.WindowEdit',
	alias: 'widget.treasury_ventasedit',
	width: 800,

	items: [
		{
			xtype: 'form', bodyPadding: 8, border: false, layout: { type: 'vbox' },
			items: [
				{	xtype: 'hiddenfield', itemId: 'vent_id',  name: 'vent_id', },
				{	xtype: 'hiddenfield', itemId: 'vent_key',  name: 'vent_key', },
				{
					xtype : 'fieldcontainer', fieldLabel: translations.documento, labelClsExtra: 'lbl00001', labelWidth: 60, layout: 'hbox', width: '100%',
					items : [
				        {	xtype: 'component_combotop', itemId: 'doc_id', name: 'doc_id', store: 'array.DocumentosVenta', valueField: 'doc_id', displayField: 'doc_nombre', disabled: true, width: 125, },
					    {	xtype: 'component_combotop', itemId: 'vent_serie', valueField: 'docser_serie', displayField: 'docser_format', disabled: true, listConfig: { cls: 'item00001', minWidth: 60, }, width: 60, },
					    { 	xtype: 'component_textfield', itemId: 'vent_nro', align: 'center', disabled: true, width: 80, },
					    { 	xtype: 'displayfield', flex: 1, },
						{	xtype: 'component_datefield', itemId: 'vent_fecha', name: 'vent_fecha', fieldLabel: 'Fecha', allowBlank: false, labelWidth: 45, width: 150, }
					]
				},
			    {
					xtype: 'fieldcontainer', fieldLabel: translations.cliente, labelClsExtra: 'lbl00001', labelWidth: 60, layout: { type: 'hbox' },
					items: [
				        {	xtype: 'component_combotop', itemId: 'tipdocident_id', name: 'tipdocident_id', store: 'array.Tipos_Documentos_IdentidadVenta', valueField: 'tipdocident_id', displayField: 'tipdocident_abrev', disabled: true, width: 125, },
					    {
							xtype: 'container', itemId: 'cntPersonas', layout: { type: 'hbox' },
							items: [
								{ 	xtype: 'hiddenfield', itemId: 'pers_key', },
								{   xtype: 'hiddenfield', itemId: 'PERS_RUC', },
								{	xtype: 'component_textfieldtop', itemId: 'pers_ruc', enableKeyEvents: true, maxLength: 11, },
								{	xtype: 'component_button_imagesearch', itemId: 'btnPers_search', },
								{	xtype: 'displayfield', itemId: 'pers_nombre', name: 'pers_nombre', fieldCls: 'df00101', }
							]
						},
					    {
							xtype: 'container', itemId: 'cntIndividuos', hidden: true, layout: { type: 'hbox' },
							items: [
								{ 	xtype: 'hiddenfield', itemId: 'indiv_key', },
								{   xtype: 'hiddenfield', itemId: 'INDIV_DNI', },
								{	xtype: 'component_textfieldtop', itemId: 'indiv_dni', enableKeyEvents: true, maxLength: 12, },
								{	xtype: 'component_button_imagesearch', itemId: 'btnIndiv_search', },
								{	xtype: 'displayfield', itemId: 'indiv_apenom', name: 'indiv_apenom', fieldCls: 'df00101', }
							]
						},
					]
				},
				{
					xtype : 'fieldcontainer', fieldLabel: translations.tipo_pago,
					labelClsExtra: 'lbl00001', labelWidth: 60, layout: 'hbox', width: '100%',
					items : [
				        { 	xtype: 'component_combotop', itemId: 'tippag_id', name: 'tippag_id', valueField: 'tippag_id', displayField: 'tippag_nombre', width: 125, },
				        { 	xtype: 'displayfield', flex: 1, },
				        { 	xtype: 'component_combo', itemId: 'entibanc_id', name: 'entibanc_id', valueField: 'tabgen_id', displayField: 'tabgen_nombre', fieldLabel: translations.entidad_bancaria_abrev, hidden: true, labelWidth: 60, margin: '0 20 0 0', width: 255, },
				        {	xtype: 'component_textfield', itemId: 'cheq_nro', name: 'cheq_nro', fieldLabel: 'N° Cheque', hidden: true, labelWidth: 60, maxLength: 10, width: 165 },
				        { 	xtype: 'component_combo', itemId: 'cuebanc_key', name: 'cuebanc_key', valueField: 'cuebanc_key', displayField: 'cuebanc_nro', disabled: true, fieldLabel: 'N° '+translations.cuenta, hidden: true, labelWidth: 60, margin: '0 20 0 0', width: 255, },
				        {	xtype: 'component_textfield', itemId: 'oper_nro', name: 'oper_nro', fieldLabel: 'N° Oper.', hidden: true, labelWidth: 60, maxLength: 15, width: 165 },
			        ]
			    },
				{
					xtype: 'tabpanel', activeTab: 0, plain: true, width: '100%',
					items: [
						{
							xtype: 'panel', itemId: 'panDetalle', title: translations.detalle_venta,  height: 200,
							items: [
							    {
									xtype: 'grid', itemId: 'grdTreasury_ventas_det', columnLines: true, height: 200,
									columns: [
										{	dataIndex: 'bs_codigo', text : translations.codigo, sortable: false, width: 80, },
										{	dataIndex: 'bs_nombre', text : translations.descripcion, flex: 1, sortable: false, },
										{
											dataIndex: 'ventdet_cantid', text: translations.cantidad, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000.00'), sortable: false, width: 80,
								            editor: { xtype: 'component_numberfield', itemId: 'ventdet_cantid', allowBlank: false, decimalPrecision: 2, maxLength: 9, maxValue: 999999, value: '', }
										},
										{	
											dataIndex: 'ventdet_preuni', text: translations.precio_unitario_abrev, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), sortable: false, width: 90, 
								            editor: { xtype: 'component_numberfield', itemId: 'ventdet_preuni', allowBlank: false, decimalPrecision: 2, maxLength: 9, maxValue: 999999, value: '', }
										},
										{	dataIndex: 'ventdet_pretot', text: 'SubTotal', align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), sortable: false, width: 95, },
									],
								},
							]
						},
						{
							xtype: 'panel', itemId: 'panDet_referencias', title: translations.datos_complementarios, disabled: true, height: 200, 
							items: [
							    {
									xtype: 'grid', itemId: 'grdTreasury_ventas_det_referencias', columnLines: true, stripeRows: true, height: 200,
									columns: [
						                {	dataIndex: 'tablex_data0', width: 160 },
						                {   dataIndex: 'tablex_data1', width: 50, },
						                {	dataIndex: 'tablex_data2', width: 100, },
						                {	dataIndex: 'tablex_data3', width: 70, },
						                {	dataIndex: 'tablex_data4', width: 150, },
						                {	dataIndex: 'tablex_data5', width: 300, },
									],
								},
							],
						    dockedItems: [
						        {
						            xtype: 'toolbar', dock: 'right', ui: 'footer',
						            items: [
						            	{ xtype: 'button', text: translations.buscar, itemId: 'btnRef_search', iconAlign: 'top', iconCls: 'icon_Search', height: '44', padding: '6 4 0 6' },
						            	{ xtype: 'button', text: translations.excluir, itemId: 'btnRef_suppress', iconAlign: 'top', iconCls: 'icon_Suppress', disabled: true, height: '44', padding: '6 4 0 6' },
						            	{ xtype: 'button', text: translations.nuevo, itemId: 'btnRef_new', iconAlign: 'top', iconCls: 'icon_New', height: '44', padding: '6 4 0 6' },
						            ]
						        },
						    ]
						},
						{
							xtype: 'panel', itemId: 'panReferencias', title: 'Referencia', bodyPadding: 8, height: 200, width: '100%', layout: 'vbox',
							items: [
								{	xtype: 'hiddenfield', itemId: 'ref_tablex', name: 'ref_tablex' },
								{	xtype: 'hiddenfield', itemId: 'ref_tablex_key', name: 'ref_tablex_key' },
								{
									xtype: 'container', itemId: 'cntReferencias', hidden: true, layout: 'hbox', width: '100%',
								    items: [
										{   xtype: 'displayfield', itemId: 'ref_tablex_documento', fieldLabel: 'Documento', fieldCls: 'df00104', labelClsExtra: 'lbl00101', labelWidth: 65, width: 170, },
										{   xtype: 'displayfield', itemId: 'ref_tablex_fecha', fieldCls: 'df00104', labelClsExtra: 'lbl00101', width: 80, },
										{   xtype: 'displayfield', itemId: 'ref_unimed_nombre', fieldCls: 'df00104', labelClsExtra: 'lbl00101', width: 90, },
										{   xtype: 'displayfield', flex: 1 },
										{   xtype: 'displayfield', itemId: 'ref_tablex_monto', fieldLabel: 'Importe', fieldCls: 'df00106', labelAlign: 'right', labelClsExtra: 'lbl00103', labelWidth: 80, width: 150 },
									]
								},
								{
									xtype: 'container', itemId: 'cntReferencias_data', hidden: true, layout: 'hbox', width: '100%',
								    items: [
										{	xtype: 'component_datefield', itemId: 'ref_tablex_fechaini', name: 'ref_tablex_fechaini', disabled: true, fieldLabel: translations.periodo, labelWidth: 65, margin: '0 4 5 0', width: 170, },
										{	xtype: 'component_datefield', itemId: 'ref_tablex_fechafin', name: 'ref_tablex_fechafin', width: 100, }
									]
								},
								{	xtype: 'component_textarea', itemId: 'vent_observ', name: 'vent_observ', fieldLabel: translations.comentario, labelWidth: 65, width: '100%', height: 120 }
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
				        		{	xtype: 'button', itemId: 'btnAdd', text: translations.agregar, disabled: true, iconCls: 'icon_Add', margin: '0 5', padding: '2 6 2 8' },
				        		{   xtype: 'button', itemId: 'btnSuppress', text: translations.eliminar, disabled: true, iconCls: 'icon_Suppress', padding: '2 6 2 8', },
				        	]
				        },
						{   xtype: 'displayfield', flex: 1, },
						{   xtype: 'fieldcontainer', fieldLabel: translations.importe, margin: '3 0 0 0',
							labelClsExtra: 'lbl00001', labelWidth: 50, layout: { type: 'hbox' },
							items : [
								{	xtype: 'component_combo', itemId: 'mone_id', name: 'mone_id', store: 'array.Monedas', valueField: 'mone_id', displayField: 'mone_nombre', disabled: true, margin: '0 3', width: 130, },
								{ 	xtype: 'component_currencyfield', itemId: 'tribval_contable', name: 'tribval_contable', disabled: true, value: '1.18', hidden: true, },
								{ 	xtype: 'component_currencyfield', itemId: 'vent_monto_inafecto', name: 'vent_monto_inafecto', disabled: true, value: '0', hidden: true, width: 96, },
								{ 	xtype: 'component_currencyfield', itemId: 'vent_vventa', disabled: true, value: '', width: 96, },
								{ 	xtype: 'component_currencyfield', itemId: 'vent_igv', disabled: true, margin: '0 3', value: '', width: 96, },
								{ 	xtype: 'component_currencyfield', itemId: 'vent_monto', name: 'vent_monto', disabled: true, value: '', width: 96, }
						    ]
						}
			        ]
			    },
			]
		}
	],

	__doc_id: '',
	__vent_serie: '',
	__contr_key: '',
	setDoc_id: function(pcDoc_id) { this.__doc_id = pcDoc_id; },
	getDoc_id: function() { return this.__doc_id; },
	setVent_serie: function(pcVent_serie) { this.__vent_serie = pcVent_serie; },
	getVent_serie: function() { return this.__vent_serie; },
	setContr_key: function(pcContr_key) { this.__contr_key = pcContr_key; },
	getContr_key: function() { return this.__contr_key; },
});