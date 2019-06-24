Ext.define("Siace.controller.log.Ingresos",{extend:"Ext.app.Controller",
li_Delete:function(poP){var _comp=poP["comp"];var _opt=poP["opt"];var _grd=(poP["grd"]==undefined?"grdLI":poP["grd"]);if(fextpub_uamoBtn("",7,_comp)){return false;}
	if(_opt==undefined){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}
		Ext.Msg.confirm("Confirmación",trnslt.msg_qst_del,function(b){if(b=="yes"){fext_CC("pub.UsuariosPsw2");var _w=fext_CW("pub.UsuariosPsw2");_w.setCB(poP["btn"]);_w.setCK(_r.data.ing_key);fext_SV(_w,"subtitle",_r.data.ing_documento);_w.setFT("07");_w.setA("Debe indicar el motivo por el cual se va a eliminar el registro de Recepción");_w.show();}});
	}else{var _w=_opt.win;var _str=fext_GS(_comp,_grd);fext_mask(_comp);
		Ext.Ajax.request({url:"php/logistics_ingresos_delete.php",params:{xx0007:"YES",xxType_edit:7,xxIng_key:_opt.key,xxUsur_psw2:_opt.usur_psw2,xxIng_observ:_opt.observ,xxMenu_id:poP["mi"],vs:fext_JE(fextpub_sessVar())},success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){_w.close();_str.load({callback:function(rec){fext_unmask(_comp);}});}else{fext_unmask(_comp);fext_MsgE(_res.msg);}},failure:function(resp,opt){fext_unmask(_comp);fext_MsgE(resp.responseText);}});
	}
},
li_View:function(poP){var _comp=poP["comp"];var _grd=(poP["grd"]==undefined?"grdLI":poP["grd"]);var _TE=(poP["TE"]==undefined?0:poP["TE"]);var _mi=(poP["mi"]==undefined?0:poP["mi"]);var _yi=(poP["yi"]==undefined?"":poP["yi"]);var _cs=(poP["cs"]==undefined?true:poP["cs"]);var _nuk=(poP["nuk"]==undefined?"":poP["nuk"]);
	if(fextpub_uamoBtn(_comp.down("#opc_id"),poP["oi"])){return false;}if(fjsIn_array(_TE,[2,3])){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}}fext_mask(_comp);
	fext_CC("log.IngresosE");var poW=fext_CW("log.IngresosE");poW.setTE(_TE);poW.setMI(_mi);
	if(_yi!=""){fext_SV(poW,"year_id",_yi);}if(_cs){poW.setCS(fext_GS(_comp,_grd));}if(fjsIn_array(_TE,[2,3])){poW.setCK(_r.data.ing_key);}
	if(_nuk=="NoT"){poW.setNUK("NoT");}poW.show();fext_unmask(_comp);
}
});