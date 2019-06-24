Ext.define("Siace.controller.log.OrdenBBK",{extend:"Ext.app.Controller",
lobbk:function(poP){var _comp=poP["comp"];var _TE=(poP["TE"]==undefined?0:poP["TE"]);var _grd=(poP["grd"]==undefined?"grdLO":poP["grd"]);var _mi=(poP["mi"]==undefined?0:poP["mi"]);var _oi=(poP["oi"]==undefined?"":poP["oi"]);var _cs=(poP["cs"]==undefined?true:poP["cs"]);var _yi=(poP["yi"]==undefined?"":poP["yi"]);
	if(_oi!=""){if(fextpub_uamoBtn("",_oi,_comp)){return false;}}var _cg=(Ext.isEmpty(poP["compg"])?_comp:poP["compg"]);fext_mask(_comp);
	fext_CC("log.OrdenesEB");var _w=fext_CW("log.OrdenesEB");_w.setTE(_TE);_w.setMI(_mi);fext_SV(_w,"year_id",_yi);
	if(_cs){_w.setCS(fext_GS(_cg,_grd));}_w.show();fext_unmask(_comp);
}
});