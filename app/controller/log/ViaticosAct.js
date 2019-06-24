Ext.define("Siace.controller.log.ViaticosAct",{extend:"Ext.app.Controller",views:["log.ViaticosAct"],
init:function(application){this.control({"log_viatact":{beforeshow:this.lva_BS},"log_viatact #btnAccept":{click:this.lva_btnAcc},"log_viatact #btnCancel":{click:this.lva_btnCan}});},
lva_BS:function(comp,opt){var _cboF=comp.down("#fase_key");_cboF.bindStore(fext_CS("log.FasesActivate"));
	Ext.Ajax.request({method:"POST",url:"php/logistics_viaticos_json_records.php",params:{xxViat_key:comp.getCK(),xxType_record:"win",xxOrder_by:"viat_key",vs:fext_JE(fextpub_sessVar())},success:function(resp,opt){var _res=fext_DJ("",resp);var _md=fext_CM("log.ViaticoW");if(_res.success&&_res.data.length==1){var _d=_res.data[0];_md.set(_d);comp.down("#frmLV").loadRecord(_md);}}});
	_cboF.getStore().load({params:{xxDoc_id:507},callback:function(rec){if(rec.length>0){_cboF.setValue(rec[0].data.fase_key);}else{_cboF.disable();_cboF.setValue("");}}});
	comp.down("#btnAccept").setIconCls("icon_Activate");comp.down("#btnAccept").setText("Activar");
},
lva_btnAcc:function(btn,e,opt){var _w=btn.up("window");
	if(fext_IE(_w,"fase_key")){fext_MsgA("Debe indicar la Fase a la cual se va a activar el Viático",_w.down("#fase_key"));return false;}
	_w.getCB().fireEvent("click",_w.getCB(),"",{key:_w.getCK(),fase_key:fext_GV(_w,"fase_key"),observ:fext_GV(_w,"observ"),win:_w});
},
lva_btnCan:function(btn,e,opt){btn.up("window").close();}
});