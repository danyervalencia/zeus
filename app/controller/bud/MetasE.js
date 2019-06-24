Ext.define("Siace.controller.bud.MetasE",{extend:"Ext.app.Controller",stores:["array.YearsAB","array.bud.TipEspeDet"],views:["bud.MetasE"],
init:function(application){this.control({
"bud_metae":{beforeshow:this.bme_BS},"bud_metae #btnSave":{click:this.bme_btnSav},"bud_metae #btnUndo":{click:this.bme_btnExt},"bud_metae #btnExit":{click:this.bme_btnExt},
"bud_metae #tarea_estado":{change:this.bme_teChg},"bud_metae #tarea_nro":{blur:this.bme_tnBlur},"bud_metae #year_id":{change:this.bme_yiChg}
});},
bme_BS:function(comp,opt){var _TE=comp.getTE();var _frm=comp.down("form");var _vs=fextpub_sessVar().y;
	if(_TE==1){var _ico="icon_New_90";var _tit="Nueva Secuencia Funcional ::.";comp.down("#secfunc_code").enable();if(_vs.y*1>0){fext_SV(comp,"year_id",_vs.y*1);}}
	else if(fjsIn_array(_TE,[2,3])){
		_frm.load({method:"POST",url:"php/budget_metas_json_records.php",waitMsg:"Loading...",params:{xxMeta_id:comp.getCK(),xxType_record:"frm"},
			success:function(frm,act){try{var _mod=fext_CM("bud.MetaE");var _res=fext_DJ(act);var _d=_res.data[0];if(_d){_mod.set(_d);_frm.loadRecord(_mod);}}catch(x){fext_MsgC(x.Message);}},failure:function(frm,act){fext_MsgFL(act);}
		});
		if(_TE==2){var _ico="icon_Modify_90"; var _tit="Modificar Secuencia Funcional ::.";}
		else{var _ico="icon_Query_90";var _tit="Consulta de Secuencia Funcional ::.";fext_Dsb(comp,"",["year_id","actproy_code","secfunc_nombre","secfunc_fechaini","secfunc_fechafin","secfunc_latitud","secfunc_longitud","secfunc_observ","btnSave","btnUndo"]);comp.down("#btnExit").enable();}
	}
	comp.setIconCls(_ico);comp.setTitle(_tit);
},
bme_btnSav:function(btn,e,opt){fext_CC("bud.MetaES").bme(btn.up("window"));},
bme_btnExt:function(btn,e,opt){btn.up("window").close();},
bme_teChg:function(chkb,newV,oldV,opt){fext_removeAddCls(chkb.up("window").down("#lblTarea_estado"),newV?"lbl00303":"lbl00003",newV?"lbl00003":"lbl00303");},
bme_tnBlur:function(txtf,the,opt){if(txtf.getValue()*1>0){txtf.setValue(fjsLpad(txtf.getValue(),3,0));}},
bme_yiChg:function(cbo,newV,oldV,opt){}
});