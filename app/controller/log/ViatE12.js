Ext.define("Siace.controller.log.ViatE12",{extend:"Ext.app.Controller",
lve:function(poC){poC.setIconCls("icon_Modify_90");poC.setTitle("Rebaja Solicitud de Viático ::.");var _frm=poC.down("form");var _grdLVD=poC.down("#grdLVD");
	_grdLVD.columns[3].setWidth(275);_grdLVD.columns[3].hidden=true;_grdLVD.columns[4].hidden=false;_grdLVD.columns[5].hidden=false;fext_SVI(poC,"viat_rendido",true);poC.down("tabpanel").setActiveTab(1);
	var _strLVD=Ext.create("Siace.store.log.Viaticos_DetE",{listeners:{update:function(str,rec,oper,opt){if(rec.data.viatdet_rendido*1>rec.data.viatdet_pretot*1){Ext.Msg.alert(trnslt.msg,"Importe de Rendición no pueder ser mayor que importe de viático",function(){rec.set("viatdet_rendido",rec.data.viatdet_pretot);});return false;}var _rend=0;str.each(function(r){_rend+=r.data.viatdet_rendido;});fext_SV(poC,"viat_rendido",_rend);}}});var _ce=Ext.create("Ext.grid.plugin.CellEditing",{clicksToEdit:1});_ce.init(_grdLVD);
	_grdLVD.bindStore(_strLVD);_grdLVD.getView().refresh();_strLVD.sort("viatdet_item","ASC");_strLVD.on("beforeload",function(str,oper,opt){str.getProxy().setExtraParam("xxType_record","frm")});
	fextbud_tareas_fftredParam({pan:poC,obj:poC.down("#fftr_id"),TQ:"T_FF_TR",OB:"fftr_codename",AB:"NO"});

	poC.setFiltFFTR(false);poC.down("#cntPdpd").setChangeEnabled(false);
	_frm.load({method:"POST",url:"php/logistics_viaticos_json_records.php",waitMsg: "Loading...",params:{xxViat_key:poC.getCK(),ssNO_USK:poC.getNUK(),xxType_record:"frm",xxMenu_id:poC.getMI(),vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){try{var _md=fext_CM("log.ViaticoE");var _res=fext_DJ(act);if(_res.data[0]){_md.set(_res.data[0]);_frm.loadRecord(_md);var _d=_res.data[0];
			fext_SV(poC,"year_id",_d.year_id*1);fext_SV(poC,"viat_nro",_d.viat_nro);fext_SV(poC,"viat_fecha",_d.viat_fecha);fext_SV(poC,"viat_monto",_d.viat_monto);
			fextpub_areasFilt({obj:poC.down("#area_key"),ak:_d.area_key,nuk:"NoT",TR:"cbo",AB:"NO",dsb:true});
			fextbud_metasParam({pan:poC,mei:_d.meta_id,TR:"cboCN",AB:"NO"});fextbud_metasLoad({pan:poC,dsb:true,mei:_d.meta_id});fextbud_tareasParam({pan:poC,tk:_d.tarea_key,TR:"cboCN",OB:"tarea_codename",AB:"NO"});fextbud_tareasLoad({pan:poC,dsb:true,filtForce:true,tk:_d.tarea_key});
			fext_GS(poC,"fftr_id").load({params:{xxTarea_key:_d.tarea_key},callback:function(r,oper,succ){fext_SV(poC,"fftr_id",_d.fftr_id);fext_Dsb(poC,"fftr_id");}});
			fext_GS(poC,"grdLVD").load({params:{xxViat_key:_d.viat_key},callback:function(r,oper,succ){fext_SV(poC,"viatdet_item",r[r.length-1].data.viatdet_item);}});
			poC.down("#cntPdpd").fireEvent("loaddata",poC.down("#cntPdpd"),true,_d.pais_id,_d.dpto_id,_d.prvn_id,_d.dstt_id);
			fext_CC("log.ViatE").lve_TimeCalc(poC);
		}}catch(x){fext_MsgC(x.Message);}},
		failure:function(frm,act){fext_MsgFL(act);}
	});
	fext_Dsb(poC,"",["indiv_dni","btnTrabj_search","viat_fechaini","viat_horaini","viat_fechafin","viat_horafin","btnCalc","btnAdd"]);fext_SRO(poC,"viat_observ");
}
});