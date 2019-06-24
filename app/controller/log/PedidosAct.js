Ext.define("Siace.controller.log.PedidosAct",{extend:"Ext.app.Controller",views:["log.PedidosAct"],
init:function(application){this.control({"log_pedact":{beforeshow:this.lpa_BS},"log_pedact #btnAccept":{click:this.lpa_btnAcc},"log_pedact #btnCancel":{click:this.lpa_btnCan}});},
lpa_BS:function(comp,opt){var _cboF=comp.down("#fase_key");_cboF.bindStore(fext_CS("log.FasesActivate"));
	Ext.Ajax.request({method:"POST",url:"php/logistics_pedidos_json_records.php",params:{xxPed_key:comp.getCK(),xxType_record:"win",xxOrder_by:"ped_key",vs:fext_JE(fextpub_sessVar())},success:function(resp,opt){var _res=fext_DJ("",resp);var _md=fext_CM("log.PedidoW");if(_res.success&&_res.data.length==1){var _d=_res.data[0];_md.set(_d);comp.down("#frmLP").loadRecord(_md);}}});
	_cboF.getStore().load({params:{xxDoc_id:501},callback:function(rec){if(rec.length>0){_cboF.setValue(rec[0].data.fase_key);}else{_cboF.disable();_cboF.setValue("");}}});
	comp.down("#btnAccept").setIconCls("icon_Activate");comp.down("#btnAccept").setText("Activar");
},
lpa_btnAcc:function(btn,e,opt){var _w=btn.up("window");
	if(fext_IE(_w,"fase_key")){fext_MsgA("Debe indicar la Fase a la cual se va a activar el requerimiento",_w.down("#fase_key"));return false;}
	_w.getCB().fireEvent("click",_w.getCB(),"",{key:_w.getCK(),fase_key:fext_GV(_w,"fase_key"),observ:fext_GV(_w,"observ"),win:_w});
},
lpa_btnCan:function(btn,e,opt){btn.up("window").close();}
});