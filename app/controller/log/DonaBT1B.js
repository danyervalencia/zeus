Ext.define("Siace.controller.log.DonaBT1B",{extend:"Ext.app.Controller",
ldb:function(btn,opt){var _t=btn.up("#tabLDD");var _TE=fext_btnTE(btn);var _pan=_t.up("log_donab");var _p=_pan.down("#panLD");var _mi=_pan.getMI();
	if(_TE=="Del"){fext_CC("log.DonaDetBD").lddb({comp:_t,"btn":btn,"opt":opt,mi:_mi,cte:_p});}
	else{fext_CC("log.DonaDet").ldd_View({comp:_t,TE:_TE,dk:fext_grdSR(_p.down("#grdLD")).data.dona_key,mi:_mi,cte:_p});}
},
});