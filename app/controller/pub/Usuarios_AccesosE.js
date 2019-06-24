Ext.define("Siace.controller.pub.Usuarios_AccesosE",{extend:"Ext.app.Controller",stores:["array.YearsAB"],views:["pub.Usuarios_AccesosE"],
init:function(application){this.control({
"pub_usuraccee":{beforeshow:this.puae_BS},"pub_usuraccee #btnSave":{click:this.puae_btnSav},"pub_usuraccee #btnUndo":{click:this.puae_btnExt},"pub_usuraccee #btnExit":{click:this.puae_btnExt},
"pub_usuraccee #usuracce_estado":{change:this.puae_uaeChg}
});},
puae_BS:function(comp,opt){var _TE=comp.getTE();var _cboAK=comp.down("#area_key");
	var _strPA=fext_CS("pub.AreasCbo");_cboAK.bindStore(_strPA);_strPA.on("beforeload",function(str,oper,opt){fext_PSEP(str,["ssNO_USK","xxType_record","xxAdd_blank","vs"],["NoT","combo","YES",fext_JE(fextpub_sessVar())]);});
	fextpub_cargusurFilt({obj:comp.down("#cargusur_id"),TR:"cbo",OB:"cargusur_orden",AB:"NO",dsb:(_TE==1?false:true),setVal:false});
	fextlog_faseFilt({obj:comp.down("#usuracce_tireq"),str:"log.FasesNombre03",di:501,fo:1,TR:"cboN3",OB:"fase_id",dsb:(fjsIn_array(_TE,[1,2])?false:true),setVal:(_TE==1?true:false)});
	fextlog_faseFilt({obj:comp.down("#usuracce_tivia"),str:"log.FasesNombre03",di:507,fo:1,TR:"cboN3",OB:"fase_id",dsb:(fjsIn_array(_TE,[1,2])?false:true),setVal:(_TE==1?true:false)});

	if(_TE==1){var _ico="icon_New_90";var _tit="Nuevo Acceso de Usuario ::.";_cboAK.getStore().load();}
	else if(fjsIn_array(_TE,[2,3,11,12])){var _frm=comp.down("form");
		_frm.load({method:"POST",url:"php/public_usuarios_accesos_json_records.php",waitMsg:"Loading...",params:{xxUsuracce_key:comp.getCK(),xxType_record:"frm"},success:function(frm,act){try{var _mod=fext_CM("pub.Usuario_AccesoE");var _res=fext_DJ(act);var _d=_res.data[0];if(_d){_mod.set(_d);_frm.loadRecord(_mod);fext_SV(comp,"usuracce_estado",_d.usuracce_estado==1?true:false);_cboAK.getStore().load({params:{xxArea_key:_d.area_key},callback:function(rec){_cboAK.setValue(_d.area_key);}});}}catch(x){fext_MsgC(x);}},failure:function(frm,act){fext_MsgFL(act);}});
		fext_Dsb(comp,"",["area_key","cargusur_id"]);
		if(_TE==2){var _ico="icon_Modify_90";var _tit="Modificar Acceso de Usuario ::.";}else{var _ico="icon_Query_90";var _tit="Consulta Acceso de Usuario ::.";fext_Dsb(comp,"",["usuracce_tireq","usuracce_fechaini","usuracce_fechafin","usuracce_estado","usuracce_observ","btnSave","btnUndo"]);comp.down("#btnExit").enable();}
	}
	comp.setIconCls(_ico);comp.setTitle(_tit);
},
puae_btnSav:function(btn,e,opt){var _w=btn.up("window");var _frm=_w.down("form");
	if(fext_IE(_w,"area_key")){fext_MsgA("Debe seleccionar una Unidad Orgánica",_w.down("#area_key"));return false;}
	if(fext_IE(_w,"cargusur_id")){fext_MsgA("No se ha establecido el CARGO del usuario",_w.down("#cargusur_id"));return false;}
	if(!_frm.getForm().isValid()){return false;}
	_frm.getForm().submit({method:"POST",url:"php/public_usuarios_accesos_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxType_edit:_w.getTE(),xxUsuracce_key:_w.getCK(),xxMenu_id:_w.getMI(),xxArea_key:fext_GV(_w,"area_key"),xxCargusur_id:fext_GV(_w,"cargusur_id"),vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!=null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
	});
},
puae_btnExt:function(btn,e,opt){btn.up("window").close();},
puae_uaeChg:function(chk,newV,oldV,opt){fext_removeAddCls(chk.up("window").down("#lblUsuracce_estado"),newV?"lbl00303":"lbl00003",newV?"lbl00003":"lbl00303");}
});