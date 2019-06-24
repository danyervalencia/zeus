Ext.define("Siace.controller.bud.TareasB",{extend:"Ext.app.Controller",stores:["array.Years","array.DocOrdenAB"],views:["bud.TareasB"],refs:[{ref:"btb",selector:"bud_tareab"}],
init:function(application){this.control({
"bud_tareab":{beforerender:this.btb_BR},"bud_tareab #pan #opc_id":{change:this.btb_pan_oiChg},
"bud_tareab #pan #btnNew":{click:this.btb_pan_btn},"bud_tareab #pan #btnModify":{click:this.btb_pan_btn},"bud_tareab #pan #btnQuery":{click:this.btb_pan_btn},
"bud_tareab #pan #area_key":{change:this.btb_pan_ChgCbo},"bud_tareab #pan #grdBT":{cellclick:this.btb_pan_grdCellClk,selectionchange:this.btb_pan_grdSelChg},"bud_tareab #pan #meta_id":{change:this.btb_pan_ChgCbo},"bud_tareab #pan #tarea_nombre":{change:this.btb_pan_Chg},"bud_tareab #pan #tipgast_id":{change:this.btb_pan_ChgCbo},"bud_tareab #pan #tiptarea_id":{change:this.btb_pan_ChgCbo},"bud_tareab #pan #year_id":{change:this.btb_pan_ChgCbo},
"bud_tareab #tabBTF":{activate:this.btb_tabsAct},"bud_tareab #tabBTF #btnNew":{click:this.btb_t1_btn},"bud_tareab #tabBTF #btnModify":{click:this.btb_t1_btn},"bud_tareab #tabBTF #btnQuery":{click:this.btb_t1_btn},
"bud_tareab #tabBTF #grdBTF":{selectionchange:this.btb_t1_grdSelchg},"bud_tareab #tabBTF #fuefin_id":{change:this.btb_t1_ChgCbo},"bud_tareab #tabBTF #tiprecur_id":{change:this.btb_t1_ChgCbo},
"bud_tareab #tabBTA":{activate:this.btb_tabsAct},"bud_tareab #tabBTA #opc_id":{change:this.btb_tabs_oiChg},"bud_tareab #tabBTA #btnAdd":{click:this.btb_t2_btn},"bud_tareab #tabBTA #btnModify":{click:this.btb_t2_btn},"bud_tareab #tabBTA #btnQuery":{click:this.btb_t2_btn},"bud_tareab #tabBTA #grdBTA":{selectionchange:this.btb_t2_grdSelChg},
"bud_tareab #tabBTUA":{activate:this.btb_tabsAct},"bud_tareab #tabBTUA #opc_id":{change:this.btb_tabs_oiChg},"bud_tareab #tabBTUA #btnModify":{click:this.btb_t3_btn},"bud_tareab #tabBTUA #btnQuery":{click:this.btb_t3_btn},"bud_tareab #tabBTUA #grdBTUA":{selectionchange:this.btb_t3_grdSelChg},
"bud_tareab #tabLP":{activate:this.btb_tabsAct},"bud_tareab #tabLP #opc_id":{change:this.btb_tabs_oiChg},"bud_tareab #tabLP #btnQuery":{click:this.btb_t4_btn},"bud_tareab #tabLP #btnDet":{click:this.btb_t4_btn},"bud_tareab #tabLP #btnAttach":{click:this.btb_t4_btn},"bud_tareab #tabLP #btnFases":{click:this.btb_t4_btn},"bud_tareab #tabLP #btnPrinter":{click:this.btb_t4_btn},
"bud_tareab #tabLP #area_key":{change:this.btb_t4_ChgCbo},"bud_tareab #tabLP #grdLP":{selectionchange:this.btb_t4_grdSelChg},"bud_tareab #tabLP #tipped_id":{change:this.btb_t4_ChgCbo},"bud_tareab #tabLP #tipgast_id":{change:this.btb_t4_ChgCbo},
"bud_tareab #tabLO":{activate:this.btb_tabsAct},"bud_tareab #tabLO #opc_id":{change:this.btb_tabs_oiChg},"bud_tareab #tabLO #btnPrinter":{click:this.btb_t5_btn},"bud_tareab #tabLO #btnFases":{click:this.btb_t5_btn},
"bud_tareab #tabLO #area_key":{change:this.btb_t5_ChgCbo},"bud_tareab #tabLO #doc_id":{change:this.btb_t5_ChgCbo},"bud_tareab #tabLO #grdLO":{selectionchange:this.btb_t5_grdSelChg},"bud_tareab #tabLO #tipgast_id":{change:this.btb_t5_ChgCbo}
});},
btb_BR:function(comp,o){var _mi=comp.getMI();var _p=comp.down("#pan");var _t1=comp.down("#tabBTF");var _t2=comp.down("#tabBTA");var _t3=comp.down("#tabBTUA");var _t4=comp.down("#tabLP");var _t5=comp.down("#tabLO");var _grd=_p.down("#grdBT");var _tt=_p.down("#tiptarea_id");var _vs=fextpub_sessVar();var _me=this;
	fextpub_uamoPerm({comp:_p,mi:_mi});fextpub_uamoPerm({comp:_t1});fextpub_uamoPerm({comp:_t2});fextpub_uamoPerm({comp:_t3});fextpub_uamoPerm({comp:_t4});fextpub_uamoPerm({comp:_t5});
	fextpub_areasFilt({obj:_p.down("#area_key"),ak:"",nuk:"NoT"});fextbud_metasParam({pan:_p});fextpub_tabgenFilt({obj:_p.down("#tipgast_id"),tgp:2020,TR:"cboC"});fextpub_yearsValue(_p.down("#year_id"),"");
	_tt.bindStore(fext_CS("bud.Tipos_TareasCbo"));_tt.getStore().load({params:{xxType_record:"cbo",xxAdd_blank:"YES"},callback:function(r){if(r.length>0){_tt.setValue(r[0].data.tiptarea_id);}else{_tt.disable();_tt.setValue("");}}});
	fextbud_fuefinFilt({pan:_t1,dsb:true});fextbud_tiprecurParam({pan:_t1,objYI:_p.down("#year_id")});
	var _str1=fext_CS("bud.Tareas_FftredBTB");fext_BSGP(_t1,_str1);_str1.sort("fuefin_code","ASC");
	_str1.on("beforeload",function(str,oper,o){_me.btb_t1_DB(_t1);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxTarea_key","xxFuefin_id","xxTiprecur_id","xxYear_id","xxType_record","xxPag"],[_r.data.tarea_key,"","","","grdBTB",1],_t1,["","fuefin_id","tiprecur_id","year_id","",""]);});
	var _str2=fext_CS("bud.Tareas_AreasBTB");fext_BSGP(_t2,_str2);_str2.sort("area_nombre","ASC");
	_str2.on("beforeload",function(str,oper,o){fext_Dsb(_t2,"",["btnModify","btnQuery"]);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxTarea_key","xxType_record","xxPag"],[_r.data.tarea_key,"grdBTB",1]);});
	var _str3=fext_CS("bud.Tareas_Usuarios_AccesosBTB");fext_BSGP(_t3,_str3);_str3.sort("indiv_apenom","ASC");
	_str3.on("beforeload",function(str,oper,o){_me.btb_t3_DB(_t3);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxTarea_key","xxType_record","xxPag"],[_r.data.tarea_key,"grdBTB",1]);});
	fextpub_tabgenFilt({obj:_t4.down("#tipped_id"),tgp:5005,TR:"cboA",dsb:true});fextpub_areasFilt({obj:_t4.down("#area_key"),ak:"",nuk:"NoT",dsb:true});fextpub_tabgenFilt({obj:_t4.down("#tipgast_id"),tgp:2020,TR:"cboC",dsb:true});
	var _str4=fext_CS("log.PedidosBTB");fext_BSGP(_t4,_str4);_str4.sort("ped_fecha","DESC");
	_str4.on("beforeload",function(str,oper,o){_me.btb_t4_DB(_t4);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxTarea_key","xxTipped_id","xxArea_key","xxType_record","vs","xxPag","ssNO_YEAR","ssNO_USK"],[_r.data.tarea_key,"","","grdBTB",fext_JE(_vs),1,"NoT","NoT"],_t4,["","tipped_id","area_key","","","","",""]);});
	fextpub_tabgenFilt({obj:_t5.down("#tipgast_id"),tgp:2020,TR:"cboC",dsb:true});fextpub_areasFilt({obj:_t5.down("#area_key"),ak:"",nuk:"NoT",dsb:true});
	var _str5=fext_CS("log.OrdenesBTB");fext_BSGP(_t5,_str5);_str5.sort("orden_fecha","DESC");
	_str5.on("beforeload",function(str,oper,o){_me.btb_t5_DB(_t5);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxTarea_key","xxDoc_id","xxTipgast_id","xxArea_key","xxMonto_min","xxType_record","vs","xxMenu_id","xxPag","ssNO_USK","ssNO_YEAR"],[_r.data.tarea_key,"","","","0.01","grdBTB",fext_JE(_vs),"",1,"NoT","NoT"],_t5,["","doc_id","tipgast_id","area_key","","","","menu_id","","",""]);});
	var _str=fext_CS("bud.TareasB");fext_BSGP(_p,_str);_str.sort("tarea_codigo","ASC");
	_str.on("beforeload",function(str,oper,o){_me.btb_pan_DB(_p);_me.btb_tabsClean(comp,true);fext_PSEP(str,["xxYear_id","xxUnieje_key","xxArea_key","xxMeta_id","xxTiptarea_id","xxTarea_nombre","xxTipgast_id","xxType_record","xxPag"],["",_vs.ue,"","","","","","grd",1],_p,["year_id","","area_key","meta_id","tiptarea_id","tarea_nombre","tipgast_id","",""]);});_str.load();
},
btb_tabsAct:function(comp,o){if(!fext_grdSR(comp.up("bud_tareab"),"grdBT")){return false;}fext_GS(comp).load();},
btb_tabsClean:function(poC,pb){var _md=fext_CM("bud.TareaW");var _t=poC.down("#tabBTF");fext_grdOC(_t,pb,_md);fext_SDO(_t,"btnNew",_t.down("#opc_id"),1,pb);fext_SD(_t,"",pb,["fuefin_id","tiprecur_id"]);this.btb_t1_DB(_t);
	_t=poC.down("#tabBTA");fext_grdOC(_t,pb,_md);fext_SDO(_t,"btnAdd",_t.down("#opc_id"),13,pb);fext_Dsb(_t,"",["btnModify","btnQuery"]);
	_t=poC.down("#tabBTUA");fext_grdOC(_t,pb,_md);this.btb_t3_DB(_t);
	_t=poC.down("#tabLP");fext_grdOC(_t,pb,_md);this.btb_t4_DB(_t);fext_SD(_t,"",pb,["tipped_id","area_key","tipgast_id"]);
	_t=poC.down("#tabLO");fext_grdOC(_t,pb,_md);this.btb_t5_DB(_t);fext_SD(_t,"",pb,["doc_id","area_key","tipgast_id"]);
},
btb_tabs_oiChg:function(cbo,newV,oldV,o){fext_TS(cbo);},
btb_pan_Chg:function(txtf,newV,oldV,o){this.btb_pan_Clean(txtf.up("#pan"));},
btb_pan_ChgCbo:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");var _ii=fext_oii(cbo);if(oldV!=undefined){this.btb_pan_Clean(_p);if(_ii=="area_key"){fextbud_metasLoad({pan:_p});}}if(_ii=="year_id"){fextbud_metasLoad({pan:_p});}},
btb_pan_Clean:function(poC){fext_grdOC(poC);this.btb_pan_DB(poC);this.btb_tabsClean(this.getBtb(),true);},
btb_pan_DB:function(poC){fext_Dsb(poC,"",["btnModify","btnQuery","btnDelete","btnPrinter"]);},
btb_pan_oiChg:function(cbo,newV,oldV,o){fext_SDO(cbo.up("#pan"),"btnNew",cbo,1);},
btb_pan_btn:function(btn,e,o){fext_CC("bud.TareaB").btb_btn(btn);},
btb_pan_grdCellClk:function(cell,td,cellI,r,tr,rowI,e,o){fext_TL(cell.up("bud_tareab"));},
btb_pan_grdSelChg:function(mod,r,o){fext_CC("bud.TareaB").btb_sc(mod,r);},
btb_t1_ChgCbo:function(cbo,newV,oldV,o){var _t=cbo.up("#tabBTF");var _ii=fext_oii(cbo);if(oldV!=undefined){this.btb_t1_Clean(_t);}if(_ii=="fuefin_id"){fextbud_tiprecurLoad(_t.down("#tiprecur_id"),(newV==0?false:true));}},
btb_t1_Clean:function(poC){fext_grdOC(poC);this.btb_t1_DB(poC);},
btb_t1_DB:function(poC){fext_Dsb(poC,"",["btnModify","btnQuery","btnDelete"]);},
btb_t1_btn:function(btn,e,o){fext_CC("bud.TareaBT1").btb_btn(btn);},
btb_t1_grdSelchg:function(mod,r,o){fext_CC("bud.TareaBT1").btb_sc(mod,r);},
btb_t2_btn:function(btn,e,o){fext_CC("bud.TareaBT2").btb_btn(btn);},
btb_t2_grdSelChg:function(mod,r,o){fext_CC("bud.TareaBT2").btb_sc(mod,r);},
btb_t3_DB:function(poC){fext_Dsb(poC,"",["btnModify","btnQuery","btnMenu"]);},
btb_t3_btn:function(btn,e,o){fext_CC("bud.TareaBT3").btb_btn(btn);},
btb_t3_grdSelChg:function(mod,r,o){fext_CC("bud.TareaBT3").btb_sc(mod,r);},
btb_t4_ChgCbo:function(cbo,newV,oldV,o){if(oldV!=undefined){this.btb_t4_Clean(cbo.up("#tabLP"),true);}},
btb_t4_Clean:function(poC){fext_grdOC(poC);this.btb_t4_DB(poC);},
btb_t4_DB:function(poC){fext_Dsb(poC,"",["btnQuery","btnDet","btnAttach","btnFases","btnPrinter"]);},
btb_t4_btn:function(btn,e,o){fext_CC("bud.TareaBT4").btb_btn(btn);},
btb_t4_grdSelChg:function(mod,r,o){fext_CC("bud.TareaBT4").btb_sc(mod,r);},
btb_t5_ChgCbo:function(cbo,newV,oldV,o){if(oldV!=undefined){this.btb_t5_Clean(cbo.up("#tabLO"),true);}},
btb_t5_Clean:function(poC){fext_grdOC(poC);this.btb_t5_DB(poC);},
btb_t5_DB:function(poC){fext_Dsb(poC,"",["btnPrinter","btnFases"]);},
btb_t5_btn:function(btn,e,o){fext_CC("bud.TareaBT5").btb_btn(btn);},
btb_t5_grdSelChg:function(mod,r,o){fext_CC("bud.TareaBT5").btb_sc(mod,r);},
});