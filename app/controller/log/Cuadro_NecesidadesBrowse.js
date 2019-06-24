Ext.define('Siace.controller.log.Cuadro_NecesidadesBrowse',{extend:'Ext.app.Controller',stores:['array.Years'],views:['log.Cuadro_NecesidadesBrowse'],
init:function(application){this.control({
'log_cuanecbrowse':{beforerender:this.lcnb_BeforeRender},'log_cuanecbrowse #panLCN #opc_id':{change:this.lcnb_plcn_opc_idChange},
'log_cuanecbrowse #panLCN #btnNew':{click:this.lcnb_plcn_btnNewClick},'log_cuanecbrowse #panLCN #btnModify':{click:this.lcnb_plcn_btnModifyClick},'log_cuanecbrowse #panLCN #btnQuery':{click:this.lcnb_plcn_btnQueryClick},'log_cuanecbrowse #panLCN #btnAnnular':{click:this.lcnb_plcn_btnAnnularClick},'log_cuanecbrowse #panLCN #btnPrinter':{click:this.lcnb_plcn_btnPrinterClick},
'log_cuanecbrowse #panLCN #area_key':{change:this.lcnb_plcn_area_keyChange},'log_cuanecbrowse #panLCN #fechaini':{change:this.lcnb_plcn_fechainiChange},'log_cuanecbrowse #panLCN #fechafin':{change:this.lcnb_plcn_fechafinChange},
'log_cuanecbrowse #panLCN #grdLCN':{cellclick:this.lcnb_plcn_grdLCNCellClick,selectionchange:this.lcnb_plcn_grdLCNSelectionChange},
'log_cuanecbrowse #panLCN #meta_id':{change:this.lcnb_plcn_meta_idChange},'log_cuanecbrowse #panLCN #cuanec_nro':{change:this.lcnb_plcn_cuanec_nroChange},'log_cuanecbrowse #panLCN #tarea_key':{change:this.lcnb_plcn_tarea_keyChange},'log_cuanecbrowse #panLCN #tipcuanec_id':{change:this.lcnb_plcn_tipcuanec_idChange},'log_cuanecbrowse #panLCN #year_id':{change:this.lcnb_plcn_year_idChange},
'log_cuanecbrowse #tabLCND':{activate:this.lcnb_tlcnd_Activate},'log_cuanecbrowse #tabLCND #btnNew':{click:this.lcnb_tlcnd_btnNewClick},
});},
lcnb_BeforeRender:function(comp,opt){var _menu_id=comp.getMenuId(); var _panLCN=comp.down('#panLCN'); var _tabLCND=comp.down('#tabLCND');
	var _grdLCN=_panLCN.down('#grdLCN'); var _pagLCN=_panLCN.down('#pagLCN');  var _tab=comp.down('#tab01'); var _vs=fextpub_sessionVariables(); var _me=this;
	fextpub_uamoPerm({'obj':_panLCN.down('#opc_id'),'menu_id':_menu_id});
	fextpub_tablas_generalesFilter({'objeto':_panLCN.down('#tipcuanec_id'),'tabgen_parent':'5070'});

	if(_menu_id=="5141"){
		//fextpub_yearsVisible(_panLCN.down('#year_id'), Ext.getCmp('ah_txtYear_id').getValue());
		fextpub_areasFilter({'objeto':_panLCN.down('#area_key'),'visible':false,'filter':true,'area_key':Ext.getCmp('ah_txtArea_key').getValue(),'no_usk':'NoT','add_blank':(_menu_id=='5141'?'NO':'')});
	}else if(_menu_id=='5137'){
		_tabLC.down('#menu_id').setValue(9999); _tabLO.down('#menu_id').setValue(9998);
		//fextpub_uamoPerm({'objeto':_tabLC.down('#opc_id'),'menu_id':_tabLC.down('#menu_id').getValue()});
		//fextpub_uamoPerm({'objeto':_tabLO.down('#opc_id'),'menu_id':_tabLO.down('#menu_id').getValue()});
		//_grdLCN.columns[12].hidden=true; _panLCN.down('#filter').setVisible(false); _panLCN.down('#fase_id').setVisible(false); _panLCN.down('#btnAdd').setVisible(false); _panLCN.down('#btnChange').setVisible(false);
		fextbud_metasParameters({'panel':_panLCN}); fextbud_tareasParameters({'panel':_panLCN}); fextpub_yearsVisible(_panLCN.down('#year_id'),Ext.getCmp('ah_txtYear_id').getValue()); fextpub_areasFilter({'objeto':_panLCN.down('#area_key'),'filter':false,'no_usk':'NoT'});
	}else{return false;}

	var _strLCND=Ext.create('Siace.store.log.Cuadro_Necesidades_DetBrowse'); var _grdLCND=_tabLCND.down('#grdLCND'); var _pagLCND=_tabLCND.down('#pagLCND');
	_grdLCND.bindStore(_strLCND); _pagLCND.bindStore(_strLCND); _strLCND.sort('cuanecdet_item','ASC');
	_strLCND.on('beforeload',function(str,oper,opt){ var _rec=_grdLCN.getSelectionModel().getSelection()[0]; var _prx=str.getProxy();
		_prx.setExtraParam('xxCuanec_key',_rec.data.cuanec_key);
		_prx.setExtraParam('xxType_record','gridLCNB'); _prx.setExtraParam('xxOrder_by',str.sorters.items[0].property+' '+str.sorters.items[0].direction); _prx.setExtraParam('xxPaginate','1');
	})

	var _strLCN=Ext.create('Siace.store.log.Cuadro_NecesidadesBrowse');
	_grdLCN.bindStore(_strLCN); _pagLCN.bindStore(_strLCN); _strLCN.sort('cuanec_fecha','DESC');
	_strLCN.on('beforeload',function(str,oper,eopt){_panLCN.down('#btnModify').disable(); _panLCN.down('#btnQuery').disable(); _panLCN.down('#btnAnnular').disable(); _me.lcnb_tabsClean(comp,true); var _prx=str.getProxy();
		_prx.setExtraParam('xxYear_id',_panLCN.down('#year_id').getValue()); _prx.setExtraParam('xxCuanec_nro',_panLCN.down('#cuanec_nro').getValue());
		_prx.setExtraParam('xxArea_key',(comp.getMenuId()=='5141'?(Ext.isEmpty(_panLCN.down('#area_key').getValue())?Ext.getCmp('ah_txtArea_key').getValue():_panLCN.down('#area_key').getValue()):_panLCN.down('#area_key').getValue()));
		//_prx.setExtraParam('xxFuefin_id', _panLCN.down('#fuefin_id').getValue());		
		_prx.setExtraParam('xxFechaini',_panLCN.down('#fechaini').getSubmitData()); _prx.setExtraParam('xxFechafin',_panLCN.down('#fechafin').getSubmitData());
		_prx.setExtraParam('zzUsursess_key',_vs['us']); _prx.setExtraParam('zzUsuracce_key',_vs['ua']); _prx.setExtraParam('zzYear_id',_vs['y']); _prx.setExtraParam('zzArea_key',_vs['a']); _prx.setExtraParam('xxMenu_id',comp.getMenuId());
		_prx.setExtraParam('xxType_record','grid'); _prx.setExtraParam('xxOrder_by',str.sorters.items[0].property+' '+str.sorters.items[0].direction);_prx.setExtraParam('xxPaginate','1');
	}); _strLCN.load();
},
lcnb_tabsActivate:function(poComp,poTab){if(!poComp.down("#grdLCN").getSelectionModel().getSelection()[0]){return false;} poTab.down("grid").getStore().load();},
lcnb_tabsClean:function(poComp,pbBool,pcFlga){var _mod=Ext.create('Siace.model.log.Cuadro_NecesidadWindow'); var _flga=(Ext.isEmpty(pcFlga)?0:pcFlga); 
	var _tabLCND=poComp.down('#tabLCND'); var _pagLCND=_tabLCND.down('#pagLCND'); var _strLCND=_pagLCND.getStore(); fext_gridClean(_strLCND,_pagLCND); _pagLCND.setDisabled(pbBool); _tabLCND.down('form').loadRecord(_mod);
	_tabLCND.down('#btnNew').setDisabled(pbBool==true||_flga=='98'?true:fextpub_uamoBtn(poComp.down("#panLCN").down('#opc_id'),1)); _tabLCND.down('#btnModify').disable(); _tabLCND.down('#btnDelete').disable();
},
lcnb_plcn_Clean:function(poComp){var _pag=poComp.down('#pagLCN'); var _str=_pag.getStore(); fext_gridClean(_str,_pag);
	poComp.down('#btnModify').disable(); poComp.down('#btnQuery').disable(); poComp.down('#btnAnnular').disable(); poComp.down('#btnPrinter').disable();
	this.lcnb_tabsClean(poComp.up("log_cuanecbrowse"),true);
},
lcnb_plcn_ViewEdit:function(poComp,pcTE){Siace.app.getController('log.Cuadro_Necesidades').lcn_View({"comp":poComp,"type_edit":pcTE,"menu_id":poComp.up("panel").getMenuId(),"opc_id":pcTE,"year_id":poComp.down('#year_id').getValue()});},
lcnb_plcn_opc_idChange:function(cbo,newVal,oldVal,opt){cbo.up('panel').down('#btnNew').setDisabled(fextpub_uamoBtn(cbo,1));},
lcnb_plcn_btnNewClick:function(btn,e,opt){this.lcnb_plcn_ViewEdit(btn.up('#panLCN'),'1');},
lcnb_plcn_btnModifyClick:function(btn,e,opt){this.lcnb_plcn_ViewEdit(btn.up('#panLCN'),'2');},
lcnb_plcn_btnQueryClick:function(btn,e,opt){this.lcnb_plcn_ViewEdit(btn.up('#panLCN'),'3');},
lcnb_plcn_btnAnnularClick:function(btn,e,opt){var _pan=btn.up("#panLCN"); if(fextpub_uamoBtn(_pan.down('#opc_id'),10)){return false;}
	if(opt==undefined){var _rec=_pan.down('#grdLCN').getSelectionModel().getSelection()[0]; if(!_rec){return false;}
		Ext.Msg.confirm('Confirmación','¿Esta Ud. seguro de ANULAR el Registro seleccionado?',function(b){if(b=='yes'){
			Siace.app.getController('pub.UsuariosPsw2'); var _win=Ext.create('Siace.view.pub.UsuariosPsw2');
			_win.setCallButton(btn); _win.setCallKey(_rec.data.ped_key); _win.down("#subtitle").setValue(_rec.data.doc_abrev+'/ '+_rec.data.ped_documento); _win.setFormType('10'); _win.show();
		}});
	}else{var _win=opt.win; var _str=_pan.down('#grdLCN').getStore(); var _menu_id=_pan.up("log_cuanecbrowse").getMenuId(); var _vs=fextpub_sessionVariables();
		Ext.get(_pan.getEl()).mask('Validando información... por favor espere un momento...','loading');			
		Ext.Ajax.request({url:'php/logistics_pedidos_delete.php',params:{xx0010:'YES',xxType_edit:'10',xxPed_key:opt.key,xxUsur_psw2:opt.usur_psw2,xxPed_observ:opt.observ,xxMenu_id:_menu_id,zzUsursess_key:_vs['us'],zzUsuracce_key:_vs['ua'],zzYear_id:_vs['y'],zzArea_key:_vs['a'],zzAlma_key:_vs['alma']},
			success:function(conn,resp,opt,eOpt){var _res=Siace.util.Util.decodeJSON(conn.responseText);
				if(_res.success){ _win.close(); _str.load({ callback:function(opt,success,respon){ Ext.get(_pan.getEl()).unmask(); } }); }
				else{ Ext.get(_pan.getEl()).unmask(); Siace.util.Util.showErrorMsg(_res.msg); }
			},failure:function(conn,resp,opt,eOpt){ Ext.get(_pan.getEl()).unmask(); Siace.util.Util.showErrorMsg(conn.responseText); }
		});
	}
},
lcnb_plcn_btnPrinterClick:function(btn,e,opt){},
lcnb_plcn_area_keyChange:function(cbo,newVal,oldVal,opt){this.lcnb_plcn_Clean(cbo.up('#panLCN'));},
lcnb_plcn_fechainiChange:function(datf,newVal,oldVal,opt){this.lcnb_plcn_Clean(datf.up('#panLCN'));},
lcnb_plcn_fechafinChange:function(datf,newVal,oldVal,opt){this.lcnb_plcn_Clean(datf.up('#panLCN'));},
lcnb_plcn_fuefin_idChange:function(cbo,newVal,oldVal,opt){if(oldVal!==undefined){ this.lcnb_plcn_Clean(cbo.up('#panLCN'));}},
lcnb_plcn_grdLCNCellClick:function(cell,td,cellI,rec,tr,rowI,e,opt){var _pan=cell.up("log_cuanecbrowse"); _pan.down("#tab01").getActiveTab().down("grid").getStore().load();},
lcnb_plcn_grdLCNSelectionChange:function(mod,rec,opt){if(rec.length==1){var _panLCN=mod.view.panel.up("#panLCN"); var _cboOI=_panLCN.down('#opc_id'); var _flga=rec[0].data.cuanec_flga;
	_panLCN.down("#btnModify").setDisabled(_flga=="98"?true:fextpub_uamoBtn(_cboOI,2));_panLCN.down("#btnQuery").setDisabled(_flga=="98"?true:fextpub_uamoBtn(_cboOI,3));_panLCN.down("#btnAnnular").setDisabled(_flga=="98"?true:fextpub_uamoBtn(_cboOI,10));
	this.lcnb_tabsClean(_panLCN.up("log_cuanecbrowse"),false,_flga); var _vs=fextpub_sessionVariables();
	Ext.Ajax.request({method:'POST', url:'php/logistics_cuadro_necesidades_json_records.php',
		params:{xxCuanec_key:rec[0].data.cuanec_key,xxType_record:'window_log',zzUsursess_key:_vs['us'],zzUsuracce_key:_vs['ua'],zzYear_id:_vs['y'],zzArea_key:_vs['a'],zzAlma_key:_vs['alma']},
		success:function(resp,opt){var _res=Siace.util.Util.decodeJSON(resp.responseText); var _mod=Ext.create('Siace.model.log.Cuadro_NecesidadWindow'); var _tabLCND=_panLCN.up('panel').down('#tabLCND');
			if(_res.success&&_res.data.length==1){_mod.set(_res.data[0]);}_tabLCND.down('form').loadRecord(_mod);
		}
	});
}},
lcnb_plcn_meta_idChange:function(cbo,newVal,oldVal,opt){if(oldVal!==undefined){fextbud_tareasATLoad({'panel':cbo.up('#panLCN')}); this.lcnb_plcn_Clean(cbo.up('#panLCN'));}},
lcnb_plcn_cuanec_nroChange:function(txtf,newVal,oldVal,opt){this.lcnb_plcn_Clean(txtf.up('#panLCN'));},
lcnb_plcn_tipcuanec_idChange:function(cbo,newVal,oldVal,opt){if(oldVal!==undefined){this.lcnb_plcn_Clean(cbo.up('#panLCN'));}},
lcnb_plcn_year_idChange:function(cbo,newVal,oldVal,opt){if(oldVal!==undefined){fextbud_tareasAMLoad({'panel':cbo.up('#panLCN')}); this.lcnb_plcn_Clean(cbo.up('#panLCN'));}},
lcnb_tlcnd_Activate:function(comp,opt){this.lcnb_tabsActivate(comp.up('log_cuanecbrowse'),comp);},
lcnb_tlcnd_btnNewClick:function(btn,e,opt){var _pan=btn.up('log_cuanecbrowse'); var _panLCN=_pan.down("#panLCN"); if(fextpub_uamoBtn(_panLCN.down('#opc_id'),1)){return false;} var _rec=_panLCN.down('#grdLCN').getSelectionModel().getSelection()[0]; if(!_rec){return false;}
	Ext.get(_pan.getEl()).mask('Por favor espere un momento...','loading'); Siace.app.getController('log.Cuadro_Necesidades_DetEdit');
	if(_pan.getCompLCNDE()==null){var _win=Ext.create('Siace.view.log.Cuadro_Necesidades_DetEdit'); _win.setCallWindow(_pan.down("#panLCND")); _win.setMenuId(_pan.getMenuId()); _win.setCallStore(_pan.down("#grdLCND").getStore()); _win.setIconCls('icon_Add_90'); _win.setTitle('Agregar Detalle en Cuadro de Necesidad ::.'); _pan.setCompLCNDE(_win); _win.show();}else{_pan.getCompLCNDE().show();}
	_win.down("#cuanec_key").setValue(_rec.data.cuanec_key); Ext.get(_pan.getEl()).unmask();
},
lcnb_tlcnd_btnAnnularClick:function(btn,e,opt){var _tabLC=btn.up("#tabLC"); if(fextpub_uamoBtn(_tabLC.down('#opc_id'),10)){return false;}
	if(opt==undefined){var _rec=_tabLC.down('#grdLC').getSelectionModel().getSelection()[0]; if(!_rec){return false;}
		Ext.Msg.confirm('Confirmación','¿Esta Ud. seguro de ANULAR el registro seleccionado?',function(b){ if(b=='yes'){Siace.app.getController('pub.UsuariosPsw2'); var _win=Ext.create('Siace.view.pub.UsuariosPsw2');
			_win.setCallButton(btn); _win.setCallKey(_rec.data.coti_key); _win.down("#subtitle").setValue(_rec.data.doc_abrev+'/ '+_rec.data.coti_documento); _win.setFormType('10'); _win.show();
		}});
	}else{var _win=opt.win; var _str=_tabLC.down('#grdLC').getStore(); var _menu_id=_tabLC.down('#menu_id').getValue(); var _vs=fextpub_sessionVariables();
		Ext.get(_tabLC.getEl()).mask('Validando información... por favor espere un momento...','loading');
		Ext.Ajax.request({url:'php/logistics_cotizaciones_delete.php',
			params:{xx0010:'YES',xxType_edit:'10',xxCoti_key:opt.key,xxUsur_psw2:opt.usur_psw2,xxCoti_observ:opt.observ,xxMenu_id:_menu_id,zzUsursess_key:_vs['us'],zzUsuracce_key:_vs['ua'],zzYear_id:_vs['y'],zzArea_key:_vs['a'],zzAlma_key:_vs['alma']},
			success:function(conn,resp,opt,eOpt){var _res=Siace.util.Util.decodeJSON(conn.responseText);
				if(_res.success){_win.close(); _str.load({callback:function(opt,succ,resp){Ext.get(_tabLC.getEl()).unmask();}});}
				else{Ext.get(_tabLC.getEl()).unmask(); Siace.util.Util.showErrorMsg(_res.msg);}
			},failure:function(conn,resp,opt,eOpt){Ext.get(_tabLC.getEl()).unmask(); Siace.util.Util.showErrorMsg(conn.responseText);}
		});
	}		
},
});