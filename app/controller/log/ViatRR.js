Ext.define("Siace.controller.log.ViatRR",{extend:"Ext.app.Controller",
lvr:function(btn){var _p=btn.up("#pan");var _pan=_p.up("log_viatr");var _TE=(fext_btnTE(btn)=="Pdf"?32:33);var _vs=fextpub_sessVar();
	if(!_p.down("#fechaini").isValid()){fext_MsgA("Fecha Inicial NO es Válida",_p.down("#fechaini"));return false;}
	if(!_p.down("#fechafin").isValid()){fext_MsgA("Fecha Final NO es Válida",_p.down("#fechafin"));return false;}
	var _mi=_pan.getMI();var _tr=fext_GV(_p,"rep_id");var _fechi=_p.down("#fechaini").getSubmitValue();var _fechf=_p.down("#fechafin").getSubmitValue();
	var _ak=fext_GV(_p,"area_key");var _tk=fext_GV(_p,"tarea_key");var _ffi=fext_GV(_p,"fuefin_id");var _tri=fext_GV(_p,"tiprecur_id");var _edi=fext_GV(_p,"espedet_id");
	var _trabj_key=fext_GV(_p,"trabj_key");var _indiv_apenom=fext_GV(_p,"indiv_apenom");
	var _param="&xxYear_id="+fext_GV(_p,"year_id")+"&xxFechaini="+_fechi+"&xxFechafin="+_fechf+"&xxArea_key="+(Ext.isEmpty(_ak)?"":_ak)+"&xxArea_nombre="+_p.down("#area_key").getRawValue()+"&xxMeta_id="+fext_GV(_p,"meta_id")+"&xxSecfunc_codename="+_p.down("#meta_id").getRawValue()+"&xxTarea_key="+(Ext.isEmpty(_tk)?"":_tk)+"&xxTarea_codename="+_p.down("#tarea_key").getRawValue()+"&xxFuefin_id="+(Ext.isEmpty(_ffi)?0:_ffi)+"&xxFuefin_codename="+_p.down("#fuefin_id").getRawValue()+"&xxTiprecur_id="+(Ext.isEmpty(_tri)?0:_tri)+"&xxTiprecur_codename="+_p.down("#tiprecur_id").getRawValue()+"&xxEspedet_id="+(Ext.isEmpty(_edi)?0:_edi)+"&xxEspedet_codename="+_p.down("#espedet_id").getRawValue()+"&xxTrabj_key="+_trabj_key+"&xxIndiv_apenom="+_indiv_apenom;
	var _sess="&zzUsursess_key="+_vs["us"]+"&zzUsuracce_key="+_vs["ua"]+"&zzYear_id="+_vs["y"]+"&zzArea_key="+_vs["a"]+"&xxMenu_id="+_mi+"&xxOpc_id="+_TE;
	if(fjsIn_array(_tr,["REP"])){var _tit="Reporte de Viáticos"; 
		fext_pdf("",_tit,"php/pdf/pdf_logistics_viaticos_report.php?xxType_record="+_tr+_param+_sess,_pan.down("#tpn"));
	}else if(fjsIn_array(_tr,["REPORT_ORDEN"])){var _tit="Reporte de Requerimientos"; 
		//fext_pdf("",_tit,"php/pdf/pdf_logistics_pedidos_report_orden.php?xxType_record="+_tr+_param+_sess,_pan.down("#tpn"));
	}else if(fjsIn_array(_tr,["REPORT_DETxTAREA"])){var _tit="Reporte Requerimientos - Detalle"; 
		//fext_pdf("",_tit,"php/pdf/pdf_logistics_pedidos_report_detxtarea.php?xxType_record="+_tr+_param+_sess,_pan.down("#tpn"));
	}
}
});