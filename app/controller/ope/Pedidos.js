Ext.define('Siace.controller.operations.Pedidos', {
	extend: 'Ext.app.Controller',
	//stores: [ 'array.DocumentosCobro', 'array.Monedas', 'array.Years',  ],
	views: [ 'operations.PedidosBrowse', ],
    refs: [
        { ref: 'pis_Public_IndividuosSearch', selector: 'public_individuossearch' },
        { ref: 'pps_Public_PersonasSearch', selector: 'public_personassearch' },
    ],

	init: function(application) {
		this.control({
			'operations_pedidosbrowse': { beforerender: this.opb_BeforeRender, },
			'operations_pedidosbrowse #opc_id': { change: this.opb_opc_idChange, },
			'operations_pedidosbrowse #btnNew': { click: this.opb_btnNewClick, },
			'operations_pedidosbrowse #btnModify': { click: this.opb_btnModifyClick, },
			'operations_pedidosbrowse #btnQuery': { click: this.opb_btnQueryClick, },
			'operations_pedidosbrowse #btnAnnular': { click: this.opb_btnAnnularClick, },
			'operations_pedidosbrowse #btnDelete': { click: this.opb_btnDeleteClick, },
			'operations_pedidosbrowse #btnPrinter': { click: this.opb_btnPrinterClick, },
			'operations_pedidosbrowse #btnHide': { click: this.opb_btnHideClick, },
            //'operations_pedidosbrowse #concp_id': { change: this.opb_concp_idChange, },
            'operations_pedidosbrowse #doc_id': { change: this.opb_doc_idChange, },
			'operations_pedidosbrowse #fechafin': { change: this.opb_fechainiChange, },
			'operations_pedidosbrowse #fechaini': { change: this.opb_fechainiChange, },
			'operations_pedidosbrowse #grdOperations_pedidos': { selectionchange: this.opb_grdOperations_pedidosSelectionChange, },
			'operations_pedidosbrowse #ped_nro': { change: this.opb_ped_nroChange },
            'operations_pedidosbrowse #ped_serie': { change: this.opb_ped_serieChange, },
			'operations_pedidosbrowse #unidveh_key': { change: this.opb_unidveh_keyChange, },            

            'operations_pedidosedit': { beforeshow: this.ope_BeforeShow, close: this.ope_Close, },
            'operations_pedidosedit #btnSave': { click: this.ope_btnSaveClick, },
            'operations_pedidosedit #btnUndo': { click: this.ope_btnUndoClick, },
            'operations_pedidosedit #btnExit': { click: this.ope_btnExitClick, },
            'operations_pedidosedit #btnIndiv_search': { click: this.ope_btnIndiv_searchClick },
            'operations_pedidosedit #btnPers_search': { click: this.ope_btnPers_searchClick, },
            'operations_pedidosedit #indiv_dni': { blur: this.ope_indiv_dniBlur, focus: this.ope_indiv_dniFocus, keypress: this.ope_indiv_dniKeypress, },
			'operations_pedidosedit #oper_dni': { blur: this.ope_oper_dniBlur, focus: this.ope_oper_dniFocus, keypress: this.ope_oper_dniKeypress, },
			'operations_pedidosedit #tipdocident_id': { change: this.ope_tipdocident_idChange, },
			'operations_pedidosedit #pers_ruc': { blur: this.ope_pers_rucBlur, focus: this.ope_pers_rucFocus, keypress: this.ope_pers_rucKeypress, },
			'operations_pedidosedit #peddet_horaini': { change: this.ope_peddet_horainiChange, },
			'operations_pedidosedit #peddet_horafin': { change: this.ope_peddet_horafinChange, },
			'operations_pedidosedit #unidveh_key': { change: this.ope_unidveh_keyChange, },

			'operations_pedidossearch': { beforerender: this.trs_BeforeRender, },
			'operations_pedidossearch #btnAccept': { click: this.trs_btnAcceptClick, },
			'operations_pedidossearch #btnCancel': { click: this.trs_btnCancelClick, },
			'operations_pedidossearch #bs_nombre': { change: this.trs_Clean, },
			'operations_pedidossearch #bscat_id': { change: this.trs_bscat_idChange, },
			'operations_pedidossearch #bsg_id': { change: this.trs_bsg_idChange, },
			'operations_pedidossearch #bst_id': { change: this.trs_bst_idChange, },
			'operations_pedidossearch #grdoperations_pedidos': { itemdblclick: this.trs_grdoperations_pedidosItemdblclick, selectionchange: this.trs_grdoperations_pedidosSelectionchange, },
			'operations_pedidossearch #mone_id': { change: this.trs_mone_idChange, },
		});
	},

	opb_BeforeRender: function( component, options ) {
		fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': component.down('#opc_id'), 'menu_id': component.getMenuId() });
		fextpub_documentosFilter({'objeto': component.down('#doc_id'), 'type_query': 'HOJAS_SERVICIO'});
		fextpub_documentos_seriesParameters({'panel': component, 'itemId': 'ped_serie', 'type_query': 'HOJAS_SERVICIO'});
		fextlog_unidades_vehicularesFilter({'objeto': component.down('#unidveh_key'), 'unidveh_rent': '5'});

		var _store = Ext.create('Siace.store.operations.Pedidos');
		var _grid = component.down('#grdOperations_pedidos'); var _pagtool = component.down('#pgtOperations_pedidos');
		_grid.bindStore(_store);  _pagtool.bindStore(_store);
		_store.sort('ped_documento', 'DESC'); _store.pageSize = 500;
		_store.on('beforeload', function(store, operations, eOpts) {
			component.down('#btnModify').disable(); component.down('#btnQuery').disable(); component.down('#btnAnnular').disable(); component.down('#btnDelete').disable(); component.down('#btnPrinter').disable();

			store.getProxy().setExtraParam('xxDoc_id', component.down('#doc_id').getValue());
			store.getProxy().setExtraParam('xxPed_serie', component.down('#ped_serie').getValue());
			store.getProxy().setExtraParam('xxPed_nro', component.down('#ped_nro').getValue());
		    store.getProxy().setExtraParam('xxFechaini', component.down('#fechaini').getSubmitData());
		    store.getProxy().setExtraParam('xxFechafin', component.down('#fechafin').getSubmitData());
			store.getProxy().setExtraParam('xxUnidveh_key', component.down('#unidveh_key').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});
	},

	opb_Clean: function(poComponent) {
		var _store = poComponent.down('#pgtOperations_pedidos').getStore();
		var _pagingtoolbar = poComponent.down('#pgtOperations_pedidos');
		fext_gridClean(_store, _pagingtoolbar);

		poComponent.down('#btnModify').disable(); poComponent.down('#btnQuery').disable(); poComponent.down('#btnAnnular').disable(); poComponent.down('#btnDelete').disable(); poComponent.down('#btnPrinter').disable();
	},

	opb_ViewEdit: function(pcTypeEdit, poComponent) {
		if ( pcTypeEdit == '1' ) {
			if ( poComponent.down('#doc_id').getValue() == '' || poComponent.down('#doc_id').getValue()*1 <= 0 ) {
			    Ext.MessageBox.alert(translations.mensaje, 'Debe indicar el Documento', function() { }); return false ; }
			if ( poComponent.down('#ped_serie').getValue() == '' || poComponent.down('#ped_serie').getValue()*1 <= 0 ) {
				Ext.MessageBox.alert(translations.mensaje, 'Debe indicar la Serie del Documento', function() { poComponent.down('#ped_serie').focus(); }); return false ; }
		} else if ( fjsIn_array(pcTypeEdit, ['2','3']) ) {
	    	var _record = poComponent.down('#grdOperations_pedidos').getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }
	    }

		Ext.get(poComponent.getEl()).mask(translations.mensaje_esperar, 'loading');
	    var _win = Ext.create('Siace.view.operations.PedidosEdit');
	    _win.setTypeEdit(pcTypeEdit); _win.setCallStore(poComponent.down('#grdOperations_pedidos').getStore());
	    if ( pcTypeEdit == '1' ) { _win.setDoc_id(poComponent.down('#doc_id').getValue()); _win.setDoc_nombre(poComponent.down('#doc_id').getRawValue()); _win.setPed_serie(poComponent.down('#ped_serie').getValue()); }
	    else if (fjsIn_array(pcTypeEdit, ['2','3'])) { _win.setCallKey(_record.data.ped_key); }
	    _win.show();
	    Ext.get(poComponent.getEl()).unmask();
	},

	opb_opc_idChange: function(combo, newValue, oldValue, options) {
		combo.up('panel').down('#btnNew').setDisabled(fextpub_uamoButtons(combo, 1));
	},

	opb_btnNewClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 1) ) { return false; } this.opb_ViewEdit('1', button.up('panel'));
	},

	opb_btnModifyClick: function(button, e, options) {
        if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 2) ) { return false; } this.opb_ViewEdit('2', button.up('panel'));
	},

	opb_btnQueryClick: function(button, e, options) {
        if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 3) ) { return false; } this.opb_ViewEdit('3', button.up('panel'));
	},

	opb_btnAnnularClick: function(button, e, options) {
		var _panel = button.up('panel');
		if ( fextpub_uamoButtons(_panel.down('#opc_id'), 10) ) { return false; } 
		if ( options == undefined ) {
	        var _record = this.getOpb_grdOperations_Pedidos().getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }

			Ext.Msg.confirm('Confirmación', '¿Esta Ud. seguro de ANULAR el documento seleccionado?', function(btn){
				if ( btn == 'yes' ) {
					var _win = Ext.create('Siace.view.public.UsuariosPsw2');
					_win.setCallButton(button); _win.setFormType('10'); _win.setCallKey('');
					_win.setSubTitle(_record.data.recib_documento);
					_win.show();
				}
			});
		} else {
			var _win = options.win;
			Ext.get(_panel.getEl()).mask('Validando información... por favor espere un momento...', 'loading');
			var _vs = fextpub_sessionVariables();
			Ext.Ajax.request({
				url: 'php/operations_ventas_annular.php',
				params: { xx0010: 'YES', xxVent_key: '', xxUsur_psw2: options.usur_psw2, xxVent_observ: options.observ,
				          xxDoc_id: _w.down('#doc_id').getValue(), xxVent_serie: _w.down('#vent_serie').getValue(), xxVent_nro: _w.down('#vent_nro').getValue()*1, xxVent_fecha: _w.down('#vent_fecha').getSubmitData(),
					      zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
				success: function(conn, response, options, eOpts) {
					var _result = Siace.util.Util.decodeJSON(conn.responseText);
					if ( _result.success ) {
						_win.close(); _win.destroy(); _w.close();
			            if ( _panel.getCallStore() !== null ) { _w.getCallStore().load(); }
					} else {
						Ext.get(_w.getEl()).unmask();
						Siace.util.Util.showErrorMsg(_result.msg);
					}
				},
				failure: function(conn, response, options, eOpts) {
					Ext.get(_panel.getEl()).unmask(); Siace.util.Util.showErrorMsg(conn.responseText);
				}
			});
		}		
	},

	opb_btnDeleteClick: function(button, e, options) {
		var _panel = button.up('panel');
		if ( fextpub_uamoButtons(_panel.down('#opc_id'), 7) ) { return false; } 
		if ( options == undefined ) {
	        var _record = _panel.down('#grdOperations_pedidos').getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }

			Ext.Msg.confirm(translations.confirmar, translations.mensaje_pregunta_eliminar, function(btn){
				if ( btn == 'yes' ) {
					var _win = Ext.create('Siace.view.public.UsuariosPsw2');
					_win.setCallButton(button);
					_win.setCallKey(_record.data.recib_key);
					_win.setSubTitle(_record.data.recib_documento);
					_win.setFormType('07');
					_win.show();
				}
			});
		} else {
			var _win = options.win;  var _store = _panel.down('#grdOperations_pedidos').getStore();
			var _menu_id = button.up('panel').getMenuId();
			Ext.get(_panel.getEl()).mask(translations.mensaje_validando_espere, translations.cargando);
			var _vs = fextpub_sessionVariables();
			Ext.Ajax.request({
				url: 'php/operations_pedidos_delete.php',
				params: { xx0007: 'YES', xxRecib_key: options.key, xxUsur_psw2: options.usur_psw2, xxRecib_observ: options.observ,
					      zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'], xxMenu_id: _menu_id },
				success: function(conn, response, options, eOpts) {
					var _result = Siace.util.Util.decodeJSON(conn.responseText);
					if ( _result.success ) {
						_win.close(); _win.destroy();
			            _store.load({ callback: function(opt, success, respon) { Ext.get(_panel.getEl()).unmask(); } });
					} else { Ext.get(_panel.getEl()).unmask(); Siace.util.Util.showErrorMsg(_result.msg); }
				},
				failure: function(conn, response, options, eOpts) { Ext.get(_panel.getEl()).unmask(); Siace.util.Util.showErrorMsg(conn.responseText); }
			});
		}
	},

	opb_btnHideClick: function(button, e, options) {
    	var _ventimp = window.open('', '');
    	_ventimp.document.write('<html><head><link rel="stylesheet" type="text/css" href="resources/css/style_printer.css?version=19"><\/head><body style=\"background-color: #FFFFFF\">');
    	_ventimp.document.write(options);
    	_ventimp.document.close();
	},

	opb_btnPrinterClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 8) ) { return false; } 
		var _panel = button.up('panel');
		var _record = _panel.down('#grdOperations_pedidos').getSelectionModel().getSelection()[0];
		if ( !_record ) { return false; }

		fext_pdf('', 'Hoja de Servicio', 'php/pdf/pdf_operations_pedidos_printer.php?xxPed_key='+_record.data.ped_key);
		
		/*Ext.Ajax.request({
		    method: 'POST', url: 'php/operations_pedidos_printer.php',
			params: { xxPed_key: _record.data.ped_key,  xxType_record: 'printer', xxOrder_by: 'recib_key' },
			success : function(response, options) {
				_panel.down('#btnHide').fireEvent('click', _panel.down('#btnHide'), '', response.responseText);
			},
			failure : function(response, options) { }
		}); */
	},

	opb_concp_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.opb_Clean(combo.up('panel')); }
	},

	opb_doc_idChange: function(combo, newValue, oldValue, options) {
		fextpub_documentos_seriesLoad({'panel': combo.up('panel'), 'itemId': 'ped_serie'});
		if ( oldValue !== undefined ) { this.opb_Clean(combo.up('panel')); }
	},

	opb_fechainiChange: function(datefield, newValue, oldValue, options) {
		this.opb_Clean(datefield.up('panel'));
	},

	opb_fechafinChange: function(datefield, newValue, oldValue, options) {
		this.opb_Clean(datefield.up('panel'));
	},

	opb_grdOperations_pedidosSelectionChange: function(model, record, options) {			
		if ( record.length == 1 ) {
			var _panel = model.view.panel.up('panel'); var _cboOpc_id = _panel.down('#opc_id'); _flga = record[0].data.ped_flga;
			_panel.down('#btnModify').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 2));
			_panel.down('#btnQuery').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 3));
			_panel.down('#btnAnnular').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 10));
			_panel.down('#btnDelete').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 7));
			_panel.down('#btnPrinter').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 8));
		}
	},

	opb_ped_nroChange: function(textfield, newValue, oldValue, options) {
		this.opb_Clean(textfield.up('panel'));
	},

	opb_ped_serieChange: function(textfield, newValue, oldValue, options) {
		this.opb_Clean(textfield.up('panel'));
	},

	opb_unidveh_keyChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.opb_Clean(combo.up('panel')); }
	},

	ope_BeforeShow: function(component, options) {
		var _typeEdit = component.getTypeEdit();
		component.down('#doc_id').bindStore(Ext.create('Siace.store.public.Documentos'));
		component.down('#ped_serie').bindStore(Ext.create('Siace.store.public.Documentos_Series'));
		fextlog_unidades_vehicularesFilter({'objeto': component.down('#unidveh_key'), 'unidveh_rent': '5', 'type_record': 'combo_pedidosedit', 'add_blank': 'NO', 'disabled': (_typeEdit=='1' ? false : true), 'setValue': (_typeEdit=='1' ? true : false) });
		fextpub_tablas_generalesFilter({'objeto': component.down('#lugserv_id'), 'tabgen_parent': '8010', 'order_by': 'tabgen_orden', 'disabled': (_typeEdit=='3' ? true : false), 'setValue': (_typeEdit=='1' ? true : false)});
		//fextpub_tablas_generalesFilter({'objeto': component.down('#serv_id'), 'tabgen_parent': 270, 'tabgen_estado': (component.getDoc_id() == '516' ? '1' : '2'), 'order_by': 'tabgen_orden', 'add_blank': 'NO', 'disabled': (_typeEdit=='1' ? false : true), 'setValue': (_typeEdit=='1' ? true : false)});

		var _cboDoc_id = component.down('#doc_id'); var _cboPed_serie = component.down('#ped_serie');
        if ( _typeEdit == '1' ) {
        	var _icon = 'icon_New_90'; var _title = translations.operations_pedidosedit_title_new;
			_cboDoc_id.getStore().add({ doc_id: component.getDoc_id(), doc_nombre: component.getDoc_nombre(), });
			_cboPed_serie.getStore().add({ docser_serie: component.getPed_serie(), docser_format: fjsLpad(component.getPed_serie(), 3, '0'), });
			_cboDoc_id.setValue(component.getDoc_id()); _cboPed_serie.setValue(component.getPed_serie());
			if ( component.getDoc_id() == '813' ) { component.down('#tipdocident_id').setValue(3); } 
			else { component.down('#tipdocident_id').disable(); fext_removeAddCls(component.down('#tipdocident_id'), 'myDisabledClass', 'x-item-disabled'); }
			fextpub_tablas_generalesFilter({'objeto': component.down('#serv_id'), 'tabgen_parent': '8000', 'tabgen_estado': (component.getDoc_id() == '813' ? '1' : '2'), 'order_by': 'tabgen_orden', 'add_blank': 'NO'});
        } else if ( fjsIn_array(_typeEdit, ['2','3']) ) {
	        var _form = component.down('form');
	   		_form.load({
	   			method: 'POST', url: 'php/operations_pedidos_json_records.php',
	            params: { xxPed_key: component.getCallKey(), xxType_record: 'form', xxOrder_by: 'p.ped_key' }, waitMsg: 'Loading...',
	            success: function (form, action) {
	                try {
	                    var _model = Ext.create('Siace.model.operations.Pedido'); var _result = Ext.decode(action.response.responseText);
	                    if ( _result.data[0] ) {
	                        _model.set(_result.data[0]);  _form.loadRecord(_model);
	                        fextpub_tablas_generalesFilter({'objeto': component.down('#serv_id'), 'tabgen_parent': 270, 'tabgen_estado': (_model.data.doc_id == '516' ? '1' : '2'), 'order_by': 'tabgen_orden', 'add_blank': 'NO', 'disabled': (_typeEdit == '2' ? false :true), 'setValue': false});
							component.down('#doc_id').getStore().add({doc_id: _model.data.doc_id, doc_nombre: _model.data.doc_nombre}); component.down('#doc_id').setValue(_model.data.doc_id);
							component.down('#ped_serie').getStore().add({ docser_serie: _model.data.ped_serie, docser_format: fjsLpad(_model.data.ped_serie, 3, '0'), }); component.down('#ped_serie').setValue(_model.data.ped_serie);
							component.down('#ped_nro').setValue(fjsLpad(_model.data.ped_nro, 6, '0'));
							if ( _model.data.tipdocident_id == '3' ) { component.down('#pers_key').setValue(_model.data.pers_key); component.down('#pers_ruc').setValue(_model.data.pers_ruc); component.down('#pers_nombre').setValue(_model.data.pers_nombre); } 
							else if ( _model.data.tipdocident_id == '1' ) { component.down('#indiv_key').setValue(_model.data.pers_key); component.down('#indiv_dni').setValue(_model.data.pers_ruc); component.down('#indiv_apenom').setValue(_model.data.pers_nombre); }
							component.down('#oper_dni').setValue(_model.data.oper_dni); component.down('#oper_apenom').setValue(_model.data.oper_apenom);
							component.down('#unidveh_key').setValue(_model.data.unidveh_key); component.down('#lugserv_id').setValue(_model.data.lugserv_id); component.down('#serv_id').setValue(_model.data.serv_id);
							if ( _model.data.peddet_odoini == null ) { component.down('#peddet_odoini').removeCls('myDisabledClass'); component.down('#peddet_odoini').addCls('x-item-disabled'); component.down('#peddet_odoini').setValue(''); component.down('#peddet_odofin').setValue(''); }
							if ( _model.data.peddet_horoini == null ) { component.down('#peddet_horoini').removeCls('myDisabledClass'); component.down('#peddet_horoini').addCls('x-item-disabled'); component.down('#peddet_horoini').setValue('');  component.down('#peddet_horofin').setValue(''); }
	                    }
	                }
	                catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
	            },
	            failure: function (form, action) {
	                Ext.Msg.alert("Load failed", action.result.errorMessage);
	            }
	        });

        	if ( _typeEdit == '2' ) { 
        		var _icon = 'icon_Modify_90'; var _title = 'Modificar Hoja de Servicio';
        	} else { 
        		var _icon = 'icon_Query_90'; var _title = 'Consulta Hoja de Servicio'; 
				component.down('#ped_nro').disable(); component.down('#ped_fecha').disable(); component.down('#tipdocident_id').disable(); 
				component.down('#pers_ruc').disable(); component.down('#btnPers_search').disable(); component.down('#indiv_dni').disable(); component.down('#btnIndiv_search').disable(); 
				component.down('#oper_dni').disable();
				component.down('#unidveh_key').disable(); component.down('#lugserv_id').disable(); component.down('#peddet_odofin').disable(); component.down('#peddet_horofin').disable();
				component.down('#serv_id').disable(); component.down('#peddet_detalle').disable(); component.down('#peddet_horaini').disable(); component.down('#peddet_horafin').disable(); component.down('#ped_observ').disable();
				component.down('#btnSave').setDisabled(true); component.down('#btnUndo').setDisabled(true); component.down('#btnExit').setDisabled(false);

        	}
        }
        component.setIconCls(_icon); component.setTitle(_title);
	},

	ope_Close: function(panel, options) {
		if ( this.getPis_Public_IndividuosSearch() !== undefined ) { this.getPis_Public_IndividuosSearch().close();  this.getPis_Public_IndividuosSearch().destroy(); }
		if ( this.getPps_Public_PersonasSearch() !== undefined ) { this.getPps_Public_PersonasSearch().close();  this.getPps_Public_PersonasSearch().destroy(); }
	},

	ope_btnSaveClick: function(button, e, options) {
	    var _win = button.up('window'); var _frm = _win.down('form');
	    if ( _win.down('#ped_nro').getValue() == '' || _win.down('#ped_nro').getValue()*1 <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el NUMERO del Documento', function() { _frm.down('#ped_nro').focus(); }); return false ; }
	    if ( !_win.down('#ped_fecha').isValid() ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar la FECHA del documento', function() { _frm.down('#ped_fecha').focus(); }); return false ; }
	    var _key = ( _win.down('#cntPersonas').isVisible() ? _win.down('#pers_key') : _win.down('#indiv_key'));
	    if ( _win.down('#doc_id').getValue() == '813' ) {
	    	if ( _key.getValue() == '' ) {
	    		Ext.Msg.alert(translations.mensaje, 'Debe indicar CLIENTE al que se emitirá el documento', function() { _win.down('#pers_ruc').focus(); }); return false ; }
	    }
	    if ( _win.down('#oper_key').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el OPERADOR', function() { _frm.down('#oper_dni').focus(); }); return false ; }
	    if ( _win.down('#unidveh_key').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar la MAQUINARIA', function() { _frm.down('#unidveh_key').focus(); }); return false ; }
	    if ( !_win.down('#peddet_odofin').isDisabled() && (_win.down('#peddet_odofin').getValue() == '' || _win.down('#peddet_odofin').getValue()*1 <= 0) ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el ODOMETRO FINAL', function() { _frm.down('#peddet_odofin').focus(); }); return false ; }
	    if ( !_win.down('#peddet_horofin').isDisabled() && (_win.down('#peddet_horofin').getValue() == '' || _win.down('#peddet_horofin').getValue()*1 <= 0) ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el HOROMETRO FINAL', function() { _frm.down('#peddet_horofin').focus(); }); return false ; }
		if ( _win.down('#serv_id').getValue() == null || _win.down('#serv_id').getValue()*1 <= 0 ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar el SERVICIO', function() { _frm.down('#serv_id').focus(); }); return false ; }
		if ( _win.down('#peddet_horaini').getRawValue().length*1 !== 5 ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar la HORA INICIAL', function() { _frm.down('#peddet_horaini').focus(); }); return false ; }
		if ( _win.down('#peddet_horafin').getRawValue().length*1 !== 5 ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar la HORA FINAL', function() { _frm.down('#peddet_horafin').focus(); }); return false ; }
	    if ( _frm.getForm().isValid() ) {
			Ext.Msg.confirm(translations.confirmar, translations.mensaje_pregunta_guardar, function(btn){
			if ( btn == 'yes' ) {
			    var _vs = fextpub_sessionVariables();
			    _frm.getForm().submit({
					method: 'POST', url: 'php/operations_pedidos_save.php',
					params:{ xx0005: 'YES',   xxType_edit: _win.getTypeEdit(),
						     xxDoc_id: _win.down('#doc_id').getValue(), xxPed_serie: _win.down('#ped_serie').getValue(), xxPed_nro: _win.down('#ped_nro').getValue(), xxPed_fecha: _win.down('#ped_fecha').getSubmitData(),
							 xxTipdocident_id: _win.down('#tipdocident_id').getValue(), xxPers_key: _key.getValue(), xxUnidveh_key: _win.down('#unidveh_key').getValue(),
							 xxPeddet_odoini: _win.down('#peddet_odoini').getValue(), xxPeddet_horoini: _win.down('#peddet_horoini').getValue(),
							 xxPeddet_horaini: _win.down('#peddet_horaini').getRawValue(), xxPeddet_horafin: _win.down('#peddet_horafin').getRawValue(),
							 zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
		            waitTitle: translations.valida_titulo, waitMsg: translations.valida_mensaje01,
			        success: function(form, action) {
			            var result = Siace.util.Util.decodeJSON(action.response.responseText);
			            if ( result.success ) {
				            if ( _win.getCallStore() !== null ) {
				            	_win.getCallStore().load();
						    } else if ( _win.getCallWindow() !== null ) {
						    }
	            	        _win.close();
			            } else { Siace.util.Util.showErrorMsg(result.msg); }
			        },
			        failure: function(form, action) {
			            Siace.util.Util.showErrorMsg(action.response.responseText);
			        }
			    });
			}});
	    }
	},

	ope_btnUndoClick: function(button, e, options) {
		button.up('window').close();
	},

	ope_btnExitClick: function(button, e, options) {
		button.up('window').close();
	},

	ope_btnIndiv_searchClick: function(button, e, options) {
 		fext_windowSearch(this.getPis_Public_IndividuosSearch(), button.up('window'), 'Siace.view.public.IndividuosSearch', translations.public_individuossearch_title, button.up('window').down('#indiv_key').getValue(), '', '', false);
	},

	ope_btnPers_searchClick: function(button, e, options) {
		fext_windowSearch(this.getPps_Public_PersonasSearch(), button.up('window'), 'Siace.view.public.PersonasSearch', translations.public_personassearch_title_cliente, button.up('window').down('#pers_key').getValue(), 'ONLY_WITH_RUC', '', false);
	},

	ope_indiv_dniBlur: function(textfield, The, options) {
		this.ope_indiv_dniSearch('0', textfield.up('form'));
	},

	ope_indiv_dniFocus: function(textfield, The, options) {
		this.ope_indiv_dniSearch('1', textfield.up('form'));
	},

	ope_indiv_dniKeypress: function(textfield, e, options) {
		if( e.getCharCode() == 13 ) { this.ope_indiv_dniSearch('13', textfield.up('form')); }
	},

	ope_indiv_dniSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['indiv_key', 'INDIV_DNI', 'indiv_dni', 'indiv_apenom'], 
			            ['php/public_individuos_json_records.php', 'xxIndiv_dni', 'textfield_search', ''], '0', 
			            ['Siace.view.public.IndividuosEdit', translations.public_individuossedit_title_new, ['indiv_dni'], '']);
	},

	ope_oper_dniBlur: function(textfield, The, options) {
		this.ope_oper_dniSearch('0', textfield.up('form'));
	},

	ope_oper_dniFocus: function(textfield, The, options) {
		this.ope_oper_dniSearch('1', textfield.up('form'));
	},

	ope_oper_dniKeypress: function(textfield, e, options) {
		if( e.getCharCode() == 13 ) { this.ope_oper_dniSearch('13', textfield.up('form')); }
	},

	ope_oper_dniSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['oper_key', 'OPER_DNI', 'oper_dni', 'oper_apenom'], 
			            ['php/public_individuos_json_records.php', 'xxIndiv_dni', 'textfield_search', ''], '1', 
			            ['Siace.view.public.IndividuosEdit', translations.public_individuossedit_title_new, ['indiv_dni'], '']);
	},

	ope_peddet_cantidUpdate: function(poComponent) {
		if ( poComponent.down('#peddet_horaini').getRawValue().length*1 == 5 && poComponent.down('#peddet_horafin').getRawValue().length*1 == 5 ) {
			var _resta = fjsTimeSubtractHours(poComponent.down('#peddet_horaini').getRawValue(), poComponent.down('#peddet_horafin').getRawValue(), 0);
			poComponent.down('#peddet_horas').setValue(_resta.substr(0,2)*1); poComponent.down('#peddet_minutos').setValue(_resta.substr(3,2)*1);
		} else {
			poComponent.down('#peddet_horas').setValue(''); poComponent.down('#peddet_minutos').setValue('');
		}
	},

	ope_peddet_horafinChange: function(textfield, newValue, oldValue, options) {
		if ( fjsIn_array(textfield.up('window').getTypeEdit(), ['1','2']) ) { this.ope_peddet_cantidUpdate(textfield.up('window')); }
	},

	ope_peddet_horainiChange: function(textfield, newValue, oldValue, options) {
		if ( fjsIn_array(textfield.up('window').getTypeEdit(), ['1','2']) ) { this.ope_peddet_cantidUpdate(textfield.up('window')); }
	},

	ope_pers_rucBlur: function(textfield, e, options) {
		this.ope_pers_rucSearch('0', textfield.up('form'));
	},

	ope_pers_rucFocus: function(textfield, e, options) {
		this.ope_pers_rucSearch('1', textfield.up('form'));
	},

	ope_pers_rucKeypress: function(textfield, e, options) {
		if( e.getCharCode() == 13 ) { this.ope_pers_rucSearch('13', textfield.up('form')); }
	},

	ope_pers_rucSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['pers_key', 'PERS_RUC', 'pers_ruc', 'pers_nombre'],
			            ['php/public_personas_json_records.php', 'xxPers_ruc', 'textfield_search', ''], '1',
			            ['Siace.view.public.PersonasEdit', translations.public_personasedit_title_new, ['pers_ruc'], ''], '');
	},

	ope_unidveh_keyChange: function(combo, newValue, oldValue, options) {
		var _win = combo.up('window');
		var _record = combo.getStore().findRecord('unidveh_key', combo.getValue());
		
		if ( fjsIn_array(_win.getTypeEdit(), ['1','2']) ) {
			if ( _record.data.unidveh_odo == '1' ) {
				_win.down('#peddet_odoini').removeCls('x-item-disabled'); _win.down('#peddet_odoini').addCls('myDisabledClass'); _win.down('#peddet_odofin').enable();
				_win.down('#peddet_odoini').setValue(_record.data.unidveh_odometro);
			} else {
				_win.down('#peddet_odoini').removeCls('myDisabledClass'); _win.down('#peddet_odoini').addCls('x-item-disabled'); _win.down('#peddet_odofin').disable();
				_win.down('#peddet_odoini').setValue(_record.data.unidveh_odometro);
			}
			if ( _record.data.unidveh_horo == '1' ) {
				_win.down('#peddet_horoini').removeCls('x-item-disabled'); _win.down('#peddet_horoini').addCls('myDisabledClass'); _win.down('#peddet_horofin').enable();
				_win.down('#peddet_horoini').setValue(_record.data.unidveh_horometro);
			} else {
				_win.down('#peddet_horoini').removeCls('myDisabledClass'); _win.down('#peddet_horoini').addCls('x-item-disabled'); _win.down('#peddet_horofin').disable();
			}
		}
	},

	ope_tipdocident_idChange: function(combo, newValue, oldValue, options) {
		var _win = combo.up('window');
		if ( newValue == '1' ) {
			_win.down('#cntPersonas').setVisible(false); _win.down('#cntIndividuos').setVisible(true);
			_win.down('#pers_ruc').disable(); _win.down('#btnPers_search').disable();
			if ( fjsIn_array(_win.getTypeEdit(), ['1','2']) ) { _win.down('#indiv_dni').enable(); _win.down('#btnIndiv_search').enable(); }
			_win.down('#pers_key').setValue(''); _win.down('#PERS_RUC').setValue(''); _win.down('#pers_ruc').setValue(''); _win.down('#pers_nombre').setValue('');
		} else if ( newValue == '3' ) {
			_win.down('#cntPersonas').setVisible(true); _win.down('#cntIndividuos').setVisible(false);
			if ( fjsIn_array(_win.getTypeEdit(), ['1','2']) ) { _win.down('#pers_ruc').enable(); _win.down('#btnPers_search').enable(); }
			_win.down('#indiv_key').setValue(''); _win.down('#INDIV_DNI').setValue(''); _win.down('#indiv_dni').setValue(''); _win.down('#indiv_apenom').setValue('');

		} else {
			_win.down('#pers_ruc').disable(); _win.down('#btnPers_search').disable(); _win.down('#indiv_dni').disable(); _win.down('#btnIndiv_search').disable();
			if ( fjsIn_array(_win.getTypeEdit(), ['1','2']) ) {
				_win.down('#pers_key').setValue(''); _win.down('#PERS_RUC').setValue(''); _win.down('#pers_ruc').setValue(''); _win.down('#pers_nombre').setValue('');
				_win.down('#indiv_key').setValue(''); _win.down('#INDIV_DNI').setValue(''); _win.down('#indiv_dni').setValue(''); _win.down('#indiv_apenom').setValue('');
			}
		}
	},

	/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	trs_BeforeRender: function(component, options) {
		var _cboBsg_id = component.down('#bsg_id');
		_cboBsg_id.bindStore(Ext.create('Siace.store.public.pedidos_Grupos'));
		this.trs_bst_idChange(component.down('#bst_id'), '1', undefined, '');

		var _cboBscat_id = component.down('#bscat_id');
		_cboBscat_id.bindStore(Ext.create('Siace.store.operations.pedidos_Categorias'));
		_cboBscat_id.getStore().load({
			params: { xxBscat_type: '1', xxType_record: 'combo_abrev', xxAdd_blank: 'YES' },
			callback: function(opt,success,respon) { 
				if ( _cboBscat_id.getStore().getCount() ) { _cboBscat_id.setValue(_cboBscat_id.getStore().getAt(0).data.bscat_id); }
			}
		});
		component.down('#mone_id').setValue(0);

		var _store = Ext.create('Siace.store.operations.pedidos');
		var _grid = component.down('#grdoperations_pedidos');
		var _pagingtoolbar = component.down('#pgtoperations_pedidos');
		_grid.bindStore(_store);  _pagingtoolbar.bindStore(_store);
		_store.sort('bs_nombre', 'ASC');
		_store.on('beforeload', function(store, operations, eOpts) {
			component.down('#btnAccept').setDisabled(true);
		    store.getProxy().setExtraParam('xxBst_id', component.down('#bst_id').getValue());
		    store.getProxy().setExtraParam('xxBsg_id', component.down('#bsg_id').getValue());
		    store.getProxy().setExtraParam('xxBscat_id', component.down('#bscat_id').getValue());
		    store.getProxy().setExtraParam('xxMone_id', component.down('#mone_id').getValue());
		    store.getProxy().setExtraParam('xxBs_nombre', component.down('#bs_nombre').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'grid_search');
		    store.getProxy().setExtraParam('xxType_query', component.getTypeQuery());
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		    store.getProxy().setExtraParam('xxPaginate', '1');
		});
		_store.pageSize = 500;  _store.load();
	},

	trs_Clean: function() {
		var _window = this.gettrs_grdOperations_pedidos().up('window');
		var _store = _window.down('#pgtoperations_pedidos').getStore();
		var _pagingtoolbar = _window.down('#pgtoperations_pedidos');
		fext_gridClean(_store, _pagingtoolbar);

		_window.down('#btnAccept').setDisabled(true);
	},

	trs_btnAcceptClick: function(button, e, options) {
		var _win = button.up('window');
		var _grid = _win.down('#grdoperations_pedidos');
        var _record = _grid.getSelectionModel().getSelection();
        var _close = true;

        if ( _record[0] && _record[0].data.bs_id !== _win.getCallKey() ) {
        	if ( _win.getCallWindow() !== null ) {
        		if ( _win.getTypeReturn() == 'ADD_VENTAS' ) {
        			var _store = _win.getCallWindow().down('#grdoperations_ventas_det').getStore();
        			var _model = _store.findRecord('bs_id', _record[0].data.bs_id);
        			if ( _model == null ) {
        				var _monto = _win.getCallWindow().down('#vent_monto').getValue();
        				if ( _monto*1 > 0 ) {
        					if ( _record[0].data.mone_id !== _win.getCallWindow().down('#mone_id').getValue() ) {
								Ext.Msg.alert(translations.mensaje, 'moneda de servicio seleccionado es diferente al establecido en el documento de venta');
								return false;
        					}	
        				} else {
        					_win.getCallWindow().down('#mone_id').setValue(_record[0].data.mone_id);
        				}
        				_win.getCallWindow().down('#vent_monto').setValue( _win.getCallWindow().down('#vent_monto').getValue()*1 + _record[0].data.bs_importe );

	        			_store.add({
	       					bs_id: _record[0].data.bs_id,
	       					bs_codigo: _record[0].data.bs_codigo,
	        				bs_nombre: _record[0].data.bs_nombre,
	        				unimed_abrev: _record[0].data.unimed_abrev,
	        				ventdet_cantid: 1,
	        				ventdet_preuni: _record[0].data.bs_importe,
	        				ventdet_pretot: _record[0].data.bs_importe,
	    				});
	    			} else {
	    				_close = false;
	    				Ext.Msg.alert(translations.mensaje, 'servicio seleccionado ya se encuentra establecido');
	    			}
        		} else {
       				_win.getCallWindow().down('#name=bs_key').setValue(_record[0].data.bs_key);
       				_win.getCallWindow().down('#bs_codigo').setValue(_record[0].data.bs_codigo);
       				_win.getCallWindow().down('#bs_nombre').setValue(_record[0].data.bs_nombre);
       			}
        	}
        	if ( _close ) { _win.close();  if ( _win.getActionDestroy() == true ) { _win.destroy(); } }
		}
	},

	trs_btnCancelClick: function(button, e, options) {
		var _win = button.up('window');
		_win.close();  if ( _win.getActionDestroy() == true ) { _win.destroy(); }
	},

	trs_bs_nombreChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.trs_Clean(); }
	},

	trs_bscat_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.trs_Clean(); }
	},

	trs_bsg_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.trs_Clean(); }
	},

	trs_bst_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.trs_Clean(); }

		var _cboBsg_id = combo.up('window').down('#bsg_id');
		_cboBsg_id.getStore().load({
			params: { xxBst_id: newValue, xxType_record: 'combo', xxAdd_blank: 'YES' },
			callback: function(opt,success,respon) {
			   	if ( _cboBsg_id.getStore().getCount() > 0 ) {
			    	_cboBsg_id.setDisabled(false);  _cboBsg_id.setValue(_cboBsg_id.getStore().getAt(0).data.bsg_id);
			    } else {
			    	_cboBsg_id.setDisabled(true);  _cboBsg_id.setValue('');
			    }
    		}
		});
	},

	trs_grdOperations_pedidosItemdblclick: function(component, record, item, index, e, options) {
		var _btnAccept = component.up('window').down('#btnAccept');
        _btnAccept.fireEvent('click', _btnAccept, e, options);
	},


	trs_grdOperations_pedidosSelectionchange: function(model, record, options) {
		if ( record.length == 1 ) {
			_win = this.gettrs_grdOperations_pedidos().up('window');
			_win.down('#btnAccept').setDisabled( record[0].data.bs_id == _win.getCallKey() ? true : false );
		}
	},

	trs_mone_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.trs_Clean(); }
	},
});