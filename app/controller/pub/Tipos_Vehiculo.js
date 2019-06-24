Ext.define('Siace.controller.public.Tipos_Vehiculo', {
	extend: 'Ext.app.Controller',
	stores: [
		'public.Tipos_Vehiculo'
	],
	
	init: function(application) {
		this.control({
			///'tipos_documentos_identidadgrid': {
			//	render: this.onRender
			//}
			/*'tipos_documentos_identidadbrowse button#btn0001': {
				click: this.onClickBtn0001
			}*/
		});
	},

	onRender: function(component, options) { // #3
		component.getStore().load();
	},

	onClickBtn0001: function(button, e, options) {
        /*var win = Ext.create('Siace.view.public.IndividuosEdit');
        win.setTitle('Nuevo Registro de Indentidad');
        win.setIconCls('icon_0001');
        win.show();		 */
	},

	onClickBtn0006: function(button, e, options) {
		/*var windowIndividuosEdit = button.up('individuosedit');
		windowIndividuosEdit.close();
		//windowLogin = button.up('login'); */
	}
});