Ext.define("Siace.controller.pub.PersonasB",{extend:"Ext.app.Controller",stores:["array.DocOrdenAB","array.YearsAB"],views:["pub.PersonasB"],
init:function(application){this.control({
"pub_persb":{beforerender:this.ppb_BR},
"pub_persb #pan #opc_id":{change:this.ppb_pan_oiChg},"pub_persb #pan #btnNew":{click:this.ppb_pan_btn},"pub_persb #pan #btnModify":{click:this.ppb_pan_btn},"pub_persb #pan #btnQuery":{click:this.ppb_pan_btn},"pub_persb #pan #btnClave":{click:this.ppb_pan_btn},"pub_persb #pan #btnConstancy":{click:this.ppb_pan_btn},
"pub_persb #pan #grdPP":{cellclick:this.ppb_pan_grdCellClk,selectionchange:this.ppb_pan_grdSelChg},
"pub_persb #pan #pers_nombre":{change:this.ppb_pan_Chg,keypress:this.ppb_pan_KP},"pub_persb #pan #pers_ruc":{change:this.ppb_pan_Chg},"pub_persb #pan #tipdocident_id":{change:this.ppb_pan_ChgCbo},"pub_persb #pan #type_query":{change:this.ppb_pan_ChgCbo},
"pub_persb #tabPPA":{activate:this.ppb_tabsAct},"pub_persb #tabPPA #btnNew":{click:this.ppb_t1_btn},"pub_persb #tabPPA #btnModify":{click:this.ppb_t1_btn},"pub_persb #tabPPA #btnQuery":{click:this.ppb_t1_btn},
"pub_persb #tabPPA #grdPPA":{selectionchange:this.ppb_t1_grdSelChg},
"pub_persb #tabPPD #opc_id":{change:this.ppb_tabs_oiChg},
"pub_persb #tabPPF":{activate:this.ppb_tabsAct},"pub_persb #tabPPF #opc_id":{change:this.ppb_tabs_oiChg},"pub_persb #tabPPF #btnNew":{click:this.ppb_t3_btn},"pub_persb #tabPPF #btnModify":{click:this.ppb_t3_btn},"pub_persb #tabPPF #btnQuery":{click:this.ppb_t3_btn},
"pub_persb #tabPPF #grdPPF":{selectionchange:this.ppb_t3_grdSelChg},
"pub_persb #tabLC #opc_id":{change:this.ppb_tabs_oiChg},"pub_persb #tabLC #btnQuery":{click:this.ppb_t4_btn},"pub_persb #tabLC #btnPrinter":{click:this.ppb_t4_btn},
"pub_persb #tabLC #area_key":{change:this.pab_t4_ChgCbo},"pub_persb #tabLC #grdLC":{selectionchange:this.ppb_t4_grdSelChg},"pub_persb #tabLC #meta_id":{change:this.pab_t4_ChgCbo},"pub_persb #tabLC #tarea_key":{change:this.pab_t4_ChgCbo},"pub_persb #tabLC #tipgast_id":{change:this.pab_t4_ChgCbo},"pub_persb #tabLC #year_id":{change:this.pab_t4_ChgCbo},
"pub_persb #tabLO #opc_id":{change:this.ppb_tabs_oiChg},"pub_persb #tabLO #btnPrinter":{click:this.ppb_t5_btn},"pub_persb #tabLO #btnFases":{click:this.ppb_t5_btn},
"pub_persb #tabLO #area_key":{change:this.ppb_t5_ChgCbo},"pub_persb #tabLO #doc_id":{change:this.ppb_t5_ChgCbo},"pub_persb #tabLO #grdLO":{selectionchange:this.ppb_t5_grdSelChg},"pub_persb #tabLO #meta_id":{change:this.ppb_t5_ChgCbo},"pub_persb #tabLO #tarea_key":{change:this.ppb_t5_ChgCbo},"pub_persb #tabLO #tipgast_id":{change:this.ppb_t5_ChgCbo},"pub_persb #tabLO #year_id":{change:this.ppb_t5_ChgCbo},
"pub_persb #tabPPR":{activate:this.ppb_tabsAct},"pub_persb #tabPPR #opc_id":{change:this.ppb_tabs_oiChg},"pub_persb #tabPPR #btnNew":{click:this.ppb_t6_btn},"pub_persb #tabPPR #btnModify":{click:this.ppb_t6_btn},"pub_persb #tabPPR #btnQuery":{click:this.ppb_t6_btn},
"pub_persb #tabPPR #grdPPR":{selectionchange:this.ppb_t6_grdSelChg},
});},
ppb_BR:function(comp,opt){var _mi=comp.getMI();var _pan=comp.down("#pan");var _t1=comp.down("#tabPPA");var _t2=comp.down("#tabPPD");var _t3=comp.down("#tabPPF");var _t4=comp.down("#tabLC");var _t5=comp.down("#tabLO");var _t6=comp.down("#tabPPR");var _grd=_pan.down("grid");var _vs=fextpub_sessVar();var _me=this;
	fextpub_tipdocidentFilt({obj:_pan.down("#tipdocident_id"),tdiep:1});fextpub_uamoPerm({comp:_pan,mi:_mi});
	if(_mi==5105){fext_SV(_t1,"menu_id",5110);fext_SV(_t3,"menu_id",5107);fext_SV(_t2,"menu_id",5106);fext_SV(_t4,"menu_id",5108);fext_SV(_t5,"menu_id",5109);fext_SVI(_pan,"",true,["btnClave","btnConstancy"]);_grd.columns[3].hidden=false;_grd.columns[4].hidden=false;}
	fextpub_uamoPerm({comp:_t1});fextpub_uamoPerm({comp:_t2});fextpub_uamoPerm({comp:_t3});fextpub_uamoPerm({comp:_t4});fextpub_uamoPerm({comp:_t5});fextpub_uamoPerm({comp:_t6});
	var _str1=fext_CS("pub.Personas_ActividadesPPB");fext_BSGP(_t1,_str1);_str1.sort("activ_nombre","ASC");
	_str1.on("beforeload",function(str,oper,opt){fext_Dsb(_t1,"",["btnModify","btnQuery","btnDelete"]);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxPers_key","xxType_record","xxPag"],[_r.data.pers_key,"grdPPB",1]);});
	var _str3=fext_CS("pub.Personas_FonosPPB");fext_BSGP(_t3,_str3);_str3.sort("persfono_nro","ASC");
	_str3.on("beforeload",function(str,oper,opt){fext_Dsb(_t3,"",["btnModify","btnQuery","btnDelete"]);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxPers_key","xxType_record","xxPag"],[_r.data.pers_key,"grdPPB",1]);});
	fextpub_areasFilt({obj:_t4.down("#area_key"),ak:"",nuk:"NoT",dsb:true});fextbud_metasParam({pan:_t4});fextbud_tareasParam({pan:_t4});fextpub_tabgenFilt({obj:_t4.down("#tipgast_id"),tgp:2020,TR:"cboC",dsb:true});
	var _str4=fext_CS("log.CotizacionesPPB");fext_BSGP(_t4,_str4);_str4.sort("coti_fecha","DESC");
	_str4.on("beforeload",function(str,oper,opt){_me.ppb_t4_DB(_t4);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxPers_key","xxYear_id","xxArea_key","xxMeta_id","xxTarea_key","xxTipgast_id","xxType_record","vs","xxMenu_id","xxPag","ssNO_USK","ssNO_YEAR"],[_r.data.pers_key,"","","","","","grdPPB",fext_JE(_vs),_mi,1,"NoT","NoT"],_t4,["","year_id","area_key","meta_id","tarea_key","tipgast_id","","","","","",""]);});		
	fextpub_areasFilt({obj:_t5.down("#area_key"),ak:"",nuk:"NoT",dsb:true});fextbud_metasParam({pan:_t5});fextbud_tareasParam({pan:_t5});fextpub_tabgenFilt({obj:_t5.down("#tipgast_id"),tgp:2020,TR:"cboC",dsb:true});
	var _str5=fext_CS("log.OrdenesPPB");fext_BSGP(_t5,_str5);_str5.sort("orden_fecha","DESC");
	_str5.on("beforeload",function(str,oper,opt){_me.ppb_t5_DB(_t5);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxPers_key","xxYear_id","xxUnieje_key","xxDoc_id","xxArea_key","xxMeta_id","xxTarea_key","xxTipgast_id","xxMonto_min","xxType_record","vs","xxMenu_id","xxPag","ssNO_USK","ssNO_YEAR"],[_r.data.pers_key,"",_vs.ue,"","","","","","0.01","grdPPB",fext_JE(_vs),_mi,1,"NoT","NoT"],_t5,["","year_id","","doc_id","area_key","meta_id","tarea_key","tipgast_id","","","","","","",""]);});
	var _str6=fext_CS("pub.Personas_RestriccionesPPB");fext_BSGP(_t6,_str6);_str6.sort("persrestr_id","ASC");
	_str6.on("beforeload",function(str,oper,opt){fext_Dsb(_t6,"",["btnModify","btnQuery","btnDelete"]);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxPers_key","xxType_record","xxPag"],[_r.data.pers_key,"grdPPB",1]);});
	var _str=fext_CS("pub.PersonasB");fext_BSGP(_pan,_str);_str.sort("pers_nombre","ASC");
	_str.on("beforeload",function(str,oper,opt){_me.ppb_pan_DB(_pan);_me.ppb_tabsClean(comp,true);fext_PSEP(str,["xxTipdocident_id","xxPers_ruc","xxPers_nombre","xxType_record","xxPag"],["","","",(_mi==5105?"grdLog":"grd"),1],_pan,["tipdocident_id","pers_ruc","pers_nombre","",""]);});
	this.ppb_tabsClean(comp,true);
},
ppb_tabsAct:function(comp,opt){if(!fext_grdSR(comp.up("pub_persb"),"grdPP")){return false;}fext_GS(comp).load();},
ppb_tabsClean:function(poC,pb){var _md=fext_CM("pub.PersW");var _t=poC.down("#tabPPA");fext_grdOC(_t,pb,_md);fext_SDO(_t,"btnNew","",1,pb);fext_Dsb(_t,"",["btnModify","btnDelete"]);
	_t=poC.down("#tabPPF");fext_grdOC(_t,pb,_md);fext_SDO(_t,"btnNew","",1,pb);fext_Dsb(_t,"",["btnModify","btnDelete"]);
	_t=poC.down("#tabPPD");fext_grdOC(_t,pb,_md);fext_SDO(_t,"btnNew","",1,pb);fext_Dsb(_t,"",["btnModify","btnDelete"]);
	_t=poC.down("#tabLC");fext_grdOC(_t,pb,_md);this.ppb_t4_DB(_t);fext_SD(_t,"",pb,["year_id","area_key","tipgast_id"]);fext_SDS(_t,"meta_id",pb);fext_SDS(_t,"tarea_key",pb);
	_t=poC.down("#tabLO");fext_grdOC(_t,pb,_md);this.ppb_t5_DB(_t);fext_SD(_t,"",pb,["doc_id","year_id","area_key","tipgast_id"]);fext_SDS(_t,"meta_id",pb);fext_SDS(_t,"tarea_key",pb);
	_t=poC.down("#tabPPR");fext_grdOC(_t,pb,_md);fext_SDO(_t,"btnNew","",1,pb);fext_Dsb(_t,"",["btnModify","btnQuery","btnDelete"]);
},
ppb_tabs_oiChg:function(cbo,newV,oldV,o){fext_TS(cbo);},
ppb_pan_Chg:function(txtf,newV,oldV,o){this.ppb_pan_Clean(txtf.up("#pan"));},
ppb_pan_ChgCbo:function(cbo,nextV,oldV,o){if(oldV!=undefined){this.ppb_pan_Clean(cbo.up("#pan"));}},
ppb_pan_Clean:function(poC){fext_grdOC(poC);this.ppb_pan_DB(poC);},
ppb_pan_DB:function(poC){fext_Dsb(poC,"",["btnModify","btnQuery","btnDelete","btnClave"]);},
ppb_pan_KP:function(txtf,e,o){fext_KPL(txtf,e,"pan");},
ppb_pan_oiChg:function(cbo,newV,oldV,o){fext_SDO(cbo.up("panel"),"btnNew",cbo,1);},
ppb_pan_btn:function(btn,e,o){fext_CC("pub.PersBB").ppb_btn(btn);},
ppb_pan_grdCellClk:function(cell,td,cellI,r,tr,rowI,e,o){fext_TL(cell.up("pub_persb"));},
ppb_pan_grdSelChg:function(mod,r,o){fext_CC("pub.PersB").ppb_sc(mod,r);},
ppb_t1_btn:function(btn,e,opt){fext_CC("pub.PersBT1").ppb_btn(btn);},
ppb_t1_grdSelChg:function(mod,r,o){fext_CC("pub.PersBT1").ppb_sc(mod,r);},
ppb_t3_btn:function(btn,e,opt){fext_CC("pub.PersBT3").ppb_btn(btn);},
ppb_t3_grdSelChg:function(mod,r,o){fext_CC("pub.PersBT3").ppb_sc(mod,r);},
pab_t4_ChgCbo:function(cbo,newV,oldV,o){var _t=cbo.up("#tabLC");var _ii=fext_oii(cbo);if(oldV!=undefined){this.ppb_t4_Clean(_t);if(fjsIn_array,_ii,["meta_id","tipgast_id"]){fextbud_tareasLoad({pan:_t});}else if(_ii=="area_key"){fextbud_metasLoad({pan:_t});}}if(_ii=="year_id"){fextbud_metasLoad({pan:_t});}},
ppb_t4_Clean:function(poC){fext_grdOC(poC);this.ppb_t4_DB(poC);},
ppb_t4_DB:function(poC){fext_Dsb(poC,"",["btnQuery","btnPrinter"]);},
ppb_t4_btn:function(btn,e,opt){fext_CC("pub.PersBT4").ppb_btn(btn);},
ppb_t4_grdSelChg:function(mod,r,o){fext_CC("pub.PersBT4").ppb_sc(mod,r);},
ppb_t5_ChgCbo:function(cbo,newV,oldV,o){var _t=cbo.up("#tabLO");var _ii=fext_oii(cbo);if(oldV!=undefined){this.ppb_t5_Clean(_t);if(fjsIn_array,_ii,["meta_id","tipgast_id"]){fextbud_tareasLoad({pan:_t});}}if(_ii=="year_id"){fextbud_metasLoad({pan:_t});}},
ppb_t5_Clean:function(poC){fext_grdOC(poC);this.ppb_t5_DB(poC,"",["btnQuery","btnPrinter","btnFases"]);},
ppb_t5_DB:function(poC){fext_Dsb(poC,"",["btnQuery","btnPrinter","btnFases"]);},
ppb_t5_btn:function(btn,e,o){fext_CC("pub.PersBT5").ppb_btn(btn);},
ppb_t5_grdSelChg:function(mod,r,o){fext_CC("pub.PersBT5").ppb_sc(mod,r);},
ppb_t6_btn:function(btn,e,o){fext_CC("pub.PersBT6").ppb_btn(btn);},
ppb_t6_grdSelChg:function(mod,r,o){fext_CC("pub.PersBT6").ppb_sc(mod,r);},

});