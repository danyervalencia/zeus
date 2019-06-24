Ext.define("Siace.controller.log.AlmaRR",{extend:"Ext.app.Controller",
lar:function(btn){var _p=btn.up("#pan");var _pan=_p.up("log_almar");var _TE=(fext_btnTE(btn)=="Pdf"?32:33);var _vs=fextpub_sessVar();
	if(fext_IE(_p,"fechaini")){fext_msgA("Debe indicar Fecha Inicial",_p.down("#fechaini"));return false;}
	if(!_p.down("#fechaini").isValid()){fext_msgA("Fecha Inicial NO es Válida",_p.down("#fechaini"));return false;}
	if(!_p.down("#fechafin").isValid()){fext_msgA("Fecha Final NO es Válida",_p.down("#fechafin"));return false;}
	var _mi=_pan.getMI();var _tr=fext_GV(_p,"rep_id");var _fechi=_p.down("#fechaini").getSubmitValue();var _fechf=_p.down("#fechafin").getSubmitValue();
	var _ak=fext_GV(_p,"alma_key");
	var _bsg_id=fext_GV(_p,"bsg_id")*1;var _bsc_id=fext_GV(_p,"bsc_id")*1;var _bsf_id=fext_GV(_p,"bsf_id")*1;

	var _param="&xxFechaini="+_fechi+"&xxFechafin="+_fechf+"&xxAlma_key="+(Ext.isEmpty(_ak)?"":_ak)+"&xxAlma_nombre="+fext_GRV(_p,"alma_key")+"&xxMeta_id="+fext_GV(_p,"meta_id")+"&xxSecfunc_codename="+fext_GRV(_p,"meta_id");
	var _sess="&zzUsursess_key="+_vs["us"]+"&zzUsuracce_key="+_vs["ua"]+"&zzYear_id="+_vs["y"]+"&zzArea_key="+_vs["a"]+"&xxMenu_id="+_mi+"&xxOpc_id="+_TE;

	console.log(_tr);
	if(fjsIn_array(_tr,["REP_STKCON"])){var _tit="Reporte Stock Consolidado";
		fext_pdf("",_tit,"php/pdf/pdf_logistics_almacenes_report_stkcon.php?xxType_record="+_tr+_param+_sess,_pan.down("#tpn"));
	}
}
});