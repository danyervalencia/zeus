Ext.define('Siace.view.budget.IyueffedBrowse', {
	extend: 'Siace.view.PanelBrowse',
	alias: 'widget.budget_iyueffedbrowse',
	layout: { type: 'hbox', },	

    items: [
		{
			xtype: 'panel', itemId: 'panBudget_iyueffed', layout: { type: 'fit', }, height: '100%', width: '58%',
			items: [
		        {
		            xtype: 'grid', itemId: 'grdBudget_iyueffed', autoHeight: true, columnLines: true, stripeRows: true,
		            columns: [
		            	{ 	xtype: 'rownumberer', width: 30 },
						{	dataIndex: 'year_id', text: translations.año, width: 50, },
						{	dataIndex: 'fuefin_code', text: translations.fuente_financiamiento_siglas, tooltip: translations.fuente_financiamiento, width: 40, },
						{	dataIndex: 'espedet_codigo', text: translations.especifica, width: 90, },
						{	dataIndex: 'iyufe_pia', text: 'PIA', align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 90, },	
						{	dataIndex: 'iyufe_haber', text: 'Mov.', align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 90, },
						{
							dataIndex: '', text: 'PIM', align: 'right', width: 90,
				            renderer: function(value, metaData, record, rowIdx, colIdx, store, view) {
				                return Ext.util.Format.number(record.get('iyufe_pia')*1 + record.get('iyufe_haber')*1,'000,000,000.00');
				            },
						},
						{	dataIndex: 'iyufe_ingreso', text: translations.ingreso, align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 90, },
		                {
		                    text: 'Avance (%)',
		                    flex: 1,
		                    renderer: function (v, m, r) {
		                        var _value = fjsRound((r.data.iyufe_ingreso * 100) / r.data.iyufe_pia, 2);
		                        var _text = '&nbsp'+fjsRound(_value,0) +'%';
		                        var _progressRenderer = (function (pValue, pText) {
		                            var _b = Ext.create('Ext.ProgressBar', { cls:'lbl00001', height: 12, margin: '0 0 0 0', style: {color: 'green'}, });
		                            return function(pValue, pText) {
		                                _b.updateProgress(pValue, pText, true);
		                                return Ext.DomHelper.markup(_b.getRenderTree());
		                            };
		                        })(_value/100, _text);
		                        return _progressRenderer(_value/100, _text);
		                    }
		                },
					]
				}
			],
			dockedItems: [
			    {
			        xtype: 'toolbar',  dock: 'top', layout: 'hbox', padding: '1 0 3 2', ui: 'footer', //weight : -1,
			        items: [
			        	{	xtype: 'component_combo', itemId: 'opc_id', valueField: 'opc_id', disabled: true, hidden: true, },
			            {	xtype: 'component_combotop', itemId: 'year_id', store: 'array.Years', valueField: 'year_id', displayField: 'year_code', tpl:'<tpl for="."><div class="x-boundlist-item">{year_code}&nbsp;</div></tpl>', fieldLabel: '&nbsp;'+translations.año, width: 70, },
			            //{	xtype: 'component_combotop', itemId: 'fuefin_id', valueField: 'fuefin_id', displayField: 'fuefin_code', tpl:'<tpl for="."><div class="x-boundlist-item">{fuefin_code}&nbsp; &nbsp;{fuefin_nombre}</div></tpl>', fieldLabel: '&nbsp;'+translations.fuente_financiamiento_siglas, listConfig: { cls: 'item00001', minWidth: 250, }, width: 45, },
			            {	xtype: 'component_combotop', itemId: 'fuefin_id', valueField: 'fuefin_id', displayField: 'fuefin_code', fieldLabel: '&nbsp;F.F.', disabled: true, listConfig: { cls: 'item00001', minWidth: 350, }, tpl:'<tpl for="."><div class="x-boundlist-item">{fuefin_codename}&nbsp;</div></tpl>', width: 50, },
			            {	xtype: 'component_combotop', itemId: 'espedet_id', valueField: 'espedet_id', displayField: 'espedet_codigo', tpl:'<tpl for="."><div class="x-boundlist-item">{espedet_codigo}&nbsp; &nbsp;{espedet_nombre}</div></tpl>', fieldLabel: '&nbsp;'+translations.especifica, listConfig: { cls: 'item00001', minWidth: 500, maxWidth: 500 }, width: 95, },
			        ]
			    },
				{
		            xtype: 'toolbar', dock: 'bottom', ui: 'footer',
					items: [
					    { xtype: 'component_buttonNew' },
			            { xtype: 'component_buttonModify' },
			            { xtype: 'component_buttonQuery' },
			            { xtype: 'component_buttonDelete' },
			            { xtype: 'component_buttonPrinter' }
			        ]
				},
				{ 	xtype: 'component_pagingtoolbar', itemId: 'pagBudget_iyueffed', },
			]
		},
		{	xtype: 'panel', border: false, height: '100%', width: '2%', },
		{
			xtype: 'tabpanel', activeTab: 0, height: '100%', plain: true, width: '40%',
			items: [
				{
					xtype: 'panel', itemId: 'tabChart', height: '100%', layout: { type: 'fit', }, title: 'Gráfico',
					items: [
					  	{
					    	xtype: 'chart', itemId: 'chrBudget_iyueffed', store: 'budget.IyueffedConsolidado', animate: { easing: 'ease', duration: 500 }, // easing: 'elasticIn'
					     	axes: [
					        	{
					            	type: 'Numeric',
					            	fields: ['iyufe_pia', 'iyufe_ingreso'],
						            position: 'left',
						            title: 'Consolidado Avance Ingresos',
						            label: {
						            	font: '9px tahoma arial',
						            	renderer: Ext.util.Format.numberRenderer('000,000,000')
						            },
						        },
						        {
					        	    type: 'Category',
					            	fields: ['year_id'],
					            	position: 'bottom',
						            label: {
						            	font: '9px tahoma arial',
					      	    	    rotate: { degrees: 00 }
					            	}
					        	}
					        ],
					    	series: [
					        	{
									type: 'bar',
					        		xField: 'year_id',
					        		yField: ['iyufe_pia', 'iyufe_ingreso'],
									axis: 'bottom',
									highlight: true,
									column: true,
									//stacked: true,
					                tips: {
					                  	trackMouse: true,
					                  	width: 90,
					                  	height: 19,
					                  	renderer: function(storeItem, item) {
					                    	this.setTitle(fjsFormatNumeric(item.value[1],2));
					                  	}
					                },
					                /*label: {
					                	display: 'insideStart',
					                	field: 'iyufe_monto_ingreso',
					                	renderer: Ext.util.Format.numberRenderer('000,000,000.00'),
						            	font: '9px tahoma arial',
						            }*/
					        	}
					    	]
					  	}

					]
				},
				{
					xtype: 'panel', itemId: 'tabTreasury_comprobantes', height: '100%', layout: { type: 'fit', }, title: 'Comprobantes',
					items: [
					     {
		            		xtype: 'grid', itemId: 'grdTreasury_comprobantes', autoHeight: true, columnLines: true, stripeRows: true,
						    columns: [
					        	{ 	xtype: 'rownumberer', width: 30 },
								{	dataIndex: 'comprob_documento', text: 'Documento', width: 100, },
								{	dataIndex: 'comprob_fecha', text: 'Fecha', align: 'center', width: 85, renderer : Ext.util.Format.dateRenderer('d/m/Y') },
								{	dataIndex: 'tipcomprob_abrev', text: 'Tipo', width: 45, },
								{	dataIndex: 'entibanc_nombre', text: 'Entidad bancaria', width: 120, },
								{	dataIndex: 'cuebanc_nro', text: 'Nro Cuenta', width: 120, },
								{	dataIndex: 'comprobespedet_monto', align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), text: 'V. Venta', width: 100, },
								{	dataIndex: 'comprobespedet_monto_igv', align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), text: 'IGV', width: 100, },
								{	dataIndex: 'comprobespedet_monto', align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), text: 'Total', width: 100, },
							]
						},
					],
					dockedItems: [
					    {
					        xtype: 'toolbar', dock: 'top', layout: 'hbox', padding: '1 0 3 2', ui: 'footer',
					        items: [
						        {	xtype: 'component_textfieldtop', itemId: 'comprob_nro', fieldLabel: '&nbsp;'+translations.numero, maxLength: 5, vtype: 'onlyNumeric', width: 60, },
					            {	xtype: 'component_datefieldtop', itemId: 'fechaini', fieldLabel: '&nbsp;'+translations.fecha_inicial, endDateField: 'fechafin', vtype: 'daterange', },
					            {	xtype: 'component_datefieldtop', itemId: 'fechafin', fieldLabel: '&nbsp;'+translations.fecha_final, startDateField: 'fechaini', vtype: 'daterange', },
					            {	xtype: 'component_combotop', itemId: 'tipcomprob_id', valueField: 'tabgen_id', displayField: 'tabgen_nombre', tpl:'<tpl for="."><div class="x-boundlist-item">{tabgen_nombre}&nbsp;</div></tpl>', fieldLabel: '&nbsp;Tipo', width: 120, },
					        ]
					    },
						{
					        xtype: 'toolbar', dock: 'bottom', ui: 'footer',
					        items: [
					            { xtype: 'component_buttonQuery' },
				                { xtype: 'component_button', itemId: 'btnDetail', disabled: true, iconCls: 'icon_Detail', text: 'Detalle de Ingresos' },
				                { xtype: 'component_buttonPrinter' }           
					        ]
						},
						{	xtype: 'component_pagingtoolbar', itemId: 'pagTreasury_comprobantes', disabled: true, },
					]
				},
			]
		}
	],
});