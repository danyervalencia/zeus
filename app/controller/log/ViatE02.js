Ext.define("Siace.controller.log.ViatE02",{extend:"Ext.app.Controller",
lve:function(poC){poC.setIconCls("icon_Modify_90");poC.setTitle("Modificar Solicitud de Viático ::.");var _frm=poC.down("form");var _grd=poC.down("#grdLVD");var _op=poC.down("#orig_prvn");var _mi=poC.getMI();poC.down("#btnAdd").enable();
	var _str=Ext.create("Siace.store.log.Viaticos_DetE",{listeners:{update:function(str,rec,oper,opt){var _m=0;str.each(function(r){_m+=r.data.viatdet_pretot;});fext_SV(poC,"viat_monto",_m);}}});var _ce=Ext.create("Ext.grid.plugin.CellEditing",{clicksToEdit:1});_ce.init(_grd);
	_grd.bindStore(_str);_grd.getView().refresh();_str.sort("viatdet_item","ASC");_str.on("beforeload",function(str,oper,opt){fext_Dsb(poC,"btnSuppress");str.getProxy().setExtraParam("xxType_record","frm")});
	if(_mi==2128){}
	else{fextbud_tareasAMParam({pan:poC,di:507,dt:"U1",de:1,TR:"cboCN",OB:"meta_codename",AB:"NO"});fextbud_tareasATParam({pan:poC,di:507,dt:"U1",de:1,TR:"cboCN",OB:"tarea_codename",AB:"NO"});}
	_frm.load({method:"POST",url:"php/logistics_viaticos_json_records.php",waitMsg: "Loading...",params:{xxViat_key:poC.getCK(),ssNO_USK:poC.getNUK(),xxType_record:"frm",xxMenu_id:poC.getMI(),vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){try{var _md=fext_CM("log.ViaticoE");var _res=fext_DJ(act);var _d=_res.data[0];if(_d){_md.set(_d);_frm.loadRecord(_md);
			fext_SV(poC,"year_id",_d.year_id*1);fext_SV(poC,"viat_monto",_d.viat_monto);
			poC.down("#cntPdpd").fireEvent("loaddata",poC.down("#cntPdpd"),false,_d.pais_id,_d.dpto_id,_d.prvn_id,_d.dstt_id);
			fextpub_areasFilt({obj:poC.down("#area_key"),ak:_d.area_key,nuk:"NoT",TR:"cbo",AB:"NO",dsb:true});
			fextbud_tareasAMLoad({pan:poC,mei:_d.meta_id});fextbud_tareasATLoad({pan:poC,mei:_d.meta_id,tk:_d.tarea_key});
			fext_GS(poC,"fftr_id").load({params:{xxTarea_key:_d.tarea_key},callback:function(r,oper,succ){fext_SV(poC,"fftr_id",_d.fftr_id);}});
			fext_GS(poC,"grdLVD").load({params:{xxViat_key:poC.getCK()},callback:function(r,oper,succ){fext_SV(poC,"viatdet_item",r[r.length-1].data.viatdet_item);}});			
			_op.bindStore(fext_CS("log.Viaticos_OrigenesCbo"));_op.getStore().load({params:{xxType_record:"cboDP"},callback:function(r){if(r.length>0){_op.setValue(_d.orig_prvn*1)}}});
			fextpub_tabgenFilt({obj:poC.down("#transp_id"),tgp:1180,val:_d.transp_id,AB:"NO"});fextlog_motviatFilt({obj:poC.down("#motviat_id"),val:_d.motviat_id,AB:"NO"});
			fext_CC("log.ViatETC").lve(poC);poC.setC(true);
		}}catch(x){fext_MsgC(x.Message);}},
		failure:function(frm,act){fext_MsgFL(act);}
	});
}
});