Ext.define("Siace.controller.pub.UsuariosE",{extend:"Ext.app.Controller",views:["pub.UsuariosE","toolbar.CapsLockTooltip"],refs:[{ref:"capsLockToolTip",selector:"toolbar_capslocktooltip"}],
init:function(application){this.control({
"pubusure":{beforeshow:this.pue_BeforeShow},"pubusure #btnSave":{click:this.pue_btnSaveClick},"pubusure #btnUndo":{click:this.pue_btnUndoClick},"pubusure #btnExit":{click:this.pue_btnExitClick},
"pubusure #btnIndiv_search":{click:this.pue_btnIndiv_searchClick},
"pubusure #indiv_dni":{blur:this.pue_indiv_dniBlur,focus:this.pue_indiv_dniFocus,keypress:this.pue_indiv_dniKeypress},
});},
pue_BeforeShow:function(comp,opt){var _TE=comp.getTE();
	if(_TE==1){var _ico="icon_New_90";var _tit="Nuevo Usuario ::.";}
	else if(fjsIn_array(_TE,[2,3,11,12])){var _frm=comp.down("form");
		_frm.load({method:"POST",url:"php/public_usuarios_json_records.php",waitMsg:"Loading...",params:{xxUsur_id:comp.getCK(),xxType_record:"frm"},
			success:function(frm,act){try{var _mod=fext_CM("pub.UsuarioEdit");var _res=fext_DJ(act);if(_res.data[0]){_mod.set(_res.data[0]);_frm.loadRecord(_mod);}}catch(x){fext_MsgC(x);}},failure:function(frm,act){fext_MsgFL(act);}
		});
		if(_TE==2){var _ico="icon_Modify_90";var _tit="Modificar Usuario ::.";fext_Dsb(comp,"",["indiv_dni","btnIndiv_search"]);}
		else{var _ico="icon_Query_90";var _tit="Consulta de Usuario ::.";fext_Dsb(comp,"",["indiv_dni","btnIndiv_search","usur_login","usur_psw1","usur_observ","btnSave","btnUndo"]);comp.down("#btnExit").enable();}
	}
	comp.setIconCls(_ico); comp.setTitle(_tit);
},
pue_btnSaveClick:function(btn,e,opt){var _w=btn.up("window");var _frm=_w.down("form");
	if(fext_IE(_w.down("#indiv_key"))){fext_MsgA("Debe indicar la persona a la que se le asignará el usuario",_w.down("#indiv_dni"));return false;}
	if(fext_IE(_w.down("#usur_login"))){fext_MsgA("No se ha establecido el LOGIN del usuario",_w.down("#usur_login"));return false;}
	if(fext_IE(_w.down("#usur_psw1"))){fext_MsgA("No se ha establecido la CLAVE del usuario",_w.down("#usur_psw1"));return false;}
	if(_w.down("#usur_psw1").getValue().length<8){fext_MsgA("CLAVE debe tener por lo menos 8 caracteres",_w.down("#usur_psw1"));return false;}
	if(!_frm.getForm().isValid()){return false;}var _usur_psw1=Siace.util.MD5.encode(_frm.down("#usur_psw1").getValue());
	_frm.getForm().submit({method:"POST",url:"php/public_usuarios_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxType_edit:_w.getTE(),xxUsur_psw1:_usur_psw1,vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!==null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(form,act){fext_MsgFS(act);}
	});
},
pue_btnUndoClick:function(btn,e,opt){btn.up("window").close();},
pue_btnExitClick:function(btn,e,opt){btn.up("window").close();},
pue_btnIndiv_searchClick:function(btn,e,opt){fext_CC("pub.IndividuosSearch");var _w=btn.up("window");
	_w.setCompPIS(fext_compSearch({cc:_w,os:_w.getCompPIS(),v:"Siace.view.pub.IndividuosSearch",tit:"Búsqueda de Persona",ck:_w.down("#indiv_key").getValue()}));
},
pue_indiv_dniBlur:function(txtf,The,opt){this.pue_indiv_dniSearch(txtf.up("window"),0);},
pue_indiv_dniFocus:function(txtf,The,opt){this.pue_indiv_dniSearch(txtf.up("window"),1);},
pue_indiv_dniKeypress:function(txtf,e,opt){if(e.getCharCode()==13){this.pue_indiv_dniSearch(txtf.up("window"),13);}},
pue_indiv_dniSearch:function(poCallWin,pcType){fext_fieldSearch(pcType,poCallWin,["indiv_key","INDIV_DNI","indiv_dni","indiv_apenom"],["php/public_individuos_json_records.php","xxIndiv_dni","textfield_search",""],"1",["Siace.view.pub.IndividuosE","Nuevo Registro de Identidad ::.",["indiv_dni"],"","pub.IndividuosE",poCallWin.getMI()]);}
});