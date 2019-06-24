Ext.define('Siace.view.operations.Industrias_CoeficientesAdd', {
	extend: 'Siace.view.WindowSearch',
	alias: 'widget.operations_industrias_coeficientesadd',
	width: 500,

	items: [
		{
			xtype: 'form', itemId: 'frmIndustrias_Coeficientes',
			bodyPadding: 8, border: true, defaults: { labelWidth: 70, },
			items: [
				{	xtype: 'component_combo', itemId: 'coef_id', valueField: 'coef_id', displayField: 'coef_nombre', 
	                allowBlank: false, fieldCls: 'cbo00001', fieldLabel: translations.coeficiente, labelClsExtra: 'lbl00001', listConfig: { cls: 'item00001', }, width: 200, 
	            },
	            {	xtype: 'component_currencyfield', itemId: 'induscoef_cantid', allowbank: false, fieldLabel: translations.cantidad, numberDecimal: 8, value: '', width: 200, },
			    {	xtype: 'fieldcontainer',  fieldLabel: translations.sub_producto, labelClsExtra: 'lbl00001', layout: 'hbox',
					items: [
						{	xtype: 'hiddenfield', itemId: 'bs_key', },
						{	xtype: 'hiddenfield', itemId: 'BS_CODIGO', },
						{	xtype: 'textfield', itemId: 'bs_codigo', disabled: true, enableKeyEvents: true, enforceMaxLength: true, fieldCls: 'txt00001', margin: '0 4 0 0', maxLength: 15, width: 80, },
						{	xtype: 'component_button_imagesearch', itemId: 'btnBs_search', disabled: true, },
						{ 	xtype: 'displayfield', itemId: 'bs_nombre', fieldCls: 'df00101', }
					]
				},
			]
		}
	],
});