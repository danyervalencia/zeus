Ext.define("Siace.controller.pub.IndivBT2",{extend:"Ext.app.Controller",
pib_btn:function(btn){var _t=btn.up("#tabPIF");_TE=fext_btnTE(btn);fext_CC("pub.IndivFono").pif_View({comp:_t,TE:_TE,d:fext_grdSR(_t.up("pub_indivb"),"grdPI").data});},
pib_sc:function(mod,r){if(r.length==1){var _t=mod.view.up("#tabPIF");fext_SDO(_t,"btnModify","",2);fext_SDO(_t,"btnQuery","",3);fext_SDO(_t,"btnDelete","",7);}}
});