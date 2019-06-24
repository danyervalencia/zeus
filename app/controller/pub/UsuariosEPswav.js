Ext.define("Siace.controller.pub.UsuariosEPswav",{extend:"Ext.app.Controller",views:["pub.UsuariosEPsw","toolbar.CapsLockTooltip"],refs:[{ref:"capsLockToolTip",selector:"toolbar_capslocktooltip"}],
init:function(application){this.control({"pub_usurepswav #btnAccept":{click:this.puepav_btnAcceptClick},"pub_usurepswav #btnCancel":{click:this.puepav_btnCancelClick}});},//,"pub_usurepswav #usur_pswn":{keypress:this.puep_usur_pswnKeyPress}
puepav_btnAcceptClick:function(btn,e,opt){var _w=btn.up("window");var _frm=_w.down("form");
	if(fext_IE(_w,"usur_psw1")&&fext_IE(_w,"usur_psw2")){fext_MsgA("No se ha digitado ninguna Clave a cambiar");return false;}
	if(fext_IE(_w,"usur_psw1")){if(!fext_IE(_w,"usur_psw1c")){fext_MsgA("No debe digitar confirmación de clave de Acceso",_w.down("#usur_psw1c"));return false;}}
	else{if(fext_GV(_w,"usur_psw1")!=fext_GV(_w,"usur_psw1c")){fext_MsgA("Confirmación de clave de acceso es incorrecta, vuela a intentarlo",_w.down("#usur_psw1c"));return false;}}
	if(fext_IE(_w,"usur_psw2")){if(!fext_IE(_w,"usur_psw2c")){fext_MsgA("No debe digitar confirmación de clave de Validación",_w.down("#usur_psw2c"));return false;}}
	else{if(fext_GV(_w,"usur_psw2")!=fext_GV(_w,"usur_psw2c")){fext_MsgA("Confirmación de clave de Validación es incorrecta, vuela a intentarlo",_w.down("#usur_psw2c"));return false;}}
	if(!_frm.getForm().isValid()){return false;}
	var _usur_psw1=(fext_IE(_w,"usur_psw1")?"":Siace.util.MD5.encode(fext_GV(_w,"usur_psw1")));var _usur_psw2=(fext_IE(_w,"usur_psw2")?"":Siace.util.MD5.encode(fext_GV(_w,"usur_psw2")));
	_frm.getForm().submit({method:"POST",url:"php/public_usuarios_save_psw.php",waitTitle:trnslt.title_valid,waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxType_edit:"10",xxUsur_key:_w.getCK(),xxUsur_psw1:_usur_psw1,xxUsur_psw2:_usur_psw2,xxMenu_id:_w.getMI(),vs:Ext.JSON.encode(fextpub_sessVar())},
		success:function(frm,act){var _res=fext_DJ(act);if(_res.success){_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
	});
},
puepav_btnCancelClick:function(btn,e,opt){btn.up("window").close();},
puepav_usur_pswnKeyPress:function(field,e,opt){var _charCode=e.getCharCode();
	if((e.shiftKey&&_charCode>=97&&_charCode<=122) || (!e.shiftKey&&_charCode>=65&&_charCode<=90)){ 
		if(this.getCapsLockToolTip()===undefined){Ext.widget("toolbar_capslocktooltip",{target:"usur_pswn"});}this.getCapsLockToolTip().show();
	}else{if(this.getCapsLockToolTip()!==undefined){this.getCapsLockToolTip().hide();}}
}
});