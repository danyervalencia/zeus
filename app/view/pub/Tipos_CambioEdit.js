Ext.define('Siace.view.public.Tipos_CambioEdit', {
	extend: 'Siace.view.WindowEdit',
	alias: 'widget.public_tipos_cambioedit',
	width: 280,

	items: [
		{
			xtype: 'form', itemId: 'frmPublic_tipos_cambio', bodyPadding: 8, border: true, defaults: { labelWidth: 70, },
			items: [
				{	xtype: 'hiddenfield', itemId: 'tipcamb_id', name: 'tipcamb_id', },
				{	xtype: 'component_datefield', itemId: 'tipcamb_fecha', name: 'tipcamb_fecha', fieldLabel: translations.fecha, allowBlank: false, width: 170, },
				{	xtype: 'component_combo', itemId: 'mone_01', name: 'mone_01', valueField: 'mone_id', displayField: 'mone_nombre', fieldLabel: translations.moneda +' 1', allowBlank: false, anchor: '100%', },
				{	xtype: 'component_combo', itemId: 'mone_02', name: 'mone_02', valueField: 'mone_id', displayField: 'mone_nombre', fieldLabel: translations.moneda +' 2', allowBlank: false, anchor: '100%', },
				{   xtype: 'component_currencyfield', itemId: 'tipcamb_compra', name: 'tipcamb_compra', fieldCls: 'txt00006', fieldLabel: translations.compra, numberDecimal: 3, width: 180, },
				{   xtype: 'component_currencyfield', itemId: 'tipcamb_venta', name: 'tipcamb_venta', fieldCls: 'txt00006', fieldLabel: translations.venta, numberDecimal: 3, width: 180, },
			]
		}
	]
});