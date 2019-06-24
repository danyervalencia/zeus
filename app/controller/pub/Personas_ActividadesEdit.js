Ext.define("Siace.controller.pub.Personas_ActividadesEdit",{extend:"Ext.app.Controller",views:["pub.Personas_ActividadesEdit"],
init:function(application){this.control({
"pub_persactivedit":{beforeshow:this.ppae_BeforeShow},"pub_persactivedit #btnSave":{click:this.ppae_btnSaveClick},"pub_persactivedit #btnUndo":{click:this.ppae_btnUndoClick},"pub_persactivedit #btnExit":{click:this.ppae_btnExitClick},
"pub_persactivedit #persactiv_estado":{change:this.ppae_persactiv_estadoChange}
});},
ppae_BeforeShow:function(comp,opt){var _TE=comp.getTypeEdit(); var _frm=comp.down("#frmPPA");
	Ext.Ajax.request({method:"POST",url:"php/public_personas_json_records.php",params:{xxPers_key:comp.down("#pers_key").getValue(),xxType_record:"winPPFE"},success:function(resp,opt){var _res=Siace.util.Util.decodeJSON(resp.responseText); var _mod=Ext.create("Siace.model.pub.PersonaWPPFE");if(_res.success&&_res.data.length==1){var _dat=_res.data[0]; _mod.set(_dat); comp.down("#panPP").down("form").loadRecord(_mod);}}});
	if(_TE==1){var _icon="icon_New_90";var _title="Nuevo Registro de Actividad ::.";fextpub_activFilt({obj:comp.down("#activ_key"),setVal:false});}
	else if(fjsIn_array(_TE,[2,3])){
		_frm.load({method:"POST",url:"php/public_personas_actividades_json_records.php",waitMsg:"Loading...",params:{xxPersactiv_key:comp.getCallKey(), xxType_record:"form"},
			success:function(frm,act){try{var _mod=fext_CM("pub.Persona_ActividadEdit"); var _res=fext_DJ(act); var _dat=_res.data[0];if(_dat){_mod.set(_dat); _frm.loadRecord(_mod); fextpub_activFilt({obj:comp.down("#activ_key"),val:_dat.activ_key,dsb:(_TE ==3?true:false)});comp.down("#persactiv_estado").setValue(_dat.persactiv_estado==1?true:false);}}catch(x){fext_MsgC(x.Message);}},failure:function(frm,act){fext_MsgFL(act);}
		});
		if(_TE==2){var _icon="icon_Modify_90";var _title="Modificación Registro de Actividad ::.";}
		else{var _icon="icon_Query_90";var _title="Consulta Registro de Actividad ::.";comp.down("#activ_key").disable();comp.down("#persactiv_estado").disable();comp.down("#persactiv_observ").disable();comp.down("#btnSave").disable();comp.down("#btnUndo").disable();comp.down("#btnExit").enable();}
	}
	comp.setIconCls(_icon);comp.setTitle(_title);
},
ppae_btnSaveClick:function(btn,e,opt){var _win=btn.up("window");var _frm=_win.down("#frmPPA");if(!_frm.getForm().isValid()){return false;}
	_frm.getForm().submit({method:"POST",url:"php/public_personas_actividades_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxPersactiv_key:_win.getCallKey(),xxMenu_id:_win.getMenuId(),vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_win.getCallStore()!==null){_win.getCallStore().load();}_win.close();}else{fext_NsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
	});
},
ppae_btnUndoClick:function(btn,e,opt){btn.up("window").close();},
ppae_btnExitClick:function(btn,e,opt){btn.up("window").close();},
ppae_persactiv_estadoChange:function(chk,newVal,oldVal,opt){fext_removeAddCls(chk.up("window").down("#lblPersactiv_estado"),newVal==true?"lbl00303":"lbl00003",newVal==true?"lbl00003":"lbl00303");}
});