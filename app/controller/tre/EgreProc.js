Ext.define("Siace.controller.tre.EgreProc",{extend:"Ext.app.Controller",
tep_Printer:function(poP){var _comp=poP["comp"]; var _grd=(poP["grd"]==undefined?"grdTEP":poP["grd"]);var _mi=(poP["mi"]==undefined?fext_GV(_comp,"menu_id"):poP["mi"]);var _oi=(poP["oi"]==undefined?8:poP["oi"]);
	if(fextpub_uamoBtn(_comp.down("#opc_id"),_oi)){return false;}var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}var _vs=fextpub_sessVar();
	if(_r.data.tablex==5030){fext_pdf("",_r.data.tablex_documento,"php/pdf/pdf_logistics_ordenes_printer.php?xxOrden_key="+_r.data.tablex_key+"&xxType_record=printer&zzUsursess_key="+_vs["us"]+"&zzUsuracce_key="+_vs["ua"]+"&zzYear_id="+_vs["y"]+"&zzArea_key="+_vs["a"]+"&xxMenu_id="+_mi+"&xxOpc_id"+_oi);}
	else if(_r.data.tablex==5060){fext_pdf("",_r.data.tablex_documento,"php/pdf/pdf_logistics_viaticos_printer.php?xxViat_key="+_rec.data.tablex_key+"&xxType_record=printer&zzUsursess_key="+_vs["us"]+"&zzUsuracce_key="+_vs["ua"]+"&zzYear_id="+_vs["y"]+"&zzArea_key="+_vs["a"]+"&xxMenu_id="+_mi+"&xxOpc_id"+_oi);}
},
});