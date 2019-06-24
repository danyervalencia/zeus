Ext.define("Siace.controller.bud.EgreBT2",{extend:"Ext.app.Controller",
beb_btn:function(btn){var _t=btn.up("#tabTE");var _TE=fext_btnTE(btn);var _mi=_t.up("bud_egreb").getMI();if(_TE=="Pri"){fext_CC("tre.Egresos").te_Printer({comp:_t,mi:_mi});}else if(_TE=="Che"){fext_CC("tre.Egresos").te_Cheque({comp:_t,mi:_mi});}},
beb_sc:function(mod,r){if(r.length==1){var _t=mod.view.up("#tabTE");fext_SDO(_t,"btnAnnular","",10);fext_SDO(_t,"btnPrinter","",8);fext_SDO(_t,"btnCheque","",4005);}}
});