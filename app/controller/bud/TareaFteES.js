Ext.define("Siace.controller.bud.TareaFteES",{extend:"Ext.app.Controller",
btfe:function(btn){var _w=btn.up("window");var _frm=_w.down("#panBTF").down("form");
	if(fext_IE(_w,"fuefin_id")||fext_GV(_w,"fuefin_id")*1<=0){fext_MsgA("Debe indicar la Rubro Presupuestal",_w.down("#fuefin_id"));return false;}
	if(fext_IE(_w,"tiprecur_id")||fext_GV(_w,"tiprecur_id")*1<=0){fext_MsgA("Debe indicar el Tipo de Recurso",_w.down("#tiprecur_id"));return false;}
	if(fext_IE(_w,"espedet_id")){fext_MsgA("Debe indicar el Clasificador Presupuestal");return false;}
	if(!_frm.getForm().isValid()){return false;}
	_frm.getForm().submit({method:"POST",url: "php/budget_tareas_fftred_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxTareafte_key:_w.getCK(),xxMenu_id:_w.getMI(),xxYear_id:fext_GV(_w,"year_id"),xxTarea_key:fext_GV(_w,"tarea_key"),xxFuefin_id:fext_GV(_w,"fuefin_id"),xxTiprecur_id:fext_GV(_w,"tiprecur_id"),xxEspedet_id:fext_GV(_w,"espedet_id"),vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!==null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
	});
}
});