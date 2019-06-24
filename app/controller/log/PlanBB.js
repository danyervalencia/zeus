Ext.define("Siace.controller.log.PlanBB",{extend:"Ext.app.Controller",
lpb:function(btn,opt){var _p=btn.up("#pan");var _TE=fext_btnTE(btn);var _mi=_p.up("log_planb").getMI();
	if(_TE==8){fext_CC("log.Plan").lp_Printer({comp:_p,mi:_mi,oi:_TE});}
	else if(_TE==10){fext_CC("log.Plan").lp_Delete({comp:_p,"btn":btn,"opt":opt,mi:_mi});}
	else if(_TE=="PPS"){fext_CC("pub.PersonasS");var _pan=_p.up("log_planb");_pan.setCompPPS(fext_compSearch({cc:_p,os:_pan.getCompPPS(),v:"Siace.view.pub.PersonasS",tit:"Búsqueda de Proveedor ::.",ck:fext_GV(_p,"pers_key"),TQ:"ONLY_WITH_RUC"}));}
	else if(_TE=="GO"){fext_CC("log.PlanBBGO").lpb({comp:_p,mi:_mi});}
	else{_TE=(_TE=="Cer"?5028:_TE);fext_CC("log.Plan").lp_View({comp:_p,TE:_TE,mi:_mi,oi:_TE,"btn":btn,"opt":opt,yi:fext_GV(_p,"year_id")});}

}
});