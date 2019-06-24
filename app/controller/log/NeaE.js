Ext.define("Siace.controller.log.NeaE",{extend:"Ext.app.Controller",
lne_Add:function(poW){var _w=poW;var _tn=fext_GV(_w,"tipnea_id");var _ff=fext_GV(_w,"fuefin_id");
	if(_ff*1<=0){fext_MsgA("Debe indicar el Rubro Presupuestal",_w.down("#fuefin_id"));return false;}
	if(_tn==5091){var _mk=fext_GV(_w,"meta_key");if(fext_IE(_w,"proy_key")&&Ext.isEmpty(_mk)){fext_MsgA("Debe indicar el SNIP y/o la Secuencia Funcional");return false;}
		fext_CC("log.Neas_DetSA1");if(Ext.isEmpty(_w.getCompLNDS())){var _wS=fext_CW("log.Neas_DetSA1");_wS.setCC(_w);_w.setCompLNDS(_wS);}else{var _wS=_w.getCompLNDS();}
		fext_SV(_wS,"proy_code",fext_GV(_w,"proy_code"));fext_SV(_wS,"meta_id",_mk);fext_SV(_wS,"fuefin_id",_ff);_wS.show();
	}else if(fjsIn_array(_tn,[5094,5095])){fext_CC("log.Neas_DetSAE");
		if(Ext.isEmpty(_w.getCompLNDS())){var _wS=Ext.create("Siace.view.log.Neas_DetSAE");_wS.setCC(_w);_w.setCompLNDS(_wS);}else{var _wS=_w.getCompLNDS();}_wS.show();
	}
}
});