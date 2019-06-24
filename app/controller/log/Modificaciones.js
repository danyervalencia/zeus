Ext.define("Siace.controller.log.Modificaciones",{extend:"Ext.app.Controller",
lm_Printer:function(poP){var _comp=poP["comp"];var _key=(Ext.isEmpty(poP["key"])?"":poP["key"]);var _grd=(poP["grd"]==undefined?"grdLM":poP["grd"]);var _oi=(poP["oi"]==undefined?8:poP["oi"]);var _mi=(poP["mi"]==undefined?0:poP["mi"]);var _tit=(poP["tit"]==undefined?1:poP["tit"]);
	if(fextpub_uamoBtn("",_oi,_comp)){return false;}
	if(_key==""){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}_key=_r.data.modif_key;}
	_tit=(_tit==1?_r.data.modif_documento:(_tit==2?_r.data.modif_abrev+"/ "+_r.data.modif_documento:_tit));
	fext_pdf("",_tit,"php/pdf/pdf_logistics_modificaciones_printer.php?xxModif_key="+_key+"&xxType_record=printer&xxMenu_id="+_mi+"&xxOpc_id="+_oi);
},
lm_View:function(poP){var _comp=poP["comp"];var _TE=(poP["TE"]==undefined?0:poP["TE"]);var _grd=(poP["grd"]==undefined?"grdLM":poP["grd"]);var _mi=(poP["mi"]==undefined?fext_GV(_comp,"menu_id"):poP["mi"]);var _yi=(poP["yi"]==undefined?"":poP["yi"]);var _cs=(poP["cs"]==undefined?true:poP["cs"]);var _tit=(poP["tit"]==undefined?2:poP["tit"]);var _nuk=(poP["nuk"]==undefined?"":poP["nuk"]);
	if(fextpub_uamoBtn("",poP["oi"],_comp)){return false;}
	if(fjsIn_array(_TE,[2,3,12,23,59])){var _r=fext_grdSR(_comp.down("#"+_grd)); if(!_r){return false;}}fext_mask(_comp);
	fext_CC("log.ModificacionesE");var _w=fext_CW("log.ModificacionesE");_w.setTE(_TE);_w.setMI(_mi);
	if(_yi!=""){_w.down("#year_id").setValue(_yi);}if(_cs){_w.setCS(fext_GS(_comp,_grd));}if(fjsIn_array(_TE,[2,3,12,23])){_w.setCK(_r.data.ped_key);}
	if(fjsIn_array(_TE,[23])||_no_usk=="NoT"){_w.setNoUsk("NoT");}_w.show(); fext_unmask(_comp);
},
lm_fasesPrinter:function(poP){var _comp=poP["comp"];var _key=(Ext.isEmpty(poP["key"])?"":poP["key"]);var _grd=(poP["grd"]==undefined?"grdLM":poP["grd"]);var _mi=(poP["mi"]==undefined?fext_GV(_comp,"menu_id"):poP["mi"]);var _oi=(poP["oi"]==undefined?5002:poP["oi"]);var _tit=(poP["tit"]==undefined?1:poP["tit"]);
	if(fextpub_uamoBtn("",_oi,_comp)){return false;}
	if(_key==""){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}_key=_r.data.modif_key;}
	_tit="Fases &nbsp;"+(_tit==1?_r.data.modif_documento:(_tit==2?_r.data.doc_abrev+"/ "+_r.data.modif_documento:_tit));
	fext_pdf("",_tit,"php/pdf/pdf_logistics_modificaciones_fases_printer.php?xxModif_key="+_key+"&xxType_record=printer&xxMenu_id="+_mi+"&xxOpc_id="+_oi);
}
});