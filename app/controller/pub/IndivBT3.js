Ext.define("Siace.controller.pub.IndivBT3",{extend:"Ext.app.Controller",
pib_btn:function(btn){var _t=btn.up("#tabLV");_TE=fext_btnTE(btn);if(_TE=="Pri"){fext_CC("log.Viaticos").lv_Printer({comp:_t,tit:1});}else if(_TE=="Fas"){fext_CC("log.Viaticos").lv_Fases({comp:_t});}},
pib_sc:function(mod,r){if(r.length==1){var _t=mod.view.up("#tabLV");var _fg=r[0].data.viat_flga==98?true:"";fext_SDO(_t,"btnPrinter","",8,_fg);fext_SDO(_t,"btnFases","",5029,_fg||r[0].data.expe_nro*1<=0?true:"");}}
});