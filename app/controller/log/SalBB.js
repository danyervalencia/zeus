Ext.define("Siace.controller.log.SalBB",{extend:"Ext.app.Controller",
lsb:function(btn,opt){var _p=btn.up("#pan");var _TE=fext_btnTE(btn);var _mi=_p.up("log_salb").getMI();
	if(_TE==8){fext_CC("log.Salidas").ls_Printer({comp:_p,mi:_mi});}
	else if(_TE==10){fext_CC("log.Salidas").ls_Annular({comp:_p,"btn":btn,"opt":opt,mi:_mi});}
	else{fext_CC("log.Salidas").ls_View({comp:_p,TE:_TE,mi:_mi,oi:_TE,yi:fext_GV(_p,"year_id")});}
}
});