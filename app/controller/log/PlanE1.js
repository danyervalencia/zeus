Ext.define("Siace.controller.log.PlanE1",{extend:"Ext.app.Controller",
lpe:function(poC){var _mi=poC.getMI();var _grd=poC.down("#grdBNTF");fext_SV(poC,"plan_fecha",fjsDateCurrent(""));var _cbo=poC.down("#tiporden_id");poC.setIconCls("icon_New_90");poC.setTitle("Nueva Planilla de Servicios ::.");
	fext_BS(poC,"tiporden_id","log.Tipos_OrdenesCbo");fext_GS(poC,"tiporden_id").load({params:{xxTablex:5090,xxType_record:"cbo",xxOrder_by:"tiporden_orden"},callback:function(r){if(r.length>1){_cbo.setValue(r[0].data.tiporden_id);}else{_cbo.disable();_cbo.setValue("");}}});
	fext_BS(poC,"grdLPP","log.Planillas_ProcedenciasE");
	fextbud_tareas_fftredLoad({pan:poC,obj:poC.down("#fuefin_id"),type:"fuefin",fftr_all:1});
}
});