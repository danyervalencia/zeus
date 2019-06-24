Ext.define("Siace.controller.log.OrdenEU",{extend:"Ext.app.Controller",
loeu_Save:function(poW){var _w=poW;var _frm=_w.down("form");var _TE=_w.getTE();
	if(fext_GV(_w,"doc_id")*1<=0){fext_MsgA("Debe indicar el tipo de documento",_w.down("#doc_id"));return false;}
	if(fext_IE(_w,"orden_fecha")){fext_MsgA("Error de navegador, no se ha establecido la FECHA",_w.down("#orden_fecha"));return false;}
	if(fext_IE(_w,"pers_key")){fext_MsgA("Debe indicar el Proveedor",_w.down("#pers_ruc"));return false;}
	if(fext_GV(_w,"tippag_id")*1<=0){fext_MsgA("Debe indicar el tipo de pago",_w.down("#tippag_id"));return false;}
	if(_TE==11){if(fext_IE(_w,"tablex")){fext_MsgA("No se ha indicado el record");return false;}if(fext_IE(_w,"tablex_key")){fext_MsgA("No se ha indicado el key");return false;}}
			
	var _lop="";var _det="";var _lodtf="";var _lotf="";var _om=0;var _orden_percep=0;var _recLOP=fext_GS(_w,"grdLOP").getRange();var _recLOD=fext_GS(_w,"grdLOD").getRange();var _recLOTF=fext_GS(_w,"grdLOTF").getRange();
	for(var _i=0;_i<_recLOP.length;_i++){var _d=_recLOP[_i].data;
		if(Ext.isEmpty(_d.tablex)||_d.tablex*1<=0){fext_MsgA("No se ha indicado el tablex de referencias");return false;}
		if(Ext.isEmpty(_d.tablex_key)){fext_MsgA("No se ha indicado el key de referencias");return false;}
		_lop+=(_i ==0?"":",")+"{"+_i+","+_d.tablex+","+_d.tablex_key+",0}";
	}

	for(var _i=0;_i<_recLOD.length;_i++){var _d=_recLOD[_i].data;
		if(_d.ordendet_cantid*1<=0){fext_MsgA("Cantidad en detalle: "+_d.bs_nombre+", no pueder ser cero (0)");return false;}
		if(_d.ordendet_preuni*1<=0){fext_MsgA("Precio Unitario en detalle: "+_d.bs_nombre+", no pueder ser cero (0)");return false;}
		if(_d.ordendet_pretot*1<=0){fext_MsgA("Subtotal en detalle: "+_d.bs_nombre+", no pueder ser cero (0)");return false;}
		if(_TE==11&&_d.tablex*1<= 0){fext_MsgA("Usuario intrsuo: tablex en detalle: "+_d.bs_nombre+", no es valido");return false;}
		if(_TE==11&&Ext.isEmpty(_d.tablex_key)){fext_MsgA("Usuario intrsuo: tablex_key en detalle: "+_d.bs_nombre+", no es valido");return false;}
		if(_d.espedet_id*1>0){var _found=false;
			for(var _j=0;_j<_recLOTF.length;_j++){if(_recLOTF[_j].get("espedet_id")==_d.espedet_id){_found=true;}}
			if(_found==false){fext_MsgA("No se encuentra Clasificador ["+_d.espedet_codigo+"] en registro consolidado");return false;}
		}
		_om+=fjsRound(_d.ordendet_pretot,2)*1;
		_det += (_i==0?"":",")+"{"+_i+","+_d.tablex+","+_d.tablex_key+",0,"+_d.bs_key+",0,"+"*"+_d.ordendet_detalle+","+_d.ordendet_cantid+","+_d.ordendet_preuni+","+_d.ordendet_pretot+","+_d.espedet_id+",NULL,NULL,NULL,NULL,NULL,NULL}";
	}		
	if(_det==""){fext_MsgA("Documento no registra detalle",_w.down("#btnAdd"));return false;}	
	if(fext_IE(_w,"tarea_key")){}else{_lodtf="{0}";}_om = 0;
	for(var _i=0;_i<_recLOTF.length;_i++){var _d=_recLOTF[_i].data;
		if(Ext.isEmpty(_d.tareafte_key)){fext_MsgA("Identificador Consolidado de Clasificador ["+_d.espedet_codigo+"] no establecido");return false;}
		if(Ext.isEmpty(_d.espedet_id)||_d.espedet_id*1 <= 0){fext_MsgA("Identificador de Clasificador ["+_d.espedet_codigo+"] no establecido en consolidado");return false;}
		if(Ext.isEmpty(_d.ordentareafte_monto)||_d.ordentareafte_monto*1<=0){fext_MsgA("Importe en Consolidado de Clasificador ["+_d.espedet_codigo+"] no pueder ser cero (0)");return false;}
		if(_d.ordentareafte_percep*1>_d.ordentareafte_monto*1){fext_MsgA("Importe de Percepción en Consolidado de Clasificador ["+_d.espedet_codigo+"] no pueder ser mayor al subtotal");return false;}
		if(fext_IE(_w,"tarea_key")){}
		else{var _found=false;
			for(var _j=0;_j<_recLOD.length;_j++){if(_recLOD[_j].data.espedet_id==_d.espedet_id){_found=true;}}
			if(_found==false){fext_MsgA("No se encuentra Clasificador ["+_d.espedet_codigo+"] en detalle de documento");return false;}
		}
		_lotf += (_i==0?"":",")+"{"+_d.ordentareafte_key+","+_d.ordentareafte_item+","+_d.tareafte_key+","+_d.espedet_id+","+_d.ordentareafte_monto+","+_d.ordentareafte_percep+"}";
		_om+=fjsRound(_recLOTF[_i].data.ordentareafte_monto,2)*1;_orden_percep+=fjsRound(_recLOTF[_i].data.ordentareafte_percep,2)*1;
	}
	if(fext_IE(_w,"orden_observ")||fext_GV(_w,"orden_observ").length<=10){fext_MsgA("Debe especificar la Glosa de la Orden",_w.down("#orden_observ"));return false;}
		
	if(!_frm.getForm().isValid()){return false;}
	Ext.Msg.confirm(trnslt.cnf,trnslt.msg_qst_save,function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/logistics_ordenes_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxType_edit:_TE,xxYear_id:_w.down("#year_id").getValue(),xxDoc_id:_w.down("#doc_id").getValue(),xxOrden_nro:_w.down("#orden_nro").getValue(),xxTiporden_id:_w.down("#tiporden_id").getValue(),xxTablex:_w.down("#tablex").getValue(),xxArea_key:_w.down("#area_key").getValue(),xxTarea_key:_w.down("#tarea_key").getValue(),xxFuefin_id:fext_GV(_w,"fuefin_id"),xxOrden_monto:fext_GV(_w,"orden_monto"),xxOrden_percep:_orden_percep,xxProcedencias:_lop,xxDet:_det,xxDet_tareas_fftred:_lodtf,xxTareas_fftred:_lotf,xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(fjsIn_array(_w.getTE(),[1,11])){fext_CC("log.OrdenesOK");var _wF=fext_CW("log.OrdenesOK");_wF.setCK(_res.key);_wF.setCS(_w.getCS());_wF.setMI(_w.getMI());_wF.down("#btnPrinter").enable();_w.close();_wF.show();}else{if(_w.getCS()!==null){_w.getCS().load();}else if(_w.getCC()!==null){}_w.close();}}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});

}
});