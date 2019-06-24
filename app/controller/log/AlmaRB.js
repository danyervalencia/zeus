Ext.define("Siace.controller.log.AlmaRB",{extend:"Ext.app.Controller",
lar:function(btn){var _p=btn.up("#pan");var _TE=fext_btnTE(btn);
	if(_TE=="PPS"){fext_CC("pub.PersonasS");_p.setCompPPS(fext_compSearch({cc:_p,os:_p.getCompPPS(),v:"Siace.view.pub.PersonasS",tit:"Búsqueda de Proveedor ::.",ck:_p.down("#pers_key").getValue(),TQ:"ONLY_WITH_RUC"}));}
	else if(_TE=="BPS"){fext_CC("bud.ProyectosS");_p.setCompSPSS(fext_compSearch({cc:_p,os:_p.getCompSPSS(),v:"Siace.view.bud.ProyectosS",tit:"Búsqueda de Proyecto",ck:fext_GV(_p,"proy_key")}));}
}
});