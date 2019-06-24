Ext.define("Siace.controller.log.ViatB",{extend:"Ext.app.Controller",
lvb_sc:function(mod,r){if(r.length==1){var _pan=mod.view.up("log_viatb");var _p=_pan.down("#pan");var _fg=r[0].data.viat_flga==98?true:"";var _fo=r[0].data.fase_orden*1;var _en=r[0].data.expe_nro*1;var _img=(_en*1>0?"btnReject.png":"siaf.png");
	fext_SDO(_p,"btnModify","",2,_fg||_fo>0||_en>0?true:"");fext_SDO(_p,"btnQuery","",3,_fg);fext_SDO(_p,"btnActivate","",48,_fg||_fo>0||_en>0?true:"");fext_SDO(_p,"btnAnnular","",10,_fg||_fo>0||_en>0?true:"");fext_SDO(_p,"btnPrinter","",8,_fg);
	_p.down("#btnSiaf").setIcon("resources/icons/"+_img);fext_SDO(_p,"btnSiaf","",5005,_fg);fext_SDO(_p,"btnRebaja","",66,_fg||_en*1<=0?true:"");fext_SDO(_p,"btnFases","",5029,_fg||_en*1<=0?true:"");fext_CC("log.ViaticosB").lvb_tabsClean(_pan,false);
	Ext.Ajax.request({method:"POST",url:"php/logistics_viaticos_json_records.php",params:{xxViat_key:r[0].data.viat_key,xxType_record:"win",ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},success:function(resp,opt){var _res=fext_DJ("",resp);var _md=fext_CM("log.ViaticoW");if(_res.success&&_res.data.length==1){_md.set(_res.data[0]);}fext_LR(_pan.down("#tabLVD"),_md);}});
}},
});