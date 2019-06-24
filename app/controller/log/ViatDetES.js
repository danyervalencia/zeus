Ext.define("Siace.controller.log.ViatDetES",{extend:"Ext.app.Controller",
lvde:function(btn){var _w=btn.up("window");var _b=fext_btnTE(btn);var _cc=_w.getCC();var _m=fext_GV(_w,"viatdet_pretot")*1;
	if(_b==5){if(fext_IE(_w,"bs_key")){fext_MsgA("Debe seleccionar el Servicio que se va a agregar");return false;}if(fext_IE(_w,"espedet_id")){fext_MsgA("Debe seleccionar el Clasificador Presupuestal");return false;}if(fext_GV(_w,"viatdet_pretot")*1<=0){fext_MsgA("Importe debe ser mayor a 0 (Cero)");return false;}
		var _TE=_w.getTE();_r=fext_GS(_w,"bs_key").findRecord("bs_key",fext_GV(_w,"bs_key"));var _d=_r.data;var _str=fext_GS(_cc,"grdLVD");
		if(_TE==13){var _md=_str.findRecord("bs_key",_d.bs_key);if(_md!=null){fext_MsgA("Servicio seleccionado ya se encuentra establecido en el detalle de Solicitud de Viático");return false;}fext_SV(_cc,"viatdet_item",fext_GV(_cc,"viatdet_item")*1 + 1);}
		_rec=fext_GS(_w,"espedet_id").findRecord("espedet_id",fext_GV(_w,"espedet_id"));var _dat=_rec.data;
		if(_m>_dat.tareafte_monto_saldo){fext_MsgA("Importe no debe ser mayor al Saldo Presupuestal disponible");return false;}
		if(_TE==13){_str.add({viatdet_item:fext_GV(_cc,"viatdet_item"),bs_key:_d.bs_key,bs_codigo:_d.bs_codigo,bs_nombre:_d.bs_nombre,espedet_id:_dat.espedet_id,espedet_codigo:_dat.espedet_codename.substr(0,15),espedet_nombre:_dat.espedet_codename.substr(16),viatdet_pretot:_m});fext_CC("log.ViatE").lve_montoU(_cc,_m);}
		else{_rec=_str.findRecord("bs_key",fext_GV(_w,"bs_key"));if(_rec){_rec.set("espedet_id",_dat.espedet_id);_rec.set("espedet_codigo",_dat.espedet_codename.substr(0,15));_rec.set("espedet_nombre",_dat.espedet_codename.substr(16));_rec.set("viatdet_pretot",_m);_rec.commit();}}
		_w.close();_w.destroy();
	}else{_w.close();_w.destroy();}
}
});