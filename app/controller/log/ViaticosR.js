Ext.define("Siace.controller.log.ViaticosR",{extend:"Ext.app.Controller",stores:["array.BstAB"],views:["log.ViaticosR"],
init:function(application){this.control({
"log_viatr":{beforerender:this.lvr_BR},"log_viatr #btnPdf":{click:this.lvr_btn},"log_viatr #btnExcel":{click:this.lvr_btn},"log_viatr #btnSPSS":{click:this.lvr_btnS},"log_viatr #btnRTS":{click:this.lvr_btnS},
"log_viatr #area_key":{change:this.lvr_akChg},
"log_viatr #fuefin_id":{change:this.lvr_ffiChg},"log_viatr #meta_id":{change:this.lvr_meiChg},"log_viatr #tarea_key":{change:this.lvr_tkChg},"log_viatr #tiprecur_id":{change:this.lvr_triChg},
//"log_viatr #pan #year_id": { change: this.lvr_pan_year_idChange, },
});	},
lvr_BR:function(comp,opt){var _mi=comp.getMI();var _pan=comp.down("#pan");
	fextpub_repFilt({obj:_pan.down("#rep_id"),mi:_mi});fextpub_yearsValue(_pan.down("#year_id"),fextpub_sessVar().y*1);
	fextbud_tareasAMParam({pan:_pan,mi:_mi,TR:"cboCN"});fextbud_tareasATParam({pan:_pan,mi:_mi,TR:"cboCN"});
	fextbud_tareas_fftredParam({pan:_pan,obj:_pan.down("#fuefin_id"),TR:"FF",mi:_mi,type:"fuefin"});fextbud_tareas_fftredParam({pan:_pan,obj:_pan.down("#tiprecur_id"),TR:"TR",mi:_mi,type:"tiprecur"});fextbud_tareas_fftredParam({pan:_pan,obj:_pan.down("#espedet_id"),TR:"ESPEDET_CN",mi:_mi,type:"espedet"});
	fextpub_areasFilt({obj:_pan.down("#area_key"),filt:false,mi:_mi,TR:"cbo"});
},
lvr_Expand:function(cbo,o){cbo.up("#pan").setF(true);},
lvr_btn:function(btn,e,o){fext_CC("log.ViatRR").lvr(btn);},
lvr_btnS:function(btn,e,o){fext_CC("log.ViatRB").lvr(btn);},


lvr_akChg:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");if(_p.getF()){_p.setF(false);fextbud_tareasAMLoad({pan:_p,ff_tr:"YES",clasif:"1V1",fftr_all:1});}},
lvr_ffiChg:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");if(oldV!=undefined&&_p.getF()){_p.setF(false);fextbud_tareas_fftredLoad({pan:_p,obj:_p.down("#tiprecur_id"),type:"tiprecur",clasif:"1V1"});}},
lvr_meiChg:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");if(_p.getF()){_p.setF(false);fextbud_tareasATLoad({pan:_p,ff_tr:"YES",clasif:"1V1",fftr_all:1});}},
lvr_tkChg:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");if(_p.getF()){_p.setF(false);fextbud_tareas_fftredLoad({pan:_p,obj:_p.down("#fuefin_id"),type:"fuefin",clasif:"1V1"});}},
lvr_triChg:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");if(oldV!=undefined&&_p.getF()){_p.setF(false);}},
});