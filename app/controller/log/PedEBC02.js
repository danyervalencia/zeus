Ext.define("Siace.controller.log.PedEBC02",{extend:"Ext.app.Controller",
lpe:function(poC){var _frm=poC.down("form");var _mi=poC.getMI();var _t=poC.down("#tabLP");var _grd=_t.down("#grdLPD");var _t1=poC.down("#tab1");var _t2=poC.down("#tab2");var _t3=poC.down("#tab3");var _grd=poC.down("#grdLPD");var _vs=fextpub_sessVar();poC.setIconCls("icon_Modify_90");poC.setTitle("Modificar Requerimiento ::.");fext_Dsb(_t,"btnAdd");
	var _str=Ext.create("Siace.store.log.Pedidos_DetE",{listeners:{update:function(str,rec,oper,opt){var _m=0;str.each(function(r){_m+=r.data.peddet_pretot;});fext_SV(poC,"ped_monto",_m);}}});
	var _ce=Ext.create("Ext.grid.plugin.CellEditing",{clicksToEdit:1,listeners:{edit:function(editor,e,opt){var _r=e.record;var _prev=_r.data.peddet_pretot;_r.set("peddet_pretot",fjsRound(_r.data.peddet_cantid*_r.data.peddet_preuni,2));if(!fext_IE(poC,"tarea_key")&&!fext_IE(poC,"fftr_id")){fext_CC("log.PedEBC").lpe_grdTFE(poC,{tk:fext_GV(poC,"tarea_key"),ffi:fext_GV(poC,"fftr_id").substr(0,3),tri:fext_GV(poC,"fftr_id").substr(4),edi:_r.data.espedet_id,pretot:(_r.data.peddet_pretot*1-_prev*1),factor:1});}}}});_ce.init(_grd);
	_grd.bindStore(_str);_grd.getView().refresh();_str.sort("peddet_item","ASC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(_t,"btnSuppress");str.getProxy().setExtraParam("xxType_record","frm");});
	fextbud_tareasAMParam({pan:_t,di:501,dt:"U1",de:1,mi:_mi,TR:"cboCN",OB:"meta_codename"});fextbud_tareasATParam({pan:_t,di:501,dt:"U1",de:1,mi:_mi,TR:"cboCN",OB:"tarea_codename"});fextbud_tareas_fftredParam({pan:_t,obj:_t.down("#fftr_id"),nuk:"NoT",TQ:"T_FF_TR",OB:"fftr_codename"});

	_frm.load({method:"POST",url:"php/logistics_pedidos_json_records.php",waitMsg:"Loading...",params:{xxPed_key:poC.getCK(),xxYear_id:fext_GV(_t,"year_id"),ssNO_USK:poC.getNUK(),xxType_record:"frm",xxMenu_id:_mi,vs:fext_JE(_vs)},
		success:function(frm,act){
			try{var _md=fext_CM("log.PedidoE");var _res=fext_DJ(act);var _d=_res.data[0];if(_d){_md.set(_d);_frm.loadRecord(_md);var _tt=(_d.tipped_id==5006?"Especificaciones Técnicas":"Terminos de Referencia");var _tp=poC.down("tabpanel");
				_tp.child("#tab1").tab.show();_tp.child("#tab2").tab.show();_tp.child("#tab3").tab.show();if(fjsIn_array(_d.tipped_id,[5007,5008])){_t1.setTitle(_tt+" I");_t2.setTitle(_tt+" II");_t3.setTitle(_tt+" III");poC.down("#pedettr_nombre").setFieldLabel("&nbsp;1. Denominación del Servicio o Consultoría");poC.down("#pedettr_objetivo").setFieldLabel("&nbsp;3. Objetivo del Servicio o Consultoría");fext_Dsb(poC,"lugentr_id");poC.down("#lugentr_id").setFieldLabel("&nbsp;4.1. Lugar de Ejecución");poC.down("#pedettr_entregable").setFieldLabel("&nbsp;4.3 Productos y/o Servicios a Obtener (Entregables)");poC.down("#pedettr_actividades").show();poC.down("#pedettr_condiciones").hide();poC.down("#tipplaz_id").up("fieldcontainer").setFieldLabel("&nbsp;4.4. Plazo de Ejecución");poC.down("#pedettr_fechaini").setFieldLabel("Periodo de Ejecución");poC.down("#pedettr_persona").setFieldLabel("&nbsp;5. Requisitos y Perfil del Contratista");poC.down("#pedettr_garantia_nro").setFieldLabel("&nbsp;6. Garantía del Servicio (Nro. Meses)");poC.down("#pedettr_supervisa").setFieldLabel("&nbsp;8. Conformidad del Servicio y/o Consultoría");}
				fext_SV(_t,"year_id",_d.year_id*1);fext_SV(_t,"ped_nro",fjsLpad(_d.ped_nro,6,0));fext_SV(_t,"ped_fecha",_d.ped_fecha);fext_SV(_t,"tipped_id",_d.tipped_id*1);fext_SV(_t,"ped_monto",_d.ped_monto);
				fextpub_areasFilt({obj:poC.down("#area_key"),ak:_d.area_key,nuk:"NoT",TR:"cbo",AB:"NO",dsb:true});
				fextbud_tareasAMLoad({pan:_t,mei:_d.meta_id,ak:_d.area_key});fextbud_tareasATLoad({pan:_t,tk:_d.tarea_key,ak:_d.area_key,mei:_d.meta_id});
				fext_GS(_t,"fftr_id").load({params:{xxTarea_key:_d.tarea_key},callback:function(r,oper,succ){fext_SV(_t,"fftr_id",_d.fftr_id);fext_SD(_t,"fftr_id",false);}});
				fext_GS(_t,"grdLPD").load({params:{xxPed_key:_d.ped_key},callback:function(r,oper,succ){fext_SV(_t,"peddet_item",r[r.length-1].data.peddet_item);}});fext_GS(_t,"grdLPTF").load({params:{xxPed_key:_d.ped_key},callback:function(r,oper,succ){}});
				fext_GS(_t1,"lugentr_id").load({params:{xxLugentr_estado:1,xxType_record:"cbo",callback:function(r,oper,succ){fext_SV(_t1,"lugentr_id",_d.lugentr_id*1);}}});
			}}catch(x){fext_MsgC(x);}
		},failure:function(frm,act){fext_MsgFL(act);}
	});
	_frm.load({method:"POST",url:"php/logistics_pedidos_ettr_json_records.php",waitMsg:"Loading...",params:{xxPed_key:poC.getCK(),xxType_record:"frm",vs:fext_JE(_vs)},success:function(frm,act){try{var _md=fext_CM("log.Pedido_EttrE");var _res=fext_DJ(act);var _d=_res.data[0];if(_d){_md.set(_d);_frm.loadRecord(_md);if(_d.file1!=""){fext_SRV(poC,"ffiF1",_d.file1);fext_SRO(poC,"ffiF1");poC.down("#btnF1Dow").enable();}if(_d.file2!=""){fext_SRV(poC,"ffiF2",_d.file2);fext_SRO(poC,"ffiF2");poC.down("#btnF2Dow").enable();}}}catch(x){fext_MsgC(x.Message);}}});
	fext_SRO(_t,"ped_observ");fext_SRO(poC,"",["pedettr_nombre","pedettr_finalidad","pedettr_objetivo","pedettr_lugar","pedettr_actividades","pedettr_entregable","pedettr_condiciones","pedettr_plazo","pedettr_persona","pedettr_garantia","pedettr_forma_pago","pedettr_supervisa","pedettr_penalidad","pedettr_otros"],1);fext_Dsb(poC,"",["lugentr_id","tipplaz_id","pedettr_plazo_nro","pedettr_fechaini","pedettr_fechafin","pedettr_garantia_nro","ffiF1","ffiF2"]);
}
});