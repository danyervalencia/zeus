Ext.define("Siace.controller.log.DonaDet",{extend:"Ext.app.Controller",
ldd_View:function(poP){var _comp=poP["comp"];var _grd=(poP["grd"]==undefined?"grdLDD":poP["grd"]);var _TE=(poP["TE"]==undefined?0:poP["TE"]);var _cte=(poP["cte"]==undefined?_comp:poP["cte"]);
	if(fextpub_uamoBtn("",_TE==13?1:_TE,_cte)){return false;}if(Ext.isEmpty(poP["dk"])){return false;}
	if(fjsIn_array(_TE,[2,3])){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}}
	fext_CC("log.Donaciones_DetE");var _w=fext_CW("log.Donaciones_DetE");_w.setCC(_comp);_w.setMI(poP["mi"]);_w.setTE(_TE);_w.setCS(fext_GS(_comp,_grd));
	if(fjsIn_array(_TE,[2,3])){_w.setCK(_r.data.donadet_key);}fext_SV(_w,"dona_key",poP["dk"]);_w.show();fext_unmask(_comp);
}
});