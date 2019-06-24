Ext.define("Siace.controller.pub.Individuos_FonosE",{extend:"Ext.app.Controller",views:["pub.Individuos_FonosE"],
init:function(application){this.control({
"pub_indivfonoe":{beforeshow:this.ppfe_BeforeShow},"pub_indivfonoe #btnSave":{click:this.ppfe_btnSaveClick},"pub_indivfonoe #btnUndo":{click:this.ppfe_btnUndoClick},"pub_indivfonoe #btnExit":{click:this.ppfe_btnExitClick},
"pub_indivfonoe #indivfono_estado":{change:this.ppfe_indivfono_estadoChange}
});},
ppfe_BeforeShow:function(comp,opt){var _TE=comp.getTE();var _frm=comp.down("form");
	fextpub_tabgenFilt({obj:comp.down("#tipfono_id"),tgp:1040,dsb:(_TE==3?true:false)});fextpub_tabgenFilt({obj:comp.down("#compfono_id"),tgp:1030,dsb:(_TE==3?true:false)});
	if(_TE==1){var _ico="icon_New_90";var _tit="Nuevo Registro Telefónico ::.";}
	else if(fjsIn_array(_TE,[2,3])){
		_frm.load({method:"POST",url:"php/public_individuos_fonos_json_records.php",waitMsg:"Loading...",params:{xxIndivfono_key:comp.getCK(),xxType_record:"frm"},
			success:function(frm,act){try{var _mod=fext_CM("pub.Individuo_FonoE");var _res=fext_DJ(act);var _d=_res.data[0];if(_d){_mod.set(_d);_frm.loadRecord(_mod);fext_SV(comp,"indivfono_estado",_d.indivfono_estado==1?true:false);}}catch(x){fext_MsgC(x);}},failure:function(frm,act){fext_MsgFL(act);}
		});
		if(_TE==2){var _ico="icon_Modify_90";var _tit="Modificación de Registro Telefónico ::.";}
		else{var _ico="icon_Query_90";var _tit="Consulta de Registro Telefónico ::.";fext_Dsb(comp,"",["tipfono_id","compfono_id","indivfono_nro","indivfono_estado","indivfono_observ","btnSave","btnUndo"]);comp.down("#btnExit").enable();}
	}
	comp.setIconCls(_ico);comp.setTitle(_tit);
},
ppfe_btnSaveClick:function(btn,e,opt){var _w=btn.up("window");var _frm=_w.down("form");
	if(fext_IE(_w,"indivfono_nro")){fext_MsgA("Debe indicar el NUMERO del registro Telefónico",_w.down("#indivfono_nro"));return false;}if(!_frm.getForm().isValid()){return false;}
	_frm.getForm().submit({method:"POST",url:"php/public_individuos_fonos_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxIndivfono_key:_w.getCK(),xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!=null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
	});
},
ppfe_btnUndoClick:function(btn,e,opt){btn.up("window").close();},
ppfe_btnExitClick:function(btn,e,opt){btn.up("window").close();},
ppfe_indivfono_estadoChange:function(chk,newV,oldV,opt){fext_removeAddCls(chk.up("window").down("#lblIndivfono_estado"),newV?"lbl00303":"lbl00003",newV?"lbl00003":"lbl00303");}
});