Ext.define("Siace.controller.bud.NotaE01",{extend:"Ext.app.Controller",
bne:function(poC){var _mi=poC.getMI();var _grd=poC.down("#grdBNTF");fext_SV(poC,"nota_fecha",fjsDateCurrent(""));poC.setIconCls("icon_New_90");poC.setTitle("Nueva Nota Presupuestal ::.");
	if(_mi==2105){fextbud_metasParam({pan:poC,TR:"cboCN",OB:"meta_codename"});fextbud_tareasParam({pan:poC,TR:"cboCN",OB:"tarea_codename"});fextbud_metasLoad({pan:poC});}
	else{fextpub_areasFilt({obj:poC.down("#area_key"),filt:true,ak:fextpub_sessVar().a,TR:"cbo",dsb:true,AB:"NO"});fextbud_tareasAMParam({pan:poC,di:201,dt:"U1",de:1,TR:"cboCN",OB:"meta_codename",AB:"NO"});fextbud_tareasATParam({pan:poC,di:201,dt:"U1",de:1,TR:"cboCN",OB:"tarea_codename",AB:"NO"});fextbud_tareasAMLoad({pan:poC});}
	var _str=Ext.create("Siace.store.bud.Notas_Tareas_FftredE",{listeners:{update:function(str,r,oper,opt){var _d=r.data;
		if(_d.tipnotadet_id==2041&&_d.notatareafte_ingreso*1>0){Ext.Msg.alert(trnslt.msg,"Importe de Crédito no pueder ser mayor que cero",function(){r.set("notatareafte_ingreso",0.00);});return false;}
		if(_d.tipnotadet_id==2042&&_d.notatareafte_egreso*1>0){Ext.Msg.alert(trnslt.msg,"Importe de Anulación no pueder ser mayor que cero",function(){r.set("notatareafte_egreso",0.00);});return false;}
		var _egr=0;var _ing=0;str.each(function(r){_egr+=r.data.notatareafte_egreso;_ing+=r.data.notatareafte_ingreso;});fext_SV(poC,"nota_egreso",_egr);fext_SV(poC,"nota_ingreso",_ing);
	}}});
	var _ce=Ext.create("Ext.grid.plugin.CellEditing",{clicksToEdit:1});_ce.init(_grd);
	fextbud_tareas_fftredParam({pan:poC,obj:poC.down("#fftr_id"),nuk:"NoT",TQ:"FF_TR",OB:"fftr_codename",AB:"NO"});
	_grd.bindStore(_str);_grd.getView().refresh();_str.sort("notatareafte_item","ASC");_str.pageSize=1000;
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(poC,"btnSuppress");fext_PSEP(str,["xxType_record"],["frm"]);});
}
});