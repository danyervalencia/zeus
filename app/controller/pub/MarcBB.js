Ext.define("Siace.controller.pub.MarcBB",{extend:"Ext.app.Controller",
pmb:function(btn){var _p=btn.up("#panM");var _TE=fext_btnTE(btn);var _mi=_p.up("pub_marcb").getMI();
	if(_TE=="Del"){fext_CC("pub.MarcBD").pmb({comp:_p,mi:_mi});}else{fext_CC("pub.Marcas").pm_View({comp:_p,TE:_TE,oi:_TE,mi:_mi});}
}
});