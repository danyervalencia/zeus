Ext.define("Siace.controller.pub.Personas_RestriccionesE",{extend:"Ext.app.Controller",views:["pub.Personas_RestriccionesE"],
init:function(application){this.control({
"pub_persrestre":{beforeshow:this.ppre_BS},"pub_persrestre #btnSave":{click:this.ppre_btnSav},"pub_persrestre #btnUndo":{click:this.ppre_btnExt},"pub_persrestre #btnExit":{click:this.ppre_btnExt},
"pub_persrestre #persrestr_estado":{change:this.ppre_preChg},"pub_persrestre #tiprestr_id":{change:this.ppre_triChg}
});},
ppre_BS:function(comp,opt){
	Ext.Ajax.request({method:"POST",url:"php/public_personas_json_records.php",params:{xxPers_key:fext_GV(comp,"pers_key"),xxType_record:"winPPFE"},
		success:function(resp,opt){var _res=fext_DJ("",resp);var _md=fext_CM("pub.PersonaWPPFE");if(_res.success&&_res.data.length==1){var _d=_res.data[0];_md.set(_d);fext_LR("",_md,"",comp.down("#frmPP"));}}
	});
	fext_CC("pub.PersRestrE0"+comp.getTE()).ppre(comp);

	/*fextpub_tabgenFilt({obj:comp.down("#tiprestr_id"),tgp:1040,dsb:(_TE==3?true:false)});fextpub_tabgenFilt({obj:comp.down("#comprestr_id"),tgp:1030,dsb:(_TE==3?true:false)});
	if(_TE=="1"){var _ico="icon_New_90"; var _tit="Nuevo Registro Telefónico ::.";}
	else if(fjsIn_array(_TE,[2,3])){
		_frm.load({method:"POST",url:"php/public_personas_fonos_json_records.php",waitMsg:"Loading...",params:{xxPersrestr_key:comp.getCK(),xxType_record:"frm"},
			success:function(frm,act){try{var _mod=fext_CM("pub.Persona_FonoE");var _res=fext_DJ(act);var _d=_res.data[0];if(_d){_mod.set(_d);_frm.loadRecord(_mod);fext_SV(comp,"persrestr_estado",_d.persrestr_estado==1?true:false);}}catch(x){fext_MsgC(x);}},failure:function(frm,act){fext_MsgFL(act);}
		});
		if(_TE==2){var _ico="icon_Modify_90";var _tit="Modificación de Registro Telefónico ::."; }
		else{var _ico="icon_Query_90";var _tit="Consulta de Registro Telefónico ::.";fext_Dsb(comp,"",["tiprestr_id","comprestr_id","persrestr_nro","persrestr_estado","persrestr_observ","btnSave","btnUndo"]);comp.down("#btnExit").enable();}
	}
	comp.setIconCls(_ico);comp.setTitle(_tit);*/
},
ppre_btnSav:function(btn,e,o){fext_CC("pub.PersRestrES").ppre(btn);},
ppre_btnExt:function(btn,e,o){btn.up("window").close();},
ppre_preChg:function(chk,newV,oldV,opt){fext_removeAddCls(chk.up("window").down("#lblPersrestr_estado"),newV?"lbl00303":"lbl00003",newV?"lbl00003":"lbl00303");},
ppre_triChg:function(chk,newV,oldV,opt){var _w=chk.up("window");if(fjsIn_array(_w.getTE(),[1,2])){fext_SD(_w,"",(newV==1191?false:true),["persrestr_montot","persrestr_montoa","persrestr_montoi"]);}}
});