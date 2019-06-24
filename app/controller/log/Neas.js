Ext.define("Siace.controller.log.Neas",{extend:"Ext.app.Controller",
ln_Printer:function(poP){var _comp=poP["comp"];var _grd=(poP["grd"]==undefined?"grdLN":poP["grd"]);var _mi=(poP["mi"]==undefined?"0":poP["mi"]);var _oi=(poP["oi"]==undefined?8:poP["oi"]);
	if(fextpub_uamoBtn("",_oi,_comp)){return false;}var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}_tit=_r.data.nea_documento;
	fext_pdf("",_tit,"php/pdf/pdf_logistics_neas_printer.php?xxNea_key="+_r.data.nea_key+"&xxType_record=printer&xxMenu_id="+_mi+"&xxOpc_id="+_oi);
},
ln_View:function(poP){var _comp=poP["comp"];var _grd=(poP["grd"]==undefined?"grdLN":poP["grd"]);var _TE=(poP["TE"]==undefined?0:poP["TE"]);var _mi=(poP["mi"]==undefined?0:poP["mi"]);var _oi=(poP["oi"]==undefined?"":poP["oi"]);var _yi=(poP["yi"]==undefined?"":poP["yi"]);var _cs=(poP["cs"]==undefined?true:poP["cs"]);var _nuk=(poP["nuk"]==undefined?"":poP["nuk"]);
	if(_oi!=""){if(fextpub_uamoBtn("",_oi,_comp)){return false;}}if(_TE==1){if(Ext.isEmpty(poP["tni"])||poP["tni"]*1<=0){return false;}}
	if(fjsIn_array(_TE,[2,3])){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}}fext_mask(_comp);
	fext_CC("log.NeasE");var _w=fext_CW("log.NeasE");_w.setTE(_TE);_w.setMI(_mi);if(_cs){_w.setCS(fext_GS(_comp,_grd));}
	if(_yi!=""){fext_SV(_w,"year_id",_yi);}if(_TE==1){_w.setTN(poP["tni"]);}if(fjsIn_array(_TE,[2,3])){_w.setCK(_r.data.nea_key);}
	_w.show();fext_unmask(_comp);
}
});