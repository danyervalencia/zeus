Ext.define("Siace.controller.pub.BSFB",{extend:"Ext.app.Controller",
pbsfb_sc:function(mod,r){if(r.length==1){var _pan=mod.view.up("pub_bsfb");var _p=_pan.down("#pan");
	fext_SDO(_p,"btnModify","",2);fext_SDO(_p,"btnQuery","",3);fext_SDO(_p,"btnDelete","",7);fext_SDO(_p,"btnPrinter","",8);fext_CC("pub.Bienes_Servs_FamiliasB").pbsfb_tabsClean(_pan,false);
	Ext.Ajax.request({method:"POST",url:"php/public_bienes_servs_familias_json_records.php",params:{xxBsf_id:r[0].data.bsf_id,xxType_record:"win"},
		success:function(resp,opt){var _res=fext_DJ("",resp);var _md=fext_CM("pub.Bien_Serv_FamiliaW");if(_res.success&&_res.data.length==1){_md.set(_res.data[0]);}fext_LR(_pan.down("#tabBS"),_md);fext_LR(_pan.down("#tabLFR"),_md);fext_LR(_pan.down("#tabPM"),_md);}
	});
}}
});