Ext.define('Siace.view.treasury.Entidades_Bancarias_ChequesBrowse', {
	extend: 'Siace.view.PanelBrowse',
	alias: 'widget.treasury_entidades_bancarias_chequesbrowse',

    items: [
        {
            xtype: 'grid', itemId: 'grdTreasury_entidades_bancarias_cheques',
            autoHeight: true, columnLines: true, stripeRows: true,

            columns: [
            	{ 	xtype: 'rownumberer', width: 30 },
				{   dataIndex: 'entibanc_nombre', text : translations.entidad_bancaria, width: 200, },
				{	dataIndex: 'entibancchq_nro', text: 'N° Cheque', width: 100, },
				{	dataIndex: 'entibancchq_fecha', text: translations.fecha, align: 'center', renderer: Ext.util.Format.dateRenderer('d/m/Y'), width: 85, },
				{ 	dataIndex: 'tablex_documento', text: translations.documento, width: 120, },
				{ 	dataIndex: 'cuebanc_nrobanco', text: translations.cuenta_bancaria, flex: 1, },
				{	dataIndex: 'cuebancmov_nro', text: 'N° Operación', width: 120, },
				{	dataIndex: 'cuebancmov_fecha', text: translations.fecha, align: 'center', renderer: Ext.util.Format.dateRenderer('d/m/Y'), width: 85, },
				{ 	dataIndex: 'mone_abrev', text: translations.moneda_abrev, tooltip: translations.moneda, width: 40, },
				{	dataIndex: 'entibancchq_monto', text: translations.importe, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 90, },
				{
					xtype: 'actioncolumn', itemId: 'acTreasury_cheques', align: 'center', width: 30,
					items: [
						{
        					icon: 'resources/icons/btnDownload.png', tooltip: '<b>DESCARGAR </b>, archivo adjunto.',
        					getClass: function(value, metadata, record) {
        						return ( record.get('entibancchq_pdf') == '' ? 'x-hide-display' :'x-grid-center-icon');
        					}
    					},
						{
        					icon: 'resources/icons/btnUpload.png', tooltip: '<b>SUBIR </b>, archivo al servidor.',
        					getClass: function(value, metadata, record) {
        						return ( record.get('entibancchq_pdf') == '' ? 'x-grid-center-icon' : 'x-hide-display');
        					}
    					}
    				]
				}
			]
		}
	],

	dockedItems: [
	    {
	        xtype: 'toolbar', dock: 'top', layout: 'hbox', padding: '1 0 3 2', ui: 'footer',
	        items: [
	        	{	xtype: 'component_combo', itemId: 'opc_id', valueField: 'opc_id', disabled: true, hidden: true, },
	            {	xtype: 'component_combotop', itemId: 'entibanc_id', valueField: 'tabgen_id', displayField: 'tabgen_nombre', tpl:'<tpl for="."><div class="x-boundlist-item">{tabgen_nombre}&nbsp;</div></tpl>', fieldLabel: '&nbsp;'+translations.entidad_bancaria, width: 200, },
				{	xtype: 'component_textfieldtop', itemId: 'entibancchq_nro', fieldLabel: '&nbsp;N° Cheque', maxLength: 5, width: 120, },
	            { 	xtype: 'component_combotop', itemId: 'mone_id', store: 'array.MonedasAB', valueField: 'mone_id', displayField: 'mone_abrev', tpl:'<tpl for="."><div class="x-boundlist-item">{mone_abrev}&nbsp;</div></tpl>', fieldLabel: '&nbsp;'+translations.moneda, listConfig: { cls: 'item00001',  minWidth: 60 }, value: 0, width: 60, },
	        ]
	    },	
		{
            xtype: 'toolbar', dock: 'bottom', ui: 'footer',
            items: [
                { xtype: 'component_buttonModify' },
                { xtype: 'component_buttonQuery' },
                { xtype: 'component_button', itemId: 'btnCuebancmov', iconCls: 'icon_Bank', text: 'Depósito en Cuenta Bancaria' }
            ]
		},
		{ 	xtype: 'component_pagingtoolbar', itemId: 'pagTreasury_entidades_bancarias_cheques', }
	],
});