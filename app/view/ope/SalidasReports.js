 Ext.define('Siace.view.operations.SalidasReports', {
	extend: 'Siace.view.PanelBrowse',
	alias: 'widget.operations_salidasreports',

    items: [
	    {
	        xtype: 'toolbar', dock: 'top', layout: 'vbox', padding: '10 10', ui: 'footer', defaults: { labelWidth: 75 },
	        items: [
	            {	xtype: 'component_combo', itemId: 'type_report', valueField: 'typrep_id', displayField: 'typrep_nombre', tpl:'<tpl for="."><div class="x-boundlist-item">{typrep_nombre}&nbsp;</div></tpl>', fieldLabel: translations.reporte, margin: '0 0 5 0', width: 350, },
	            {   xtype: 'hiddenfield', itemId: 'ALMA_KEY', name: 'ALMA_KEY' },
	            {	xtype: 'component_combo', itemId: 'alma_key', valueField: 'alma_key', displayField: 'alma_nombre', tpl:'<tpl for="."><div class="x-boundlist-item">{alma_nombre}&nbsp;</div></tpl>', fieldLabel: translations.usuario, editable: true, margin: '0 0 5 0', width: 350, },
	            {	xtype: 'component_combo', itemId: 'pers_id', valueField: 'pers_id', displayField: 'pers_nombre', tpl:'<tpl for="."><div class="x-boundlist-item">{pers_nombre}&nbsp;</div></tpl>', fieldLabel: translations.operador, margin: '0 0 5 0', width: 500, },
	            {	xtype: 'component_combo', itemId: 'tipmov_id', valueField: 'tipmov_id', displayField: 'tipmov_nombre', tpl:'<tpl for="."><div class="x-boundlist-item">{tipmov_nombre}&nbsp;</div></tpl>', fieldLabel: translations.destino, margin: '0 0 5 0', width: 284, },
				{
					xtype: 'fieldcontainer', fieldLabel: translations.periodo, labelClsExtra: 'lbl00001', layout: 'hbox', margin: '0 0 5 0',
				    items: [
			            {	xtype: 'component_datefieldtop', itemId: 'fechaini', endDateField: 'fechafin', vtype: 'daterange', },
			            {	xtype: 'component_datefieldtop', itemId: 'fechafin', startDateField: 'fechaini', vtype: 'daterange', },
			        ]
			    },
				{
					xtype: 'fieldcontainer', fieldLabel: translations.mercancia, labelClsExtra: 'lbl00001', layout: 'hbox', margin: '0 0 5 0',
					items: [
						{	xtype: 'component_combotop', itemId: 'bsg_id', valueField: 'bsg_id', displayField: 'bsg_code', tpl:'<tpl for="."><div class="x-boundlist-item">{bsg_code}&nbsp; {bsg_nombre}</div></tpl>', listConfig: { cls: 'item00001', minWidth: 600 }, width: 40, },
						{	xtype: 'component_combotop', itemId: 'bsc_id', valueField: 'bsc_id', displayField: 'bsc_code', tpl:'<tpl for="."><div class="x-boundlist-item">{bsc_code}&nbsp; {bsc_nombre}</div></tpl>', listConfig: { cls: 'item00001', minWidth: 550 }, width: 40, },
						{	xtype: 'component_combotop', itemId: 'bsf_id', valueField: 'bsf_id', displayField: 'bsf_code', tpl:'<tpl for="."><div class="x-boundlist-item">{bsf_code}&nbsp; {bsf_nombre}</div></tpl>', listConfig: { cls: 'item00001', minWidth: 550 }, width: 55, },
						{	xtype: 'component_numberfield', itemId: 'bs_id', name: 'bs_id', decimalPrecision: 0, maxLength: 4, value: '', width: 57},
					]
				},
				{
					xtype: 'fieldcontainer', fieldLabel: translations.partida_arancelaria_abrev, layout: 'hbox', width: '100%',
					items: [
						{   xtype: 'hiddenfield', itemId: 'nand_id', name: 'nand_id' },
						{   xtype: 'hiddenfield', itemId: 'NAND_CODIGO', name: 'NAND_CODIGO' },
						{ 	xtype: 'component_textfield', itemId: 'nand_codigo', name: 'nand_codigo', enableKeyEvents: true, margin: '0 4 4 0', maxLength: 15, width: 90, },
						{   xtype: 'component_button_imagesearch', itemId: 'btnNand_search' },
						{   xtype: 'displayfield', itemId: 'nand_nombre', name: 'nand_nombre', fieldCls: 'df00101', value: '' }
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