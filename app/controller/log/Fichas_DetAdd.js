Ext.define("Siace.controller.log.Fichas_DetAdd",{extend:"Ext.app.Controller",views:["log.Fichas_DetAdd"],
init:function(application){this.control({
"log_fichdeadd":{beforerender:this.lfda_BeforeRender},"log_fichdeadd #btnAccept":{click:this.lfda_btnAcceptClick},"log_fichdeadd #btnCancel":{click:this.lfda_btnCancelClick},"log_fichdeadd #grdLSD":{selectionchange:this.lfda_grdLSDSelectionchange}
});},
lfda_BeforeRender:function(comp,opt){var _me=this;
	Ext.Ajax.request({method:"POST",url:"php/logistics_fichas_json_records.php",params:{xxFich_key:comp.down("#fich_key").getValue(),xxType_record:"winLFDA",vs:fext_JE(fextpub_sessVar())},
		success:function(resp,opt){var _res=fext_DJ("",resp);var _mod=fext_CM("log.FichaWLFDA");if(_res.success&&_res.data.length==1){var _dat=_res.data[0];_mod.set(_dat);comp.down("#panLF").down("form").loadRecord(_mod);comp.down("#tablex").setValue(_dat.tablex);_me.lfda_grdLSDLoad(comp);}}
	});
},
lfda_btnAcceptClick:function(btn,e,opt){var _win=btn.up("window");var _frm=_win.down("#panBTUA").down("form");var _wc=_win.getCallWindow();var _rec=fext_grdSR(_win.down("grid"));if(!_rec){return false;}
	var _str=_wc.down("#grdLFD").getStore(); var _mod=_str.findRecord("tablex_key",_rec.data.saldet_key); if(_mod!==null){return false;}
	if(!_frm.getForm().isValid()){return false;}
	_frm.getForm().submit({method:"POST",url:"php/logistics_fichas_det_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxFichdet_key:_win.getCallKey(),xxTablex_key:_rec.data.saldet_key,vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){var _res=fext_DJ(act);if(_res.success){_wc.down("#grdLFD").getStore().load();_win.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
	});
},
lfda_btnCancelClick:function(btn,e,opt){var _win=btn.up("window"); _win.close();},
lfda_grdLSDLoad:function(comp){var _grd=comp.down("#grdLSD");var _pag=comp.down("#pagLSD");
	var _str=fext_CS("log.Salidas_DetLFDA");_grd.bindStore(_str);_str.sort("bs_nombre","ASC");
	_str.on("beforeload",function(str,oper,opt){comp.down("#btnAccept").disable();var _prx=str.getProxy();
		_prx.setExtraParam("xxTablex",comp.down("#tablex").getValue());_prx.setExtraParam("xxTablex_key",comp.down("#fich_key").getValue());_prx.setExtraParam("xxType_record","grdLFDA");
	});_str.load()
},
lfda_grdLSDSelectionchange:function(mod,rec,opt){if(rec.length==1){var _win=mod.view.panel.up("window"); _win.down("#btnAccept").enable();}},
});