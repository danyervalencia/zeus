Ext.define("Siace.controller.log.FichasBrow",{extend:"Ext.app.Controller",stores:["array.Years","array.log.TipFichLFEAB"],views:["log.FichasBrow"],
init:function(application){this.control({
"log_fichbrow":{beforerender:this.lfb_BeforeRender},"log_fichbrow #panLF #opc_id":{change:this.lfb_plf_opc_idChange},
"log_fichbrow #panLF #btnNew":{click:this.lfb_plf_btnNewClick},"log_fichbrow #panLF #btnModify":{click:this.lfb_plf_btnModifyClick},"log_fichbrow #panLF #btnQuery":{click:this.lfb_plf_btnQueryClick},"log_fichbrow #panLF #btnPrinter":{click:this.lfb_plf_btnPrinterClick},
"log_fichbrow #panLF #fechaini":{change:this.lfb_plf_fechainiChange},"log_fichbrow #panLF #fechafin":{change:this.lfb_plf_fechafinChange},"log_fichbrow #panLF #fich_nro":{change:this.lfb_plf_fich_nroChange,keypress:this.lfb_plf_fich_nroKeypress},
"log_fichbrow #panLF #grdLF":{cellclick:this.lfb_plf_grdLFCellClick,selectionchange:this.lfb_plf_grdLFSelectionChange},
"log_fichbrow #panLF #tipfich_id":{change:this.lfb_plf_tipfich_idChange},"log_fichbrow #panLF #year_id":{change:this.lfb_plf_year_idChange},
"log_fichbrow #panLFD #btnAdd":{click:this.lfb_plfd_btnAddClick},"log_fichbrow #panLFD #btnDelete":{click:this.lfb_plfd_btnDeleteClick},
"log_fichbrow #panLFD #grdLFD":{cellclick:this.lfb_plfd_grdLFDCellClick,selectionchange:this.lfb_plfd_grdLFDSelectionChange},
"log_fichbrow #tabLFR #btnNew":{click:this.lfb_tlfr_btnNewClick},"log_fichbrow #tabLFR #btnModify":{click:this.lfb_tlfr_btnModifyClick},"log_fichbrow #tabLFR #btnQuery":{click:this.lfb_tlfr_btnQueryClick},"log_fichbrow #tabLFR #btnDelete":{click:this.lfb_tlfr_btnDeleteClick},
"log_fichbrow #tabLFR #grdLFR":{selectionchange:this.lfb_tlfr_grdLFRSelectionChange},
});},
lfb_BeforeRender:function(comp,opt){var _mi=comp.getMenuId();var _panLF=comp.down("#panLF");var _grd=_panLF.down("#grdLF");var _pag=_panLF.down("#pagLF");var _panLFD=comp.down("#panLFD");var _tabLFR=comp.down("#tabLFR");var _me=this;
	fextpub_uamoPerm({obj:_panLF.down("#opc_id"),menu_id:_mi});
	var _strLFD=fext_CS("log.Fichas_DetBrow");var _grdLFD=_panLFD.down("#grdLFD");var _pagLFD=_panLFD.down("#pagLFD");_grdLFD.bindStore(_strLFD);_pagLFD.bindStore(_strLFD);_strLFD.sort("fichdet_item","ASC");
	_strLFD.on("beforeload",function(str,oper,opt){_panLFD.down("#btnDelete").disable();var _rec=fext_grdSR(_grd);_me.lfb_tabsClean(comp,false,true);var _prx=str.getProxy();
		_prx.setExtraParam("xxFich_key",_rec.data.fich_key);_prx.setExtraParam("xxType_record","grdLFB");_prx.setExtraParam("xxPag",1);
	});

	var _strLFR=fext_CS("log.Fichas_RegistrosLFB");var _grdLFR=_tabLFR.down("#grdLFR");var _pagLFR=_tabLFR.down("#pagLFR");_grdLFR.bindStore(_strLFR);_pagLFR.bindStore(_strLFR);_strLFR.sort("fichreg_item","ASC");
	_strLFR.on("beforeload",function(str,oper,opt){_tabLFR.down("#btnModify").disable();_tabLFR.down("#btnQuery").disable();_tabLFR.down("#btnDelete").disable();var _rec=fext_grdSR(_grdLFD);var _prx=str.getProxy();
		_prx.setExtraParam("xxFichdet_key",_rec.data.fichdet_key);_prx.setExtraParam("xxType_record","grdLFB");_prx.setExtraParam("xxPag",1);
	});

	var _str=fext_CS("log.FichasBrow");_grd.bindStore(_str); _pag.bindStore(_str);_str.sort("fich_nro","DESC");
	_str.on("beforeload",function(str,oper,eOpt){_panLF.down("#btnModify").disable(); _panLF.down("#btnQuery").disable();_panLF.down("#btnPrinter").disable();_me.lfb_tabsClean(comp,true,true);var _prx=str.getProxy();
		_prx.setExtraParam("xxYear_id",_panLF.down("#year_id").getValue());_prx.setExtraParam("xxFich_nro",_panLF.down("#fich_nro").getValue());_prx.setExtraParam("xxTipfich_id",_panLF.down("#tipfich_id").getValue());
		_prx.setExtraParam("xxType_record","grd");_prx.setExtraParam("xxPag",1);_prx.setExtraParam("xxMenu_id",comp.getMenuId());_prx.setExtraParam("ssNO_USK",(comp.getMenuId()==5103?"":""));_prx.setExtraParam("vs",fext_JE(fextpub_sessVar()));
	}); 
},
lfb_tabsActivate:function(poComp,poTab){if(!fext_grdSR(poComp.down("#grdLF"))){return false;} poTab.down("grid").getStore().load();},
lfb_tabsClean:function(poComp,pbPan,pbBool){var _mod=fext_CM("log.FichaWin");var _panLF=poComp.down("#panLF");
	if(pbPan){var _panLFD=poComp.down("#panLFD"); var _pagLFD=_panLFD.down("#pagLFD"); var _strLFD=_pagLFD.getStore();fext_gridClean(_strLFD,_pagLFD);_panLFD.down("form").loadRecord(_mod);_pagLFD.setDisabled(pbBool);
		_panLFD.down("#btnAdd").setDisabled(pbBool==true?true:fextpub_uamoBtn(_panLF.down("#opc_id"),1));_panLFD.down("#btnQuery").disable();_panLFD.down("#btnDelete").disable();}
	var _tabLFR=poComp.down("#tabLFR"); var _pagLFR=_tabLFR.down("#pagLFR"); var _strLFR=_pagLFR.getStore();fext_gridClean(_strLFR,_pagLFR);_pagLFR.disable();
	_tabLFR.down("#btnNew").disable();_tabLFR.down("#btnModify").disable();_tabLFR.down("#btnQuery").disable();_tabLFR.down("#btnDelete").disable();
},
lfb_plf_Clean:function(poComp){var _pag=poComp.down("#pagLF"); var _str=_pag.getStore(); fext_gridClean(_str,_pag);
	poComp.down("#btnModify").disable(); poComp.down("#btnQuery").disable(); poComp.down("#btnAnnular").disable(); poComp.down("#btnPrinter").disable();
	this.lfb_tabsClean(poComp.up("log_fichbrow"),true,true);
},
lfb_plf_ViewEdit:function(poComp,pcTE){Siace.app.getController("log.Fichas").lf_View({"comp":poComp,"type_edit":pcTE,"menu_id":poComp.up("panel").getMenuId(),"opc_id":pcTE,"year_id":poComp.down("#year_id").getValue()});},
lfb_plf_opc_idChange:function(cbo,newVal,oldVal,opt){cbo.up("panel").down("#btnNew").setDisabled(fextpub_uamoBtn(cbo,1));},
lfb_plf_btnNewClick:function(btn,e,opt){this.lfb_plf_ViewEdit(btn.up("#panLF"),1);},
lfb_plf_btnModifyClick:function(btn,e,opt){this.lfb_plf_ViewEdit(btn.up("#panLF"),2);},
lfb_plf_btnQueryClick:function(btn,e,opt){this.lfb_plf_ViewEdit(btn.up("#panLF"),3);},
lfb_plf_btnPrinterClick:function(btn,e,opt){var _panLF=btn.up("#panLF"); fext_CC("log.Pedidos").lp_Printer({comp:_panLF,menu_id:_panLF.up("panel").getMenuId()});},
lfb_plf_btnRejectClick:function(btn,e,opt){var _panLF=btn.up("#panLF"); if(fextpub_uamoBtn(_panLF.down("#opc_id"),45)){return false;}
	if(opt==undefined){var _rec=fext_grdSR(_panLF.down("#grdLF"));if(!_rec){return false;}
		Ext.Msg.confirm("Confirmación","¿Esta Ud. seguro de RECHAZAR el requerimiento seleccionado?",function(b){if(b=="yes"){
			fext_CC("log.PedidosPsw2"); var _win=fext_CW("log.PedidosPsw2");_win.setCallButton(btn);_win.setCallKey(_rec.data.ped_key);_win.setTitle("Rechazar Requerimiento ::.");_win.down("#subtitle").setValue(_rec.data.ped_documento); _win.down("#btnAccept").setText("Rechazar"); _win.down("#warning").setValue("Se va a RECHAZAR el requerimiento visualizado por seguridad debe digitar su clave de confirmación");_win.setFormType(45);_win.show();
		}});
	}else{var _win=opt.win; var _str=_panLF.down("#grdLF").getStore(); var _mi=_panLF.up("log_fichbrow").getMenuId();fext_mask(_panLF);
		Ext.Ajax.request({url:"php/logistics_pedidos_save_reject.php",params:{xx0005:"YES",xxPed_key:opt.key,xxUsur_psw2:opt.usur_psw2,xxPed_observ:opt.observ,xxMenu_id:_mi,vs:fext_JE(fextpub_sessVar())},
			success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){_win.close();_str.load({callback:function(rec){fext_unmask(_panLF);}});}else{fext_unmask(_panLF);fext_MsgE(_res.msg);}},failure:function(resp,opt){fext_unmask(_panLF);fext_MsgE(resp.responseText);}
		});
	}
},
lfb_plf_fechainiChange:function(datf,newVal,oldVal,opt){this.lfb_plf_Clean(datf.up("#panLF"));},
lfb_plf_fechafinChange:function(datf,newVal,oldVal,opt){this.lfb_plf_Clean(datf.up("#panLF"));},
lfb_plf_grdLFCellClick:function(cell,td,cellI,rec,tr,rowI,e,opt){var _pan=cell.up("log_fichbrow");/*_pan.down("#tab01").getActiveTab().down("grid").getStore().load();*/},
lfb_plf_grdLFSelectionChange:function(mod,rec,opt){if(rec.length==1){var _pan=mod.view.panel.up("log_fichbrow"); var _panLF=_pan.down("#panLF"); var _cboOI=_panLF.down("#opc_id"); var _flga=rec[0].data.fich_flga;
	_panLF.down("#btnModify").setDisabled(_flga==98?true:fextpub_uamoBtn(_cboOI,3));_panLF.down("#btnQuery").setDisabled(_flga==98?true:fextpub_uamoBtn(_cboOI,3));_panLF.down("#btnPrinter").setDisabled(_flga==98?true:fextpub_uamoBtn(_cboOI,8));
	this.lfb_tabsClean(_pan,true,false); _pan.down("#grdLFD").getStore().load();
	Ext.Ajax.request({method:"POST",url:"php/logistics_fichas_json_records.php",params:{xxFich_key:rec[0].data.fich_key,xxType_record:"win",xxOrder_by:"fich_key",ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},
		success:function(resp,opt){var _res=fext_DJ("",resp);var _mod=fext_CM("log.FichaWin");var _pan=_panLF.up("panel");var _panLFD=_pan.down("#panLFD");
			if(_res.success&&_res.data.length==1){_mod.set(_res.data[0]);}_panLFD.down("form").loadRecord(_mod);
		}
	});
}},
lfb_plf_fich_nroChange:function(txtf,newVal,oldVal,opt){this.lfb_plf_Clean(txtf.up("#panLF"));},
lfb_plf_fich_nroKeypress:function(txtf,e,opt){if(e.getCharCode()==13){txtf.up("#panLF").down("#grdLF").getStore().load();}},
lfb_plf_tipfich_idChange:function(cbo,newVal,oldVal,opt){if(oldVal!==undefined){this.lfb_plf_Clean(cbo.up("#panLF"));}},
lfb_plf_year_idChange:function(cbo,newVal,oldVal,opt){if(oldVal!==undefined){this.lfb_plf_Clean(cbo.up("#panLF"));}},
//lfb_plfd_Activate:function(comp,opt){this.lfb_tabsActivate(comp.up("log_fichbrow"),comp);},
lfb_plfd_ViewEdit:function(poComp,pcTE){var _pan=poComp.down("#panLF");if(fextpub_uamoBtn(_pan.down("#opc_id"),pcTE)){return false;} var _recLF=fext_grdSR(_pan.down("#grdLF")); if(!_recLF){return false;}
	if(fjsIn_array(pcTE,[2,3])){var _rec=fext_grdSR(poComp.down("#grdLFD"));if(!_rec){return false;}}
	fext_CC("log.Fichas_DetEdit");var _win=fext_CW("log.Fichas_DetEdit");_win.setTypeEdit(pcTE);_win.setCallStore(poComp.down("#grdLFD").getStore());
	if(fjsIn_array(pcTE,[2,3])){_win.setCallKey(_rec.data.fichdet_key);}_win.down("#fich_key").setValue(_recLF.data.fich_key);_win.setMenuId(poComp.getMenuId());_win.show();
},
lfb_plfd_btnAddClick:function(btn,e,opt){var _pan=btn.up("log_fichbrow");if(fextpub_uamoBtn(_pan.down("#panLF").down("#opc_id"),1)){return false;}var _recLF=fext_grdSR(_pan.down("#grdLF"));if(!_recLF){return false;}
	fext_CC("log.Fichas_DetAdd");var _win=fext_CW("log.Fichas_DetAdd");_win.setCallWindow(_pan);_win.down("#menu_id").setValue(_pan.getMenuId());_win.down("#fich_key").setValue(_recLF.data.fich_key);_win.show();
},
lfb_plfd_btnDeleteClick:function(btn,e,opt){var _pan=btn.up("log_fichbrow");_panLFD=_pan.down("#panLFD");if(fextpub_uamoBtn(_pan.down("#panLF").down("#opc_id"),10)){return false;}var _rec=fext_grdSR(_panLFD.down("grid"));if(!_rec){return false;}var _me=this;
	Ext.Msg.confirm("Confirmación","¿Esta Ud. seguro de ELIMINAR el Registro de Alta seleccionado?",function(b){if(b=="yes"){var _str=_panLFD.down("grid").getStore();fext_mask(_panLFD);
		Ext.Ajax.request({url:"php/logistics_fichas_det_delete.php",params:{xx0007:"YES",xxType_edit:7,xxFichdet_key:_rec.data.fichdet_key,xxMenu_id:_pan.getMenuId(),vs:fext_JE(fextpub_sessVar())},
			success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){_str.load({callback:function(rec){btn.disable();_me.lfb_tabsClean(_pan,false,true);fext_unmask(_panLFD);}});}else{fext_unmask(_panLFD);fext_MsgE(_res.msg);}},failure:function(resp,opt){fext_unmask(_panLFD);fext_MsgE(resp.responseText);}
		});
	}});
},
lfb_tlfd_grdLFDAdd:function(poComp,poR){var _str=poComp.down("#grdLPD").getStore(); var _mod=_str.findRecord("tablex_key",poR.data.saldet_key); var _close=false;
	if(_mod==null){_strLPD.add({peddet_item:poComp.down("#peddet_item").getValue(),bs_key:poRec.data.bs_key,bs_codigo:poRec.data.bs_codigo,bs_nombre:poRec.data.bs_nombre,unimed_abrev:poRec.data.unimed_abrev,espedet_id:poP["espedet_id"],espedet_codigo:poP["espedet_codigo"],peddet_detalle: poP["detalle"],peddet_cantid: poP["cantid"],peddet_preuni:poP["preuni"],peddet_pretot:poP["pretot"]});
		this.lpe_tlp_grdLPTFEdit(poComp,poP); _close=true; this.lpe_tlp_ped_montoUpdate(poComp, poP["pretot"]);
	}else{fext_MsgA("Item seleccionado ya se encuentra establecido en la Ficha de Registro");}
	return _close;
},
lfb_plfd_grdLFDCellClick:function(cell,td,cellI,rec,tr,rowI,e,opt){var _pan=cell.up("log_fichbrow");_pan.down("#grdLFR").getStore().load();},
lfb_plfd_grdLFDSelectionChange:function(mod,rec,opt){if(rec.length==1){var _pan=mod.view.panel.up("log_fichbrow");var _panLFD=_pan.down("#panLFD");var _tabLFR=_pan.down("#tabLFR");var _cboOI=_pan.down("#panLF").down("#opc_id");
	_panLFD.down("#btnDelete").setDisabled(fextpub_uamoBtn(_cboOI,10));
	_tabLFR.down("#pagLFR").enable();_tabLFR.down("#btnNew").setDisabled(fextpub_uamoBtn(_cboOI,1));
}},

lfb_tlfr_ViewEdit:function(poComp,pcTE){var _recLFD=fext_grdSR(poComp.down("#grdLFD"));if(!_recLFD){return false;}
	if(fjsIn_array(pcTE,[2,3])){var _rec=fext_grdSR(poComp.down("#grdLFR"));if(!_rec){return false;}}
	fext_CC("log.Fichas_Registros").lfr_View({comp:poComp,TE:pcTE,mi:poComp.getMenuId(),oi:pcTE,fdk:_recLFD.data.fichdet_key});
},
lfb_tlfr_btnNewClick:function(btn,e,opt){this.lfb_tlfr_ViewEdit(btn.up("log_fichbrow"),1);},
lfb_tlfr_btnModifyClick:function(btn,e,opt){this.lfb_tlfr_ViewEdit(btn.up("log_fichbrow"),2);},
lfb_tlfr_btnQueryClick:function(btn,e,opt){this.lfb_tlfr_ViewEdit(btn.up("log_fichbrow"),3);},
lfb_tlfr_btnDeleteClick:function(btn,e,opt){var _pan=btn.up("log_fichbrow");_tabLFR=_pan.down("#tabLFR");if(fextpub_uamoBtn(_pan.down("#panLF").down("#opc_id"),10)){return false;}var _rec=fext_grdSR(_tabLFR.down("grid"));if(!_rec){return false;}var _me=this;
	if(opt==undefined){
		Ext.Msg.confirm("Confirmación","¿Esta Ud. seguro de ELIMINAR el registro patrimonial seleccionado?",function(b){if(b=="yes"){fext_CC("pub.UsuariosPsw2");var _win=fext_CW("pub.UsuariosPsw2");
			_win.setCallButton(btn);_win.setCallKey(_rec.data.fichreg_key);_win.down("#subtitle").setValue(_rec.data.fichreg_codigo);_win.setFormType(7);_win.show();
		}});
	}else{var _win=opt.win;fext_mask(_tabLFR);
		Ext.Ajax.request({url:"php/logistics_fichas_registros_delete.php",params:{xx0010:"YES",xxType_edit:"10",xxFichreg_key:opt.key,xxUsur_psw2:opt.usur_psw2,xxFichreg_observ:opt.observ,xxMenu_id:_pan.getMenuId(),vs:fext_JE(fextpub_sessVar())},
			success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){_win.close();_win.down("#grdLFR").getStore().load({callback:function(rec){fext_unmask(_tabLFR);}});}else{fext_unmask(_tabLFR);fext_MsgE(_res.msg);}},failure:function(resp,opt){fext_unmask(_tabLFR);fext_MsgE(resp.responseText);}
		});
	}
},
lfb_tlfr_grdLFRSelectionChange:function(mod,rec,opt){if(rec.length==1){var _pan=mod.view.panel.up("log_fichbrow");var _tabLFR=_pan.down("#tabLFR");var _cboOI=_pan.down("#panLF").down("#opc_id");
	_tabLFR.down("#btnModify").setDisabled(fextpub_uamoBtn(_cboOI,2));_tabLFR.down("#btnQuery").setDisabled(fextpub_uamoBtn(_cboOI,3));_tabLFR.down("#btnDelete").setDisabled(fextpub_uamoBtn(_cboOI,10));
}},
});