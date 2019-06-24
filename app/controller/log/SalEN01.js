Ext.define("Siace.controller.log.SalEN01",{extend:"Ext.app.Controller",
lse:function(poC){var _mi=poC.getMI();var _grd=poC.down("#grdLSD");var _vs=fextpub_sessVar();poC.setIconCls("icon_New_90");poC.setTitle("Nueva Salida de Almacen - NEA ::.");
	fext_SV(poC,"sal_fecha",fjsDateCurrent());poC.down("#sal_fechasal").enable();
	fextpub_areasFilt({obj:poC.down("#area_key"),TR:"cbo",filt:false,nuk:"NoT"});
	poC.down("#destsal_id").bindStore(fext_CS("log.Destinos_SalidasCbo"));fext_GS(poC,"destsal_id").load({params:{xxType_record:"cbo",xxAdd_blank:"YES"}});
	fextlog_almaFilt({obj:poC.down("#alma_key"),TR:"cboP",TQ:"ALMA2_"+fextpub_sessVar().ua,AB:""});
	var _str=Ext.create("Siace.store.log.Salidas_DetEN",{listeners:{update:function(str,rec,oper,opt){var _m=0;str.each(function(r){_m+=r.data.pretot;});fext_SV(poC,"sal_monto",_m);}}});
	var _ce=Ext.create("Ext.grid.plugin.CellEditing",{clicksToEdit:1,listeners:{edit:function(editor,e,opt){var _r=e.record;_r.set("pretot",fjsRound(_r.data.cantid*_r.data.preuni,2));}}});_ce.init(_grd);
	_grd.bindStore(_str);_grd.getView().refresh();_str.sort("saldet_item","ASC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(poC,"btnSuppress");fext_PSEP(str,["xxType_record"],["grdLSE"]);});
}
});