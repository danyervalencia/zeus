Ext.define("Siace.controller.log.PlanBBGO",{extend:"Ext.app.Controller",
lpb:function(poP){var _comp=poP["comp"];var _grd=(poP["grd"]==undefined?"grdLP":poP["grd"]);if(fextpub_uamoBtn("",5025,_comp)){return false;}var _r=fext_grdSR(_comp,_grd);if(!_r){return false;}
	Ext.Msg.confirm("Confirmación","¿Esta Ud. seguro de Generar la Orden de Servicio de la planilla seleccionada?",function(b){if(b=="yes"){fext_mask(_comp);
		Ext.Ajax.request({url:"php/logistics_ordenes_save_plan.php",params:{xx0005:"YES",xxType_edit:1,xxPlan_key:_r.data.plan_key,xxMenu_id:poP["mi"],vs:fext_JE(fextpub_sessVar())},success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){fext_CC("log.OrdenesOK");var _wF=fext_CW("log.OrdenesOK");_wF.setCK(_res.key);_wF.setCS(fext_GS(_comp,_grd));_wF.setMI(poP["mi"]);_wF.down("#btnPrinter").enable();_wF.show();fext_unmask(_comp);}else{fext_unmask(_comp);fext_MsgE(_res.msg);}},failure:function(resp,opt){fext_unmask(_comp);fext_MsgE(resp.responseText);}});
	}});
}
});