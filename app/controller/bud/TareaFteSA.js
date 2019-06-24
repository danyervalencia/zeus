Ext.define("Siace.controller.bud.TareaFteSA",{extend:"Ext.app.Controller",
btfs:function(btn){var _w=btn.up("window");var _close=true;var _r=fext_grdSR(_w,"");if(!_r||(_r.data.tareafte_key==_w.getCK())){return false;}
	if(fext_IE(_w,"area_keyx")){fext_MsgA("Debe indicar la Unidad Orgánica a la se afectará el Gasto Presupuestal");return false;}
	if(_w.getTRE()=="ADD_EGRESOS"){_close=fext_CC("bud.EgresosE").bee_grdBETFAdd(_w.getCC(),_r,{area_key:fext_GV(_w,"area_keyx"),area_abrev:_w.down("#area_keyx").getRawValue()});
		if(_close){fext_Dsb(_w,"btnAccept");}
	}else if(_w.getTRE()=="ADD_COMPE14"){
		_close=fext_CC("log.CompE14GA").lce(_w.getCC(),_r,{area_key:fext_GV(_w,"area_keyx"),area_abrev:_w.down("#area_keyx").getRawValue()});
		if(_close){fext_Dsb(_w,"btnAccept");}
	}
	if(_close){_w.close();if(_w.getAD()){_w.destroy();}}}
});