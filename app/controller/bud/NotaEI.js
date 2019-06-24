Ext.define("Siace.controller.bud.NotaEI",{extend:"Ext.app.Controller",
bne:function(btn){var _w=btn.up("window");var _tn=fext_GV(_w,"tipnota_id");var _wAI=_w.getWAI();var _ing=0.00;
	if(fext_IE(_w,"fftr_id")||fext_GV(_w,"fftr_id")*1<=0){fext_MsgA("Debe indicar el Rubro Presupuestal",_w.down("#fftr_id"));return false;}
	if(fjsIn_array(_tn,[2013,2018])){var _rec=fext_grdSR(_w,"grdBNTF");if(!_rec){fext_MsgA("No se ha indicado el registro de anulación al que se asignará el Crédito Presupuestal");return false;}var _dat=_rec.data;
		if(Ext.isEmpty(_dat.tareafte_key)||_dat.tipnotadet_id!=2041){fext_MsgA("Registro seleccionado, no permite Crédito Presupuestal");return false;}_r=fext_GS(_w,"grdBNTF").getRange();
		for(var _i=0;_i<_r.length;_i++){var _d=_r[_i].data;if(_d.parent_key==_dat.tareafte_key){_ing+=(_d.notatareafte_ingreso*1);}}
		if(_ing*1>=_dat.notatareafte_egreso*1){fext_MsgA("Registro de Anulación tiene completado importe de crédito");return false;}_ing=(_dat.notatareafte_egreso*1 - _ing*1);
	}
	if(Ext.isEmpty(_wAI)){fext_CC("bud.Notas_DetSI");_wAI=fext_CW("bud.Notas_DetSI");_wAI.setCC(_w);_w.setWAI(_wAI);}_wAI.setF(_w.getFI());
	if(_w.getFI()){fext_SV(_wAI,"fftr_codename","&nbsp; "+_w.down("#fftr_id").getRawValue());}
	_w.setFI(false);_wAI.show();fext_SV(_wAI,"notatareafte_monto",_ing);
}
});