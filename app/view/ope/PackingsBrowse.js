Ext.define('Siace.view.operations.PackingsBrowse', {
	extend: 'Siace.view.PanelBrowse',
	alias: 'widget.operations_packingsbrowse',

    items: [
        {
            xtype: 'grid', itemId: 'grdOperations_packings', autoHeight: true, columnLines: true, stripeRows: true,
            columns: [
            	{ 	xtype: 'rownumberer', width: 30, },
				{	dataIndex: 'pack_documento', text : translations.documento, width: 140, },
				{	dataIndex: 'pack_fecha', text: translations.fecha, align: 'center', lockable: false, renderer: Ext.util.Format.dateRenderer('d/m/Y'), width: 85, },
				{
					dataIndex: 'alma_abrev', text: translations.usuario, width: 60,
		            renderer: function(value, metaData, record, rowIdx, colIdx, store, view) {
		                return record.get('alma_abrev').substr(0,4);
		            }
				},
				{	dataIndex: 'pers_nombre', text: translations.proveedor, flex: 1, },	
				{	dataIndex: 'regint_documento', text: translations.ingreso, width: 130, },
				{	dataIndex: 'packdet_rows', text: translations.items, align: 'right', width: 40, },
				{	dataIndex: 'pack_peso', text: translations.importe, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 100, },
				{
					xtype: 'actioncolumn', itemId: 'acOperations_packings', align: 'center', width: 30,
					items: [
						{
        					icon: 'resources/icons/btnDownload.png',
        					tooltip: '<b>DESCARGAR </b>, archivo adjunto.',
        					getClass: function(value, metadata, record) {
								if ( record.get('pack_pdf') == '' ) { return 'x-hide-display'; }
								else { return 'x-grid-center-icon'; }
        					}
    					},
						{
        					icon: 'resources/icons/btnUpload.png',
        					tooltip: '<b>SUBIR </b>, archivo al servidor.',
        					getClass: function(value, metadata, record) {
								if ( record.get('pack_pdf') == '' ) { return 'x-grid-center-icon'; }
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
	            {	xtype: 'component_textfieldtop', itemId: 'pack_serie', fieldLabel: '&nbsp;'+translations.serie, maxLength: 5, width: 60, },
	            {	xtype: 'component_textfieldtop', itemId: 'pack_nro', fieldLabel: '&nbsp;'+translations.numero, maxLength: 10, width: 100, },
	            {	xtype: 'component_datefieldtop', itemId: 'fechaini', fieldLabel: '&nbsp;'+translations.fecha_inicial, endDateField: 'fechafin',  vtype: 'daterange', },
	            {	xtype: 'component_datefieldtop', itemId: 'fechafin', fieldLabel: '&nbsp;'+translations.fecha_final, startDateField: 'fechaini', vtype: 'daterange', },
	        ]
	    },	
		{
            xtype: 'toolbar', dock: 'bottom', ui: 'footer',
            items: [
                { xtype: 'component_buttonNew' },
                { xtype: 'component_buttonModify' },
                { xtype: 'component_buttonQuery' },
                { xtype: 'component_buttonDelete' },
                { xtype: 'component_buttonVobo', text: 'VoBo ' + translations.operaciones, },
            ]
		},
		{	xtype: 'component_pagingtoolbar', itemId: 'pgtOperations_packings', }
	]
});