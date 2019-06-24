Ext.define('Siace.view.treasury.RecibosReports', {
	extend: 'Siace.view.PanelBrowse',
	alias: 'widget.treasury_recibosreports',

    items: [
	    {
	        xtype: 'toolbar', dock: 'top', layout: 'vbox', padding: '10 10', ui: 'footer', defaults: { labelWidth: 65 },
	        items: [
	            {	xtype: 'component_combo', itemId: 'type_record', valueField: 'typrec_id', displayField: 'typrec_nombre', fieldLabel: translations.reporte, margin: '0 0 5 0', width: 430, },
	            {	xtype: 'component_combo', itemId: 'doc_id', valueField: 'doc_id', displayField: 'doc_nombre', tpl:'<tpl for="."><div class="x-boundlist-item">{doc_nombre}&nbsp;</div></tpl>', fieldLabel: translations.documento, editable: true, margin: '0 0 5 0', width: 430, },
	            {	xtype: 'component_combo', itemId: 'concp_id', valueField: 'concp_id', displayField: 'concp_codename', fieldLabel: 'Concepto', tpl:'<tpl for="."><div class="x-boundlist-item">{concp_codename}&nbsp;</div></tpl>', margin: '0 0 5 0', width: 430, },
				{
					xtype : 'container', layout: 'hbox', width: 400,
					items: [
			            {	xtype: 'component_combo', itemId: 'tippag_id', valueField: 'tippag_id', displayField: 'tippag_nombre', tpl:'<tpl for="."><div class="x-boundlist-item">{tippag_nombre}&nbsp;</div></tpl>', fieldLabel: translations.tipo_pago, editable: true, labelWidth: 65, margin: '0 0 5 0', width: 200, },
			            {   xtype: 'displayfield', flex: 1, },
					]
				},
			    {	xtype: 'component_combo', itemId: 'mone_id', name: 'mone_id', store: 'array.MonedasAB', valueField: 'mone_id', displayField: 'mone_nombre', tpl:'<tpl for="."><div class="x-boundlist-item">{mone_nombre}&nbsp;</div></tpl>', fieldLabel: translations.moneda, labelWidth: 65, margin: '0 0 5 0', value: 0, width: 200, },
				{
					xtype: 'fieldcontainer', fieldLabel: translations.periodo, labelClsExtra: 'lbl00001', layout: 'hbox', margin: '0 0 5 0',
				    items: [
			            {	xtype: 'component_datefieldtop', itemId: 'fechaini', endDateField: 'fechafin', vtype: 'daterange', },
			            {	xtype: 'component_datefieldtop', itemId: 'fechafin', startDateField: 'fechaini', vtype: 'daterange', },
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