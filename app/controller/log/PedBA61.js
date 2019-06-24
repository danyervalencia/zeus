Ext.define("Siace.controller.log.PedBA61",{extend:"Ext.app.Controller",
lpb:function(poP){var _comp=poP["comp"];var _TE=poP["TE"];var _grd=(poP["grd"]==undefined?"grdLP":poP["grd"]);
	if(fextpub_uamoBtn("",_TE,_comp)){return false;}var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}fext_mask(_comp);
	fext_CC("log.PedidosAssign61");var _w=fext_CW("log.PedidosAssign61");_w.setTitle("Asignar Cotizador a Requerimiento ::.");_w.down("#btnAccept").setText("Asignar Cotizador");_w.setCS(fext_GS(_comp,_grd));_w.setCK(_r.data.ped_key);_w.setMI(poP["mi"]);_w.setTE(_TE);_w.show();fext_unmask(_comp);
}
});