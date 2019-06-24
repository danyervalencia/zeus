Ext.define("Siace.controller.log.PedEBC12",{extend:"Ext.app.Controller",
lpe:function(poC){var _mi=poC.getMI();var _frm=poC.down("form");var _t=poC.down("#tabLP");var _grd=_t.down("#grdLPD");var _t1=poC.down("#tab1");var _vs=fextpub_sessVar();poC.setIconCls("icon_Invoice_90");fext_SRO(poC,"ped_observ","",1);fext_Dsb(poC,"btnAdd");poC.down("tabpanel").setActiveTab(1);
	var _str=fext_CS("log.Pedidos_DetE");_grd.bindStore(_str);_grd.getView().refresh();_str.sort("peddet_item","ASC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(_t,"btnSuppress");str.getProxy().setExtraParam("xxType_record","frm");});
	fextbud_tareasAMParam({pan:_t,di:501,dt:"U1",de:1,mi:_mi,TR:"cboCN",OB:"meta_codename"});fextbud_tareasATParam({pan:_t,di:501,dt:"U1",de:1,mi:_mi,TR:"cboCN",OB:"tarea_codename",AB:"NO"});fextbud_tareas_fftredParam({pan:_t,obj:_t.down("#fftr_id"),nuk:"NoT",TQ:"T_FF_TR",OB:"fftr_codename"});

	_frm.load({method:"POST",url:"php/logistics_pedidos_json_records.php",waitMsg:"Loading...",params:{xxPed_key:poC.getCK(),xxYear_id:fext_GV(_t,"year_id"),ssNO_USK:poC.getNUK(),xxType_record:"frm",xxMenu_id:_mi,vs:fext_JE(_vs)},
		success:function(frm,act){var _b=true;
			try{var _md=fext_CM("log.PedidoE");var _res=fext_DJ(act);var _d=_res.data[0];if(_d){_md.set(_d);_frm.loadRecord(_md);var _tt=(_d.tipped_id==5006?"Especificaciones Técnicas":"Terminos de Referencia");
				poC.setTitle("Editar "+_tt+" de Requerimiento ::.");var _tp=poC.down("tabpanel");
				_tp.child("#tab1").tab.show();_tp.child("#tab2").tab.show();_tp.child("#tab3").tab.show();if(fjsIn_array(_d.tipped_id,[5007,5008])){_t1.setTitle(_tt+" I");poC.down("#tab2").setTitle(_tt+" II");poC.down("#tab3").setTitle(_tt+" III");poC.down("#pedettr_nombre").setFieldLabel("&nbsp;1. Denominación del Servicio o Consultoría");poC.down("#pedettr_objetivo").setFieldLabel("&nbsp;3. Objetivo del Servicio o Consultoría");fext_Dsb(poC,"lugentr_id");poC.down("#lugentr_id").setFieldLabel("&nbsp;4.1. Lugar de Ejecución");poC.down("#pedettr_entregable").setFieldLabel("&nbsp;4.3 Productos y/o Servicios a Obtener (Entregables)");poC.down("#pedettr_actividades").show();poC.down("#pedettr_condiciones").hide();poC.down("#tipplaz_id").up("fieldcontainer").setFieldLabel("&nbsp;4.4. Plazo de Ejecución");poC.down("#pedettr_fechaini").setFieldLabel("Periodo de Ejecución");poC.down("#pedettr_persona").setFieldLabel("&nbsp;5. Requisitos y Perfil del Contratista");poC.down("#pedettr_garantia_nro").setFieldLabel("&nbsp;6. Garantía del Servicio (Nro. Meses)");poC.down("#pedettr_supervisa").setFieldLabel("&nbsp;8. Conformidad del Servicio y/o Consultoría");}
				fext_SV(_t,"year_id",_d.year_id*1);fext_SV(_t,"ped_nro",fjsLpad(_d.ped_nro,6,0));fext_SV(_t,"ped_fecha",_d.ped_fecha);fext_SV(_t,"tipped_id",parseInt(_d.tipped_id));fext_SV(_t,"ped_monto",_d.ped_monto);
				fextpub_areasFilt({obj:poC.down("#area_key"),ak:_d.area_key,nuk:"NoT",TR:"cbo",AB:"NO",dsb:true});
				fextbud_tareasAMLoad({pan:_t,mei:_d.meta_id,ak:_d.area_key,dsb:_b});fextbud_tareasATLoad({pan:_t,tk:_d.tarea_key,ak:_d.area_key,mei:_d.meta_id,dsb:_b});
				fext_GS(_t,"fftr_id").load({params:{xxTarea_key:_d.tarea_key},callback:function(rec,oper,succ){fext_SV(_t,"fftr_id",_d.fftr_id);fext_SD(_t,"fftr_id",_b);}});
				fext_GS(_t,"grdLPD").load({params:{xxPed_key:_d.ped_key}});fext_GS(_t,"grdLPTF").load({params:{xxPed_key:_d.ped_key}});
				fext_GS(_t1,"lugentr_id").load({params:{xxLugentr_estado:1,xxType_record:"cbo",callback:function(rec,oper,succ){if(_d.lugentr_id*1>0){fext_SV(_t1,"lugentr_id",_d.lugentr_id*1);}}}});
			}}catch(x){fext_MsgC(x);}
		},failure:function(frm,act){fext_MsgFL(act);}
	});
	_frm.load({method:"POST",url:"php/logistics_pedidos_ettr_json_records.php",waitMsg:"Loading...",params:{xxPed_key:poC.getCK(),xxType_record:"frm",vs:fext_JE(_vs)},success:function(frm,act){try{var _md=fext_CM("log.Pedido_EttrE");var _res=fext_DJ(act);var _d=_res.data[0];if(_d){_md.set(_d);_frm.loadRecord(_md);if(_d.file1!=""){fext_SRV(poC,"ffiF1",_d.file1);fext_SRO(poC,"ffiF1");poC.down("#btnF1Dow").enable();poC.down("#btnF1Del").show();}if(_d.file2!=""){fext_SRV(poC,"ffiF2",_d.file2);fext_SRO(poC,"ffiF2");poC.down("#btnF2Dow").enable();poC.down("#btnF2Del").show();}}}catch(x){fext_MsgC(x.Message);}}});
}
});