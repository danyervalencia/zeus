Ext.define('Siace.view.operations.Registros_InternacionalesEdit', {
	extend: 'Siace.view.WindowEdit',
	alias: 'widget.operations_registros_internacionalesedit',
	width: 500,

	items: [
		{
			xtype: 'form', itemId: 'frmRegistros_internacionales', bodyPadding: 8, border: true, defaults: { labelWidth: 70, msgTarget: 'title', },
			items: [
				{	xtype: 'hiddenfield', itemId: 'regint_key', name: 'regint_key', },
				{	xtype: 'component_combo', itemId: 'alma_key', name: 'alma_key', valueField: 'alma_key', displayField: 'alma_nombre', fieldLabel: translations.usuario, allowBlank: false, anchor: '100%', },
				{
					xtype: 'fieldcontainer', fieldLabel: translations.documento, labelClsExtra: 'lbl00001', layout: 'hbox',
					items: [
			            {	xtype: 'component_combotop', itemId: 'tipdocint_id', name: 'tipdocint_id', valueField: 'tipdocint_id', displayField: 'tipdocint_nombre',  allowBlank: false, flex: 1, },
			            {	xtype: 'component_textfieldtop', itemId: 'regint_nro', name: 'regint_nro', allowBlank: false, maxLength: 20, width: 160, },
						{   xtype: 'hiddenfield', itemId: 'regint_pdf', name: 'regint_pdf', },
						{   xtype: 'component_filefield', itemId: 'ffiRegint_pdf', name: 'ffiRegint_pdf' },
						{	xtype: 'component_button_imagepdf', itemId: 'btnRegint_pdfDelete', hidden: true, iconCls: 'icon_0007_90', },
						{	xtype: 'component_button_imagepdf', itemId: 'btnRegint_pdfDownload', disabled: true, margin: '0 0 0 0', }
			        ]
			    },
	            {	xtype: 'component_datefield', itemId: 'regint_fecha', name: 'regint_fecha', fieldLabel: translations.fecha, allowBlank: false, maxLength: 10, width: 171, },
			    {
					xtype: 'fieldcontainer', fieldLabel: translations.exportador, labelClsExtra: 'lbl00001', layout: 'hbox',
					items: [
						{	xtype: 'hiddenfield', itemId: 'pers_key', name: 'pers_key', },					
						{	xtype: 'hiddenfield', itemId: 'PERS_RUC', name: 'PERS_RUC', },
						{	xtype: 'component_textfieldtop', itemId: 'pers_ruc', name: 'pers_ruc', enableKeyEvents: true, maxLength: 15, width: 95, },
						{   xtype: 'component_button_imagesearch', itemId: 'btnPers_search', },
						{   xtype: 'displayfield', itemId: 'pers_nombre', name: 'pers_nombre', fieldCls: 'df00101', value: '' }
					]
				},
				{	xtype: 'component_combo', itemId: 'pais_id', name: 'pais_id', valueField: 'pais_id', displayField: 'pais_nombre', fieldLabel: translations.pais, allowBlank: false, anchor: '100%', editable: true },				
				{
					xtype : 'fieldcontainer', fieldLabel: translations.flete, labelClsExtra: 'lbl00001', layout: 'hbox',
					items : [
						{
							xtype: 'component_combotop', itemId: 'mone_id', name: 'mone_id',
			                store: {
			                    fields: [{ name: 'mone_id', type: 'int' }, { name:'mone_abrev', type: 'string' }],
			                    data: [{ mone_id: '0', mone_abrev: '' }, { mone_id: '2', mone_abrev: 'US$' },]
			                },
							valueField: 'mone_id', displayField: 'mone_abrev', tpl:'<tpl for="."><div class="x-boundlist-item">{mone_abrev}&nbsp;</div></tpl>', listConfig: { cls: 'item00001', minWidth: 50, }, width: 50,
						},
						{   xtype: 'component_currencyfield', itemId: 'regint_monto_flete', name: 'regint_monto_flete', disabled: true, width: 90, }
					]
				},
				{	xtype: 'component_textarea', itemId: 'regint_observ', name: 'regint_observ', fieldLabel: translations.comentario, anchor: '100%', }
			]
		}
	]
});