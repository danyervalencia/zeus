Ext.define("Siace.controller.log.PedBCV",{extend:"Ext.app.Controller",
lpb:function(poP){var _comp=poP["comp"];var _TE=poP["TE"];var _grd=(poP["grd"]==undefined?"grdLP":poP["grd"]);var _yi=poP["yi"];var _cs=(poP["cs"]==undefined?true:poP["cs"]);var _tit=(poP["tit"]==undefined?2:poP["tit"]);
	if(fextpub_uamoBtn("",poP["oi"],_comp)){return false;}if(fjsIn_array(_TE,[0,2,3,12,59])){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}_key=_r.data.ped_key;}fext_mask(_comp);
	if(_TE==0){Ext.Ajax.request({url:"php/logistics_pedidos_json_records.php",params:{xxPed_key:_key,ssNO_USK:"NoT",xxType_record:"titleETTR",vs:fext_JE(fextpub_sessVar())},success:function(resp,opts){var _res=fext_DJ("",resp);fext_pdf("",_res.data[0].ped_title,"php/pdf/pdf_logistics_pedidos_ettr_printer.php?xxPed_key="+_key+"&xxType_record=printer");}});}
	else if(_TE==59){fext_CC("log.PedidosAtt");var _w=fext_CW("log.PedidosAtt");_w.setCK(_key);fext_SV(_w,"ped_documento",_r.data.ped_documento);fext_SV(_w,"doc_abrev",_r.data.doc_abrev);fext_SV(_w,"ped_document","Requerimiento  &nbsp; [ "+_r.data.ped_documento+" ]");_w.show();}
	else{fext_CC("log.PedidosEBC");var _w=fext_CW("log.PedidosEBC");_w.setTE(_TE);_w.setMI(poP["mi"]);if(_yi!=""){fext_SV(_w,"year_id",_yi);}if(_cs){_w.setCS(fext_GS(_comp,_grd));}if(fjsIn_array(_TE,[2,3,12])){_w.setCK(_key);}_w.show();fext_unmask(_comp);}fext_unmask(_comp);
}
});