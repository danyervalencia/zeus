Ext.define("Siace.controller.bud.NotaEGAE",{extend:"Ext.app.Controller",
bne:function(poC,poP){var _str=fext_GS(poC,"grdBNTF");var _md=_str.findRecord("tareafte_key",poP["tareafte_key"]);var _close=false;
	if(_md==null){fext_SV(poC,"notatareafte_item",fext_GV(poC,"notatareafte_item")*1 + 1);
		_str.add({tipnotadet_id:2041,notatareafte_item:fext_GV(poC,"notatareafte_item"),tareafte_key:poP["tareafte_key"],tarea_key:poP["tarea_key"],espedet_id:poP["espedet_id"],tarea_codigo:poP["tarea_codigo"],espedet_codigo:poP["espedet_codigo"],espedet_nombre:poP["espedet_nombre"],notatareafte_egreso:poP["notatareafte_monto"]});_close=true;
		fext_SV(poC,"nota_egreso",fext_GV(poC,"nota_egreso")*1 + poP["notatareafte_monto"]*1);fext_SD(poC,"",true,["tipnota_id","meta_id","tarea_key","fftr_id"]);
	}else{fext_MsgA("Tarea Funcional - Clasificador Presupuestal seleccionado, ya se encuentra establecido como registro de Anulación");}
	return _close;	
}
});