Ext.define("Siace.controller.pub.BSFES",{extend:"Ext.app.Controller",
pbsfes:function(btn){var _w=btn.up("window");var _frm=_w.down("form");var _TE=_w.getTE();
	if(fext_GV(_w,"bst_id")*1<=0){fext_MsgA("Debe indicar el  TIPO  Familia",_w.down("#bst_id"));return false;}
	if(fext_GV(_w,"bsg_id")*1<=0){fext_MsgA("Debe indicar el  GRUPO  de la Familia");return false;}
	if(fext_GV(_w,"bsc_id")*1<=0){fext_MsgA("Debe indicar la  CLASE  de la Familia",_w.down("#bsc_id"));return false;}
	if(fext_IE(_w,"bsf_code")){fext_MsgA("Debe indicar el  CODIGO  de la Familia",_w.down("#bsf_code"));return false;}
	if(fext_IE(_w,"bsf_nombre")){fext_MsgA("Debe indicar el  NOMBRE  de la Familia ",_w.down("#bsf_nombre"));return false;}
	if(!_frm.getForm().isValid()){return false;}
	Ext.Msg.confirm(trnslt.cnf,trnslt.msg_qst_save,function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/public_bienes_servs_familias_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxBsf_id:_w.getCK(),xxType_edit:_TE,xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!=null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
}
});