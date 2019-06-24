Ext.define('Siace.view.treasury.Cuentas_Bancarias_MovimientosBrow', {
	extend: 'Siace.view.WindowBrowse',
	alias: 'widget.treasury_cuentas_bancarias_movimientosbrow',
	width: 780,

	items: [
		{
			xtype: 'form', itemId: 'frmTreasury_cuentas_bancarias_movimientos', border: false, layout: 'vbox',
		    items: [
			    {
			        xtype: 'toolbar', defaults: { labelWidth: 60 }, layout: 'vbox', padding: '1 1 3 2', ui: 'footer', width: '100%',
			        items: [
						{	xtype: 'hiddenfield', itemId: 'cuebanc_key', },
						{
							xtype: 'container', layout: 'hbox', width: '100%',
						    items: [
								{   xtype: 'displayfield', itemId: 'entibanc_nombre', name: 'entibanc_nombre',  fieldLabel: translations.banco, fieldCls: 'df00104', labelClsExtra: 'lbl00101', labelWidth: 55, width: 320, },
								{   xtype: 'displayfield', flex: 1 },
								{   xtype: 'displayfield', itemId: 'mone_nombre', name: 'mone_nombre', fieldLabel: translations.moneda, fieldCls: 'df00104', labelAlign: 'right', labelClsExtra: 'lbl00101', labelWidth: 55, width: 190 },
							]
						},
						{
							xtype: 'container', layout: 'hbox', width: '100%',
						    items: [
								{   xtype: 'displayfield', itemId: 'cuebanc_nro', name: 'cuebanc_nro', fieldLabel: 'N° Cuenta', fieldCls: 'df00104', labelClsExtra: 'lbl00101', labelWidth: 55, padding: '-5 0 0 0', width: 370 },
								{   xtype: 'displayfield', flex: 1 },
								{   xtype: 'displayfield', itemId: 'fuefin_codeabrev', fieldLabel: translations.fuente_financiamiento_abrev, fieldCls: 'df00104', labelAlign: 'right', labelClsExtra: 'lbl00101', labelWidth: 55, padding: '-5 0 0 0', width: 190 },
							]
						},
						{
							xtype: 'container', layout: 'hbox', width: '100%', margin: '-6 0 0 0', 
							items: [
								{	xtype: 'component_combo', itemId: 'opc_id', valueField: 'opc_id', disabled: true, hidden: true, },
			            		{	xtype: 'component_datefieldtop', itemId: 'fechaini', fieldLabel: '&nbsp;'+translations.fecha_inicial, endDateField: 'fechafin', vtype: 'daterange', },
	    		        		{	xtype: 'component_datefieldtop', itemId: 'fechafin', fieldLabel: '&nbsp;'+translations.fecha_final, startDateField: 'fechaini', vtype: 'daterange', },
	    		        		{	xtype: 'component_textfieldtop', itemId: 'cuebancmov_nro', fieldLabel: '&nbsp;N° Operación', maxLength: 15, width: 110, },
	    		        	]
	    		        }

			        ]
			    },
		        {
		            xtype: 'grid', itemId: 'grdTreasury_cuentas_bancarias_movimientos', autoHeight: true, columnLines: true, height: 300, stripeRows: true, width: '100%',
		            columns: [
		            	{ 	xtype: 'rownumberer', width: 30, },
						{	dataIndex: 'cuebancmov_fecha', text: translations.fecha, align: 'center', width: 85, renderer : Ext.util.Format.dateRenderer('d/m/Y') },
						{ 	dataIndex: 'cuebancmov_nro', text: 'N° Operación', width: 120, },
						{ 	dataIndex: 'comprob_documento', text: 'Comprobante', width: 100, },
						{	dataIndex: '', text: 'Cheque', width: 90, },
						{	dataIndex: '', text: translations.concepto, flex: 1, },
						{	text: 'Abono', align: 'right', width: 90,
				            renderer: function(value, metaData, record, rowIdx, colIdx, store, view) { 
				            	return record.get('cuebancmov_monto_debe')*1 > 0 ? Ext.util.Format.number(record.get('cuebancmov_monto_debe'),'000,000,000.00') : '';
				            }
						},
						{	text: 'Cargo', align: 'right', width: 90, 
							renderer: function(value, metaData, record, rowIdx, colIdx, store, view) { 
								return record.get('cuebancmov_monto_haber')*1 > 0 ? Ext.util.Format.number(record.get('cuebancmov_monto_haber'),'000,000,000.00') : '';
							}
						},
					],
				},
				{	xtype: 'component_pagingtoolbar', itemId: 'pgtTreasury_cuentas_bancarias_movimientos', width: '100%' },
				{
		            xtype: 'toolbar', dock: 'bottom', ui: 'footer',
		            items: [
		                { xtype: 'component_buttonNew' },
		                { xtype: 'component_buttonQuery' },
		                { xtype: 'component_button', itemId: 'btnReport', icon: 'resources/icons/btnReport.png', text: 'Reporte' },
		                { xtype: 'component_buttonExit', disabled: false },
		            ]
				},
			],
		}
	]
});