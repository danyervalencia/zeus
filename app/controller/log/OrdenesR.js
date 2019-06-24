Ext.define("Siace.controller.log.OrdenesR",{extend:"Ext.app.Controller",stores:["array.BstAB","array.DocOrdenAB"],views:["log.OrdenesR"],
init:function(application){this.control({
"log_ordenr":{beforerender:this.lor_BR},"log_ordenr #pan #btnPdf":{click:this.lor_btn},"log_ordenr #pan #btnExcel":{click:this.lor_btn},"log_ordenr #btnSPSS":{click:this.lor_btnS},"log_ordenr #btnPPS":{click:this.lor_btnS},
"log_ordenr #area_key":{change:this.lor_akChg,expand:this.lor_Expand},
"log_ordenr #bsc_id":{change:this.lor_ChgCbo},"log_ordenr #bsg_id":{change:this.lor_ChgCbo},"log_ordenr #bst_id":{change:this.lor_ChgCbo},
"log_ordenr #fuefin_id":{change:this.lor_ffiChg,expand:this.lor_Expand},"log_ordenr #meta_id":{change:this.lor_meiChg,expand:this.lor_Expand},"log_ordenr #tarea_key":{change:this.lor_tkChng,expand:this.lor_Expand},"log_ordenr #pan #tiprecur_id":{change:this.lor_triChng,expand:this.lor_Expand},
"log_ordenr #pers_ruc":{blur:this.lor_prBl,focus:this.lor_prFo,keypress:this.lor_prKP},
"log_ordenr #proy_code":{blur:this.lor_pcBl,focus:this.lor_pcFo,keypress:this.lor_pcKP}
});},
lor_BR:function(comp,opt){var _mi=comp.getMI();var _pan=comp.down("#pan");var _vs=fextpub_sessVar();
	fextpub_yearsValue(_pan.down("#year_id"),_vs.y);fextpub_repFilt({obj:_pan.down("#rep_id"),mi:_mi});fextpub_bsgParam({pan:comp});fextpub_bscParam({pan:comp});fextpub_bsfParam({pan:comp});
	fextbud_tareasAMParam({pan:_pan,mi:_mi,TR:"cboCN"});fextbud_tareasATParam({pan:_pan,mi:_mi,TR:"cboCN"});
	fextbud_tareas_fftredParam({pan:_pan,obj:_pan.down("#fuefin_id"),TR:"FF",mi:_mi,type:"fuefin"});
	fextbud_tareas_fftredParam({pan:_pan,obj:_pan.down("#tiprecur_id"),TR:"TR",type:"tiprecur",mi:_mi});
	fextbud_tareas_fftredParam({pan:_pan,obj:_pan.down("#espedet_id"),TR:"ESPEDET_CN",mi:_mi,type:"espedet"});
	fextpub_bsgParam({pan:_pan});fextpub_bscParam({pan:_pan});fextpub_bsfParam({pan:_pan});
	fextpub_areasFilt({obj:_pan.down("#area_key"),filt:false,mi:_mi,TR:"cbo"});
},
lor_ChgCbo:function(cbo,newV,oldV,opt){var _p=cbo.up("#pan");var _ii=fext_oii(cbo).substr(0,3);if(oldV!=undefined){if(_ii=="bst"){fextpub_bsgLoad({pan:_p});}else if(_ii=="bsg"){fextpub_bscLoad({pan:_p});}else if(_ii=="bsc"){fextpub_bsfLoad({pan:_p});}}},
lor_Expand:function(cbo,o){cbo.up("#pan").setF(true);},
lor_btn:function(btn,e,o){fext_CC("log.OrdenRR").lor(btn);},
lor_btnS:function(btn,e,o){fext_CC("log.OrdenRB").lor(btn);},
lor_akChg:function(cbo,newV,oldV,opt){var _p=cbo.up("#pan");if(_p.getF()){_p.setF(false);fextbud_tareasAMLoad({pan:_p,ff_tr:"YES",clasif:"1V1",fftr_all:1});}},
lor_ffiChg:function(cbo,newV,oldV,opt){var _p=cbo.up("#pan");if(oldV!=undefined&&_p.getF()){_p.setF(false);fextbud_tareas_fftredLoad({pan:_p,obj:_p.down("#tiprecur_id"),type:"tiprecur",clasif:"1V1"});}},
lor_meiChg:function(cbo,newV,oldV,opt){var _p=cbo.up("#pan");if(_p.getF()){_p.setF(false);fextbud_tareasATLoad({pan:_p,ff_tr:"YES",clasif:"1V1",fftr_all:1});}},
lor_prBl:function(txtf,The,opt){this.lor_prS(txtf.up("#pan"),0);},
lor_prFo:function(txtf,The,opt){this.lor_prS(txtf.up("#pan"),1);},
lor_prKP:function(txtf,e,opt){if(e.getCharCode()==13){this.lor_prS(txtf.up("#pan"),13);}},
lor_prS:function(poCallComp,pcType){fext_fieldSearch(pcType,poCallComp,["pers_key","PERS_RUC","pers_ruc","pers_nombre"],["php/public_personas_json_records.php","xxPers_ruc","textfield_search",""],"0",["","",[""],"","",""],"");},
lor_pcBl:function(txtf,The,opt){this.lor_pcS(txtf.up("log_ordenr"),0);},
lor_pcFo:function(txtf,The,opt){this.lor_pcS(txtf.up("log_ordenr"),1);},
lor_pcKP:function(txtf,e,opt){if(e.getCharCode()==13){this.lor_pcS(txtf.up("log_ordenr"),13);}},
lor_pcS:function(poCC,pcType){fext_fieldSearch(pcType,poCC,["proy_key","PROY_CODE","proy_code","proy_nombre"],["php/budget_proyectos_json_records.php","xxProy_code","txt_search",""],"",["","","","","",""]);},
lor_tkChng:function(cbo,newV,oldV,opt){var _p=cbo.up("#pan");if(_p.getF()){_p.setF(false);fextbud_tareas_fftredLoad({pan:_p,obj:_p.down("#fuefin_id"),type:"fuefin",clasif:"1V1"});}},
lor_triChng:function(cbo,newV,oldV,opt){var _p=cbo.up("#pan");if(oldV!=undefined&&_p.getF()){_p.setF(false);}},
});