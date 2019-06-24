Ext.define("Siace.controller.log.SalRR",{extend:"Ext.app.Controller",
lsr:function(btn){var _p=btn.up("#pan");var _pan=_p.up("log_salr");var _TE=(fext_btnTE(btn)=="Pdf"?32:33);var _vs=fextpub_sessVar();
	if(!_p.down("#fechaini").isValid()){fext_msgA("Fecha Inicial NO es Válida",_p.down("#fechaini"));return false;}
	if(!_p.down("#fechafin").isValid()){fext_msgA("Fecha Final NO es Válida",_p.down("#fechafin"));return false;}
	var _mi=_pan.getMI();var _tr=fext_GV(_p,"rep_id");var _fechi=_p.down("#fechaini").getSubmitValue();var _fechf=_p.down("#fechafin").getSubmitValue();
	var _ak=fext_GV(_p,"area_key");var _tk=fext_GV(_p,"tarea_key");var _ffi=fext_GV(_p,"fuefin_id");var _tri=fext_GV(_p,"tiprecur_id");var _edi=fext_GV(_p,"espedet_id");
	var _bst_id=fext_GV(_p,"bst_id")*1;var _bsg_id=fext_GV(_p,"bsg_id")*1;var _bsc_id=fext_GV(_p,"bsc_id")*1;var _bsf_id=fext_GV(_p,"bsf_id")*1;

	var _param="&xxYear_id="+fext_GV(_p,"year_id")+"&xxFechaini="+_fechi+"&xxFechafin="+_fechf+"&xxArea_key="+(Ext.isEmpty(_ak)?"":_ak)+"&xxArea_nombre="+_p.down("#area_key").getRawValue()+"&xxMeta_id="+fext_GV(_p,"meta_id")+"&xxSecfunc_codename="+fext_GRV(_p,"meta_id")+"&xxTarea_key="+(Ext.isEmpty(_tk)?"":_tk)+"&xxTarea_codename="+fext_GRV(_p,"tarea_key")+"&xxFuefin_id="+(Ext.isEmpty(_ffi)?0:_ffi)+"&xxFuefin_codename="+fext_GRV(_p,"fuefin_id")+"&xxTiprecur_id="+(Ext.isEmpty(_tri)?0:_tri)+"&xxTiprecur_codename="+fext_GRV(_p,"tiprecur_id")+"&xxEspedet_id="+(Ext.isEmpty(_edi)?0:_edi)+"&xxEspedet_codename="+fext_SRV(_p,"espedet_id")+"&xxTrabj_key="+fext_GV(_p,"trabj_key")+"&xxIndiv_dni="+fext_GV(_p,"indiv_dni")+"&xxIndiv_apenom="+fext_GV(_p,"indiv_apenom");
	var _sess="&zzUsursess_key="+_vs["us"]+"&zzUsuracce_key="+_vs["ua"]+"&zzYear_id="+_vs["y"]+"&zzArea_key="+_vs["a"]+"&xxMenu_id="+_mi+"&xxOpc_id="+_TE;

	if(fjsIn_array(_tr,["REP","REPxUO"])){var _title="Reporte Salida de Bienes";
		fext_pdf("",_title,"php/pdf/pdf_logistics_salidas_report.php?xxType_record="+_tr+_param+_sess,_pan.down("#tpn"));
	}else if(fjsIn_array(_tr,["REPDET"])){var _title="Reporte Detallado de Salidas";
		fext_pdf("",_title,"php/pdf/pdf_logistics_salidas_report.php?xxType_record="+_tr+_param+_sess,_pan.down("#tpn"));
	}
}
});