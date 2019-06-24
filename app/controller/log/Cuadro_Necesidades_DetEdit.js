Ext.define('Siace.controller.log.Cuadro_Necesidades_DetEdit',{extend:'Ext.app.Controller',stores:['array.Bst','array.YearsAB'],views:['log.Cuadro_Necesidades_DetEdit'],
init:function(application){this.control({
'log_cuanecdetedit':{activate:this.lcnde_Show,beforerender:this.lcnde_BeforeRender},'log_cuanecdetedit #btnSave':{click:this.lcnde_btnSaveClick},'log_cuanecdetedit #btnUndo':{click:this.lcnde_btnUndoClick},'log_cuanecdetedit #btnExit':{click:this.lcnde_btnExitClick},
'log_cuanecdetedit #tab01 #bs_nombre':{change:this.lcnde_t1_bs_nombreChange,keypress:this.lcnde_t1_bs_nombreKeypress},'log_cuanecdetedit #tab01 #bsc_id':{change:this.lcnde_t1_bsc_idChange},'log_cuanecdetedit #tab01 #bsg_id':{change:this.lcnde_t1_bsg_idChange},'log_cuanecdetedit #tab01 #bst_id':{change:this.lcnde_t1_bst_idChange},
'log_cuanecdetedit #tab01 #grdPBS':{selectionchange:this.lcnde_t1_grdPBSSelectionchange},
'log_cuanecdetedit #tabLO':{activate:this.lcnde_tlo_Activate},'log_cuanecdetedit #tabLO #area_key':{change:this.lcnde_tlo_area_keyChange},'log_cuanecdetedit #tabLO #year_id':{change:this.lcnde_tlo_year_idChange},
'log_cuanecdetedit #tab02 #cuanecdet_cantid':{change:this.lcnde_t2_cuanecdet_cantidChange},'log_cuanecdetedit #tab02 #cuanecdet_pretot':{change:this.lcnde_t2_cuanecdet_pretotChange},'log_cuanecdetedit #tab02 #cuanecdet_preuni':{change:this.lcnde_t2_cuanecdet_preuniChange},
'log_cuanecdetedit #tabSearch':{tabchange:this.lcnde_tabSearchTabChange}
});},
lcnde_Show:function(comp,opt){},
lcnde_BeforeRender:function(comp,opt){var _TE=comp.getTypeEdit(); var _form=comp.down('form'); var _grdPBS=comp.down('#grdPBS'); var _pagPBS=comp.down('#pagPBS'); var _tab=comp.down('#tabSearch'); var _tab02=comp.down('#tab02'); var _tabLO=comp.down('#tabLO'); var _me=this;
	fextbud_fuentes_financiamientoFilter({'panel':comp,'add_blank':'NOT','setValue':false,'disabled':(_TE=="3"?true:false)});
	fextpub_bienes_servs_gruposParameters({'panel':comp}); fextpub_bienes_servs_clasesParameters({'panel':comp}); fextpub_bienes_servs_familiasParameters({'panel':comp}); comp.down('#bst_id').setValue(1);
	var _strPBS=Ext.create('Siace.store.pub.Bienes_ServsSearch');
	_grdPBS.bindStore(_strPBS); _pagPBS.bindStore(_strPBS); _strPBS.sort('bs_nombre','ASC'); _strPBS.pageSize=500;
	_strPBS.on('beforeload',function(str,oper,opt){comp.down("#bs_key").setValue(""); comp.down('#btnSave').disable(); var _prx=str.getProxy(); //comp.down('#tab02').disable();
		_prx.setExtraParam('xxBst_id',comp.down('#bst_id').getValue()); _prx.setExtraParam('xxBsg_id',comp.down('#bsg_id').getValue()); _prx.setExtraParam('xxBsc_id',comp.down('#bsc_id').getValue()); _prx.setExtraParam('xxBsf_id',comp.down('#bsf_id').getValue()); _prx.setExtraParam('xxBs_nombre',comp.down('#bs_nombre').getValue()); _prx.setExtraParam('xxBs_estado','1');
		_prx.setExtraParam('xxType_record','grid_search'); _prx.setExtraParam('xxType_query',comp.getTypeQuery()); _prx.setExtraParam('xxOrder_by',str.sorters.items[0].property+' '+str.sorters.items[0].direction); _prx.setExtraParam('xxPaginate', '1');
	});

	fextpub_areasFilter({'objeto':_tabLO.down('#area_key'),'area_key':'','no_usk':'NoT'}); fextbud_metasParameters({'panel':_tabLO});
	var _strLOD=Ext.create('Siace.store.log.Ordenes_DetPBSBrowse'); var _grdLOD=_tabLO.down('#grdLOD'); var _pagLOD=_tabLO.down('#pagLOD');
	_grdLOD.bindStore(_strLOD); _pagLOD.bindStore(_strLOD); _strLOD.sort('orden_fecha','DESC');
	_strLOD.on('beforeload',function(str,oper,opt){var _rec=_grdPBS.getSelectionModel().getSelection()[0]; var _prx=str.getProxy();
		_prx.setExtraParam('xxBs_key',_tab02.down("#bs_key").getValue());
		_prx.setExtraParam('xxYear_id',_tabLO.down('#year_id').getValue());_prx.setExtraParam('xxArea_key',_tabLO.down('#area_key').getValue()); _prx.setExtraParam('xxMeta_id',_tabLO.down('#meta_id').getValue());
		_prx.setExtraParam('xxType_record','gridPBSB'); _prx.setExtraParam('xxOrder_by',str.sorters.items[0].property+' '+str.sorters.items[0].direction); _prx.setExtraParam('xxPaginate','1');
	});

	if(_TE=='1'){var _icon='icon_Add_90'; var _title='Agregar Detalle en Cuadro de Necesidades ::.'; fextpub_tablas_generalesFilter({'objeto':comp.down('#objcontr_id'),'tabgen_parent':'5080','add_blank':'NoT'});}
	else if(fjsIn_array(_TE,['2','3'])){_tab.setActiveTab(2);
		_form.load({method:'POST', url:'php/logistics_cuadro_necesidades_det_json_records.php', waitMsg:'Loading...',params:{xxCuanecdet_key:comp.getCallKey(),xxType_record:'form'},
			success:function(form,action){
				try{var _mod=Ext.create('Siace.model.log.Cuadro_Necesidad_DetEdit'); var _res=Ext.decode(action.response.responseText); var _data=_res.data[0];
					if(_data){_mod.set(_data); _form.loadRecord(_mod); fextpub_tablas_generalesFilter({'objeto':comp.down('#objcontr_id'),'tabgen_parent':'5080','value':_data.objcontr_id,'add_blank':'NoT','disabled':(_TE=="3"?true:false)});
					}
				}catch(ex){ Ext.Msg.alert('Status', 'Exception: '+ex.Message);}
			},failure:function(form,action){ Ext.Msg.alert("Load failed",action.result.errorMessage);}
		});
		if(_TE=='2'){var _icon='icon_Modify_90'; var _title='Modificar Detalle Cuadro Necesidad ::.';}
		else{var _icon='icon_Query_90'; var _title='Consulta Detalle Cuadro de Necesidad ::.'; comp.down('#tab01').disable(); _tabLO.disable(); comp.down("#fuefin_id").disable(); comp.down("#espedet_id").disable(); comp.down("#objcontr_id").disable(); comp.down("#cuanecdet_cantid").disable(); comp.down("#cuanecdet_preuni").disable(); comp.down("#cuanecdet_m01").disable(); comp.down("#cuanecdet_m02").disable(); comp.down("#cuanecdet_m03").disable();  comp.down("#cuanecdet_m04").disable(); comp.down("#cuanecdet_m05").disable();  comp.down("#cuanecdet_m06").disable();  comp.down("#cuanecdet_m07").disable();  comp.down("#cuanecdet_m08").disable();  comp.down("#cuanecdet_m09").disable();  comp.down("#cuanecdet_m10").disable(); comp.down("#cuanecdet_m11").disable(); comp.down("#cuanecdet_m12").disable(); comp.down("#btnSave").disable(); comp.down("#btnUndo").disable(); comp.down("#btnExit").enable();}
	}
	comp.setIconCls(_icon); comp.setTitle(_title);
	//var _strPBSED=Ext.create('Siace.store.pub.Bienes_Servs_Especificas_DetBalances'); var cboED=_tab02.down('#espedet_id'); cboED.bindStore(_strPBSED); _strPBSED.pageSize=500;
	//_strPBSED.on('beforeload',function(str,oper,opt){var _prx=str.getProxy();
	//	_prx.setExtraParam('xxBs_key',_tab02.down('#bs_key').getValue()); _prx.setExtraParam('xxBst_id',comp.down('#bst_id').getValue()); _prx.setExtraParam('xxTarea_key',comp.getTarea_key()); _prx.setExtraParam('xxTipgast_code',comp.getTipgast_code());
	//	_prx.setExtraParam('xxFuefin_id',comp.getFuefin_id()); _prx.setExtraParam('xxTiprecur_id',comp.getTiprecur_id()); _prx.setExtraParam('xxEspedet_type',comp.getEspedet_type()); _prx.setExtraParam('xxBsespedet_estado','1');
	//	_prx.setExtraParam('xxType_record','combo');
	//});
},
lcnde_Clean:function(poComp){var _pag=poComp.down('#pagPBS'); var _str=_pag.getStore(); fext_gridClean(_str,_pag);
	poComp.down('#btnSave').disable(); poComp.down('#tabLO').disable(); poComp.down('#espedet_id').getStore().removeAll(); poComp.down('#espedet_id').setValue('');
},
lcnde_btnSaveClick:function(btn,e,opt){var _win=btn.up('window'); var _frm=_win.down('form');
	if(Ext.isEmpty(_win.down('#bs_key').getValue())){Ext.Msg.alert(translations.mensaje,'No se ha establecido el Bien/Servicio a agregar',function(){});return false;}
	//if(_win.down('#espedet_id').getValue()*1<=0){_win.down('#tabSearch').setActiveTab(1);Ext.Msg.alert(translations.mensaje,'Debe indicar el Clasificador Presupuestal',function(){_win.down('#espedet_id').focus();});return false;}
	if(_win.down('#cuanecdet_cantid').getValue()==''||_win.down('#cuanecdet_cantid').getValue()*1<=0){Ext.Msg.alert(translations.mensaje,'Debe indicar la CANTIDAD',function(){_win.down('#cuanecdet_cantid').focus();});return false;}
	if(_win.down('#cuanecdet_preuni').getValue()==''||_win.down('#cuanecdet_preuni').getValue()*1<=0){Ext.Msg.alert(translations.mensaje,'Debe indicar el Precio Unitario',function(){_win.down('#cuanecdet_preuni').focus();});return false;}
	if(!_frm.getForm().isValid()){return false;} var _vs=fextpub_sessionVariables();
	_frm.getForm().submit({method:'POST',url:'php/logistics_cuadro_necesidades_det_save.php',waitTitle:translations.valida_titulo,waitMsg:translations.valida_mensaje01,
		params:{xx0005:'YES',xxCuanecdet_key:_win.getCallKey(),xxActivtarea_key:_win.down('#activtarea_key').getValue(),xxCuanecdet_cantid:_win.down('#cuanecdet_cantid').getValue(),xxCuanecdet_pretot:_win.down('#cuanecdet_pretot').getValue(),xxMenu_id:_win.getMenuId(),
				zzUsursess_key:_vs['us'],zzUsuracce_key:_vs['ua'],zzYear_id:_vs['y'],zzArea_key:_vs['a'],zzAlma_key:_vs['alma']},
		success:function(form,action){var _res=Siace.util.Util.decodeJSON(action.response.responseText);
			if(_res.success){if(_win.getCallStore()!==null){_win.getCallStore().load();} _win.close();}
			else{Siace.util.Util.showErrorMsg(result.msg);}
		},failure:function(form,action){Siace.util.Util.showErrorMsg(action.response.responseText);}
	});
},
lcnde_btnUndoClick:function(btn,e,opt){var _win=btn.up('window'); _win.hide();}, //_win.close();
lcnde_btnExitClick:function(btn,e,opt){var _win=btn.up('window'); _win.hide();}, //_win.close();
lcnde_t1_bs_nombreChange:function(txtf,newVal,oldVal,opt){this.lcnde_Clean(txtf.up('window'));},
lcnde_t1_bs_nombreKeypress:function(txtf,e,opt){if(e.getCharCode()==13){txtf.up('window').down("#grdPBS").getStore().load();}},
lcnde_t1_bsc_idChange:function(cbo,newVal,oldVal,opt){if(oldVal!==undefined){this.lcnde_Clean(cbo.up('window'));} fextpub_bienes_servs_familiasLoad({'panel':cbo.up('window')});},
lcnde_t1_bsg_idChange:function(cbo,newVal,oldVal,opt){if(oldVal!==undefined){this.lcnde_Clean(cbo.up('window'));} fextpub_bienes_servs_clasesLoad({'panel':cbo.up('window')});},
lcnde_t1_bst_idChange:function(cbo,newVal,oldVal,opt){if(oldVal!==undefined){this.lcnde_Clean(cbo.up('window'));} var _win=cbo.up('window'); var _nd=(newVal=="1"?3:2); fextpub_bienes_servs_gruposLoad({'panel':_win}); _win.down("#objcontr_id").setValue(("508"+newVal)*1);
	if(newVal=="2"){_win.down("#cuanecdet_cantid").disable(); _win.down("#cuanecdet_cantid").setValue(1); this.lcnde_t2Subtotal(_win,'CA');}
	_win.down("#cuanecdet_m01").numberDecimal=(_nd); _win.down("#cuanecdet_m02").numberDecimal=(_nd); _win.down("#cuanecdet_m03").numberDecimal=(_nd); _win.down("#cuanecdet_m04").numberDecimal=(_nd); _win.down("#cuanecdet_m05").numberDecimal=(_nd); _win.down("#cuanecdet_m06").numberDecimal=(_nd);
	_win.down("#cuanecdet_m07").numberDecimal=(_nd); _win.down("#cuanecdet_m08").numberDecimal=(_nd); _win.down("#cuanecdet_m09").numberDecimal=(_nd); _win.down("#cuanecdet_m10").numberDecimal=(_nd); _win.down("#cuanecdet_m11").numberDecimal=(_nd); _win.down("#cuanecdet_m12").numberDecimal=(_nd);
},
lcnde_t1_grdPBSSelectionchange:function(mod,rec,opt){if(rec.length==1){var _win=mod.view.panel.up('window'); _win.down("#tabLO").enable(); _win.down("#bs_key").setValue(rec[0].data.bs_key); _win.down('#btnSave').setDisabled(rec[0].data.bs_key==_win.getCallKey()?true:false);}},
lcnde_tlo_Activate:function(comp,opt){var _pan=comp.up('log_cuanecdetedit'); if(_pan.down("#bs_key").getValue()==""){return false;} comp.down("grid").getStore().load();},
lcnde_tlo_Clean:function(poComp){var _pag=poComp.down('#pagLOD'); var _str=_pag.getStore(); fext_gridClean(_str,_pag);},
lcnde_tlo_area_keyChange:function(cbo,newVal,oldVal,opt){if(oldVal!==undefined){this.lcnde_tlo_Clean(cbo.up('panel'));fextbud_metasLoad({'panel':cbo.up('panel')});}},
lcnde_tlo_year_idChange:function(cbo,newVal,oldVal,opt){if(oldVal!==undefined){this.lcnde_tlo_Clean(cbo.up('panel'));}fextbud_metasLoad({'panel':cbo.up('panel')});},
lcnde_t2Subtotal:function(poComp,pcType){var _cantid=poComp.down('#cuanecdet_cantid').getValue()*1; var _preuni=poComp.down('#cuanecdet_preuni').getValue()*1; var _pretot=poComp.down('#cuanecdet_pretot').getValue()*1;
	if(pcType=='CA'){if(_preuni>0){ poComp.down('#cuanecdet_pretot').setValue(fjsRound(_cantid*_preuni,2)); }else if(_pretot>0){ poComp.down('#cuanecdet_preuni').setValue(fjsRound(_pretot*_cantid,6)); }}
	else if(pcType=='PU'){if(_cantid>0){ poComp.down('#cuanecdet_pretot').setValue(fjsRound(_cantid*_preuni,2)); }else if(_pretot>0){ poComp.down('#cuanecdet_cantid').setValue(fjsRound(_pretot/_preuni,3)); }}
	else if(pcType=='PT'){if(_cantid>0){ poComp.down('#cuanecdet_preuni').setValue(fjsRound(_pretot/_cantid,6)); }else if(_preuni>0){ poComp.down('#cuanecdet_cantid').setValue(fjsRound(_pretot/_preuni,3)); }}
},
lcnde_t2_cuanecdet_cantidChange:function(txtf,newVal,oldVal,eopt){if(newVal*1!==oldVal*1){this.lcnde_t2Subtotal(txtf.up('panel'),'CA');}},
lcnde_t2_cuanecdet_pretotChange:function(txtf,newVal,oldVal,eopt){if(newVal*1!==oldVal*1){this.lcnde_t2Subtotal(txtf.up('panel'),'PT');}},
lcnde_t2_cuanecdet_preuniChange:function(txtf,newVal,oldVal,eopt){if(newVal*1!==oldVal*1){this.lcnde_t2Subtotal(txtf.up('panel'),'PU');}},
lcnde_tabSearchTabChange:function(tabP,newCard,oldCard,eopt){if(newCard.itemId=='tab02'){var _win=tabP.up('window'); var _rec=_win.down('#grdPBS').getSelectionModel().getSelection()[0]; if(!_rec){return false;}
	if(_rec.data.bs_codigo!==_win.down('#tab02').down('#bs_codigo').getValue()){
		_win.down('#tab02').down('#bs_key').setValue(_rec.data.bs_key);
		_win.down('#tab02').down('#bs_codigo').setValue(_rec.data.bs_codigo);
		_win.down('#tab02').down('#bs_nombre').setValue(_rec.data.bs_nombre);
		_win.down('#tab02').down('#unimed_nombre').setValue(_rec.data.unimed_nombre);
		_win.down('#tab02').down('#espedet_id').getStore().removeAll(); _win.down('#tab02').down('#espedet_id').getStore().load({ });
	}
}}
});