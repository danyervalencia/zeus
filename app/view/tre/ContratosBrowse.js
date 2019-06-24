Ext.define('Siace.view.treasury.ContratosBrowse', {
	extend: 'Siace.view.PanelBrowse',
	alias: 'widget.treasury_contratosbrowse',
    items: [
        {
            xtype: 'grid', itemId: 'grdTreasury_contratos', autoHeight: true, columnLines: true, stripeRows: true,
			viewConfig: {
		    	getRowClass: function(record, rowIndex, rowParams, store){
		        	return record.get('contr_estado') == '0' ? 'mx-letra-rojo' : 'mx-letra-negro';
		    	}
			},            
            columns: [
            	{ 	xtype: 'rownumberer', width: 30, },
				{   dataIndex: 'contr_documento', text : translations.documento, width: 80, },
				{   dataIndex: 'contr_fechaini', text: translations.fecha, align: 'center', renderer: Ext.util.Format.dateRenderer('d/m/Y'), width: 85, },
				{   dataIndex: 'contr_fechafin', text: translations.cese, align: 'center', renderer: Ext.util.Format.dateRenderer('d/m/Y'), width: 85, },
				{	dataIndex: 'bscat_abrev', text: translations.categoria_abrev, tooltip: translations.categoria, width: 50, },
				{	dataIndex: 'pers_ruc', text: 'RUC', width: 110, },
				{	dataIndex: 'pers_nombre', text: translations.cliente, flex: 1, },
				{	dataIndex: 'unimed_nombre', text: '', width: 90, },
				{	dataIndex: 'mone_abrev', text: translations.moneda_abrev, tooltip: translations.moneda, width: 50, },
				{   dataIndex: 'contr_monto', text: translations.importe, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 100, },
				{
					xtype: 'actioncolumn', itemId: 'acTC', align: 'center', width: 30,
					items: [
						{
        					icon: 'resources/icons/btnDownload.png', tooltip: '<b>DESCARGAR </b>, archivo adjunto.',
        					getClass: function(value, metadata, record) {
								if ( record.get('contr_pdf') == '' ) { return 'x-hide-display'; }
								else { return 'x-grid-center-icon'; }
        					}
        				},
						{
	        				icon: 'resources/icons/btnUpload.png', tooltip: '<b>SUBIR </b>, archivo al servidor.',
	        				getClass: function(value, metadata, record) {
								if ( record.get('contr_pdf') == '' ) { return 'x-grid-center-icon'; }
								else { return 'x-hide-display'; }
	        				}
    					}
    				]
				}
			]
		}
	],

	dockedItems: [
	    {
	        xtype: 'toolbar', dock: 'top', layout: 'hbox', padding: '1 0 3 2', ui: 'footer', // 'plain',
	        items: [
            	{	xtype: 'component_combo', itemId: 'opc_id', valueField: 'opc_id', disabled: true, hidden: true, },
	            {	xtype: 'component_combotop', itemId: 'year_id', store: 'array.YearsAB', valueField: 'year_id', displayField: 'year_code', tpl:'<tpl for="."><div class="x-boundlist-item">{year_code}&nbsp;</div></tpl>', fieldLabel: '&nbsp;'+translations.año, value: 0, width: 70, },
	            {	xtype: 'component_combotop', itemId: 'bscat_id', valueField: 'bscat_id', displayField: 'bscat_nombre', tpl:'<tpl for="."><div class="x-boundlist-item">{bscat_nombre}&nbsp;</div></tpl>', fieldLabel: '&nbsp;'+translations.categoria, width: 200, },
	            {	xtype: 'component_combotop', itemId: 'mone_id', store: 'array.MonedasAB', valueField: 'mone_id', displayField: 'mone_abrev', tpl:'<tpl for="."><div class="x-boundlist-item">{mone_abrev}&nbsp;</div></tpl>', fieldLabel: '&nbsp;'+translations.moneda, listConfig: { cls: 'item00001',  minWidth: 60, }, value: 0, width: 60, },
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
                { xtype: 'component_buttonQuery' },
                { xtype: 'component_buttonAnnular' },
                { xtype: 'component_buttonPrinter' },
                { xtype: 'component_button', itemId: 'btnSales', iconCls: 'icon_Venta', disabled:true, text: translations.registro_venta },
            ]
		},
		{	xtype: 'component_pagingtoolbar', itemId: 'pagTreasury_contratos', },
	],
});