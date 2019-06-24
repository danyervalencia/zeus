Ext.define("Siace.controller.log.BPBPOB",{extend:"Ext.app.Controller",
lbpb:function(btn,opt){var _p=btn.up("#pan");var _pan=_p.up("log_bpbpo");var _TE=fext_btnTE(btn);var _mi=_pan.getMI();
	if(_TE==2){fext_CC("log.BPBM").lbp({comp:_p,mi:_mi});}
	else if(_TE=="CC"){fext_CC("log.Buena_Pro").lbp_PrinterCC({comp:_p,mi:_mi,d:fext_grdSR(_p,"grdLBP").data});}
	else if(_TE=="BPD"){fext_CC("log.BPBD").lbpb({comp:_p,"btn":btn,"opt":opt,mi:_mi});}
	else if(_TE=="Cer"){fext_CC("log.BPBC").lbpb({comp:_p,"btn":btn,"opt":opt,mi:_mi});}
	else if(_TE=="GO"){fext_CC("log.BPBGO").lbpb({comp:_p,mi:_mi});}
	else if(_TE=="Ord"){fext_CC("log.Ordenes").lo_Printer({comp:_p,grd:"grdLBP",mi:_mi,oi:5026});}
	else if(_TE=="Per"){fext_CC("pub.PersonasS");_pan.setCompPPS(fext_compSearch({cc:_p,os:_pan.getCompPPS(),v:"Siace.view.pub.PersonasS",tit:"Búsqueda de Proveedor ::.",ck:fext_GV(_p,"pers_key"),TQ:"ONLY_WITH_RUC"}));}
}
});