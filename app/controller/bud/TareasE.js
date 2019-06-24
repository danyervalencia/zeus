Ext.define("Siace.controller.bud.TareasE",{extend:"Ext.app.Controller",stores:["array.YearsAB","array.bud.TipEspeDet"],views:["bud.TareasE"],
init:function(application){this.control({
"bud_tareae":{beforeshow:this.bte_BS},"bud_tareae #btnSave":{click:this.bte_btnSav},"bud_tareae #btnUndo":{click:this.bte_btnExt},"bud_tareae #btnExit":{click:this.bte_btnExt},
"bud_tareae #meta_id":{change:this.bte_meiChg},"bud_tareae #tarea_estado":{change:this.bte_teChg},"bud_tareae #tarea_nro":{blur:this.bte_tnBlur},"bud_tareae #unieje_key":{change:this.bte_uekChg},"bud_tareae #year_id":{change:this.bte_yiChg}
});},
bte_BS:function(comp,opt){var _TE=comp.getTE();var _frm=comp.down("form");var _tt=comp.down("#tiptarea_id");var _yi=fextpub_sessVar().y*1;
	fextbud_uniejeFilt({obj:comp.down("#unieje_key"),dsb:true,AB:"NoT"});fextpub_tabgenFilt({obj:comp.down("#tipgast_id"),tgp:5000,TR:"cboC",dsb:(_TE==3?true:false)});
	_tt.bindStore(fext_CS("bud.Tipos_TareasCboTCA"));_tt.getStore().load({params:{xxType_record:"cboTCA",xxAdd_blank:"YES"},callback:function(rec){if(rec.length>0){_tt.setValue(rec[0].data.tiptarea_id);}else{_tt.disable();_tt.setValue("");}}});
	if(_TE==1){var _ico="icon_New_90";var _tit="Nueva Tarea Funcional ::.";if(_yi>0){comp.down("#year_id").setValue(_yi);}}
	else if(fjsIn_array(_TE,[2,3])){fext_Dsb(comp,"year_id");
		_frm.load({method:"POST",url:"php/budget_tareas_json_records.php",waitMsg:"Loading...",params:{xxTarea_key:comp.getCK(),xxType_record:"frm"},
			success:function(frm,act){try{var _mod=fext_CM("bud.TareaE");var _res=fext_DJ(act);var _d=_res.data[0];if(_d){_mod.set(_d);fext_LR(comp,_mod);fextbud_metasFilt({pan:comp,yi:_d.year_id,dsb:true,val:_d.meta_id});fext_SV(comp,"tarea_nro",fjsLpad(_d.tarea_nro,3,0));fext_SV(comp,"tarea_estado",_d.tarea_estado==1?true:false);}}catch(x){fext_MsgC(x.Message);}},failure:function(frm,act){fext_MsgFL(act);}
		});
		if(_TE==2){var _ico="icon_Modify_90";var _tit="Modificar Tarea Funcional ::.";comp.down("#tarea_nro").enable();}
		else{var _ico="icon_Query_90";var _tit="Consulta de Tarea Funcional ::.";fext_Dsb(comp,"",["tiptarea_id","tipgast_id","tipespedet_id","tarea_nombre","tarea_fechaini","tarea_fechafin","tarea_estado","btnSave","btnUndo"]);fext_SRO(comp,"tarea_observ");comp.down("#btnExit").enable();}
	}
	comp.setIconCls(_ico);comp.setTitle(_tit);
},
bte_btnSav:function(btn,e,opt){fext_CC("bud.TareaES").bte(btn.up("window"));},
bte_btnExt:function(btn,e,opt){btn.up("window").close();},
bte_teChg:function(chkb,newV,oldV,opt){fext_removeAddCls(chkb.up("window").down("#lblTarea_estado"),newV?"lbl00303":"lbl00003",newV?"lbl00003":"lbl00303");},
bte_tnBlur:function(txtf,the,opt){if(txtf.getValue()*1>0){txtf.setValue(fjsLpad(txtf.getValue(),3,0));}},
bte_meiChg:function(cbo,newV,oldV,opt){var _w=cbo.up("window");fext_SV(_w,"","",["actproy_codename","fina_codename"]);if(newV*1>0){
	Ext.Ajax.request({method:"POST",url:"php/budget_metas_json_records.php",params:{xxMeta_id:newV,xxType_record:"winBTE"},success:function(resp,opt){var _res=fext_DJ("",resp);var _mod=fext_CM("bud.MetaWBTE");if(_res.success&&_res.data.length==1){fext_SV(_w,"actproy_codename",_res.data[0].actproy_codename);fext_SV(_w,"fina_codename",_res.data[0].fina_codename);}}});
}},
bte_uekChg:function(cbo,newV,oldV,opt){var _w=cbo.up("window");var _TE=_w.getTE();if(_TE==1||oldV!=undefined){fextbud_metasFilt({pan:_w,yi:fext_GV(_w,"year_id"),uek:newV});}},
bte_yiChg:function(cbo,newV,oldV,opt){var _w=cbo.up("window");var _TE=_w.getTE();if(_TE==1||oldV!=undefined){fextbud_metasFilt({pan:_w,yi:newV,uek:fext_GV(_w,"unieje_key")});}}
});