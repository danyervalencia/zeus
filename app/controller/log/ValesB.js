Ext.define("Siace.controller.log.ValesB",{extend:"Ext.app.Controller",stores:["array.Years"],views:["log.ValesB"],
init:function(application){this.control({
"log_valb":{beforerender:this.lvb_BR},"log_valb #pan #opc_id":{change:this.lvb_pan_oiChg},
"log_valb #pan #btnNew":{click:this.lvb_pan_btn},"log_valb #pan #btnQuery":{click:this.lvb_pan_btn},"log_valb #pan #btnAnnular":{click:this.lvb_pan_btn},"log_valb #pan #btnPrinter":{click:this.lvb_pan_btn},
"log_valb #pan #area_key":{change:this.lvb_pan_ChgCbo},"log_valb #pan #fechaini":{change:this.lvb_pan_Chg},"log_valb #pan #fechafin":{change:this.lvb_pan_Chg},
"log_valb #pan #grdLV":{cellclick:this.lvb_pan_grdCellClk,selectionchange:this.lvb_pan_grdSelChg},
"log_valb #pan #val_nro":{change:this.lvb_pan_Chg,keypress:this.lvb_pan_KP},"log_valb #pan #meta_id":{change:this.lvb_pan_ChgCbo},"log_valb #pan #tarea_key":{change:this.lvb_pan_ChgCbo},"log_valb #pan #year_id":{change:this.lvb_pan_ChgCbo},
"log_valb #tabLVD #btnNew":{click:this.lvb_t1_btn},"log_valb #tabLVD #btnModify":{click:this.lvb_t1_btn},"log_valb #tabLVD #btnAnnular":{click:this.lvb_t1_btn}
});	},
lvb_BR:function(comp,opt){var _mi=comp.getMI();var _p=comp.down("#pan");var _grd=_p.down("grid");var _tabLVD=comp.down("#tabLVD");var _vs=fextpub_sessVar();var _me=this;
	fextpub_uamoPerm({comp:_p,mi:_mi});
	if(_mi==5170){fextbud_metasParam({pan:_p});fextbud_tareasParam({pan:_p});fextpub_yearsVisible(_p.down("#year_id"),_vs.y);fextpub_areasFilt({obj:_p.down("#area_key"),filt:false,nuk:"NoT"});}
	else if(_mi==5171){fextbud_tareasAMParam({pan:_p,di:531,de:1});fextbud_tareasATParam({pan:_p,di:531,de:1});fextpub_yearsVisible(_p.down("#year_id"),_vs.y);fextpub_areasFilt({obj:_p.down("#area_key"),vsb:false,filt:true,ak:_vs.a,AB:"NO"});}else{return false;}
	var _strLVD=fext_CS("log.Vales_DetB");fext_BSG(_tabLVD,_strLVD);
	_strLVD.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd);fext_PSEP(str,["xxVal_key","xxType_record","xxPag"],[_r.data.val_key,"grdLVB",1]);});
	var _str=fext_CS("log.ValesB");fext_BSGP(_p,_str);_str.sort("val_documento","DESC");
	_str.on("beforeload",function(str,oper,opt){_me.lvb_pan_DB(_p);fext_Dsb(_tabLVD,"",["btnNew","btnModify","btnAnnular"]);_me.lvb_tabsClean(comp,true);fext_PSEP(str,["xxYear_id","xxVal_nro","xxFechaini","xxFechafin","xxArea_key","xxMeta_id","xxTarea_key","xxType_record","xxPag","xxMenu_id","vs"],["","","","",_mi==5171?_vs.a:fext_GV(_p,"area_key"),"","","grd",1,_mi,fext_JE(_vs)],_p,["year_id","val_nro","fechaini","fechafin","","meta_id","tarea_key","","","",""]);});_str.load();
},
lvb_tabsClean:function(poC,pb){var _md=fext_CM("log.ValeW");var _t=poC.down("#tabLVD");fext_GSR(_t,"");fext_LR(poC,_md);poC.down("#frmLVA").getForm().reset();},
lvb_pan_Chg:function(txtf,newV,oldV,o){this.lvb_pan_Clean(txtf.up("#pan"));},
lvb_pan_ChgCbo:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");var _ii=fext_oii(cbo).substr(0,3);if(_ii=="are"){fextbud_tareasAMLoad({pan:_p});}if(oldV!=undefined){this.lvb_pan_Clean(_p);if(_ii=="yea"){fextbud_tareasAMLoad({pan:_p});}else if(_ii=="met"){fextbud_tareasATLoad({pan:_p});} }},
lvb_pan_Clean:function(poC){fext_grdOC(poC);this.lvb_pan_DB(poC);},
lvb_pan_DB:function(poC){fext_Dsb(poC,"",["btnQuery","btnAnnular","btnPrinter"]);},
lvb_pan_KP:function(txtf,e,opt){fext_KPL(txtf,e,"pan");},
lvb_pan_oiChg:function(cbo,newV,oldV,opt){fext_SDO(cbo.up("#pan"),"btnNew",cbo,1);},
lvb_pan_btn:function(btn,e,opt){fext_CC("log.ValBB").lvb(btn,opt);},
lvb_pan_grdCellClk:function(cell,td,cellI,rec,tr,rowI,e,o){fext_TL(cell.up("log_valb"));},
lvb_pan_grdSelChg:function(mod,r,o){fext_CC("log.ValB").lvb_sc(mod,r);},
lvb_t1_btn:function(btn,e,opt){fext_CC("log.ValBT1B").lvb(btn,opt);}
});