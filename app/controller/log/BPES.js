Ext.define("Siace.controller.log.BPES",{extend:"Ext.app.Controller",
lbpe:function(poP){var _w=poP["w"];var _frm=_w.down("form");
	if(fext_IE(_w,"coti_key")){fext_MsgA("Error de sistema no se ha establecido la cotización");return false;}
	if(fext_IE(_w,"bp_monto")||fext_GV(_w,"bp_monto")*1<=0){fext_MsgA("IMPORTE de Buena Pro no puede ser cero(0)");return false;}
	var _det="";var _bpm=0;var _r=_w.down("#grdLCD").getSelectionModel().getSelection();
	if(_r.length<=0){fext_MsgA("No se ha seleccionado ningun item");return false;}
	for(var _i=0;_i<_r.length;_i++){var _d=_r[_i].data;_bpm+=_d.bpdet_pretot*1;
		if(_d.bpdet_cantid*1>_d.cotidet_cantid*1){fext_MsgA("Cantidad de Buena Pro en item: "+_d.bs_nombre+", es mayor a saldo de requerimiento [ "+fjsFormatNumeric(_d.cotidet_cantid,3)+" ]");return false;}
		_det+=(_i==0?"":",")+"{*"+_d.bpdet_key+","+_d.cotidet_key+","+_d.peddet_key+","+_d.bs_key+","+_d.bpdet_cantid+","+_d.cotidet_preuni+","+_d.bpdet_pretot+"}";
	}
	if(!_frm.getForm().isValid()){return false;}
	Ext.Msg.confirm(trnslt.cnf,"¿Esta Ud. seguro de otorgar la Buena Pro a la Cotizacion seleccionada?",function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/logistics_buena_pro_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxType_edit:_w.getTE(),xxDoc_id:512,xxBp_monto:fext_GV(_w,"bp_monto"),xxDet:_det,xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_res.key.substr(32,32)==""){if(_w.getCS()!=null){_w.getCS().load();}_w.close();}else{fext_CC("log.Buena_ProOK");var _wF=fext_CW("log.Buena_ProOK");_wF.setCK(_res.key.substr(32,32));_wF.setCS(_w.getCS());_w.close();_wF.show();}}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
}
});