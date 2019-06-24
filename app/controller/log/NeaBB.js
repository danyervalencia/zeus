Ext.define("Siace.controller.log.NeaBB",{extend:"Ext.app.Controller",
lnb:function(btn,opt){var _p=btn.up("#pan");var _TE=fext_btnTE(btn);var _mi=_p.up("log_neab").getMI();
	if(_TE==8){fext_CC("log.Neas").ln_Printer({comp:_p,mi:_mi});}
	else if(_TE==10){fext_CC("log.NeaBA").lnb({comp:_p,"btn":btn,"opt":opt,mi:_mi});}
	else{fext_CC("log.Neas").ln_View({comp:_p,TE:_TE,mi:_mi,oi:_TE,yi:fext_GV(_p,"year_id"),tni:fext_GV(_p,"tipnea_id")});}
}});