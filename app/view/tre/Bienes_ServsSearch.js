Ext.define('Siace.view.treasury.Bienes_ServsSearch', {
	extend: 'Siace.view.WindowSearch',
	alias: 'widget.treasury_bienes_servssearch',
	width: 800,

	items: [
		{
			xtype: 'form', itemId: 'frmTreasury_bienes_servs', bodyPadding: 0, layout: 'fit',
			items: [
		        {
		            xtype: 'grid', itemId: 'grdTreasury_bienes_servs', border: false, columnLines: true, height: 320,
		            columns: [
		                {	dataIndex: 'bs_codigo', text: translations.codigo, width: 80, },
		                {	dataIndex: 'bs_nombre', text: translations.descripcion, width: 518, },
		                {   dataIndex: 'unimed_abrev', text: translations.unidad_medida_siglas, tooltip: ' '+translations.unidad_medida+' ', width: 40, },
						{ 	dataIndex: 'mone_abrev', text: translations.moneda_abrev, tooltip: translations.moneda, width: 40, },
						{	dataIndex: 'bs_importe', text: translations.importe, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 90, },
						{	dataIndex: 'bscat_abrev', text: translations.categoria_abrev, tooltip: translations.categoria, width: 50, },
						{	dataIndex: 'bs_gestion', text: translations.documento,width: 80, },
		            ]
		        },
			],
			dockedItems: [
	    		{
	        		xtype: 'toolbar', dock: 'top', layout: 'hbox', padding: '1 0 3 1', ui: 'footer',
	        		items: [
		                {	xtype: 'component_combotop', itemId: 'bst_id', store: 'array.Bienes_Servs_Tipos', valueField: 'bst_id', displayField: 'bst_abrev', tpl:'<tpl for="."><div class="x-boundlist-item">{bst_abrev}&nbsp;</div></tpl>', fieldLabel: '&nbsp;'+translations.tipo, listConfig: { cls: 'item00001', minWidth: 40 }, value: 2, width: 40, },
			            {	xtype: 'component_combotop', itemId: 'bsg_id', valueField: 'bsg_id', displayField: 'bsg_code', tpl:'<tpl for="."><div class="x-boundlist-item">{bsg_code}&nbsp; {bsg_nombre}</div></tpl>', fieldLabel: '&nbsp;'+translations.grupo, listConfig: { cls: 'item00001', minWidth: 550 }, width: 45, },
			            {	xtype: 'component_combotop', itemId: 'bscat_id', valueField: 'bscat_id', displayField: 'bscat_abrev', tpl:'<tpl for="."><div class="x-boundlist-item">{bscat_abrev}&nbsp;</div></tpl>', fieldLabel: '&nbsp;'+translations.categoria, listConfig: { cls: 'item00001', minWidth: 70, }, width: 70, },
			            {	xtype: 'component_combotop', itemId: 'mone_id', store: 'array.MonedasAB', valueField: 'mone_id', displayField: 'mone_abrev', tpl:'<tpl for="."><div class="x-boundlist-item">{mone_abrev}&nbsp;</div></tpl>', fieldLabel: '&nbsp;'+translations.moneda, listConfig: { cls: 'item00001',  minWidth: 60 }, value: 0, width: 60, },
						{	xtype: 'component_textfieldtop', itemId: 'bs_nombre', fieldLabel: '&nbsp;'+translations.descripcion, maxLength: 50, width: 250, },
	        		]
	    		},
		        {	xtype: 'component_pagingtoolbar', itemId: 'pgtTreasury_bienes_servs', }
			]
		}
	]
});