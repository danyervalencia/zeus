Ext.define("Siace.controller.log.BPBC",{extend:"Ext.app.Controller",
lbpb:function(poP){var _comp=poP["comp"];var _opt=poP["opt"];var _grd=(poP["grd"]==undefined?"grdLBP":poP["grd"]);if(fextpub_uamoBtn("",5028,_comp)){return false;}var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}
	if(_r.data.certif_nro*1>0){
		if(_opt==undefined){Ext.Msg.confirm("Confirmación","¿Esta Ud. seguro de ELIMINAR el Certificado Presupuestal del Requerimiento seleccionado?",function(b){if(b=="yes"){fext_CC("pub.UsuariosPsw2");var _w=fext_CW("pub.UsuariosPsw2");_w.setCB(poP["btn"]);_w.setCK(_r.data.bp_key);_w.down("#subtitle").setValue(_r.data.doc_abrev+"/ "+_r.data.ped_documento);_w.setFT("07");_w.setW("Se va a ELIMINAR el Certificado Presupuestal del requerimiento seleccionado, por seguridad debe digitar su clave de validación");_w.show();}});}
		else{var _w=_opt.win;var _str=fext_GS(_comp,_grd);fext_mask(_comp);Ext.Ajax.request({url:"php/logistics_buena_pro_delete_certificado.php",params:{xx0007:"YES",xxType_edit:7,xxBp_key:_opt.key,xxUsur_psw2:_opt.usur_psw2,xxBp_observ:_opt.observ,xxCertif_nro:_r.data.certif_nro,xxMenu_id:poP["mi"],vs:fext_JE(fextpub_sessVar())},success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){_w.close();_str.load({callback:function(rec){fext_unmask(_comp);}});}else{fext_unmask(_comp);fext_MsgE(_res.msg);}},failure:function(resp,opt){fext_unmask(_comp);fext_MsgE("",resp);}});}
	}else{fext_CC("log.Buena_ProE");var _w=fext_CW("log.Buena_ProE");_w.setTE(11);_w.setMI(poP["mi"]);_w.setCS(fext_GS(_comp,_grd));_w.setCK(_r.data.bp_key);fext_SV(_w,"coti_key",_r.data.coti_key);_w.show();}
}
});