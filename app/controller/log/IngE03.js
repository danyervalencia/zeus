Ext.define("Siace.controller.log.IngE03",{extend:"Ext.app.Controller",
lie:function(poC){var _grd=poC.down("#grdLID")var _cboAK=poC.down("#alma_key");var _frm=comp.down("form");poC.setIconCls("icon_Query_90");poC.setTitle("Consulta de Recepción ::.");
	fext_BS(_cboAK,"","log.AlmacenesCbo");_cboAK.getStore().on("beforeload",function(str,oper,opt){fext_PSEP(str,["xxType_record","xxType_query","xxOrder_by","xxAdd_blank"],["cbo","ONLY","alma_nombre","YES"]);});_cboAK.getStore().load();
	var _str=fext_CS("log.Ingresos_DetE");_grd.bindStore(_str);_grd.getView().refresh();_str.pageSize=500;_str.sort("ingdet_item","ASC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(poC,"btnSuppress");str.getProxy().setExtraParam("xxType_record",_TE==1?"searchLIE":"frm");});
	_frm.load({method:"POST",url:"php/logistics_ingresos_json_records.php",waitMsg:"Loading...",params:{xxIng_key:poC.getCK(),ssNO_USK:poC.getNUK(),xxType_record:"frm",xxMenu_id:poC.getMI(),vs:fext_JE(_vs)},
		success:function(frm,act){try{var _mod=fext_CM("log.IngresoE");var _res=fext_DJ(act);var _d=_res.data[0];if(_d){_mod.set(_d);_frm.loadRecord(_mod);fext_CC("log.IngresosE").lie_txSearch(poC,_d.alma_key);_grd.getStore().load({params:{xxIng_key:_d.ing_key}});}}catch(x){fext_MsgC(x.Message);}},failure:function(frm,act){fext_MsgFL(act);}
	});
	fext_Dsb(poC,"",["tablex_doc","tablex_year","tablex_nro"]);
	fext_Dsb(poC,"",["doc_id","ing_serie","ing_nro","ing_fecha","ing_fecharec","alma_key","btnSave","btnUndo"]);fext_SRO(poC,"ing_observ"),fext_SD(poC,"btnExit",false);
}
});