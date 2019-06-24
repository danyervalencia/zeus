Ext.define('Siace.view.operations.Registros_InternacionalesBrowse', {
	extend: 'Siace.view.PanelBrowse',
	alias: 'widget.operations_registros_internacionalesbrowse',

    items: [
        {
            xtype: 'grid', itemId: 'grdOperations_registros_internacionales', autoHeight: true, columnLines: true, stripeRows: true,
			viewConfig: {
		    	getRowClass: function(record, rowIndex, rowParams, store){ return record.get('regadua_rows')*1 > 0 ? 'mx-letra-negro' : 'mx-letra-rojo'; }
			},

            columns: [
            	{ 	xtype: 'rownumberer', width: 30 },
				{	dataIndex: 'regint_documento', text : translations.documento, width: 170, },
				{	dataIndex: 'regint_fecha', text: translations.fecha, align: 'center', renderer: Ext.util.Format.dateRenderer('d/m/Y'), width: 85, },
				{
					dataIndex: 'alma_abrev', text: translations.usuario, tooltip: translations.usuario, width: 60,
		            renderer: function(value, metaData, record, rowIdx, colIdx, store, view) { return record.get('alma_abrev').substr(0,4); }
				},
				{	dataIndex: 'pais_nombre', text: translations.pais_origen, width: 200, },
				{	dataIndex: 'pers_nombre', text: translations.exportador, flex: 1, },
				{	dataIndex: 'regadua_rows', text: 'R.A.', align: 'right', tooltip: '# ' + translations.registros_aduana, width: 40, },
				{	dataIndex: 'mone_abrev', text: translations.moneda_abrev, width: 40, },
				{	dataIndex: 'regint_monto_flete', text: translations.flete, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 100, },
				{
					xtype: 'actioncolumn', itemId: 'acORI', align: 'center', width: 30,
					items: [
						{
        					icon: 'resources/icons/btnDownload.png',
        					//iconCls: 'icon_0051_90',
        					tooltip: '<b>DESCARGAR </b>, archivo adjunto.',
							/*handler: function(grid, rowIndex, colIndex) {
								var rec = grid.getStore().getAt(rowIndex);
								grid.getSelectionModel().select(rowIndex);
								grid.getStore().getAt(rowIndex).set('closed', 0);
								grid.removeRowCls(grid.getNode(rowIndex),'line-through');
							}, */
        					getClass: function(value, metadata, record) {
								if ( record.get('regint_pdf') == '' ) { return 'x-hide-display'; }
								else { return 'x-grid-center-icon'; }
        					}
        				},
						{
	        				icon: 'resources/icons/btnUpload.png',
	        				tooltip: '<b>SUBIR </b>, archivo al servidor.',
	        				getClass: function(value, metadata, record) {
								if ( record.get('regint_pdf') == '' ) { return 'x-grid-center-icon'; }
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
	            {	xtype: 'component_combotop', itemId: 'alma_key', valueField: 'alma_key', displayField: 'alma_abrev', tpl:'<tpl for="."><div class="x-boundlist-item">{alma_abrev}&nbsp;</div></tpl>', fieldLabel: translations.usuario, width: 120, },
	            {	xtype: 'component_combotop', itemId: 'tipdocint_id', valueField: 'tipdocint_id', displayField: 'tipdocint_abrev', tpl:'<tpl for="."><div class="x-boundlist-item">{tipdocint_abrev}&nbsp;</div></tpl>', fieldLabel: 'Doc.', listConfig: { cls: 'item00001', minWidth: 60, }, width: 60, },
				{	xtype: 'component_textfieldtop', itemId: 'regint_nro', fieldLabel: translations.numero, maxLength: 5, width: 150, },
	            {	xtype: 'component_datefieldtop', itemId: 'fechaini', endDateField: 'fechafin', fieldLabel: translations.fecha_inicial, vtype: 'daterange', },
	            { 	xtype: 'component_datefieldtop', itemId: 'fechafin', fieldLabel: translations.fecha_final, startDateField: 'fechaini', vtype: 'daterange', }
	        ]
	    },	
		{
            xtype: 'toolbar', dock: 'bottom', ui: 'footer',
            items: [
                { xtype: 'component_buttonNew' },
                { xtype: 'component_buttonModify' },
                { xtype: 'component_buttonQuery' },
                { xtype: 'component_buttonDelete' },
                { xtype: 'component_buttonPrinter' },
                { xtype: 'component_button', itemId: 'btnRegadua', disabled: true, iconCls: 'icon_Documents', text: translations.registros_aduana, },
                { xtype: 'component_button', itemId: 'btnIca', disabled: true, iconCls: 'icon_Documents', text: 'I.C.A.', },
            ]
		},
		{	xtype: 'component_pagingtoolbar', itemId: 'pagOperations_registros_internacionales', }
	]
});