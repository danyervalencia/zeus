Ext.define("Siace.controller.pub.IndividuosB",{extend:"Ext.app.Controller",stores:["array.YearsAB"],views:["pub.IndividuosB"],refs:[{ref:"pie_imgIndiv_foto",selector:"public_individuosedit#imgIndiv_foto"}],
init:function(application){this.control({
"pub_indivb":{beforerender:this.pib_BR},"pub_indivb #pan #opc_id":{change:this.pib_pan_oiChg},"pub_indivb #pan #btnNew":{click:this.pib_pan_btn},"pub_indivb #pan #btnModify":{click:this.pib_pan_btn},"pub_indivb #pan #btnQuery":{click:this.pib_pan_btn},
"pub_indivb #pan actioncolumn#acPublic_individuos":{itemclick:this.pib_pan_acItemClk},"pub_indivb #pan #grdPI":{cellclick:this.pib_pan_grdCellClk,selectionchange:this.pib_pan_grdSelChg},
"pub_indivb #pan #indiv_apmaterno":{change:this.pib_pan_Chg,keypress:this.pib_pan_KP},"pub_indivb #pan #indiv_appaterno":{change:this.pib_pan_Chg,keypress:this.pib_pan_KP},"pub_indivb #pan #indiv_dni":{change:this.pib_pan_Chg,keypress:this.pib_pan_KP},"pub_indivb #pan #indiv_nombres":{change:this.pib_pan_Chg,keypress:this.pib_pan_KP},"pub_indivb #pan #tipdocident_id":{change:this.pib_pan_ChgCbo},
"pub_indivb #tabPID":{activate:this.pib_tabsAct},"pub_indivb #tabPID #opc_id":{change:this.pib_tabs_oiChg},
"pub_indivb #tabPIF":{activate:this.pib_tabsAct},"pub_indivb #tabPIF #opc_id":{change:this.pib_tabs_oiChg},"pub_indivb #tabPIF #btnNew":{click:this.pib_t2_btn},"pub_indivb #tabPIF #btnModify":{click:this.pib_t2_btn},"pub_indivb #tabPIF #btnQuery":{click:this.pib_t2_btn},
"pub_indivb #tabPIF #grdPIF":{selectionchange:this.pib_t2_grdSelChg},
"pub_indivb #tabLV":{activate:this.pib_tabsAct},"pub_indivb #tabLV #opc_id":{change:this.pib_tabs_oiChg},"pub_indivb #tabLV #btnPrinter":{click:this.pib_t3_btn},"pub_indivb #tabLV #btnFases":{click:this.pib_t3_btn},
"pub_indivb #tabLV #area_key":{change:this.pib_t3_ChgCbo},"pub_indivb #tabLV #grdLV":{selectionchange:this.pib_t3_grdSelChg},"pub_indivb #tabLV #meta_id":{change:this.pib_t3_ChgCbo},"pub_indivb #tabLV #tarea_key":{change:this.pib_t3_ChgCbo},
"pub_indivb #tabLV #year_id":{change:this.pib_t3_ChgCbo},
});},
pib_BR:function(comp,opt){var _mi=comp.getMI();var _pan=comp.down("#pan");var _grd=_pan.down("#grdPI");var _t1=comp.down("#tabPID");var _t2=comp.down("#tabPIF");var _t3=comp.down("#tabLV");var _me=this;var _vs=fextpub_sessVar();
	fextpub_uamoPerm({comp:_pan,mi:_mi});fextpub_uamoPerm({comp:_t1});fextpub_uamoPerm({comp:_t2});fextpub_uamoPerm({comp:_t3});fextpub_tipdocidentFilt({obj:_pan.down("#tipdocident_id"),tdiei:1});
	var _str2=fext_CS("pub.Individuos_FonosPIB");fext_BSGP(_t2,_str2);_str2.sort("indivfono_nro","ASC");
	_str2.on("beforeload",function(str,oper,opt){fext_Dsb(_t2,"",["btnModify","btnQuery","btnDelete"]);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxIndiv_key","xxType_record","xxPag"],[_r.data.indiv_key,"grdPIB",1]);});
	fextpub_areasFilt({obj:_t3.down("#area_key"),ak:"",nuk:"NoT",dsb:true});fextbud_metasParam({pan:_t3});fextbud_tareasParam({pan:_t3});
	var _str3=fext_CS("log.ViaticosPIB");fext_BSGP(_t3,_str3);_str3.sort("viat_fecha","DESC");
	_str3.on("beforeload",function(str,oper,opt){fext_Dsb(_t3,"",["btnQuery","btnPrinter","btnFases","btnPdf","btnExcel"]);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxIndiv_key","xxYear_id","xxArea_key","xxMeta_id","xxTarea_key","xxType_record","xxPag","xxMenu_id","vs","ssNO_USK","ssNO_YEAR"],[_r.data.indiv_key,"","","","","grdPIB",1,_mi,fext_JE(_vs),"NoT","NoT"],_t3,["","year_id","area_key","meta_id","tarea_key","","","","","",""]);});
	var _str=fext_CS("pub.IndividuosB");fext_BSGP(_pan,_str);_str.sort("indiv_apenom","ASC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(_pan,"",["btnModify","btnQuery","btnDelete"]);_me.pib_tabsClean(comp,true);fext_PSEP(str,["xxTipdocident_id","xxIndiv_dni","xxIndiv_appaterno","xxIndiv_apmaterno","xxIndiv_nombres","xxType_record","xxPag"],["","","","","","grd",1],_pan,["tipdocident_id","indiv_dni","indiv_appaterno","indiv_apmaterno","indiv_nombres","",""]);});
	this.pib_tabsClean(comp,true);
},
pib_tabsAct:function(comp,opt){if(!fext_grdSR(comp.up("pub_indivb"),"grdPI")){return false;}fext_GS(comp).load();},
pib_tabsClean:function(poC,pb){var _t=poC.down("#tabPIF");fext_grdOC(_t,pb);fext_SDO(_t,"btnNew","",1,pb);fext_Dsb(_t,"",["btnModify","btnDelete"]);
	_t=poC.down("#tabPID");fext_grdOC(_t,pb);fext_SDO(_t,"btnNew","",1,pb);fext_Dsb(_t,"",["btnModify","btnDelete"]);
	_t=poC.down("#tabLV");fext_grdOC(_t,pb);fext_SD(_t,"",pb,["year_id","area_key"]);fext_SD(_t,"meta_id",pb?true:(fext_GS(_t,"meta_id").getCount()>0?false:true));fext_SD(_t,"tarea_key",pb?true:(fext_GS(_t,"tarea_key").getCount()>0?false:true));fext_Dsb(_t,"",["btnQuery","btnPrinter","btnFases"]);
},
pib_tabs_oiChg:function(cbo,newV,oldV,o){fext_TS(cbo);},
pib_pan_Chg:function(txtf,newV,oldV,opt){this.pib_pan_Clean(txtf.up("#pan"));},
pib_pan_ChgCbo:function(cbo,newV,oldV,opt){if(oldV!=undefined){this.pib_pan_Clean(cbo.up("#pan"));}},
pib_pan_Clean:function(poC){fext_grdOC(poC);fext_Dsb(poC,"",["btnModify","btnQuery","btnDelete"]);},
pib_pan_KP:function(txtf,e,opt){fext_KPL(txtf,e,"pan");},
pib_pan_oiChg:function(cbo,newV,oldV,opt){fext_SDO(cbo.up("#pan"),"btnNew",cbo,1);},
pib_pan_btn:function(btn,e,o){fext_CC("pub.IndivBB").pib_btn(btn);},
pib_pan_acItemClk:function(grid,r,item,row,rowI,colI,e,action){fext_CC("pub.IndivBIC").pib(grid,r,e);},
pib_pan_grdCellClk:function(cell,td,cellI,r,tr,rowI,e,o){fext_TL(cell.up("pub_indivb"));},
pib_pan_grdSelChg:function(mod,r,o){fext_CC("pub.IndivB").pib_sc(mod,r);},
pib_t2_btn:function(btn,e,o){fext_CC("pub.IndivBT2").pib_btn(btn);},
pib_t2_grdSelChg:function(mod,r,o){fext_CC("pub.IndivBT2").pib_sc(mod,r);},
pib_t3_ChgCbo:function(cbo,newV,oldV,o){var _t=cbo.up("#tabLV");var _ii=fext_oii(cbo);if(oldV!=undefined){this.pib_t3_Clean(_t);if(_ii=="area_key"){fextbud_metasLoad({pan:_t});}else if(fjsIn_array,_ii,["meta_id","tipgast_id"]){fextbud_tareasLoad({pan:_t});}}if(_ii=="year_id"){fextbud_metasLoad({pan:_t});}},
pib_t3_Clean:function(poC){fext_grdOC(poC);fext_Dsb(poC,"",["btnQuery","btnPrinter","btnFases","btnPdf","btnExcel"]);},
pib_t3_btn:function(btn,e,o){fext_CC("pub.IndivBT3").pib_btn(btn);},
pib_t3_grdSelChg:function(mod,r,o){fext_CC("pub.IndivBT3").pib_sc(mod,r);},
});