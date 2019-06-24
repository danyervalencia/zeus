Ext.define('Siace.view.accounting.Plan_ContableBrowse', {
	extend: 'Siace.view.PanelBrowse',
	alias: 'widget.accounting_plan_contablebrowse',
	layout: { type: 'hbox', },

    items: [
        {
            xtype : 'panel', itemId: 'panAccounting_plan_contable', layout: { type: 'fit', }, height: '100%', width: '50%',
            items: [
		        {
		            xtype: 'grid', itemId: 'grdAccounting_plan_contable', autoHeight: true, columnLines: true, stripeRows: true,
					viewConfig: {
				    	getRowClass: function(record, rowIndex, rowParams, store){ 
				    		return (record.get('tipcta_code') == '' ? '' : 'mx-letra-negrita');
				    	}
					},            
		            columns: [
		            	{ 	xtype: 'rownumberer', width: 30, },
						{   dataIndex: 'pctbl_cuenta', text: 'Cuenta', width: 80, },
						{   dataIndex: 'pctbl_nombre', text: 'Descripción', width: 400, },
						{	dataIndex: 'tipcta_code', text: 'Tipo', width: 50, },
						{	dataIndex: 'tipanal_code', text: 'Nivel', width: 50, },
						{	dataIndex: 'tipanx_code', text: 'Anexo', width: 50, },
						{	dataIndex: 'mone_abrev', text: translations.moneda_abrev, width: 45, },
					]
				}
			],

			dockedItems: [
			    {
			        xtype: 'toolbar', dock: 'top', layout: 'hbox', padding: '1 0 3 2', ui: 'footer', // 'plain',
			        items: [
			        	{	xtype: 'component_combo', itemId: 'opc_id', valueField: 'opc_id', disabled: true, hidden: true, },
						{	xtype: 'component_textfieldtop', itemId: 'pctbl_cuenta', fieldLabel: '&nbsp;Cuenta', maxLength: 10, width: 80, },
						{	xtype: 'component_textfieldtop', itemId: 'pctbl_nombre', fieldLabel: '&nbsp;Descripción', maxLength: 50, width: 300, },
			            {	xtype: 'component_combotop', itemId: 'tipcta_id', valueField: 'tabgen_id', displayField: 'tabgen_code', tpl:'<tpl for="."><div class="x-boundlist-item">{tabgen_codename}&nbsp;</div></tpl>', fieldLabel: '&nbsp;Tipo', listConfig: { cls: 'item00001', minWidth: 150, }, width: 50, },
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
				{	xtype: 'component_pagingtoolbar', itemId: 'pagAccounting_plan_contable', }
			],
		},
        {   xtype: 'panel', border: false, height: '100%', width: '2%', },
        {
            xtype: 'tabpanel', itemId: 'tab01', height: '100%', plain: true, width: '48%',
            items: [
                {
                    xtype: 'panel', itemId: 'tabAccounting_libro_diario_det', height: '100%', layout: { type: 'fit', }, title: 'Movimientos',
                    items: [
                        {
                            xtype: 'grid', itemId: 'grdAccounting_libro_diario_det', autoHeight: true, columnLines: true, stripeRows: true,
                            viewConfig: {
                                getRowClass: function(record, rowIndex, rowParams, store){
                                	return (record.get('doc_flga') == '98' ? 'mx-letra-rojo' : (record.get('tipmone_abrev') == 'MN' ? 'mx-letra-negro' : 'mx-letra-azul'));
                                }
                            },
                            columns: [
				            	{ 	xtype: 'rownumberer', width: 30, },
								{	dataIndex: 'subdia_code', text: 'SD', sortable: false, tooltip: 'Sub-Diario', width: 30, },
								{   dataIndex: 'libdia_record', text: 'Registro', sortable: false, width: 70, },
								{	dataIndex: 'libdia_fecha', text: 'Operación', align: 'center', sortable: false, width: 85, renderer : Ext.util.Format.dateRenderer('d/m/Y') },

								{	dataIndex: 'documento', text: 'Documento', sortable: false, width: 120, },
								{	dataIndex: 'doc_fecha', text: 'Fecha', align: 'center', sortable: false, width: 85, renderer : Ext.util.Format.dateRenderer('d/m/Y') },
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
								{	
									dataIndex: 'tipcamb_monto', text: 'T.C.', align: 'right', sortable: false, renderer: Ext.util.Format.numberRenderer('000.000'), tooltip: 'Tipo de Cambio', width: 60, 
									renderer: function(value, metaData, record, rowIdx, colIdx, store, view) { return (record.get('doc_flga') !== '98' && record.get('tipcamb_monto')*1 > 0 ? fjsFormatNumeric(record.get('tipcamb_monto')*1,3) : ''); }
								},								
								{	dataIndex: 'anexo', text: 'Anexo', sortable: false, width: 100, },
								{	dataIndex: 'detalle', text: 'Descripción', sortable: false, width: 350, },
                            ]
                        },
                    ],
                    dockedItems: [
					    {
					        xtype: 'toolbar', dock: 'top', layout: 'hbox', padding: '1 0 3 2', ui: 'footer', // 'plain',
					        items: [
					            {	xtype: 'component_combotop', itemId: 'year_id', store: 'array.Years', valueField: 'year_id', displayField: 'year_code', fieldLabel: '&nbsp;Año', listConfig: { cls: 'item00001', minWidth: 60, }, width: 60, },
					            {	xtype: 'component_combotop', itemId: 'mes_id', store: 'array.MesesAB', valueField: 'mes_id', displayField: 'mes_code', tpl:'<tpl for="."><div class="x-boundlist-item">{mes_code}&nbsp;</div></tpl>', fieldLabel: '&nbsp;Mes', listConfig: { cls: 'item00001', minWidth: 45, },  value: 0, width: 45, },
					            {   xtype: 'component_combotop', itemId: 'subdia_id', valueField: 'tabgen_id', displayField: 'tabgen_code', tpl:'<tpl for="."><div class="x-boundlist-item">{tabgen_codename}&nbsp;</div></tpl>', fieldLabel: '&nbsp;S.D.', listConfig: { cls: 'item00001', minWidth: 300, },  width: 45, },
					            {	xtype: 'component_datefieldtop', itemId: 'fechaini', fieldLabel: '&nbsp;'+translations.fecha_inicial, endDateField: 'fechafin', vtype: 'daterange', },
			    		        {	xtype: 'component_datefieldtop', itemId: 'fechafin', fieldLabel: '&nbsp;'+translations.fecha_final, startDateField: 'fechaini', vtype: 'daterange', },
					        ]
					    },
                        {   xtype: 'component_pagingtoolbar', itemId: 'pagAccounting_libro_diario_det', disabled: true, },
                    ]
                },
            ]
        }
	]
});