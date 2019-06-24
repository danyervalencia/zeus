Ext.define("Siace.controller.log.OrdenBB",{extend:"Ext.app.Controller",
lob:function(btn,opt){var _p=btn.up("#pan");var _TE=fext_btnTE(btn);var _mi=_p.up("log_ordenb").getMI();
	if(_TE==8){fext_CC("log.Ordenes").lo_Printer({comp:_p,mi:_mi});}
	else if(_TE==10){fext_CC("log.OrdenBA").loba({comp:_p,"btn":btn,"opt":opt,mi:_mi});}
	else if(_TE=="Cha"){fext_CC("log.OrdenBC").lob({comp:_p,mi:_mi});}
	else if(_TE=="Glo"){fext_CC("log.OrdenBG").lob({comp:_p,mi:_mi});}
	else if(_TE=="Sia"){fext_CC("log.OrdenBE").lobe({comp:_p,mi:_mi});}
	else if(_TE=="Not"){fext_CC("log.OrdenNotif").lon_View({comp:_p,"btn":btn,"opt":opt,mi:_mi});}
	else if(_TE=="Fas"){fext_CC("log.Ordenes").lo_Fases({comp:_p});}
	else if(_TE=="Doc"){fext_CC("log.OrdenBBK").lobbk({comp:_p,TE:1,oi:67,yi:fext_GV(_p,"year_id"),mi:_mi});}
	else if(_TE=="PPS"){fext_CC("pub.PersonasS");var _pan=_p.up("panel");_pan.setCompPPS(fext_compSearch({cc:_p,os:_pan.getCompPPS(),v:"Siace.view.pub.PersonasS",tit:"Búsqueda de Proveedor ::.",ck:fext_GV(_p,"pers_key"),TQ:"ONLY_WITH_RUC"}));}
}
});