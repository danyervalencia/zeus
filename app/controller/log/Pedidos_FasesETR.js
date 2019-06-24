Ext.define("Siace.controller.log.Pedidos_FasesETR",{extend:"Ext.app.Controller",stores:["array.log.FiltRec"],views:["log.Pedidos_FasesETR"],
init:function(application){this.control({
"log_pedfaseetr":{beforeshow:this.lpfer_BS},"log_pedfaseetr #btnSave":{click:this.lpfer_btnSav},"log_pedfaseetr #btnUndo":{click:this.lpfer_btnExt},"log_pedfaseetr #btnExit":{click:this.lpfer_btnExt},"log_pedfaseetr #btnF":{click:this.lpfer_btnF},
"log_pedfaseetr #area_key":{change:this.lpfer_akChg},"log_pedfaseetr #areap_key":{change:this.lpfer_Chg},"log_pedfaseetr #filt":{change:this.lpfer_Chg},
"log_pedfaseetr #grd1 gridview":{drop:this.lpfer_grdDrop},"log_pedfaseetr #grd2 gridview":{drop:this.lpfer_grdDrop},"log_pedfaseetr #tipped_id":{change:this.lpfer_Chg},
});},
lpfer_BS:function(comp,opt){var _mi=comp.getMI();var _grd1=comp.down("#grd1");var _grd2=comp.down("#grd2");var _vs=fextpub_sessVar();var _me=this;comp.setIconCls("icon_User_rec_90");comp.down("#btnSave").setIconCls("icon_User_rec");comp.down("#btnSave").setText("Recibir Requerimientos");
	fextpub_tabgenFilt({obj:comp.down("#tipped_id"),tgp:5005,TR:"cboA"});fextpub_areasFilt({obj:comp.down("#areap_key"),filt:false,nuk:"NoT",OB:"area_abrev"});

	var _str1=fext_CS("log.Pedidos_FasesETR");_grd1.bindStore(_str1);_str1.sort("ped_nro","ASC");var _str2=fext_CS("log.Pedidos_FasesETR");_grd2.bindStore(_str2);_str2.sort("ped_nro","ASC");
	_str1.on("beforeload",function(str,oper,opt){fext_PSEP(str,["xxFilt","xxTipped_id","xxType_record","xxType_query","vs","xxMenu_id"],["","","grdTR","",fext_JE(_vs),_mi],comp,["filt","tipped_id","","areap_key","",""]);});
},
lpfer_btnSav:function(btn,e,opt){var _w=btn.up("window");var _frm=_w.down("form");var _r=fext_GS(_w,"grd2").getRange();var _det="";
	for(var _i=0;_i<_r.length;_i++){_det+=(_i==0?"":",")+"{"+_r[_i].data.pedfase_key+",0,0}";}
	if(_det==""){fext_MsgA("Documento no registra detalle");return false;}
	if(!_frm.getForm().isValid()){return false;}
	Ext.Msg.confirm("Confirmar",trnslt.msg_qst_save,function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/logistics_pedidos_fases_save_rec.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxDet:_det,xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!=null){_w.getCS().load();}fext_CC("log.Pedidos_TramitesOK");var _wF=fext_CW("log.Pedidos_TramitesOK");_wF.setCC(_w);_wF.setCK(_res.key);_w.close();_wF.show();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
},
lpfer_btnExt:function(btn,e,opt){btn.up("window").close();},
lpfer_btnF:function(btn,e,opt){var _w=btn.up("window");fext_GS(_w,"grd1").load();},
lpfer_Chg:function(cbo,newV,oldV,opt){if(oldV!=undefined){var _w=cbo.up("window");fext_GSR(_w,"grd1");}},
lpfer_akChg:function(cbo,newV,oldV,opt){var _w=cbo.up("window");var _cbo=_w.down("#usuracce_key");if(Ext.isEmpty(newV)){_cbo.disable();}else{_cbo.getStore().load();_cbo.setValue("");_cbo.enable();}},
lpfer_grdDrop:function(node,data,overModel,dropPosition,opt){var _w=data.view.up("window");var _g1=_w.down("#grd1");var _g2=_w.down("#grd2");
	_g1.getStore().sort();_g2.getStore().sort();_g1.getView().refresh();_g2.getView().refresh();
	if(_g2.getStore().getCount()*1>0){fext_Dsb(_w,"",["filt","tipped_id","areap_key","btnF"]);}else{fext_SD(_w,"",false,["filt","tipped_id","areap_key","btnF"]);}
}
});