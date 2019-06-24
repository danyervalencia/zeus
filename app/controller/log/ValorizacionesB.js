Ext.define("Siace.controller.log.ValorizacionesB",{extend:"Ext.app.Controller",stores:["array.Years"],views:["log.ValorizacionesB"],
init:function(application){this.control({
"log_valrzb":{beforerender:this.lvb_BR},"log_valrzb #pan #opc_id":{change:this.lvb_pan_oiChg},
"log_valrzb #pan #btnNew":{click:this.lvb_pan_btn},"log_valrzb #pan #btnQuery":{click:this.lvb_pan_btn},"log_valrzb #pan #btnAnnular":{click:this.lvb_pan_btn},"log_valrzb #pan #btnPrinter":{click:this.lvb_pan_btn},
"log_valrzb #pan #area_key":{change:this.lvb_pan_ChgCbo},"log_valrzb #pan #fechaini":{change:this.lvb_pan_Chg},"log_valrzb #pan #fechafin":{change:this.lvb_pan_Chg},
"log_valrzb #pan #grdLV":{cellclick:this.lvb_pan_grdCellClk,selectionchange:this.lvb_pan_grdSelChg},
"log_valrzb #pan #val_nro":{change:this.lvb_pan_Chg,keypress:this.lvb_pan_KP},"log_valrzb #pan #meta_id":{change:this.lvb_pan_ChgCbo},"log_valrzb #pan #tarea_key":{change:this.lvb_pan_ChgCbo},"log_valrzb #pan #year_id":{change:this.lvb_pan_ChgCbo}
});	},
lvb_BR:function(comp,opt){var _mi=comp.getMI();var _p=comp.down("#pan");var _grd=_p.down("grid");var _t1=comp.down("#tabLVD");var _vs=fextpub_sessVar();var _me=this;
	fextpub_uamoPerm({comp:_p,mi:_mi});fextbud_metasParam({pan:_p});fextbud_tareasParam({pan:_p});fextpub_yearsVisible(_p.down("#year_id"),_vs.y);fextpub_areasFilt({obj:_p.down("#area_key"),filt:false,nuk:"NoT"});
	var _str1=fext_CS("log.Valorizaciones_DetB");fext_BSG(_t1,_str1);
	_str1.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd);fext_PSEP(str,["xxValrz_key","xxType_record","xxPag"],[_r.data.valrz_key,"grdLVB",1]);});
	var _str=fext_CS("log.ValorizacionesB");fext_BSGP(_p,_str);_str.sort("valrz_documento","DESC");
	_str.on("beforeload",function(str,oper,opt){_me.lvb_pan_DB(_p);_me.lvb_tabsClean(comp,true);fext_PSEP(str,["xxYear_id","xxValrz_nro","xxFechaini","xxFechafin","xxArea_key","xxMeta_id","xxTarea_key","xxType_record","xxPag","xxMenu_id","ssNO_USK","vs"],["","","","","","","","grd",1,_mi,"NoT",fext_JE(_vs)],_p,["year_id","valrz_nro","fechaini","fechafin","area_key","meta_id","tarea_key","","","","",""]);});_str.load();
},
lvb_tabsClean:function(poC,pbB){var _t=poC.down("#tabLVD");fext_GSR(_t,"");},
lvb_pan_Chg:function(txtf,newV,oldV,o){this.lvb_pan_Clean(txtf.up("#pan"));},
lvb_pan_ChgCbo:function(cbo,newV,oldV,opt){var _p=cbo.up("#pan");var _ii=fext_oii(cbo,"",3);if(oldV!=undefined||_ii=="are"){this.lvb_pan_Clean(_p);if(_ii=="yea"){fextbud_tareasAMLoad({pan:_p});}else if(_ii=="met"){fextbud_tareasATLoad({pan:_p});}}if(_ii=="are"){fextbud_tareasAMLoad({pan:_p});}},
lvb_pan_Clean:function(poC){fext_grdOC(poC);this.lvb_pan_DB(poC);this.lvb_tabsClean(poC.up("log_valrzb"),true);},
lvb_pan_DB:function(poC){fext_Dsb(poC,"",["btnQuery","btnAnnular","btnPrinter"]);},
lvb_pan_KP:function(txtf,e,opt){fext_KPL(txtf,e,"pan");},
lvb_pan_oiChg:function(cbo,newVal,oldVal,opt){fext_SDO(cbo.up("#pan"),"btnNew",cbo,1);},
lvb_pan_btn:function(btn,e,opt){fext_CC("log.ValrzBB").lvb(btn,opt);},
lvb_pan_grdCellClk:function(cell,td,cellI,rec,tr,rowI,e,opt){fext_TL(cell.up("log_valrzb"));},
lvb_pan_grdSelChg:function(mod,r,o){fext_CC("log.ValrzB").lvb_sc(mod,r);},
});