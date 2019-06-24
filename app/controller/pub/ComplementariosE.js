Ext.define("Siace.controller.pub.ComplementariosEdit",{extend:"Ext.app.Controller",views:["pub.ComplementariosEdit"],
init:function(application){this.control({"pub_compledit":{beforeshow:this.pce_BeforeShow},"pub_compledit #btnSave":{click:this.pce_btnSaveClick},"pub_compledit #btnUndo":{click:this.pce_btnUndoClick},"pub_compledit #btnExit":{click:this.pce_btnExitClick}});},
pce_BeforeShow:function(comp,opt){var _TE=comp.getTypeEdit();var _frm=comp.down("form");
	if(_TE==1){var _icon="icon_New_90";var _title="Nueva Registro Complementario ::.";}
	else if(fjsIn_array(_TE,[2,3])){
		_frm.load({method:"POST",url:"php/public_complementarios_json_records.php",waitMsg:"Loading...",params:{xxCompl_key:comp.getCallKey(),xxType_record:"frm"},success:function(frm,act){try{var _mod=fext_CM("pub.ComplementarioEdit");var _res=fext_DJ(act);if(_res.data[0]){_mod.set(_res.data[0]);_frm.loadRecord(_mod);}}catch(x){fext_MsgC(x.Message);}},failure:function(frm,act){fext_MsgFL(act);}});
		if(_TE==2){var _icon="icon_Modify_90"; var _title="Modificar Registro Complementario ::.";}
		else{var _icon="icon_Query_90";var _title="Consulta de Registro Complementario ::.";comp.down("#compl_nombre").disable();comp.down("#compl_abrev").disable();comp.down("#compl_observ").disable();comp.down("#btnSave").disable();comp.down("#btnUndo").disable();comp.down("#btnExit").enable();}
	}
	comp.setIconCls(_icon); comp.setTitle(_title);
},
pce_btnSaveClick:function(btn,e,opt){var _win=btn.up("window");var _frm=_win.down("form");
	if(_win.down("#compl_nombre").getValue()==""){fext_MsgA("Debe indicar el Nombre del Registro Complementario",_win.down("#compl_nombre"));return false;}
	if(!_frm.getForm().isValid()){return false}
	_frm.getForm().submit({method:"POST",url:"php/public_complementarios_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxCompl_key:_win.getCallKey(),xxMenu_id:_win.getMenuId(),vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_win.getCallStore()!==null){_win.getCallStore().load();}_win.close();}else{fext_msgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
	});
},
pce_btnUndoClick:function(btn,e,opt){btn.up("window").close();},
pce_btnExitClick:function(btn,e,opt){btn.up("window").close();}
});