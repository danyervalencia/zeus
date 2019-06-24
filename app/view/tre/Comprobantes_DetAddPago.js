Ext.define('Siace.view.treasury.Comprobantes_DetAddPago', {
	//extend: 'Siace.view.WindowEdit',
	extend: 'Siace.view.WindowSearch',
	alias: 'widget.treasury_comprobantes_detaddpago',
	width: 400,

	items: [
		{
			xtype: 'form', bodyPadding: 8, border: true, width: '100%', defaults: { labelWidth: 70 },
			items: [
				{	xtype: 'hiddenfield', itemId: 'menu_id', name: 'menu_id', },
				{	xtype: 'hiddenfield', itemId: 'persfono_key', name: 'persfono_key', },
				{	xtype: 'hiddenfield', itemId: 'pers_key', name: 'pers_key', },
				{
			     	xtype: 'container', layout: 'hbox', margin: '0 0 5 0', width: '100%',
			        items: [
						{	xtype: 'component_combo', itemId: 'doc_id', name: 'doc_id', valueField: 'doc_id', displayField: 'doc_abrev', tpl:'<tpl for="."><div class="x-boundlist-item">{doc_abrev}&nbsp;</div></tpl>', fieldLabel: 'Documento', labelWidth: 70, margin: '0 4 0 0', width: 150, },
						{	xtype: 'component_combotop', itemId: 'year_id', name: 'year_id', store: 'array.Years', valueField: 'year_id', displayField: 'year_nro', tpl:'<tpl for="."><div class="x-boundlist-item">{year_nro}&nbsp;</div></tpl>', listConfig: { cls: 'item00001', minWidth: 60, }, width: 60 },
						{	xtype: 'component_combotop', itemId: 'area_key', name: 'area_key', valueField: 'area_key', displayField: 'area_abrev', tpl:'<tpl for="."><div class="x-boundlist-item">{area_abrev}&nbsp;</div></tpl>', listConfig: { cls: 'item00001', minWidth: 70, }, width: 70, },
						{	xtype: 'component_textfield', itemId: 'expe_nro', name: 'expe_nro', maxLength: 5, width: 70 },
					]
				},
				{	xtype: 'component_datefield', itemId: 'expe_fecha', name: 'expe_fecha', fieldLabel: 'Fecha', allowBlank: false, maxLength: 10, width: 170, },
				{	xtype: 'component_combo', itemId: 'cuebanc_key', name: 'cuebanc_key', valueField: 'cuebanc_key', displayField: 'cuebanc_nrobanco', fieldLabel: 'Cta. Bancaria', tpl:'<tpl for="."><div class="x-boundlist-item">{cuebanc_nrobanco}&nbsp;</div></tpl>', anchor: '100%', },
				{	xtype: 'component_combo', itemId: 'espedet_id', valueField: 'espedet_id', displayField: 'espedet_codigo', tpl:'<tpl for="."><div class="x-boundlist-item">{espedet_codigo}&nbsp; &nbsp;{espedet_nombre}</div></tpl>', fieldLabel: 'Clasificador', anchor: '100%', },
				{   xtype: 'component_currencyfield', fieldLabel: 'Importe', itemId: 'comprobdet_monto', name: 'comprobdet_monto', width: 180, }
			]
		}
	],
});