Ext.define("Siace.controller.log.CotiES",{extend:"Ext.app.Controller",
lce:function(btn){var _w=btn.up("window");var _frm=_w.down("form");
	if(fext_IE(_w.down("#pers_ruc"))){fext_MsgA("Debe indicar el Proveedor al que se asignará la cotización",_w.down("#pers_ruc"));return false;}
	if(!_w.down("#coti_fecha").isValid()){fext_MsgA("Error de navegador, no se ha establecido la FECHA");return false;}
	if(fext_IE(_w.down("#coti_monto"))||fext_GV(_w,"coti_monto")*1<=0){fext_MsgA("IMPORTE de cotización no puede ser cero(0)");return false;}
	if(fext_IE(_w.down("#coti_vigencia"))||fext_GV(_w,"coti_vigencia")*1<=0){fext_MsgA("Debe indicar la VIGENCIA de la cotización",_w.down("#coti_vigencia"));return false;}
	if(!_w.down("#coti_plazo").isDisabled()){if(fext_IE(_w.down("#coti_plazo"))||fext_GV(_w,"coti_plazo")*1<=0){fext_MsgA("Debe indicar la cantidad de días para el "+_w.down("#coti_plazo").getFieldLabel().trim()+" de la cotización",_w.down("#coti_plazo"));return false;}}
	if(fext_IE(_w.down("#tippag_id"))||fext_GV(_w,"tippag_id")*1<=0){fext_MsgA("Debe indicar el TIPO DE PAGO de la cotización",_w.down("#tippag_id"));return false;}
	if(fext_GV(_w,"tipped_id")==5006){if(fext_IE(_w.down("#lugentr_id"))||fext_GV(_w,"lugentr_id")*1<=0){fext_MsgA("¡Debe indicar el LUGAR DE ENTREGA de la cotización!",_w.down("#lugentr_id"));return false;}}
	var _det="";var _cm=0;var _r=_w.down("#grdLCD").getStore().getRange();
	for(var _i=0;_i<_r.length;_i++){var _d=_r[_i].data;
		if(Ext.isEmpty(_d.cotidet_preuni)){fext_MsgA("Precio Unitario en detalle no pueder ser cero (0)");return false;}
		_det+=(_i==0?"":",")+"{*"+_d.cotidet_key+","+_i+","+_d.peddet_key+","+_d.bs_key+","+_d.cotidet_cantid+","+_d.cotidet_preuni+","+_d.cotidet_pretot+",*"+_d.cotidet_marca+",*"+_d.cotidet_modelo+"}";
		_cm=fjsRound(_cm*1 + _d.cotidet_pretot*1,2);
	}
	if(_det==""){fext_MsgA("Documento no registra detalle");return false;}if(!_frm.getForm().isValid()){return false;}
	Ext.Msg.confirm(trnslt.cnf,trnslt.msg_qst_save,function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/logistics_cotizaciones_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxType_edit:_w.getTE(),xxCoti_key:_w.getCK(),xxDoc_id:511,xxCoti_monto:_w.down("#coti_monto").getValue(),xxLugentr_id:_w.down("#lugentr_id").getValue(),xxDet:_det,xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getTE()==1){fext_CC("log.CotizacionesOK");var _wF=fext_CW("log.CotizacionesOK");_wF.setCK(_res.key);_wF.setCS(_w.getCS());_w.close();_wF.show();}else{if(_w.getCS()!==null){_w.getCS().load();}_w.close();}}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
}
});