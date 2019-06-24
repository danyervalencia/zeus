Ext.define("Siace.controller.pub.AreaBT2",{extend:"Ext.app.Controller",
pab_btn:function(btn){var _t=btn.up("#tabPUA");var _TE=fext_btnTE(btn);if(_TE=="Tar"){fext_CC("bud.TareaUsurAcce").btua_Brow({comp:_t,grd:"grdPUA"});}else if(_TE=="Men"){fext_CC("pub.UsurAcce").pua_Menu({comp:_t});}else{fext_CC("pub.UsurAcce").pua_View({comp:_t,TE:_TE});}},
pab_sc:function(mod,r){if(r.length==1){var _t=mod.view.up("#tabPUA");fext_SDO(_t,"btnModify","",2);fext_SDO(_t,"btnQuery","",3);fext_SDO(_t,"btnTarea","",2001);fext_SDO(_t,"btnMenu","",25);}},
});