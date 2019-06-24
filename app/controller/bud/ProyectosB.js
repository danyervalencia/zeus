Ext.define("Siace.controller.bud.ProyectosB",{extend:"Ext.app.Controller",stores:["array.YearsAB","array.DocOrdenAB"],views:["bud.ProyectosB"],refs:[{ref:"bpb",selector:"bud_proyb"}],
init:function(application){this.control({
"bud_proyb":{beforerender:this.bpb_BR},"bud_proyb #pan #opc_id":{change:this.bpb_pan_oiChg},"bud_proyb #pan #btnNew":{click:this.bpb_pan_btn},"bud_proyb #pan #btnModify":{click:this.bpb_pan_btn},"bud_proyb #pan #btnQuery":{click:this.bpb_pan_btn},
"bud_proyb #pan #actproy_code":{change:this.bpb_pan_Chg,keypress:this.bpb_pan_KP},"bud_proyb #pan #func_code":{change:this.bpb_pan_Chg},"bud_proyb #pan #grdBP":{cellclick:this.bpb_pan_grdCellClk,selectionchange:this.bpb_pan_grdSelChg},"bud_proyb #pan #proy_code":{change:this.bpb_pan_Chg,keypress:this.bpb_pan_KP},"bud_proyb #pan #proy_nombre":{change:this.bpb_pan_Chg,keypress:this.bpb_pan_KP},
"bud_proyb #tabBM":{activate:this.bpb_tabsAct},"bud_proyb #tabBM #year_id":{change:this.bpb_t1_ChgCbo},
"bud_proyb #tabD #opc_id":{change:this.bpb_tabs_oiChg},"bud_proyb #tabD #btnPrinter":{click:this.bpb_t2_btn},"bud_proyb #tabD #btnFases":{click:this.bpb_t2_btn},
"bud_proyb #tabD #doc_id":{change:this.bpb_t2_ChgCbo},"bud_proyb #grdD":{cellclick:this.bpb_t2_grdCellClk,selectionchange:this.bpb_t2_grdSelChg},"bud_proyb #tabD #meta_id":{change:this.bpb_t2_ChgCbo},"bud_proyb #tabD #year_id":{change:this.bpb_t2_ChgCbo},
});},
bpb_BR:function(comp,o){var _mi=comp.getMI();var _p=comp.down("#pan");var _t1=comp.down("#tabBM");var _t2=comp.down("#tabD");var _t3=comp.down("#tabDD");var _grd=_p.down("#grdBP");var _me=this;var _vs=fextpub_sessVar();
	fextpub_uamoPerm({comp:_p,mi:_mi});fextpub_uamoPerm({comp:_t1});fextpub_uamoPerm({comp:_t2});
	var _str1=fext_CS("bud.Metas_FftredBPB");fext_BSGP(_t1,_str1);
	_str1.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd);fext_PSEP(str,["xxActproy_code","xxYear_id","xxType_record","vs","xxPag"],[_r.data.actproy_code,"","grdBPB",fext_JE(_vs),1],_t1,["","year_id","","",""]);});
	var _str2=fext_CS("bud.LiquidacionesBPB");fext_BSGP(_t2,_str2);_str2.sort("fecha","DESC");fextbud_metasParam({pan:_t2,TR:"cboP"});
	_str2.on("beforeload",function(str,oper,opt){_me.bpb_t2_DB(_t2);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxProy_code","xxYear_id","xxDoc_id","xxMeta_id","xxType_record","vs","xxMenu_id","xxPag"],[_r.data.proy_code,"","","","grdBPB",fext_JE(_vs),_mi,1],_t2,["","year_id","doc_id","meta_id","","","",""]);});

	var _str3=fext_CS("bud.Liquidaciones_DetBPB");_t3.down("#grdDD").bindStore(_str3);_str3.sort("item","DESC");
	_str3.on("beforeload",function(str,oper,opt){_me.bpb_t3_DB(_t3);var _r=fext_grdSR(comp.down("#grdD"));fext_PSEP(str,["xxTablex","xxKey","xxType_record","vs"],[_r.data.tablex,_r.data._key,"grdBPB",fext_JE(_vs)],_t3,["","","",""]);});


	var _str3p=fext_CS("bud.Liquidaciones_Tareas_FftredBPB");_t3.down("#grdTF").bindStore(_str3p);
	_str3p.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(comp.down("#grdD"));fext_PSEP(str,["xxTablex","xxKey","xxType_record","vs"],[_r.data.tablex,_r.data._key,"grdBPB",fext_JE(_vs)],_t3,["","","",""]);});

	var _str=fext_CS("bud.ProyectosB");fext_BSGP(_p,_str);_str.sort("proy_code","ASC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(_p,"",["btnModify","btnQuery"]);_me.bpb_tabsClean(comp,true);fext_PSEP(str,["xxProy_code","xxProy_nombre","xxType_record","xxPag"],["","","grd",1],_p,["proy_code","proy_nombre","",""]);});_str.load();
},
bpb_tabsAct:function(comp,o){},
bpb_tabsClean:function(poC,pb){var _t=poC.down("#tabBM");fext_grdOC(_t,pb,0);fext_SD(_t,"",pb,["year_id"]);
	_t=poC.down("#tabD");fext_grdOC(_t,pb,0);this.bpb_t2_DB(_t);fext_SD(_t,"",pb,["doc_id","year_id"]);fext_SDS(_t,"meta_id",pb);
	_t=poC.down("#tabDD");fext_LR(_t,0);fext_gridClean(fext_GS(_t,"grdDD"),"");fext_gridClean(fext_GS(_t,"grdTF"),"");fext_SD(_t,"",true,["btnModify","btnQuery"]);
},
bpb_tabs_oiChg:function(cbo,newV,oldV,o){fext_TS(cbo);},
bpb_pan_Chg:function(txtf,newV,oldV,o){this.bpb_pan_Clean(txtf.up("#pan"));},
bpb_pan_ChgCbo:function(cbo,newV,oldV,opt){var _p=cbo.up("#pan");var _ii=fext_oii(cbo);if(oldV!=undefined){this.bpb_pan_Clean(_p);}if(_ii=="year_id"){var _pan=_p.up("bud_proyb");fextsia_funcLoad({pan:_p});fext_SV(_pan.down("#tabLP"),"year_id",newV);fext_SV(_pan.down("#tabD"),"year_id",newV);}},
bpb_pan_Clean:function(poC){fext_grdOC(poC);fext_Dsb(poC,"",["btnModify","btnQuery","btnDelete"]);this.bpb_tabsClean(poC.up("panel"),true);},
bpb_pan_KP:function(txtf,e,o){fext_KPL(txtf,e,"pan");},
bpb_pan_oiChg:function(cbo,newV,oldV,opt){fext_SDO(cbo.up("#pan"),"btnNew",cbo,1);},
bpb_pan_btn:function(btn,e,o){fext_CC("bud.ProyB").bpb_btn(btn);},
bpb_pan_grdCellClk:function(cell,td,cellI,r,tr,rowI,e,o){fext_TL(cell.up("bud_proyb"));},
bpb_pan_grdSelChg:function(mod,r,o){fext_CC("bud.ProyB").bpb_sc(mod,r);},
bpb_t1_ChgCbo:function(cbo,newV,oldV,o){var _t=cbo.up("#tabBM");var _ii=fext_oii(cbo);if(oldV!=undefined){this.bpb_t1_Clean(_t);}},
bpb_t1_Clean:function(poC){fext_grdOC(poC);this.bpb_t1_DB(poC);},
bpb_t1_DB:function(poC){},
bpb_t2_ChgCbo:function(cbo,newV,oldV,o){var _t=cbo.up("#tabD");var _ii=fext_oii(cbo,"",3);if(oldV!=undefined){this.bpb_t2_Clean(_t);}if(_ii=="yea"){var _pc="";if(newV>0){_pc=fext_grdSR(_t.up("bud_proyb").down("#pan"),"").data.proy_code;}fextbud_metasLoad({pan:_t,psc:_pc});}},
bpb_t2_Clean:function(poC){fext_grdOC(poC);this.bpb_t2_DB(poC);},
bpb_t2_DB:function(poC){fext_Dsb(poC,"",["btnModify","btnQuery","btnPrinter","btnFases"]);},
bpb_t2_btn:function(btn,e,o){fext_CC("bud.ProyBT2").bpb_btn(btn);},
bpb_t2_grdCellClk:function(cell,td,cellI,r,tr,rowI,e,o){fext_GS(cell.up("bud_proyb"),"grdDD").load();fext_GS(cell.up("bud_proyb"),"grdTF").load();},
bpb_t2_grdSelChg:function(mod,r,o){fext_CC("bud.ProyBT2").bpb_sc(mod,r);},

bpb_t3_DB:function(poC){fext_Dsb(poC,"",["btnModify","btnQuery"]);},
bpb_t3_btn:function(btn,e,o){fext_CC("bud.ProyBT3").bpb_btn(btn);},
bpb_t3_grdSelChg:function(mod,r,o){fext_CC("bud.ProyBT3").bpb_sc(mod,r);},
});