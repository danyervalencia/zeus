Ext.define("Siace.controller.pub.BSCB",{extend:"Ext.app.Controller",
pbscb_sc:function(mod,r,me){if(r.length==1){var _pan=mod.view.up("pub_bscb");var _p=_pan.down("#panC");fext_SDO(_p,"btnModify","",2);fext_SDO(_p,"btnQuery","",3);me.pbscb_tabsClean(_pan,false);
	Ext.Ajax.request({method:"POST",url:"php/public_bienes_servs_clases_json_records.php",params:{xxBsc_id:r[0].data.bsc_id,xxType_record:"win"},success:function(resp,opt){var _res=fext_DJ("",resp);var _md=fext_CM("pub.Bien_Serv_ClaseW");if(_res.success&&_res.data.length==1){_md.set(_res.data[0]);}fext_LR(_pan,_md,"tabF");fext_LR(_pan,_md,"tabM");fext_LR(_pan,_md,"tabCO");}});
}}
});