Ext.define("Siace.controller.log.FaseAcceES",{extend:"Ext.app.Controller",
lfae:function(btn){var _w=btn.up("window");var _frm=_w.down("form");
	if(fext_IE(_w,"area_key")){fext_MsgA("Debe indicar la UNIDAD ORGANICA",_w.down("#area_key"));return false;}
	if(fext_IE(_w,"fase_id")){fext_MsgA("Debe indicar la FASE");return false;}
	if(fext_IE(_w,"cargusur_id")){fext_MsgA("Debe indicar el CARGO");return false;}
	if(fext_IE(_w,"faseacce_type")){fext_MsgA("Debe indicar el TIPO que corresponde a la Fase");return false;}if(!_frm.getForm().isValid()){return false;}
	_frm.getForm().submit({method:"POST",url:"php/logistics_fases_accesos_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxFaseacce_key:_w.getCK(),xxArea_key:fext_GV(_w,"area_key"),vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!==null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
	});
}
});