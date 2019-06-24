Ext.define("Siace.controller.rrhh.TrabjE02",{extend:"Ext.app.Controller",
rte:function(poC){var _frm=poC.down("form");poC.setIconCls("icon_Modify_90");poC.setTitle("Modificar Registro de Trabajador ::.");fext_Dsb(poC,"",["indiv_dni","btnPIS"]);
	_frm.load({method:"POST",url:"php/rrhh_trabajadores_json_records.php",params:{xxTrabj_key:poC.getCK(),xxType_record:"frm"},waitMsg:"Loading...",
		success:function(frm,act){
			try{var _mod=fext_CM("rrhh.TrabajadorE");var _res=fext_DJ(act);var _d=_res.data[0];
				if(_d){_mod.set(_d);_frm.loadRecord(_mod);
					fextpub_tipdocidentFilt({obj:poC.down("#tipdocident_id"),tdiei:1,val:_d.tipdocident_id,TR:"cboAP",AB:"NO",dsb:true});fext_SV(poC,"indiv_dni",_d.indiv_dni);fext_SV(poC,"indiv_apenom",_d.indiv_apenom);
					fextpub_areasFilt({obj:poC.down("#area_key"),val:_d.area_key,nuk:"NoT",TR:"cbo",AB:"NO",filt:false,setVal:(_d.area_key==""?false:true)});
					fext_GS(poC,"carg_id").load({params:{xxType_record:"cbo"},callback:function(r){fext_SV(poC,"carg_id",_d.carg_id*1);}});
				}
			}catch(x){fext_MsgC(x);}
		},failure:function(frm,act){fext_MsgFL(act);}
	});
}
});