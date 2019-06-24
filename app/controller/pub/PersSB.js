Ext.define("Siace.controller.pub.PersSB",{extend:"Ext.app.Controller",
pps:function(btn){var _w=btn.up("window");var _TE=fext_btnTE(btn);
	if(_TE==11){var _r=fext_grdSR(_w,"");var _d=_r.data;if(_r&&_d.pers_key!==_w.getCK()){var _cc=_w.getCC();
		if(_cc!=null){fext_SV(_cc,"pers_key",_d.pers_key);fext_SV(_cc,"pers_ruc",_d.pers_ruc);fext_SV(_cc,"pers_nombre",_d.pers_nombre);}
		_w.close();if(_w.getAD()){_w.destroy();}
	}}else{_w.close();if(_w.getAD()){_w.destroy();}}
}
});