Ext.define("Siace.controller.rrhh.TrabjB",{extend:"Ext.app.Controller",
rtb_sc:function(mod,r){if(r.length==1){var _pan=mod.view.up("rrhh_trabjb");var _p=_pan.down("#pan");var _t1=_pan.down("#tabRT");
	fext_SDO(_p,"btnQuery","",3);fext_SDO(_p,"btnPrinter","",8);fext_SDO(_t1,"btnNew",_p.down("#opc_id"),1);_t1.down("#grdRT").enable();fext_Dsb(_t1,"",["btnModify","btnQuery"])
	Ext.Ajax.request({method:"POST",url:"php/public_individuos_json_records.php",params:{xxIndiv_key:r[0].data.indiv_key,xxType_record:"win"},
		success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success&&_res.data.length==1){var _md=fext_CM("pub.IndividuoW");_md.set(_res.data[0]);fext_LR(_t1,_md);}}
	});
}}
});