Ext.define("Siace.controller.log.ViaticosB",{extend:"Ext.app.Controller",stores:["array.Years","array.DocViatAB"],views:["log.ViaticosB"],
init:function(application){this.control({
"log_viatb":{beforerender:this.lvb_BR},"log_viatb #pan #opc_id":{change:this.lvb_pan_oiChg},
"log_viatb #pan #btnNew":{click:this.lvb_pan_btn},"log_viatb #pan #btnModify":{click:this.lvb_pan_btn},"log_viatb #pan #btnQuery":{click:this.lvb_pan_btn},"log_viatb #pan #btnActivate":{click:this.lvb_pan_btn},"log_viatb #pan #btnAnnular":{click:this.lvb_pan_btn},"log_viatb #pan #btnPrinter":{click:this.lvb_pan_btn},"log_viatb #pan #btnSiaf":{click:this.lvb_pan_btn},"log_viatb #pan #btnRebaja":{click:this.lvb_pan_btn},"log_viatb #pan #btnFases":{click:this.lvb_pan_btn},
"log_viatb #pan #area_key":{change:this.lvb_pan_ChgCbo},"log_viatb #pan #fase_id":{change:this.lvb_pan_ChgCbo},"log_viatb #pan #fechaini":{change:this.lvb_pan_Chg},"log_viatb #pan #fechafin":{change:this.lvb_pan_Chg},
"log_viatb #pan #grdLV":{cellclick:this.lvb_pan_grdCellClk,selectionchange:this.lvb_pan_grdSelChg},"log_viatb #pan #meta_id":{change:this.lvb_pan_ChgCbo},"log_viatb #pan #viat_nro":{change:this.lvb_pan_Chg,keypress:this.lvb_pan_KP},"log_viatb #pan #tarea_key":{change:this.lvb_pan_ChgCbo},"log_viatb #pan #year_id":{change:this.lvb_pan_ChgCbo}
});},
lvb_BR:function(comp,opt){var _mi=comp.getMI();var _p=comp.down("#pan");var _t1=comp.down("#tabLVD");var _grd=_p.down("#grdLV");var _vs=fextpub_sessVar();var _me=this;
	fextpub_uamoPerm({comp:_p,mi:_mi});
	if(_mi==2128){fextbud_metasParam({pan:_p});fextbud_tareasParam({pan:_p});fextpub_yearsVisible(_p.down("#year_id"),_vs.y);fextpub_areasFilt({obj:_p.down("#area_key"),filt:false,nuk:"NoT"});fext_SVI(comp,"",false,["btnNew","btnModify","btnActivate","btnAnnular"]);fext_SVI(comp,"",true,["btnSiaf","btnRebaja"]);}
	else if(_mi==5126){fextbud_tareasAMParam({pan:_p,di:507,de:1});fextbud_tareasATParam({pan:_p,di:507,de:1});fextpub_yearsVisible(_p.down("#year_id"),_vs.y);fextpub_areasFilt({obj:_p.down("#area_key"),vsb:false,filt:true,ak:_vs.a,mi:_mi,AB:(_mi==5126?"NO":"")});}else{return false;}
	var _str1=fext_CS("log.Viaticos_DetB");fext_BSGP(_t1,_str1);
	_str1.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd);fext_PSEP(str,["xxViat_key","xxType_record","xxOrder_by","xxPag"],[_r.data.viat_key,"grdLVB","viatdet_item",1]);});
	var _str=fext_CS("log.ViaticosB");fext_BSGP(_p,_str);_str.sort("viat_fecha","DESC");
	_str.on("beforeload",function(str,oper,opt){_me.lvb_pan_DB(_p);_me.lvb_tabsClean(comp,true);var _ak=fext_GV(_p,"area_key");fext_PSEP(str,["xxYear_id","xxUnieje_key","xxArea_key","xxMeta_id","xxTarea_key","xxViat_nro","xxFechaini","xxFechafin","xxType_record","xxMenu_id","vs","xxPag","ssNO_USK"],["",_vs.ue,_mi==5126?(Ext.isEmpty(_ak)?_vs.a:_ak):_ak,"","","","","","grd",_mi,fext_JE(_vs),1,_mi==2128?"NoT":""],_p,["year_id","","","meta_id","tarea_key","viat_nro","fechaini","fechafin","","","","",""]);});_str.load();
},
lvb_tabsClean:function(poC,pb){var _md=fext_CM("log.ViaticoW");var _t=poC.down("#tabLVD");fext_grdOC(_t,pb,_md);},
lvb_pan_ChgCbo:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");var _ii=fext_oii(cbo);if(oldV!=undefined||_ii=="area_key"){this.lvb_pan_Clean(_p);if(_ii=="year_id"){fextbud_tareasAMLoad({pan:_p});}else if(_ii=="meta_id"){fextbud_tareasATLoad({pan:_p});}}if(_ii=="area_key"){fextbud_tareasAMLoad({pan:_p});}},
lvb_pan_Chg:function(txtf,newV,oldV,o){this.lvb_pan_Clean(txtf.up("#pan"));},
lvb_pan_Clean:function(poC){fext_grdOC(poC);this.lvb_pan_DB(poC);this.lvb_tabsClean(poC.up("log_viatb"),true);},
lvb_pan_DB:function(poC){fext_Dsb(poC,"",["btnModify","btnQuery","btnActivate","btnAnnular","btnPrinter","btnSiaf","btnRebaja","btnFases"]);},
lvb_pan_KP:function(txtf,e,opt){fext_KPL(txtf,e,"pan");},
lvb_pan_oiChg:function(cbo,newV,oldV,opt){fext_SDO(cbo.up("panel"),"btnNew",cbo,1);},
lvb_pan_btn:function(btn,e,opt){fext_CC("log.ViatBB").lvb(btn,opt);},
lvb_pan_grdCellClk:function(cell,td,cellI,r,tr,rowI,e,o){fext_TL(cell.up("log_viatb"));},
lvb_pan_grdSelChg:function(mod,r,o){fext_CC("log.ViatB").lvb_sc(mod,r);}
});