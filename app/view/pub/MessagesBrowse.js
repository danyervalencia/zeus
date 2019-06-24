Ext.define('Siace.view.public.MessagesBrowse', {
	extend: 'Siace.view.PanelBrowse',
	alias: 'widget.public_messagesbrowse',

    items: [
        {
            xtype: 'grid', itemId: 'grdPublic_messages',
            autoHeight: true, columnLines: true, stripeRows: true,
			viewConfig: {
		    	getRowClass: function(record, rowIndex, rowParams, store){
		        	//return record.get('mess_estado')*1 <= 0 ? 'mx-letra-rojo' : 'mx-letra-negro';
		    	}
			},            
            columns: [
            	{ 	xtype: 'rownumberer', width: 30, },
				{	dataIndex: 'usur_login', text : translations.usuario, width: 110, },
				{	dataIndex: 'mess_title', text: 'Titulo', flex: 1, },
				{	dataIndex: 'mess_fecha', text: translations.fecha, align: 'center', width: 85, renderer : Ext.util.Format.dateRenderer('d/m/Y') },
			]
		}
	],

	dockedItems: [
	    {
	        xtype: 'toolbar', dock: 'top', layout: 'hbox', padding: '1 0 3 2', ui: 'footer',
	        items: [
	            {
	                xtype: 'component_combotop', itemId: 'tipmess_id',
	                store: {
	                    fields: [ {name: 'tipmess_id', type: 'int'}, {name:'tipmess_nombre', type: 'string'} ],
	                    data: [ { tipmess_id: 1, tipmess_nombre: 'Recibidos' },{ tipmess_id: 2, tipmess_nombre: 'Enviados' }] 
	                },
	                valueField: 'tipmess_id', displayField: 'tipmess_nombre', 
	                tpl:'<tpl for="."><div class="x-boundlist-item">{tipmess_nombre}&nbsp;</div></tpl>',
	                fieldLabel: '&nbsp;Tipo', value: 1, width: 120,
	            },
	            {	xtype: 'component_datefieldtop', itemId: 'fechaini', fieldLabel: '&nbsp;'+translations.fecha_inicial, endDateField: 'fechafin', vtype: 'daterange', },
	            {	xtype: 'component_datefieldtop', itemId: 'fechafin', fieldLabel: '&nbsp;'+translations.fecha_final, startDateField: 'fechaini', vtype: 'daterange', },
	        ]
	    },
		{
            xtype: 'toolbar', dock: 'bottom', ui: 'footer',
            items: [
                { xtype: 'component_buttonNew' },
                { xtype: 'component_buttonQuery' },
                { xtype: 'component_buttonDelete' },
               	{	xtype: 'hiddenfield', itemId: 'usur_key', name: 'usur_key', },
            ]
		},
		{	xtype: 'component_pagingtoolbar', itemId: 'pgtPublic_messages', }
	],
});