Ext.define("Siace.controller.bud.NotaES",{extend:"Ext.app.Controller",
bne:function(poW){var _w=poW;var _frm=_w.down("form");var _tn=fext_GV(_w,"tipnota_id");
	if(!_w.down("#nota_fecha").isValid()){fext_MsgA("FECHA no es valida");return false;}
	if(_tn*1<=0){fext_MsgA("Debe indicar el Tipo de Nota Presupuestal",_w.down("#tipnota_id"));return false;}
	if(fext_GV(_w,"fftr_id")*1<=0){fext_MsgA("Debe indicar la Fuente de Financiamiento",_w.down("#fftr_id"));return false;}
	var _det="";var _ne=0;var _ni=0;var _r=fext_GS(_w,"grdBNTF").getRange();
	for(var _i=0;_i<_r.length;_i++){var _d=_r[_i].data;
		if(_d.tipnotadet_id*1<=0){fext_MsgA("Error de sistema: No se ha establecido el Tipo de Nota en el detalle");return false;}
		if(fjsIn_array(_tn,[2013,2018])){if(Ext.isEmpty(_d.tareafte_key)){fext_MsgA("No se ha establecido el clasificador Presupuestal");return false;}}
		if(_d.tipnotadet_id==2041){if(_d.notatareafte_egreso*1<=0){fext_MsgA("No se ha establecido el Importe de Anulación en el detalle");return false;}if(_d.notatareafte_ingreso*1>0){fext_MsgA("Importe de Crédito no permitido en el detalle");return false;}}
		else if(_d.tipnotadet_id==2042){if(_d.notatareafte_egreso*1>0){fext_MsgA("Importe de Anulación no permitido en el detalle");return false;}if(_d.notatareafte_ingreso*1<=0){fext_MsgA("No se ha establecido el Importe de Crédito en el detalle");return false;}}
		_det+=(_i==0?"":",")+"{"+_d.notatareafte_item+","+_d.notatareafte_subitem+","+_d.tipnotadet_id+","+_d.tareafte_key+","+_d.tarea_key+","+_d.espedet_id+",*"+_d.parent_key+","+_d.notatareafte_egreso+","+_d.notatareafte_ingreso +"}";
		_ne=fjsRound(_ne*1 + _d.notatareafte_egreso*1,2); _ni=fjsRound(_ni*1 + _d.notatareafte_ingreso*1,2);
	}
	if(_det==""){fext_MsgA("Documento no registra detalle",_w.down("#btnAdd"));return false;}
	if(fext_GV(_w,"nota_egreso")*1 != _ne*1){fext_MsgA("Error en sumatoria de Anulaciones ["+_ne+"], respesto al total ["+fext_GV(_w,"nota_egreso")+"]");return false;}
	if(fext_GV(_w,"nota_ingreso")*1 != _ni*1){fext_MsgA("Error en sumatoria de Créditos ["+_ni+"], respesto al total ["+fext_GV(_w,"nota_ingreso")+"]");return false;}
	if(fjsIn_array(_tn,[2013,2018])){if(fext_GV(_w,"nota_egreso")*1!=fext_GV(_w,"nota_ingreso")*1){fext_MsgA("Importe de Anulación debe ser igual al importe de Crédito");return false;}}
	else{fext_MsgA("Tipo de Modificacion no permitida por el momento.");return false;}if(!_frm.getForm().isValid()){return false;}var _vs=fextpub_sessVar();
	Ext.Msg.confirm(trnslt.cnf,trnslt.msg_qst_save,function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/budget_notas_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxType_edit:_w.getTE(),xxMenu_id:_w.getMI(),xxYear_id:fext_GV(_w,"year_id"),xxDoc_id:201,xxTipnota_id:_tn,xxNota_fecha:_w.down("#nota_fecha").getSubmitValue(),xxArea_key:(_w.getMI()==5138?_vs.a:""),xxMeta_id:fext_GV(_w,"meta_id")*1,xxTarea_key:(fext_IE(_w,"tarea_key")?"":fext_GV(_w,"tarea_key")),xxFuefin_id:fext_GV(_w,"fftr_id").substr(0,3),xxTiprecur_id:fext_GV(_w,"fftr_id").substr(4),xxNota_monto:fext_GV(_w,"nota_ingreso"),xxDet:_det,vs:fext_JE(_vs)},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getTE()==1){fext_CC("bud.NotasOK");var _wF=fext_CW("bud.NotasOK");_wF.setCK(_res.key);_wF.setCS(_w.getCS());_w.close();_wF.show();}else if(_w.getCS()!==null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
}
});