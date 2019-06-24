Ext.define("Siace.controller.log.Ordenes_NotificacionesE",{extend:"Ext.app.Controller",views:["log.Ordenes_NotificacionesE"],
init:function(application){this.control({
"log_ordennotife":{beforeshow:this.lone_BeforeShow},"log_ordennotife #btnSave":{click:this.lone_btnSaveClick},"log_ordennotife #btnUndo":{click:this.lone_btnUndoClick},"log_ordennotife #btnExit":{click:this.lone_btnExitClick}
});},
lone_BeforeShow:function(comp,opt){var _TE=comp.getTE();var _frm=comp.down("form");var _vs=fextpub_sessVar();var _me=this;
	_frm.load({method:"POST",url:"php/logistics_ordenes_json_records.php",waitMsg:"Loading...",params:{xxOrden_key:fext_GV(comp,"orden_key"),xxType_record:"frmExpediente",xxMenu_id:comp.getMI(),ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){try{var _mod=fext_CM("log.OrdenLOEE");var _res=fext_DJ(act);if(_res.data[0]){_mod.set(_res.data[0]);_frm.loadRecord(_mod);}}catch(x){fext_MsgC(x.Message);}}
	});
	if(fjsIn_array(_TE,[1])){var _ico="icon_Date_add_90";var _tit="Notificar Orden a Proveedor ::.";}
	comp.setIconCls(_ico);comp.setTitle(_tit);
},
lone_btnSaveClick:function(btn,e,opt){var _w=btn.up("window");var _frm=_w.down("form");
	if(fext_IE(_w,"orden_key")){fext_msgA("Error de sistema no se ha establecido la Orden");return false;}
	if(!_w.down("#ordennotif_fecha").isValid()){fext_MsgA("Debe indicar la Fecha de Notificación",_w.down("#ordennotif_fecha"));return false;}if(!_frm.getForm().isValid()){return false;}
	Ext.Msg.confirm(trnslt.cnf,"¿Esta Ud. seguro de Notificar la Proveedor?",function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/logistics_ordenes_notificaciones_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxType_edit:_w.getTE(),xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!==null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
},
lone_btnUndoClick:function(btn,e,opt){btn.up("window").close();},
lone_btnExitClick:function(btn,e,opt){btn.up("window").close();}
});