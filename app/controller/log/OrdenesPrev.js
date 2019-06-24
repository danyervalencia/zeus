Ext.define("Siace.controller.log.OrdenesPrev",{extend:"Ext.app.Controller",stores:["array.DocOrdenAB","array.YearsDAB"],views:["log.OrdenesPrev"],
init:function(application){this.control({
"log_ordenprev":{beforerender:this.lop_BeforeRender},"log_ordenprev #panLO #opc_id":{change:this.lop_plo_opc_idChange},
"log_ordenprev #panLO #btnNew":{click:this.lop_plo_btnNewClick},"log_ordenprev #panLO #btnModify":{click:this.lop_plo_btnModifyClick},"log_ordenprev #panLO #btnQuery":{click:this.lop_plo_btnQueryClick},"log_ordenprev #panLO #btnAnnular":{click:this.lop_plo_btnAnnularClick},"log_ordenprev #panLO #btnPrinter":{click:this.lop_plo_btnPrinterClick},"log_ordenprev #panLO #btnPers_search":{click:this.lop_plo_btnPers_searchClick},
"log_ordenprev #panLO #area_key":{change:this.lop_plo_area_keyChange},"log_ordenprev #panLO #doc_id":{change:this.lop_plo_doc_idChange},"log_ordenprev #panLO #fechaini":{change:this.lop_plo_fechainiChange},"log_ordenprev #panLO #fechafin":{change:this.lop_plo_fechafinChange},
"log_ordenprev #panLO #grdLO":{cellclick:this.lop_plo_grdLOCellClick,selectionchange:this.lop_plo_grdLOSelectionChange},
"log_ordenprev #panLO #meta_id":{change:this.lop_plo_meta_idChange},"log_ordenprev #panLO #orden_nro":{change:this.lop_plo_orden_nroChange,keypress:this.lop_plo_orden_nroKeypress},
"log_ordenprev #panLO #pers_ruc":{blur:this.lop_plo_pers_rucBlur,change:this.lop_plo_pers_rucChange,focus:this.lop_plo_pers_rucFocus,keypress:this.lop_plo_pers_rucKeypress},"log_ordenprev #panLO #year_id":{change:this.lop_plo_year_idChange},
"log_ordenprev #tabLOD":{activate:this.lop_tlod_Activate},
});},
lop_BeforeRender:function(comp,opt){var _MI=comp.getMI();var _panLO=comp.down("#panLO");var _tabLOD=comp.down("#tabLOD");var _grd=_panLO.down("#grdLO");var _pag=_panLO.down("#pagLO");var _tab=comp.down("#tab01");var _vs=fextpub_sessVar();var _me=this;
	fextpub_uamoPerm({obj:_panLO.down("#opc_id"),menu_id:_MI});
	fextpub_areasFilt({obj:_panLO.down("#area_key"),filt:false,nuk:"NoT"});fextbud_metasParam({pan:comp});

	var _strLOD=fext_CS("log.Ordenes_DetBrow");var _grdLOD=_tabLOD.down("#grdLOD");var _pagLOD=_tabLOD.down("#pagLOD");_grdLOD.bindStore(_strLOD);_pagLOD.bindStore(_strLOD);_strLOD.sort("ordendet_item","ASC");
	_strLOD.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd); var _prx=str.getProxy();
		_prx.setExtraParam("xxOrden_key",_r.data.orden_key);_prx.setExtraParam("xxType_record","grdLOB");_prx.setExtraParam("xxPag",1);
	});

	var _str=fext_CS("log.OrdenesPrev");_grd.bindStore(_str);_pag.bindStore(_str);_str.sort("orden_documento","DESC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(_panLO,"",["btnAnnular","btnPrinter"]);_me.lop_tabsClean(comp,true,"");var _prx=str.getProxy();
		_prx.setExtraParam("xxYear_id",_panLO.down("#year_id").getValue());_prx.setExtraParam("xxDoc_id",_panLO.down("#doc_id").getValue());_prx.setExtraParam("xxOrden_nro",_panLO.down("#orden_nro").getValue());_prx.setExtraParam("xxFechaini",_panLO.down("#fechaini").getSubmitData());_prx.setExtraParam("xxFechafin",_panLO.down("#fechafin").getSubmitData());
		_prx.setExtraParam("xxArea_key",_panLO.down("#area_key").getValue());_prx.setExtraParam("xxMeta_id",_panLO.down("#meta_id").getValue());_prx.setExtraParam("xxPers_key",_panLO.down("#pers_key").getValue());
		_prx.setExtraParam("xxType_record","grd");_prx.setExtraParam("vs",fext_JE(_vs));_prx.setExtraParam("xxMenu_id",_MI);_prx.setExtraParam("xxPag",1);
	});
},
lop_tabsActivate:function(poC,poTab){if(!fext_grdSR(poC.down("#grdLO"))){return false;}poTab.down("grid").getStore().load();},
lop_tabsClean:function(poC,pbBool,pcFlga){var _mod=fext_CM("log.OrdenWin");
	var _tabLOD=poC.down("#tabLOD");var _pagLOD=_tabLOD.down("#pagLOD");var _strLOD=_pagLOD.getStore();fext_gridClean(_strLOD,_pagLOD); _tabLOD.down("form").loadRecord(_mod);_pagLOD.setDisabled(pbBool);
},
lop_plo_Clean:function(poC){var _pag=poC.down("#pagLO"); var _str=_pag.getStore(); fext_gridClean(_str,_pag);
	poC.down("#btnAnnular").disable();poC.down("#btnPrinter").disable();
	this.lop_tabsClean(poC.up("log_ordenprev"),true);
},
lop_plo_ViewEdit:function(poC,pcTE){fext_CC("log.Ordenes").lo_ViewP({comp:poC,TE:pcTE,mi:poC.up("panel").getMI(),oi:pcTE});},
lop_plo_opc_idChange:function(cbo,newVal,oldVal,opt){cbo.up("#panLO").down("#btnNew").setDisabled(fextpub_uamoBtn(cbo,1));},
lop_plo_btnNewClick:function(btn,e,opt){this.lop_plo_ViewEdit(btn.up("#panLO"),1);},
lop_plo_btnModifyClick:function(btn,e,opt){this.lop_plo_ViewEdit(btn.up("#panLO"),2);},
lop_plo_btnQueryClick:function(btn,e,opt){this.lop_plo_ViewEdit(btn.up("#panLO"),3);},
lop_plo_btnAnnularClick:function(btn,e,opt){var _panLO=btn.up("#panLO"); if(fextpub_uamoBtn(_panLO.down("#opc_id"),10)){return false;}
	if(opt==undefined){var _rec=fext_grdSR(_panLO.down("#grdLO")); if(!_rec){return false;}
		Ext.Msg.confirm("Confirmación","¿Esta Ud. seguro de ANULAR la Orden seleccionada?",function(b){if(b=="yes"){fext_CC("pub.UsuariosPsw2"); var _win=fext_CW("pub.UsuariosPsw2");_win.setCallButton(btn);_win.setCallKey(_rec.data.orden_key);_win.down("#subtitle").setValue(_rec.data.orden_documento);_win.setFormType(10);_win.show();}});
	}else{fext_mask(_panLO);var _win=opt.win; var _str=_panLO.down("#grdLO").getStore(); var _MI=_panLO.up("panel").getMI();
		Ext.Ajax.request({url:"php/logistics_ordenes_delete.php",params:{xx0010:"YES",xxType_edit:10,xxOrden_key:opt.key,xxUsur_psw2:opt.usur_psw2,xxOrden_observ:opt.observ,xxMenu_id:_MI,vs:fext_JE(fextpub_sessVar())},
			success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){_str.load({callback:function(rec){fext_unmask(_panLO);}}); _win.close();}else{fext_unmask(_panLO); fext_MsgE(_res.msg);}},failure:function(resp,opt){fext_unmask(_panLO);fext_MsgE(resp.responseText);}
		});
	}
},
lop_plo_btnSiafClick:function(btn,e,opt){var _panLO=btn.up("#panLO"); if(fextpub_uamoBtn(_panLO.down("#opc_id"),5005)){return false;}var _rec=fext_grdSR(_panLO.down("#grdLO")); if(!_rec){return false;}
	fext_CC("log.Ordenes_ExpedientesEdit");var _win=fext_CW("log.Ordenes_ExpedientesEdit");_win.setTypeEdit(_rec.data.expe_nro*1>0?2:1); _win.setCallStore(_panLO.down("#grdLO").getStore()); _win.down("#orden_key").setValue(_rec.data.orden_key); _win.setMenuId(_panLO.up("panel").getMI()); _win.show();
},
lop_plo_btnPrinterClick:function(btn,e,opt){var _panLO=btn.up("#panLO"); fext_CC("log.Ordenes").lo_Printer({comp:_panLO,mi:_panLO.up("panel").getMI()});},
lop_plo_btnPers_searchClick:function(btn,e,opt){fext_CC("pub.PersonasSearch"); var _panLO=btn.up("#panLO"); var _pan=_panLO.up("panel");
	_pan.setCompPPS(fext_compSearch({cc:_panLO,os:_pan.getCompPPS(),v:"Siace.view.pub.PersonasSearch",tit:"Búsqueda de Proveedor ::.",ck:_panLO.down("#pers_key").getValue(),TQ:"ONLY_WITH_RUC"}));
},
lop_plo_area_keyChange:function(cbo,newValue,oldValue,opt){this.lop_plo_Clean(cbo.up("#panLO"));},
lop_plo_doc_idChange:function(cbo,newVal,oldVal,opt){if(oldVal!==undefined){this.lop_plo_Clean(cbo.up("#panLO"));}},
lop_plo_fechainiChange:function(datf,newVal,oldVal,opt){this.lop_plo_Clean(datf.up("#panLO"));},
lop_plo_fechafinChange:function(datf,newVal,oldVal,opt){this.lop_plo_Clean(datf.up("#panLO"));},
lop_plo_grdLOCellClick:function(cell,td,cellI,rec,tr,rowI,e,opt){cell.up("log_ordenprev").down("#grdLOD").getStore().load();},
lop_plo_grdLOCellClick:function(cell,td,cellI,rec,tr,rowI,e,opt){var _pan=cell.up("log_ordenprev"); _pan.down("#tab01").getActiveTab().down("grid").getStore().load();},
lop_plo_grdLOSelectionChange:function(mod,rec,opt){if(rec.length==1){var _panLO=mod.view.panel.up("#panLO"); var _cbo=_panLO.down("#opc_id");var _fg=(rec[0].data.orden_flga==98?true:false);var _en=rec[0].data.expe_nro;
	fext_SDO(_panLO,"btnAnnular",_cbo,10,_fg);fext_SDO(_panLO,"btnPrinter",_cbo,8,_fg);fext_SDO(_panLO,"btnFases",_cbo,5029,_fg,(_fg||_en*1<=0?true:""));
	this.lop_tabsClean(_panLO.up("panel"),false,_flga);
	Ext.Ajax.request({method:"POST",url:"php/logistics_ordenes_json_records.php",params:{xxOrden_key:rec[0].data.orden_key,xxType_record:"win",xxOrder_by:"orden_key",ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},
		success:function(resp,opt){var _res=fext_DJ("",resp);var _mod=fext_CM("log.OrdenWin");var _tabLOD=_panLO.up("panel").down("#tabLOD");var _tabLOP=_panLO.up("panel").down("#tabLOP");var _tabLI=_panLO.up("panel").down("#tabLI");
			if(_res.success&&_res.data.length==1){_mod.set(_res.data[0]);} _tabLOD.down("form").loadRecord(_mod); _tabLOP.down("form").loadRecord(_mod); _tabLI.down("form").loadRecord(_mod);
		}
	});
}},
lop_plo_meta_idChange:function(cbo,newVal,oldVal,opt){if(oldVal!==undefined){this.lop_plo_Clean(cbo.up("#panLO"));}},
lop_plo_orden_nroChange:function(txtf,newVal,oldVal,opt){this.lop_plo_Clean(txtf.up("#panLO"));},
lop_plo_orden_nroKeypress:function(txtf,e,opt){if(e.getCharCode()==13){txtf.up("log_ordenprev").down("#grdLO").getStore().load();}},
lop_plo_pers_rucBlur:function(txtf,The,opt){this.lop_plo_pers_rucSearch(txtf.up("#panLO"),0);},
lop_plo_pers_rucChange:function(txtf,newVal,oldVal,opt){this.lop_plo_Clean(txtf.up("#panLO"));},
lop_plo_pers_rucFocus:function(txtf,The,opt){this.lop_plo_pers_rucSearch(txtf.up("#panLO"),1);},
lop_plo_pers_rucKeypress:function(txtf,e,opt){if(e.getCharCode()==13){this.lop_plo_pers_rucSearch(txtf.up("#panLO"),13);}},
lop_plo_pers_rucSearch:function(poCallWin,pcType){fext_fieldSearch(pcType,poCallWin,["pers_key","PERS_RUC","pers_ruc","pers_nombre"],["php/public_personas_json_records.php","xxPers_ruc","textfield_search",""],"0",["","",["pers_ruc"],""],"");},
lop_plo_year_idChange:function(cbo,newVal,oldVal,opt){if(oldVal!==undefined){fextbud_metasLoad({pan:cbo.up("#panLO")});this.lop_plo_Clean(cbo.up("#panLO"));}},
lop_tlod_Activate:function(comp,opt){this.lop_tabsActivate(comp.up("log_ordenprev"),comp);},
});