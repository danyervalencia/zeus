Ext.define("Siace.controller.log.OrdenBE",{extend:"Ext.app.Controller",
lobe:function(poP){var _comp=poP["comp"];var _grd=(poP["grd"]==undefined?"grdLO":poP["grd"]);
	if(fextpub_uamoBtn("",5005,_comp)){return false;}var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}
	fext_CC("log.Ordenes_ExpedientesE");var _w=fext_CW("log.Ordenes_ExpedientesE");_w.setTE(_r.data.expe_nro*1>0?2:1);_w.setCS(fext_GS(_comp,_grd));fext_SV(_w,"orden_key",_r.data.orden_key);_w.setMI(poP["mi"]);_w.show();
}
});