Ext.define("Siace.controller.log.Fichas",{extend:"Ext.app.Controller",
lf_Printer:function(poP){var _comp=poP["comp"]; var _key=(Ext.isEmpty(poP["key"])?"":poP["key"]);var _grd=(poP["grid"]==undefined?"grdLP":poP["grid"]);var _mi=(poP["menu_id"]==undefined?0:poP["menu_id"]);var _oi=(poP["opc_id"]==undefined?8:poP["opc_id"]);var _title=(poP["title"]==undefined?2:poP["title"]);
	if(fextpub_uamoBtn(_comp.down("#opc_id"),_oi)){return false;}
	if(_key==""){var _rec=fext_grdSR(_comp.down("#"+_grd));if(!_rec){return false;}_key=_rec.data.ped_key;}
	_title=(_title==1?_rec.data.ped_documento:(_title==2?_rec.data.doc_abrev+"/ "+_rec.data.ped_documento:_title));var _vs=fextpub_sessVar();
	fext_pdf("",_title,"php/pdf/pdf_logistics_pedidos_printer.php?xxPed_key="+_key+"&xxType_record=printer&zzUsursess_key="+_vs["us"]+"&zzUsuracce_key="+_vs["ua"]+"&zzYear_id="+_vs["y"]+"&zzArea_key="+_vs["a"]+"&xxMenu_id="+_mi+"&xxOpc_id="+_oi);
},
lf_View:function(poP){var _comp=poP["comp"];var _TE=(poP["type_edit"]==undefined?0:poP["type_edit"]);var _key=(Ext.isEmpty(poP["key"])?"":poP["key"]); var _grd=(poP["grid"]==undefined?"grdLF":poP["grid"]); var _mi=(poP["menu_id"]==undefined?"0":poP["menu_id"]); var _oi=(poP["opc_id"]==undefined?"":poP["opc_id"]); var _year_id=(poP["year_id"]==undefined?"":poP["year_id"]); var _cs=(poP["call_store"]==undefined?true:poP["call_store"]);var _title=(poP["title"]==undefined?2:poP["title"]);var _no_usk=(poP["no_usk"]==undefined?"":poP["no_usk"]);
	if(_oi!=""){if(fextpub_uamoBtn(_comp.down("#opc_id"),_oi)){return false;}}var _cg=(Ext.isEmpty(poP["compg"])?_comp:poP["compg"]);
	if(fjsIn_array(_TE,[2,3])&&_key==""){var _rec=fext_grdSR(_cg.down("#"+_grd)); if(!_rec){return false;} _key=_rec.data.fich_key;}fext_mask(_comp);
	fext_CC("log.FichasEdit");var _win=fext_CW("log.FichasEdit");_win.setTypeEdit(_TE);_win.setMenuId(_mi);
	if(_year_id!=""){_win.down("#year_id").setValue(_year_id);}
	if(_cs){_win.setCallStore(_cg.down("#"+_grd).getStore());}
	if(fjsIn_array(_TE,[2,3])){_win.setCallKey(_rec.data.fich_key);}
	if(fjsIn_array(_TE,[23])||_no_usk=="NoT"){_win.setNoUsk("NoT");}
	_win.show();fext_unmask(_comp);
}
});