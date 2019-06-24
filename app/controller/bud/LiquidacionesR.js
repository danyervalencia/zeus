Ext.define("Siace.controller.bud.LiquidacionesR",{extend:"Ext.app.Controller",stores:["array.BstAB"],views:["bud.LiquidacionesR"],
init:function(application){this.control({
"bud_liqr":{beforerender:this.blr_BR},"bud_liqr #pan #btnPdf":{click:this.blr_btn},"bud_liqr #pan #btnExcel":{click:this.blr_btn},"bud_liqr #btnBPS":{click:this.blr_btnS},"bud_liqr #btnPPS":{click:this.blr_btnS},
"bud_liqr #bsc_id":{change:this.blr_ChgCbo},"bud_liqr #bsg_id":{change:this.blr_ChgCbo},"bud_liqr #bst_id":{change:this.blr_ChgCbo},//"bud_liqr #meta_id":{change:this.blr_Chg,expand:this.blr_Expand},
"bud_liqr #pers_ruc":{blur:this.blr_prBlur,focus:this.blr_prFocus,keypress:this.blr_prKP},"bud_liqr #proy_code":{blur:this.blr_pcBlur,focus:this.blr_pcFocus,keypress:this.blr_pcKP},"bud_liqr #proy_key":{change:this.blr_Chg},"bud_liqr #year_id":{change:this.blr_Chg}
});},
blr_BR:function(comp,opt){var _mi=comp.getMI();var _pan=comp.down("#pan");var _vs=fextpub_sessVar();
	fextpub_yearFilt({obj:_pan.down("#year_id"),mi:_mi});fextpub_repFilt({obj:_pan.down("#rep_id"),mi:_mi});fextpub_bsgParam({pan:_pan});fextpub_bscParam({pan:_pan});fextpub_bsfParam({pan:_pan});
	fextbud_metasParam({pan:_pan,TR:"cboCNP"});fextbud_tareas_fftredParam({pan:_pan,obj:_pan.down("#fuefin_id"),TR:"FF",mi:_mi,type:"fuefin"});fextbud_tareas_fftredParam({pan:_pan,obj:_pan.down("#espedet_id"),TR:"ESPEDET_CN",mi:_mi,type:"espedet"});
	fextpub_areasFilt({obj:_pan.down("#area_key"),filt:false,mi:_mi,TR:"cbo",nuk:"NoT"});
},
blr_ChgCbo:function(cbo,newV,oldV,opt){var _p=cbo.up("#pan");var _ii=fext_oii(cbo).substr(0,3);if(oldV!=undefined){if(_ii=="bst"){fextpub_bsgLoad({pan:_p});}else if(_ii=="bsg"){fextpub_bscLoad({pan:_p});}else if(_ii=="bsc"){fextpub_bsfLoad({pan:_p});}}},
blr_Expand:function(cbo,o){cbo.up("#pan").setF(true);},
blr_btn:function(btn,e,o){fext_CC("bud.LiqRR").blr(btn);},
blr_btnS:function(btn,e,o){fext_CC("bud.LiqRB").blr(btn);},
blr_Chg:function(obj,newV,oldV,opt){fext_CC("bud.LiqR").blr_chg(obj,newV);},

blr_prBlur:function(txtf,The,opt){this.blr_prS(txtf.up("#pan"),0);},
blr_prFocus:function(txtf,The,opt){this.blr_prS(txtf.up("#pan"),1);},
blr_prKP:function(txtf,e,opt){if(e.getCharCode()==13){this.blr_prS(txtf.up("#pan"),13);}},
blr_prS:function(poCC,pcT){fext_fieldSearch(pcT,poCC,["pers_key","PERS_RUC","pers_ruc","pers_nombre"],["php/public_personas_json_records.php","xxPers_ruc","textfield_search",""],"0",["","",[""],"","",""],"");},
blr_pcBlur:function(txtf,The,opt){this.blr_pcS(txtf.up("bud_liqr"),0);},
blr_pcFocus:function(txtf,The,opt){this.blr_pcS(txtf.up("bud_liqr"),1);},
blr_pcKP:function(txtf,e,opt){if(e.getCharCode()==13){this.blr_pcS(txtf.up("bud_liqr"),13);}},
blr_pcS:function(poCC,pcT){fext_fieldSearch(pcT,poCC,["proy_key","PROY_CODE","proy_code","proy_nombre"],["php/budget_proyectos_json_records.php","xxProy_code","txt_search",""],"",["","","","","",""]);},
});