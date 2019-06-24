Ext.define("Siace.controller.log.PlanES",{extend:"Ext.app.Controller",
lpe:function(btn){var _w=btn.up("window");var _frm=_w.down("form");var _TE=_w.getTE();
	if(fext_IE(_w,"plan_fecha")||!_w.down("#plan_fecha").isValid()){fext_MsgA("Debe indicar la FECHA del documento",_w.down("#egre_fecha"));return false;}
	if(fext_IE(_w,"tiporden_id")){fext_MsgA("Debe indicar el TIPO de servicio",_w.down("#tiporden_id"));return false;}
	if(fext_IE(_w,"fuefin_id")){fext_MsgA("Debe indicar el Rubro de Gasto",_w.down("#fuefin_id"));return false;}
	//if(fext_IE(_txtPK)){fext_MsgA("Debe indicar la persona a quien se asigna el documento");return false;}
	var _r=fext_GS(_w,"grdLPP").getRange();var _det="";var _m=0;
	for(var _i=0;_i<_r.length;_i++){var _d=_r[_i].data;
		_det+=(_i==0?"":",")+"{"+(_i+1)+","+_d.key+","+_d.monto+"}";
		_m=fjsRound(_m*1 + _d.monto*1, 2);
	}
	if(_det==""){fext_MsgA("Planilla no registra detalle de documentos");return false;}
	if(_m*1!=fext_GV(_w,"plan_monto")*1){fext_MsgA("Importe en sumatoria de detalle ["+_m+"], es diferente al importe del documento ["+fext_GV(_w,"plan_monto")+"]",function(){});return false;}
	if(!_frm.getForm().isValid()){return false;}
	Ext.Msg.confirm("Confirmar",trnslt.msg_qst_save,function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/logistics_planillas_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxPlan_key:_w.getCK(),xxType_edit:_w.getTE(),xxYear_id:fext_GV(_w,"year_id"),xxDoc_id:fext_GV(_w,"doc_id"),xxPlan_fecha:_w.down("#plan_fecha").getSubmitValue(),xxTiporden_id:fext_GV(_w,"tiporden_id"),xxFuefin_id:fext_GV(_w,"fuefin_id"),xxPlan_monto:fext_GV(_w,"plan_monto")*1,xxDet:_det,xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getTE()==1){fext_CC("log.PlanillasOK");var _wF=fext_CW("log.PlanillasOK");_wF.setCK(_res.key);_wF.setCS(_w.getCS());_w.close();_wF.show();}else{if(_w.getCS()!==null){_w.getCS().load();}_w.close();}}else{fext_MsgE(_res.msg);}},
			failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
}
});