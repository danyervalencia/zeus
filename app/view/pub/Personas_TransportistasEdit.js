Ext.define('Siace.view.public.Personas_TransportistasEdit', {
	extend: 'Siace.view.WindowEdit',
	alias: 'widget.public_personas_transportistasedit',
	iconCls: 'icon_New_90',
	width: 570,

	items: [
		{
			xtype: 'form', itemId: 'frmPersonas_Transportistas',
			bodyPadding: 8, border: true, bodyBorder: false,
			//border: false,
			defaults: { labelWidth: 75, },
			//frame: false,
			layout: { type: 'vbox' },
			items: [
				{   xtype: 'hiddenfield', name: 'pers_key' },
				{
					xtype: 'fieldcontainer',
				    fieldLabel: translations.codigo,
				    labelClsExtra: 'lbl00001', layout: 'hbox',
				    items: [				
						{
							xtype: 'component_textfieldtop', itemId: 'perstransp_code', name: 'perstransp_code',
							maxLength: 4, width: 60,
						},
						{   xtype: 'component_button_imagesearch', itemId: 'btnPerstransp_search', disabled: true, },
					]
				},				
				{
					xtype: 'fieldcontainer',
    				fieldLabel: translations.registro,
    				labelClsExtra: 'lbl00001', layout: 'hbox',
					items: [
						{
							xtype: 'component_combotop', itemId: 'tipdocident_id', name: 'tipdocident_id',
							store: 'public.Tipos_Documentos_Identidad',
							valueField: 'tipdocident_id', displayField: 'tipdocident_abrev',
							allowBlank: false, listConfig: {cls: 'item00001', minWidth: 60, }, maxLength: 4, minChars: 1, width: 60
						},
						{
							xtype: 'component_textfield', itemId: 'pers_ruc', name: 'pers_ruc',
							disabled: true, maxLength: 15, width: 130,
						}
					]
				},
				{
					xtype: 'component_textfield', itemId: 'pers_nombre', name: 'pers_nombre',
					fieldLabel: translations.razon_social,
					allowBlank: false, maxLength: 60, width: '100%'
				},
				{
					xtype: 'fieldcontainer',
					fieldLabel: translations.pais,
					labelClsExtra: 'lbl00001', layout: 'hbox',
					items: [
						{
							xtype: 'component_combo', itemId: 'pais_id', name: 'pais_id',
							displayField: 'pais_nombre', valueField: 'pais_id',
							allowBlank: false, minChars: 1, width: 300,
						}
					]
				},				
				{
					xtype: 'component_textfield', itemId: 'pers_domicilio', name: 'pers_domicilio',
					fieldLabel: translations.direccion,
					allowBlank: false, maxLength: 100, width: '100%'
				},
			]
		}
	],
});