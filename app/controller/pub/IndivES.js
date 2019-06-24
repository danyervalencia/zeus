Ext.define("Siace.controller.pub.IndivES",{extend:"Ext.app.Controller",
pie:function(btn){var _w=btn.up("window");var _frm=_w.down("form");
	if(fext_GV(_w,"tipdocident_id")*1<=0){fext_MsgA("Debe indicar el Tipo de Documento de Identidad",_w.down("#tipdocident_id"));return false;}
	if(fext_IE(_w,"indiv_dni")){fext_MsgA("Debe indicar el DNI",_w.down("#indiv_dni"));return false;}
	if(fext_IE(_w,"indiv_appaterno")&&fext_IE(_w,"indiv_apmaterno")){fext_MsgA("Debe indicar apellidos",_w.down("#indiv_appaterno"));return false;}
	if(!_frm.getForm().isValid()){return false;}var _cc=_w.getCC();
	Ext.Msg.confirm("Confirmación",trnslt.msg_qst_save,function(b){if(b=="yes"){
		_frm.getForm().submit({url:"php/public_individuos_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"OK",xxIndiv_key:_w.getCK(),xxTipdocident_id:fext_GV(_w,"tipdocident_id"),xxIndiv_dni:fext_GV(_w,"indiv_dni"),xxPais_id:fext_GV(_w,"pais_id"),xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!=null){_w.getCS().load();}else if(_cc!=null){fext_SV(_cc,"indiv_key",_res.indiv_key);fext_SV(_cc,"indiv_dni",fext_GV(_w,"indiv_dni"));fext_SV(_cc,"indiv_apenom",fext_GV(_w,"indiv_appaterno") + (fext_IE(_w,"indiv_apmaterno")?"":" "+fext_GV(_w,"indiv_apmaterno"))+", "+fext_GV(_w,"indiv_nombres"));}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
}
});