Ext.define("Siace.controller.log.PedidosR",{extend:"Ext.app.Controller",stores:["array.BstAB","array.FFAB"],views:["log.PedidosR"],
init:function(application){this.control({
"log_pedr":{beforerender:this.lpr_BR},"log_pedr #pan #btnPdf":{click:this.lpr_pan_btn},"log_pedr #pan #btnExcel":{click:this.lpr_pan_btn},"log_pedr #btnSPSS":{click:this.lpr_pan_btnS},
"log_pedr #pan #area_key":{change:this.lpr_pan_akChg,expand:this.lpr_Expand},
"log_pedr #pan #bsc_id":{change:this.lpr_ChgCbo},"log_pedr #pan #bsf_id":{change:this.lpr_ChgCbo},"log_pedr #pan #bsg_id":{change:this.lpr_ChgCbo},"log_pedr #pan #bst_id":{change:this.lpr_ChgCbo},
"log_pedr #pan #fuefin_id":{change:this.lpr_pan_ffiChg,expand:this.lpr_Expand},"log_pedr #pan #meta_id":{change:this.lpr_pan_meiChg,expand:this.lpr_Expand},"log_pedr #pan #tarea_key":{change:this.lpr_pan_tkChg,expand:this.lpr_Expand},"log_pedr #pan #tiprecur_id":{change:this.lpr_pan_triChg,expand:this.lpr_Expand},
"log_pedr #proysnip_code":{blur:this.lpr_pan_pscBlur,focus:this.lpr_pan_pscFocus,keypress:this.lpr_pan_psccKP}
});},
lpr_BR:function(comp,opt){var _mi=comp.getMI();var _pan=comp.down("#pan");var _cboUAK=comp.down("#usuracce_key");var _vs=fextpub_sessVar();
	fextpub_repFilt({obj:_pan.down("#rep_id"),mi:_mi});fextpub_yearsValue(_pan.down("#year_id"),_vs.y);fextlog_faseFilt({obj:_pan.down("#fase_id"),di:"501",ft:1,TR:"cbo",TQ:"cboLPB"});
	fextbud_tareasAMParam({pan:_pan,mi:_mi,TR:"cboCN"});fextbud_tareasATParam({pan:_pan,mi:_mi,TR:"cboCN"});
	fextbud_tareas_fftredParam({pan:_pan,obj:_pan.down("#fuefin_id"),TR:"FF_CN",mi:_mi,type:"fuefin"});
	fextbud_tareas_fftredParam({pan:_pan,obj:_pan.down("#tiprecur_id"),TR:"TR_CN",type:"tiprecur",mi:_mi});
	fextbud_tareas_fftredParam({pan:_pan,obj:_pan.down("#espedet_id"),TR:"ESPEDET_CN",mi:_mi,type:"espedet"});
	fextpub_bsgParam({pan:_pan});fextpub_bscParam({pan:_pan});fextpub_bsfParam({pan:_pan});
	fextpub_tabgenFilt({obj:_pan.down("#tipped_id"),tgp:5005,TR:"cbo"});fextpub_tabgenFilt({obj:_pan.down("#categ_id"),tgp:5050,TR:"cbo"});
	fextpub_areasFilt({obj:_pan.down("#area_key"),filt:false,mi:_mi,TR:"cbo"});
	_cboUAK.bindStore(fext_CS("log.Fases_Accesos_Usuarios_AccesosUsuracceData"));
	_cboUAK.getStore().load({params:{xxFase_id:"161",xxOrder_by:"indiv_apenom",xxAdd_blank:"YES",xxType_record:"cboCTZDRS"},callback:function(r,oper,succ){_cboUAK.setValue("");}});
},
lpr_ChgCbo:function(cbo,newV,oldV,opt){var _p=cbo.up("#pan");var _ii=fext_oii(cbo).substr(0,3);if(oldV!=undefined){if(_ii=="bst"){fextpub_bsgLoad({pan:_p});}else if(_ii=="bsg"){fextpub_bscLoad({pan:_p});}else if(_ii=="bsc"){fextpub_bsfLoad({pan:_p});}}},
lpr_Expand:function(cbo,opt){cbo.up("#pan").setF(true);},
lpr_pan_btn:function(btn,e,o){fext_CC("log.PedRR").lpr(btn);},
lpr_pan_btnS:function(btn,e,o){fext_CC("log.PedRB").lpr(btn);},
lpr_pan_akChg:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");if(_p.getF()){_p.setF(false);fextbud_tareasAMLoad({pan:_p,ff_tr:"YES",clasif:"1V1",fftr_all:1});}},
lpr_pan_ffiChg:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");if(oldV!=undefined&&_p.getF()){_p.setF(false);fextbud_tareas_fftredLoad({pan:_p,obj:_p.down("#tiprecur_id"),type:"tiprecur",clasif:"1V1"});}},
lpr_pan_meiChg:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");if(_p.getF()){_p.setF(false);fextbud_tareasATLoad({pan:_p,ff_tr:"YES",clasif:"1V1"});}},
lpr_pan_tkChg:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");if(_p.getF()){_p.setF(false);fextbud_tareas_fftredLoad({pan:_p,obj:_p.down("#fuefin_id"),type:"fuefin",clasif:"1V1"});}},
lpr_pan_triChg:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");if(oldV!=undefined&&_p.getF()){_p.setF(false);}},
lpr_pan_pscBlur:function(txtf,The,o){this.lpr_pan_pscS(txtf.up("log_ingr"),0);console.log(txtf);console.log(the);},
lpr_pan_pscFocus:function(txtf,The,o){this.lpr_pan_pscS(txtf.up("log_ingr"),1);console.log(txtf);console.log(the);},
lpr_pan_psccKP:function(txtf,e,opt){if(e.getCharCode()==13){this.lpr_pan_pscS(txtf.up("log_ingr"),13);}},
lpr_pan_pscS:function(poCC,pcType){fext_fieldSearch(pcType,poCC,["proysnip_key","PROYSNIP_CODE","proysnip_code","proysnip_nombre"],["php/siaf_proyecto_snip_json_records.php","xxProysnip_code","textfield_search",""],"",["","","","","",""]);},
});