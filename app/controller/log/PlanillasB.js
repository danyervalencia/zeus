Ext.define("Siace.controller.log.PlanillasB",{extend:"Ext.app.Controller",stores:["array.DocOrdenAB","array.Years"],views:["log.PlanillasB"],
init:function(application){this.control({
"log_planb":{beforerender:this.lpb_BR},"log_planb #pan #opc_id":{change:this.lpb_pan_oiChg},
"log_planb #pan #btnNew":{click:this.lpb_pan_btn},"log_planb #pan #btnQuery":{click:this.lpb_pan_btn},"log_planb #pan #btnGlosa":{click:this.lpb_pan_btn},"log_planb #pan #btnAnnular":{click:this.lpb_pan_btn},"log_planb #pan #btnPrinter":{click:this.lpb_pan_btn},"log_planb #pan #btnCertif":{click:this.lpb_pan_btn},"log_planb #pan #btnGO":{click:this.lpb_pan_btn},"log_planb #pan #btnPPS":{click:this.lpb_pan_btn},
"log_planb #pan #area_key":{change:this.lpb_pan_ChgCbo},"log_planb #pan #doc_id":{change:this.lpb_pan_ChgCbo},"log_planb #pan #fechaini":{change:this.lpb_pan_Chg},"log_planb #pan #fechafin":{change:this.lpb_pan_Chg},
"log_planb #pan #grdLP":{cellclick:this.lpb_pan_grdCellClk,selectionchange:this.lpb_pan_grdSelChg},
"log_planb #pan #meta_id":{change:this.lpb_pan_ChgCbo},"log_planb #pan #orden_nro":{change:this.lpb_pan_Chg,keypress:this.lpb_pan_KP},
"log_planb #pan #pers_ruc":{blur:this.lpb_pan_prBlur,change:this.lpb_pan_Chg,focus:this.lpb_pan_prFocus,keypress:this.lpb_pan_prKP},"log_planb #pan #tarea_key":{change:this.lpb_pan_ChgCbo},"log_planb #pan #year_id":{change:this.lpb_pan_ChgCbo},
"log_planb #tabLOD":{activate:this.lpb_tabsAct},
"log_planb #tabLOP":{activate:this.lpb_tabsAct},"log_planb #tabLOP #opc_id":{change:this.lpb_tabs_oiChg},
"log_planb #tabLOP #btnQuery":{click:this.lpb_t2_btn},"log_planb #tabLOP #btnPrinter":{click:this.lpb_t2_btn},"log_planb #tabLOP #grdLOP":{selectionchange:this.lpb_t2_grdSelChg},
"log_planb #tabLI":{activate:this.lpb_tabsAct},"log_planb #tabLI #opc_id":{change:this.lpb_tabs_oiChg},
});},
lpb_BR:function(comp,o){var _mi=comp.getMI();var _p=comp.down("#pan");var _t1=comp.down("#tabLPP");var _grd=_p.down("#grdLP");var _cbo=comp.down("#tiporden_id");var _vs=fextpub_sessVar();var _me=this;
	fextpub_uamoPerm({comp:_p,mi:_mi});fextpub_yearsVisible(_p.down("#year_id"),_vs.y);
	fext_BS(comp,"tiporden_id","log.Tipos_OrdenesCboA");fext_GS(comp,"tiporden_id").load({params:{xxTablex:5090,xxType_record:"cboA",xxAdd_blank:"YES",xxOrder_by:"tiporden_orden"},callback:function(r){if(r.length>1){_cbo.setValue(r[0].data.tiporden_id);}else{_cbo.disable();_cbo.setValue("");}}});

	//fextpub_areasFilt({obj:_p.down("#area_key"),filt:false,mi:_mi,OB:"area_abrev"});
	//var _str2=fext_CS("log.Ordenes_ProcedenciasLOB");fext_BSGP(_t2,_str2);
	//_str2.on("beforeload",function(str,oper,opt){fext_Dsb(_t2,"",["btnQuery","btnPrinter"]);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxOrden_key","xxType_record","xxPag"],[_r.data.orden_key,"grdLOB",1]);});
	var _str=fext_CS("log.PlanillasB");fext_BSGP(_p,_str);_str.sort("plan_documento","DESC");
	_str.on("beforeload",function(str,oper,opt){_me.lpb_pan_DB(_p);_me.lpb_tabsClean(comp,true,"");fext_PSEP(str,["xxYear_id","xxTiporden_id","xxPlan_nro","xxFechaini","xxFechafin","xxPers_key","xxType_record","vs","xxMenu_id","xxPag"],["","","","","","","grd",fext_JE(_vs),_mi,1],_p,["year_id","tiporden_id","plan_nro","fechaini","fechafin","pers_key","","","",""]);});
},
lpb_tabsAct:function(comp,o){if(!fext_grdSR(comp.up("log_planb"),"grdLP")){return false;}fext_GS(comp).load();},
lpb_tabsClean:function(poC,pb,pcF){var _md=fext_CM("log.PlanillaW");var _t=poC.down("#tabLPP");fext_grdOC(_t,pb,_md);
	//_t=poC.down("#tabLOP");fext_grdOC(_t,pb||pcF==98?true:pb,_md);fext_Dsb(_t,"",["btnQuery","btnPrinter"]);_t=poC.down("#tabLI");fext_grdOC(_t,pb||pcF==98?true:pb,_md);fext_Dsb(_t,"",["btnQuery","btnPrinter"]);
},
lpb_tabs_oiChg:function(cbo,newV,oldV,o){fext_TS(cbo);},
lpb_pan_Chg:function(txtf,newV,oldV,o){this.lpb_pan_Clean(txtf.up("#pan"));},
lpb_pan_ChgCbo:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");var _ii=fext_oii(cbo);if(oldV!=undefined){this.lpb_pan_Clean(cbo.up("#pan"));if(_ii=="year_id"){fextbud_metasLoad({pan:_p});}else if(_ii=="meta_id"){fextbud_tareasLoad({pan:_p});}}if(_ii=="area_key"){fextbud_tareasAMLoad({pan:_p});}},
lpb_pan_Clean:function(poC){fext_grdOC(poC);this.lpb_pan_DB(poC);this.lpb_tabsClean(poC.up("log_planb"),true);},
lpb_pan_DB:function(poC){fext_Dsb(poC,"",["btnModify","btnQuery","btnGlosa","btnAnnular","btnPrinter","btnCertif","btnGO"]);},
lpb_pan_KP:function(txtf,e,o){fext_KPL(txtf,e,"pan");},
lpb_pan_oiChg:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");fext_SDO(_p,"btnNew",cbo,1);},
lpb_pan_btn:function(btn,e,opt){fext_CC("log.PlanBB").lpb(btn,opt);},
lpb_pan_grdCellClk:function(cell,td,cellI,r,tr,rowI,e,o){fext_TL(cell.up("log_planb"));},
lpb_pan_grdSelChg:function(mod,r,o){fext_CC("log.PlanB").lpb_sc(mod,r);},
lpb_pan_prBlur:function(txtf,The,o){this.lpb_pan_prS(txtf.up("#pan"),0);},
lpb_pan_prFocus:function(txtf,The,o){this.lpb_pan_prS(txtf.up("#pan"),1);},
lpb_pan_prKP:function(txtf,e,o){if(e.getCharCode()==13){this.lpb_pan_prS(txtf.up("#pan"),13);}},
lpb_pan_prS:function(poC,pcType){fext_fieldSearch(pcType,poC,["pers_key","PERS_RUC","pers_ruc","pers_nombre"],["php/public_personas_json_records.php","xxPers_ruc","textfield_search",""],"0",["","",["pers_ruc"],""],"");},
lpb_t2_btn:function(btn,e,o){fext_CC("log.OrdenBT2").lpb_btn(btn);},
lpb_t2_grdSelChg:function(mod,r,o){fext_CC("log.OrdenBT2").lpb_sc(mod,r);}
});