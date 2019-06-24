Ext.define("Siace.controller.pub.BSB",{extend:"Ext.app.Controller",
pbsb_sc:function(mod,r){if(r.length==1){var _pan=mod.view.up("pub_bsb");var _p=_pan.down("#pan");fext_SDO(_p,"btnModify","",2);fext_SDO(_p,"btnQuery","",3);fext_SDO(_p,"btnDelete","",7);fext_SDO(_p,"btnPrinter","",8);fext_CC("pub.Bienes_ServsB").pbsb_tabsClean(_pan,false);
	Ext.Ajax.request({method:"POST",url:"php/public_bienes_servs_json_records.php",params:{xxBs_key:r[0].data.bs_key,xxType_record:"win"},success:function(resp,opt){var _res=fext_DJ("",resp);var _md=fext_CM("pub.Bien_ServW");if(_res.success&&_res.data.length==1){_md.set(_res.data[0]);}fext_LR(_pan,_md,"tabPBSED");fext_LR(_pan,_md,"tabLP");fext_LR(_pan,_md,"tabLC");fext_LR(_pan,_md,"tabLO");}});
}}
});