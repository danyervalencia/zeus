Ext.define("Siace.controller.bud.Notas_DetSEB",{extend:"Ext.app.Controller",
bndse:function(btn,e,o){var _w=btn.up("window");var _TE=fext_btnTE(btn);
	if(_TE==11){var _cboED=_w.down("#espedet_id");var _close=true;if(fext_IE(_cboED)){return false;}
		if(fext_GV(_w,"notatareafte_monto")*1<=0){fext_MsgA("Debe indicar el Importe de la Anulación");return false;}
		_close=fext_CC("bud.NotaEGAE").bne(_w.getCC(),{tareafte_key:_cboED.getValue(),tarea_key:fext_GV(_w,"tarea_key"),espedet_id:_cboED.getStore().findRecord("tareafte_key",_cboED.getValue()).data.espedet_id,tarea_codigo:_w.down("#tarea_key").getRawValue().substr(0,8),espedet_codigo:_cboED.getRawValue().substr(0,15),espedet_nombre:_cboED.getRawValue().substr(16),notatareafte_monto:fext_GV(_w,"notatareafte_monto")});
		if(_close){_w.close();if(_w.getAD()){_w.destroy();}}
	}else{_w.close();if(_w.getAD()){_w.destroy();}}
}
});