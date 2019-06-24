Ext.define("Siace.controller.log.PedsecBB",{extend:"Ext.app.Controller",
lpsb:function(btn){var _p=btn.up("#pan");var _TE=fext_btnTE(btn);var _mi=_p.up("log_pedsecb").getMI();
	if(_TE=="Sub"){fext_CC("log.PedsecEE");var _w=fext_CW("log.PedsecEE");_w.setMI(_mi);_w.show();}
	else if(_TE=="Rec"){fext_CC("log.PedsecER");var _w=fext_CW("log.PedsecER");_w.setMI(_mi);_w.show();}
	else{fext_CC("log.PedBCV").lpb({comp:_p,grd:"grd",TE:(_TE=="Det"?0:_TE),mi:_mi,oi:(_TE=="Det"?59:_TE),yi:fext_GV(_p,"year_id")});}
}
});