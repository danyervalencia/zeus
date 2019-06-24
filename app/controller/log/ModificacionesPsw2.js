Ext.define("Siace.controller.log.ModificacionesPsw2",{extend:"Ext.app.Controller",views:["log.ModificacionesPsw2","toolbar.CapsLockTooltip"],refs:[{ref:"capsLockToolTip",selector:"toolbar_capslocktooltip"}],
init:function(application){this.control({"log_modifpsw2":{beforeshow:this.lmp_beforeShow,show:this.lmp_Show},"log_modifpsw2 #btnAccept":{click:this.lmp_btnAcceptClick},"log_modifpsw2 #btnCancel":{click:this.lmp_btnCancelClick},"log_modifpsw2 #usur_psw2":{keypress:this.lmp_usur_psw2KeyPress}});},
lmp_beforeShow:function(comp,opt){},
lmp_Show:function(comp,opt){comp.down("#usur_psw2").focus(); },
lmp_btnAcceptClick:function(btn,e,opt){var _win=btn.up("window");var _usur_psw2=_win.down("#usur_psw2").getValue();if(_usur_psw2==""){return false;}
	if(_win.getFT()==45&&_win.down("#observ").getValue()==""){fext_MsgA("Debe indicar el motivo por el cual se va a RECHAZAR el documento",_win.down("#observ"));return false;}
	_usur_psw2=Siace.util.MD5.encode(_usur_psw2);
	_win.getCB().fireEvent("click",_win.getCB(),"",{"key":_win.getCK(),"usur_psw2":_usur_psw2,"observ":_win.down("#observ").getValue(),"win":_win});
},
lmp_btnCancelClick:function(btn,e,opt){btn.up("window").close();},
lmp_usur_psw2KeyPress:function(field,e,opt){
	var _charCode=e.getCharCode();
	if((e.shiftKey && _charCode>=97 && _charCode<=122) || (!e.shiftKey && _charCode>65 && _charCode<=90)) { 
		if(this.getCapsLockToolTip()===undefined){Ext.widget("toolbar_capslocktooltip",{target:"txtUsur_psw2"});}this.getCapsLockToolTip().show();}
		else{if(this.getCapsLockToolTip()!==undefined){this.getCapsLockToolTip().hide();}}
	},
});