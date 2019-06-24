Ext.define("Siace.controller.log.ValesR",{extend:"Ext.app.Controller",stores:["array.Bst","array.Years"],views:["log.ValesR"],
init:function(application){this.control({
"log_valr":{beforerender:this.lvr_BR},"log_valr #btnPdf":{click:this.lvr_btn},"log_valr #btnExcel":{click:this.lvr_btn},"log_valr #btnSPSS":{click:this.lvr_btnS},"log_valr #btnRTS":{click:this.lvr_btnS},
"log_valr #area_key":{change:this.lvr_akChg,expand:this.lvr_Expand},
"log_valr #bsg_id":{change:this.lvr_ChgCbo},"log_valr #bsc_id":{change:this.lvr_ChgCbo},"log_valr #bsf_id":{change:this.lvr_ChgCbo},"log_valr #bs_code":{blur:this.lvr_bs_codeBlur},
"log_valr #fuefin_id":{change:this.lvr_ffiChg,expand:this.lvr_Expand},"log_valr #meta_id":{change:this.lvr_meiChg,expand:this.lvr_Expand},"log_valr #tarea_key":{change:this.lvr_tkChg,expand:this.lvr_Expand},"log_pedr #tiprecur_id":{change:this.lvr_triChg,expand:this.lvr_Expand},
"log_valr #proysnip_code":{blur:this.lvr_pscBlur,focus:this.lvr_pscFocus,keypress:this.lvr_psccKP}
});},
lvr_BR:function(comp,opt){var _mi=comp.getMI();var _pan=comp.down("#pan");var _vs=fextpub_sessVar();
	fextpub_repFilt({obj:_pan.down("#rep_id"),mi:_mi});fextpub_yearsValue(_pan.down("#year_id"),_vs.y);fextpub_bsgParam({pan:_pan});fextpub_bscParam({pan:_pan});fextpub_bsfParam({pan:_pan});fext_SV(_pan,"bst_id",1);fextpub_bsgLoad({pan:_pan});
	//fextbud_tareasAMParam({pan:_pan,mi:_mi,TR:"cboCN"});fextbud_tareasATParam({pan:_pan,mi:_mi,TR:"cboCN"});
	//fextbud_tareas_fftredParam({pan:_pan,obj:_pan.down("#fuefin_id"),TR:"FF",mi:_mi,type:"fuefin"});fextbud_tareas_fftredParam({pan:_pan,obj:_pan.down("#tiprecur_id"),TR:"TR",mi:_mi,type:"tiprecur"});fextbud_tareas_fftredParam({pan:_pan,obj:_pan.down("#espedet_id"),TR:"ESPEDET_CN",mi:_mi,type:"espedet"});
	//fextpub_areasFilt({obj:_pan.down("#area_key"),filt:false,mi:_mi,TR:"cbo"});
},
lvr_ChgCbo:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");var _ii=fext_oii(cbo).substr(0,3);if(oldV!=undefined){if(_ii=="bsg"){fextpub_bscLoad({pan:_p});}else if(_ii=="bsc"){fextpub_bsfLoad({pan:_p});}else if(_ii=="bsf"){if(newV*1>0){_pan.down("#bs_code").enable();}else{fext_Dsb(_pan,"bs_code");fext_SV(_pan,"bs_code","");}}}},
lvr_Expand:function(cbo,o){cbo.up("#pan").setF(true);},
lvr_btn:function(btn,e,o){fext_CC("log.SalidaRR").lsr(btn);},
lvr_btnS:function(btn,e,o){fext_CC("log.SalidaRB").lsr(btn);},
lvr_akChg:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");if(_p.getF()){_p.setF(false);fextbud_tareasAMLoad({pan:_p,ff_tr:"YES",clasif:"1V1",fftr_all:1});}},
lvr_bs_codeBlur:function(txtf,the,o){if(txtf.getValue()*1>0){txtf.setValue(fjsLpad(txtf.getValue(),4,0));}},
lvr_ffiChg:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");if(oldV!=undefined&&_p.getF()){_p.setF(false);fextbud_tareas_fftredLoad({pan:_p,obj:_p.down("#tiprecur_id"),type:"tiprecur",clasif:"1V1"});}},
lvr_meiChg:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");if(_p.getF()){_p.setF(false);fextbud_tareasATLoad({pan:_p,ff_tr:"YES",clasif:"1V1",fftr_all:1});}},
lvr_tkChg:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");if(_p.getF()){_p.setF(false);fextbud_tareas_fftredLoad({pan:_p,obj:_p.down("#fuefin_id"),type:"fuefin",clasif:"1V1"});}},
lvr_triChg:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");if(oldV!=undefined&&_p.getF()){_p.setF(false);}},
lvr_pscBlur:function(txtf,The,o){this.lvr_pscS(txtf.up("log_valr"),0);console.log(txtf);},
lvr_pscFocus:function(txtf,The,o){this.lvr_pscS(txtf.up("log_valr"),1);console.log(txtf);},
lvr_psccKP:function(txtf,e,o){if(e.getCharCode()==13){this.lvr_pscS(txtf.up("log_valr"),13);}},
lvr_pscS:function(poCC,pcType){fext_fieldSearch(pcType,poCC,["proysnip_key","PROYSNIP_CODE","proysnip_code","proysnip_nombre"],["php/siaf_proyecto_snip_json_records.php","xxProysnip_code","textfield_search",""],"",["","","","","",""]);},
});