Ext.define("Siace.controller.log.IngB",{extend:"Ext.app.Controller",
lib_sc:function(mod,r){if(r.length==1){var _pan=mod.view.up("log_ingb");var _p=_pan.down("#pan");var _md=(_pan.getMI()==5122&&r[0].data.alma_abrev!=""?true:false);fext_SDO(_p,"btnModify","",2,_md);fext_SDO(_p,"btnQuery","",3);fext_SDO(_p,"btnDelete","",7,_md);fext_CC("log.IngresosB").lib_tabsClean(_pan,false);
	Ext.Ajax.request({method:"POST",url:"php/logistics_ingresos_json_records.php",params:{xxIng_key:r[0].data.ing_key,xxType_record:"win",xxOrder_by:"ing_key",ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},success:function(resp,opt){var _res=fext_DJ("",resp);var _md=fext_CM("log.IngresoW");if(_res.success&&_res.data.length==1){_md.set(_res.data[0]);}fext_LR(_pan.down("#tabLID"),_md);}});
}}
});