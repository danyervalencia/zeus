Ext.define("Siace.controller.bud.TareaUsurAcce",{extend:"Ext.app.Controller",
btua_Brow:function(poP){var _comp=poP["comp"];var _oi=(poP["_oi"]==undefined?2001:poP["_oi"]);var _mi=(poP["mi"]==undefined?fext_GV(_comp,"menu_id"):poP["mi"]);var _grd=(poP["grd"]==undefined?"grdBTUA":poP["grd"]);if(fextpub_uamoBtn("",_oi,_comp)){return false;}
	if(Ext.isEmpty(poP["uak"])){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}var _uak=_r.data.usuracce_key}else{var _uak=poP["uak"]}fext_mask(_comp);
	fext_CC("bud.TareaUsurAcceB");var _w=fext_CW("bud.TareaUsurAcceB");_w.setTitle("Tareas Funcionales según Acceso de Usuario ::.");_w.setCK(_uak);_w.setMI(_mi);_w.show();fext_unmask(_comp);
},
btua_View:function(poP){var _comp=poP["comp"];var _TE=(poP["TE"]==undefined?0:poP["TE"]);var _mi=(poP["mi"]==undefined?fext_GV(_comp,"menu_id"):poP["mi"]);var _grd=(poP["grd"]==undefined?"grdBTUA":poP["grd"]);
	if(fjsIn_array(_TE,[2,3])){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}}fext_mask(_comp);
	fext_CC("bud.TareaUsurAcceE");var _w=fext_CW("bud.TareaUsurAcceE");
	_w.setTE(_TE);_w.setMI(_mi);_w.setCS(fext_GS(_comp,_grd));fext_SV(_w,"usuracce_key",poP["uak"]);if(!Ext.isEmpty(poP["ak"])){fext_SV(_w,"area_key",poP["ak"]);}
	if(fjsIn_array(_TE,[2,3])){_w.setCK(_r.data.tareausuracce_key);}_w.show();fext_unmask(_comp);
}
});