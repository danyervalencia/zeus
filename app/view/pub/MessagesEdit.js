Ext.define('Siace.view.public.MessagesEdit', {
	extend: 'Siace.view.WindowEdit',
	alias: 'widget.public_messagesedit',
	width: 580,

	items: [
		{
			xtype: 'form', itemId: 'frmPublic_messages', bodyPadding: 8, border: true, defaults: { labelWidth: 65, msgTarget: 'title', },
			items: [
				{	xtype: 'hiddenfield', itemId: 'mess_key', name: 'mess_key', },
				{	xtype: 'hiddenfield', itemId: 'mess_id', name: 'mess_id', },
				{	xtype: 'hiddenfield', itemId: 'mess_encrypt', name: 'mess_encrypt', },
			    {
					xtype: 'fieldcontainer', fieldLabel: translations.usuario, labelClsExtra: 'lbl00001', layout: 'hbox',
					items: [
						{   xtype: 'hiddenfield', itemId: 'indiv_key', name: 'indiv_key', },
						{   xtype: 'hiddenfield', itemId: 'indiv_id', name: 'indiv_id', },
						{   xtype: 'hiddenfield', itemId: 'INDIV_DNI', name: 'INDIV_DNI', },
						{	xtype: 'component_textfieldtop', itemId: 'indiv_dni', name: 'indiv_dni', enableKeyEvents: true, maxLength: 12, width: 95, },
						{   xtype: 'component_button_imagesearch', itemId: 'btnIndiv_search', },
						{   xtype: 'displayfield', itemId: 'indiv_apenom', name: 'indiv_apenom', fieldCls: 'df00101', value: '' }
					]
				},
				{	xtype: 'component_textfield', itemId: 'mess_title', name: 'mess_title', fieldLabel: translations.asunto, maxLength: 100, anchor: '100%', },	
				{	xtype: 'component_textarea', itemId: 'mess_texto', name: 'mess_texto', fieldLabel: translations.mensaje, anchor: '100%', height: 200 },
				{	xtype: 'component_textfield', itemId: 'mess_clave', name: 'mess_clave',  enableKeyEvents: true, fieldLabel: translations.clave, inputType: 'password', minLength: 6, maxLength: 48, width: 250, },
			]
		}
	]
});