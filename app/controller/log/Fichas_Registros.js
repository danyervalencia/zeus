Ext.define("Siace.controller.log.Fichas_Registros",{extend:"Ext.app.Controller",
lfr_Printer:function(poP){var _comp=poP["comp"];var _key=(Ext.isEmpty(poP["key"])?"":poP["key"]);var _grd=(poP["grid"]==undefined?"grdLC":poP["grid"]);var _mi=(poP["mi"]==undefined?0:poP["mi"]);var _oi=(poP["oi"]==undefined?8:poP["oi"]); 
	var _tit=(poP["title"]==undefined?"2":poP["title"]);var _TR=(poP["TR"]==undefined?"printer":poP["TR"]);if(fextpub_uamoBtn("",_oi,_comp)){return false;} 
	if(_key==""){var _r=fext_grdSR(_comp,grd); if(!_r){return false;}_key=_r.data.coti_key;}
	_tit=(_tit==1?_r.data.coti_documento:(_tit==2?_r.data.doc_abrev+"/ "+_r.data.coti_documento:_tit));var _vs=fextpub_sessVar();
	fext_pdf("",_tit,"php/pdf/pdf_logistics_cotizaciones_printer.php?xxCoti_key="+_key+"&xxType_record=printer&zzUsursess_key="+_vs["us"]+"&zzUsuracce_key="+_vs["ua"]+"&zzYear_id="+_vs["y"]+"&zzArea_key="+_vs["a"]+"&xxMenu_id="+_mi+"&xxOpc_id="+_oi);
},
lfr_View:function(poP){var _comp=poP["comp"];var _grd=(poP["grd"]==undefined?"grdLFR":poP["grd"]);var _TE=poP["TE"];var _mi=poP["mi"];var _cs=(poP["cs"]==undefined?true:poP["cs"]);
	if(!Ext.isEmpty(poP["oi"])){if(fextpub_uamoBtn("",poP["oi"],_comp)){return false;}}var _cg=(Ext.isEmpty(poP["cg"])?_comp:poP["cg"]);
	if(fjsIn_array(_TE,[2,3])){var _r=fext_grdSR(_cg,_grd);if(!_r){return false;}}fext_mask(_comp);
	fext_CC("log.Fichas_RegistrosE");var _w=fext_CW("log.Fichas_RegistrosE");_w.setTE(_TE);_w.setMI(_mi);if(_cs){_w.setCS(fext_GS(_cg,_grd));}fext_SV(_w,"fichdet_key",poP["fdk"]);
	if(fjsIn_array(_TE,[2,3])){_w.setCK(_r.data.fichreg_key);}_w.show();fext_unmask(_comp);
}
});