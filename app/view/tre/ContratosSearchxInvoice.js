Ext.define('Siace.view.treasury.ContratosSearchxInvoice', {
	extend: 'Siace.view.WindowBrowse',
	alias: 'widget.treasury_contratossearchxinvoice',
	width: 680,

	items: [
		{
			xtype: 'form', itemId: 'frmTreasury_contratos', border: false, bodyPadding: 1,
			items: [
		        {
		            xtype: 'container', layout: 'hbox', width: '100%',
		            items: [
						{	xtype: 'displayfield', itemId: 'pers_nombre', fieldLabel: '&nbsp;'+translations.cliente, fieldCls: 'df00104', labelClsExtra: 'lbl00101', labelWidth: 45, width: '100%', },
		            ]
		        },
		        {
		            xtype: 'grid', itemId: 'grdTreasury_contratos', columnLines: true, height: 278,
		            columns: [
		                {   dataIndex: 'contr_documento', text: translations.documento, width: 100, },
		                {   dataIndex: 'pers_nombre', text: translations.razon_social, flex: 1, },
						{   dataIndex: 'mone_abrev', text: translations.moneda_abrev, tooltip: translations.moneda, width: 35, },
						{	dataIndex: 'contr_monto', text: translations.importe, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 85, },
		                {	dataIndex: 'tablex_fechaini', text: translations.fecha, align: 'center', lockable: false, renderer: Ext.util.Format.dateRenderer('d/m/Y'), width: 85, },
		            ]
		        },
		        {	xtype: 'component_pagingtoolbar', itemId: 'pgtTreasury_contratos', },
				{
		            xtype: 'toolbar', dock: 'bottom', ui: 'footer',
		            items: [
					    { xtype: 'component_buttonQuery' },
			            { xtype: 'component_button', itemId: 'btnInvoice', text: 'Emitir Facturar', disabled: false, iconCls: 'icon_Invoice' },
			            { xtype: 'component_buttonExit', disabled: false }
		            ]
		        },
			],
		}
	],
});