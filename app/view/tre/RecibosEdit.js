Ext.define('Siace.view.treasury.RecibosEdit', {
	extend: 'Siace.view.WindowEdit',
	alias: 'widget.treasury_recibosedit',
	width: 720,

	items: [
		{
			xtype: 'form', itemId: 'frmTreasury_recibos', bodyPadding: 8, border: false, defaults: { labelWidth: 60 }, layout: { type: 'vbox' },
			items: [
				{	xtype: 'hiddenfield', itemId: 'recib_id',  name: 'recib_id', },
				{	xtype: 'hiddenfield', itemId: 'recib_key',  name: 'recib_key', },
				{
					xtype : 'container', layout: 'hbox', width: '100%',
					items : [
				        {	xtype: 'component_combo', itemId: 'doc_id', name: 'doc_id', store: 'array.DocumentosCobro', valueField: 'doc_id', displayField: 'doc_nombre',  disabled: true, fieldLabel: translations.documento, labelWidth: 60, margin: '0 4 5 0', width: 200, },
					    {	xtype: 'component_combotop', itemId: 'recib_serie', valueField: 'docser_serie', displayField: 'docser_format', disabled: true, listConfig: { cls: 'item00001', minWidth: 60, }, width: 60, },
					    { 	xtype: 'component_textfield', itemId: 'recib_nro', align: 'center', width: 80, },
					    { 	xtype: 'displayfield', flex: 1, },
						{	xtype: 'component_datefield', itemId: 'recib_fecha', name: 'recib_fecha', fieldLabel: translations.fecha, allowBlank: false, labelWidth: 45, width: 145, }
					]
				},
				{
		        	xtype: 'component_combo', itemId: 'concp_id', name: 'concp_id', valueField: 'concp_id', displayField: 'concp_codename', fieldLabel: translations.concepto, width: '100%',
			    },				
			    {
					xtype: 'container', layout: { type: 'hbox' },
					items: [
				        { 	xtype: 'component_combo', itemId: 'tipdocident_id', name: 'tipdocident_id', store: 'array.Tipos_Documentos_IdentidadVenta', valueField: 'tipdocident_id', displayField: 'tipdocident_abrev', disabled: true, fieldLabel: translations.cliente, labelWidth: 60,  listConfig: { cls: 'item00001', minWidth: 55, }, margin: '0 4 5 0', width: 125, },
					    {
							xtype: 'container', itemId: 'cntPersonas', layout: { type: 'hbox' },
							items: [
								{ 	xtype: 'hiddenfield', itemId: 'pers_key', },
								{   xtype: 'hiddenfield', itemId: 'PERS_RUC', },
								{	xtype: 'component_textfieldtop', itemId: 'pers_ruc', disabled: true, enableKeyEvents: true, maxLength: 11 },
								{	xtype: 'component_button_imagesearch', itemId: 'btnPers_search', disabled: true, },
								{	xtype: 'displayfield', itemId: 'pers_nombre', fieldCls: 'df00101', }
							]
						},
					    {
							xtype: 'container', itemId: 'cntIndividuos', hidden: true, layout: { type: 'hbox' },
							items: [
								{ 	xtype: 'hiddenfield', itemId: 'indiv_key', },
								{   xtype: 'hiddenfield', itemId: 'INDIV_DNI', },
								{	xtype: 'component_textfieldtop', itemId: 'indiv_dni', disabled: true, enableKeyEvents: true, maxLength: 12, },
								{	xtype: 'component_button_imagesearch', itemId: 'btnIndiv_search', disabled: true, },
								{	xtype: 'displayfield', itemId: 'indiv_apenom', fieldCls: 'df00101', }
							]
						},
					]
				},
				{
					xtype : 'container', itemId: 'cntNexos', hidden: true, layout: 'hbox', width: '100%',
					items : [
				        {	xtype: 'component_combo', itemId: 'tablex_key', name: 'tablex_key', valueField: 'recib_key', displayField: 'recib_documento', fieldLabel: 'Referencia', labelWidth: 60, margin: '0 4 5 0', width: 255,  },
				        { 	xtype: 'displayfield', flex: 1, },
				    ]				        
			    },
				{
					xtype : 'container', layout: 'hbox', width: '100%',
					items : [
				        {
				        	xtype: 'component_combo', itemId: 'tippag_id', name: 'tippag_id', valueField: 'tippag_id', displayField: 'tippag_nombre', fieldLabel: translations.tipo_pago, labelWidth: 60, margin: '0 4 5 0', width: 255, 
			                store: {
			                    fields: [ {name: 'tippag_id', type: 'int'}, {name:'tippag_nombre', type: 'string'} ],
			                    data: [ { tippag_id: 1, tippag_nombre: 'Efectivo' },{ tippag_id: 4, tippag_nombre: 'Cheque' },{ tippag_id: 5, tippag_nombre: 'Depósito en Banco' },] 
			                },
				        },
				        { 	xtype: 'displayfield', flex: 1, },
				        {	xtype: 'component_combo', itemId: 'mone_id', name: 'mone_id', store: 'array.Monedas', valueField: 'mone_id', displayField: 'mone_nombre02', allowBlank: false, fieldLabel: translations.moneda, labelWidth: 50, width: 150, },
					    {	xtype: 'component_combo', itemId: 'tipcamb_id', valueField: 'tipcamb_id', displayField: 'tipcamb_fecha', hidden: true },
			        ]
			    },
				{
					xtype : 'container', layout: 'hbox', width: '100%',
					items : [
				        { 	xtype: 'component_combo', itemId: 'entibanc_id', name: 'entibanc_id', valueField: 'tabgen_id', displayField: 'tabgen_nombre', fieldLabel: translations.entidad_bancaria_abrev, labelWidth: 60, margin: '0 20 5 0', width: 255, },
				        {	xtype: 'component_textfield', itemId: 'cheq_nro', name: 'cheq_nro', fieldLabel: 'N° Cheque', hidden: true, labelWidth: 60, maxLength: 10, width: 150 },
				        { 	xtype: 'displayfield', flex: 1, },
						{   xtype: 'component_currencyfield', itemId: 'recib_monto', name: 'recib_monto', fieldLabel: translations.importe, allowBlank: false, labelWidth: 50, width: 150, }
			        ]
			    },
				{
					xtype : 'container', layout: 'hbox', width: '100%',
					items : [
				        { 	xtype: 'component_combo', itemId: 'cuebanc_key', name: 'cuebanc_key', valueField: 'cuebanc_key', displayField: 'cuebanc_nro', disabled: true, fieldLabel: 'N° '+translations.cuenta, labelWidth: 60, margin: '0 20 5 0', width: 255, },
				        {	xtype: 'component_textfield', itemId: 'oper_nro', name: 'oper_nro', fieldLabel: 'N° Oper.', hidden: true, labelWidth: 60, maxLength: 20, width: 170 },
				        { 	xtype: 'displayfield', flex: 1, },
						{   xtype: 'component_currencyfield', itemId: 'recib_monto_pago', name: 'recib_monto_pago', fieldLabel: translations.pago, allowBlank: false, disabled: true, labelWidth: 50, width: 150, }
			        ]
			    },
				{
					xtype: 'tabpanel', itemId: 'tbpTabs', activeTab: 1, plain: true, width: '100%',
					items: [
						{
							xtype: 'panel', itemId: 'panDetalle', title: 'Detalle de Documento',  disabled: true, //height: 200,
							items: [
							    {
									xtype: 'grid', itemId: 'grdTreasury_recibos_det', autoHeight: true, columnLines: true, height: 210, overflowY: 'show',
									columns: [
										{	dataIndex: 'tablex_documento', text: translations.documento, sortable: false, width: 110, },
										{	dataIndex: 'tablex_fecha', text: translations.fecha, align: 'center', sortable: false, renderer : Ext.util.Format.dateRenderer('d/m/Y'), width: 85, },
										{	dataIndex: '', text: translations.area, width: 85, flex: 1, },
										{	dataIndex: 'mone_abrev', text: translations.moneda_abrev, sortable: false, tooltip: translations.moneda, width: 35, },
										{	dataIndex: 'recibdet_monto', text: translations.importe, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), sortable: false, width: 90, },
										{	dataIndex: 'recibdet_monto_debe', text: translations.debe, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), sortable: false, width: 90, },
										{	dataIndex: 'tipcamb_monto', text: 'T. Cambio', align: 'right', renderer: Ext.util.Format.numberRenderer('0.000'), sortable: false, width: 55, },
										{	dataIndex: 'recibdet_monto_pago', text: translations.pago, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), sortable: false, width: 90, },
										{	dataIndex: 'recibdet_monto_saldo', text: translations.saldo, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), sortable: false, width: 90, },
									],
								},
							],
						    dockedItems: [
						        {
						            xtype: 'toolbar', dock: 'bottom', //ui: 'footer',
						            items: [
						        		{	xtype: 'button', itemId: 'btnAdd', text: translations.agregar, iconCls: 'icon_Add', margin: '0 5', padding: '2 6 2 8' },
						        		{   xtype: 'button', itemId: 'btnSuppress', text: translations.eliminar, iconCls: 'icon_Suppress', disabled: true, padding: '2 6 2 8', },
										{	xtype: 'displayfield', flex: 1, },
										{   xtype: 'component_currencyfield', itemId: 'recib_monto_saldo', name: 'recib_monto_saldo', fieldLabel: 'Saldo de Recibo', disabled:true, labelWidth: 90, width: 185, }
										/*{
											xtype: 'displayfield', itemId: 'recib_monto_saldo',
						    				fieldLabel: 'Saldo de Recibo', fieldCls: 'df00104', labelClsExtra: 'lbl00101', labelWidth: 90, width: 180,
										},*/
						            ]
						        },
						    ]							
						},
						{
							xtype: 'panel', itemId: 'panReferencias', title: 'Glosa', height: 200, 
							items: [
								{	xtype: 'component_textarea', itemId: 'recib_observ', name: 'recib_observ', height: 200, width: '100%', }
						    ]
						}
					]
				},
			]
		}
	],

	__doc_id: '',
	__recib_serie: '',
	setDoc_id: function(pcDoc_id) { this.__doc_id = pcDoc_id; },
	getDoc_id: function() { return this.__doc_id; },
	setRecib_serie: function(pcRecib_serie) { this.__recib_serie = pcRecib_serie; },
	getRecib_serie: function() { return this.__recib_serie; },
});