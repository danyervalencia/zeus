Ext.define("Siace.controller.log.OrdenBC",{extend:"Ext.app.Controller",
lob:function(poP){var _comp=poP["comp"];var _grd=(poP["grd"]==undefined?"grdLO":poP["grd"]);if(fextpub_uamoBtn("",37,_comp)){return false;}
	fext_CC("log.OrdenesBCJ");var _w=fext_CW("log.OrdenesBCJ");_w.setCS(fext_GS(_comp,_grd));_w.setMI(poP["mi"]);_w.show();
}
});