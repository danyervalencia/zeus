Ext.define("Siace.controller.rrhh.TrabjE01",{extend:"Ext.app.Controller",
rte:function(poC){poC.setIconCls("icon_New_90");poC.setTitle("Nuevo Registro de Trabajador ::.");
	fextpub_tipdocidentFilt({obj:poC.down("#tipdocident_id"),tdiei:1,TR:"cboAP",AB:"NO"});fextpub_areasFilt({obj:poC.down("#area_key"),nuk:"NoT",TR:"cbo",AB:"NO",filt:false,setVal:false});fext_GS(poC,"carg_id").load({params:{xxType_record:"cbo"}});
	if(fext_GV(poC,"indiv_key")!=""){fext_Dsb(poC,"",["tipdocident_id","indiv_dni","btnPIS"]);
		Ext.Ajax.request({method:"POST",url:"php/public_individuos_json_records.php",params:{xxIndiv_key:fext_GV(poC,"indiv_key"),xxType_record:"data"},
			success:function(resp){var _res=fext_DJ("",resp);if(_res.success){if(_res.subtotal==1){var _d=_res.data[0];fext_SV(poC,"tipdocident_id",_d.tipdocident_id*1);fext_SV(poC,"indiv_dni",_d.indiv_dni);fext_SV(poC,"indiv_apenom",_d.indiv_apenom);}}},failure:function(resp){fext_MsgE(resp.responseText);}
		});
	}
}
});