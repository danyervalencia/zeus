Ext.define('Siace.view.treasury.Bienes_ServsBrowse', {
	extend: 'Siace.view.PanelBrowse',
	alias: 'widget.treasury_bienes_servsbrowse',

    items: [
        {
            xtype: 'grid', itemId: 'grdTreasury_bienes_servs', autoHeight: true, columnLines: true, stripeRows: true,
            columns: [
            	{ 	xtype: 'rownumberer', width: 30 },
				{	dataIndex: 'bs_codigo', text: translations.codigo,width: 80, },
				{ 	dataIndex: 'bscat_abrev', text: translations.categoria_abrev, tooltip: translations.categoria, width: 50, },
				{ 	dataIndex: 'bs_gestion', text: translations.documento, width: 80, },
				{	dataIndex: 'bs_nombre', text: translations.descripcion, tooltip: translations.moneda, width: 650, },	
				{	dataIndex: 'unimed_abrev', text: translations.unidad_medida_siglas, tooltip: translations.unidad_medida, width: 50, },
				{	text: translations.porcentaje + ' (%)', align: 'right', width: 90,
		            renderer: function(value, metaData, record, rowIdx, colIdx, store, view) {
		                return (record.get('bs_factor') == 'P' ? Ext.util.Format.number(record.get('bs_monto'), '000.000000') : '');
		            },
				},
				{ 	dataIndex: 'mone_abrev', text: translations.moneda_abrev, tooltip: translations.moneda, width: 40, },
				{ 	dataIndex: 'bs_importe', text: translations.importe, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 90, },
				{	dataIndex: 'bs_inafecto', text: translations.igv_siglas, align: 'center', width: 40,
		            renderer: function(value, metaData, record, rowIdx, colIdx, store, view) {
		                return (record.get('bs_inafecto') == '1' ? '' : 'S');
		            },
				},
				{ 	dataIndex: 'pctbl_cuenta', text: translations.cuenta_contable, width: 100, },
				{	dataIndex: 'espedet_codigo', text: translations.clasificador, width: 100, },
			]
		}
	],

	dockedItems: [
	    {
	        xtype: 'toolbar',  dock: 'top', layout: 'hbox', padding: '1 0 3 2', ui: 'footer',
	        items: [
	        	{	xtype: 'component_combo', itemId: 'opc_id', valueField: 'opc_id', disabled: true, hidden: true, },
	            {	xtype: 'component_combotop', itemId: 'bst_id', store: 'array.Bienes_Servs_Tipos', valueField: 'bst_id', displayField: 'bst_abrev', tpl:'<tpl for="."><div class="x-boundlist-item">{bst_abrev}&nbsp;</div></tpl>', fieldLabel: '&nbsp;'+translations.tipo, listConfig: { cls: 'item00001', minWidth: 40 }, width: 40, },
	            {	xtype: 'component_combotop', itemId: 'bscat_id', valueField: 'bscat_id', displayField: 'bscat_abrev', tpl:'<tpl for="."><div class="x-boundlist-item">{bscat_abrev}&nbsp;</div></tpl>', fieldLabel: '&nbsp;'+translations.categoria, listConfig: { cls: 'item00001', minWidth: 70, }, width: 70, },
	            {	xtype: 'component_combotop', itemId: 'mone_id', store: 'array.MonedasAB', valueField: 'mone_id', displayField: 'mone_abrev', tpl:'<tpl for="."><div class="x-boundlist-item">{mone_abrev}&nbsp;</div></tpl>', fieldLabel: '&nbsp;'+translations.moneda, listConfig: { cls: 'item00001',  minWidth: 60 }, value: 0, width: 60, },
				{ 	xtype: 'component_textfieldtop', itemId: 'bs_nombre', fieldLabel: '&nbsp;'+translations.descripcion, maxLength: 50, width: 250, },
	            {	xtype: 'component_combotop', itemId: 'espedet_id', valueField: 'espedet_id', displayField: 'espedet_codigo', tpl:'<tpl for="."><div class="x-boundlist-item">{espedet_codigo}&nbsp; &nbsp;{espedet_nombre}</div></tpl>', fieldLabel: '&nbsp;'+translations.clasificador, listConfig: { cls: 'item00001', minWidth: 400, maxWidth: 400 }, width: 100, },
	        ]
	    },	
		{
            xtype: 'toolbar', dock: 'bottom', ui: 'footer',
            items: [
                { xtype: 'component_buttonNew' },
                { xtype: 'component_buttonModify' },
                { xtype: 'component_buttonQuery' },
                { xtype: 'component_buttonDelete' },
                { xtype: 'component_buttonPrinter' }            
            ]
		},
		{	xtype: 'component_pagingtoolbar', itemId: 'pgtTreasury_bienes_servs', }
	],
});