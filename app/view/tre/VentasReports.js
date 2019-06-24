Ext.define('Siace.view.treasury.VentasReports', {
	extend: 'Siace.view.PanelBrowse',
	alias: 'widget.treasury_ventasreports',

    items: [
	    {
	        xtype: 'toolbar', dock: 'top', layout: 'vbox', padding: '10 10', ui: 'footer', defaults: { labelWidth: 65 },
	        items: [
	            {	xtype: 'component_combo', itemId: 'type_record', valueField: 'typrec_id', displayField: 'typrec_nombre', fieldLabel: translations.reporte, margin: '0 0 5 0', width: 430, },
	            {	xtype: 'component_combo', itemId: 'doc_id', valueField: 'doc_id', displayField: 'doc_nombre', tpl:'<tpl for="."><div class="x-boundlist-item">{doc_nombre}&nbsp;</div></tpl>', fieldLabel: translations.documento, editable: true, margin: '0 0 5 0', width: 430, },
				{
					xtype: 'fieldcontainer', fieldLabel: translations.periodo, labelClsExtra: 'lbl00001', layout: 'hbox', margin: '0 0 5 0',
				    items: [
			            {	xtype: 'component_datefieldtop', itemId: 'fechaini', endDateField: 'fechafin', vtype: 'daterange', },
			            {	xtype: 'component_datefieldtop', itemId: 'fechafin', startDateField: 'fechaini', vtype: 'daterange', },
			        ]
			    },
			    {
					xtype: 'fieldcontainer', fieldLabel: 'Cliente', labelClsExtra: 'lbl00001', labelWidth: 65, layout: { type: 'hbox' }, margin: '0 0 5 0',
					items: [
				        {	xtype: 'component_combotop', itemId: 'tipdocident_id', name: 'tipdocident_id', store: 'array.Tipos_Documentos_IdentidadVenta', valueField: 'tipdocident_id', displayField: 'tipdocident_abrev', listConfig: { cls: 'item00001', minWidth: 55, }, value: 3, width: 55, },
					    {
							xtype: 'container', itemId: 'cntPersonas', layout: { type: 'hbox' },
							items: [
								{ 	xtype: 'hiddenfield', itemId: 'pers_key', },
								{   xtype: 'hiddenfield', itemId: 'PERS_RUC', },
								{	xtype: 'component_textfieldtop', itemId: 'pers_ruc', enableKeyEvents: true, maxLength: 11, },
								{	xtype: 'component_button_imagesearch', itemId: 'btnPers_search', },
								{	xtype: 'displayfield', itemId: 'pers_nombre', name: 'pers_nombre', fieldCls: 'df00101', }
							]
						},
					    {
							xtype: 'container', itemId: 'cntIndividuos', hidden: true, layout: { type: 'hbox' },
							items: [
								{ 	xtype: 'hiddenfield', itemId: 'indiv_key', },
								{   xtype: 'hiddenfield', itemId: 'INDIV_DNI', },
								{	xtype: 'component_textfieldtop', itemId: 'indiv_dni', enableKeyEvents: true, maxLength: 12, },
								{	xtype: 'component_button_imagesearch', itemId: 'btnIndiv_search', },
								{	xtype: 'displayfield', itemId: 'indiv_apenom', name: 'indiv_apenom', fieldCls: 'df00101', }
							]
						},
					]
				},			    
			    {	xtype: 'component_combo', itemId: 'tippag_id', valueField: 'tippag_id', displayField: 'tippag_nombre', tpl:'<tpl for="."><div class="x-boundlist-item">{tippag_nombre}&nbsp;</div></tpl>', fieldLabel: translations.tipo_pago, editable: true, margin: '0 0 5 0', width: 185, },
			    {	xtype: 'component_combo', itemId: 'mone_id', name: 'mone_id', store: 'array.MonedasAB', valueField: 'mone_id', displayField: 'mone_nombre', tpl:'<tpl for="."><div class="x-boundlist-item">{mone_nombre}&nbsp;</div></tpl>', fieldLabel: translations.moneda, margin: '0 0 5 0', value: 0, width: 185, },
				/*{
					xtype : 'container', layout: 'hbox', width: 430,
					items: [
			            
			            {   xtype: 'displayfield', flex: 1, },
			            {	xtype: 'component_combo', itemId: 'mone_id', name: 'mone_id', store: 'array.MonedasAB', valueField: 'mone_id', displayField: 'mone_nombre', tpl:'<tpl for="."><div class="x-boundlist-item">{mone_nombre}&nbsp;</div></tpl>', fieldLabel: translations.moneda, labelWidth: 50, margin: '0 0 5 0', value: 0, width: 190, },
					]
				},		*/	    
			    {	xtype: 'component_combo', itemId: 'bscat_id', valueField: 'bscat_id', displayField: 'bscat_nombre', tpl:'<tpl for="."><div class="x-boundlist-item">{bscat_nombre}&nbsp;</div></tpl>', fieldLabel: 'Categoría', editable: true, margin: '0 0 5 0', width: 430, },
			    {	xtype: 'component_combo', itemId: 'bs_key', valueField: 'bs_key', displayField: 'bs_nombre', tpl:'<tpl for="."><div class="x-boundlist-item">{bs_nombre}&nbsp;</div></tpl>', disabled: true, fieldLabel: 'Servicio', editable: true, margin: '0 0 5 0', width: 430, },
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

	__winPIS: '', __winPPS: '',
	setWinPPS: function(pcWinPPS) { this.__winPPS = pcWinPPS; },
	getWinPPS: function() { return this.__winPPS; },
	setWinPIS: function(pcWinPIS) { this.__winPIS = pcWinPIS; },
	getWinPIS: function() { return this.__winPIS; },
});