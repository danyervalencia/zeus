Ext.define("Siace.controller.bud.Expedientes_ProcedenciasE",{extend:"Ext.app.Controller",views:["bud.Expedientes_ProcedenciasE"],
init:function(application){this.control({
"bud_expeproce":{beforeshow:this.bepe_BS},"bud_expeproce #btnSave":{click:this.bepe_btnSav},"bud_expeproce #btnUndo":{click:this.bepe_btnExt},"bud_expeproce #btnExit":{click:this.bepe_btnExt}
});},
bepe_BS:function(comp,opt){var _TE=comp.getTE();var _frm=comp.down("form");var _tx=fext_GV(comp,"tablex");var _vs=fextpub_sessVar();var _me=this;
	if(_tx==5030){_frm.load({method:"POST",url:"php/logistics_ordenes_json_records.php",waitMsg:"Loading...",params:{xxOrden_key:fext_GV(comp,"tablex_key"),xxType_record:"form_expediente",xxMenu_id:comp.getMI(),ssNO_USK:"NoT",vs:fext_JE(_vs)},success:function(frm,act){try{var _mod=fext_CM("log.OrdenLOEE");var _res=fext_DJ(act);if(_res.data[0]){_mod.set(_res.data[0]);_frm.loadRecord(_mod);}}catch(x){fext_MsgC(x.Message);}}});}
	else if(_tx==5060){_frm.load({method:"POST",url:"php/logistics_viaticos_json_records.php",waitMsg:"Loading...",params:{xxViat_key:fext_GV(comp,"tablex_key"),xxType_record:"frmExpediente",xxMenu_id:comp.getMI(),ssNO_USK:"NoT",vs:fext_JE(_vs)},success:function(frm,act){try{var _mod=fext_CM("bud.EgresoBEPE");var _res=fext_DJ(act);if(_res.data[0]){_mod.set(_res.data[0]); _frm.loadRecord(_mod);}}catch(x){fext_MsgC(x.Message);}}});}
	else if(_tx==2020){_frm.load({method:"POST",url:"php/budget_egresos_json_records.php",waitMsg:"Loading...",params:{xxEgre_key:fext_GV(comp,"tablex_key"),xxType_record:"frmExpediente",xxMenu_id:comp.getMI(),ssNO_USK:"NoT",vs:fext_JE(_vs)},success:function(frm,act){try{var _mod=fext_CM("bud.EgresoBEPE");var _res=fext_DJ(act);if(_res.data[0]){_mod.set(_res.data[0]);_frm.loadRecord(_mod);}}catch(x){fext_MsgC(x.Message);}}});}
	if(fjsIn_array(_TE,[1])){var _ico="icon_Vobo_90";var _tit="Registro de SIAF ::.";}
	comp.setIconCls(_ico);comp.setTitle(_tit);
},
bepe_btnSav:function(btn,e,opt){var _w=btn.up("window");var _frm=_w.down("form");
	if(fext_IE(_w,"tablex_key")){fext_MsgE("Error de sistema no se ha establecido el documento");return false;}
	if(fext_IE(_w,"expe_nro")||fext_GV(_w,"expe_nro")*1<=0){fext_MsgA("Debe indicar el Número de SIAF",_w.down("#expe_nro"));return false;}
	if(!_frm.getForm().isValid()){return false;}
	Ext.Msg.confirm(trnslt.cnf,"¿Esta Ud. seguro de agregar el Numero de SIAF al documento seleccionada?",function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/budget_expedientes_procedencias_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxType_edit:_w.getTE(),xxMenu_id:_w.getMI(),xxTiprecur_id:fext_GV(_w,"tiprecur_id"),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!==null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
},
bepe_btnExt:function(btn,e,opt){btn.up("window").close();}
});