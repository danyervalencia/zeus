Ext.define("Siace.controller.pub.BSEspeDet",{extend:"Ext.app.Controller",
pbsed_View:function(poP){var _comp=poP["comp"];var _TE=(poP["TE"]==undefined?0:poP["TE"]);var _grd=(poP["grd"]==undefined?"grdPBSED":poP["grd"]);var _mi=(poP["mi"]==undefined?fext_GV(_comp,"menu_id"):poP["mi"]);if(fextpub_uamoBtn("",_TE,_comp)){return false;}
	if(Ext.isEmpty(poP["bsk"])){return false;}if(fjsIn_array(_TE,[2,3])){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}}
	fext_CC("pub.Bienes_Servs_Especificas_DetE");var _w=fext_CW("pub.Bienes_Servs_Especificas_DetE");
	_w.setTE(_TE);_w.setMI(_mi);_w.setCS(fext_GS(_comp,_grd));fext_SV(_w,"bs_key",poP["bsk"]);if(fjsIn_array(_TE,[2,3])){_w.setCK(_r.data.bsespedet_key);}_w.show();
}
});