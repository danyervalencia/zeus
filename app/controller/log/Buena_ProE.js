Ext.define("Siace.controller.log.Buena_ProE",{extend:"Ext.app.Controller",stores:["array.Mone"],views:["log.Buena_ProE"],
init:function(application){this.control({
"log_bpe":{beforeshow:this.lbpe_BS},"log_bpe #btnSave":{click:this.lbpe_btn},"log_bpe #btnUndo":{click:this.lbpe_btn},"log_bpe #btnExit":{click:this.lbpe_btn},"log_bpe #btnModify":{click:this.lbpe_btn},"log_bpe #btnCertificado":{click:this.lbpe_btn},
"log_bpe #fftr_id":{change:this.lbpe_fftriChg},"log_bpe #grdLBPD":{celldblclick:this.lbpe_grdLBPDCellDblClk},"log_bpe #grdLCD":{select:this.lbpe_grdLCDSel,deselect:this.lbpe_grdLCDDeSel},
"log_bpe #meta_id":{change:this.lbpe_miChg},"log_bpe #tarea_key":{change:this.lbpe_tkChg}
});},
lbpe_BS:function(comp,opt){var _TE=comp.getTE();fextbud_tareas_fftredParam({pan:comp,obj:comp.down("#fftr_id"),TQ:"FF_TR",OB:"fftr_codename",nuk:"NoT",AB:"NO"});
	if(fjsIn_array(_TE,[1])){fext_CC("log.BuenaProBS1").lbpbs_Show(comp);}else if(fjsIn_array(_TE,[3,11])){fext_CC("log.BuenaProBS2").lbpbs_Show(comp);}
},
lbpe_btn:function(btn,e,opt){fext_CC("log.BPEB").lbpe(btn);},
lbpe_fftriChg:function(cbo,newV,oldV,opt){var _w=cbo.up("window");if(_w.getTE()==11&&_w.getFilterFFTR()&&!Ext.isEmpty(newV)){
	var _r=fext_GS(_w,"grdLBPD").getRange();fext_GSR(_w,"grdLBPTF");
	for(var _i=0;_i<_r.length;_i++){var _d=_r[_i].data;this.lbpe_grdLBPTFEdit(_w,{tarea_key:fext_GV(_w,"tarea_key"),fuefin_id:fext_GV(_w,"fftr_id").substr(0,3),tiprecur_id:fext_GV(_w,"fftr_id").substr(4),espedet_id:_d.espedet_id,espedet_codigo:_d.espedet_codigo,espedet_nombre:_d.espedet_nombre,pretot:_d.bpdet_pretot,factor:1})}
}},
lbpe_grdLBPDCellDblClk:function(grd,td,cellI,rec,tr,rowI,e,opt){var _w=grd.up("window");if(_w.getTE()==11&&_w.down("#btnModify").isDisabled()){fext_CC("log.Buena_Pro_DetE");var _wE=fext_CW("log.Buena_Pro_DetE");_wE.setCC(_w);
	fext_SV(_wE,"tarea_key",fext_GV(_w,"tarea_key"));fext_SV(_wE,"fuefin_id",fext_GV(_w,"fftr_id").substr(0,3));fext_SV(_wE,"tiprecur_id",fext_GV(_w,"fftr_id").substr(4));fext_SV(_wE,"espedet",rec.data.espedet_id);
	fext_SV(_wE,"tarea_codename",_w.down("#tarea_key").getRawValue());fext_SV(_wE,"bs_codigo",rec.data.bs_codigo);fext_SV(_wE,"bs_nombre",rec.data.bs_nombre);_wE.show();
}},
lbpe_grdLBPTFChgED:function(poC,poP){var _r=fext_grdSR(poC,"grdLBPD");
	this.lbpe_grdLBPTFEdit(poC,{"tarea_key":fext_GV(poC,"tarea_key"),"fuefin_id":fext_GV(poC,"fftr_id").substr(0,3),"tiprecur_id":fext_GV(poC,"fftr_id").substr(4),"espedet_id":_r.data.espedet_id,"pretot":_r.data.bpdet_pretot,"factor":"-1"});
	_r.set("espedet_id",poP["espedet_id"]);_r.set("espedet_codigo",poP["espedet_codigo"]);_r.set("espedet_nombre",poP["espedet_nombre"]);_r.commit();
	this.lbpe_grdLBPTFEdit(poC,{"tarea_key":fext_GV(poC,"tarea_key"),"fuefin_id":fext_GV(poC,"fftr_id").substr(0,3),"tiprecur_id":fext_GV(poC,"fftr_id").substr(4),"espedet_id":_r.data.espedet_id,"espedet_codigo":_r.data.espedet_codigo,"espedet_nombre":_r.data.espedet_nombre,"pretot":_r.data.bpdet_pretot,"factor":"1"});
},
lbpe_grdLBPTFEdit:function(poC,poP){var _str=fext_GS(poC,"grdLBPTF");
	var _found=_str.findBy(function(rec,id){if(rec.data.tarea_key==poP["tarea_key"]&&rec.data.fuefin_id==poP["fuefin_id"]&&rec.data.tiprecur_id==poP["tiprecur_id"]&&rec.data.espedet_id==poP["espedet_id"]){rec.set("bptareafte_monto",fjsRound(rec.data.bptareafte_monto*1 + poP["pretot"]*(poP["factor"]*1),2)); rec.commit(); if(rec.data.bptareafte_monto*1<=0){_str.remove(rec);} return true;}});
	if(_found==-1){_str.add({"tarea_key":poP["tarea_key"],"fuefin_id":poP["fuefin_id"],"tiprecur_id":poP["tiprecur_id"],espedet_id:poP["espedet_id"],bptareafte_monto:poP["pretot"],"tarea_codigo":poC.down("#tarea_key").getRawValue().substr(0,8),"fftr_codigo":poC.down("#fftr_id").getRawValue().substr(0,5),espedet_codigo:poP["espedet_codigo"],espedet_nombre:poP["espedet_nombre"]});}
},
lbpe_grdLCDSel:function(comp,rec,index,opt){var _txtBPM=comp.view.up("window").down("#bp_monto");_txtBPM.setValue(_txtBPM.getValue()*1 + rec.data.bpdet_pretot*1);},
lbpe_grdLCDDeSel:function(comp,rec,index,opt){var _txtBPM=comp.view.up("window").down("#bp_monto");_txtBPM.setValue(_txtBPM.getValue()*1 - rec.data.bpdet_pretot*1);},
lbpe_miChg:function(cbo,newV,oldV,opt){var _w=cbo.up("window");if(_w.getTE()==11&&_w.getFilterFFTR()){fextbud_tareasFilt({pan:_w,mei:newV,ak:_w.down("#area_key").getValue(),OB:"tarea_codename",AB:"NO"});}},
lbpe_tkChg:function(cbo,newV,oldV,opt){var _w=cbo.up("window");if(_w.getTE()==11&&_w.getFilterFFTR()){fextbud_tareas_fftredLoad({pan:_w,obj:_w.down("#fftr_id"),type:"fftr"});}}
});