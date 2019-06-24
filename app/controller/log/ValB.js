Ext.define("Siace.controller.log.ValB",{extend:"Ext.app.Controller",
lvb_sc:function(mod,r){if(r.length==1){var _pan=mod.view.up("log_valb");var _p=_pan.down("#pan");var _t1=_pan.down("#tabLVD");var _cbo=_p.down("#opc_id");var _fg=r[0].data.val_flga==98?true:"";var _vai=r[0].data.valatend_id;
	fext_SDO(_p,"btnQuery","",3,_fg);fext_SDO(_p,"btnAnnular","",10,_fg||_vai*1>0?true:"");fext_SDO(_p,"btnPrinter","",8,_fg);fext_SDO(_t1,"btnNew",_cbo,5051,_vai*1>0?true:"");fext_SDO(_t1,"btnModify",_cbo,5052,_vai*1>0?"":true);fext_SDO(_t1,"btnAnnular",_cbo,5053,_vai*1>0?"":true);fext_CC("log.ValesB").lvb_tabsClean(_pan,false);
	Ext.Ajax.request({method:"POST",url:"php/logistics_vales_json_records.php",params:{xxVal_key:r[0].data.val_key,xxType_record:"win",xxOrder_by:"val_key",ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},
		success:function(resp,opt){var _res=fext_DJ("",resp);var _md=fext_CM("log.ValeW");var _mda=fext_CM("log.Vale_AtendidoW");
			if(_res.success&&_res.data.length==1){_md.set(_res.data[0]);_mda.set(_res.data[0]);}fext_LR(_pan.down("#tabLVD"),_md);_pan.down("#frmLVA").loadRecord(_mda);
		}
	});
}}
});