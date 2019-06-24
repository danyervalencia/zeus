Ext.define("Siace.controller.log.ValRB",{extend:"Ext.app.Controller",
lsr:function(btn){var _p=btn.up("#pan");var _TE=fext_btnTE(btn);
	if(_TE=="RTS"){fext_CC("rrhh.TrabajadoresS");_p.setCompRTS(fext_compSearch({cc:_p,os:_p.getCompRTS(),v:"Siace.view.rrhh.TrabajadoresS",tit:"Búsqueda de Trabajador ::.",ck:fext_GV(_p,"trabj_key")}));}
	else if(_TE=="SPS"){fext_CC("siaf.Proyecto_SnipS");_p.setCompSPSS(fext_compSearch({cc:_p,os:_p.getCompSPSS(),v:"Siace.view.siaf.Proyecto_SnipS",tit:"Búsqueda de SNIP",ck:fext_GV(_p,"proysnip_key")}));}
}
});