Ext.define('Siace.view.public.Tipos_CambioBrowse', {
	extend: 'Siace.view.PanelBrowse',
	alias: 'widget.public_tipos_cambiobrowse',

    items: [
        {	xtype: 'grid', itemId: 'grdPublic_tipos_cambio', autoHeight: true, columnLines: true, //stripeRows: true, 
            columns: [
            	{ 	xtype: 'rownumberer', width: 30, },
            	{	dataIndex: 'tipcamb_fecha', text: translations.fecha, align: 'center', width: 85, renderer: Ext.util.Format.dateRenderer('d/m/Y'), },
				{	dataIndex: 'mo01_nombre', text : translations.moneda +' 1', width: 150, },
				{	dataIndex: 'mo02_nombre', text: translations.moneda+' 2', width: 150, },
				{	dataIndex: 'op01_signo', text: 'Oper. 1', align: 'center', width: 50, },
				{	dataIndex: 'op02_signo', text: 'Oper. 2', align: 'center', width: 50, },
				{	dataIndex: 'tipcamb_compra', text: translations.compra, align: 'right', renderer: Ext.util.Format.numberRenderer('000.000'), width: 90, },
				{	dataIndex: 'tipcamb_venta', text: translations.venta, align: 'right', renderer: Ext.util.Format.numberRenderer('000.000'), width: 90, },
			]
		}
	],

	dockedItems: [
	    {
	        xtype: 'toolbar', dock: 'top', layout: 'hbox', padding: '1 0 3 2', ui: 'footer',
	        items: [
	        	{	xtype: 'component_combo', itemId: 'opc_id', valueField: 'opc_id', disabled: true, hidden: true, },
	            {	xtype: 'component_datefieldtop', itemId: 'fechaini', fieldLabel: '&nbsp;'+translations.fecha_inicial, endDateField: 'fechafin', vtype: 'daterange', },
	            {	xtype: 'component_datefieldtop', itemId: 'fechafin', fieldLabel: '&nbsp;'+translations.fecha_final, startDateField: 'fechaini', vtype: 'daterange', },
	        ]
	    },
		{
            xtype: 'toolbar', dock: 'bottom', ui: 'footer',
            items: [
                { xtype: 'component_buttonNew' },
                { xtype: 'component_buttonModify' },
                { xtype: 'component_buttonDelete' },
            ]
		},
		{	xtype: 'component_pagingtoolbar', itemId: 'pgtPublic_tipos_cambio', }
	]
});