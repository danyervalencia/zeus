Ext.define("Siace.controller.log.NeaBA",{extend:"Ext.app.Controller",
lnb:function(poP){var _comp=poP["comp"];var _opt=poP["opt"];var _grd=(poP["grd"]==undefined?"grdLN":poP["grd"]);if(fextpub_uamoBtn("",10,_comp)){return false;}
	if(_opt==undefined){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}
		Ext.Msg.confirm("Confirmación",trnslt.msg_qst_anul,function(b){if(b=="yes"){fext_CC("pub.UsuariosPsw2");var _w=fext_CW("pub.UsuariosPsw2");_w.setCB(poP["btn"]);_w.setCK(_r.data.nea_key);fext_SV(_w,"subtitle",_r.data.nea_documento);_w.setFT(10);_w.show();}});
	}else{var _w=_opt.win;var _str=fext_GS(_comp,_grd);fext_mask(_comp);
		Ext.Ajax.request({url:"php/logistics_neas_delete.php",params:{xx0010:"YES",xxType_edit:10,xxNea_key:_opt.key,xxUsur_psw2:_opt.usur_psw2,xxNea_observ:_opt.observ,xxMenu_id:poP["mi"],vs:fext_JE(fextpub_sessVar())},
			success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){_w.close();_str.load({callback:function(rec){fext_unmask(_comp);}});}else{fext_unmask(_comp);fext_MsgE(_res.msg);}},failure:function(resp,opt){fext_unmask(_comp);fext_MsgE("",resp);}
		});
	}
}
});