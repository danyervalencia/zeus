Ext.define('Siace.view.operations.Registros_AduanasSearchToAdd', {
	extend: 'Siace.view.WindowSearch',
	alias: 'widget.operations_registros_aduanassearchtoadd',
	width: 480,

	items: [
		{
			xtype: 'form', itemId: 'frmOperations_registros_aduanas', bodyPadding: 4, frame: false,
			items: [
		        {
		            xtype: 'container', layout: 'hbox', margin: '0 0 5 0',
		            items: [
		                {	xtype: 'component_combotop', itemId: 'tipdocadua_id', valueField: 'tipdocadua_id', displayField: 'tipdocadua_abrev', fieldLabel: '&nbsp;Doc.', maxLength: 4, listConfig: { cls: 'item00001', minWidth: 60, }, minChars: 1, tpl:'<tpl for="."><div class="x-boundlist-item">{tipdocadua_abrev}&nbsp;</div></tpl>', width: 60, },
			            {	xtype: 'component_combotop', itemId: 'year_id', valueField: 'year_id', store: 'array.YearsAB', displayField: 'year_code', fieldLabel: '&nbsp;'+translations.año, listConfig: { cls: 'item00001', minWidth: 60, },  tpl:'<tpl for="."><div class="x-boundlist-item">{year_code}&nbsp;</div></tpl>', value: 0, width: 60, },
			            {	xtype: 'component_textfieldtop', itemId: 'regadua_nro', fieldLabel: '&nbsp;'+translations.numero, maxLength: 5, vtype: 'onlyNumeric', width: 80, },
		            ]
		        },
		        {
		            xtype: 'grid', itemId: 'grdOperations_registros_aduanas', columnLines: true, height: 320, //autoHeight: true, border: 0,
		            columns: [
		                {	dataIndex: 'regadua_documento', text: translations.documento, width:180, },
						{	dataIndex: 'regadua_fecha', text: translations.fecha, align: 'center', lockable: false, renderer: Ext.util.Format.dateRenderer('d/m/Y'), width: 85, },
						{	dataIndex: 'tipmov_abrev', text: translations.tipo, width: 40, },
						{	dataIndex: 'regint_documento', text: translations.documento_internacional, width: 170, },
						{	dataIndex: 'pers_nombre', text: translations.operador, width: 300, },
						{
							xtype: 'actioncolumn', itemId: 'acOperations_registros_aduanas', align: 'center', width: 30,
							items: [
								{
		        					icon: 'resources/icons/btnDownload.png', tooltip: '<b>DESCARGAR </b>, archivo adjunto.',
		        					getClass: function(value, metadata, record) {
										if ( record.get('regadua_pdf') == '' ) { return 'x-hide-display'; }
										else { return 'x-grid-center-icon'; }
		        					}
		    					},
		    				]
						}
		            ]
		        },
		        {	xtype: 'component_pagingtoolbar', itemId: 'pgtOperations_registros_aduanas', }
			],
		}
	],
});