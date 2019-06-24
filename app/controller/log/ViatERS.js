Ext.define("Siace.controller.log.ViatERS",{extend:"Ext.app.Controller",
lvers_Save:function(btn){var _w=btn.up("window");var _frm=_w.down("form");var _r=fext_GS(_w,"grdLVD").getRange();var _det="";
	for(var _i=0;_i<_r.length;_i++){var _d=_r[_i].data;
		if(_d.viatdet_rendido*1>_d.viatdet_pretot*1){fext_MsgA("Importe de rendición en item: "+_d.bs_nombre+", no puede ser mayor al importe del viatico");return false;}
		_det+=(_i==0?"":",")+"{"+_d.viatdet_key+","+_d.bs_key+","+_d.viatdet_rendido+"}";
	}
	if(_det==""){fext_MsgA("Documento no registra detalle");return false;}
	if(fext_GV(_w,"viat_rendido")*1<=0){fext_MsgA("Rendición de Viático debe ser mayor que 0 (cero)");return false;}
	if(fext_GV(_w,"viat_rendido")*1>fext_GV(_w,"viat_monto")*1){fext_MsgA("Importe de Rendición ["+fext_GV(_w,"viat_rendido")+"], no pude ser mayor a importe de Viático ["+fext_GV(_w,"viat_monto")+"]");return false;}
	if(!_frm.getForm().isValid()){return false;}
	Ext.Msg.confirm("Confirmar",trnslt.msg_qst_save,function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/logistics_viaticos_save_rendicion.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxViat_key:_w.getCK(),xxType_edit:_w.getTE(),xxViat_rendido:fext_GV(_w,"viat_rendido")*1,xxMenu_id:_w.getMI(),xxDet:_det,vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!=null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
}
});