Ext.define("Siace.controller.log.SalidasB",{extend:"Ext.app.Controller",stores:["array.Years"],views:["log.SalidasB"],
init:function(application){this.control({
"log_salb":{beforerender:this.lsb_BR},"log_salb #pan #opc_id":{change:this.lsb_pls_oiChg},"log_salb #pan #btnNew":{click:this.lsb_pan_btn},"log_salb #pan #btnModify":{click:this.lsb_pan_btn},"log_salb #pan #btnQuery":{click:this.lsb_pan_btn},"log_salb #pan #btnAnnular":{click:this.lsb_pan_btn},"log_salb #pan #btnPrinter":{click:this.lsb_pan_btn},
"log_salb #pan #area_key":{change:this.lsb_pls_ChgCbo},"log_salb #pan #fechaini":{change:this.lsb_pls_Chg},"log_salb #pan #fechafin":{change:this.lsb_pls_Chg},
"log_salb #pan #grdLS":{cellclick:this.lsb_pls_grdCellClk,selectionchange:this.lsb_pls_grdSelChg},
"log_salb #pan #sal_nro":{change:this.lsb_pls_Chg,keypress:this.lsb_pls_KP},"log_salb #pan #meta_id":{change:this.lsb_pls_ChgCbo},"log_salb #pan #tarea_key":{change:this.lsb_pls_ChgCbo},"log_salb #pan #year_id":{change:this.lsb_pls_ChgCbo}
});},
lsb_BR:function(comp,opt){var _mi=comp.getMI();var _pan=comp.down("#pan");var _grd=_pan.down("#grdLS");var _t1=comp.down("#tabLSD");var _vs=fextpub_sessVar();var _me=this;
	fextpub_uamoPerm({comp:_pan,mi:_mi});
	if(_mi==5132){fextbud_metasParam({pan:_pan});fextbud_tareasParam({pan:_pan});fextpub_yearsVisible(_pan.down("#year_id"),_vs.y);fextpub_areasFilt({obj:_pan.down("#area_key"),filt:false,nuk:"NoT"});}
	else if(_mi==5135){fextbud_tareasAMParam({pan:_pan,di:531,de:1});fextbud_tareasATParam({pan:_pan,di:531,de:1});fextpub_yearsVisible(_pan.down("#year_id"),_vs.y);fextpub_areasFilt({obj:_pan.down("#area_key"),vsb:false,filt:true,ak:_vs.a,AB:"NO"});}else{return false;}
	var _str1=fext_CS("log.Salidas_DetB");fext_BSG(_t1,_str1);fext_BSP(_t1,_str1);_str1.sort("saldet_item","ASC");
	_str1.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd);fext_PSEP(str,["xxSal_key","xxType_record","xxPag"],[_r.data.sal_key,"grdLSB",1]);});
	var _str=fext_CS("log.SalidasB");fext_BSG(_pan,_str);fext_BSP(_pan,_str);_str.sort("sal_documento","DESC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(_pan,"",["btnModify","btnQuery","btnAnnular","btnPrinter"]);_me.lsb_tabsClean(comp,true);fext_PSEP(str,["xxYear_id","xxSal_nro","xxFechaini","xxFechafin","xxArea_key","xxMeta_id","xxTarea_key","xxTipsal_id","xxType_record","xxPag","xxMenu_id","vs"],["","","","",_mi==5135?_vs.a:fext_GV(_pan,"area_key"),"","","5061","grd",1,_mi,fext_JE(_vs)],_pan,["year_id","sal_nro","fechaini","fechafin","","meta_id","tarea_key","","","","",""]);});_str.load();
},
lsb_tabsClean:function(poC,pb){var _md=fext_CM("log.SalidaW");var _t=poC.down("#tabLSD");fext_grdOC(_t,pb,_md);},
lsb_pls_Chg:function(txtf,newV,oldV,opt){this.lsb_pls_Clean(txtf.up("#pan"));},
lsb_pls_ChgCbo:function(cbo,newV,oldV,opt){var _p=cbo.up("#pan");var _ii=fext_oii(cbo);if(oldV!=undefined){this.lsb_pls_Clean(_p);if(_ii=="year_id"){fextbud_tareasAMLoad({pan:_p});}else if(_ii="meta_id"){fextbud_tareasATLoad({pan:_p});}} if(_ii=="area_key"){fextbud_tareasAMLoad({pan:_p});}},
lsb_pls_Clean:function(poC){fext_grdOC(poC);fext_Dsb(poC,"",["btnQuery","btnAnnular","btnPrinter"]);},
lsb_pls_KP:function(txtf,e,opt){fext_KPL(txtf,e,"pan");},
lsb_pls_oiChg:function(cbo,newV,oldV,opt){fext_SDO(cbo.up("#pan"),"btnNew",cbo,1);},
lsb_pan_btn:function(btn,e,opt){fext_CC("log.SalBB").lsb(btn,opt);},
lsb_pls_grdCellClk:function(cell,td,cellI,r,tr,rowI,e,o){fext_TL(cell.up("log_salb"));},
lsb_pls_grdSelChg:function(mod,r,o){fext_CC("log.SalB").lsb_sc(mod,r);},
});