Ext.define("Siace.controller.pub.Individuos",{extend:"Ext.app.Controller",
pp_View:function(poP){var _comp=poP["comp"];var _TE=(poP["TE"]==undefined?0:poP["TE"]);var _mi=(poP["mi"]==undefined?fext_GV(_comp,"menu_id"):poP["mi"]);var _grd=(poP["grd"]==undefined?"grdPI":poP["grd"]);var _cs=(poP["cs"]==undefined?true:poP["cs"]);
	if(fextpub_uamoBtn(_comp.down("#opc_id"),poP["oi"])){return false;}if(fjsIn_array(_TE,[2,3])){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}}fext_mask(_comp);
	fext_CC("pub.IndividuosE");var _w=fext_CW("pub.IndividuosE");_w.setTE(_TE);_w.setMI(_mi);if(_cs){_w.setCS(fext_GS(_comp,_grd));}
	if(fjsIn_array(_TE,[2,3])){_w.setCK(_r.data.indiv_key);}_w.show();fext_unmask(_comp);
}
});