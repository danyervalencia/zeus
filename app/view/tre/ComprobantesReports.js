 Ext.define('Siace.view.treasury.ComprobantesReports', {
	extend: 'Siace.view.PanelBrowse',
	alias: 'widget.treasury_comprobantesreports',
    items: [
	    {
	        xtype: 'toolbar', dock: 'top', layout: 'vbox', padding: '10 10', ui: 'footer', defaults: { labelWidth: 120 },
	        items: [
	            {	xtype: 'component_combo', itemId: 'type_record', valueField: 'typrep_id', displayField: 'typrep_nombre', tpl:'<tpl for="."><div class="x-boundlist-item">{typrep_nombre}&nbsp;</div></tpl>', fieldLabel: translations.reporte, margin: '0 0 5 0', width: 450, },
	            {	xtype: 'component_combo', itemId: 'tipcomprob_id', valueField: 'tabgen_id', displayField: 'tabgen_nombre', tpl:'<tpl for="."><div class="x-boundlist-item">{tabgen_nombre}&nbsp;</div></tpl>', fieldLabel: translations.tipo +' '+ translations.comprobante, editable: true, margin: '0 0 5 0', width: 450, },
	            {	xtype: 'component_combo', itemId: 'cuebanc_key', valueField: 'cuebanc_key', displayField: 'cuebanc_nrobanco', tpl:'<tpl for="."><div class="x-boundlist-item">{cuebanc_nrobanco}&nbsp;</div></tpl>', fieldLabel: translations.cuenta_bancaria, margin: '0 0 5 0', width: 450, },
	            {	xtype: 'component_combo', itemId: 'fuefin_id', name: 'fuefin_id', valueField: 'fuefin_id', displayField: 'fuefin_codename', tpl:'<tpl for="."><div class="x-boundlist-item">{fuefin_codename}&nbsp;</div></tpl>', fieldLabel: translations.fuente_financiamiento, margin: '0 4 5 0', width: 450, },
			    {	xtype: 'component_combo', itemId: 'espedet_id', valueField: 'espedet_id', displayField: 'espedet_codename', tpl:'<tpl for="."><div class="x-boundlist-item">{espedet_codename}&nbsp;</div></tpl>', fieldLabel: 'Clasificador', listConfig: { cls: 'item00001', minWidth: 600 },  margin: '0 0 5 0', width: 450, },
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