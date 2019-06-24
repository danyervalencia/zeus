Ext.define("Siace.controller.log.BPBD",{extend:"Ext.app.Controller",
lbpb:function(poP){var _comp=poP["comp"];var _opt=poP["opt"];var _grd=(poP["grd"]==undefined?"grdLBP":poP["grd"]);if(fextpub_uamoBtn("",5022,_comp)){return false;}
	if(_opt==undefined){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}var _d=_r.data;
		Ext.Msg.confirm("Confirmación","¿Esta Ud. seguro de ELIMINAR la Buena Pro al requerimiento seleccionado?",function(b){if(b=="yes"){fext_CC("pub.UsuariosPsw2");var _w=fext_CW("pub.UsuariosPsw2");_w.setCB(poP["btn"]);_w.setCK(_d.bp_key);_w.down("#subtitle").setValue(_d.doc_abrev+"/ "+_d.ped_documento+" &nbsp; || &nbsp; BP/ "+_d.bp_documento);_w.show();}});
	}else{fext_mask(_comp);var _w=_opt.win;var _str=fext_GS(_comp,_grd);
		Ext.Ajax.request({url:"php/logistics_buena_pro_delete.php",params:{xx0010:"YES",xxType_edit:10,xxBp_key:_opt.key,xxUsur_psw2:_opt.usur_psw2,xxBp_observ:_opt.observ,xxMenu_id:poP["mi"],vs:fext_JE(fextpub_sessVar())},success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){_w.close();_str.load({callback:function(rec){fext_unmask(_comp);}});}else{fext_unmask(_comp);fext_MsgE(_res.msg);}},failure:function(resp,opt){fext_unmask(_comp);fext_MsgE(resp.responseText);}});
	}
}
});