Ext.define("Siace.controller.log.Pedidos",{extend:"Ext.app.Controller",
lp_Printer:function(poP){var _comp=poP["comp"];var _key=(Ext.isEmpty(poP["key"])?"":poP["key"]);var _grd=(poP["grd"]==undefined?"grdLP":poP["grd"]);var _mi=(poP["mi"]==undefined?fext_GV(_comp,"menu_id"):poP["mi"]);var _oi=(poP["oi"]==undefined?8:poP["oi"]);var _tit=(poP["tit"]==undefined?2:poP["tit"]);
	if(fextpub_uamoBtn("",_oi,_comp)){return false;}if(_key==""){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;} _key=_r.data.ped_key;}
	_tit=(_tit==1?_r.data.ped_documento:(_tit==2?_r.data.doc_abrev+"/ "+_r.data.ped_documento:_tit));
	fext_pdf("",_tit,"php/pdf/pdf_logistics_pedidos_printer.php?xxPed_key="+_key+"&xxType_record=printer&xxMenu_id="+_mi+"&xxOpc_id="+_oi);
},
lp_View:function(poP){var _comp=poP["comp"];var _TE=(poP["TE"]==undefined?0:poP["TE"]);var _key=(Ext.isEmpty(poP["key"])?"":poP["key"]);var _grd=(poP["grd"]==undefined?"grdLP":poP["grd"]);var _mi=(poP["mi"]==undefined?fext_GV(_comp,"menu_id"):poP["mi"]);var _yi=(poP["yi"]==undefined?"":poP["yi"]);var _cs=(poP["cs"]==undefined?true:poP["cs"]);var _tit=(poP["tit"]==undefined?2:poP["tit"]); var _nuk=(poP["nuk"]==undefined?"":poP["nuk"]);
	if(fextpub_uamoBtn("",poP["oi"],_comp)){return false;}var _cg=(Ext.isEmpty(poP["compg"])?_comp:poP["compg"]);
	if(fjsIn_array(_TE,[0,2,3,12,23,59])){if(_key==""){var _r=fext_grdSR(_cg,_grd);if(!_r){return false;}var _d=_r.data;_key=_d.ped_key;}else{}}fext_mask(_comp);
	if(_TE==0){Ext.Ajax.request({url:"php/logistics_pedidos_json_records.php",params:{xxPed_key:_key,ssNO_USK:"NoT",xxType_record:"titleETTR",vs:fext_JE(fextpub_sessVar())},success:function(resp,opts){var _res=fext_DJ("",resp);fext_pdf("",_res.data[0].ped_title,"php/pdf/pdf_logistics_pedidos_ettr_printer.php?xxPed_key="+_key+"&xxType_record=printer");}});}
	else if(_TE==59){fext_CC("log.PedidosAtt");var _w=fext_CW("log.PedidosAtt");_w.setCK(_d.ped_key);
		fext_SV(_w,"ped_documento",_d.ped_documento);fext_SV(_w,"doc_abrev",_d.doc_abrev);fext_SV(_w,"ped_document","Requerimiento  &nbsp; [ "+_d.ped_documento+" ]");_w.show();
	}else{fext_CC("log.PedidosE");var _w=fext_CW("log.PedidosE");_w.setTE(_TE);_w.setMI(_mi);
		if(_yi!=""){fext_SV(_w,"year_id",_yi);}if(_cs){_w.setCS(fext_GS(_cg,_grd));}if(fjsIn_array(_TE,[2,3,12,23])){_w.setCK(_d.ped_key);}if(fjsIn_array(_TE,[23])||_nuk=="NoT"){_w.setNUK("NoT");}_w.show();
	}fext_unmask(_comp);
}
});