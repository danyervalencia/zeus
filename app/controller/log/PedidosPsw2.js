Ext.define("Siace.controller.log.PedidosPsw2",{extend:"Ext.app.Controller",views:["log.PedidosPsw2","toolbar.CapsLockTooltip"],refs:[{ref:"capsLockToolTip",selector:"toolbar_capslocktooltip"}],
init:function(application){this.control({
"log_pedpsw2":{show:this.lpp_S},"log_pedpsw2 #btnAccept":{click:this.lpp_btnAcc},"log_pedpsw2 #btnCancel":{click:this.lpp_btnCan},
"log_pedpsw2 #pedweb_estado":{change:this.lpp_pweChg},"log_pedpsw2 #usur_psw2":{keypress:this.lpp_upKP}
});},
lpp_S:function(comp,opt){comp.down("#usur_psw2").focus();},
lpp_btnAcc:function(btn,e,opt){var _w=btn.up("window");var _usur_psw2=fext_GV(_w,"usur_psw2");if(_usur_psw2==""){return false;}
	if(_w.getFT()==45&&fext_GV(_w,"observ")==""){fext_MsgA("Debe indicar el motivo por el cual se va a RECHAZAR el documento",_w.down("#observ"));return false;}
	_usur_psw2=Siace.util.MD5.encode(_usur_psw2);
	_w.getCB().fireEvent("click",_w.getCB(),"",{key:_w.getCK(),usur_psw2:_usur_psw2,observ:fext_GV(_w,"observ"),win:_w});
},
lpp_btnCan:function(btn,e,opt){btn.up("window").close();},
lpp_pweChg:function(chkb,newV,oldV,opt){var _w=chkb.up("window");
	fext_removeAddCls(_w.down("#lblPedweb_estado"),newV?"lbl00301":"lbl00401",newV?"lbl00401":"lbl00301");
	fext_SD(_w,"pedweb_dias",!newV);if(newV==false){fext_SV(_w,"pedweb_dias","");}
},
lpp_upKP:function(field,e,opt){var _charCode=e.getCharCode();
	if((e.shiftKey&&_charCode>=97&&_charCode<=122)||(!e.shiftKey&&_charCode>65&&_charCode<=90)){
		if(this.getCapsLockToolTip()===undefined){Ext.widget("toolbar_capslocktooltip",{target:"txtUsur_psw2"});} this.getCapsLockToolTip().show();}
		else{if(this.getCapsLockToolTip()!==undefined){this.getCapsLockToolTip().hide();}}
}
});