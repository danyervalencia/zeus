Ext.define('Siace.view.treasury.VentasRI', {
	extend: 'Siace.view.WindowBrowse',
	alias: 'widget.treasury_ventasri',
	closable: true, width: 770,

	items: [
		{
			xtype: 'form', itemId: 'frmTreasury_ventas', border: false, layout: 'vbox',
		    items: [
			    {
			        xtype: 'toolbar', defaults: { labelWidth: 60, width: '100%', layout: 'hbox' }, layout: 'vbox', padding: '1 1 3 2', ui: 'footer', width: '100%',
			        items: [
						{	xtype: 'hiddenfield', itemId: 'vent_key', name: 'vent_key' },
						{	xtype: 'hiddenfield', itemId: 'vent_id', name: 'vent_id' },
						{
							xtype: 'container',
						    items: [
								{   xtype: 'displayfield', itemId: 'vent_documento', name: 'vent_documento',  fieldLabel: translations.documento, fieldCls: 'df00104', labelClsExtra: 'lbl00101', labelWidth: 60, width: 200, },
								{   xtype: 'displayfield', itemId: 'vent_fecha', fieldCls: 'df00104', width: 90, },
								{   xtype: 'displayfield', flex: 1 },
								{   xtype: 'displayfield', itemId: 'vent_monto', fieldLabel: translations.importe, fieldCls: 'df00106', labelClsExtra: 'lbl00103', labelWidth: 70, width: 170 },
							]
						},
						{
							xtype: 'container',
						    items: [
								{   xtype: 'displayfield', itemId: 'pers_nombre', name: 'pers_nombre', fieldLabel: translations.cliente, fieldCls: 'df00104', labelClsExtra: 'lbl00101', labelWidth: 60, padding: '-2 0 -2 0', width: 580 },
								{   xtype: 'displayfield', flex: 1 },
								{   xtype: 'displayfield', itemId: 'vent_monto_saldo', fieldLabel: translations.saldo, fieldCls: 'df00106', labelClsExtra: 'lbl00103', labelWidth: 60, padding: '-2 0 -2 0', width: 160 },
							]
						},
						{
							xtype: 'container', layout: 'hbox', width: '100%',
						    items: [
								{   xtype: 'displayfield', itemId: 'pers_ruc', name: 'pers_ruc', fieldCls: 'df00104', labelClsExtra: 'lbl00101', labelWidth: 60, padding: '-3 0 -2 0', width: 450 },
							]
						},
			        ]
			    },
		        {
		            xtype: 'grid', itemId: 'grdTreasury_recibos',
		            autoHeight: true, columnLines: true, height: 180, stripeRows: true, width: '100%',
					viewConfig: {
				    	getRowClass: function(record, rowIndex, rowParams, store){
				        	//return (record.get('usuracce_estado') == '1' ? 'mx-letra-negro' : 'mx-letra-rojo');
				    	}
					},		            
		            columns: [
		            	{ 	xtype: 'rownumberer', width: 30, },
						{	dataIndex: 'recib_documento', text : translations.documento, width: 100, },
						{	dataIndex: 'recib_fecha', text: translations.fecha, align: 'center', width: 80, renderer : Ext.util.Format.dateRenderer('d/m/Y') },
						{ 	dataIndex: 'tippag_abrev', text: translations.tipo_pago_siglas, tooltip: translations.tipo_pago, width: 40, },
						{	dataIndex: '', text: 'Cheque / Dpto. Banco', tooltip: translations.moneda, flex: 1, },
						{	dataIndex: 'mone_abrev', text: translations.moneda_abrev, tooltip: translations.moneda, width: 35, },
						{	dataIndex: 'recib_monto', text: translations.importe, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 85, },
						{	dataIndex: 'recibdet_monto_debe', text: translations.debe, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 85, },
						{	dataIndex: 'recibdet_monto_pago', text: translations.pago, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 85, },
						{	dataIndex: 'recibdet_monto_saldo', text: translations.saldo, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 80, },
						
					],
				},
			],
		}
	]
});