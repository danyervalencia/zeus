Ext.define("Siace.controller.log.ValE03",{extend:"Ext.app.Controller",
lve:function(poC){var _frm=poC.down("form");var _mi=poC.getMI();poC.setIconCls("icon_Query_90");poC.setTitle("Consulta Vale de Combustible ::.");var _str=fext_CS("log.Vales_DetEdit");
	_frm.load({method:"POST",url:"php/logistics_vales_json_records.php",waitMsg:"Loading...",params:{xxIng_key:poC.getCK(),ssNO_USK:poC.getNUK(),xxType_record:"frm",xxMenu_id:_mi,vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){try{var _mod=fext_CM("log.IngresoEdit");var _res=fext_DJ(act);var _dat=_res.data[0];if(_dat){_mod.set(_dat);_frm.loadRecord(_mod);comp.down("#ing_monto").setValue(_dat.ing_monto*1);comp.down("#tablex_doc").setValue(_dat.tablex_doc*1);comp.down("#tablex_nro").setValue(fjsLpad(_dat.tablex_nro,6,0));comp.down("#tablex_fecha").setValue(fjsDateDDMMAAAA(_dat.tablex_fecha));comp.down("#pers_ruc").setValue(_dat.pers_ruc);comp.down("#pers_nombre").setValue(_dat.pers_nombre);}}catch(x){fext_MsgC(x.Message);}
		},failure:function(frm,act){fext_msgFL(act);}
	});
	fext_Dsb(poC,"",["btnSave","btnUndo"]);poC.down("#btnExit").enable();
}
});