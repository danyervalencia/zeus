Ext.define("Siace.controller.bud.Notas_SiafE",{extend:"Ext.app.Controller",views:["bud.Notas_SiafE"],
init:function(application){this.control({
"bud_notasiafe":{beforeshow:this.bnse_BeforeShow},"bud_notasiafe #btnSave":{click:this.bnse_btnSaveClick},"bud_notasiafe #btnUndo":{click:this.bnse_btnUndoClick},"bud_notasiafe #btnExit":{click:this.bnse_btnExitClick}
});},
bnse_BeforeShow:function(comp,opt){var _TE=comp.getTE();var _frm=comp.down("form");var _me=this;
	_frm.load({method:"POST",url:"php/budget_notas_json_records.php",waitMsg:"Loading...",params:{xxNota_key:fext_GV(comp,"nota_key"),xxType_record:"frmSiaf",xxMenu_id:comp.getMI(),ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){try{var _mod=fext_CM("bud.NotaWBNSE");var _res=fext_DJ(act);var _dat=_res.data[0];if(_dat){_mod.set(_dat);_frm.loadRecord(_mod);}}catch(x){fext_MsgC(x.Message);}}
	});
	if(_TE==1){var _ico="icon_Vobo_90";var _tit="Registro de Nota SIAF ::.";}else if(fjsIn_array(_TE,[2])){var _ico="icon_Modify_90";var _tit="Modificar Registro Nota SIAF ::.";}
	comp.setIconCls(_ico);comp.setTitle(_tit);
},
bnse_btnSaveClick:function(btn,e,opt){var _w=btn.up("window");var _frm=_w.down("form");
	if(_w.getTE()==1&&(fext_IE(_w,"siaf_nro")||fext_GV(_w,"siaf_nro")*1<=0)){fext_MsgA("Debe indicar el Número de la Nota en el SIAF",_w.down("#siaf_nro"));return false;}if(!_frm.getForm().isValid()){return false;}
	Ext.Msg.confirm(trnslt.cnf,"¿Esta Ud. seguro de asignar el Número de Nota de SIAF al documento seleccionada?",function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/budget_notas_siaf_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxType_edit:_w.getTE(),xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!=null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
},
bnse_btnUndoClick:function(btn,e,opt){btn.up("window").close();},
bnse_btnExitClick:function(btn,e,opt){btn.up("window").close();}
});