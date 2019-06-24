Ext.define("Siace.controller.log.IngES",{extend:"Ext.app.Controller",
lie:function(btn){var _w=btn.up("window");var _frm=_w.down("form");var _tablex=(fjsIn_array(fext_GV(_w,"tablex_doc"),[516,517])?5030:"");
	if(_tablex==""){fext_MsgA("Tipo de documento no aceptado");return false;}
	if(fext_IE(_w,"doc_id")){fext_MsgA("No se ha indicado el documento de recepción",_w.down("#doc_id"));return false;}
	if(fext_IE(_w,"ing_serie")||_w.down("#ing_serie").getValue()*1<=0){fext_MsgA("No se ha establecido la SERIE del documento",_w.down("#ing_serie"));return false;}
	if(fext_IE(_w,"ing_nro")||_w.down("#ing_nro").getValue()*1<=0){fext_MsgA("No se ha establecido el NUMERO del documento",_w.down("#ing_nro"));return false;}
	if(fext_IE(_w,"ing_fecha")){fext_MsgA("No se ha establecido la FECHA del documento",_w.down("#ing_fecha"));return false;}
	if(!_w.down("#ing_fecha").isValid()){fext_MsgA("FECHA de documento no es valida",_w.down("#ing_fecha"));return false;}
	if(fext_IE(_w.down("#ing_fecharec"))){fext_MsgA("No se ha establecido la FECHA de RECEPCION del documento",_w.down("#ing_fecharec"));return false;}
	if(!_w.down("#ing_fecharec").isValid()){fext_MsgA("FECHA de Recepción de documento no es valida",_w.down("#ing_fecharec"));return false;}
	if(_w.getMI()==5125&&!_w.down("#alma_key").isDisabled()&&fext_IE(_w.down("#alma_key"))){fext_MsgA("Debe indicar el Almacén al cual se realizará el ingreso",_w.down("#alma_key"));return false;}
	var _det="";var _monto=0;var _r=fext_GS(_w,"grdLID").getRange();
	for(var _i=0;_i<_r.length;_i++){var _d=_r[_i].data;
		if(_d.ingdet_cantid==""||_d.ingdet_cantid*1<=0){fext_MsgA("Cantidad en detalle no pueder ser cero (0)");return false;}
		if(_d.ingdet_pretot==""||_d.ingdet_pretot*1<=0){fext_MsgA("Importe en detalle de item ["+(_i*1+1)+"] "+_d.bs_nombre+", no puede ser cero(0)");return false;}
		_det+=(_i == 0?"":",")+"{5033,"+_d.ordendettareafte_key+","+_d.ordendet_key+",0,"+"*"+_d.ingdet_detalle+","+_d.ingdet_cantid+","+_d.ingdet_preuni+","+_d.ingdet_pretot+",0,0}";_monto+=fjsRound(_d.ingdet_pretot,2)*1;
	}
	if(_det==""){fext_MsgA("Documento no registra detalle");return false;}if(!_frm.getForm().isValid()){return false;}
	Ext.Msg.confirm(trnslt.cnf,trnslt.msg_qst_save,function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/logistics_ingresos_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxType_edit:_w.getTE(),xxIng_key:_w.getCK(),xxTablex:_tablex,xxAlma_key:fext_GV(_w,"alma_key"),xxIng_monto:fext_GV(_w,"ing_monto"),xxDet:_det,xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!==null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
}
});