Ext.define("Siace.controller.log.PedES",{extend:"Ext.app.Controller",
lpe:function(btn){var _w=btn.up("window");var _frm=_w.down("form");var _TE=_w.getTE();
	if(_TE==12){fext_CC("log.PedESET").lpeset(_w);}
	else{var _det="";var _tf="";var _m=0;var _r=fext_GS(_w,"grdLPD").getRange();var _rec=fext_GS(_w,"grdLPTF").getRange();
		//if(fext_IE(_w.down("#meta_id"))){fext_MsgA("Debe indicar la Secuencia Funcional",_w.down("#meta_id"));return false;}
		//if(fext_IE(_w.down("#tarea_key"))){fext_MsgA("Debe indicar la Tarea Funcional",_w.down("#tarea_key"));return false;}
		//if(fext_IE(_w.down("#fftr_id"))){fext_MsgA("Debe indicar el Rubro Presupuestal",_w.down("#fftr_id"));return false;}
		for(var _i=0;_i<_r.length;_i++){var _d=_r[_i].data;
			if(_d.peddet_cantid==""||_d.peddet_cantid*1<=0){fext_MsgA("Cantidad en detalle no pueder ser cero (0)");return false;}
			if(_d.peddet_preuni*1<=0&&_w.down("#ped_monto").getValue()*1>0){fext_MsgA("Debe indicar el Precio Unitario de item:("+(_i*1+1)+")"+_d.bs_nombre);return false;}
			_det+=(_i == 0?"":",")+"{*"+_d.peddet_key+","+_i+","+_d.bs_key+","+"*"+_d.peddet_detalle+","+_d.peddet_cantid+","+_d.peddet_preuni*1+","+_d.peddet_pretot*1+","+_d.espedet_id+",0,0}";
			_m+=fjsRound(_d.peddet_pretot,2)*1;var _found=false;
			//for(var _j=0;_j<_rec.length;_j++){if(_rec[_j].get("espedet_id")==_d.espedet_id){_found=true;}}
			//if(_found==false){fext_MsgA("No se encuentra Clasificador en registro consolidado");return false;}
		}
		if(_det==""){fext_MsgA("Documento no registra detalle");return false;}
		/*for(var _i=0;_i<_rec.length;_i++){
			_tf+=(_i==0?"":",")+"{"+_rec[_i].get("pedtareafte_id")+","+_i+","+_rec[_i].get("tareafte_id")+","+_rec[_i].get("espedet_id")+","+_rec[_i].get("pedtareafte_monto")*1+",0}";
			_m+=fjsRound(_rec[_i].get("tareafte_monto"),2)*1;var _found = false;
			for(var _j=0;_j<_r.length;_j++){if(_r[_j].get("espedet_id")==_rec[_i].get("espedet_id")){_found=true;}}
			if(_found==false){fext_MsgA("No se encuentra Clasificador en detalle de documento");return false;}
		}
		if(_tf==""){fext_MsgA("Documento no registra detalle presupuestal");return false;}if(!_frm.getForm().isValid()){return false}*/
		Ext.Msg.confirm("Confirmar",trnslt.msg_qst_save, function(b){if(b=="yes"){
			_frm.getForm().submit({method:"POST",url:"php/logistics_pedidos_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxPed_key:_w.getCK(),xxType_edit:_TE,xxMenu_id:_w.getMI(),xxYear_id:fext_GV(_w,"year_id"),xxDoc_id:501,xxPed_fecha:_w.down("#ped_fecha").getSubmitValue(),xxTipped_id:fext_GV(_w,"tipped_id"),xxArea_key:fext_GV(_w,"area_key"),xxMeta_id:fext_GV(_w,"meta_id"),xxTarea_key:fext_GV(_w,"tarea_key"),xxFuefin_id:fext_GV(_w,"fftr_id").substr(0,3),xxTiprecur_id:fext_GV(_w,"fftr_id").substr(4),xxPed_monto:fext_GV(_w,"ped_monto")*1,xxDet:_det,xxTarea_fftred:_tf,vs:fext_JE(fextpub_sessVar())},
				success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getTE()==1){fext_CC("log.PedidosOK");var _wF=fext_CW("log.PedidosOK");_wF.setCK(_res.key);_wF.setCS(_w.getCS());_w.close();_wF.show();}else{if(_w.getCS()!==null){_w.getCS().load();}_w.close();}}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
			});
		}});
	}
}
});