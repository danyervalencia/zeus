Ext.define('Siace.controller.operations.Ingresos', {
	extend: 'Ext.app.Controller',
	views: [
		'operations.IngresosBrowse', 'operations.IngresosDocuments', 'operations.IngresosReports', 'operations.IngresosSearch', 
	],
    refs: [
        //{ ref: 'oib_grdOperations_ingresos', selector: 'operations_ingresosbrowse #grdOperations_ingresos' },
        { ref: 'ois_grdOperations_Ingresos', selector: 'operations_ingresossearch #grdOperations_ingresos' },
        { ref: 'pns_Public_NandinasSearch', selector: 'public_nandinassearch' },
    ],

	init: function(application) {
		this.control({
			'operations_ingresosbrowse': { beforerender: this.oib_BeforeRender, },
			'operations_ingresosbrowse #opc_id': { change: this.oib_opc_idChange, },
			'operations_ingresosbrowse #btnNew': { click: this.oib_btnNewClick, },
			'operations_ingresosbrowse #btnModify': { },
			'operations_ingresosbrowse #btnQuery': { click: this.oib_btnQueryClick, },
			'operations_ingresosbrowse #btnDocuments': { click: this.oib_btnDocumentsClick, },
			'operations_ingresosbrowse #btnAnnular': { click: this.oib_btnAnnularClick, },
			'operations_ingresosbrowse #btnVobo': { click: this.oib_btnVoboClick, },
			'operations_ingresosbrowse #btnPrinter': { click: this.oib_btnPrinterClick, },
            'operations_ingresosbrowse #alma_key': { change: this.oib_alma_keyChange, },
			'operations_ingresosbrowse #fechafin': { change: this.oib_fechafinChange, },
			'operations_ingresosbrowse #fechaini': { change: this.oib_fechainiChange, },
			'operations_ingresosbrowse #grdOperations_ingresos': { selectionchange: this.oib_grdOperations_ingresosSelectionchange, },
			'operations_ingresosbrowse #ing_nro': { change: this.oib_ing_nroChange, },
            'operations_ingresosbrowse #ing_serie': { change: this.oib_ing_serieChange, },
            'operations_ingresosbrowse #tipmov_id': { change: this.oib_tipmov_idChange, },

			'operations_ingresosdocuments': { beforerender: this.oid_BeforeRender, },
			'operations_ingresosdocuments actioncolumn#acOperations_ingresos_documentos': { click: this.oid_grdOperations_ingresos_documentosRecordDownload, },

            'operations_ingresosedit': { beforeshow: this.oie_BeforeShow, },
            'operations_ingresosedit button[name=btn0005]': { click: this.oie_btn0005Click, },
            'operations_ingresosedit button[name=btn0006]': { click: this.oie_btn0006Click, },
            'operations_ingresosedit combo[name=alma_key]': { change: this.oie_alma_keyChange, },
            'operations_ingresosedit combo[name=indus_key]': { change: this.ooe_indus_keyChange, },

			'operations_ingresosreports': { beforerender: this.oir_BeforeRender, close: this.oir_Close, },
			'operations_ingresosreports #btnPdf': { click: this.oir_btnPdfClick, },
			'operations_ingresosreports #btnExcel': { click: this.oir_btnExcelClick, },
            'operations_ingresosreports #btnNand_search': { click: this.oir_btnNand_searchClick, },
            'operations_ingresosreports #alma_key': { blur: this.oir_alma_keyBlur, focus: this.oir_alma_keyFocus, },
			'operations_ingresosreports #bsc_id': { change: this.oir_bsc_idChange, },
			'operations_ingresosreports #bsg_id': { change: this.oir_bsg_idChange, },
            'operations_ingresosreports #nand_codigo': { blur: this.oir_nand_codigoBlur, focus: this.oir_nand_codigoFocus, keypress: this.oir_nand_codigoKeypress, },

			'operations_ingresossearch': { beforerender: this.ois_BeforeRender, },
			'operations_ingresossearch #btnAccept': { click: this.ois_btnAcceptClick, },
			'operations_ingresossearch #btnCancel': { click: this.ois_btnCancelClick, },
			'operations_ingresossearch #grdOperations_ingresos': { itemdblclick: this.ois_grdOperations_ingresosItemDblClick, selectionchange: this.ois_grdOperations_ingresosSelectionChange, },
		});
	},

	oib_BeforeRender: function(component, options) {
		fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': component.down('#opc_id'), 'menu_id': component.getMenuId() });
		fextope_almacenesFilter({'objeto': component.down('#alma_key'), 'add_blank': (Ext.getCmp('ah_txtAlma_key').getValue() == '' ? 'YES' : 'NO')});
		fextope_tipos_movimientoParameters({'panel': component, 'tipmov_estado_ingresos': '1'}); fextope_tipos_movimientoLoad(component.down('#tipmov_id'), true)


		var _store = Ext.create('Siace.store.operations.Ingresos');
		var _grid = component.down('#grdOperations_ingresos'); var _pag = component.down('#pagOperations_ingresos');
		_grid.bindStore(_store);  _pag.bindStore(_store);
		_store.sort('ing_fecha', 'DESC'); _store.pageSize = 500;
		_store.on('beforeload', function(store, operations, eOpts) {
			component.down('#btnModify').disable(); component.down('#btnQuery').disable(); component.down('#btnAnnular').disable(); component.down('#btnVobo').disable(); component.down('#btnPrinter').disable();

		    store.getProxy().setExtraParam('xxAlma_key', component.down('#alma_key').getValue());
		    store.getProxy().setExtraParam('xxIng_serie', component.down('#ing_serie').getValue());
		    store.getProxy().setExtraParam('xxIng_nro', component.down('#ing_nro').getValue());
		    store.getProxy().setExtraParam('xxTipmov_id', component.down('#tipmov_id').getValue());
		    store.getProxy().setExtraParam('xxFechaini', component.down('#fechaini').getSubmitData());
		    store.getProxy().setExtraParam('xxFechafin', component.down('#fechafin').getSubmitData());
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});
	},

	oib_Clean: function(poComponent) {
		var _pag = poComponent.down('#pagOperations_ingresos'); var _store = _pag.getStore();
		fext_gridClean(_store, _pag);

		poComponent.down('#btnModify').disable(); poComponent.down('#btnQuery').disable(); poComponent.down('#btnAnnular').disable(); poComponent.down('#btnVobo').disable(); poComponent.down('#btnDocuments').disable(); poComponent.down('#btnPrinter').disable(); 
	},

	oib_opc_idChange: function(combo, newValue, oldValue, options) {
		combo.up('panel').down('#btnNew').setDisabled(fextpub_uamoButtons(combo, 1));
	},

	oib_btnNewClick: function(button, e, options) {
	},

	oib_btnQueryClick: function(button, e, options) {
	},

	oib_btnDocumentsClick: function(button, e, options) {
       	var _record = button.up('panel').down('#grdOperations_ingresos').getSelectionModel().getSelection()[0];;
       	if ( !_record ) { return false; }

       	var _panel = button.up('panel');
    	Ext.get(_panel.getEl()).mask(translations.mensaje_esperar, 'loading');
    	var _win = Ext.create('Siace.view.operations.IngresosDocuments');
        _win.down('#documento').setValue('&nbsp;'+_record.data.ing_documento);
        _win.setIconCls('icon_Documents_90'); _win.setTitle('Documentos según Declaración de Ingreso'); 
        _win.setCallKey(_record.data.ing_key);
        _win.show();
        Ext.get(_panel.getEl()).unmask();
	},

	oib_btnAnnularClick: function(button, e, options) {
		/*if ( options == undefined ) {
	        var _record = this.getOpb_grdOperations_salidas().getSelectionModel().getSelection();
	        if ( _record.length !== 1 ) { return false; }

	        _fase_id = _record[0].data.fase_id;
			Ext.Msg.confirm(translations.confirmar, translations.mensaje_pregunta_anular, function(btn){
				if ( btn == 'yes' ) {
					var _win = Ext.create('Siace.view.public.UsuariosPsw2');
					_win.setCallButton(button);
					_win.setCallKey(_record[0].data.prdcc_key);
					_win.setSubTitle(_record[0].data.prdcc_documento);
					_win.setFormType('10');
					_win.show();
				}
			});
		} else {
			var _win = options.win;
			var _panel = this.getOpb_grdOperations_salidas().up('panel');
			var _store = this.getOpb_grdOperations_salidas().getStore();
			var _menu_id = button.up('panel').getMenuId();
			Ext.get(_panel.getEl()).mask(translations.mensaje_validando_espere, translations.cargando);
			funpub_sessionVariables();
			Ext.Ajax.request({
				url: 'php/operations_salidas_delete.php',
				params: { xxAnnular: 'YES', xxPrdcc_key: options.key, xxUsur_psw2: options.usur_psw2, xxPrdcc_observ: options.observ,
					      xxUsursess_key: xxUsursess_key, xxUsur_key: xxUsur_key, xxAlma_key: xxAlma_key, xxMenu_id: _menu_id },
				success: function(conn, response, options, eOpts) {
					var _result = Siace.util.Util.decodeJSON(conn.responseText);
					if ( _result.success ) {
						_win.close(); _win.destroy();
			            _store.load({
			            	callback: function(opt, success, respon) { Ext.get(_panel.getEl()).unmask(); }
			            });
					} else {
						Ext.get(_panel.getEl()).unmask();
						Siace.util.Util.showErrorMsg(_result.msg);
					}
				},
				failure: function(conn, response, options, eOpts) {
					Ext.get(_panel.getEl()).unmask();
					Siace.util.Util.showErrorMsg(conn.responseText);
				}
			});
		} */
	},

	oib_btnPrinterClick: function(button, e, options) {
		var _record = button.up('panel').down('#grdOperations_ingresos').getSelectionModel().getSelection()[0];;
		if ( !_record ) { return false; }

        fext_pdf('', translations.pdf_operations_ingresos_printer_title, 'php/pdf/pdf_operations_ingresos_printer.php?xxIng_key='+_record.data.ing_key);
	},

	oib_btnVoboClick: function(button, e, options) {
		if ( options == undefined ) {
	        var _record = button.up('panel').down('#grdOperations_ingresos').getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }

	        _fase_id = _record.data.fase_id;
			Ext.Msg.confirm(translations.confirmar, (_fase_id == '320' ? translations.mensaje_pregunta_vobo_deshacer : translations.mensaje_pregunta_vobo), function(btn){
				if ( btn == 'yes' ) {
					var _win = Ext.create('Siace.view.public.UsuariosPsw2');
					_win.setCallButton(button);
					_win.setCallKey(_record.data.prdcc_key);
					_win.setSubTitle((_fase_id == '320' ? translations.deshacer +' ' :'') + 'VoBo \xa0 '+_record[0].data.prdcc_documento);
					_win.setFormType(_fase_id == '320' ? '42' : '41');
					_win.show();
				}
			});
		} else {
			var _win = options.win;
			var _panel = this.getOpb_grdOperations_salidas().up('panel');
			var _store = this.getOpb_grdOperations_salidas().getStore();
			var _menu_id = button.up('panel').getMenuId();
			Ext.get(_panel.getEl()).mask(translations.mensaje_validando_espere, translations.cargando);
			funpub_sessionVariables();
			Ext.Ajax.request({
				url: 'php/operations_salidas_save_fase.php',
				params: { xx0005: 'YES', xxPrdcc_key: options.key, xxFase_id: _fase_id, xxUsur_psw2: options.usur_psw2, xxPrdcc_observ: options.observ,
					      xxUsursess_key: xxUsursess_key, xxUsur_key: xxUsur_key, xxAlma_key: xxAlma_key, xxMenu_id: _menu_id },
				success: function(conn, response, options, eOpts) {
					var _result = Siace.util.Util.decodeJSON(conn.responseText);
					if ( _result.success ) {
						_win.close(); _win.destroy();
			            _store.load({
			            	callback: function(opt, success, respon) { Ext.get(_panel.getEl()).unmask(); }
			            });
					} else {
						Ext.get(_panel.getEl()).unmask();
						Siace.util.Util.showErrorMsg(_result.msg);
					}
				},
				failure: function(conn, response, options, eOpts) {
					Ext.get(_panel.getEl()).unmask();
					Siace.util.Util.showErrorMsg(conn.responseText);
				}
			});
		}
	},

	oib_alma_keyChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.oib_Clean(combo.up('panel')); }
	},

	oib_fechafinChange: function(datefield, newValue, oldValue, options) {
		this.oib_Clean(datefield.up('panel'));
	},

	oib_fechainiChange: function(datefield, newValue, oldValue, options) {
		this.oib_Clean(datefield.up('panel'));
	},

	oib_grdOperations_ingresosSelectionchange: function(model, record, options) {
		if ( record.length == 1 ) {
			var _panel = model.view.panel.up('panel'); var _cboOpc_id = _panel.down('#opc_id');  var _flga = record[0].data.ing_flga;  var _fase_id = record[0].data.fase_id;
			_panel.down('#btnQuery').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 3));
			_panel.down('#btnAnnular').setDisabled(_flga == '98' || _fase_id == '320'? true : fextpub_uamoButtons(_cboOpc_id, 10));
			_panel.down('#btnVobo').setDisabled(_flga == '98' || _fase_id == '320'? true : fextpub_uamoButtons(_cboOpc_id, 41));
			_panel.down('#btnPrinter').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 8));
			_panel.down('#btnDocuments').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 56));
		}
	},

	oib_ing_nroChange: function(textfield, newValue, oldValue, options) {
		this.oib_Clean(textfield.up('panel'));
	},

	oib_ing_serieChange: function(textfield, newValue, oldValue, options) {
		this.oib_Clean(textfield.up('panel'));
	},

	oib_tipmov_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.oib_Clean(combo.up('panel')); }
	},

	oid_BeforeRender: function(component, options) {
		var _store = Ext.create('Siace.store.operations.Ingresos_Documentos');
		var _grid = component.down('#grdOperations_ingresos_documentos');
		//var _pagingtoolbar = component.down('#pgtOperations_ingresos');
		_grid.bindStore(_store);  //_pagingtoolbar.bindStore(_store);
		_store.sort('_orden', 'DESC');		
		_store.on('beforeload', function(store, operations, eOpts) {
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxIng_key', component.getCallKey());
		    //store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});
		_store.pageSize = 500;
		_store.load();	
	},

	oid_grdOperations_ingresos_documentosRecordDownload: function(grid, cell, row, col, e, record, t) {
		if ( record.data._file == '' && record.data._record_field == '' ) {
			if ( record.data._schema_table == 'siace.guias' ) {
				fext_pdf('', translations.pdf_operations_guias_printer_title, 'php/pdf/pdf_operations_guias_printer.php?xxGuia_key='+record.data._key);
			}
		} else if ( record.data._file !== '' ) {
			var _src = 'php/resources/download_file.php?xxSchema_table=' + record.data._schema_table + '&xxTable_field=' + record.data._table_field + '&xxRecord_key=' + record.data._key + '&xxRecord_field=' + record.data._record_field + '&xxTable=' +record.data._table + '&xxField=' +record.data._field;
			fext_FileDownload(undefined, _src);
		}
	},

	oie_BeforeShow: function(component, options) {
		var _cboAlma_key = component.down('combo[name=alma_key]');
		_cboAlma_key.bindStore(Ext.create('Siace.store.public.Almacenes'));
		if (  component.getTypeEdit() == '1' ) {
			_cboAlma_key.getStore().load({ 
				params: { xxAlma_key: Ext.getCmp('ah_txtAlma_key').getValue(), xxAlma_estado: '1', xxType_record: 'combo' },
				callback: function(opt, success, respon) {
					_cboAlma_key.setValue( _cboAlma_key.getStore().getAt(0).data.alma_key );
    			}
			});
		} else {
			_cboAlma_key.getStore().load({ 
				params: { xxType_record: 'combo' },
				callback: function(opt, success, respon) {
					_cboAlma_key.setValue( _cboAlma_key.getStore().getAt(0).data.alma_key );
    			}
			});
		}

		var _cboIndus_key = component.down('combo[name=indus_key]');
		_cboIndus_key.bindStore(Ext.create('Siace.store.operations.Industrias'));

		var _cboPrdcc_serie = component.down('combo[name=prdcc_serie]');
		_cboPrdcc_serie.bindStore(Ext.create('Siace.store.public.Years'));
		_cboPrdcc_serie.getStore().load({
			params: { xxYear_estado: '1', xxType_record: 'combo' },
			callback: function(opt,success,respon) {
			   	if ( _cboPrdcc_serie.getStore().getCount() > 0 ) {
			    	_cboPrdcc_serie.setValue(_cboPrdcc_serie.getStore().getAt(0).data.year_id);
			    } else {
			    	_cboPrdcc_serie.setValue('');
			    }
    		}
		});
	},

	ose_btn0005Click: function(button, e, options) {
	    var _win = button.up('window');
	    var _frm = _win.down('form');
	    if ( _frm.down('combo[name=indus_key]').getValue() == '' || _frm.down('combo[name=indus_key]').getValue() == null ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el Cuadro Insumo Producto');
	    	return false ; }

		var _productos = '';
		var _recordsProductos = _frm.down('grid[name=grdOperations_industrias_productos]').getStore().getRange();
		for ( var _i = 0;  _i < _recordsProductos.length; _i++ ) {
			_cantid = _recordsProductos[_i].get('indusprod_cantid');
			console.log(_cantid +'***'+ _recordsProductos[_i].get('indusprod_key'));
			if ( _cantid == '' || _cantid == null || _cantid*1 <= 0 ) {
		    	Ext.Msg.alert(translations.mensaje, 'Cantidad de Producción debe ser mayor que cero');
		    	return false ; }
			_productos += (_i == 0 ? '' : ',') + '{' + _recordsProductos[_i].get('indusprod_key') +','+ _cantid + '}';
		}

		var _insumos = '';
		var _recordsInsumos = _frm.down('grid[name=grdOperations_industrias_insumos]').getStore().getRange();
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
	    	var _store = this.getOpb_grdOperations_ingresos().getStore();
	    	funpub_sessionVariables();
	        _frm.getForm().submit({
				method: 'POST', url: 'php/operations_ingresos_save.php',
				params:{ xx0005: 'YES', xxPrdcc_serie: _frm.down('combo[name=prdcc_serie]').getValue(), xxProductos: _productos, xxInsumos: _insumos,
						 xxUsursess_key: xxUsursess_key, xxUsur_key: xxUsur_key, xxAlma_key: xxAlma_key },
                waitTitle: translations.valida_titulo, waitMsg: translations.valida_mensaje01,
	            success: function(form, action) {
	            	var result = Siace.util.Util.decodeJSON(action.response.responseText);
	                if ( result.success ) {
	                	Siace.util.Alert.msg('Success!', 'User saved.');
	                    _store.load();  _win.close();  _win.destroy();
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

	ose_btn0006Click: function(button, e, options) {
		// es aconsejable usar con destroy para destruir totalmente el componente
		//if ( this.getPbss_Bienes_ServsSearch() !== undefined ) { this.getPbss_Bienes_ServsSearch().close();  this.getPbss_Bienes_ServsSearch().destroy(); }
		//if ( this.getPis_IndividuosSearch() !== undefined ) { this.getPis_IndividuosSearch().close();  this.getPis_IndividuosSearch().destroy(); }
		//if ( this.getPpts_Personas_transportistasSearch() !== undefined ) { this.getPpts_Personas_transportistasSearch().close();  this.getPpts_Personas_transportistasSearch().destroy(); }
		//if ( this.getPvs_VehiculosSearch() !== undefined ) { this.getPvs_VehiculosSearch().close();  this.getPvs_VehiculosSearch().destroy(); }
		var _win = button.up('window');  _win.close();  _win.destroy();
	},

	ose_grdOperations_industrias_productosSelectionchange: function(model, record, options) {
		if ( record.length == 1 ) {
			var _grid = this.getOpe_grdOperations_industrias_insumos();
			_grid.getStore().load({
				params: { xxIndusprod_key: record[0].data.indusprod_key, xxType_record: 'grid_ingresosEdit', xxType_query: 'INSUMOS_SIN_COEFICIENTE', xxOrder_by: 'bs_nombre' },
				callback: function(opt, success, respon) { 
					//_grid.getSelectionModel().select(0, true);
				}
			});			
  			_grid.getView().refresh(true);
		}
	},

	ose_alma_keyChange: function(combo, newValue, oldValue, options) {
		var _cboIndus_key = combo.up('form').down('combo[name=indus_key]');
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

	ose_indus_keyChange: function(combo, newValue, oldValue, options) {
		var _grdProductos = combo.up('form').down('grid[name=grdOperations_industrias_productos]');
		var _grdInsumos = combo.up('form').down('grid[name=grdOperations_industrias_insumos]');
		if ( combo.up('window').getTypeEdit() == '1' ) {
			_grdInsumos.getStore().removeAll();
			if ( newValue == null || newValue == '' ) {
				_grdProductos.getStore().removeAll();
			} else {
				_grdProductos.getStore().load({ 
					params: { xxIndus_key: newValue, xxType_record: 'grid_ingresosEdit' },
					callback: function(opt, success, respon) { 
						_grdProductos.getSelectionModel().select(0, true);
					}
				});
			}
		} else {

		}
	},

	/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	oir_BeforeRender: function(component, options) {
		var _str = Ext.create('Ext.data.Store', {
			fields: [ { name: 'typrec_id', type: 'string' }, { name: 'typrec_nombre', type: 'string' }, ],
			data: [
				{ typrec_id: 'REPORT', typrec_nombre: 'Declaraciones de Ingreso' },
				{ typrec_id: 'REPORT_VoBo', typrec_nombre: 'Declaraciones de Ingreso (VoBo)' },
				{ typrec_id: 'REPORT_PENDIENTES', typrec_nombre: 'Declaraciones de Ingreso (Pendientes)' },
				{ typrec_id: 'REPORT_ADUANA', typrec_nombre: 'Declaraciones de Ingreso (Aduanas)' },
				{ typrec_id: 'REPORT_R_01', typrec_nombre: 'Declaraciones de Ingreso - (R_01)' },
				{ typrec_id: 'REPORT_DETALLE', typrec_nombre: 'Declaraciones de Ingreso - Detalle' },
				{ typrec_id: 'REPORT_DETALLE_VoBo', typrec_nombre: 'Declaraciones de Ingreso - Detalle (VoBo)' },
				{ typrec_id: 'REPORT_DETALLE_ADUANA', typrec_nombre: 'Declaraciones de Ingreso - Detallade (Aduanas)' },
			]
		});
		var _cboType_record = component.down('#type_record');
		_cboType_record.bindStore(_str);
		_cboType_record.getStore().load({ 
			callback: function(records, operations, success) {  _cboType_record.setValue('REPORT'); }
		});

		fextope_almacenesFilter({'objeto': component.down('#alma_key'), 'type_record': 'combo',  'add_blank': (Ext.getCmp('ah_txtAlma_key').getValue() == '' ? 'YES' : 'NO')});
		fextope_tipos_movimientoParameters({'panel': component, 'tipmov_estado_ingresos': '1'}); fextope_tipos_movimientoLoad(component.down('#tipmov_id'), true)

		var _cboPers_id = component.down('#pers_id');
		_cboPers_id.bindStore(Ext.create('Siace.store.operations.Registros_Aduanas'));
		_cboPers_id.getStore().on('beforeload', function(store, operations, eOpts) {
		    store.getProxy().setExtraParam('xxAlma_key', component.down('#alma_key').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'OPERADORES');
		    store.getProxy().setExtraParam('xxOrder_by', 'pers_nombre');
		    store.getProxy().setExtraParam('xxAdd_blank', 'YES');
		});

		var _cboBsg_id = component.down('#bsg_id');
		_cboBsg_id.bindStore(Ext.create('Siace.store.public.Bienes_Servs_Grupos'));
		var _cboBsc_id = component.down('#bsc_id');
		_cboBsc_id.bindStore(Ext.create('Siace.store.public.Bienes_Servs_Clases'));
		var _cboBsf_id = component.down('#bsf_id');
		_cboBsf_id.bindStore(Ext.create('Siace.store.public.Bienes_Servs_Familias'));

		_cboBsg_id.getStore().load({ params: { xxBst_id: '1', xxType_record: 'combo', xxAdd_blank: 'YES' } });
	},

	oir_Close: function(panel, options) {
		if ( this.getPns_Public_NandinasSearch() !== undefined ) { this.getPns_Public_NandinasSearch().close();  this.getPns_Public_NandinasSearch().destroy(); }
	},

	oir_ViewReport: function(pcTypeEdit, poPanel){
		if ( !poPanel.down('#fechaini').isValid() ) {
			Ext.Msg.alert(translations.mensaje, 'Fecha Inicial NO es Válida', function() { poPanel.down('#fechaini').focus(); }); return false ; }
		if ( !poPanel.down('#fechafin').isValid() ) {
			Ext.Msg.alert(translations.mensaje, 'Fecha Final NO es Válida', function() { poPanel.down('#fechafin').focus(); }); return false ; }
		var _alma_key = poPanel.down('#alma_key').getValue(); var _tipmov_id = poPanel.down('#tipmov_id').getValue();
		var _fechaini = fjsDateSQL(poPanel.down('#fechaini').getRawValue());  var _fechafin = fjsDateSQL(poPanel.down('#fechafin').getRawValue());
		var _bsg_id = poPanel.down('#bsg_id').getValue();  var _bsc_id = poPanel.down('#bsc_id').getValue();  var _bsf_id = poPanel.down('#bsf_id').getValue();
		var _type_record = poPanel.down('#type_record').getValue();

		if ( fjsIn_array(_type_record, ['REPORT']) ) {
		} else if ( fjsIn_array(_type_record, ['REPORT_ADUANA']) ) {
        	fext_pdf('', 'Reporte de Ingresos', 'php/pdf/pdf_operations_ingresos_report_aduana.php?xxAlma_key='+_alma_key+'&xxTipmov_id='+_tipmov_id+'&xxFechaini='+_fechaini+'&xxFechafin='+_fechafin+'&xxBsg_id='+_bsg_id+'&xxBsc_id='+_bsc_id+'&xxType_record='+_type_record+'&xxType_query='+_type_record);
		} else if ( fjsIn_array(_type_record, ['REPORT_DETALLE_ADUANA']) ) {
			fext_pdf('', translations.pdf_operations_almacenes_report_stock_title, 'php/pdf/pdf_operations_ingresos_det_report_aduana10.php?xxAlma_key='+_alma_key+'&xxFechaini='+_fechaini+'&xxFechafin='+_fechafin+'&xxBsg_id='+_bsg_id+'&xxBsc_id='+_bsc_id+'&xxType_record='+_type_record+'&xxType_query='+_type_record);
		}
	},

	oir_btnPdfClick: function(button, e, options) {
		this.oir_ViewReport('P', button.up('panel'));
	},

	oir_btnExcelClick: function(button, e, options) {
		//this.oir_ViewReport('2', button.up('panel'));
	},

	oir_btnNand_searchClick: function(button, e, options) {
 		fext_windowSearch(this.getPns_Public_NandinasSearch(), button.up('panel'), 'Siace.view.public.NandinasSearch', translations.public_nandinassearch_title, button.up('panel').down('#nand_id').getValue(), '', '', false);
	},

	oir_alma_keyBlur: function(combo, The, options) {
		if ( combo.getValue() !== combo.up('panel').down('#ALMA_KEY').getValue() ) {
			var _cboPers_id = combo.up('panel').down('#pers_id');
			if ( combo.getValue() == '' ) {
				_cboPers_id.setDisabled(true);  _cboPers_id.getStore().removeAll();  _cboPers_id.setValue('');
			} else {
				_cboPers_id.setDisabled(false); _cboPers_id.getStore().load();
			}
		}
	},

	oir_alma_keyFocus: function(combo, The, options) {
		combo.up('panel').down('#ALMA_KEY').setValue(combo.getValue());
	},

	oir_bsc_idChange: function(combo, newValue, oldValue, options) {
		var _cboBsf_id = combo.up('panel').down('#bsf_id');
		if ( newValue*1 > 0 ) {
			var _bsg_id = combo.up('panel').down('#bsg_id').getValue();
			_cboBsf_id.getStore().load({
				params: { xxBst_id: '1', xxBsg_id: _bsg_id, xxBsc_id: newValue, xxType_record: 'combo', xxAdd_blank: 'YES' },
				callback: function(opt,success,respon) {
				   	if ( _cboBsf_id.getStore().getCount() > 1 ) {
				    	_cboBsf_id.setDisabled(false);  _cboBsf_id.setValue(_cboBsf_id.getStore().getAt(0).data.bsf_id);
				    } else {
				    	_cboBsf_id.setDisabled(true);  _cboBsf_id.setValue('');
				    }
		    	}
			});
		} else {
			_cboBsf_id.getStore().removeAll(); _cboBsf_id.setValue(''); _cboBsf_id.setDisabled(true);
		}
	},

	oir_bsg_idChange: function(combo, newValue, oldValue, options) {
		var _cboBsc_id = combo.up('panel').down('#bsc_id');
		if ( newValue*1 > 0 ) {
			_cboBsc_id.getStore().load({
				params: { xxBst_id: '1', xxBsg_id: newValue, xxType_record: 'combo', xxAdd_blank: 'YES' },
				callback: function(opt, success, respon) {
				   	if ( _cboBsc_id.getStore().getCount() > 0 ) {
				    	_cboBsc_id.setDisabled(false);  _cboBsc_id.setValue(_cboBsc_id.getStore().getAt(0).data.bsc_id);
				    } else {
				    	_cboBsc_id.setDisabled(true);  _cboBsc_id.setValue(0);
				    }
		    	}
			});
		} else {
			_cboBsc_id.getStore().removeAll(); _cboBsc_id.setValue(0);  _cboBsc_id.setDisabled(true);
		} 
	},

	oir_nand_codigoBlur: function(textfield, The, options) {
		this.oir_nand_codigoSearch('0', textfield.up('panel'));
	},

	oir_nand_codigoFocus: function(textfield, The, options) {
		this.oir_nand_codigoSearch('1', textfield.up('panel'));
	},

	oir_nand_codigoKeypress: function(textfield, e, options) {
		if( e.getCharCode() == 13 ) { this.oir_nand_codigoSearch('13', textfield.up('panel')); }
	},

	oir_nand_codigoSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['nand_id', 'NAND_CODIGO', 'nand_codigo', 'nand_nombre'], 
			            ['php/public_nandinas_json_records.php', 'xxNand_codigo', 'textfield_search', ''], '', '');
	},

	/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	ois_BeforeRender: function( component, options ) {
		var _store = Ext.create('Siace.store.operations.Ingresos');
		var _grid = component.down('#grdOperations_ingresos');
		var _pagingtoolbar = component.down('#pgtOperations_ingresos');
		_grid.bindStore(_store);  _pagingtoolbar.bindStore(_store);
		_store.sort('ing_fecha', 'DESC');
		_store.on('beforeload', function(store, scope, options) {
			component.down('#btnAccept').setDisabled(true);

		    store.getProxy().setExtraParam('xxAlma_key', component.down('#alma_key').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'grid_search');
		    store.getProxy().setExtraParam('xxType_query', component.getTypeQuery());
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});
		_store.pageSize = 500; _store.load();
	},

	ois_Clean: function() {
		var _win = this.getOis_grdOperations_Ingresos().up('window');
		var _store = _win.down('#pgtOperations_ingresos').getStore();
		var _pagingtoolbar = _win.down('#pgtOperations_ingresos');
		fext_gridClean(_store, _pagingtoolbar);

		_win.down('#btnAccept').setDisabled(true);
	},

	ois_btnAcceptClick: function(button, e, options) {
		var _win = button.up('window');
		var _grid = _win.down('#grdOperations_ingresos');
        var _record = _grid.getSelectionModel().getSelection()[0];
        var _close = true;

        if ( _record && _record.data.ing_id !== _win.getCallKey() ) {
        	if ( _win.getCallWindow() !== null ) {
  		      	if ( _win.getTypeReturn() == 'ADD_VENTAS' ) {
  		      		_close = Siace.app.getController('treasury.Ventas').tve_grdTreasury_ventas_det_referenciasAdd(_record);
        		} else {
        			_win.getCallWindow().down('#veh_key').setValue(_record[0].data.veh_key);
        			_win.getCallWindow().down('#veh_placa').setValue(_record[0].data.veh_placa);
        			_win.getCallWindow().down('#tipveh_nombre').setValue(_record[0].data.tipveh_nombre);
        		}
        	}
        	if ( _close == true) { _win.close(); if ( _win.getActionDestroy() == true ) { _win.destroy(); } }
		}
	},

	ois_btnCancelClick: function(button, e, options) {
		button.up('window').close(); if ( button.up('window').getActionDestroy() == true ) { button.up('window').destroy(); }
	},

	ois_grdOperations_ingresosItemDblClick: function(component, record, item, index, e, options) {
		var _btnAccept = component.up('window').down('#btnAccept');
        _btnAccept.fireEvent('click', _btnAccept, e, options);
	},

	ois_grdOperations_ingresosSelectionChange: function(model, record, options) {
		if ( record.length == 1 ) {
			_win = this.getOis_grdOperations_Ingresos().up('window');
			_win.down('#btnAccept').setDisabled( record[0].data.ing_id == _win.getCallKey() ? true : false );
		}
	},
});