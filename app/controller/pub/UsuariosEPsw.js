Ext.define("Siace.controller.pub.UsuariosEPsw",{extend:"Ext.app.Controller",views:["pub.UsuariosEPsw","toolbar.CapsLockTooltip"],refs:[{ref:"capsLockToolTip",selector:"toolbar_capslocktooltip"}],
init:function(application){this.control({"pub_usurepsw":{beforeshow:this.puep_BeforeShow},"pub_usurepsw #btnAccept":{click:this.puep_btnAcceptClick},"pub_usurepsw #btnCancel":{click:this.puep_btnCancelClick},"pub_usurepsw #usur_pswn":{keypress:this.puep_usur_pswnKeyPress}});},
puep_BeforeShow:function(comp,opt){var _mi=comp.getMI();var _ico="icon_Modify_90";_tit=(_mi==1132?"Cambiar Clave de Acceso":"Cambiar Clave de Validación");comp.down("#btnExit").hide();comp.setIconCls(_ico);comp.setTitle(_tit);},
puep_btnAcceptClick:function(btn,e,opt){var _w=btn.up("window"); var _frm=_w.down("form");
	if(fext_IE(_w.down("#usur_pswa"))){fext_MsgA("Debe indicar la Clave actual",_w.down("#usur_pswa"));return false;}
	if(fext_IE(_w,"usur_pswn")){fext_MsgA("Debe indicar la NUEVA Clave",_w.down("#usur_pswn"));return false;}
	if(fext_GV(_w,"usur_pswa")==fext_GV(_w,"usur_pswn")){fext_MsgA("Nueva clave, no debe ser igual a clave actual",_w.down("#usur_pswn"));return false;}
	if(fext_IE(_w,"usur_pswc")){fext_MsgA("Debe indicar la CONFIRMACION de la Clave",_w.down("#usur_pswc"));return false;}
	if(fext_GV(_w,"usur_pswn")!=fext_GV(_w,"usur_pswc")){fext_MsgA("Confirmación de clave es incorrecta, vuela a intentarlo",_w.down("#usur_pswc"));return false;}
	if(!_frm.getForm().isValid()){return false;} var _usur_pswa=Siace.util.MD5.encode(fext_GV(_w,"usur_pswa"));var _usur_pswn=Siace.util.MD5.encode(fext_GV(_w,"usur_pswn"));
	_frm.getForm().submit({method:"POST",url:"php/public_usuarios_save_psw.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES", xxType_edit:(_w.getMI()==1132?1:2),xxUsur_psw1:_usur_pswa,xxUsur_psw2:_usur_pswn,xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!==null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
	});
},
puep_btnCancelClick:function(btn,e,opt){btn.up("window").close();},
puep_usur_pswnKeyPress:function(field,e,opt){var _charCode=e.getCharCode();
	if((e.shiftKey&&_charCode>=97&&_charCode<=122) || (!e.shiftKey&&_charCode>=65&&_charCode<=90)){ 
		if(this.getCapsLockToolTip()===undefined){Ext.widget("toolbar_capslocktooltip",{target:"usur_pswn"});}this.getCapsLockToolTip().show();
	}else{if(this.getCapsLockToolTip()!==undefined){this.getCapsLockToolTip().hide();}}
}
});