Ext.define("Siace.controller.bud.Notas_DetSE",{extend:"Ext.app.Controller",views:["bud.Notas_DetSE"],
init:function(application){this.control({
"bud_notadetse":{activate:this.bndse_Act,beforerender:this.bndse_BR},"bud_notadetse #btnAccept":{click:this.bndse_btn},"bud_notadetse #btnCancel":{click:this.bndse_btn},
"bud_notadetse #meta_id":{change:this.bndse_meiChg},"bud_notadetse #tarea_key":{change:this.bndse_tkChg}
});},
bndse_Act:function(comp,opr){if(comp.getFilt()){comp.setFilt(false);var _cc=comp.getCC();var _om=comp.down("#meta_id");var _ot=comp.down("#tarea_key");
	var _mei=fext_GV(_cc,"meta_id")*1;var _tk=fext_GV(_cc,"tarea_key");_fti=fext_GV(_cc,"fftr_id");
	_om.getStore().load({params:{xxYear_id:fext_GV(_cc,"year_id"),xxMeta_id:_mei,xxFuefin_id:_fti.substr(0,3),xxTiprecur_id:_fti.substr(4),xxDoc_id:201,xxDoc_type:"U1",xxDoc_estado:1,xxType_record:"codename",vs:fext_JE(fextpub_sessVar())},
		callback:function(r){if(r.length>0){if(_mei>0){_om.setValue(r[0].data.meta_id*1);}}}
	});
}},
bndse_BR:function(comp,opr){fext_BS(comp,"meta_id","bud.Tareas_FftredMeta");fext_BS(comp,"tarea_key","bud.Tareas_FftredTarea");fext_BS(comp,"espedet_id","bud.Tareas_FftredEspedet");},
bndse_btn:function(btn,e,o){fext_CC("bud.Notas_DetSEB").bndse(btn);},
bndse_meiChg:function(cbo,newV,oldV,o){if(Ext.isEmpty(newV)){return false;}var _w=cbo.up("window");var _cc=_w.getCC();var _ot=_w.down("#tarea_key");var _tk=fext_GV(_cc,"tarea_key");_fti=fext_GV(_cc,"fftr_id");
	_ot.getStore().load({params:{xxYear_id:fext_GV(_cc,"year_id"),xxMeta_id:fext_GV(_cc,"meta_id"),xxTarea_key:_tk,xxFuefin_id:_fti.substr(0,3),xxTiprecur_id:_fti.substr(4),xxType_record:"codename",vs:fext_JE(fextpub_sessVar())},callback:function(r,oper,succ){if(r.length==1){_ot.setValue(r[0].data.tarea_key);}}});
},
bndse_tkChg:function(cbo,newV,oldV,o){var _w=cbo.up("window");var _oed=_w.down("#espedet_id");if(Ext.isEmpty(newV)){_oed.getStore().removeAll();_oed.setValue("");return false;}var _cc=_w.getCC();var _tk=fext_GV(_w,"tarea_key");_fti=fext_GV(_cc,"fftr_id");
	_oed.getStore().load({params:{xxTarea_key:_tk,xxFuefin_id:_fti.substr(0,3),xxTiprecur_id:_fti.substr(4),ssNO_USK:"NoT",xxType_record:"tareafte_cn",xxType_query:"saldo+"},callback:function(r,oper,succ){if(r.length==1){_oed.setValue(r[0].data.tareafte_key);}}});
}
});