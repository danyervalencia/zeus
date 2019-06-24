Ext.define("Siace.controller.bud.TareaB",{extend:"Ext.app.Controller",
btb_btn:function(btn){var _p=btn.up("#pan");var _TE=fext_btnTE(btn);fext_CC("bud.Tareas").bt_View({comp:_p,TE:_TE,mi:_p.up("bud_tareab").getMI()});},
btb_sc:function(mod,r){if(r.length==1){var _pan=mod.view.up("bud_tareab");var _p=_pan.down("#pan");fext_SDO(_p,"btnModify","",2);fext_SDO(_p,"btnQuery","",3);fext_SDO(_p,"btnPrinter","",8);fext_CC("bud.TareasB").btb_tabsClean(_pan,false);
	Ext.Ajax.request({method:"POST",url:"php/budget_tareas_json_records.php",params:{xxTarea_key:r[0].data.tarea_key,xxType_record:"win"},success:function(resp,opt){var _res=fext_DJ("",resp);var _md=fext_CM("bud.TareaW");if(_res.success&&_res.data.length==1){_md.set(_res.data[0]);}fext_LR(_pan,_md,"tabBTF");fext_LR(_pan,_md,"tabBTA");fext_LR(_pan,_md,"tabBTUA");fext_LR(_pan,_md,"tabLP");fext_LR(_pan,_md,"tabLO");}});
}}
});