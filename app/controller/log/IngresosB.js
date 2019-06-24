Ext.define("Siace.controller.log.IngresosB",{extend:"Ext.app.Controller",stores:["array.Years"],views:["log.IngresosB"],
init:function(application){this.control({
"log_ingb":{beforerender:this.lib_BR},"log_ingb #pan #opc_id":{change:this.lib_pan_oiChg},
"log_ingb #pan #btnNew":{click:this.lib_pan_btn},"log_ingb #pan #btnModify":{click:this.lib_pan_btn},"log_ingb #pan #btnQuery":{click:this.lib_pan_btn},"log_ingb #pan #btnDelete":{click:this.lib_pan_btn},"log_ingb #pan #btnPers_search":{click:this.lib_pan_btn},
"log_ingb #pan #area_key":{change:this.lib_pan_ChgCbo},"log_ingb #pan #doc_id":{change:this.lib_pan_ChgCbo},"log_ingb #pan #fechaini":{change:this.lib_pan_Chg},"log_ingb #pan #fechafin":{change:this.lib_pan_Chg},
"log_ingb #pan #grdLI":{cellclick:this.lib_pan_grdCellClk,selectionchange:this.lib_pan_grdSelChg},"log_ingb #pan #ing_nro":{change:this.lib_pan_Chg,keypress:this.lib_pan_KP},
"log_ingb #pan #pers_ruc":{blur:this.lib_pan_prBlur,change:this.lib_pan_Chg,focus:this.lib_pan_prFocus,keypress:this.lib_pan_prKP},"log_ingb #pan #meta_id":{change:this.lib_pan_ChgCbo},"log_ingb #pan #tarea_key":{change:this.lib_pan_ChgCbo},"log_ingb #pan #year_id":{change:this.lib_pan_ChgCbo},
});},
lib_BR:function(comp,o){var _mi=comp.getMI();var _p=comp.down("#pan");var _t1=comp.down("#tabLID");var _grd=_p.down("#grdLI");var _vs=fextpub_sessVar();var _me=this;
	fextpub_uamoPerm({comp:_p,mi:_mi});
	if(_mi==5122){fextpub_docFilt({obj:_p.down("#doc_id"),TR:"cboA",TQ:"RECEPCION_BS"});fextbud_tareasAMParam({pan:_p,di:9,de:1});fextbud_tareasATParam({pan:_p,di:9,de:1});fextpub_yearsVisible(_p.down("#year_id"),_vs.y);fextpub_areasFilt({obj:_p.down("#area_key"),vsb:false,filt:true,ak:_vs.a,nuk:"NoT",AB:"NO"});}
	else if(fjsIn_array(_mi,[5124,5125])){fextpub_docFilt({obj:_p.down("#doc_id"),TR:"cboA",TQ:"RECEPCION_"+(_mi==5124?"S":"B"),AB:"NO"});fextbud_metasParam({pan:_p});fextbud_tareasParam({pan:_p});fextpub_yearsVisible(_p.down("#year_id"),_vs.y);fextpub_areasFilt({obj:_p.down("#area_key"),filt:false,nuk:"NoT"});}else{return false;}
	var _str1=fext_CS("log.Ingresos_DetB");fext_BSGP(_t1,_str1);_str1.sort("ingdet_item","ASC");
	_str1.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd);fext_PSEP(str,["xxIng_key","xxType_record","xxPag"],[_r.data.ing_key,"grdLIB",1]);});
	var _str=fext_CS("log.IngresosB");fext_BSGP(_p,_str);_str.sort("ing_fecharec","DESC");
	_str.on("beforeload",function(str,oper,opt){_me.lib_pan_DB(_p);_me.lib_tabsClean(comp,true);fext_PSEP(str,["xxYear_id","xxIng_nro","xxArea_key","xxMeta_id","xxTarea_key","xxFechaini","xxFechafin","xxPers_key","xxType_record","vs","xxPag","xxMenu_id"],["","",(_mi==5122?_vs.a:fext_GV(_p,"area_key")),"","","","","","grd",fext_JE(_vs),1,_mi],_p,["year_id","ing_nro","","meta_id","tarea_key","fechaini","fechafin","pers_key","","","",""]);});_str.load();
},
lib_tabsAct:function(comp,o){if(!fext_grdSR(comp.up("log_ingb"),"grdLI")){return false;}fext_GS(comp).load();},
lib_tabsClean:function(poC,pb){var _md=fext_CM("log.IngresoW");var _t=poC.down("#tabLID");fext_grdOC(_t,pb,_md);},
lib_pan_Chg:function(txtf,newV,oldV,o){this.lib_pan_Clean(txtf.up("#pan"));},
lib_pan_ChgCbo:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");var _ii=fext_oii(cbo);if(oldV!=undefined||_ii=="area_key"){this.lib_pan_Clean(_p);if(_ii=="year_id"){fextbud_tareasAMLoad({pan:_p});}else if(_ii="meta_id"){fextbud_tareasATLoad({pan:_p});}}if(_ii=="area_key"){fextbud_tareasAMLoad({pan:_p});}},
lib_pan_Clean:function(poC){fext_grdOC(poC);this.lib_pan_DB(poC);this.lib_tabsClean(poC.up("log_ingb"),true);},
lib_pan_DB:function(poC){fext_Dsb(poC,"",["btnModify","btnQuery","btnDelete","btnPrinter"]);},
lib_pan_KP:function(txtf,e,o){fext_KPL(txtf,e,"pan");},
lib_pan_oiChg:function(cbo,newV,oldV,o){fext_SDO(cbo.up("#pan"),"btnNew",cbo,1);},
lib_pan_btn:function(btn,e,opt){fext_CC("log.IngBB").lib(btn,opt);},
lib_pan_grdCellClk:function(cell,td,cellI,r,tr,rowI,e,o){fext_TL(cell.up("log_ingb"));},
lib_pan_grdSelChg:function(mod,r,o){fext_CC("log.IngB").lib_sc(mod,r);},
lib_pan_prBlur:function(txtf,The,o){this.lib_pan_prSearch(txtf.up("#pan"),0);},
lib_pan_prFocus:function(txtf,The,o){this.lib_pan_prSearch(txtf.up("#pan"),1);},
lib_pan_prKP:function(txtf,e,o){if(e.getCharCode()==13){this.lib_pan_prSearch(txtf.up("#pan"),13);}},
lib_pan_prSearch:function(poCC,pcT){fext_fieldSearch(pcT,poCC,["pers_key","PERS_RUC","pers_ruc","pers_nombre"],["php/public_personas_json_records.php","xxPers_ruc","textfield_search",""],0,["","",["pers_ruc"],""],"");},
});