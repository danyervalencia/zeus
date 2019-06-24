Ext.define("Siace.controller.log.IngE02",{extend:"Ext.app.Controller",
lie:function(poC){var _grd=poC.down("#grdLID");var _frm=comp.down("form");poC.setIconCls("icon_Modify_90");poC.setTitle("Modificar Recepción ::.");
	fextlog_almaFilt({obj:poC.down("#alma_key"),TR:"cboP",TQ:"ALMA1_"+fextpub_sessVar().ua});
	var _str=fext_CS("log.Ingresos_DetE");_grd.bindStore(_str);_grd.getView().refresh();_str.sort("ingdet_item","ASC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(poC,"btnSuppress");str.getProxy().setExtraParam("xxType_record","frm");});
	_frm.load({method:"POST",url:"php/logistics_ingresos_json_records.php",waitMsg:"Loading...",params:{xxIng_key:poC.getCK(),ssNO_USK:poC.getNUK(),xxType_record:"frm",xxMenu_id:poC.getMI(),vs:fext_JE(_vs)},
		success:function(frm,act){try{var _mod=fext_CM("log.IngresoE");var _res=fext_DJ(act);var _d=_res.data[0];if(_d){_mod.set(_d);_frm.loadRecord(_mod);fext_CC("log.IngresosE").lie_txSearch(poC,_d.alma_key);_grd.getStore().load({params:{xxIng_key:_d.ing_key}});}}catch(x){fext_MsgC(x.Message);}},failure:function(frm,act){fext_MsgFL(act);}
	});
	fext_Dsb(poC,"",["tablex_doc","tablex_year","tablex_nro"]);
}
});