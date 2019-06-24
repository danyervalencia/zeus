Ext.define("Siace.controller.pub.AreaES",{extend:"Ext.app.Controller",
pae:function(btn){var _w=btn.up("window");var _frm=_w.down("form");
	if(fext_IE(_w,"area_nombre")){fext_MsgA("Debe indicar el Nombre de la Unidad Orgánica",_w.down("#area_nombre"));return false;}
	if(fext_IE(_w,"area_abrev")){fext_MsgA("Debe indicar el Abreviado de la Unidad Orgánica",_w.down("#area_abrev"));return false;}
	if(!_frm.getForm().isValid()){return false}
	_frm.getForm().submit({method:"POST",url:"php/public_areas_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxArea_key:_w.getCK(),xxLoc_key:fext_GV(_w,"loc_key"),xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!=null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
	});
}
});