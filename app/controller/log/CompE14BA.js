Ext.define("Siace.controller.log.CompE14BA",{extend:"Ext.app.Controller",
lce:function(btn){var _w=btn.up("window");var _ffi=(fext_IE(_w,"fuefin_id"))||fext_GV(_w,"fuefin_id")*1<=0?0:fext_GV(_w,"fuefin_id");
	if(_ffi<=0){fext_MsgA("Debe indicar el Rubro Presupuestal",_w.down("#fuefin_id"));return false;}fext_CC("bud.Tareas_FftredSA");
	if(Ext.isEmpty(_w.getCompBTFS())){var _wS=fext_CW("bud.Tareas_FftredSA");_wS.setCC(_w);_wS.setTRE("ADD_COMPE14");_w.setCompBTFS(_wS);}
	else{var _wS=_w.getCompBTFS();}_wS.setF(_w.getF());_w.setF(false);_wS.setYI(fext_GV(_w,"year_id"));_wS.setFFI(_ffi);_wS.show();
}
});