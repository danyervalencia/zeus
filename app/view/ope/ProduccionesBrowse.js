Ext.define('Siace.view.operations.ProduccionesBrowse', {
	extend: 'Siace.view.PanelBrowse',
	alias: 'widget.operations_produccionesbrowse',

    items: [
        {
            xtype: 'grid', itemId: 'grdOperations_producciones', autoHeight: true, columnLines: true, stripeRows: true,
			viewConfig: {
		    	getRowClass: function(record, rowIndex, rowParams, store){
		        	return (record.get('prdcc_flga') == '98' ? 'mx-letra-rojo' : (record.get('fase_id') == '320' ? 'mx-letra-negro':'mx-letra-guinda'));
		    	}
			},

            columns: [
            	{ 	xtype: 'rownumberer', width: 30, },
				{	dataIndex: 'prdcc_documento', text : translations.documento, width: 120, },
				{	dataIndex: 'prdcc_fecha', text: translations.fecha, align: 'center', lockable: false, renderer: Ext.util.Format.dateRenderer('d/m/Y'), width: 85, },
				{
					dataIndex: 'alma_abrev', text: translations.usuario, width: 50,
		            renderer: function(value, metaData, record, rowIdx, colIdx, store, view) { return record.get('alma_abrev').substr(0,4); },
		            
				},
				{	dataIndex: 'indus_documento', text: 'Cuadro IP', width: 130, },
				{	dataIndex: 'prdcc_productos', text: translations.producto + '(s)', flex: 35, },
				{	dataIndex: 'usur_login', text: 'VoBo', flex: 7,
					renderer: function(value, metaData, record, rowIdx, colIdx, store, view) {
						if ( record.get('usur_login') !== '' ) { metaData.tdAttr = 'data-qtip=" ' + Ext.Date.format(record.get('prdccfase_fechaing'), 'd/m/Y H:i:s') + ' "'; }
						return record.get('usur_login');
					}
				},
				{	dataIndex: 'mone_abrev', flex: 2, text: translations.moneda_abrev, tooltip: translations.moneda, },
				{	text: translations.importe, align: 'right', flex: 7, renderer: Ext.util.Format.numberRenderer('000,000,000.00'), }
			]
		}
	],

	dockedItems: [
	    {
	        xtype: 'toolbar', dock: 'top', layout: 'hbox', padding: '1 0 3 2', ui: 'footer',
	        items: [
	        	{   xtype: 'component_combo', itemId: 'opc_id', valueField: 'opc_id', disabled: true, hidden: true, },
	            {	xtype: 'component_combotop', itemId: 'alma_key', valueField: 'alma_key', displayField: 'alma_abrev', tpl:'<tpl for="."><div class="x-boundlist-item">{alma_abrev}&nbsp;</div></tpl>', fieldLabel: '&nbsp;'+translations.usuario, width: 120, },
	            {	xtype: 'component_combotop', itemId: 'prdcc_serie', store: 'array.YearsAB', valueField: 'year_id', displayField: 'year_code', tpl:'<tpl for="."><div class="x-boundlist-item">{year_code}&nbsp;</div></tpl>', fieldLabel: '&nbsp;'+translations.serie, value: 0, width: 70, },
				{	xtype: 'component_textfieldtop', itemId: 'prdcc_nro', fieldLabel: '&nbsp;'+translations.numero, maxLength: 5, width: 60, },
	            {	xtype: 'component_datefieldtop', itemId: 'fechaini', endDateField: 'fechafin', fieldLabel: '&nbsp;'+translations.fecha_inicial, vtype: 'daterange', },
	            {	xtype: 'component_datefieldtop', itemId: 'fechafin', fieldLabel: '&nbsp;'+translations.fecha_final, startDateField: 'fechaini', vtype: 'daterange', }
	        ]
	    },	
		{
            xtype: 'toolbar', dock: 'bottom', ui: 'footer',
            items: [
                { xtype: 'component_buttonNew' },
                { xtype: 'component_buttonModify' },
                { xtype: 'component_buttonQuery' },
                { xtype: 'component_buttonAnnular' },
                { xtype: 'component_buttonVobo' },
                { xtype: 'component_buttonPrinter' }
            ]
		},
		{	xtype: 'component_pagingtoolbar', itemId: 'pagOperations_producciones', }
	],
});