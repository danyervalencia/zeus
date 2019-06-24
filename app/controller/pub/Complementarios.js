Ext.define("Siace.controller.pub.Complementarios",{extend:"Ext.app.Controller",
pc_View:function(poP){var _comp=poP["comp"];var _TE=(poP["TE"]==undefined?0:poP["TE"]);var _mi=(poP["mi"]==undefined?fext_GV(_comp,"menu_id"):poP["mi"]);var _oi=(poP["oi"]==undefined?"":poP["oi"]);var _cs=(poP["cs"]==undefined?true:poP["cs"]);var _grd=(poP["grd"]==undefined?"grdPC":poP["grd"]);
	if(fextpub_uamoBtn("",_oi,_comp)){return false;}if(fjsIn_array(_TE,[2,3])){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}}fext_mask(_comp);
	fext_CC("pub.ComplementariosE");var _w=fext_CW("pub.ComplementariosE");_w.setTE(_TE);_w.setMI(_mi);
	if(_cs){_w.setCS(fext_GS(_comp,_grd));}if(fjsIn_array(_TE,[2,3])){_w.setCK(_r.data.compl_key);}_w.show();fext_unmask(_comp);
}
});