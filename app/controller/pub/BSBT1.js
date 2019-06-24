Ext.define("Siace.controller.pub.BSBT1",{extend:"Ext.app.Controller",
pbsb_btn:function(btn){var _ii=fext_oii(btn);var _t=btn.up("#tabPBSED");var _TE=fext_btnTE(btn);fext_CC("pub.BSEspeDet").pbsed_View({comp:_t,TE:_TE,bsk:fext_grdSR(_t.up("pub_bsb"),"grdPBS").data.bs_key});},
pbsb_sc:function(mod,r){if(r.length==1){var _t=mod.view.up("#tabPBSED");fext_SDO(_t,"btnModify","",2);fext_SDO(_t,"btnDelete","",7);}},
});