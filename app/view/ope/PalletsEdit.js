Ext.define('Siace.view.operations.PalletsEdit', {
	extend: 'Siace.view.WindowEdit',
	alias: 'widget.operations_palletsedit',
	width: 400,

	items: [
		{
			xtype: 'form', itemId: 'frmOperations_palletes',
			border: true, bodyPadding: 8,
			defaults: { anchor: '100%', },
			items: [
				{   xtype: 'hiddenfield', itemId: 'pall_id',  name: 'pall_id', },
				{
					xtype: 'fieldcontainer',
				    layout: 'hbox', width: '100%',
					items: [
						{ 	xtype: 'displayfield', fieldCls: 'df00104', value: 'Packing' },
						{ 	xtype: 'displayfield', itemId: 'pack_documento', fieldCls: 'df00101', }
					]
				},
				{
					xtype: 'fieldcontainer',
				    layout: 'hbox', width: '100%',
					items: [
						{
							xtype: 'component_numberfield', itemId: 'pall_nro', name: 'pall_nro',
							fieldLabel: 'Pallet N°',
							allowBlank: false, decimalPrecision: 0, labelWidth: 65, maxLength: 3, maxValue: 999, value: '', width: 120,
						},
						{
							xtype: 'component_numberfield', itemId: 'pall_peso', name: 'pall_peso',
							fieldLabel: translations.peso, renderer: Ext.util.Format.numberRenderer('000,000,000.000'), 
							allowBlank: false, decimalPrecision: 3, flex: 1, labelClsExtra: 'lbl00003', labelWidth: 140, maxLength: 12, value: '',
						},
					]
				},
				{
					xtype: 'component_textarea', itemId: 'pall_observ',  name: 'pall_observ',
					fieldLabel: translations.comentario,
					labelWidth: 65,
				}
			]
		}
	]
});