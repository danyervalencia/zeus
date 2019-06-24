Ext.define("Siace.controller.pub.BSBB",{extend:"Ext.app.Controller",
pbsb:function(btn){var _p=btn.up("#pan");var _TE=fext_btnTE(btn);fext_CC("pub.Bienes_Servs").pbs_View({comp:_p,TE:_TE,mi:_p.up("pub_bsb").getMI()});},
});