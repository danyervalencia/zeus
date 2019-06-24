Ext.define('Siace.controller.logistics.RecepcionesBrowse',{extend:'Ext.app.Controller',stores:['array.Years'],views:['logistics.RecepcionesBrowse'],
init:function(application){
this.control({
	'logistics_recepcionesbrowse':{beforerender:this.lrb_BeforeRender},
	'logistics_recepcionesbrowse #panLR #opc_id':{change:this.lrb_plr_opc_idChange},
	'logistics_recepcionesbrowse #panLR #btnNew':{click:this.lrb_plr_btnNewClick},
	'logistics_recepcionesbrowse #panLR #btnModify':{click:this.lrb_plr_btnModifyClick},
	'logistics_recepcionesbrowse #panLR #btnQuery':{click:this.lrb_plr_btnQueryClick},
	'logistics_recepcionesbrowse #panLR #btnDelete':{click:this.lrb_plr_btnDeleteClick},
	'logistics_recepcionesbrowse #panLR #btnPrinter':{click:this.lrb_plr_btnPrinterClick},
	'logistics_recepcionesbrowse #panLR #area_key':{change:this.lrb_plr_area_keyChange},
	'logistics_recepcionesbrowse #panLR #doc_id':{change:this.lrb_plr_doc_idChange},
	'logistics_recepcionesbrowse #panLR #fechaini':{change:this.lrb_plr_fechainiChange},
	'logistics_recepcionesbrowse #panLR #fechafin':{change:this.lrb_plr_fechafinChange},
	'logistics_recepcionesbrowse #panLR #grdLR':{cellclick:this.lrb_plr_grdLRCellClick,selectionchange:this.lrb_plr_grdLRSelectionChange},
	'logistics_recepcionesbrowse #panLR #meta_id':{change:this.lrb_plr_meta_idChange},
	'logistics_recepcionesbrowse #panLR #recep_nro':{change:this.lrb_plr_recep_nroChange},
	'logistics_recepcionesbrowse #panLR #tarea_key':{change:this.lrb_plr_tarea_keyChange},
	//'logistics_recepcionesbrowse#panLR#tipgast_id':{change:this.lrb_plr_tipgast_idChange,},
	'logistics_recepcionesbrowse #panLR#year_id':{change:this.lrb_plr_year_idChange},
});	},
lrb_BeforeRender: function(component, options) {
	var _menu_id = component.getMenuId(); if ( !fjsIn_array(_menu_id, ['5122','5124','5125']) ) { return false; }
	var _panLR = component.down('#panLR'); var _tabLRD = component.down('#tabLRD'); var _tabLC = component.down('#tabLC');
	var _grdLR = _panLR.down('#grdLR'); var _pagLR = _panLR.down('#pagLR');  var _tab = component.down('#tab01'); var _vs = fextpub_sessionVariables(); var _me = this;
	fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': _panLR.down('#opc_id'), 'menu_id': _menu_id });
	fextpub_yearsVisible(_panLR.down('#year_id'), Ext.getCmp('ah_txtYear_id').getValue());

	if ( _menu_id == '5122' ) {
		fextpub_documentosFilter({'objeto': _panLR.down('#doc_id'), 'type_record': 'combo_abrev', 'type_query': 'RECEPCION_BS'});
		fextpub_areasFilter({'objeto': _panLR.down('#area_key'), 'visible': false, 'filter': true, 'area_key': Ext.getCmp('ah_txtArea_key').getValue(), 'no_usk': 'NoT', 'add_blank': 'NO'});
		fextbud_tareasAMParameters({'panel': _panLR, 'docu_campo': 'tareausuracce_estado501', 'docu_estado': '1'});
		//fextpub_tablas_generalesFilter({'objeto': _panLR.down('#tipgast_id'), 'tabgen_parent': '2020', 'type_record': 'combo_code'});
		fextbud_tareasATParameters({'panel': _panLR, 'docu_campo': 'tareausuracce_estado501', 'docu_estado': '1'});
	} else if ( _menu_id == '5124' ) {
		fextpub_documentosFilter({'objeto': _panLR.down('#doc_id'), 'type_record': 'combo_abrev', 'type_query': 'RECEPCION_S', 'add_blank': 'NO'});
		fextpub_areasFilter({'objeto': _panLR.down('#area_key'), 'filter': false, 'no_usk': 'NoT'});
		fextbud_metasParameters({'panel': _panLR}); fextbud_tareasParameters({'panel': _panLR});
	} else if ( _menu_id == '5125' ) {
		fextpub_documentosFilter({'objeto': _panLR.down('#doc_id'), 'type_record': 'combo_abrev', 'type_query': 'RECEPCION_B', 'add_blank': 'NO'});
		fextpub_areasFilter({'objeto': _panLR.down('#area_key'), 'filter': false, 'no_usk': 'NoT'});
		fextbud_metasParameters({'panel': _panLR}); fextbud_tareasParameters({'panel': _panLR});
	} else { return false; }
	//fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': _tabLC.down('#opc_id'), 'menu_id': _tabLC.down('#menu_id').getValue() });	
	//fextpub_documentosFilter({'objeto': _panLI.down('#doc_id'), 'type_record': 'combo_abrev', 'type_query': 'RECEPCION_BS'});

	var _storeLRD = Ext.create('Siace.store.logistics.Recepciones_DetBrowse'); var _grdLRD = _tabLRD.down('#grdLRD'); var _pagLRD = _tabLRD.down('#pagLRD');
	_grdLRD.bindStore(_storeLRD);  _pagLRD.bindStore(_storeLRD); _storeLRD.sort('recepdet_item', 'ASC'); _storeLRD.pageSize = 500;
	_storeLRD.on('beforeload', function(store, operations, options) {
	    var _record = _grdLR.getSelectionModel().getSelection()[0];
	   	store.getProxy().setExtraParam('xxRecep_key', _record.data.recep_key);
	    store.getProxy().setExtraParam('xxType_record', 'grid_logistics.RecepcionesBrowse');
	    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
	    store.getProxy().setExtraParam('xxPaginate', '1');
	});

	/*	var _storeLC = Ext.create('Siace.store.logistics.Cotizaciones'); var _grdLC = _tabLC.down('#grdLogistics_cotizaciones'); var _pagLC = _tabLC.down('#pagLogistics_cotizaciones');
		_grdLC.bindStore(_storeLC);  _pagLC.bindStore(_storeLC); _storeLC.sort('coti_fecha', 'DESC'); _storeLC.pageSize = 500;
		_storeLC.on('beforeload', function(store, operations, options) {
			_tabLC.down('#btnQuery').disable(); _tabLC.down('#btnPrinter').disable();
		    var _record = _grdLP.getSelectionModel().getSelection()[0];
	    	store.getProxy().setExtraParam('xxPed_key', _record.data.ped_key);
		    store.getProxy().setExtraParam('xxType_record', 'grid_logistics.recepcionesBrowse');
		    store.getProxy().setExtraParam('ssNO_USK', 'NOT');
		    store.getProxy().setExtraParam('zzUsursess_key', _vs['us']);
		    store.getProxy().setExtraParam('zzUsuracce_key', _vs['ua']);
		    store.getProxy().setExtraParam('zzYear_id', _vs['y']);
		    store.getProxy().setExtraParam('zzUsur_key', _vs['u']);
		    store.getProxy().setExtraParam('zzArea_key', _vs['a']);
		    store.getProxy().setExtraParam('xxMenu_id', component.getMenuId());
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		    store.getProxy().setExtraParam('xxPaginate', '1');
		}); */

	var _storeLR = Ext.create('Siace.store.logistics.RecepcionesBrowse');
	_grdLR.bindStore(_storeLR);  _pagLR.bindStore(_storeLR); _storeLR.sort('recep_fecha', 'DESC'); _storeLR.pageSize = 500; var _vs = fextpub_sessionVariables();
	_storeLR.on('beforeload', function(store, operations, eOpts) {
		_panLR.down('#btnModify').disable(); _panLR.down('#btnQuery').disable(); _panLR.down('#btnDelete').disable(); _panLR.down('#btnPrinter').disable();
		_me.lrb_tabsClean(component, true);
	    store.getProxy().setExtraParam('xxYear_id', _panLR.down('#year_id').getValue());
	    store.getProxy().setExtraParam('xxRecep_nro', _panLR.down('#recep_nro').getValue());
	    store.getProxy().setExtraParam('xxArea_key', (_menu_id == '5122' ? Ext.getCmp('ah_txtArea_key').getValue() : _panLR.down('#area_key').getValue()));
	    store.getProxy().setExtraParam('xxMeta_id', _panLR.down('#meta_id').getValue()); store.getProxy().setExtraParam('xxTarea_key', _panLR.down('#tarea_key').getValue());
		store.getProxy().setExtraParam('xxFechaini', _panLR.down('#fechaini').getSubmitData()); store.getProxy().setExtraParam('xxFechafin', _panLR.down('#fechafin').getSubmitData());
	    store.getProxy().setExtraParam('zzUsursess_key', _vs['us']); store.getProxy().setExtraParam('zzUsuracce_key', _vs['ua']); store.getProxy().setExtraParam('zzYear_id', _vs['y']); store.getProxy().setExtraParam('zzArea_key', _vs['a']); store.getProxy().setExtraParam('xxMenu_id', component.getMenuId());
	    store.getProxy().setExtraParam('xxType_record', 'grid'); store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction); store.getProxy().setExtraParam('xxPaginate', '1');
	    
	}); _storeLR.load();
},
lrb_tabsClean: function(poComponent, pbBoolean, pnFase) {
	var _tabLRD = poComponent.down('#tabLRD'); 
	var _pagLRD = _tabLRD.down('#pagLRD'); var _storeLRD = _pagLRD.getStore(); fext_gridClean(_storeLRD, _pagLRD);
	_tabLRD.down('#recep_documento').setValue(''); _tabLRD.down('#recep_fecha').setValue(''); _tabLRD.down('#area_nombre').setValue(''); _tabLRD.down('#meta_codename').setValue(''); _tabLRD.down('#tarea_codename').setValue('');
	_pagLRD.setDisabled(pbBoolean);

	/* var _tabLC = poComponent.down('#tabLC'); 
	var _pagLC = _tabLC.down('#pagLC'); var _storeLC = _pagLC.getStore(); fext_gridClean(_storeLC, _pagLC);
	_tabLC.down('#ing_documento').setValue(''); _tabLC.down('#ing_fecha').setValue(''); _tabLC.down('#area_nombre').setValue(''); _tabLC.down('#meta_codename').setValue(''); _tabLC.down('#tarea_codename').setValue('');
	_pagLC.setDisabled(pbBoolean); _tabLC.down('#btnQuery').disable(); */
},
lrb_plr_Clean: function(poComponent) {
	var _pag = poComponent.down('#pagLR'); var _store = _pag.getStore(); fext_gridClean(_store, _pag);
	poComponent.down('#btnModify').disable(); poComponent.down('#btnQuery').disable(); poComponent.down('#btnDelete').disable(); poComponent.down('#btnPrinter').disable();
},
lrb_plr_ViewEdit: function(poComponent, pcTypeEdit){
	Siace.app.getController('logistics.Recepciones').li_View({"component": poComponent, "type_edit": pcTypeEdit, "menu_id": poComponent.up("panel").getMenuId(), "opc_id": pcTypeEdit, "year_id": poComponent.down('#year_id').getValue(), "call_store": true});
},
lrb_plr_opc_idChange: function(combo, newValue, oldValue, options) { combo.up('panel').down('#btnNew').setDisabled(fextpub_uamoButtons(combo, 1)); },
lrb_plr_btnNewClick: function(button, e, options) { this.lrb_plr_ViewEdit(button.up('panel'), '1'); },
lrb_plr_btnModifyClick: function(button, e, options) { this.lrb_plr_ViewEdit(button.up('panel'), '2'); },
lrb_plr_btnQueryClick: function(button, e, options) { this.lrb_plr_ViewEdit(button.up('panel'), '3'); },
lrb_plr_btnDeleteClick: function(button, e, options) {
	var _panLR = button.up('#panLR');
	if ( fextpub_uamoButtons(_panLR.down('#opc_id'), 7) ) { return false; }
	if ( options == undefined ) {
        var _record = _panLR.down('#grdLR').getSelectionModel().getSelection()[0]; if ( !_record ) { return false; }
		Ext.Msg.confirm('Confirmación', '¿Esta Ud. seguro de ELIMINAR el Registro seleccionado?', function(btn){ if ( btn == 'yes' ) {
			Siace.app.getController('public.UsuariosPsw2'); var _win = Ext.create('Siace.view.public.UsuariosPsw2');
			_win.setCallButton(button); _win.setCallKey(_record.data.recep_key); _win.down('#subtitle').setValue(_record.data.recep_documento);
			_win.setFormType('07'); _win.show();
		}});
	} else {
		var _win = options.win; var _store = _panLR.down('#grdLR').getStore(); var _menu_id = _panLR.up('panel').getMenuId(); var _vs = fextpub_sessionVariables();
		Ext.get(_panLR.getEl()).mask('Validando información... por favor espere un momento...', 'loading');
		Ext.Ajax.request({ url: 'php/logistics_recepciones_delete.php',
			params: { xx0007: 'YES', xxType_edit: '7', xxRecep_key: options.key, xxUsur_psw2: options.usur_psw2, xxRecep_observ: options.observ, xxMenu_id: _menu_id,
				      zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
			success: function(conn, response, options, eOpts) {
				var _result = Siace.util.Util.decodeJSON(conn.responseText);
				if ( _result.success ) {
					_win.close();
		            _store.load({ callback: function(opt, success, respon) { Ext.get(_panLR.getEl()).unmask(); } });
				} else { Ext.get(_panLR.getEl()).unmask(); Siace.util.Util.showErrorMsg(_result.msg); }
			},
			failure: function(conn, response, options, eOpts) { Ext.get(_panLR.getEl()).unmask(); Siace.util.Util.showErrorMsg(conn.responseText); }
		});
	}
},
lrb_plr_btnPrinterClick: function(button, e, options) {
},
lrb_plr_area_keyChange: function(combo, newValue, oldValue, options) {
	fextbud_tareasAMLoad({'panel':combo.up('panel')});  this.lrb_plr_Clean(combo.up('panel'));
},
lrb_plr_doc_idChange: function(combo, newValue, oldValue, options) { if ( oldValue !== undefined )  { this.lrb_plr_Clean(combo.up('panel')); } },
lrb_plr_fechainiChange: function(datefield, newValue, oldValue, options) { this.lrb_plr_Clean(datefield.up('panel')); },
lrb_plr_fechafinChange: function(datefield, newValue, oldValue, options) { this.lrb_plr_Clean(datefield.up('panel')); },
lrb_plr_grdLRCellClick: function(cell, td, cellIndex, record, tr, rowIndex, e, options) {
	cell.up("logistics_recepcionesbrowse").down("#grdLRD").getStore().load();
},
lrb_plr_grdLRSelectionChange: function(model, record, options) {
	if ( record.length == 1 ) {
		var _panLR = model.view.panel.up("#panLR"); var _cboOpc_id = _panLR.down('#opc_id'); var _vs = fextpub_sessionVariables();
		_panLR.down("#btnModify").setDisabled(fextpub_uamoButtons(_cboOpc_id, 2));
		_panLR.down("#btnQuery").setDisabled(fextpub_uamoButtons(_cboOpc_id, 3));
		_panLR.down("#btnDelete").setDisabled(fextpub_uamoButtons(_cboOpc_id, 7));
		this.lrb_tabsClean(_panLR.up("panel"), false);
		Ext.Ajax.request({ method: 'POST', url: 'php/logistics_recepciones_json_records.php',
			params: { xxRecep_key: record[0].data.recep_key, xxType_record: 'window_log', xxOrder_by: 'recep_key', ssNO_USK: 'NoT',
			          zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
			success : function(response, options) {
			    var _result = Siace.util.Util.decodeJSON(response.responseText);
			    if ( _result.success ) {
			    	var _tabLRD = _panLR.up('panel').down('#tabLRD'); //var _tabLC = _panLP.up('panel').down('#tabLogistics_compras');
			    	if ( _result.data.length == 0 ) {
						_tabLRD.down('#recep_documento').setValue(''); _tabLID.down('#recep_fecha').setValue(''); _tabLID.down('#area_nombre').setValue(''); _tabLID.down('#meta_codename').setValue(''); _tabLID.down('#tarea_codename').setValue('');
						//_tabLC.down('#recep_documento').setValue(''); _tabLC.down('#recep_fecha').setValue(''); _tabLC.down('#area_nombre').setValue(''); _tabLC.down('#meta_codename').setValue(''); _tabLC.down('#tarea_codename').setValue('');
				   	} else {
				   		_tabLRD.down('#recep_documento').setValue(_result.data[0].recep_documento); _tabLRD.down('#recep_fecha').setValue(Ext.util.Format.date(_result.data[0].recep_fecha,'d/m/Y')); _tabLRD.down('#area_nombre').setValue(_result.data[0].area_nombre); _tabLRD.down('#meta_codename').setValue(_result.data[0].meta_codename); _tabLRD.down('#tarea_codename').setValue(_result.data[0].tarea_codename);
				   		//_tabLC.down('#recep_documento').setValue(_result.data[0].recep_documento); _tabLC.down('#recep_fecha').setValue(Ext.util.Format.date(_result.data[0].recep_fecha,'d/m/Y')); _tabLC.down('#area_nombre').setValue(_result.data[0].area_nombre); _tabLC.down('#meta_codename').setValue(_result.data[0].meta_codename); _tabLC.down('#tarea_codename').setValue(_result.data[0].tarea_codename);
				   	}
				}
			},
			failure : function(response, options) { }
		});
	}
},
lrb_plr_meta_idChange: function(combo, newValue, oldValue, options) {
	if ( oldValue !== undefined ) { fextbud_tareasATLoad({'panel':combo.up('panel')}); this.lrb_plr_Clean(combo.up('panel')); }
},
lrb_plr_ped_nroChange: function(textfiled, newValue, oldValue, options) { this.lrb_Clean(textfiled.up('panel')); },
lrb_plr_tarea_keyChange: function(combo, newValue, oldValue, options) { if ( oldValue !== undefined ) { this.lrb_plr_Clean(combo.up('panel')); } },
lrb_plr_year_idChange: function(combo, newValue, oldValue, options) {
	if ( oldValue !== undefined ) { fextbud_tareasAMLoad({'panel':combo.up('panel')}); this.lrb_plr_Clean(combo.up('panel')); }
},
lrb_tlc_opc_idChange: function(combo, newValue, oldValue, options) {
	if ( !fextpub_uamoButtons(combo, 0) ) { combo.up("tabpanel").child('#tabLogistics_cotizaciones').tab.show(); }
},
lrb_tlc_btnQueryClick: function(button, e, options) {
	var _tabLC = button.up("panel");
	fextlog_cotizacionesView({"component": _tabLC, "type_edit": 3, "menu_id": _tabLC.down("#menu_id").getValue(), "opc_id": 3});
},
lrb_tlc_grdLogistics_cotizacionesSelectionChange: function(model, record, options) {	
	if ( record.length == 1 ) {
		var _tabLC = model.view.panel.up("#tabLogistics_cotizaciones"); var _cboOpc_id = _tabLC.down('#opc_id'); var _flga = record[0].data.coti_flga; var _coti_monto = record[0].data.coti_monto; var _bp_monto = record[0].data.bp_monto;			
		_tabLC.down('#btnQuery').setDisabled(_flga == "98" ? true : fextpub_uamoButtons(_cboOpc_id, 3));
		_tabLC.down('#btnPrinter').setDisabled(_flga == "98" ? true : fextpub_uamoButtons(_cboOpc_id, 8));
	}
},
});