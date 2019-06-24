Ext.define("Siace.controller.bud.NotaFase",{extend:"Ext.app.Controller",
bnf_Printer:function(poP){var _cp=poP["comp"];var _grd=(poP["grd"]==undefined?"grdBN":poP["grd"]);var _mi=(poP["mi"]==undefined?0:poP["mi"]);var _oi=(poP["oi"]==undefined?5002:poP["oi"]);var _tit=(poP["tit"]==undefined?1:poP["tit"]);
	if(fextpub_uamoBtn("",_oi,_cp)){return false;}var _r=fext_grdSR(_cp,_grd);if(!_r){return false;}
	_tit="Fases &nbsp;"+(_tit==1?_r.data.nota_documento:(_tit==2?_r.data.doc_abrev+"/ "+_r.data.nota_documento:_tit));
	fext_pdf("",_tit,"php/pdf/pdf_budget_notas_fases_printer.php?xxNota_key="+_r.data.nota_key+"&xxType_record=printer&xxMenu_id="+_mi+"&xxOpc_id="+_oi);
}
});