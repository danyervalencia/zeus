Ext.define("Siace.controller.log.IngBB",{extend:"Ext.app.Controller",
lib:function(btn,opt){var _p=btn.up("#pan");var _TE=fext_btnTE(btn);var _mi=_p.up("log_ingb").getMI();
	if(_TE==7){fext_CC("log.Ingresos").li_Delete({comp:_p,"btn":btn,"opt":opt,mi:_mi});}
	else if(_TE=="Per"){fext_CC("pub.PersonasS");var _pan=_p.up("log_ingb");_pan.setCompPPS(fext_compSearch({cc:_p,os:_pan.getCompPPS(),v:"Siace.view.pub.PersonasS",tit:"Búsqueda de Proveedor ::.",ck:fext_GV(_p,"pers_key"),TQ:"ONLY_WITH_RUC"}));}
	else{fext_CC("log.Ingresos").li_View({comp:_p,TE:_TE,mi:_mi,oi:_TE,yi:fext_GV(_p,"year_id")});}
}
});