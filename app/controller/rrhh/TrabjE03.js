Ext.define("Siace.controller.rrhh.TrabjE03",{extend:"Ext.app.Controller",
rte:function(poC){var _frm=poC.down("form");poC.setIconCls("icon_Query_90");poC.setTitle("Consulta Registro de Trabajador ::.");
	_frm.load({method:"POST",url:"php/rrhh_trabajadores_json_records.php",params:{xxTrabj_key:poC.getCK(),xxType_record:"frm"},waitMsg:"Loading...",
		success:function(frm,act){
			try{var _mod=fext_CM("rrhh.TrabajadorE");var _res=fext_DJ(act);var _d=_res.data[0];
				if(_d){_mod.set(_d);_frm.loadRecord(_mod);
					fextpub_tipdocidentFilt({obj:poC.down("#tipdocident_id"),tdiei:1,val:_d.tipdocident_id,TR:"cboAP",AB:"NO",dsb:true});fext_SV(poC,"indiv_dni",_d.indiv_dni);fext_SV(poC,"indiv_apenom",_d.indiv_apenom);
					fextpub_areasFilt({obj:poC.down("#area_key"),ak:_d.area_key,nuk:"NoT",TR:"cbo",AB:"NO",dsb:true});
					fext_GS(poC,"carg_id").load({params:{xxType_record:"cbo"},callback:function(r){fext_SV(poC,"carg_id",_d.carg_id*1);}});
				}
			}catch(x){fext_MsgC(x);}
		},failure:function(frm,act){fext_MsgFL(act);}
	});
	fext_Dsb(poC,"",["indiv_dni","btnPIS","tipplan_id","area_key","carg_id","trabj_fechaini","trabj_fechafin","btnSave","btnUndo"]);fext_SRO(poC,"trabj_observ");poC.down("#btnExit").enable();
}
});