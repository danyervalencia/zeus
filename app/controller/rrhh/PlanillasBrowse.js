Ext.define('Siace.controller.rrhh.PlanillasBrowse',{extend:'Ext.app.Controller',stores:['array.Years'],views:['rrhh.PlanillasBrowse'],
init:function(application) {
this.control({
	'rrhh_planillasbrowse':{beforerender:this.rpb_BeforeRender},
	'rrhh_planillasbrowse #panLO #opc_id':{change:this.rpb_prp_opc_idChange},
	'rrhh_planillasbrowse #panLO #btnNew':{click:this.rpb_prp_btnNewClick},
	'rrhh_planillasbrowse #panLO #btnModify':{click:this.rpb_prp_btnModifyClick},
	'rrhh_planillasbrowse #panLO #btnQuery':{click:this.rpb_prp_btnQueryClick},
	'rrhh_planillasbrowse #panLO #btnAnnular':{click:this.rpb_prp_btnAnnularClick},
	'rrhh_planillasbrowse #panLO #btnSiaf':{click:this.rpb_prp_btnSiafClick},
	'rrhh_planillasbrowse #panLO #doc_id':{change:this.rpb_prp_doc_idChange},
	'rrhh_planillasbrowse #panLO #fechaini':{change:this.rpb_prp_fechainiChange},
	'rrhh_planillasbrowse #panLO #fechafin':{change:this.rpb_prp_fechafinChange},
	'rrhh_planillasbrowse #panLO #grdRP':{cellclick:this.rpb_prp_grdRPCellClick,selectionchange:this.rpb_prp_grdRPSelectionChange}, 
	'rrhh_planillasbrowse #panLO #mes_id':{change:this.rpb_prp_mes_idChange},
	'rrhh_planillasbrowse #panLO #plan_nro':{change:this.rpb_prp_orden_nroChange},
	'rrhh_planillasbrowse #panLO #year_id':{change:this.rpb_prp_year_idChange},
	'rrhh_planillasbrowse #tabLOP #opc_id':{change:this.rpb_tlop_opc_idChange},
	'rrhh_planillasbrowse #tabLOP #btnQuery':{click:this.rpb_tlop_btnQueryClick},
	'rrhh_planillasbrowse #tabLOP #btnPrinter':{click:this.rpb_tlop_btnPrinterClick},
	'rrhh_planillasbrowse #tabLOP #grdLOP':{selectionchange:this.rpb_tlop_grdLOPSelectionChange},
});	},
rpb_BeforeRender: function(component, options) {
	var _menu_id = component.getMenuId(); var _panRP = component.down('#panRP'); var _tabLOD = component.down('#tabRPTF');
	var _grdRP = _panRP.down('#grdRP'); var _pagRP = _panRP.down('#pagRP');  var _tab = component.down('#tab01'); var _vs = fextpub_sessionVariables(); var _me = this;
	fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': _panRP.down('#opc_id'), 'menu_id': _menu_id });
	//fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': _tabLOP.down('#opc_id'), 'menu_id': 5118 });

	fextpub_yearsVisible(_panRP.down('#year_id'), Ext.getCmp('ah_txtYear_id').getValue());
	//fextpub_tablas_generalesFilter({'objeto': component.down('#tipgast_idx'), 'tabgen_parent': '2020', 'type_record': 'combo_code'});

	/*var _storeLOD = Ext.create('Siace.store.logistics.Ordenes_DetBrowse'); var _grdLOD = _tabLOD.down('#grdLOD'); var _pagLOD = _tabLOD.down('#pagLOD');
	_grdLOD.bindStore(_storeLOD);  _pagLOD.bindStore(_storeLOD); _storeLOD.sort('ordendet_item', 'ASC'); _storeLOD.pageSize = 500;
	_storeLOD.on('beforeload', function(store, operations, options) {
	    var _record = _grdLO.getSelectionModel().getSelection()[0];
    	store.getProxy().setExtraParam('xxOrden_key', _record.data.orden_key);
	    store.getProxy().setExtraParam('xxType_record', 'grid_logistics.OrdenesBrowse');
	    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
	    store.getProxy().setExtraParam('xxPaginate', '1');
	}); */

	var _storeRP=Ext.create('Siace.store.rrhh.PlanillasBrowse');
	_grdRP.bindStore(_storeRP);_pagRP.bindStore(_storeRP);_storeRP.sort('orden_documento','DESC');_storeRP.pageSize=500;
	_storeRP.on('beforeload',function(store,operations,eOpts){
		_panRP.down('#btnQuery').disable(); _panRP.down('#btnAnnular').disable(); _panRP.down('#btnPrinter').disable();
		//_me.rpb_tabsClean(component,true,'');
		store.getProxy().setExtraParam('xxYear_id', _panRP.down('#year_id').getValue());
		store.getProxy().setExtraParam('xxDoc_id',_panRP.down('#doc_id').getValue());store.getProxy().setExtraParam('xxTipgast_id',_panRP.down('#tipgast_idx').getValue());store.getProxy().setExtraParam('xxMes_id',_panRP.down('#mes_id').getValue());store.getProxy().setExtraParam('xxOrden_nro',_panRP.down('#orden_nro').getValue());
		store.getProxy().setExtraParam('xxFechaini',_panRP.down('#fechaini').getSubmitData());store.getProxy().setExtraParam('xxFechafin',_panRP.down('#fechafin').getSubmitData());
		store.getProxy().setExtraParam('zzUsursess_key', _vs['us']); store.getProxy().setExtraParam('zzUsuracce_key', _vs['ua']); store.getProxy().setExtraParam('zzYear_id', _vs['y']); store.getProxy().setExtraParam('zzArea_key', _vs['a']);
		store.getProxy().setExtraParam('xxType_record', 'grid'); store.getProxy().setExtraParam('xxMenu_id', component.getMenuId()); store.getProxy().setExtraParam('ssNO_USK', 'NoT'); store.getProxy().setExtraParam('xxPaginate', '1');
		store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
	});
},
rpb_tabsClean: function(poComponent, pbBoolean, pcFlga) {
	var _tabLOD = poComponent.down('#tabLOD'); var _pagLOD = _tabLOD.down('#pagLOD'); var _storeLOD = _pagLOD.getStore(); fext_gridClean(_storeLOD, _pagLOD);
	_pagLOD.setDisabled(pbBoolean);

	var _tabLOP = poComponent.down('#tabLOP'); 
	var _pagLOP = _tabLOP.down('#pagLOP'); var _storeLOP = _pagLOP.getStore(); fext_gridClean(_storeLOP, _pagLOP);
	_pagLOP.setDisabled(pbBoolean == true || pcFlga == '98' ? true : pbBoolean); _tabLOP.down('#btnQuery').disable(); _tabLOP.down('#btnPrinter').disable();
},
rpb_prp_Clean: function(poComponent) {
	var _pag = poComponent.down('#pagLO'); var _store = _pag.getStore(); fext_gridClean(_store, _pag);
	poComponent.down('#btnQuery').disable(); poComponent.down('#btnAnnular').disable(); poComponent.down('#btnPrinter').disable();
},
rpb_prp_viewEdit: function(poComponent, pcTypeEdit){
	if ( fjsIn_array(pcTypeEdit, ['2','3','12','59']) ) {
		var _record = poComponent.down('#grdLO').getSelectionModel().getSelection()[0]; if ( !_record ) { return false; }
	}

	Ext.get(poComponent.getEl()).mask(translations.mensaje_esperar, 'loading');
	if ( pcTypeEdit == '59' ) {
	    var _win = Ext.create('Siace.view.rrhh.PlanillasAttachments');
	    _win.setCallKey(_record.data.ped_key);
	    _win.down('#ped_documento').setValue('Requerimiento  &nbsp; [ '+_record.data.ped_nro + ' ]');
	    _win.down('#tipped_abrev').setValue(_record.data.tipped_abrev == 'Bien' ? 'ET' : 'TR');
	} else {
	   	var _win = Ext.create('Siace.view.rrhh.PlanillasEdit'); _win.down('#year_id').setValue(poComponent.down('#year_id').getValue());
	   	_win.setTypeEdit(pcTypeEdit); _win.setCallStore(poComponent.down('#grdLO').getStore());
	   	if ( fjsIn_array(pcTypeEdit, ['2','3','12']) ) { _win.setCallKey(_record.data.ped_key); }
	}
	_win.show();
	Ext.get(poComponent.getEl()).unmask();
},
rpb_prp_opc_idChange: function(combo, newValue, oldValue, options) { combo.up('#panLO').down('#btnNew').setDisabled(fextpub_uamoButtons(combo, 1)); },
rpb_prp_btnNewClick: function(button, e, options) { },
rpb_prp_btnQueryClick: function(button, e, options) { },
rpb_prp_btnAnnularClick: function(button, e, options) {
	var _panLO = button.up('#panLO');
	if ( fextpub_uamoButtons(_panLO.down('#opc_id'), 10) ) { return false; }
	if ( options == undefined ) {
        var _record = _panLO.down('#grdLO').getSelectionModel().getSelection()[0]; if ( !_record ) { return false; }

		Ext.Msg.confirm('Confirmación', '¿Esta Ud. seguro de ANULAR la Orden seleccionada?', function(btn){ if ( btn == 'yes' ) {
			Siace.app.getController('public.UsuariosPsw2'); var _win = Ext.create('Siace.view.public.UsuariosPsw2');
			_win.setCallButton(button); _win.setCallKey(_record.data.orden_key); _win.down("#subtitle").setValue(_record.data.orden_documento);
			_win.setFormType('10'); _win.show();
		}});
	} else {
		Ext.get(_panLO.getEl()).mask('Validando información... por favor espere un momento...', 'loading');
		var _win = options.win; var _store = _panLO.down('#grdLO').getStore(); var _menu_id = _panLO.up('panel').getMenuId(); var _vs = fextpub_sessionVariables();
		Ext.Ajax.request({ url: 'php/logistics_ordenes_delete.php',
			params: { xx0010: 'YES', xxType_edit: '10', xxOrden_key: options.key, xxUsur_psw2: options.usur_psw2, xxOrden_observ: options.observ,
					  zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'], xxMenu_id: _menu_id },
			success: function(conn, response, options, eOpts) {
				var _result = Siace.util.Util.decodeJSON(conn.responseText);
				if ( _result.success ) {
					_win.close();
					_store.load({ callback: function(opt, success, respon) { Ext.get(_panLO.getEl()).unmask(); } });
				} else { Ext.get(_panLO.getEl()).unmask(); Siace.util.Util.showErrorMsg(_result.msg); }
			},
			failure: function(conn, response, options, eOpts) { Ext.get(_panLO.getEl()).unmask(); Siace.util.Util.showErrorMsg(conn.responseText); }
		});
	}
},
rpb_prp_btnSiafClick: function(button, e, options) {
	var _panLO = button.up('#panLO');
	if ( fextpub_uamoButtons(_panLO.down('#opc_id'), 5005) ) { return false; }
    var _record = _panLO.down('#grdLO').getSelectionModel().getSelection()[0]; if ( !_record ) { return false; }

	Siace.app.getController('logistics.Ordenes_ExpedientesEdit'); var _win = Ext.create('Siace.view.logistics.Ordenes_ExpedientesEdit');
	_win.setTypeEdit('1'); _win.setCallStore(_panLO.down('#grdLO').getStore());
	_win.down('#orden_key').setValue(_record.data.orden_key); _win.setMenuId(_panLO.up('panel').getMenuId()); _win.show();
},
rpb_prp_btnPrinterClick: function(button, e, options) {
	var _panLO = button.up("#panLO");
	Siace.app.getController('logistics.Ordenes').lo_Printer({"component": _panLO, "menu_id": _panLO.up("panel").getMenuId()});
},
rpb_prp_btnFasesClick: function(button, e, options) {
	var _panLO = button.up("#panLO"); if ( fextpub_uamoButtons(_panLO.down('#opc_id'), 5029) ) { return false; } 
    var _record = _panLO.down('#grdLO').getSelectionModel().getSelection()[0]; if ( !_record ) { return false; }
	    
	Ext.get(_panLO.getEl()).mask(translations.mensaje_esperar, 'loading');
	var _controller = this.getController('Siace.controller.budget.Expedientes_SecuenciasBrow'); var _win = Ext.create('Siace.view.budget.Expedientes_SecuenciasBrow');
	_win.setCallKey(_record.data.orden_key); _win.down('#expe_nro').setValue(_record.data.expe_nro); _win.setTitle('Fases Expediente [' +_record.data.expe_nro+ '] ::.'); _win.show();
	Ext.get(_panLO.getEl()).unmask();
},
rpb_prp_btnPers_searchClick: function(button, e, options) {
	Siace.app.getController('public.PersonasSearch'); var _panLO = button.up('#panLO'); var _panel =_panLO.up('panel');
	_panel.setComponentPPS(fext_componentSearch({'componentCall': _panLO, 'componentSearch': _panel.getComponentPPS(), 'view': 'Siace.view.public.PersonasSearch', 'title': 'Búsqueda de Proveedor ::.', 'keyCall': _panLO.down('#pers_key').getValue(), 'typeQuery': 'ONLY_WITH_RUC'}));
},
rpb_prp_area_keyChange: function(combo, newValue, oldValue, options) {
	fextbud_tareasAMLoad({'panel':combo.up('#panLO')});  this.rpb_prp_Clean(combo.up('#panLO'));
},
rpb_prp_doc_idChange: function(combo, newValue, oldValue, options) { if ( oldValue !== undefined ) { this.rpb_prp_Clean(combo.up('#panLO')); } },
rpb_prp_fechainiChange: function(datefield, newValue, oldValue, options) { this.rpb_prp_Clean(datefield.up('#panLO')); },
rpb_prp_fechafinChange: function(datefield, newValue, oldValue, options) { this.rpb_prp_Clean(datefield.up('#panLO')); },
rpb_prp_fuefin_idChange: function(combo, newValue, oldValue, options) {	if ( oldValue !== undefined ) { this.rpb_prp_Clean(combo.up('#panLO')); } },
rpb_prp_grdLOCellClick: function(cell, td, cellIndex, record, tr, rowIndex, e, options) { cell.up("logistics_ordenesbrowse").down("#grdLOD").getStore().load(); },
rpb_prp_grdLOSelectionChange: function(model, record, options) {
	if ( record.length == 1 ) {
		var _panLO = model.view.panel.up('#panLO'); var _cboOpc_id = _panLO.down('#opc_id'); var _flga = record[0].data.orden_flga;  var _expe = record[0].data.expe_nro;
		_panLO.down('#btnQuery').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 3));
		_panLO.down('#btnAnnular').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 10));
		_panLO.down('#btnSiaf').setDisabled(_flga == '98' || _expe*1 > 0 ? true : fextpub_uamoButtons(_cboOpc_id, 5005));
		_panLO.down('#btnPrinter').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 8));
		_panLO.down('#btnFases').setDisabled(_flga == '98' || _expe*1 <= 0 ? true : fextpub_uamoButtons(_cboOpc_id, 5029));
		this.rpb_tabsClean(_panLO.up('panel'), false, _flga);
	}
},
rpb_prp_mes_idChange: function(combo, newValue, oldValue, options) { if ( oldValue !== undefined ) { this.rpb_prp_Clean(combo.up('#panLO')); } },
rpb_prp_meta_idChange: function(combo, newValue, oldValue, options) { if ( oldValue !== undefined ) { fextbud_tareasLoad({'#panLO': combo.up('#panLO')}); this.rpb_prp_Clean(combo.up('#panLO')); } },
rpb_prp_orden_nroChange: function(textfiled, newValue, oldValue, options) { this.rpb_prp_Clean(textfiled.up('#panLO')); },
rpb_prp_pers_rucBlur: function(textfield, The, options) { this.rpb_prp_pers_rucSearch(textfield.up('#panLO'), '0'); },
rpb_prp_pers_rucChange: function(textfield, newValue, oldValue, options) { this.rpb_prp_Clean(textfield.up('#panLO')); },
rpb_prp_pers_rucFocus: function(textfield, The, options) { this.rpb_prp_pers_rucSearch(textfield.up('#panLO'), '1'); },
rpb_prp_pers_rucKeypress: function(textfield, e, options) { if( e.getCharCode() == 13 ) { this.rpb_prp_pers_rucSearch(textfield.up('#panLO'), '13'); } },
rpb_prp_pers_rucSearch: function(poCallWindow, pcType) {
	fext_fieldSearch(pcType, poCallWindow, ['pers_key', 'PERS_RUC', 'pers_ruc', 'pers_nombre'],
		            ['php/public_personas_json_records.php', 'xxPers_ruc', 'textfield_search', ''], '0',
		            ['', '', ['pers_ruc'], ''], '');
},
rpb_tarea_keyChange: function(combo, newValue, oldValue, options) { if ( oldValue !== undefined ) { this.rpb_prp_Clean(combo.up('#panLO')); } },
rpb_prp_tablexChange: function(combo, newValue, oldValue, options) { if ( oldValue !== undefined ) { this.rpb_prp_Clean(combo.up('#panLO')); } },
rpb_prp_tarea_keyChange: function(combo, newValue, oldValue, options) { if ( oldValue !== undefined ) { this.rpb_prp_Clean(combo.up('#panLO')); } },
rpb_prp_tipgast_idChange: function(combo, newValue, oldValue, options) { if ( oldValue !== undefined ) { this.rpb_prp_Clean(combo.up('#panLO')); } },
rpb_prp_year_idChange: function(combo, newValue, oldValue, options) { if ( oldValue !== undefined ) { fextbud_metasLoad({'panel': combo.up('#panLO')}); this.rpb_prp_Clean(combo.up('#panLO')); } },
rpb_tlop_opc_idChange: function(combo, newValue, oldValue, options) { if ( !fextpub_uamoButtons(combo, 0) ) { combo.up('tabpanel').child('#tabLOP').tab.show(); } },
rpb_tlop_btnQueryClick: function(button, e, options) {
	if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 3) ) { return false; }
	var _record = button.up('panel').down('#grdLO_procedencias').getSelectionModel().getSelection()[0];
	if ( !_record ) { return false; }
	if ( _record.data.tablex == '5000' && _record.data.doc_id == '501' ) {
		var _win = Ext.create('Siace.view.logistics.PedidosEdit'); //_win.down('#year_id').setValue(poComponent.down('#year_id').getValue());  _win.setMenuId(poComponent.up('panel').getMenuId());
		_win.setTypeEdit('23'); _win.setCallKey(_record.data.tablex_key); _win.setNoUsk('NOT'); _win.show();
	} else if ( _record.data.tablex == '5010' ) {
		var _win = Ext.create('Siace.view.logistics.CotizacionesEdit');
		_win.setTypeEdit('13'); _win.setMenuId(button.up('panel').up('panel').up('panel').getMenuId()); _win.setCallKey(_record.data.tablex_key); _win.show();
	} else if ( _record.data.tablex == '5020' ) {
		var _win = Ext.create('Siace.view.logistics.Buena_ProEdit');
		_win.setTypeEdit('3'); _win.setMenuId(button.up('panel').up('panel').up('panel').getMenuId()); _win.setCallKey(_record.data.tablex_key); _win.show();
	}
},
rpb_tlop_btnPrinterClick: function(button, e, options) {
	if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 8) ) { return false; } 
	var _record = button.up('panel').down('#grdLO_procedencias').getSelectionModel().getSelection()[0]; if ( !_record ) { return false; }
	var _vs = fextpub_sessionVariables();
	if ( _record.data.tablex == '5000' && _record.data.doc_id == '501' ) {
		fext_pdf('', _record.data.tablex_documento, 'php/pdf/pdf_logistics_pedidos_printer.php?xxPed_key='+_record.data.tablex_key+'&xxType_record=printer');
	} else if ( _record.data.tablex == '5010' ) {
		fext_pdf('', _record.data.tablex_documento, 'php/pdf/pdf_logistics_cotizaciones_printer.php?xxCoti_key='+_record.data.tablex_key+'&xxType_record=printer&zzUsursess_key='+_vs['us']+'&zzUsuracce_key='+_vs['ua']+'&zzYear_id='+_vs['y']+'&zzArea_key='+_vs['a']+'&xxMenu_id=5118&xxOpc_id=8');
	}
},
rpb_tlop_grdLO_procedenciasSelectionChange: function(model, record, options) {	
	if ( record.length == 1 ) {
		var _panel = model.view.panel.up('panel'); var _cboOpc_id = _panel.down('#opc_id'); var _tablex = record[0].data.tablex
		_panel.down('#btnQuery').setDisabled(fextpub_uamoButtons(_cboOpc_id, 3)); 
		_panel.down('#btnPrinter').setDisabled(_tablex == "5020" ? true : fextpub_uamoButtons(_cboOpc_id, 8)); 
	}
},
});