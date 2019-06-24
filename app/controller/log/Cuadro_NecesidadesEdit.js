Ext.define("Siace.controller.log.Cuadro_NecesidadesEdit",{extend:"Ext.app.Controller",views:["log.Cuadro_NecesidadesEdit"],
init:function(application){this.control({
"log_cuanecedit":{beforeshow:this.lcne_BeforeShow},"log_cuanecedit #btnSave":{click:this.lcne_btnSaveClick},"log_cuanecedit #btnUndo":{click:this.lcne_btnUndoClick},"log_cuanecedit #btnExit":{click:this.lcne_btnExitClick},
});},
lcne_BeforeShow:function(comp,opt){var _TE=comp.getTypeEdit(); var _form=comp.down("form"); var _vs=fextpub_sessionVariables();
	fextpub_yearsFilter({"objeto":comp.down("#year_id"),"year_estado":"2","add_blank":"NOT"});
	fextpub_tablas_generalesFilter({"objeto":comp.down("#tipcuanec_id"),"tabgen_parent":"5070","add_blank":"NOT","disabled":(_TE=="3"?true:false)});
	fextbud_fuentes_financiamientoFilter({"panel":comp,"add_blank":"NOT","disabled":(_TE=="3"?true:false),"setValue":false});
	if(fjsIn_array(_TE,["1","2"])){fextpub_areasFilter({"objeto":comp.down("#area_key"),"area_key":Ext.getCmp("ah_txtArea_key").getValue(),"no_usk":"NoT","type_record":"combo","add_blank":"NO","disabled":true});}
	if(_TE=="1"){var _icon="icon_New_90"; var _title="Nuevo Cuadro de Necesidades ::."; comp.down("#cuanec_fecha").setValue(fjsDateCurrent(""));}
	else if(fjsIn_array(_TE,["2","3"])){
		_form.load({method:"POST", url:"php/logistics_cuadro_necesidades_json_records.php",waitMsg:"Loading...",params:{xxCuanec_key:comp.getCallKey(),xxType_record:"form",ssNO_USK:comp.getNoUsk(),xxMenu_id:comp.getMenuId(),zzUsursess_key:_vs["us"],zzUsuracce_key:_vs["ua"],zzYear_id:_vs["y"],zzArea_key:_vs["a"],zzAlma_key:_vs["alma"]},
			success:function(form,action){
				try{var _mod=Ext.create("Siace.model.log.Cuadro_NecesidadEdit"); var _res=Ext.decode(action.response.responseText);
					if(_res.data[0]){_mod.set(_res.data[0]); _form.loadRecord(_mod); var _data=_res.data[0];
						comp.down("#cuanec_nro").setValue(fjsLpad(_data.cuanec_nro,6,0)); comp.down("#cuanec_fecha").setValue(_data.cuanec_fecha);
						if(fjsIn_array(_TE,["3"])){fextpub_areasFilter({"objeto":comp.down("#area_key"),"area_key":_data.area_key,"type_record":"combo","no_usk":"NoT","add_blank":"NO","disabled":true});}
					}
				}catch(ex){Ext.Msg.alert("Status","Exception: "+ex.Message);}
			},failure:function(form,action){Ext.Msg.alert("Load failed",action.result.errorMessage);}
		});
		if(_TE=="2"){var _icon="icon_Modify_90"; var _title="Modificar Cuadro de Necesidades ::.";}
		else{ var _icon="icon_Query_90"; var _title="Consulta de Cuadro de Necesidades ::."; 
			comp.down("#year_id").disable(); comp.down("#tipcuanec_id").disable(); comp.down("#meta_id").disable(); comp.down("#fuefin_id").disable(); comp.down("#cuanec_observ").disable();
			comp.down("#btnSave").disable(); comp.down("#btnUndo").disable(); comp.down("#btnExit").enable();
		}
	}
	comp.setIconCls(_icon); comp.setTitle(_title);
},
lcne_btnSaveClick:function(btn,e,opt){var _win=btn.up("window"); var _frm=_win.down("form");
	if(Ext.isEmpty(_win.down("#year_id").getValue())){Ext.Msg.alert(translations.mensaje,"Debe indicar el Año de Trabajo",function(){_win.down("#year_id").focus();}); return false;}
	if(Ext.isEmpty(_win.down("#area_key").getValue())){Ext.Msg.alert(translations.mensaje,"Debe indicar la Unidad Orgánica a la que se asignará el Cuadro de Necesidad",function(){_win.down("#tipcuanec_id").focus();}); return false;}
	if(Ext.isEmpty(_win.down("#tipcuanec_id").getValue())){Ext.Msg.alert(translations.mensaje,"Debe indicar el Tipo de Cuadro de Necesidad",function(){_win.down("#tipcuanec_id").focus();}); return false;}
	if(Ext.isEmpty(_win.down("#fuefin_id").getValue())){Ext.Msg.alert(translations.mensaje,"Debe indicar la Fuente de Financiamiento",function(){_win.down("#fuefin_id").focus();}); return false;}
	if(!_frm.getForm().isValid()){return false;} var _vs=fextpub_sessionVariables();
	_frm.getForm().submit({method:"POST",url:"php/logistics_cuadro_necesidades_save.php",waitTitle:translations.valida_titulo,waitMsg:translations.valida_mensaje01,
		params:{xx0005:"YES",xxCuanec_key:_win.getCallKey(),xxMenu_id:_win.getMenuId(),xxYear_id:_win.down("#year_id").getValue(),xxCuanec_fecha:_win.down("#cuanec_fecha").getSubmitValue(),xxArea_key:_win.down("#area_key").getValue(),
				zzUsursess_key:_vs["us"],zzUsuracce_key:_vs["ua"],zzYear_id:_vs["y"],zzArea_key:_vs["a"],zzAlma_key:_vs["alma"]},
		success:function(form,action){var _res=Siace.util.Util.decodeJSON(action.response.responseText);
			if(_res.success){if(_win.getCallStore()!==null){_win.getCallStore().load();}_win.close();}else{Siace.util.Util.showErrorMsg(result.msg);}
		},failure:function(form,action){Siace.util.Util.showErrorMsg(action.response.responseText);}
	});
},
lcne_btnUndoClick:function(btn,e,opt){btn.up("window").close();},
lcne_btnExitClick:function(btn,e,opt){btn.up("window").close();},
});