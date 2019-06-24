Ext.define("Siace.controller.log.FaseAcce",{extend:"Ext.app.Controller",
lfa_View:function(poP){var _comp=poP["comp"];var _TE=poP["TE"];var _mi=(poP["mi"]==undefined?fext_GV(_comp,"menu_id"):poP["mi"]);var _grd=(poP["grd"]==undefined?"grdLFA":poP["grd"]);if(fextpub_uamoBtn("",_TE,_comp)){return false;}
	if(fjsIn_array(_TE,[2,3])){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}}fext_mask(_comp);
	fext_CC("log.Fases_AccesosE");var _w=fext_CW("log.Fases_AccesosE");_w.setTE(_TE);_w.setCS(fext_GS(_comp,_grd));_w.setMI(_mi);_w.setAK(poP["ak"]);
	if (fjsIn_array(_TE,[2,3])){_w.setCK(_r.data.faseacce_key);}_w.show();fext_unmask(_comp);
}
});