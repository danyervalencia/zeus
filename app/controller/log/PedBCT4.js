Ext.define("Siace.controller.log.PedBCT4",{extend:"Ext.app.Controller",
lpb_btn:function(btn){var _t=btn.up("#tabLO");_TE=fext_btnTE(btn);if(_TE==8){fext_CC("log.Ordenes").lo_Printer({comp:_t});}else if(_TE=="Fas"){fext_CC("log.Ordenes").lo_Fases({comp:_t});}},
lpb_sc:function(mod,r){if(r.length==1){var _t=mod.view.up("#tabLO");var _d=r[0].data;var _fg=_d.orden_flga==98?true:"";var _om=_d.orden_monto*1;fext_SDO(_t,"btnPrinter","",8,_fg||_om<=0?true:"");fext_SDO(_t,"btnFases","",5029,_fg||_om<=0||_d.expe_nro*1<=0?true:"");}}
});