Ext.define("Siace.controller.log.ValBT1B",{extend:"Ext.app.Controller",
lvb:function(btn,opt){var _t=btn.up("#tabLVD");var _TE=fext_btnTE(btn);
	if(_TE==10){fext_CC("log.ValAtend10").lvaa(btn,opt);}
	else{var _pan=_t.up("log_valb");fext_CC("log.ValAtend").lva_View({comp:_pan,TE:"505"+_TE,vak:fext_GV(_pan,"valatend_key"),vk:fext_grdSR(_pan,"grdLV").data.val_key,mi:_pan.getMI(),oi:"505"+_TE});}
}
});