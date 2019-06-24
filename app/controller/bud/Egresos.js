Ext.define("Siace.controller.bud.Egresos",{extend:"Ext.app.Controller",
be_Fases:function(poP){var _comp=poP["comp"];var _grd=(poP["grd"]==undefined?"grdBE":poP["grd"]);var _oi=(poP["oi"]==undefined?5029:poP["oi"]);
	if(fextpub_uamoBtn("",_oi,_comp)){return false;}var _r=fext_grdSR(_comp,_grd); if(!_r){return false;}fext_mask(_comp);
	fext_CC("siaf.Expediente_SecuenciaB");var _w=fext_CW("siaf.Expediente_SecuenciaB");
	fext_SV(_w,"tablex",2020);_w.setCK(_r.data.egre_key);fext_SV(_w,"expe_nro",_r.data.expe_nro);_w.setTitle("Fases Expediente ["+_r.data.expe_nro+"] ::.");_w.show();fext_unmask(_comp);
},
be_Printer:function(poP){var _comp=poP["comp"];var _grd=(poP["grd"]==undefined?"grdBE":poP["grd"]);var _mi=(poP["mi"]==undefined?0:poP["mi"]);
	if(fextpub_uamoBtn("",poP["oi"],_comp)){return false;}var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}_tit=(_r.data.egre_documento);
	fext_pdf("",_tit,"php/pdf/pdf_treasury_egresos_printer.php?xxEgre_key="+_r.data.egre_key+"&xxType_record=printer&xxMenu_id="+_mi+"&xxOpc_id="+poP["oi"]);
},
be_View:function(poP){var _comp=poP["comp"];var _grd=(poP["grd"]==undefined?"grdBE":poP["grd"]);var _TE=(poP["TE"]==undefined?0:poP["TE"]);var _mi=(poP["mi"]==undefined?0:poP["mi"]);var _nuk=(poP["nuk"]==undefined?"":poP["nuk"]);var _yi=(poP["yi"]==undefined?"":poP["yi"]);var _cs=(poP["cs"]==undefined?true:poP["cs"]);
	if(fextpub_uamoBtn("",poP["oi"],_comp)){return false;}if(fjsIn_array(_TE,[2,3])){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}}fext_mask(_comp);
	fext_CC("bud.EgresosE");var _w=fext_CW("bud.EgresosE");_w.setTE(_TE);_w.setMI(_mi);
	if(_yi!=""){fext_SV(_w,"year_id",_yi);}if(_cs){_w.setCS(fext_GS(_comp,_grd));}
	if(fjsIn_array(_TE,[2,3])){_w.setCK(_r.data.egre_key);}if(_nuk=="NoT"){_w.setNoUsk("NoT");}_w.show();fext_unmask(_comp);
}
});