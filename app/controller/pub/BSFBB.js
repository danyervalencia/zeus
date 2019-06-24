Ext.define("Siace.controller.pub.BSFBB",{extend:"Ext.app.Controller",
pbsfb:function(btn){var _p=btn.up("#pan");var _TE=fext_btnTE(btn);fext_CC("pub.BSF").pbsf_View({comp:_p,TE:_TE,mi:_p.up("pub_bsfb").getMI()});},
});