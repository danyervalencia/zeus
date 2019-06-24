Ext.define('Siace.controller.log.Cuadro_Necesidades',{extend:'Ext.app.Controller',
lcn_Printer:function(poP){var _comp=poP["comp"]; var _grid=(poP["grid"]==undefined?"grdLP":poP['grid']); var _menu_id=(poP["menu_id"]==undefined?"0":poP["menu_id"]); var _opc_id=(poP["opc_id"]==undefined?"8":poP["opc_id"]); var _title=(poP["title"]==undefined?"2":poP["title"]);
	if(fextpub_uamoBtn(_comp.down("#opc_id"),_opc_id)){return false;}
	var _rec=_comp.down("#"+_grid).getSelectionModel().getSelection()[0]; if(!_rec){return false;}
	_title=(_title=="1"?_rec.data.ped_documento:(_title=="2"?_rec.data.doc_abrev+"/ "+_rec.data.ped_documento : "")); var _vs=fextpub_sessionVariables();
	fext_pdf('',_title,'php/pdf/pdf_logistics_pedidos_printer.php?xxPed_key='+_rec.data.ped_key+'&xxType_record=printer&zzUsursess_key='+_vs['us']+'&zzUsuracce_key='+_vs['ua']+'&zzYear_id='+_vs['y']+'&zzArea_key='+_vs['a']+"&xxMenu_id="+_menu_id+"&xxOpc_id="+_opc_id);
},
lcn_View:function(poP){var _comp=poP['comp']; var _type_edit=(poP['type_edit']==undefined?'0':poP['type_edit']); var _grid=(poP['grid']==undefined?'grdLCN':poP['grid']); var _menu_id=(poP["menu_id"]==undefined?"0":poP["menu_id"]); var _opc_id=(poP["opc_id"]==undefined?"":poP["opc_id"]); var _year_id=(poP['year_id']==undefined?"":poP['year_id']); var _call_store=(poP["call_store"]==undefined?true:poP["call_store"]); var _title=(poP["title"]==undefined?"2":poP["title"]); var _no_usk=(poP['no_usk']==undefined?"":poP['no_usk']);
	if(_opc_id!=""){if(fextpub_uamoBtn(_comp.down('#opc_id'),_opc_id)){return false;}}
	if(fjsIn_array(_type_edit,["2","3"])){var _rec=_comp.down("#"+_grid).getSelectionModel().getSelection()[0]; if(!_rec){return false;}}
	Ext.get(_comp.getEl()).mask(translations.mensaje_esperar,'loading');
	Siace.app.getController('log.Cuadro_NecesidadesEdit'); var _win=Ext.create('Siace.view.log.Cuadro_NecesidadesEdit'); _win.setTypeEdit(_type_edit); _win.setMenuId(_menu_id);
	if(_year_id!=""){_win.down('#year_id').setValue(_year_id);}
	if(_call_store){_win.setCallStore(_comp.down('#'+_grid).getStore());}
	if(fjsIn_array(_type_edit,['2','3'])){_win.setCallKey(_rec.data.cuanec_key);}
	_win.show(); Ext.get(_comp.getEl()).unmask();
},
});