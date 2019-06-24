Ext.define('Siace.view.treasury.Cuentas_BancariasEdit', {
	extend: 'Siace.view.WindowEdit',
	alias: 'widget.treasury_cuentas_bancariasedit',
	width: 550,

	items: [
		{
			xtype: 'form', itemId: 'frmTreasury_cuentas_bancarias', bodyPadding: 8, border: true, defaults: { labelWidth: 90, }, width: '100%', 
			items: [
				{	xtype: 'hiddenfield', itemId: 'cuebanc_id', name: 'cuebanc_id', },
				{	xtype: 'hiddenfield', itemId: 'cuebanc_key', name: 'cuebanc_key', },
	            {	xtype: 'component_combo', itemId: 'entibanc_id', name: 'entibanc_id', valueField: 'tabgen_id', displayField: 'tabgen_nombre', tpl:'<tpl for="."><div class="x-boundlist-item">{tabgen_nombre}&nbsp;</div></tpl>', fieldLabel: translations.entidad_bancaria, editable: true, anchor: '100%', },
				{
					xtype: 'fieldcontainer', fieldLabel: translations.tipo_cuenta, labelClsExtra: 'lbl00001', layout: 'hbox', width: '100%',
					items: [
			            {	xtype: 'component_combo', itemId: 'tipcuebanc_id', name: 'tipcuebanc_id',  valueField: 'tabgen_id', displayField: 'tabgen_nombre', tpl:'<tpl for="."><div class="x-boundlist-item">{tabgen_nombre}&nbsp;</div></tpl>', width: 160, },
			            {   xtype: 'container', flex: 1 },
						{
							xtype: 'component_combo', itemId: 'mone_id', name: 'mone_id', fieldLabel: translations.moneda,
			                store: {
			                    fields: [ { name: 'mone_id', type: 'int' }, { name:'mone_nombre', type: 'string' } ],
			                    data: [ { mone_id: '1', mone_nombre: 'Soles' }, { mone_id: '2', mone_nombre: 'Dolares' }, ] 
			                },
							valueField: 'mone_id', displayField: 'mone_nombre', tpl:'<tpl for="."><div class="x-boundlist-item">{mone_nombre}&nbsp;</div></tpl>', labelWidth: 70, width: 180,
						},
					]
				},
				{
					xtype: 'fieldcontainer', fieldLabel: 'N° '+translations.cuenta, labelClsExtra: 'lbl00001', layout: 'hbox', width: '100%',
					items: [			    
			            {	xtype: 'component_textfieldtop', itemId: 'cuebanc_nro', name: 'cuebanc_nro', width: 160 },
			            {   xtype: 'container', flex: 1 },
						{	xtype: 'component_datefield', itemId: 'cuebanc_fechaini', name: 'cuebanc_fechaini', fieldLabel: translations.fecha_inicial, labelWidth: 70, width: 180, }
					]
				},
			    {
					xtype: 'fieldcontainer', fieldLabel: translations.cuenta_contable, labelClsExtra: 'lbl00001', layout: 'hbox',
					items: [
						{   xtype: 'hiddenfield', itemId: 'pctbl_id', name: 'pctbl_id', },					
						{   xtype: 'hiddenfield', itemId: 'PCTBL_CUENTA', name: 'PCTBL_CUENTA', },
						{	xtype: 'component_textfieldtop', itemId: 'pctbl_cuenta', name: 'pctbl_cuenta', enableKeyEvents: true, maxLength: 15, width: 90, },
						{   xtype: 'component_button_imagesearch', itemId: 'btnPctbl_search', },
						{   xtype: 'displayfield', itemId: 'pctbl_nombre', name: 'pctbl_nombre', fieldCls: 'df00101', value: '' }
					]
				},
	            {	xtype: 'component_combo', itemId: 'fuefin_id', name: 'fuefin_id', valueField: 'fuefin_id', displayField: 'fuefin_codename', tpl:'<tpl for="."><div class="x-boundlist-item">{fuefin_codename}&nbsp;</div></tpl>', fieldLabel: translations.fuente_financiamiento_abrev, anchor: '100%', },
				{	xtype: 'component_textarea', itemId: 'cuebanc_observ', name: 'cuebanc_observ', fieldLabel: translations.comentario, anchor: '100%', }
			]
		}
	]
});