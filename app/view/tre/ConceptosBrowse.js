Ext.define('Siace.view.treasury.ConceptosBrowse', {
	extend: 'Siace.view.PanelBrowse',
	alias: 'widget.treasury_conceptosbrowse',

    items: [
        {
            xtype: 'grid', itemId: 'grdTreasury_conceptos', autoHeight: true, columnLines: true, stripeRows: true,
            columns: [
            	{ 	xtype: 'rownumberer', width: 30 },
				{	dataIndex: 'concp_code', text: translations.codigo, width: 50, },
				{	dataIndex: 'concp_nombre', text: translations.descripcion, width: 450, },
				{	dataIndex: 'concp_abrev', text: translations.abreviado, width: 120, },
				{	dataIndex: '', text: translations.tipo, width: 80, },
				{	dataIndex: 'pctbl_cuenta', text: translations.cuenta_contable, width: 100, },
				{	dataIndex: 'espedet_codigo', text: translations.clasificador, width: 100, },
				{
					dataIndex: 'fuefin_code', text: translations.fuente_financiamiento,
					width: 250,
		            renderer: function(value, metaData, record, rowIdx, colIdx, store, view) {
		                return (record.get('fuefin_code') == '' ? '' : record.get('fuefin_code') +' - '+ record.get('fuefin_nombre'));
		            },
				},
			]
		}
	],

	dockedItems: [
	    {
	        xtype: 'toolbar',  dock: 'top', layout: 'hbox', padding: '1 0 3 2', ui: 'footer',
	        items: [
	        	{	xtype: 'component_combo', itemId: 'opc_id', valueField: 'opc_id', disabled: true, hidden: true, },
				{	xtype: 'component_textfieldtop', itemId: 'concp_nombre', fieldLabel: '&nbsp;'+translations.descripcion, maxLength: 50, width: 250, },
	            {	xtype: 'component_combotop', itemId: 'tipconcp_id', valueField: 'tipconcp_id', displayField: 'tipconcp_abrev', fieldLabel: '&nbsp;'+translations.tipo, listConfig: { cls: 'item00001', minWidth: 60 }, tpl:'<tpl for="."><div class="x-boundlist-item">{tipconcp_abrev}&nbsp;</div></tpl>', width: 60,},
	            { 	xtype: 'component_combotop', itemId: 'espedet_id', valueField: 'espedet_id', displayField: 'espedet_codigo', fieldLabel: '&nbsp;'+translations.clasificador, listConfig: { cls: 'item00001', minWidth: 500, maxWidth: 500 }, tpl:'<tpl for="."><div class="x-boundlist-item">{espedet_codigo}&nbsp; &nbsp;{espedet_nombre}</div></tpl>', width: 100, },
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
		{	xtype: 'component_pagingtoolbar', itemId: 'pgtTreasury_conceptos', }
	],
});