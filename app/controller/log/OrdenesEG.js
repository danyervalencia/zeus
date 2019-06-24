Ext.define("Siace.controller.log.OrdenesEG",{extend:"Ext.app.Controller",views:["log.OrdenesEG"],
init:function(application){this.control({
"log_ordeneg":{beforeshow:this.loeg_BS},"log_ordeneg #btnSave":{click:this.loeg_btnSav},"log_ordeneg #btnUndo":{click:this.loeg_btnExt},"log_ordeneg #btnExit":{click:this.loeg_btnExt}
});},
loeg_BS:function(comp,opt){var _TE=comp.getTE();var _frm=comp.down("form");var _me=this;
	_frm.load({method:"POST",url:"php/logistics_ordenes_json_records.php",waitMsg:"Loading...",params:{xxOrden_key:fext_GV(comp,"orden_key"),xxType_record:"frmGlosa",xxMenu_id:comp.getMI(),ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){try{var _mod=fext_CM("log.OrdenLOEG");var _res=fext_DJ(act);var _d=_res.data[0];if(_d){_mod.set(_d);_frm.loadRecord(_mod);fextbud_tiprecurFilt({pan:comp,yi:_d.year_id,ffi:_d.fuefin_id,val:_d.tiprecur_id});}}catch(x){fext_MsgC(x.Message);}}
	});
	if(_TE==1){var _ico="icon_Vobo_90";var _tit="Editar Glosa de Orden ::.";} 
	comp.setIconCls(_ico);comp.setTitle(_tit);
},
loeg_btnSav:function(btn,e,opt){var _w=btn.up("window");var _frm=_w.down("form");
	if(fext_IE(_w,"orden_key")){fext_MsgA("Error de sistema no se ha establecido la Orden");return false;}
	if(fext_IE(_w,"orden_observ")){fext_MsgA("Debe establecer la glosa de la Orden",_w.down("#orden_observ"));return false;}
	if(!_frm.getForm().isValid()){return false;}
	Ext.Msg.confirm(trnslt.cnf,"¿Esta Ud. seguro de Editar la Glosa de la Orden seleccionada?",function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/logistics_ordenes_save_glosa.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxType_edit:_w.getTE(),xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!==null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
},
loeg_btnExt:function(btn,e,opt){btn.up("window").close();}
});