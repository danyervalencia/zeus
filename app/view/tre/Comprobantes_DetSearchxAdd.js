Ext.define('Siace.view.treasury.Comprobantes_DetSearchxAdd', {
	extend: 'Siace.view.WindowSearch',
	alias: 'widget.treasury_comprobantes_detsearchxadd',
	width: 650,

	items: [
		{
			xtype: 'form', itemId: 'frmTreasury_comprobantes', border: false, bodyPadding: 1,
			items: [
		        {
		            xtype: 'grid', itemId: 'grdTreasury', columnLines: true, height: 278,
		            selType: 'checkboxmodel', selModel: { mode: 'MULTI', injectCheckbox: 0 },
		            columns: [
		                {   dataIndex: 'tablex_documento', text: translations.documento, width: 120, },
		                {	dataIndex: 'tablex_fecha', text: translations.fecha, align: 'center', lockable: false, renderer: Ext.util.Format.dateRenderer('d/m/Y'), width: 85, },
		                {   dataIndex: '', text: translations.area, width: 50, },
		                {	dataIndex: 'pctbl_cuenta', text: translations.cuenta_contable, sortable: false, flex: 1, },
		                {	dataIndex: 'tippag_abrev', text: translations.tipo_pago_siglas, sortable: false, tooltip: translations.tipo_pago, width: 40, },
						{   dataIndex: 'mone_abrev', text: translations.moneda_abrev, tooltip: translations.moneda, width: 35, },
						{	dataIndex: 'tablex_monto', text: translations.importe, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 90, },
						{	dataIndex: 'tablex_monto_pago', text: translations.pago, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 90, },
		            ],
					plugins: [
                    	Ext.create('Ext.grid.plugin.CellEditing', { ptype: 'cellediting', clicksToEdit: 1 })
					],
		        },
			],
		}
	],

	__cuebanc_key: '',
	__fuefin_id: '',
	__fecha: '',
	setCuebanc_key: function(pcCuebanc_key) { this.__cuebanc_key = pcCuebanc_key; },
	getCuebanc_key: function() { return this.__cuebanc_key; },
	setFecha: function(pcFecha) { this.__fecha = pcFecha; },
	getFecha: function() { return this.__fecha; },
	setFuefin_id: function(pcFuefin_id) { this.__fuefin_id = pcFuefin_id; },
	getFuefin_id: function() { return this.__fuefin_id; },
});