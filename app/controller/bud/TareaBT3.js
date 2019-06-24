Ext.define("Siace.controller.bud.TareaBT3",{extend:"Ext.app.Controller",
btb_btn:function(btn){var _t=btn.up("#tabBTUA");var _TE=fext_btnTE(btn);fext_CC("bud.TareaUsurAcce").btua_View({comp:_t,TE:_TE,oi:_TE,uak:fext_grdSR(_t,"grdBTUA").data.usuracce_key});},
btb_sc:function(mod,r){if(r.length==1){var _t=mod.view.up("#tabBTUA");fext_SDO(_t,"btnModify","",2,r[0].data.usuracce_estado==0?true:"");fext_SDO(_t,"btnQuery","",3);}}
});