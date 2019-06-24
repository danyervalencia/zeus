Ext.define("Siace.controller.log.SalidasR",{extend:"Ext.app.Controller",stores:["array.Bst","array.Years"],views:["log.SalidasR"],
init:function(application){this.control({
"log_salr":{beforerender:this.lsr_BR},"log_salr #btnPdf":{click:this.lsr_btn},"log_salr #btnExcel":{click:this.lsr_btn},"log_salr #btnSPSS":{click:this.lsr_btnS},"log_salr #btnRTS":{click:this.lsr_btnS},
"log_salr #area_key":{change:this.lsr_akChg,expand:this.lsr_Expand},
"log_salr #bsg_id":{change:this.lsr_ChgCbo},"log_salr #bsc_id":{change:this.lsr_ChgCbo},"log_salr #bsf_id":{change:this.lsr_ChgCbo},"log_salr #bs_code":{blur:this.lsr_bs_codeBlur},
"log_salr #fuefin_id":{change:this.lsr_ffiChg,expand:this.lsr_Expand},"log_salr #meta_id":{change:this.lsr_meiChg,expand:this.lsr_Expand},"log_salr #tarea_key":{change:this.lsr_tkChg,expand:this.lsr_Expand},"log_pedr #tiprecur_id":{change:this.lsr_triChg,expand:this.lsr_Expand},
"log_salr #proysnip_code":{blur:this.lsr_pscBlur,focus:this.lsr_pscFocus,keypress:this.lsr_psccKP}
});},
lsr_BR:function(comp,opt){var _mi=comp.getMI();var _pan=comp.down("#pan");var _vs=fextpub_sessVar();
	fextpub_repFilt({obj:_pan.down("#rep_id"),mi:_mi});fextpub_yearsValue(_pan.down("#year_id"),_vs.y);fextpub_bsgParam({pan:_pan});fextpub_bscParam({pan:_pan});fextpub_bsfParam({pan:_pan});fext_SV(_pan,"bst_id",1);fextpub_bsgLoad({pan:_pan});
	fextbud_tareasAMParam({pan:_pan,mi:_mi,TR:"cboCN"});fextbud_tareasATParam({pan:_pan,mi:_mi,TR:"cboCN"});
	fextbud_tareas_fftredParam({pan:_pan,obj:_pan.down("#fuefin_id"),TR:"FF",mi:_mi,type:"fuefin"});fextbud_tareas_fftredParam({pan:_pan,obj:_pan.down("#tiprecur_id"),TR:"TR",mi:_mi,type:"tiprecur"});fextbud_tareas_fftredParam({pan:_pan,obj:_pan.down("#espedet_id"),TR:"ESPEDET_CN",mi:_mi,type:"espedet"});
	fextpub_areasFilt({obj:_pan.down("#area_key"),filt:false,mi:_mi,TR:"cbo"});
},
lsr_ChgCbo:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");var _ii=fext_oii(cbo).substr(0,3);if(oldV!=undefined){if(_ii=="bsg"){fextpub_bscLoad({pan:_p});}else if(_ii=="bsc"){fextpub_bsfLoad({pan:_p});}else if(_ii=="bsf"){if(newV*1>0){_pan.down("#bs_code").enable();}else{fext_Dsb(_pan,"bs_code");fext_SV(_pan,"bs_code","");}}}},
lsr_Expand:function(cbo,o){cbo.up("#pan").setF(true);},
lsr_btn:function(btn,e,o){fext_CC("log.SalRR").lsr(btn);},
lsr_btnS:function(btn,e,o){fext_CC("log.SalRB").lsr(btn);},
lsr_akChg:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");if(_p.getF()){_p.setF(false);fextbud_tareasAMLoad({pan:_p,ff_tr:"YES",clasif:"1V1",fftr_all:1});}},
lsr_bs_codeBlur:function(txtf,the,o){if(txtf.getValue()*1>0){txtf.setValue(fjsLpad(txtf.getValue(),4,0));}},
lsr_ffiChg:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");if(oldV!=undefined&&_p.getF()){_p.setF(false);fextbud_tareas_fftredLoad({pan:_p,obj:_p.down("#tiprecur_id"),type:"tiprecur",clasif:"1V1"});}},
lsr_meiChg:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");if(_p.getF()){_p.setF(false);fextbud_tareasATLoad({pan:_p,ff_tr:"YES",clasif:"1V1",fftr_all:1});}},
lsr_tkChg:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");if(_p.getF()){_p.setF(false);fextbud_tareas_fftredLoad({pan:_p,obj:_p.down("#fuefin_id"),type:"fuefin",clasif:"1V1"});}},
lsr_triChg:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");if(oldV!=undefined&&_p.getF()){_p.setF(false);}},
lsr_pscBlur:function(txtf,The,o){this.lsr_pscS(txtf.up("log_salr"),0);console.log(txtf);},
lsr_pscFocus:function(txtf,The,o){this.lsr_pscS(txtf.up("log_salr"),1);console.log(txtf);},
lsr_psccKP:function(txtf,e,o){if(e.getCharCode()==13){this.lsr_pscS(txtf.up("log_salr"),13);}},
lsr_pscS:function(poCC,pcType){fext_fieldSearch(pcType,poCC,["proysnip_key","PROYSNIP_CODE","proysnip_code","proysnip_nombre"],["php/siaf_proyecto_snip_json_records.php","xxProysnip_code","textfield_search",""],"",["","","","","",""]);},
});