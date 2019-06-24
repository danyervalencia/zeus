Ext.define("Siace.controller.log.PlanB",{extend:"Ext.app.Controller",
lpb_sc:function(mod,r){if(r.length==1){var _pan=mod.view.up("log_planb");var _p=_pan.down("#pan");var _d=r[0].data;var _fg=_d.plan_flga==98?true:"";var _cn=_d.certif_nro*1;var _ok=_d.orden;var _img=(_cn*1>0&&_ok==""?"btnReject.png":"siaf.png");
	fext_SDO(_p,"btnQuery","",3,_fg);fext_SDO(_p,"btnAnnular","",10,_fg||_cn>0?true:"");fext_SDO(_p,"btnPrinter","",8,_fg);_p.down("#btnCertif").setIcon("resources/icons/"+_img);fext_SDO(_p,"btnCertif","",5028,_ok==""?"":true);fext_SDO(_p,"btnGO","",5025,_cn<=0||_ok!=""?true:"");fext_CC("log.PlanillasB").lpb_tabsClean(_pan,false,_d.orden_flga);
	Ext.Ajax.request({method:"POST",url:"php/logistics_planillas_json_records.php",params:{xxPlan_key:_d.plan_key,xxType_record:"win",ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},
		success:function(resp,opt){var _res=fext_DJ("",resp);var _md=fext_CM("log.PlanillaW");if(_res.success&&_res.data.length==1){_md.set(_res.data[0]);}fext_LR(_pan,_md,"tabLPP");}
	});
}}
});