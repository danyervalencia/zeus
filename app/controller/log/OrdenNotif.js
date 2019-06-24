Ext.define("Siace.controller.log.OrdenNotif",{extend:"Ext.app.Controller",
lon_View:function(poP){var _comp=poP["comp"];var _opt=poP["opt"];var _grd=(poP["grd"]==undefined?"grdLO":poP["grd"]);if(fextpub_uamoBtn("",64,_comp)){return false;}var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}
	if(Ext.isEmpty(_r.data.orden_fechanotif)){fext_CC("log.Ordenes_NotificacionesE");var _w=fext_CW("log.Ordenes_NotificacionesE");_w.setTE(1);_w.setCS(fext_GS(_comp,_grd));fext_SV(_w,"orden_key",_r.data.orden_key);_w.setMI(poP["mi"]);_w.show();}
	else{
		if(_opt==undefined){Ext.Msg.confirm("Confirmación","¿Esta Ud. seguro de ELIMINAR la Fecha de Notificación a la Orden seleccionada?",function(b){if(b=="yes"){fext_CC("pub.UsuariosPsw2");var _w=fext_CW("pub.UsuariosPsw2");_w.setCB(poP["btn"]);_w.setCK(_r.data.orden_key);_w.down("#subtitle").setValue(_r.data.orden_documento);_w.setFT(7);_w.show();}});}
		else{var _w=_opt.win;var _str=fext_GS(_comp,"grdLO");var _mi=_comp.up("log_ordenb").getMI();fext_mask(_comp);
			Ext.Ajax.request({url:"php/logistics_ordenes_notificaciones_delete.php",params:{xx0010:"YES",xxOrden_key:_opt.key,xxUsur_psw2:_opt.usur_psw2,xxOrdennotif_observ:_opt.observ,xxMenu_id:poP["mi"],vs:fext_JE(fextpub_sessVar())},success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){_w.close();_str.load({callback:function(rec){fext_unmask(_comp);}});}else{fext_unmask(_comp);fext_MsgE(_res.msg);}},failure:function(resp,opt){fext_unmask(_comp);fext_MsgE(resp.responseText);}});
		}
	}
}
});