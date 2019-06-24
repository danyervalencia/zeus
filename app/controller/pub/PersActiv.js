Ext.define("Siace.controller.pub.PersActiv",{extend:"Ext.app.Controller",
ppa_View:function(poP){var _comp=poP["comp"];var _TE=(poP["TE"]==undefined?0:poP["TE"]);var _mi=(poP["mi"]==undefined?fext_GV(_comp,"menu_id"):poP["mi"]);var _grd=(poP["grd"]==undefined?"grdPPA":poP["grd"]);
	if(fextpub_uamoBtn(_comp.down("#opc_id"),_TE)){return false;}if(Ext.isEmpty(poP["pk"])){return false;}
	if(fjsIn_array(_TE,[2,3])){var _r=fext_grdSR(_comp.down("#"+_grd));if(!_r){return false;}}fext_mask(_comp);
	fext_CC("pub.Personas_ActividadesEdit");var _w=fext_CW("pub.Personas_ActividadesEdit");_w.setTE(_TE);_w.setMI(_mi);_w.setCS(_comp.down("#"+_grd).getStore());_w.down("#pers_key").setValue(poP["pk"]);if(fjsIn_array(_TE,[2,3])){_w.setCK(_r.data.persactiv_key);}_w.show();fext_unmask(_comp);
}
});