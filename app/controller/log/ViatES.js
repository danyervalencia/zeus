Ext.define("Siace.controller.log.ViatES",{extend:"Ext.app.Controller",
lves:function(poW){var _w=poW;var _frm=_w.down("form");var _TE=_w.getTE();
	if(fext_IE(_w,"viat_fecha")){fext_MsgA("Error de navegador, no se ha establecido la FECHA");return false;}
	if(fext_IE(_w,"area_key")){fext_MsgA("Error de acceso, no se ha establecdo la Unidad Orgánica");return false;}
	if(fext_IE(_w.down("#meta_id"))){fext_MsgA("Debe indicar la Secuencia Funcional");return false;}
	if(fext_IE(_w.down("#tarea_key"))){fext_MsgA("Debe indicar la Tarea Funcional");return false;}
	if(fext_IE(_w.down("#fftr_id"))){fext_MsgA("Debe indicar el Rubro Presupuestal");return false;}
	if(fext_IE(_w.down("#trabj_key"))){fext_MsgA("Debe indicar el Comisionado");return false;}
	if(fext_IE(_w.down("#pais_id"))||fext_GV(_w,"pais_id")*1<=0){fext_MsgA("Debe indicar el PAIS de destino");return false;}
	if(fext_IE(_w.down("#orig_prvn"))){fext_MsgA("Debe indicar la Provincia de Origen");return false;}
	if(fext_GV(_w,"pais_id")==172){if(fext_IE(_w,"dpto_id")||fext_GV(_w,"dpto_id")*1<=0){fext_MsgA("Debe indicar el DEPARTAMENTO de destino");return false;}}
	if(fext_IE(_w,"motviat_id")||fext_GV(_w,"motviat_id")*1<=0){fext_MsgA("Debe indicar el MOTIVO de la Solicitud");return false;}
	if(!_w.down("#viat_fechaini").isValid()){fext_MsgA("Fecha de Salida no es Valida",_w.down("#viat_fechaini"));return false;}
	if(!_w.down("#viat_fechafin").isValid()){fext_MsgA("Fecha de Retorno no es Valida",_w.down("#viat_fechafin"));return false;}
	if(_w.down("#viat_fechaini").getRawValue()==_w.down("#viat_fechafin").getRawValue()&&fext_GV(_w,"viat_horaini")>=fext_GV(_w,"viat_horafin")){fext_MsgA("Hora de Salida no puede ser mayor a hora de retorno",_w.down("#viat_horaini"));return false;}
	var _r=fext_GS(_w,"grdLVD").getRange();var _det="";var _m=0;
	for(var _i=0;_i<_r.length;_i++){var _d=_r[_i].data;
		if(_d.viatdet_pretot*1<=0){fext_MsgA("Importe de item: "+_d.bs_nombre+", debe ser mayor a cero(0)");return false;}
		_det+=(_i==0?"":",")+"{*"+(Ext.isEmpty(_d.viatdet_key)?"":_d.viatdet_key)+","+_d.bs_key+","+_d.viatdet_pretot+","+_d.espedet_id+",0,0}";
		_m+=fjsRound(_d.viatdet_pretot,2)*1;
	}
	if(_det==""){fext_MsgA("Documento no registra detalle");return false;}
	if(_m*1!==fext_GV(_w,"viat_monto")*1){fext_MsgA("Importe en sumatoria de detalle ["+_m+"], es diferente al importe del documento ["+fext_GV(_w,"viat_monto")+"]");return false;}
	if(fext_IE(_w,"viat_observ")||fext_GV(_w,"viat_observ").length<=10){fext_MsgA("Debe especificar el motivo del viatico",_w.down("#viat_observ"));return false;}
	if(!_frm.getForm().isValid()){return false;}
	Ext.Msg.confirm("Confirmar",trnslt.msg_qst_save,function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/logistics_viaticos_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxViat_key:_w.getCK(),xxType_edit:_w.getTE(),xxYear_id:fext_GV(_w,"year_id"),xxDoc_id:fext_GV(_w,"doc_id"),xxViat_fecha:_w.down("#viat_fecha").getSubmitValue(),xxArea_key:fext_GV(_w,"area_key"),xxTarea_key:fext_GV(_w,"tarea_key"),xxFuefin_id:fext_GV(_w,"fftr_id").substr(0,3),xxTiprecur_id:fext_GV(_w,"fftr_id").substr(4),xxViat_monto:fext_GV(_w,"viat_monto")*1,xxDet:_det,vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getTE()==1){fext_CC("log.ViaticosOK");var _wF=fext_CW("log.ViaticosOK");_wF.setCK(_res.key);_wF.setCS(_w.getCS());_w.close();_wF.show();}else{if(_w.getCS()!=null){_w.getCS().load();}_w.close();}}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
}
});