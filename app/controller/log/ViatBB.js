Ext.define("Siace.controller.log.ViatBB",{extend:"Ext.app.Controller",
lvb:function(btn,opt){var _p=btn.up("#pan");var _TE=fext_btnTE(btn);var _mi=_p.up("log_viatb").getMI();
	if(_TE==8){fext_CC("log.Viaticos").lv_Printer({comp:_p,mi:_mi});}
	else if(_TE=="Act"){fext_CC("log.ViatFaseBAct").lvfb({comp:_p,"btn":btn,"opt":opt,mi:_mi});}
	else if(_TE==10){fext_CC("log.ViatBA").lvba({comp:_p,"btn":btn,"opt":opt,mi:_mi});}
	else if(_TE=="Sia"){fext_CC("log.ViatBE").lvbe({comp:_p,"btn":btn,"opt":opt,mi:_mi});}
	else if(_TE=="Fas"){fext_CC("log.Viaticos").lv_Fases({comp:_p});}
	else{_TE=(_TE=="Reb"?12:_TE);fext_CC("log.Viaticos").lv_View({comp:_p,TE:_TE,mi:_mi,oi:(_TE==12?66:_TE),yi:fext_GV(_p,"year_id"),nuk:(fjsIn_array(_TE,[3,12])?"NoT":"")});}
}
});