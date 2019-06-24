Ext.define('Siace.view.treasury.VentasSearchxCharge', {
	extend: 'Siace.view.WindowSearch',
	alias: 'widget.treasury_ventassearchxcharge',
	width: 560,

	items: [
		{
			xtype: 'form', itemId: 'frmTreasury_ventas', border: false, bodyPadding: 1,
			items: [
		        {
		            xtype: 'container', layout: 'hbox', width: '100%',
		            items: [
						{
							xtype: 'displayfield', itemId: 'pers_nombre',
						    fieldLabel: '&nbsp;'+translations.cliente, fieldCls: 'df00104', labelClsExtra: 'lbl00101', labelWidth: 45, width: '100%',
						},
		            ]
		        },
		        {
		            xtype: 'grid', itemId: 'grdTreasury_ventas',
		            columnLines: true, height: 278,
		            columns: [
		                {   dataIndex: 'vent_documento', text: translations.documento, width: 120, },
		                {	dataIndex: 'vent_fecha', text: translations.fecha, align: 'center', lockable: false, renderer: Ext.util.Format.dateRenderer('d/m/Y'), width: 85, },
		                {   dataIndex: '', text: translations.area, width: 50, },
						{   dataIndex: 'mone_abrev', text: translations.moneda_abrev, tooltip: translations.moneda, width: 35, },
						{	dataIndex: 'vent_monto', text: translations.importe, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 90, },
						{	dataIndex: '', text: 'Percep.', align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), flex: 1, },
						{	dataIndex: 'vent_monto_saldo', text: translations.saldo, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 90, },
		            ]
		        },
		        {	xtype: 'component_pagingtoolbar', itemId: 'pgtTreasury_ventas', }
			],
		}
	],

	__pers_key: '',
	setPers_key: function(pcPers_key) {
		this.__pers_key = pcPers_key;
   	},
	getPers_key: function() {
		return this.__pers_key;
   	},

});