Ext.define("Siace.controller.rrhh.TrabjES",{extend:"Ext.app.Controller",
rte:function(btn){var _w=btn.up("window");var _frm=_w.down("form");var _TE=_w.getTE();
	if(fext_IE(_w,"indiv_key")){fext_MsgA("Debe indicar el registro del trabajador",_w.down("#indiv_dni"));return false;}
	if(fext_IE(_w,"area_key")){fext_MsgA("Debe indicar la Unidad Organica donde que labora el trabajador",_w.down("#area_key"));return false;}
	if(fext_IE(_w,"carg_id")){fext_MsgA("Debe indicar el CARGO del Trabajador",_w.down("#carg_id"));return false;}
	if(!_frm.getForm().isValid()){return false;}
	Ext.Msg.confirm("Confirmar",trnslt.msg_qst_save,function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/rrhh_trabajadores_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxTrabj_key:_w.getCK(),xxType_edit:_w.getTE(),xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!==null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},
			failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
}
});