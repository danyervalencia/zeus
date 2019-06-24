Ext.define('Siace.view.treasury.ComprobantesEditPago', {
	extend: 'Siace.view.WindowEdit',
	alias: 'widget.treasury_comprobanteseditpago',
	width: 750,

	items: [
		{
			xtype: 'form', itemId: 'frmTreasury_comprobantes', bodyPadding: 8, border: false, defaults: { labelWidth: 70 }, layout: { type: 'vbox' },
			items: [
				{	xtype: 'hiddenfield', itemId: 'comprob_id',  name: 'comprob_id', },
				{	xtype: 'hiddenfield', itemId: 'comprob_key',  name: 'comprob_key', },
				{
					xtype : 'container', layout: 'hbox', width: '100%',
					items : [
				        {	
				        	xtype: 'component_combo', itemId: 'doc_id', name: 'doc_id', valueField: 'doc_id', displayField: 'doc_nombre',
			                store: {
			                    fields: [ {name: 'doc_id', type: 'int'}, {name:'doc_nombre', type: 'string'} ],
			                    data: [ { doc_id: 402, doc_nombre: 'Comprobante de Pago' } ]
			                },				        	
				        	disabled: true, fieldLabel: translations.documento, labelWidth: 70, margin: '0 4 5 0', value: 402, width: 230, 
				       	},
					    {	xtype: 'component_combotop', itemId: 'comprob_serie', valueField: 'docser_serie', displayField: 'docser_format', disabled: true, listConfig: { cls: 'item00001', minWidth: 60, }, width: 60, },
					    { 	xtype: 'component_textfield', itemId: 'comprob_nro', align: 'center', width: 80, },
					    { 	xtype: 'displayfield', flex: 1, },
						{	xtype: 'component_datefield', itemId: 'comprob_fecha', name: 'comprob_fecha', fieldLabel: translations.fecha, allowBlank: false, labelWidth: 45, width: 145, }
					]
				},
				{
					xtype : 'container', layout: 'hbox', width: '100%',
					items : [
				        {	xtype: 'component_combo', itemId: 'tipcomprob_id', name: 'tipcomprob_id', valueField: 'tabgen_id', displayField: 'tabgen_nombre', fieldLabel: 'Tipo', labelWidth: 70, margin: '0 4 5 0', tpl:'<tpl for="."><div class="x-boundlist-item">{tabgen_nombre}&nbsp;</div></tpl>', width: 378, },
				        { 	xtype: 'displayfield', flex: 1, },
					    //{	xtype: 'component_combotop', itemId: 'pctbl_id', valueField: 'pctbl_cuenta', displayField: 'pctbl_cuenta', disabled: true, hidden: true },
			        ]
			    },
				{
					xtype : 'container', layout: 'hbox', width: '100%',
					items : [
				        {	xtype: 'component_combo', itemId: 'cuebanc_key', name: 'cuebanc_key', valueField: 'cuebanc_key', displayField: 'cuebanc_nrobanco', fieldLabel: translations.cuenta_bancaria_abrev, labelWidth: 70, margin: '0 4 5 0', tpl:'<tpl for="."><div class="x-boundlist-item">{cuebanc_nrobanco}&nbsp;</div></tpl>', width: 378, },
				        { 	xtype: 'displayfield', flex: 1, },
					    {	xtype: 'component_combotop', itemId: 'pctbl_id', valueField: 'pctbl_cuenta', displayField: 'pctbl_cuenta', disabled: true, hidden: true },
			        ]
			    },
				{
					xtype : 'container', layout: 'hbox', width: '100%',
					items : [
				        {	xtype: 'component_combo', itemId: 'fuefin_id', name: 'fuefin_id', valueField: 'fuefin_id', displayField: 'fuefin_codename', allowBlank: false, fieldLabel: translations.fuente_financiamiento_abrev, labelWidth: 70, margin: '0 4 5 0', width: 378, },
				        { 	xtype: 'displayfield', flex: 1, },
			        ]
			    },
				{
					xtype: 'tabpanel', itemId: 'tbpTabs', activeTab: 0, plain: true, width: '100%',
					items: [
						{
							xtype: 'panel', itemId: 'panDetalle', title: 'Detalle de Documentos', //height: 200,
							items: [
							    {
									xtype: 'grid', itemId: 'grdTreasury_comprobantes_det', autoHeight: true, columnLines: true, height: 210, overflowY: 'show',
									columns: [
										{	dataIndex: 'tablex_documento', text: translations.documento, sortable: false, width: 110, },
										{	dataIndex: 'tablex_fecha', text: translations.fecha, align: 'center', sortable: false, renderer : Ext.util.Format.dateRenderer('d/m/Y'), width: 85, },
										{	dataIndex: 'pctbl_cuenta', text: translations.cuenta_contable, sortable: false, flex: 1, },
										{	dataIndex: 'tippag_abrev', text: translations.tipo_pago_siglas, sortable: false, tooltip: translations.tipo_pago, width: 40, },
										{	dataIndex: 'mone_abrev', text: translations.moneda_abrev, sortable: false, tooltip: translations.moneda, width: 35, },
										{	dataIndex: 'tablex_monto', text: translations.importe, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), sortable: false, width: 90, },
										{	dataIndex: 'tablex_monto_pago_real', text: translations.parcial, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), sortable: false, width: 90, },
										{	
											dataIndex: 'tipcamb_monto', text: translations.tipo_cambio_abrev, align: 'right', sortable: false, width: 55, 
									        renderer: function(value, metaData, record, rowIdx, colIdx, store, view) {
									            return record.get('tipcamb_monto')*1 > 0 ? record.get('tipcamb_monto') : '';
									        },
										},
										{	dataIndex: 'comprobdet_monto', text: translations.total, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), sortable: false, width: 90, },
									],
								},
							],
						    dockedItems: [
						        {
						            xtype: 'toolbar', dock: 'bottom', //ui: 'footer',
						            items: [
						        		{	xtype: 'button', itemId: 'btnAdd', text: translations.agregar, iconCls: 'icon_Add', margin: '0 5', padding: '2 6 2 8' },
						        		{   xtype: 'button', itemId: 'btnSuppress', text: translations.eliminar, iconCls: 'icon_Suppress', disabled: true, padding: '2 6 2 8', },
						            ]
						        },
						    ]							
						},					
						{
							xtype: 'panel', itemId: 'panAccounting', title: 'Cuentas Contables', //height: 200,
							items: [

							    {
									xtype: 'grid', itemId: 'grdAccounting', autoHeight: true, columnLines: true, height: 210, //overflowY: 'show',
									columns: [
										{ 	text: translations.debe, align: 'center',
											columns: [
												{	dataIndex: 'debe_cuenta', text: translations.cuenta, sortable: false, width: 70, },
												{	dataIndex: 'debe_nombre', text: translations.descripcion, sortable: false, width: 190, },
												{	
													dataIndex: 'debe_monto', text: translations.importe, align: 'right', sortable: false, width: 90, 
											        renderer: function(value, metaData, record, rowIdx, colIdx, store, view) {
											            return record.get('debe_monto')*1 > 0 ? Ext.util.Format.number(record.get('debe_monto'), '000,000,000.00') : '';
											        },
												},
											]
										},
										{ 	text: translations.haber, align: 'center', flex: 1,
											columns: [
												{	dataIndex: 'haber_cuenta', text: translations.cuenta, sortable: false, width: 70, },
												{	dataIndex: 'haber_nombre', text: translations.descripcion, sortable: false, width: 190, },
												{	dataIndex: 'haber_monto', text: translations.importe, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), sortable: false, width: 90, },
											]
										},
									],
								},
							],
						},
						{
							xtype: 'panel', itemId: 'panBudget', title: 'Clasificador Presupuestal', //height: 200,
							items: [
							    {
									xtype: 'grid', itemId: 'grdTreasury_comprobantes_especificas_det', autoHeight: true, columnLines: true, height: 210, //overflowY: 'show',
									columns: [
										{	dataIndex: 'espedet_codigo', text: translations.clasificador, sortable: false, width: 90, },
										{	dataIndex: 'espedet_nombre', text: translations.descripcion, sortable: false, flex: 1, },
										{	dataIndex: 'comprobespedet_monto', text: translations.importe, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), sortable: false, width: 90, },
										{	dataIndex: 'comprobespedet_monto_igv', text: 'IGV', align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), sortable: false, width: 80, },
										{
											dataIndex: 'debe_monto', text: 'Imp. Neto', align: 'right', sortable: false, width: 90, 
										        renderer: function(value, metaData, record, rowIdx, colIdx, store, view) {
										        return Ext.util.Format.number(record.get('comprobespedet_monto')*1 - record.get('comprobespedet_monto_igv')*1, '000,000,000.00');
										    },													
										},
									],
								},
							],
						},						
						{
							xtype: 'panel', itemId: 'panReferencias', title: 'Glosa', height: 200, 
							items: [
								{	xtype: 'component_textarea', itemId: 'comprob_observ', name: 'comprob_observ', height: 200, width: '100%', }
						    ]
						}
					]
				},
			]
		}
	],

	__doc_id: '',
	__comprob_serie: '',
	setDoc_id: function(pcDoc_id) { this.__doc_id = pcDoc_id; },
	getDoc_id: function() { return this.__doc_id; },
	setComprob_serie: function(pcComprob_serie) { this.__comprob_serie = pcComprob_serie; },
	getComprob_serie: function() { return this.__comprob_serie; },
});