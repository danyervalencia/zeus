Ext.define("Siace.controller.bud.Tareas",{extend:"Ext.app.Controller",
bt_View:function(poP){var _comp=poP["comp"];var _TE=(poP["TE"]==undefined?0:poP["TE"]);var _mi=(poP["mi"]==undefined?0:poP["mi"]);var _grd=(poP["grd"]==undefined?"grdBT":poP["grd"]);
	if(fextpub_uamoBtn("",_TE,_comp)){return false;}if(fjsIn_array(_TE,[2,3])){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}}fext_mask(_comp);
	fext_CC("bud.TareasE");var _w=fext_CW("bud.TareasE");_w.setTE(_TE);_w.setMI(_mi);_w.setCS(fext_GS(_comp,_grd));if(fjsIn_array(_TE,[2,3])){_w.setCK(_r.data.tarea_key);}_w.show();fext_unmask(_comp);
}
});