Ext.define('Siace.view.treasury.RecibosBrowse', {
	extend: 'Siace.view.PanelBrowse',
	alias: 'widget.treasury_recibosbrowse',

    items: [
        {
            xtype: 'grid', itemId: 'grdTreasury_recibos', autoHeight: true, columnLines: true, stripeRows: true,
			viewConfig: {
		    	getRowClass: function(record, rowIndex, rowParams, store){
		        	return record.get('recib_monto')*1 <= 0 ? 'mx-letra-rojo' : 'mx-letra-negro';
		    	}
			},            
            columns: [
            	{ 	xtype: 'rownumberer', width: 30, },
				{	dataIndex: 'recib_documento', text : translations.documento, width: 110, },
				{	dataIndex: 'recib_fecha', text: translations.fecha, align: 'center', width: 85, renderer : Ext.util.Format.dateRenderer('d/m/Y') },
				{	dataIndex: 'concp_code', text: 'Concep.', width: 50, },
				{	dataIndex: 'pers_nombre', text: translations.cliente, flex: 1, },
				{ 	dataIndex: 'tippag_abrev', text: translations.tipo_pago_siglas, tooltip: translations.tipo_pago, width: 45, },
				{	dataIndex: 'tablex_detalle', text: 'Cheque / Depósito en Banco / Cuenta', width: 210, },
				{	dataIndex: 'mone_abrev', text: translations.moneda_abrev, tooltip: translations.moneda, width: 40, },
				{	dataIndex: 'recib_monto', text: translations.importe, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 90, },
			]
		}
	],

	dockedItems: [
	    {
	        xtype: 'toolbar', dock: 'top', layout: 'hbox', padding: '1 0 3 2', ui: 'footer',
	        items: [
	        	{	xtype: 'component_combo', itemId: 'opc_id', valueField: 'opc_id', disabled: true, hidden: true, },
	            {	xtype: 'component_combotop', itemId: 'doc_id', valueField: 'doc_id', displayField: 'doc_nombre', fieldLabel: '&nbsp;'+translations.documento, tpl:'<tpl for="."><div class="x-boundlist-item">{doc_nombre}&nbsp;</div></tpl>', width: 140, },
	            {	xtype: 'component_combotop', itemId: 'recib_serie', valueField: 'docser_serie', displayField: 'docser_format', fieldLabel: '&nbsp;'+translations.serie, listConfig: { cls: 'item00001', minWidth: 60, }, tpl:'<tpl for="."><div class="x-boundlist-item">{docser_format}&nbsp;</div></tpl>', width: 60,	},
	            {	xtype: 'component_textfieldtop', itemId: 'recib_nro', fieldLabel: '&nbsp;'+translations.numero, maxLength: 5, vtype: 'onlyNumeric', width: 60, },
	            {	xtype: 'component_datefieldtop', itemId: 'fechaini', fieldLabel: '&nbsp;'+translations.fecha_inicial, endDateField: 'fechafin', vtype: 'daterange', },
	            {	xtype: 'component_datefieldtop', itemId: 'fechafin', fieldLabel: '&nbsp;'+translations.fecha_final, startDateField: 'fechaini', vtype: 'daterange', },
	            {	xtype: 'component_combotop', itemId: 'concp_id', valueField: 'concp_id', displayField: 'concp_codename', fieldLabel: '&nbsp;'+translations.concepto, tpl:'<tpl for="."><div class="x-boundlist-item">{concp_codename}&nbsp;</div></tpl>', width: 320, },
	            {
	                xtype: 'component_combotop', itemId: 'tippag_id', valueField: 'tippag_id', displayField: 'tippag_nombre', fieldLabel: '&nbsp;'+translations.tipo_pago, tpl:'<tpl for="."><div class="x-boundlist-item">{tippag_nombre}&nbsp;</div></tpl>', width: 120, 
	                store: {
	                    fields: [ {name: 'tippag_id', type: 'int'}, {name:'tippag_nombre', type: 'string'} ],
	                    data: [ { tippag_id: 0, tippag_nombre: '' },{ tippag_id: 1, tippag_nombre: 'Efectivo' },{ tippag_id: 4, tippag_nombre: 'Cheque' },{ tippag_id: 5, tippag_nombre: 'Deposito en Banco' },] 
	                },
	            }
	        ]
	    },
		{
            xtype: 'toolbar', dock: 'bottom', ui: 'footer',
            items: [
                { xtype: 'component_buttonNew' },
                { xtype: 'component_buttonModify' },
                { xtype: 'component_buttonQuery' },
             	{ xtype: 'component_buttonAnnular' },
                { xtype: 'component_buttonDelete' },
                { xtype: 'component_buttonPrinter' },
                { xtype: 'component_button', itemId: 'btnHide', hidden: true }
            ]
		},
		{	xtype: 'component_pagingtoolbar', itemId: 'pgtTreasury_recibos', }
	],
});