Ext.define('Siace.view.treasury.ComprobantesBrowse', {
	extend: 'Siace.view.PanelBrowse',
	alias: 'widget.treasury_comprobantesbrowse',

    items: [
        {
            xtype: 'grid', itemId: 'grdTreasury_comprobantes', autoHeight: true, columnLines: true, stripeRows: true,
			viewConfig: {
		    	getRowClass: function(record, rowIndex, rowParams, store){
		        	return record.get('comprob_monto')*1 <= 0 ? 'mx-letra-rojo' : 'mx-letra-negro';
		    	}
			},            
            columns: [
            	{ 	xtype: 'rownumberer', width: 30, },
				{	dataIndex: 'comprob_documento', text: 'Documento', width: 110, },
				{	dataIndex: 'comprob_fecha', text: 'Fecha', align: 'center', width: 85, renderer : Ext.util.Format.dateRenderer('d/m/Y') },
				{	dataIndex: 'tipcomprob_abrev', text: 'Tipo', width: 60, },
				{	dataIndex: 'cuebanc_nrobanco', text: 'Cuenta Bancaria', flex: 1, },
				{	dataIndex: 'fuefin_codename', text: 'Fuente Financiamiento', flex: 1, },
				{	dataIndex: 'mone_abrev', text: 'Mo', tooltip: 'Moneda', width: 40, },
				{	dataIndex: 'comprob_monto', text: 'Importe', align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 90, },
			]
		}
	],

	dockedItems: [
	    {
	        xtype: 'toolbar', dock: 'top', layout: 'hbox', padding: '1 0 3 2', ui: 'footer',
	        items: [
	        	{	xtype: 'component_combo', itemId: 'opc_id', valueField: 'opc_id', disabled: true, hidden: true, },
	            {	xtype: 'component_combotop', itemId: 'year_id', store: 'array.Years',  valueField: 'year_id', displayField: 'year_nro', tpl:'<tpl for="."><div class="x-boundlist-item">{year_nro}&nbsp;</div></tpl>', fieldLabel: '&nbsp;Año', listConfig: { cls: 'item00001', minWidth: 60, }, width: 60, },
	            {	xtype: 'component_combotop', itemId: 'doc_id', valueField: 'doc_id', displayField: 'doc_nombre', tpl:'<tpl for="."><div class="x-boundlist-item">{doc_nombre}&nbsp;</div></tpl>', fieldLabel: '&nbsp;Documento', width: 170, },
	            {	xtype: 'component_combotop', itemId: 'comprob_serie', valueField: 'docser_serie', displayField: 'docser_format', tpl:'<tpl for="."><div class="x-boundlist-item">{docser_format}&nbsp;</div></tpl>', fieldLabel: '&nbsp;Serie', listConfig: { cls: 'item00001', minWidth: 60, }, width: 60, },
	            {	xtype: 'component_textfieldtop', itemId: 'comprob_nro', fieldLabel: '&nbsp;Número', maxLength: 5, vtype: 'onlyNumeric', width: 60, },
	            {	xtype: 'component_datefieldtop', itemId: 'fechaini', fieldLabel: '&nbsp;Fecha Inicial', endDateField: 'fechafin', vtype: 'daterange', },
	            {	xtype: 'component_datefieldtop', itemId: 'fechafin', fieldLabel: '&nbsp;Fecha Final', startDateField: 'fechaini', vtype: 'daterange', },
	            {	xtype: 'component_combotop', itemId: 'tipcomprob_id', valueField: 'tabgen_id', displayField: 'tabgen_nombre', tpl:'<tpl for="."><div class="x-boundlist-item">{tabgen_nombre}&nbsp;</div></tpl>', fieldLabel: '&nbsp;Tipo', width: 140, },
	            {	xtype: 'component_combotop', itemId: 'fuefin_id', valueField: 'fuefin_id', displayField: 'fuefin_code', tpl:'<tpl for="."><div class="x-boundlist-item">{fuefin_code}&nbsp; &nbsp;{fuefin_nombre}</div></tpl>', fieldLabel: '&nbsp;Fue.Fin.', listConfig: { cls: 'item00001', minWidth: 250, maxWidth: 250 }, width: 45, },
	        ]
	    },
		{
            xtype: 'toolbar', dock: 'bottom', ui: 'footer',
            items: [
                { xtype: 'component_buttonNew' },
                { xtype: 'component_buttonModify' },
                { xtype: 'component_buttonQuery' },
                { xtype: 'component_button', itemId: 'btnDetail', disabled: true, hidden: true, iconCls: 'icon_Detail', text: 'Detalle de Ingresos' },
                { xtype: 'component_buttonDelete' },
                { xtype: 'component_buttonPrinter' }
            ]
		},
		{	xtype: 'component_pagingtoolbar', itemId: 'pagTreasury_comprobantes' }
	],
});