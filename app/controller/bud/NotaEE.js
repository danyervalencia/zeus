Ext.define("Siace.controller.bud.NotaEE",{extend:"Ext.app.Controller",
bne:function(btn){var _w=btn.up("window");var _tn=fext_GV(_w,"tipnota_id");var _wAE=_w.getWAE();
	if(!fjsIn_array(_tn,[2013,2018])){fext_MsgA("Tipo de Nota Presupuestal, no permite Anulación",_w.down("#tipnota_id"));return false;}
	if(fext_IE(_w.down("#fftr_id"))||fext_GV(_w,"fftr_id")*1<=0){fext_MsgA("Debe indicar el Rubro Presupuestal");return false;}
	if(Ext.isEmpty(_wAE)){fext_CC("bud.Notas_DetSE");_wAE=fext_CW("bud.Notas_DetSE");_wAE.setCC(_w);_w.setWAE(_wAE);}_wAE.setF(_w.getFE());
	if(_w.getFE()){fext_SV(_wAE,"fftr_codename","&nbsp; "+_w.down("#fftr_id").getRawValue());}_w.setFE(false);_wAE.show();
}
});