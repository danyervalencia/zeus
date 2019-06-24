Ext.define("Siace.controller.siaf.ExpedientesB",{extend:"Ext.app.Controller",stores:["array.Years","array.YearsAB"],views:["siaf.ExpedientesB"],
init:function(application){this.control({
"siaf_expeb":{beforerender:this.seb_BR},"siaf_expeb #pan #opc_id":{change:this.seb_pan_oiChg},"siaf_expeb #pan #btnQuery":{click:this.seb_pan_btn},
"siaf_expeb #fechaini":{change:this.seb_pan_Chg},"siaf_expeb #fechafin":{change:this.seb_pan_Chg},"siaf_expeb #grdSE":{cellclick:this.seb_pan_grdCellClk,selectionchange:this.seb_pan_grdSelChg},
"siaf_expeb #expe_nro":{change:this.seb_pan_Chg,keypress:this.seb_pan_KP},"siaf_expeb #pan #year_id":{change:this.seb_pan_ChgCbo},
"siaf_expeb #grdSF":{cellclick:this.seb_t1_grdCellClk},
"siaf_expeb #tabBM":{activate:this.seb_tabsAct},"siaf_expeb #tabBM #year_id":{change:this.seb_t1_ChgCbo},
"siaf_expeb #tabD #opc_id":{change:this.seb_tabs_oiChg},"siaf_expeb #tabD #btnPrinter":{click:this.seb_t2_btn},"siaf_expeb #tabD #btnFases":{click:this.seb_t2_btn},
"siaf_expeb #tabD #doc_id":{change:this.seb_t2_ChgCbo},"siaf_expeb #tabD #grdD":{selectionchange:this.seb_t2_grdSelChg},"siaf_expeb #tabD #meta_id":{change:this.seb_t2_ChgCbo},"siaf_expeb #tabD #year_id":{change:this.seb_t2_ChgCbo},
});},
seb_BR:function(comp,o){var _mi=comp.getMI();var _p=comp.down("#pan");var _t1=comp.down("#tabSF");var _t2=comp.down("#tabSM");var _grd=_p.down("#grdSE");var _me=this;var _vs=fextpub_sessVar();
	fextpub_uamoPerm({comp:_p,mi:_mi});//fextpub_uamoPerm({comp:_t1});fextpub_uamoPerm({comp:_t2});
	fextpub_yearsValue(_p.down("#year_id"),_vs.y);
	var _str1=fext_CS("siaf.Expedientes_FasesSEB");_t1.down("#grdSF").bindStore(_str1);
	_str1.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd);fext_PSEP(str,["xxYear_id","xxExpe_nro","xxType_record","vs","xxPag"],[_r.data.year_id,_r.data.expe_nro,"grdSEB",fext_JE(_vs),1],_t1,["","","","",""]);});

	var _str2=fext_CS("siaf.Expedientes_MetasSEB");_t1.down("#grdSM").bindStore(_str2);
	_str2.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_t1,"grdSF");var _d=_r.data;fext_PSEP(str,["xxYear_id","xxUnieje_id","xxExpe_nro","xxFase_code","xxExpesec_nro","xxType_record","vs","xxPag"],[_d.year_id,_d.unieje_id,_d.expe_nro,_d.fase_code,_d.expesec_nro,"grdSEB",fext_JE(_vs),1],_t1,["","","","","","","",""]);});

	var _str=fext_CS("siaf.ExpedientesB");fext_BSGP(_p,_str);_str.sort("expe_nro","DESC");
	_str.on("beforeload",function(str,oper,opt){_me.seb_tabsClean(comp,true);fext_PSEP(str,["xxYear_id","xxExpe_nro","xxFechaini","xxFechafin","xxType_record","xxPag","vs"],["","","","","grd",1,fext_JE(_vs)],_p,["year_id","expe_nro","fechaini","fechafin","","",""]);});_str.load();
},
seb_tabsAct:function(comp,o){if(!fext_grdSR(comp.up("siaf_expeb"),"grdBP")){return false;}fext_GS(comp).load();},
seb_tabsClean:function(poC,pb){var _md=fext_CM("siaf.ExpedienteW");
	var _t=poC.down("#tabSF");fext_gridClean(_t.down("#grdSF").getStore(),"");fext_gridClean(_t.down("#grdSM").getStore(),"");
	fext_LR(_t,_md);

},
seb_tabs_oiChg:function(cbo,newV,oldV,o){fext_TS(cbo);},
seb_pan_Chg:function(txtf,newV,oldV,o){this.seb_pan_Clean(txtf.up("#pan"));},
seb_pan_ChgCbo:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");var _ii=fext_oii(cbo,"",3);this.seb_pan_Clean(_p);},
seb_pan_Clean:function(poC){fext_grdOC(poC);this.seb_tabsClean(poC.up("panel"),true);},
seb_pan_KP:function(txtf,e,o){fext_KPL(txtf,e,"pan");},
seb_pan_oiChg:function(cbo,newV,oldV,opt){},
seb_pan_btn:function(btn,e,o){fext_CC("siaf.ExpeB").seb_btn(btn);},
seb_pan_grdCellClk:function(cell,td,cellI,r,tr,rowI,e,o){fext_TL(cell.up("siaf_expeb"));},
seb_pan_grdSelChg:function(mod,r,o){fext_CC("siaf.ExpeB").seb_sc(mod,r);},
seb_t1_ChgCbo:function(cbo,newV,oldV,o){var _t=cbo.up("#tabBM");var _ii=fext_oii(cbo);if(oldV!=undefined){this.seb_t1_Clean(_t);}},
seb_t1_Clean:function(poC){fext_grdOC(poC);this.seb_t1_DB(poC);},
seb_t1_DB:function(poC){},
seb_t1_grdCellClk:function(cell,td,cellI,r,tr,rowI,e,o){fext_GS(cell.up("siaf_expeb"),"grdSM").load();},
seb_t2_ChgCbo:function(cbo,newV,oldV,o){var _t=cbo.up("#tabD");var _ii=fext_oii(cbo,"",3);if(oldV!=undefined){this.seb_t2_Clean(_t);}if(_ii=="yea"){var _pc="";if(newV>0){_pc=fext_grdSR(_t.up("siaf_expeb").down("#pan"),"").data.proy_code;}fextbud_metasLoad({pan:_t,psc:_pc});}},
seb_t2_Clean:function(poC){fext_grdOC(poC);this.seb_t2_DB(poC);},
seb_t2_DB:function(poC){fext_Dsb(poC,"",["btnModify","btnQuery","btnPrinter","btnFases"]);},
seb_t2_btn:function(btn,e,o){fext_CC("bud.ProyBT2").seb_btn(btn);},
seb_t2_grdSelChg:function(mod,r,o){fext_CC("bud.ProyBT2").seb_sc(mod,r);},
});