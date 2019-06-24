Ext.define("Siace.controller.log.SalENS",{extend:"Ext.app.Controller",
lse:function(btn){var _w=btn.up("window");var _frm=_w.down("form");
	if(!_w.down("#sal_fecha").isValid()){fext_MsgA("FECHA de documento no es valida",_w.down("#sal_fecha"));return false;}
	if(fext_IE(_w,"trabj_key")){fext_MsgA("Debe indicar el trabajador al que se asignará documento");return false;}
	var _det="";var _m=0;var _r=fext_GS(_w,"grdLSD").getRange();
	for(var _i=0;_i<_r.length;_i++){var _d=_r[_i].data;
		if(_d.cantid==""||_d.cantid*1<= 0){fext_MsgA("Cantidad en detalle no pueder ser cero (0)"); return false;}
		if(_d.cantid*1>_d.stock*1){fext_MsgA("Cantidad en detalle de item ["+(_i*1+1) +"] "+_d.bs_nombre+", no puede ser mayor al Stock disponible");return false;}
		if(_d.saldet_pretot==""||_d.saldet_pretot*1<=0){fext_MsgA("Importe en detalle de item ["+(_i*1+1) +"] "+_d.bs_nombre+", no puede ser cero(0)");return false;}
		_det+=(_i==0?"":",")+"{"+(_w.getTE()==1?"*":_d.saldet_key)+","+_d._tb+","+_d._id+","+_d._key+","+_d.bs_key+","+_d.cantid+","+_d.preuni+","+_d.pretot+",NULL,NULL,NULL,NULL,NULL}";
		_m+=fjsRound(_d.pretot,2)*1;
	}if(_det==""){fext_MsgA("Documento no registra detalle");return false;}if(!_frm.getForm().isValid()){return false;}
	Ext.Msg.confirm(trnslt.cnf,trnslt.msg_qst_save,function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/logistics_salidas_saven.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxType_edit:_w.getTE(),xxSal_key:_w.getCK(),xxSal_fecha:_w.down("#sal_fecha").getSubmitValue(),xxSal_fechasal:_w.down("#sal_fechasal").getSubmitValue(),xxAlma_key:fext_GV(_w,"alma_key"),xxSal_monto:fext_GV(_w,"sal_monto"),xxDet:_det,xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success&&_w.getTE()==1){fext_CC("log.SalidasOK");var _wF=fext_CW("log.SalidasOK");_wF.setCK(_res.key);_wF.setCS(_w.getCS());_wF.setMI(_w.getMI());_w.close();_wF.show();}else if(_res.success){if(_w.getCS()!==null){_w.getCS().load();}_w.close();}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
}
});