Ext.define("Siace.controller.bud.EgreBB",{extend:"Ext.app.Controller",
beb:function(btn,opt){var _p=btn.up("#pan");var _TE=fext_btnTE(btn);var _mi=_p.up("bud_egreb").getMI();
	if(_TE==8){}
	else if(_TE==10){fext_CC("bud.EgreBA").beb({comp:_p,"btn":btn,"opt":opt,mi:_mi});}
	else if(_TE=="PIS"){fext_CC("pub.IndividuosS");_p.setCompPIS(fext_compSearch({cc:_p.down("#cntIndiv"),os:_p.getCompPIS(),v:"Siace.view.pub.IndividuosS",tit:"Búsqueda de Persona ::.",ck:fext_GV(_p,"indiv_key")}));}
	else if(_TE=="PPS"){fext_CC("pub.PersonasS");_p.setCompPPS(fext_compSearch({cc:_p.down("#cntPers"),os:_p.getCompPPS(),v:"Siace.view.pub.PersonasS",tit:"Búsqueda de Proveedor",ck:fext_GV(_p,"pers_key"),TQ:"ONLY_WITH_RUC"}));}
	else if(_TE=="Sia"){fext_CC("bud.EgreBE").beb({comp:_p,"btn":btn,"opt":opt,mi:_mi});}
	else if(_TE=="Fas"){fext_CC("bud.Egresos").be_Fases({comp:_p});}
	else{fext_CC("bud.Egresos").be_View({comp:_p,TE:_TE,mi:_mi,oi:_TE,yi:fext_GV(_p,"year_id")});}
}
});