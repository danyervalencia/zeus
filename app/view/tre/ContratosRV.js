Ext.define('Siace.view.treasury.ContratosRV', {
	extend: 'Siace.view.WindowBrowse',
	alias: 'widget.treasury_contratosrv',
	width: 780,
	//icon: 'resources/icons/btnAccess.png', width: 700,

	items: [
		{
			xtype: 'form', itemId: 'frmTreasury_contratos', border: false, layout: 'vbox',
		    items: [
			    {
			        xtype: 'toolbar', defaults: { labelWidth: 60 }, layout: 'vbox', padding: '1 1 3 2', ui: 'footer', width: '100%',
			        items: [
						{	xtype: 'hiddenfield', itemId: 'contr_key', name: 'contr_key' },
						{	xtype: 'hiddenfield', itemId: 'contr_id', name: 'contr_id' },
						{
							xtype: 'container', layout: 'hbox', width: '100%',
						    items: [
								{   xtype: 'displayfield', itemId: 'contr_documento', name: 'contr_documento',  fieldLabel: 'Contrato', fieldCls: 'df00104', labelClsExtra: 'lbl00101', labelWidth: 55, width: 320, },
								{   xtype: 'displayfield', flex: 1 },
								{   xtype: 'displayfield', itemId: 'contr_monto', fieldLabel: 'Importe', fieldCls: 'df00106', labelAlign: 'right', labelClsExtra: 'lbl00103', labelWidth: 50, width: 170 },
							]
						},
						{
							xtype: 'container', layout: 'hbox', width: '100%',
						    items: [
								{   xtype: 'displayfield', itemId: 'pers_nombre', name: 'pers_nombre', fieldLabel: translations.cliente, fieldCls: 'df00104', labelClsExtra: 'lbl00101', labelWidth: 55, padding: '-3 0 -2 0', width: 580 },
								{   xtype: 'displayfield', flex: 1 },
								{   xtype: 'displayfield', itemId: 'pers_ruc', name: 'pers_ruc', fieldLabel: 'R.U.C.', fieldCls: 'df00106', labelAlign: 'right', labelClsExtra: 'lbl00103', labelWidth: 40, padding: '-3 0 -2 0', width: 160 },
							]
						},
						{
							xtype: 'container', layout: 'hbox', width: '100%',
						    items: [
								{   xtype: 'displayfield', itemId: 'contr_periodo', fieldLabel: translations.periodo, fieldCls: 'df00104', labelClsExtra: 'lbl00101', labelWidth: 55, padding: '-7 0 0 0', width: 370 },
							]
						},
			        ]
			    },
		        {
		            xtype: 'grid', itemId: 'grdTreasury_ventas',
		            autoHeight: true, columnLines: true, height: 300, stripeRows: true, width: '100%',
					viewConfig: {
				    	getRowClass: function(record, rowIndex, rowParams, store){
				        	//return (record.get('usuracce_estado') == '1' ? 'mx-letra-negro' : 'mx-letra-rojo');
				    	}
					},		            
		            columns: [
		            	{ 	xtype: 'rownumberer', width: 30, },
						{	dataIndex: 'vent_documento', text : translations.documento, flex: 1, },
						{	dataIndex: 'vent_fecha', text: translations.fecha, align: 'center', width: 85, renderer : Ext.util.Format.dateRenderer('d/m/Y') },
						{ 	text: translations.periodo, align: 'center',
							columns: [
							    { dataIndex: 'tablex_fechaini', text: 'Inicio', align: 'center', renderer : Ext.util.Format.dateRenderer('d/m/Y'), width: 85 },
							    { dataIndex: 'tablex_fechafin', text: 'Fin', align: 'center', renderer : Ext.util.Format.dateRenderer('d/m/Y'), width: 85 },
							]
						},
						{ 	dataIndex: 'tippag_abrev', text: translations.tipo_pago_siglas, tooltip: translations.tipo_pago, width: 45, },
						{	dataIndex: 'mone_abrev', text: translations.moneda_abrev, tooltip: translations.moneda, width: 40, },
						{	dataIndex: 'vent_monto', text: translations.importe, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 90, },
						{	dataIndex: 'vent_monto_percep', text: 'Percepción', align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 80, },
						{	dataIndex: 'vent_monto_saldo', text: translations.saldo, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 90, },
					],
				},
				{	xtype: 'component_pagingtoolbar', itemId: 'pgtTreasury_ventas', width: '100%' },
				{
		            xtype: 'toolbar', dock: 'bottom', ui: 'footer',
		            items: [
		                { xtype: 'component_buttonNew' },
		                { xtype: 'component_buttonQuery' },
		                { xtype: 'component_button', itemId: 'btnReceipts', iconCls: 'icon_Receipts', disabled: true, text: 'Recibos Ingreso' },
		                { xtype: 'component_buttonExit', disabled: false },
		            ]
				},				
			],
		}
	]
});