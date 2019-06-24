Ext.define("Siace.controller.pub.Modelos",{extend:"Ext.app.Controller",
pm_View:function(poP){var _comp=poP["comp"];var _TE=(poP["TE"]==undefined?0:poP["TE"]);var _mi=(poP["mi"]==undefined?fext_GV(_comp,"menu_id"):poP["mi"]);var _oi=(poP["oi"]==undefined?"":poP["oi"]);var _grd=(poP["grd"]==undefined?"grdPM":poP["grd"]);var _cs=(poP["cs"]==undefined?true:poP["cs"]);
	if(fextpub_uamoBtn("",_TE,_comp)){return false;}var _pan=_comp.up("pub_bsfb").down("#panF");
	var _r=fext_grdSR(_pan,"grdF");if(!_r){return false;} if(fjsIn_array(_TE,[2,3])){var _r=fext_grdSR(_comp,"grdPM");if(!_r){return false;}}fext_mask(_comp);
	fext_CC("pub.ModelosEPBSFB");var _w=fext_CW("pub.ModelosEPBSFB");_w.setTE(pcTE);_w.setMI(fext_GV(_comp,"menu_id"));_w.setCS(fext_GS(_comp,"grdPM"));fext_SV(_w,"bsf_id",_r.data.bsf_id);
	if(fjsIn_array(_TE,[2,3])){_w.setCK(_r.data.mod_key);}_w.show();fext_unmask(_comp);
}
});