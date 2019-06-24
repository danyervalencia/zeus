Ext.define('Siace.view.accounting.Libro_Diario_DetEdit', {
	extend: 'Siace.view.WindowEdit',
	alias: 'widget.accounting_libro_diario_detedit',
	width: 500,

	items: [
		{
			xtype: 'form', bodyPadding: 8, border: true, bodyBorder: false, defaults: { labelWidth: 65, }, layout: { type: 'vbox' },
			items: [
				{   xtype: 'hiddenfield', itemId: 'libdia_id', },
				{   xtype: 'displayfield', itemId: 'subdia_codename', fieldLabel: 'Subdiario', fieldCls: 'df00104', labelClsExtra: 'lbl00101', margin: '-5 0 0 0',  submitValue: false, width: '100%', },
				{   xtype: 'displayfield', itemId: 'libdia_record', fieldLabel: 'Registro', fieldCls: 'df00104', labelClsExtra: 'lbl00101', margin: '-5 0 2 0', submitValue: false, width: '100%', },
				{
					xtype: 'container', layout: 'hbox', width: '100%',
				    items: [				
						{   xtype: 'displayfield', itemId: 'documento', fieldLabel: 'Documento', fieldCls: 'df00104', labelClsExtra: 'lbl00101', labelWidth: 65, margin: '-5 0 2 0', submitValue: false, width: 250, },
						{	xtype: 'displayfield', flex: 1, },
						{	xtype: 'displayfield', itemId: 'libdia_monto', fieldLabel: 'Importe', fieldCls: 'df00106', labelClsExtra: 'lbl00101', labelWidth: 45, padding: '-7 0 0 0', width: 130, },
					]
				},
				{	xtype: 'component_combo', itemId: 'libdiadet_type', valueField: 'libdiadet_type', displayField: 'libdiadet_typename', fieldLabel: 'Tipo', width: 190, },
				{	xtype: 'component_combo', itemId: 'libdiadet_parent', valueField: 'pctbl_id', displayField: 'pctbl_codename', disabled: true, fieldLabel: 'Debe', width: '100%', },
				{
					xtype: 'container', layout: 'hbox', width: '100%',
					items: [
						{   xtype: 'hiddenfield', itemId: 'pctbl_id', name: 'pctbl_id' },
						{   xtype: 'hiddenfield', itemId: 'PCTBL_CUENTA', name: 'PCTBL_CUENTA' },
						{	xtype: 'component_textfield', itemId: 'pctbl_cuenta', name: 'pctbl_cuenta', enableKeyEvents: true, fieldLabel: 'Cuenta', labelWidth: 65, margin: '0 4 4 0', maxLength: 15, width: 160, },
						{   xtype: 'component_button_imagesearch', itemId: 'btnPctbl_search' },
						{   xtype: 'displayfield', itemId: 'pctbl_nombre', name: 'pctbl_nombre', fieldCls: 'df00101', value: '' }
					]
				},
				{   xtype: 'component_currencyfield', itemId: 'libdiadet_monto', name: 'libdiadet_monto', fieldLabel: 'Importe', allowBlank: false, labelWidth: 65, width: 160, }
			]
		}
	],
});