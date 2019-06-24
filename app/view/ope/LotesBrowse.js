Ext.define('Siace.view.operations.LotesBrowse', {
	extend: 'Siace.view.PanelBrowse',
	alias: 'widget.operations_lotesbrowse',

    items: [
        {
            xtype: 'grid', itemId: 'grdOperations_lotes',
            autoHeight: true, columnLines: true, //stripeRows: true, 
			viewConfig: {
		    	getRowClass: function(record, rowIndex, rowParams, store){
		        	return record.get('lote_estado') == '0' ? 'mx-letra-rojo' : 'mx-letra-negro';
		    	}
			},

            columns: [
            	{ 	xtype: 'rownumberer', width: 30, },
            	{	dataIndex: 'lote_nombre', text: translations.lote, width: 100, },
				{	dataIndex: 'tiplote_nombre', text: translations.tipo, width: 120, },
				{	dataIndex: 'lote_m2', text : '# m2', align: 'right', renderer: Ext.util.Format.numberRenderer('000,000.00'), width: 100, },
				{	dataIndex: 'lote_latitud', text: translations.latitud, align: 'right', renderer: Ext.util.Format.numberRenderer('000.00000000'), width: 120, },
				{	dataIndex: 'lote_longitud', text: translations.longitud, align: 'right', renderer: Ext.util.Format.numberRenderer('000.00000000'), width: 120, },
				{	dataIndex: '', text: translations.usuario, flex: 1, },
			]
		}
	],

	dockedItems: [
	    {
	        xtype: 'toolbar', dock: 'top', layout: 'hbox', padding: '1 0 3 2', ui: 'footer',
	        items: [
	            {
	                xtype: 'component_textfieldtop', itemId: 'alma_nombre',
	                fieldLabel: '&nbsp;'+translations.nombre, maxLength: 40, width: 250,
	            },
	            {   
	                xtype: 'component_combotop', itemId: 'alma_estado',
	                store: {
	                    fields: [ {name: 'tipesta_id', type: 'string'}, {name:'tipesta_nombre', type: 'string'} ],
	                    data: [ 
	                        { tipesta_id: '',  tipesta_nombre: '' }, 
	                        { tipesta_id: '1', tipesta_nombre: 'ACTIVO' }, 
	                        { tipesta_id: '0', tipesta_nombre: 'DESHABILITADO' },
	                    ] 
	                },
	                valueField: 'tipesta_id', displayField: 'tipesta_nombre', 
	                tpl:'<tpl for="."><div class="x-boundlist-item">{tipesta_nombre}&nbsp;</div></tpl>',
	                fieldLabel: '&nbsp;'+translations.filtrar_por, width: 120,
	            }
	        ]
	    },	
		{
            xtype: 'toolbar', dock: 'bottom', ui: 'footer',
            items: [
                { xtype: 'component_buttonNew' },
                { xtype: 'component_buttonModify' },
                { xtype: 'component_buttonQuery' },
            ]
		},
		{	xtype: 'component_pagingtoolbar', itemId: 'pgtOperations_lotes', }
	]
});