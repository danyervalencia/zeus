Ext.define("Siace.controller.bud.Notas_DetSI",{extend:"Ext.app.Controller",views:["bud.Notas_DetSI"],
init:function(application){this.control({
"bud_notadetsi":{activate:this.bndsi_Act,beforerender:this.bndsi_BR},"bud_notadetsi #btnAccept":{click:this.bndsi_btn},"bud_notadetsi #btnCancel":{click:this.bndsi_btn},
"bud_notadetsi #meta_id":{change:this.bndsi_meiChg},"bud_notadetsi #tarea_key":{change:this.bndsi_tkChg}
});},
bndsi_Act:function(comp,opt){if(comp.getF()){var _cc=comp.getCC();var _om=comp.down("#meta_id");var _ot=comp.down("#tarea_key");var _oed=comp.down("#espedet_id");var _mi=_cc.getMI();_om.getStore().removeAll();_om.setValue("");_ot.getStore().removeAll();_ot.setValue("");_oed.getStore().removeAll();_oed.setValue("");
	var _mei=fext_GV(_cc,"meta_id")*1;var _tk=fext_GV(_cc,"tarea_key");_fti=fext_GV(_cc,"fftr_id");var _tni=fext_GV(_cc,"tipnota_id")*1;
	_om.getStore().load({params:{xxYear_id:fext_GV(_cc,"year_id"),xxMeta_id:(_tni==2018?_mei:""),xxFuefin_id:_fti.substr(0,3),xxTiprecur_id:_fti.substr(4),xxMenu_id:_mi,xxDoc_id:201,xxDoc_type:"O1",xxDoc_estado:1,xxType_record:"codename",vs:fext_JE(fextpub_sessVar())},
		callback:function(rec){if(rec.length>0){if(_mei>0){_om.setValue(_mei);}}}
	});
}},
bndsi_BR:function(comp,opt){fext_BS(comp,"meta_id","bud.Tareas_FftredMeta");fext_BS(comp,"tarea_key","bud.Tareas_FftredTarea");fext_BS(comp,"espedet_id","bud.Tareas_FftredEspedet");},
bndsi_btn:function(btn,e,opt){fext_CC("bud.Notas_DetSIB").bndsi(btn);},
bndsi_meiChg:function(cbo,newV,oldV,opr){var _w=cbo.up("window");var _ot=_w.down("#tarea_key");if(Ext.isEmpty(newV)){return false;}var _cc=_w.getCC();var _tk=fext_GV(_cc,"tarea_key");_fti=fext_GV(_cc,"fftr_id");var _mi=_cc.getMI();var _tni=fext_GV(_cc,"tipnota_id")*1;
	_ot.getStore().load({params:{xxYear_id:fext_GV(_cc,"year_id"),xxMeta_id:newV,xxFuefin_id:_fti.substr(0,3),xxTiprecur_id:_fti.substr(4),xxMenu_id:_mi,xxDoc_id:201,xxDoc_type:"O1",xxDoc_estado:1,xxType_record:"codename",xxType_query:(_tni==2018?"nt_"+_tk:""),vs:fext_JE(fextpub_sessVar())},callback:function(r,oper,succ){if(r.length>0){_ot.setValue(_tni==2018?r[0].data.tarea_key:_tk);}}});
},
bndsi_tkChg:function(cbo,newV,oldV,opr){var _w=cbo.up("window");var _oed=_w.down("#espedet_id");if(Ext.isEmpty(newV)){_oed.getStore().removeAll();_oed.setValue("");return false;}var _cc=_w.getCC();_fti=fext_GV(_cc,"fftr_id");
	_edi=(fext_GV(_cc,"tipnota_id")==2018?fext_grdSR(_cc,"grdBNTF").data.espedet_id:"");
	_oed.getStore().load({params:{xxTarea_key:newV,xxFuefin_id:_fti.substr(0,3),xxTiprecur_id:_fti.substr(4),xxEspedet_id:_edi,ssNO_USK:"NoT",xxType_record:"tareafte_cn"},callback:function(r,oper,succ){if(r.length==1){_oed.setValue(r[0].data.tareafte_key);}}});
}
});