Ext.define("Siace.controller.tre.EgreES",{extend:"Ext.app.Controller",
tees:function(poW){var _w=poW;var _frm=_w.down("form");var _pk=fext_GV(_w,fext_GV(_w,"tipdocident_id")==3?"pers_key":"indiv_key");
	if(fext_IE(_w,"egre_fecha")){fext_MsgA("Error de navegador, no se ha establecido la FECHA");return false;}
	if(fext_IE(_w,"tablex_key")){fext_MsgA("No se ha indicado el documento al cual se va a realizar el pago");return false;}
	if(fext_IE(_w,"expe_nro")){fext_MsgA("Documento al cual va realizar el pago no regitra número de SIAF");return false;}
	if(fext_IE(_w,"fuefin_id")){fext_MsgA("Debe indicar el Rubro de Gasto");return false;}
	if(Ext.isEmpty(_pk)){fext_MsgA("Debe indicar la persona a quien se asigna el documento");return false;}
	if(fext_GV(_w,"egre_monto")*1<=0){fext_MsgA("Importe de comprobante debe ser mayor a 0 (cero)",_w.down("#egre_monto"));return false;}
	if(fext_IE(_w,"cuebanc_key")){fext_MsgA("No se ha indicado la Cuenta Bancaria por la cual se va a realizar pago");return false;}
	if(!_frm.getForm().isValid()){return false;}
	Ext.Msg.confirm("Confirmar",trnslt.msg_qst_save,function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/treasury_egresos_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxEgre_key:_w.getCK(),xxType_edit:_w.getTE(),xxYear_id:fext_GV(_w,"year_id"),xxDoc_id:fext_GV(_w,"doc_id"),xxEgre_nro:_w.down("#egre_nro").getSubmitValue(),xxEgre_fecha:_w.down("#egre_fecha").getSubmitValue(),xxTablex_doc:fext_GV(_w,"tablex_doc"),xxPers_key:_pk,xxMeta_id:fext_GV(_w,"meta_id"),xxTarea_key:fext_GV(_w,"tarea_key"),xxFuefin_id:fext_GV(_w,"fuefin_id"),xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!==null){_w.getCS().load();}if(_w.getTE()==1){fext_CC("tre.EgresosOK");var _wF=fext_CW("tre.EgresosOK");_wF.setCC(_w);_wF.setCK(_res.key);_wF.setCS(_w.getCS());_wF.down("#btnPrinter").enable();_wF.show();}else{_w.close();}}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
}
});