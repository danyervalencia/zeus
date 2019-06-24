Ext.define("Siace.controller.siaf.BudgetR",{extend:"Ext.app.Controller",stores:["array.BstAB"],views:["siaf.BudgetR"],
init:function(application){this.control({
"siaf_budr":{beforerender:this.blr_BR},"siaf_budr #pan #btnPdf":{click:this.blr_btn},"siaf_budr #pan #btnExcel":{click:this.blr_btn},"siaf_budr #btnBPS":{click:this.blr_btnS},"siaf_budr #btnPPS":{click:this.blr_btnS},
"siaf_budr #bsc_id":{change:this.blr_ChgCbo},"siaf_budr #bsg_id":{change:this.blr_ChgCbo},"siaf_budr #bst_id":{change:this.blr_ChgCbo},//"siaf_budr #meta_id":{change:this.blr_Chg,expand:this.blr_Expand},
"siaf_budr #proy_code":{blur:this.blr_pcBlur,focus:this.blr_pcFocus,keypress:this.blr_pcKP},"siaf_budr #proy_key":{change:this.blr_Chg},"siaf_budr #year_id":{change:this.blr_Chg}
});},
blr_BR:function(comp,opt){var _mi=comp.getMI();var _pan=comp.down("#pan");var _vs=fextpub_sessVar();
	fextpub_yearFilt({obj:_pan.down("#year_id"),mi:_mi});fextpub_repFilt({obj:_pan.down("#rep_id"),mi:_mi});
	fextbud_metasParam({pan:_pan,TR:"cboCNP"});fextbud_tareas_fftredParam({pan:_pan,obj:_pan.down("#fuefin_id"),TR:"FF",mi:_mi,type:"fuefin"});fextbud_tareas_fftredParam({pan:_pan,obj:_pan.down("#espedet_id"),TR:"ESPEDET_CN",mi:_mi,type:"espedet"});
},
blr_ChgCbo:function(cbo,newV,oldV,opt){var _p=cbo.up("#pan");var _ii=fext_oii(cbo).substr(0,3);if(oldV!=undefined){if(_ii=="bst"){fextpub_bsgLoad({pan:_p});}else if(_ii=="bsg"){fextpub_bscLoad({pan:_p});}else if(_ii=="bsc"){fextpub_bsfLoad({pan:_p});}}},
blr_Expand:function(cbo,o){cbo.up("#pan").setF(true);},
blr_btn:function(btn,e,o){fext_CC("bud.LiqRR").blr(btn);},
blr_btnS:function(btn,e,o){fext_CC("bud.LiqRB").blr(btn);},
blr_Chg:function(obj,newV,oldV,opt){fext_CC("bud.LiqR").blr_chg(obj,newV);},

blr_pcBlur:function(txtf,The,opt){this.blr_pcS(txtf.up("siaf_budr"),0);},
blr_pcFocus:function(txtf,The,opt){this.blr_pcS(txtf.up("siaf_budr"),1);},
blr_pcKP:function(txtf,e,opt){if(e.getCharCode()==13){this.blr_pcS(txtf.up("siaf_budr"),13);}},
blr_pcS:function(poCC,pcT){fext_fieldSearch(pcT,poCC,["proy_key","PROY_CODE","proy_code","proy_nombre"],["php/budget_proyectos_json_records.php","xxProy_code","txt_search",""],"",["","","","","",""]);},
});