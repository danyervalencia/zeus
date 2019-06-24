Ext.define('Siace.view.operations.AlmacenesBrowse', {
	extend: 'Siace.view.PanelBrowse',
	alias: 'widget.operations_almacenesbrowse',

    items: [
        {
            xtype: 'grid', itemId: 'grdOperations_almacenes', autoHeight: true, columnLines: true, //stripeRows: true, 
			viewConfig: {
		    	getRowClass: function(record, rowIndex, rowParams, store){
		        	return record.get('alma_estado') == '0' ? 'mx-letra-rojo' : 'mx-letra-negro';
		    	}
			},

            columns: [
            	{ 	xtype: 'rownumberer', width: 30, },
            	{	dataIndex: 'alma_abrev', text: translations.usuario, width: 120, },
				{	dataIndex: 'pers_ruc', text: 'RUC', width: 100, },
				{	dataIndex: 'pers_nombre', text : translations.razon_social, width: 450, },
				{	dataIndex: 'alma_code', text: translations.codigo, width: 50, },
				{	dataIndex: '', text: translations.contrato, flex: 1, },
				{	dataIndex: 'cantid_lotes', text: '# ' + translations.lotes, align: 'right', width: 60, },
			]
		}
	],

	dockedItems: [
	    {
	        xtype: 'toolbar', dock: 'top', layout: 'hbox', padding: '1 0 3 2', ui: 'footer',
	        items: [
	        	{   xtype: 'component_combo', itemId: 'opc_id', valueField: 'opc_id', disabled: true, hidden: true, },
	            {	xtype: 'component_textfieldtop', itemId: 'alma_nombre', fieldLabel: '&nbsp;'+translations.nombre, maxLength: 40, width: 250, },
	            {   
	                xtype: 'component_combotop', itemId: 'alma_estado',
	                store: {
	                    fields: [ {name: 'tipesta_id', type: 'string'}, {name:'tipesta_nombre', type: 'string'} ],
	                    data: [{ tipesta_id: '',  tipesta_nombre: '' }, { tipesta_id: '1', tipesta_nombre: 'HABILITADO' }, { tipesta_id: '0', tipesta_nombre: 'INHABILITADO' },]
	                },
	                valueField: 'tipesta_id', displayField: 'tipesta_nombre',  tpl:'<tpl for="."><div class="x-boundlist-item">{tipesta_nombre}&nbsp;</div></tpl>', fieldLabel: '&nbsp;'+translations.filtrar_por, width: 120,
	            }
	        ]
	    },	
		{
            xtype: 'toolbar', dock: 'bottom', ui: 'footer',
            items: [
                { xtype: 'component_buttonNew' },
                { xtype: 'component_buttonModify' },
                { xtype: 'component_buttonQuery' },
                { xtype: 'component_buttonDelete' },
                { xtype: 'component_button', itemId: 'btnBatches', iconCls: 'icon_batch', disabled: true, text: translations.lotes },
                { xtype: 'component_button', itemId: 'btnActivities', iconCls: 'icon_activity', disabled: true, text: translations.actividades },
                { xtype: 'component_buttonPrinter' }
            ]
		},
		{	xtype: 'component_pagingtoolbar', itemId: 'pagOperations_almacenes', }
	]
});