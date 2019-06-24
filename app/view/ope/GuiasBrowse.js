Ext.define('Siace.view.operations.GuiasBrowse', {
	extend: 'Siace.view.PanelBrowse',
	alias: 'widget.operations_guiasbrowse',

    items: [
        {
            xtype: 'grid', itemId: 'grdOperations_guias', autoHeight: true, columnLines: true, stripeRows: true, 
			viewConfig: {
		    	getRowClass: function(record, rowIndex, rowParams, store){
		        	return record.get('guia_flga') == '98' ? 'mx-letra-rojo' : 'mx-letra-negro';
		    	}
			},
            columns: [
            	{ 	xtype: 'rownumberer', width: 30, },
				{	dataIndex: 'guia_documento', text : translations.documento, locked: true, width: 110, },
				{	dataIndex: 'guia_fecha', text: translations.fecha, align: 'center', width: 85, renderer : Ext.util.Format.dateRenderer('d/m/Y') },
				{
					dataIndex: 'alma_abrev', text: translations.usuario, width: 50,
		            renderer: function(value, metaData, record, rowIdx, colIdx, store, view) { return record.get('alma_abrev').substr(0,4); }
				},
				{
					dataIndex: 'perstransp_key', text: translations.transportista, width: 400,
					renderer: function(value, metaData, record, rowIdx, colIdx, store, view) {
						return record.get('perstransp_code') +' &nbsp;'+ record.get('perstransp_nombre');
					}
				},
				{
					text: translations.vehiculo + ' // '+ translations.tracto, width: 150,
					renderer: function(value, metaData, record, rowIdx, colIdx, store, view ){
						return record.get('veh_placa') + ( record.get('trac_placa') == '' || record.get('trac_placa') == null ? '' : ' // '+record.get('trac_placa') );
					}
				},	
				{	dataIndex: 'cont_placa', text: translations.contenedor, width: 120, },
				{	dataIndex: 'regadua_documento', text: translations.registro_aduanero, width: 160, },
				{	dataIndex: 'guia_ing_peso', text: translations.peso +' - '+ translations.ingreso, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.000'), width: 90, },
				{	dataIndex: 'guia_sal_peso', text: translations.peso +' - '+ translations.salida, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.000'), width: 90, }
			]
		}
	],

	dockedItems: [
	    {
	        xtype: 'toolbar', dock: 'top', layout: 'hbox', padding: '1 0 3 2', ui: 'footer',
	        items: [
	        	{   xtype: 'component_combo', itemId: 'opc_id', valueField: 'opc_id', disabled: true, hidden: true, },
	            {	xtype: 'component_combotop', itemId: 'alma_key', valueField: 'alma_key', displayField: 'alma_abrev', tpl:'<tpl for="."><div class="x-boundlist-item">{alma_abrev}&nbsp;</div></tpl>', fieldLabel: '&nbsp;'+translations.usuario, width: 120, },
	            {	xtype: 'component_combotop', itemId: 'guia_serie', store: 'array.YearsAB', valueField: 'year_id', displayField: 'year_code', tpl:'<tpl for="."><div class="x-boundlist-item">{year_code}&nbsp;</div></tpl>', fieldLabel: '&nbsp;'+translations.serie, width: 70, },
	            {	xtype: 'component_textfieldtop', itemId: 'guia_nro', fieldLabel: '&nbsp;'+translations.numero, maxLength: 5, vtype: 'onlyNumeric', width: 80, },
	            {	xtype: 'component_datefieldtop', itemId: 'fechaini', fieldLabel: '&nbsp;'+translations.fecha_inicial, endDateField: 'fechafin', vtype: 'daterange', },
	            {	xtype: 'component_datefieldtop', itemId: 'fechafin', fieldLabel: '&nbsp;'+translations.fecha_final, startDateField: 'fechaini', vtype: 'daterange', },
	            {   
	                xtype: 'component_combotop', itemId: 'type_query', valueField: 'type_id', displayField: 'type_nombre', 
	                store: {
	                    fields: [ {name: 'type_id', type: 'string'}, {name:'type_nombre', type: 'string'} ],
	                    data: [{ type_id: '', type_nombre: '' }, { type_id: 'INGRESO_PENDIENTE', type_nombre: 'Ingreso Pendiente' }, { type_id: 'SALIDA_PENDIENTE', type_nombre: 'Salida Pendiente' }, { type_id: 'ATENDIDO', type_nombre: 'Atendido' }] 
	                },
	                tpl:'<tpl for="."><div class="x-boundlist-item">{type_nombre}&nbsp;</div></tpl>', fieldLabel: '&nbsp;'+translations.filtrar_por, width: 140,
	            }
	        ]
	    },	
		{
            xtype: 'toolbar', dock: 'bottom', ui: 'footer',
            items: [
                { xtype: 'component_buttonNew' },
                { xtype: 'component_buttonModify' },
                { xtype: 'component_buttonQuery' },
                { xtype: 'component_buttonAnnular' },
                { xtype: 'component_button', itemId: 'btnEntry', icon: 'resources/icons/btnEntry.jpg', disabled: true, text: 'Pesaje Ingreso' },
                { xtype: 'component_button', itemId: 'btnOutput', icon: 'resources/icons/btnOutput.jpg', disabled: true, text: 'Pesaje Salida' },
                { xtype: 'component_buttonPrinter' }
            ]
		},
		{ 	xtype: 'component_pagingtoolbar', itemId: 'pagOperations_guias', }
	]
});