Ext.define("Siace.controller.log.Pedidos_Tramites",{extend:"Ext.app.Controller",
lpt_Printer:function(poP){var _comp=poP["comp"];var _key=(Ext.isEmpty(poP["key"])?"":poP["key"]);var _grd=(poP["grd"]==undefined?"grdLPT":poP["grd"]);var _mi=(poP["mi"]==undefined?0:poP["mi"]);var _oi=(poP["oi"]==undefined?8:poP["oi"]);var _tit=(poP["tit"]==undefined?"":poP["tit"]);
	if(fextpub_uamoBtn(_comp.down("#opc_id"),_oi)){return false;}if(_key==""){var _r=fext_grdSR(_comp.down("#"+_grd));if(!_r){return false;}_key=_r.data.pedtram_key;}
	_tit=(_tit==""?"T/ "+_r.data.pedtram_documento:_tit);var _vs=fextpub_sessVar();
	fext_pdf("",_tit,"php/pdf/pdf_logistics_pedidos_tramites_printer.php?xxPedtram_key="+_key+"&xxType_record=printer&zzUsursess_key="+_vs["us"]+"&zzUsuracce_key="+_vs["ua"]+"&zzYear_id="+_vs["y"]+"&zzArea_key="+_vs["a"]+"&xxMenu_id="+_mi+"&xxOpc_id="+_oi);
},
});