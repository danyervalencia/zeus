Ext.define("Siace.controller.log.DonaB",{extend:"Ext.app.Controller",
ldb_sc:function(mod,r){if(r.length==1){var _pan=mod.view.up("log_donab");var _p=_pan.down("#panLD");fext_SDO(_p,"btnModify","",2);fext_SDO(_p,"btnQuery","",3);fext_SDO(_p,"btnDelete","",7);fext_CC("log.DonacionesB").ldb_tabsClean(_pan,false);
	Ext.Ajax.request({method:"POST",url:"php/logistics_donaciones_json_records.php",params:{xxDona_key:r[0].data.dona_key,xxType_record:"win",vs:fext_JE(fextpub_sessVar())},success:function(resp,opt){var _res=fext_DJ("",resp);var _md=fext_CM("log.DonacionW");if(_res.success&&_res.data.length==1){_md.set(_res.data[0]);}fext_LR(_pan,_md,"tabLDD");}});
}}
});