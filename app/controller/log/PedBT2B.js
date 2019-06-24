Ext.define("Siace.controller.log.PedBT2B",{extend:"Ext.app.Controller",
lpb:function(btn,opt){var _t=btn.up("#tabLC");var _TE=fext_btnTE(btn);var _mi=_t.up("log_pedb").getMI();console.log(_TE);
	if(_TE=="Pri"){fext_CC("log.Cotizaciones").lc_Printer({comp:_t});}
	else if(_TE=="Cua"){fext_CC("log.Buena_Pro").lbp_PrinterCC({comp:_t,d:fext_grdSR(_t.up("log_pedb"),"grdLP").data,f:32});}
	else{fext_CC("log.Cotizaciones").lc_View({comp:_t,TE:3,oi:3});}
}
});