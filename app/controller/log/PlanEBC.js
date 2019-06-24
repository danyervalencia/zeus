Ext.define("Siace.controller.log.PlanEBC",{extend:"Ext.app.Controller",
lpe:function(poW){var _w=poW;var _frm=_w.down("form");
	if(_w.getCK()==""){fext_MsgA("Error de Sistema no se ha establecido BBPPKKK");return false;}
	Ext.Msg.confirm(trnslt.cnf,"¿Esta seguro de registrar el Certificado de la planilla seleccionada?",function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST", url:"php/logistics_planillas_save_certificado.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxType_edit:5028,xxPlan_key:_w.getCK(),xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!==null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
}
});