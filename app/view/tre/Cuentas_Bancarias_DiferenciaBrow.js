Ext.define('Siace.view.treasury.Cuentas_Bancarias_DiferenciaBrow', {
	extend: 'Siace.view.WindowBrowse',
	alias: 'widget.treasury_cuentas_bancarias_diferenciabrow',
	width: 850,

	items: [
		{
			xtype: 'form', itemId: 'frmTreasury_cuentas_bancarias_diferencia', border: false, layout: 'vbox',
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
	    		        	]
	    		        }

			        ]
			    },
		        {
		            xtype: 'grid', itemId: 'grdTreasury_cuentas_bancarias_diferencia', autoHeight: true, columnLines: true, height: 260, stripeRows: true, width: '100%',
		            columns: [
		            	{ 	xtype: 'rownumberer', width: 30, },
						{	dataIndex: 'cuebancdif_fecha', text: translations.fecha, align: 'center', width: 85, renderer : Ext.util.Format.dateRenderer('d/m/Y'), },
						{ 	dataIndex: 'cuebancdif_caj_debe', text: 'Debe', align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 80, },
						{ 	dataIndex: 'cuebancdif_caj_haber', text: 'Haber', align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 80, },
						{ 	dataIndex: '', text: 'Saldo', align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 85, 
				            renderer: function(value, metaData, record, rowIdx, colIdx, store, view) { 
				            	metaData.style = 'color:#009900;  font-weight: bold;';
				            	return Ext.util.Format.number(record.get('cuebancdif_caj_debe')*1 - record.get('cuebancdif_caj_haber')*1,'000,000,000.00'); 
				            }
						},
						{ 	dataIndex: 'cuebancdif_debe', text: 'Debe', align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 80, },
						{ 	dataIndex: 'cuebancdif_haber', text: 'Haber', align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 80, },
						{ 	dataIndex: '', text: 'Saldo', align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 85, 
							renderer: function(value, metaData, record, rowIdx, colIdx, store, view) {
								metaData.style = 'color:#009900;';
								return Ext.util.Format.number(record.get('cuebancdif_debe')*1 - record.get('cuebancdif_haber')*1,'000,000,000.00'); 
							}
						},
						{ 	dataIndex: 'tipcamb_monto', text: 'T.Camb', align: 'right', renderer: Ext.util.Format.numberRenderer('0,000.000'), width: 55, },
						{ 	dataIndex: '', text: 'Soles', align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 85, 
							renderer: function(value, metaData, record, rowIdx, colIdx, store, view) { 
								metaData.style = 'color:#009900; font-weight: bold;';
								return Ext.util.Format.number((record.get('cuebancdif_debe')*1 - record.get('cuebancdif_haber')*1) * record.get('tipcamb_monto'),'000,000,000.00'); 
							}
						},
						{ 	dataIndex: '', text: 'Diferencia', align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 85,
							renderer: function(value, metaData, record, rowIdx, colIdx, store, view) { 
								metaData.style = (((record.get('cuebancdif_debe')*1 - record.get('cuebancdif_haber')*1) * record.get('tipcamb_monto')) - (record.get('cuebancdif_caj_debe')*1 - record.get('cuebancdif_caj_haber')*1) > 0 ? 'color:#0000A0;' : 'color:#EC0000;') +  'font-weight: bold;';
								return Ext.util.Format.number(((record.get('cuebancdif_debe')*1 - record.get('cuebancdif_haber')*1) * record.get('tipcamb_monto')) - (record.get('cuebancdif_caj_debe')*1 - record.get('cuebancdif_caj_haber')*1),'000,000,000.00'); 
							}
						},
						{ 	dataIndex: 'espedet_codigo', text: 'Clasificador', width: 90, },
					],
				},
				{	xtype: 'component_pagingtoolbar', itemId: 'pgtTreasury_cuentas_bancarias_diferencia', width: '100%' },
				{
		            xtype: 'toolbar', dock: 'bottom', ui: 'footer',
		            items: [
		                { xtype: 'component_buttonNew', },
		                { xtype: 'component_buttonModify' },
		                { xtype: 'component_buttonQuery' },
		                { xtype: 'component_button', itemId: 'btnReport', icon: 'resources/icons/btnReport.png', text: 'Reporte' },
		                { xtype: 'component_buttonExit', disabled: false },
		            ]
				},
			],
		}
	]
});