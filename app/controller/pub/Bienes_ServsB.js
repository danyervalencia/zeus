Ext.define("Siace.controller.pub.Bienes_ServsB",{extend:"Ext.app.Controller",stores:["array.Bst","array.DocOrdenAB","array.YearsAB"],views:["pub.Bienes_ServsB"],
init:function(application){this.control({
"pub_bsb":{beforerender:this.pbsb_BR},"pub_bsb #pan #opc_id":{change:this.pbsb_pan_oiChg},"pub_bsb #pan #btnNew":{click:this.pbsb_pan_btn},"pub_bsb #pan #btnModify":{click:this.pbsb_pan_btn},"pub_bsb #pan #btnQuery":{click:this.pbsb_pan_btn},
"pub_bsb #pan #bs_nombre":{change:this.pbsb_pan_Chg,keypress:this.pbsb_pan_KP},"pub_bsb #pan #bsc_id":{change:this.pbsb_pan_ChgCbo},"pub_bsb #pan #bsf_id":{change:this.pbsb_pan_ChgCbo},"pub_bsb #pan #bsg_id":{change:this.pbsb_pan_ChgCbo},"pub_bsb #pan #bst_id":{change:this.pbsb_pan_ChgCbo},"pub_bsb #pan #espedet_id":{change:this.pbsb_pan_ChgCbo},
"pub_bsb #pan #grdPBS":{cellclick:this.pbsb_pan_grdCellClk,selectionchange:this.pbsb_pan_grdSelChg},
"pub_bsb #tabPBSED":{activate:this.pbsb_tabsAct},"pub_bsb #tabPBSED #btnNew":{click:this.pbsb_t1_btn},"pub_bsb #tabPBSED #btnModify":{click:this.pbsb_t1_btn},
"pub_bsb #tabPBSED #grdPBSED":{selectionchange:this.pbsb_t1_grdSelChg},
"pub_bsb #tabLP #opc_id":{change:this.pbsb_tabs_oiChg},"pub_bsb #tabLP #btnQuery":{click:this.pbsb_t2_btn},"pub_bsb #tabLP #btnDet":{click:this.pbsb_t2_btn},"pub_bsb #tabLP #btnAttach":{click:this.pbsb_t2_btn},"pub_bsb #tabLP #btnFases":{click:this.pbsb_t2_btn},"pub_bsb #tabLP #btnPrinter":{click:this.pbsb_t2_btn},
"pub_bsb #tabLP #area_key":{change:this.pbsb_t2_ChgCbo},"pub_bsb #tabLP #doc_id":{change:this.pbsb_t2_ChgCbo},"pub_bsb #tabLP #grdLPD":{selectionchange:this.pbsb_t2_grdSelChg},"pub_bsb #tabLP #meta_id":{change:this.pbsb_t2_ChgCbo},"pub_bsb #tabLP #tarea_key":{change:this.pbsb_t2_ChgCbo},"pub_bsb #tabLP #tipgast_id":{change:this.pbsb_t2_ChgCbo},"pub_bsb #tabLP #year_id":{change:this.pbsb_t2_ChgCbo},
"pub_bsb #tabLC #opc_id":{change:this.pbsb_tabs_oiChg},"pub_bsb #tabLC #btnQuery":{click:this.pbsb_t3_btn},"pub_bsb #tabLC #btnPrinter":{click:this.pbsb_t3_btn},"pub_bsb #tabLC #btnProvider":{click:this.pbsb_t3_btn},
"pub_bsb #tabLC #area_key":{change:this.pbsb_t3_ChgCbo},"pub_bsb #tabLC #grdLCD":{selectionchange:this.pbsb_t3_grdSelChg},"pub_bsb #tabLC #meta_id":{change:this.pbsb_t3_ChgCbo},"pub_bsb #tabLC #tarea_key":{change:this.pbsb_t3_ChgCbo},"pub_bsb #tabLC #tipgast_id":{change:this.pbsb_t3_ChgCbo},"pub_bsb #tabLC #year_id":{change:this.pbsb_t3_ChgCbo},
"pub_bsb #tabLO #opc_id":{change:this.pbsb_tabs_oiChg},"pub_bsb #tabLO #btnPrinter":{click:this.pbsb_t4_btn},"pub_bsb #tabLO #btnFases":{click:this.pbsb_t4_btn},"pub_bsb #tabLO #btnProvider":{click:this.pbsb_t4_btn},
"pub_bsb #tabLO #area_key":{change:this.pbsb_t4_ChgCbo},"pub_bsb #tabLO #doc_id":{change:this.pbsb_t4_ChgCbo},"pub_bsb #tabLO #grdLOD":{selectionchange:this.pbsb_t4_grdSelChg},"pub_bsb #tabLO #meta_id":{change:this.pbsb_t4_ChgCbo},"pub_bsb #tabLO #tarea_key":{change:this.pbsb_t4_ChgCbo},"pub_bsb #tabLO #tipgast_id":{change:this.pbsb_t4_ChgCbo},"pub_bsb #tabLO #year_id":{change:this.pbsb_t4_ChgCbo}
});},
pbsb_BR:function(comp,o){var _mi=comp.getMI();_pan=comp.down("#pan");var _t1=comp.down("#tabPBSED");var _t2=comp.down("#tabLP");var _t3=comp.down("#tabLC");var _t4=comp.down("#tabLO");var _grd=_pan.down("#grdPBS");var _me=this;
	fextpub_uamoPerm({comp:_pan,mi:_mi});fextpub_uamoPerm({comp:_t1});fextpub_uamoPerm({comp:_t2});fextpub_uamoPerm({comp:_t3});fextpub_uamoPerm({comp:_t4});
	fextpub_bsgParam({pan:comp});fextpub_bscParam({pan:comp});fextpub_bsfParam({pan:comp});fextbud_espedetFilt({pan:comp.down("#pan"),TQ:"SOLO_BS"});fext_SV(_pan,"bst_id",1);
	var _str1=fext_CS("pub.Bienes_Servs_Especificas_DetPBSB");fext_BSGP(_t1,_str1);_str1.sort("espedet_codigo","ASC");
	_str1.on("beforeload",function(str,oper,opt){fext_Dsb(_t1,"",["btnModify","btnDelete"]);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxBs_key","xxType_record","xxPag"],[_r.data.bs_key,"grdPBSB",1]);});
	fextpub_areasFilt({obj:_t2.down("#area_key"),ak:"",nuk:"NoT",dsb:true});fextbud_metasParam({pan:_t2});fextbud_tareasParam({pan:_t2});fextpub_tabgenFilt({obj:_t2.down("#tipgast_id"),tgp:2020,TR:"cboC",dsb:true});
	var _str2=fext_CS("log.Pedidos_DetPBSB");fext_BSGP(_t2,_str2);_str2.sort("ped_fecha","DESC");
	_str2.on("beforeload",function(str,oper,opt){_me.pbsb_t2_DB(_t2);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxBs_key","xxYear_id","xxArea_key","xxMeta_id","xxTarea_key","xxType_record","xxPag"],[_r.data.bs_key,"","","","","grdPBSB",1],_t2,["","year_id","area_key","meta_id","tarea_key","",""]);});
	fextpub_areasFilt({obj:_t3.down("#area_key"),ak:"",nuk:"NoT",dsb:true});fextbud_metasParam({pan:_t3});fextbud_tareasParam({pan:_t3});fextpub_tabgenFilt({obj:_t3.down("#tipgast_id"),tgp:2020,TR:"cboC",dsb:true});
	var _str3=fext_CS("log.Cotizaciones_DetPBSB");fext_BSGP(_t3,_str3);_str3.sort("coti_fecha","ASC");
	_str3.on("beforeload",function(str,oper,opt){_me.pbsb_t3_DB(_t3);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxBs_key","xxYear_id","xxArea_key","xxMeta_id","xxTipgast_id","xxTarea_key","xxType_record","xxPag"],[_r.data.bs_key,"","","","","","grdPBSB",1],_t3,["","year_id","area_key","meta_id","tipgast_id","tarea_key","",""]);});
	fextpub_areasFilt({obj:_t4.down("#area_key"),ak:"",nuk:"NoT",dsb:true});fextbud_metasParam({pan:_t4});fextbud_tareasParam({pan:_t4});fextpub_tabgenFilt({obj:_t4.down("#tipgast_id"),tgp:2020,TR:"cboC",dsb:true});
	var _str4=fext_CS("log.Ordenes_DetPBSB");fext_BSGP(_t4,_str4);_str4.sort("orden_fecha","ASC");
	_str4.on("beforeload",function(str,oper,opt){_me.pbsb_t4_DB(_t4);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxBs_key","xxYear_id","xxDoc_id","xxArea_key","xxMeta_id","xxTipgast_id","xxTarea_key","xxMonto_min","xxType_record","xxPag"],[_r.data.bs_key,"","","","","","","0.01","grdPBSB",1],_t4,["","year_id","doc_id","area_key","meta_id","tipgast_id","tarea_key","","",""]);});
	var _str=fext_CS("pub.Bienes_ServsB");fext_BSGP(_pan,_str);_str.sort("bs_nombre","ASC");
	_str.on("beforeload",function(str,oper,opt){_me.pbsb_pan_DB(_pan);_me.pbsb_tabsClean(comp,true);fext_PSEP(str,["xxBst_id","xxBsg_id","xxBsc_id","xxBsf_id","xxBs_nombre","xxEspedet_id","xxType_record","xxPag"],["","","","","","","grd",1],_pan,["bst_id","bsg_id","bsc_id","bsf_id","bs_nombre","espedet_id","",""]);});
	this.pbsb_tabsClean(comp,true);
},
pbsb_tabsAct:function(comp,o){if(!fext_grdSR(comp.up("pub_bsb"),"grdPBS")){return false;}fext_GS(comp).load();},
pbsb_tabsClean:function(poC,pb){var _md=fext_CM("pub.Bien_ServW");
	var _t=poC.down("#tabPBSED");fext_grdOC(_t,pb,_md);fext_SDO(_t,"btnNew","",1,pb);fext_Dsb(_t,"",["btnModify","btnDelete"]);
	_t=poC.down("#tabLP");fext_grdOC(_t,pb,_md);this.pbsb_t2_DB(_t);fext_SD(_t,"",pb,["year_id","doc_id","area_key","tipgast_id"]);fext_SDS(_t,"meta_id",pb);fext_SDS(_t,"tarea_key",pb);
	_t=poC.down("#tabLC");fext_grdOC(_t,pb,_md);this.pbsb_t3_DB(_t);fext_SD(_t,"",pb,["year_id","area_key","tipgast_id"]);fext_SDS(_t,"meta_id",pb);fext_SDS(_t,"tarea_key",pb);
	_t=poC.down("#tabLO");fext_grdOC(_t,pb,_md);this.pbsb_t4_DB(_t);fext_SD(_t,"",pb,["year_id","doc_id","area_key","tipgast_id"]);fext_SDS(_t,"meta_id",pb);fext_SDS(_t,"tarea_key",pb);
},
pbsb_tabs_oiChg:function(cbo,newV,oldV,o){fext_TS(cbo);},
pbsb_pan_Chg:function(cbo,newV,oldV,o){this.pbsb_pan_Clean(cbo.up("#pan"));},
pbsb_pan_ChgCbo:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");if(oldV!=undefined){this.pbsb_pan_Clean(_p);}var _ii=fext_oii(cbo);if(_ii=="bst_id"){fextpub_bsgLoad({pan:_p});}else if(_ii=="bsg_id"){fextpub_bscLoad({pan:_p});}else if(_ii=="bsc_id"){fextpub_bsfLoad({pan:_p});}},
pbsb_pan_Clean:function(poC){fext_grdOC(poC);this.pbsb_pan_DB(poC);this.pbsb_tabsClean(poC.up("pub_bsb"),true);},
pbsb_pan_DB:function(poC){fext_Dsb(poC,"",["btnModify","btnQuery","btnDelete","btnPrinter"]);},
pbsb_pan_KP:function(txtf,e,o){fext_KPL(txtf,e,"pan");},
pbsb_pan_oiChg:function(cbo,newV,oldV,o){fext_SDO(cbo.up("#pan"),"btnNew",cbo,1);},
pbsb_pan_btn:function(btn,e,o){fext_CC("pub.BSBB").pbsb(btn);},
pbsb_pan_grdCellClk:function(cell,td,cellI,r,tr,rowI,e,o){fext_TL(cell.up("pub_bsb"));},
pbsb_pan_grdSelChg:function(mod,r,o){fext_CC("pub.BSB").pbsb_sc(mod,r);},
pbsb_t1_btn:function(btn,e,o){fext_CC("pub.BSBT1").pbsb_btn(btn);},
pbsb_t1_grdSelChg:function(mod,r,o){fext_CC("pub.BSBT1").pbsb_sc(mod,r);},
pbsb_t2_ChgCbo:function(cbo,newV,oldV,o){var _t=cbo.up("#tabLP");var _ii=fext_oii(cbo);if(oldV!=undefined){this.pbsb_t2_Clean(_t);if(_ii=="area_key"){fextbud_metasLoad({pan:_t});}else if(fjsIn_array,_ii,["meta_id","tipgast_id"]){fextbud_tareasLoad({pan:_t});}}if(_ii=="year_id"){fextbud_metasLoad({pan:_t});}},
pbsb_t2_Clean:function(poC){fext_grdOC(poC);this.pbsb_t2_DB(poC);},
pbsb_t2_DB:function(poC){fext_Dsb(poC,"",["btnQuery","btnDet","btnAttach","btnFases","btnPrinter"]);},
pbsb_t2_btn:function(btn,e,o){fext_CC("pub.BSBT2").pbsb_btn(btn);},
pbsb_t2_grdSelChg:function(mod,r,o){fext_CC("pub.BSBT2").pbsb_sc(mod,r);},
pbsb_t3_ChgCbo:function(cbo,newV,oldV,o){var _t=cbo.up("#tabLC");var _ii=fext_oii(cbo);if(oldV!=undefined){this.pbsb_t3_Clean(_t);if(_ii=="area_key"){fextbud_metasLoad({pan:_t});}else if(fjsIn_array,_ii,["meta_id","tipgast_id"]){fextbud_tareasLoad({pan:_t});}}if(_ii=="year_id"){fextbud_metasLoad({pan:_t});}},
pbsb_t3_Clean:function(poC){fext_grdOC(poC);this.pbsb_t3_DB(poC);},
pbsb_t3_DB:function(poC){fext_Dsb(poC,"",["btnQuery","btnPrinter","btnProvider"]);},
pbsb_t3_btn:function(btn,e,o){fext_CC("pub.BSBT3").pbsb_btn(btn);},
pbsb_t3_grdSelChg:function(mod,r,o){fext_CC("pub.BSBT3").pbsb_sc(mod,r);},
pbsb_t4_ChgCbo:function(cbo,newV,oldV,o){var _t=cbo.up("#tabLO");var _ii=fext_oii(cbo);if(oldV!=undefined){this.pbsb_t4_Clean(_t);if(_ii=="area_key"){fextbud_metasLoad({pan:_t});}else if(fjsIn_array,_ii,["meta_id","tipgast_id"]){fextbud_tareasLoad({pan:_t});}}if(_ii=="year_id"){fextbud_metasLoad({pan:_t});}},
pbsb_t4_Clean:function(poC){fext_grdOC(poC);this.pbsb_t4_DB(poC);},
pbsb_t4_DB:function(poC){fext_Dsb(poC,"",["btnQuery","btnPrinter","btnFases","btnProvider"]);},
pbsb_t4_btn:function(btn,e,o){fext_CC("pub.BSBT4").pbsb_btn(btn);},
pbsb_t4_grdSelChg:function(mod,r,o){fext_CC("pub.BSBT4").pbsb_sc(mod,r);},
});