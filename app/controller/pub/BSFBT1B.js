Ext.define("Siace.controller.pub.BSFBT1B",{extend:"Ext.app.Controller",
pbsfb:function(btn){var _t=btn.up("#tabBS");var _TE=fext_btnTE(btn);fext_CC("pub.Bienes_Servs").pbs_View({comp:_t,TE:_TE,oi:_TE,grd:"grdBS"});}
});