Ext.define('Siace.controller.logistics.RecepcionesEdit', { extend: 'Ext.app.Controller', stores: ['array.DocumentosOrden','array.Meses','array.Years'], views: ['logistics.RecepcionesEdit'],
init: function(application) {
this.control({
	'logistics_recepcionesedit': { beforeshow: this.lre_BeforeShow, },
	'logistics_recepcionesedit #btnSave': { click: this.lre_btnSaveClick, },
	'logistics_recepcionesedit #btnUndo': { click: this.lre_btnUndoClick, },
	'logistics_recepcionesedit #btnExit': { click: this.lre_btnExitClick, },
	'logistics_recepcionesedit #btnSuppress': { click: this.lre_btnSuppressClick, },
	'logistics_recepcionesedit #tablex_doc': { change: this.lre_tablex_docChange, },
	'logistics_recepcionesedit #tablex_mes': { change: this.lre_tablex_mesChange, },
	'logistics_recepcionesedit #tablex_nro': { blur: this.lre_tablex_nroBlur, focus: this.lre_tablex_nroFocus, keypress: this.lre_tablex_nroKeypress, },
	//'logistics_recepcionesedit #tabLogistics_recepciones #btnAdd': { click: this.lre_tlp_btnAddClick, },
	'logistics_recepcionesedit #tabDetalle #grdLRD': { selectionchange: this.lre_td_grdLRDSelectionChange, },
}); },
lre_BeforeShow: function(component, options) {
	var _typeEdit = component.getTypeEdit(); var _menuId = component.getMenuId(); var _me = this; var _grdLRD = component.down('#grdLRD'); var _txtRecep_monto = component.down('#recep_monto');
	if ( _menuId == '5122' ) { }
	else if ( _menuId == '5124' ) { component.down("#tablex_doc").disable(); component.down("#tablex_doc").setValue(517); }
	else if ( _menuId == '5125' ) { component.down("#tablex_doc").disable(); component.down("#tablex_doc").setValue(516); }
	else { return false; }
	component.down("#area_key").bindStore(Ext.create("Siace.store.public.Areas"));  component.down("#meta_id").bindStore(Ext.create("Siace.store.budget.Metas")); component.down("#tarea_key").bindStore(Ext.create("Siace.store.budget.Tareas")); component.down("#fftr_id").bindStore(Ext.create('Siace.store.budget.Tareas_Fftred'));
	
	if ( fjsIn_array(_typeEdit, ['1','2']) ) {
		var _storeLRD = Ext.create('Siace.store.logistics.Ordenes_Det_Tareas_FftredRecepcionesEdit',{
	        listeners:{
	            update: function(store, record, operation, options){
	                var _monto = 0; store.each(function(record){ _monto += record.get('recepdet_pretot'); }); _txtRecep_monto.setValue(_monto);
				}
			}
		});
		var _ce = Ext.create('Ext.grid.plugin.CellEditing', {itemId: 'ceLRD', clicksToEdit: 1,
			listeners:{
			    edit: function(editor, e, options) {
			        var _record = (parseInt(Ext.versions.extjs.shortVersion) >= 410) ? e.record : editor.record;
			        _record.set('recepdet_pretot', fjsRound(_record.data.recepdet_cantid * _record.data.recepdet_preuni, 2));
			    },
			}
		});
		_ce.init(_grdLRD);
	} else {
		var _storeLRD = Ext.create('Siace.store.logistics.Recepciones_Det');
	}

	_grdLRD.bindStore(_storeLRD); _grdLRD.getView().refresh(); _storeLRD.pageSize = 500; _storeLRD.sort('recepdet_item', 'ASC');
	_storeLRD.on('beforeload', function(store, operations, eoptions) {
		component.down('#btnSuppress').disable();
	    store.getProxy().setExtraParam('xxType_record', 'logistics.RecepcionesEdit');
	    //store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
	});

	//fextbud_tareas_fftredParameters({'panel': component, 'objeto': component.down('#fftr_id'), 'type_query': 'T_FF_TR', 'order_by': 'fftr_codename', 'add_blank': 'NO'});
	if ( fjsIn_array(_typeEdit, ['1','2']) ) {
		if (_typeEdit == '1') { var _icon = 'icon_New_90'; var _title = 'Nueva Recepción ::.'; }
		else if (_typeEdit == '2') { var _icon = 'icon_Modify_90'; var _title = 'Modificar Recepción ::.'; }
		//fextbud_tareasATParameters({'panel': component, 'docu_campo': 'tareausuracce_estado501', 'docu_estado': '1', 'type_record': 'combo_codename', 'add_blank': 'NO'});
		//fextpub_areasFilter({'objeto': component.down('#area_key'), 'area_key': Ext.getCmp('ah_txtArea_key').getValue(), 've_usuracce_key': 'YES', 'type_record': 'combo', 'add_blank': 'NO', 'disabled': true});
		//fextbud_tareasAMParameters({'panel': component, 'docu_campo': 'tareausuracce_estado501', 'docu_estado': '1', 'type_record': 'combo_codename', 'add_blank': 'NO'}); 
		//if ( _typeEdit == '1' ) { fextbud_tareasAMLoad({'panel': component}); }
		//else { fextbud_tareasAMLoad({'panel': component, 'setValue': false }); }
		//component.down('#btnAdd').enable();
	} else if ( fjsIn_array(_typeEdit, ['3','23']) ) {
		var _icon = 'icon_Query_90'; var _title = 'Consulta de Recepción ::.';
	}
	if ( fjsIn_array(_typeEdit, ['3']) ) {
		//component.setFilterFFTR(false);
		//fextpub_tablas_generalesFilter({'objeto': _tabEttr01.down('#lugentr_id'), 'tabgen_parent': '5020', 'add_blank': 'NO', 'disabled': (_typeEdit=='12'?false:true), 'setValue': false});
       	var _form = component.down('form');  var _vs = fextpub_sessionVariables();
   		_form.load({ method: 'POST', url: 'php/logistics_recepciones_json_records.php', waitMsg: 'Loading...',
            params: { xxRecep_key: component.getCallKey(), xxYear_id: component.down('#year_id').getValue(), ssNO_USK: component.getNoUsk(), xxType_record: 'form', xxMenu_id: component.getMenuId(),
             		  zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
            success: function (form, action) {
               	try {
				} catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
           	},
           	failure: function (form, action) { Ext.Msg.alert("Load failed", action.result.errorMessage); }
       	});

		if ( fjsIn_array(_typeEdit, ['3']) ) {
		}
	}
	component.setIconCls(_icon); if ( _title !== '' ) { component.setTitle(_title); }
},
lre_btnSaveClick: function(button, e, options) {
    var _win = button.up('window'); var _frm = _win.down('form');
	if ( Ext.isEmpty(_win.down('#tablex_key').getValue()) ) { Ext.Msg.alert(translations.mensaje, 'No se ha indicado la orden', function() { }); return false ; }
	var _tablex = (fjsIn_array(_win.down('#tablex_doc').getValue(), ['516','517']) ? "5030" : "");
	if ( _tablex == "" ) { Ext.Msg.alert(translations.mensaje, 'Tipo de documento no aceptado', function() { }); return false ; }
	if ( Ext.isEmpty(_win.down('#doc_id').getValue()) ) {
	  	Ext.Msg.alert(translations.mensaje, 'No se ha indicado el documento de recepción', function() { _win.down('#doc_id').focus(); }); return false ; }
	if ( Ext.isEmpty(_win.down('#recep_serie').getValue()) || _win.down('#recep_serie').getValue()*1 <= 0 ) {
	    Ext.Msg.alert(translations.mensaje, 'No se ha establecido la SERIE del documento', function() { _win.down('#recep_serie').focus(); }); return false ; }
	if ( Ext.isEmpty(_win.down('#recep_nro').getValue()) || _win.down('#recep_serie').getValue()*1 <= 0 ) {
	    Ext.Msg.alert(translations.mensaje, 'No se ha establecido el NUMERO del documento', function() { _win.down('#recep_nro').focus(); }); return false ; }
	if ( Ext.isEmpty(_win.down('#recep_fecha').getValue())  ) {
	    Ext.Msg.alert(translations.mensaje, 'No se ha establecido la FECHA del documento', function() { _win.down('#recep_fecha').focus(); }); return false ; }
	if ( !_win.down('#recep_fecha').isValid() ) {
	    Ext.Msg.alert(translations.mensaje, 'FECHA de documento no es valida', function() { _win.down('#recep_fecha').focus(); }); return false ; }
	if ( Ext.isEmpty(_win.down('#recep_fecharec').getValue())  ) {
	    Ext.Msg.alert(translations.mensaje, 'No se ha establecido la FECHA del documento', function() { _win.down('#recep_fecharec').focus(); }); return false ; }
	if ( !_win.down('#recep_fecharec').isValid() ) {
	    Ext.Msg.alert(translations.mensaje, 'FECHA de Recepción de documento no es valida', function() { _win.down('#recep_fecharec').focus(); }); return false ; }
	var _det = ''; var _recep_monto = 0; var _recLRD = _win.down('#grdLRD').getStore().getRange();
	for ( var _i = 0;  _i < _recLRD.length; _i++ ) {
		var _data = _recLRD[_i].data;
		if ( _data.recepdet_cantid == '' || _data.recepdet_cantid*1 <= 0 ) {
			Ext.Msg.alert(translations.mensaje, 'Cantidad en detalle no pueder ser cero (0)', function() { }); return false ; }
		if ( _data.recepdet_pretot == '' || _data.recepdet_pretot*1 <= 0 ) {
			Ext.Msg.alert(translations.mensaje, 'Importe en detalle de item ['+(_i*1+1) +'] '+_data.bs_nombre+', no puede ser cero(0)', function() { }); return false ; }
		_det += (_i == 0 ? '' : ',') +'{5033,'+ _data.ordendettareafte_key +',0,'+ _data.ordendet_key +',0,0,'+ '*' +_data.recepdet_detalle +','+ _data.recepdet_cantid +','+ _data.recepdet_preuni +','+ _data.recepdet_pretot +',0}';
		_recep_monto += fjsRound(_data.recepdet_pretot, 2)*1;
	}
	if ( _det == '' ) { Ext.Msg.alert(translations.mensaje, 'Documento no registra detalle', function() { _win.down('#btnAdd').focus(); }); return false ; }
	if ( _recep_monto*1 !== _win.down('#recep_monto').getValue()*1 ) { Ext.Msg.alert(translations.mensaje, 'Importe en sumatoria de detalle ['+_recep_monto+'], es diferente al importe del documento ['+_win.down('#recep_monto').getValue()+']', function() { }); return false ; }
		    
	if ( !_frm.getForm().isValid() ) { return false }
	Ext.Msg.confirm(translations.confirmar, translations.mensaje_pregunta_guardar, function(btn){ if ( btn == 'yes' ) {    	
		var _vs = fextpub_sessionVariables();
		_frm.getForm().submit({ method: 'POST', url: 'php/logistics_recepciones_save.php', waitTitle: translations.valida_titulo, waitMsg: translations.valida_mensaje01,
			params:{ xx0005: 'YES', xxType_edit: _win.getTypeEdit(), xxRecep_key: _win.getCallKey(), xxYear_id: _win.down('#year_id').getValue(), xxTablex: _tablex, xxRecep_monto: _win.down('#recep_monto').getValue(), xxDet: _det, xxMenu_id: _win.getMenuId(),
					 zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
			success: function(form, action) {
				var _result = Siace.util.Util.decodeJSON(action.response.responseText);
				if ( _result.success ) {
					if ( _win.getCallStore() !== null ) { _win.getCallStore().load(); } 
					else if ( _win.getCallWindow() !== null ) { }
					_win.close();
				} else { Siace.util.Util.showErrorMsg(_result.msg); }
			},
			failure: function(form, action) { Siace.util.Util.showErrorMsg(action.response.responseText); }
		});
	}});
},
lre_btnUndoClick: function(button, e, options) { button.up('window').close(); },
lre_btnExitClick: function(button, e, options) { button.up('window').close(); },
lre_btnSuppressClick: function(button, e, options) {
	var _win = button.up('window'); var _record = _win.down('#grdLRD').getSelectionModel().getSelection()[0]; if ( !_record ) { return false; }
	button.disable();
	_win.down('#grdLRD').getStore().remove(_record);
	this.lre_recep_montoUpdate(_win, _record.data.recepdet_pretot*(-1));
},
lre_grdLogistics_recepciones_detSelectionChange: function(model, record, options) {		
	if ( record.length == 1 ) {
		var _win = model.view.panel.up('panel').up('panel').up('window');
		if ( fjsIn_array(_win.getTypeEdit(), ['1','2']) ) { _win.down('#btnSuppress').enable(); }
	}
},
lre_recep_montoUpdate: function(poComponent, pnPretot) { poComponent.down('#recep_monto').setValue( poComponent.down('#recep_monto').getValue()*1 + pnPretot*1 ); },
lre_ing_montoUpdate: function(poComponent, pnPretot) {
	var _tab = poComponent.down('#tabLogistics_pedidos'); var _monto = _tab.down('#ped_monto').getValue(); 
	_tab.down('#ped_monto').setValue( _tab.down('#ped_monto').getValue()*1 + pnPretot*1 );
	var _disabled = (_tab.down('#grdLogistics_pedidos_det').getStore().getCount()*1 > 0 ? true : false);
	_tab.down('#tipped_id').setDisabled(_disabled); _tab.down('#meta_id').setDisabled(_disabled); _tab.down('#tarea_key').setDisabled(_disabled); _tab.down('#tareacomp_key').setDisabled(_disabled); _tab.down('#fftr_id').setDisabled(_disabled);        
},
lre_tablexClean: function(poComponent) {
	poComponent.down("#area_key").getStore().removeAll(); poComponent.down("#area_key").setValue(""); poComponent.down("#meta_id").getStore().removeAll(); poComponent.down("#meta_id").setValue(""); poComponent.down("#tarea_key").getStore().removeAll(); poComponent.down("#tarea_key").setValue(""); poComponent.down("#fftr_id").getStore().removeAll(); poComponent.down("#fftr_id").setValue("");
   	poComponent.down("#pers_key").setValue(""); poComponent.down("#pers_ruc").setValue(""); poComponent.down("#pers_nombre").setValue(""); poComponent.down("#grdLRD").getStore().removeAll(); poComponent.down("#recep_monto").setValue(""); 
},
lre_tablexSearch: function(poComponent) {
	if ( !fjsIn_array(poComponent.getTypeEdit(), ['1','2']) ) { return false; }
	if ( Ext.isEmpty(poComponent.down("#tablex_doc").getValue()) || poComponent.down("#tablex_doc").getValue()*1 <= 0  ) { this.lre_tablexClean(poComponent); return false; }
	else if ( Ext.isEmpty(poComponent.down("#tablex_mes").getValue()) || poComponent.down("#tablex_mes").getValue()*1 <= 0 ) { this.lre_tablexClean(poComponent); return false; }
	else if ( Ext.isEmpty(poComponent.down("#tablex_nro").getValue()) || poComponent.down("#tablex_nro").getValue()*1 <= 0 ) { this.lre_tablexClean(poComponent); return false; }
	var _me = this; var _vs = fextpub_sessionVariables();
	Ext.get(poComponent.getEl()).mask('Validando información... por favor espere un momento...', 'loading');
	Ext.Ajax.request({method: 'POST', url: "php/logistics_ordenes_json_records.php",
		params:{ xxYear_id: poComponent.down('#year_id').getValue(), xxDoc_id: poComponent.down("#tablex_doc").getValue(), xxTipgast_id: poComponent.down("#tablex_tipgast").getValue(), xxMes_id: poComponent.down("#tablex_mes").getValue(), xxOrden_nro: poComponent.down("#tablex_nro").getValue(),
				 xxType_record: 'search_logistics.RecepcionesEdit', xxMenu_id: poComponent.getMenuId(), ssNO_USK: (poComponent.getMenuId()=="5122"?"":"NoT"),
				 zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma']},
		success: function(response) {
			var _result = Siace.util.Util.decodeJSON(response.responseText);
			if ( _result.success ) {
				if ( _result.subtotal == 1 ) {
					var _data = _result.data[0];
					poComponent.down("#area_key").getStore().add({area_key: _data.area_key, area_nombre: _data.area_nombre }); poComponent.down("#area_key").setValue(_data.area_key);
					poComponent.down("#meta_id").getStore().add({meta_id: _data.meta_id, meta_codename: _data.meta_codename }); poComponent.down("#meta_id").setValue(_data.meta_id*1);
					poComponent.down("#tarea_key").getStore().add({tarea_key: _data.tarea_key, tarea_codename: _data.tarea_codename }); poComponent.down("#tarea_key").setValue(_data.tarea_key);
					poComponent.down("#fftr_id").getStore().add({fftr_id: _data.fftr_id, fftr_codename: _data.fftr_codename }); poComponent.down("#fftr_id").setValue(_data.fftr_id);
					poComponent.down("#tablex_key").setValue(_data.orden_key); poComponent.down("#pers_key").setValue(_data.pers_key); poComponent.down("#pers_ruc").setValue(_data.pers_ruc); poComponent.down("#pers_nombre").setValue(_data.pers_nombre);
					poComponent.down("#grdLRD") .getStore().load({params:{xxOrden_key:_data.orden_key},
						callback: function(records, operations, success) {
							var _recep_monto = 0
							for (var _i=0; _i < records.length; _i++) { _recep_monto += records[_i].data.recepdet_pretot*1 }
							poComponent.down("#recep_monto").setValue(_recep_monto);
						}
					});
				} else { _me.lre_tablexClean(poComponent); }
			} else { _me.lre_tablexClean(poComponent); Siace.util.Util.showErrorMsg(_result.msg); }
			Ext.get(poComponent.getEl()).unmask();
		},
		failure: function(response) { _me.lre_tablexClean(poComponent); Ext.get(poComponent.getEl()).unmask(); Siace.util.Util.showErrorMsg(response.responseText); }
	});
},
lre_tablex_docChange: function(combo, newValue, oldValue, options) {
	fextpub_documentosFilter({'objeto': combo.up("window").down('#doc_id'), 'type_query': (newValue == '516' ? 'RECEPCION_B' : 'RECEPCION_S'), 'add_blank': 'NO'});
	if ( oldValue !== undefined ) { this.lre_tablexSearch(combo.up("window"));}
},
lre_tablex_mesChange: function(combo, newValue, oldValue, options) { if ( oldValue !== undefined ) { this.lre_tablexSearch(combo.up("window")); } },
lre_tablex_nroBlur: function(textfield, The, options) {
	if ( textfield.getValue()*1 > 0 ) { textfield.setValue(fjsLpad(textfield.getValue(),5,'0')); }
	if ( textfield.getValue()*1 != textfield.up("window").down("#TABLEX_NRO").getValue()*1 ) { this.lre_tablexSearch(textfield.up("window")); }
},
lre_tablex_nroFocus: function(textfield, The, options) { textfield.up("window").down("#TABLEX_NRO").setValue(textfield.getValue()); },
lre_tablex_nroKeypress: function(textfield, e, options) { if ( e.getCharCode() == 13 ) { this.lre_tablexSearch(textfield.up("window")); } },
lre_td_grdLRDSelectionChange: function(model, record, options) {		
	if ( record.length == 1 ) {
		var _win = model.view.panel.up('window');
		if ( fjsIn_array(_win.getTypeEdit(), ['1','2']) ) { _win.down('#btnSuppress').enable(); }
	}
}, 
});