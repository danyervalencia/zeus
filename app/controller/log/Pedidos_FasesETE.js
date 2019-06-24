Ext.define("Siace.controller.log.Pedidos_FasesETE",{extend:"Ext.app.Controller",stores:["array.TipTramFAB","array.log.FiltRec"],views:["log.Pedidos_FasesETE"],
init:function(application){this.control({
"log_pedfaseete":{beforeshow:this.lpsee_BS},"log_pedfaseete #btnSave":{click:this.lpsee_btnSav},"log_pedfaseete #btnUndo":{click:this.lpsee_btnExt},"log_pedfaseete #btnExit":{click:this.lpsee_btnExt},
"log_pedfaseete #tiptram_id":{change:this.lpsee_Chg},"log_pedfaseete #area_key":{change:this.lpsee_akChg},"log_pedfaseete #filt":{change:this.lpsee_Chg},
"log_pedfaseete #grd1 gridview":{drop:this.lpsee_grdDrop},"log_pedfaseete #grd2 gridview":{drop:this.lpsee_grdDrop},"log_pedfaseete #tipped_id":{change:this.lpsee_Chg}
});},
lpsee_BS:function(comp,opt){var _mi=comp.getMI(); var _TE=comp.getTE();var _cbo=comp.down("#usuracce_key");var _grd1=comp.down("#grd1");var _grd2=comp.down("#grd2");var _vs=fextpub_sessVar();var _me=this;comp.setIconCls("icon_User_go_90");comp.down("#btnSave").setIconCls("icon_User_go");comp.down("#btnSave").setText("Enviar Requerimientos");
	fextpub_tabgenFilt({obj:comp.down("#tipped_id"),tgp:5005,TR:"cboA"});fextpub_areasFilt({obj:comp.down("#area_key"),filt:false,nuk:"NoT",TR:"cbo",TQ:"ER_REQ",AB:"NO",setVal:false});
	_cbo.bindStore(fext_CS("pub.Usuarios_AccesosCbo"));_cbo.getStore().on("beforeload",function(str,oper,opt){var _prx=str.getProxy();_prx.setExtraParam("xxUsuracce_estado",1);_prx.setExtraParam("xxArea_key",comp.down("#area_key").getValue());_prx.setExtraParam("xxType_record","cbo");_prx.setExtraParam("xxAdd_blank","YES");});

	var _str1=fext_CS("log.Pedidos_FasesETE");_grd1.bindStore(_str1);_str1.sort("ped_nro","ASC");var _str2=fext_CS("log.Pedidos_FasesETE");_grd2.bindStore(_str2);_str2.sort("ped_nro","ASC");
	_str1.on("beforeload",function(str,oper,opt){fext_PSEP(str,["xxTiptram_id","xxFilt","xxTipped_id","xxType_record","vs","xxMenu_id"],["","","","grdTE",fext_JE(_vs),_mi],comp,["tiptram_id","filt","tipped_id","","",""]);});_str1.load();
},
lpsee_btnSav:function(btn,e,opt){var _w=btn.up("window");var _frm=_w.down("form");
	if(fext_IE(_w.down("#area_key"))){fext_MsgA("Debe indicar la Unidad Orgánica a la que se va a enviar los documentos");return false;}
	var _r=fext_GS(_w,"grd2").getRange();var _det="";
	for(var _i=0;_i<_r.length;_i++){_det+=(_i==0?"":",")+"{"+_r[_i].data.pedfase_key+",0,0}";}
	if(_det==""){fext_MsgA("Documento no registra detalle");return false;}
	if(!_frm.getForm().isValid()){return false;}
	Ext.Msg.confirm("Confirmar",trnslt.msg_qst_save,function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/logistics_pedidos_fases_save_env.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxDet:_det,xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!=null){_w.getCS().load();}fext_CC("log.Pedidos_TramitesOK");var _wF=fext_CW("log.Pedidos_TramitesOK");_wF.setCC(_w);_wF.setCK(_res.key);_w.close();_wF.show();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
},
lpsee_btnExt:function(btn,e,opt){btn.up("window").close();},
lpsee_Chg:function(cbo,newV,oldV,opt){var _w=cbo.up("window");fext_GS(_w,"grd1").load();},
lpsee_akChg:function(cbo,newV,oldV,opt){var _w=cbo.up("window");var _cbo=_w.down("#usuracce_key");_cbo.setValue("");if(Ext.isEmpty(newV)){_cbo.disable();}else{_cbo.getStore().load();_cbo.enable();}},
lpsee_grdDrop:function(node,data,overModel,dropPosition,opt){var _w=data.view.up("window");var _g1=_w.down("#grd1");var _g2=_w.down("#grd2");
	_g1.getStore().sort();_g2.getStore().sort();_g1.getView().refresh();_g2.getView().refresh();
	if(_g2.getStore().getCount()*1>0){fext_Dsb(_w,"",["tiptram_id","filt","tipped_id"]);}else{fext_SD(_w,"",false,["tiptram_id","filt","tipped_id"]);}
}
});