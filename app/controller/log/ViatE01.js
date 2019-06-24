Ext.define("Siace.controller.log.ViatE01",{extend:"Ext.app.Controller",
lve:function(poC){poC.setIconCls("icon_New_90");poC.setTitle("Nueva Solicitud de Viático ::.");var _grd=poC.down("#grdLVD");var _op=poC.down("#orig_prvn");fext_SV(poC,"viat_fecha",fjsDateCurrent(""));fext_SV(poC,"pais_id",172);poC.down("#btnAdd").enable();poC.setF(true);poC.setC(true);
	_op.bindStore(fext_CS("log.Viaticos_OrigenesCbo"));_op.getStore().load({params:{xxType_record:"cboDP"},callback:function(r){if(r.length>0){}else{_op.disable();_op.setValue("");}}});
	fextpub_tabgenFilt({obj:poC.down("#transp_id"),tgp:1180,AB:"NO"});fextlog_motviatFilt({obj:poC.down("#motviat_id"),AB:"NOT",setVal:false});
	var _str=Ext.create("Siace.store.log.Viaticos_DetE",{listeners:{update:function(str,rec,oper,opt){var _m=0;str.each(function(r){_m+=r.data.viatdet_pretot;});fext_SV(poC,"viat_monto",_m);}}});var _ce=Ext.create("Ext.grid.plugin.CellEditing",{clicksToEdit:1});_ce.init(_grd);
	_grd.bindStore(_str);_grd.getView().refresh();_str.sort("viatdet_item","ASC");_str.on("beforeload",function(str,oper,opt){str.getProxy().setExtraParam("xxType_record","frm")});
	fextbud_tareasAMParam({pan:poC,di:507,dt:"U1",de:1,TR:"cboCN",AB:"NO"});fextbud_tareasATParam({pan:poC,di:507,dt:"U1",de:1,TR:"cboCN",AB:"NO"});
	fextpub_areasFilt({obj:poC.down("#area_key"),ak:fextpub_sessVar().a,nuk:"NoT",TR:"cbo",AB:"NO",dsb:true});fextbud_tareasAMLoad({pan:poC,setVal:true});
	Ext.Ajax.request({method:"POST",url:"php/logistics_viaticos_servs_json_records.php",params:{xxViatbs_orden:1,xxType_record:"grdLVE"},success:function(resp,opt){var _res=fext_DJ("",resp);var _d=_res.data[0];if(_d){var _str=fext_GS(poC,"grdLVD");_str.add({viatdet_item:1,bs_key:_d.bs_key,bs_codigo:_d.bs_codigo,bs_nombre:_d.bs_nombre,unimed_abrev:_d.unimed_abrev});}}});
}
});