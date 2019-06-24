Ext.define("Siace.controller.siaf.Nota_ModificatoriaB",{extend:"Ext.app.Controller",stores:["array.Years"],views:["siaf.Nota_ModificatoriaB"],refs:[{ref:"snmb",selector:"siaf_notamodifb"}],
init:function(application){this.control({
"siaf_notamodifb":{beforerender:this.snmb_BeforeRender},"siaf_notamodifb #panSNM #opc_id":{change:this.snmb_psnm_opc_idChange},
"siaf_notamodifb #panSNM #btnQuery":{click:this.snmb_psnm_btnQueryClick},"siaf_notamodifb #panSNM #btnPrinter":{click:this.snmb_psnm_btnPrinterClick},
"siaf_notamodifb #panSNM #fechaini":{change:this.snmb_psnm_fechainiChange},"siaf_notamodifb #panSNM #fechafin":{change:this.snmb_psnm_fechafinChange},
"siaf_notamodifb #panSNM #grdSNM":{cellclick:this.snmb_psnm_grdSNMCellClick,selectionchange:this.snmb_psnm_grdSNMSelectionChange},
"siaf_notamodifb #panSNM #notamodif_nro":{change:this.snmb_psnm_notamodif_nroChange},
"siaf_notamodifb #panSNM #year_id":{change:this.snmb_psnm_year_idChange},
});	},
snmb_BeforeRender:function(comp,opt){var _mi=comp.getMI();var _pan=comp.down("#panSNM");var _grd=_pan.down("#grdSNM");var _t1=comp.down("#tabSNMD");var _vs=fextpub_sessVar();var _me=this;
	fextpub_uamoPerm({obj:_pan.down("#opc_id"),mi:_mi});fextpub_yearsVisible(_pan.down("#year_id"),_vs.y);fextpub_tabgenFilt({obj:_pan.down("#tipnotamodif_id"),tgp:2010,TR:"combo_codename"});
	var _str1=fext_CS("siaf.Nota_Modificatoria_DetB");fext_BSG(_t1,_str1);fext_BSG(_t1,_str1);_str1.sort("notamodifdet_id","ASC");
	_str1.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd);fext_PSEP(str,["xxNotamodif_key","xxType_record","xxPag"],[_r.data.notamodif_key,"grd",1]);});
	var _str=fext_CS("siaf.Nota_ModificatoriaB");fext_BSG(_pan,_str);fext_BSP(_pan,_str);_str.sort("notamodif_fecha","DESC");
	_str.on("beforeload",function(str,oper,eOpt){fext_Dsb(_pan,"",["btnQuery","btnPrinter"]);_me.snmb_tabsClean(comp,true);fext_PSEP(str,["xxYear_id","xxUnieje_key","xxNotamodif_nro","xxFechaini","xxFechafin","xxType_record","xxMenu_id","xxPag","vs"],["",_vs.ue,"","","","grd",_mi,1,fext_JE(_vs)],_pan,["year_id","","notamodif_nro","fechaini","fechafin","","","",""]);});
},
snmb_tabsActivate:function(poC,pnTab){if(!fext_grdSR(poC,"grdSNM")){return false;}if(pnTab==0){fext_GS(poC,"grdSNMD").load();}},
snmb_tabsClean:function(poC,pbB){var _mod=fext_CM("siaf.Nota_ModificatoriaW");var _tab=poC.down("#tabSNMD");var _pag=fext_DP(_tab);fext_gridClean(_pag.getStore(),_pag);_pag.setDisabled(pbB);fext_LR(_tab,_mod);},
snmb_psnm_Clean:function(poC){var _pag=fext_DP(poC);fext_gridClean(_pag.getStore(),_pag);fext_Dsb(poC,"",["btnQuery","btnPrinter"]);this.snmb_tabsClean(this.getSnmb(),true);},
snmb_psnm_ViewEdit:function(poC,pcTE){},
snmb_psnm_opc_idChange:function(cbo,newV,oldV,opt){},
snmb_psnm_btnQueryClick:function(btn,e,opt){this.snmb_psnm_ViewEdit(btn.up("#panSNM"),3);},
snmb_psnm_btnPrinterClick:function(btn,e,opt){},
snmb_psnm_fechainiChange:function(datf,newV,oldV,opt){this.snmb_psnm_Clean(datf.up("#panSNM"));},
snmb_psnm_fechafinChange:function(datf,newV,oldV,opt){this.snmb_psnm_Clean(datf.up("#panSNM"));},
snmb_psnm_grdSNMCellClick:function(cell,td,cellI,rec,tr,rowI,e,opt){fext_GS(this.getSnmb(),"grdSNMD").load();},
snmb_psnm_grdSNMSelectionChange:function(mod,rec,opt){if(rec.length==1){var _pan=this.getSnmb();var _p=_pan.down("#panSNM");fext_SDO(_p,"btnQuery","",3);this.snmb_tabsClean(_pan,false);
	Ext.Ajax.request({method:"POST",url:"php/siaf_nota_modificatoria_json_records.php",params:{xxNotamodif_key:rec[0].data.notamodif_key,xxType_record:"win",vs:fext_JE(fextpub_sessVar())},
		success:function(resp,opt){var _res=fext_DJ("",resp);var _mod=fext_CM("siaf.Nota_ModificatoriaW");if(_res.success&&_res.data.length==1){_mod.set(_res.data[0]);}fext_LR(_pan.down("#tabSNMD"),_mod);}
	});
}},
snmb_psnm_notamodif_nroChange:function(txtf,newV,oldV,opt){this.snmb_psnm_Clean(txtf.up("#panSNM"));},
snmb_psnm_year_idChange:function(cbo,newV,oldV,opt){if(oldV!=undefined){this.snmb_psnm_Clean(cbo.up("#panSNM"));}},

});