Ext.define("Siace.controller.pub.UsuariosPsw2",{extend:"Ext.app.Controller",views:["pub.UsuariosPsw2","toolbar.CapsLockTooltip"],refs:[{ref:"capsLockToolTip",selector:"toolbar_capslocktooltip"}],
init:function(application){this.control({"pub_usurpsw2":{beforeshow:this.pup_BS,show:this.pup_Show},"pub_usurpsw2 #btnAccept":{click:this.pup_btnAcc},"pub_usurpsw2 #btnCancel":{click:this.pup_btnCan},"pub_usurpsw2 #usur_psw2":{keypress:this.pup_usur_psw2KeyPress}});},
pup_BS:function(comp,opt){
	if(comp.getW()!==""){comp.down("#warning").setValue(comp.getW());}
	else if(comp.getFT()==7){fext_SV(comp,"warning",trnslt.warning07);}
	else if(comp.getFT()==10){fext_SV(comp,"warning",trnslt.warning10);}
	else if(comp.getFT()==41){fext_SV(comp,"warning",trnslt.warning41);comp.down("#warning").setFieldStyle("color: #0000A0 !important;");}
	else if(comp.getFT()==42){fext_SV(comp,"warning",trnslt.warning42);comp.down("#warning").setFieldStyle("color: #EC0000 !important;");}
	else if(comp.getFT()==45){fext_SV(comp,"warning",trnslt.warning45);comp.down("#warning").setFieldStyle("color: #EC0000 !important;");}
	else if(comp.getFT()=="reject_item"){comp.down("#warning").setValue(trnslt.public_usuariospsw2_warning_reject_item);comp.down("#warning").setFieldStyle("color: ##EC0000 !important;");}
	comp.down("#usur_psw2").focus();
},
pup_Show:function(comp,opt){comp.down("#usur_psw2").focus()},
pup_btnAcc:function(btn,e,opt){var _w=btn.up("window");var _usur_psw2=fext_GV(_w,"usur_psw2");if(_usur_psw2==""){return false;}
	if(_w.getA()!=""&&fext_GV(_w,"observ").length<=20){fext_MsgA(_w.getA(),_w.down("#observ"));return false;}
	if(_w.getFT()==07&&fext_GV(_w,"observ").length<=20){fext_MsgA("Debe indicar el motivo por el cual se va a ELIMINAR el registro seleccionado (min. 20 dígitos)",_w.down("#observ"));return false;}
	if(_w.getFT()==10&&fext_GV(_w,"observ").length<=20){fext_MsgA("Debe indicar el motivo por el cual se va a ANULAR el registro seleccionado (min. 20 dígitos)",_w.down("#observ"));return false;}
	if(_w.getFT()==45&&fext_GV(_w,"observ").length<=5){fext_MsgA("Debe indicar el motivo por el cual se va a RECHAZAR el documento",_w.down("#observ"));return false;}
	_usur_psw2=Siace.util.MD5.encode(_usur_psw2);
	_w.getCB().fireEvent("click",_w.getCB(),"",{key:_w.getCK(),usur_psw2:_usur_psw2,observ:_w.down("#observ").getValue(),win:_w});
},
pup_btnCan:function(btn,e,opt){btn.up("window").close();},
pup_usur_psw2KeyPress:function(field,e,opt){var _charCode=e.getCharCode();
	if((e.shiftKey&&_charCode>=97&&_charCode<=122)||(!e.shiftKey&&_charCode>=65&&_charCode<=90)){
		if(this.getCapsLockToolTip()===undefined){Ext.widget("toolbar_capslocktooltip",{target:"txtUsur_psw2"});}this.getCapsLockToolTip().show();
	}else{if(this.getCapsLockToolTip()!==undefined){this.getCapsLockToolTip().hide();}}
}
});