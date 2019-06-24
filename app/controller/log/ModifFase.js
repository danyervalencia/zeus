Ext.define("Siace.controller.log.ModifFase",{extend:"Ext.app.Controller",
lmf_Printer:function(poP){var _comp=poP["comp"];var _key=(Ext.isEmpty(poP["key"])?"":poP["key"]);var _grd=(poP["grd"]==undefined?"grdLM":poP["grd"]);var _mi=(poP["mi"]==undefined?0:poP["mi"]);var _oi=(poP["oi"]==undefined?5002:poP["oi"]);var _tit=(poP["tit"]==undefined?1:poP["tit"]);
	if(fextpub_uamoBtn("",_oi,_comp)){return false;}
	if(_key==""){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}_key=_r.data.modif_key;}
	_tit="Fases &nbsp;"+(_tit==1?_r.data.modif_documento:(_tit==2?_r.data.doc_abrev+"/ "+_r.data.modif_documento:_tit));
	fext_pdf("",_tit,"php/pdf/pdf_logistics_modificaciones_fases_printer.php?xxModif_key="+_key+"&xxType_record=printer&xxMenu_id="+_mi+"&xxOpc_id="+_oi);
}
});