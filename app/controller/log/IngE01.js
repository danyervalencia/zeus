Ext.define("Siace.controller.log.IngE01",{extend:"Ext.app.Controller",
lie:function(poC){var _grd=poC.down("#grdLID");poC.setIconCls("icon_New_90");poC.setTitle("Nueva Recepción ::.");
	fextlog_almaFilt({obj:poC.down("#alma_key"),TR:"cboP",TQ:"ALMA1_"+fextpub_sessVar().ua});
	var _str=Ext.create("Siace.store.log.Ordenes_Det_Tareas_FftredLIE",{listeners:{update:function(str,rec,oper,opt){var _m=0;str.each(function(r){_m+=r.data.ingdet_pretot;});fext_SV(poC,"ing_monto",_m);}}});
	var _ce=Ext.create("Ext.grid.plugin.CellEditing",{itemId:"ceLRD",clicksToEdit:1,listeners:{edit:function(editor,e,opt){var _r=e.record;_r.set("ingdet_pretot",fjsRound(Number(_r.data.ingdet_cantid*1)*Number(_r.data.ingdet_preuni*1),2));}}});_ce.init(_grd);
	_grd.bindStore(_str);_grd.getView().refresh();_str.sort("ordendet_item","ASC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(poC,"btnSuppress");str.getProxy().setExtraParam("xxType_record","searchLIE");});
}
});