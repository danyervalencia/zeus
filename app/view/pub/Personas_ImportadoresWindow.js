Ext.define('Siace.view.public.Personas_ImportadoresWindow', {
	extend: 'Siace.view.WindowBrowse',
	alias: 'widget.public_personas_importadoreswindow',
	closable: true, icon: 'resources/icons/user_level.png', width: 700,

	items: [
		{
			xtype: 'form', itemId: 'frmPublic_personas_importadores', border: false, layout: 'vbox',
		    items: [
			    {
					xtype: 'container', layout: 'vbox', width: 580,
					items: [
						{
							xtype: 'container', layout: 'hbox', width: '100%',
						    items: [
								{   xtype: 'displayfield', itemId: 'pers_nombre', name: 'pers_nombre',  fieldLabel: '&nbsp;Razón Social', fieldCls: 'df00104', labelClsExtra: 'lbl00101', labelWidth: 70, padding: '0 0 0 0', width: 450, },
								{   xtype: 'displayfield', flex: 1 },
								{   xtype: 'displayfield', itemId: 'pers_ruc', name: 'pers_ruc',  fieldLabel: 'RUC', fieldCls: 'df00106', labelClsExtra: 'lbl00101', labelWidth: 40, padding: '0 3 0 0', width: 120 },
							]
						},
						{
							xtype: 'container', layout: 'hbox', anchor: '100%',
							items: [
					        	{	xtype: 'component_combo', itemId: 'persimpor_key', name: 'persimpor_key', valueField: 'persimpor_key', displayField: 'activ_codename', fieldLabel: '&nbsp;Actividad', labelWidth: 70, margin: '0 5 5 0', width: 320, },
					        	{ 	xtype: 'component_button', itemId: 'btnNew', iconCls: 'icon_New_90', height: '23', padding: '3 5 0 5', text: 'Nueva actividad' },
					        ]
					    }
					]
			    },
				{
					xtype: 'container', layout: 'hbox', anchor: '100%',
					items: [
						{
							xtype: 'container', layout: 'vbox', width: 387,
							items: [
						        {
						            xtype: 'grid', itemId: 'grdPublic_personas_importadores_licencias',
						            autoHeight: true, columnLines: true, height: 200, stripeRows: true, width: 387,
						            columns: [
						            	{ 	xtype: 'rownumberer', width: 30, },
										{	dataIndex: 'persimporlic_documento', text: translations.documento, locked: true, lockable: false, width: 100, },
										{	dataIndex: 'persimporlic_fecha', text: translations.fecha, align: 'center', width: 85, renderer: Ext.util.Format.dateRenderer('d/m/Y') },
										{	dataIndex: 'persimporlic_fechaini', text: 'Inicio', align: 'center', width: 85, renderer: Ext.util.Format.dateRenderer('d/m/Y') },
										{	dataIndex: 'persimporlic_fechafin', text: 'Vencimiento', align: 'center', width: 85, renderer: Ext.util.Format.dateRenderer('d/m/Y') },
										{	dataIndex: 'vent_documento', text: 'Reg. Venta', width: 115, },
									],
								},
								{
					            	xtype: 'toolbar', dock: 'bottom', ui: 'footer',
						            items: [
						                { xtype: 'component_button', itemId: 'btnRenovate', disabled: true, icon: 'resources/icons/btnAdd.png', text: 'Renovar Licencia' },
						                { xtype: 'component_buttonQuery' },
						                { xtype: 'component_button', itemId: 'btnConstancy', disabled: true, icon: 'resources/icons/btnConstancy.png', text: 'Constancia' },
						            ]
								},
							]
						},
						{   xtype: 'displayfield', width: 20 },
						{
							xtype: 'container', layout: 'vbox', width: 387,
							items: [
						        {
						            xtype: 'grid', itemId: 'grdPublic_personas_importadores_licencias_individuos',
						            autoHeight: true, columnLines: true, height: 200, stripeRows: true, width: 300,
						            columns: [
						            	//{ 	xtype: 'rownumberer', width: 30, },
										{	dataIndex: 'indiv_apenom', text: 'Apellidos y Nombres', width: 280, },
										{	dataIndex: 'indiv_dni', text: 'DNI', width: 95, },
										{	dataIndex: 'vent_documento', text: 'Reg. Venta', width: 115, },
									],
								},
								{
					            	xtype: 'toolbar', dock: 'bottom', ui: 'footer',
						            items: [
						                { xtype: 'component_button', itemId: 'btnNewCarnet', disabled: true, icon: 'resources/icons/btnNew.png', text: 'Nueva Credencial' },
						                { xtype: 'component_button', itemId: 'btnPrinter', disabled: true, icon: 'resources/icons/btnCarnet.png', text: 'Credencial' },
						            ]
								},
							]
						}
					]
				},
			],
		}
	]
});