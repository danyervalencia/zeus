Ext.define("Siace.controller.log.PedFase",{extend:"Ext.app.Controller",
lpf_Printer:function(poP){var _comp=poP["comp"];var _key=(Ext.isEmpty(poP["key"])?"":poP["key"]);var _grd=(poP["grd"]==undefined?"grdLP":poP["grd"]);var _mi=(poP["mi"]==undefined?_comp.down("#menu_id").getValue():poP["mi"]);var _oi=(poP["oi"]==undefined?5002:poP["oi"]);var _tit=(poP["tit"]==undefined?2:poP["tit"]);
	if(fextpub_uamoBtn("",_oi,_comp)){return false;}var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}var _d=_r.data;_key=_d.ped_key;
	_tit="Fases &nbsp;"+(_tit==1?_d.ped_documento:(_tit==2?_d.doc_abrev+"/ "+_d.ped_documento:_tit));
	fext_pdf("",_tit,"php/pdf/pdf_logistics_pedidos_fases_printer.php?xxPed_key="+_key+"&xxType_record=printer&xxMenu_id="+_mi+"&xxOpc_id="+_oi);
}
});