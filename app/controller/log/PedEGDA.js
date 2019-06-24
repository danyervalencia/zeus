Ext.define("Siace.controller.log.PedEGDA",{extend:"Ext.app.Controller",
lpe:function(poC,poD,poP){var _str=fext_GS(poC,"grdLPD");var _md=_str.findRecord("bs_key",poD.bs_key);var _close=false;
	if(_md==null){fext_SV(poC,"peddet_item",fext_GV(poC,"peddet_item")*1 + 1);
		_str.add({peddet_item:fext_GV(poC,"peddet_item"),bs_key:poD.bs_key,bs_codigo:poD.bs_codigo,bs_nombre:poD.bs_nombre,unimed_abrev:poD.unimed_abrev,espedet_id:poP["espedet_id"],espedet_codigo:poP["espedet_codigo"],espedet_nombre:poP["espedet_nombre"],peddet_detalle:poP["detalle"],peddet_cantid:poP["cantid"],peddet_preuni:poP["preuni"],peddet_pretot:poP["pretot"]});
		fext_CC("log.PedEGTF").lpe(poC,poP);_close=true;fext_CC("log.PedEMU").lpe(poC,poP["pretot"]);
	}else{fext_MsgA("Item seleccionado ya se encuentra establecido en el documento");}
	return _close;
}
});