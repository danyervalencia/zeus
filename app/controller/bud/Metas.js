Ext.define("Siace.controller.bud.Metas",{extend:"Ext.app.Controller",
bm_View:function(poP){var _comp=poP["comp"];var _grd=(poP["grd"]==undefined?"grdBM":poP["grd"]);var _TE=(poP["TE"]==undefined?0:poP["TE"]);var _mi=(poP["mi"]==undefined?0:poP["mi"]);
	if(fextpub_uamoBtn(_comp.down("#opc_id"),_TE)){return false;}if(fjsIn_array(_TE,[2,3])){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}}fext_mask(_comp);
	fext_CC("bud.MetasE");var _w=fext_CW("bud.MetasE");_w.setTE(_TE);_w.setCS(fext_GS(_comp,_grd));_w.setMI(_mi);
	if(fjsIn_array(_TE,[2,3])){_w.setCK(_r.data.meta_id);}_w.show();fext_unmask(_comp);
}
});