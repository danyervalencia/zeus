Ext.define("Siace.controller.log.AlmacenesR",{extend:"Ext.app.Controller",stores:["array.Bst","array.Years"],views:["log.AlmacenesR"],
init:function(application){this.control({
"log_almar":{beforerender:this.lar_BR},"log_almar #btnPdf":{click:this.lar_btn},"log_almar #btnExcel":{click:this.lar_btn},"log_almar #btnBPS":{click:this.lar_btnS},"log_almar #btnRTS":{click:this.lar_btnS},
"log_almar #area_key":{change:this.lar_akChg,expand:this.lar_Expand},
"log_almar #bsg_id":{change:this.lar_ChgCbo},"log_almar #bsc_id":{change:this.lar_ChgCbo},"log_almar #bsf_id":{change:this.lar_ChgCbo},"log_almar #bs_code":{blur:this.lar_bs_codeBlur},
"log_almar #fuefin_id":{change:this.lar_ffiChg,expand:this.lar_Expand},"log_almar #meta_id":{change:this.lar_meiChg,expand:this.lar_Expand},"log_almar #tarea_key":{change:this.lar_tkChg,expand:this.lar_Expand},"log_pedr #tiprecur_id":{change:this.lar_triChg,expand:this.lar_Expand},
"log_almar #proy_code":{blur:this.lar_pcBlur,focus:this.lar_pcFocus,keypress:this.lar_pcKP}
});},
lar_BR:function(comp,opt){var _mi=comp.getMI();var _pan=comp.down("#pan");var _vs=fextpub_sessVar();
	fextpub_repFilt({obj:_pan.down("#rep_id"),mi:_mi});
	fextlog_almaFilt({obj:comp.down("#alma_key"),TR:"cboP",TQ:"ONLY"});
	//fextbud_metasFilt({pan:comp,uek:_vs.unieje_key})
	fextpub_bsgParam({pan:_pan});fextpub_bscParam({pan:_pan});fextpub_bsfParam({pan:_pan});fext_SV(_pan,"bst_id",1);fextpub_bsgLoad({pan:_pan});
	//fextbud_tareasAMParam({pan:_pan,mi:_mi,TR:"cboCN"});fextbud_tareasATParam({pan:_pan,mi:_mi,TR:"cboCN"});
	//fextbud_tareas_fftredParam({pan:_pan,obj:_pan.down("#fuefin_id"),TR:"FF",mi:_mi,type:"fuefin"});fextbud_tareas_fftredParam({pan:_pan,obj:_pan.down("#tiprecur_id"),TR:"TR",mi:_mi,type:"tiprecur"});fextbud_tareas_fftredParam({pan:_pan,obj:_pan.down("#espedet_id"),TR:"ESPEDET_CN",mi:_mi,type:"espedet"});
	//fextpub_areasFilt({obj:_pan.down("#area_key"),filt:false,mi:_mi,TR:"cbo"});
},
lar_ChgCbo:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");var _ii=fext_oii(cbo).substr(0,3);if(oldV!=undefined){if(_ii=="bsg"){fextpub_bscLoad({pan:_p});}else if(_ii=="bsc"){fextpub_bsfLoad({pan:_p});}else if(_ii=="bsf"){if(newV*1>0){_pan.down("#bs_code").enable();}else{fext_Dsb(_pan,"bs_code");fext_SV(_pan,"bs_code","");}}}},
lar_Expand:function(cbo,o){cbo.up("#pan").setF(true);},
lar_btn:function(btn,e,o){fext_CC("log.AlmaRR").lar(btn);},
lar_btnS:function(btn,e,o){fext_CC("log.AlmaRB").lar(btn);},
lar_akChg:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");if(_p.getF()){_p.setF(false);fextbud_tareasAMLoad({pan:_p,ff_tr:"YES",clasif:"1V1",fftr_all:1});}},
lar_bs_codeBlur:function(txtf,the,o){if(txtf.getValue()*1>0){txtf.setValue(fjsLpad(txtf.getValue(),4,0));}},
lar_ffiChg:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");if(oldV!=undefined&&_p.getF()){_p.setF(false);fextbud_tareas_fftredLoad({pan:_p,obj:_p.down("#tiprecur_id"),type:"tiprecur",clasif:"1V1"});}},
lar_meiChg:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");if(_p.getF()){_p.setF(false);fextbud_tareasATLoad({pan:_p,ff_tr:"YES",clasif:"1V1",fftr_all:1});}},
lar_tkChg:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");if(_p.getF()){_p.setF(false);fextbud_tareas_fftredLoad({pan:_p,obj:_p.down("#fuefin_id"),type:"fuefin",clasif:"1V1"});}},
lar_triChg:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");if(oldV!=undefined&&_p.getF()){_p.setF(false);}},
lar_pcBlur:function(txtf,The,o){this.lar_pcS(txtf.up("log_almar"),0);console.log(txtf);},
lar_pcFocus:function(txtf,The,o){this.lar_pcS(txtf.up("log_almar"),1);console.log(txtf);},
lar_pcKP:function(txtf,e,o){if(e.getCharCode()==13){this.lar_pcS(txtf.up("log_almar"),13);}},
lar_pcS:function(poCC,pcType){fext_fieldSearch(pcType,poCC,["proy_key","PROY_CODE","proy_code","proy_nombre"],["php/budget_proyectos_son_records.php","xxProy_code","txt_search",""],"",["","","","","",""]);},
});