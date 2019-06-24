Ext.define('Siace.view.accounting.Libro_DiarioBrowse', {
	extend: 'Siace.view.PanelBrowse',
	alias: 'widget.accounting_libro_diariobrowse',
	layout: { type: 'hbox', },

    items: [
        {
            xtype : 'panel', itemId: 'panAccounting_libro_diario', layout: { type: 'fit', }, height: '100%', width: '58%',
            items: [
		        {
		            xtype: 'grid', itemId: 'grdAccounting_libro_diario', autoHeight: true, columnLines: true, stripeRows: true,
					viewConfig: {
				    	getRowClass: function(record, rowIndex, rowParams, store){
				        	return (record.get('doc_flga') == '98' ? 'mx-letra-rojo' : (record.get('tipmone_abrev') == 'MN' ? 'mx-letra-negro' : 'mx-letra-azul'));
				    	}
					},            
		            columns: [
		            	{ 	xtype: 'rownumberer', width: 30, },
						{	dataIndex: 'subdia_code', text: 'SD', sortable: false, tooltip: 'Sub-Diario', width: 30, },
						{   dataIndex: 'libdia_record', text: 'Registro', sortable: false, width: 80, },
						{	dataIndex: 'libdia_fecha', text: 'Operación', align: 'center', sortable: false, width: 85, renderer : Ext.util.Format.dateRenderer('d/m/Y') },
						{	dataIndex: 'doc_abrev', text: 'TD', sortable: false, tooltip: 'Tipo de Documento', width: 35, },
						{	dataIndex: 'documento', text: 'N° Documento', sortable: false, width: 90, },
						{	dataIndex: 'doc_fecha', text: 'Fecha', align: 'center', sortable: false, width: 85, renderer : Ext.util.Format.dateRenderer('d/m/Y') },
						{	dataIndex: 'libdia_monto', text: 'Importe', align: 'right', sortable: false, renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 90, },
						{	
							dataIndex: 'tipcamb_monto', text: 'T.C.', align: 'right', sortable: false, renderer: Ext.util.Format.numberRenderer('000.000'), tooltip: 'Tipo de Cambio', width: 60, 
							renderer: function(value, metaData, record, rowIdx, colIdx, store, view) { return (record.get('doc_flga') !== '98' && record.get('tipcamb_monto')*1 > 0 ? fjsFormatNumeric(record.get('tipcamb_monto')*1,3) : ''); }
						},
						{	
							dataIndex: 'libdia_monto_me', text: 'Importe ME', align: 'right', sortable: false, renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 90, 
							renderer: function(value, metaData, record, rowIdx, colIdx, store, view) { return (record.get('doc_flga') !== '98' && record.get('libdia_monto_me')*1 > 0 ? fjsFormatNumeric(record.get('libdia_monto_me')*1,2) : ''); }

						},
						{	dataIndex: 'detalle', text: 'Descripción', sortable: false, width: 200, },
						{	dataIndex: 'anexo', text: 'Anexo', sortable: false, width: 100, },
					]
				}
			],
			dockedItems: [
			    {
			        xtype: 'toolbar', dock: 'top', layout: 'hbox', padding: '1 0 3 2', ui: 'footer', // 'plain',
			        items: [
			        	{	xtype: 'component_combo', itemId: 'opc_id', valueField: 'opc_id', disabled: true, hidden: true, },
			            {	xtype: 'component_combotop', itemId: 'year_id', store: 'array.Years', valueField: 'year_id', displayField: 'year_code', fieldLabel: '&nbsp;'+translations.año, listConfig: { cls: 'item00001', minWidth: 60, }, width: 60, },
			            {	xtype: 'component_combotop', itemId: 'mes_id', store: 'array.MesesAB', valueField: 'mes_id', displayField: 'mes_code', tpl:'<tpl for="."><div class="x-boundlist-item">{mes_code}&nbsp;</div></tpl>', fieldLabel: '&nbsp;'+translations.mes, listConfig: { cls: 'item00001', minWidth: 45, },  value: 0, width: 45, },
			            {   xtype: 'component_combotop', itemId: 'subdia_id', valueField: 'tabgen_id', displayField: 'tabgen_codename', tpl:'<tpl for="."><div class="x-boundlist-item">{tabgen_codename}&nbsp;</div></tpl>', fieldLabel: '&nbsp;'+translations.sub_diario, width: 300, },
			            {	xtype: 'component_datefieldtop', itemId: 'fechaini', fieldLabel: '&nbsp;'+translations.fecha_inicial, endDateField: 'fechafin', vtype: 'daterange', },
	    		        {	xtype: 'component_datefieldtop', itemId: 'fechafin', fieldLabel: '&nbsp;'+translations.fecha_final, startDateField: 'fechaini', vtype: 'daterange', },
			        ]
			    },
				{
		            xtype: 'toolbar', dock: 'bottom', ui: 'footer',
		            items: [
		                { xtype: 'component_buttonNew' },
		                { xtype: 'component_buttonModify' },
		                { xtype: 'component_buttonQuery' },
		                { xtype: 'component_buttonAnnular' },
		                { xtype: 'component_buttonPrinter' },
		            ]
				},
				{	xtype: 'component_pagingtoolbar', itemId: 'pagAccounting_libro_diario', }
			],
        },
        {   xtype: 'panel', border: false, height: '100%', width: '2%', },
        {
            xtype: 'tabpanel', itemId: 'tab01', height: '100%', plain: true, width: '40%',
            items: [
                {
                    xtype: 'panel', itemId: 'tabAccounting_libro_diario_det', height: '100%', layout: { type: 'fit', }, title: 'Cuentas Contables',
                    items: [
                        {
                            xtype: 'grid', itemId: 'grdAccounting_libro_diario_det', autoHeight: true, columnLines: true, stripeRows: true,
                            viewConfig: {
                                getRowClass: function(record, rowIndex, rowParams, store){
                                	return (record.get('tipmone_abrev') == 'MN' ? 'mx-letra-negro' : 'mx-letra-azul');
                                }
                            },
                            columns: [
				            	{ 	xtype: 'rownumberer', width: 30, },
								{	dataIndex: 'documento', text: translations.numero, sortable: false, width: 120, },
								{	dataIndex: 'doc_fecha', text: translations.fecha, align: 'center', sortable: false, width: 85, renderer : Ext.util.Format.dateRenderer('d/m/Y') },
								{	dataIndex: 'pctbl_cuenta', text: translations.cuenta, sortable: false, width: 70, },
								{	
									dataIndex: 'libdiadet_debe', text: translations.debe, align: 'right', sortable: false, renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 90, 
									renderer: function(value, metaData, record, rowIdx, colIdx, store, view) { return (record.get('libdiadet_debe')*1 > 0 ? fjsFormatNumeric(record.get('libdiadet_debe')*1,2) : ''); }
								},
								{	
									dataIndex: 'libdiadet_haber', text: translations.haber, align: 'right', sortable: false, renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 90, 
									renderer: function(value, metaData, record, rowIdx, colIdx, store, view) { return (record.get('libdiadet_haber')*1 > 0 ? fjsFormatNumeric(record.get('libdiadet_haber')*1,2) : ''); }
								},
								{	
									dataIndex: 'libdiadet_monto_me', text: 'M.E.', align: 'right', sortable: false, renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 90, 
									renderer: function(value, metaData, record, rowIdx, colIdx, store, view) { return (record.get('libdiadet_monto_me')*1 > 0 ? fjsFormatNumeric(record.get('libdiadet_monto_me')*1,2) : ''); }

								},
								{	dataIndex: 'pctbl_nombre', text: translations.descripcion, sortable: false, width: 200, },
								{	dataIndex: 'anexo', text: translations.anexo, sortable: false, width: 100, },
                            ]
                        },
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar', dock: 'bottom', ui: 'footer',
                            items: [
                                {   xtype: 'component_combo', itemId: 'opc_id', valueField: 'opc_id', disabled: true, hidden: true, },
                                {   xtype: 'component_buttonNew' },
                                {   xtype: 'component_buttonModify' },
                                {   xtype: 'component_buttonQuery' },
                                {   xtype: 'component_buttonDelete' },
                            ]
                        },
                        {   xtype: 'component_pagingtoolbar', itemId: 'pagAccounting_libro_diario_det', disabled: true, },
                    ]
                },
            ]
        }
    ]
});