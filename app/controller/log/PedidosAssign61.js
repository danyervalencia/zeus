Ext.define("Siace.controller.log.PedidosAssign61",{extend:"Ext.app.Controller",views:["log.PedidosAssign61"],
init:function(application){this.control({
"log_pedassign61":{beforeshow:this.lpa61_BS},"log_pedassign61 #btnAccept":{click:this.lpa61_btnAcc},"log_pedassign61 #btnCancel":{click:this.lpa61_btnCan},
"log_pedassign61 actioncolumn#acEnv_rec":{click:this.lpa61_acEnv_recCLick},"log_pedassign61 #pedweb_estado":{change:this.lpa61_pedweb_estadoChange},"log_pedassign61 #usur_psw2":{keypress:this.lpa61_usur_psw2KeyPress}
});},
lpa61_BS:function(comp,opt){var _frm=comp.down("#frmLP");var _cboUAK=comp.down("#usuracce_key");
	_frm.load({method:"POST",url:"php/logistics_pedidos_json_records.php",waitMsg:"Loading...",params:{xxPed_key:comp.getCK(),xxType_record:"winLPA61",xxType_query:"winLPA61",xxMenu_id:comp.getMI(),ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){try{var _mod=fext_CM("log.PedidoEdit61");var _res=fext_DJ(act);var _d=_res.data[0];if(_d){_mod.set(_d);_frm.loadRecord(_mod);fextpub_tabgenFilt({obj:comp.down("#categ_id"),tgp:5050,AB:"NOT",val:_d.categ_id});}}catch(x){fext_MsgE(x.Message);}},failure:function(frm,act){fext_MsgFL(act);}
	});
	_cboUAK.bindStore(fext_CS("log.Fases_Accesos_Usuarios_AccesosUsuracceData"));
	_cboUAK.getStore().load({params:{xxFase_id:161,xxFaseacceusuracce_estado:1,xxOrder_by:"indiv_apenom",xxAdd_blank:"YES",xxType_record:"cboCTZDRS"},callback:function(rec){_cboUAK.setValue("");}});
	var _grdLPF=comp.down("#grdLPF");var _strLPF=fext_CS("log.Pedidos_FasesEdit61");_grdLPF.bindStore(_strLPF);_grdLPF.getView().refresh();
	_strLPF.on("beforeload",function(str,oper,opt){str.getProxy().setExtraParam("xxPed_key",comp.getCK());str.getProxy().setExtraParam("xxType_record","edit61");str.getProxy().setExtraParam("vs",fext_JE(fextpub_sessVar()));});_strLPF.load();

},
lpa61_btnAcc:function(btn,e,opt){var _w=btn.up("window");var _frm=_w.down("#frmLPA");var _det="";var _r=_w.down("#grdLPF").getStore().getRange();
	for(var _i=0;_i<_r.length;_i++){var _d=_r[_i].data; if(_d.pedfase_estado==0&&_d.estado==1){_det+=(_det==""?"":",")+"{"+_d.pedfase_key+","+_d.usuracce_key+","+_d.pedfase_estado+"}";}}
	Ext.Msg.confirm(trnslt.cnf,trnslt.msg_qst_save,function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/logistics_pedidos_fases_save_161.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxType_edit:_w.getTE(),xxPed_key:_w.getCK(),xxCateg_id:fext_GV(_w,"categ_id"),xxDet:_det,xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!==null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
},
lpa61_btnCan:function(btn,e,opt){btn.up("window").close();},
lpa61_acEnv_recCLick:function(grid,cell,row,col,e,rec,t){if(rec.data.pedfase_estado==1){rec.set("pedfase_estado",0);rec.commit();}}
});