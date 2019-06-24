Ext.define('Siace.view.treasury.VentasSearch', {
	extend: 'Siace.view.WindowSearch',
	alias: 'widget.treasury_ventassearch',
	width: 730,

	items: [
		{
			xtype: 'form', itemId: 'frmTreasury_ventas', frame: true,
			items: [
		        {
		            xtype: 'container', layout: 'hbox', margin: '0 0 5 0',
		            items: [
				        {	
				        	xtype: 'component_combotop', itemId: 'doc_id', store: 'array.DocumentosVentaAB', valueField: 'doc_id', displayField: 'doc_abrev',
				        	tpl:'<tpl for="."><div class="x-boundlist-item">{doc_abrev}&nbsp;</div></tpl>',
				        	fieldLabel: '&nbsp;'+translations.documento_abrev, listConfig: { cls: 'item00001', minWidth: 55, }, width: 55,
				        },
				        {	
				        	xtype: 'component_combotop', itemId: 'tipdocident_id', store: 'array.Tipos_Documentos_IdentidadVentaAB', valueField: 'tipdocident_id', displayField: 'tipdocident_abrev', 
				        	tpl:'<tpl for="."><div class="x-boundlist-item">{tipdocident_abrev}&nbsp;</div></tpl>',
				        	fieldLabel: '&nbsp;TDI', listConfig: { cls: 'item00001', minWidth: 55, }, width: 55,
				        },
		                {   xtype: 'component_textfieldtop', itemId: 'pers_ruc', fieldLabel: '&nbsp;'+translations.numero +' '+ translations.documento_identidad_abrev, maxLength: 15, width: 120, },
		                {	xtype: 'component_textfieldtop', itemId: 'pers_nombre', fieldLabel: '&nbsp;'+translations.razon_social, maxLength: 15, width: 220, },
			            {	xtype: 'component_datefieldtop', itemId: 'fechaini', endDateField: 'fechafin', fieldLabel: '&nbsp;'+translations.fecha_inicial, vtype: 'daterange', },
			            {	xtype: 'component_datefieldtop', itemId: 'fechafin', fieldLabel: '&nbsp;'+translations.fecha_final, startDateField: 'fechaini', vtype: 'daterange', },
		            ]
		        },
		        {
		            xtype: 'grid', itemId: 'grdTreasury_ventas',
		            columnLines: true, height: 278,
		            columns: [
		                {   dataIndex: 'vent_documento', text: translations.documento, width: 120, },
		                {	dataIndex: 'vent_fecha', text: translations.fecha, align: 'center', lockable: false, renderer: Ext.util.Format.dateRenderer('d/m/Y'), width: 85, },
		                {	dataIndex: 'pers_nombre', text: translations.cliente, flex: 1, },
						{   dataIndex: 'mone_abrev', text: translations.moneda_abrev, tooltip: translations.moneda, width: 40, },
						{	dataIndex: 'vent_monto', text: translations.importe, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 90, },
		            ]
		        },
		        {	xtype: 'component_pagingtoolbar', itemId: 'pgtTreasury_ventas', }
			],
		}
	]
});