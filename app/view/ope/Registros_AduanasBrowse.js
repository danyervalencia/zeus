Ext.define('Siace.view.operations.Registros_AduanasBrowse', {
	extend: 'Siace.view.PanelBrowse',
	alias: 'widget.operations_registros_aduanasbrowse',

    items: [
        {
            xtype: 'grid', itemId: 'grdOperations_registros_aduanas', autoHeight: true, columnLines: true, stripeRows: true,
            columns: [
            	{ 	xtype: 'rownumberer', width: 30, },
				{	dataIndex: 'regadua_documento', text : translations.documento, width: 160, },
				{	dataIndex: 'regadua_fecha', text: translations.fecha, align: 'center', lockable: false, renderer: Ext.util.Format.dateRenderer('d/m/Y'), width: 85, },
				{
					dataIndex: 'alma_abrev', text: translations.usuario, width: 50,
		            renderer: function(value, metaData, record, rowIdx, colIdx, store, view) { return record.get('alma_abrev').substr(0,4); }
				},
				{
					dataIndex: 'tipmov_abrev', text: translations.tipo, width: 60,
					renderer: function(value, metaData, record, rowIdx, colIdx, store, view) {
						return (record.get('tipregadua_id') == '1' ? 'I' : 'S') +' - '+ record.get('tipmov_abrev');
					}
				},
				{	dataIndex: 'pers_nombre', text: translations.operador,	flex: 1,	},	
				{	dataIndex: 'regint_documento', text: translations.documento_internacional, width: 160, },
				{	dataIndex: 'ceticos_documento', text: 'CETICOS', width: 130, },
				{	dataIndex: 'mone_abrev', text: translations.moneda_abrev, width: 35, },
				{	dataIndex: 'regadua_monto_seguro', text: translations.seguro, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 90, },
				{
					xtype: 'actioncolumn', itemId: 'acOperations_registros_aduanas', align: 'center', width: 30,
					items: [
						{
        					icon: 'resources/icons/btnDownload.png', tooltip: '<b>DESCARGAR </b>, archivo adjunto.',
        					getClass: function(value, metadata, record) { return (record.get('regadua_pdf') == '' ? 'x-hide-display' : 'x-grid-center-icon'); }
    					},
						{
        					icon: 'resources/icons/btnUpload.png', tooltip: '<b>SUBIR </b>, archivo al servidor.',
        					getClass: function(value, metadata, record) { return (record.get('regadua_pdf') == '' ? 'x-grid-center-icon' : 'x-hide-display'); }
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
	            {	xtype: 'component_combotop', itemId: 'alma_key', valueField: 'alma_key', displayField: 'alma_abrev', fieldLabel: '&nbsp;'+translations.usuario, tpl:'<tpl for="."><div class="x-boundlist-item">{alma_abrev}&nbsp;</div></tpl>', width: 120, },
	            {   
	                xtype: 'component_combotop', itemId: 'tipregadua_id', valueField: 'tipregadua_id', displayField: 'tipregadua_nombre', tpl:'<tpl for="."><div class="x-boundlist-item">{tipregadua_nombre}&nbsp;</div></tpl>', fieldLabel: '&nbsp;'+translations.tipo, listConfig: {cls: 'item00001', minWidth: 40, }, width: 40, value: 0,
	                store: {
	                    fields: [ {name: 'tipregadua_id', type: 'int'}, {name:'tipregadua_nombre', type: 'string'} ],
	                    data: [ 
	                        { tipregadua_id: '0', tipregadua_nombre: '' }, 
	                        { tipregadua_id: '1', tipregadua_nombre: 'I' }, 
	                        { tipregadua_id: '2', tipregadua_nombre: 'S' },
	                    ] 
	                },
	            },
	            {	xtype: 'component_combotop', itemId: 'tipdocadua_id', valueField: 'tipdocadua_id', displayField: 'tipdocadua_abrev', fieldLabel: 'Doc.', listConfig: { cls: 'item00001', minWidth: 60, }, tpl:'<tpl for="."><div class="x-boundlist-item">{tipdocadua_abrev}&nbsp;</div></tpl>', width: 60, },
	            {	xtype: 'component_combotop', itemId: 'year_id', store: 'array.YearsAB', valueField: 'year_id', displayField: 'year_code', tpl:'<tpl for="."><div class="x-boundlist-item">{year_code}&nbsp;</div></tpl>', fieldLabel: '&nbsp;'+translations.año, listConfig: { cls: 'item00001', minWidth: 60, }, value: 0, width: 60, },
	            {	xtype: 'component_textfieldtop', itemId: 'regadua_nro', fieldLabel: '&nbsp;'+translations.numero, maxLength: 5, vtype: 'onlyNumeric', width: 80, },
	            {	xtype: 'component_datefieldtop', itemId: 'fechaini', fieldLabel: '&nbsp;'+translations.fecha_inicial, endDateField: 'fechafin',  vtype: 'daterange', },
	            {	xtype: 'component_datefieldtop', itemId: 'fechafin', fieldLabel: '&nbsp;'+translations.fecha_final, startDateField: 'fechaini', vtype: 'daterange', }
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
		{	xtype: 'component_pagingtoolbar', itemId: 'pgtOperations_registros_aduanas', }
	]
});