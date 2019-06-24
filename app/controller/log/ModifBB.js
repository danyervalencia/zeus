Ext.define("Siace.controller.log.ModifBB",{extend:"Ext.app.Controller",
lmb:function(btn,opt){var _p=btn.up("#panLM");var _TE=fext_btnTE(btn);var _mi=_p.up("log_modifb").getMI();
	if(_TE==8){fext_CC("log.Modificaciones").lm_Printer({comp:_p,mi:_mi})}
	else if(_TE==10){}
	else if(_TE=="Vob"){fext_CC("log.ModifFaseVB").lmf({comp:_p,"btn":btn,"opt":opt,mi:_mi});}
	else if(_TE=="Rej"){fext_CC("log.ModifFaseRJ").lmf({comp:_p,"btn":btn,"opt":opt,mi:_mi});}
	else if(_TE=="Fas"){fext_CC("log.ModifFase").lmf_Printer({comp:_p,mi:_mi});}
	else{fext_CC("log.Modificaciones").lm_View({comp:_p,TE:_TE,mi:_mi,oi:_TE,yi:fext_GV(_p,"year_id"),cs:true});}
}
});