Ext.define("Siace.controller.pub.MarcES",{extend:"Ext.app.Controller",
pme:function(btn){var _w=btn.up("window");var _frm=_w.down("form");
	if(fext_IE(_w,"marc_nombre")){fext_MsgA("Debe indicar el Nombre de la Marca Comercial",_w.down("#marc_nombre"));return false;}if(!_frm.getForm().isValid()){return false}
	_frm.getForm().submit({method:"POST",url:"php/public_marcas_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxMarc_key:_w.getCK(),xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!=null){_w.getCS().load();}_w.close();}else{fext_msgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
	});
}
});