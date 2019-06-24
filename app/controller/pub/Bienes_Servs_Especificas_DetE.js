Ext.define("Siace.controller.pub.Bienes_Servs_Especificas_DetE",{extend:"Ext.app.Controller",views:["pub.Bienes_Servs_Especificas_DetE"],
init:function(application){this.control({
"pub_bsespedete":{beforeshow:this.pbsede_BeforeShow},"pub_bsespedete #btnSave":{click:this.pbsede_btnSaveClick},"pub_bsespedete #btnUndo":{click:this.pbsede_btnUndoClick},"pub_bsespedete #btnExit":{click:this.pbsede_btnExitClick},"pub_bsespedete #bsespedet_estado":{change:this.pbsede_bsespedet_estadoChange}
});},
pbsede_BeforeShow:function(comp,opt){var _TE=comp.getTE();var _frm=comp.down("#frmPBSED");
	Ext.Ajax.request({method:"POST",url:"php/public_bienes_servs_json_records.php",params:{xxBs_key:fext_GV(comp,"bs_key"),xxType_record:"win"},success:function(resp,opt){var _res=fext_DJ("",resp);var _mod=fext_CM("pub.Bien_ServW");if(_res.success&&_res.data.length==1){_mod.set(_res.data[0]);fext_LR(comp.down("#panPBS"),_mod);}}});
	if(_TE==1){var _ico="icon_New_90";var _tit="Asignar Clasificador Presupuestal ::.";fextbud_espedetFilt({pan:comp,TQ:"SOLO_BS"});}
	else if(fjsIn_array(_TE,[2,3])){
		_frm.load({method:"POST",url:"php/public_bienes_servs_especificas_det_json_records.php",waitMsg:"Loading...",params:{xxBsespedet_key:comp.getCK(),xxType_record:"frm"},success:function(frm,act){try{var _mod=fext_CM("pub.Bien_Serv_Especifica_Det");var _res=fext_DJ(act);var _d=_res.data[0];if(_d){_mod.set(_d);_frm.loadRecord(_mod);fextbud_espedetFilt({pan:comp,TQ:"SOLO_BS",val:_d.espedet_id});comp.down("#bsespedet_estado").setValue(_d.bsespedet_estado==1?true:false);}}catch(x){fext_MsgC(x);}},failure:function(frm,act){fext_MsgFL(act);}});
		if(_TE==2){var _ico="icon_Modify_90";var _tit="Modificación de Clasificador Presupuestal ::.";}
	}
	comp.setIconCls(_ico);comp.setTitle(_tit);
},
pbsede_btnSaveClick:function(btn,e,opt){var _w=btn.up("window");var _frm=_w.down("#frmPBSED");
	if(fext_IE(_w,"espedet_id")){fext_MsgA("Error de sistema, no se ha establecido el key del Bien/Servicio"); return false;}
	if(!_frm.getForm().isValid()){return false;}
	_frm.getForm().submit({method:"POST",url:"php/public_bienes_servs_especificas_det_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxBsespedet_key:_w.getCK(),xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!=null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
	});
},
pbsede_btnUndoClick:function(btn,e,opt){btn.up("window").close();},
pbsede_btnExitClick:function(btn,e,opt){btn.up("window").close();},
pbsede_bsespedet_estadoChange:function(chk,newV,oldV,opt){fext_removeAddCls(chk.up("window").down("#lblBsespedet_estado"),newV?"lbl00303":"lbl00003",newV?"lbl00003":"lbl00303");}
});