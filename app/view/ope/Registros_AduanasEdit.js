Ext.define('Siace.view.operations.Registros_AduanasEdit', {
	extend: 'Siace.view.WindowEdit',
	alias: 'widget.operations_registros_aduanasedit',
	width: 580,

	items: [
		{
			xtype: 'form', itemId: 'frmOperations_registros_aduanas', bodyPadding: 8, border: true, defaults: { labelWidth: 75, },
			items: [
				{	xtype: 'hiddenfield', itemId: 'regadua_key', name: 'regadua_key', },
				{	xtype: 'component_combo', itemId: 'alma_key', name: 'alma_key', valueField: 'alma_key', displayField: 'alma_nombre', fieldLabel: 'Usuario', allowBlank: false, anchor: '100%', },
				{
					xtype: 'fieldcontainer', fieldLabel: translations.tipo_registro, defaults: { anchor: '100%', }, labelClsExtra: 'lbl00001', layout: 'hbox',
					items: [
			            {
			                xtype: 'component_combotop', itemId: 'tipregadua_id', name: 'tipregadua_id', valueField: 'tipregadua_id', displayField: 'tipregadua_nombre', width: 160,
			                store: {
			                    fields: [ {name: 'tipregadua_id', type: 'int'}, {name:'tipregadua_nombre'} ],
			                    data: [{ tipregadua_id: '1', tipregadua_nombre: 'Ingreso de Mercancía' }, { tipregadua_id: '2', tipregadua_nombre: 'Salida de Mercancía' },]
			                },
			            },
		            	{	xtype: 'component_combo', itemId: 'tipmov_id', name: 'tipmov_id', valueField: 'tipmov_id', displayField: 'tipmov_nombre',  flex: 1, },
			        ]
			    },
				{
					xtype: 'fieldcontainer', fieldLabel: translations.documento, labelClsExtra: 'lbl00001', layout: 'hbox',
					items: [
			            {	xtype: 'component_combotop', itemId: 'tipdocadua_id', name: 'tipdocadua_id', valueField: 'tipdocadua_id', displayField: 'tipdocadua_nombre',  flex: 1, },
		            	{	xtype: 'component_combotop', itemId: 'adua_id', name: 'adua_id', valueField: 'adua_id', displayField: 'adua_code', disabled: true, listConfig: { cls: 'item00001', minWidth: 200, }, tpl:'<tpl for="."><div class="x-boundlist-item">{adua_code} &nbsp;{adua_nombre}</div></tpl>', width: 45, },
		            	{	xtype: 'component_combotop', itemId: 'year_id', name: 'year_id', store: 'array.YearsAB', valueField: 'year_id', displayField: 'year_code', disabled: true, listConfig: { cls: 'item00001', minWidth: 55, }, tpl:'<tpl for="."><div class="x-boundlist-item">{year_code}&nbsp;</div></tpl>', width: 52, },
		            	{	xtype: 'component_combotop', itemId: 'aduaoper_id', name: 'aduaoper_id', valueField: 'aduaoper_id', displayField: 'aduaoper_code',  disabled: true,  listConfig: { cls: 'item00001', minWidth: 330, }, tpl:'<tpl for="."><div class="x-boundlist-item">{aduaoper_code} &nbsp;{aduaoper_nombre}</div></tpl>', width: 40, },
			            {	xtype: 'component_textfieldtop', itemId: 'regadua_nro', name: 'regadua_nro', maxLength: 5, vtype: 'onlyNumeric', width: 55, },
						{   xtype: 'hiddenfield', itemId: 'regadua_pdf', name: 'regadua_pdf', },
						{   xtype: 'component_filefield', itemId: 'ffiRegadua_pdf', name: 'ffiRegadua_pdf' },
						{	xtype: 'component_button_imagepdf', itemId: 'btnRegadua_pdfDelete', hidden: true, iconCls: 'icon_Delete_90', },
						{	xtype: 'component_button_imagepdf', itemId: 'btnRegadua_pdfDownload', disabled: true, margin: '0 0 0 0', }
			        ]
			    },
	            {	xtype: 'component_datefield', itemId: 'regadua_fecha', name: 'regadua_fecha', fieldLabel: translations.fecha, width: 174, },
			    {
					xtype: 'fieldcontainer', fieldLabel: translations.operador, labelClsExtra: 'lbl00001', layout: 'hbox',
					items: [
						{   xtype: 'hiddenfield', itemId: 'persimpor_key', name: 'persimpor_key', },					
						{   xtype: 'hiddenfield', itemId: 'PERSIMPOR_RUC', name: 'PERSIMPOR_RUC', },
						{	xtype: 'component_textfieldtop', itemId: 'persimpor_ruc', name: 'persimpor_ruc', enableKeyEvents: true, maxLength: 15, width: 95, },
						{   xtype: 'component_button_imagesearch', itemId: 'btnPersimpor_search', },
						{   xtype: 'displayfield', itemId: 'persimpor_nombre', name: 'persimpor_nombre', fieldCls: 'df00101', value: '' }
					]
				},
			    {
					xtype: 'fieldcontainer', fieldLabel: translations.documento_internacional, labelClsExtra: 'lbl00001', layout: 'hbox',
					items: [
						{   xtype: 'hiddenfield', itemId: 'regint_key', name: 'regint_key', },
						{   xtype: 'hiddenfield', itemId: 'REGINT_NRO', name: 'REGINT_NRO', },
						{	xtype: 'component_textfieldtop', itemId: 'regint_nro', name: 'regint_nro', disabled: true, enableKeyEvents: true, maxLength: 15, width: 120, },
						{   xtype: 'component_button_imagesearch', itemId: 'btnRegint_search', disabled: true },
						{   xtype: 'displayfield', itemId: 'regint_nombre', name: 'regint_nombre', fieldCls: 'df00101', }
					]
				},
				{
					xtype : 'fieldcontainer', fieldLabel: translations.clase +'/'+translations.cantidad_abrev, labelClsExtra: 'lbl00001', layout: 'hbox',
					items : [
						{	xtype: 'component_combotop', itemId: 'tipbul_id', name: 'tipbul_id', valueField: 'tipbul_id', displayField: 'tipbul_nombre', tpl:'<tpl for="."><div class="x-boundlist-item">{tipbul_nombre}&nbsp;</div></tpl>', width: 120, },
						{	xtype: 'component_currencyfield', itemId: 'regadua_cantid', name: 'regadua_cantid', disabled: true, width: 90, }
					]
				},
				{	xtype: 'component_textarea', itemId: 'regadua_observ', name: 'regadua_observ', fieldLabel: translations.comentario, anchor: '100%', }
			]
		}
	]
});