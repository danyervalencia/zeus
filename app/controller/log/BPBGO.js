Ext.define("Siace.controller.log.BPBGO",{extend:"Ext.app.Controller",
lbpb:function(poP){var _comp=poP["comp"];var _grd=(poP["grd"]==undefined?"grdLBP":poP["grd"]);if(fextpub_uamoBtn("",5025,_comp)){return false;}var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}
	fext_CC("log.OrdenesE");var _w=fext_CW("log.OrdenesE");_w.setTE(11);_w.setCS(fext_GS(_comp,_grd));_w.setMI(poP["mi"]);fext_SV(_w,"tiporden_id",11);fext_SV(_w,"tablex",5020);fext_SV(_w,"tablex_key",_r.data.bp_key);_w.show();
}
});