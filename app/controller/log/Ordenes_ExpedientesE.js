Ext.define("Siace.controller.log.Ordenes_ExpedientesE",{extend:"Ext.app.Controller",views:["log.Ordenes_ExpedientesE"],
init:function(application){this.control({
"log_ordenexpee":{beforeshow:this.loee_BS},"log_ordenexpee #btnSave":{click:this.loee_btnSav},"log_ordenexpee #btnUndo":{click:this.loee_btnExt},"log_ordenexpee #btnExit":{click:this.loee_btnExt}
});},
loee_BS:function(comp,opt){var _TE=comp.getTE();var _frm=comp.down("form");var _me=this;
	_frm.load({method:"POST",url:"php/logistics_ordenes_json_records.php",waitMsg:"Loading...",params:{xxOrden_key:fext_GV(comp,"orden_key"),xxType_record:"frmExpediente",xxMenu_id:comp.getMI(),ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){try{var _mod=fext_CM("log.OrdenLOEE");var _res=fext_DJ(act);var _dat=_res.data[0];if(_dat){_mod.set(_dat);_frm.loadRecord(_mod);}}catch(x){fext_MsgC(x.Message);}}
	});
	if(_TE==1){var _ico="icon_Vobo_90";var _tit="Registro de SIAF ::.";}else if(fjsIn_array(_TE,[2])){var _ico="icon_Modify_90";var _tit="Modificar Registro SIAF ::.";}
	comp.setIconCls(_ico); comp.setTitle(_tit);
},
loee_btnSav:function(btn,e,opt){var _w=btn.up("window");var _frm=_w.down("form");
	if(_w.getTE()==1&&(fext_IE(_w,"expe_nro")||fext_GV(_w,"expe_nro")*1<=0)){fext_MsgA("Debe indicar el Número de SIAF",_w.down("#expe_nro"));return false;}if(!_frm.getForm().isValid()){return false;}
	Ext.Msg.confirm(trnslt.cnf,"¿Esta Ud. seguro de agregar el Numero de SIAF a la Orden seleccionada?",function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/logistics_ordenes_expedientes_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxType_edit:_w.getTE(),xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!=null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
},
loee_btnExt:function(btn,e,opt){btn.up("window").close();}
});