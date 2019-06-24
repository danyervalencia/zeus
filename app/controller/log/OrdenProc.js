Ext.define("Siace.controller.log.OrdenProc",{extend:"Ext.app.Controller",
lop_Printer:function(poP){var _comp=poP["comp"];var _grd=(poP["grd"]==undefined?"grdLOP":poP["grd"]);if(fextpub_uamoBtn("",8,_comp)){return false;}var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}var _vs=fextpub_sessVar();
	if(_r.data.tablex==5000&&_r.data.doc_id==501){fext_pdf("",_r.data.tablex_documento,"php/pdf/pdf_logistics_pedidos_printer.php?xxPed_key="+_r.data.tablex_key+"&xxType_record=printer");}
	else if(_r.data.tablex==5010){fext_pdf("",_r.data.tablex_documento,"php/pdf/pdf_logistics_cotizaciones_printer.php?xxCoti_key="+_r.data.tablex_key+"&xxType_record=printer&zzUsursess_key="+_vs["us"]+"&zzUsuracce_key="+_vs["ua"]+"&zzYear_id="+_vs["y"]+"&zzArea_key="+_vs["a"]+"&xxMenu_id=5118&xxOpc_id=8");}
},
lop_View:function(poP){var _comp=poP["comp"];var _grd=(poP["grd"]==undefined?"grdLOP":poP["grd"]);if(fextpub_uamoBtn("",3,_comp)){return false;}var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}
	if(_r.data.tablex==5000&&_r.data.doc_id==501){fext_CC("log.PedidosEdit");var _w=fext_CW("log.PedidosEdit");_w.setTE(23);_w.setCK(_r.data.tablex_key);_w.setNUK("NoT");}
	else if(_r.data.tablex==5010){fext_CC("log.CotizacionesEdit");var _w=fext_CW("log.CotizacionesEdit");_w.setTE(13);_w.setMI(fext_GV(_comp,"menu_id"));_w.setCK(_r.data.tablex_key);}
	else if(_r.data.tablex==5020){fext_CC("log.Buena_ProEdit");var _w=fext_CW("log.Buena_ProEdit");_w.setTE(3);_w.setMI(fext_GV(_comp,"menu_id"));_w.setCK(_r.data.tablex_key);}
	_w.show();
}
});