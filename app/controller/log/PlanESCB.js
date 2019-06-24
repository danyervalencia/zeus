Ext.define("Siace.controller.log.PlanESCB",{extend:"Ext.app.Controller",
lpe:function(btn){var _w=btn.up("window");var _TE=fext_btnTE(btn);
if(_TE==11){if(fext_IE(_w,"monto")||fext_GV(_w,"monto")*1<=0){fext_MsgA("IMPORTE no puede ser cero(0)");return false;}
	var _det="";var _m=0;var _r=_w.down("#grdLC").getSelectionModel().getSelection();
	if(_r.length<=0){fext_MsgA("No se ha seleccionado ningun documento");return false;}var _cc=_w.getCC();var _str=fext_GS(_cc,"grdLPP");_str.removeAll();
	for(var _i=0;_i<_r.length;_i++){var _d=_r[_i].data;_m+=_d.comp_monto*1;
		_str.add({item:_i+1,key:_d.comp_key,documento:_d.comp_documento,fecha:_d.comp_fecha,monto:_d.comp_monto,fuefin_codename:_d.fuefin_code+" - "+_d.fuefin_abrev,pers_ruc:_d.pers_ruc});
	}
	fext_SV(_cc,"plan_monto",_m);fext_Dsb(_cc,"",["tiporden_id","fuefin_id","pers_ruc","btnPPS"]);_w.close();
}}
});