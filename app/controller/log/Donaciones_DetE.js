Ext.define("Siace.controller.log.Donaciones_DetE",{extend:"Ext.app.Controller",views:["log.Donaciones_DetE"],
init:function(application){this.control({
"log_donadete":{beforeshow:this.ldde_BS},"log_donadete #btnSave":{click:this.ldde_btnSav},"log_donadete #btnUndo":{click:this.ldde_btnExt},"log_donadete #btnExit":{click:this.ldde_btnExt},
"log_donadete #btnBs_search":{click:this.ldde_btnBSS},
"log_donadete #donadet_cantid":{change:this.ldde_Chg},"log_donadete #donadet_preuni":{change:this.ldde_Chg},"log_donadete #donadet_pretot":{change:this.ldde_Chg}
});},
ldde_BS:function(comp,opt){var _TE=comp.getTE();fext_removeAddCls(comp.down("#dscto"),"myDisabledClass","x-item-disabled");var _frmD=comp.down("#panLD").down("form");var _vs=fextpub_sessVar();
	_frmD.load({method:"POST",url:"php/logistics_donaciones_json_records.php",params:{xxDona_key:comp.down("#dona_key").getValue(),xxType_record:"win",vs:Ext.JSON.encode(_vs)},
		success:function(frm,act){try{var _res=fext_DJ(act);var _d=_res.data[0];if(_d){var _mod=fext_CM("log.DonacionW");_mod.set(_d);_frmD.loadRecord(_mod);}}catch(x){fext_MsgC(x.Message);}},failure:function(frm,act){fext_MsgFL(act);}
	});
	if(_TE==1){var _ico="icon_Add_90"; var _tit="Agregar Bien en Donación::.";}
	else if(fjsIn_array(_TE,[2,3])){var _frm=comp.down("#panLDD").down("form");
		_frm.load({method:"POST",url:"php/logistics_donaciones_det_json_records.php",waitMsg:"Loading...",params:{xxDonadet_key:comp.getCK(),xxType_record:"edit"},
			success:function(frm,act){try{var _mod=fext_CM("log.Donacion_DetE");var _res=fext_DJ(act);var _d=_res.data[0];if(_d){_mod.set(_d);_frm.loadRecord(_mod);fext_SV(comp,"bs_codigo",_d.bs_codigo);fext_SV(comp,"bs_nombre",_d.bs_nombre);}}catch(x){fext_MsgC(x.Message);}},failure:function(frm,act){fext_MsgFL(act);}
		});
		if(_TE==2){var _ico="icon_Modify_90";var _tit="Modificar Bien ::.";}
		else{var _ico="icon_Query_90";var _tit="Consulta de Bien en Donación ::.";fext_Dsb(comp,"",["btnBs_search","donadet_cantid","donadet_preuni","donadet_pretot","btnSave","btnUndo"]);fext_SRO(comp,"donadet_detalle");comp.down("#btnExit").enable();}
	}
	comp.setIconCls(_ico);comp.setTitle(_tit);
},
ldde_btnSav:function(btn,e,o){fext_CC("log.DonaDetES").ldde(btn);},
ldde_btnExt:function(btn,e,opt){btn.up("window").close();},
ldde_btnBSS:function(btn,e,opt){fext_CC("log.DonaDetE").ldde_bbs(btn);},
ldde_Chg:function(txtf,newV,oldV,o){if(newV*1!=oldV*1){fext_CC("log.DonaDetE").ldde_st(txtf.up("panel"),fext_oii(txtf).substr(8));}}
});