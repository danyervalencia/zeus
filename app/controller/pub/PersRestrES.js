Ext.define("Siace.controller.pub.PersRestrES",{extend:"Ext.app.Controller",
ppre:function(btn){var _w=btn.up("window");var _frm=_w.down("#frmPPR");
	if(fext_IE(_w,"tiprestr_id")){fext_MsgA("Debe indicar el TIPO de restricción al proveedor",_w.down("#tiprestr_id"));return false;} if(!_frm.getForm().isValid()){return false;}
	_frm.getForm().submit({method:"POST",url:"php/public_personas_restricciones_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxPersrestr_key:_w.getCK(),xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!=null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
	});
}
});