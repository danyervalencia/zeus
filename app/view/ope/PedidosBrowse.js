Ext.define('Siace.view.operations.PedidosBrowse', { extend: 'Siace.view.PanelBrowse', alias: 'widget.operations_pedidosbrowse',
    items: [
        {
            xtype: 'grid', itemId: 'grdOperations_pedidos', autoHeight: true, columnLines: true, stripeRows: true,
            columns: [
            	{ 	xtype: 'rownumberer', width: 30, },
				{	dataIndex: 'ped_documento', text : translations.documento, width: 110, },
				{	dataIndex: 'ped_fecha', text: translations.fecha, align: 'center', width: 85, renderer : Ext.util.Format.dateRenderer('d/m/Y') },
				{	dataIndex: 'pers_nombre', text: 'Cliente', width: 350, },
				{	dataIndex: 'veh_placa', text: 'Vehículo', width: 120, },
				{	text: 'Odóm(I)', align: 'right', width: 65, 
					renderer: function(value, metaData, record, rowIdx, colIdx, store, view ){
						return record.get('peddet_odoini') == null ? '' : Ext.util.Format.number(record.get('peddet_odoini'), '000,000.0');
					}
				},
				{	text: 'Odóm(F)', align: 'right', width: 65, 
					renderer: function(value, metaData, record, rowIdx, colIdx, store, view ){
						return record.get('peddet_odofin') == null ? '' : Ext.util.Format.number(record.get('peddet_odofin'), '000,000.0');
					}
				},
				{	text: 'Horóm(I)', align: 'right', width: 65, 
					renderer: function(value, metaData, record, rowIdx, colIdx, store, view ){
						return record.get('peddet_horoini') == null ? '' : Ext.util.Format.number(record.get('peddet_horoini'), '000,000.0');
					}
				},
				{	text: 'Horóm(F)', align: 'right', width: 65, 
					renderer: function(value, metaData, record, rowIdx, colIdx, store, view ){
						return record.get('peddet_horofin') == null ? '' : Ext.util.Format.number(record.get('peddet_horofin'), '000,000.0');
					}
				},
				{	dataIndex: 'peddet_horaini', text: 'H. Inicio', align: 'center', width: 60, },
				{	dataIndex: 'peddet_horafin', text: 'H. Fin', align: 'center', width: 60, },
				{	text: 'Nro. Horas', align: 'center', width: 70, 
					renderer: function(value, metaData, record, rowIdx, colIdx, store, view ){
						return fjsTimeSubtractHours(record.get('peddet_horaini'), record.get('peddet_horafin'), record.get('doc_id') == '813' ? record.get('unidveh_redondeo') : '0');
					}
				},				
			]
		}
	],

	dockedItems: [
	    {
	        xtype: 'toolbar', dock: 'top', layout: 'hbox', padding: '1 0 3 2', ui: 'footer',
	        items: [
	        	{   xtype: 'component_combo', itemId: 'opc_id', valueField: 'opc_id', disabled: true, hidden: true, },
	            {	xtype: 'component_combotop', itemId: 'doc_id', valueField: 'doc_id', displayField: 'doc_nombre', fieldLabel: '&nbsp;'+translations.documento, tpl:'<tpl for="."><div class="x-boundlist-item">{doc_nombre}&nbsp;</div></tpl>', width: 160, },
	            {	xtype: 'component_combotop', itemId: 'ped_serie', valueField: 'docser_serie', displayField: 'docser_format', fieldLabel: '&nbsp;'+translations.serie, listConfig: { cls: 'item00001', minWidth: 60, }, tpl:'<tpl for="."><div class="x-boundlist-item">{docser_format}&nbsp;</div></tpl>', width: 60,	},
	            {	xtype: 'component_textfieldtop', itemId: 'ped_nro', fieldLabel: '&nbsp;'+translations.numero, maxLength: 5, vtype: 'onlyNumeric', width: 60, },
	            {	xtype: 'component_datefieldtop', itemId: 'fechaini', fieldLabel: '&nbsp;'+translations.fecha_inicial, endDateField: 'fechafin', vtype: 'daterange', },
	            {	xtype: 'component_datefieldtop', itemId: 'fechafin', fieldLabel: '&nbsp;'+translations.fecha_final, startDateField: 'fechaini', vtype: 'daterange', },
	            {	xtype: 'component_combotop', itemId: 'unidveh_key', valueField: 'unidveh_key', displayField: 'veh_placa', fieldLabel: '&nbsp;Vehículo', tpl:'<tpl for="."><div class="x-boundlist-item">{veh_placa}&nbsp;</div></tpl>', width: 140, },
	        ]
	    },
		{
            xtype: 'toolbar', dock: 'bottom', ui: 'footer',
            items: [
                { xtype: 'component_buttonNew' },
                { xtype: 'component_buttonModify' },
                { xtype: 'component_buttonQuery' },
             	{ xtype: 'component_buttonAnnular' },
                { xtype: 'component_buttonDelete' },
                { xtype: 'component_buttonPrinter' },
                { xtype: 'component_button', itemId: 'btnHide', hidden: true }
            ]
		},
		{	xtype: 'component_pagingtoolbar', itemId: 'pgtOperations_pedidos', }
	],
});