Ext.define("Siace.controller.log.SalENB",{extend:"Ext.app.Controller",
lse:function(btn){var _w=btn.up("window");var _TE=fext_btnTE(btn);
	if(_TE=="RTS"){var _w=btn.up("window");fext_CC("rrhh.TrabajadoresS");_w.setCompRTS(fext_compSearch({cc:_w,os:_w.getCompRTS(),v:"Siace.view.rrhh.TrabajadoresS",tit:"Búsqueda de Trabajador ::.",ck:fext_GV(_w,"trabj_key")}));}
	else if(_TE==13){
		fext_CC("log.SalidasENSA");if(Ext.isEmpty(_w.getCompLSD())){var _wS=fext_CW("log.SalidasENSA");_wS.setCC(_w);_w.setCompLSD(_wS);}else{var _wS=_w.getCompLSD();}
		fext_SV(_wS,"alma_key",fext_GV(_w,"alma_key"));_wS.show();
	}
	else if(_TE=="Sup"){var _r=fext_grdSR(_w.down("#grdLSD"));if(!_r){return false;}btn.disable();fext_GS(_w,"grdLSD").remove(_r);fext_SV(poC,"sal_monto",fext_GV(poC,"sal_monto")*1 - _r.data.saldet_pretot*1);}
	else if(_TE==6||_TE=="Exi"){_w.close();}
}
});