Ext.define("Siace.controller.log.Pedidos_FasesBT",{extend:"Ext.app.Controller",stores:["array.Years"],views:["log.Pedidos_FasesBT"],
init:function(application){this.control({
"log_pedfasebt":{beforerender:this.lpfb_BR},"log_pedfasebt #pan #opc_id":{change:this.lpfb_pan_oiChg},"log_pedfasebt #pan #btnQuery":{click:this.lpfb_pan_btn},"log_pedfasebt #pan #btnDet":{click:this.lpfb_pan_btn},"log_pedfasebt #pan #btnAttach":{click:this.lpfb_pan_btn},"log_pedfasebt #pan #btnSub":{click:this.lpfb_pan_btn},"log_pedfasebt #pan #btnRec":{click:this.lpfb_pan_btn},
"log_pedfasebt #pan #area_key":{change:this.lpfb_pan_ChgCbo},"log_pedfasebt #pan #fechaini":{change:this.lpfb_pan_Chg},"log_pedfasebt #pan #fechafin":{change:this.lpfb_pan_Chg},
"log_pedfasebt #pan #grd":{cellclick:this.lpfb_pan_grdCellClk,selectionchange:this.lpfb_pan_grdSelChg},
"log_pedfasebt #pan #meta_id":{change:this.lpfb_pan_ChgCbo},"log_pedfasebt #pan #ped_nro":{change:this.lpfb_pan_Chg,keypress:this.lpfb_pan_KP},"log_pedfasebt #pan #tarea_key":{change:this.lpfb_pan_ChgCbo},"log_pedfasebt #pan #tipped_id":{change:this.lpfb_pan_ChgCbo},
"log_pedfasebt #pan #tiptram_id":{change:this.lpfb_pan_ChgCbo},"log_pedfasebt #pan #year_id":{change:this.lpfb_pan_ChgCbo},

"log_pedfasebt #tabLPT #opc_id":{change:this.lpfb_tabs_oiChg},
"log_pedfasebt #tabLPT #btnQuery":{click:this.lpfb_t1_btnQueryClick},"log_pedfasebt #tabLPT #btnPdf":{click:this.lpfb_t1_btnRepClick},"log_pedfasebt #tabLPT #btnExcel":{click:this.lpfb_t1_btnRepClick},
"log_pedfasebt #tabLPT #fechaini":{change:this.lpfb_t1_fechainiChange},"log_pedfasebt #tabLPT #fechafin":{change:this.lpfb_t1_fechafinChange},"log_pedfasebt #tabLPT #grdLPT":{selectionchange:this.lpfb_t1_grdLPTSelectionChange},"log_pedfasebt #tabLPT #pedtram_nro":{change:this.lpfb_t1_pedtram_nroChange},"log_pedfasebt #TLPT #tiptram_id":{change:this.lpfb_t1_tiptram_idChange},
"log_pedfasebt #tabLPD":{activate:this.lpfb_tabsAct}
});},
lpfb_BR:function(comp,opt){var _mi=comp.getMI();var _pan=comp.down("#pan");var _grd=_pan.down("#grd");var _cboF=_pan.down("#filter");var _t1=comp.down("#tabLPT");var _t2=comp.down("#tabLPD");var _vs=fextpub_sessVar();var _me=this;
	fextpub_uamoPerm({comp:_pan,mi:_mi});fextpub_uamoPerm({comp:_t1});
	fextpub_tabgenFilt({obj:_pan.down("#tiptram_id"),tgp:1170,TR:"cbo"});fextbud_metasParam({pan:_pan});fext_SV(_pan,"fechaini",fjsDateCurrent(""));fext_SV(_pan,"fechafin",fjsDateCurrent(""));
	fextpub_areasFilt({obj:_pan.down("#area_key"),filt:false,nuk:"NoT",OB:"area_abrev",mi:_mi});fextpub_tabgenFilt({obj:_pan.down("#tipped_id"),tgp:5005,TR:"cboA"});fextbud_metasParam({pan:_pan});fextpub_yearsVisible(_pan.down("#year_id"),_vs.y);
	fextpub_tabgenFilt({obj:_t1.down("#tiptram_id"),tgp:1170,tge:1,TR:"cbo"});

	var _str1=fext_CS("log.Pedidos_TramitesLPSB");fext_BSGP(_t1,_str1);_str1.sort("pedtram_datetime","DESC");
	_str1.on("beforeload",function(str,oper,opt){fext_Dsb(_t1,"",["btnQuery","btnPdf","btnExcel"]);fext_PSEP(str,["xxPedtram_nro","xxFechaini","xxFechafin","xxTiptram_id","xxType_record","vs","xxPag"],["","","","","grdLPS",fext_JE(_vs),1],_t1,["pedtram_nro","fechaini","fechafin","tiptram_id","","",""]);});
	var _str2=fext_CS("log.Pedidos_DetB");fext_BSGP(_t2,_str2);_str2.sort("peddet_item","ASC");
	_str2.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd);fext_PSEP(str,["xxPed_key","xxType_record","xxPag"],[_r.data.ped_key,"grdLPB",1],_t2,["","",""]);});
	

	var _str=fext_CS("log.Pedidos_FasesBT");fext_BSGP(_pan,_str);_str.sort("pedfase_datetime","DESC");
	_str.on("beforeload",function(str,oper,opt){_me.lpfb_tabsClean(comp,true);fext_PSEP(str,["xxYear_id","xxTiptram_id","xxFechaini","xxFechafin","xxArea_key","xxTipped_id","xxPed_nro","xxMeta_id","xxType_record","vs","menu_id","xxPag"],["","","","","","","","","grdT",fext_JE(_vs),_mi,1],_pan,["year_id","tiptram_id","fechaini","fechafin","area_key","tipped_id","ped_nro","meta_id","","","",""]);});
},
lpfb_tabsAct:function(comp,o){if(!fext_grdSR(comp.up("log_pedfasebt"),"grd")){return false;}fext_GS(comp).load();},
lpfb_tabsClean:function(poC,pb){var _md=fext_CM("log.PedidoW");var _t=poC.down("#tabLPD");fext_grdOC(_t,pb,_md);},
lpfb_tabs_oiChg:function(cbo,newV,oldV,o){fext_TS(cbo);},
lpfb_pan_Chg:function(txtf,newV,oldV,opt){this.lpfb_pan_Clean(txtf.up("#pan"));},
lpfb_pan_ChgCbo:function(cbo,newV,oldV,opt){var _p=cbo.up("#pan");var _ii=fext_oii(cbo,"",3);if(oldV!=undefined||_ii=="are"){this.lpfb_pan_Clean(_p);if(_ii="yea"){fextbud_metasLoad({pan:_p});}}},
lpfb_pan_btn:function(btn,e,opt){fext_CC("log.PedfaseBTB").lpfb(btn);},
lpfb_pan_Clean:function(poC){fext_grdOC(poC);fext_Dsb(poC,"",["btnQuery","btnDet","btnAttach"]);this.lpfb_tabsClean(poC.up("log_pedfasebt"),true);},
lpfb_pan_KP:function(txtf,e,opt){fext_KPL(txtf,e,"pan");},
lpfb_pan_oiChg:function(cbo,newV,oldV,opt){fext_SDO(cbo.up("#pan"),"btnSub",cbo,71);fext_SDO(cbo.up("#pan"),"btnRec",cbo,72);},
lpfb_pan_grdCellClk:function(cell,td,cellI,r,tr,rowI,e,o){var _pan=cell.up("log_pedfasebt");if(_pan.down("tabpanel").getActiveTab().getItemId()=="tabLPD"){fext_TL(_pan);}},
lpfb_pan_grdSelChg:function(mod,rec,opt){if(rec.length==1){var _p=mod.view.panel.up("#pan");var _cbo=_p.down("#opc_id");var _d=rec[0].data;
	fext_SD(_p,"btnQuery",fextpub_uamoBtn(_cbo,3));fext_SD(_p,"btnDet",fextpub_uamoBtn(_cbo,59));fext_SD(_p,"btnAttach",_d.pedettr_file==""?true:fextpub_uamoBtn(_cbo,59));
	this.lpfb_tabsClean(_p.up("panel"),false);
	Ext.Ajax.request({method:"POST",url:"php/logistics_pedidos_json_records.php",params:{xxPed_key:_d.ped_key,xxType_record:"win",xxOrder_by:"ped_key",ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},
		success:function(resp,opt){var _res=fext_DJ("",resp);var _mod=fext_CM("log.PedidoW");var _pan=_p.up("panel");var _t2=_pan.down("#tabLPD");
			if(_res.success&&_res.data.length==1){_mod.set(_res.data[0]);}_t2.down("form").loadRecord(_mod);
		}
	});
}},

lpfb_t1_Clean:function(poC,pbBool){var _pag=poC.down("#pagLPT");var _str=_pag.getStore();fext_gridClean(_str,_pag);fext_Dsb(poC,"",["btnQuery","btnPdf","btnExcel"]);},

lpfb_t1_btnQueryClick:function(btn,e,opt){},
lpfb_t1_btnRepClick:function(btn,e,opt){var _t=btn.up("#tabLPT");fext_CC("log.Pedidos_Tramites").lpt_Printer({comp:_t,mi:_t.down("#menu_id").getValue(),oi:(btn.xtype=="comp_btnPdf"?32:33)});},
lpfb_t1_fechainiChange:function(datf,newV,oldV,opt){this.lpfb_t1_Clean(datf.up("#tabLPT"));},
lpfb_t1_fechafinChange:function(datf,newV,oldV,opt){this.lpfb_t1_Clean(datf.up("#tabLPT"));},
lpfb_t1_grdLPTSelectionChange:function(mod,rec,opt){if(rec.length==1){var _tab=mod.view.panel.up("#tabLPT");var _cbo=_tab.down("#opc_id");
	fext_SD(_tab,"btnQuery",fextpub_uamoBtn(_cbo,3));fext_SD(_tab,"btnPdf",fextpub_uamoBtn(_cbo,32));fext_SD(_tab,"btnExcel",fextpub_uamoBtn(_cbo,33));
}},
lpfb_t1_pedtram_nroChange:function(txtf,e,opt){this.lpfb_t1_Clean(txtf.up("#tabLPT"),true);},
lpfb_t1_tiptram_idChange:function(cbo,newV,oldV,opt){if(oldV!=undefined){this.lpfb_t1_Clean(cbo.up("#pan"));}},
});