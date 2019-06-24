Ext.define('Siace.view.operations.GuiasEdit', {
	extend: 'Siace.view.WindowEdit',
	alias: 'widget.operations_guiasedit',
	width: 500,
	items: [
		{
			xtype: 'form', itemId: 'frmOperations_guias', border: true,
			items: [
				{
					xtype: 'tabpanel', itemId: 'tabOperations_guias', activeTab: 0, plain: true, width: '100%',
					items: [
						{
							xtype: 'panel', title: translations.operations_guiasedit_panel1_title, bodyPadding: 8, defaults: { labelWidth: 75, }, layout: 'vbox',
							items: [
								{	xtype: 'hiddenfield', name: 'guia_key', },
								{	xtype: 'component_combo', itemId: 'alma_key', name: 'alma_key', valueField: 'alma_key', displayField: 'alma_nombre', fieldLabel: translations.usuario, allowBlank: false, width: '100%', },
								{
									xtype: 'fieldcontainer', fieldLabel: translations.transportista, labelClsExtra: 'lbl00001', layout: 'hbox',
								    items: [
										{   xtype: 'hiddenfield', itemId: 'perstransp_key', name: 'perstransp_key', },
										{   xtype: 'hiddenfield', itemId: 'PERSTRANSP_CODE' },
										{	xtype: 'component_textfieldtop', itemId: 'perstransp_code', enableKeyEvents: true, maxLength: 4, width: 60, },
										{   xtype: 'component_button_imagesearch', itemId: 'btnPerstransp_search', },
										{   xtype: 'displayfield', itemId: 'perstransp_nombre', fieldCls: 'df00101', value: '' }
									]
								},
								{
									xtype: 'fieldcontainer', fieldLabel: translations.conductor, labelClsExtra: 'lbl00001', layout: 'hbox',
								    items: [
										{   xtype: 'hiddenfield', itemId: 'indiv_key', name: 'indiv_key', },
										{   xtype: 'hiddenfield', itemId: 'INDIV_DNI' },
										{   xtype: 'component_textfieldtop', itemId: 'indiv_dni', enableKeyEvents: true, maxLength: 15, width: 100, },
										{   xtype: 'component_button_imagesearch', itemId: 'btnIndiv_search', },
										{   xtype: 'displayfield', itemId: 'indiv_apenom', fieldCls: 'df00101' }
									]
								},
								{
									xtype: 'fieldcontainer', fieldLabel: translations.vehiculo, labelClsExtra: 'lbl00001', layout: 'hbox', width: 410,
								    items: [
										{   xtype: 'hiddenfield', itemId: 'veh_key', name: 'veh_key' },
										{   xtype: 'hiddenfield', itemId: 'VEH_PLACA' },
										{ 	xtype: 'component_textfieldtop', itemId: 'veh_placa', enableKeyEvents: true, maxLength: 15, vtype: 'vehiculoPlaca', width: 100, },
										{   xtype: 'component_button_imagesearch', itemId: 'btnVeh_search', },
										{   xtype: 'displayfield', itemId: 'tipveh_nombre', fieldCls: 'df00101', value: '' }
									]
								},
								{
									xtype : 'fieldcontainer', fieldLabel: translations.remolque, labelClsExtra: 'lbl00001', layout: 'hbox',
									items : [
										{   xtype: 'hiddenfield', itemId: 'trac_key', name: 'trac_key', },
										{   xtype: 'hiddenfield', itemId: 'TRAC_PLACA' },
										{	xtype: 'component_textfieldtop', itemId: 'trac_placa', enableKeyEvents: true, maxLength: 15, vtype: 'vehiculoPlaca', width: 100, },
										{   xtype: 'component_button_imagesearch', itemId: 'btnTrac_search', },
										{   xtype: 'displayfield', itemId: 'tractipveh_nombre', fieldCls: 'df00101', value: '' }
									]
								},
								{
									xtype: 'fieldcontainer', fieldLabel: translations.contenedor, labelClsExtra: 'lbl00001', layout: 'hbox',
									items: [
										{   xtype: 'hiddenfield', itemId: 'cont_id', name: 'cont_id', },
										{   xtype: 'hiddenfield', itemId: 'CONT_PLACA' },
										{   xtype: 'component_textfieldtop', itemId: 'cont_placa', enableKeyEvents: true, maxLength: 12, vtype: 'contenedorPlaca', width: 100, },
										{   xtype: 'component_button_imagesearch', itemId: 'btnCont_search', },
										{   xtype: 'displayfield', itemId: 'tipcont_nombre', fieldCls: 'df00101', value: '' }
									]
								},
								{
									xtype : 'fieldcontainer', fieldLabel: translations.otros, labelClsExtra: 'lbl00001', layout: 'hbox',
									items : [
										{
											xtype: 'component_combotop', itemId: 'tipaux_id', name: 'tipaux_id', valueField: 'tipaux_id', displayField: 'tipaux_nombre', width: 100,
											store: {
												fields: [{name: 'tipaux_id', type: 'int'}, {name: 'tipaux_nombre', type: 'string'}],
										        data: [  {tipaux_id: '0', tipaux_nombre: ''},  {tipaux_id: '2', tipaux_nombre: 'Chasis'},  {tipaux_id: '1', tipaux_nombre: 'Precinto'} ] 
										    },											
											tpl:'<tpl for="."><div class="x-boundlist-item">{tipaux_nombre}&nbsp;</div></tpl>',
										},
										{	xtype : 'component_textfield', itemId: 'guia_code', name: 'guia_code', disabled: true, fieldCls: 'txt00001', width: 200, },
									]
								}
							]
						},
						{
							xtype: 'panel', bodyPadding: 8, layout: { type: 'vbox' }, title: translations.operations_guiasedit_panel2_title, width: '100%',
							items: [
							    {
									xtype: 'grid', itemId: 'grdOperations_guias_registros_aduanas',
									columnLines: true, height: 189, width: '100%',
									columns: [
										{ 	xtype: 'rownumberer', width: 30, },
										{	dataIndex: 'regadua_documento', text : translations.registro_aduanero, locked: true, width: 160, },
										{	dataIndex: 'regadua_fecha', text : translations.fecha, align: 'center', locked: true, renderer: Ext.util.Format.dateRenderer('d/m/Y'), width: 85, },
										{	dataIndex: 'alma_abrev', text : translations.usuario, width: 50, },
										{	dataIndex: 'tipmov_abrev', text : translations.tipo, width: 50, },
										{	dataIndex: 'pers_nombre', text : translations.operador, width: 350,	},
										{	dataIndex: 'regint_documento', text : translations.documento_internacional, width: 170, },
										{
											xtype: 'actioncolumn', itemId: 'acOperations_guias_registros_aduanas', align: 'center', width: 30,
											items: [
												{
						        					icon: 'resources/icons/btnDownload.png', tooltip: '<b>DESCARGAR </b>, archivo adjunto.',
						        					getClass: function(value, metadata, record) {
														if ( record.get('regadua_pdf') == '' ) { return 'x-hide-display'; }
														else { return 'x-grid-center-icon'; }
						        					}
						    					},
						    				]
										}										
									],
									dockedItems: [
										{
								            xtype: 'toolbar', dock: 'bottom', ui: 'footer',
								            items: [
								                {	xtype: 'button', itemId: 'btnAdd', iconCls: 'icon_Add_90', padding: '3 4 2 6', text: translations.agregar, },
								                {	xtype: 'button', itemId: 'btnQuery', disabled: true, iconCls: 'icon_Query_90', padding: '3 4 2 6', text: translations.consulta, },
								                {	xtype: 'button', itemId: 'btnSuppress', disabled: true, iconCls: 'icon_Suppress_90', padding: '3 4 2 6', text: translations.quitar,	},
								            ]
								        }
									]

								},
							]
						},
						{
							xtype: 'panel', itemId: 'pnl03', anchor: '100%', bodyPadding: 8, defaults: { labelWidth: 75, }, hidden: true, layout: 'vbox', title: 'CETICOS',
							items: [
								{
									xtype: 'fieldcontainer', fieldLabel: translations.documento, labelClsExtra: 'lbl00001', layout: 'hbox', width: '100%',
								    items: [
										{
											xtype: 'component_combotop', itemId: 'doc_id', name: 'doc_id', valueField: 'doc_id', displayField: 'doc_nombre', disabled: true, flex: 1, value: 501,
							                store: {
										        fields: [ { name: 'doc_id', type: 'int' }, { name:'doc_nombre', type: 'string' } ],
										        data: [{ doc_id: 501, doc_nombre: 'Ticket de Ingreso' }] 
											},
										},
							            {	xtype: 'component_combotop', itemId: 'guia_serie', name: 'guia_serie', store: 'array.Years', valueField: 'year_id', displayField: 'year_nro', disabled: true, width: 70, },
							            {	xtype: 'component_textfieldtop', itemId: 'guia_nro', disabled: true, width: 80, },
							            {	xtype: 'component_datefield', itemId: 'guia_fecha', name: 'guia_fecha', disabled: true, },
									]
								},
								{
									xtype: 'fieldcontainer', itemId: 'fcGuia_ing_peso', fieldLabel: translations.ingreso + ' (Kg.)', labelClsExtra: 'lbl00001', layout: 'hbox',
								    items: [
										{	xtype: 'component_currencyfield', itemId: 'guia_ing_peso', name: 'guia_ing_peso', disabled: true, numberDecimal: 3, width: 90, }
									]
								},
								{
									xtype: 'fieldcontainer', itemId: 'fcGuia_sal_peso', fieldLabel: translations.salida + ' (Kg.)', labelClsExtra: 'lbl00001', layout: 'hbox',
								    items: [
										{	xtype: 'component_currencyfield', itemId: 'guia_sal_peso', name: 'guia_sal_peso', disabled: true, numberDecimal: 3, width: 90, }
									]
								},								
								{	xtype: 'component_textarea', itemId: 'guia_observ', name: 'guia_observ', fieldLabel: translations.comentario, height: 103, width: '100%', }
							]
						},						
					]
				}
			]
		}
	]
});