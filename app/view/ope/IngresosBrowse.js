Ext.define('Siace.view.operations.IngresosBrowse', {
	extend: 'Siace.view.PanelBrowse',
	alias: 'widget.operations_ingresosbrowse',

    items: [
        {
            xtype: 'grid', itemId: 'grdOperations_ingresos', autoHeight: true, columnLines: true, stripeRows: true,
			viewConfig: {
		    	getRowClass: function(record, rowIndex, rowParams, store){
		        	return (record.get('ing_flga') == '98' ? 'mx-letra-rojo' : (record.get('fase_id') == '320' ? 'mx-letra-negro':'mx-letra-guinda'));
		    	}
			},

            columns: [
            	{ 	xtype: 'rownumberer', width: 30, },
				{	dataIndex: 'ing_documento', text: translations.documento, width: 120, },
				{	dataIndex: 'ing_fecha', text: translations.fecha, align: 'center', renderer: Ext.util.Format.dateRenderer('d/m/Y'), width: 85, },
				{
					dataIndex: 'alma_abrev', text: translations.usuario, width: 50,
		            renderer: function(value, metaData, record, rowIdx, colIdx, store, view) {
		                return record.get('alma_abrev').substr(0,4);
		            },
				},
				{	dataIndex: '', text: 'Lote', width: 40, },
				{	dataIndex: 'tipmov_abrev', text: translations.procedencia_abrev, tooltip: translations.procedencia, width: 45, },
				{	dataIndex: 'ingdet_rows', text: translations.items, align: 'right', width: 45, },
				{	dataIndex: 'regadua_documento', text: translations.registros_aduana, width: 160, },
				{	dataIndex: '', text: translations.registro_venta, width: 120, },
				{	dataIndex: 'mone_abrev', text: translations.moneda_abrev, tooltip: translations.moneda, width: 40, },
				{	dataIndex: 'ing_monto', text: translations.importe + ' FOB', align: 'right', flex: 1, renderer: Ext.util.Format.numberRenderer('000,000,000.00'), },
				{	dataIndex: 'ing_monto_flete', text: translations.importe +' '+ translations.flete, align: 'right', flex: 1, renderer: Ext.util.Format.numberRenderer('000,000,000.00'), },
				{	dataIndex: 'ing_monto_seguro', text: translations.importe +' '+ translations.seguro, align: 'right', flex: 1, renderer: Ext.util.Format.numberRenderer('000,000,000.00'), },
				{
					dataIndex: 'ing_monto_cif', text: translations.importe + ' CIF', align: 'right', flex: 1,
		            renderer: function(value, metaData, record, rowIdx, colIdx, store, view) {
		                return Ext.util.Format.number(record.get('ing_monto')*1 + record.get('ing_monto_flete')*1 + record.get('ing_monto_seguro')*1,'000,000,000.00');
		            },
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
				{	xtype: 'component_combotop', itemId: 'ing_serie', store: 'array.YearsAB', valueField: 'year_id', displayField: 'year_code', tpl:'<tpl for="."><div class="x-boundlist-item">{year_code}&nbsp;</div></tpl>', fieldLabel: '&nbsp;'+translations.serie, value: 0, width: 70, }, 
				{	xtype: 'component_currencyfieldtop', itemId: 'ing_nro', fieldLabel: '&nbsp;'+translations.numero, maxLength: 5, numberDecimal: 0, width: 60, },
	            {	xtype: 'component_datefieldtop', itemId: 'fechaini', fieldLabel: '&nbsp;'+translations.fecha_inicial, endDateField: 'fechafin', vtype: 'daterange', },
	            {	xtype: 'component_datefieldtop', itemId: 'fechafin', fieldLabel: '&nbsp;'+translations.fecha_final, startDateField: 'fechaini', vtype: 'daterange', },
	            {	xtype: 'component_combotop', itemId: 'tipmov_id', valueField: 'tipmov_id', displayField: 'tipmov_nombre', tpl:'<tpl for="."><div class="x-boundlist-item">{tipmov_nombre}&nbsp;</div></tpl>', fieldLabel: '&nbsp;'+translations.procedencia, width: 170, }
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
                { xtype: 'component_buttonDocuments', disabled : true },
                { xtype: 'component_buttonPrinter' }
            ]
		},
		{ 	xtype: 'component_pagingtoolbar', itemId: 'pagOperations_ingresos', }
	],
});