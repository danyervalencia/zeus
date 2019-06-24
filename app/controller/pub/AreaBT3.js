Ext.define("Siace.controller.pub.AreaBT3",{extend:"Ext.app.Controller",
pab_btn:function(btn){var _t=btn.up("#tabLFA");var _TE=fext_btnTE(btn);fext_CC("log.FaseAcce").lfa_View({comp:_t,TE:_TE,ak:fext_grdSR(_t.up("pub_areab"),"grdPA").data.area_key});},
pab_sc:function(mod,r){if(r.length==1){var _t=mod.view.up("#tabLFA");fext_SDO(_t,"btnModify","",2);fext_SDO(_t,"btnQuery","",3);fext_SDO(_t,"btnDelete","",7);}},
});