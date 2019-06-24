Ext.define("Siace.controller.bud.TareaUsurAcceES",{extend:"Ext.app.Controller",
btuae:function(btn){var _w=btn.up("window");var _frm=_w.down("#panBTUA").down("form");
	if(fext_IE(_w,"tarea_key")){fext_MsgA("Debe indicar la Tarea Funcional",_w.down("#tarea_key"));return false;}
	var _r=fext_GS(_w).getRange();var _doc=""; 
	for(var _i=0;_i<_r.length;_i++){var _d=_r[_i].data;_doc+=(_i==0?"":",")+"{"+(_d.tareausuraccedoc_key==""?0:_d.tareausuraccedoc_key)+","+_d.doc_id+","+_d.tareausuraccedoc_update+","+_d.tareausuraccedoc_delete+","+_d.tareausuraccedoc_vobo+","+_d.tareausuraccedoc_other+","+_d.tareausuraccedoc_estado+"}";}
	if(!_frm.getForm().isValid()){return false;}
	_frm.getForm().submit({method:"POST",url:"php/budget_tareas_usuarios_accesos_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxType_edit:_w.getTE(),xxTareausuracce_key:_w.getCK(),xxTarea_key:fext_GV(_w,"tarea_key"),xxDocumentos:_doc,xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!==null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
	});
}
});