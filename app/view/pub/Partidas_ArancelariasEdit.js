Ext.define('Siace.view.public.Partidas_ArancelariasEdit', {
	extend: 'Siace.view.WindowEdit',
	alias: 'widget.public_partidas_arancelariasedit',
	width: 500,

	items: [
		{
			xtype: 'form', itemId: 'frmPublic_partidas_arancelarias', bodyPadding: 8, border: true, bodyBorder: false, defaults: { labelWidth: 75, },
			layout: { type: 'vbox' },
			items: [
				{   xtype: 'hiddenfield', name: 'partaran_key' },
				{
					xtype: 'fieldcontainer', fieldLabel: 'Partida', labelClsExtra: 'lbl00001', layout: 'hbox',
				    items: [
						{	xtype: 'component_textfieldtop', itemId: 'partarancapi_code', name: 'partarancapi_code', maxLength: 2, vtype: 'onlyNumeric', width: 40, },
						{	xtype: 'component_textfieldtop', itemId: 'partaranpart_code', name: 'partaranpart_code', maxLength: 2, vtype: 'onlyNumeric', width: 40, },
						{	xtype: 'component_textfieldtop', itemId: 'partaransubpart_code', name: 'partaransubpart_code', maxLength: 2, vtype: 'onlyNumeric', width: 40, },
						{	xtype: 'component_textfieldtop', itemId: 'partaransubpartnand_code', name: 'partaransubpartnand_code', maxLength: 2, vtype: 'onlyNumeric', width: 40, },
						{	xtype: 'component_textfieldtop', itemId: 'partaransubpartnac_code', name: 'partaransubpartnac_code', maxLength: 2, vtype: 'onlyNumeric', width: 40, },
					]
				},
				{	xtype: 'component_textarea', itemId: 'partaran_nombre', name: 'partaran_nombre', fieldLabel: 'Descripción', rows: '3', width: '100%', },
				{	xtype: 'component_textfield', itemId: 'partaran_abrev', name: 'partaran_abrev', fieldLabel: 'Abreviado', maxLength: 20, width: '100%' },
			]
		}
	],
});