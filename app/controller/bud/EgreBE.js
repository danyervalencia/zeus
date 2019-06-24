Ext.define("Siace.controller.bud.EgreBE",{extend:"Ext.app.Controller",
beb:function(poP){var _comp=poP["comp"];var _opt=poP["opt"];var _grd=(poP["grd"]==undefined?"grdBE":poP["grd"]);
	if(fextpub_uamoBtn("",5005,_comp)){return false;}var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}var _d=_r.data;
	if(_d.expe_nro*1>0){
		if(_opt==undefined){Ext.Msg.confirm("Confirmación","¿Esta Ud. seguro de ELIMINAR el numero de SIAF al documento seleccionada?",function(b){if(b=="yes"){fext_CC("pub.UsuariosPsw2");var _w=fext_CW("pub.UsuariosPsw2");_w.setCB(poP["btn"]);_w.setCK(_d.egre_key);fext_SV(_w,"subtitle",_d.egre_documento);_w.setFT("07");_w.show();}});}
		else{var _w=_opt.win;var _str=fext_GS(_comp,_grd);fext_mask(_comp);Ext.Ajax.request({url:"php/budget_expedientes_procedencias_delete.php",params:{xx0010:"YES",xxExpe_nro:_d.expe_nro,xxTablex:2020,xxTablex_key:_opt.key,xxUsur_psw2:_opt.usur_psw2,xxEgreproc_observ:_opt.observ,xxMenu_id:poP["mi"],vs:fext_JE(fextpub_sessVar())},success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){_w.close();_str.load({callback:function(rec){fext_unmask(_comp);}});}else{fext_unmask(_comp);fext_MsgE(_res.msg);}},failure:function(resp,opt){fext_unmask(_comp);fextMsgE("",resp);}});}
	}else{fext_CC("bud.Expedientes_ProcedenciasE");var _w=fext_CW("bud.Expedientes_ProcedenciasE");_w.setTE(1);_w.setCS(fext_GS(_comp,_grd));fext_SV(_w,"tablex",2020);fext_SV(_w,"tablex_key",_d.egre_key);_w.setMI(poP["mi"]);_w.show();}
}
});