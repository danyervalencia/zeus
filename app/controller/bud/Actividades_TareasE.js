Ext.define('Siace.controller.bud.Actividades_TareasE',{extend:'Ext.app.Controller',views:['bud.Actividades_TareasEdit'],
init:function(application){this.control({
'bud_activtareae':{beforeshow:this.pbsede_BeforeShow},'bud_activtareae #btnSave':{click:this.pbsede_btnSaveClick},'bud_activtareae #btnUndo':{click:this.pbsede_btnUndoClick},'bud_activtareae #btnExit':{click:this.pbsede_btnExitClick},'bud_activtareae #bsespedet_estado':{change:this.pbsede_bsespedet_estadoChange}
});},
pbsede_BeforeShow:function(comp,opt){var _TE=comp.getTypeEdit(); var _form=comp.down('form'); var _cboUM=comp.down("#unimed_id"); var _vs=fextpub_sessionVariables();
	_cboUM.bindStore(Ext.create('Siace.store.bud.Unidades_MedidaCbo'));
	Ext.Ajax.request({method:'POST', url:'php/budget_actividades_json_records.php',params:{xxActiv_key:comp.down("#activ_key").getValue(),ssNO_YEAR:'NoT',xxType_record:'window_log',zzUsursess_key:_vs['us'],zzUsuracce_key:_vs['ua'],zzYear_id:_vs['y'],zzArea_key:_vs['a'],zzAlma_key:_vs['alma']},
		success:function(resp,opt){var _res=Siace.util.Util.decodeJSON(resp.responseText); _data=_res.data[0]; comp.down("#year_id").setValue(_data.year_id); comp.down("#area_nombre").setValue(_data.area_nombre); comp.down("#activ_nombre").setValue(_data.activ_nombre);}
	});

	if(_TE=='1'){var _icon='icon_New_90'; var _title='Nueva Tarea - POI ::.'; _cboUM.getStore().load({params:{xxType_record:'combo'}});}
	else if(fjsIn_array(_TE,['2','3'])){
		_form.load({method:'POST', url:'php/budget_actividades_tareas_json_records.php', waitMsg:'Loading...',params:{xxActivtarea_key:comp.getCallKey(),xxType_record:'form'},
			success:function(form,action){
				try{var _mod=Ext.create('Siace.model.bud.Actividad_TareaEdit'); var _res=Ext.decode(action.response.responseText); var _data=_res.data[0];
					if(_data){_mod.set(_data); _form.loadRecord(_mod); _cboUM.getStore().load({params:{xxType_record:'combo'},callback:function(rec,oper,succ){if(rec.length>0){_cboUM.setValue(_data.unimed_id);_cboUM.setDisabled(_TE=="3"?true:false);}else{_cboUM.disable();_cboUM.setValue('');}}});}
				}catch(ex){ Ext.Msg.alert('Status', 'Exception: '+ex.Message);}
			},failure:function(form,action){ Ext.Msg.alert("Load failed",action.result.errorMessage);}
		});
		if(_TE=='2'){var _icon='icon_Modify_90'; var _title='Modificación de Tarea - POI ::.';}
		else{var _icon='icon_Query_90'; var _title='Consulta de Tarea - POI ::.'; comp.down("#activtarea_nombre").disable(); comp.down("#activtarea_cantid").disable(); comp.down("#activtarea_monto").disable(); comp.down("#btnSave").disable(); comp.down("#btnUndo").disable(); comp.down("#btnExit").enable();}
	}
	comp.setIconCls(_icon); comp.setTitle(_title);
},
pbsede_btnSaveClick:function(btn,e,opt){var _win=btn.up('window'); var _frm=_win.down('form');
	if(!_frm.getForm().isValid()){return false;} var _vs=fextpub_sessionVariables();
	_frm.getForm().submit({method:'POST',url:'php/budget_actividades_tareas_save.php',waitTitle:translations.valida_titulo,waitMsg:translations.valida_mensaje01,
		params:{xx0005:'YES',xxActivtarea_key:_win.getCallKey(),xxMenu_id:_win.getMenuId(),zzUsursess_key:_vs['us'],zzUsuracce_key:_vs['ua'],zzYear_id:_vs['y'],zzArea_key:_vs['a'],zzAlma_key:_vs['alma']},
		success:function(form,action){var _res=Siace.util.Util.decodeJSON(action.response.responseText);
			if(_res.success){if(_win.getCallStore()!==null){_win.getCallStore().load();} _win.close();}
			else{Siace.util.Util.showErrorMsg(result.msg);}
		},failure:function(form,action){Siace.util.Util.showErrorMsg(action.response.responseText);}
	});
},
pbsede_btnUndoClick:function(btn,e,opt){btn.up('window').close();},
pbsede_btnExitClick:function(btn,e,opt){btn.up('window').close();},
pbsede_bsespedet_estadoChange:function(chk,newVal,oldVal,opt){fext_removeAddCls(chk.up('window').down('#lblBsespedet_estado'), newVal==true?'lbl00303':'lbl00003',newVal==true?'lbl00003':'lbl00303');}
});