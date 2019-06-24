Ext.define("Siace.controller.log.FichasEdit",{extend:"Ext.app.Controller",stores:["array.log.TipFichLFE","array.DocFicha","array.Years"],views:["log.FichasEdit"],
init:function(application){this.control({
"log_fichedit":{beforeshow:this.lfe_BeforeShow},"log_fichedit #btnSave":{click:this.lfe_btnSaveClick},"log_fichedit #btnUndo":{click:this.lfe_btnUndoClick},"log_fichedit #btnExit":{click:this.lfe_btnExitClick},
"log_fichedit #tablex_nro":{blur:this.lfe_tablex_nroBlur,focus:this.lfe_tablex_nroFocus,keypress:this.lfe_tablex_nroKeypress},
"log_fichedit #tipfich_id":{change:this.lfe_tipfich_idChange}
});},
lfe_BeforeShow:function(comp,opt){var _TE=comp.getTypeEdit();var _frm=comp.down("form");var _vs=fextpub_sessVar();
	if(_TE==1){var _icon="icon_New_90";var _title="Nueva Ficha de Registro atrimonial ::.";comp.down("#fich_fecha").setValue(fjsDateCurrent("")); comp.down("#tipfich_id").setValue(11); fextpub_yearsValue(comp.down("#year_id"),0);}
	else if(fjsIn_array(_TE,[2,3])){
		_frm.load({method:"POST", url:"php/logistics_fichas_json_records.php",waitMsg:"Loading...",params:{xxFich_key:comp.getCallKey(),xxType_record:"frm",ssNO_USK:"NoT",vs:Ext.JSON.encode(_vs)},
			success:function(frm,act){try{var _mod=fext_CM("log.FichaEdit");var _res=fext_DJ(act);var _dat=_res.data[0];if(_dat){_mod.set(_dat);_frm.loadRecord(_mod);comp.down("#year_id").setValue(_dat.tablex_year*1);comp.down("#tablex_nro").setValue(_dat.tablex_nro);comp.down("#expe_nro").setValue(_dat.expe_nro);}}catch(x){fext_MsgC(x);}},failure:function(frm,act){fext_MsgFL(act);}
		});
		if(_TE=="2"){var _icon="icon_Modify_90";var _title="Modificar Ficha de Registro Patrimonial ::.";}
		else{var _icon="icon_Query_90";var _title="Consulta Ficha de Registro Patrimonial ::.";
			comp.down("#tipfich_id").disable();comp.down("#year_id").disable();comp.down("#tablex_nro").disable();
			comp.down("#btnSave").disable(); comp.down("#btnUndo").disable(); comp.down("#btnExit").enable();
		}
	}
	comp.setIconCls(_icon); comp.setTitle(_title);
},
lfe_btnSaveClick:function(btn,e,opt){var _win=btn.up("window");var _frm=_win.down("form");
	if(Ext.isEmpty(_win.down("#tablex_key").getValue())){fext_MsgA("Debe indicar el documento de Referencia");return false;}
	if(!_frm.getForm().isValid()){return false}
	_frm.getForm().submit({method:"POST",url:"php/logistics_fichas_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxFich_key:_win.getCallKey(),xxFich_fecha:_win.down("#fich_fecha").getSubmitValue(),xxTipfich_id:_win.down("#tipfich_id").getValue(),xxMenu_id:_win.getMenuId(),vs:fext_JE(fextpub_sessVar())},
		//success:function(frm,act){var _res=fext_DJ(act);if(_res.success&&_win.getTypeEdit()==1){fext_CC("log.SalidasOK");var _winF=fext_CW("log.SalidasOK");_winF.setCallKey(_res.key);_winF.setCallStore(_win.getCallStore());_winF.setMenuId(_win.getMenuId());_winF.down("#btnNew").disable();_winF.down("#btnAccept").setVisible(false); _winF.down("#btnCancel").setVisible(false);_winF.down("#btnPrinter").setVisible(true);_winF.down("#btnExit").setVisible(true);_win.close();_winF.show();if(_win.getCallStore()!==null){_win.getCallStore().load();}_win.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
		success:function(frm,act){var _res=fext_DJ(act);if(_res.success&&_win.getTypeEdit()==1){fext_CC("log.FichasOK");var _winF=fext_CW("log.FichasOK");_winF.setCallKey(_res.key);_winF.setCallStore(_win.getCallStore());_winF.setMenuId(_win.getMenuId());_winF.down("#btnNew").disable();_winF.down("#btnAccept").setVisible(false);_winF.down("#btnCancel").setVisible(false);_winF.down("#btnExit").setVisible(true);_win.close();_winF.show();}else if(_res.success){if(_win.getCallStore()!==null){_win.getCallStore().load();}_win.close();}},failure:function(frm,act){fext_MsgFS(act);}
	});
},
lfe_btnUndoClick:function(btn,e,opt){btn.up("window").close();},
lfe_btnExitClick:function(btn,e,opt){btn.up("window").close();},
lfe_tablexClean: function(poCom){poCom.down("#tablex_key").setValue(""); poCom.down("#tablex_fecha").setValue(""); poCom.down("#expe_nro").setValue("");},
lfe_tablexSearch:function(poCom){if(!fjsIn_array(poCom.getTypeEdit(),[1,2])){return false;}
	if(fext_IE(poCom.down("#tablex_doc"))||poCom.down("#tablex_doc").getValue()*1<=0){this.lfe_tablexClean(poCom);return false;}
	if(fext_IE(poCom.down("#tablex_nro"))||poCom.down("#tablex_nro").getValue()*1<=0){this.lfe_tablexClean(poCom);return false;}fext_mask(poCom);var _me=this;
	Ext.Ajax.request({method:"POST",url:"php/logistics_fichas_json_records_for_heritage.php",params:{xxYear_id:poCom.down("#year_id").getValue(),xxTablex_doc:poCom.down("#tablex_doc").getValue(),xxTablex_nro:poCom.down("#tablex_nro").getValue(),xxType_record:"edit",xxMenu_id:poCom.getMenuId(),ssNO_USK:"NoT",vs:Ext.JSON.encode(fextpub_sessVar())},
		success:function(resp){var _res=fext_DJ("",resp);var _dat=_res.data[0];if(_res.subtotal==1){poCom.down("#tablex_key").setValue(_dat.tablex_key);poCom.down("#tablex_fecha").setValue(_dat.tablex_fecha);poCom.down("#expe_nro").setValue(_dat.expe_nro*1>0?_dat.expe_nro:"");}else{_me.lfe_tablexClean(poCom);}fext_unmask(poCom);},
		failure:function(resp){_me.lfe_tablexClean(poCom);fext_unmask(poCom);}
	});
},
lfe_tablex_nroBlur:function(txtf,The,opt){if(txtf.getValue()*1>0){txtf.setValue(fjsLpad(txtf.getValue(),6,0));}
	if(txtf.getValue()*1!=txtf.up("window").down("#TABLEX_NRO").getValue()*1){this.lfe_tablexSearch(txtf.up("window"));}
},
lfe_tablex_nroFocus:function(txtf,The,opt){txtf.up("window").down("#TABLEX_NRO").setValue(txtf.getValue());},
lfe_tablex_nroKeypress:function(txtf,e,opt){if(e.getCharCode()==13){if(txtf.getValue()*1>0){txtf.setValue(fjsLpad(txtf.getValue(),6,0));}txtf.up("window").down("#TABLEX_NRO").setValue(txtf.getValue());this.lfe_tablexSearch(txtf.up("window"));}},
lfe_tipfich_idChange:function(cbo,newVal,oldVal,opt){var _str=cbo.getStore();var _i=_str.find("tipfich_id",newVal);var _rec=_str.getAt(_i);var _win=cbo.up("window");_win.down("#tablex_doc").setValue(_rec.data.doc_id*1);}
});