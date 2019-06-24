Ext.define("Siace.controller.log.SalBN",{extend:"Ext.app.Controller",
lsb_sc:function(mod,r){if(r.length==1){var _pan=mod.view.up("log_salbn");var _p=_pan.down("#pan");var _fg=r[0].data.sal_flga==98?true:"";var _del=(_pan.getMI()==5135&&!Ext.isEmpty(r[0].data.sal_fechasal)?false:true);
	fext_SDO(_p,"btnModify","",2,_fg);fext_SDO(_p,"btnQuery","",3,_fg);fext_SDO(_p,"btnAnnular","",10,_fg);fext_SDO(_p,"btnPrinter","",8,_fg);fext_CC("log.SalidasB").lsb_tabsClean(_pan,false);
	Ext.Ajax.request({method:"POST",url:"php/logistics_salidas_json_records.php",params:{xxSal_key:r[0].data.sal_key,xxType_record:"win",xxOrder_by:"sal_key",ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},
		success:function(resp,opt){var _res=fext_DJ("",resp);var _mod=fext_CM("log.SalidaW");if(_res.success&&_res.data.length==1){_mod.set(_res.data[0]);}fext_LR(_pan,_mod,"tabLSD");}
	});
}}
});