Ext.define("Siace.controller.log.PedsecEE",{extend:"Ext.app.Controller",stores:["array.log.FiltRec"],views:["log.PedsecEE"],
init:function(application){this.control({
"log_pedsecee":{beforeshow:this.lpsee_BeforeShow},"log_pedsecee #btnSave":{click:this.lpsee_btnSaveClick},"log_pedsecee #btnUndo":{click:this.lpsee_btnUndoClick},"log_pedsecee #btnExit":{click:this.lpsee_btnExitClick},
"log_pedsecee #area_key":{change:this.lpsee_area_keyChange},"log_pedsecee #filt":{change:this.lpsee_filtChange},
"log_pedsecee #grd1 gridview":{drop:this.lpsee_grdDrop},"log_pedsecee #grd2 gridview":{drop:this.lpsee_grdDrop},"log_pedsecee #tipped_id":{change:this.lpsee_tipped_idChange}
});},
lpsee_BeforeShow:function(comp,opt){var _mi=comp.getMI(); var _TE=comp.getTE();var _cbo=comp.down("#usuracce_key");var _grd1=comp.down("#grd1");var _grd2=comp.down("#grd2");var _vs=fextpub_sessVar();var _me=this;comp.setIconCls("icon_User_go_90");comp.down("#btnSave").setIconCls("icon_User_go");comp.down("#btnSave").setText("Enviar Requerimientos");
	fextpub_tabgenFilt({obj:comp.down("#tipped_id"),tgp:5005,TR:"cboA"});fextpub_areasFilt({obj:comp.down("#area_key"),filt:false,nuk:"NoT",TR:"cbo",TQ:"ER_REQ",AB:"NO",setVal:false});
	_cbo.bindStore(fext_CS("pub.Usuarios_AccesosCbo"));_cbo.getStore().on("beforeload",function(str,oper,opt){var _prx=str.getProxy();_prx.setExtraParam("xxUsuracce_estado",1);_prx.setExtraParam("xxArea_key",comp.down("#area_key").getValue());_prx.setExtraParam("xxType_record","cbo");_prx.setExtraParam("xxAdd_blank","YES");});

	var _str1=fext_CS("log.Pedidos_SecuenciasEnv");_grd1.bindStore(_str1);_str1.sort("ped_nro","ASC");var _str2=fext_CS("log.Pedidos_SecuenciasEnv");_grd2.bindStore(_str2);_str2.sort("ped_nro","ASC");
	_str1.on("beforeload",function(str,oper,opt){var _prx=str.getProxy();
		_prx.setExtraParam("xxFilt",comp.down("#filt").getValue());_prx.setExtraParam("xxTipped_id",comp.down("#tipped_id").getValue());_prx.setExtraParam("xxType_record","grdEnv");_prx.setExtraParam("vs",fext_JE(_vs));_prx.setExtraParam("xxMenu_id",comp.getMI());
	});_str1.load();
},
lpsee_btnSaveClick:function(btn,e,opt){var _w=btn.up("window");var _frm=_w.down("form");
	if(fext_IE(_w.down("#area_key"))){fext_MsgA("Debe indicar la Unidad Orgánica a la que se va a enviar los documentos");return false;}
	//if(fext_IE(_w.down("#usuracce_key"))){fext_MsgA("Debe indicar el usuario al que se va a enviar los documentos");return false;}
	var _r=_w.down("#grd2").getStore().getRange();var _det="";
	for(var _i=0;_i<_r.length;_i++){_det+=(_i==0?"":",")+"{"+_r[_i].data.pedsec_key+",0,0}";}
	if(_det==""){fext_MsgA("Documento no registra detalle");return false;}
	if(!_frm.getForm().isValid()){return false;}
	Ext.Msg.confirm("Confirmar",trnslt.msg_qst_save,function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/logistics_pedidos_secuencias_save_env.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxDet:_det,xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!=null){_w.getCS().load();}fext_CC("log.Pedidos_TramitesOK");var _wF=fext_CW("log.Pedidos_TramitesOK");_wF.setCC(_w);_wF.setCK(_res.key);_w.close();_wF.show();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
},
lpsee_btnUndoClick:function(btn,e,opt){btn.up("window").close();},
lpsee_btnExitClick:function(btn,e,opt){btn.up("window").close();},
lpsee_area_keyChange:function(cbo,newVal,oldVal,opt){var _w=cbo.up("window");var _cbo=_w.down("#usuracce_key");_cbo.setValue("");if(Ext.isEmpty(newVal)){_cbo.disable();}else{_cbo.getStore().load();_cbo.enable();}},
lpsee_filtChange:function(cbo,newVal,oldVal,opt){var _w=cbo.up("window");_w.down("#grd1").getStore().load();},
lpsee_grdDrop:function(node,data,overModel,dropPosition,opt){var _w=data.view.up("window");var _g1=_w.down("#grd1");var _g2=_w.down("#grd2");
	_g1.getStore().sort();_g2.getStore().sort();_g1.getView().refresh();_g2.getView().refresh();
	if(_g2.getStore().getCount()*1>0){_w.down("#filt").disable();_w.down("#tipped_id").disable();}else{_w.down("#filt").enable();_w.down("#tipped_id").enable();}
},
lpsee_tipped_idChange:function(cbo,newVal,oldVal,opt){var _w=cbo.up("window");_w.down("#grd1").getStore().load();}
});