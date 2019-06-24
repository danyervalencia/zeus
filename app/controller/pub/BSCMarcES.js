Ext.define("Siace.controller.pub.BSCMarcES",{extend:"Ext.app.Controller",
pbscmes:function(btn){var _w=btn.up("window");var _frm=_w.down("#panPBSCM").down("form");if(!_frm.getForm().isValid()){return false;}var _mk=_w.down("#marc_key").getValue();
	if(Ext.isEmpty(_mk)){fext_MsgA("Debe indicar la Marca Comercial",_w.down("#marc_key"));return false;}
	Ext.Msg.confirm("Confirmar",trnslt.msg_qst_save, function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/public_bienes_servs_clases_marcas_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxBscmarc_key:_w.getCK(),xxMarc_key:_mk,xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!==null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
}
});