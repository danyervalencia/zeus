Ext.define("Siace.controller.log.ViaticosE",{extend:"Ext.app.Controller",views:["log.ViaticosE"],
init:function(application){this.control({
"log_viate":{beforeshow:this.lve_BS},"log_viate #btnSave":{click:this.lve_btn},"log_viate #btnUndo":{click:this.lve_btn},"log_viate #btnExit":{click:this.lve_btn},"log_viate #btnRTS":{click:this.lve_btn},"log_viate #btnCalc":{click:this.lve_btn},"log_viate #btnAdd":{click:this.lve_btn},"log_viate #btnModify":{click:this.lve_btn},"log_viate #btnSuppress":{click:this.lve_btn},
"log_viate #grdLVD":{selectionchange:this.lve_grdSelChg},
"log_viate #area_key":{expand:this.lve_Expand},"log_viate #meta_id":{change:this.lve_meiChg,expand:this.lve_Expand},"log_viate #tarea_key":{change:this.lve_tkChg,expand:this.lve_Expand},
"log_viate #viat_fechaini":{change:this.lve_ChgFI},"log_viate #viat_horaini":{change:this.lve_ChgFI},"log_viate #viat_fechafin":{change:this.lve_ChgFI},"log_viate #viat_horafin":{change:this.lve_ChgFI}
});},
lve_BS:function(comp,o){comp.down("#cntPdpd").setStores(true);fext_CC("pub.PaisDptoPrvnDstt");comp.down("comprrhh_trabjs").setFieldLabel("Comisionado");
	fextbud_tareas_fftredParam({pan:comp,obj:comp.down("#fftr_id"),nuk:(fjsIn_array(comp.getMI(),[2128])?"NoT":""),TQ:"T_FF_TR",OB:"fftr_codename",AB:"NO"});
	fext_CC("log.ViatE"+(fjsLpad(comp.getTE(),2,"0"))).lve(comp);
},
lve_ChgFI:function(cbo,newV,oldV,o){var _w=cbo.up("window");if(_w.getC()){fext_CC("log.ViatE").lve_ValidDT(_w);}},
	//this.lve_ValidDT(cbo);},
//lve_ValidDT:function(poC){fext_CC("log.ViatE").lve_ValidDT(poC.up("window"));},
lve_btn:function(btn,e,o){fext_CC("log.ViatEB").lve(btn);},
lve_Expand:function(cbo,opt){cbo.up("window").setF(true);},
lve_grdSelChg:function(mod,r,o){if(r.length!=1){return false;}var _w=mod.view.up("window");if(fjsIn_array(_w.getTE(),[1,2])){_w.down("#btnModify").enable();if(r[0].data.viatdet_item!=1){_w.down("#btnSuppress").enable();}}},
lve_meiChg:function(cbo,newV,oldV,o){var _w=cbo.up("window");if(fjsIn_array(_w.getTE(),[1,2])&&_w.getF()){_w.setF(false);fextbud_tareasATLoad({pan:cbo.up("panel"),ff_tr:"YES",obj:_w.down("#fftr_id"),type:"fftr",fftr_all:1});}},
lve_tkChg:function(cbo,newV,oldV,o){var _w=cbo.up("window");if(_w.getF()){_w.setF(false);fextbud_tareas_fftredLoad({pan:_w,obj:_w.down("#fftr_id"),setVal:false});}},
});