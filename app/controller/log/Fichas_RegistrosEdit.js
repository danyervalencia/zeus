Ext.define("Siace.controller.log.Fichas_RegistrosEdit",{extend:"Ext.app.Controller",views:["log.Fichas_RegistrosEdit"],
init:function(application){this.control({
"log_fichregedit":{beforerender:this.lfre_BeforeRender},"log_fichregedit #btnSave":{click:this.lfre_btnSaveClick},"log_fichregedit #btnUndo":{click:this.lfre_btnUndoClick},"log_fichregedit #btnExit":{click:this.lfre_btnExitClick},
"log_fichregedit #fichreg_patri":{blur:this.lfre_fichreg_patriBlur},"log_fichregedit #marc_key":{change:this.lfre_marc_keyChange},
});},
lfre_BeforeRender:function(comp,opt){var _TE=comp.getTypeEdit();var _panLFD=comp.down("#panLFD");var _panLFR=comp.down("#panLFR");var _cboM=comp.down("#marc_key");var _cboMO=comp.down("#mod_key");var _cboY=comp.down("#year_id");var _cboC=comp.down("#colr_id");var _me=this;
	_cboM.bindStore(fext_CS("pub.Bienes_Servs_Clases_MarcasCbo"));_cboMO.bindStore(fext_CS("pub.ModelosCbo"));
	_cboC.bindStore(fext_CS("pub.ColoresCbo"));_cboC.getStore().load({params:{xxType_record:"cboId",xxOrder_by:"colr_nombre",xxAdd_blank:"YES"}});
	_cboY.bindStore(fext_CS("pub.YearsCbo"));_cboY.getStore().load({params:{xxType_record:"combo",xxOrder_by:"year_code",xxAdd_blank:"YES"}});
	Ext.Ajax.request({method:"POST",url:"php/logistics_fichas_det_json_records.php",params:{xxFichdet_key:comp.down("#fichdet_key").getValue(),xxType_record:"winLFRE",ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},
		success:function(resp,opt){var _res=fext_DJ("",resp);var _mod=fext_CM("log.Ficha_DetWLFRE");var _dat=_res.data[0];if(_res.success&&_res.data.length==1){_mod.set(_dat);_panLFD.down("form").loadRecord(_mod);comp.down("#bsf_codigo").setValue(_dat.bsf_codigo);if(_TE==1){_cboM.getStore().load({params:{xxBsc_id:_dat.bsc_id,xxType_record:"cboMarcas",xxOrder_by:"marc_nombre",xxAdd_blank:"YES"}});comp.setFiltMO(true);}else{_me.lfre_LD(comp,_dat.bsc_id)}}}
	});

	if(_TE==1){var _icon="icon_New_90";var _title="Nuevo Registro Patrimonial ::.";}
	else if(_TE==2){var _icon="icon_Modify_90";var _title="Modificar Registro Patrimonial ::.";}
	else{var _icon="icon_Query_90";var _title="Consulta de Registro Patrimonial ::.";
		comp.down("#fichreg_patri").disable();comp.down("#marc_key").disable();comp.down("#mod_key").disable();comp.down("#fichreg_serie").disable();comp.down("#year_id").disable();comp.down("#colr_id").disable();comp.down("#fichreg_largo").disable();comp.down("#fichreg_ancho").disable();comp.down("#fichreg_alto").disable();comp.down("#fichreg_observ").disable();comp.down("#btnSave").disable();comp.down("#btnUndo").disable(); comp.down("#btnExit").enable();
	}
	comp.setIconCls(_icon);comp.setTitle(_title);
},
lfre_LD:function(comp,pcBsc_id){var _frm=comp.down("#panLFR").down("form");var _cboM=comp.down("#marc_key");var _me=this;
	_frm.load({method:"POST",url:"php/logistics_fichas_registros_json_records.php",waitMsg:"Loading...",params:{xxFichreg_key:comp.getCallKey(),xxType_record:"frm",ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){try{var _mod=fext_CM("log.Ficha_RegistroEdit");var _res=fext_DJ(act);var _dat=_res.data[0];if(_dat){_mod.set(_dat);_frm.loadRecord(_mod);comp.down("#year_id").setValue(_dat.year_id*1);_cboM.getStore().load({params:{xxBsc_id:pcBsc_id,xxType_record:"cboMarcas",xxOrder_by:"marc_nombre",xxAdd_blank:"YES"},callback:function(rec){_cboM.setValue(_dat.marc_key);_me.lfre_mod_keyLD(comp.down("#mod_key"),_dat.marc_key,_dat.mod_key);if(comp.getTypeEdit()==2){comp.setFiltMO(true);}}});}}catch(x){fext_MsgC(x);}},failure:function(frm,act){fext_MsgFL(act);}
	});
},
lfre_Clean:function(poComp){var _pag=poComp.down("#pagPBS");var _str=_pag.getStore();fext_gridClean(_str,_pag);
	poComp.down("#btnSave").disable(); poComp.down("#tabLO").disable(); poComp.down("#espedet_id").getStore().removeAll(); poComp.down("#espedet_id").setValue("");
},
lfre_btnSaveClick:function(btn,e,opt){var _win=btn.up("window");var _frm=_win.down("#panLFR").down("form");if(!_frm.getForm().isValid()){return false;}
	Ext.Msg.confirm(trnslt.cnf,trnslt.msg_qst_save,function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/logistics_fichas_registros_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxFichreg_key:_win.getCallKey(),xxBsf_id:_win.down("#bsf_id").getValue(),xxMenu_id:_win.getMenuId(),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_win.getCallStore()!==null){_win.getCallStore().load();}_win.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
},
lfre_btnUndoClick:function(btn,e,opt){var _win=btn.up("window");_win.hide();},
lfre_btnExitClick:function(btn,e,opt){var _win=btn.up("window");_win.hide();},
lfre_fichreg_patriBlur:function(txtf,the,opt){if(txtf.getValue()*1>0){txtf.setValue(fjsLpad(txtf.getValue(),4,0));}},
lfre_marc_keyChange:function(cbo,newVal,oldVal,opt){var _win=cbo.up("window");if(_win.getFiltMO()){this.lfre_mod_keyLD(_win.down("#mod_key"),newVal,"");}},
lfre_mod_keyLD:function(cbo,pcMK,pcMOK){var _win=cbo.up("window");
	if(pcMK==""){cbo.getStore().removeAll();cbo.setValue("");}else{cbo.getStore().load({params:{xxType_record:"cbo",xxBsf_id:_win.down("#bsf_id").getValue(),xxMarc_key:pcMK,xxOrder_by:"mod_nombre",xxAdd_blank:"YES"},callback:function(rec){cbo.setValue(pcMOK);}});}
}
});