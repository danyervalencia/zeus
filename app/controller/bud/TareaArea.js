Ext.define("Siace.controller.bud.TareaArea",{extend:"Ext.app.Controller",
bta_View:function(poP){var _comp=poP["comp"];var _TE=(poP["TE"]==undefined?0:poP["TE"]);var _mi=(poP["mi"]==undefined?fext_GV(_comp,"menu_id"):poP["mi"]);var _grd=(poP["grd"]==undefined?"grdBTA":poP["grd"]);if(fextpub_uamoBtn("",_TE,_comp)){return false;}
	if(Ext.isEmpty(poP["tk"])){return false;}if(fjsIn_array(_TE,[2,3])){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}}
	fext_CC("bud.Tareas_AreasE");var _w=fext_CW("bud.Tareas_AreasE");_w.setTE(_TE);_w.setMI(_mi);_w.setCS(fext_GS(_comp,_grd));fext_SV(_w,"tarea_key",poP["tk"]);
	if(fjsIn_array(_TE,[2,3])){_w.setCK(_r.data.tareaarea_key);}_w.show();
}
});