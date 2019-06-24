 Ext.define('Siace.view.treasury.Cuentas_Bancarias_MovimientosReports', {
	extend: 'Siace.view.PanelBrowse',
	alias: 'widget.treasury_cuentas_bancarias_movimientosreports',

    items: [
	    {
	        xtype: 'toolbar', dock: 'top', layout: 'vbox', padding: '10 10', ui: 'footer', defaults: { labelWidth: 120 },
	        items: [
	            {	xtype: 'component_combo', itemId: 'type_record', valueField: 'typrec_id', displayField: 'typrec_nombre', fieldLabel: translations.reporte, margin: '0 0 5 0', tpl:'<tpl for="."><div class="x-boundlist-item">{typrec_nombre}&nbsp;</div></tpl>', width: 430, },
	            {   xtype: 'component_combo', itemId: 'cuebanc_key', valueField: 'cuebanc_key', displayField: 'cuebanc_nrobanco', fieldLabel: translations.cuenta_bancaria, margin: '0 0 5 0', tpl:'<tpl for="."><div class="x-boundlist-item">{cuebanc_nrobanco}&nbsp;</div></tpl>', width: 430, },
	            {	xtype: 'component_combo', itemId: 'tipcuebanc_id', valueField: 'tabgen_id', displayField: 'tabgen_nombre', fieldLabel: 'Tipo Cuenta Banc.', editable: true, margin: '0 0 5 0', tpl:'<tpl for="."><div class="x-boundlist-item">{tabgen_nombre}&nbsp;</div></tpl>', width: 430, },
	            {	xtype: 'component_combo', itemId: 'fuefin_id', name: 'fuefin_id', valueField: 'fuefin_id', displayField: 'fuefin_codename', fieldLabel: translations.fuente_financiamiento, margin: '0 4 5 0', tpl:'<tpl for="."><div class="x-boundlist-item">{fuefin_codename}&nbsp;</div></tpl>', width: 430, },
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