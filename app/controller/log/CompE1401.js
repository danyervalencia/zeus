Ext.define("Siace.controller.log.CompE1401",{extend:"Ext.app.Controller",
lce:function(poC){poC.setIconCls("icon_New_90");poC.setTitle("Nuevo Documento de Servicio Público ::.");var _mi=poC.getMI();var _cbo=poC.down("#tiporden_id");var _grd=poC.down("#grdLCDTF");
	_cbo.getStore().load({params:{xxTablex:5090,xxType_record:"cboLCE14",xxOrder_by:"tiporden_id"},callback:function(r){if(r.length>0){_cbo.setValue(r[0].data.tiporden_id);}}});

	var _str=Ext.create("Siace.store.log.Compras_Det_Tareas_FftredE14",{listeners:{update:function(str,rec,oper){var _m=0;str.each(function(r){_m+=r.data.pretot;});fext_SV(poC,"comp_monto",_m);}}});
	var _ce=Ext.create("Ext.grid.plugin.CellEditing",{clicksToEdit:1,listeners:{edit:function(editor,e,opt){}}});_ce.init(_grd);
	//if(_TE==1){fextbud_metasLoad({pan:comp});fext_SV(comp,"tipdocident_id",3);}comp.down("#btnAdd").enable();
	_grd.bindStore(_str);_grd.getView().refresh();_str.sort("egretareafte_item","ASC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(poC,"btnSuppress");str.getProxy().setExtraParam("xxType_record","frm");});

}
});