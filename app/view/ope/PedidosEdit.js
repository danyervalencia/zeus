Ext.define('Siace.view.operations.PedidosEdit', {
	extend: 'Siace.view.WindowEdit',
	alias: 'widget.operations_pedidosedit',
	width: 650,

	items: [
		{
			xtype: 'form', itemId: 'frmOperations_pedidos', bodyPadding: 8, border: false, defaults: { labelWidth: 60 }, layout: { type: 'vbox' },
			items: [
				{	xtype: 'hiddenfield', itemId: 'ped_id', name: 'ped_id', },
				{	xtype: 'hiddenfield', itemId: 'ped_key', name: 'ped_key', },
				{
					xtype : 'container', layout: 'hbox', width: '100%',
					items : [
				        {	xtype: 'component_combo', itemId: 'doc_id', name: 'doc_id', valueField: 'doc_id', displayField: 'doc_nombre',  disabled: true, fieldLabel: translations.documento, labelWidth: 60, margin: '0 4 5 0', width: 230, },
					    {	xtype: 'component_combotop', itemId: 'ped_serie', valueField: 'docser_serie', displayField: 'docser_format', disabled: true, listConfig: { cls: 'item00001', minWidth: 60, }, width: 60, },
					    { 	xtype: 'component_textfield', itemId: 'ped_nro', align: 'center', width: 80, },
					    { 	xtype: 'displayfield', flex: 1, },
						{	xtype: 'component_datefield', itemId: 'ped_fecha', name: 'ped_fecha', fieldLabel: translations.fecha, allowBlank: false, labelWidth: 45, width: 145, }
					]
				},
			    {
					xtype: 'container', layout: { type: 'hbox' },
					items: [
				        { 	xtype: 'component_combo', itemId: 'tipdocident_id', name: 'tipdocident_id', store: 'array.Tipos_Documentos_IdentidadVenta', valueField: 'tipdocident_id', displayField: 'tipdocident_abrev', fieldLabel: translations.cliente, labelWidth: 60,  listConfig: { cls: 'item00001', minWidth: 55, }, margin: '0 4 5 0', width: 120, },
					    {
							xtype: 'container', itemId: 'cntPersonas', layout: { type: 'hbox' },
							items: [
								{ 	xtype: 'hiddenfield', itemId: 'pers_key', },
								{   xtype: 'hiddenfield', itemId: 'PERS_RUC', },
								{	xtype: 'component_textfieldtop', itemId: 'pers_ruc', disabled: true, enableKeyEvents: true, maxLength: 11, width: 90 },
								{	xtype: 'component_button_imagesearch', itemId: 'btnPers_search', disabled: true, },
								{	xtype: 'displayfield', itemId: 'pers_nombre', fieldCls: 'df00101', }
							]
						},
					    {
							xtype: 'container', itemId: 'cntIndividuos', hidden: true, layout: { type: 'hbox' },
							items: [
								{ 	xtype: 'hiddenfield', itemId: 'indiv_key', },
								{   xtype: 'hiddenfield', itemId: 'INDIV_DNI', },
								{	xtype: 'component_textfieldtop', itemId: 'indiv_dni', enableKeyEvents: true, maxLength: 12, },
								{	xtype: 'component_button_imagesearch', itemId: 'btnIndiv_search', disabled: true, },
								{	xtype: 'displayfield', itemId: 'indiv_apenom', fieldCls: 'df00101', }
							]
						},
					]
				},
				{
					xtype : 'fieldcontainer', layout: 'hbox', fieldLabel: translations.operador, labelClsExtra: 'lbl00001', width: '100%',
					items : [
						{ 	xtype: 'hiddenfield', itemId: 'oper_key', name: 'oper_key' },
						{   xtype: 'hiddenfield', itemId: 'OPER_DNI', },
						{	xtype: 'component_textfieldtop', itemId: 'oper_dni', enableKeyEvents: true, labelWidth: 60, maxLength: 12, width:80 },
						{	xtype: 'component_button_imagesearch', itemId: 'btnOper_search', disabled: true, },
						{	xtype: 'displayfield', itemId: 'oper_apenom', fieldCls: 'df00101', }
			        ]
			    },
				{
					xtype : 'container', layout: 'hbox', width: '100%',
					items : [			    
						{	xtype: 'component_combo', itemId: 'unidveh_key', name: 'unidveh_key', valueField: 'unidveh_key', displayField: 'veh_placa', fieldLabel: translations.maquinaria, labelWidth: 60, margin: '0 4 5 0', width: 250,  },
						{ 	xtype: 'displayfield', flex: 1, },
						{   xtype: 'component_currencyfield', itemId: 'peddet_odoini', name: 'peddet_odoini', fieldCls: 'txt00006', disabled: true, fieldLabel: 'Odómetro (I-F)', labelWidth: 85, margin: '0 4 5 0', numberDecimal: 1, width: 160, },
						{   xtype: 'component_currencyfield', itemId: 'peddet_odofin', name: 'peddet_odofin', fieldCls: 'txt00006', disabled: true, numberDecimal: 1, width: 70, },
					]
				},
				{
					xtype : 'container', layout: 'hbox', width: '100%',
					items : [
						{	xtype: 'component_combo', itemId: 'lugserv_id', name: 'lugserv_id', valueField: 'tabgen_id', displayField: 'tabgen_nombre', fieldLabel: translations.lugar, labelWidth: 60, margin: '0 4 5 0', width: 250, },
						{ 	xtype: 'displayfield', flex: 1, },
						{   xtype: 'component_currencyfield', itemId: 'peddet_horoini', name: 'peddet_horoini', fieldCls: 'txt00006', disabled: true, fieldLabel: 'Horómetro (I-F)', labelWidth: 85, margin: '0 4 5 0', numberDecimal: 1, width: 160, },
						{   xtype: 'component_currencyfield', itemId: 'peddet_horofin', name: 'peddet_horofin', fieldCls: 'txt00006', disabled: true, numberDecimal: 1, width: 70, },
			        ]
			    },
				{	xtype: 'component_combo', itemId: 'serv_id', name: 'serv_id', valueField: 'tabgen_id', displayField: 'tabgen_nombre', fieldLabel: translations.servicio, width: '100%', },
				{ 	xtype: 'component_textfield', itemId: 'peddet_detalle', fieldLabel: translations.descripcion, width: '100%', },
				{
					xtype : 'container', layout: 'hbox', width: '100%',
					items : [
						{	xtype: 'component_timefield', itemId: 'peddet_horaini', name: 'peddet_horaini', allowBlank: false, fieldLabel: 'Hora Inicio', labelWidth: 60, margin: '0 4 5 0', width: 150, },
						{ 	xtype: 'displayfield', width: 30, },
						{	xtype: 'component_timefield', itemId: 'peddet_horafin', name: 'peddet_horafin', allowBlank: false, fieldLabel: 'Hora Final', labelWidth: 60, width: 150, },
						{ 	xtype: 'displayfield', flex: 1, },
						{   xtype: 'component_currencyfield', itemId: 'peddet_horas', disabled: true, fieldCls: 'txt00006', fieldLabel: 'Total Horas / Minutos', labelWidth: 110, margin: '0 4 5 0', numberDecimal: 0, width: 155, },
						{   xtype: 'component_currencyfield', itemId: 'peddet_minutos', disabled: true, fieldCls: 'txt00006', numberDecimal: 0, width: 40, },
					]
				},
				{	xtype: 'component_textarea', itemId: 'ped_observ', name: 'ped_observ', fieldLabel: translations.comentario, width: '100%', }
			]
		}
	],

	__doc_id: '',
	__doc_nombre: '',
	__recib_serie: '',
	setDoc_id: function(pcDoc_id) { this.__doc_id = pcDoc_id; },
	getDoc_id: function() { return this.__doc_id; },
	setDoc_nombre: function(pcDoc_nombre) { this.__doc_nombre = pcDoc_nombre; },
	getDoc_nombre: function() { return this.__doc_nombre; },
	setPed_serie: function(pcPed_serie) { this.__ped_serie = pcPed_serie; },
	getPed_serie: function() { return this.__ped_serie; },
});