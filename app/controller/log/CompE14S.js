Ext.define("Siace.controller.log.CompE14S",{extend:"Ext.app.Controller",
lce:function(btn){var _w=btn.up("window");var _frm=_w.down("form");var _TE=_w.getTE();
	if(fext_IE(_w,"comp_nro")){fext_MsgA("Debe indicar el número de documento",_w.down("#comp_nro"));return false;}
	if(fext_IE(_w,"comp_fecha")||!_w.down("#comp_fecha").isValid()){fext_MsgA("Debe indicar la FECHA del documento",_w.down("#comp_fecha"));return false;}
	if(fext_IE(_w,"fuefin_id")){fext_MsgA("Debe indicar el Rubro Presupuestal de Gasto",_w.down("#fuefin_id"));return false;}
	if(fext_IE(_w,"pers_key")){fext_MsgA("Debe indicar la persona a quien se asigna el documento");return false;}
	var _r=fext_GS(_w,"grdLCDTF").getRange();var _det="";var _m=0;
	for(var _i=0;_i<_r.length;_i++){var _d=_r[_i].data;
		if(_d.pretot*1<=0){fext_MsgA("Importe de item: "+(_i+1)+", debe ser mayor a 0 (cero)");return false;}
		_det+=(_i==0?"":",")+"{"+_d.tareafte_key+","+_d.tarea_key+","+_d.area_key+","+_d.pretot+"}";
		_m=fjsRound(_m*1 + _d.pretot*1, 2);
	}
	if(_det==""){fext_MsgA("Documento no registra detalle");return false;}
	if(!_frm.getForm().isValid()){return false;}
	Ext.Msg.confirm("Confirmar",trnslt.msg_qst_save,function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/logistics_compras_save14.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxComp_key:_w.getCK(),xxYear_id:fext_GV(_w,"year_id"),xxComp_monto:fext_GV(_w,"comp_monto")*1,xxTiporden_id:fext_GV(_w,"tiporden_id"),xxFuefin_id:fext_GV(_w,"fuefin_id"),xxDet:_det,vs:fext_JE(fextpub_sessVar()),xxMenu_id:_w.getMI()},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!=null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},
			failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
}
});