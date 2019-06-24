Ext.define("Siace.controller.bud.Tareas_AreasE",{extend:"Ext.app.Controller",views:["bud.Tareas_AreasE"],
init:function(application){this.control({
"bud_tareaareae":{beforeshow:this.btae_BeforeShow},"bud_tareaareae #btnSave":{click:this.btae_btnSaveClick},"bud_tareaareae #btnUndo":{click:this.btae_btnUndoClick},"bud_tareaareae #btnExit":{click:this.btae_btnExitClick},
"bud_tareaareae #tareaarea_estado":{change:this.btae_tareaarea_estadoChange}
});},
btae_BeforeShow:function(comp,opt){var _TE=comp.getTE();var _frm=comp.down("form");fext_removeAddCls(comp.down("#xxx"),"myDisabledClass","x-item-disabled");
	Ext.Ajax.request({method:"POST",url:"php/budget_tareas_json_records.php",params:{xxTarea_key:fext_GV(comp,"tarea_key"),xxType_record:"winBTAE"},success:function(resp,opt){
		var _res=fext_DJ("",resp);var _mod=fext_CM("bud.TareaWBTAE");var _d=_res.data[0];
		if(_res.success&&_d){_mod.set(_d);fext_LR(comp.down("#panBT"),_mod);if(_TE==13){fextpub_areasFilt({obj:comp.down("#area_key"),ak:"",uek:_d.unieje_key,TR:"TO_ADD_TAREA",nuk:"NoT",TQ:fext_GV(comp,"tarea_key"),AB:"NO",setVal:false});}}
	}});
	if(_TE==13){var _ico="icon_Add_90";var _tit="Agregar Unidad Orgánica en Tarea Funcional ::.";}
	else if(fjsIn_array(_TE,[2,3])){
		_frm.load({method:"POST",url:"php/budget_tareas_areas_json_records.php",waitMsg: "Loading...",params:{xxTareaarea_key:comp.getCK(),xxType_record:"frm"},
			success:function(frm,act){var _mod=fext_CM("bud.Tarea_AreaE");var _res=fext_DJ(act);var _d=_res.data[0];if(_d){_mod.set(_d);_frm.loadRecord(_mod);fext_SV(comp,"tareaarea_estado",_d.tareaarea_estado==1?true:false);fextpub_areasFilt({obj:comp.down("#area_key"),ak:_d.area_key,TR:"cbo",dsb:true,nuk:"NoT",AB:"NO"});}},failure:function(frm,act){fext_MsgFL(act);}
		});
		if(_TE==2){var _ico="icon_Modify_90";var _tit="Modificación de Tarea Funcional - Unidad Orgánica ::.";}
		else{var _ico="icon_Query_90";var _tit="Consulta de Tarea Funcional - Unidad Orgánica ::.";fext_Dsb(comp,"",["tareaarea_estado","tareaarea_observ","btnSave","btnUndo"]);fext_SD(comp,"btnExit",false);}
	}
	comp.setIconCls(_ico);comp.setTitle(_tit);
},
btae_btnSaveClick:function(btn,e,opt){var _w=btn.up("window");var _frm=_w.down("#panBTA").down("form");
	if(fext_IE(_w.down("#area_key"))){fext_MsgA("Debe indicar la Unidad Organica que será asignada la Tarea Funcional");return false;}
	if(!_frm.getForm().isValid()){return false;}
	_frm.getForm().submit({method:"POST",url:"php/budget_tareas_areas_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxTareaarea_key:_w.getCK(),xxArea_key:fext_GV(_w,"area_key"),xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!=null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
	});
},
btae_btnUndoClick:function(btn,e,opt){btn.up("window").close();},
btae_btnExitClick:function(btn,e,opt){btn.up("window").close();},
btae_tareaarea_estadoChange:function(chk,newV,oldV,opt){fext_removeAddCls(chk.up("window").down("#lblTareaarea_estado"),newV?"lbl00303":"lbl00003",newV?"lbl00003":"lbl00303");}
});