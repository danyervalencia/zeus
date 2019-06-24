Ext.define('Siace.view.treasury.ConceptosEdit', {
	extend: 'Siace.view.WindowEdit',
	alias: 'widget.treasury_conceptosedit',
	width: 650,

	items: [
		{
			xtype: 'form', itemId: 'frmTreasury_conceptos', bodyPadding: 8, border: true, width: '100%', defaults: { labelWidth: 90, msgTarget: 'title', },
			items: [
				{	xtype: 'hiddenfield', itemId: 'concp_id', name: 'concp_id', },
				{	xtype: 'hiddenfield', itemId: 'concp_key', name: 'concp_key', },
				{	xtype: 'component_textfield', itemId: 'concp_code', name: 'concp_code', fieldLabel: translations.codigo, maxLength: 3, width: 140 },
				{	xtype: 'component_textfield', itemId: 'concp_nombre', name: 'concp_nombre', fieldLabel: translations.descripcion, maxLength: 80, anchor: '100%', },
			    {
					xtype: 'fieldcontainer', fieldLabel: translations.cuenta_contable, labelClsExtra: 'lbl00001', layout: 'hbox',
					items: [
						{   xtype: 'hiddenfield', itemId: 'pctbl_id', name: 'pctbl_id', },					
						{   xtype: 'hiddenfield', itemId: 'PCTBL_CUENTA', name: 'PCTBL_CUENTA', },
						{	xtype: 'component_textfieldtop', itemId: 'pctbl_cuenta', name: 'pctbl_cuenta', enableKeyEvents: true, maxLength: 15, width: 95, },
						{   xtype: 'component_button_imagesearch', itemId: 'btnPctbl_search', },
						{   xtype: 'displayfield', itemId: 'pctbl_nombre', name: 'pctbl_nombre', fieldCls: 'df00101', value: '' }
					]
				},
	            {	xtype: 'component_combo', itemId: 'espedet_id', name: 'espedet_id', valueField: 'espedet_id', displayField: 'espedet_codename', tpl:'<tpl for="."><div class="x-boundlist-item">{espedet_codename}&nbsp;</div></tpl>', fieldLabel: translations.clasificador, editable: true, anchor: '100%', },
	            {	xtype: 'component_combo', itemId: 'fuefin_id', name: 'fuefin_id', valueField: 'fuefin_id', displayField: 'fuefin_codename', tpl:'<tpl for="."><div class="x-boundlist-item">{fuefin_codename}&nbsp;</div></tpl>', fieldLabel: translations.fuente_financiamiento_abrev, anchor: '100%',},
				{	xtype: 'component_textarea', itemId: 'concp_observ', name: 'concp_observ', fieldLabel: translations.comentario, anchor: '100%', }
			]
		}
	]
});