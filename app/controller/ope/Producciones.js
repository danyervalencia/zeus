Ext.define('Siace.controller.operations.Producciones', {
	extend: 'Ext.app.Controller',
	views: [
		'operations.ProduccionesBrowse', //'operations.GuiasEdit',
	],
	stores: [
		'operations.Producciones', //'operations.Industrias_Insumos', 'operations.Industrias_Coeficientes', 'public.Almacenes',
	],
    refs: [
        { ref: 'opb_grdOperations_Producciones', selector: 'operations_produccionesbrowse #grdOperations_producciones' },
        { ref: 'ope_grdOperations_Industrias_Insumos', selector: 'operations_produccionesedit #grdOperations_industrias_insumos' },
    ],

	init: function(application) {
		this.control({
			'operations_produccionesbrowse': { beforerender: this.opb_BeforeRender, },
			'operations_produccionesbrowse #opc_id': { change: this.opb_opc_idChange, },
			'operations_produccionesbrowse #btnNew': { click: this.opb_btnNewClick, },
			'operations_produccionesbrowse #btnModify': { },
			'operations_produccionesbrowse #btnQuery': { click: this.opb_btnQueryClick, },
			'operations_produccionesbrowse #btnPrinter': { click: this.opb_btnPrinterClick, },
			'operations_produccionesbrowse #btnAnnular': { click: this.opb_btnAnnularClick, },
			'operations_produccionesbrowse #btnVobo': { click: this.opb_btnVoboClick, },
            'operations_produccionesbrowse #alma_key': { change: this.opb_alma_keyChange, },
			'operations_produccionesbrowse #fechafin': { change: this.opb_fechainiChange },
			'operations_produccionesbrowse #fechaini': { change: this.opb_fechafinChange, },
			'operations_produccionesbrowse #grdOperations_producciones': { selectionchange: this.opb_grdOperations_produccionesSelectionchange, },
			'operations_produccionesbrowse #prdcc_nro': { change: this.opb_prcc_nroChange, },
			'operations_produccionesbrowse #prdcc_serie': { change: this.opb_prdcc_serieChange, },

            'operations_produccionesedit': { beforeshow: this.ope_BeforeShow, },
            'operations_produccionesedit #btnSave': { click: this.ope_btnSaveClick, },
            'operations_produccionesedit #btnUndo': { click: this.ope_btnUndoClick, },
            'operations_produccionesedit #alma_key': { change: this.ope_alma_keyChange, },
            'operations_produccionesedit #indus_key': { change: this.ope_indus_keyChange, },
			'operations_produccionesedit #grdOperations_industrias_productos': { selectionchange: this.ope_grdOperations_industrias_productosSelectionchange, },
		});
	},

	opb_BeforeRender: function(component, options) {
		fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': component.down('#opc_id'), 'menu_id': component.getMenuId() });
		fextope_almacenesFilter({'objeto': component.down('#alma_key'), 'add_blank': (Ext.getCmp('ah_txtAlma_key').getValue() == '' ? 'YES' : 'NO')});

		var _store = Ext.create('Siace.store.operations.Producciones');
		var _grid = component.down('#grdOperations_producciones'); var _pag = component.down('#pagOperations_producciones');
		_grid.bindStore(_store);  _pag.bindStore(_store);
		_store.sort('prdcc_fecha', 'DESC'); _store.pageSize = 500;
		_store.on('beforeload', function(store, operations, eOpts) {
			component.down('#btnModify').disable(); component.down('#btnQuery').disable(); component.down('#btnAnnular').disable(); component.down('#btnVobo').disable(); component.down('#btnPrinter').disable();

		    store.getProxy().setExtraParam('xxAlma_key', component.down('#alma_key').getValue());
		    store.getProxy().setExtraParam('xxPrdcc_serie', component.down('#prdcc_serie').getValue());
		    store.getProxy().setExtraParam('xxPrdcc_nro', component.down('#prdcc_nro').getValue());
		    store.getProxy().setExtraParam('xxFechaini', component.down('#fechaini').getSubmitData());
		    store.getProxy().setExtraParam('xxFechafin', component.down('#fechafin').getSubmitData());
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		}); _store.load();
	},

	opb_Clean: function(poComponent) {
		var _pag = poComponent.down('#pagOperations_producciones'); var _store = _pag.getStore();
		fext_gridClean(_store, _pag);

		poComponent.down('#btnQuery').disable(); poComponent.down('#btnAnnular').disable(); poComponent.down('#btnVobo').disable(); poComponent.down('#btnPrinter').disable();
	},

	opb_opc_idChange: function(combo, newValue, oldValue, options) {
		combo.up('panel').down('#btnNew').setDisabled(fextpub_uamoButtons(combo, 1));
	},

	opb_ViewEdit: function(poComponent, pcTypeEdit){
		if ( fjsIn_array(pcTypeEdit, ['2','3']) ) {
        	var _record = poComponent.down('#grdOperations_producciones').getSelectionModel().getSelection()[0];
        	if ( !_record ) { return false; }
        }
	    var _win = Ext.create('Siace.view.operations.ProduccionesEdit');
	    _win.setTypeEdit(pcTypeEdit); _win.setCallStore(poComponent.down('#grdOperations_producciones').getStore());
	    if ( fjsIn_array(pcTypeEdit, ['2','3']) ) { _win.setCallKey(_record.data.prdcc_key); }
	    _win.show();
	},

	opb_btnNewClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 1) ) { return false; } this.opb_ViewEdit(button.up('panel'), '1');
	},

	opb_btnQueryClick: function(button, e, options) {
	},

	opb_btnPrinterClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 8) ) { return false; } 
		var _record = button.up('panel').down('#grdOperations_producciones').getSelectionModel().getSelection()[0];
		if ( !_record ) { return false; }
        var _mainpanel = Ext.ComponentQuery.query('access_mainpanel')[0];

        _newTab = _mainpanel.add({
            xtype: 'panel',
            closable: true,
            iconCls: 'icon_0032',
            title: translations.pdf_operations_producciones_printer_title,
            layout: 'fit',
            html: 'loading PDF...',
            items: [{
                xtype: 'uxiframe',
                src: 'php/pdf/pdf_operations_producciones_printer.php?xxPrdcc_key='+_record.data.prdcc_key,
            }]
        });

        _mainpanel.setActiveTab(_newTab);
	},

	opb_btnAnnularClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 10) ) { return false; }
		var _panel = button.up('panel');		
		if ( options == undefined ) {
	        var _record = _panel.down('#grdOperations_producciones').getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }

	        _fase_id = _record.data.fase_id;
			Ext.Msg.confirm(translations.confirmar, translations.mensaje_pregunta_anular, function(btn){
				if ( btn == 'yes' ) {
					var _win = Ext.create('Siace.view.public.UsuariosPsw2');
					_win.setCallButton(button);
					_win.setCallKey(_record.data.prdcc_key);
					_win.setSubTitle(_record.data.prdcc_documento);
					_win.setFormType('10');
					_win.show();
				}
			});
		} else {
			var _win = options.win;
			var _store = _panel.down('#grdOperations_producciones').getStore(); var _menu_id = _panel.getMenuId();
			Ext.get(_panel.getEl()).mask(translations.mensaje_validando_espere, translations.cargando);
			var _vs = fextpub_sessionVariables();
			Ext.Ajax.request({
				url: 'php/operations_producciones_delete.php',
				params: { xxAnnular: 'YES', xxPrdcc_key: options.key, xxUsur_psw2: options.usur_psw2, xxPrdcc_observ: options.observ, xxMenu_id: _menu_id,
					      zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
				success: function(conn, response, options, eOpts) {
					var _result = Siace.util.Util.decodeJSON(conn.responseText);
					if ( _result.success ) {
						_win.close(); _win.destroy();
			            _store.load({ callback: function(opt, success, respon) { Ext.get(_panel.getEl()).unmask(); } });
					} else {
						Ext.get(_panel.getEl()).unmask(); Siace.util.Util.showErrorMsg(_result.msg);
					}
				},
				failure: function(conn, response, options, eOpts) {
					Ext.get(_panel.getEl()).unmask(); Siace.util.Util.showErrorMsg(conn.responseText);
				}
			});
		}
	},

	opb_btnVoboClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 41) ) { return false; }
		var _panel = button.up('panel');				
		if ( options == undefined ) {
	        var _record = _panel.down('#grdOperations_producciones').getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }

	        _fase_id = _record.data.fase_id;
			Ext.Msg.confirm(translations.confirmar, (_fase_id == '320' ? translations.mensaje_pregunta_vobo_deshacer : translations.mensaje_pregunta_vobo), function(btn){
				if ( btn == 'yes' ) {
					var _win = Ext.create('Siace.view.public.UsuariosPsw2');
					_win.setCallButton(button);
					_win.setCallKey(_record.data.prdcc_key);
					_win.setSubTitle((_fase_id == '320' ? translations.deshacer +' ' :'') + 'VoBo \xa0 '+_record.data.prdcc_documento);
					_win.setFormType(_fase_id == '320' ? '42' : '41');
					_win.show();
				}
			});
		} else {
			var _win = options.win;
			var _store = _panel.down('#grdOperations_producciones').getStore(); var _menu_id = _panel.getMenuId();
			Ext.get(_panel.getEl()).mask(translations.mensaje_validando_espere, translations.cargando);
			var _vs = fextpub_sessionVariables();
			Ext.Ajax.request({
				url: 'php/operations_producciones_save_fase.php',
				params: { xx0005: 'YES', xxPrdcc_key: options.key, xxFase_id: _fase_id, xxUsur_psw2: options.usur_psw2, xxPrdcc_observ: options.observ,
					      zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
				success: function(conn, response, options, eOpts) {
					var _result = Siace.util.Util.decodeJSON(conn.responseText);
					if ( _result.success ) {
						_win.close(); _win.destroy();
			            _store.load({ callback: function(opt, success, respon) { Ext.get(_panel.getEl()).unmask(); } });
					} else {
						Ext.get(_panel.getEl()).unmask(); Siace.util.Util.showErrorMsg(_result.msg);
					}
				},
				failure: function(conn, response, options, eOpts) {
					Ext.get(_panel.getEl()).unmask(); Siace.util.Util.showErrorMsg(conn.responseText);
				}
			});
		}
	},

	opb_alma_keyChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.opb_Clean(combo.up('panel')); }
	},

	opb_fechainiChange: function(datefiled, newValue, oldValue, options) {
		this.opb_Clean(datefiled.up('panel'));
	},

	opb_fechafinChange: function(datefiled, newValue, oldValue, options) {
		this.opb_Clean(datefiled.up('panel'));
	},

	opb_grdOperations_produccionesSelectionchange: function(model, record, options) {
		if ( record.length == 1 ) {
			var _panel = model.view.panel.up('panel'); var _cboOpc_id = _panel.down('#opc_id'); _flga = record[0].data.prdcc_flga; _fase_id = record[0].data.fase_id;

			_panel.down('#btnQuery').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 3));
			_panel.down('#btnAnnular').setDisabled(_flga == '98' || _fase_id == '320'? true : fextpub_uamoButtons(_cboOpc_id, 10));
			_panel.down('#btnAnnular').setDisabled(_flga == '98' || _fase_id == '320'? true : fextpub_uamoButtons(_cboOpc_id, 42));
			_panel.down('#btnPrinter').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 8));
		}
	},

	opb_prdcc_nroChange: function(textfiled, newValue, oldValue, options) {
		this.opb_Clean(textfiled.up('panel'));
	},

	opb_prdcc_serieChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.opb_Clean(combo.up('panel')); }
	},

	ope_BeforeShow: function(component, options) {
		var _typeEdit = component.getTypeEdit();

		var _cboPrdcc_serie = component.down('#prdcc_serie');
		_cboPrdcc_serie.bindStore(Ext.create('Siace.store.public.Years'));
		_cboPrdcc_serie.getStore().load({ 
			params: { xxYear_estado: '1', xxType_record: 'combo' }, 
			callback: function(records, operations, success) {
				if ( component.getTypeEdit() == '1' && records.length > 0  ) { _cboPrdcc_serie.setValue(records[0].data.year_id); }
			}

		});

		var _cboIndus_key = component.down('#indus_key');
		_cboIndus_key.bindStore(Ext.create('Siace.store.operations.Industrias'));

		component.down('#grdOperations_industrias_productos').bindStore(Ext.create('Siace.store.operations.Industrias_Productos'));
		component.down('#grdOperations_industrias_insumos').bindStore(Ext.create('Siace.store.operations.Industrias_Insumos'));

        if ( _typeEdit == '1' ) {
        	fextope_almacenesFilter({'objeto': component.down('#alma_key'), 'type_record': 'combo', 'add_blank': 'NO'});
        	var _icon = 'icon_New_90'; var _title = translations.operations_produccionesedit_title_new;
        } else {
        	fextope_almacenesFilter({'objeto': component.down('#alma_key'), 'type_record': 'combo', 'add_blank': 'NO'});
	        var _form = component.down('form');
	   		_form.load({
	   			method: 'POST', url: 'php/operations_industrias_json_records.php',
	            params: { xxIndus_key: component.getCallKey(),  xxType_record: 'form' },
	            waitMsg: 'Loading...',
	            success: function (form, action) {
	                try {
	                    var _model = Ext.create('Siace.model.operations.Industria');  var _result = Ext.decode(action.response.responseText);
	                    if ( _result.data[0] ) {
	                        _model.set(_result.data[0]);  _form.loadRecord(_model);
	                        _form.down('#indus_nro').setValue( fjsLpad(_model.data.indus_nro, 5, '0') );

					        component.down('#grdOperations_industrias_insumos').getStore().load({
								params: { xxIndus_key: component.getCallKey(), xxType_record: 'grid_industrias_edit' },
								callback: function(opt, success, respon) {
							        component.down('#grdOperations_industrias_coeficientes').getStore().load({
										params: { xxIndus_key: component.getCallKey(), xxType_record: 'grid_industrias_edit' },
										callback: function(opt, success, respon) {
											component.down('#grdOperations_industrias_insumos').getSelectionModel().select(0, true);
										}
									});
								}			
							});

	                    }
	                }
	                catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
	            },
	            failure: function (form, action) { Ext.Msg.alert("Load failed", action.result.errorMessage); }
	        });

			if ( _typeEdit == '2' ) {
				var _icon = 'icon_Modify_90'; var _title = translations.operations_industriasedit_title_modify;
			} else if ( _typeEdit == '3' ) {
				var _icon = 'icon_Query_90'; var _title = translations.operations_industriasedit_title_query;
				component.down('#alma_key').disable(); component.down('#bs_codigo').disable();
				component.down('#btnBs_search').disable();
				component.down('#btnAdd').disable(); component.down('#btnSave').disable(); component.down('#btnUndo').disable(); component.down('#btnExit').enable();
			}
		}

		component.setIconCls(_icon); component.setTitle(_title);
	},

	ope_btnSaveClick: function(button, e, options) {
	    var _win = button.up('window'); var _frm = _win.down('form');
	    if ( _frm.down('#indus_key').getValue() == '' || _frm.down('#indus_key').getValue() == null ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el Cuadro Insumo Producto', function() { _frm.down('#indus_key').focus(); }); return false ; }

		var _productos = '';
		var _recordsProductos = _frm.down('#grdOperations_industrias_productos').getStore().getRange();
		for ( var _i = 0;  _i < _recordsProductos.length; _i++ ) {
			_cantid = _recordsProductos[_i].get('indusprod_cantid');
			if ( _cantid == '' || _cantid == null || _cantid*1 <= 0 ) {
		    	Ext.Msg.alert(translations.mensaje, 'Cantidad de Producción debe ser mayor que cero');
		    	return false ; }
			_productos += (_i == 0 ? '' : ',') + '{' + _recordsProductos[_i].get('indusprod_key') +','+ _cantid + '}';
		}

		var _insumos = '';
		var _recordsInsumos = _frm.down('#grdOperations_industrias_insumos').getStore().getRange();
		for ( var _i = 0;  _i < _recordsInsumos.length; _i++ ) {
			_cantid = _recordsInsumos[_i].get('indusinsu_cantid');
			console.log(_cantid +'***'+ _recordsInsumos[_i].get('indusinsu_key'));
			if ( _cantid*1 > 0 && _cantid !== null && _cantid !== '' ) {
				_insumos += (_i == 0 ? '' : ',') +'{'+ _recordsInsumos[_i].get('indusinsu_key') +','+ _recordsInsumos[_i].get('bs_key') +','+ _cantid + '}';
			}
		}
		if ( _insumos == '' ) {
			_insumos = '{0,0,0}';
		}

	    if ( _frm.getForm().isValid() ) {
	    	var _store = this.getOpb_grdOperations_Producciones().getStore();
	    	var _vs = fextpub_sessionVariables();
	        _frm.getForm().submit({
				method: 'POST', url: 'php/operations_producciones_save.php',
				params:{ xx0005: 'YES', xxPrdcc_serie: _frm.down('#prdcc_serie').getValue(), xxProductos: _productos, xxInsumos: _insumos,
						 zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
                waitTitle: translations.valida_titulo, waitMsg: translations.valida_mensaje01,
	            success: function(form, action) {
	            	var result = Siace.util.Util.decodeJSON(action.response.responseText);
	                if ( result.success ) {
	                	Siace.util.Alert.msg('Success!', 'User saved.');
	                    _store.load();  _win.close();
	                } else {
	                    Siace.util.Util.showErrorMsg(result.msg);
	                }
	            },
	            failure: function(form, action) {
	                Siace.util.Util.showErrorMsg(action.response.responseText);
	            }
	        });
	    }
	},

	ope_btnUndoClick: function(button, e, options) {
		button.up('window').close();
	},

	ope_grdOperations_industrias_productosSelectionchange: function(model, record, options) {
		if ( record.length == 1 ) {
			var _grid = this.getOpe_grdOperations_Industrias_Insumos();
			_grid.getStore().load({
				params: { xxIndusprod_key: record[0].data.indusprod_key, xxType_record: 'grid_ProduccionesEdit', xxType_query: 'INSUMOS_SIN_COEFICIENTE', xxOrder_by: 'bs_nombre' },
				callback: function(opt, success, respon) { 
					//_grid.getSelectionModel().select(0, true);
				}
			});			
  			_grid.getView().refresh(true);
		}
	},

	ope_alma_keyChange: function(combo, newValue, oldValue, options) {
		var _cboIndus_key = combo.up('form').down('#indus_key');
		if ( combo.up('window').getTypeEdit() == '1' ) {
			_cboIndus_key.getStore().load({ 
				params: { xxAlma_key: (combo.getValue() == '' ? 'XXX' : combo.getValue()), xxType_record: 'combo', xxType_query: '320', xxAdd_blank: 'YES' },
				callback: function(opt, success, respon) {
					_cboIndus_key.setValue('');
   				}
			});
		} else {

		}
	},

	ope_indus_keyChange: function(combo, newValue, oldValue, options) {
		var _grdProductos = combo.up('form').down('#grdOperations_industrias_productos');
		var _grdInsumos = combo.up('form').down('#grdOperations_industrias_insumos');
		if ( combo.up('window').getTypeEdit() == '1' ) {
			_grdInsumos.getStore().removeAll();
			if ( newValue == null || newValue == '' ) {
				_grdProductos.getStore().removeAll();
			} else {
				_grdProductos.getStore().load({ 
					params: { xxIndus_key: newValue, xxType_record: 'grid_ProduccionesEdit' },
					callback: function(opt, success, respon) { 
						_grdProductos.getSelectionModel().select(0, true);
					}
				});
			}
		} else {

		}
	},
});