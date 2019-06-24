Ext.define("Siace.controller.log.Ordenes",{extend:"Ext.app.Controller",
lo_Fases:function(poP){var _comp=poP["comp"];var _grd=(poP["grd"]==undefined?"grdLO":poP["grd"]);var _oi=(poP["oi"]==undefined?5029:poP["oi"]);
	if(fextpub_uamoBtn("",_oi,_comp)){return false;}var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}fext_mask(_comp);
	fext_CC("siaf.Expediente_SecuenciaB");var _w=fext_CW("siaf.Expediente_SecuenciaB");
	fext_SV(_w,"tablex",5030);_w.setCK(_r.data.orden_key);fext_SV(_w,"expe_nro",_r.data.expe_nro);_w.setTitle("Fases Expediente ["+_r.data.expe_nro+"] ::.");_w.show();fext_unmask(_comp);
},
lo_Printer:function(poP){var _comp=poP["comp"];var _grd=(poP["grd"]==undefined?"grdLO":poP["grd"]);var _mi=(poP["mi"]==undefined?fext_GV(_comp,"menu_id"):poP["mi"]);var _oi=(poP["oi"]==undefined?8:poP["oi"]);var _tit=(poP["tit"]==undefined?1:poP["tit"]);
	if(fextpub_uamoBtn("",_oi,_comp)){return false;}var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}
	if(_grd=="grdD"){
		fext_pdf("",_r.data.documento,"php/pdf/pdf_logistics_ordenes_printer.php?xxOrden_key="+_r.data._key+"&xxType_record=printer&xxMenu_id="+_mi+"&xxOpc_id="+_oi);
	}else{			
		_tit=(_tit==1?_r.data.orden_documento:(_tit==2?_r.data.doc_abrev+"/ "+_r.data.orden_documento:""));
		fext_pdf("",_tit,"php/pdf/pdf_logistics_ordenes_printer.php?xxOrden_key="+_r.data.orden_key+"&xxType_record=printer&xxMenu_id="+_mi+"&xxOpc_id="+_oi);
	}
},
lo_ViewP:function(poP){var _comp=poP["comp"];var _TE=(poP["TE"]==undefined?0:poP["TE"]);var _key=(Ext.isEmpty(poP["key"])?"":poP["key"]);var _grd=(poP["grd"]==undefined?"grdLO":poP["grd"]);var _mi=(poP["mi"]==undefined?0:poP["mi"]);var _oi=(poP["oi"]==undefined?"":poP["oi"]);var _cs=(poP["cs"]==undefined?true:poP["cs"]);
	if(_oi!=""){if(fextpub_uamoBtn("",_oi,_comp)){return false;}}var _cg=(Ext.isEmpty(poP["compg"])?_comp:poP["compg"]);
	if(fjsIn_array(_TE,[2,3])&&_key==""){var _r=fext_grdSR(_cg,_grd);if(!_r){return false;}_key=_r.data.orden_key;}fext_mask(_comp);
	fext_CC("log.OrdenesEP");var _w=fext_CW("log.OrdenesEP");_w.setTE(_TE);_w.setMI(_mi);
	if(_cs){_w.setCS(fext_GS(_cg,_grd));}if(fjsIn_array(_TE,[2,3])){_w.setCK(_r.data.orden_key);}_w.show();fext_unmask(_comp);
}
});