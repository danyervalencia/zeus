Ext.define("Siace.controller.log.CompB14",{extend:"Ext.app.Controller",
lcb_sc:function(mod,r){if(r.length==1){var _pan=mod.view.up("log_compb14");var _p=_pan.down("#pan");var _d=r[0].data;
	fext_SDO(_p,"btnModify","",2,_d.plan==1?true:"");fext_SDO(_p,"btnQuery","",3);fext_SDO(_p,"btnDelete","",7,_d.plan==1?true:"");fext_CC("log.ComprasB14").lcb_tabsClean(_pan,false);
	Ext.Ajax.request({method:"POST",url:"php/logistics_compras_json_records.php",params:{xxComp_key:_d.comp_key,xxType_record:"win14",ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},success:function(resp,opt){var _res=fext_DJ("",resp);var _md=fext_CM("log.CompraW14");if(_res.success&&_res.data.length==1){_md.set(_res.data[0]);}fext_LR(_pan,_md,"tab1");}});
}}
});