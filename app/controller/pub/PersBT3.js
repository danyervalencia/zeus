Ext.define("Siace.controller.pub.PersBT3",{extend:"Ext.app.Controller",
ppb_btn:function(btn){var _t=btn.up("#tabPPF");_TE=fext_btnTE(btn);fext_CC("pub.PersFono").ppf_View({comp:_t,TE:_TE,pk:fext_grdSR(_t.up("pub_persb"),"grdPP").data.pers_key});},
ppb_sc:function(mod,r){if(r.length==1){var _t=mod.view.up("#tabPPF");fext_SDO(_t,"btnModify","",2);fext_SDO(_t,"btnQuery","",3);fext_SDO(_t,"btnDelete","",7);}}
});