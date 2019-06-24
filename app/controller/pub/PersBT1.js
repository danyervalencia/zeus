Ext.define("Siace.controller.pub.PersBT1",{extend:"Ext.app.Controller",
ppb_btn:function(btn){var _t=btn.up("#tabPPA");_TE=fext_btnTE(btn);fext_CC("pub.PersActiv").ppa_View({comp:_t,TE:_TE,pk:fext_grdSR(_t.up("pub_persb"),"grdPP").data.pers_key});},
ppb_sc:function(mod,r){if(r.length==1){var _t=mod.view.up("#tabPPA");fext_SDO(_t,"btnModify","",2);fext_SDO(_t,"btnQuery","",3);fext_SDO(_t,"btnDelete","",7);}},
});