Ext.define("Siace.controller.rrhh.Trabj",{extend:"Ext.app.Controller",
rt_View:function(poP){var _comp=poP["comp"];var _TE=(poP["TE"]==undefined?0:poP["TE"]);var _grd=(poP["grd"]==undefined?"grdRT":poP["grd"]);var _mi=(poP["mi"]==undefined?fext_GV(_comp,"menu_id"):poP["mi"]);var _cs=(poP["cs"]==undefined?true:poP["cs"]);
	if(fjsIn_array(_TE,[2,3])){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}}fext_mask(_comp);
	fext_CC("rrhh.TrabajadoresE");var _w=fext_CW("rrhh.TrabajadoresE");_w.setTE(_TE);_w.setMI(_mi);if(_cs){_w.setCS(fext_GS(_comp,_grd));}
	if(_TE==1){fext_SV(_w,"indiv_key",poP["ik"]==undefined?"":poP["ik"]);}else if(fjsIn_array(_TE,[2,3])){_w.setCK(_r.data.trabj_key);}_w.show();fext_unmask(_comp);
}
});