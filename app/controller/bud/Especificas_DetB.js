Ext.define("Siace.controller.bud.Especificas_DetB",{extend:"Ext.app.Controller",stores:["array.Bst","array.DocOrdenAB","array.bud.TipTransAB","array.YearsAB"],views:["bud.Especificas_DetB"],refs:[{ref:"bedb",selector:"bud_espedetb"}],
init:function(application){this.control({
"bud_espedetb":{beforerender:this.bedb_BR},"bud_espedetb #pan #opc_id":{change:this.bedb_pan_oiChg},
"bud_espedetb #pan #grdBED":{cellclick:this.bedb_pan_grdCellClk,selectionchange:this.bedb_pan_grdSelChg},"bud_espedetb #pan #gene_code":{change:this.bedb_pan_ChgCbo},"bud_espedetb #pan #tiptrans_code":{change:this.bedb_pan_ChgCbo},"bud_espedetb #pan #espedet_nombre":{change:this.bedb_pan_Chg,keypress:this.bedb_pan_KP},

"bud_espedetb #tabBTF":{activate:this.bedb_tabsAct},"bud_espedetb #tabBTF #fuefin_id":{change:this.bedb_t1_ChgCbo},"bud_espedetb #tabBTF #meta_id":{change:this.bedb_t1_ChgCbo},"bud_espedetb #tabBTF #tipgast_id":{change:this.bedb_t1_ChgCbo},"bud_espedetb #tabBTF #year_id":{change:this.bedb_t1_ChgCbo},
"bud_espedetb #tabBEDSC":{activate:this.bedb_tabsAct},"bud_espedetb #tabBEDSC #opc_id":{change:this.bedb_tabs_oiChg},"bud_espedetb #tabBEDSC #btnQuery":{click:this.bedb_t2_btn},
"bud_espedetb #tabPBSED":{activate:this.bedb_tabsAct},"bud_espedetb #tabPBSED #opc_id":{change:this.bedb_tabs_oiChg},"bud_espedetb #tabPBSED #btnQuery":{click:this.bedb_t3_btn},
"bud_espedetb #tabPBSED #bsc_id":{change:this.bedb_t3_ChgCbo},"bud_espedetb #tabPBSED #bsf_id":{change:this.bedb_t3_ChgCbo},"bud_espedetb #tabPBSED #bsg_id":{change:this.bedb_t3_ChgCbo},"bud_espedetb #tabPBSED #bst_id":{change:this.bedb_t3_ChgCbo},"bud_espedetb #tabPBSED #bs_nombre":{change:this.bedb_t3_Chg},
"bud_espedetb #tabPBSED #grdPBSED":{selectionchange:this.bedb_t3_grdSelChg},
"bud_espedetb #tabLP #opc_id":{change:this.bedb_tabs_oiChg},"bud_espedetb #tabLP #btnQuery":{click:this.bedb_t4_btn},"bud_espedetb #tabLP #btnDet":{click:this.bedb_t4_btn},"bud_espedetb #tabLP #btnAttach":{click:this.bedb_t4_btn},"bud_espedetb #tabLP #btnFases":{click:this.bedb_t4_btn},"bud_espedetb #tabLP #btnPrinter":{click:this.bedb_t4_btn},
"bud_espedetb #tabLP #area_key":{change:this.bedb_t4_ChgCbo},"bud_espedetb #tabLP #grdLPD":{selectionchange:this.bedb_t4_grdSelChg},"bud_espedetb #tabLP #meta_id":{change:this.bedb_t4_ChgCbo},"bud_espedetb #tabLP #tarea_key":{change:this.bedb_t4_ChgCbo},"bud_espedetb #tabLP #year_id":{change:this.bedb_t4_ChgCbo},
"bud_espedetb #tabLO #opc_id":{change:this.bedb_tabs_oiChg},"bud_espedetb #tabLO #btnPrinter":{click:this.bedb_t5_btn},"bud_espedetb #tabLO #btnFases":{click:this.bedb_t5_btn},
"bud_espedetb #tabLO #area_key":{change:this.bedb_t5_ChgCbo},"bud_espedetb #tabLO #doc_id":{change:this.bedb_t5_ChgCbo},"bud_espedetb #tabLO #grdLOD":{selectionchange:this.bedb_t5_grdSelChg},
"bud_espedetb #tabLO #meta_id":{change:this.bedb_t5_ChgCbo},"bud_espedetb #tabLO #tarea_key":{change:this.bedb_t5_ChgCbo},"bud_espedetb #tabLO #year_id":{change:this.bedb_t5_ChgCbo}
});},
bedb_BR:function(comp,opt){var _mi=comp.getMI();_p=comp.down("#pan");var _t1=comp.down("#tabBTF");var _t2=comp.down("#tabBEDSC");var _t3=comp.down("#tabPBSED");var _t4=comp.down("#tabLP");var _t5=comp.down("#tabLO");var _grd=_p.down("#grdBED");var _me=this;
	fextpub_uamoPerm({comp:_p,mi:_mi});fextpub_uamoPerm({comp:_t2});fextpub_uamoPerm({comp:_t3});fextpub_uamoPerm({comp:_t4});fextpub_uamoPerm({comp:_t5});
	fextbud_genParam({pan:_p});fextbud_metasParam({pan:_t1});fextpub_tabgenFilt({obj:_t1.down("#tipgast_id"),tgp:2020,TR:"combo_code",dsb:true});fextbud_fuefinFilt({pan:_t1,dsb:true});
	var _str1=fext_CS("bud.Tareas_FftredBEDB");fext_BSGP(_t1,_str1);_str1.sort("tarea_codigo","ASC");
	_str1.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd);fext_PSEP(str,["xxEspedet_id","xxYear_id","xxMeta_id","xxTipgast_id","xxFuefin_id","xxType_record","xxPag"],[_r.data.espedet_id,"","","","","grdBEDB",1],_t1,["","year_id","meta_id","tipgast_id","fuefin_id","",""]);});
	var _str2=fext_CS("bud.Especificas_Det_Sub_CuentaBEDB");fext_BSGP(_t2,_str2);_str2.sort("subcta_nombre","ASC");
	_str2.on("beforeload",function(str,oper,opt){_me.bedb_t2_DB(_t2);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxEspedet_id","xxYear_id","xxType_record","xxPag"],[_r.data.espedet_id,"","grdBEDB",1],_t2,["","year_id","",""]);});
	fextpub_bsgParam({pan:_t3});fextpub_bscParam({pan:_t3});fextpub_bsfParam({pan:_t3});fext_SV(_t3,"bst_id",1);
	var _str3=fext_CS("pub.Bienes_Servs_Especificas_DetBEDB");fext_BSGP(_t3,_str3);_str3.sort("bs_nombre","ASC");
	_str3.on("beforeload",function(str,oper,opt){fext_Dsb(_t3,"btnQuery");var _r=fext_grdSR(_grd);fext_PSEP(str,["xxEspedet_id","xxBst_id","xxBsg_id","xxBsc_id","xxBsf_id","xxBs_nombre","xxType_record","xxPag"],[_r.data.espedet_id,"","","","","","grdBEDB",1],_t3,["","bst_id","bsg_id","bsc_id","bsf_id","bs_nombre","",""]);});
	fextpub_tabgenFilt({obj:_t4.down("#tipped_id"),tgp:5005,TR:"cboA",dsb:true});fextpub_areasFilt({obj:_t4.down("#area_key"),ak:"",nuk:"NoT",dsb:true});fextbud_metasParam({pan:_t4});fextbud_tareasParam({pan:_t4});fextpub_tabgenFilt({obj:_t4.down("#tipgast_id"),tgp:2020,TR:"combo_code",dsb:true});
	var _str4=fext_CS("log.Pedidos_DetBEDB");fext_BSGP(_t4,_str4);_str4.sort("ped_fecha","DESC");
	_str4.on("beforeload",function(str,oper,opt){_me.bedb_t4_DB(_t4);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxEspedet_id","xxYear_id","xxTipped_id","xxArea_key","xxMeta_id","xxTipgast_id","xxTarea_key","xxType_record","xxPag"],[_r.data.espedet_id,"","","","","","","grdBEDB",1],_t4,["","year_id","tipped_id","area_key","meta_id","tipgast_id","tarea_key","",""])});
	fextpub_areasFilt({obj:_t5.down("#area_key"),ak:"",nuk:"NoT",dsb:true});fextbud_metasParam({pan:_t5});fextbud_tareasParam({pan:_t5});fextpub_tabgenFilt({obj:_t5.down("#tipgast_id"),tgp:2020,TR:"cboC",dsb:true});
	var _str5=fext_CS("log.Ordenes_DetBEDB");fext_BSGP(_t5,_str5);_str5.sort("orden_fecha","ASC");
	_str5.on("beforeload",function(str,oper,opt){_me.bedb_t5_DB(_t5);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxEspedet_id","xxYear_id","xxDoc_id","xxArea_key","xxMeta_id","xxTipgast_id","xxTarea_key","xxMonto_min","xxType_record","xxPag"],[_r.data.espedet_id,"","","","","","","0.01","grdBEDB",1],_t5,["","year_id","doc_id","area_key","meta_id","tipgast_id","tarea_key","","",""]);});
	var _str=fext_CS("bud.Especificas_DetB");fext_BSGP(_p,_str);_str.sort("espedet_codigo","ASC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(_p,"",["btnModify","btnQuery"]);_me.bedb_tabsClean(comp,true);fext_PSEP(str,["xxTiptrans_code","xxGene_code","xxSubgene_code","xxEspedet_nombre","xxType_record","xxPag"],["","","","","grd",1],_p,["tiptrans_code","gene_code","subgene_code","espedet_nombre","",""]);});
},
bedb_tabsAct:function(comp,o){if(!fext_grdSR(comp.up("bud_espedetb"),"grdBED")){return false;}fext_GS(comp).load();},
bedb_tabsClean:function(poC,pb){var _md=fext_CM("bud.Especifica_DetW");
	var _t=poC.down("#tabBTF");fext_grdOC(_t,pb,_md);fext_SD(_t,"",pb,["year_id,tipgast_id,fuefin_id"]);fext_SDS(_t,"meta_id",pb);
	_t=poC.down("#tabBEDSC");fext_grdOC(_t,pb,_md);this.bedb_t2_DB(_t);fext_SD(_t,"",pb,["year_id"]);fext_SDO(_t,"btnAdd",_t.down("#opc_id"),13,pb);
	_t=poC.down("#tabPBSED");fext_grdOC(_t,pb,_md);fext_Dsb(_t,"btnQuery");fext_SD(_t,"",pb,["bst_id","bsg_id","bs_nombre"]);fext_SDS(_t,"bsc_id",pb);fext_SDS(_t,"bsf_id",pb);
	_t=poC.down("#tabLP");fext_grdOC(_t,pb,_md);this.bedb_t4_DB(_t);fext_SD(_t,"",pb,["year_id","tipped_id","area_key","tipgast_id"]);fext_SDS(_t,"meta_id",pb);fext_SDS(_t,"tarea_key",pb);
	_t=poC.down("#tabLO");fext_grdOC(_t,pb,_md);this.bedb_t5_DB(_t);fext_SD(_t,"",pb,["year_id","area_key","tipgast_id"]);fext_SDS(_t,"meta_id",pb);fext_SDS(_t,"tarea_key",pb);
},
bedb_tabs_oiChg:function(cbo,newV,oldV,o){fext_TS(cbo);},
bedb_pan_Chg:function(txtf,newV,oldV,o){this.bedb_pan_Clean(txtf.up("#pan"));},
bedb_pan_ChgCbo:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");var _ii=fext_oii(cbo);if(oldV!=undefined){this.bedb_pan_Clean(cbo.up("#pan"));}if(_ii=="tiptrans_code"){fextbud_geneLoad({pan:_p});}},
bedb_pan_Clean:function(poC){fext_grdOC(poC);this.bedb_pan_DB(poC);this.bedb_tabsClean(this.getBedb(),true);},
bedb_pan_DB:function(poC){fext_Dsb(poC,"",["btnModify","btnQuery"]);},
bedb_pan_KP:function(txtf,e,o){fext_KPL(txtf,e,"pan");},
bedb_pan_oiChg:function(cbo,newV,oldV,o){fext_SDO(cbo.up("panel"),"btnNew",cbo,1);},
bedb_pan_grdCellClk:function(cell,td,cellI,rec,tr,rowI,e,o){fext_TL(cell.up("bud_espedetb"));},
bedb_pan_grdSelChg:function(mod,r,o){fext_CC("bud.EspeDetB").bedb_sc(mod,r);},
bedb_t1_ChgCbo:function(cbo,newV,oldV,o){var _t=cbo.up("#tabBTF");if(oldV!=undefined){this.bedb_t1_Clean(_t);}var _ii=fext_oii(cbo);if(_ii=="year_id"){fextbud_metasLoad({pan:_t});}},
bedb_t1_Clean:function(poC){fext_grdOC(poC);},
bedb_t2_Clean:function(poC){fext_grdOC(poC);this.bedb_t2_DB(poC);},
bedb_t2_DB:function(poC){fext_Dsb(poC,"",["btnModify","btnQuery"]);},
bedb_t3_Chg:function(cbo,newV,oldV,o){this.bedb_t3_Clean(cbo.up("panel"));},
bedb_t3_ChgCbo:function(cbo,newV,oldV,opt){var _p=cbo.up("#tabPBSED");var _ii=fext_oii(cbo);if(oldV!=undefined){this.bedb_t3_Clean(_p);}if(_ii=="bst_id"){fextpub_bsgLoad({pan:_p});}else if(_ii=="bsg_id"){fextpub_bscLoad({pan:_p});}else if(_ii=="bsc_id"){fextpub_bsfLoad({pan:_p});}},
bedb_t3_Clean:function(poC){fext_grdOC(poC);},
bedb_t3_btn:function(btn,e,o){fext_CC("pub.Bienes_Servs").pbs_View({comp:btn.up("#tabPBSED"),TE:3,grd:"grdPBSED",oi:3});},
bedb_t3_grdSelChg:function(mod,r,o){if(r.length==1){var _t=mod.view.up("#tabPBSED");fext_SDO(_t,"btnQuery","",3);}},
bedb_t4_ChgCbo:function(cbo,newV,oldV,o){var _p=cbo.up("#tabLP");var _ii=fext_oii(cbo);if(oldV!=undefined){this.bedb_t4_Clean(_p);if(_ii=="area_key"){fextbud_metasLoad({pan:_p});}else if(fjsIn_array(_ii,["meta_id","tipgast_id"])){fextbud_tareasLoad({pan:_p});}}if(_ii=="year_id"){fextbud_metasLoad({pan:_p});}},
bedb_t4_Clean:function(poC){fext_grdOC(poC);this.bedb_t4_DB(poC);},
bedb_t4_DB:function(poC){fext_Dsb(poC,"",["btnQuery","btnDet","btnAttach","btnFases","btnPrinter"]);},
bedb_t4_btn:function(btn,e,o){fext_CC("bud.EspeDetBT4").bedb_btn(btn);},
bedb_t4_grdSelChg:function(mod,r,o){fext_CC("bud.EspeDetBT4").bedb_sc(mod,r);},
bedb_t5_ChgCbo:function(cbo,newV,oldV,o){var _p=cbo.up("#tabLO");var _ii=fext_oii(cbo);if(oldV!=undefined){this.bedb_t5_Clean(_p);if(_ii=="area_key"){fextbud_metasLoad({pan:_p});}else if(fjsIn_array(_ii,["meta_id","tipgast_id"])){fextbud_tareasLoad({pan:_p});}}if(_ii=="year_id"){fextbud_metasLoad({pan:_p});}},
bedb_t5_Clean:function(poC,pbB){fext_grdOC(poC);this.bedb_t5_DB(poC);},
bedb_t5_DB:function(poC){fext_Dsb(poC,"",["btnQuery","btnPrinter","btnFases"]);},
bedb_t5_btn:function(btn,e,o){fext_CC("bud.EspeDetBT5").bedb_btn(btn);},
bedb_t5_grdSelChg:function(mod,r,o){fext_CC("bud.EspeDetBT5").bedb_sc(mod,r);},
});