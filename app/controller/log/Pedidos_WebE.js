Ext.define("Siace.controller.log.Pedidos_WebE",{extend:"Ext.app.Controller",views:["log.Pedidos_WebE"],
init:function(application){this.control({
"log_pedwebe":{beforeshow:this.lpwe_BeforeShow},"log_pedwebe #btnSave":{click:this.lpwe_btnSaveClick},"log_pedwebe #btnUndo":{click:this.lpwe_btnUndoClick},"log_pedwebe #btnExit":{click:this.lpwe_btnExitClick},
"log_pedwebe #pedweb_estado":{change:this.lpwe_pedweb_estadoChange}
});},
lpwe_BeforeShow:function(comp,opt){var _TE=comp.getTE();var _frm=comp.down("form");var _vs=fextpub_sessVar();var _me=this;
	_frm.load({method:"POST",url:"php/logistics_pedidos_json_records.php",waitMsg:"Loading...",params:{xxPed_key:fext_GV(comp,"ped_key"),xxType_record:"frmWeb",xxMenu_id:comp.getMI(),ssNO_USK:"NoT",vs:fext_JE(_vs)},success:function(frm,act){try{var _mod=fext_CM("log.PedidoLPWE");var _res=fext_DJ(act);if(_res.data[0]){_mod.set(_res.data[0]);_frm.loadRecord(_mod);}}catch(x){fext_MsgC(x.Message);}}});
	if(fjsIn_array(_TE,[1])){var _ico="icon_Vobo_90";var _tit="Publicar Requerimiento en la Web ::.";}
	else if(fjsIn_array(_TE,[2,3])){
		_frm.load({method:"POST", url:"php/logistics_pedidos_web_json_records.php",waitMsg:"Loading...",params:{xxPedweb_key:comp.getCK(),xxType_record:"frm",vs:fext_JE(_vs)},
			success:function(frm,act){try{var _mod=fext_CM("log.Pedido_WebE");var _res=fext_DJ(act);if(_res.data[0]){_mod.set(_res.data[0]);_frm.loadRecord(_mod);fext_SV(comp,"pedweb_estado",_mod.data.pedweb_estado==1?true:false);}}catch(x){fext_MsgC(x.Message);}},failure:function(frm,act){fext_MsgFL(act);}
		});
		if(_TE==2){var _ico="icon_Modify_90";var _tit="Modificar Publicación Web de Requerimiento ::.";}
		else{var _ico="icon_Query_90";var _tit="Consulta Publicación Web de Requerimiento ::.";fext_Dsb(comp,"",["pedweb_fechaini","pedweb_fechafin","pedweb_observ","pedweb_estado","btnSave","btnUndo"]);comp.down("#btnExit").enable();}
	}
	comp.setIconCls(_ico); comp.setTitle(_tit);
},
lpwe_btnSaveClick:function(btn,e,opt){var _w=btn.up("window");var _frm=_w.down("form");if(!_frm.getForm().isValid()){return false;}
	Ext.Msg.confirm(trnslt.cnf,"¿Esta Ud. seguro de publicar el pedido en la Web Institucional?",function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/logistics_pedidos_web_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxType_edit:_w.getTE(),xxPedweb_key:_w.getCK(),xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!=null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
},
lpwe_btnUndoClick:function(btn,e,opt){btn.up("window").close();},
lpwe_btnExitClick:function(btn,e,opt){btn.up("window").close();},
lpwe_pedweb_estadoChange:function(chk,newV,oldV,opt){fext_removeAddCls(chk.up("window").down("#lblPedweb_estado"),newV?"lbl00303":"lbl00003",newV?"lbl00003":"lbl00303");}
});