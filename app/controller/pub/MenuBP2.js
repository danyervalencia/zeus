Ext.define("Siace.controller.pub.MenuBP2",{extend:"Ext.app.Controller",
pmb_btn:function(btn){var _t=btn.up("#tabD");_TE=fext_btnTE(btn);if(_TE==8){fext_CC("log.Ordenes").lo_Printer({comp:_t,grd:"grdD"});}else if(_TE=="Fas"){fext_CC("log.Ordenes").lo_Fases({comp:_t});}},
pmb_sc:function(mod,r){if(r.length==1){var _p=mod.view.up("#panU");var _e=r[0].data.usuraccemenuopc_estado;fext_SDO(_p,"btnH","",43,_e*1==1?true:"");fext_SDO(_p,"btnD","",44,_e*1!=1?true:"");}},
});