Ext.define("Siace.controller.pub.Bienes_Servs_ClasesB",{extend:"Ext.app.Controller",stores:["array.Bst","array.YearsAB"],views:["pub.Bienes_Servs_ClasesB"],
init:function(application){this.control({
"pub_bscb":{beforerender:this.pbscb_BR},"pub_bscb #panC #opc_id":{change:this.pbscb_pan_oiChg},
"pub_bscb #panC #bsc_nombre":{change:this.pbscb_pan_Chg,keypress:this.pbscb_pan_bsc_KP},"pub_bscb #panC #bsg_id":{change:this.pbscb_pan_ChgCbo},"pub_bscb #panC #bst_id":{change:this.pbscb_pan_ChgCbo},"pub_bscb #panC #grdC":{cellclick:this.pbscb_pan_grdCellClk,selectionchange:this.pbscb_pan_grdSelChg},
"pub_bscb #tabF":{activate:this.pbscb_tabsAct},"pub_bscb #tabF #btnNew":{click:this.pbscb_t1_btn},"pub_bscb #tabF #btnModify":{click:this.pbscb_t1_btn},"pub_bscb #tabF #btnQuery":{click:this.pbscb_t1_btn},
"pub_bscb #tabF #grdF":{selectionchange:this.pbscb_t1_grdSelChg},
"pub_bscb #tabM":{activate:this.pbscb_tabsAct},"pub_bscb #tabM #opc_id":{change:this.pbscb_tabs_oiChg},"pub_bscb #tabM #btnAdd":{click:this.pbscb_t2_btn},"pub_bscb #tabM #btnModify":{click:this.pbscb_t2_btn},"pub_bscb #tabM #btnQuery":{click:this.pbscb_t2_btn},"pub_bscb #tabM #btnDelete":{click:this.pbscb_t2_btn},
"pub_bscb #tabM #grdM":{selectionchange:this.pbscb_t2_grdSelChg},
"pub_bscb #tabCO":{activate:this.pbscb_tabsAct},"pub_bscb #tabCO #opc_id":{change:this.pbscb_tabs_oiChg},"pub_bscb #tabCO #btnAdd":{click:this.pbscb_t3_btnAddClick},"pub_bscb #tabCO #btnModify":{click:this.pbscb_t3_btnModifyClick},"pub_bscb #tabCO #btnQuery":{click:this.pbscb_t3_btnQueryClick},"pub_bscb #tabCO #btnDelete":{click:this.pbscb_t3_btnDeleteClick},
"pub_bscb #tabCO #grdCO":{selectionchange:this.pbscb_t3_grdSelChg},
});},
pbscb_BR:function(comp,opt){var _mi=comp.getMI();_pan=comp.down("#panC");var _t1=comp.down("#tabF");var _t2=comp.down("#tabM");var _t3=comp.down("#tabCO");var _grd=_pan.down("#grdC");var _me=this;var _TQ="";if(_mi==5154){_TQ="PAT";fext_SV(_t1,"menu_id",5158);fext_SV(_t2,"menu_id",5159);fext_SV(_t3,"menu_id",5160);}
	fextpub_uamoPerm({comp:_pan,mi:_mi});fextpub_uamoPerm({comp:_t1});fextpub_uamoPerm({comp:_t2});fextpub_uamoPerm({comp:_t3});fextpub_bsgParam({pan:_pan,TQ:_TQ});
	var _str1=fext_CS("pub.Bienes_Servs_FamiliasB");fext_BSGP(_t1,_str1);_str1.sort("bsf_codigo","ASC");
	_str1.on("beforeload",function(str,oper,opt){fext_Dsb(_t1,"",["btnModify","btnQuery"]);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxBsc_id","xxType_record","xxPag"],[_r.data.bsc_id,"grd",1]);});
	var _str2=fext_CS("pub.Bienes_Servs_Clases_MarcasPBSCB");fext_BSGP(_t2,_str2);_str2.sort("marc_nombre","ASC");
	_str2.on("beforeload",function(str,oper,opt){fext_Dsb(_t2,"",["btnModify","btnQuery","btnDelete"]);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxBsc_id","xxType_record","xxPag"],[_r.data.bsc_id,"grdPBSCB",1]);});
	var _str3=fext_CS("pub.Bienes_Servs_Clases_ComplementariosPBSCB");fext_BSGP(_t3,_str3);_str3.sort("compl_nombre","ASC");
	_str3.on("beforeload",function(str,oper,opt){fext_Dsb(_t3,"",["btnModify","btnQuery","btnDelete"]);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxBsc_id","xxType_record","xxPag"],[_r.data.bsc_id,"grdPBSCB",1]);});
	fext_SV(_pan,"bst_id",1);if(_mi==5154){fext_SVI(_pan,"bst_id",false);}
	var _str=fext_CS("pub.Bienes_Servs_ClasesB");fext_BSGP(_pan,_str);_str.sort("bsc_nombre","ASC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(_pan,"",["btnModify","btnQuery","btnDelete"]);_me.pbscb_tabsClean(comp,true);fext_PSEP(str,["xxBst_id","xxBsg_id","xxBsc_nombre","xxType_record","xxType_query","xxPag"],["","","","grd",_TQ,1],_pan,["bst_id","bsg_id","bsc_nombre","","",""]);});_str.load();
},
pbscb_tabsAct:function(comp,opt){if(!fext_grdSR(comp.up("pub_bscb"),"grdC")){return false;}fext_GS(comp).load();},
pbscb_tabsClean:function(poC,pb){var _md=fext_CM("pub.Bien_Serv_ClaseW");
	var _t=poC.down("#tabF");fext_grdOC(_t,pb,_md);fext_SDO(_t,"btnNew","",1,pb?true:"");fext_Dsb(_t,"",["btnModify","btnQuery"]);
	_t=poC.down("#tabM");fext_grdOC(_t,pb,_md);fext_SDO(_t,"btnAdd","",13,pb?true:"");fext_Dsb(_t,"",["btnModify","btnQuery","btnDelete"]);
	_t=poC.down("#tabCO");fext_grdOC(_t,pb,_md);fext_SDO(_t,"btnAdd","",13,pb?true:"");fext_Dsb(_t,"",["btnModify","btnQuery","btnDelete"]);
},
pbscb_tabs_oiChg:function(cbo,newV,oldV,opt){fext_TS(cbo);},
pbscb_pan_Chg:function(cbo,newV,oldV,opt){this.pbscb_pan_Clean(cbo.up("panel"));},
pbscb_pan_ChgCbo:function(cbo,newV,oldV,opt){var _p=cbo.up("#panC");var _ii=fext_oii(cbo);if(oldV!=undefined){this.pbscb_pan_Clean(_p);}if(_ii=="bst_id"){fextpub_bsgLoad({pan:_p});}},
pbscb_pan_Clean:function(poC){fext_grdOC(poC);fext_Dsb(poC,"",["btnModify","btnQuery","btnDelete"]);this.pbscb_tabsClean(poC.up("panel"),true);},
pbscb_pan_bsc_KP:function(txtf,e,opt){fext_KPL(txtf,e,"panC");},
pbscb_pan_oiChg:function(cbo,newV,oldV,opt){fext_SDO(cbo.up("panel"),"btnNew",cbo,1);},
pbscb_pan_grdCellClk:function(cell,td,cellI,r,tr,rowI,e,o){fext_TL(cell.up("pub_bscb"));},
pbscb_pan_grdSelChg:function(mod,r,o){fext_CC("pub.BSCB").pbscb_sc(mod,r,this);},
pbscb_t1_btn:function(btn,e,o){fext_CC("pub.BSCBT1B").pbscb(btn);},
pbscb_t1_grdSelChg:function(mod,r,o){fext_CC("pub.BSCBT1").pbscb_sc(mod,r);},
pbscb_t2_btn:function(btn,e,o){fext_CC("pub.BSCBT2B").pbscb(btn);},
pbscb_t2_grdSelChg:function(mod,r,o){fext_CC("pub.BSCBT2").pbscb_sc(mod,r);},

pbscb_t3_btn:function(btn,e,o){fext_CC("pub.BSCBT2B").pbscb(btn);},
pbscb_t3_grdSelChg:function(mod,r,o){fext_CC("pub.BSCBT3").pbscb_sc(mod,r);},
});