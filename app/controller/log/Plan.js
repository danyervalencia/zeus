Ext.define("Siace.controller.log.Plan",{extend:"Ext.app.Controller",
lp_Delete:function(poP){var _comp=poP["comp"];var _opt=poP["opt"];var _grd=(poP["grd"]==undefined?"grdLP":poP["grd"]);if(fextpub_uamoBtn("",10,_comp)){return false;}
	if(_opt==undefined){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}Ext.Msg.confirm("Confirmación",trnslt.msg_qst_anul,function(b){if(b=="yes"){fext_CC("pub.UsuariosPsw2");var _w=fext_CW("pub.UsuariosPsw2");_w.setCB(poP["btn"]);_w.setCK(_r.data.plan_key);fext_SV(_w,"subtitle",_r.data.plan_documento);_w.setFT(10);_w.setA("Debe indicar el motivo por el cual se va a anular el registro de Recepción");_w.show();}});}
	else{var _w=_opt.win;var _str=fext_GS(_comp,_grd);fext_mask(_comp);Ext.Ajax.request({url:"php/logistics_planillas_delete.php",params:{xx0010:"YES",xxType_edit:10,xxPlan_key:_opt.key,xxUsur_psw2:_opt.usur_psw2,xxIng_observ:_opt.observ,xxMenu_id:poP["mi"],vs:fext_JE(fextpub_sessVar())},success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){_w.close();_str.load({callback:function(rec){fext_unmask(_comp);}});}else{fext_unmask(_comp);fext_MsgE(_res.msg);}},failure:function(resp,opt){fext_unmask(_comp);fext_MsgE("",resp);}});}
},
lp_Printer:function(poP){var _comp=poP["comp"];var _key=(Ext.isEmpty(poP["key"])?"":poP["key"]);var _grd=(poP["grd"]==undefined?"grdLP":poP["grd"]);var _mi=(poP["mi"]==undefined?fext_GV(_comp,"menu_id"):poP["mi"]);var _oi=(poP["oi"]==undefined?8:poP["oi"]);var _tit=(poP["tit"]==undefined?1:poP["tit"]);
	if(fextpub_uamoBtn("",_oi,_comp)){return false;}if(_key==""){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}_key=_r.data.plan_key;}
	_tit=(_tit==1?_r.data.plan_documento:(_tit==2?_r.data.doc_abrev+"/ "+_r.data.plan_documento:_tit));
	fext_pdf("",_tit,"php/pdf/pdf_logistics_planillas_printer.php?xxPlan_key="+_key+"&xxType_record=printer&xxMenu_id="+_mi+"&xxOpc_id="+_oi);
},
lp_View:function(poP){var _comp=poP["comp"];var _grd=(poP["grd"]==undefined?"grdLP":poP["grd"]);var _TE=(poP["TE"]==undefined?0:poP["TE"]);var _mi=(poP["mi"]==undefined?0:poP["mi"]);var _yi=(poP["yi"]==undefined?"":poP["yi"]);var _cs=(poP["cs"]==undefined?true:poP["cs"]);var _opt=poP["opt"];
	if(fextpub_uamoBtn("",poP["oi"],_comp)){return false;}if(fjsIn_array(_TE,[2,3,5028])){var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}}
	if(_TE==5028&&_r.data.certif_nro*1>0){
		if(_opt==undefined){Ext.Msg.confirm("Confirmación","¿Esta Ud. seguro de ELIMINAR el Certificado Presupuestal de la planilla seleccionada?",function(b){if(b=="yes"){fext_CC("pub.UsuariosPsw2");var _w=fext_CW("pub.UsuariosPsw2");_w.setCB(poP["btn"]);_w.setCK(_r.data.plan_key);_w.down("#subtitle").setValue(_r.data.plan_documento);_w.setFT("07");_w.setW("Se va a ELIMINAR el Certificado Presupuestal de la planilla seleccionada, por seguridad debe digitar su clave de validación");_w.show();}});}
		else{var _w=_opt.win;var _str=fext_GS(_comp,_grd);fext_mask(_comp);Ext.Ajax.request({url:"php/logistics_planillas_delete_certificado.php",params:{xx0007:"YES",xxType_edit:7,xxPlan_key:_opt.key,xxUsur_psw2:_opt.usur_psw2,xxPlan_observ:_opt.observ,xxCertif_nro:_r.data.certif_nro,xxMenu_id:poP["mi"],vs:fext_JE(fextpub_sessVar())},success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){_w.close();_str.load({callback:function(rec){fext_unmask(_comp);}});}else{fext_unmask(_comp);fext_MsgE(_res.msg);}},failure:function(resp,opt){fext_unmask(_comp);fext_MsgE("",resp);}});}	
	}else{fext_mask(_comp);
		fext_CC("log.PlanillasE");var _w=fext_CW("log.PlanillasE"+(_TE==5028?"C":""));_w.setTE(_TE);_w.setMI(_mi);
		if(_yi!=""){fext_SV(_w,"year_id",_yi);}if(_cs){_w.setCS(fext_GS(_comp,_grd));}if(fjsIn_array(_TE,[2,3,5028])){_w.setCK(_r.data.plan_key);}
		_w.show();fext_unmask(_comp);
	}
}
});