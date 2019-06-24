Ext.define("Siace.controller.pub.AreasB",{extend:"Ext.app.Controller",stores:["array.DocOrdenAB","array.Years","array.YearsAB"],views:["pub.AreasB"],
init:function(application){this.control({
"pub_areab":{beforerender:this.pab_BR},"pub_areab #pan #opc_id":{change:this.pab_pan_oiChg},"pub_areab #pan #btnNew":{click:this.pab_pan_btn},"pub_areab #pan #btnModify":{click:this.pab_pan_btn},"pub_areab #pan #btnQuery":{click:this.pab_pan_btn},
"pub_areab #pan #area_nombre":{change:this.pab_pan_Chg,keypress:this.pab_pan_KP},"pub_areab #pan #grdPA":{cellclick:this.pab_pan_grdCellClk,selectionchange:this.pab_pan_grdSelChg},"pub_areab #pan #loc_key":{change:this.pab_pan_ChgCbo},
"pub_areab #tabBTA":{activate:this.pab_tabsAct},"pub_areab #tabBTA #meta_id":{change:this.pab_t1_ChgCbo},"pub_areab #tabBTA #tipgast_id":{change:this.pab_t1_ChgCbo},"pub_areab #tabBTA #year_id":{change:this.pab_t1_ChgCbo},
"pub_areab #tabPUA":{activate:this.pab_tabsAct},"pub_areab #tabPUA #opc_id":{change:this.pab_tabs_oiChg},"pub_areab #tabPUA #btnModify":{click:this.pab_t2_btn},"pub_areab #tabPUA #btnQuery":{click:this.pab_t2_btn},"pub_areab #tabPUA #btnTarea":{click:this.pab_t2_btn},"pub_areab #tabPUA #btnMenu":{click:this.pab_t2_btn},
"pub_areab #tabPUA #cargusur_id":{change:this.pab_t2_ChgCbo},"pub_areab #tabPUA #grdPUA":{selectionchange:this.pab_t2_grdSelChg},
"pub_areab #tabLFA":{activate:this.pab_tabsAct},"pub_areab #tabLFA #opc_id":{change:this.pab_tabs_oiChg},"pub_areab #tabLFA #btnNew":{click:this.pab_t3_btn},"pub_areab #tabLFA #btnModify":{click:this.pab_t3_btn},"pub_areab #tabLFA #btnQuery":{click:this.pab_t3_btn},"pub_areab #tabLFA #grdLFA":{selectionchange:this.pab_t3_grdSelChg},
"pub_areab #tabLP #opc_id":{change:this.pab_tabs_oiChg},"pub_areab #tabLP #btnQuery":{click:this.pab_t4_btn},"pub_areab #tabLP #btnDet":{click:this.pab_t4_btn},"pub_areab #tabLP #btnAttach":{click:this.pab_t4_btn},"pub_areab #tabLP #btnFases":{click:this.pab_t4_btn},"pub_areab #tabLP #btnPrinter":{click:this.pab_t4_btn},
"pub_areab #tabLP #grdLP":{selectionchange:this.pab_t4_grdSelChg},"pub_areab #tabLP #meta_id":{change:this.pab_t4_ChgCbo},"pub_areab #tabLP #tarea_key":{change:this.pab_t4_ChgCbo},"pub_areab #tabLP #tipped_id":{change:this.pab_t4_ChgCbo},"pub_areab #tabLP #year_id":{change:this.pab_t4_ChgCbo},
"pub_areab #tabLO #opc_id":{change:this.pab_tabs_oiChg},"pub_areab #tabLO #btnPrinter":{click:this.pab_t5_btn},"pub_areab #tabLO #btnFases":{click:this.pab_t5_btn},
"pub_areab #tabLO #doc_id":{change:this.pab_t5_ChgCbo},"pub_areab #tabLO #grdLO":{selectionchange:this.pab_t5_grdSelChg},"pub_areab #tabLO #meta_id":{change:this.pab_t5_meiChg},"pub_areab #tabLO #tarea_key":{change:this.pab_t5_ChgCbo},"pub_areab #tabLO #tipgast_id":{change:this.pab_t5_ChgCbo},"pub_areab #tabLO #year_id":{change:this.pab_t5_yiChg}
});},
pab_BR:function(comp,o){var _mi=comp.getMI();_p=comp.down("#pan");var _t1=comp.down("#tabBTA");var _t2=comp.down("#tabPUA");var _t3=comp.down("#tabLFA");var _t4=comp.down("#tabLP");var _t5=comp.down("#tabLO");var _grd=_p.down("#grdPA");var _me=this;var _vs=fextpub_sessVar();
	fextpub_uamoPerm({comp:_p,mi:_mi});fextpub_uamoPerm({comp:_t1});fextpub_uamoPerm({comp:_t2});fextpub_uamoPerm({comp:_t3});fextpub_uamoPerm({comp:_t4});fextpub_uamoPerm({comp:_t5});fextpub_locFilt({obj:comp.down("#loc_key")});
	fextbud_metasParam({pan:_t1});fextpub_tabgenFilt({obj:_t1.down("#tipgast_id"),tgp:2020,TR:"cboC",dsb:true});
	var _str1=fext_CS("bud.Tareas_AreasPAB");fext_BSGP(_t1,_str1);_str1.sort("tarea_codigo","ASC");
	_str1.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd);fext_PSEP(str,["xxArea_key","xxYear_id","xxMeta_id","xxTipgast_id","xxType_record","xxPag"],[_r.data.area_key,"","","","grdPAB",1],_t1,["","year_id","meta_id","tipgast_id","",""]);});
	fextpub_cargusurFilt({obj:_t2.down("#cargusur_id"),TR:"cbo",OB:"cargusur_orden"});
	var _str2=fext_CS("pub.Usuarios_AccesosPAB");fext_BSGP(_t2,_str2);_str2.sort("indiv_apenom","ASC");
	_str2.on("beforeload",function(str,oper,opt){_me.pab_t2_DB(_t2);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxArea_key","xxCargusur_id","xxType_record","xxPag"],[_r.data.area_key,"","grdPAB",1],_t2,["","cargusur_id","",""]);});
	var _str3=fext_CS("log.Fases_AccesosPAB");fext_BSGP(_t3,_str3);
	_str3.on("beforeload",function(str,oper,opt){_me.pab_t3_DB(_t3);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxArea_key","xxType_record","xxPag"],[_r.data.area_key,"grdPAB",1]);});
	fextpub_tabgenFilt({obj:_t4.down("#tipped_id"),tgp:5005,TR:"cboA",dsb:true});fextbud_metasParam({pan:_t4});fextbud_tareasParam({pan:_t4});fextpub_tabgenFilt({obj:_t4.down("#tipgast_id"),tgp:2020,TR:"cboC"});
	var _str4=fext_CS("log.PedidosPAB");fext_BSGP(_t4,_str4);_str4.sort("ped_fecha","DESC");
	_str4.on("beforeload",function(str,oper,opt){_me.pab_t4_DB(_t4);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxArea_key","xxYear_id","xxTipped_id","xxMeta_id","xxTarea_key","xxType_record","vs","xxMenu_id","xxPag","ssNO_USK","ssNO_YEAR"],[_r.data.area_key,"","","","","grdPAB",fext_JE(_vs),_mi,1,"NoT","NoT"],_t4,["","year_id","tipped_id","meta_id","tarea_key","","","","","",""]);});
	fextbud_metasParam({pan:_t5});fextbud_tareasParam({pan:_t5});fextpub_tabgenFilt({obj:_t5.down("#tipgast_id"),tgp:2020,TR:"cboC"});
	var _str5=fext_CS("log.OrdenesPAB");fext_BSGP(_t5,_str5);_str5.sort("orden_fecha","DESC");
	_str5.on("beforeload",function(str,oper,opt){_me.pab_t5_DB(_t5);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxArea_key","xxYear_id","xxDoc_id","xxTipgast_id","xxMeta_id","xxTarea_key","xxMonto_min","xxType_record","vs","xxMenu_id","xxPag","ssNO_USK","ssNO_YEAR"],[_r.data.area_key,"","","","","","0.01","grdPAB",fext_JE(_vs),_mi,1,"NoT","NoT"],_t5,["","year_id","doc_id","tipgast_id","meta_id","tarea_key","","","","","","",""]);});
	var _str=fext_CS("pub.AreasB");fext_BSGP(_p,_str);_str.sort("area_nombre","ASC");
	_str.on("beforeload",function(str,oper,opt){_me.pab_pan_DB(_p);_me.pab_tabsClean(comp,true);fext_PSEP(str,["xxArea_nombre","xxLoc_key","xxType_record","vs","xxPag","ssNO_USK"],["","","grd",fext_JE(_vs),1,"NoT"],_p,["area_nombre","loc_key","","","",""]);});_str.load();
},
pab_tabsAct:function(comp,opt){if(!fext_grdSR(comp.up("pub_areab"),"grdPA")){return false;}fext_GS(comp).load();},
pab_tabsClean:function(poC,pb){var _md=fext_CM("pub.AreaW");var _t=poC.down("#tabBTA");fext_grdOC(_t,pb,_md);fext_SD(_t,"",pb,["year_id","meta_id","tipgast_id"]);
	_t=poC.down("#tabPUA");fext_grdOC(_t,pb,_md);this.pab_t2_DB(_t);fext_SD(_t,"cargusur_id",pb);
	_t=poC.down("#tabLFA");fext_grdOC(_t,pb,_md);this.pab_t3_DB(_t);fext_SDO(_t,"btnNew","",1,pb?true:"");
	_t=poC.down("#tabLP");fext_grdOC(_t,pb,_md);this.pab_t4_DB(_t);fext_SD(_t,"",pb,["year_id","tipped_id"]);fext_SDS(_t,"meta_id",pb);fext_SD(_t,"tipgast_id",pb);fext_SDS(_t,"tarea_key",pb);
	_t=poC.down("#tabLO");fext_grdOC(_t,pb,_md);this.pab_t5_DB(_t);fext_SD(_t,"",pb,["year_id","doc_id","tipgast_id"]);fext_SDS(_t,"meta_id",pb);fext_SDS(_t,"tarea_key",pb);
},
pab_tabs_oiChg:function(cbo,newV,oldV,o){fext_TS(cbo);},
pab_pan_Chg:function(txtf,newV,oldV,o){this.pab_pan_Clean(txtf.up("#pan"));},
pab_pan_ChgCbo:function(cbo,newV,oldV,o){if(oldV!=undefined){this.pab_pan_Clean(cbo.up("#pan"));}},
pab_pan_Clean:function(poC){fext_grdOC(poC);this.pab_pan_DB(poC);this.pab_tabsClean(poC.up("panel"),true);},
pab_pan_DB:function(poC){fext_Dsb(poC,"",["btnModify","btnQuery"]);},
pab_pan_KP:function(txtf,e,opt){fext_KPL(txtf,e,"pan");},
pab_pan_oiChg:function(cbo,newV,oldV,o){fext_SDO(cbo.up("panel"),"btnNew",cbo,1);},
pab_pan_btn:function(btn,e,opt){fext_CC("pub.AreaBB").pab(btn);},
pab_pan_grdCellClk:function(cell,td,cellI,r,tr,rowI,e,o){fext_TL(cell.up("pub_areab"));},
pab_pan_grdSelChg:function(mod,r,o){fext_CC("pub.AreaB").pab_sc(mod,r);},
pab_t1_ChgCbo:function(cbo,newV,oldV,o){var _t=cbo.up("#tabBTA");var _ii=fext_oii(cbo);if(oldV!=undefined){this.pab_t1_Clean(_t);}if(_ii=="year_id"){fextbud_metasLoad({pan:_t});}},
pab_t1_Clean:function(poC){fext_grdOC(poC);},
pab_t2_ChgCbo:function(cbo,newV,oldV,o){if(oldV!=undefined){this.pab_t2_Clean(cbo.up("#tabPUA"));}},
pab_t2_Clean:function(poC){fext_grdOC(poC);this.pab_t2_DB(poC);},
pab_t2_DB:function(poC){fext_Dsb(poC,"",["btnModify","btnQuery","btnTarea","btnMenu"]);},
pab_t2_btn:function(btn,e,opt){fext_CC("pub.AreaBT2").pab_btn(btn);},
pab_t2_grdSelChg:function(mod,r,o){fext_CC("pub.AreaBT2").pab_sc(mod,r);},
pab_t3_DB:function(poC){fext_Dsb(poC,"",["btnModify","btnQuery","btnDelete"]);},
pab_t3_btn:function(btn,e,opt){fext_CC("pub.AreaBT3").pab_btn(btn);},
pab_t3_grdSelChg:function(mod,r,o){fext_CC("pub.AreaBT3").pab_sc(mod,r);},
pab_t4_ChgCbo:function(cbo,newV,oldV,o){var _t=cbo.up("#tabLP");var _ii=fext_oii(cbo);if(oldV!=undefined){this.pab_t4_Clean(_t);if(fjsIn_array,_ii,["meta_id","tipgast_id"]){fextbud_tareasLoad({pan:_t});}}if(_ii=="year_id"){fextbud_metasLoad({pan:_t});}},
pab_t4_Clean:function(poC){fext_grdOC(poC);this.pab_t4_DB(poC);},
pab_t4_DB:function(poC){fext_Dsb(poC,"",["btnQuery","btnDet","btnAttach","btnFases","btnPrinter"]);},
pab_t4_btn:function(btn,e,opt){fext_CC("pub.AreaBT4").pab_btn(btn);},
pab_t4_grdSelChg:function(mod,r,o){fext_CC("pub.AreaBT4").pab_sc(mod,r);},
pab_t5_ChgCbo:function(cbo,newV,oldV,o){var _t=cbo.up("#tabLO");var _ii=fext_oii(cbo);if(oldV!=undefined){this.pab_t5_Clean(_t);if(fjsIn_array,_ii,["meta_id","tipgast_id"]){fextbud_tareasLoad({pan:_t});}}if(_ii=="year_id"){fextbud_metasLoad({pan:_t});}},
pab_t5_Clean:function(poC){fext_grdOC(poC);this.pab_t5_DB(poC);},
pab_t5_DB:function(poC){fext_Dsb(poC,"",["btnPrinter","btnFases"]);},
pab_t5_btn:function(btn,e,o){fext_CC("pub.AreaBT5").pab_btn(btn);},
pab_t5_grdSelChg:function(mod,r,o){fext_CC("pub.AreaBT5").pab_sc(mod,r);}
});