Ext.define('Siace.controller.log.Neas_DetSearchAdd',{extend:'Ext.app.Controller',stores:['array.YearsAB','array.DocNeaDetAB'],views:['log.Neas_DetSearchAdd'],
init:function(application){this.control({
'log_neadetsearchadd':{activate:this.lndsa_Activate,beforerender:this.lndsa_BeforeRender},
'log_neadetsearchadd #btnAccept':{click:this.lndsa_btnAcceptClick},'log_neadetsearchadd #btnCancel':{click:this.lndsa_btnCancelClick},
'log_neadetsearchadd #grdBTF':{itemdblclick:this.lndsa_grdBTFItemDblClick,selectionchange:this.lndsa_grdBTFSelectionchange},
'log_neadetsearchadd #meta_id':{change:this.lndsa_meta_idChange},'log_neadetsearchadd #tarea_key':{change:this.lndsa_tarea_keyChange}
});},
lndsa_Activate:function(comp,options){
	/*if(comp.getFilt()){
		var _year=comp.getYear_id()*1; var _meta=comp.getMeta_id()*1; var _tarea=comp.getTarea_key(); _fuefin=comp.getFuefin_id()*1; var _area=comp.getArea_key(); comp.setFilt(false);
		fextbud_fuentes_financiamientoFilter({'panel':comp,'objeto':comp.down('#fuefin_idx'),'fuefin_id':_fuefin,'value':_fuefin,'disabled':(_fuefin>0?true:false)});
		fextpub_areasFilter({'objeto':comp.down('#area_keyx'),'filter':false,'type_record':'combo','no_usk':'NoT'});
		if(Ext.isEmpty(_tarea)){comp.setFiltTarea(true);fextbud_tareasParameters({'panel':comp});}
		else{fextbud_tareasFilter({'panel':comp,'tarea_key':_tarea,'type_record':'combo','value':_tarea,'disabled':true});}
		fextbud_metasFilter({'panel':comp,'meta_id':_meta,'year_id':_year,'type_record':'combo','value':_meta,'disabled':(_meta>0?true:false)});
	}*/
},
lndsa_BeforeRender:function(comp,options){var _grd=comp.down("#grdTX"); var _pag=comp.down("#pagTX");
	fextpub_yearsFilter({"objeto":comp.down("#year_id"),"type_query":"all_estado"});

	var _str=Ext.create("Siace.store.log.Neas_DetWLNDSA"); _grd.bindStore(_str); _pag.bindStore(_str); _str.sort("bs_nombre","DESC");
	_str.on('beforeload',function(str,oper,eOpt){comp.down('#btnAccept').disable(); var _prx=str.getProxy();
		_prx.setExtraParam("xxYear_id",comp.down("#year_id").getValue()); _prx.setExtraParam("xxDoc_id",comp.down("#doc_id").getValue()); _prx.setExtraParam("xxTablex_nro",comp.down("#tablex_nro").getValue());
		//_prx.setExtraParam("zzUsursess_key",_vs['us']);_prx.setExtraParam('zzUsuracce_key',_vs['ua']);_prx.setExtraParam('zzYear_id',_vs['y']);_prx.setExtraParam('zzArea_key',_vs['a']);_prx.setExtraParam('xxMenu_id',comp.getMenuId());
		_prx.setExtraParam("xxType_record","gridWLNDSA");_prx.setExtraParam("xxOrder_by",str.sorters.items[0].property+" "+str.sorters.items[0].direction); _prx.setExtraParam("xxPaginate",1);
	});

	/*var _grdBTF=comp.down('#grdBTF'); var _pagBTF=comp.down('#pagBTF'); var _vs=fextpub_sessionVariables();
	var _strBTFSB=Ext.create('Siace.store.bud.Tareas_FftredSearchBalances'); _grdBTF.bindStore(_strBTFSB); _pagBTF.bindStore(_strBTFSB); _strBTFSB.sort('espedet_codigo','ASC');
	_strBTFSB.on('beforeload',function(store,operations,eOpts){
		store.getProxy().setExtraParam('xxMeta_id',comp.down('#meta_id').getValue());store.getProxy().setExtraParam('xxTarea_key',comp.down('#tarea_key').getValue());store.getProxy().setExtraParam('xxFuefin_id',comp.down('#fuefin_idx').getValue());
		store.getProxy().setExtraParam('zzUsursess_key',_vs['us']); store.getProxy().setExtraParam('zzUsuracce_key',_vs['ua']); store.getProxy().setExtraParam('zzYear_id',_vs['y']); store.getProxy().setExtraParam('zzArea_key',_vs['a']); store.getProxy().setExtraParam('ssNO_USK','NoT');
		store.getProxy().setExtraParam('xxType_record','grid_searchbalances');store.getProxy().setExtraParam('xxOrder_by',store.sorters.items[0].property+' '+store.sorters.items[0].direction); store.getProxy().setExtraParam('xxPaginate','1');
	}); */
},
lndsa_btnAcceptClick:function(button,e,options){
	var _win=button.up('window'); var _grd=_win.down('#grdBTF'); var _close=true; var _rec=_grd.getSelectionModel().getSelection()[0];
	if(!_rec||(_rec.data.tareafte_key==_win.getCallKey())){ return false; }
	if(_win.getTypeReturn()=='ADD_EGRESOS'){
		if(Ext.isEmpty(_win.down("#area_keyx").getValue())){ Ext.Msg.alert(translations.mensaje,'Debe indicar la Unidad Orgánica a la se afectará el Gasto Presupuestal',function(){}); return false; }
		_close=Siace.app.getController('bud.EgresosEdit').bee_grdBETFAdd(_win.getCallWindow(),_rec,{'area_key':_win.down('#area_keyx').getValue(),'area_abrev':_win.down('#area_keyx').getRawValue()});
		if(_close){_win.down('#btnAccept').disable();}
	}else{}
	if(_close){ _win.close(); if(_win.getActionDestroy()==true){ _win.destroy(); } }
},
lndsa_btnCancelClick:function(button,e,options){ var _win=button.up('window'); _win.close(); if(_win.getActionDestroy()==true){ _win.destroy(); }},
//lndsa_fuefin_idxChange:function(combo,newValue,oldValue,options){ this.lndsa_grdBTFStatus(combo.up('window')); },
lndsa_grdBTFItemDblClick:function(component,record,item,index,e,options){ var _btnAccept=component.up('window').down('#btnAccept'); _btnAccept.fireEvent('click',_btnAccept,e,options); },
lndsa_grdBTFSelectionchange:function(model,record,options){ if(record.length==1){ var _win=model.view.panel.up('window'); _win.down('#btnAccept').setDisabled(record[0].data.tareafte_key==_win.getCallKey()?true:false); }},
lndsa_grdBTFStatus:function(poComp){
	var _pagBTF=poComp.down('#pagBTF'); var _strBTFSB=_pagBTF.getStore(); 
	if(poComp.down("#meta_id").getValue()*1>0&&!Ext.isEmpty(poComp.down("#tarea_key").getValue())){ poComp.down("#grdBTF").getStore().load(); _pagBTF.setDisabled(false);}
	else{fext_gridClean(_strBTFSB,_pagBTF); _pagBTF.setDisabled(true);}
},
lndsa_meta_idChange:function(combo,newValue,oldValue,options){ if(combo.up('window').getFiltTarea()){ fextbud_tareasLoad({'panel':combo.up('panel')}); } this.lndsa_grdBTFStatus(combo.up('window')); },
lndsa_tarea_keyChange:function(combo,newValue,oldValue,options){ if(combo.up('window').getFiltArea()){ fextbud_tareas_areasLoadA({'panel':combo.up('panel')}); } this.lndsa_grdBTFStatus(combo.up('window')); }
});