Ext.define("Siace.controller.log.ValE01",{extend:"Ext.app.Controller",
lve:function(poC){var _mi=poC.getMI();fext_SV(poC,"val_fecha",fjsDateCurrent(""));poC.setIconCls("icon_New_90");poC.setTitle("Nuevo Vale de Combustible ::.");
	var _grd=poC.down("grid");var _cboTK=poC.down("#tablex_key");var _txtVM=poC.down("#val_monto");
	_cboTK.bindStore(fext_CS("log.ValesSTx"));_cboTK.getStore().on("beforeload",function(str,oper,opt){fext_PSEP(str,["xxArea_key","xxType_record","xxType_query","xxMenu_id","ssNO_USK","xxAdd_blank","vs"],["","searchLVE","searchLVE",_mi,"NoT","YES",fext_JE(fextpub_sessVar())],poC,["area_key","","","","","",""]);});
	var _str=Ext.create("Siace.store.log.Vales_DetSTx",{listeners:{update:function(str,rec,oper,opt){var _m=0;str.each(function(rec){_m+=rec.data.valdet_pretot;});_txtVM.setValue(_m);}}});
	var _ce=Ext.create("Ext.grid.plugin.CellEditing",{clicksToEdit:1,listeners:{edit:function(editor,e,opt){var _r=e.record;_r.set("valdet_pretot",fjsRound(_r.data.valdet_cantid*_r.data.valdet_preuni,2));}}});_ce.init(_grd);
	_grd.bindStore(_str);_grd.getView().refresh();_str.sort("tablex_item","ASC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(poC,"btnSuppress");str.getProxy().setExtraParam("xxType_record","searchLVE");});	
}
});