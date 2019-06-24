Ext.define("Siace.controller.log.PlanE5028",{extend:"Ext.app.Controller",
lpe:function(poC){var _mi=poC.getMI();var _grd=poC.down("#grdLPP");var _frm=poC.down("form");poC.setIconCls("icon_Modify_90");poC.setTitle("Certificar Planilla de Servicios ::.");
	var _str=fext_CS("log.Pedidos_ProcedenciasE");_grd.bindStore(_str);_grd.getView().refresh();_str.sort("item","ASC");
	_frm.load({method:"POST",url:"php/logistics_planillas_json_records.php",waitMsg:"Loading...",params:{xxPlan_key:poC.getCK(),xxType_record:"frm",xxMenu_id:_mi,vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){
			try{var _md=fext_CM("log.PlanillaE");var _res=fext_DJ(act);var _d=_res.data[0];if(_d){_md.set(_d);_frm.loadRecord(_md);
				fext_BS(poC,"tiporden_id","log.Tipos_OrdenesCbo");fext_GS(poC,"tiporden_id").load({params:{xxTablex:5090,xxType_record:"cbo",xxOrder_by:"tiporden_orden"},callback:function(r){if(r.length>1){fext_SV(poC,"tiporden_id",_d.tiporden_id*1);}}});
				fextbud_tareas_fftredLoad({pan:poC,obj:poC.down("#fuefin_id"),type:"fuefin",dsb:true,val:_d.fuefin_id*1,fftr_all:1});
				_str.load({params:{xxPlan_key:_d.plan_key,xxType_record:"grdLPE"}});
			}}catch(x){fext_MsgC(x.Message);}
		},failure:function(frm,act){fext_msgFL(act);}
	});
	fext_Dsb(poC,"",["tiporden_id","pers_ruc","btnPPS","btnSave"])
}
});