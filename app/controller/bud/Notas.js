Ext.define("Siace.controller.bud.Notas",{extend:"Ext.app.Controller",
bn_Printer:function(poP){var _comp=poP["comp"];var _grd=(poP["grd"]==undefined?"grdBN":poP["grd"]);var _mi=(poP["mi"]==undefined?0:poP["mi"]);var _oi=(poP["oi"]==undefined?8:poP["oi"]);var _tit=(poP["tit"]==undefined?1:poP["tit"]);
	if(fextpub_uamoBtn("",_oi,_comp)){return false;}var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}var _d=_r.data;
	_tit=(_tit==1?_d.nota_documento:(_tit==2?_d.doc_abrev+"/ "+_d.nota_documento:_tit));
	fext_pdf("",_tit,"php/pdf/pdf_budget_notas_printer.php?xxNota_key="+_d.nota_key+"&xxType_record=printer&xxMenu_id="+_mi+"&xxOpc_id="+_oi);
},
bn_View:function(poP){var _comp=poP["comp"];var _grd=(poP["grd"]==undefined?"grdBN":poP["grd"]);var _TE=(poP["TE"]==undefined?"":poP["TE"]);var _yi=(poP["yi"]==undefined?"":poP["yi"]);var _mi=(poP["mi"]==undefined?0:poP["mi"]);var _nuk=(_mi==2105?"NoT":"");var _cs=(poP["cs"]==undefined?true:poP["cs"]);
	if(fextpub_uamoBtn("",poP["oi"],_comp)){return false;}if(fjsIn_array(_TE,[2,3])){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}}fext_mask(_comp);
	fext_CC("bud.NotasE");var _w=fext_CW("bud.NotasE");_w.setTE(_TE);_w.setMI(_mi);if(_cs){_w.setCS(fext_GS(_comp,_grd));}_w.setNUK(_nuk);
	if(fjsIn_array(_TE,[2,3])){_w.setCK(_r.data.nota_key);}if(_yi!=""){fext_SV(_w,"year_id",_yi);}_w.show();fext_unmask(_comp);
}
});