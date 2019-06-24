Ext.define("Siace.controller.bud.EgreB",{extend:"Ext.app.Controller",
beb_sc:function(mod,r){if(r.length==1){var _pan=mod.view.up("bud_egreb");var _p=_pan.down("#pan");var _fg=(r[0].data.egre_flga==98?true:"");_en=r[0].data.expe_nro;var _vs=fextpub_sessVar();var _t1=_pan.down("#tabBETF");var _t2=_pan.down("#tabTE");var _img=(_en*1>0?"btnReject.png":"siaf.png");
	fext_SDO(_p,"btnModify","",2,_fg);fext_SDO(_p,"btnQuery","",3,_fg);fext_SDO(_p,"btnAnnular","",10,_fg||_en*1>0?true:"");fext_SDO(_p,"btnPrinter","",8,_fg);_p.down("#btnSiaf").setIcon("resources/icons/"+_img);fext_SDO(_p,"btnSiaf","",5005,_fg);fext_SDO(_p,"btnFases","",5029,_fg||_en*1<=0?true:"");fext_SDO(_t2,"btnNew",_t2.down("#opc_id"),1,_fg==98?true:"");
	Ext.Ajax.request({method:"POST",url:"php/budget_egresos_json_records.php",params:{xxEgre_key:r[0].data.egre_key,xxType_record:"win",xxOrder_by:"egre_key",ssNO_USK:"NoT",vs:fext_JE(_vs)},
		success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success&&_res.data.length==1){var _md=fext_CM("bud.EgresoW");_md.set(_res.data[0]);fext_LR(_t1,_md);fext_SV(_t1,"egre_observ",_res.data[0].egre_observ);fext_LR(_t2,_md);}}
	});
}}
});