Ext.define('Siace.view.operations.Ingresos_ComprasBrowse', {
	extend: 'Siace.view.PanelBrowse',
	alias: 'widget.operations_ingresos_comprasbrowse',

    items: [
        {
            xtype: 'grid', itemId: 'grdOperations_ingresos_compras', autoHeight: true, columnLines: true, stripeRows: true,
            columns: [
            	{ 	xtype: 'rownumberer', width: 30, },
				{	dataIndex: 'ingcomp_documento', text: 'Documento', width: 140,  },
				{	dataIndex: 'ingcomp_fecha', text: 'Fecha', align: 'center', lockable: false, renderer: Ext.util.Format.dateRenderer('d/m/Y'), width: 85, },
				{
					dataIndex: 'alma_abrev', text: 'Usuario', width: 60,
		            renderer: function(value, metaData, record, rowIdx, colIdx, store, view) {
		                return record.get('alma_abrev').substr(0,4);
		            }
				},
				{	dataIndex: 'impor_nombre', text: 'Operador', flex: 1, },
				{	dataIndex: 'ing_documento', text: 'Ingreso', width: 130, },
				{	dataIndex: 'ingcompdet_rows', text: 'Items', align: 'right', width: 40, },
				{	dataIndex: 'mone_abrev', text: 'Mo', width: 35, },
				{	dataIndex: 'ingcomp_monto', text: 'Importe', align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 100, },
				{
					xtype: 'actioncolumn', itemId: 'acOperations_ingresos_compras', align: 'center', width: 30,
					items: [
						{
        					icon: 'resources/icons/btnDownload.png',
        					tooltip: '<b>DESCARGAR </b>, archivo adjunto.',
        					getClass: function(value, metadata, record) {
								if ( record.get('ingcomp_pdf') == '' ) { return 'x-hide-display'; }
								else { return 'x-grid-center-icon'; }
        					}
    					},
						{
        					icon: 'resources/icons/btnUpload.png',
        					tooltip: '<b>SUBIR </b>, archivo al servidor.',
        					getClass: function(value, metadata, record) {
								if ( record.get('ingcomp_pdf') == '' ) { return 'x-grid-center-icon'; }
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
	        xtype: 'toolbar', dock: 'top', layout: 'hbox', padding: '1 0 3 2', ui: 'footer',
	        items: [
	        	{   xtype: 'component_combo', itemId: 'opc_id', valueField: 'opc_id', disabled: true, hidden: true, },
	            {	xtype: 'component_combotop', itemId: 'alma_key', valueField: 'alma_key', displayField: 'alma_abrev', tpl:'<tpl for="."><div class="x-boundlist-item">{alma_abrev}&nbsp;</div></tpl>', fieldLabel: '&nbsp;'+translations.usuario, width: 120, },
	            {	xtype: 'component_combotop', itemId: 'doc_id', valueField: 'doc_id', displayField: 'doc_abrev', tpl:'<tpl for="."><div class="x-boundlist-item">{doc_abrev}&nbsp;</div></tpl>', fieldLabel: '&nbsp;Doc.', listConfig: { cls: 'item00001', minWidth: 60, },width: 60, },
	            {	xtype: 'component_textfieldtop', itemId: 'ingcomp_serie', fieldLabel: '&nbsp;'+translations.serie, maxLength: 5, width: 60, },
	            {	xtype: 'component_textfieldtop', itemId: 'ingcomp_nro', fieldLabel: '&nbsp;'+translations.numero, maxLength: 10, width: 100, },
	            {	xtype: 'component_datefieldtop', itemId: 'fechaini', fieldLabel: '&nbsp;'+translations.fecha_inicial, endDateField: 'fechafin',  vtype: 'daterange', },
	            {	xtype: 'component_datefieldtop', itemId: 'fechafin', fieldLabel: '&nbsp;'+translations.fecha_final, startDateField: 'fechaini', vtype: 'daterange', },
			    {
					xtype: 'fieldcontainer', fieldLabel: '&nbsp;Operador', labelAlign: 'top', layout: 'hbox',
					items: [
						{   xtype: 'hiddenfield', itemId: 'impor_key', },					
						{	xtype: 'hiddenfield', itemId: 'IMPOR_RUC', },
						{	xtype: 'component_textfieldtop', itemId: 'impor_ruc', enableKeyEvents: true, maxLength: 15, },
						{	xtype: 'component_button_imagesearch', itemId: 'btnImpor_search', },
						{	xtype: 'displayfield', itemId: 'impor_nombre', fieldCls: 'df00101', }
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
                { xtype: 'component_buttonDelete' }
            ]
		},
		{	xtype: 'component_pagingtoolbar', itemId: 'pagOperations_ingresos_compras', }
	],

	__winPPIS: '',
	setWinPPIS: function(pcWinPPIS) { this.__winPPIS = pcWinPPIS; },
	getWinPPIS: function() { return this.__winPPIS; },
});