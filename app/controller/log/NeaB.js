Ext.define("Siace.controller.log.NeaB",{extend:"Ext.app.Controller",
lnb_sc:function(mod,r){if(r.length==1){var _pan=mod.view.up("log_neab");var _p=_pan.down("#pan");var _d=r[0].data;var _fg=_d.nea_flga==98?true:"";
	fext_SDO(_p,"btnModify","",2,_fg);fext_SDO(_p,"btnQuery","",2,_fg);fext_SDO(_p,"btnAnnular","",10,_fg);fext_SDO(_p,"btnPrinter","",8,_fg);fext_CC("log.NeasB").lnb_tabsClean(_pan,false);
	Ext.Ajax.request({method:"POST",url:"php/logistics_neas_json_records.php",params:{xxNea_key:_d.nea_key,xxType_record:"win",ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},success:function(resp,opt){var _res=fext_DJ("",resp);var _md=fext_CM("log.NeaW");if(_res.success&&_res.data.length==1){_md.set(_res.data[0]);}fext_LR(_pan,_md,"tabLND");},});
}}
});