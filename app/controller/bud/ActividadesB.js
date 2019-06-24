Ext.define('Siace.controller.bud.ActividadesBrowse',{extend:'Ext.app.Controller',stores:['array.Years'],views:['bud.ActividadesBrowse'],
init:function(application){this.control({
'bud_activbrowse':{beforerender:this.bab_BeforeRender},'bud_activbrowse #panBA #opc_id':{change:this.bab_pba_opc_idChange},
'bud_activbrowse #panBA #btnNew':{click:this.bab_pba_btnNewClick},'bud_activbrowse #panBA #btnModify':{click:this.bab_pba_btnModifyClick},'bud_activbrowse #panBA #btnQuery':{click:this.bab_pba_btnQueryClick},'bud_activbrowse #panBA #btnDelete':{click:this.bab_pba_btnDeleteClick},'bud_activbrowse #panBA #btnPrinter':{click:this.bab_pba_btnPrinterClick},
'bud_activbrowse #panBA #grdBA':{cellclick:this.bab_pba_grdBACellClick,selectionchange:this.bab_pba_grdBASelectionChange},
'bud_activbrowse #panBA #area_key':{change:this.bab_pba_area_keyChange},'bud_activbrowse #panBA #tipactiv_id':{change:this.bab_pba_tipactiv_idChange},'bud_activbrowse #panBA #year_id':{change:this.bab_pba_year_idChange},
'bud_activbrowse #tabBAT':{activate:this.bab_tbat_Activate},'bud_activbrowse #tabBAT #grdBAT':{cellclick:this.bab_tbat_grdBATCellClick,selectionchange:this.bab_tbat_grdBATSelectionChange},'bud_activbrowse #tabBAT #btnNew':{click:this.bab_tbat_btnNewClick},'bud_activbrowse #tabBAT #btnModify':{click:this.bab_tbat_btnModifyClick},'bud_activbrowse #tabBAT #btnQuery':{click:this.bab_tbat_btnQueryClick},'bud_activbrowse #tabBAT #btnDelete':{click:this.bab_tbat_btnDeleteClick},
'bud_activbrowse #tabLCN':{activate:this.bab_tlcn_Activate},'bud_activbrowse #tabLCN #grdLCND':{selectionchange:this.bab_tlcn_grdLCNDSelectionChange},'bud_activbrowse #tabLCN #btnNew':{click:this.bab_tlcn_btnNewClick},'bud_activbrowse #tabLCN #btnModify':{click:this.bab_tlcn_btnModifyClick},'bud_activbrowse #tabLCN #btnQuery':{click:this.bab_tlcn_btnQueryClick},'bud_activbrowse #tabLCN #btnDelete':{click:this.bab_tlcn_btnDeleteClick}
});},
bab_BeforeRender:function(comp,opt){var _menu_id=comp.getMenuId(); var _panBA=comp.down('#panBA'); var _tabBAT=comp.down('#tabBAT'); var _tabLCN=comp.down('#tabLCN'); var _tab=comp.down('#tab01');  var _grdBA=_panBA.down('#grdBA'); var _pagBA=_panBA.down('#pagBA'); var _grdBAT=_tabBAT.down('#grdBAT'); var _vs=fextpub_sessionVariables(); var _me=this;
	fextpub_uamoPerm({'obj':_panBA.down('#opc_id'),'menu_id':_menu_id}); fextpub_uamoPerm({'obj':_tabBAT.down('#opc_id'),'menu_id':_tabBAT.down('#menu_id').getValue()}); fextpub_uamoPerm({'obj':_tabLCN.down('#opc_id'),'menu_id':_tabLCN.down('#menu_id').getValue()});
	fextpub_tablas_generalesFilter({'objeto':_panBA.down('#tipactiv_id'),'tabgen_parent':'2070'}); fextpub_yearsValue(_panBA.down('#year_id'),0);

	if(_menu_id=="5141"){		
		fextpub_areasFilter({'objeto':_panBA.down('#area_key'),'visible':false,'filter':true,'area_key':Ext.getCmp('ah_txtArea_key').getValue(),'no_usk':'NoT','add_blank':(_menu_id=='5141'?'NO':'')});
	}else if(_menu_id=='2130'){
		fextpub_areasFilter({'objeto':_panBA.down('#area_key'),'filter':false,'no_usk':'NoT','menu_id':_menu_id});
	}else{return false;}

	var _strBAT=Ext.create('Siace.store.bud.Actividades_TareasBAB'); var _grdBAT=_tabBAT.down('#grdBAT'); var _pagBAT=_tabBAT.down('#pagBAT');
	_grdBAT.bindStore(_strBAT); _pagBAT.bindStore(_strBAT); _strBAT.sort('activtarea_nombre','ASC');
	_strBAT.on('beforeload',function(str,oper,opt){_tabBAT.down('#btnModify').disable(); _tabBAT.down('#btnQuery').disable(); _tabBAT.down('#btnDelete').disable(); _me.bab_tabLCNClean(_tabLCN,false,true); _tabLCN.down("#activtarea_nombre").setValue(""); var _rec=_grdBA.getSelectionModel().getSelection()[0]; var _prx=str.getProxy();
		_prx.setExtraParam('xxActiv_key',_rec.data.activ_key);
		_prx.setExtraParam('xxType_record','gridBAB'); _prx.setExtraParam('xxOrder_by',str.sorters.items[0].property+' '+str.sorters.items[0].direction); _prx.setExtraParam('xxPaginate','1');
	});

	var _strLCND=Ext.create('Siace.store.log.Cuadro_Necesidades_DetBAB'); var _grdLCND=_tabLCN.down('#grdLCND'); var _pagLCND=_tabLCN.down('#pagLCND');
	_grdLCND.bindStore(_strLCND); _pagLCND.bindStore(_strLCND); _strLCND.sort('cuanecdet_item','ASC');
	_strLCND.on('beforeload',function(str,oper,opt){_tabLCN.down('#btnModify').disable(); _tabLCN.down('#btnQuery').disable(); _tabLCN.down('#btnDelete').disable(); var _rec=_grdBAT.getSelectionModel().getSelection()[0]; var _prx=str.getProxy();
		_prx.setExtraParam('xxActivtarea_key',_rec.data.activtarea_key);
		_prx.setExtraParam('xxType_record','gridBAB'); _prx.setExtraParam('xxOrder_by',str.sorters.items[0].property+' '+str.sorters.items[0].direction); _prx.setExtraParam('xxPaginate','1');
	});

	var _strBA=Ext.create('Siace.store.bud.ActividadesBrowse'); _grdBA.bindStore(_strBA); _pagBA.bindStore(_strBA); _strBA.sort('activ_nombre','ASC');
	_strBA.on('beforeload',function(str,oper,eopt){_panBA.down('#btnModify').disable(); _panBA.down('#btnQuery').disable(); _panBA.down('#btnDelete').disable(); _me.bab_tabBATClean(_tabBAT,true); _me.bab_tabLCNClean(_tabLCN,true,true); var _prx=str.getProxy(); var _area=_panBA.down('#area_key').getValue();
		_prx.setExtraParam('xxYear_id',_panBA.down('#year_id').getValue());_prx.setExtraParam('xxArea_key',(_menu_id=='5141'?(Ext.isEmpty(_area)?Ext.getCmp('ah_txtArea_key').getValue():_area):_area));_prx.setExtraParam('xxTipactiv_id', _panBA.down('#tipactiv_id').getValue());_prx.setExtraParam('ssNO_YEAR','NoT');
		_prx.setExtraParam('zzUsursess_key',_vs['us']); _prx.setExtraParam('zzUsuracce_key',_vs['ua']); _prx.setExtraParam('zzYear_id',_vs['y']); _prx.setExtraParam('zzArea_key',_vs['a']); _prx.setExtraParam('xxMenu_id',comp.getMenuId());
		_prx.setExtraParam('xxType_record','grid'); _prx.setExtraParam('xxOrder_by',str.sorters.items[0].property+' '+str.sorters.items[0].direction);_prx.setExtraParam('xxPaginate','1');
	}); _strBA.load();
},
bab_tabsActivate:function(poComp,poTab){
	if(poTab.itemId=="tabBAT"){if(!poComp.down("#grdBA").getSelectionModel().getSelection()[0]){return false;} poTab.down("grid").getStore().load();}
	else{if(!poComp.down("#grdBAT").getSelectionModel().getSelection()[0]){return false;} poTab.down("grid").getStore().load();}
},
bab_tabBATClean:function(poComp,pbBool){var _mod=Ext.create('Siace.model.bud.ActividadWindow'); var _pagBAT=poComp.down('#pagBAT'); var _strBAT=_pagBAT.getStore(); fext_gridClean(_strBAT,_pagBAT); _pagBAT.setDisabled(pbBool); poComp.down('form').loadRecord(_mod);
	poComp.down('#btnNew').setDisabled(pbBool==true?true:fextpub_uamoBtn(poComp.down('#opc_id'),1)); poComp.down('#btnModify').disable(); poComp.down('#btnQuery').disable(); poComp.down('#btnDelete').disable();
},
bab_tabLCNClean:function(poComp,pbHead,pbBool){var _mod=Ext.create('Siace.model.bud.ActividadWindow'); var _pagLCND=poComp.down('#pagLCND'); var _strLCND=_pagLCND.getStore(); fext_gridClean(_strLCND,_pagLCND); _pagLCND.setDisabled(pbBool); if(pbHead==true){poComp.down('form').loadRecord(_mod); poComp.down('#activtarea_nombre').setValue("");}
	poComp.down('#btnNew').setDisabled(pbBool==true?true:fextpub_uamoBtn(poComp.down('#opc_id'),1)); poComp.down('#btnModify').disable(); poComp.down('#btnQuery').disable(); poComp.down('#btnDelete').disable();
},
bab_pba_Clean:function(poComp){var _pag=poComp.down('#pagBA'); var _str=_pag.getStore(); fext_gridClean(_str,_pag);
	poComp.down('#btnModify').disable(); poComp.down('#btnQuery').disable(); poComp.down('#btnDelete').disable(); poComp.down('#btnPrinter').disable();
	this.bab_tabBATClean(poComp.up("bud_activbrowse").down("#tabBAT"),true); this.bab_tabLCNClean(poComp.up("bud_activbrowse").down("#tabLCN"),true,true);
},
bab_pba_ViewEdit:function(poComp,pcTE){Siace.app.getController('log.Cuadro_Necesidades').lcn_View({"comp":poComp,"type_edit":pcTE,"menu_id":poComp.up("panel").getMenuId(),"opc_id":pcTE,"year_id":poComp.down('#year_id').getValue()});},
bab_pba_opc_idChange:function(cbo,newVal,oldVal,opt){cbo.up('panel').down('#btnNew').setDisabled(fextpub_uamoBtn(cbo,1));},
bab_pba_btnNewClick:function(btn,e,opt){this.bab_pba_ViewEdit(btn.up('#panBA'),'1');},
bab_pba_btnModifyClick:function(btn,e,opt){this.bab_pba_ViewEdit(btn.up('#panBA'),'2');},
bab_pba_btnQueryClick:function(btn,e,opt){this.bab_pba_ViewEdit(btn.up('#panBA'),'3');},
bab_pba_btnDeleteClick:function(btn,e,opt){var _pan=btn.up("#panBA"); if(fextpub_uamoBtn(_pan.down('#opc_id'),10)){return false;}
	if(opt==undefined){var _rec=_pan.down('#grdLCN').getSelectionModel().getSelection()[0]; if(!_rec){return false;}
		Ext.Msg.confirm('Confirmación','¿Esta Ud. seguro de ANULAR el Registro seleccionado?',function(b){if(b=='yes'){
			Siace.app.getController('pub.UsuariosPsw2'); var _win=Ext.create('Siace.view.pub.UsuariosPsw2');
			_win.setCallButton(btn); _win.setCallKey(_rec.data.ped_key); _win.down("#subtitle").setValue(_rec.data.doc_abrev+'/ '+_rec.data.ped_documento); _win.setFormType('10'); _win.show();
		}});
	}else{var _win=opt.win; var _str=_pan.down('#grdLCN').getStore(); var _menu_id=_pan.up("bud_activbrowse").getMenuId(); var _vs=fextpub_sessionVariables();
		Ext.get(_pan.getEl()).mask('Validando información... por favor espere un momento...','loading');			
		Ext.Ajax.request({url:'php/logistics_pedidos_delete.php',params:{xx0010:'YES',xxType_edit:'10',xxPed_key:opt.key,xxUsur_psw2:opt.usur_psw2,xxPed_observ:opt.observ,xxMenu_id:_menu_id,zzUsursess_key:_vs['us'],zzUsuracce_key:_vs['ua'],zzYear_id:_vs['y'],zzArea_key:_vs['a'],zzAlma_key:_vs['alma']},
			success:function(conn,resp,opt,eOpt){var _res=Siace.util.Util.decodeJSON(conn.responseText);
				if(_res.success){ _win.close(); _str.load({ callback:function(opt,success,respon){ Ext.get(_pan.getEl()).unmask(); } }); }
				else{ Ext.get(_pan.getEl()).unmask(); Siace.util.Util.showErrorMsg(_res.msg); }
			},failure:function(conn,resp,opt,eOpt){ Ext.get(_pan.getEl()).unmask(); Siace.util.Util.showErrorMsg(conn.responseText); }
		});
	}
},
bab_pba_btnPrinterClick:function(btn,e,opt){},
bab_pba_area_keyChange:function(cbo,newVal,oldVal,opt){this.bab_pba_Clean(cbo.up('#panBA'));},
bab_pba_grdBACellClick:function(cell,td,cellI,rec,tr,rowI,e,opt){var _pan=cell.up("bud_activbrowse"); var _tab=_pan.down("#tab01").getActiveTab(); if(_tab.itemId=="tabBAT"){_tab.down("grid").getStore().load();}},
bab_pba_grdBASelectionChange:function(mod,rec,opt){if(rec.length==1){var _panBA=mod.view.panel.up("#panBA"); var _cboOI=_panBA.down('#opc_id'); var _pan=_panBA.up("bud_activbrowse"); var _tabBAT=_pan.down('#tabBAT'); var _tabLCN=_pan.down('#tabLCN');
	_panBA.down("#btnModify").setDisabled(fextpub_uamoBtn(_cboOI,2));_panBA.down("#btnQuery").setDisabled(fextpub_uamoBtn(_cboOI,3));_panBA.down("#btnDelete").setDisabled(fextpub_uamoBtn(_cboOI,7));
	this.bab_tabBATClean(_tabBAT,false); this.bab_tabLCNClean(_tabLCN,false,true); var _vs=fextpub_sessionVariables();
	Ext.Ajax.request({method:'POST', url:'php/budget_actividades_json_records.php',params:{xxActiv_key:rec[0].data.activ_key,ssNO_YEAR:'NoT',ssNO_USK:'NoT',xxType_record:'window_log',zzUsursess_key:_vs['us'],zzUsuracce_key:_vs['ua'],zzYear_id:_vs['y'],zzArea_key:_vs['a'],zzAlma_key:_vs['alma']},
		success:function(resp,opt){var _res=Siace.util.Util.decodeJSON(resp.responseText); var _mod=Ext.create('Siace.model.bud.ActividadWindow');
			if(_res.success&&_res.data.length==1){_mod.set(_res.data[0]);}_tabBAT.down('form').loadRecord(_mod);_tabLCN.down('form').loadRecord(_mod);_tabLCN.down('#activtarea_nombre').setValue("");
		}
	});
}},
bab_pba_tipactiv_idChange:function(cbo,newVal,oldVal,opt){if(oldVal!==undefined){this.bab_pba_Clean(cbo.up('#panBA'));}},
bab_pba_year_idChange:function(cbo,newVal,oldVal,opt){if(oldVal!==undefined){this.bab_pba_Clean(cbo.up('#panBA'));}},
bab_tbat_Activate:function(comp,opt){}, //this.bab_tabsActivate(comp.up('bud_activbrowse'),comp);
bab_tbat_ViewEdit:function(poComp,pcTE){if(fextpub_uamoBtn(poComp.down('#opc_id'),pcTE)){return false;}
	var _recBA=poComp.up('bud_activbrowse').down('#grdBA').getSelectionModel().getSelection()[0]; if(!_recBA){return false;}
	if(fjsIn_array(pcTE,['2','3'])){var _rec=poComp.down('#grdBAT').getSelectionModel().getSelection()[0]; if(!_rec){return false;}}
	Siace.app.getController('bud.Actividades_TareasEdit'); var _win=Ext.create('Siace.view.bud.Actividades_TareasEdit');
	_win.setTypeEdit(pcTE); _win.setCallStore(poComp.down('#grdBAT').getStore()); _win.setMenuId(poComp.down('#menu_id').getValue()); _win.down('#activ_key').setValue(_recBA.data.activ_key); 
	if(fjsIn_array(pcTE,['2','3'])){_win.setCallKey(_rec.data.activtarea_key);} _win.show();
},
bab_tbat_grdBATCellClick:function(cell,td,cellI,rec,tr,rowI,e,opt){},
bab_tbat_grdBATSelectionChange:function(mod,rec,opt){if(rec.length==1){var _tabBAT=mod.view.panel.up("#tabBAT"); var _cboOI=_tabBAT.down('#opc_id'); var _tabLCN=mod.view.panel.up("bud_activbrowse").down("#tabLCN");
	_tabBAT.down("#btnModify").setDisabled(fextpub_uamoBtn(_cboOI,2));_tabBAT.down("#btnQuery").setDisabled(fextpub_uamoBtn(_cboOI,3));_tabBAT.down("#btnDelete").setDisabled(fextpub_uamoBtn(_cboOI,7));
	this.bab_tabLCNClean(_tabLCN,false,false); _tabLCN.down("#activtarea_nombre").setValue(rec[0].data.activtarea_nombre);
}},
bab_tbat_btnNewClick:function(btn,e,opt){this.bab_tbat_ViewEdit(btn.up('#tabBAT'),'1');},
bab_tbat_btnModifyClick:function(btn,e,opt){this.bab_tbat_ViewEdit(btn.up('#tabBAT'),'2');},
bab_tbat_btnQueryClick:function(btn,e,opt){this.bab_tbat_ViewEdit(btn.up('#tabBAT'),'3');},
bab_tbat_btnDeleteClick:function(btn,e,opt){var _tabBAT=btn.up("#tabBAT"); if(fextpub_uamoBtn(_tabBAT.down('#opc_id'),7)){return false;}
	//var _recBAT=btn.up("bud_activbrowse").down('#grdBAT').getSelectionModel().getSelection()[0]; if(!_recBAT){return false;}
	var _rec=_tabBAT.down('#grdBAT').getSelectionModel().getSelection()[0]; if(!_rec){return false;}
	Ext.Msg.confirm('Confirmación','¿Esta Ud. seguro de ELIMINAR la Tarea - POI seleccionada?',function(b){if(b=='yes'){var _str=_tabBAT.down('#grdBAT').getStore(); var _menu_id=_tabBAT.down('#menu_id').getValue(); var _vs=fextpub_sessionVariables(); Ext.get(_tabBAT.getEl()).mask('Validando información... por favor espere un momento...','loading');
		Ext.Ajax.request({url:'php/budget_actividades_tareas_delete.php',params:{xx0007:'YES',xxType_edit:'7',xxActivtarea_key:_rec.data.activtarea_key,xxMenu_id:_menu_id,zzUsursess_key:_vs['us'],zzUsuracce_key:_vs['ua'],zzYear_id:_vs['y'],zzArea_key:_vs['a'],zzAlma_key:_vs['alma']},
			success:function(conn,resp,opt,eOpt){var _res=Siace.util.Util.decodeJSON(conn.responseText);
				if(_res.success){_str.load({callback:function(opt,succ,resp){Ext.get(_tabBAT.getEl()).unmask();}});}
				else{Ext.get(_tabBAT.getEl()).unmask(); Siace.util.Util.showErrorMsg(_res.msg);}
			},failure:function(conn,resp,opt,eOpt){Ext.get(_tabBAT.getEl()).unmask(); Siace.util.Util.showErrorMsg(conn.responseText);}
		});
	}});
},
bab_tlcn_Activate:function(comp,opt){this.bab_tabsActivate(comp.up('bud_activbrowse'),comp);},
bab_tlcn_grdLCNDSelectionChange:function(mod,rec,opt){if(rec.length==1){var _tabLCN=mod.view.panel.up("#tabLCN"); var _cboOI=_tabLCN.down('#opc_id');
	_tabLCN.down("#btnModify").setDisabled(fextpub_uamoBtn(_cboOI,2));_tabLCN.down("#btnQuery").setDisabled(fextpub_uamoBtn(_cboOI,3));_tabLCN.down("#btnDelete").setDisabled(fextpub_uamoBtn(_cboOI,7));
}},
bab_tlcn_ViewEdit:function(poComp,pcTE){if(fextpub_uamoBtn(poComp.down('#opc_id'),pcTE)){return false;} var _pan=poComp.up('bud_activbrowse');
	var _recBAT=_pan.down('#grdBAT').getSelectionModel().getSelection()[0]; if(!_recBAT){return false;}
	if(fjsIn_array(pcTE,['2','3'])){var _rec=poComp.down('#grdLCND').getSelectionModel().getSelection()[0]; if(!_rec){return false;}}
	//if(_pan.getCompLCNDE()==null){var _win=Ext.create('Siace.view.log.Cuadro_Necesidades_DetEdit'); _win.setCallWindow(_tabLCN); _win.setMenuId(_tabLCN.down("#menu_id").getValue()); _win.setCallStore(_tabLCN.down("#grdLCND").getStore()); _win.setIconCls('icon_Add_90'); _win.setTitle('Agregar Detalle en Cuadro de Necesidad ::.'); _pan.setCompLCNDE(_win); _win.show();}else{var _win=_pan.getCompLCNDE(); _win.show();}
	Siace.app.getController('log.Cuadro_Necesidades_DetEdit');
	var _win=Ext.create('Siace.view.log.Cuadro_Necesidades_DetEdit'); _win.setCallWindow(poComp); _win.setMenuId(poComp.down("#menu_id").getValue()); _win.setTypeEdit(pcTE); _win.setCallStore(poComp.down("#grdLCND").getStore()); _pan.setCompLCNDE(_win);	
	if(fjsIn_array(pcTE,['2','3'])){_win.setCallKey(_rec.data.cuanecdet_key);} _win.down("#activtarea_key").setValue(_recBAT.data.activtarea_key); Ext.get(_pan.getEl()).unmask(); _win.show();
},

bab_tlcn_btnNewClick:function(btn,e,opt){this.bab_tlcn_ViewEdit(btn.up('#tabLCN'),'1');},
bab_tlcn_btnModifyClick:function(btn,e,opt){this.bab_tlcn_ViewEdit(btn.up('#tabLCN'),'2');},
bab_tlcn_btnQueryClick:function(btn,e,opt){this.bab_tlcn_ViewEdit(btn.up('#tabLCN'),'3');},
bab_tlcn_btnDeleteClick:function(btn,e,opt){var _tabLCN=btn.up("#tabLCN"); if(fextpub_uamoBtn(_tabLCN.down('#opc_id'),7)){return false;}
	var _recBAT=btn.up("bud_activbrowse").down('#grdBAT').getSelectionModel().getSelection()[0]; if(!_recBAT){return false;}
	var _rec=_tabLCN.down('#grdLCND').getSelectionModel().getSelection()[0]; if(!_rec){return false;}
	Ext.Msg.confirm('Confirmación','¿Esta Ud. seguro de ELIMINAR el registro seleccionado?',function(b){if(b=='yes'){var _str=_tabLCN.down('#grdLCND').getStore(); var _menu_id=_tabLCN.down('#menu_id').getValue(); var _vs=fextpub_sessionVariables(); Ext.get(_tabLCN.getEl()).mask('Validando información... por favor espere un momento...','loading');
		Ext.Ajax.request({url:'php/logistics_cuadro_necesidades_det_delete.php',params:{xx0007:'YES',xxType_edit:'7',xxCuanecdet_key:_rec.data.cuanecdet_key,xxMenu_id:_menu_id,zzUsursess_key:_vs['us'],zzUsuracce_key:_vs['ua'],zzYear_id:_vs['y'],zzArea_key:_vs['a'],zzAlma_key:_vs['alma']},
			success:function(conn,resp,opt,eOpt){var _res=Siace.util.Util.decodeJSON(conn.responseText);
				if(_res.success){_str.load({callback:function(opt,succ,resp){Ext.get(_tabLCN.getEl()).unmask();}});}
				else{Ext.get(_tabLCN.getEl()).unmask(); Siace.util.Util.showErrorMsg(_res.msg);}
			},failure:function(conn,resp,opt,eOpt){Ext.get(_tabLCN.getEl()).unmask(); Siace.util.Util.showErrorMsg(conn.responseText);}
		});
	}});
}
});