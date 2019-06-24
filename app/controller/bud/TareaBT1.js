Ext.define("Siace.controller.bud.TareaBT1",{extend:"Ext.app.Controller",
btb_btn:function(btn){var _t=btn.up("#tabBTF");var _TE=fext_btnTE(btn);fext_CC("bud.Tareas_Fftred").btf_View({comp:_t,TE:_TE,yi:fext_GV(_t,"year_id"),tk:fext_grdSR(_t.up("bud_tareab"),"grdBT").data.tarea_key});},
btb_sc:function(mod,r){if(r.length==1){var _t=mod.view.up("#tabBTF");fext_SDO(_t,"btnModify","",2);fext_SDO(_t,"btnQuery","",3);}}
});