Ext.define("Siace.controller.log.NeaES",{extend:"Ext.app.Controller",
lne:function(poW){var _w=poW;var _frm=_w.down("form");var _TE=_w.getTE();var _tn=fext_GV(_w,"tipnea_id");
	if(_tn==5091){if(fext_IE(_w,"meta_key")&&fext_IE(_w,"proy_key")){fext_MsgA("Debe indicar el origen de la Devolución");return false;}}
	var _det="";var _m=0;var _r=fext_GS(_w,"grdLND").getRange();
	for(var _i=0;_i<_r.length;_i++){var _d=_r[_i].data;
		if(_d.neadet_cantid==""||_d.neadet_cantid*1<= 0){fext_MsgA("Cantidad en detalle no pueder ser cero (0)");return false;}
		_det+=(_i==0?"":",")+"{*"+_d.neadet_key+","+_d.tablex+","+_d.tablex_id+","+_d.tablex_key+","+_d.bs_key+","+"*"+","+_d.neadet_cantid+","+_d.neadet_preuni+","+_d.neadet_pretot+",NULL,NULL,NULL,NULL}";
		_m+=fjsRound(_d.neadet_pretot,2)*1;
	}if(_det==""){fext_MsgA("Documento no registra detalle");return false;}if(!_frm.getForm().isValid()){return false;}
	Ext.Msg.confirm(trnslt.cnf,trnslt.msg_qst_save,function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/logistics_neas_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxType_edit:_w.getTE(),xxNea_key:_w.getCK(),xxNea_fecha:_w.down("#nea_fecha").getSubmitValue(),xxTipnea_id:fext_GV(_w,"tipnea_id"),xxFuefin_id:fext_GV(_w,"fuefin_id"),xxNea_monto:fext_GV(_w,"nea_monto"),xxDet:_det,xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success&&_w.getTE()==1){fext_CC("log.NeasOK");var _wF=fext_CW("log.NeasOK");_wF.setCK(_res.key);_wF.setCS(_w.getCS());_wF.setMI(_w.getMI());_w.close();_wF.show();}else if(_res.success){if(_w.getCS()!==null){_w.getCS().load();}_w.close();}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
}
});