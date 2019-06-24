Ext.define("Siace.controller.log.ValrzB",{extend:"Ext.app.Controller",
lvb_sc:function(mod,r){if(r.length==1){var _pan=mod.view.up("log_valrzb");var _p=_pan.down("#pan");var _fg=r[0].data.valrz_flga==98?true:"";
	fext_SDO(_p,"btnQuery","",3,_fg);fext_SDO(_p,"btnAnnular","",10,_fg);fext_SDO(_p,"btnPrinter","",8,_fg);fext_CC("log.ValorizacionesB").lvb_tabsClean(_pan,false);
	console.log(_fg);
	Ext.Ajax.request({method:"POST",url:"php/logistics_valorizaciones_json_records.php",params:{xxValrz_key:r[0].data.valrz_key,xxType_record:"win",xxOrder_by:"valrz_key",ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},
		success:function(resp,opt){var _res=fext_DJ("",resp);var _md=fext_CM("log.ValorizacionW");if(_res.success&&_res.data.length==1){_md.set(_res.data[0]);fext_LR(_pan,_md,"tabLVD");}}
	});
}}
});