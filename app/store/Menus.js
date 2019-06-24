Ext.define("Siace.store.Menus",{extend:"Ext.data.Store",requires:["Siace.model.access.Root"],model:"Siace.model.access.Root",
	proxy:{type:"ajax",url:"php/public_usuarios_accesos_menus_opciones_json_session.php",reader:{type:"json",root:"items"},
		listeners:{exception:function(proxy,resp,oper){Ext.MessageBox.show({title:"REMOTE EXCEPTION",msg:operation.getError(),icon:Ext.MessageBox.ERROR,buttons:Ext.Msg.OK});}}
	}
});