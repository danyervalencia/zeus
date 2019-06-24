Ext.define("Siace.controller.log.Neas_DetSAE",{extend:"Ext.app.Controller",views:["log.Neas_DetSAE"],
init:function(application){this.control({
"log_neadetsae":{activate:this.lndsa_Activate,beforerender:this.lndsa_BeforeRender},
"log_neadetsae #btnAccept":{click:this.lndsa_btnAcceptClick},"log_neadetsae #btnCancel":{click:this.lndsa_btnCancelClick},
"log_neadetsae #grdBTF":{itemdblclick:this.lndsa_grdBTFItemDblClick,selectionchange:this.lndsa_grdBTFSelectionchange},
"log_neadetsae #meta_id":{change:this.lndsa_meta_idChange},"log_neadetsae #tarea_key":{change:this.lndsa_tarea_keyChange}
});},
lndsa_Activate:function(comp,opt){
	/*if(comp.getFilt()){
		var _year=comp.getYear_id()*1; var _meta=comp.getMeta_id()*1; var _tarea=comp.getTarea_key(); _fuefin=comp.getFuefin_id()*1; var _area=comp.getArea_key(); comp.setFilt(false);
		fextbud_fuentes_financiamientoFilter({"panel":comp,"objeto":comp.down("#fuefin_idx"),"fuefin_id":_fuefin,"value":_fuefin,"disabled":(_fuefin>0?true:false)});
		fextpub_areasFilter({"objeto":comp.down("#area_keyx"),"filter":false,"type_record":"combo","no_usk":"NoT"});
		if(Ext.isEmpty(_tarea)){comp.setFiltTarea(true);fextbud_tareasParameters({"panel":comp});}
		else{fextbud_tareasFilter({"panel":comp,"tarea_key":_tarea,"type_record":"combo","value":_tarea,"disabled":true});}
		fextbud_metasFilter({"panel":comp,"meta_id":_meta,"year_id":_year,"type_record":"combo","value":_meta,"disabled":(_meta>0?true:false)});
	}*/
},
lndsa_BeforeRender:function(comp,opt){var _grd=comp.down("#grd"); var _pag=comp.down("#pag"); var _vs=fextpub_sessionVariables();
	fextpub_documentosFilter({"objeto":comp.down("#doc_id"),"type_query":"DONACION"});

	//var _str=Ext.create("Siace.store.log.Neas_DetWLNDSA"); _grd.bindStore(_str); _pag.bindStore(_str); _str.sort("bs_nombre","DESC");
	//_str.on("beforeload",function(str,oper,eOpt){comp.down("#btnAccept").disable(); var _prx=str.getProxy();
	//	_prx.setExtraParam("xxYear_id",comp.down("#year_id").getValue()); _prx.setExtraParam("xxDoc_id",comp.down("#doc_id").getValue()); _prx.setExtraParam("xxTablex_nro",comp.down("#tablex_nro").getValue());
		//_prx.setExtraParam("zzUsursess_key",_vs["us"]);_prx.setExtraParam("zzUsuracce_key",_vs["ua"]);_prx.setExtraParam("zzYear_id",_vs["y"]);_prx.setExtraParam("zzArea_key",_vs["a"]);_prx.setExtraParam("xxMenu_id",comp.getMenuId());
	//	_prx.setExtraParam("xxType_record","gridWLNDSA");_prx.setExtraParam("xxOrder_by",str.sorters.items[0].property+" "+str.sorters.items[0].direction); _prx.setExtraParam("xxPaginate",1);
	//});

	var _grdBTF=comp.down("#grdBTF");var _pagBTF=comp.down("#pagBTF"); 
	var _str=fext_CS("log.Donaciones_DetLNS");_grd.bindStore(_str);_pag.bindStore(_str);_str.sort("bs_nombre","ASC");
	_str.on("beforeload",function(str,oper,opt){var _prx=str.getProxy();
		//store.getProxy().setExtraParam("xxMeta_id",comp.down("#meta_id").getValue());store.getProxy().setExtraParam("xxTarea_key",comp.down("#tarea_key").getValue());store.getProxy().setExtraParam("xxFuefin_id",comp.down("#fuefin_idx").getValue());
		//store.getProxy().setExtraParam("zzUsursess_key",_vs["us"]); store.getProxy().setExtraParam("zzUsuracce_key",_vs["ua"]); store.getProxy().setExtraParam("zzYear_id",_vs["y"]); store.getProxy().setExtraParam("zzArea_key",_vs["a"]); store.getProxy().setExtraParam("ssNO_USK","NoT");
		_prx.setExtraParam("xxType_record","grdLNS");_prx.setExtraParam("xxPag",1);
	});
},
lndsa_btnAcceptClick:function(btn,e,opt){var _win=btn.up("window");var _grd=_win.down("#grd");var _close=true;var _rec=fext_grdSR(_grd);
	if(!_rec||(_rec.data.tareafte_key==_win.getCallKey())){ return false; }
	if(_win.getTypeReturn()=="ADD_EGRESOS"){
		if(fext_IE(_win.down("#area_keyx"))){ fext_MsgA("Debe indicar la Unidad Orgánica a la se afectará el Gasto Presupuestal");return false;}
		_close=fext_CC("bud.EgresosEdit").bee_grdBETFAdd(_win.getCallWindow(),_rec,{"area_key":_win.down("#area_keyx").getValue(),"area_abrev":_win.down("#area_keyx").getRawValue()});
		if(_close){_win.down("#btnAccept").disable();}
	}else{}
	if(_close){ _win.close(); if(_win.getActionDestroy()==true){ _win.destroy(); } }
},
lndsa_btnCancelClick:function(btn,e,opt){ var _win=btn.up("window"); _win.close(); if(_win.getActionDestroy()==true){ _win.destroy(); }},
//lndsa_fuefin_idxChange:function(combo,newValue,oldValue,opt){ this.lndsa_grdBTFStatus(combo.up("window")); },
lndsa_grdBTFItemDblClick:function(comp,rec,item,index,e,opt){ var _btnAccept=comp.up("window").down("#btnAccept"); _btnAccept.fireEvent("click",_btnAccept,e,opt); },
lndsa_grdBTFSelectionchange:function(model,record,opt){ if(record.length==1){ var _win=model.view.panel.up("window"); _win.down("#btnAccept").setDisabled(record[0].data.tareafte_key==_win.getCallKey()?true:false); }},
lndsa_grdBTFStatus:function(poComp){var _pag=poComp.down("#pagBTF");var _str=_pag.getStore(); 
	if(poComp.down("#meta_id").getValue()*1>0&&!Ext.isEmpty(poComp.down("#tarea_key").getValue())){ poComp.down("#grdBTF").getStore().load(); _pag.setDisabled(false);}
	else{fext_gridClean(_str,_pag); _pag.setDisabled(true);}
},
lndsa_meta_idChange:function(cbo,newVal,oldVal,opt){if(cbo.up("window").getFiltTarea()){fextbud_tareasLoad({pan:cbo.up("panel")});}this.lndsa_grdBTFStatus(cbo.up("window"));},
lndsa_tarea_keyChange:function(cbo,newVal,oldVal,opt){if(cbo.up("window").getFiltArea()){fextbud_tareas_areasLoadA({pan:cbo.up("panel")});}this.lndsa_grdBTFStatus(cbo.up("window"));}
});