Ext.define('Siace.controller.operations.Industrias', {
	extend: 'Ext.app.Controller',
	views: ['operations.IndustriasBrowse', 'operations.GuiasEdit',],
	stores: ['operations.Industrias', 'operations.Industrias_Insumos', 'operations.Industrias_Coeficientes',],
    refs: [
        { ref: 'oie_grdOperations_Industrias_Insumos', selector: 'operations_industriasedit #grdOperations_industrias_insumos' },
        { ref: 'oie_grdOperations_Industrias_Coeficientes', selector: 'operations_industriasedit #grdOperations_industrias_coeficientes' },
        { ref: 'pbss_Bienes_ServsSearch', selector: 'public_bienes_servssearch' },
    ],

	init: function(application) {
		this.control({
			'operations_industriasbrowse': { beforerender: this.oib_BeforeRender, },
			'operations_industriasbrowse #opc_id': { change: this.oib_opc_idChange, },
			'operations_industriasbrowse #btnNew': { click: this.oib_btnNewClick, },
			'operations_industriasbrowse #btnModify': { click: this.oib_btnModifyClick, },
			'operations_industriasbrowse #btnQuery': { click: this.oib_btnQueryClick, },
			'operations_industriasbrowse #btnAnnular': { click: this.oib_btnAnnularClick, },
			'operations_industriasbrowse #btnVobo': { click: this.oib_btnVoboClick, },
			'operations_industriasbrowse #btnOptional': { click: this.oib_btnOptionalClick, },
			'operations_industriasbrowse #btnPrinter': { click: this.oib_btnPrinterClick, },
            'operations_industriasbrowse #alma_key': { change: this.oib_alma_keyChange, },
			'operations_industriasbrowse #fechafin': { change: this.oib_fechainiChange },
			'operations_industriasbrowse #fechaini': { change: this.oib_fechafinChange, },            
			'operations_industriasbrowse #grdOperations_industrias': { selectionchange: this.oib_grdOperations_industriasSelectionchange, },
			'operations_industriasbrowse #indus_nro': { change: this.oib_indus_nroChange, },
			'operations_industriasbrowse #indus_serie': { change: this.oib_indus_serieChange, },


            'operations_industriasedit': { beforeshow: this.oie_BeforeShow, close: this.oie_Close, },
            'operations_industriasedit #btnSave': { click: this.oie_btnSaveClick, },
            'operations_industriasedit #btnUndo': { click: this.oie_btnUndoClick, },
            'operations_industriasedit #btnAdd': { click: this.oie_btnAddClick, },
            'operations_industriasedit #btnSuppress': { click: this.oie_btnSuppressClick, },
            'operations_industriasedit #btnExit': { click: this.oie_btnExitClick, },
            'operations_industriasedit #btnBs_search': { click: this.oie_btnBs_searchClick, },
            'operations_industriasedit #btnCoefAdd': { click: this.oie_btnCoefAddClick, },
            'operations_industriasedit #btnCoefDel': { click: this.oie_btnCoefDelClick, },
			'operations_industriasedit #grdOperations_industrias_insumos': { selectionchange: this.oie_grdOperations_industrias_insumosSelectionchange, },
			'operations_industriasedit #grdOperations_industrias_coeficientes': { selectionchange: this.oie_grdOperations_industrias_coeficientesSelectionchange, },
            'operations_industriasedit #bs_codigo': {
                blur: this.oie_bs_codigoBlur,
                focus: this.oie_bs_codigoFocus,
                keypress: this.oie_bs_codigoKeypress,
            },

			'operations_industrias_insumoswindowoptional': { beforerender: this.puaw_BeforeRender, },
			'operations_industrias_insumoswindowoptional #btnAdd': { click: this.puaw_btnAddClick, },	
			'operations_industrias_insumoswindowoptional #btnModify': { click: this.puaw_btnModifyClick, },
			'operations_industrias_insumoswindowoptional #btnQuery': { click: this.puaw_btnQueryClick, },
			'operations_industrias_insumoswindowoptional #btnMenu': { click: this.puaw_btnMenuClick, },
			'operations_industrias_insumoswindowoptional #btnExit': { click: this.puaw_btnExitClick, },
			'operations_industrias_insumoswindowoptional #grdPublic_usuarios_accesos': { selectionchange: this.puaw_grdPublic_usuarios_accesosSelectionchange, },
		});
	},

	oib_BeforeRender: function( component, options ) {
		fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': component.down('#opc_id'), 'menu_id': component.getMenuId() });
		fextope_almacenesFilter({'objeto': component.down('#alma_key'), 'add_blank': (Ext.getCmp('ah_txtAlma_key').getValue() == '' ? 'YES' : 'NO')});
		//fextpub_yearsCombo(component.down('#indus_serie'), '1', 'combo', 'YES');

		var _store = Ext.create('Siace.store.operations.Industrias');
		var _grid = component.down('#grdOperations_industrias'); var _pag = component.down('#pagOperations_industrias');
		_grid.bindStore(_store);  _pag.bindStore(_store);
		_store.sort('indus_fecha', 'DESC'); _store.pageSize = 500;
		_store.on('beforeload', function(store, operations, eOpts) {
			component.down('#btnModify').disable(); component.down('#btnQuery').disable(); component.down('#btnAnnular').disable(); component.down('#btnVobo').disable(); component.down('#btnPrinter').disable(); component.down('#btnOptional').disable();

		    store.getProxy().setExtraParam('xxAlma_key', component.down('#alma_key').getValue());
		    store.getProxy().setExtraParam('xxIndus_nro', component.down('#indus_nro').getValue());
		    store.getProxy().setExtraParam('xxFechaini', component.down('#fechaini').getSubmitData());
		    store.getProxy().setExtraParam('xxFechafin', component.down('#fechafin').getSubmitData());
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		}); _store.load();
	},

	oib_Clean: function(poComponent) {
		var _pag = poComponent.down('#pagOperations_industrias'); var _store = _pag.getStore();
		fext_gridClean(_store, _pag);

		poComponent.down('#btnModify').disable(); poComponent.down('#btnQuery').disable(); poComponent.down('#btnAnnular').disable(); poComponent.down('#btnVobo').disable(); poComponent.down('#btnPrinter').disable(); poComponent.down('#btnOptional').disable();
	},

	oib_opc_idChange: function(combo, newValue, oldValue, options) {
		combo.up('panel').down('#btnNew').setDisabled(fextpub_uamoButtons(combo, 1));
	},

	oib_ViewEdit: function(poComponent, pcTypeEdit){
		if ( fjsIn_array(pcTypeEdit, ['2','3']) ) {
        	var _record = poComponent.down('#grdOperations_industrias').getSelectionModel().getSelection()[0];
        	if ( !_record ) { return false; }
        }
	    var _win = Ext.create('Siace.view.operations.IndustriasEdit');
	    _win.setTypeEdit(pcTypeEdit); _win.setCallStore(poComponent.down('#grdOperations_industrias').getStore());
	    if ( fjsIn_array(pcTypeEdit, ['2','3']) ) { _win.setCallKey(_record.data.indus_key); }
	    _win.show();
	},

	oib_btnNewClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 1) ) { return false; } this.oib_ViewEdit(button.up('panel'), '1');
	},

	oib_btnModifyClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 2) ) { return false; } this.oib_ViewEdit(button.up('panel'), '2');
	},

	oib_btnQueryClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 3) ) { return false; } this.oib_ViewEdit(button.up('panel'), '3');
	},

	oib_btnAnnularClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 10) ) { return false; }
		var _panel = button.up('panel');
		if ( options == undefined ) {
	        var _record = _panel.down('#grdOperations_industrias').getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }

	        _fase_id = _record.data.fase_id;
			Ext.Msg.confirm(translations.confirmar, translations.mensaje_pregunta_anular, function(btn){
				if ( btn == 'yes' ) {
					var _win = Ext.create('Siace.view.public.UsuariosPsw2');
					_win.setCallButton(button);
					_win.setCallKey(_record.data.indus_key);
					_win.setSubTitle(_record.data.indus_documento);
					_win.setFormType('10');
					_win.show();
				}
			});
		} else {
			var _win = options.win;
			var _store = _panel.down('#grdOperations_industrias').getStore(); var _menu_id = _panel.getMenuId();
			Ext.get(_panel.getEl()).mask(translations.mensaje_validando_espere, translations.cargando);
			var _vs = fextpub_sessionVariables();
			Ext.Ajax.request({
				url: 'php/operations_industrias_delete.php',
				params: { xx0007: 'YES', xxIndus_key: options.key, xxUsur_psw2: options.usur_psw2, xxIndus_observ: options.observ, xxMenu_id: _menu_id,
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

	oib_btnVoboClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 41) ) { return false; }
		var _panel = button.up('panel');
		if ( options == undefined ) {
	        var _record = _panel.down('#grdOperations_industrias').getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }

	        _fase_id = _record.data.fase_id;
			Ext.Msg.confirm(translations.confirmar, (_fase_id == '320' ? translations.mensaje_pregunta_vobo_deshacer : translations.mensaje_pregunta_vobo), function(btn){
				if ( btn == 'yes' ) {
					var _win = Ext.create('Siace.view.public.UsuariosPsw2');
					_win.setCallButton(button);
					_win.setCallKey(_record.data.indus_key);
					_win.setSubTitle((_fase_id == '320' ? translations.deshacer +' ' :'') + 'VoBo \xa0 '+_record.data.indus_documento);
					_win.setFormType(_fase_id == '320' ? '42' : '41');
					_win.show();
				}
			});
		} else {
			var _win = options.win;
			var _store = _panel.down('#grdOperations_industrias').getStore(); var _menu_id = _panel.getMenuId();
			Ext.get(_panel.getEl()).mask(translations.mensaje_validando_espere, translations.cargando);
			var _vs = fextpub_sessionVariables();
			Ext.Ajax.request({
				url: 'php/operations_industrias_save_fase.php',
				params: { xx0005: 'YES', xxIndus_key: options.key, xxFase_id: _fase_id, xxUsur_psw2: options.usur_psw2, xxIndus_observ: options.observ, xxMenu_id: _menu_id,
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

	oib_btnOptionalClick: function(button, e, options) {
		var _panel = button.up('panel');
	    Ext.get(_panel.getEl()).mask(translations.mensaje_esperar, 'loading');

    	var _record = _panel.down('grdOperations_industrias').getSelectionModel().getSelection()[0];
        if ( !_record ) { return false; }

	    var _win = Ext.create('Siace.view.operations.Industrias_InsumosWindowOptional');
	    _win.setTitle('Insumos Opcionales');
	    _win.setCallKey(_record.data.indus_key); _win.down('#indus_key').setValue(_record.data.indus_key);  _win.show();
	    Ext.get(_panel.getEl()).unmask();
	},

	oib_btnPrinterClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 8) ) { return false; } 
		var _panel = button.up('panel');
		var _record = _panel.down('#grdOperations_industrias').getSelectionModel().getSelection()[0];
		if ( !_record ) { return false; }
		fext_pdf('', translations.pdf_operations_industrias_printer_title, 'php/pdf/pdf_operations_industrias_printer.php?xxIndus_key='+_record.data.indus_key);
	},

	oib_alma_keyChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.oib_Clean(combo.up('panel')); }
	},

	oib_fechainiChange: function(datefiled, newValue, oldValue, options) {
		this.oib_Clean(datefiled.up('panel'));
	},

	oib_fechafinChange: function(datefiled, newValue, oldValue, options) {
		this.oib_Clean(datefiled.up('panel'));
	},

	oib_grdOperations_industriasSelectionchange: function(model, record, options) {			
		if ( record.length == 1 ) {
			var _panel = model.view.panel.up('panel'); var _cboOpc_id = _panel.down('#opc_id'); _flga = record[0].data.indus_flga;
			_modify = (record[0].data.indus_flga == '98' || record[0].data.fase_id == '320' ? true : false);
			_panel.down('#btnModify').setDisabled(_modify);
			_query = (record[0].data.indus_flga == '98' ? true : false);
			_panel.down('#btnQuery').setDisabled(_query);
			_annular = (record[0].data.indus_flga == '98' || record[0].data.fase_id == '320' ? true : false);
			_panel.down('#btnAnnular').setDisabled(_annular);
			_vobo = (record[0].data.indus_flga == '98' || (record[0].data.fase_id == '320' && record[0].data.prdcc_rows*1 > 0) ? true : false);
			_panel.down('#btnVobo').setDisabled(_vobo);
			_icon = (record[0].data.indus_flga !== '98' && record[0].data.fase_id == '320' && record[0].data.prdcc_rows*1 <= 0 ? 'icon_VoboUndo' : 'icon_Vobo');
			_panel.down('#btnVobo').setIconCls(_icon);			
			_optional = (record[0].data.indus_flga == '98' ? true : false);
			_panel.down('#btnOptional').setDisabled(_optional);
			_printer = (record[0].data.indus_flga == '98' ? true : false);
			_panel.down('#btnPrinter').setDisabled(_printer);
		}
	},

	oib_indus_nroChange: function(textfiled, newValue, oldValue, options) {
		this.oib_Clean(textfiled.up('panel'));
	},

	oib_indus_serieChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.oib_Clean(combo.up('panel')); }
	},

	oie_BeforeShow: function(component, options) {
		var _typeEdit = component.getTypeEdit();

		var _cboIndus_serie = component.down('#indus_serie');
		_cboIndus_serie.bindStore(Ext.create('Siace.store.public.Years'));
		_cboIndus_serie.getStore().load({ 
			params: { xxYear_estado: '1', xxType_record: 'combo' }, 
			callback: function(records, operations, success) {
				if ( component.getTypeEdit() == '1' && records.length > 0  ) { _cboIndus_serie.setValue(records[0].data.year_id); }
			}

		});

        component.down('#grdOperations_industrias_insumos').bindStore(Ext.create('Siace.store.operations.Industrias_Insumos'));
        component.down('#grdOperations_industrias_coeficientes').bindStore(Ext.create('Siace.store.operations.Industrias_Coeficientes'));
        component.down('#grdOperations_industrias_coeficientes').getStore().sort('coef_nombre', 'ASC');

        if ( _typeEdit == '1' ) {
        	fextope_almacenesFilter({'objeto': component.down('#alma_key'), 'type_record': 'combo', 'add_blank': 'NO'});
        	var _icon = 'icon_New_90'; var _title = translations.operations_industriasedit_title_new;
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
								params: { xxIndus_key: component.getCallKey(), xxIndusinsu_estado: 5, xxType_record: 'grid_industrias_edit' },
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

	oie_Close: function(panel, options) {
		if ( this.getPbss_Bienes_ServsSearch() !== undefined ) { this.getPbss_Bienes_ServsSearch().close();  this.getPbss_Bienes_ServsSearch().destroy(); }
	},

	oie_btnSaveClick: function(button, e, options) {
	    var _win = button.up('window'); var _frm = _win.down('form');
	    if ( _win.down('#bs_key').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el producto final'); return false ; }

		var _arrayInsumos = new Array();  _insumos = ''; var _nro_coef = 0; var _arrayCoeficientes = new Array();  _coeficientes = '';
		var _recordsInsumos = _frm.down('#grdOperations_industrias_insumos').getStore().getRange();
		var _storeCoeficientes = _frm.down('#grdOperations_industrias_coeficientes').getStore();
		_storeCoeficientes.clearFilter(true);
		var _recordsCoeficientes = _storeCoeficientes.getRange();
		
		for ( var _i = 0; _i < _recordsInsumos.length; _i++ ){
			_insumos += (_i == 0 ? '' : ',') + '{' + _recordsInsumos[_i].get('bs_key') + ',0}';
			_nro_coef = 0; 
			for ( var _j = 0;  _j < _recordsCoeficientes.length; _j++ ) { if (_recordsInsumos[_i].get('bs_key') == _recordsCoeficientes[_j].get('bs_key')) { _nro_coef++; } }
				if ( _nro_coef*1 == 0 ) {
					Ext.Msg.alert(translations.mensaje, 'insumo: ' + _recordsInsumos[_i].get('bs_nombre') +', no tiene coeficientes'); return false ; }
		}
		if ( _insumos == '') {
			Ext.Msg.alert(translations.mensaje, 'No se ha establecido ningun Insumo'); return false ; }

		for ( var _i = 0;  _i < _recordsCoeficientes.length; _i++ ) {
			if ( _recordsCoeficientes[_i].get('induscoef_cantid') == '' || _recordsCoeficientes[_i].get('induscoef_cantid')*1 <= 0 ) {
				return false;  break;
			}
			_coeficientes += (_i == 0 ? '' : ',') + '{' + _recordsCoeficientes[_i].get('bs_key') +','+ _recordsCoeficientes[_i].get('coef_id')  +','+ (_recordsCoeficientes[_i].get('return_bs_key')==''? '0':_recordsCoeficientes[_i].get('return_bs_key')) +','+ _recordsCoeficientes[_i].get('induscoef_cantid') + '}';
		}

	    if ( _frm.getForm().isValid() ) {
			var _store = this.getOib_grdOperations_Industrias().getStore();
			Ext.Msg.confirm(translations.confirmar, translations.mensaje_pregunta_guardar, function(btn){
			if ( btn == 'yes' ) {
				var _vs = fextpub_sessionVariables();
			    _frm.getForm().submit({
					method: 'POST', url: 'php/operations_industrias_save.php',
					params:{ xx0005: 'YES', xxInsumos: _insumos, xxCoeficientes: _coeficientes,
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
			}});
	    }
	},

	oie_btnUndoClick: function(button, e, options) {
		button.up('window').close();
	},

	oie_btnExitClick: function(button, e, options) {
		button.up('window').close();
	},

	oie_btnAddClick: function(button, e, options) {
		fext_windowSearch(this.getPbss_Bienes_ServsSearch(), button.up('window'), 'Siace.view.public.Bienes_ServsSearch', translations.operations_industriasedit_title_buscar_insumo, '', '', 'ADD_INSUMOS', true);
	},


	oie_btnSuppressClick: function(button, e, options) {
		//var _selection = this.getOie_grdOperations_industrias_insumos().getView().getSelectionModel().getSelection()[0]; // este metodo tambien sirve
		var _selection = this.getOie_grdOperations_Industrias_Insumos().getSelectionModel().getSelection()[0];
        if ( _selection ) {
            this.getOie_grdOperations_Industrias_Insumos().getStore().remove(_selection);
            button.disable();
            button.up('form').down('#btnCoefAdd').disable(); button.up('form').down('#btnCoefDel').disable();
		}
	},


	oie_btnBs_searchClick: function(button, e, options) {
		fext_windowSearch(this.getPbss_Bienes_ServsSearch(), button.up('window'), 'Siace.view.public.Bienes_ServsSearch', translations.operations_industriasedit_title_buscar_producto, button.up('window').down('#bs_key').getValue(), '', '', true);
	},

    oie_btnCoefAddClick: function(button, e, options) {
		var _selection = this.getOie_grdOperations_Industrias_Insumos().getSelectionModel().getSelection()[0];
        if ( _selection && _selection.data.bs_key !== '' ) {
        	var _win = Ext.create('Siace.view.operations.Industrias_CoeficientesAdd');
			_win.setCallWindow(button.up('window'));
        	_win.setCallKey(_selection.data.bs_key);
        	_win.setTitle(translations.operations_industrias_coeficientesadd_title);
        	//_win.setIconCls('icon_New_90');
        	var _combo = _win.down('#coef_id');
			_combo.getStore().load({ params: { xxType_record: 'combo' } });
			_win.show();
		} else {
			Ext.Msg.alert(translations.mensaje, 'No se ha seleccionado ningun insumo al que pertenecera el coeficiente');
		}
	},

	oie_btnCoefDelClick: function(button, e, options) {
		var _selection = this.getOie_grdOperations_Industrias_Coeficientes().getSelectionModel().getSelection()[0];
        if ( _selection ) {
            this.getOie_grdOperations_Industrias_Coeficientes().getStore().remove(_selection);
            button.disable();
		}
	},

	oie_grdOperations_industrias_insumosAdd: function(record) {
		var _store = this.getOie_grdOperations_Industrias_Insumos().getStore();
        var _model = _store.findRecord('bs_id', record.data.bs_id);
        var _close = false;
        //if ( _model == null ) {
        	var _win = this.getOie_grdOperations_Industrias_Insumos().up('window');
	        _store.add({ bs_id: record.data.bs_id, bs_codigo: record.data.bs_codigo, bs_nombre: record.data.bs_nombre});
	        _close = true;
	    //} else {
	    	//Ext.Msg.alert(translations.mensaje, 'Mercancia seleccionada ya se encuentra registrada en el sistema');
	    //}
		
		return _close;
	},

	oie_grdOperations_industrias_insumosSelectionchange: function(model, record, options) {
		var _win = this.getOie_grdOperations_Industrias_Insumos().up('window');
		if ( record.length == 1 ) {
			if ( fjsIn_array(_win.getTypeEdit(), ['1','2']) ) {
				_win.down('#btnSuppress').enable(); _win.down('#btnCoefAdd').enable(); _win.down('#btnCoefDel').disable();
			}

			this.getOie_grdOperations_Industrias_Coeficientes().getStore().clearFilter(true);
			this.getOie_grdOperations_Industrias_Coeficientes().getStore().filter({
				property: 'bs_key',  value: record[0].data.bs_key,  exactMatch: true,  //caseSensitive: true
  			});
  			this.getOie_grdOperations_Industrias_Coeficientes().getView().refresh(true);
		}
	},

	oie_grdOperations_industrias_coeficientesSelectionchange: function(model, record, options) {		
		if ( record.length == 1 ) {
			var _win = this.getOie_grdOperations_Industrias_Coeficientes().up('window');
			_win.down('#btnCoefDel').enable();
		}
	},

	oie_bs_codigoBlur: function(textfield, The, options) {
		this.oie_bs_codigoSearch('0', textfield.up('form'));
	},

	oie_bs_codigoFocus: function(textfield, The, options) {
		this.oie_bs_codigoSearch('1', textfield.up('form'));
	},

	oie_bs_codigoKeypress: function(textfield, e, options) {
		if( e.getCharCode() == 13 ) { this.oie_bs_codigoSearch('13', textfield.up('form')); }
	},

	oie_bs_codigoSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['bs_key', 'BS_CODIGO', 'bs_codigo', 'bs_nombre'], 
			             ['php/public_bienes_servs_json_records.php', 'xxBs_codigo', 'textfield_search', ''], '', '');
	},

	/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
	puaw_BeforeRender: function(component, options) {
		var _form = component.down('form');
	   	_form.load({
	   		method: 'POST', url: 'php/public_usuarios_json_records.php',
	        params: { xxUsur_key: component.getCallKey(),  xxType_record: 'data_individuo', xxOrder_by: 'i.indiv_dni' },
	        waitMsg: 'Loading...',
	        success: function (form, action) {
	            try {
	                var _model = Ext.create('Siace.model.public.Individuo');
					var _result = Ext.decode(action.response.responseText);
	                if ( _result.data[0] ) {
	                    _model.set(_result.data[0]);  _form.loadRecord(_model);
	                    
	                    component.down('#indiv_dni').setFieldLabel(_result.data[0].tipdocident_abrev);
	                    component.down('#indiv_fechanac').setValue(fjsDateDDMMAAAA(_result.data[0].indiv_fechanac));
	                    component.down('#lugar_nacimiento').setValue(_result.data[0].pais_nombre +' - '+ _result.data[0].dpto_nombre);

	                    if ( _model.data.indiv_foto == '' ) {
	                       	component.down('#imgIndiv_foto').setSrc('attach/sin_foto.jpg');
	                    } else {
	                        component.down('#imgIndiv_foto').setSrc('attach/public_individuos_foto_' + _model.data.indiv_key +'_'+ _model.data.indiv_foto);
	                    }
	                }
                }
                catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
            },
            failure: function (form, action) {
                Ext.Msg.alert("Load failed", action.result.errorMessage);
            }
        });

		var _store = Ext.create('Siace.store.public.Usuarios_Accesos');
		var _grid = component.down('#grdPublic_usuarios_accesos');
		//var _pagingtoolbar = component.down('#pgtPublic_usuarios_accesos');
		_grid.bindStore(_store);  //_pagingtoolbar.bindStore(_store);
		_store.sort('area_nombre', 'ASC');
		_store.on('beforeload', function(store, operations, eOpts) {
			component.down('#btnModify').setDisabled(true);
			//component.down('#btnDelete').setDisabled(true);
			component.down('#btnMenu').setDisabled(true);

		    store.getProxy().setExtraParam('xxUsur_key', component.getCallKey());
		    store.getProxy().setExtraParam('xxType_record', 'window');
		    //store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});
		_store.pageSize = 500;  _store.load();
	},

	puaw_ViewEdit: function(pcTypeEdit, poWindow){
		if ( pcTypeEdit == '1' ) {
		} else if ( fjsIn_array(pcTypeEdit, ['2','3']) ) {
	    	var _record = this.getPuaw_grdPublic_Usuarios_Accesos().getSelectionModel().getSelection();
	        if ( _record.length !== 1 ) { return false; }
	    }

		Ext.get(poWindow.getEl()).mask(translations.mensaje_esperar, 'loading');
	    var _win = Ext.create('Siace.view.public.Usuarios_AccesosEdit');
	    _win.setTypeEdit(pcTypeEdit); _win.setCallStore(this.getPuaw_grdPublic_Usuarios_Accesos().getStore());
	    if ( fjsIn_array(pcTypeEdit, ['2','3']) ) { _win.setCallKey(_record[0].data.usuracce_key); }
	    _win.down('#usur_key').setValue(poWindow.getCallKey());  _win.show();
	    Ext.get(poWindow.getEl()).unmask();
	},

	puaw_btnNewClick: function(button, e, options) {
		this.puaw_ViewEdit('1', button.up('window'));
	},

	puaw_btnModifyClick: function(button, e, options) {
		this.puaw_ViewEdit('2', button.up('window'));
	},

	puaw_btnQueryClick: function(button, e, options) {
		this.puaw_ViewEdit('3', button.up('window') );
	},

	puaw_btnMenuClick: function(button, e, options) {
	    Ext.get(button.up('window').getEl()).mask(translations.mensaje_esperar, 'loading');

    	var _record = this.getPuaw_grdPublic_Usuarios_Accesos().getSelectionModel().getSelection();
        if ( _record.length !== 1 ) { return false; }

	    var _win = Ext.create('Siace.view.public.Usuarios_Accesos_Menus_OpcionesBrow');
	    _win.setTitle(translations.public_usuarios_accesos_menus_opcionesbrow_title);
	    _win.down('#indiv_apenom').setValue(button.up('window').down('#indiv_apenom').getValue());
	    _win.down('#ambito_nombre').setFieldLabel(_record[0].data.usuracce_type == 'A' ? 'Area' : 'Usuario');
	    _win.down('#ambito_nombre').setValue(_record[0].data.area_nombre);
	    _win.down('#cargusur_nombre').setValue(_record[0].data.cargusur_nombre);
	    _win.setCallKey(_record[0].data.usuracce_key); _win.show();
	    Ext.get(button.up('window').getEl()).unmask();
	},

	puaw_btnExitClick: function(button, e, options) {
		button.up('window').close();
	},

	puaw_grdPublic_usuarios_accesosSelectionchange: function(model, record, options) {			
		if ( record.length == 1 ) {
			var _panel = this.getPuaw_grdPublic_Usuarios_Accesos().up('panel');
			_panel.down('#btnModify').enable(); _panel.down('#btnQuery').enable(); _panel.down('#btnMenu').enable();
		}
	},
});