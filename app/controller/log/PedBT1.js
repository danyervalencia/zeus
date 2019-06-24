Ext.define("Siace.controller.log.PedBT1",{extend:"Ext.app.Controller",
lpb_sc:function(mod,r){if(r.length==1){var _pan=mod.view.up("log_pedb");_p=_pan.down("#panLP");_t=_pan.down("#tabLPD");var _r=fext_grdSR(_p,"");var _fo=_r.data.fase_orden;fext_SDO(_t,"btnModify","",2,_fo==0?"":true);fext_SDO(_t,"btnQuery","",3);fext_SDO(_t,"btnDelete","",2,_fo==0?"":true);}}

});