Ext.define("Siace.controller.log.PedBB",{extend:"Ext.app.Controller",
lpb:function(btn,opt){var _p=btn.up("#pan");var _TE=fext_btnTE(btn);var _mi=_p.up("log_pedb").getMI();
	if(_TE==10){fext_CC("log.PedBA").lpb({comp:_p,"btn":btn,"opt":opt,mi:_mi});}
	else if(_TE=="Act"){fext_CC("log.PedFaseBAct").lpfb({comp:_p,"btn":btn,"opt":opt,mi:_mi});}
	else if(_TE=="Fas"){fext_CC("log.PedFase").lpf_Printer({comp:_p,mi:_mi});}
	else{fext_CC("log.Pedidos").lp_View({comp:_p,TE:(_TE==5001?12:(_TE=="Det"?0:_TE)),mi:_mi,oi:(_TE=="Det"?59:_TE),yi:fext_GV(_p,"year_id")});}
}
});