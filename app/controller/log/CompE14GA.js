Ext.define("Siace.controller.log.CompE14GA",{extend:"Ext.app.Controller",
lce:function(poC,poR,poP){var _d=poR.data;var _str=fext_GS(poC);var _md=_str.findRecord("tareafte_key",_d.tareafte_key);var _close=false;
	if(_md==null){fext_SV(poC,"item",fext_GV(poC,"item")*1 + 1);
		_str.add({item:fext_GV(poC,"item"),tareafte_key:_d.tareafte_key,tarea_key:_d.tarea_key,tarea_codigo:_d.tarea_codigo,fftr_codigo:_d.fftr_code,espedet_codigo:_d.espedet_codigo,espedet_nombre:_d.espedet_nombre,area_key:poP["area_key"],area_abrev:poP["area_abrev"]});
		_close=true;fext_Dsb(poC,"fuefin_id");poC.setF(false);
	}else{fext_MsgA("Item seleccionado ya se encuentra establecido en el documento");}
	return _close;
}
});