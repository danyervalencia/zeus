Ext.define("Siace.controller.log.OrdenB",{extend:"Ext.app.Controller",
lob_sc:function(mod,r){if(r.length==1){var _pan=mod.view.up("log_ordenb");var _p=_pan.down("#pan");var _d=r[0].data;var _fg=_d.orden_flga==98?true:"";var _en=_d.expe_nro;var _fn=_d.orden_fechanotif;var _img=(Ext.isEmpty(_fn)?"btnDate_add.png":"btnDate_del.png");
	fext_SDO(_p,"btnGlosa","",63,_fg);fext_SDO(_p,"btnAnnular","",10,_fg||_en*1>0?true:"");fext_SDO(_p,"btnSiaf","",5005,_fg);_p.down("#btnNotif").setIcon("resources/icons/"+_img);fext_SDO(_p,"btnPrinter","",8,_fg);fext_SDO(_p,"btnNotif","",Ext.isEmpty(_fn)?64:65,_fg?true:"");fext_SDO(_p,"btnFases","",5029,_fg||_en*1<=0?true:"");fext_CC("log.OrdenesB").lob_tabsClean(_pan,false,_d.orden_flga);
	Ext.Ajax.request({method:"POST",url:"php/logistics_ordenes_json_records.php",params:{xxOrden_key:_d.orden_key,xxType_record:"win",xxOrder_by:"orden_key",ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},
		success:function(resp,opt){var _res=fext_DJ("",resp);var _md=fext_CM("log.OrdenW");if(_res.success&&_res.data.length==1){_md.set(_res.data[0]);}fext_LR(_pan,_md,"tabLOD");fext_LR(_pan,_md,"tabLOP");fext_LR(_pan,_md,"tabLI");}
	});
}}
});