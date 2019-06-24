Ext.define("Siace.controller.log.PedBT3B",{extend:"Ext.app.Controller",
lpb:function(btn,opt){var _t=btn.up("#tabLO");var _TE=fext_btnTE(btn);var _mi=fext_GV(_t,"menu_id");if(_TE==8){fext_CC("log.Ordenes").lo_Printer({comp:_t,mi:_mi});}else if(_TE=="Fas"){fext_CC("log.Ordenes").lo_Fases({comp:_t,mi:_mi});}}
});