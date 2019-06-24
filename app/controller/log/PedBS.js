Ext.define("Siace.controller.log.PedBS",{extend:"Ext.app.Controller",
lpb:function(poP){var _comp=poP["comp"];var _grd=(poP["grd"]==undefined?"grdLP":poP["grd"]);
	if(fextpub_uamoBtn("",5009,_comp)){return false;}var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}
	fext_pdf("","Sol.Cot. &nbsp"+_r.data.doc_abrev+"/ "+_r.data.ped_documento,"php/pdf/pdf_logistics_pedidos_application.php?xxPed_key="+_r.data.ped_key);
}
});