Ext.define("Siace.controller.pub.ComplBB",{extend:"Ext.app.Controller",
pcb:function(btn){var _p=btn.up("#panPC");var _TE=fext_btnTE(btn);var _mi=_p.up("pub_complb").getMI();
	if(_TE=="Del"){}else{fext_CC("pub.Complementarios").pc_View({comp:_p,TE:_TE,mi:_mi,oi:_TE});}
}
});