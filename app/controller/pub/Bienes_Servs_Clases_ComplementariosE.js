Ext.define("Siace.controller.pub.Bienes_Servs_Clases_ComplementariosE",{extend:"Ext.app.Controller",views:["pub.Bienes_Servs_Clases_ComplementariosE"],
init:function(application){this.control({
"pub_bsccomple":{beforerender:this.pbscce_BeforeRender},"pub_bsccomple #btnSave":{click:this.pbscce_btnSaveClick},"pub_bsccomple #btnUndo":{click:this.pbscce_btnUndoClick},"pub_bsccomple #btnExit":{click:this.pbscce_btnExitClick},
"pub_bsccomple #bsccompl_estado":{change:this.pbscce_bsccompl_estadoChange}
});},
pbscce_BeforeRender:function(comp,opt){var _TE=comp.getTE();var _panPBSC=comp.down("#panPBSC");var _panPBSCC=comp.down("#panPBSCC");var _cboC=comp.down("#compl_key");var _me=this;
	Ext.Ajax.request({method:"POST",url:"php/public_bienes_servs_clases_json_records.php",params:{xxBsc_id:comp.down("#bsc_id").getValue(),xxType_record:"winPBSCCE",ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},
		success:function(resp,opt){var _res=fext_DJ("",resp); var _mod=fext_CM("pub.Bien_Serv_ClaseWPBSCME"); if(_res.success&&_res.data.length==1){var _dat=_res.data[0];_mod.set(_dat);_panPBSC.down("form").loadRecord(_mod);}}
	});
	if(_TE==13){var _ico="icon_Add_90";var _tit="Agregar Complementario en Clase ::.";_cboC.bindStore(fext_CS("pub.ComplementariosWPBSCCE")); _cboC.getStore().load({params:{xxCompl_estado:1,xxType_record:"WPBSCCE",xxType_query:"NOT_IN_CLASE_"+comp.down("#bsc_id").getValue(),xxAdd_blank:"YES"}});}
	else if(fjsIn_array(_TE,[2,3])){var _frm=_panPBSCC.down("form");fext_Dsb(comp,"compl_key");
		_frm.load({method:"POST",url:"php/public_bienes_servs_clases_complementarios_json_records.php",waitMsg:"Loading...",params:{xxBsccompl_key:comp.getCallKey(),xxType_record:"frm"},
			success:function(frm,act){try{var _mod=fext_CM("pub.Bien_Serv_Clase_ComplementarioEdit");var _res=fext_DJ(act);var _dat=_res.data[0];if(_dat){_mod.set(_dat);_frm.loadRecord(_mod);_cboC.bindStore(fext_CS("pub.ComplementariosCbo"));_cboC.getStore().load({params:{xxCompl_key:_dat.compl_key,xxType_record:"cbo"},callback:function(rec){_cboC.setValue(_dat.compl_key);}});comp.down("#bsccompl_fixed").setValue(_mod.data.bsccompl_fixed==1?true:false);comp.down("#bsccompl_estado").setValue(_mod.data.bsccompl_estado==1?true:false);}}catch(x){fext_MsgC(x.Message);}},failure:function(frm,act){fext_FL(act);}
		});
		if(_TE==2){var _ico="icon_Modify_90";var _tit="Modificar Complementario en Clase ::.";}
		else{var _ico="icon_Query_90";var _tit="Consulta de Complementario en Clase ::.";fext_Dsb(comp,"",["bsccompl_orden","bsccompl_fixed","bsccompl_estado","bsccompl_observ","btnSave","btnUndo"]);comp.down("#btnExit").enable();}
	}
	comp.setIconCls(_ico);comp.setTitle(_tit);
},
pbscce_btnSaveClick:function(btn,e,opt){var _w=btn.up("window");var _frm=_w.down("#panPBSCC").down("form");if(!_frm.getForm().isValid()){return false;}var _ck=_w.down("#compl_key").getValue();
	if(Ext.isEmpty(_ck)){fext_MsgA("Debe indicar el registro Complementario");return false;}
	Ext.Msg.confirm("Confirmar",trnslt.msg_qst_save,function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/public_bienes_servs_clases_complementarios_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxBsccompl_key:_w.getCK(),xxCompl_key:_ck,xxMenu_id:_w.getMenuId(),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!==null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
},
pbscce_btnUndoClick:function(btn,e,opt){var _w=btn.up("window");_w.hide();},
pbscce_btnExitClick:function(btn,e,opt){var _w=btn.up("window");_w.hide();},
pbscce_bsccompl_estadoChange:function(chk,newVal,oldVal,opt){fext_removeAddCls(chk.up("window").down("#lblBsccompl_estado"),newVal==true?"lbl00303":"lbl00003",newVal==true?"lbl00003":"lbl00303");},
});