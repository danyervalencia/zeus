Ext.define("Siace.controller.log.SalE02",{extend:"Ext.app.Controller",
lse:function(poC){var _mi=poC.getMI();var _grd=poC.down("#grdLSD");var _cboM=poC.down("#meta_id");var _cboT=poC.down("#tarea_key");var _frm=poC.down("form");poC.setIconCls("icon_Modify_90");poC.setTitle("Modificar Salida de Almacen ::.");
	var _str=fext_CS("log.Salidas_DetE");_grd.bindStore(_str);_grd.getView().refresh();_str.sort("saldet_item","ASC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(poC,"btnSuppress");fext_PSEP(str,["xxType_record"],["grdLSE"]);});
	_frm.load({method:"POST",url:"php/logistics_salidas_json_records.php",waitMsg:"Loading...",params:{xxSal_key:poC.getCK(),ssNO_USK:poC.getNUK(),xxType_record:"frm",xxMenu_id:_mi,vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){
			try{var _md=fext_CM("log.SalidaE");var _res=fext_DJ(act);var _d=_res.data[0];if(_d){_md.set(_d);_frm.loadRecord(_md);
				fextpub_areasFilt({obj:poC.down("#area_key"),TR:"cbo",filt:true,nuk:(_mi==5132?"NoT":""),mi:_mi,dsb:true,ak:_d.area_key,val:_d.area_key});
				_cboM.getStore().load({params:{xxMeta_id:_d.meta_id},callback:function(rec){if(rec.length>0){_cboM.setValue(_d.meta_id*1);}else{_cboM.setValue("");}}});
				_cboT.getStore().load({params:{xxTarea_key:_d.tarea_key},callback:function(rec){if(rec.length>0){_cboT.setValue(_d.tarea_key);}else{_cboT.setValue("");}}});
				_str.load({params:{xxSal_key:_d.sal_key,xxType_record:"grdLSE"}});
			}}catch(x){fext_MsgC(x.Message);}
		},failure:function(frm,act){fext_msgFL(act);}
	});
	fext_Dsb(poC,"",["tablex_doc","tablex_year","tablex_nro","meta_id","tarea_key"]);
}
});