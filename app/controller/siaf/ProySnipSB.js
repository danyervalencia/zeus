Ext.define("Siace.controller.siaf.ProySnipSB",{extend:"Ext.app.Controller",
spss:function(btn){var _w=btn.up("window");var _TE=fext_btnTE(btn);
	if(_TE==11){var _r=fext_grdSR(_w,"");var _d=_r.data;if(_r&&_d.proysnip_key!=_w.getCK()){var _cc=_w.getCC();
    	if(_cc!=null){fext_SV(_cc,"proysnip_key",_d.proysnip_key);fext_SV(_cc,"PROYSNIP_CODE",_d.proysnip_code);fext_SV(_cc,"proysnip_code",_d.proysnip_code);fext_SV(_cc,"proysnip_nombre",_d.proysnip_nombre);}
		_w.close();if(_w.getAD()){_w.destroy();}
	}}else{_w.close();if(_w.getAD()){_w.destroy();}}
}
});