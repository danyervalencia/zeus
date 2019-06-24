Ext.define("Siace.controller.log.Buena_ProEG",{extend:"Ext.app.Controller",views:["log.Buena_ProEG"],
init:function(application){this.control({
"log_bpeg":{beforeshow:this.lbpeg_BS},"log_bpeg #btnSave":{click:this.lbpeg_btnSav},"log_bpeg #btnUndo":{click:this.lbpeg_btnExt},"log_bpeg #btnExit":{click:this.lbpeg_btnExt}
});},
lbpeg_BS:function(comp,opt){var _TE=comp.getTE();var _frm=comp.down("form");var _me=this;
	_frm.load({method:"POST",url:"php/logistics_buena_pro_json_records.php",waitMsg:"Loading...",params:{xxBp_key:comp.getCK(),xxType_record:"frmEG",xxMenu_id:comp.getMI(),ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){try{var _mod=fext_CM("log.Buena_ProEG");var _res=fext_DJ(act);var _d=_res.data[0];if(_d){_mod.set(_d);_frm.loadRecord(_mod);}}catch(x){fext_MsgC(x.Message);}}
	});
	comp.setIconCls("icon_Vobo_90");comp.setTitle("Editar Buena Pro ::.");
},
lbpeg_btnSav:function(btn,e,opt){var _w=btn.up("window");var _frm=_w.down("form");
	Ext.Msg.confirm(trnslt.cnf,"¿Esta Ud. seguro de Editar la Buena Pro editada?",function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/logistics_buena_pro_save_fg.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxType_edit:_w.getTE(),xxBp_key:_w.getCK(),xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!==null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
},
lbpeg_btnExt:function(btn,e,opt){btn.up("window").close();}
});