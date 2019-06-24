Ext.define("Siace.controller.log.CompB14B",{extend:"Ext.app.Controller",
lcb:function(btn,opt){var _p=btn.up("#pan");var _TE=fext_btnTE(btn);var _mi=_p.up("log_compb14").getMI();
	if(_TE==7){fext_CC("log.CompB14BD").lcb({comp:_p,"btn":btn,"opt":opt,mi:_mi});}
	else if(_TE=="Act"){fext_CC("log.PedFaseBAct").lpfb({comp:_p,"btn":btn,"opt":opt,mi:_mi});}
	else{fext_CC("log.Comp").lc_View({comp:_p,TE:(_TE==5001?12:(_TE=="Det"?0:_TE)),mi:_mi,oi:(_TE=="Det"?59:_TE),yi:fext_GV(_p,"year_id")});}
}
});