Ext.define("Siace.controller.bud.TareaES",{extend:"Ext.app.Controller",
bte:function(poW){var _w=poW;var _frm=_w.down("form");
	if(fext_GV(_w,"meta_id")*1<=0){fext_MsgA("Debe indicar la Secuencia Funcional",_w.down("#meta_id"));return false;}
	if(fext_GV(_w,"tiptarea_id")*1<=0){fext_MsgA("Debe indicar el Tipo de Tarea Funcional",_w.down("#tiptarea_id"));return false;}
	if(fext_IE(_w,"tipespedet_id")){fext_MsgA("Debe indicar el Tipo de Clasificador",_w.down("#tipespedet_id"));return false;}
	if(!_frm.getForm().isValid()){return false;}
	_frm.getForm().submit({method:"POST",url:"php/budget_tareas_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxTarea_key:_w.getCK(),xxYear_id:fext_GV(_w,"year_id"),xxMeta_id:fext_GV(_w,"meta_id"),xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!=null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
	});
}
});