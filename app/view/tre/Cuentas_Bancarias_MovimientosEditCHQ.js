Ext.define('Siace.view.treasury.Cuentas_Bancarias_MovimientosEditCHQ', {
	extend: 'Siace.view.WindowEdit',
	alias: 'widget.treasury_cuentas_bancarias_movimientoseditchq',
	width: 450,

	items: [
		{
			xtype: 'form', itemId: 'frmTreasury_cuentas_bancarias_movimientos',
			bodyPadding: 8, border: true, width: '100%', defaults: { labelWidth: 75 },
			items: [
				{	xtype: 'hiddenfield', itemId: 'cuebancmov_key', name: 'cuebancmov_key', },
				{	xtype: 'hiddenfield', itemId: 'cuebancmov_id', name: 'cuebancmov_id', },
				{	xtype: 'hiddenfield', itemId: 'entibancchq_key', name: 'entibancchq_key', },
				{
					xtype: 'container', layout: 'hbox', defaults: { labelWidth: 75 }, margin: '-5 0 0 0', width: '100%',
					items: [
						{   xtype: 'displayfield', itemId: 'entibancchq_detalle', name: 'entibancchq_detalle',  fieldLabel: 'Cheque', fieldCls: 'df00104', labelClsExtra: 'lbl00101', width: 320, },
						{   xtype: 'displayfield', flex: 1 },
						//{   xtype: 'displayfield', itemId: 'mone_nombre', name: 'mone_nombre', fieldLabel: translations.moneda, fieldCls: 'df00104', labelAlign: 'right', labelClsExtra: 'lbl00101', labelWidth: 55, width: 190 },
					]
				},
				{ 	xtype: 'component_combo', itemId: 'cuebanc_key', name: 'cuebanc_key', valueField: 'cuebanc_key', displayField: 'cuebanc_nrobanco', fieldLabel: 'N° '+translations.cuenta, anchor: '100%', },
				{	xtype: 'component_datefield', itemId: 'cuebancmov_fecha', name: 'cuebancmov_fecha', fieldLabel: translations.fecha, allowBlank: false, width: 185, },
				{	xtype: 'component_textfield', itemId: 'cuebancmov_nro', name: 'cuebancmov_nro', fieldLabel: 'N° Operación', allowBlank: false, maxLength: 20, width: 255 },
			]
		}
	]
});