Ext.define("Siace.controller.bud.EspeDetB",{extend:"Ext.app.Controller",
bedb_sc:function(mod,r){if(r.length==1){var _pan=mod.view.up("bud_espedetb");var _p=_pan.down("#pan");fext_SDO(_p,"btnModify","",2);fext_SDO(_p,"btnQuery","",3);fext_CC("bud.Especificas_DetB").bedb_tabsClean(_pan,false);
	Ext.Ajax.request({method:"POST",url:"php/budget_especificas_det_json_records.php",params:{xxEspedet_id:r[0].data.espedet_id,xxType_record:"win"},success:function(resp,opt){var _res=fext_DJ("",resp);var _md=fext_CM("bud.Especifica_DetW");if(_res.success&&_res.data.length==1){_md.set(_res.data[0]);}fext_LR(_pan.down("#tabBTF"),_md);fext_LR(_pan,_md,"tabBEDSC");fext_LR(_pan,_md,"tabPBSED");fext_LR(_pan,_md,"tabLP");fext_LR(_pan,_md,"tabLO");}});
}}
});