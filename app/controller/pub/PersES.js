Ext.define("Siace.controller.pub.PersES",{extend:"Ext.app.Controller",
ppe:function(btn){var _w=btn.up("window");var _frm=_w.down("form");
	if(fext_GV(_w,"tipdocident_id")*1<=0){fext_MsgA("Debe indicar el Tipo de Registro",_w.down("#pers_ruc"));return false;}
	if(fext_GV(_w,"tipdocident_id")*1!=99){if(fext_IE(_w,"pers_ruc")){fext_MsgA("Debe de indicar el Número Registro",_w.down("#pers_ruc"));return false;}}
	if(!_frm.getForm().isValid()){return false;}var _cc=_w.getCC();
	Ext.Msg.confirm("Confirmación",trnslt.msg_qst_save,function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/public_personas_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxPers_key:_w.getCK(),xxMenu_id:_w.getMI(),xxPais_id:fext_GV(_w,"pais_id"),xxDpto_id:fext_GV(_w,"dpto_id"),xxPrvn_id:fext_GV(_w,"prvn_id"),xxDstt_id:fext_GV(_w,"dstt_id"),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!=null){_w.getCS().load();}else if(_cc!=null){fext_SV(_cc,"pers_key",_res.pers_key);fext_SV(_cc,"pers_ruc",fext_GV(_w,"pers_ruc"));fext_SV(_cc,"pers_nombre",fext_GV(_w,"pers_nombre"));}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
}
});