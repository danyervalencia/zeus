Ext.define("Siace.controller.rrhh.TrabjEB",{extend:"Ext.app.Controller",
rte:function(btn){var _w=btn.up("window");var _TE=fext_btnTE(btn);
	if(_TE==5){fext_CC("rrhh.TrabjES").rte(btn);}
	else if(_TE=="PIS"){fext_CC("pub.IndividuosS");_w.setCompPIS(fext_compSearch({cc:_w.down("#cntIndiv"),os:_w.getCompPIS(),v:"Siace.view.pub.IndividuosS",tit:"Búsqueda de Persona ::.",ck:fext_GV(_w,"indiv_key")}));}
	else{_w.close();_w.destroy();}
}
});