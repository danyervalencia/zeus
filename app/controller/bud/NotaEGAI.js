Ext.define("Siace.controller.bud.NotaEGAI",{extend:"Ext.app.Controller",
bne:function(poC,poP){var _str=fext_GS(poC,"grdBNTF");var _close=true;var _subitem=1;var _ing=0;
	if(fjsIn_array(fext_GV(poC,"tipnota_id"),[2013,2018])){var _r=fext_grdSR(poC,"grdBNTF");if(!_r){return false;}var _d=_r.data;
		_str.each(function(r){if(r.data.tareafte_key==poP["tareafte_key"]&&r.data.parent_key==_d.tareafte_key){fext_MsgA("Tarea Funcional - Clasificador Presupuestal seleccionado, ya se encuentra establecido como registro de Crédito");_close=false;}});
		if(poP["tareafte_key"]==_d.tareafte_key){fext_MsgA("Clasificador Presupuestal no puede ser igual al registro de Anulación"); _close=false;}
		_str.each(function(r){if(r.data.parent_key==_d.tareafte_key){_subitem=(_subitem*1)+1;_ing+=r.data.notatareafte_ingreso*1}});
		if(_ing*1 + poP["notatareafte_monto"]*1 > _d.notatareafte_egreso*1){Ext.Msg.alert(trnslt.msg,"Importe de Crédito excede en: " + fjsFormatNumeric((_ing*1 + poP["notatareafte_monto"]*1) - _d.notatareafte_egreso*1,2));_close=false;}
		if(_close){_str.add({tipnotadet_id:2042,notatareafte_item:_d.notatareafte_item,notatareafte_subitem:_subitem,tareafte_key:poP["tareafte_key"],tarea_key:poP["tarea_key"],parent_key:_d.tareafte_key,tarea_codigo:poP["tarea_codigo"],espedet_codigo:poP["espedet_codigo"],espedet_nombre:poP["espedet_nombre"],notatareafte_ingreso:poP["notatareafte_monto"]});fext_SV(poC,"nota_ingreso",fext_GV(poC,"nota_ingreso")*1 + poP["notatareafte_monto"]*1);}
	}else{}
	return _close;
}
});