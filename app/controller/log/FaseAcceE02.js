Ext.define("Siace.controller.log.FaseAcceE02",{extend:"Ext.app.Controller",
lfa:function(poC){poC.setIconCls("icon_Modify_90");poC.setTitle("Modificar Acceso a Fase ::.");var _frm=poC.down("form");fext_Dsb(poC,"doc_id");
	_frm.load({method:"POST",url:"php/logistics_fases_accesos_json_records.php",waitMsg:"Loading...",params:{xxFaseacce_key:poC.getCK(),xxType_record:"frm"},
		success:function(frm,act){try{var _mod=fext_CM("log.Fase_AccesoE");var _res=fext_DJ(act);var _d=_res.data[0];if(_d){_mod.set(_d);_frm.loadRecord(_mod);
			fext_SV(poC,"faseacce_vobo",_d.faseacce_vobo==1?true:false);fext_SV(poC,"faseacce_estado",_d.faseacce_estado==1?true:false);
			poC.down("#fase_id").getStore().load({params:{xxDoc_id:_d.doc_id,xxFase_esvobo:1,xxType_record:"cbo"},callback:function(r){fext_SV(poC,"fase_id",_d.fase_id*1);}});
			fextpub_cargusurFilt({obj:poC.down("#cargusur_id"),TR:"cbo",OB:"cargusur_orden",val:_d.cargusur_id,AB:"NOT"});
			fextpub_tabgenFilt({obj:poC.down("#faseacce_type"),tgp:5030,val:_d.faseacce_type,AB:"NOT"});
			poC.down("#fase_next").getStore().load({params:{xxDoc_id:_d.doc_id,xxFase_esvobo:1,xxType_record:"cbo",xxAdd_blank:"YES"},callback:function(r){fext_SV(poC,"fase_next",_d.fase_next*1);}});
		}}catch(x){fext_MsgC(x.Message);}},failure:function(frm,act){fext_MsgFL(act);}
	});
}
});