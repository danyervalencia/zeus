Ext.define("Siace.controller.log.PedEMU",{extend:"Ext.app.Controller",
lpe:function(poC,pnP){var _t=poC.down("#tabLP");var _m=fext_GV(_t,"ped_monto");fext_SV(_t,"ped_monto",fext_GV(_t,"ped_monto")*1 + pnP*1);
	var _dsb=(fext_GS(_t,"grdLPD").getCount()*1>0?true:false);
	fext_SD(_t,"tipped_id",poC.getTE()==1?_dsb:true);fext_SD(_t,"meta_id",_dsb);fext_SD(_t,"tarea_key",_dsb);fext_SD(_t,"fftr_id",_dsb);
}
});