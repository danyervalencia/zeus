Ext.define("Siace.controller.log.IngRB",{extend:"Ext.app.Controller",
lir:function(btn){var _p=btn.up("#pan");var _TE=fext_btnTE(btn);
	if(_TE=="PPS"){fext_CC("pub.PersonasS");_p.setCompPPS(fext_compSearch({cc:_p,os:_p.getCompPPS(),v:"Siace.view.pub.PersonasS",tit:"Búsqueda de Proveedor ::.",ck:fext_GV(_p,"pers_key"),TQ:"ONLY_WITH_RUC"}));},
	else if(_TE=="SPS"){fext_CC("siaf.Proyecto_SnipS");_p.setCompSPSS(fext_compSearch({cc:_p,os:_p.getCompSPSS(),v:"Siace.view.siaf.Proyecto_SnipS",tit:"Búsqueda de SNIP",ck:fext_GV(_p,"proysnip_key")}));}
}
});