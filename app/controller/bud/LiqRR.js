Ext.define("Siace.controller.bud.LiqRR",{extend:"Ext.app.Controller",
blr:function(btn){var _p=btn.up("#pan");var _pan=_p.up("bud_liqr");var _TE=(fext_btnTE(btn)=="Pdf"?32:33);var _vs=fextpub_sessVar();
	if(!_p.down("#fechaini").isValid()){fext_MsgA("Fecha Inicial NO es Válida",_p.down("#fechaini"));return false;}
	if(!_p.down("#fechafin").isValid()){fext_MsgA("Fecha Final NO es Válida",_p.down("#fechafin"));return false;}
	var _mi=_pan.getMI();var _tr=fext_GV(_p,"rep_id");var _tit=fext_GRV(_p,"rep_id");var _fechi=_p.down("#fechaini").getSubmitValue();var _fechf=_p.down("#fechafin").getSubmitValue();
	if(fext_IE(_p,"proy_code")){fext_MsgA("Debe indicar el proyecto");return false;}
	var _yi=fext_GV(_p,"year_id");var _ak=fext_GV(_p,"area_key");var _mei=fext_GV(_p,"meta_id");var _ffi=fext_GV(_p,"fuefin_id");var _edi=fext_GV(_p,"espedet_id");
	var _bst_id=fext_GV(_p,"bst_id")*1;var _bsg_id=fext_GV(_p,"bsg_id")*1;var _bsc_id=fext_GV(_p,"bsc_id")*1;var _bsf_id=fext_GV(_p,"bsf_id")*1;

	var _param="&xxYear_id="+(Ext.isEmpty(_yi)?"":_yi)+"&xxProy_code="+fext_GV(_p,"proy_code")+"&xxProy_nombre="+fext_GV(_p,"proy_nombre")+"&xxFechaini="+_fechi+"&xxFechafin="+_fechf+"&xxMeta_id="+(Ext.isEmpty(_mei)?"":_mei)+"&xxSecfunc_codename="+fext_GRV(_p,"meta_id")+"&xxFuefin_id="+(Ext.isEmpty(_ffi)?0:_ffi)+"&xxFuefin_codename="+fext_GRV(_p,"fuefin_id")+"&xxPers_key="+fext_GV(_p,"pers_key")+"&xxPers_ruc="+fext_GV(_p,"pers_ruc")+"&xxPers_nombre="+fext_GV(_p,"pers_nombre")+"&xxBst_id="+_bst_id+"&xxBst_code="+fext_GRV(_p,"bst_id")+"&xxBsg_id="+_bsg_id+"&xxBsg_codename="+fext_GRV(_p,"bsg_id")+"&xxBsc_id="+_bsc_id+"&xxBsc_codename="+fext_GRV(_p,"bsc_id")+"&xxBsf_id="+_bsf_id+"&xxBsf_codename="+fext_GRV(_p,"bsf_id");
	var _sess="&zzUsursess_key="+_vs["us"]+"&zzUsuracce_key="+_vs["ua"]+"&zzYear_id="+_vs["y"]+"&zzArea_key="+_vs["a"]+"&xxMenu_id="+_mi+"&xxOpc_id="+_TE;

	var _rep=(_tr.substr(0,3)=="REP"?_tr.substr(4):_tr).toLowerCase();
	fext_pdf("",_tit,"php/pdf/pdf_budget_liquidaciones_"+_rep+".php?xxType_record="+_tr+_param+_sess,_pan.down("#tpn"));
}
});