Ext.define("Siace.controller.log.PlanEB",{extend:"Ext.app.Controller",
lpe:function(btn){var _w=btn.up("window");var _TE=fext_btnTE(btn);
	if(_TE=="PPS"){fext_CC("pub.PersonasS");_w.setCompPPS(fext_compSearch({cc:_w.down("#cntPers"),os:_w.getCompPPS(),v:"Siace.view.pub.PersonasS",tit:"Búsqueda de Proveedor",ck:fext_GV(_w,"pers_key"),TQ:"ONLY_WITH_RUC"}));}
	else if(_TE==13){var _ffi=(fext_IE(_w,"fuefin_id"))||fext_GV(_w,"fuefin_id")*1<=0?0:fext_GV(_w,"fuefin_id");fext_CC("log.PlanillasESC");
		if(Ext.isEmpty(_w.getCompLCS())){var _wS=fext_CW("log.PlanillasESC");_wS.setCC(_w);_w.setCompLCS(_wS);}else{var _wS=_w.getCompLCS();}
		_wS.setYI(fext_GV(_w,"year_id"));fext_SV(_wS,"tiporden_id",fext_GV(_w,"tiporden_id"));fext_SV(_wS,"fuefin_id",_ffi);fext_SV(_wS,"pers_key",fext_GV(_w,"pers_key"));
		fext_SV(_wS,"tiporden_nombre",_w.down("#tiporden_id").getRawValue());fext_SV(_wS,"fuefin_codename",_w.down("#fuefin_id").getRawValue());fext_SV(_wS,"pers_nombre",fext_GV(_w,"pers_nombre"));
		_wS.show();}
	else if(_TE=="Sup"){var _r=fext_grdSR(_w,"grdLPP");if(_r){btn.disable();fext_GS(_w,"grdLPP").remove(_r);fext_SV(_w,"plan_monto",fext_GV(_w,"plan_monto")-_r.data.monto*1);}}
	else if(_TE=="Cer"){fext_CC("log.PlanEBC").lpe(_w);}
	else{_w.close();_w.destroy();}
}
});