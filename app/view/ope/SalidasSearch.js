Ext.define('Siace.view.operations.SalidasSearch', {
	extend: 'Siace.view.WindowSearch',
	alias: 'widget.operations_salidassearch',
	width: 480,

	items: [
		{
			xtype: 'form', itemId: 'frmOperations_salidas', frame: true,
			items: [
		        {
		            xtype: 'container', layout: 'hbox', margin: '0 0 5 0',
		            items: [
			            {
			                xtype: 'component_combotop', itemId: 'alma_key',
			                valueField: 'alma_key', displayField: 'alma_abrev',
			                tpl:'<tpl for="."><div class="x-boundlist-item">{alma_abrev}&nbsp;</div></tpl>',
			                fieldLabel: translations.usuario,
			                width: 120,
			            },	
			            {
			                xtype: 'component_datefieldtop', itemId: 'fechaini',
			                endDateField: 'fechafin',
			                fieldLabel: translations.fecha_inicial,
			                vtype: 'daterange',
			            },
			            {
			                xtype: 'component_datefieldtop', itemId: 'fechafin',
			                fieldLabel: translations.fecha_final,
			                startDateField: 'fechaini',
			                vtype: 'daterange',
			            },
		            ]
		        },
		        {
		            xtype: 'grid', itemId: 'grdOperations_salidas',
		            columnLines: true, height: 278,
		            columns: [
		                {   dataIndex: 'sal_documento', text: translations.documento, width: 120, },
		                {	dataIndex: 'sal_fecha', text: translations.fecha, align: 'center', lockable: false, renderer: Ext.util.Format.dateRenderer('d/m/Y'), width: 85, },
		                {	dataIndex: 'alma_abrev', text: translations.usuario, flex: 1, },
						{   dataIndex: 'tipmov_abrev', text: translations.destino_abrev, tooltip: translations.destino, width: 50, },
		            ]
		        },
		        {
		            xtype: 'component_pagingtoolbar',
		            itemId: 'pgtOperations_salidas',
		        }
			],
		}
	]
});