Ext.define("Siace.controller.log.PedBVBB",{extend:"Ext.app.Controller",
lpbvb:function(btn,opt){var _p=btn.up("#pan");var _TE=fext_btnTE(btn);var _mi=_p.up("log_pedbvb").getMI();
	if(_TE=="Fas"){fext_CC("log.PedFase").lpf_Printer({comp:_p,mi:_mi});}
	else if(_TE=="Vob"){fext_CC("log.PedFaseVB").lpfvb_VB({comp:_p,"btn":btn,"opt":opt,mi:_mi});}
	else if(_TE=="Rej"){fext_CC("log.PedFaseRJ").lpfrj_RJ({comp:_p,"btn":btn,"opt":opt,mi:_mi});}
	else{fext_CC("log.Pedidos").lp_View({comp:_p,TE:(_TE==5001?12:(_TE=="Det"?0:(_TE==3?23:_TE))),mi:_mi,oi:(_TE=="Det"?59:_TE),yi:fext_GV(_p,"year_id")});}
}
});