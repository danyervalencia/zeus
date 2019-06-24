Ext.define('Siace.view.operations.SalidasBrowse', {
	extend: 'Siace.view.PanelBrowse',
	alias: 'widget.operations_salidasbrowse',

    items: [
        {
            xtype: 'grid', itemId: 'grdOperations_salidas', autoHeight: true, columnLines: true, stripeRows: true,
			viewConfig: {
		    	getRowClass: function(record, rowIndex, rowParams, store){
		        	return (record.get('sal_flga') == '98' ? 'mx-letra-rojo' : (record.get('fase_id') == '320' ? 'mx-letra-negro':'mx-letra-guinda'));
		    	}
			},

            columns: [
            	{ 	xtype: 'rownumberer', width: 30, },
				{	dataIndex: 'sal_documento', text : translations.documento, width: 120, },
				{	dataIndex: 'sal_fecha', text: translations.fecha, align: 'center', lockable: false, renderer: Ext.util.Format.dateRenderer('d/m/Y'), width: 85, },
				{
					dataIndex: 'alma_abrev', text: translations.usuario, width: 50,
		            renderer: function(value, metaData, record, rowIdx, colIdx, store, view) { return record.get('alma_abrev').substr(0,4); },
				},
				{	dataIndex: '', text: 'Lote', width: 40, },
				{	dataIndex: 'tipmov_abrev', text: translations.destino_abrev, tooltip: translations.destino, width: 45, },
				{	dataIndex: 'pers_nombre', text: translations.operador, flex: 1, },
				{	dataIndex: 'regadua_documento', text: translations.registro_aduanero, width: 170, },
				{	dataIndex: 'mone_abrev', text: translations.moneda_abrev, tooltip: translations.moneda, width: 40, },
				{	dataIndex: 'sal_monto_cif', text: translations.importe + ' CIF', align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 100, }
			]
		}
	],

	dockedItems: [
	    {
	        xtype: 'toolbar', dock: 'top', layout: 'hbox', padding: '1 0 3 2', ui: 'footer',
	        items: [
	        	{   xtype: 'component_combo', itemId: 'opc_id', valueField: 'opc_id', disabled: true, hidden: true, },
	            {	xtype: 'component_combotop', itemId: 'alma_key', valueField: 'alma_key', displayField: 'alma_abrev', fieldLabel: translations.usuario, tpl:'<tpl for="."><div class="x-boundlist-item">{alma_abrev}&nbsp;</div></tpl>', width: 120, },
	            {	xtype: 'component_combotop', itemId: 'sal_serie', store: 'array.YearsAB', valueField: 'year_id', displayField: 'year_code', tpl:'<tpl for="."><div class="x-boundlist-item">{year_code}&nbsp;</div></tpl>', fieldLabel: '&nbsp;'+translations.serie, value: 0, width: 70, },
				{ 	xtype: 'component_currencyfieldtop', itemId: 'sal_nro', fieldLabel: translations.numero, maxLength: 5, numberDecimal: 0, width: 60, },
	            {	xtype: 'component_datefieldtop', itemId: 'fechaini', endDateField: 'fechafin', fieldLabel: translations.fecha_inicial, vtype: 'daterange', },
	            {	xtype: 'component_datefieldtop', itemId: 'fechafin', fieldLabel: translations.fecha_final, startDateField: 'fechaini', vtype: 'daterange', },
	            {	xtype: 'component_combotop', itemId: 'tipmov_id', valueField: 'tipmov_id', displayField: 'tipmov_nombre', fieldLabel: translations.destino, tpl:'<tpl for="."><div class="x-boundlist-item">{tipmov_nombre}&nbsp;</div></tpl>', width: 170,	}
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
                { xtype: 'component_buttonDocuments', disabled: true },
                { xtype: 'component_buttonPrinter' },
            ]
		},
		{	xtype: 'component_pagingtoolbar', itemId: 'pagOperations_salidas', }
	],
});