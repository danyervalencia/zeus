Ext.define("Siace.controller.log.DonaBB",{extend:"Ext.app.Controller",
ldb:function(btn,opt){var _p=btn.up("#panLD");var _TE=fext_btnTE(btn);var _mi=_p.up("log_donab").getMI();
	if(_TE=="Del"){fext_CC("log.DonaBA").ldb({comp:_p,"btn":btn,"opt":opt,mi:_mi});}
	else if(_TE=="Per"){fext_CC("pub.PersonasS");var _pan=btn.up("log_donab");_pan.setCompPPS(fext_compSearch({cc:_p,os:_pan.getCompPPS(),v:"Siace.view.pub.PersonasS",tit:"Búsqueda de Proveedor ::.",ck:fext_GV(_p,"pers_key"),TQ:"ONLY_WITH_RUC"}));}
	else{fext_CC("log.Donaciones").ld_View({comp:_p,TE:_TE,mi:_mi,oi:_TE});}
}});