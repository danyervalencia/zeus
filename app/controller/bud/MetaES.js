Ext.define("Siace.controller.bud.MetaES",{extend:"Ext.app.Controller",
bme:function(poW){var _w=poW;var _frm=_w.down("form");
	if(fext_IE(_w,"year_id")){fext_MsgA("Debe indicar el Año de Trabajo");return false;}
	if(fext_IE(_w,"secfunc_code")){fext_MsgA("Debe indicar la Secuencia Funcional");return false;}
	if(fext_IE(_w,"secfunc_nombre")){fext_MsgA("Debe indicar el Nombre de la Secuencia Funcional");return false;}
	if(!_frm.getForm().isValid()){return false;}
	_frm.getForm().submit({method:"POST",url:"php/budget_metas_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxType_edit:_w.getTE(),xxMeta_id:_w.getCK(),xxSecfunc_code:fext_GV(_w,"secfunc_code"),xxActproy_code:fext_GV(_w,"actproy_code"),xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!=null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
	});
}
});