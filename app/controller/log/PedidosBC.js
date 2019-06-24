Ext.define("Siace.controller.log.PedidosBC",{extend:"Ext.app.Controller",stores:["array.Years","array.FFAB"],views:["log.PedidosBC"],
init:function(application){this.control({
"log_pedbc":{beforerender:this.lpbc_BR},"log_pedbc #pan #opc_id":{change:this.lpbc_pan_oiChg},"log_pedbc #pan #btnModify":{click:this.lpbc_pan_btn},"log_pedbc #pan #btnEttr":{click:this.lpbc_pan_btn},"log_pedbc #pan #btnQuery":{click:this.lpbc_pan_btn},"log_pedbc #pan #btnDet":{click:this.lpbc_pan_btn},"log_pedbc #pan #btnAttach":{click:this.lpbc_pan_btn},"log_pedbc #pan #btnFases":{click:this.lpbc_pan_btn},"log_pedbc #pan #btnAdd":{click:this.lpbc_pan_btn},"log_pedbc #pan #btnPrinter":{click:this.lpbc_pan_btn},"log_pedbc #pan #btnSolicitud":{click:this.lpbc_pan_btn},"log_pedbc #pan #btnReject":{click:this.lpbc_pan_btn},
"log_pedbc #pan #area_key":{change:this.lpbc_pan_ChgCbo},"log_pedbc #pan #categ_id":{change:this.lpbc_pan_ChgCbo},"log_pedbc #pan #fase_id":{change:this.lpbc_pan_ChgCbo},"log_pedbc #pan #fechaini":{change:this.lpbc_pan_Chg},"log_pedbc #pan #fechafin":{change:this.lpbc_pan_Chg},"log_pedbc #pan #filter":{change:this.lpbc_pan_ChgCbo},
"log_pedbc #pan #grdLP":{cellclick:this.lpbc_pan_grdCellClk,selectionchange:this.lpbc_pan_grdSelChg},"log_pedbc #pan #meta_id":{change:this.lpbc_pan_ChgCbo},"log_pedbc #pan #ped_nro":{change:this.lpbc_pan_Chg,keypress:this.lpbc_pan_KP},"log_pedbc #pan #tarea_key":{change:this.lpbc_pan_ChgCbo},"log_pedbc #pan #tipped_id":{change:this.lpbc_pan_ChgCbo},"log_pedbc #pan #year_id":{change:this.lpbc_pan_ChgCbo},
"log_pedbc #tabLPD":{activate:this.lpbc_tabsAct},
"log_pedbc #tabLPW":{activate:this.lpbc_tabsAct},"log_pedbc #tabLPW #opc_id":{change:this.lpbc_tabs_oiChg},"log_pedbc #tabLPW #btnNew":{click:this.lpbc_t2_btn},"log_pedbc #tabLPW #btnModify":{click:this.lpbc_t2_btn},
"log_pedbc #tabLPW #grdLPW":{selectionchange:this.lpbc_t2_grdSelChg},
"log_pedbc #tabLC":{activate:this.lpbc_tabsAct},"log_pedbc #tabLC #opc_id":{change:this.lpbc_tabs_oiChg},"log_pedbc #tabLC #btnNew":{click:this.lpbc_t3_btn},"log_pedbc #tabLC #btnModify":{click:this.lpbc_t3_btn},"log_pedbc #tabLC #btnAnnular":{click:this.lpbc_t3_btn},"log_pedbc #tabLC #btnPrinter":{click:this.lpbc_t3_btn},"log_pedbc #tabLC #btnBuenapro":{click:this.lpbc_t3_btn},"log_pedbc #tabLC #btnCCP":{click:this.lpbc_t3_btn},"log_pedbc #tabLC #btnCCE":{click:this.lpbc_t3_btn},
"log_pedbc #tabLC #grdLC":{selectionchange:this.lpbc_t3_grdSelChg},"log_pedbc actioncolumn":{click:this.lpbc_t3_acDown},
"log_pedbc #tabLO":{activate:this.lpbc_tabsAct},"log_pedbc #tabLO #opc_id":{change:this.lpbc_tabs_oiChg},"log_pedbc #tabLO #btnPrinter":{click:this.lpbc_t4_btn},"log_pedbc #tabLO #btnFases":{click:this.lpbc_t4_btn},
"log_pedbc #tabLO #grdLO":{selectionchange:this.lpbc_t4_grdSelChg}
});},
lpbc_BR:function(comp,opt){var _mi=comp.getMI();var _p=comp.down("#pan");var _t1=comp.down("#tabLPD");var _t2=comp.down("#tabLPW");var _t3=comp.down("#tabLC");var _t4=comp.down("#tabLO");var _grd=_p.down("#grdLP");var _vs=fextpub_sessVar();var _me=this;
	fextpub_uamoPerm({comp:_p,mi:_mi});fextpub_tabgenFilt({obj:_p.down("#categ_id"),tgp:5050,TR:"cboA"});
	if(_mi==5103){fextpub_uamoPerm({comp:_t2});fextpub_uamoPerm({comp:_t3});fextpub_uamoPerm({comp:_t4});fextlog_faseFilt({obj:_p.down("#fase_id"),di:501,ft:1,TR:"cboLPB",TQ:"cboLPB",val:151});fext_SV(_p,"filter",">=");fextbud_tareasAMParam({pan:_p,di:501,de:1,mi:_mi});fextbud_tareasATParam({pan:_p,di:501,de:1,mi:_mi});}
	else if(_mi==5111){fext_SV(_t3,"menu_id",5114);fext_SV(_t4,"menu_id",5115);fextpub_uamoPerm({comp:_t2});fextpub_uamoPerm({comp:_t3});fextpub_uamoPerm({comp:_t4});fextlog_faseFilt({obj:_p.down("#fase_id"),di:501,ft:1,TR:"cboLPB",TQ:"cboLPB",val:161});_grd.columns[10].hidden=true;fext_SVI(_p,"",false,["btnAdd","btnChange"]);fext_SV(_p,"filter","=");fextbud_metasParam({pan:_p});fextbud_tareasParam({pan:_p});}else{return false;}
	fextpub_yearsVisible(_p.down("#year_id"),_vs.y*1);fextpub_areasFilt({obj:_p.down("#area_key"),filt:false,nuk:(_mi==5103?"":"NoT"),OB:"area_abrev",mi:_mi});fextpub_tabgenFilt({obj:_p.down("#tipped_id"),tgp:5005,TR:"cboA"});
	var _str1=fext_CS("log.Pedidos_DetB");fext_BSGP(_t1,_str1);_str1.sort("peddet_item","ASC");
	_str1.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd);fext_PSEP(str,["xxPed_key","xxType_record","xxPag"],[_r.data.ped_key,"grdLPB",1]);});
	var _str2=fext_CS("log.Pedidos_WebLPB");fext_BSGP(_t2,_str2);_str2.sort("pedweb_fechaini","ASC");
	_str2.on("beforeload",function(str,oper,opt){fext_Dsb(_t2,"",["btnModify","btnQuery"]);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxPed_key","xxType_record","vs","xxMenu_id","xxPag","ssNO_USK"],[_r.data.ped_key,"grdLPBC",fext_JE(_vs),_mi,1,"NoT"]);});
	var _str3=fext_CS("log.CotizacionesLPB");fext_BSGP(_t3,_str3);_str3.sort("coti_fecha","ASC");
	_str3.on("beforeload",function(str,oper,opt){fext_Dsb(_t3,"",["btnModify","btnAnnular","btnPrinter","btnBuenapro"]);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxPed_key","xxType_record","vs","xxMenu_id","xxPag","ssNO_USK"],[_r.data.ped_key,"grdLPBC",fext_JE(_vs),_mi,1,"NoT"]);});
	_str3.on("refresh",function(str,oper,opt){var _num=0;str.each(function(rec){if(rec.data.coti_flga!=98){_num+=1;}});if(_num>0){_t3.down("#btnCCP").enable();_t3.down("#btnCCE").enable();}else{fext_Dsb(_t3,"",["btnCCP","btnCCE"]);}});
	var _str4=fext_CS("log.OrdenesB");fext_BSGP(_t4,_str4);_str4.sort("orden_fecha","ASC");
	_str4.on("beforeload",function(str,oper,opt){fext_Dsb(_t4,"btnPrinter");var _r=fext_grdSR(_grd);fext_PSEP(str,["xxTablex","xxTablex_key","xxType_record","xxMenu_id","vs","xxPag","ssNO_USK"],[5000,_r.data.ped_key,"grdLPB",_mi,fext_JE(_vs),1,"NoT"]);});
	var _str=fext_CS("log.PedidosBC");fext_BSGP(_p,_str);_str.sort("ped_documento","DESC");
	_str.on("beforeload",function(str,oper,opt){_me.lpbc_pan_DB(_p);_me.lpbc_tabsClean(comp,true);fext_PSEP(str,["xxYear_id","xxArea_key","xxMeta_id","xxTarea_key","xxTipped_id","xxPed_nro","xxCateg_id","xxFilter","xxFase_id","xxType_record","vs","xxMenu_id","xxPag"],["","","","","","","","","",(_mi==5103?"grdCtr":"grdQuatation"),fext_JE(_vs),_mi,1],_p,["year_id","area_key","meta_id","tarea_key","tipped_id","ped_nro","categ_id","filter","fase_id","","","",""])});
	if(_mi==5111){_str.load({params:{xxFase_id:161}});}
},
lpbc_tabsAct:function(comp,o){if(!fext_grdSR(comp.up("log_pedbc"),"grdLP")){return false;}fext_GS(comp).load();},
lpbc_tabsClean:function(poC,pb,pnF,pn511){var _md=fext_CM("log.PedidoW");var _fi=(Ext.isEmpty(pnF)?0:pnF)*1;var _511=(Ext.isEmpty(pn511)?0:pn511)*1;
	var _t=poC.down("#tabLPD");fext_grdOC(_t,pb,_md);
	_t=poC.down("#tabLPW");fext_grdOC(_t,pb,_md);fext_SDO(_t,"btnNew",_t.down("#opc_id"),1,pb||_fi<151?true:"");fext_Dsb(_t,"",["btnModify","btnQuery"]);
	_t=poC.down("#tabLC");fext_grdOC(_t,pb,_md);fext_SDO(_t,"btnNew",_t.down("#opc_id"),1,pb||_fi<151?true:"");fext_SDO(_t,"btnCCP",_t.down("#opc_id"),5023,pb||_fi<151||_511<=0?true:"");fext_SD(_t,"btnCCE",_t.down("#opc_id"),5023,pb||_fi<151||_511<=0?true:"");fext_Dsb(_t,"",["btnModify","btnAnnular","btnPrinter","btnBuenapro"]);
	_t=poC.down("#tabLO");fext_grdOC(_t,pb,_md);fext_Dsb(_t,"",["btnQuery","btnPrinter","btnFases"]);
},
lpbc_tabs_oiChg:function(cbo,newV,oldV,o){fext_TS(cbo);},
lpbc_pan_Chg:function(txtf,newV,oldV,opt){this.lpbc_pan_Clean(txtf.up("#pan"));},
lpbc_pan_ChgCbo:function(cbo,newV,oldV,opt){var _p=cbo.up("#pan");var _ii=fext_oii(cbo);if(oldV!=undefined||_ii=="area_key"){this.lpbc_pan_Clean(_p);if(_ii=="year_id"){fextbud_metasLoad({pan:_p});}else if(_ii=="meta_id"){fextbud_tareasLoad({pan:_p});}}if(_ii=="area_key"){fextbud_metasLoad({pan:_p});}},
lpbc_pan_Clean:function(poC){fext_grdOC(poC);this.lpbc_pan_DB(poC);this.lpbc_tabsClean(poC.up("log_pedbc"),true);},
lpbc_pan_DB:function(poC){fext_Dsb(poC,"",["btnModify","btnEttr","btnQuery","btnDet","btnAttach","btnFases","btnPrinter","btnAdd","btnSolicitud","btnReject"]);},
lpbc_pan_KP:function(txtf,e,opt){fext_KPL(txtf,e,"pan");},
lpbc_pan_oiChg:function(cbo,newV,oldV,opt){fext_SVI(cbo.up("panel"),"btnModify",!fextpub_uamoBtn(cbo,2));fext_SVI(cbo.up("panel"),"btnEttr",!fextpub_uamoBtn(cbo,5001));},
lpbc_pan_btn:function(btn,e,opt){fext_CC("log.PedBCB").lpb(btn,opt);},
lpbc_pan_grdCellClk:function(cell,td,cellI,r,tr,rowI,e,o){fext_TL(cell.up("log_pedbc"));},
lpbc_pan_grdSelChg:function(mod,r,o){fext_CC("log.PedBC").lpb_sc(mod,r);},
lpbc_t2_btn:function(btn,e,opt){fext_CC("log.PedBCT2").lpb_btn(btn);},
lpbc_t2_grdSelChg:function(mod,r,o){fext_CC("log.PedBCT2").lpb_sc(mod,r);},
lpbc_t3_btn:function(btn,e,opt){fext_CC("log.PedBCT3B").lpb(btn,opt);},
lpbc_t3_grdSelChg:function(mod,r,o){fext_CC("log.PedBCT3").lpb_sc(mod,r);},
lpbc_t3_acDown:function(grid,cell,row,col,e,r,t){fext_CC("log.PedBCT3D").lpb(r);},
lpbc_t4_btn:function(btn,e,o){fext_CC("log.PedBCT4").lpb_btn(btn);},
lpbc_t4_grdSelChg:function(mod,r,o){fext_CC("log.PedBCT4").lpb_sc(mod,r);}
});