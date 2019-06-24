Ext.define('Siace.view.public.ContenedoresEdit', {
	extend: 'Siace.view.WindowEdit',
	alias: 'widget.public_contenedoresedit',
	width: 450,

	items: [
		{
			xtype: 'form', itemId: 'frmContenedores',
			border: true, bodyPadding: 8,
			defaults: { anchor: '100%', },
			items: [
				{   xtype: 'hiddenfield', itemId: 'cont_key',  name: 'cont_key', },
				{
					xtype: 'fieldcontainer', fieldLabel: translations.placa,
				    labelClsExtra: 'lbl00001', layout: 'hbox',
					items: [
						{
							xtype: 'component_textfieldtop', itemId: 'cont_serie', name: 'cont_serie',
							allowBlank: false, maxLength: 4, width: 60,
						},
						{
							xtype: 'component_textfieldtop', itemId: 'cont_nro', name: 'cont_nro',
							allowBlank: false, maxLength: 7, width: 100,
						},
					]
				},		
				{
					xtype: 'component_combo', itemId: 'tipcont_id', name: 'tipcont_id',
		            valueField: 'tipcont_id', displayField: 'tipcont_nombre',
		            fieldLabel: translations.tipo_contenedor,
		            allowBlank: false,
				},
				{
					xtype: 'component_textarea',
					fieldLabel: translations.comentario,
				}
			]
		}
	],
});