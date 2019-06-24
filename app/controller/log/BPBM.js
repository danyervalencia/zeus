Ext.define("Siace.controller.log.BPBM",{extend:"Ext.app.Controller",
lbp:function(poP){var _comp=poP["comp"];var _grd=(poP["grd"]==undefined?"grdLBP":poP["grd"]);if(fextpub_uamoBtn("",2,_comp)){return false;}var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}
	fext_CC("log.Buena_ProEG");var _w=fext_CW("log.Buena_ProEG");_w.setTE(2);_w.setCK(_r.data.bp_key);_w.setCS(fext_GS(_comp,_grd));_w.setMI(poP["mi"]);_w.show();
}
});