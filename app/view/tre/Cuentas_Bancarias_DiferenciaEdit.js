Ext.define('Siace.view.treasury.Cuentas_Bancarias_DiferenciaEdit', {
	extend: 'Siace.view.WindowEdit',
	alias: 'widget.treasury_cuentas_bancarias_diferenciaedit',
	width: 420,

	items: [
		{
			xtype: 'form', itemId: 'frmTreasury_cuentas_bancarias_diferencia',
			bodyPadding: 8, border: true, width: '100%', defaults: { labelWidth: 60 },
			items: [
				{	xtype: 'hiddenfield', itemId: 'cuebancdif_key', name: 'cuebancdif_key', },
				{	xtype: 'hiddenfield', itemId: 'cuebancdif_id', name: 'cuebancdif_id', },
				{	xtype: 'hiddenfield', itemId: 'cuebanc_key', name: 'cuebanc_key', },
				{
					xtype: 'container', layout: 'hbox', defaults: { labelWidth: 60 }, margin: '-5 0 0 0', width: '100%',
					items: [
						{   xtype: 'displayfield', itemId: 'entibanc_nombre', name: 'entibanc_nombre',  fieldLabel: translations.banco, fieldCls: 'df00104', labelClsExtra: 'lbl00101', width: 320, },
						{   xtype: 'displayfield', flex: 1 },
						//{   xtype: 'displayfield', itemId: 'mone_nombre', name: 'mone_nombre', fieldLabel: translations.moneda, fieldCls: 'df00104', labelAlign: 'right', labelClsExtra: 'lbl00101', labelWidth: 55, width: 190 },
					]
				},
				{
					xtype: 'container', layout: 'hbox', defaults: { labelWidth: 60 }, margin: '-5 0 0 0', width: '100%',
				    items: [
						{   xtype: 'displayfield', itemId: 'cuebanc_nro', name: 'cuebanc_nro', fieldLabel: 'N° Cuenta', fieldCls: 'df00104', labelClsExtra: 'lbl00101', width: 370 },
						{   xtype: 'displayfield', flex: 1 },
						//{   xtype: 'displayfield', itemId: 'fuefin_codeabrev', fieldLabel: translations.fuente_financiamiento_abrev, fieldCls: 'df00104', labelAlign: 'right', labelClsExtra: 'lbl00101', labelWidth: 55, padding: '-5 0 0 0', width: 190 },
					]
				},
				{
					xtype: 'container', layout: 'hbox', width: '100%',
					items: [				
						{	xtype: 'component_datefield', itemId: 'cuebancdif_fecha', name: 'cuebancdif_fecha', fieldLabel: translations.fecha, allowBlank: false, labelWidth: 60, width: 170, },
						{   xtype: 'displayfield', flex: 1 },
			            {	xtype: 'component_combo', itemId: 'cuebancdif_tctype', name: 'cuebancdif_tctype', valueField: 'tabgen_id', displayField: 'tabgen_nombre', fieldLabel: 'Tipo de Cambio', labelWidth: 85, width: 180, },
					]
				},
				{
					xtype: 'container', layout: 'hbox', width: '100%',
				    items: [
					    {
					    	xtype: 'fieldset', defaults: { labelWidth: 40, }, layout: { type: 'vbox' }, padding: '2 8 4 8', title: 'Libro Caja', width: 170, 
							items: [
								{   xtype: 'component_currencyfield', itemId: 'cuebancdif_caj_debe', name: 'cuebancdif_caj_debe', fieldLabel: 'Debe', maxLength: 12, width: '100%', },
								{   xtype: 'component_currencyfield', itemId: 'cuebancdif_caj_haber', name: 'cuebancdif_caj_haber', fieldLabel: 'Haber', maxLength: 12, width: '100%', },
								{   xtype: 'component_currencyfield', itemId: 'cuebancdif_caj_saldo', disabled: true, fieldLabel: 'Saldo', maxLength: 12, width: '100%', },
							]
						},
						{   xtype: 'displayfield', flex: 1 },
					    {
					    	xtype: 'fieldset', defaults: { labelWidth: 45, }, layout: { type: 'vbox' }, padding: '2 8 4 8', title: 'Cuenta Bancaria', width: 180, 
							items: [
								{   xtype: 'component_currencyfield', itemId: 'cuebancdif_debe', name: 'cuebancdif_debe', fieldLabel: 'Debe', maxLength: 12, width: '100%', },
								{   xtype: 'component_currencyfield', itemId: 'cuebancdif_haber', name: 'cuebancdif_haber', fieldLabel: 'Haber', maxLength: 12, width: '100%', },
								{   xtype: 'component_currencyfield', itemId: 'cuebancdif_saldo', disabled: true, fieldLabel: 'Saldo', maxLength: 12, width: '100%', },
							]
						},
					]
				}
			]
		}
	]
});