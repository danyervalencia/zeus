Ext.define("Siace.controller.bud.TareaBT2",{extend:"Ext.app.Controller",
btb_btn:function(btn){var _t=btn.up("#tabBTA");var _TE=fext_btnTE(btn);fext_CC("bud.TareaArea").bta_View({comp:_t,TE:_TE,tk:fext_grdSR(_t.up("bud_tareab").down("#grdBT")).data.tarea_key});},
btb_sc:function(mod,r){if(r.length==1){var _t=mod.view.up("#tabBTA");fext_SDO(_t,"btnModify","",2);fext_SDO(_t,"btnQuery","",3);}}
});