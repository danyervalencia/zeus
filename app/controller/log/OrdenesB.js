Ext.define("Siace.controller.log.OrdenesB",{extend:"Ext.app.Controller",stores:["array.DocOrdenAB","array.Years"],views:["log.OrdenesB"],
init:function(application){this.control({
"log_ordenb":{beforerender:this.lob_BR},"log_ordenb #pan #opc_id":{change:this.lob_pan_oiChg},
"log_ordenb #pan #btnNew":{click:this.lob_pan_btn},"log_ordenb #pan #btnChange":{click:this.lob_pan_btn},"log_ordenb #pan #btnGlosa":{click:this.lob_pan_btn},"log_ordenb #pan #btnAnnular":{click:this.lob_pan_btn},"log_ordenb #pan #btnSiaf":{click:this.lob_pan_btn},"log_ordenb #pan #btnNotif":{click:this.lob_pan_btn},"log_ordenb #pan #btnPrinter":{click:this.lob_pan_btn},"log_ordenb #pan #btnFases":{click:this.lob_pan_btn},"log_ordenb #pan #btnDocuments":{click:this.lob_pan_btn},"log_ordenb #pan #btnPPS":{click:this.lob_pan_btn},
"log_ordenb #pan #area_key":{change:this.lob_pan_ChgCbo},"log_ordenb #pan #doc_id":{change:this.lob_pan_ChgCbo},"log_ordenb #pan #fechaini":{change:this.lob_pan_Chg},"log_ordenb #pan #fechafin":{change:this.lob_pan_Chg},
"log_ordenb #pan #grdLO":{cellclick:this.lob_pan_grdCellClk,selectionchange:this.lob_pan_grdSelChg},
"log_ordenb #pan #meta_id":{change:this.lob_pan_ChgCbo},"log_ordenb #pan #orden_nro":{change:this.lob_pan_Chg,keypress:this.lob_pan_KP},
"log_ordenb #pan #pers_ruc":{blur:this.lob_pan_prBlur,change:this.lob_pan_Chg,focus:this.lob_pan_prFocus,keypress:this.lob_pan_prKP},"log_ordenb #pan #tarea_key":{change:this.lob_pan_ChgCbo},"log_ordenb #pan #year_id":{change:this.lob_pan_ChgCbo},
"log_ordenb #tabLOD":{activate:this.lob_tabsAct},
"log_ordenb #tabLOP":{activate:this.lob_tabsAct},"log_ordenb #tabLOP #opc_id":{change:this.lob_tabs_oiChg},
"log_ordenb #tabLOP #btnQuery":{click:this.lob_t2_btn},"log_ordenb #tabLOP #btnPrinter":{click:this.lob_t2_btn},"log_ordenb #tabLOP #grdLOP":{selectionchange:this.lob_t2_grdSelChg},
"log_ordenb #tabLI":{activate:this.lob_tabsAct},"log_ordenb #tabLI #opc_id":{change:this.lob_tabs_oiChg},
});},
lob_BR:function(comp,o){var _mi=comp.getMI();var _p=comp.down("#pan");var _t1=comp.down("#tabLOD");var _t2=comp.down("#tabLOP");var _t3=comp.down("#tabLI");var _grd=_p.down("#grdLO");var _vs=fextpub_sessVar();var _me=this;
	fextpub_uamoPerm({comp:_p,mi:_mi});fextpub_uamoPerm({comp:_t2});fextpub_uamoPerm({comp:_t3});
	fextbud_tareasAMParam({pan:_p,mi:_mi});fextbud_tareasATParam({pan:_p,mi:_mi});fextpub_yearsVisible(_p.down("#year_id"),_vs.y);fextpub_areasFilt({obj:_p.down("#area_key"),filt:false,mi:_mi,OB:"area_abrev"});
	var _str1=fext_CS("log.Ordenes_DetB");fext_BSGP(_t1,_str1);_str1.sort("ordendet_item","ASC");
	_str1.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd);fext_PSEP(str,["xxOrden_key","xxType_record","xxPag"],[_r.data.orden_key,"grdLOB",1]);});
	var _str2=fext_CS("log.Ordenes_ProcedenciasLOB");fext_BSGP(_t2,_str2);
	_str2.on("beforeload",function(str,oper,opt){fext_Dsb(_t2,"",["btnQuery","btnPrinter"]);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxOrden_key","xxType_record","xxPag"],[_r.data.orden_key,"grdLOB",1]);});
	var _str3=fext_CS("log.IngresosLOB");fext_BSGP(_t3,_str3);_str3.sort("ing_fecha","DESC");
	_str3.on("beforeload",function(str,oper,opt){fext_Dsb(_t3,"",["btnQuery","btnPrinter"]);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxTablex","xxTablex_key","xxType_record","vs","xxMenu_id","xxPag","ssNO_USK"],[5030,_r.data.orden_key,"grdLOB",fext_JE(_vs),_mi,1,"NoT"]);});
	var _str=fext_CS("log.OrdenesB");fext_BSGP(_p,_str);_str.sort("orden_documento","DESC");
	_str.on("beforeload",function(str,oper,opt){_me.lob_pan_DB(_p);_me.lob_tabsClean(comp,true,"");fext_PSEP(str,["xxYear_id","xxDoc_id","xxOrden_nro","xxFechaini","xxFechafin","xxArea_key","xxMeta_id","xxTarea_key","xxPers_key","xxType_record","vs","xxMenu_id","xxPag"],["","","","","","","","","","grd",fext_JE(_vs),_mi,1],_p,["year_id","doc_id","orden_nro","fechaini","fechafin","area_key","meta_id","tarea_key","pers_key","","","",""]);});
},
lob_tabsAct:function(comp,o){if(!fext_grdSR(comp.up("log_ordenb"),"grdLO")){return false;}fext_GS(comp).load();},
lob_tabsClean:function(poC,pb,pcF){var _md=fext_CM("log.OrdenW");var _t=poC.down("#tabLOD");fext_grdOC(_t,pb,_md);
	_t=poC.down("#tabLOP");fext_grdOC(_t,pb||pcF==98?true:pb,_md);fext_Dsb(_t,"",["btnQuery","btnPrinter"]);_t=poC.down("#tabLI");fext_grdOC(_t,pb||pcF==98?true:pb,_md);fext_Dsb(_t,"",["btnQuery","btnPrinter"]);
},
lob_tabs_oiChg:function(cbo,newV,oldV,o){fext_TS(cbo);},
lob_pan_Chg:function(txtf,newV,oldV,o){this.lob_pan_Clean(txtf.up("#pan"));},
lob_pan_ChgCbo:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");var _ii=fext_oii(cbo);if(oldV!=undefined){this.lob_pan_Clean(cbo.up("#pan"));if(_ii=="year_id"){fextbud_metasLoad({pan:_p});}else if(_ii=="meta_id"){fextbud_tareasLoad({pan:_p});}}if(_ii=="area_key"){fextbud_tareasAMLoad({pan:_p});}},
lob_pan_Clean:function(poC){fext_grdOC(poC);this.lob_pan_DB(poC);this.lob_tabsClean(poC.up("log_ordenb"),true);},
lob_pan_DB:function(poC){fext_Dsb(poC,"",["btnChange","btnGlosa","btnAnnular","btnSiaf","btnNotif","btnPrinter","btnFases"]);},
lob_pan_KP:function(txtf,e,o){fext_KPL(txtf,e,"pan");},
lob_pan_oiChg:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");fext_SDO(_p,"btnNew",cbo,1);fext_SDO(_p,"btnChange",cbo,37);fext_SDO(_p,"btnDocuments",cbo,67);},
lob_pan_btn:function(btn,e,opt){fext_CC("log.OrdenBB").lob(btn,opt);},
lob_pan_grdCellClk:function(cell,td,cellI,r,tr,rowI,e,o){fext_TL(cell.up("log_ordenb"));},
lob_pan_grdSelChg:function(mod,r,o){fext_CC("log.OrdenB").lob_sc(mod,r);},
lob_pan_prBlur:function(txtf,The,o){this.lob_pan_prS(txtf.up("#pan"),0);},
lob_pan_prFocus:function(txtf,The,o){this.lob_pan_prS(txtf.up("#pan"),1);},
lob_pan_prKP:function(txtf,e,o){if(e.getCharCode()==13){this.lob_pan_prS(txtf.up("#pan"),13);}},
lob_pan_prS:function(poC,pcType){fext_fieldSearch(pcType,poC,["pers_key","PERS_RUC","pers_ruc","pers_nombre"],["php/public_personas_json_records.php","xxPers_ruc","textfield_search",""],"0",["","",["pers_ruc"],""],"");},
lob_t2_btn:function(btn,e,o){fext_CC("log.OrdenBT2").lob_btn(btn);},
lob_t2_grdSelChg:function(mod,r,o){fext_CC("log.OrdenBT2").lob_sc(mod,r);}
});