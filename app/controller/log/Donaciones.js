Ext.define("Siace.controller.log.Donaciones",{extend:"Ext.app.Controller",
ld_DF:function(poR){if(poR.data.dona_file1!=""){var _src="php/resources/download_file.php?xxSchema_table=logistics.donaciones&xxTable_field=dona_key&xxRecord_key="+poR.data.dona_key+"&xxTable=logistics_donaciones&xxField=file1&xxRecord_id=dona_id&xxRecord_field=dona_file1";fext_FileDownload(undefined,_src);}},
ld_Printer:function(poP){},
ld_SP:function(poC,pcType){fext_fieldSearch(pcType,poC,["pers_key","PERS_RUC","pers_ruc","pers_nombre"],["php/public_personas_json_records.php","xxPers_ruc","textfield_search",""],"0",["","",["pers_ruc"],""],"");},
ld_View:function(poP){var _comp=poP["comp"];var _TE=(poP["TE"]==undefined?0:poP["TE"]);var _mi=(poP["mi"]==undefined?0:poP["mi"]);var _oi=(poP["oi"]==undefined?"":poP["oi"]);var _tit=(poP["tit"]==undefined?"":poP["tit"]);var _cs=(poP["cs"]==undefined?true:poP["cs"]);var _nuk=(poP["nuk"]==undefined?"":poP["nuk"]);var _grd=(poP["grd"]==undefined?"grdLD":poP["grd"]);
	if(_oi!=""){if(fextpub_uamoBtn("",_oi,_comp)){return false;}}if(fjsIn_array(_TE,[2,3])){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}}fext_mask(_comp);
	fext_CC("log.DonacionesE");var _w=fext_CW("log.DonacionesE");_w.setTE(_TE);_w.setMI(_mi);
	if(_cs){_w.setCS(fext_GS(_comp,_grd));}if(fjsIn_array(_TE,[2,3])){_w.setCK(_r.data.dona_key);}if(_nuk=="NoT"){_w.setNUK("NoT");}_w.show();fext_unmask(_comp);
}
});