Ext.define("Siace.controller.pub.BSES",{extend:"Ext.app.Controller",
pbses:function(btn){var _w=btn.up("window");var _frm=_w.down("form");var _TE=_w.getTE();var _bst_nombre=(fext_GV(_w,"bst_id")==1?"Bien":"Servicio");
	if(fext_GV(_w,"bst_id")*1<=0){fext_MsgA("Debe indicar el  TIPO  [Bien o Servicio]",_w.down("#bst_id"));return false;}
	if(fext_GV(_w,"bsg_id")*1<=0){fext_MsgA("Debe indicar el  GRUPO  del "+_bst_nombre,_w.down("#bsg_id"));return false;}
	if(fext_GV(_w,"bsc_id")*1<=0){fext_MsgA("Debe indicar la  CLASE  del "+_bst_nombre,_w.down("#bsc_id"));return false;}
	if(fext_GV(_w,"bsf_id")*1<=0){fext_MsgA("Debe indicar la  FAMILIA  del "+_bst_nombre,_w.down("#bsf_id"));return false;}
	if(fext_IE(_w,"bs_code")){fext_MsgA("Debe indicar el  ITEM  del "+_bst_nombre,_w.down("#bs_code"));return false;}
	if(fext_IE(_w,"bs_nombre")){fext_MsgA("Debe indicar el  NOMBRE  del "+_bst_nombre,_w.down("#bs_nombre"));return false;}
	if(fext_GV(_w,"unimed_id")*1<=0){fext_MsgA("Debe indicar la  UNIDAD DE MEDIDA  del "+_bst_nombre,_w.down("#unimed_id"));return false;}
	if(!_frm.getForm().isValid()){return false;}
	Ext.Msg.confirm(trnslt.cnf,trnslt.msg_qst_save,function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/public_bienes_servs_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxBs_key:_w.getCK(),xxType_edit:_TE,xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!=null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
}
});