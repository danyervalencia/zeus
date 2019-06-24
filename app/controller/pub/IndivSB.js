Ext.define("Siace.controller.pub.IndivSB",{extend:"Ext.app.Controller",
pis:function(btn){var _w=btn.up("window");var _TE=fext_btnTE(btn);
	if(_TE==11){var _r=fext_grdSR(_w,"");var _d=_r.data;if(_r&&_d.indiv_key!==_w.getCK()){var _cc=_w.getCC();
		if(_cc!==null){fext_SV(_cc,"indiv_key",_d.indiv_key);if(_cc.down("#INDIV_DNI")){fext_SV(_cc,"INDIV_DNI",_d.indiv_dni);}fext_SV(_cc,"indiv_dni",_d.indiv_dni);fext_SV(_cc,"indiv_apenom",_d.indiv_apenom);}
		_w.close();if(_w.getAD()){_w.destroy();}
	}}else{_w.close();if(_w.getAD()){_w.destroy();}}
}
});