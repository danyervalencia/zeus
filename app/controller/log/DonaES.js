Ext.define("Siace.controller.log.DonaES",{extend:"Ext.app.Controller",
lde:function(poW){var _w=poW;var _frm=_w.down("form");var _TE=_w.getTE();
	if(fext_IE(_w,"dona_fecha")){fext_MsgA("Debe indicar la FECHA del documento",_w.down("#dona_fecha"));return false;}
	if(fext_IE(_w,"dona_nro")){fext_MsgA("Debe indicar el NUMERO del documento",_w.down("#dona_nro"));return false;}
	var _det="";var _r=fext_GS(_w,"grdLDD").getRange();
	for(var _i=0;_i<_r.length;_i++){var _d=_r[_i].data;
		if(_d.donadet_cantid*1 <=0){fext_MsgA("Cantidad en detalle no pueder ser cero (0)");return false;}
		if(_d.donadet_pretot*1 <=0){fext_MsgA("Importe en detalle de item ["+(_i*1+1) +"] "+_d.bs_nombre+", no puede ser cero(0)");return false;}
		_det+=(_i == 0?"":",")+"{*"+_d.donadet_key+","+_d.donadet_item+","+_d.bs_key+",*"+_d.donadet_detalle+","+_d.donadet_cantid+","+_d.donadet_preuni+","+_d.donadet_pretot+"}";
	}
	if(_det==""){fext_MsgA("Documento no registra detalle");return false;}if(!_frm.getForm().isValid()){return false;}
	Ext.Msg.confirm(trnslt.cnf,trnslt.msg_qst_save,function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST", url:"php/logistics_donaciones_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxType_edit:_TE,xxDona_key:_w.getCK(),xxDona_monto:fext_GV(_w,"dona_monto"),xxDet:_det,xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!==null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
}
});