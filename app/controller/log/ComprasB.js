Ext.define("Siace.controller.log.ComprasB",{extend:"Ext.app.Controller",stores:["array.Years"],views:["log.ComprasB"],
init:function(application){this.control({
"log_compb":{beforerender:this.lcb_BR},"log_compb #pan #opc_id":{change:this.lcb_pan_oiChg},
"log_compb #pan #btnNew":{click:this.lcb_pan_btn},"log_compb #pan #btnModify":{click:this.lcb_pan_btn},"log_compb #pan #btnQuery":{click:this.lcb_pan_btn},"log_compb #pan #btnAct":{click:this.lcb_pan_btn},"log_compb #pan #btnDelete":{click:this.lcb_pan_btn},"log_compb #pan #btnPrinter":{click:this.lcb_pan_btn},
"log_compb #pan #area_key":{change:this.lcb_pan_ChgCbo},"log_compb #pan #fechaini":{change:this.lcb_pan_Chg},"log_compb #pan #fechafin":{change:this.lcb_pan_Chg},
"log_compb #pan #grdLC":{cellclick:this.lcb_pan_grdCellClk,selectionchange:this.lcb_pan_grdSelChg},
"log_compb #pan #meta_id":{change:this.lcb_pan_ChgCbo},"log_compb #pan #comp_nro":{change:this.lcb_pan_Chg},"log_compb #pan #tiporden_id":{change:this.lcb_pan_ChgCbo},"log_compb #pan #year_id":{change:this.lcb_pan_ChgCbo},
"log_compb #tabLCD":{activate:this.lcb_tabsAct}
});},
lcb_BR:function(comp,opt){var _mi=comp.getMI();var _p=comp.down("#pan");var _grd=_p.down("#grdLC");var _t1=comp.down("#tabLCD");var _vs=fextpub_sessVar();var _me=this;
	fextpub_uamoPerm({comp:_p,mi:_mi});fextpub_yearsVisible(_p.down("#year_id"),_vs.y);
	if(_mi==5185){fextpub_docFilt({obj:_p.down("#doc_id"),TR:"cboA",TQ:"REGCOMP"});
	fextbud_tareasAMParam({pan:_p,di:541,de:1});fextbud_tareasATParam({pan:_p,di:541,de:1});fextpub_yearsVisible(_p.down("#year_id"),_vs.y);fextpub_areasFilt({obj:_p.down("#area_key"),vsb:false,filt:true,ak:_vs.a,nuk:"NoT",AB:"NO"});}	
	//fext_BS(comp,"tiporden_id","log.Tipos_OrdenesCboA");fext_GS(comp,"tiporden_id").load({params:{xxTablex:5090,xxType_record:"cboA",xxOrder_by:"tiporden_orden",xxAdd_blank:"YES"},callback:function(r){if(r.length>1){_cbo.setValue(0);}else{_cbo.disable();_cbo.setValue("");}}});
	//if(_mi==5181){fextbud_metasParam({pan:_p});fextpub_yearsVisible(_p.down("#year_id"),_vs.y);fextpub_areasFilt({obj:_p.down("#area_key"),filt:false,nuk:"NoT",OB:"area_abrev"});}else{return false;}
	//var _str1=fext_CS("log.Compras_Det_Tareas_FftredB");fext_BSGP(_t1,_str1);_str1.sort("item","ASC");
	//_str1.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd);fext_PSEP(str,["xxComp_key","xxType_record","xxPag"],[_r.data.comp_key,"grdLCB",1],_t1,["","",""]);});
	var _str=fext_CS("log.ComprasB");fext_BSGP(_p,_str);_str.sort("comp_fecha","DESC");
	console.log(_mi);
	_str.on("beforeload",function(str,oper,opt){_me.lcb_pan_DB(_p);_me.lcb_tabsClean(comp,true);fext_PSEP(str,["xxYear_id","xxDoc_id","xxComp_serie","xxComp_nro","xxFechaini","xxFechafin","xxArea_key","xxMeta_id","xxType_record","vs","xxMenu_id","xxPag"],["","","","","","","","","grd14",fext_JE(_vs),_mi,1],_p,["year_id","doc_id","comp_serie","comp_nro","fechaini","fechafin","area_key","meta_id","","","",""]);});_str.load();
},
lcb_tabsAct:function(comp,o){if(!fext_grdSR(comp.up("log_compb"),"grdLC")){return false;}fext_GS(comp).load();},
lcb_tabsClean:function(poC,pb){var _md=fext_CM("log.CompraW");
	var _t=poC.down("#tabLCD");fext_grdOC(_t,pb,_md);
},
lcb_pan_Clean:function(poC){fext_grdOC(poC);this.lcb_pan_DB(poC);this.lcb_tabsClean(poC.up("log_compb"),true);},
lcb_pan_Chg:function(txtf,newV,oldV,opt){this.lcb_pan_Clean(txtf.up("#pan"));},
lcb_pan_ChgCbo:function(cbo,newV,oldV,opt){var _p=cbo.up("#pan");var _ii=fext_oii(cbo,"",3);if(oldV!=undefined||_ii=="are"){this.lcb_pan_Clean(_p);if(_ii=="yea"){fextbud_metasLoad({pan:_p});}}if(_ii=="are"){fextbud_metasLoad({pan:_p});}},
lcb_pan_oiChg:function(cbo,newV,oldV,o){fext_SDO(cbo.up("panel"),"btnNew",cbo,1);},
lcb_pan_btn:function(btn,e,opt){fext_CC("log.CompB14B").lcb(btn,opt);},
lcb_pan_DB:function(poC){fext_Dsb(poC,"",["btnModify","btnQuery","btnAct","btnDelete"]);},
lcb_pan_btnActivateClick:function(btn,e,opt){var _p=btn.up("#pan"); if(fextpub_uamoBtn(_p.down("#opc_id"),48)){return false;}
	if(opt==undefined){var _rec=fext_grdSR(_p.down("#grdLC")); if(!_rec){return false;}
		fext_CC("log.PedidosActivate");var _win=fext_CW("log.PedidosActivate");_win.setCallButton(btn);_win.setCallKey(_rec.data.ped_key);_win.show();
	}else{var _win=opt.win;var _pan=_p.up("log_compb");var _str=_p.down("#grdLC").getStore();fext_mask(_pan);
		Ext.Ajax.request({url:"php/logistics_pedidos_fases_save_activate.php",params:{xx0005:"YES",xxPed_key:opt.key,xxFase_key:opt.fase_key,xxObserv:opt.observ,xxMenu_id:_pan.getMI(),xxObserv:opt.observ,vs:fext_JE(fextpub_sessVar())},
			success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){_win.close();_str.load({callback:function(rec){fext_unmask(_pan);}});}else{fext_unmask(_pan);fext_MsgE(_res.msg);}},failure:function(resp,opt){fext_unmask(_pan);fext_MsgE(res.responseText);}
		});
	}
},
lcb_pan_grdCellClk:function(cell,td,cellI,r,tr,rowI,e,o){fext_TL(cell.up("log_compb"));},
lcb_pan_grdSelChg:function(mod,r,o){fext_CC("log.CompB14").lcb_sc(mod,r);},
});