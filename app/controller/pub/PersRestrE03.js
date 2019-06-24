Ext.define("Siace.controller.pub.PersRestrE03",{extend:"Ext.app.Controller",
ppre:function(poC){var _frm=poC.down("#frmPPR");poC.setIconCls("icon_Query_90");poC.setTitle("Consulta Registro de Restricción ::.");
	_frm.load({method:"POST",url:"php/public_personas_restricciones_json_records.php",params:{xxPersrestr_key:poC.getCK(),xxType_record:"frm"},waitMsg:"Loading...",
		success:function(frm,act){
			try{var _mod=fext_CM("pub.Persona_RestriccionE");var _res=fext_DJ(act);var _d=_res.data[0];
				if(_d){_mod.set(_d);_frm.loadRecord(_mod);fextpub_tabgenFilt({obj:poC.down("#tiprestr_id"),tgp:1190,val:_d.tiprestr_id,AB:"NO",dsb:true});fext_SV(poC,"persrestr_estado",_d.persrestr_estado==1?true:false);}
			}catch(x){fext_MsgC(x);}
		},failure:function(frm,act){fext_MsgFL(act);}
	});
	fext_Dsb(poC,"",["tiprestr_id","persrestr_fechaini","persrestr_fechafin","persrestr_montot","persrestr_montoa","persrestr_montoi","persrestr_estado","btnSave","btnUndo"]);fext_SRO(poC,"persrestr_observ");poC.down("#btnExit").enable();
}
});