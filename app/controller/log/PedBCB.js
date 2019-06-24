Ext.define("Siace.controller.log.PedBCB",{extend:"Ext.app.Controller",
lpb:function(btn,opt){var _p=btn.up("#pan");var _pan=_p.up("log_pedbc");var _TE=fext_btnTE(btn);var _mi=_pan.getMI();
	if(_TE==8){fext_CC("log.Pedidos").lp_Printer({comp:_p,mi:_mi});}
	else if(_TE==13){fext_CC("log.PedBA61").lpb({comp:_p,TE:5006,mi:_mi});}
	else if(_TE=="Fas"){fext_CC("log.PedFase").lpf_Printer({comp:_p,mi:_mi});}
	else if(_TE=="Sol"){fext_CC("log.PedBS").lpb({comp:_p});}
	else if(_TE=="Rej"){fext_CC("log.PedFaseBLR").lpfb({comp:_p,"btn":btn,"opt":opt,mi:_mi});}
	else{fext_CC("log.PedBCV").lpb({comp:_p,TE:(_TE==5001?12:(_TE=="Det"?0:_TE)),mi:_mi,oi:(_TE=="Det"?59:_TE),yi:fext_GV(_p,"year_id")});}
}
});