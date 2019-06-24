Ext.define("Siace.controller.log.PedBCT2",{extend:"Ext.app.Controller",
lpb_btn:function(btn){var _t=btn.up("#tabLPW");var _TE=fext_btnTE(btn);fext_CC("log.PedWeb").lpw_View({comp:_t,TE:_TE,pk:fext_grdSR(_t.up("log_pedbc"),"grdLP").data.ped_key});},
lpb_sc:function(mod,r){if(r.length==1){var _t=mod.view.up("#tabLPW");fext_SDO(_t,"btnModify","",2);fext_SDO(_t,"btnQuery","",3);}}
});