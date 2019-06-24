Ext.define("Siace.controller.bud.EgresosB",{extend:"Ext.app.Controller",stores:["array.Years","array.TipDocIdentVentaAB"],views:["bud.EgresosB"],refs:[{ref:"beb",selector:"bud_egreb"}],
init:function(application){this.control({
"bud_egreb":{beforerender:this.beb_BR},"bud_egreb #pan #opc_id":{change:this.beb_pan_oiChg},
"bud_egreb #pan #btnNew":{click:this.beb_pan_btn},"bud_egreb #pan #btnModify":{click:this.beb_pan_btn},"bud_egreb #pan #btnQuery":{click:this.beb_pan_btn},"bud_egreb #pan #btnAnnular":{click:this.beb_pan_btn},"bud_egreb #pan #btnSiaf":{click:this.beb_pan_btn},"bud_egreb #pan #btnPrinter":{click:this.beb_pan_btn},"bud_egreb #pan #btnFases":{click:this.beb_pan_btn},"bud_egreb #pan #btnPIS":{click:this.beb_pan_btn},"bud_egreb #pan #btnPPS":{click:this.beb_pan_btn},
"bud_egreb #pan #area_key":{change:this.beb_pan_ChgCbo},"bud_egreb #pan #fechaini":{change:this.beb_pan_Chg},"bud_egreb #pan #fechafin":{change:this.beb_pan_Chg},
"bud_egreb #pan #grdBE":{cellclick:this.beb_pan_grdCellClk,selectionchange:this.beb_pan_grdSelChg},"bud_egreb #pan #egre_nro":{change:this.beb_pan_Chg,keypress:this.beb_pan_KP},
"bud_egreb #pan #meta_id":{change:this.beb_pan_ChgCbo},"bud_egreb #pan #tarea_key":{change:this.beb_pan_ChgCbo},"bud_egreb #pan #tipdocident_id":{change:this.beb_pan_tdiChg},"bud_egreb #pan #tipegre_id":{change:this.beb_pan_ChgCbo},"bud_egreb #pan #year_id":{change:this.beb_pan_ChgCbo},
"bud_egreb #pan #indiv_dni":{blur:this.beb_pan_idBlur,change:this.beb_pan_idChg,focus:this.beb_pan_idFocus,keypress:this.beb_pan_idKP},"bud_egreb #pan #pers_ruc":{blur:this.beb_pan_prBlur,change:this.beb_pan_prChg,focus:this.beb_pan_prFocus,keypress:this.beb_pan_prKP},
"bud_egreb #tabBETF":{activate:this.beb_tabsAct},
"bud_egreb #tabTE":{activate:this.beb_tabsAct},"bud_egreb #tabTE #opc_id":{change:this.beb_tabs_oiChg},"bud_egreb #tabTE #btnNew":{click:this.beb_t2_btn},"bud_egreb #tabTE #btnAnnular":{click:this.beb_t2_btn},"bud_egreb #tabTE #btnPrinter":{click:this.beb_t2_btn},"bud_egreb #tabTE #btnCheque":{click:this.beb_t2_btn},"bud_egreb #tabTE #btnHide":{click:this.beb_t2_btnHide},
"bud_egreb #tabTE #grdTE":{selectionchange:this.beb_t2_grdSelChg},
});},
beb_BR:function(comp,opt){var _mi=comp.getMI();if(!fjsIn_array(_mi,[2127])){return false;}var _pan=comp.down("#pan");var _t1=comp.down("#tabBETF");var _t2=comp.down("#tabTE");var _grd=_pan.down("#grdBE");var _vs=fextpub_sessVar();var _me=this;
	fextpub_uamoPerm({comp:_pan,mi:_mi});fextpub_uamoPerm({comp:_t2});fextpub_tabgenFilt({obj:_pan.down("#tipegre_id"),tgp:2050,TR:"cboCN"});fextbud_metasParam({pan:_pan});fextbud_tareasParam({pan:_pan});fextpub_yearsVisible(_pan.down("#year_id"),_vs.y);fextpub_areasFilt({obj:_pan.down("#area_key"),filt:false,nuk:"NoT"});
	var _str1=fext_CS("bud.Egresos_Tareas_FftredBEB");fext_BSGP(_t1,_str1);_str1.sort("egretareafte_item","ASC");
	_str1.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd);fext_PSEP(str,["xxEgre_key","xxType_record","xxPag"],[_r.data.egre_key,"grdBEB",1]);});
	var _str2=fext_CS("tre.EgresosBEB");fext_BSGP(_t2,_str2);
	_str2.on("beforeload",function(str,oper,opt){fext_Dsb(_t2,"",["btnAnnular","btnPrinter","btnCheque"]);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxTablex","xxTablex_key","xxType_record","vs","xxPag","xxMenu_id","ssNO_USK"],[2020,_r.data.egre_key,"grdBEB",fext_JE(_vs),1,_mi,"NoT"]);});
	var _str=fext_CS("bud.EgresosB");fext_BSGP(_pan,_str);_str.sort("egre_documento","DESC");
	_str.on("beforeload",function(str,oper,opt){_me.beb_pan_DB(_pan);_me.beb_tabsClean(comp,true);var _tdi=fext_GV(_pan,"tipdocident_id");fext_PSEP(str,["xxYear_id","xxEgre_nro","xxFechaini","xxFechafin","xxTipegre_id","xxArea_key","xxMeta_id","xxTarea_key","xxTipdocident_id","xxPers_key","xxType_record","vs","xxMenu_id","xxPag","ssNO_USK"],["","","","","",(_mi==2127?fext_GV(_pan,"area_key"):_vs.a),"","",_tdi,_tdi==1?fext_GV(_pan,"indiv_key"):(_tdi==3?fext_GV(_pan,"pers_key"):""),"grd",fext_JE(_vs),_mi,1,"NoT"],_pan,["year_id","egre_nro","fechaini","fechafin","tipegre_id","","meta_id","tarea_key","","","","","","",""]);});_str.load();
},
beb_tabsAct:function(comp,opt){if(!fext_grdSR(comp.up("bud_egreb"),"grdBE")){return false;}fext_GS(comp).load();},
beb_tabsClean:function(poC,pb){var _md=fext_CM("bud.EgresoW");var _t=poC.down("#tabBETF");fext_grdOC(_t,pb,_md);fext_SV(_t,"egre_observ","");_t=poC.down("#tabTE");fext_grdOC(_t,pb,_md);fext_Dsb(_t,"",["btnNew","btnAnnular","btnPrinter","btnCheque"]);},
beb_tabs_oiChg:function(cbo,newV,oldV,opt){fext_TS(cbo);},
beb_pan_Chg:function(txtf,newV,oldV,opt){this.beb_pan_Clean(txtf.up("#pan"));},
beb_pan_ChgCbo:function(cbo,newV,oldV,opt){var _p=cbo.up("#pan");var _ii=fext_oii(cbo,"",3);if(oldV!=undefined||_ii=="are"){this.beb_pan_Clean(_p);if(_ii=="yea"){fextbud_tareasAMLoad({pan:_p});}else if(_ii=="met"){fextbud_tareasATLoad({pan:_p});}}if(_ii=="are"){fextbud_tareasAMLoad({pan:_p});}},
beb_pan_tdiChg:function(cbo,newV,oldV,opt){var _p=cbo.up("#pan");if(oldV!=undefined){this.beb_pan_Clean(_p);}
	if(newV==1){fext_SVI(_p,"cntPers",false);fext_SVI(_p,"cntIndiv",true);fext_Dsb(_p,"",["pers_ruc","btnPPS"]);fext_SD(_p,"",false,["indiv_dni","btnPIS"]);fext_SV(_p,"","",["pers_key","PERS_RUC","pers_ruc","pers_nombre"]);}
	else if(newV==3){fext_SVI(_p,"cntPers",true);fext_SVI(_p,"cntIndiv",false);fext_SD(_p,"",false,["pers_ruc","btnPPS"]);fext_SV(_p,"","",["indiv_key","INDIV_DNI","indiv_dni","indiv_apenom"]);}
	else{fext_Dsb(_p,"",["pers_ruc","btnPPS","indiv_dni","btnPIS"]);fext_SV(_p,"","",["pers_key","PERS_RUC","pers_ruc","pers_nombre","indiv_key","INDIV_DNI","indiv_dni","indiv_apenom"]);}
},
beb_pan_Clean:function(poC){fext_grdOC(poC);this.beb_pan_DB(poC);this.beb_tabsClean(poC.up("bud_egreb"),true);},
beb_pan_DB:function(poC){fext_Dsb(poC,"",["btnModify","btnQuery","btnAnnular","btnSiaf","btnPrinter","btnFases"]);},
beb_pan_KP:function(txtf,e,opt){fext_KPL(txtf,e,"pan");},
beb_pan_oiChg:function(cbo,newV,oldV,opt){fext_SDO(cbo.up("#pan"),"btnNew",cbo,1);},
beb_pan_btn:function(btn,e,opt){fext_CC("bud.EgreBB").beb(btn,opt);},
beb_pan_grdCellClk:function(cell,td,cellI,r,tr,rowI,e,o){fext_TL(cell.up("bud_egreb"));},
beb_pan_grdSelChg:function(mod,r,o){fext_CC("bud.EgreB").beb_sc(mod,r);},
beb_pan_idBlur:function(txtf,The,o){this.beb_pan_idS(txtf.up("#pan"),0);},
beb_pan_idChg:function(txtf,newV,oldV,o){this.beb_pan_Clean(txtf.up("#pan"));},
beb_pan_idFocus:function(txtf,The,o){this.beb_pan_idS(txtf.up("#pan"),1);},
beb_pan_idKP:function(txtf,e,o){if(e.getCharCode()==13){this.beb_pan_idS(txtf.up("#pan"),13);}},
beb_pan_idS:function(poC,pcT){fext_fieldSearch(pcT,poC,["indiv_key","INDIV_DNI","indiv_dni","indiv_apenom"],["php/public_individuos_json_records.php","xxIndiv_dni","textfield_search",""],"",["","",[""],"","",""]);},
beb_pan_prBlur:function(txtf,The,o){this.beb_pan_prS(txtf.up("#pan"),0);},
beb_pan_prChg:function(txtf,newV,oldV,o){this.beb_pan_Clean(txtf.up("#pan"));},
beb_pan_prFocus:function(txtf,The,o){this.beb_pan_prS(txtf.up("#pan"),1);},
beb_pan_prKP:function(txtf,e,o){if(e.getCharCode()==13){this.beb_pan_prS(txtf.up("#pan"),13);}},
beb_pan_prS:function(poC,pcT){fext_fieldSearch(pcT,poC,["pers_key","PERS_RUC","pers_ruc","pers_nombre"],["php/public_personas_json_records.php","xxPers_ruc","textfield_search",""],"",["","",[""],"","","0"],"");},
beb_t2_btn:function(btn,e,opt){fext_CC("bud.EgreBT2").beb_btn(btn);},
beb_t2_btnHideClick:function(btn,e,opt){var _ventimp=window.open("","");_ventimp.document.write("<html><head><link rel='stylesheet' type='text/css' href='resources/css/style_printer.css?version=15'><\/head><body style=\"background-color: #FFFFFF\">");_ventimp.document.write(opt); _ventimp.document.close();},
beb_t2_grdSelChg:function(mod,r,o){fext_CC("bud.EgreBT2").beb_sc(mod,r);}	
});