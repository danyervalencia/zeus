Ext.define('Siace.view.public.Personas_Importadores_LicenciasEdit', {
	extend: 'Siace.view.WindowEdit',
	alias: 'widget.public_personas_importadores_licenciasedit',
	width: 600,

	items: [
		{
			xtype: 'form', itemId: 'frmPublic_personas_importadores_licencias',
			bodyPadding: 8, border: true, defaults: { labelWidth: 75, width: '100%', },
			items: [
				{	xtype: 'hiddenfield', itemId: 'persimporlic_key', name: 'persimporlic_key', },
				{	xtype: 'hiddenfield', itemId: 'persimporlic_id', name: 'persimporlic_id', },
				{	xtype: 'hiddenfield', itemId: 'persimpor_key', name: 'persimpor_key', },
				{	xtype: 'hiddenfield', itemId: 'pers_key', name: 'pers_key', },
				{
					xtype : 'fieldcontainer', fieldLabel: translations.documento,
					labelClsExtra: 'lbl00001', labelWidth: 75, layout: 'hbox', width: '100%',
					items : [
				        {	xtype: 'component_combotop', itemId: 'doc_id', name: 'doc_id', valueField: 'doc_id', displayField: 'doc_nombre', disabled: true, width: 180, },
					    {	xtype: 'component_combotop', itemId: 'persimporlic_serie', valueField: 'docser_serie', displayField: 'docser_format', disabled: true, listConfig: { cls: 'item00001', minWidth: 60, }, width: 60, },
					    { 	xtype: 'component_textfield', itemId: 'persimporlic_nro', align: 'center', disabled: true, width: 60, },
					    { 	xtype: 'displayfield', flex: 1, },
						{	xtype: 'component_datefield', itemId: 'persimporlic_fecha', name: 'persimporlic_fecha', fieldLabel: translations.fecha, allowBlank: false, labelWidth: 40, width: 145, }
					]
				},
				{
					xtype: 'container', layout: 'hbox', width: '100%',
				    items: [
						{   xtype: 'displayfield', itemId: 'pers_nombre', name: 'pers_nombre',  fieldLabel: 'Rz. Social', fieldCls: 'df00104', labelClsExtra: 'lbl00101', labelWidth: 75, padding: '0 0 0 0', width: 450, },
						{   xtype: 'displayfield', flex: 1 },
						//{   xtype: 'displayfield', itemId: 'pers_ruc', name: 'pers_ruc',  fieldLabel: 'RUC', fieldCls: 'df00106', labelClsExtra: 'lbl00101', labelWidth: 40, padding: '0 3 0 0', width: 120 },
					]
				},
	        	{ xtype: 'component_combo', itemId: 'activ_id', name: 'activ_id', valueField: 'activ_id', displayField: 'activ_codename', fieldLabel: 'Actividad', anchor: '100%', },
				{
					xtype: 'fieldcontainer', fieldLabel: translations.periodo, labelClsExtra: 'lbl00001', layout: 'hbox', margin: '0 0 5 0',
				    items: [
			            {	xtype: 'component_datefieldtop', itemId: 'persimporlic_fechaini', name: 'persimporlic_fechaini', endDateField: 'persimporlic_fechafin', vtype: 'daterange', },
			            {	xtype: 'component_datefieldtop', itemId: 'persimporlic_fechafin', name: 'persimporlic_fechafin', startDateField: 'persimporlic_fechaini', vtype: 'daterange', },
			            { 	xtype: 'displayfield', flex: 1, },
			            {	xtype: 'component_combo', itemId: 'ventdet_key', name: 'ventdet_key', valueField: 'ventdet_key', displayField: 'vent_documento', fieldLabel: 'Reg. Venta', labelWidth: 65,  width: 195, },
			        ]
			    },
				{
					xtype: 'container', layout: 'hbox', width: '100%',
				    items: [
						{	xtype: 'hiddenfield', itemId: 'indiv_key', name: 'indiv_key' },
						{	xtype: 'hiddenfield', itemId: 'INDIV_DNI', name: 'INDIV_DNI' },
						{	xtype: 'component_textfield', itemId: 'indiv_dni', name: 'indiv_dni', enableKeyEvents: true, fieldLabel: 'Representante', labelWidth: 75, margin: '0 4 4 0', maxLength: 15, width: 154, }, 
						{   xtype: 'component_button_imagesearch', itemId: 'btnIndiv_search', },
						{   xtype: 'displayfield', itemId: 'indiv_apenom', name: 'indiv_apenom', fieldCls: 'df00101', value: '' }
					]
				},			    
				{	xtype: 'component_textarea', itemId: 'persimporlic_observ', name: 'persimporlic_observ', fieldLabel: translations.comentario, anchor: '100%', }
			]
		}
	]
});