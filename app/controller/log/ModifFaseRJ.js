Ext.define("Siace.controller.log.ModifFaseRJ",{extend:"Ext.app.Controller",
lmf:function(poP){var _comp=poP["comp"];var _opt=poP["opt"];var _grd=(poP["grd"]==undefined?"grdLM":poP["grd"]);if(fextpub_uamoBtn("",45,_comp)){return false;}
	if(_opt==undefined){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}
		Ext.Msg.confirm("Confirmación","¿Esta Ud. seguro de RECHAZAR el Ajuste Presupuestal seleccionado?",function(b){if(b=="yes"){fext_CC("pub.UsuariosPsw2");var _w=fext_CW("pub.UsuariosPsw2");_w.setCB(poP["btn"]);_w.setCK(_r.data.modif_key);_w.down("#subtitle").setValue(_r.data.modif_documento);_w.setFT(45);_w.show();}});
	}else{var _w=_opt.win;var _str=fext_GS(_comp,_grd);fext_mask(_comp);
		Ext.Ajax.request({url:"php/logistics_modificaciones_fases_save_reject.php",params:{xx0005:"YES",xxModif_key:_opt.key,xxUsur_psw2:_opt.usur_psw2,xxModif_observ:_opt.observ,xxMenu_id:poP["mi"],vs:fext_JE(fextpub_sessVar())},
			success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){_w.close();_str.load({callback:function(rec){fext_unmask(_comp);}});}else{fext_unmask(_comp);fext_MsgE(_res.msg);}},failure:function(resp,opt){fext_unmask(_comp);fext_MsgE("",resp);}
		});
	}
}
});