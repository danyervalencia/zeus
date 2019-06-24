Ext.define("Siace.controller.log.ValAtend10",{extend:"Ext.app.Controller",
lvaa:function(btn,opt){var _pan=btn.up("log_valb");var _p=_pan.down("#pan");var _mi=_pan.getMI();if(fextpub_uamoBtn(_p.down("#opc_id"),5053)){return false;}var _t=_pan.down("#tabLVD");
	Ext.Msg.confirm("Confirmación","¿Esta Ud. seguro de Anular la atención del Vale de Combustible seleccionado?",function(b){if(b=="yes"){fext_mask(_pan);
		Ext.Ajax.request({url:"php/logistics_vales_atendidos_delete.php",params:{xx0010:"YES",xxType_edit:10,xxValatend_key:fext_GV(_pan,"valatend_key"),xxMenu_id:_mi,vs:fext_JE(fextpub_sessVar())},
			success:function(resp,opt){var _res=fext_DJ("",resp);
			if(_res.success){_pan.down("#frmLVA").getForm().reset();var _r=fext_grdSR(_pan,"grdLV");_r.set("valatend_id","");_r.set("rcol","mx-green");_r.commit();_t.down("#btnNew").enable();fext_Dsb(_t,"",["btnModify","btnAnnular"]);fext_unmask(_pan);}else{fext_unmask(_pan);fext_MsgE(_res.msg);}},failure:function(resp,opt){fext_unmask(_pan);fext_MsgE("",resp);}
		});
	}});
}
});