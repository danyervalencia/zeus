Ext.define("Siace.controller.log.Valorizaciones",{extend:"Ext.app.Controller",
lv_Printer:function(poP){var _comp=poP["comp"];var _grd=(poP["grd"]==undefined?"grdLV":poP["grd"]);var _mi=(poP["mi"]==undefined?"0":poP["mi"]);var _oi=(poP["oi"]==undefined?8:poP["oi"]);
	if(fextpub_uamoBtn(_comp.down("#opc_id"),_oi)){return false;} var _r=fext_grdSR(_comp.down("#"+_grd)); if(!_r){return false;}
	_tit=_r.data.valrz_documento;var _vs=fextpub_sessVar();
	fext_pdf("",_tit,"php/pdf/pdf_logistics_valorizaciones_printer.php?xxValrz_key="+_r.data.valrz_key+"&xxType_record=printer&zzUsursess_key="+_vs["us"]+"&zzUsuracce_key="+_vs["ua"]+"&zzYear_id="+_vs["y"]+"&zzArea_key="+_vs["a"]+"&xxMenu_id="+_mi+"&xxOpc_id="+_oi);
},
lv_View:function(poP){var _comp=poP["comp"];var _grd=(poP["grd"]==undefined?"grdLV":poP["grd"]);var _TE=(poP["te"]==undefined?"0":poP["te"]);var _mi=(poP["mi"]==undefined?0:poP["mi"]);var _yi=(poP["yi"]==undefined?"":poP["yi"]);var _tit=(poP["tit"]==undefined?2:poP["tit"]);var _cs=(poP["cs"]==undefined?true:poP["cs"]);
	if(fextpub_uamoBtn(_comp.down("#opc_id"),poP["oi"])){return false;}
	if(fjsIn_array(_TE,[2,3])){var _r=fext_grdSR(_comp.down("#"+_grd));if(!_r){return false;}}fext_mask(_comp);
	fext_CC("log.ValorizacionesEdit");var _w=fext_CW("log.ValorizacionesEdit");_w.setTE(_TE);_w.setMI(_mi);
	if(_yi!=""){_w.down("#year_id").setValue(_yi);}if(_cs){_w.setCS(_comp.down("#"+_grd).getStore());}if(fjsIn_array(_TE,[2,3])){_w.setCK(_r.data.sal_key);}
	_w.show();fext_unmask(_comp);
},
});