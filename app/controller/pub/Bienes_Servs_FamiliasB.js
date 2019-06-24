Ext.define("Siace.controller.pub.Bienes_Servs_FamiliasB",{extend:"Ext.app.Controller",stores:["array.Bst","array.YearsAB"],views:["pub.Bienes_Servs_FamiliasB"],
init:function(application){this.control({
"pub_bsfb":{beforerender:this.pbsfb_BeforeRender},"pub_bsfb #pan #opc_id":{change:this.pbsfb_pan_oiChg},"pub_bsfb #pan #btnNew":{click:this.pbsfb_pan_btn},"pub_bsfb #pan #btnModify":{click:this.pbsfb_pan_btn},"pub_bsfb #pan #btnQuery":{click:this.pbsfb_pan_btn},"pub_bsfb #pan #btnPrinter":{click:this.pbsfb_pan_btn},
"pub_bsfb #pan #bsf_nombre":{change:this.pbsfb_pan_Chg,keypress:this.pbsfb_pan_KP},"pub_bsfb #pan #bsc_id":{change:this.pbsfb_pan_ChgCbo},"pub_bsfb #pan #bsg_id":{change:this.pbsfb_pan_ChgCbo},"pub_bsfb #pan #bst_id":{change:this.pbsfb_pan_ChgCbo},
"pub_bsfb #pan #grdBSF":{cellclick:this.pbsfb_pan_grdCellClk,selectionchange:this.pbsfb_pan_grdSelChg},"pub_bsfb #pan #tipbsf_id":{change:this.pbsfb_pan_ChgCbo},
"pub_bsfb #tabBS":{activate:this.pbsfb_tabsAct},"pub_bsfb #tabBS #btnNew":{click:this.pbsfb_t1_btn},"pub_bsfb #tabBS #btnModify":{click:this.pbsfb_t1_btn},"pub_bsfb #tabBS #btnQuery":{click:this.pbsfb_t1_btn},
"pub_bsfb #tabBS #grdBS":{selectionchange:this.pbsfb_t1_grdSelChg},
"pub_bsfb #tabLFR":{activate:this.pbsfb_tabsAct},"pub_bsfb #tabLFR #opc_id":{change:this.pbsfb_tabs_oiChg},"pub_bsfb #tabLFR #btnQuery":{click:this.pbsfb_t2_btn},"pub_bsfb #tabLFR #btnAttach":{click:this.pbsfb_t2_btn},"pub_bsfb #tabLFR #btnPrinter":{click:this.pbsfb_t2_btn},
"pub_bsfb #tabLFR #grdLFR":{selectionchange:this.pbsfb_t2_grdSelChg},
"pub_bsfb #tabPM":{activate:this.pbsfb_tabsAct},"pub_bsfb #tabPM #opc_id":{change:this.pbsfb_tabs_oiChg},"pub_bsfb #tabPM #btnNew":{click:this.pbsfb_t3_btn},"pub_bsfb #tabPM #btnModify":{click:this.pbsfb_t3_btn},"pub_bsfb #tabPM #btnQuery":{click:this.pbsfb_t3_btn},"pub_bsfb #tabPM #btnDelete":{click:this.pbsfb_t3_btn},
"pub_bsfb #tabPM #grdPM":{selectionchange:this.pbsfb_t3_grdSelChg}
});},
pbsfb_BeforeRender:function(comp,opt){var _mi=comp.getMI();_pan=comp.down("#pan");var _grd=_pan.down("#grdBSF");_t1=comp.down("#tabBS");_t2=comp.down("#tabLFR");_t3=comp.down("#tabPM");var _me=this;
	if(_mi==1143){_grd.getView().getRowClass=function(r,i){return r.data.tipbsf_id==1057?"mx-letra-azul":"mx-letra-negro";};}
	else if(_mi==5155){fext_SVI(_pan,"",false,["bst_id","tipbsf_id"]);_grd.columns[2].hidden=true;fext_SV(_t1,"menu_id",5161);fext_SV(_t2,"menu_id",5162);fext_SV(_t3,"menu_id",5165);}else{return false;}
	fextpub_uamoPerm({comp:_pan,mi:_mi});fextpub_uamoPerm({comp:_t1});fextpub_uamoPerm({comp:_t2});fextpub_uamoPerm({comp:_t3});
	fextpub_bsgParam({pan:_pan,TQ:_mi==1143?"":"PAT"});fextpub_bscParam({pan:_pan,TQ:_mi==1143?"":"PAT"});fextpub_tabgenFilt({obj:_pan.down("#tipbsf_id"),tgp:1055});
	
	var _str1=fext_CS("pub.Bienes_ServsB");fext_BSGP(_t1,_str1);_str1.sort("bs_nombre","ASC");
	_str1.on("beforeload",function(str,oper,opt){fext_Dsb(_t1,"",["btnModify","btnQuery"]);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxBsf_id","xxType_record","xxPag"],[_r.data.bsf_id,"grd",1]);});
	var _str2=fext_CS("log.Fichas_RegistrosPBSFB");fext_BSGP(_t2,_str2);_str2.sort("fichreg_codigo","ASC");
	_str2.on("beforeload",function(str,oper,opt){fext_Dsb(_t2,"",["btnQuery","btnPrinter"]);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxBsf_id","xxType_record","xxPag"],[_r.data.bsf_id,"grdPBSFB",1]);});
	var _str3=fext_CS("pub.ModelosPBSFB");fext_BSGP(_t3,_str3);_str3.sort("mod_nombre","ASC");
	_str3.on("beforeload",function(str,oper,opt){fext_Dsb(_t3,"",["btnModify","btnQuery","btnDelete"]);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxBsf_id","xxType_record","xxPag"],[_r.data.bsf_id,"grdPBSFB",1]);});
	fext_SV(_pan,"bst_id",1);
	var _str=fext_CS("pub.Bienes_Servs_FamiliasB");fext_BSGP(_pan,_str);_str.sort("bsf_nombre","ASC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(_pan,"",["btnModify","btnQuery","btnDelete"]);_me.pbsfb_tabsClean(comp,true);fext_PSEP(str,["xxBst_id","xxBsg_id","xxBsc_id","xxBsf_nombre","xxTipbsf_id","xxType_record","xxType_query","xxPag"],["","","","","","grd",(_mi==5155?"PAT":""),1],_pan["bst_id","bsg_id","bsc_id","bsf_nombre","tipbsf_id","","",""]);});
	this.pbsfb_tabsClean(comp,true);
},
pbsfb_tabsAct:function(comp,opt){if(!fext_grdSR(comp.up("pub_bsfb"),"grdBSF")){return false;}fext_GS(comp).load();},
pbsfb_tabsClean:function(poC,pb){var _md=fext_CM("pub.Bien_Serv_FamiliaW");var _t=poC.down("#tabBS");fext_grdOC(_t,pb,_md);fext_SDO(_t,"btnNew","",1,pb);fext_Dsb(_t,"",["btnModify","btnQuery"]);
	_t=poC.down("#tabLFR");fext_grdOC(_t,pb,_md);fext_Dsb(_t,"btnQuery");_t=poC.down("#tabPM");fext_grdOC(_t,pb,_md);fext_SDO(_t,"btnNew","",1,pb);fext_Dsb(_t,"",["btnModify","btnQuery"]);
},
pbsfb_tabs_oiChg:function(cbo,newV,oldV,opt){fext_TS(cbo);},
pbsfb_pan_Chg:function(cbo,newV,oldV,opt){this.pbsfb_pan_Clean(cbo.up("panel"));},
pbsfb_pan_ChgCbo:function(cbo,newV,oldV,opt){var _p=cbo.up("#pan");if(oldV!=undefined){this.pbsfb_pan_Clean(_p);var _ii=fext_oii(cbo);if(_ii="bst_id"){fextpub_bsgLoad({pan:_p});}else if(_ii=="bsg_id"){fextpub_bscLoad({pan:_p});}}},
pbsfb_pan_KP:function(txtf,e,opt){fext_KPL(txtf,e,"panF");},
pbsfb_pan_Clean:function(poC){fext_grdOC(poC);fext_Dsb(poC,"",["btnModify","btnQuery","btnDelete"]);this.pbsfb_tabsClean(poC.up("panel"),true);},
pbsfb_pan_oiChg:function(cbo,newV,oldV,opt){fext_SDO(cbo.up("panel"),"btnNew",cbo,1);},
pbsfb_pan_btn:function(btn,e,opt){fext_CC("pub.BSFBB").pbsfb(btn);},
pbsfb_pan_grdCellClk:function(cell,td,cellI,r,tr,rowI,e,o){fext_TL(cell.up("pub_bsfb"));},
pbsfb_pan_grdSelChg:function(mod,r,o){fext_CC("pub.BSFB").pbsfb_sc(mod,r);},
pbsfb_t1_btn:function(btn,e,opt){fext_CC("pub.BSFBT1B").pbsfb(btn);},
pbsfb_t1_grdSelChg:function(mod,r,o){fext_CC("pub.BSFBT1").pbsfb_sc(mod,r);},
pbsfb_t2_btn:function(btn,e,opt){fext_CC("pub.BSFBT2B").pbsfb(btn);},
pbsfb_t2_grdSelChg:function(mod,r,o){fext_CC("pub.BSFBT2").pbsfb_sc(mod,r);},
pbsfb_t3_btn:function(btn,e,opt){fext_CC("pub.BSFBT3B").pbsfb(btn);},
pbsfb_t3_grdSelChg:function(mod,r,o){fext_CC("pub.BSFBT3").pbsfb_sc(mod,r);}
});