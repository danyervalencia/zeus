Ext.define('Siace.view.treasury.VentasBrowse', {
	extend: 'Siace.view.PanelBrowse',
	alias: 'widget.treasury_ventasbrowse',

    items: [
        {
            xtype: 'grid', itemId: 'grdTreasury_ventas', autoHeight: true, columnLines: true, stripeRows: true, 
			viewConfig: {
		    	getRowClass: function(record, rowIndex, rowParams, store){
		        	return record.get('vent_monto')*1 <= 0 ? 'mx-letra-rojo' : 'mx-letra-negro';
		    	}
			},
            columns: [
            	{ 	xtype: 'rownumberer', width: 30, },
				{	dataIndex: 'vent_documento', text : translations.documento, width: 110, },
				{	dataIndex: 'vent_fecha', text: translations.fecha, align: 'center', width: 85, renderer : Ext.util.Format.dateRenderer('d/m/Y') },
				{	dataIndex: 'pers_ruc', text : 'RUC/DNI', width: 100, },
				{	dataIndex: 'pers_nombre', text: translations.cliente, flex: 1, },
				{ 	dataIndex: 'tippag_abrev', text: translations.tipo_pago_siglas, tooltip: translations.tipo_pago, width: 45, },
				{	dataIndex: 'mone_abrev', text: translations.moneda_abrev, tooltip: translations.moneda, width: 40, },
				{	dataIndex: 'vent_monto', text: translations.importe, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 90, },
			]
		}
	],

	dockedItems: [
	    {
	        xtype: 'toolbar', dock: 'top', layout: 'hbox', padding: '1 0 3 2', ui: 'footer',
	        items: [
	        	{	xtype: 'component_combo', itemId: 'opc_id', valueField: 'opc_id', disabled: true, hidden: true, },
	            {	xtype: 'component_combotop', itemId: 'doc_id', valueField: 'doc_id', displayField: 'doc_nombre', tpl:'<tpl for="."><div class="x-boundlist-item">{doc_nombre}&nbsp;</div></tpl>', fieldLabel: '&nbsp;'+translations.documento, width: 120, },
	            {	xtype: 'component_combotop', itemId: 'vent_serie', valueField: 'docser_serie', displayField: 'docser_format', tpl:'<tpl for="."><div class="x-boundlist-item">{docser_format}&nbsp;</div></tpl>', fieldLabel: '&nbsp;'+translations.serie, listConfig: { cls: 'item00001', minWidth: 60, }, width: 60, },
	            {	xtype: 'component_textfieldtop', itemId: 'vent_nro', fieldLabel: '&nbsp;'+translations.numero, maxLength: 5, vtype: 'onlyNumeric', width: 80, },
	            {	xtype: 'component_datefieldtop', itemId: 'fechaini', fieldLabel: '&nbsp;'+translations.fecha_inicial, endDateField: 'fechafin', vtype: 'daterange', },
	            {	xtype: 'component_datefieldtop', itemId: 'fechafin', fieldLabel: '&nbsp;'+translations.fecha_final, startDateField: 'fechaini', vtype: 'daterange', },
	            {   
	                xtype: 'component_combotop', itemId: 'tippag_id',
	                store: {
	                    fields: [ {name: 'tippag_id', type: 'int'}, {name:'tippag_nombre', type: 'string'} ],
	                    data: [{ tippag_id: 0, tippag_nombre: '' }, { tippag_id: 1, tippag_nombre: 'Efectivo' }, { tippag_id: 15, tippag_nombre: 'Crédito' }]
	                },
	                valueField: 'tippag_id', displayField: 'tippag_nombre', tpl:'<tpl for="."><div class="x-boundlist-item">{tippag_nombre}&nbsp;</div></tpl>', fieldLabel: '&nbsp;'+translations.tipo_pago, width: 100,
	            },
			    {
					xtype: 'fieldcontainer', fieldLabel: '&nbsp;'+translations.cliente, labelAlign: 'top', layout: 'hbox',
					items: [
						{   xtype: 'hiddenfield', itemId: 'pers_key', },	
						{	xtype: 'hiddenfield', itemId: 'PERS_RUC', },
						{ 	xtype: 'component_textfieldtop', itemId: 'pers_ruc', enableKeyEvents: true, maxLength: 15, },
						{	xtype: 'component_button_imagesearch', itemId: 'btnPers_search', },
						{	xtype: 'displayfield', itemId: 'pers_nombre', fieldCls: 'df00101', }
					]
				},
	        ]
	    },
		{
            xtype: 'toolbar', dock: 'bottom', ui: 'footer',
            items: [
			    { xtype: 'component_buttonNew' },
	            { xtype: 'component_buttonModify' },
	            { xtype: 'component_button', itemId: 'btnInvoice', disabled: true, text: 'Contratos x Facturar', iconCls: 'icon_Invoice' },
	            { xtype: 'component_buttonQuery' },
	            { xtype: 'component_buttonAnnular' },
	            { xtype: 'component_buttonPrinter' },
            	{ xtype: 'component_button', itemId: 'btnHide', hidden: true }
            ]
        },
		{	xtype: 'component_pagingtoolbar', itemId: 'pgtTreasury_ventas', }
	],
});