Ext.define("Siace.controller.bud.EgreEB",{extend:"Ext.app.Controller",
bee:function(btn){var _w=btn.up("window");var _TE=fext_btnTE(btn);
	if(_TE==5){fext_CC("bud.EgreES").bee(btn);}
	else if(_TE=="PIS"){fext_CC("pub.IndividuosS");_w.setCompPIS(fext_compSearch({cc:_w.down("#cntIndiv"),os:_w.getCompPIS(),v:"Siace.view.pub.IndividuosS",tit:"Búsqueda de Persona ::.",ck:fext_GV(_w,"indiv_key")}));}
	else if(_TE=="PPS"){fext_CC("pub.PersonasS");_w.setCompPPS(fext_compSearch({cc:_w.down("#cntPers"),os:_w.getCompPPS(),v:"Siace.view.pub.PersonasS",tit:"Búsqueda de Proveedor",ck:fext_GV(_w,"pers_key"),TQ:"ONLY_WITH_RUC"}));}
	else{_w.close();_w.destroy();}
}
});