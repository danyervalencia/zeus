Ext.define("Siace.controller.log.PedBCT3B",{extend:"Ext.app.Controller",
lpb:function(btn,opt){var _t=btn.up("#tabLC");var _TE=fext_btnTE(btn);
	if(_TE==8){fext_CC("log.Cotizaciones").lc_Printer({comp:_t});}
	else if(_TE==10){fext_CC("log.CotiBA").lcb({comp:_t,"btn":btn,"opt":opt});}
	else if(_TE=="Bue"){fext_CC("log.Buena_Pro").lbp_View({comp:_t,mi:fext_GV(_t,"menu_id")});}
	else if(fjsIn_array(_TE,["CCP","CCE"])){var _r=fext_grdSR(btn.up("log_pedbc").down("#grdLP"));if(!_r){return false;}fext_CC("log.Buena_Pro").lbp_PrinterCC({comp:_t,d:_r.data,f:_TE=="CCP"?32:33});}
	else{fext_CC("log.Cotizaciones").lc_View({comp:_t,TE:_TE,oi:_TE,pk:fext_grdSR(_t.up("log_pedbc"),"grdLP").data.ped_key});}
}
});