Ext.define("Siace.controller.bud.TareaUsurAcceE",{extend:"Ext.app.Controller",stores:["array.Years"],views:["bud.TareaUsurAcceE"],
init:function(application){this.control({
"bud_tareausuraccee":{beforeshow:this.btuae_BeforeShow},"bud_tareausuraccee #btnSave":{click:this.btuae_btnSav},"bud_tareausuraccee #btnUndo":{click:this.btuae_btnExt},"bud_tareausuraccee #btnExit":{click:this.btuae_btnExt},
"bud_tareausuraccee actioncolumn#acDocumentos":{click:this.btuae_acCLk},"bud_tareausuraccee #tareausuracce_estado":{change:this.btuae_tuaeChg},"bud_tareausuraccee #year_id":{change:this.btuae_yiChg},
});},
btuae_BeforeShow:function(comp,opt){var _TE=comp.getTE();var _frm=comp.down("#panBTUA").down("form");
	Ext.Ajax.request({method:"POST",url:"php/public_usuarios_accesos_json_records.php",params:{xxUsuracce_key:fext_GV(comp,"usuracce_key"),xxType_record:"winBTUAE"},
		success:function(resp,opt){var _res=fext_DJ("",resp);var _mod=fext_CM("pub.Usuario_AccesoWBTUAE");if(_res.success&&_res.data.length==1){var _d=_res.data[0];_mod.set(_d);fext_LR(comp.down("#panPUA"),_mod);}}
	});
	var _str=fext_CS("bud.Tareas_Usuarios_Accesos_DocumentosE");fext_BSG(comp,_str);
	_str.on("beforeload",function(str,oper,opt){fext_PSEP(str,["xxTareausuracce_key","xxType_record"],[_TE==13?"xyz":comp.getCK(),_TE==13?"frm_add":"frm"]);});_str.load();

	if(_TE==13){var _ico="icon_New_90";var _tit="Agregar Tarea para Acceso de Usuario ::."; 
		fextbud_tareasParam({pan:comp,TR:"TO_BTUAE",TQ:fext_GV(comp,"area_key")+(_TE==13?fext_GV(comp,"usuracce_key"):""),OB:"tarea_codename",AB:"NO"});fextpub_yearsValue(comp.down("#year_id"),0);
	}else if(fjsIn_array(_TE,[2,3])){
		_frm.load({method:"POST",url:"php/budget_tareas_usuarios_accesos_json_records.php",waitMsg:"Loading...",params:{xxTareausuracce_key:comp.getCK(),xxType_record:"frm"},
			success:function(frm,act){try{var _mod=fext_CM("bud.Tarea_Usuario_AccesoE");var _res=fext_DJ(act);var _d=_res.data[0];if(_d){_mod.set(_d);_frm.loadRecord(_mod);fext_SV(comp,"year_id",_d.year_id*1);fextbud_tareasFilt({pan:comp,tk:_d.tarea_key,TR:"cboCN",dsb:true,AB:"NO"});fext_SV(comp,"tareausuracce_estado",_d.tareausuracce_estado==1?true:false);}}catch(x){fext_MsgE(x);}},failure:function(frm,act){fext_MsgFL(act);}
		});
		fext_Dsb(comp,"",["year_id","tarea_key"]);
		if(_TE==2){var _ico="icon_Modify_90";var _tit="Modificar Acceso de Usuario según Tarea Funcional ::.";}else{var _ico="icon_Query_90";var _tit="Consulta Acceso de Usuario según Tarea Funcional ::.";fext_Dsb(comp,"",["tareausuracce_fechaini","tareausuracce_fechafin","tareausuracce_estado","btnSave","btnUndo"]);fext_SRO(comp,"tareausuracce_observ");comp.down("grid").columns[2].disable();comp.down("grid").columns[3].disable();comp.down("grid").columns[4].disable();comp.down("grid").columns[5].disable();comp.down("grid").columns[6].disable();comp.down("#btnExit").enable();}
	}
	comp.setIconCls(_ico);comp.setTitle(_tit);
},
btuae_btnSav:function(btn,e,opt){fext_CC("bud.TareaUsurAcceES").btuae(btn);},
btuae_btnExt:function(btn,e,opt){btn.up("window").close();},
btuae_acCLk:function(grid,cell,row,col,e,r,t){r.set("tareausuraccedoc_estado",r.data.tareausuraccedoc_estado==1?0:1);r.commit();},
btuae_tuaeChg:function(chkb,newV,oldV,opt){fext_removeAddCls(chkb.up("window").down("#lblTareausuracce_estado"),newV?"lbl00303":"lbl00003",newV?"lbl00003":"lbl00303");},
btuae_yiChg:function(cbo,newV,oldV,opt){var _w=cbo.up("window");var _TE=_w.getTE();if(_TE==13){fextbud_tareasLoad({pan:_w,dsb:(_TE==13?false:true),setVal:false,filtForce:true});}}
});