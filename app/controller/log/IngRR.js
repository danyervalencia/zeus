Ext.define("Siace.controller.log.IngRR",{extend:"Ext.app.Controller",
lir:function(btn){var _p=btn.up("#pan");var _pan=_p.up("log_ingr");var _TE=(fext_btnTE(btn)=="Pdf"?32:33);var _vs=fextpub_sessVar();
	if(!_p.down("#fechaini").isValid()){fext_MsgA("Fecha Inicial NO es Válida",_p.down("#fechaini"));return false;}
	if(!_p.down("#fechafin").isValid()){fext_MsgA("Fecha Final NO es Válida",_p.down("#fechafin"));return false;}
	var _mi=_pan.getMI();var _tr=fext_GV(_p,"rep_id");var _yi=fext_GV(_p,"year_id")*1;var _fechi=_p.down("#fechaini").getSubmitValue();var _fechf=_p.down("#fechafin").getSubmitValue();
	var _ak=fext_GV(_p,"area_key");var _mei=fext_GV(_p,"meta_id")*1;var _tk=fext_GV(_p,"tarea_key");var _ffi=fext_GV(_p,"fuefin_id")*1;var _tri=fext_GV(_p,"tiprecur_id")*1;var _edi=fext_GV(_p,"espedet_id")*1;
	var _bst_id=fext_GV(_p,"bst_id")*1;var _bsg_id=fext_GV(_p,"bsg_id")*1;var _bsc_id=fext_GV(_p,"bsc_id")*1;var _bsf_id=fext_GV(_p,"bsf_id")*1;
	var _param="&xxYear_id="+_yi+"&xxFechaini="+_fechi+"&xxFechafin="+_fechf+"&xxArea_key="+(Ext.isEmpty(_ak)?"":_ak)+"&xxArea_nombre="+_p.down("#area_key").getRawValue()+"&xxMeta_id="+fext_GV(_p,"meta_id")+"&xxSecfunc_codename="+_p.down("#meta_id").getRawValue()+"&xxTarea_key="+(Ext.isEmpty(_tk)?"":_tk)+"&xxTarea_codename="+_p.down("#tarea_key").getRawValue()+"&xxFuefin_id="+(Ext.isEmpty(_ffi)?0:_ffi)+"&xxFuefin_codename="+_p.down("#fuefin_id").getRawValue()+"&xxTiprecur_id="+(Ext.isEmpty(_tri)?0:_tri)+"&xxTiprecur_codename="+_p.down("#tiprecur_id").getRawValue()+"&xxEspedet_id="+(Ext.isEmpty(_edi)?0:_edi)+"&xxEspedet_codename="+_p.down("#espedet_id").getRawValue();
	var _sess="&zzUsursess_key="+_vs["us"]+"&zzUsuracce_key="+_vs["ua"]+"&zzYear_id="+_vs["y"]+"&zzArea_key="+_vs["a"]+"&xxMenu_id="+_mi+"&xxOpc_id="+_TE;
	
	if(fjsIn_array(_tr,["REP"])){var _tit="Reporte Recepciones"; 
		fext_pdf("",_tit,"php/pdf/pdf_logistics_ingresos_report.php?xxType_record="+_tr+_param+_sess,_pan.down("#tpn"));
	}else if(fjsIn_array(_tr,["REPORDEN","REPORDEN_RECEP"])){var _tit=(_tr=="REPORDEN"?"Reporte Req-Orden":"Reporte Req-Orden-Recep");
		fext_pdf("",_tit,"php/pdf/pdf_logistics_pedidos_report_orden.php?xxType_record="+_tr+_param+_sess,_pan.down("#tpn"));
	}else if(fjsIn_array(_tr,["REPDETxTAREA"])){var _tit="Reporte Req-Detalle";
		fext_pdf("",_tit,"php/pdf/pdf_logistics_pedidos_report_detxtarea.php?xxType_record="+_tr+_param+_sess,_pan.down("#tpn"));
	}else if(fjsIn_array(_tr,["REPCLASIF"])){var _tit="Reporte x Clasificador";
		fext_pdf("",_tit,"php/pdf/pdf_logistics_pedidos_report_clasif.php?xxType_record="+_tr+_param+_sess,_pan.down("#tpn"));
	}else if(fjsIn_array(_tr,["REPDET"])){var _tit="Reporte Detallado de Requerimientos";
		fext_pdf("", _tit, "php/pdf/pdf_logistics_pedidos_report.php?xxType_record="+_tr+_param+_sess,_pan.down("#tpn"));
	}
}
});