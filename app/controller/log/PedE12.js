Ext.define("Siace.controller.log.PedE12",{extend:"Ext.app.Controller",
lpe:function(poC){var _mi=poC.getMI();var _t0=poC.down("#tabLP");var _grdLPD=poC.down("#grdLPD");var _cboLE=poC.down("#lugentr_id");var _frm=poC.down("form");var _vs=fextpub_sessVar();poC.setIconCls("icon_Modify_90");fext_SRO(_t0,"ped_observ","",1);fext_Dsb(poC,"btnAdd");poC.down("tabpanel").setActiveTab(1);
	var _strLPD=fext_CS("log.Pedidos_DetE");_grdLPD.bindStore(_strLPD);_grdLPD.getView().refresh();_strLPD.sort("peddet_item","ASC");
	_strLPD.on("beforeload",function(str,oper,opt){fext_Dsb(_t0,"btnSuppress");str.getProxy().setExtraParam("xxType_record","frm");});
	if(_mi==5137){fextbud_metasParam({pan:_t0,nuk:"NoT",TR:"cboCN",OB:"meta_codename"});fextbud_tareasParam({pan:_t0,nuk:"NoT",TR:"cboCN",OB:"tarea_codename"});fextpub_areasFilt({obj:_t0.down("#area_key"),filt:false,nuk:"NoT",TR:"cbo",AB:"NO"});}
	else{fextbud_tareasAMParam({pan:_t0,di:501,dt:"U1",de:1,TR:"cboCN",OB:"meta_codename"});fextbud_tareasATParam({pan:_t0,di:501,dt:"U1",de:1,TR:"cboCN",OB:"tarea_codename"});fextpub_areasFilt({obj:_t0.down("#area_key"),nuk:"NoT",TR:"cbo",AB:"NO",dsb:true});}

	_cboLE.bindStore(Ext.create("Siace.store.log.Lugares_EntregaCbo"));_cboLE.getStore().load({params:{xxLugentr_estado:1,xxType_record:"cbo"}});
	_frm.load({method:"POST",url:"php/logistics_pedidos_json_records.php",waitMsg:"Loading...",params:{xxPed_key:poC.getCK(),xxYear_id:fext_GV(_t0,"year_id"),ssNO_USK:poC.getNUK(),xxType_record:"frm",xxMenu_id:_mi,vs:fext_JE(_vs)},
		success:function(frm,act){
			try{var _md=fext_CM("log.PedidoE");var _res=fext_DJ(act);var _d=_res.data[0];var _tt=(_d.tipped_id==5006?"Especificaciones Técnicas":"Terminos de Referencia");
				if(_d){_md.set(_d);_frm.loadRecord(_md);poC.setTitle("Editar "+_tt+" de Requerimiento");
					poC.down("tabpanel").child("#tab1").tab.show();poC.down("tabpanel").child("#tab2").tab.show();poC.down("tabpanel").child("#tab3").tab.show();
					if(fjsIn_array(_d.tipped_id,[5007,5008])){poC.down("#tab1").setTitle(_tt+" I");poC.down("#tab2").setTitle(_tt+" II");poC.down("#tab3").setTitle(_tt+" III");poC.down("#pedettr_nombre").setFieldLabel("&nbsp;1. Denominación del Servicio o Consultoría");poC.down("#pedettr_objetivo").setFieldLabel("&nbsp;3. Objetivo del Servicio o Consultoría");fext_Dsb(poC,"lugentr_id");poC.down("#lugentr_id").setFieldLabel("&nbsp;4.1. Lugar de Ejecución");poC.down("#pedettr_entregable").setFieldLabel("&nbsp;4.3 Productos y/o Servicios a Obtener (Entregables)");poC.down("#pedettr_actividades").show();poC.down("#pedettr_condiciones").hide();poC.down("#tipplaz_id").up("fieldcontainer").setFieldLabel("&nbsp;4.4. Plazo de Ejecución");poC.down("#pedettr_fechaini").setFieldLabel("Periodo de Ejecución");poC.down("#pedettr_persona").setFieldLabel("&nbsp;5. Requisitos y Perfil del Contratista");poC.down("#pedettr_garantia_nro").setFieldLabel("&nbsp;6. Garantía del Servicio (Nro. Meses)");poC.down("#pedettr_supervisa").setFieldLabel("&nbsp;8. Conformidad del Servicio y/o Consultoría");}					
					fext_SV(_t0,"year_id",_d.year_id*1);fext_SV(_t0,"ped_nro",_d.ped_nro);fext_SV(_t0,"ped_fecha",_d.ped_fecha);fext_SV(_t0,"tipped_id",parseInt(_d.tipped_id));fext_SV(_t0,"ped_monto",_d.ped_monto);
					fextbud_tareasAMLoad({pan:_t0,dsb:true,mei:_d.meta_id});fextbud_tareasATLoad({pan:_t0,mei:_d.meta_id,dsb:true,tk:_d.tarea_key});
					fext_GS(_t0,"fftr_id").load({params:{xxTarea_key:_d.tarea_key},callback:function(r,oper,succ){fext_SV(_t0,"fftr_id",_d.fftr_id);_t0.down("#fftr_id").disable();}});
					fext_GS(_t0,"grdLPD").load({params:{xxPed_key:_d.ped_key},callback:function(r,oper,succ){fext_SV(_t0,"peddet_item",r[r.length-1].data.peddet_item);}});
					fext_GS(_t0,"grdLPTF").load({params:{xxPed_key:_d.ped_key}});
				}
			}catch(x){fext_MsgC(x);}
		},failure:function(frm,act){fext_MsgFL(act);}
	});
	_frm.load({method:"POST",url:"php/logistics_pedidos_ettr_json_records.php",waitMsg:"Loading...",params:{xxPed_key:poC.getCK(),xxType_record:"frm",vs:fext_JE(_vs)},
		success:function(frm,act){try{var _md=fext_CM("log.Pedido_EttrE");var _res=fext_DJ(act);var _d=_res.data[0];if(_d){_md.set(_d);_frm.loadRecord(_md);if(_d.pedettr_file1!==""){poC.down("#ffiF1").setRawValue(_d.pedettr_file1);fext_SRO(poC,"ffiF1");poC.down("#btnF1Dow").enable();poC.down("#btnF1Del").show();}if(_d.pedettr_file2!==""){poC.down("#ffiF2").setRawValue(_d.pedettr_file2);fext_SRO(poC,"ffiF2");poC.down("#btnF2Dow").enable();poC.down("#btnF2Del").show();}}}catch(x){fext_MsgC(x.Message);}}
	});
}
});