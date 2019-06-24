Ext.define('Siace.view.treasury.ContratosEdit', {
	extend: 'Siace.view.WindowEdit',
	alias: 'widget.treasury_contratosedit',
	width: 650,
	items: [
		{
			xtype: 'form', itemId: 'frmTreasury_contratos',
			bodyPadding: 8, border: true, defaults: { labelWidth: 60, anchor: '100%' }, layout: { type: 'vbox' },
			items: [
				{	xtype: 'hiddenfield', itemId: 'contr_key', name: 'contr_key' },
				{	xtype: 'hiddenfield', itemId: 'contr_id', name: 'contr_id' },
				{	xtype: 'component_combo', itemId: 'bscat_id', name: 'bscat_id', valueField: 'bscat_id', displayField: 'bscat_nombre', fieldLabel: translations.categoria, allowBlank: false, width: '100%' },
				{
					xtype: 'fieldcontainer', fieldLabel: translations.documento, labelClsExtra: 'lbl00001', layout: 'hbox', width: '100%',
					items: [
		            	{	xtype: 'component_combotop', itemId: 'year_id', name: 'year_id', store: 'array.Years', valueField: 'year_id', displayField: 'year_code', tpl:'<tpl for="."><div class="x-boundlist-item">{year_code}&nbsp;</div></tpl>', listConfig: { cls: 'item00001', minWidth: 60, }, width: 60, },
			            {	xtype: 'component_textfieldtop', itemId: 'contr_nro', name: 'contr_nro', maxLength: 5, vtype: 'onlyNumeric', width: 60, },
						{   xtype: 'hiddenfield', itemId: 'contr_pdf', name: 'contr_pdf', },
						{   xtype: 'component_filefield', itemId: 'ffiContr_pdf', name: 'ffiContr_pdf' },
						{	xtype: 'component_button_imagepdf', itemId: 'btnContr_pdfDelete', hidden: true, iconCls: 'icon_Delete_90', },
						{	xtype: 'component_button_imagepdf', itemId: 'btnContr_pdfDownload', disabled: true, margin: '0 0 0 0', },
						{   xtype: 'displayfield', flex: 1 },
			            {	xtype: 'component_datefield', itemId: 'contr_fechaini', name: 'contr_fechaini', endDateField: 'contr_fechafin', fieldLabel: translations.periodo,  labelWidth: 45, margin: '0 4 0 0', vtype: 'daterange', width: 150 },
			            {	xtype: 'component_datefield', itemId: 'contr_fechafin', name: 'contr_fechafin', startDateField: 'contr_fechaini', vtype: 'daterange', },

						//{	xtype: 'component_datefield', itemId: 'contr_fecha', name: 'contr_fecha', fieldLabel: translations.fecha, labelWidth: 45, width: 150, },
			        ]
			    },
			    {
					xtype: 'fieldcontainer', fieldLabel: translations.cliente, labelClsExtra: 'lbl00001', layout: 'hbox',
					items: [
						{   xtype: 'hiddenfield', itemId: 'pers_key', name: 'pers_key', },					
						{   xtype: 'hiddenfield', itemId: 'PERS_RUC', name: 'PERS_RUC', },
						{	xtype: 'component_textfieldtop', itemId: 'pers_ruc', name: 'pers_ruc', enableKeyEvents: true, maxLength: 15, width: 95, },
						{   xtype: 'component_button_imagesearch', itemId: 'btnPers_search', },
						{   xtype: 'displayfield', itemId: 'pers_nombre', name: 'pers_nombre', fieldCls: 'df00101', value: '' }
					]
				},
				{
					xtype: 'fieldcontainer', fieldLabel: translations.importe, labelClsExtra: 'lbl00001', layout: 'hbox', width: '100%',
					items: [			    
			            //{	xtype: 'component_datefieldtop', itemId: 'contr_fechaini', name: 'contr_fechaini', endDateField: 'contr_fechafin', vtype: 'daterange', },
			            //{	xtype: 'component_datefield', itemId: 'contr_fechafin', name: 'contr_fechafin', startDateField: 'contr_fechaini', vtype: 'daterange', },
						{
							xtype: 'component_combo', itemId: 'unimed_id', name: 'unimed_id',
			                store: {
			                    fields: [ { name: 'unimed_id', type: 'int' }, { name:'unimed_nombre', type: 'string' } ],
			                    data: [ { unimed_id: '29', unimed_nombre: 'Mensual' }, { unimed_id: '32', unimed_nombre: 'Trimestral' }, ] 
			                },
							valueField: 'unimed_id', displayField: 'unimed_nombre', tpl:'<tpl for="."><div class="x-boundlist-item">{unimed_nombre}&nbsp;</div></tpl>', labelWidth: 50, listConfig: { cls: 'item00001', minWidth: 50, }, margin: '0 4 0 0', width: 150,
						},
						{	xtype: 'component_combo', itemId: 'mone_id', name: 'mone_id', store: 'array.Monedas', valueField: 'mone_id', displayField: 'mone_abrev', tpl:'<tpl for="."><div class="x-boundlist-item">{mone_abrev}&nbsp;</div></tpl>', listConfig: { cls: 'item00001', minWidth: 50, }, margin: '0 4 0 0', width: 55, },
						{   xtype: 'component_currencyfield', itemId: 'contr_monto', name: 'contr_monto', width: 90, },
						{   xtype: 'container', flex: 1 },
						{	xtype: 'label', itemId: 'lblContr_estado', cls: 'lbl00003', padding: '5 0 0 0', text: 'Estado Activo \xa0 ', flex: 1, },
						{	xtype: 'checkbox', itemId: 'contr_estado', name: '_contr_estado', checked: true, width: 13, },						
					]
				},
				{
					xtype: 'tabpanel', activeTab: 0, plain: true, width: '100%',
					items: [
						{
							xtype: 'panel', itemId: 'panServicios', title: translations.servicios,
							items: [
							    {
									xtype: 'grid', itemId: 'grdServicios', columnLines: true, height: 180,
									columns: [
										{	dataIndex: 'tablex_codigo', text : translations.codigo, width: 80, },
										{	dataIndex: 'tablex_nombre', text : translations.descripcion, flex: 1, },
										{	dataIndex: 'contrdet_preuni', text: translations.importe, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 90, },
									]
								},
								{
						            xtype: 'toolbar', dock: 'bottom', //ui: 'footer',
						            items: [
						                {   xtype: 'button', itemId: 'btnServAdd', iconCls: 'icon_Add', text: translations.agregar_servicio, },
						                {	xtype: 'button', itemId: 'btnServSuppress', disabled: true, iconCls: 'icon_Suppress', text: translations.quitar_servicio, },
						            ]
						        }								
							],
						},
						{
							xtype: 'panel', itemId: 'panActividades', title: translations.actividades,
							items: [
							    {
									xtype: 'grid', itemId: 'grdActividades', columnLines: true, height: 180,
									columns: [
										{	dataIndex: 'tablex_codigo', text : translations.codigo, width: 80, },
										{	dataIndex: 'tablex_nombre', text : translations.descripcion, flex: 1, },
									]
								},
								{
						            xtype: 'toolbar', dock: 'bottom', //ui: 'footer',
						            items: [
						                {   xtype: 'button', itemId: 'btnActivAdd', iconCls: 'icon_Add', text: translations.agregar_actividad, },
						                {	xtype: 'button', itemId: 'btnActivSuppress', disabled: true, iconCls: 'icon_Suppress', text: translations.quitar_actividad, },
						            ]
						        }
						    ]
						}
					]
				}
			]
		}
	]
});