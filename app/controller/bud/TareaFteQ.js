Ext.define("Siace.controller.bud.TareaFteQ",{extend:"Ext.app.Controller",
btfq_Rep:function(poP){var _comp=poP["comp"];var _mi=_comp.up("bud_tareafteq").getMI();var _vs=fextpub_sessVar();
	var _ak=fext_GV(_comp,"area_key");var _mei=fext_GV(_comp,"meta_id")*1;var _tk=fext_GV(_comp,"tarea_key");var _ffi=fext_GV(_comp,"fuefin_id")*1;var _tri=fext_GV(_comp,"tiprecur_id")*1;var _gi=fext_GV(_comp,"gene_id")*1;var _edi=fext_GV(_comp,"espedet_id")*1;
	var _param="&xxArea_key="+(Ext.isEmpty(_ak)?"":_ak)+"&xxMeta_id="+_mei+"&xxTarea_key="+(Ext.isEmpty(_tk)?"":_tk)+"&xxFuefin_id="+_ffi+"&xxTiprecur_id="+_tri+"&xxTiprecur_codename="+_comp.down("#tiprecur_id").getRawValue()+"&xxGene_id="+_gi+"&xxGene_codename="+_comp.down("#gene_id").getRawValue()+"&xxEspedet_id="+_edi+"&xxEspedet_codename="+_comp.down("#espedet_id").getRawValue();
	var _sess="&zzUsursess_key="+_vs["us"]+"&zzUsuracce_key="+_vs["ua"]+"&zzYear_id="+_vs["y"]+"&zzArea_key="+_vs["a"]+"&xxMenu_id="+_mi+"&xxOpc_id="+poP["oi"];
	fext_pdf("","Reporte Saldos Presupuestales","php/pdf/pdf_budget_tareas_fftred_report.php?xxType="+poP["type"]+_param+_sess);
},
btfq_RepD:function(poP){var _comp=poP["comp"];var _pan=_comp.up("bud_tareafteq");var _mi=_pan.getMI();var _vs=fextpub_sessVar();var _r=fext_grdSR(_pan,"grdBTF");if(!_r){return false;}
	var _param="xxTareafte_key="+_r.data.tareafte_key;var _sess="&zzUsursess_key="+_vs["us"]+"&zzUsuracce_key="+_vs["ua"]+"&zzYear_id="+_vs["y"]+"&zzArea_key="+_vs["a"]+"&xxMenu_id="+_mi+"&xxOpc_id="+poP["oi"];
	fext_pdf("", "Movimientos Presupuestales", "php/pdf/pdf_budget_tareas_fftred_movements.php?"+_param+_sess,_comp.up("#tab01"));
}
});