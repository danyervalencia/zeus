Ext.define("Siace.controller.log.OrdenRR",{extend:"Ext.app.Controller",
lor:function(btn){var _p=btn.up("#pan");var _pan=_p.up("log_ordenr");var _TE=(fext_btnTE(btn)=="Pdf"?32:33);var _vs=fextpub_sessVar();
	if(!_p.down("#fechaini").isValid()){fext_msgA("Fecha Inicial NO es Válida",_p.down("#fechaini"));return false;}
	if(!_p.down("#fechafin").isValid()){fext_msgA("Fecha Final NO es Válida",_p.down("#fechafin"));return false;}
	var _mi=_pan.getMI();var _tr=fext_GV(_p,"rep_id");var _fechi=_p.down("#fechaini").getSubmitValue();var _fechf=_p.down("#fechafin").getSubmitValue();
	var _ak=fext_GV(_p,"area_key");var _tk=fext_GV(_p,"tarea_key");var _ffi=fext_GV(_p,"fuefin_id");var _tri=fext_GV(_p,"tiprecur_id");var _edi=fext_GV(_p,"espedet_id");
	var _bst_id=fext_GV(_p,"bst_id")*1;var _bsg_id=fext_GV(_p,"bsg_id")*1;var _bsc_id=fext_GV(_p,"bsc_id")*1;var _bsf_id=fext_GV(_p,"bsf_id")*1;

	var _param="&xxYear_id="+fext_GV(_p,"year_id")+"&xxFechaini="+_fechi+"&xxFechafin="+_fechf+"&xxDoc_id="+fext_GV(_p,"doc_id")+"&xxDoc_nombre="+fext_GRV(_p,"doc_id")+"&xxArea_key="+(Ext.isEmpty(_ak)?"":_ak)+"&xxArea_nombre="+fext_GRV(_p,"area_key")+"&xxMeta_id="+fext_GV(_p,"meta_id")+"&xxSecfunc_codename="+fext_GRV(_p,"meta_id")+"&xxTarea_key="+(Ext.isEmpty(_tk)?"":_tk)+"&xxTarea_codename="+fext_GRV(_p,"tarea_key")+"&xxFuefin_id="+(Ext.isEmpty(_ffi)?0:_ffi)+"&xxFuefin_codename="+fext_GRV(_p,"fuefin_id")+"&xxTiprecur_id="+(Ext.isEmpty(_tri)?0:_tri)+"&xxTiprecur_codename="+fext_GRV(_p,"tiprecur_id")+"&xxEspedet_id="+(Ext.isEmpty(_edi)?0:_edi)+"&xxEspedet_codename="+fext_GRV(_p,"espedet_id")+"&xxPers_key="+fext_GV(_p,"pers_key")+"&xxPers_ruc="+fext_GV(_p,"pers_ruc")+"&xxPers_nombre="+fext_GV(_p,"pers_nombre")+"&xxBst_id="+_bst_id+"&xxBst_code="+fext_GRV(_p,"bst_id");
	var _sess="&zzUsursess_key="+_vs["us"]+"&zzUsuracce_key="+_vs["ua"]+"&zzYear_id="+_vs["y"]+"&zzArea_key="+_vs["a"]+"&xxMenu_id="+_mi+"&xxOpc_id="+_TE;

	if(fjsIn_array(_tr,["REP","REPTRANSP"])){var _tit="Reporte de Ordenes";
		fext_pdf("",_tit,"php/pdf/pdf_logistics_ordenes_report.php?xxType_record="+_tr+_param+_sess,_pan.down("#tpn"));
	}else if(fjsIn_array(_tr,["REPxMETA"])){var _tit="Reporte Ordenes x Sec. Func.";
		fext_pdf("",_tit,"php/pdf/pdf_logistics_ordenes_report_x_meta.php?xxType_record="+_tr+_param+_sess,_pan.down("#tpn"));
	}else if(fjsIn_array(_tr,["REPTRANSP_CONSULDET"])){var _tit="Reporte Detallado de Consultorias";
		fext_pdf("",_tit,"php/pdf/pdf_logistics_ordenes_reptransp_consuldet.php?xxType_record="+_tr+_param+_sess,_pan.down("#tpn"));
	}else if(fjsIn_array(_tr,["REPTRANSP_PUBIMPDET"])){var _tit="Reporte Detallado de Publicidad e Impresiones";
		fext_pdf("",_tit,"php/pdf/pdf_logistics_ordenes_reptransp_pubimpdet.php?xxType_record="+_tr+_param+_sess,_pan.down("#tpn"));
	}else if(fjsIn_array(_tr,["REPTRANSP_PUBL"])){var _tit="Reporte de Publicidad";
		fext_pdf("",_tit,"php/pdf/pdf_logistics_ordenes_reptransp_publ.php?xxType_record="+_tr+_param+_sess,_pan.down("#tpn"));
	}else if(fjsIn_array(_tr,["REPOSCE"])){var _tit="Reporte de Ordenes";
		fext_pdf("",_tit,"php/pdf/pdf_logistics_ordenes_report_osce.php?xxType_record="+_tr+_param+_sess,_pan.down("#tpn"));
	}else if(fjsIn_array(_tr,["REPING"])){var _tit="Reporte de Ordenes - Recepciones";
		fext_pdf("",_tit,"php/pdf/pdf_logistics_ordenes_report_ingresos.php?xxType_record="+_tr+_param+_sess,_pan.down("#tpn"));
	}else if(fjsIn_array(_tr,["REPDET"])){var _tit="Reporte Detallado de Ordenes";
		fext_pdf("",_tit,"php/pdf/pdf_logistics_ordenes_report.php?xxType_record="+_tr+_param+_sess,_pan.down("#tpn"));		
	}else if(fjsIn_array(_tr,["REPESPEDET"])){var _tit="Reporte de Ordenes - Clasificadores";
		fext_pdf("",_tit,"php/pdf/pdf_logistics_ordenes_report_espedet.php?xxType_record="+_tr+_param+_sess,_pan.down("#tpn"));
	}else if(fjsIn_array(_tr,["REP_REGPRV","REP_REGPRVRNK","REP_REGPRVSIAF"])){var _tit="Reporte de Registro de Proveedores";
		fext_pdf("",_tit,"php/pdf/pdf_logistics_ordenes_report_regprv.php?xxType_record="+_tr+_param+_sess,_pan.down("#tpn"));
	}
}
});