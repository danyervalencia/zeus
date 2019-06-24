Ext.define('Siace.controller.public.Tipos_Documentos_Identidad', {
	extend: 'Ext.app.Controller',
	
	requires: [ // #1
		'Siace.view.public.Tipos_Documentos_IdentidadBrowse'
		//'Siace.WindowForm'
	],

	views: [
		'public.Tipos_Documentos_IdentidadBrowse'
	],

	stores: [
		'public.Tipos_Documentos_Identidad'
	],
	
	init: function(application) {
		this.control({
			'tipos_documentos_identidadgrid': {
				render: this.onRender
			}
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