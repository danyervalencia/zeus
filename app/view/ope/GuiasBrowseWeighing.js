Ext.define('Siace.view.operations.GuiasBrowseWeighing', {
	extend: 'Siace.view.PanelBrowse',
	alias: 'widget.operations_guiasbrowseweighing',

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
				{	dataIndex: 'guia_documento', text : translations.documento, width: 110, },
				{	dataIndex: 'guia_fecha', text: translations.fecha, align: 'center', width: 85, renderer : Ext.util.Format.dateRenderer('d/m/Y') },
				{	dataIndex: 'pers_ruc', text: 'RUC/DNI', width: 100, },
				{	dataIndex: 'pers_nombre', text: 'Consignatario', flex: 1, },
				{	dataIndex: 'veh_placa', text: translations.vehiculo, width: 80, },
				{	dataIndex: 'guia_ing_peso', text: translations.peso +' - '+ translations.ingreso, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000'), width: 90, },
				{	dataIndex: 'guia_sal_peso', text: translations.peso +' - '+ translations.salida, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000'), width: 90, },
				{	dataIndex: 'tablex_documento', text: 'Reg. Venta', width: 120, },
			]
		}
	],

	dockedItems: [
	    {
	        xtype: 'toolbar', dock: 'top', layout: 'hbox', padding: '1 0 3 2', ui: 'footer',
	        items: [
	        {   xtype: 'component_combo', itemId: 'opc_id', valueField: 'opc_id', disabled: true, hidden: true, },
	            {	xtype: 'component_combotop', itemId: 'doc_id', valueField: 'doc_id', displayField: 'doc_nombre', fieldLabel: '&nbsp;Documento', tpl:'<tpl for="."><div class="x-boundlist-item">{doc_nombre}&nbsp;</div></tpl>', width: 170, },
	            {	xtype: 'component_combotop', itemId: 'guia_serie', valueField: 'docser_serie', displayField: 'docser_format', fieldLabel: '&nbsp;Serie', listConfig: { cls: 'item00001', minWidth: 60, }, tpl:'<tpl for="."><div class="x-boundlist-item">{docser_format}&nbsp;</div></tpl>', width: 60, },
	            {	xtype: 'component_textfieldtop', itemId: 'guia_nro', fieldLabel: '&nbsp;Número', maxLength: 5, vtype: 'onlyNumeric', width: 80, },
	            {	xtype: 'component_datefieldtop', itemId: 'fechaini', fieldLabel: '&nbsp;Fecha Inicial', endDateField: 'fechafin', vtype: 'daterange', },
	            {	xtype: 'component_datefieldtop', itemId: 'fechafin', fieldLabel: '&nbsp;Fecha Final', startDateField: 'fechaini', vtype: 'daterange', },
	        ]
	    },	
		{
            xtype: 'toolbar', dock: 'bottom', ui: 'footer',
            items: [
                { xtype: 'component_button', itemId: 'btnInput', iconCls: 'icon_Reject', disabled: true, text: 'Pesaje Ingreso' },
                { xtype: 'component_button', itemId: 'btnOutput', iconCls: 'icon_Reject', disabled: true, text: 'Pesaje Salida' },
                { xtype: 'component_buttonQuery' },
                { xtype: 'component_buttonAnnular' },
                { xtype: 'component_buttonPrinter' }
            ]
		},
		{ 	xtype: 'component_pagingtoolbar', itemId: 'pgtOperations_guias', }
	]
});