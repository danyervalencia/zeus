Ext.define("Siace.controller.pub.BSCMarc",{extend:"Ext.app.Controller",
pbscm_View:function(poP){var _comp=poP["comp"];var _TE=(poP["TE"]==undefined?0:poP["TE"]);var _mi=(poP["mi"]==undefined?fext_GV(_comp,"menu_id"):poP["mi"]);if(fextpub_uamoBtn("",_TE,_comp)){return false;}var _grd=(poP["grd"]==undefined?"grdM":poP["grd"]);
	if(fjsIn_array(_TE,[2,3])){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}}fext_mask(_comp);
	fext_CC("pub.Bienes_Servs_Clases_MarcasE");var _w=fext_CW("pub.Bienes_Servs_Clases_MarcasE");_w.setTE(_TE);_w.setMI(_mi);_w.setCS(fext_GS(_comp));fext_SV(_w,"bsc_id",poP["bsc_id"]);
	if(fjsIn_array(_TE,[2,3])){_w.setCK(_r.data.bscmarc_key);}_w.show();fext_unmask(_comp);
}
});