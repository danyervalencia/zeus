Ext.define("Siace.controller.pub.UsurBB",{extend:"Ext.app.Controller",
pub:function(btn){var _p=btn.up("#pan");var _TE=fext_btnTE(btn);_TE=(_TE=="Key"?1001:_TE);fext_CC("pub.Usuarios").pu_View({comp:_p,TE:_TE,mi:_p.up("pub_usurb").getMI()});}});