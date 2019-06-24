Ext.define("Siace.controller.log.OrdenBT2",{extend:"Ext.app.Controller",
lob_btn:function(btn){var _t=btn.up("#tabLOP");var _TE=fext_btnTE(btn);if(_TE=="Pri"){fext_CC("log.OrdenProc").lop_Printer({comp:_t});}else{fext_CC("log.OrdenProc").lop_View({comp:_p});}},
lob_sc:function(mod,r){if(r.length==1){var _t=mod.view.up("#tabLOP");fext_SDO(_t,"btnQuery","",3);fext_SDO(_t,"btnPrinter","",8,r[0].data.tablex==5020?true:"");}},
});