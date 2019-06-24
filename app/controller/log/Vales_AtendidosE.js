Ext.define("Siace.controller.log.Vales_AtendidosE",{extend:"Ext.app.Controller",views:["log.Vales_AtendidosE"],
init:function(application){this.control({
"log_valatende":{beforeshow:this.lvae_BS},"log_valatende #btnSave":{click:this.lvae_btnSav},"log_valatende #btnUndo":{click:this.lvae_btnExt},"log_valatende #btnExit":{click:this.lvae_btnExt}
});},
lvae_BS:function(comp,opt){var _TE=comp.getTE();var _frm=comp.down("#panLVA").down("form");
	Ext.Ajax.request({method:"POST",url:"php/logistics_vales_json_records.php",params:{xxVal_key:comp.down("#val_key").getValue(),xxType_record:"win",vs:fext_JE(fextpub_sessVar()),ssNO_USK:"NoT"},success:function(resp,opt){var _res=fext_DJ("",resp);var _md=fext_CM("log.ValeW");
		if(_res.success&&_res.data.length==1){var _d=_res.data[0];_md.set(_d);comp.down("#panLV").down("form").loadRecord(_md);fext_SV(comp,"valatend_fecha",_d.val_fecha);}
	}});
	if(_TE==5051){var _ico="icon_New_90";var _tit="Registrar Atención a Vale ::.";}
	else if(fjsIn_array(_TE,[5052,5053])){
		_frm.load({method:"POST",url:"php/logistics_vales_atendidos_json_records.php",waitMsg:"Loading...",params:{xxValatend_key:comp.getCK(),xxType_record:"frm",vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _md=fext_CM("log.Vale_AtendidoE"); var _res=fext_DJ(act);var _d=_res.data[0];if(_d){_md.set(_d);_frm.loadRecord(_md);}},failure:function(frm,act){fext_MsgFL(act);}
		});
		if(_TE==2){var_ico="icon_Mdify_90";var _tit="Modificar Datos de Atención ::.";}
		else{var _ico="icon_Query_90";var _tit="Consulta Datos de Atención ::.";fext_Dsb(comp,"",["valatend_observ","btnSave","btnUndo"]);comp.down("#btnExit").enable();}
	}
	comp.setIconCls(_ico);comp.setTitle(_tit);
},
lvae_btnSav:function(btn,e,opt){fext_CC("log.ValAtendES").lvae(btn);},
lvae_btnExt:function(btn,e,opt){btn.up("window").close();}
});