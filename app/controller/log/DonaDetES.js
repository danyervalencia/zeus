Ext.define("Siace.controller.log.DonaDetES",{extend:"Ext.app.Controller",
ldde:function(btn){var _w=btn.up("window");var _frm=_w.down("#panLDD").down("form");if(fext_IE(_w,"bs_key")){fext_MsgA("Debe indicar el Bien");return false;}if(!_frm.getForm().isValid()){return false;}
	_frm.getForm().submit({method:"POST",url:"php/logistics_donaciones_det_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxType_edit:_w.getTE(),xxDonadet_key:_w.getCK(),xxMenu_id:_w.getMI(),vs:Ext.JSON.encode(fextpub_sessVar())},
		success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!==null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
	});
}
});