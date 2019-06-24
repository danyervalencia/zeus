Ext.define("Siace.controller.log.IngresosR",{extend:"Ext.app.Controller",stores:["array.BstAB","array.DocOrdenAB"],views:["log.IngresosR"],
init:function(application){this.control({
"log_ingr":{beforerender:this.lir_BR},"log_ingr #pan #btnPdf":{click:this.lir_btn},"log_ingr #pan #btnExcel":{click:this.lir_btn},"log_ingr #btnSPSS":{click:this.lir_btnS},"log_ingr #btnPPS":{click:this.lir_btnS},
"log_ingr #area_key":{change:this.lir_akChg,expand:this.lir_Expand},
"log_ingr #bsc_id":{change:this.lir_ChgCbo},"log_ingr #bsg_id":{change:this.lir_ChgCbo},"log_ingr #bst_id":{change:this.lir_ChgCbo},
"log_ingr #fuefin_id":{change:this.lir_ffiChg,expand:this.lir_Expand},"log_ingr #meta_id":{change:this.lir_meiChg,expand:this.lir_Expand},"log_ingr #tarea_key":{change:this.lir_tkChg,expand:this.lir_Expand},"log_ingr #pan #tiprecur_id":{change:this.lir_triChg,expand:this.lir_Expand},
"log_ingr #pers_ruc":{blur:this.lir_prBlur,focus:this.lir_prFocus,keypress:this.lir_prKP},
"log_ingr #proysnip_code":{blur:this.lir_pscBlur,focus:this.lir_pscFocus,keypress:this.lir_psccKP}
});},
lir_BR:function(comp,opt){var _mi=comp.getMI();var _p=comp.down("#pan");var _vs=fextpub_sessVar();
	fextpub_repFilt({obj:_p.down("#rep_id"),mi:_mi});fextpub_yearsValue(_p.down("#year_id"),_vs.y);fextpub_bsgParam({pan:comp});fextpub_bscParam({pan:comp});fextpub_bsfParam({pan:comp});
	fextbud_tareasAMParam({pan:_p,mi:_mi,TR:"cboCN"});fextbud_tareasATParam({pan:_p,mi:_mi,TR:"cboCN"});
	fextbud_tareas_fftredParam({pan:_p,obj:_p.down("#fuefin_id"),TR:"FF",mi:_mi,type:"fuefin"});fextbud_tareas_fftredParam({pan:_p,obj:_p.down("#tiprecur_id"),TR:"TR",type:"tiprecur",mi:_mi});fextbud_tareas_fftredParam({pan:_p,obj:_p.down("#espedet_id"),TR:"ESPEDET_CN",mi:_mi,type:"espedet"});
	fextpub_tabgenFilt({obj:_p.down("#tipgast_id"),tgp:2020});fextpub_areasFilt({obj:_p.down("#area_key"),filt:false,mi:_mi,TR:"cbo"});
},
lir_ChgCbo:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");var _ii=fext_oii(cbo).substr(0,3);if(oldV!=undefined){if(_ii=="bst"){fextpub_bsgLoad({pan:_p});}else if(_ii=="bsg"){fextpub_bscLoad({pan:_p});}else if(_ii=="bsc"){fextpub_bsfLoad({pan:_p});}}},
lir_Expand:function(cbo,o){cbo.up("#pan").setF(true);},
lir_btn:function(btn,e,o){fext_CC("log.IngRR").lir(btn);},
lir_btnS:function(btn,e,o){fext_CC("log.IngRB").lir(btn);},
lir_akChg:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");if(_p.getF()){_p.setF(false);fextbud_tareasAMLoad({pan:_p,ff_tr:"YES",clasif:"1V1",fftr_all:1});}},
lir_ffiChg:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");if(oldV!=undefined&&_p.getF()){_p.setF(false);fextbud_tareas_fftredLoad({pan:_p,obj:_p.down("#tiprecur_id"),type:"tiprecur",clasif:"1V1"});}},
lir_meiChg:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");if(_p.getF()){_p.setF(false);fextbud_tareasATLoad({pan:_p,ff_tr:"YES",clasif:"1V1",fftr_all:1});}},

lir_prBlur:function(txtf,The,o){this.lir_prS(txtf.up("#pan"),0);},
lir_prFocus:function(txtf,The,o){this.lir_prS(txtf.up("#pan"),1);},
lir_prKP:function(txtf,e,opt){if(e.getCharCode()==13){this.lir_prS(txtf.up("#pan"),13);}},
lir_prS:function(poCC,pcType){fext_fieldSearch(pcType,poCC,["pers_key","PERS_RUC","pers_ruc","pers_nombre"],["php/public_personas_json_records.php","xxPers_ruc","textfield_search",""],"0",["","",[""],"","",""],"");},
lir_pscBlur:function(txtf,The,o){this.lir_pscS(txtf.up("log_ingr"),0);},
lir_pscFocus:function(txtf,The,o){this.lir_pscS(txtf.up("log_ingr"),1);},
lir_psccKP:function(txtf,e,o){if(e.getCharCode()==13){this.lir_pscS(txtf.up("log_ingr"),13);}},
lir_pscS:function(poCC,pcType){fext_fieldSearch(pcType,poCC,["proysnip_key","PROYSNIP_CODE","proysnip_code","proysnip_nombre"],["php/siaf_proyecto_snip_json_records.php","xxProysnip_code","textfield_search",""],"",["","","","","",""]);},
lir_tkChg:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");if(_p.getF()){_p.setF(false);fextbud_tareas_fftredLoad({pan:_p,obj:_p.down("#fuefin_id"),type:"fuefin",clasif:"1V1"});}},
lir_triChg:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");if(oldV!=undefined&&_p.getF()){_p.setF(false);}},
});