Ext.define("Siace.controller.pub.IndivFono",{extend:"Ext.app.Controller",
pif_View:function(poP){var _comp=poP["comp"];var _TE=(poP["TE"]==undefined?0:poP["TE"]);var _mi=(poP["mi"]==undefined?fext_GV(_comp,"menu_id"):poP["mi"]);var _grd=(poP["grd"]==undefined?"grdPIF":poP["grd"]);
	if(fextpub_uamoBtn("",_TE,_comp)){return false;}if(fjsIn_array(_TE,[2,3])){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}}fext_mask(_comp);
	fext_CC("pub.Individuos_FonosE");var _w=fext_CW("pub.Individuos_FonosE");_w.setTE(_TE);_w.setCS(fext_GS(_comp,_grd));_w.setMI(_mi);_w.down("#indiv_key").setValue(poP["d"].indiv_key);_w.down("#indiv_dni").setFieldLabel(poP["d"].tipdocident_abrev);fext_SV(_w,"indiv_dni",poP["d"].indiv_dni);fext_SV(_w,"indiv_apenom",poP["d"].indiv_apenom);
	if(fjsIn_array(_TE,[2,3])){_w.setCK(_r.data.indivfono_key);}_w.show();fext_unmask(_comp);
}
});