Ext.define("Siace.controller.bud.ProySB",{extend:"Ext.app.Controller",
bps:function(btn){var _w=btn.up("window");var _TE=fext_btnTE(btn);
	if(_TE==11){var _r=fext_grdSR(_w,"");var _d=_r.data;if(_r&&_d.proy_key!=_w.getCK()){var _cc=_w.getCC();
    	if(_cc!=null){fext_SV(_cc,"proy_key",_d.proy_key);fext_SV(_cc,"PROY_CODE",_d.snip_code);fext_SV(_cc,"proy_code",_d.proy_code);fext_SV(_cc,"proy_nombre",_d.proy_nombre);}
		_w.close();if(_w.getAD()){_w.destroy();}
	}}else{_w.close();if(_w.getAD()){_w.destroy();}}
}
});