Ext.define("Siace.controller.log.ValrzES",{extend:"Ext.app.Controller",
lve:function(btn){var _w=btn.up("window");var _frm=_w.down("form");
	if(fext_IE(_w.down("#tablex_key"))){fext_MsgA("Debe indicar el documento de Procedencia");return false;}
	var _det="";var _r=fext_GS(_w,"grdLVD").getRange();
	for(var _i=0;_i<_r.length;_i++){var _d=_r[_i].data;
		if(_d.valrzdet_pretot==""||_d.valrzdet_pretot*1<=0){fext_MsgA("Importe en detalle segun vale "+_d.tablex_documento+", no puede ser cero(0)");return false;}
		_det+=(_i==0?"":",")+"{*"+_d.valrzdet_key+","+_i+","+_d.tablex+","+_d.tablex_key+","+_d.valrzdet_pretot+"}";
	}if(_det==""){fext_MsgA("Documento no registra detalle");return false;}if(!_frm.getForm().isValid()){return false;}
	Ext.Msg.confirm(trnslt.cnf,trnslt.msg_qst_save,function(b){if(b=="yes"){var _tablex=fext_GS(_w,"tablex_key").findRecord("tablex_key",fext_GV(_w,"tablex_key")).data.tablex;
		_frm.getForm().submit({method:"POST",url:"php/logistics_valorizaciones_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxType_edit:_w.getTE(),xxValrz_key:_w.getCK(),xxValrz_fecha:_w.down("#valrz_fecha").getSubmitValue(),xxTablex:5030,xxTablex_key:fext_GV(_w,"tablex_key"),xxValrz_monto:fext_GV(_w,"valrz_monto"),xxDet:_det,xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success&&_w.getTE()==1){fext_CC("log.ValorizacionesOK");var _wF=fext_CW("log.ValorizacionesOK");_wF.setCK(_res.key);_wF.setCS(_w.getCS());_wF.setMI(_w.getMI());_w.close();_wF.show();}else if(_res.success){if(_w.getCS()!==null){_w.getCS().load();}_w.close();}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
}
});