Ext.define("Siace.controller.pub.PersB",{extend:"Ext.app.Controller",
ppb_sc:function(mod,r){if(r.length==1){var _pan=mod.view.up("pub_persb");var _p=_pan.down("#pan");fext_SDO(_p,"btnModify","",2);fext_SDO(_p,"btnQuery","",3);fext_SDO(_p,"btnDelete","",7);
	if(_pan.getMI()==5105){var _ci=r[0].data.clav_id*1;fext_SDO(_p,"btnClave","",5008,_ci<=0&&r[0].data.tipdocident_abrev=="RUC"?"":true);fext_SDO(_p,"btnConstancy","",62,_ci<=0?true:"");}fext_CC("pub.PersonasB").ppb_tabsClean(_pan,false);
	Ext.Ajax.request({method:"POST",url:"php/public_personas_json_records.php",params:{xxPers_key:r[0].data.pers_key,xxType_record:"win"},success:function(resp,opt){var _res=fext_DJ("",resp);var _md=fext_CM("pub.PersW");if(_res.success&&_res.data.length==1){_md.set(_res.data[0]);}fext_LR(_pan,_md,"tabPPA");fext_LR(_pan,_md,"tabPPD");fext_LR(_pan,_md,"tabPPF");fext_LR(_pan,_md,"tabLC");fext_LR(_pan,_md,"tabLO");fext_LR(_pan,_md,"tabPPR");}});
}}
});