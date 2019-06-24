Ext.define('Siace.view.treasury.Cuentas_BancariasBrowse', {
	extend: 'Siace.view.PanelBrowse',
	alias: 'widget.treasury_cuentas_bancariasbrowse',

    items: [
        {
            xtype: 'grid', itemId: 'grdTreasury_cuentas_bancarias', autoHeight: true, columnLines: true, stripeRows: true,
            columns: [
            	{ 	xtype: 'rownumberer', width: 30 },
				{   dataIndex: 'entibanc_nombre', text : translations.entidad_bancaria, width: 200, },
				{ 	dataIndex: 'tipcuebanc_abrev', text: translations.tipo_cuenta_bancaria_siglas, tooltip: translations.tipo_cuenta_bancaria, width: 40, },
				{ 	dataIndex: 'mone_nombre', text: translations.moneda, tooltip: translations.moneda, width: 150, },
				{	dataIndex: 'cuebanc_nro', text: translations.numero_cuenta_bancaria, flex: 1, },
				{	dataIndex: 'cuebanc_fechaini', text: translations.fecha, renderer: Ext.util.Format.dateRenderer('d/m/Y'), width: 85, },
				{	dataIndex: 'pctbl_cuenta', text: translations.cuenta_contable, width: 100, },
				{
					dataIndex: 'fuefin_code', text: translations.fuente_financiamiento, width: 250,
		            renderer: function(value, metaData, record, rowIdx, colIdx, store, view) {
		                return record.get('fuefin_code') +' - '+ record.get('fuefin_nombre');
		            },
				},
				{	dataIndex: '', text: translations.saldo, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 100, },
			]
		}
	],

	dockedItems: [
	    {
	        xtype: 'toolbar', dock: 'top', layout: 'hbox', padding: '1 0 3 2', ui: 'footer',
	        items: [
	            {	xtype: 'component_combo', itemId: 'opc_id', valueField: 'opc_id', disabled: true, hidden: true, },
	            {	xtype: 'component_combotop', itemId: 'entibanc_id', valueField: 'tabgen_id', displayField: 'tabgen_nombre', tpl:'<tpl for="."><div class="x-boundlist-item">{tabgen_nombre}&nbsp;</div></tpl>', fieldLabel: '&nbsp;'+translations.entidad_bancaria, width: 200, },
	            {	xtype: 'component_combotop', itemId: 'tipcuebanc_id', valueField: 'tabgen_id', displayField: 'tabgen_codename', tpl:'<tpl for="."><div class="x-boundlist-item">{tabgen_codename}&nbsp;</div></tpl>', fieldLabel: '&nbsp;Tipo Cta. Bancaria', width: 150, },
	            {	xtype: 'component_combotop', itemId: 'mone_id', store: 'array.MonedasAB', valueField: 'mone_id', displayField: 'mone_abrev', tpl:'<tpl for="."><div class="x-boundlist-item">{mone_abrev}&nbsp;</div></tpl>', fieldLabel: '&nbsp;'+translations.moneda, listConfig: { cls: 'item00001',  minWidth: 60 }, value: 0, width: 60, },
				{	xtype: 'component_textfieldtop', itemId: 'cuebanc_nro', fieldLabel: '&nbsp;'+translations.numero_cuenta_bancaria, maxLength: 5, width: 150, },
	        ]
	    },	
		{
            xtype: 'toolbar', dock: 'bottom', ui: 'footer',
            items: [
            	{ xtype: 'component_buttonNew' },
                { xtype: 'component_buttonModify' },
                { xtype: 'component_buttonQuery' },
                { xtype: 'component_buttonDelete' },
                { xtype: 'component_button', itemId: 'btnMovements', iconCls: 'icon_Movements', text: translations.movimientos },
                { xtype: 'component_button', itemId: 'btnDifferential', icon: 'resources/icons/btnMoneyDolar.png', text: 'Diferencial de Cambio' }
            ]
		},
		{ 	xtype: 'component_pagingtoolbar', itemId: 'pgtTreasury_cuentas_bancarias', }
	],
});