Ext.define("Siace.controller.log.PedidosB",{extend:"Ext.app.Controller",stores:["array.Years","array.FFAB"],views:["log.PedidosB"],
init:function(application){this.control({
"log_pedb":{beforerender:this.lpb_BR},"log_pedb #pan #opc_id":{change:this.lpb_pan_oiChg},
"log_pedb #pan #btnNew":{click:this.lpb_pan_btn},"log_pedb #pan #btnModify":{click:this.lpb_pan_btn},"log_pedb #pan #btnEttr":{click:this.lpb_pan_btn},"log_pedb #pan #btnQuery":{click:this.lpb_pan_btn},"log_pedb #pan #btnDet":{click:this.lpb_pan_btn},"log_pedb #pan #btnAttach":{click:this.lpb_pan_btn},"log_pedb #pan #btnActivate":{click:this.lpb_pan_btn},"log_pedb #pan #btnAnnular":{click:this.lpb_pan_btn},"log_pedb #pan #btnFases":{click:this.lpb_pan_btn},"log_pedb #pan #btnPrinter":{click:this.lpb_pan_btn},
"log_pedb #pan #area_key":{change:this.lpb_pan_ChgCbo},"log_pedb #pan #fase_id":{change:this.lpb_pan_ChgCbo},"log_pedb #pan #fechaini":{change:this.lpb_pan_Chg},"log_pedb #pan #fechafin":{change:this.lpb_pan_Chg},"log_pedb #pan #filter":{change:this.lpb_pan_ChgCbo},
"log_pedb #pan #grdLP":{cellclick:this.lpb_pan_grdCellClk,selectionchange:this.lpb_pan_grdSelChg},
"log_pedb #pan #meta_id":{change:this.lpb_pan_ChgCbo},"log_pedb #pan #ped_nro":{change:this.lpb_pan_Chg,keypress:this.lpb_pan_KP},"log_pedb #pan #tarea_key":{change:this.lpb_pan_ChgCbo},"log_pedb #pan #tipped_id":{change:this.lpb_pan_ChgCbo},"log_pedb #pan #year_id":{change:this.lpb_pan_ChgCbo},
"log_pedb #tabLPD":{activate:this.lpb_tabsAct},"log_pedb #tabLPD #grdLPD":{selectionchange:this.lpb_t1_grdSelChg},
"log_pedb #tabLC":{activate:this.lpb_tabsAct},"log_pedb #tabLC #opc_id":{change:this.lpb_tabs_oiChg},"log_pedb #tabLC #btnQuery":{click:this.lpb_t2_btn},"log_pedb #tabLC #btnPrinter":{click:this.lpb_t2_btn},"log_pedb #tabLC #btnCuadro":{click:this.lpb_t2_btn},
"log_pedb #tabLC #grdLC":{selectionchange:this.lpb_t2_grdSelChg},
"log_pedb #tabLO":{activate:this.lpb_tabsAct},"log_pedb #tabLO #opc_id":{change:this.lpb_tabs_oiChg},"log_pedb #tabLO #btnPrinter":{click:this.lpb_t3_btn},"log_pedb #tabLO #btnFases":{click:this.lpb_t3_btn},
"log_pedb #tabLO #grdLO":{selectionchange:this.lpb_t3_grdSelChg},
});},
lpb_BR:function(comp,opt){var _mi=comp.getMI();var _pan=comp.down("#pan");var _t1=comp.down("#tabLPD");var _t2=comp.down("#tabLC");var _t3=comp.down("#tabLO");var _grd=_pan.down("#grdLP");var _vs=fextpub_sessVar();var _me=this;
	fextpub_uamoPerm({comp:_pan,mi:_mi});fextlog_faseFilt({obj:_pan.down("#fase_id"),di:501,ft:1,TR:"cboLPB",TQ:"cboLPB"});
	fextpub_tabgenFilt({obj:_pan.down("#tipped_id"),tgp:5005,TR:"cboA"});
	if(_mi==5101){fextpub_uamoPerm({comp:_t2});fextpub_uamoPerm({comp:_t3});fextbud_tareasAMParam({pan:_pan,di:501,de:1});fextbud_tareasATParam({pan:_pan,di:501,de:1});fextpub_yearsVisible(_pan.down("#year_id"),_vs.y);fextpub_areasFilt({obj:_pan.down("#area_key"),vsb:false,filt:true,ak:_vs.a,nuk:"NoT",AB:(_mi==5101?"NO":"")});}
	else if(_mi==5137){fext_SV(_t2,"menu_id",9999);fext_SV(_t3,"menu_id",9998);fextbud_metasParam({pan:_pan});fextbud_tareasParam({pan:_pan});fextpub_yearsVisible(_pan.down("#year_id"),_vs.y);fextpub_areasFilt({obj:_pan.down("#area_key"),filt:false,nuk:"NoT"});}else{return false;}
	var _str1=fext_CS("log.Pedidos_DetB");fext_BSGP(_t1,_str1);_str1.sort("peddet_item","ASC");
	_str1.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd);fext_PSEP(str,["xxPed_key","xxType_record","xxPag"],[_r.data.ped_key,"grdLPB",1]);});
	var _str2=fext_CS("log.CotizacionesLPB");fext_BSGP(_t2,_str2);_str2.sort("coti_fecha","DESC");
	_str2.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd);fext_Dsb(_t2,"",["btnQuery","btnPrinter"]);fext_PSEP(str,["xxPed_key","xxType_record","vs","xxMenu_id","ssNO_USK","xxPag"],[_r.data.ped_key,"grdLPB",fext_JE(_vs),_mi,"NoT",1]);});
	var _str3=fext_CS("log.OrdenesB");fext_BSGP(_t3,_str3);_str3.sort("orden_fecha","ASC");
	_str3.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd);fext_Dsb(_t3,"",["btnPrinter","btnFases"]);fext_PSEP(str,["xxTablex","xxTablex_key","xxType_record","vs","xxMenu_id","ssNO_USK","xxPag"],[5000,_r.data.ped_key,"grdLPB",fext_JE(_vs),_mi,"NoT",1]);});
	var _str=fext_CS("log.PedidosB");fext_BSGP(_pan,_str);_str.sort("ped_fecha","DESC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(_pan,"",["btnModify","btnEttr","btnQuery","btnDet","btnAttach","btnActivate","btnAnnular","btnFases","btnPrinter"]);_me.lpb_tabsClean(comp,true);fext_PSEP(str,["xxYear_id","xxTipped_id","xxPed_nro","xxArea_key","xxMeta_id","xxTarea_key","xxFechaini","xxFechafin","xxPed_estado","xxFilter","xxFase_id","xxType_record","vs","xxMenu_id","xxPag"],["","","",_mi==5101?_vs.a:fext_GV(_pan,"area_key"),"","","","",_mi==5137?2:"","","","grd",fext_JE(_vs),_mi,1],_pan,["year_id","tipped_id","ped_nro","","meta_id","tarea_key","fechaini","fechafin","","filter","fase_id","","","",""]);});_str.load();
},
lpb_tabsAct:function(comp,o){if(!fext_grdSR(comp.up("log_pedb"),"grdLP")){return false;}fext_GS(comp).load();},
lpb_tabsClean:function(poC,pb,pnF){var _md=fext_CM("log.PedidoW");var _fase=(Ext.isEmpty(pnF)?0:pnF);
	var _t=poC.down("#tabLPD");fext_grdOC(_t,pb,_md);fext_SD(_t,"btnAdd",pb||_fase>0?true:fextpub_uamoBtn("",2,poC.down("#pan")));fext_Dsb(_t,"",["btnModify","btnQuery","btnDelete"]);
	_t=poC.down("#tabLC");fext_grdOC(_t,pb,_md);fext_Dsb(_t,"",["btnQuery","btnPrinter","btnCuadro"]);_t=poC.down("#tabLO");fext_grdOC(_t,pb,_md);fext_Dsb(_t,"",["btnQuery","btnPrinter","btnFases"]);
},
lpb_tabs_oiChg:function(cbo,newV,oldV,o){fext_TS(cbo);},
lpb_pan_Chg:function(txtf,newV,oldV,opt){this.lpb_pan_Clean(txtf.up("#pan"));},
lpb_pan_ChgCbo:function(cbo,newV,oldV,opt){var _p=cbo.up("#pan");var _ii=fext_oii(cbo,"",3);if(_ii=="are")fextbud_tareasAMLoad({pan:_p});if(oldV!==undefined||_ii=="are"){if(_ii=="yea"){fextbud_tareasAMLoad({pan:_p});}else if(_ii=="met"){fextbud_tareasATLoad({pan:_p});}this.lpb_pan_Clean(_p);}},
lpb_pan_Clean:function(poC){fext_grdOC(poC);fext_Dsb(poC,"",["btnModify","btnQuery","btnEttr","btnAttach","btnAnnular","btnPrinter"]);this.lpb_tabsClean(poC.up("log_pedb"),true);},
lpb_pan_KP:function(txtf,e,opt){fext_KPL(txtf,e,"pan");},
lpb_pan_oiChg:function(cbo,newV,oldV,opt){fext_SDO(cbo.up("panel"),"btnNew",cbo,1);},
lpb_pan_btn:function(btn,e,opt){fext_CC("log.PedBB").lpb(btn,opt);},
lpb_pan_grdCellClk:function(cell,td,cellI,r,tr,rowI,e,o){fext_TL(cell.up("log_pedb"));},
lpb_pan_grdSelChg:function(mod,r,o){fext_CC("log.PedB").lpb_sc(mod,r);},
lpb_t1_grdSelChg:function(mod,r,o){fext_CC("log.PedBT1").lpb_sc(mod,r);},
lpb_t2_btn:function(btn,e,o){fext_CC("log.PedBT2B").lpb(btn);},
lpb_t2_grdSelChg:function(mod,r,o){fext_CC("log.PedBT2").lpb_sc(mod,r);},
lpb_t3_btn:function(btn,e,o){fext_CC("log.PedBT3B").lpb(btn);},
lpb_t3_grdSelChg:function(mod,r,o){fext_CC("log.PedBT3").lpb_sc(mod,r);}
});