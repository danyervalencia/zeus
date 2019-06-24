Ext.define("Siace.controller.log.PedWeb",{extend:"Ext.app.Controller",
lpw_View:function(poP){var _comp=poP["comp"];var _TE=(poP["TE"]==undefined?0:poP["TE"]);var _mi=(poP["mi"]==undefined?fext_GV(_comp,"menu_id"):poP["mi"]);var _grd=(poP["grd"]==undefined?"grdLPW":poP["grd"]);
	if(fextpub_uamoBtn("",_TE,_comp)){return false;}if(Ext.isEmpty(poP["pk"])){return false;}
	if(fjsIn_array(_TE,[2,3])){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}}
	fext_CC("log.Pedidos_WebE");var _w=fext_CW("log.Pedidos_WebE");_w.setTE(_TE);_w.setCS(fext_GS(_comp,_grd));
	if(fjsIn_array(_TE,[2,3])){_w.setCK(_r.data.pedweb_key);}fext_SV(_w,"ped_key",poP["pk"]);_w.setMI(_mi);_w.show();
},
});