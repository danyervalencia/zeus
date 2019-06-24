Ext.define("Siace.controller.pub.IndivBB",{extend:"Ext.app.Controller",
pib_btn:function(btn){var _p=btn.up("#pan");var _TE=fext_btnTE(btn);fext_CC("pub.Individuos").pp_View({comp:_p,TE:_TE,mi:_p.up("pub_indivb").getMI(),oi:_TE});}
});