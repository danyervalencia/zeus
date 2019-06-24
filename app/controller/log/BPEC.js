Ext.define("Siace.controller.log.BPEC",{extend:"Ext.app.Controller",
lbpec:function(poP){var _w=poP["w"];var _frm=_w.down("form");
	if(_w.getCK()==""){fext_MsgA("Error de Sistema no se ha establecido BBPPKKK");return false;}
	var _recLBPD=fext_GS(_w,"grdLBPD").getRange();var _recLBPTF=fext_GS(_w,"grdLBPTF").getRange();var _det="";var _bpm=0;var _bptareafte_monto=0;var _tarea_fftred="";
	for(var _i=0;_i<_recLBPD.length;_i++){
		if(_recLBPD[_i].get("bpdet_preuni")==""||_recLBPD[_i].get("bpdet_preuni")*1<=0){fext_MsgA("Precio Unitario en detalle no pueder ser cero (0)");return false;}
		_det+=(_i==0?"":",")+"{"+_recLBPD[_i].get("bpdet_key")+","+_recLBPD[_i].get("bpdet_item")+","+_recLBPD[_i].get("peddet_key")+","+_recLBPD[_i].get("bs_key")+","+_recLBPD[_i].get("espedet_id")+","+_recLBPD[_i].get("bpdet_cantid")+","+_recLBPD[_i].get("bpdet_preuni")+","+_recLBPD[_i].get("bpdet_pretot")+"}";
		_bpm+=fjsRound(_recLBPD[_i].get("bpdet_pretot"),2)*1;
	}
	if(_det==""){fext_MsgA("Documento no registra detalle");return false;}
	for(var _i=0;_i<_recLBPTF.length;_i++){
		if(_recLBPTF[_i].get("bptareafte_monto")==""||_recLBPTF[_i].get("bptareafte_monto")*1<=0){fext_MsgA("Importe en Consolidado de Clasificador ["+_recLBPTF[_i].get("espedet_codigo")+"] no pueder ser cero (0)");return false;}
		if(_recLBPTF[_i].get("bptareafte_percep")*1>0 &&(_recLBPTF[_i].get("bptareafte_percep")*1>_recLBPTF[_i].get("bptareafte_monto")*1)){ fext_MsgA("Importe de Percepción no pueder ser mayor a  "+_recLBPTF[_i].get("bptareafte_monto"));return false;}
		_tarea_fftred+=(_i==0?"":",")+"{"+(_recLBPTF[_i].get("bptareafte_key")==""?"*":_recLBPTF[_i].get("bptareafte_key"))+","+(_recLBPTF[_i].get("tareafte_key")==""?"*":_recLBPTF[_i].get("tareafte_key"))+","+_recLBPTF[_i].get("tarea_key")+","+_recLBPTF[_i].get("fuefin_id")+","+_recLBPTF[_i].get("tiprecur_id")+","+_recLBPTF[_i].get("espedet_id")+","+_recLBPTF[_i].get("bptareafte_monto")*1+","+_recLBPTF[_i].get("bptareafte_percep")*1+"}";
		_bptareafte_monto+=fjsRound(_recLBPTF[_i].get("bptareafte_monto"),2)*1;
	}
	Ext.Msg.confirm(trnslt.cnf,trnslt.msg_qst_save,function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST", url:"php/logistics_buena_pro_save_certificado.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxType_edit:11,xxBp_key:_w.getCK(),xxCoti_key:_w.down("#coti_key").getValue(),xxTarea_key:_w.down("#tarea_key").getValue(),xxFuefin_id:_w.down("#fftr_id").getValue().substr(0,3),xxTiprecur_id:_w.down("#fftr_id").getValue().substr(4),xxCertif_nro:_w.down("#certif_nro").getValue(),xxBp_monto:_w.down("#bp_monto").getValue(),xxMenu_id:_w.getMI(),xxDet:_det,xxTarea_fftred:_tarea_fftred,vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!==null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
}
});