Ext.define("Siace.controller.bud.NotaE02",{extend:"Ext.app.Controller",
bne:function(poC){var _mi=poC.getMI();var _grd=poC.down("#grdBNTF");poC.setIconCls("icon_Modify_90");poC.setTitle("Modificar Nota Presupuestal ::.");var _vs=fextpub_sessVar();
	if(_mi==2105){fextbud_metasParam({pan:poC,TR:"cboCN",OB:"meta_codename"});fextbud_tareasParam({pan:poC,TR:"cboCN",OB:"tarea_codename"});}
	else{fextpub_areasFilt({obj:poC.down("#area_key"),filt:true,ak:_vs.a,TR:"cbo",dsb:true,AB:"NO"});fextbud_tareasAMParam({pan:poC,di:201,dt:"U1",de:1,TR:"cboCN",OB:"meta_codename",AB:"NO"});fextbud_tareasATParam({pan:poC,di:201,dt:"U1",de:1,TR:"cboCN",OB:"tarea_codename",AB:"NO"});}
	var _str=Ext.create("Siace.store.bud.Notas_Tareas_FftredE",{listeners:{update:function(str,rec,oper,opt){var _d=rec.data;
		if(_d.tipnotadet_id==2041&&_d.notatareafte_ingreso*1>0){Ext.Msg.alert(trnslt.msg,"Importe de Crédito no pueder ser mayor que cero",function(){rec.set("notatareafte_ingreso",0.00);});return false;}
		if(_d.tipnotadet_id==2042&&_d.notatareafte_egreso*1>0){Ext.Msg.alert(trnslt.msg,"Importe de Anulación no pueder ser mayor que cero",function(){rec.set("notatareafte_egreso",0.00);});return false;}
		var _egr=0;var _ing=0;str.each(function(r){_egr+=r.data.notatareafte_egreso;_ing+=r.data.notatareafte_ingreso;});fext_SV(poC,"nota_egreso",_egr);fext_SV(poC,"nota_ingreso",_ing);
	}}});
	var _ce=Ext.create("Ext.grid.plugin.CellEditing",{clicksToEdit:1});_ce.init(_grd);
	fextbud_tareas_fftredParam({pan:poC,obj:poC.down("#fftr_id"),nuk:"NoT",TQ:"FF_TR",OB:"fftr_codename",AB:"NO"});
	_grd.bindStore(_str);_grd.getView().refresh();_str.sort("notatareafte_item","ASC");_str.pageSize=1000;
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(poC,"btnSuppress");fext_PSEP(str,["xxType_record"],["frm"]);});

	poC.setFFFTR(false);var _frm=poC.down("form");
	_frm.load({method:"POST",url:"php/budget_notas_json_records.php",waitMsg:"Loading...",params:{xxNota_key:poC.getCK(),ssNO_USK:poC.getNUK(),xxType_record:"frm",xxMenu_id:_mi,vs:fext_JE(_vs)},
		success:function(frm,act){
			try {var _md=fext_CM("bud.NotaE");var _res=fext_DJ(act);var _d=_res.data[0];
				if(_d){_md.set(_d);_frm.loadRecord(_md);fext_SV(poC,"year_id",_d.year_id*1);fext_SV(poC,"nota_nro",fjsLpad(_d.nota_nro,6,0));fext_SV(poC,"nota_fecha",_d.nota_fecha);fext_SV(poC,"tipnota_id",parseInt(_d.tipnota_id));fext_SV(poC,"nota_egreso",_d.nota_monto);fext_SV(poC,"nota_ingreso",_d.nota_monto);
					if(_mi==2105){fextbud_metasLoad({pan:poC,dsb:true,val:_d.meta_id});fextbud_tareasLoad({pan:poC,mei:_d.meta_id,dsb:true,val:_d.tarea_key});}
					else{fextbud_tareasAMLoad({pan:poC,dsb:true,mei:_d.meta_id});fextbud_tareasATLoad({pan:poC,mei:_d.meta_id,dsb:true,tk:_d.tarea_key});}
					fext_GS(poC,"fftr_id").load({params:{xxTarea_key:_d.tarea_key},callback:function(rec){fext_SV(poC,"fftr_id",_d.fftr_id);fext_Dsb(poC,"fftr_id");}});
					fext_GS(poC,"grdBNTF").load({params:{xxNota_key:_d.nota_key}});
				}
			}catch(x){fext_MsgE(x.Message);}
		},failure:function(frm,act){fext_MsgFL(act);}
	});
}
});