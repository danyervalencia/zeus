Ext.define("Siace.controller.log.Comp",{extend:"Ext.app.Controller",
lc_Printer:function(poP){var _comp=poP["comp"]; var _grd=(poP["grid"]==undefined?"grdLV":poP["grid"]); var _mi=(poP["menu_id"]==undefined?"0":poP["menu_id"]); var _oi=(poP["opc_id"]==undefined?"8":poP["opc_id"]); var _title=(poP["title"]==undefined?2:poP["title"]);
	if(fextpub_uamoBtn(_comp.down("#opc_id"),_oi)){return false;} var _rec=fext_grdSR(_comp.down("#"+_grd)); if(!_rec){return false;}
	_title=(_title==1?_rec.data.viat_documento:(_title==2?_rec.data.doc_abrev+"/ "+_rec.data.viat_documento:"")); var _vs=fextpub_sessVar();
	fext_pdf("",_title,"php/pdf/pdf_logistics_viaticos_printer.php?xxViat_key="+_rec.data.viat_key+"&xxType_rec=printer&zzUsursess_key="+_vs["us"]+"&zzUsuracce_key="+_vs["ua"]+"&zzYear_id="+_vs["y"]+"&zzArea_key="+_vs["a"]+"&xxMenu_id="+_mi+"&xxOpc_id="+_oi);
},
lc_View:function(poP){var _comp=poP["comp"];var _TE=(poP["TE"]==undefined?0:poP["TE"]);var _grd=(poP["grd"]==undefined?"grdLC":poP["grd"]);var _oi=(poP["oi"]==undefined?"":poP["oi"]);var _yi=(poP["yi"]==undefined?"":poP["yi"]);var _cs=(poP["cs"]==undefined?true:poP["cs"]);var _nuk=(poP["nuk"]==undefined?"":poP["nuk"]);
	if(_oi!=""){if(fextpub_uamoBtn("",poP["oi"],_comp)){return false;}}
	if(fjsIn_array(_TE,[2,3])){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}}fext_mask(_comp);
	fext_CC("log.ComprasE14");var _w=fext_CW("log.ComprasE14");
	_w.setTE(_TE);_w.setMI(poP["mi"]);if(_yi!=""){fext_SV(_w,"year_id",_yi);}if(_cs){_w.setCS(fext_GS(_comp,_grd));}
	if(fjsIn_array(_TE,[2,3])){_w.setCÑ(_r.data.comp_key);}if(_nuk=="NoT"){_w.setNUK("NoT");}_w.show();fext_unmask(_comp);
}
});