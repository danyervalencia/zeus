Ext.define("Siace.controller.pub.PersRestr",{extend:"Ext.app.Controller",
ppr_View:function(poP){var _comp=poP["comp"];var _TE=(poP["TE"]==undefined?0:poP["TE"]);var _mi=(poP["mi"]==undefined?fext_GV(_comp,"menu_id"):poP["mi"]);var _grd=(poP["grd"]==undefined?"grdPPR":poP["grd"]);
	if(fextpub_uamoBtn("",_TE,_comp)){return false;}if(Ext.isEmpty(poP["pk"])){return false;}
	if(fjsIn_array(_TE,[2,3])){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}}fext_mask(_comp);
	fext_CC("pub.Personas_RestriccionesE");var _w=fext_CW("pub.Personas_RestriccionesE");_w.setTE(_TE);_w.setMI(_mi);_w.setCS(fext_GS(_comp,_grd));fext_SV(_w,"pers_key",poP["pk"]);if(fjsIn_array(_TE,[2,3])){_w.setCK(_r.data.persrestr_key);}_w.show();fext_unmask(_comp);
}
});