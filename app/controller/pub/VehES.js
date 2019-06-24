Ext.define("Siace.controller.pub.VehES",{extend:"Ext.app.Controller",
pve:function(btn){var _w=btn.up("window");var _frm=_w.down("form");var _TE=_w.getTE();var _pk=(fext_GV(_w,"tipdocident_id")==3?fext_GV(_w,"pers_key"):fext_GV(_w,"indiv_key"));
	if(fext_GV(_w,"tipveh_id")*1<=0){fext_MsgA("Debe indicar el Tipo de Vehículo",_w.down("#tipveh_id"));return false;}
	if(fext_IE(_w,"veh_nro")){fext_MsgA("Debe indicar la Placa del Vehículo",_w.down("#veh_nro"));return false;}
	if(!_frm.getForm().isValid()){return false;}
	Ext.Msg.confirm("Confirmación",trnslt.msg_qst_save,function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/public_vehiculos_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxVeh_key:_w.getCK(),xxPers_key:_pk,xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);var _cc=_w.getCC();
				if(_res.success){
					if(_w.getCS()!==null){_w.getCS().load();}
					else if(_cc!==null){fext_SV(_cc,"veh_key",_res.veh_key);fext_SV(_cc,"veh_placa",fext_GV(_w,"veh_serie")+"-"+fext_GV(_w,"veh_nro"));if(_cc.down("#veh_detalle")){fext_SV(_cc,"veh_detalle",fext_GRV(_w,"tipveh_id"));}}_w.close();
				}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
}
});