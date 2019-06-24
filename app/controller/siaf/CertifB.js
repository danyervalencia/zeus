Ext.define("Siace.controller.siaf.CertifB",{extend:"Ext.app.Controller",
scb_sc:function(mod,r){if(r.length==1){var _pan=mod.view.up("siaf_certifb");var _p=_pan.down("#pan");fext_SDO(_p,"btnQuery","",3);fext_SDO(_p,"btnPrinter","",8);fext_CC("siaf.CertificadoB").scb_tabsClean(_pan,false);
	Ext.Ajax.request({method:"POST",url:"php/siaf_certificado_meta_json_records.php",params:{xxCertifmeta_id:r[0].data.certifmeta_id,ssNO_USK:"NoT",xxType_record:"win",vs:fext_JE(fextpub_sessVar())},
		success:function(resp,opt){var _res=fext_DJ("",resp);var _mod=fext_CM("siaf.CertifmetaW");if(_res.success&&_res.data.length==1){_mod.set(_res.data[0]);}fext_LR(_pan.down("#tabSCMC"),_mod);}
	});
}}
});