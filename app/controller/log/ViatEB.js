Ext.define("Siace.controller.log.ViatEB",{extend:"Ext.app.Controller",
lve:function(btn){var _w=btn.up("window");var _TE=fext_btnTE(btn);
	if(_TE==5){fext_CC("log.ViatES").lves(_w);}
	else if(_TE==13||_TE==2){fext_CC("log.ViatEG").lve(_w,_TE);}
	else if(_TE=="RTS"){fext_CC("rrhh.TrabajadoresS");_w.setCompRTS(fext_compSearch({cc:_w,os:_w.getCompRTS(),v:"Siace.view.rrhh.TrabajadoresS",tit:"Búsqueda de Comisionado ::.",ck:fext_GV(_w,"trabj_key")}));}
	else if(_TE=="Cal"){fext_CC("log.ViatE").lve_Calc(_w);}
	else if(_TE=="Sup"){var _r=fext_grdSR(_w,"grdLVD");if(_r){fext_Dsb(_w,"btnModify");btn.disable();fext_GS(_w,"grdLVD").remove(_r);fext_CC("log.ViatE").lve_montoU(_w,_r.data.viatdet_pretot*(-1));}}
	else{_w.close();_w.destroy();}
}
});