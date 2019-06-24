Ext.define("Siace.controller.log.Buena_ProBPO",{extend:"Ext.app.Controller",views:["log.Buena_ProBPO"],
init:function(application){this.control({
"log_bpbpo":{beforerender:this.lbpbpo_BR},"log_bpbpo #pan #btnModify":{click:this.lbpbpo_pan_btn},"log_bpbpo #pan #btnCC":{click:this.lbpbpo_pan_btn},"log_bpbpo #pan #btnBPDel":{click:this.lbpbpo_pan_btn},"log_bpbpo #pan #btnCertif":{click:this.lbpbpo_pan_btn},"log_bpbpo #pan #btnGO":{click:this.lbpbpo_pan_btn},"log_bpbpo #pan #btnOrden":{click:this.lbpbpo_pan_btn},"log_bpbpo #pan #btnPers_search":{click:this.lbpbpo_pan_btn},
"log_bpbpo #pan #area_key":{change:this.lbpbpo_pan_ChgCbo},"log_bpbpo #pan #grdLBP":{cellclick:this.lbpbpo_pan_grdCellClk,selectionchange:this.lbpbpo_pan_grdSelChg},
"log_bpbpo #pan #meta_id":{change:this.lbpbpo_pan_ChgCbo},"log_bpbpo #pan #ped_nro":{change:this.lbpbpo_pan_Chg,keypress:this.lbpbpo_pan_KP},
"log_bpbpo #pan #pers_ruc":{blur:this.lbpbpo_pan_prBlur,change:this.lbpbpo_pan_Chg,focus:this.lbpbpo_pan_prFocus,keypress:this.lbpbpo_pan_prKP},
"log_bpbpo #pan #tarea_key":{change:this.lbpbpo_pan_ChgCbo},
"log_bpbpo #pan #tipped_id":{change:this.lbpbpo_pan_ChgCbo},"log_bpbpo #pan #type_query":{change:this.lbpbpo_pan_ChgCbo},"log_bpbpo #pan #year_id":{change:this.lbpbpo_pan_ChgCbo},
"log_bpbpo #tabLP":{activate:this.lbpbpo_tabsAct},"log_bpbpo #tabLP #opc_id":{change:this.lbpbpo_tabs_oiChg},"log_bpbpo #tabLP #btnQuery":{click:this.lbpbpo_t1_btnQueryClick},"log_bpbpo #tabLP #btnAttach":{click:this.lbpbpo_t1_btnAttachClick},"log_bpbpo #tabLP #btnFases":{click:this.lbpbpo_t1_btnFasesClick},"log_bpbpo #tabLP #btnPrinter":{click:this.lbpbpo_t1_btnPrinterClick},
"log_bpbpo #tabLC":{activate:this.lbpbpo_tabsAct},"log_bpbpo #tabLC #opc_id":{change:this.lbpbpo_tabs_oiChg},"log_bpbpo #tabLC #btnQuery":{click:this.lbpbpo_t2_btn},"log_bpbpo #tabLC #btnPrinter":{click:this.lbpbpo_t2_btn},
"log_bpbpo #tabLM":{activate:this.lbpbpo_tabsAct},"log_bpbpo #tabLM #btnFases":{click:this.lbpbpo_t3_btnFasesClick},"log_bpbpo #tabLM #btnPrinter":{click:this.lbpbpo_t3_btnPrinterClick},
});},
lbpbpo_BR:function(comp,o){var _mi=comp.getMI();var _p=comp.down("#pan");var _grd=_p.down("#grdLBP");var _t1=comp.down("#tabLP");var _t2=comp.down("#tabLC");var _t3=comp.down("#tabLM");var _vs=fextpub_sessVar();var _me=this;if(_mi!=5116){return false;}
	fextpub_uamoPerm({comp:_p,mi:_mi});fextpub_uamoPerm({comp:_t1});fextpub_uamoPerm({comp:_t2});fextpub_uamoPerm({comp:_t3});
	fextbud_metasParam({pan:_p});fextbud_tareasParam({pan:_p});fextpub_yearsVisible(_p.down("#year_id"),_vs.y);fextpub_tabgenFilt({obj:_p.down("#tipped_id"),tgp:5005,TR:"cboA"});fextpub_areasFilt({obj:_p.down("#area_key"),filt:false,nuk:"NoT"});
	var _str=Ext.create("Ext.data.Store",{fields:[{name:"typque_id",type:"string"},{name:"typque_nombre",type:"string"}],data:[{typque_id:"",typque_nombre:""},{typque_id:"PENDIENTES",typque_nombre:"Pendientes"},{typque_id:"GIRADAS",typque_nombre:"Generadas"}]});
	var _cboTQ=_p.down("#type_query");_cboTQ.bindStore(_str);_cboTQ.getStore().load({callback:function(rec,oper,succ){_cboTQ.setValue("PENDIENTES");}});
	var _str1=fext_CS("log.Pedidos_DetB");fext_BSGP(_t1,_str1);_str1.sort("peddet_item","ASC");
	_str1.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd);fext_PSEP(str,["xxPed_key","xxType_record","xxPag"],[_r.data.ped_key,"grdLPB",1]);});
	var _str2=fext_CS("log.Cotizaciones_DetB");;fext_BSGP(_t2,_str2);_str2.sort("cotidet_item","ASC");
	_str2.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd);fext_PSEP(str,["xxCoti_key","xxType_record","xxPag"],[_r.data.coti_key,"grdLBPBPO",1]);});
	var _str3=fext_CS("log.Modificaciones_DetB");fext_BSGP(_t3,_str3);_str3.sort("modifdet_item","ASC");
	_str3.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd);fext_PSEP(str,["xxModif_key","xxType_record","xxPag"],[_r.data.modif_key,"grdLMB",1]);});
	var _str=fext_CS("log.Buena_ProBPO");fext_BSGP(_p,_str);_str.sort("bp_fecha","ASC");
	_str.on("beforeload",function(str,oper,opt){_me.lbpbpo_tabsClean(comp,true);_me.lbpbpo_pan_DB(_p,_t1,_t2);fext_PSEP(str,["xxYear_id","xxTipped_id","xxPed_nro","xxArea_key","xxMeta_id","xxTarea_key","xxPers_key","xxType_record","xxType_query","vs","xxMenu_id","xxPag"],["","","","","","","","grdBPO","",fext_JE(_vs),_mi,1],_p,["year_id","tipped_id","ped_nro","area_key","meta_id","tarea_key","pers_key","","type_query","","",""]);});_str.load();
},
lbpbpo_tabsAct:function(comp,o){var _r=fext_grdSR(comp.up("log_bpbpo"),"grdLBP");if(!_r){return false;}fext_GS(comp).load();
	if(comp.itemId=="tabLC"){Ext.Ajax.request({method:"POST",url:"php/logistics_cotizaciones_json_records.php",params:{xxCoti_key:_r.data.coti_key,xxType_record:"winLBPBPO",ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},success:function(resp,opt){var _res=fext_DJ("",resp);var _d=_res.data[0];fext_SV(comp,"coti_documento",_d.coti_documento);fext_SV(comp,"coti_fecha",_d.coti_fecha);fext_SV(comp,"coti_monto",_d.coti_monto);}});}
	else if(comp.itemId=="tabLM"){Ext.Ajax.request({method:"POST",url:"php/logistics_modificaciones_json_records.php",params:{xxModif_key:_r.data.modif_key,xxType_record:"winLBPBPO",ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},success:function(resp,opt){var _res=fext_DJ("",resp);var _d=_res.data[0];fext_SV(comp,"modif_documento",_d.modif_documento);fext_SV(comp,"modif_monto",_d.modif_monto);}});}
},
lbpbpo_tabsClean:function(poC,pb,pcMK){var _md=fext_CM("log.PedidoW");var _t=poC.down("#tabLP");fext_grdOC(_t,pb,_md);_t=poC.down("#tabLC");fext_grdOC(_t,pb,_md);var _tpn=poC.down("#tpn");
	_t=poC.down("#tabLM");fext_grdOC(_t,pb,_md);if(pb||Ext.isEmpty(pcMK)){_tpn.child("#tabLM").tab.hide();_tpn.setActiveTab(0);}else{_tpn.child("#tabLM").tab.show();}
},
lbpbpo_tabs_oiChg:function(cbo,newV,oldV,o){fext_TS(cbo);},
lbpbpo_pan_Chg:function(txtf,newV,oldV,o){this.lbpbpo_pan_Clean(txtf.up("#pan"));},
lbpbpo_pan_ChgCbo:function(cbo,newV,oldV,opt){var _p=cbo.up("#pan");var _ii=fext_oii(cbo);if(oldV!=undefined||_ii=="area_key"){this.lbpbpo_pan_Clean(cbo.up("#pan"));if(_ii=="year_id"){fextbud_metasLoad({pan:_p});}else if(_ii=="meta_id"){fextbud_tareasLoad({pan:_p});}}if(_ii=="area_key"){fextbud_metasLoad({pan:_p});}},
lbpbpo_pan_Clean:function(poC){fext_grdOC(poC);var _pan=poC.up("log_bpbpo");this.lbpbpo_pan_DB(poC,_pan.down("#tabLP"),_pan.down("#tabLC"));this.lbpbpo_tabsClean(_pan,true);},
lbpbpo_pan_DB:function(poC,poT1,poT2){fext_Dsb(poC,"",["btnModify","btnCC","btnBPDel","btnCertif","btnGO","btnOrden"]);fext_Dsb(poT1,"",["btnQuery","btnAttach","btnFases","btnPrinter"]);fext_Dsb(poT2,"",["btnQuery","btnPrinter"]);},
lbpbpo_pan_KP:function(txtf,e,opt){fext_KPL(txtf,e,"pan");},
lbpbpo_pan_btn:function(btn,e,opt){fext_CC("log.BPBPOB").lbpb(btn,opt);},
lbpbpo_pan_grdCellClk:function(cell,td,cellI,r,tr,rowI,e,o){fext_TL(cell.up("log_bpbpo"));},
lbpbpo_pan_grdSelChg:function(mod,r,o){fext_CC("log.BPBPO").lbpb_sc(mod,r);},
lbpbpo_pan_prBlur:function(txtf,The,opt){this.lbpbpo_pan_prSearch(txtf.up("#pan"),0);},
lbpbpo_pan_prFocus:function(txtf,The,opt){this.lbpbpo_pan_prSearch(txtf.up("#pan"),1);},
lbpbpo_pan_prKP:function(txtf,e,opt){if(e.getCharCode()==13){this.lbpbpo_pan_prSearch(txtf.up("#pan"),13);}},
lbpbpo_pan_prSearch:function(poCC,pcType){fext_fieldSearch(pcType,poCC,["pers_key","PERS_RUC","pers_ruc","pers_nombre"],["php/public_personas_json_records.php","xxPers_ruc","textfield_search",""],"0",["","",["pers_ruc"],""],"");},


lbpbpo_t1_ViewEdit:function(poC,pcTE,poCg){fext_CC("log.Pedidos").lp_View({comp:poC,TE:pcTE,grd:"grdLBP",oi:pcTE,compg:poCg,nuk:"NoT"});},
lbpbpo_t1_btnQueryClick:function(btn,e,opt){var _pan=this.getLbp();this.lbpbpo_t1_ViewEdit(_pan.down("#tabLP"),3,_pan.down("#pan"));},
lbpbpo_t1_btnAttachClick:function(btn,e,opt){var _pan=this.getLbp();this.lbpbpo_t1_ViewEdit(_pan.down("#tabLP"),59,_pan.down("#pan"));},
lbpbpo_t1_btnFasesClick:function(btn,e,opt){var _pan=this.getLbp();var _r=fext_grdSR(_pan.down("#grdLBP"));if(!_r){return false;}var _tab=_pan.down("#tabLP");fext_CC("log.PedFase").lpf_Printer({comp:_tab,key:_r.data.ped_key,tit:_tab.down("#ped_documento").getValue()});},
lbpbpo_t1_btnPrinterClick:function(btn,e,opt){var _pan=this.getLbp();var _r=fext_grdSR(_pan.down("#grdLBP"));if(!_r){return false;}var _tab=_pan.down("#tabLP");fext_CC("log.Pedidos").lp_Printer({comp:_tab,key:_r.data.ped_key,tit:"C/ "+_tab.down("#ped_documento").getValue()});},


lbpbpo_t2_btn:function(btn,e,opt){fext_CC("log.BPBPOT2B").lbpb(btn,opt);},


lbpbpo_t3_btnFasesClick:function(btn,e,opt){var _pan=this.getLbp();var _r=fext_grdSR(_pan.down("#grdLBP"));if(!_r){return false;}var _tab=_pan.down("#tabLM");fext_CC("log.Modificaciones").lm_fasesPrinter({comp:_tab,key:_r.data.modif_key,tit:_tab.down("#modif_documento").getValue()});},
lbpbpo_t3_btnPrinterClick:function(btn,e,opt){var _pan=this.getLbp();var _r=fext_grdSR(_pan.down("#grdLBP"));if(!_r&&_r.data.modif_key==""){return false;}var _tab=_pan.down("#tabLM");fext_CC("log.Modificaciones").lm_Printer({comp:_tab,key:_r.data.modif_key,tit:fext_GV(_tab,"modif_documento")});},
});