Ext.define("Siace.controller.log.Viaticos",{extend:"Ext.app.Controller",
lv_Fases:function(poP){var _comp=poP["comp"];var _grd=(poP["grd"]==undefined?"grdLV":poP["grd"]);var _oi=(poP["oi"]==undefined?5029:poP["oi"]);
	if(fextpub_uamoBtn("",_oi,_comp)){return false;}var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}fext_mask(_comp);
	fext_CC("siaf.Expediente_SecuenciaB");var _w=fext_CW("siaf.Expediente_SecuenciaB");
	fext_SV(_w,"tablex",5060);_w.setCK(_r.data.viat_key);fext_SV(_w,"expe_nro",_r.data.expe_nro);_w.setTitle("Fases Expediente ["+_r.data.expe_nro+"] ::.");_w.show();fext_unmask(_comp);
},
lv_Printer:function(poP){var _comp=poP["comp"];var _grd=(poP["grd"]==undefined?"grdLV":poP["grd"]);var _mi=(poP["mi"]==undefined?0:poP["mi"]);var _oi=(poP["oi"]==undefined?8:poP["oi"]);var _tit=(poP["tit"]==undefined?2:poP["tit"]);
	if(fextpub_uamoBtn("",_oi,_comp)){return false;}var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}var _d=_r.data;
	_tit=(_tit==1?_d.viat_documento:(_tit==2?_d.doc_abrev+"/ "+_d.viat_documento:_tit));
	fext_pdf("",_tit,"php/pdf/pdf_logistics_viaticos_printer.php?xxViat_key="+_d.viat_key+"&xxType_record=printer&xxMenu_id="+_mi+"&xxOpc_id="+_oi);
},
lv_View:function(poP){var _comp=poP["comp"];var _TE=(poP["TE"]==undefined?0:poP["TE"]);var _grd=(poP["grd"]==undefined?"grdLV":poP["grd"]);var _mi=(poP["mi"]==undefined?0:poP["mi"]);var _yi=(poP["yi"]==undefined?"":poP["yi"]);var _cs=(poP["cs"]==undefined?true:poP["cs"]);var _nuk=(poP["nuk"]==undefined?"":poP["nuk"]);
	if(fextpub_uamoBtn("",poP["oi"],_comp)){return false;}if(fjsIn_array(_TE,[2,3,12])){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}}fext_mask(_comp);
	if(_TE==12){fext_CC("log.ViaticosER");var _w=fext_CW("log.ViaticosER");}else{fext_CC("log.ViaticosE");var _w=fext_CW("log.ViaticosE");}
	_w.setTE(_TE);_w.setMI(_mi);if(_yi!=""){fext_SV(_w,"year_id",_yi);}if(_cs){_w.setCS(fext_GS(_comp,_grd));}
	if(fjsIn_array(_TE,[2,3,12])){_w.setCK(_r.data.viat_key);}if(_nuk=="NoT"){_w.setNUK("NoT");}_w.show();fext_unmask(_comp);
}
});