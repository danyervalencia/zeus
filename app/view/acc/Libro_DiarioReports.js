Ext.define('Siace.view.accounting.Libro_DiarioReports', {
	extend: 'Siace.view.PanelBrowse',
	alias: 'widget.accounting_libro_diarioreports',

    items: [
	    {
	        xtype: 'toolbar', dock: 'top', layout: 'vbox', padding: '10 10', ui: 'footer', defaults: { labelWidth: 65 },
	        items: [
	            {
	                xtype: 'component_combo', itemId: 'type_record', valueField: 'typrec_id', displayField: 'typrec_nombre',
	                fieldLabel: translations.reporte, margin: '0 0 5 0', width: 400,
	            },
	            {
	                xtype: 'component_combo', itemId: 'subdia_id', valueField: 'tabgen_id', displayField: 'tabgen_codename',
	                tpl:'<tpl for="."><div class="x-boundlist-item">{tabgen_codename}&nbsp;</div></tpl>',
	                fieldLabel: 'Sub-Diario', editable: true, margin: '0 0 5 0', width: 400,
	            },
			    {
				   	xtype: 'component_combo', itemId: 'mone_id', name: 'mone_id', store: 'array.MonedasAB', valueField: 'mone_id', displayField: 'mone_nombre',
				   	tpl:'<tpl for="."><div class="x-boundlist-item">{mone_nombre}&nbsp;</div></tpl>',
				  	fieldLabel: translations.moneda, labelWidth: 65, margin: '0 0 5 0', value: 0, width: 200,
				},
				{
					xtype: 'fieldcontainer', fieldLabel: translations.periodo, labelClsExtra: 'lbl00001', layout: 'hbox', margin: '0 0 5 0',
				    items: [
			            {
			                xtype: 'component_combotop', itemId: 'year_id', valueField: 'year_id', displayField: 'year_nro',
			                tpl:'<tpl for="."><div class="x-boundlist-item">{year_nro}&nbsp;</div></tpl>',
			                listConfig: { cls: 'item00001', minWidth: 60, }, width: 60,
			            },
					    {
						   	xtype: 'component_combo', itemId: 'mes_id', name: 'mes_id', store: 'array.MesesAB', valueField: 'mes_id', displayField: 'mes_nombre',
						   	tpl:'<tpl for="."><div class="x-boundlist-item">{mes_nombre}&nbsp;</div></tpl>',
						  	labelWidth: 65, margin: '0 0 5 0', value: 0, width: 100,
						},			            
			        ]
			    },
	        ]
	    },
	],

	dockedItems: [
		{
            xtype: 'toolbar', dock: 'bottom', ui: 'footer',
            items: [
                { xtype: 'component_buttonPdf' },
                { xtype: 'component_buttonExcel' },
            ]
		}
	],
});