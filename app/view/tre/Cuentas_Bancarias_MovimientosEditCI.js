Ext.define('Siace.view.treasury.Cuentas_Bancarias_MovimientosEditCI', {
	extend: 'Siace.view.WindowEdit',
	alias: 'widget.treasury_cuentas_bancarias_movimientoseditci',
	width: 450,

	items: [
		{
			xtype: 'form', itemId: 'frmTreasury_cuentas_bancarias_movimientos',
			bodyPadding: 8, border: true, width: '100%', defaults: { labelWidth: 75 },
			items: [
				{	xtype: 'hiddenfield', itemId: 'cuebancmov_key', name: 'cuebancmov_key', },
				{	xtype: 'hiddenfield', itemId: 'cuebancmov_id', name: 'cuebancmov_id', },
				{	xtype: 'hiddenfield', itemId: 'cuebanc_key', name: 'cuebanc_key', },
				{
					xtype: 'container', layout: 'hbox', defaults: { labelWidth: 75 }, margin: '-5 0 0 0', width: '100%',
					items: [
						{   xtype: 'displayfield', itemId: 'entibanc_nombre', name: 'entibanc_nombre',  fieldLabel: translations.banco, fieldCls: 'df00104', labelClsExtra: 'lbl00101', width: 320, },
						{   xtype: 'displayfield', flex: 1 },
						//{   xtype: 'displayfield', itemId: 'mone_nombre', name: 'mone_nombre', fieldLabel: translations.moneda, fieldCls: 'df00104', labelAlign: 'right', labelClsExtra: 'lbl00101', labelWidth: 55, width: 190 },
					]
				},
				{
					xtype: 'container', layout: 'hbox', defaults: { labelWidth: 75 }, margin: '-5 0 0 0', width: '100%',
				    items: [
						{   xtype: 'displayfield', itemId: 'cuebanc_nro', name: 'cuebanc_nro', fieldLabel: 'N° Cuenta', fieldCls: 'df00104', labelClsExtra: 'lbl00101', width: 370 },
						{   xtype: 'displayfield', flex: 1 },
						//{   xtype: 'displayfield', itemId: 'fuefin_codeabrev', fieldLabel: translations.fuente_financiamiento_abrev, fieldCls: 'df00104', labelAlign: 'right', labelClsExtra: 'lbl00101', labelWidth: 55, padding: '-5 0 0 0', width: 190 },
					]
				},
				{	xtype: 'component_datefield', itemId: 'cuebancmov_fecha', name: 'cuebancmov_fecha', fieldLabel: translations.fecha, allowBlank: false, width: 185, },
				{	xtype: 'component_textfield', itemId: 'cuebancmov_nro', name: 'cuebancmov_nro', fieldLabel: 'N° Operación', allowBlank: false, maxLength: 20, width: 255 },
			    {
					xtype: 'fieldcontainer', fieldLabel: 'Comprobante', labelClsExtra: 'lbl00001', layout: 'hbox',
					items: [
						{   xtype: 'hiddenfield', itemId: 'comprob_key', name: 'comprob_key', },
						{   xtype: 'hiddenfield', itemId: 'COMPROB_NRO' },
			            {
			                xtype: 'component_combotop', itemId: 'year_id', store: 'array.Years',  valueField: 'year_id', displayField: 'year_nro',
			                tpl:'<tpl for="."><div class="x-boundlist-item">{year_nro}&nbsp;</div></tpl>',
			                listConfig: { cls: 'item00001', minWidth: 60, }, width: 57,
			            },
			            {
			                xtype: 'component_combotop', itemId: 'comprob_serie', valueField: 'docser_serie', displayField: 'docser_format',
			                tpl:'<tpl for="."><div class="x-boundlist-item">{docser_format}&nbsp;</div></tpl>',
			                listConfig: { cls: 'item00001', minWidth: 50, }, width: 50,
			            },						
						{   xtype: 'component_textfieldtop', itemId: 'comprob_nro', name: 'comprob_nro', enableKeyEvents: true, maxLength: 5, vtype: 'onlyNumeric', width: 60, },
						{   xtype: 'component_button_imagesearch', itemId: 'btnComprob_search', disabled: true },
						{   xtype: 'displayfield', itemId: 'comprob_fecha', fieldCls: 'df00104', width: 80 },
					]
				},
		        {
		            xtype: 'grid', itemId: 'grdTreasury', columnLines: true, height: 130,
		            selType: 'checkboxmodel', selModel: { mode: 'MULTI', injectCheckbox: 4 },
		            columns: [
		                {   dataIndex: 'tablex_documento', text: translations.documento, width: 120, },
		                {	dataIndex: 'tablex_fecha', text: translations.fecha, align: 'center', lockable: false, renderer: Ext.util.Format.dateRenderer('d/m/Y'), width: 85, },
		                {   dataIndex: '', flex: 1, },
						{	dataIndex: 'tablex_monto_pago', text: translations.importe, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 90, },
		            ],
					plugins: [
                    	Ext.create('Ext.grid.plugin.CellEditing', { ptype: 'cellediting', clicksToEdit: 1 })
					],
		        },
				{   xtype: 'container', margin: '2 0 0 0', layout: { type: 'hbox' },
					items : [
						{   dataIndex: '', flex: 1, },
						{   xtype: 'displayfield', fieldLabel: 'Total Importe', labelClsExtra: 'lbl00101', width: 90, },
		        		{ 	xtype: 'component_currencyfield', itemId: 'cuebancmov_monto', name: 'cuebancmov_monto', disabled: true, value: '', width: 100, }
		        	]
		        }
			]
		}
	]
});