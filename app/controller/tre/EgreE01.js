Ext.define("Siace.controller.tre.EgreE01",{extend:"Ext.app.Controller",
tee:function(poC){poC.setIconCls("icon_New_90");poC.setTitle("Nuevo Registro de Documento::.");var _cboCB=poC.down("#cuebanc_key");
	fext_SV(poC,"egre_fecha",fjsDateCurrent(""));fext_SV(poC,"tipdocident_id",3);fext_SV(poC,"egre_otros","CCI");_cboCB.getStore().load({params:{xxType_record:"cboComprob",xxOrder_by:"cuebanc_nrobanco",xxAdd_blank:"YES"},callback:function(r){_cboCB.setValue(r[0].data.cuebanc_key);}});
}
});