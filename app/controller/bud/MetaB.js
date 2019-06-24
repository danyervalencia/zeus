Ext.define("Siace.controller.bud.MetaB",{extend:"Ext.app.Controller",
bmb_btn:function(btn){var _p=btn.up("#pan");var _TE=fext_btnTE(btn);fext_CC("bud.Metas").bm_View({comp:_p,TE:_TE,mi:_p.up("bud_metab").getMI()});},
bmb_sc:function(mod,r){if(r.length==1){var _pan=mod.view.up("bud_metab");var _p=_pan.down("#pan");fext_SDO(_p,"btnModify","",2);fext_SDO(_p,"btnQuery","",3);fext_CC("bud.MetasB").bmb_tabsClean(_pan,false);
	Ext.Ajax.request({method:"POST",url:"php/budget_metas_json_records.php",params:{xxMeta_id:r[0].data.meta_id,xxType_record:"win"},success:function(resp,opt){var _res=fext_DJ("",resp);var _md=fext_CM("bud.MetaW");if(_res.success&&_res.data.length==1){_md.set(_res.data[0]);}fext_LR(_pan,_md,"tabSG");fext_LR(_pan,_md,"tabBTF");fext_LR(_pan,_md,"tabBTA");fext_LR(_pan,_md,"tabBTUA");fext_LR(_pan,_md,"tabLP");fext_LR(_pan,_md,"tabLO");}});
}}
});