Ext.define("Siace.controller.bud.EgreE",{extend:"Ext.app.Controller",
bee_Add:function(poP){var _w=poP["w"];var _ffi=(fext_IE(_w,"fuefin_id"))||fext_GV(_w,"fuefin_id")*1<=0?0:fext_GV(_w,"fuefin_id");
	if(_ffi<=0){fext_MsgA("Debe indicar el Rubro Presupuestal",_w.down("#fuefin_id"));return false;}fext_CC("bud.Tareas_FftredSA");
	if(Ext.isEmpty(_w.getCompBTFS())){var _wS=fext_CW("bud.Tareas_FftredSA");_wS.setCC(_w);_wS.setTRE("ADD_EGRESOS");_w.setCompBTFS(_wS);}
	else{var _wS=_w.getCompBTFS();}_wS.setF(_w.getF());_w.setF(false);
	_wS.setYI(fext_GV(_w,"year_id"));_wS.setMEI(fext_GV(_w,"meta_id"));_wS.setTK(fext_IE(_w,"tarea_key")?"":fext_GV(_w,"tarea_key"));_wS.setFFI(_ffi);_wS.show();
},
bee_tdiChange:function(poP){var _w=poP["w"];var _TE=_w.getTE();
	if(poP["newV"]==1){fext_SVI(_w,"cntPers",false);fext_SVI(_w,"cntIndiv",true);fext_Dsb(_w,"",["pers_ruc","btnPPS"]);if(fjsIn_array(_TE,[1,2])){fext_SD(_w,"",false,["indiv_dni","btnPIS"]);}fext_SV(_w,"","",["pers_key","PERS_RUC","pers_ruc","pers_nombre"]);}
	else if(poP["newV"]==3){fext_SVI(_w,"cntPers",true);fext_SVI(_w,"cntIndiv",false);if(fjsIn_array(_TE,[1,2])){fext_SD(_w,"",false,["pers_ruc","btnPPS"]);}fext_SV(_w,"","",["indiv_key","INDIV_DNI","indiv_dni","indiv_apenom"]);}
	else{fext_Dsb(_w,"",["pers_ruc","btnPPS","indiv_dni","btnPIS"]);if(fjsIn_array(_TE,[1,2])){fext_SV(_w,"","",["pers_key","PERS_RUC","pers_ruc","pers_nombre","indiv_key","INDIV_DNI","indiv_dni","indiv_apenom"]);}}
}
});