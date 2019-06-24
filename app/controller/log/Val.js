Ext.define("Siace.controller.log.Val",{extend:"Ext.app.Controller",
lv_View:function(poP){var _comp=poP["comp"];var _grd=(poP["grd"]==undefined?"grdLV":poP["grd"]);var _TE=(poP["TE"]==undefined?0:poP["TE"]);var _mi=(poP["mi"]==undefined?0:poP["mi"]);var _yi=(poP["yi"]==undefined?"":poP["yi"]);var _tit=(poP["tit"]==undefined?2:poP["tit"]);
	var _cs=(poP["cs"]==undefined?true:poP["cs"]);var _nuk=(poP["nuk"]==undefined?"":poP["nuk"]);if(fextpub_uamoBtn("",poP["oi"],_comp)){return false;}
	if(fjsIn_array(_TE,[2,3])){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}}fext_mask(_comp);
	fext_CC("log.ValesE");var _w=fext_CW("log.ValesE");_w.setTE(_TE);_w.setMI(_mi);
	if(_yi!=""){fext_SV(_w,"year_id",_yi);}if(_cs){_w.setCS(fext_GS(_comp,_grd));}if(fjsIn_array(_TE,[2,3])){_w.setCK(_r.data.val_key);}if(_nuk=="NoT"){_w.setNUK("NoT");}
	_w.show();fext_unmask(_comp);
}
});