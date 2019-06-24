Ext.define("Siace.controller.log.Cotizaciones",{extend:"Ext.app.Controller",
lc_Printer:function(poP){var _comp=poP["comp"];var _key=(Ext.isEmpty(poP["key"])?"":poP["key"]);var _grd=(poP["grd"]==undefined?"grdLC":poP["grd"]);var _mi=(poP["mi"]==undefined?fext_GV(_comp,"menu_id"):poP["mi"]);var _oi=(poP["oi"]==undefined?8:poP["oi"]);var _tit=(poP["tit"]==undefined?1:poP["tit"]);
	if(fextpub_uamoBtn(_comp.down("#opc_id"),_oi)){return false;}
	if(_key==""){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}_key=_r.data.coti_key;}
	_tit=(_tit==1?_r.data.coti_documento:(_tit==2?_r.data.doc_abrev+"/ "+_r.data.coti_documento:_tit));
	fext_pdf("",_tit,"php/pdf/pdf_logistics_cotizaciones_printer.php?xxCoti_key="+_key+"&xxType_record=printer&xxMenu_id="+_mi+"&xxOpc_id="+_oi);
},
lc_View:function(poP){var _comp=poP["comp"];var _TE=(poP["TE"]==undefined?"":poP["TE"]);var _mi=(poP["mi"]==undefined?fext_GV(_comp,"menu_id"):poP["mi"]);var _oi=(poP["oi"]==undefined?0:poP["oi"]);var _grd=(poP["grd"]==undefined?"grdLC":poP["grd"]);var _cs=(poP["cs"]==undefined?true:poP["cs"]);var _cg=(Ext.isEmpty(poP["compg"])?_comp:poP["compg"]);
	if(_oi!=""){if(fextpub_uamoBtn(_comp.down("#opc_id"),_oi)){return false;}}if(Ext.isEmpty(poP["pk"])){return false;}
	if(fjsIn_array(_TE,[2,3,13,23])){var _r=fext_grdSR(_cg,_grd);if(!_r){return false;}}fext_mask(_comp);
	fext_CC("log.CotizacionesE");var _w=fext_CW("log.CotizacionesE");_w.setTE(_TE);_w.setMI(_mi);if(_cs){_w.setCS(fext_GS(_cg,_grd));}fext_SV(_w,"ped_key",poP["pk"]);
	if(fjsIn_array(_TE,[2,3,13,23])){_w.setCK(_r.data.coti_key);}if(fjsIn_array(_TE,[13,23])){fext_SV(_w,"bp_key",_r.data.bp_key);}_w.show();fext_unmask(_comp);
}
});