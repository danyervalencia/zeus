Ext.define("Siace.controller.bud.ProyB",{extend:"Ext.app.Controller",
bpb_btn:function(btn){var _p=btn.up("#pan");var _TE=fext_btnTE(btn);fext_CC("bud.Proyectos").bm_View({comp:_p,TE:_TE,mi:_p.up("bud_proyb").getMI()});},
bpb_sc:function(mod,r){if(r.length==1){var _pan=mod.view.up("bud_proyb");var _p=_pan.down("#pan");fext_SDO(_p,"btnModify","",2);fext_SDO(_p,"btnQuery","",3);fext_CC("bud.ProyectosB").bpb_tabsClean(_pan,false);
	Ext.Ajax.request({method:"POST",url:"php/budget_proyectos_json_records.php",params:{xxProy_key:r[0].data.proy_key,xxType_record:"win"},success:function(resp,opt){var _res=fext_DJ("",resp);var _md=fext_CM("bud.ProyectoW");if(_res.success&&_res.data.length==1){_md.set(_res.data[0]);}fext_LR(_pan,_md,"tabBM");fext_LR(_pan,_md,"tabD");}});
}}
});