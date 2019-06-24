Ext.define("Siace.controller.bud.Notas_DetSIB",{extend:"Ext.app.Controller",
bndsi:function(btn,e,o){var _w=btn.up("window");var _TE=fext_btnTE(btn);var _cc=_w.getCC();
	if(_TE==11){var _cboED=_w.down("#espedet_id");var _tn=fext_GV(_cc,"tipnota_id");var _close=true;
		if(fext_IE(_cboED)){fext_MsgA("Debe indicar el Clasificador Presupuestal al que se asignará el Crédito");return false;}
		if(fext_GV(_w,"notatareafte_monto")*1<=0){fext_MsgA("Debe indicar el Importe del Crédito",_w.down("#notatareafte_monto"));return false;}
		if(fjsIn_array(_tn,[2013,2018])){_close=fext_CC("bud.NotaEGAI").bne(_cc,{tareafte_key:_cboED.getValue(),tarea_key:fext_GV(_w,"tarea_key"),espedet_id:_cboED.getStore().findRecord("tareafte_key",_cboED.getValue()).data.espedet_id,tarea_codigo:_w.down("#tarea_key").getRawValue().substr(0,8),espedet_codigo:_cboED.getRawValue().substr(0,15),espedet_nombre:_cboED.getRawValue().substr(16),notatareafte_monto:fext_GV(_w,"notatareafte_monto")});}else{}
		if(_close){_w.close();if(_w.getAD()){_w.destroy();}}
	}else{_w.close();if(_w.getAD()){_w.destroy();}}
}
});