Ext.define('Siace.view.budget.IyueffBrowse', {
	extend: 'Siace.view.PanelBrowse',
	alias: 'widget.budget_iyueffbrowse',

    items: [
        {
            xtype: 'grid', itemId: 'grdBudget_iyueff', autoHeight: true, columnLines: true, stripeRows: true,

            columns: [
            	{ 	xtype: 'rownumberer', width: 30 },
				{	dataIndex: 'year_id', text: translations.año, width: 50, },
				{	dataIndex: 'fuefin_code', text: translations.fuente_financiamiento_siglas, tooltip: translations.fuente_financiamiento, width: 40, },
				{	dataIndex: 'iyuf_pia', text: 'PIA', align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 90, },	
				{	dataIndex: 'iyuf_haber', text: 'Mov.', align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 90, },
				{
					dataIndex: '', text: 'PIM', align: 'right', width: 90,
		            renderer: function(value, metaData, record, rowIdx, colIdx, store, view) {
		                return Ext.util.Format.number(record.get('iyuf_pia')*1 + record.get('iyuf_haber')*1,'000,000,000.00');
		            },
				},
				{	dataIndex: 'iyuf_ingreso_ctbl', text: translations.ingreso +' Ctble', align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 90, },
				{	dataIndex: 'iyuf_ingreso', text: 'Ingreso', align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 90, },
				{	dataIndex: 'iyuf_egreso', text: 'Egreso', align: 'right', renderer: Ext.util.Format.numberRenderer('000,000,000.00'), width: 90, },
				{
					dataIndex: '', text: translations.saldo, align: 'right', width: 90,
		            renderer: function(value, metaData, record, rowIdx, colIdx, store, view) {
		                return Ext.util.Format.number(record.get('iyuf_ingreso')*1 + record.get('iyuf_egreso')*1,'000,000,000.00');
		            },
				},				
                {
                    text: 'Avance (%)',
                    flex: 1,
                    renderer: function (v, m, r) {
                        var _value = fjsRound((r.data.iyuf_ingreso * 100) / r.data.iyuf_pia, 2);
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
	        xtype: 'toolbar',  dock: 'top', layout: 'hbox', padding: '1 0 3 2', ui: 'footer',  weight : -1,
	        items: [
	            {	xtype: 'component_combotop', itemId: 'year_id', store: 'array.Years', valueField: 'year_id', displayField: 'year_nro', tpl:'<tpl for="."><div class="x-boundlist-item">{year_nro}&nbsp;</div></tpl>', fieldLabel: '&nbsp;'+translations.año, width: 70, },
	            {	xtype: 'component_combotop', itemId: 'fuefin_id', valueField: 'fuefin_id', displayField: 'fuefin_code', tpl:'<tpl for="."><div class="x-boundlist-item">{fuefin_code}&nbsp; &nbsp;{fuefin_nombre}</div></tpl>', fieldLabel: '&nbsp;'+translations.fuente_financiamiento_siglas, listConfig: { cls: 'item00001', minWidth: 250, maxWidth: 250 }, width: 45, },
	        ]
	    }, 
		{ 	xtype: 'component_pagingtoolbar', itemId: 'pgtBudget_iyueff', },
		{
            xtype: 'panel', border: 5, dock: 'right', weight : -1, width: 200, title: 'Grafico Consolidado', layout: 'fit',
            items: [
			  	{
			    	xtype: 'chart', itemId: 'chrBudget_iyueff',
			     	store: 'budget.IyueffConsolidado',
			     	animate: { easing: 'ease', duration: 500 }, // easing: 'elasticIn'
			     	axes: [
			        	{
			            	type: 'Numeric',
			            	fields: ['iyuf_pia', 'iyuf_ingreso'],
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
			        		yField: ['iyuf_pia', 'iyuf_ingreso'],
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
			        	}
			    	]
			  }
            ]
		},	 
	],

	buttons: {
		buttonAlign: 'left', weight : -1,
		items: [
		    { xtype: 'component_buttonNew' },
            { xtype: 'component_buttonModify' },
            { xtype: 'component_buttonQuery' },
            { xtype: 'component_buttonDelete' },
            { xtype: 'component_buttonPrinter' }
        ]
	},
});