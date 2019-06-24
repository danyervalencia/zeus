Ext.define("Siace.controller.bud.MetaBT6",{extend:"Ext.app.Controller",
bmb_btn:function(btn){var _t=btn.up("#tabLO");var _ii=fext_oii(btn);if(_ii=="btnPrinter"){fext_CC("log.Ordenes").lo_Printer({comp:_t});}else if(_ii=="btnFases"){fext_CC("log.Ordenes").lo_Fases({comp:_t});}},
bmb_sc:function(mod,r){if(r.length==1){var _t=mod.view.up("#tabLO");var _fg=r[0].data.orden_flga==98?true:"";fext_SDO(_t,"btnPrinter","",8,_fg);fext_SDO(_t,"btnFases","",5029,_fg||r[0].data.expe_nro*1<=0?true:"");}}
});