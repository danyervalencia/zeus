Ext.define('Siace.view.accounting.Plan_ContableEdit', {
	extend: 'Siace.view.WindowEdit',
	alias: 'widget.accounting_plan_contableedit',
	width: 500,
	items: [
		{
			xtype: 'form', bodyPadding: 0, border: true,
			items: [
				{
					xtype: 'tabpanel', activeTab: 0, plain: true, width: '100%',
		 			items: [
						{
							xtype: 'panel', bodyPadding: 8, layout: { type: 'vbox' }, defaults: { labelWidth: 65, msgTarget: 'title' }, title: 'Datos Principales',
							items: [
								{	xtype: 'hiddenfield', itemId: 'pctbl_id', name: 'pctbl_id'},
								{	xtype: 'component_textfield', itemId: 'pctbl_cuenta', name: 'pctbl_cuenta', fieldLabel: 'Cuenta', allowBlank: false, maxLength: 8, vtype: 'onlyNumeric', width: 180 },
								{	xtype: 'component_textfield', itemId: 'pctbl_nombre', name: 'pctbl_nombre', fieldLabel: 'Descripción', allowBlank: false, maxLength: 50, width: '100%' },
								{	xtype: 'component_combo', itemId: 'tipcta_id', name: 'tipcta_id', valueField: 'tabgen_id', displayField: 'tabgen_codename', tpl:'<tpl for="."><div class="x-boundlist-item">{tabgen_codename}&nbsp;</div></tpl>', fieldLabel: 'Tipo Cuenta', width: '100%' },
								{	xtype: 'component_combo', itemId: 'tipanal_id', name: 'tipanal_id', valueField: 'tabgen_id', displayField: 'tabgen_codename', tpl:'<tpl for="."><div class="x-boundlist-item">{tabgen_codename}&nbsp;</div></tpl>', fieldLabel: 'Nivel Saldo', width: '100%' },
								{	xtype: 'component_combo', itemId: 'tipanx_id', name: 'tipanx_id', valueField: 'tabgen_id', displayField: 'tabgen_codename', fieldLabel: 'Tipo Anexo', tpl:'<tpl for="."><div class="x-boundlist-item">{tabgen_codename}&nbsp;</div></tpl>', width: '100%' },
								{	xtype: 'component_combo', itemId: 'mone_id', name: 'mone_id', store: 'array.MonedasAB', valueField: 'mone_id', displayField: 'mone_nombre', tpl:'<tpl for="."><div class="x-boundlist-item">{mone_nombre}&nbsp;</div></tpl>', fieldLabel: 'Moneda', value: '0', width: '180' },
								{	xtype: 'component_textarea', itemId: 'pctbl_observ', name: 'pctbl_observ', fieldLabel: 'Comentario', width: '100%', }
							]
						},
					]
				}
			]
		}
	]
});