Ext.define("Siace.controller.pub.VehE02",{extend:"Ext.app.Controller",
pve:function(poC){var _mi=poC.getMI();var _frm=poC.down("form");poC.setIconCls("icon_Modify_90");poC.setTitle("Modificar Datos de Vehículo ::.");
	_frm.load({method:"POST",url:"php/public_vehiculos_json_records.php",params:{xxVeh_key:poC.getCK(),xxType_record:"frm"},waitMsg: "Loading...",
		success:function(frm,act){
			try{var _mod=fext_CM("pub.VehiculoE");var _res=fext_DJ(act);var _d=_res.data[0];
				if(_d){_md.set(_d);_frm.loadRecord(_md);
					if(_md.data.veh_pdf!=""){poC.down("#ffiVeh_pdf").hide();poC.down("#btnVeh_pdfDel").show();poC.down("#btnVeh_pdfDow").setDisabled(false);}
				}
			}catch(x){fext_MsgC(x.Message);}
		},failure:function(frm,act){fext_MsgFL(act);}
	});
}
});