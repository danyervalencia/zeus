Ext.define("Siace.controller.rrhh.TrabjBB",{extend:"Ext.app.Controller",
rtb:function(btn,opt){var _p=btn.up("#pan");var _TE=fext_btnTE(btn);var _mi=_p.up("rrhh_trabjb").getMI();
	if(_TE==8){fext_CC("bud.EgreBA").beb({comp:_p,"btn":btn,"opt":opt,mi:_mi});}
	else{fext_CC("rrhh.Trabj").rt_View({comp:_p,TE:_TE,mi:_mi,oi:_TE,grd:"grdPI"});}
}
});