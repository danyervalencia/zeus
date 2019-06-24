Ext.define("Siace.controller.log.ValAtendES",{extend:"Ext.app.Controller",
lvae:function(btn){var _w=btn.up("window");var _frm=_w.down("#panLVA").down("form");
	if(fext_IE(_w,"valatend_fecha")||!_w.down("#valatend_fecha").isValid()){fext_MsgA("Debe indicar la Fecha de Atención",_w.down("#valatend_fecha"));return false;}
	if(!_frm.getForm().isValid()){return false;}
	_frm.getForm().submit({method:"POST",url: "php/logistics_vales_atendidos_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxValatend_key:_w.getCK(),xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){var _res=fext_DJ(act);var _wc=_w.getCC();
			if(_res.success){Ext.Ajax.request({method:"POST",url:"php/logistics_vales_atendidos_json_records.php",params:{xxValatend_key:_res.key,xxType_record:"win",xxOrder_by:"valatend_key",vs:fext_JE(fextpub_sessVar())},success:function(resp,opt){var _res=fext_DJ("",resp);var _md=fext_CM("log.Vale_AtendidoW");if(_res.success&&_res.data.length==1){_md.set(_res.data[0]);}_wc.down("#frmLVA").loadRecord(_md);var _r=fext_grdSR(_wc,"grdLV");_r.set("valatend_id",_res.data[0].valatend_id);_r.set("rcol","");_r.commit();fext_Dsb(_wc.down("#tabLVD"),"btnNew");fext_SD(_wc.down("#tabLVD"),"",false,["btnModify","btnAnnular"]);}});_w.close();}
			else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
	});
}
});