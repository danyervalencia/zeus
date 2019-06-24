Ext.define("Siace.controller.tre.EgresosB",{extend:"Ext.app.Controller",stores:["array.Years","array.TipDocIdentVentaAB"],views:["tre.EgresosB"],refs:[{ref:"teb",selector:"tre_egreb"}],
init:function(application){this.control({
"tre_egreb":{beforerender:this.teb_BeforeRender},"tre_egreb #pan #opc_id":{change:this.teb_pte_opc_idChange},
"tre_egreb #pan #btnNew":{click:this.teb_pte_btnNew},"tre_egreb #pan #btnModify":{click:this.teb_pte_btnMod},"tre_egreb #pan #btnQuery":{click:this.teb_pte_btnQue},"tre_egreb #pan #btnAnnular":{click:this.teb_pte_btnAnn},"tre_egreb #pan #btnPrinter":{click:this.teb_pte_btnPri},"tre_egreb #pan #btnCheque":{click:this.teb_pte_btnChequeClick},"tre_egreb #pan #btnHide":{click:this.teb_pte_btnHideClick},
"tre_egreb #pan #btnPIS":{click:this.teb_pte_btnPIS},"tre_egreb #pan #btnPPS":{click:this.teb_pte_btnPPS},
"tre_egreb #pan #area_key":{change:this.teb_pte_area_keyChange},"tre_egreb #pan #egre_nro":{change:this.teb_pte_egre_nroChange,keypress:this.teb_pte_egre_nroKeypress},
"tre_egreb #pan #fechaini":{change:this.teb_pte_fechainiChange},"tre_egreb #pan #fechafin":{change:this.teb_pte_fechafinChange},
"tre_egreb #pan #grdTE":{cellclick:this.teb_pte_grdCellClk,selectionchange:this.teb_pte_grdSelChg},
"tre_egreb #pan #indiv_dni":{blur:this.teb_pte_indiv_dniBlur,change:this.teb_pte_indiv_dniChange,focus:this.teb_pte_indiv_dniFocus,keypress:this.teb_pte_indiv_dniKeypress},
"tre_egreb #pan #meta_id":{change:this.teb_pte_meta_idChange},"tre_egreb #pan #pers_ruc":{blur:this.teb_pte_pers_rucBlur,change:this.teb_pte_pers_rucChange,focus:this.teb_pte_pers_rucFocus,keypress:this.teb_pte_pers_rucKeypress},"tre_egreb #pan #tipdocident_id":{change:this.teb_pte_tipdocident_idChange},"tre_egreb #pan #year_id":{change:this.teb_pte_year_idChange},
"tre_egreb #tabTETF":{activate:this.teb_ttetf_Activate},
"tre_egreb #tabTEP":{activate:this.teb_ttep_Activate},"tre_egreb #tabTEP #opc_id":{change:this.teb_ttep_opc_idChange},"tre_egreb #tabTEP #btnQuery":{click:this.teb_ttep_btnQueryClick},"tre_egreb #tabTEP #btnPrinter":{click:this.teb_ttep_btnPrinterClick},"tre_egreb #tabTEP #grdTEP":{selectionchange:this.teb_ttep_grdTEPSelectionChange},
"tre_egreb #tabLP":{activate:this.teb_tlp_Activate},"tre_egreb #tabLP #btnQuery":{click:this.teb_tlp_btnQueryClick},"tre_egreb #tabLP #btnAttach":{click:this.teb_tlp_btnAttachClick},"tre_egreb #tabLP #btnFases":{click:this.teb_tlp_btnFasesClick},"tre_egreb #tabLP #btnPrinter":{click:this.teb_tlp_btnPrinterClick},"tre_egreb #tabLP #grdLP":{selectionchange:this.teb_tlp_grdLPSelectionChange},
});},
teb_BeforeRender:function(comp,opt){var _mi=comp.getMI();if(!fjsIn_array(_mi,[4119])){return false;}var _pan=comp.down("#pan");var _t1=comp.down("#tabTETF");var _t2=comp.down("#tabTEP");var _t3=comp.down("#tabLP");var _grd=_pan.down("grid");var _vs=fextpub_sessVar();var _me=this;
	fextpub_uamoPerm({comp:_pan,mi:_mi});fextpub_uamoPerm({comp:_t2});fextpub_uamoPerm({comp:_t3});
	fextbud_metasParam({pan:_pan});fextpub_yearsVisible(_pan.down("#year_id"),_vs.y);fextpub_areasFilt({obj:_pan.down("#area_key"),filt:false,nuk:"NoT"});
	fext_SV(comp,"fechaini",fjsDateCurrent(""));fext_SV(comp,"fechafin",fjsDateCurrent(""));

	var _str1=fext_CS("tre.Egresos_Tareas_FftredTEB");fext_BSGP(_t1,_str1);_str1.sort("egretareafte_item","ASC");
	_str1.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd);fext_PSEP(str,["xxEgre_key","xxType_record","xxPag"],[_r.data.egre_key,"grdTEB",1]);});
	var _str2=fext_CS("tre.Egresos_ProcedenciasTEB");fext_BSGP(_t2,_str2);_str2.sort("tablex_fecha","ASC");
	_str2.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd);fext_PSEP(str,["xxEgre_key","xxType_record","xxPag","vs","ssNO_USK"],[_r.data.egre_key,"grdTEB",1,fext_JE(_vs),"NoT"]);});
	var _str3=fext_CS("log.PedidosBC");fext_BSGP(_t3,_str3);_str3.sort("ped_fecha","DESC");
	_str3.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd);fext_PSEP(str,["xxTablex_key","xxType_record","xxPag","vs","ssNO_USK"],[_r.data.tablex_key,"grdTEB",1,fext_JE(_vs),"NoT"]);});
	var _str=fext_CS("tre.EgresosB");fext_BSGP(_pan,_str);_str.sort("egre_documento","DESC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(_pan,"",["btnModify","btnQuery","btnAnnular","btnPrinter","btnCheque","btnFases"]); _me.teb_tabsClean(comp,true);var _tdi=fext_GV(_pan,"tipdocident_id");fext_PSEP(str,["xxYear_id","xxUnieje_key","xxEgre_nro","xxFechaini","xxFechafin","xxArea_key","xxMeta_id","xxTipdocident_id","xxPers_key","xxType_record","xxPag","xxMenu_id","vs","ssNO_USK"],["",_vs.ue,"","","",_mi==4119?fext_GV(_pan,"area_key"):_vs.a,"",_tdi,_tdi==1?fext_GV(_pan,"indiv_key"):(_tdi==3?fext_GV(_pan,"pers_key"):""),"grd",1,_mi,fext_JE(_vs),"NoT"],_pan,["year_id","","egre_nro","fechaini","fechafin","","meta_id","","","","","","",""]);});_str.load();
},
teb_tabsActivate:function(poC,poT){if(!fext_grdSR(poC,"grdTE")){return false;}fext_GS(poT).load();},
teb_tabsClean:function(poC,pbB){var _mod=fext_CM("tre.EgresoWin");
	var _tab=poC.down("#tabTETF");var _pag=fext_DP(_tab);fext_gridClean(_pag.getStore(),_pag);fext_LR(_tab,_mod);_pag.setDisabled(pbB);
	_tab=poC.down("#tabTEP");_pag=fext_DP(_tab);fext_gridClean(_pag.getStore(),_pag);fext_LR(_tab,_mod);_pag.setDisabled(pbB);fext_Dsb(_tab,"",["btnQuery","btnPrinter"]);
	_tab=poC.down("#tabLP");_pag=fext_DP(_tab);fext_gridClean(_pag.getStore(),_pag);_tab.up("tabpanel").child("#tabLP").tab.hide();_pag.setDisabled(pbB);fext_LR(_tab,_mod);fext_Dsb(_tab,"",["btnQuery","btnAttach","btnFases","btnPrinter"]);
},
teb_pte_Clean:function(poC){var _pag=poC.down("#pagTE");fext_gridClean(_pag.getStore(),_pag);fext_Dsb(poC,"",["btnModify","btnQuery","btnAnnular","btnPrinter","btnCheque","btnFases"]);},
teb_pte_View:function(poC,pcTE){fext_CC("tre.Egresos").te_View({comp:poC,TE:pcTE,mi:poC.up("panel").getMI(),oi:pcTE,yi:poC.down("#year_id").getValue()});},
teb_pte_opc_idChange:function(cbo,newV,oldV,opt){fext_SDO(cbo.up("panel"),"btnNew",cbo,1);},
teb_pte_btnNew:function(btn,e,opt){this.teb_pte_View(btn.up("panel"),1);},
teb_pte_btnMod:function(btn,e,opt){this.teb_pte_View(btn.up("panel"),2);},
teb_pte_btnQue:function(btn,e,opt){this.teb_pte_View(btn.up("panel"),3);},
teb_pte_btnAnn:function(btn,e,opt){fext_CC("tre.Egresos").te_Annular({comp:btn.up("#pan"),"btn":btn,"opt":opt,mi:this.getTeb().getMI()});},
teb_pte_btnPri:function(btn,e,opt){fext_CC("tre.Egresos").te_Printer({comp:btn.up("#pan"),mi:this.getTeb().getMI()});},
teb_pte_btnChequeClick:function(btn,e,opt){fext_CC("tre.Egresos").te_Cheque({comp:btn.up("#pan"),mi:this.getTeb().getMI()});},
teb_pte_btnHideClick:function(btn,e,opt){var _ventimp=window.open("","");var _ventimp=window.open("","popimpr");
	_ventimp.document.write("<html><head><link rel='stylesheet' type='text/css' href='resources/css/style_printer.css?version=45'><\/head><body style=\"background-color: #FFFFFF\">");
	_ventimp.document.write(opt);_ventimp.document.close();_ventimp.print();_ventimp.close();
},
teb_pte_btnPIS:function(btn,e,opt){var _pan=this.getTeb();fext_CC("pub.IndividuosS");_pan.setCompPIS(fext_compSearch({cc:_pan.down("#cntIndiv"),os:_pan.getCompPIS(),v:"Siace.view.pub.IndividuosS",tit:"Búsqueda de Persona ::.",ck:fext_GV(_pan,"indiv_key")}));},
teb_pte_btnPPS:function(btn,e,opt){var _pan=this.getTeb();fext_CC("pub.PersonasS");_pan.setCompPPS(fext_compSearch({cc:_pan.down("#cntPers"),os:_pan.getCompPPS(),v:"Siace.view.pub.PersonasS",tit:"Búsqueda de Proveedor",ck:fext_GV(_pan,"pers_key"),TQ:"ONLY_WITH_RUC"}));},
teb_pte_area_keyChange:function(cbo,newV,oldV,opt){fextbud_tareasAMLoad({pan:cbo.up("#pan")});this.teb_pte_Clean(cbo.up("#pan"));},
teb_pte_fechainiChange:function(datf,newV,oldV,opt){this.teb_pte_Clean(datf.up("#pan"));},
teb_pte_fechafinChange:function(datf,newV,oldV,opt){this.teb_pte_Clean(datf.up("#pan"));},
teb_pte_grdCellClk:function(cell,td,cellI,rec,tr,rowI,e,opt){var _pan=this.getTeb();var _tab=_pan.down("#tpn").getActiveTab();
	if(_tab.itemId=="tabLP"){var _tab=_pan.down("#tabLP");var _s=!fextpub_uamoBtn("",0,_tab);if(_s){fext_GS(_tab).load();}}
	else{fext_GS(_tab).load();}
},
teb_pte_grdSelChg:function(model,rec,opt){if(rec.length==1){var _pan=this.getTeb();var _p=_pan.down("#pan");var _fg=rec[0].data.egre_flga==98?true:"";
	fext_SDO(_p,"btnModify","",2,_fg);fext_SDO(_p,"btnQuery","",3,_fg);fext_SDO(_p,"btnAnnular","",10,_fg);fext_SDO(_p,"btnPrinter","",8,_fg);fext_SDO(_p,"btnCheque","",4005,_fg);fext_SDO(_p,"btnFases","",5029,_fg);
	this.teb_tabsClean(_pan,false);var _tab=_pan.down("#tabLP");
	Ext.Ajax.request({method:"POST",url:"php/treasury_egresos_json_records.php",params:{xxEgre_key:rec[0].data.egre_key,xxType_record:"win",xxOrder_by:"egre_key",ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},
		success:function(resp,opt){var _res=fext_DJ("",resp);var _mod=fext_CM("tre.EgresoWin");var _t=_tab.up("tabpanel").child("#tabLP").tab;var _s=!fextpub_uamoBtn("",0,_tab);if(_res.success&&_res.data.length==1){_mod.set(_res.data[0]);}fext_LR(_pan.down("#tabTETF"),_mod);fext_LR(_pan.down("#tabTEP"),_mod);fext_LR(_tab,_mod);if(rec[0].data.tablex==5030&&_s){_t.show();}else{_t.hide();}}
	});
}},
teb_pte_egre_nroChange:function(txtf,newV,oldV,opt){this.teb_pte_Clean(txtf.up("#pan"));},
teb_pte_egre_nroKeypress:function(txtf,e,opt){if(e.getCharCode()==13){fext_GS(txtf.up("#pan")).load();}},
teb_pte_indiv_dniBlur:function(txtf,The,opt){this.teb_pte_indiv_dniSearch(txtf.up("#pan"),0);},
teb_pte_indiv_dniChange:function(txtf,newV,oldV,opt){this.teb_pte_Clean(txtf.up("#pan"));},
teb_pte_indiv_dniFocus:function(txtf,The,opt){this.teb_pte_indiv_dniSearch(txtf.up("#pan"),1);},
teb_pte_indiv_dniKeypress:function(txtf,e,opt){if(e.getCharCode()==13){this.teb_pte_indiv_dniSearch(txtf.up("#pan"),13);}},
teb_pte_indiv_dniSearch:function(poCW,pcType){fext_fieldSearch(pcType,poCW,["indiv_key","INDIV_DNI","indiv_dni","indiv_apenom"],["php/public_individuos_json_records.php","xxIndiv_dni","textfield_search",""],"",["","",[""],"","",""]);},
teb_pte_meta_idChange:function(cbo,newV,oldV,opt){if(oldV!=undefined){fextbud_tareasATLoad({pan:cbo.up("#pan")});this.teb_pte_Clean(cbo.up("#pan"));}},
teb_pte_pers_rucBlur:function(txtf,The,opt){this.teb_pte_pers_rucSearch(txtf.up("#pan"),0);},
teb_pte_pers_rucChange:function(txtf,newV,oldV,opt){this.teb_pte_Clean(txtf.up("#pan"));},
teb_pte_pers_rucFocus:function(txtf,The,opt){this.teb_pte_pers_rucSearch(txtf.up("#pan"),1);},
teb_pte_pers_rucKeypress:function(txtf,e,opt){if(e.getCharCode()==13){this.teb_pte_pers_rucSearch(txtf.up("#pan"),13);}},
teb_pte_pers_rucSearch:function(poCW,pcType){fext_fieldSearch(pcType,poCW,["pers_key","PERS_RUC","pers_ruc","pers_nombre"],["php/public_personas_json_records.php","xxPers_ruc","textfield_search",""],"",["","",[""],"","","0"],"");},
teb_pte_tipdocident_idChange:function(cbo,newV,oldV,opt){var _p=cbo.up("#pan");if(oldV!=undefined){this.teb_pte_Clean(_p);}
	if(newV==1){fext_SVI(_p,"cntPers",false);fext_SVI(_p,"cntIndiv",true);fext_Dsb(_p,"",["pers_ruc","btnPPS"]);fext_SD(_p,"",false,["indiv_dni","btnPIS"]);fext_SV(_p,"","",["pers_key","PERS_RUC","pers_ruc","pers_nombre"]);}
	else if(newV==3){fext_SVI(_p,"cntPers",true);fext_SVI(_p,"cntIndiv",false);fext_SD(_p,"",false,["pers_ruc","btnPPS"]);fext_SV(_p,"","",["indiv_key","INDIV_DNI","indiv_dni","indiv_apenom"]);}
	else{fext_Dsb(_p,"",["pers_ruc","btnPPS","indiv_dni","btnPIS"]);fext_SV(_p,"","",["pers_key","PERS_RUC","pers_ruc","pers_nombre","indiv_key","INDIV_DNI","indiv_dni","indiv_apenom"]);}
},
teb_pte_year_idChange:function(cbo,newV,oldV,opt){if(oldV!=undefined){fextbud_tareasAMLoad({pan:cbo.up("#pan")});this.teb_pte_Clean(cbo.up("#pan"));}},
teb_ttetf_Activate:function(comp,opt){this.teb_tabsActivate(this.getTeb(),comp);},
teb_ttep_Activate:function(comp,opt){this.teb_tabsActivate(this.getTeb(),comp);},
teb_ttep_Clean:function(poC,pbB){var _pag=poC.down("#pagLP");fext_gridClean(_pag.getStore(),_pag);fext_Dsb(poC,"",["btnQuery","btnPrinter"]);},
teb_ttep_ViewEdit:function(poC,pcTE){},
teb_ttep_opc_idChange:function(cbo,newV,oldV,opt){if(!fextpub_uamoBtn(cbo,0)){cbo.up("tabpanel").child("#tabTEP").tab.show();}},
teb_ttep_btnQueryClick:function(btn,e,opt){this.teb_ttep_ViewEdit(btn.up("#tabLP"),3);},
teb_ttep_btnPrinterClick:function(btn,e,opt){fext_CC("tre.EgreProc").tep_Printer({comp:btn.up("#tabTEP")});},
teb_ttep_grdTEPSelectionChange:function(mod,rec,opt){if(rec.length==1){var _tab=mod.view.up("#tabTEP");fext_SDO(_tab,"btnQuery","",3);fext_SDO(_tab,"btnPrinter","",8);}},
teb_tlp_Activate:function(comp,opt){this.teb_tabsActivate(this.getTeb(),comp);},
teb_tlp_Clean:function(poC,pbB){var _pag=poC.down("#pagLP");fext_gridClean(_pag.getStore(),_pag);fext_Dsb(poC,"",["btnQuery","btnAttach","btnFases","btnPrinter"]);},
teb_tlp_ViewEdit:function(poC,pcTE){fext_CC("log.Pedidos").lp_View({comp:poC,TE:pcTE,oi:pcTE,nuk:"NoT"});},
teb_tlp_btnQueryClick:function(btn,e,opt){this.teb_tlp_ViewEdit(btn.up("#tabLP"),3);},
teb_tlp_btnAttachClick:function(btn,e,opt){this.teb_tlp_ViewEdit(btn.up("#tabLP"),59);},
teb_tlp_btnFasesClick:function(btn,e,opt){fext_CC("log.PedFase").lpf_Printer({comp:btn.up("#tabLP")});},
teb_tlp_btnPrinterClick:function(btn,e,opt){fext_CC("log.Pedidos").lp_Printer({comp:btn.up("#tabLP")});},
teb_tlp_grdLPSelectionChange:function(mod,rec,opt){if(rec.length==1){var _tab=mod.view.up("#tabLP");var _fg=(rec[0].data.ped_fg==98?true:"");fext_SDO(_tab,"btnQuery","",3,_fg);fext_SDO(_tab,"btnAttach","",59,_fg);fext_SDO(_tab,"btnFases","",5002,_fg);fext_SDO(_tab,"btnPrinter","",8,_fg);}}
});