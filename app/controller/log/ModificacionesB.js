Ext.define("Siace.controller.log.ModificacionesB",{extend:"Ext.app.Controller",stores:["array.Years"],views:["log.ModificacionesB"],
init:function(application){this.control({
"log_modifb":{beforerender:this.lmb_BR},"log_modifb #panLM #opc_id":{change:this.lmb_pan_oiChg},
"log_modifb #panLM #btnNew":{click:this.lmb_pan_btn},"log_modifb #panLM #btnQuery":{click:this.lmb_pan_btn},"log_modifb #panLM #btnAnnular":{click:this.lmb_pan_btn},"log_modifb #panLM #btnVobo":{click:this.lmb_pan_btn},"log_modifb #panLM #btnReject":{click:this.lmb_pan_btn},"log_modifb #panLM #btnFases":{click:this.lmb_pan_btn},"log_modifb #panLM #btnPrinter":{click:this.lmb_pan_btn},
"log_modifb #panLM #area_key":{change:this.lmb_pan_ChgCbo},"log_modifb #panLM #doc_id":{change:this.lmb_pan_ChgCbo},"log_modifb #panLM #fechaini":{change:this.lmb_pan_Chg},"log_modifb #panLM #fechafin":{change:this.lmb_pan_Chg},
"log_modifb #panLM #grdLM":{cellclick:this.lmb_pan_grdCellClk,selectionchange:this.lmb_pan_grdSelChg},"log_modifb #panLM #modif_nro":{change:this.lmb_pan_Chg,keypress:this.lmb_pan_KP},
"log_modifb #panLM #meta_id":{change:this.lmb_pan_ChgCbo},"log_modifb #panLM #tablex_nro":{change:this.lmb_pan_Chg,keypress:this.lmb_pan_KP},"log_modifb #panLM #tarea_key":{change:this.lmb_pan_ChgCbo},"log_modifb #panLM #tipmodif_id":{change:this.lmb_pan_ChgCbo},"log_modifb #panLM #year_id":{change:this.lmb_pan_ChgCbo},
"log_modifb #tabLMD":{activate:this.lmb_tabsAct},
"log_modifb #tabLMTF":{activate:this.lmb_tabsAct}
});},
lmb_BR:function(comp,opt){var _mi=comp.getMI();var _pan=comp.down("#panLM");var _t1=comp.down("#tabLMD");var _t2=comp.down("#tabLMTF");var _grd=_pan.down("#grdLM");var _vs=fextpub_sessVar();var _me=this;
	fextpub_uamoPerm({comp:_pan,mi:_mi});fextpub_tabgenFilt({obj:_pan.down("#tipmodif_id"),TR:"cboA",tgp:5040});
	if(_mi==5134){fextbud_tareasAMParam({pan:_pan,di:504,de:1});fextbud_tareasATParam({pan:_pan,di:504,de:1});fextpub_yearsVisible(_pan.down("#year_id"),_vs.y);fext_SVI(comp,"btnVobo",true);fextpub_areasFilt({obj:_pan.down("#area_key"),vsb:false,filt:true,ak:_vs.a,nuk:"NoT",AB:"NO"});}
	else if(_mi==5133){fextbud_metasParam({pan:_pan});fextbud_tareasParam({pan:_pan});fextpub_yearsVisible(_pan.down("#year_id"),_vs.y);fextpub_areasFilt({obj:_pan.down("#area_key"),filt:false,nuk:"NoT"});fext_SVI(comp,"btnReject",true);}else{return false;}
	var _str1=fext_CS("log.Modificaciones_DetB");;fext_BSGP(_t1,_str1);_str1.sort("modifdet_item","ASC");
	_str1.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd);fext_PSEP(str,["xxModif_key","xxType_record","xxPag"],[_r.data.modif_key,"grdLMB",1]);});
	var _str2=fext_CS("log.Modificaciones_Tareas_FftredLMB");fext_BSGP(_t2,_str2);_str2.sort("modiftareafte_item","ASC");
	_str2.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd);fext_PSEP(str,["xxModif_key","xxType_record","xxPag"],[_r.data.modif_key,"grdLMB",1]);});
	var _str=fext_CS("log.ModificacionesB");fext_BSGP(_pan,_str);_str.sort("modif_fecha","DESC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(_pan,"",["btnModify","btnQuery","btnAnnular","btnPrinter"]);_me.lmb_tabsClean(comp,true);fext_PSEP(str,["xxYear_id","xxUnieje_key","xxModif_nro","xxFechaini","xxFechafin","xxTipmodif_id","xxArea_key","xxMeta_id","xxTarea_key","xxTablex_nro","xxType_record","vs","xxMenu_id","xxPag","ssNO_USK"],["",_vs.ue,"","","","",(_mi==5134?_vs.a:fext_GV(_pan,"area_key")),"","","","grd",fext_JE(_vs),_mi,1,(_mi==5133?"NoT":"")],_pan,["year_id","","modif_nro","fechaini","fechafin","tipmodif_id","","meta_id","tarea_key","tablex_nro","","","","",""]);});_str.load();
},
lmb_tabsAct:function(comp,o){if(!fext_grdSR(comp.up("log_modifb"),"grdLM")){return false;}fext_GS(comp).load();},
lmb_tabsClean:function(poC,pb){var _md=fext_CM("log.ModificacionW");var _t=poC.down("#tabLMD");fext_grdOC(_t,pb,_md);_t=poC.down("#tabLMTF");fext_grdOC(_t,pb,_md);},
lmb_pan_Chg:function(txtf,newV,oldV,opt){this.lmb_pan_Clean(txtf.up("panel"));},
lmb_pan_ChgCbo:function(cbo,newV,oldV,opt){var _p=cbo.up("#panLM");var _ii=fext_oii(cbo);if(oldV!=undefined||_ii=="area_key"){this.lmb_pan_Clean(_p);if(_ii=="year_id"){fextbud_tareasAMLoad({pan:_p});}else if(_ii=="meta_id"){fextbud_tareasATLoad({pan:_p});}}if(_ii=="area_key"){fextbud_tareasAMLoad({pan:_p});}},
lmb_pan_Clean:function(poC){fext_grdOC(poC);fext_Dsb(poC,"",["btnModify","btnQuery","btnAnnular","btnPrinter"]);},
lmb_pan_KP:function(txtf,e,opt){fext_KPL(txtf,e,"panLM");},
lmb_pan_oiChg:function(cbo,newV,oldV,opt){fext_SDO(cbo.up("panel"),"btnNew",cbo,1);},
lmb_pan_btn:function(btn,e,opt){fext_CC("log.ModifBB").lmb(btn,opt);},
lmb_pan_grdCellClk:function(cell,td,cellI,r,tr,rowI,e,o){fext_TL(cell.up("log_modifb"));},
lmb_pan_grdSelChg:function(mod,r,opt){fext_CC("log.ModifB").lmb_sc(mod,r);}
});