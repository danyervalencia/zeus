Ext.define("Siace.controller.bud.NotaFaseR",{extend:"Ext.app.Controller",
bnfr:function(poP){var _cp=poP["comp"];var _opt=poP["opt"];var _grd=(poP["grd"]==undefined?"grdBN":poP["grd"]);if(fextpub_uamoBtn("",45,_cp)){return false;}
	if(_opt==undefined){var _r=fext_grdSR(_cp,_grd);if(!_r){return false;}
		Ext.Msg.confirm("Confirmación","¿Esta Ud. seguro de RECHAZAR la Nota Presupuestal seleccionada?",function(b){if(b=="yes"){fext_CC("pub.UsuariosPsw2");var _w=fext_CW("pub.UsuariosPsw2");_w.setCB(poP["btn"]);_w.setCK(_r.data.nota_key);_w.down("#subtitle").setValue(_rec.data.nota_documento);_w.setFT(45);_w.show();}});
	}else{var _w=_opt.win;var _str=fext_GS(_cp,_grd);fext_mask(_cp);
		Ext.Ajax.request({url:"php/budget_notas_fases_save_reject.php",params:{xx0005:"YES",xxNota_key:_opt.key,xxUsur_psw2:_opt.usur_psw2,xxNota_observ:_opt.observ,xxMenu_id:poP["mi"],vs:fext_JE(fextpub_sessVar())},
			success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){_w.close();_str.load({callback:function(rec){fext_unmask(_cp);}});}else{fext_unmask(_cp);fext_MsgE(_res.msg);}},failure:function(resp,opt){fext_unmask(_cp);fext_MsgE("",resp);}
		});
	}
}
});