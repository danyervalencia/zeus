Ext.define("Siace.controller.log.PedBCC",{extend:"Ext.app.Controller",
lpb:function(poP){var _comp=poP["comp"];var _grd=(poP["grd"]==undefined?"grdLP":poP["grd"]);var _mi=(poP["mi"]==undefined?0:poP["mi"]);var _oi=(poP["oi"]==undefined?5023:poP["oi"]);var _tit=(poP["tit"]==undefined?2:poP["tit"]);
	if(fextpub_uamoBtn("",_oi,_comp)){return false;}var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}
	_tit="C.C. "+(_tit==1?_r.data.ped_documento:(_tit==2?_r.data.doc_abrev+"/ "+_r.data.ped_documento:_tit));var _vs=fextpub_sessVar();
	fext_pdf("",_tit,"php/pdf/pdf_logistics_pedidos_comparative.php?xxPed_key="+_r.data.ped_key+"&zzUsursess_key="+_vs["us"]+"&zzUsuracce_key="+_vs["ua"]+"&zzYear_id="+_vs["y"]+"&zzArea_key="+_vs["a"]+"&xxMenu_id="+_mi+"&xxOpc_id="+_oi);
}
});