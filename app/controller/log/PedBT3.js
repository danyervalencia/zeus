Ext.define("Siace.controller.log.PedBT3",{extend:"Ext.app.Controller",
lpb_sc:function(mod,r){if(r.length==1){var _t=mod.view.up("#tabLO");var _fg=r[0].data.orden_flga==98?true:"";var _om=r[0].data.orden_monto*1;var _en=r[0].data.expe_nro*1;fext_SDO(_t,"btnPrinter","",8,_fg||_om<=0||_en<=0?true:"");fext_SDO(_t,"btnFases","",5029,_fg||_om<=0||_en<=0?true:"");}}
});