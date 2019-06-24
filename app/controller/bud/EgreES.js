Ext.define("Siace.controller.bud.EgreES",{extend:"Ext.app.Controller",
bee:function(btn){var _w=btn.up("window");var _frm=_w.down("form");var _TE=_w.getTE();var _txtPK=(fext_GV(_w,"tipdocident_id")==3?_w.down("#pers_key"):_w.down("#indiv_key"));
	if(fext_IE(_w,"egre_fecha")||!_w.down("#egre_fecha").isValid()){fext_MsgA("Debe indicar la FECHA del documento",_w.down("#egre_fecha"));return false;}
	if(fext_IE(_w,"tipegre_id")){fext_MsgA("Debe indicar el TIPO de Egreso Presupuestal",_w.down("#tipegre_id"));return false;}
	if(fext_GV(_w,"tipegre_id")==2058){
		if(fext_IE(_w,"tabley_year")){fext_MsgA("Debe indicar el año del devengado",_w.down("#tabley_year"));return false;}
		if(fext_IE(_w,"tabley_doc")){fext_MsgA("Debe indicar el documento del devengado",_w.down("#tabley_doc"));return false;}
		if(fext_IE(_w,"tabley_nro")){fext_MsgA("Debe indicar el número de documento del devengado",_w.down("#tabley_nro"));return false;}
	}
	if(fext_IE(_w,"fuefin_id")){fext_MsgA("Debe indicar el Rubro de Gasto",_w.down("#fuefin_id"));return false;}
	if(fext_IE(_txtPK)){fext_MsgA("Debe indicar la persona a quien se asigna el documento");return false;}
	var _r=fext_GS(_w,"grdBETF").getRange();var _det="";var _m=0;
	for(var _i=0;_i<_r.length;_i++){var _d=_r[_i].data;
		if(_d.egretareafte_monto*1<=0){ fext_MsgA("Importe de item: "+(_i+1)+", debe ser mayor a 0 (cero)");return false;}
		_det+=(_i==0?"":",")+"{"+_d.tareafte_key+","+_d.tarea_key+","+_d.area_key+","+_d.egretareafte_monto+"}";
		_m=fjsRound(_m*1 + _d.egretareafte_monto*1, 2);
	}
	if(_det==""){fext_MsgA("Documento no registra detalle");return false;}
	if(_m*1!=fext_GV(_w,"egre_monto")*1){fext_MsgA("Importe en sumatoria de detalle ["+_m+"], es diferente al importe del documento ["+fext_GV(_w,"egre_monto")+"]",function(){});return false;}
	if(!_frm.getForm().isValid()){return false;}
	Ext.Msg.confirm("Confirmar",trnslt.msg_qst_save,function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/budget_egresos_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxEgre_key:_w.getCK(),xxType_edit:_w.getTE(),xxYear_id:fext_GV(_w,"year_id"),xxDoc_id:fext_GV(_w,"doc_id"),xxEgre_fecha:_w.down("#egre_fecha").getSubmitValue(),xxPers_key:_txtPK.getValue(),xxMeta_id:fext_GV(_w,"meta_id"),xxTarea_key:fext_GV(_w,"tarea_key"),xxFuefin_id:fext_GV(_w,"fuefin_id"),xxArea_key:fext_GV(_w,"area_keyx"),xxEgre_monto:fext_GV(_w,"egre_monto")*1,xxDet:_det,vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getTE()==1){fext_CC("bud.EgresosOK");var _wF=fext_CW("bud.EgresosOK");_wF.setCK(_res.key);_wF.setCS(_w.getCS());_w.close();_wF.show();}else{if(_w.getCS()!==null){_w.getCS().load();}_w.close();}}else{fext_MsgE(_res.msg);}},
			failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
}
});