Ext.define("Siace.controller.bud.MetasB",{extend:"Ext.app.Controller",stores:["array.Years","array.DocOrdenAB"],views:["bud.MetasB"],refs:[{ref:"bmb",selector:"bud_metab"}],
init:function(application){this.control({
"bud_metab":{beforerender:this.bmb_BR},"bud_metab #pan #opc_id":{change:this.bmb_pan_oiChg},"bud_metab #pan #btnNew":{click:this.bmb_pan_btn},"bud_metab #pan #btnModify":{click:this.bmb_pan_btn},"bud_metab #pan #btnQuery":{click:this.bmb_pan_btn},
"bud_metab #pan #actproy_code":{change:this.bmb_pan_Chg,keypress:this.bmb_pan_KP},"bud_metab #pan #func_code":{change:this.bmb_pan_Chg},"bud_metab #pan #grdBM":{cellclick:this.bmb_pan_grdCellClk,selectionchange:this.bmb_pan_grdSelChg},"bud_metab #pan #secfunc_nombre":{change:this.bmb_pan_Chg,keypress:this.bmb_pan_KP},"bud_metab #pan #unieje_key":{change:this.bmb_pan_ChgCbo},"bud_metab #pan #year_id":{change:this.bmb_pan_ChgCbo},
"bud_metab #tabSG":{activate:this.bmt_tabsAct},
"bud_metab #tabBTF":{activate:this.bmt_tabsAct},"bud_metab #tabBTF #opc_id":{change:this.btb_tabs_oiChg},
"bud_metab #tabBTA":{activate:this.bmt_tabsAct},"bud_metab #tabBTA #opc_id":{change:this.btb_tabs_oiChg},
"bud_metab #tabBTUA":{activate:this.bmt_tabsAct},"bud_metab #tabBTUA #opc_id":{change:this.btb_tabs_oiChg},
"bud_metab #tabLP":{activate:this.bmt_tabsAct},"bud_metab #tabLP #opc_id":{change:this.btb_tabs_oiChg},"bud_metab #tabLP #btnQuery":{click:this.bmb_t5_btn},"bud_metab #tabLP #btnDet":{click:this.bmb_t5_btn},"bud_metab #tabLP #btnAttach":{click:this.bmb_t5_btn},"bud_metab #tabLP #btnFases":{click:this.bmb_t5_btn},"bud_metab #tabLP #btnPrinter":{click:this.bmb_t5_btn},
"bud_metab #tabLP #area_key":{change:this.bmb_t5_ChgCbo},"bud_metab #tabLP #grdLP":{selectionchange:this.bmb_t5_grdSelChg},"bud_metab #tabLP #tipped_id":{change:this.bmb_t5_ChgCbo},"bud_metab #tabLP #tipgast_id":{change:this.bmb_t5_ChgCbo},
"bud_metab #tabLO":{activate:this.bmt_tabsAct},"bud_metab #tabLO #opc_id":{change:this.btb_tabs_oiChg},"bud_metab #tabLO #btnPrinter":{click:this.bmb_t6_btn},"bud_metab #tabLO #btnFases":{click:this.bmb_t6_btn},
"bud_metab #tabLO #area_key":{change:this.bmb_t6_ChgCbo},"bud_metab #tabLO #doc_id":{change:this.bmb_t6_ChgCbo},"bud_metab #tabLO #grdLO":{selectionchange:this.bmb_t6_grdSelChg},"bud_metab #tabLO #tipgast_id":{change:this.bmb_t6_ChgCbo}
});},
bmb_BR:function(comp,o){var _mi=comp.getMI();var _p=comp.down("#pan");var _t1=comp.down("#tabSG");var _t2=comp.down("#tabBTF");var _t3=comp.down("#tabBTA");var _t4=comp.down("#tabBTUA");var _t5=comp.down("#tabLP");var _t6=comp.down("#tabLO");var _grd=_p.down("#grdBM");var _me=this;var _vs=fextpub_sessVar();
	fextpub_uamoPerm({comp:_p,mi:_mi});fextpub_uamoPerm({comp:_t2});fextpub_uamoPerm({comp:_t3});fextpub_uamoPerm({comp:_t4});fextpub_uamoPerm({comp:_t5});fextpub_uamoPerm({comp:_t6});
	fextsia_funcParam({pan:_p});fextpub_yearsValue(_p.down("#year_id"),"");
	var _str1=fext_CS("siaf.GastoBMB");fext_BSGP(_t1,_str1);
	_str1.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd);fext_PSEP(str,["xxMeta_id","xxType_record","vs","xxPag"],[_r.data.meta_id,"grdBMB",fext_JE(_vs),1]);});
	var _str3=fext_CS("bud.Tareas_AreasBTB");fext_BSGP(_t3,_str3);_str3.sort("area_nombre","ASC");
	_str3.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd);fext_PSEP(str,["xxMeta_id","xxType_record","xxPag"],[_r.data.meta_id,"grdBMB",1]);});
	var _str4=fext_CS("bud.Tareas_Usuarios_AccesosBMB");fext_BSGP(_t4,_str4);_str4.sort("indiv_apenom","ASC");
	_str4.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd);fext_PSEP(str,["xxMeta_id","xxType_record","xxPag"],[_r.data.meta_id,"grdBMB",1]);});
	fextpub_tabgenFilt({obj:_t5.down("#tipped_id"),tgp:5005,TR:"cboA",dsb:true});fextpub_areasFilt({obj:_t5.down("#area_key"),ak:"",nuk:"NoT",dsb:true});fextpub_tabgenFilt({obj:_t5.down("#tipgast_id"),tgp:2020,TR:"cboC",dsb:true});
	var _str5=fext_CS("log.PedidosBTB");fext_BSGP(_t5,_str5);_str5.sort("ped_fecha","DESC");
	_str5.on("beforeload",function(str,oper,opt){_me.bmb_t5_DB(_t5);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxMeta_id","xxYear_id","xxTipped_id","xxArea_key","xxTipgast_id","xxType_record","vs","xxPag","xxMenu_id","ssNO_USK","ssNO_YEAR"],[_r.data.meta_id,"","","","","grdBMB",fext_JE(_vs),1,"","NoT","NoT"],_t5,["","year_id","tipped_id","area_key","tipgast_id","","","","menu_id","",""]);});
	fextpub_tabgenFilt({obj:_t6.down("#tipgast_id"),tgp:2020,TR:"cboC",dsb:true});fextpub_areasFilt({obj:_t6.down("#area_key"),ak:"",nuk:"NoT",dsb:true});
	var _str6=fext_CS("log.OrdenesBTB");fext_BSGP(_t6,_str6);_str6.sort("orden_fecha","DESC");
	_str6.on("beforeload",function(str,oper,opt){_me.bmb_t6_DB(_t6);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxMeta_id","xxYear_id","xxDoc_id","xxTipgast_id","xxArea_key","xxMonto_min","xxType_record","vs","xxMenu_id","xxPag","ssNO_USK","ssNO_YEAR"],[_r.data.meta_id,"","","","","0.01","grdBMB",fext_JE(_vs),"",1,"NoT","NoT"],_t6,["","year_id","doc_id","tipgast_id","area_key","","","","menu_id","","",""]);});
	var _str=fext_CS("bud.MetasB");fext_BSGP(_p,_str);_str.sort("secfunc_code","ASC");
	_str.on("beforeload",function(str,oper,opt){_me.pab_pan_DB(_p);_me.bmb_tabsClean(comp,true);fext_PSEP(str,["xxYear_id","xxFunc_code","xxActproy_code","xxSecfunc_nombre","xxType_record","xxPag"],["","","","","grd",1],_p,["year_id","func_code","actproy_code","secfunc_nombre","",""]);});_str.load();
},
bmt_tabsAct:function(comp,opt){if(!fext_grdSR(comp.up("bud_metab"),"grdBM")){return false;}fext_GS(comp).load();},
bmb_tabsClean:function(poC,pb){var _mod=fext_CM("bud.MetaW");var _t=poC.down("#tabSG");fext_grdOC(_t,pb,_mod);fext_SD(_t,"",pb,["fuefin_id","tiprecur_id"]);
	_t=poC.down("#tabBTF");fext_grdOC(_t,pb,_mod);fext_SD(_t,"",pb,["fuefin_id","tiprecur_id"]);_t=poC.down("#tabBTA");fext_grdOC(_t,pb,_mod);_t=poC.down("#tabBTUA");fext_grdOC(_t,pb,_mod);
	_t=poC.down("#tabLP");fext_grdOC(_t,pb,_mod);this.bmb_t5_DB(_t);fext_SD(_t,"",pb,["tipped_id","area_key","tipgast_id"]);
	_t=poC.down("#tabLO");fext_grdOC(_t,pb,_mod);this.bmb_t6_DB(_t);fext_SD(_t,"",pb,["doc_id","area_key","tipgast_id"]);
},
btb_tabs_oiChg:function(cbo,newV,oldV,o){fext_TS(cbo);},
bmb_pan_Chg:function(txtf,newV,oldV,o){this.bmb_pan_Clean(txtf.up("#pan"));},
bmb_pan_ChgCbo:function(cbo,newV,oldV,opt){var _p=cbo.up("#pan");var _ii=fext_oii(cbo);if(oldV!=undefined){this.bmb_pan_Clean(_p);}if(_ii=="year_id"){var _pan=_p.up("bud_metab");fextsia_funcLoad({pan:_p});fext_SV(_pan.down("#tabLP"),"year_id",newV);fext_SV(_pan.down("#tabLO"),"year_id",newV);}},
bmb_pan_Clean:function(poC){fext_grdOC(poC);this.pab_pan_DB(poC);this.bmb_tabsClean(poC.up("panel"),true);},
pab_pan_DB:function(poC){fext_Dsb(poC,"",["btnModify","btnQuery","btnDelete","btnPrinter"]);},
bmb_pan_KP:function(txtf,e,opt){fext_KPL(txtf,e,"pan");},
bmb_pan_oiChg:function(cbo,newV,oldV,opt){fext_SDO(cbo.up("#pan"),"btnNew",cbo,1);},
bmb_pan_btn:function(btn,e,o){fext_CC("bud.MetaB").bmb_btn(btn);},
bmb_pan_grdCellClk:function(cell,td,cellI,r,tr,rowI,e,o){fext_TL(cell.up("bud_metab"));},
bmb_pan_grdSelChg:function(mod,r,o){fext_CC("bud.MetaB").bmb_sc(mod,r);},
bmb_t5_ChgCbo:function(cbo,newV,oldV,opt){if(oldV!=undefined){this.bmb_t5_Clean(cbo.up("#tabLP"),true);}},
bmb_t5_Clean:function(poC,pb){fext_grdOC(poC);this.bmb_t5_DB(poC);},
bmb_t5_DB:function(poC){fext_Dsb(poC,"",["btnQuery","btnDet","btnAttach","btnFases","btnPrinter"]);},
bmb_t5_btn:function(btn,e,o){fext_CC("bud.MetaBT5").bmb_btn(btn);},
bmb_t5_grdSelChg:function(mod,r,o){fext_CC("bud.MetaBT5").bmb_sc(mod,r);},
bmb_t6_ChgCbo:function(cbo,newV,oldV,opt){if(oldV!=undefined){this.bmb_t6_Clean(cbo.up("#tabLO"),true);}},
bmb_t6_Clean:function(poC,pb){fext_grdOC(poC);this.bmb_t6_DB(poC);},
bmb_t6_DB:function(poC){fext_Dsb(poC,"",["btnQuery","btnPrinter","btnFases"]);},
bmb_t6_btn:function(btn,e,o){fext_CC("bud.MetaBT6").bmb_btn(btn);},
bmb_t6_grdSelChg:function(mod,r,o){fext_CC("bud.MetaBT6").bmb_sc(mod,r);}
});