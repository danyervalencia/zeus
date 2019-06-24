Ext.define("Siace.controller.log.OrdenBG",{extend:"Ext.app.Controller",
lob:function(poP){var _comp=poP["comp"];var _grd=(poP["grd"]==undefined?"grdLO":poP["grd"]);if(fextpub_uamoBtn("",63,_comp)){return false;}var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}
	fext_CC("log.OrdenesEG");var _w=fext_CW("log.OrdenesEG");_w.setTE(1);_w.setCS(fext_GS(_comp,_grd));fext_SV(_w,"orden_key",_r.data.orden_key);_w.setMI(poP["mi"]);_w.show();
}
});