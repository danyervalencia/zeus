Ext.define("Siace.controller.log.ValBB",{extend:"Ext.app.Controller",
lvb:function(btn,opt){var _p=btn.up("#pan");var _TE=fext_btnTE(btn);var _mi=_p.up("log_valb").getMI();
	if(_TE==8){fext_CC("log.Val08").lv({comp:_p,mi:_mi});}
	else if(_TE==10){fext_CC("log.Val10").lv({comp:_p,"btn":btn,"opt":opt,mi:_mi});}
	else{fext_CC("log.Val").lv_View({comp:_p,TE:_TE,mi:_mi,oi:_TE,yi:fext_GV(_p,"year_id")});}	
}
});