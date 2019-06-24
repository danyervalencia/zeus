Ext.define('Siace.view.operations.GuiasEditWeighing', {
	extend: 'Siace.view.WindowEdit',
	alias: 'widget.operations_guiaseditweighing',
	width: 680,
	items: [
		{
			xtype: 'form', itemId: 'frmOperations_guias', bodyPadding: 8, border: false, defaults: { labelWidth: 70 }, layout: { type: 'vbox' },
			items: [
				{	xtype: 'hiddenfield', itemId: 'guia_id',  name: 'guia_id', },
				{	xtype: 'hiddenfield', itemId: 'guia_key',  name: 'guia_key', },
				{
					xtype : 'container', layout: 'hbox', width: '100%',
					items : [
				        {	xtype: 'component_combo', itemId: 'doc_id', name: 'doc_id', valueField: 'doc_id', displayField: 'doc_nombre', disabled: true, fieldLabel: translations.documento, labelWidth: 70, margin: '0 4 5 0', width: 230, },
					    {	xtype: 'component_combotop', itemId: 'guia_serie', valueField: 'docser_serie', displayField: 'docser_format', disabled: true, listConfig: { cls: 'item00001', minWidth: 60, }, width: 60, },
					    { 	xtype: 'component_textfield', itemId: 'guia_nro', align: 'center', width: 60, },
					    { 	xtype: 'displayfield', flex: 1, },
						{	xtype: 'component_datefield', itemId: 'guia_fecha', name: 'guia_fecha', fieldLabel: translations.fecha, allowBlank: false, labelWidth: 45, width: 145, }
					]
				},
			    {
					xtype: 'fieldcontainer', fieldLabel: 'Consignatario', labelClsExtra: 'lbl00001', labelWidth: 70, layout: { type: 'hbox' },
					items: [
				        {	xtype: 'component_combotop', itemId: 'tipdocident_id', name: 'tipdocident_id', store: 'array.Tipos_Documentos_IdentidadVenta', valueField: 'tipdocident_id', displayField: 'tipdocident_abrev', width: 70, },
					    {
							xtype: 'container', itemId: 'cntPersonas', layout: { type: 'hbox' },
							items: [
								{ 	xtype: 'hiddenfield', itemId: 'pers_key', },
								{   xtype: 'hiddenfield', itemId: 'PERS_RUC', },
								{	xtype: 'component_textfieldtop', itemId: 'pers_ruc', enableKeyEvents: true, maxLength: 11, width: 90 },
								{	xtype: 'component_button_imagesearch', itemId: 'btnPers_search', },
								{	xtype: 'component_button_imagemodify', itemId: 'btnPers_modify', },
								{	xtype: 'displayfield', itemId: 'pers_nombre', name: 'pers_nombre', fieldCls: 'df00101', }
							]
						},
					    {
							xtype: 'container', itemId: 'cntIndividuos', hidden: true, layout: { type: 'hbox' },
							items: [
								{ 	xtype: 'hiddenfield', itemId: 'indiv_key', },
								{   xtype: 'hiddenfield', itemId: 'INDIV_DNI', },
								{	xtype: 'component_textfieldtop', itemId: 'indiv_dni', enableKeyEvents: true, maxLength: 12, width: 90 },
								{	xtype: 'component_button_imagesearch', itemId: 'btnIndiv_search', },
								{	xtype: 'component_button_imagemodify', itemId: 'btnIndiv_modify', },
								{	xtype: 'displayfield', itemId: 'indiv_apenom', name: 'indiv_apenom', fieldCls: 'df00101', }
							]
						},
					]
				},
				{
					xtype: 'fieldcontainer', fieldLabel: translations.vehiculo, labelClsExtra: 'lbl00001', layout: 'hbox', width: 410,
				    items: [
						{   xtype: 'hiddenfield', itemId: 'veh_key', name: 'veh_key', value: '' },
						{   xtype: 'hiddenfield', itemId: 'VEH_PLACA', name: 'VEH_PLACA', },
						{	xtype: 'component_textfieldtop', itemId: 'veh_placa', name: 'veh_placa', enableKeyEvents: true, maxLength: 10, vtype: 'vehiculoPlaca', width: 70, },
						{   xtype: 'component_button_imagesearch', itemId: 'btnVeh_search', },
						{	xtype: 'component_button_imagemodify', itemId: 'btnVeh_modify', },
						{   xtype: 'displayfield', itemId: 'tipveh_nombre', name: 'tipveh_nombre', fieldCls: 'df00101', value: '' }
					]
				},
				{	xtype: 'component_textfield', itemId: 'guia_observ', name: 'guia_observ', fieldLabel: 'Mercancia', width: '100%' },
				{
					xtype: 'container', layout: { type: 'hbox' }, width: '100%',
					items: [
						{
							xtype: 'fieldset', layout: { type: 'vbox' }, defaults: { labelWidth: 60 }, padding: '2 8 4 8', width: 180, title: 'Primera Pesada',
							items: [
								{	xtype: 'component_datefield', itemId: 'guia_ing_fecha', name: 'guia_ing_fecha', fieldLabel: translations.fecha, allowBlank: false, width: '100%', },
								{	xtype: 'component_timefield', itemId: 'guia_ing_hora', name: 'guia_ing_hora', fieldLabel: translations.hora, allowBlank: false, width: '100%', },
								{   xtype: 'component_currencyfield', itemId: 'guia_ing_peso', name: 'guia_ing_peso', fieldCls: 'txt00006', fieldLabel: 'Peso (Kg.)', numberDecimal: 0, width: '100%', }
							]
						},
						{ 	xtype: 'displayfield', width: 35, },
						{
							xtype: 'fieldset', layout: { type: 'vbox' }, defaults: { labelWidth: 60 }, padding: '2 8 4 8', width: 180, title: 'Segunda Pesada',
							items: [
								{	xtype: 'component_datefield', itemId: 'guia_sal_fecha', name: 'guia_sal_fecha', disabled: true, fieldLabel: translations.fecha, width: '100%', },
								{	xtype: 'component_timefield', itemId: 'guia_sal_hora', name: 'guia_sal_hora', disabled: true, fieldLabel: translations.hora, width: '100%', },
								{   xtype: 'component_currencyfield', itemId: 'guia_sal_peso', name: 'guia_sal_peso', disabled: true, fieldCls: 'txt00006', fieldLabel: 'Peso (Kg.)', numberDecimal: 0, width: '100%', }
							]
						},
						{ 	xtype: 'displayfield', flex: 1, },
						{
							xtype: 'fieldset', layout: { type: 'vbox' }, defaults: { labelWidth: 60 }, padding: '2 8 4 8', width: 210, title: 'Registro de Venta',
							items: [
								{	xtype: 'component_combo', itemId: 'ventdet_key', name: 'ventdet_key', valueField: 'ventdet_key', displayField: 'vent_documento', fieldLabel: 'Documento', width: '100%', },
								{	xtype: 'component_datefield', itemId: 'tablex_fecha', name: 'tablex_fecha', disabled: true, fieldLabel: translations.fecha, width: '100%', },
							]
						},
					]
				}
			]
		}
	],

	__doc_id: '',
	__guia_serie: '',
	setDoc_id: function(pcDoc_id) { this.__doc_id = pcDoc_id; },
	getDoc_id: function() { return this.__doc_id; },
	setGuia_serie: function(pcGuia_serie) { this.__guia_serie = pcGuia_serie; },
	getGuia_serie: function() { return this.__guia_serie; },
});