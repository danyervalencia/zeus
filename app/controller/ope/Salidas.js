Ext.define('Siace.controller.operations.Salidas', {
	extend: 'Ext.app.Controller',
	views: [
		'operations.SalidasBrowse', 'operations.SalidasReports', 'operations.SalidasReports', 'operations.SalidasSearch'
	],
    refs: [
        { ref: 'oss_grdOperations_Salidas', selector: 'operations_salidassearch #grdOperations_salidas' },
        { ref: 'pns_Public_NandinasSearch', selector: 'public_nandinassearch' },
    ],

	init: function(application) {
		this.control({
			'operations_salidasbrowse': { beforerender: this.osb_BeforeRender, },
			'operations_salidasbrowse #opc_id': { change: this.osb_opc_idChange, },
			'operations_salidasbrowse #btnNew': { click: this.osb_btnNewClick, },
			'operations_salidasbrowse #btnModify': { },
			'operations_salidasbrowse #btnQuery': { click: this.osb_btnQueryClick, },
			'operations_salidasbrowse #btnDocuments': { click: this.osb_btnDocumentsClick, },
			'operations_salidasbrowse #btnAnnular': { click: this.osb_btnAnnularClick, },
			'operations_salidasbrowse #btnVobo': { click: this.osb_btnVoboClick, },
			'operations_salidasbrowse #btnPrinter': { click: this.osb_btnPrinterClick, },
            'operations_salidasbrowse #alma_key': { change: this.osb_alma_keyChange, },
			'operations_salidasbrowse #fechafin': { change: this.osb_fechafinChange, },
			'operations_salidasbrowse #fechaini': { change: this.osb_fechainiChange, },
			'operations_salidasbrowse #grdOperations_salidas': { selectionchange: this.osb_grdOperations_salidasSelectionchange, },
			'operations_salidasbrowse #sal_nro': { change: this.osb_sal_nroChange, },
            'operations_salidasbrowse #sal_serie': { change: this.osb_sal_serieChange, },
            'operations_salidasbrowse #tipmov_id': { change: this.osb_tipmov_idChange, },

			'operations_salidasdocuments': { beforerender: this.osd_BeforeRender, },
			'operations_salidasdocuments actioncolumn#acOperations_salidas_documentos': { click: this.osd_grdOperations_salidas_documentosRecordDownload, },

            'operations_salidasedit': { beforeshow: this.ose_BeforeShow, },
            'operations_salidasedit #btnSave': { click: this.ose_btnSaveClick, },
            'operations_salidasedit #btnUndo': { click: this.ose_btnUndoClick, },
            'operations_salidasedit #alma_key': { change: this.ose_alma_keyChange, },
            'operations_salidasedit #indus_key': { change: this.ose_indus_keyChange, },
			'operations_salidasedit #grdOperations_salidas_det': { selectionchange: this.ose_grdOperations_industrias_productosSelectionchange, },

			'operations_salidasreports': { beforerender: this.osr_BeforeRender, close: this.osr_Close, },
			'operations_salidasreports #btnPdf': { click: this.osr_btnPdfClick, },
			'operations_salidasreports #btnExcel': { },
            'operations_salidasreports #btnNand_search': { click: this.osr_btnNand_searchClick, },
            'operations_salidasreports #alma_key': { blur: this.osr_alma_keyBlur, focus: this.osr_alma_keyFocus, },
			'operations_salidasreports #bsc_id': { change: this.osr_bsc_idChange, },
			'operations_salidasreports #bsg_id': { change: this.osr_bsg_idChange, },
            'operations_salidasreports #nand_codigo': { blur: this.osr_nand_codigoBlur, focus: this.osr_nand_codigoFocus, keypress: this.osr_nand_codigoKeypress, },

			'operations_salidassearch': { beforerender: this.oss_BeforeRender, },
			'operations_salidassearch #btnAccept': { click: this.oss_btnAcceptClick, },
			'operations_salidassearch #btnCancel': { click: this.oss_btnCancelClick, },
			'operations_salidassearch #grdOperations_salidas': { itemdblclick: this.oss_grdOperations_salidasItemDblClick, selectionchange: this.oss_grdOperations_salidasSelectionChange, },
		});
	},

	osb_BeforeRender: function(component, options) {
		fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': component.down('#opc_id'), 'menu_id': component.getMenuId() });
		fextope_almacenesFilter({'objeto': component.down('#alma_key'), 'add_blank': (Ext.getCmp('ah_txtAlma_key').getValue() == '' ? 'YES' : 'NO')});
		fextope_tipos_movimientoParameters({'panel': component, 'tipmov_estado_salidas': '1'}); fextope_tipos_movimientoLoad(component.down('#tipmov_id'), true)

		var _store = Ext.create('Siace.store.operations.Salidas');
		var _grid = component.down('#grdOperations_salidas'); var _pag = component.down('#pagOperations_salidas');
		_grid.bindStore(_store);  _pag.bindStore(_store);
		_store.sort('sal_fecha', 'DESC'); _store.pageSize = 500;
		_store.on('beforeload', function(store, operations, eoptions) {
			component.down('#btnModify').disable(); component.down('#btnQuery').disable(); component.down('#btnAnnular').disable();
			component.down('#btnVobo').disable(); component.down('#btnPrinter').disable(); component.down('#btnDocuments').disable();

		    store.getProxy().setExtraParam('xxAlma_key', component.down('#alma_key').getValue());
		    store.getProxy().setExtraParam('xxSal_serie', component.down('#sal_serie').getValue());
		    store.getProxy().setExtraParam('xxSal_nro', component.down('#sal_nro').getValue());
		    store.getProxy().setExtraParam('xxTipmov_id', component.down('#tipmov_id').getValue());
		    store.getProxy().setExtraParam('xxFechaini', component.down('#fechaini').getSubmitData());
		    store.getProxy().setExtraParam('xxFechafin', component.down('#fechafin').getSubmitData());
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});
	},

	osb_Clean: function(poComponent) {
		var _pag = poComponent.down('#pagOperations_salidas'); var _store = _pag.getStore();
		fext_gridClean(_store, _pag);

		poComponent.down('#btnModify').disable(); poComponent.down('#btnQuery').disable(); poComponent.down('#btnAnnular').disable();
		poComponent.down('#btnVobo').disable(); poComponent.down('#btnPrinter').disable(); poComponent.down('#btnDocuments').disable();
	},

	osb_opc_idChange: function(combo, newValue, oldValue, options) {
		combo.up('panel').down('#btnNew').setDisabled(fextpub_uamoButtons(combo, 1));
	},

	osb_btnNewClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 1) ) { return false; }
        var _win = Ext.create('Siace.view.operations.SalidasEdit');
        _win.setTitle(translations.operations_salidasedit_title_new);
        _win.setIconCls('icon_New_90');

        var _combo = _win.down('combo[name=alma_key]');
		_combo.getStore().load({ 
			params: { xxAlma_key: Ext.getCmp('ah_txtAlma_key').getValue(), xxAlma_estado: '1', xxType_record: 'combo' } 
		});
		_win.setTypeEdit('1'); _win.show();
	},

	osb_btnQueryClick: function(button, e, options) {
	},

	osb_btnAnnularClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 10) ) { return false; }
	},

	opb_btnVoboClick: function(button, e, options) {
		if ( options == undefined ) {
	        var _record = button.up('panel').down('#grdOperations_salidas').getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }

	        _fase_id = _record.data.fase_id;
			Ext.Msg.confirm(translations.confirmar, (_fase_id == '320' ? translations.mensaje_pregunta_vobo_deshacer : translations.mensaje_pregunta_vobo), function(btn){
				if ( btn == 'yes' ) {
					var _win = Ext.create('Siace.view.public.UsuariosPsw2');
					_win.setCallButton(button);
					_win.setCallKey(_record[0].data.prdcc_key);
					_win.setSubTitle((_fase_id == '320' ? translations.deshacer +' ' :'') + 'VoBo \xa0 '+_record[0].data.prdcc_documento);
					_win.setFormType(_fase_id == '320' ? '42' : '41');
					_win.show();
				}
			});
		} else {
			var _win = options.win; var _panel = button.up('panel');
			var _store = _panel.down('#grdOperations_salidas').getStore();
			var _menu_id = button.up('panel').getMenuId();
			Ext.get(_panel.getEl()).mask(translations.mensaje_validando_espere, translations.cargando);
			funpub_sessionVariables();
			Ext.Ajax.request({
				url: 'php/operations_salidas_save_fase.php',
				params: { xxSave: 'YES', xxPrdcc_key: options.key, xxFase_id: _fase_id, xxUsur_psw2: options.usur_psw2, xxPrdcc_observ: options.observ,
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

	osb_btnDocumentsClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 56) ) { return false; }
       	var _record = button.up('panel').down('#grdOperations_salidas').getSelectionModel().getSelection()[0];
       	if ( !_record ) { return false; }

       	var _panel = button.up('panel');
    	Ext.get(_panel.getEl()).mask(translations.mensaje_esperar, 'loading');
    	var _win = Ext.create('Siace.view.operations.SalidasDocuments');
        _win.down('#documento').setValue('&nbsp;'+_record.data.sal_documento);
        _win.setIconCls('icon_Documents_90'); _win.setTitle('Documentos según Declaración de Salida'); 
        _win.setCallKey(_record.data.sal_key);
        _win.show();
        Ext.get(_panel.getEl()).unmask();
	},

	osb_btnPrinterClick: function(button, e, options) {
		var _record = button.up('panel').down('#grdOperations_salidas').getSelectionModel().getSelection()[0];
		if ( !_record ) { return false; }

        fext_pdf('', translations.pdf_operations_salidas_printer_title, 'php/pdf/pdf_operations_salidas_printer.php?xxSal_key='+_record.data.sal_key);
	},

	osb_alma_keyChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.osb_Clean(combo.up('panel')); }
	},

	osb_fechafinChange: function(datefield, newValue, oldValue, options) {
		this.osb_Clean(datefield.up('panel'));
	},

	osb_fechainiChange: function(datefield, newValue, oldValue, options) {
		this.osb_Clean(datefield.up('panel'));
	},

	osb_grdOperations_salidasSelectionchange: function(model, record, options) {
		if ( record.length == 1 ) {
			var _panel = model.view.panel.up('panel'); var _cboOpc_id = _panel.down('#opc_id');  var _flga = record[0].data.sal_flga;  var _fase_id = record[0].data.fase_id;
			_panel.down('#btnQuery').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 3));
			_panel.down('#btnAnnular').setDisabled(_flga == '98' || _fase_id == '320'? true : fextpub_uamoButtons(_cboOpc_id, 10));
			_panel.down('#btnVobo').setDisabled(_flga == '98' || _fase_id == '320'? true : fextpub_uamoButtons(_cboOpc_id, 41));
			_panel.down('#btnPrinter').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 8));
			_panel.down('#btnDocuments').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 56));
		}
	},

	osb_sal_nroChange: function(textfield, newValue, oldValue, options) {
		this.osb_Clean(textfield.up('panel'));
	},

	osb_sal_serieChange: function(textfield, newValue, oldValue, options) {
		this.osb_Clean(textfield.up('panel'));
	},

	osb_tipmov_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.osb_Clean(combo.up('panel')); }
	},

	osd_BeforeRender: function(component, options) {
		var _store = Ext.create('Siace.store.operations.Salidas_Documentos');
		var _grid = component.down('#grdOperations_salidas_documentos');
		_grid.bindStore(_store);  //_pagingtoolbar.bindStore(_store);
		_store.sort('_orden', 'DESC');		
		_store.on('beforeload', function(store, operations, eOpts) {
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxSal_key', component.getCallKey());
		    //store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});
		_store.pageSize = 500; _store.load();
	},

	osd_grdOperations_salidas_documentosRecordDownload: function(grid, cell, row, col, e, record, t) {
		if ( record.data._file == '' && record.data._record_field == '' ) {
			if ( record.data._schema_table == 'siace.ingresos' ) {
				fext_pdf('', translations.pdf_operations_ingresos_printer_title, 'php/pdf/pdf_operations_ingresos_printer.php?xxIng_key='+record.data._key);
			} else if ( record.data._schema_table == 'siace.guias' ) {
				fext_pdf('', translations.pdf_operations_guias_printer_title, 'php/pdf/pdf_operations_guias_printer.php?xxGuia_key='+record.data._key);
			}
		} else if ( record.data._file !== '' ) {
			var _src = 'php/resources/download_file.php?xxSchema_table=' + record.data._schema_table + '&xxTable_field=' + record.data._table_field + '&xxRecord_key=' + record.data._key + '&xxRecord_field=' + record.data._record_field + '&xxTable=' +record.data._table + '&xxField=' +record.data._field;
			fext_FileDownload(undefined, _src);
		}
	},

	ose_BeforeShow: function(component, options) {
		var _cboAlma_key = component.down('combo[name=alma_key]');
		_cboAlma_key.bindStore(Ext.create('Siace.store.public.Almacenes'));
		if (  component.getTypeEdit() == '1' ) {
			_cboAlma_key.getStore().load({ 
				params: { xxAlma_key: Ext.getCmp('ah_txtAlma_key').getValue(), xxAlma_estado: '1', xxType_record: 'combo' },
				callback: function(records, operations, success) { 
					_cboAlma_key.setValue( records[0].data.alma_key );
    			}
			});
		} else {
			_cboAlma_key.getStore().load({ 
				params: { xxType_record: 'combo' },
				callback: function(records, operations, success) { 
					_cboAlma_key.setValue( records[0].data.alma_key );
    			}
			});
		}

		var _cboSal_serie = component.down('#sal_serie');
		_cboSal_serie.bindStore(Ext.create('Siace.store.public.Years'));
		_cboSal_serie.getStore().load({
			params: { xxYear_estado: '1', xxType_record: 'combo' },
			callback: function(records, operations, success) { 
			   	if ( records.length > 0 ) { _cboSal_serie.setValue(records[0].data.year_id); } 
			    else { _cboSal_serie.setValue(''); }
    		}
		});
	},

	ose_btnSaveClick: function(button, e, options) {
	    var _win = button.up('window');
	    var _frm = _win.down('form');
	    if ( _frm.down('combo[name=indus_key]').getValue() == '' || _frm.down('combo[name=indus_key]').getValue() == null ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el Cuadro Insumo Producto');
	    	return false ; }

		var _productos = '';
		var _recordsProductos = _frm.down('grid[name=grdOperations_industrias_productos]').getStore().getRange();
		for ( var _i = 0;  _i < _recordsProductos.length; _i++ ) {
			_cantid = _recordsProductos[_i].get('indusprod_cantid');
			if ( _cantid == '' || _cantid == null || _cantid*1 <= 0 ) {
		    	Ext.Msg.alert(translations.mensaje, 'Cantidad de Producción debe ser mayor que cero');
		    	return false ; }
			_productos += (_i == 0 ? '' : ',') + '{' + _recordsProductos[_i].get('indusprod_key') +','+ _cantid + '}';
		}

		var _insumos = '';
		var _recordsInsumos = _frm.down('grid[name=grdOperations_industrias_insumos]').getStore().getRange();
		for ( var _i = 0;  _i < _recordsInsumos.length; _i++ ) {
			_cantid = _recordsInsumos[_i].get('indusinsu_cantid');
			if ( _cantid*1 > 0 && _cantid !== null && _cantid !== '' ) {
				_insumos += (_i == 0 ? '' : ',') +'{'+ _recordsInsumos[_i].get('indusinsu_key') +','+ _recordsInsumos[_i].get('bs_key') +','+ _cantid + '}';
			}
		}
		if ( _insumos == '' ) {
			_insumos = '{0,0,0}';
		}

	    if ( _frm.getForm().isValid() ) {
	    	var _store = this.getOpb_grdOperations_salidas().getStore();
	    	var _vs = funpub_sessionVariables();
	        _frm.getForm().submit({
				method: 'POST', url: 'php/operations_salidas_save.php',
				params:{ xx0005: 'YES', xxPrdcc_serie: _frm.down('combo[name=prdcc_serie]').getValue(), xxProductos: _productos, xxInsumos: _insumos,
						 zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
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

	ose_btnUndoClick: function(button, e, options) {
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
				params: { xxIndusprod_key: record[0].data.indusprod_key, xxType_record: 'grid_salidasEdit', xxType_query: 'INSUMOS_SIN_COEFICIENTE', xxOrder_by: 'bs_nombre' },
			});			
  			_grid.getView().refresh(true);
		}
	},

	ose_alma_keyChange: function(combo, newValue, oldValue, options) {
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
					params: { xxIndus_key: newValue, xxType_record: 'grid_salidasEdit' },
					callback: function(opt, success, respon) { 
						_grdProductos.getSelectionModel().select(0, true);
					}
				});
			}
		} else {

		}
	},

	/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	osr_BeforeRender: function(component, options) {
		var _str = Ext.create('Ext.data.Store', {
			fields: [
				{ name: 'typrep_id', type: 'string' },
				{ name: 'typrep_nombre', type: 'string' },
			],
			data: [
				{ typrep_id: 'SALIDAS', typrep_nombre: 'Declaraciones de Salida' },
				{ typrep_id: 'SALIDAS_VoBo', typrep_nombre: 'Declaraciones de Salida (VoBo)' },
				{ typrep_id: 'SALIDAS_PENDIENTES', typrep_nombre: 'Declaraciones de Salida (Pendientes)' },
				{ typrep_id: 'SALIDAS_ADUANA', typrep_nombre: 'Declaraciones de Salida (Aduanas)' },
				{ typrep_id: 'SALIDAS_R_01', typrep_nombre: 'Declaraciones de Salida - (R_01)' },
				{ typrep_id: 'SALIDAS_DETALLE', typrep_nombre: 'Declaraciones de Salida - Detalle' },
				{ typrep_id: 'SALIDAS_DETALLE_VoBo', typrep_nombre: 'Declaraciones de Salida - Detalle (VoBo)' },
				{ typrep_id: 'SALIDAS_DETALLE_ADUANA', typrep_nombre: 'Declaraciones de Salida - Detallade (Aduanas)' },
			]
		});
		var _cboType_report = component.down('#type_report');
		_cboType_report.bindStore(_str);
		_cboType_report.getStore().load({ 
			callback: function(records, operations, success) {  _cboType_report.setValue('SALIDAS'); }
		});

		fextope_almacenesFilter({'objeto': component.down('#alma_key'), 'add_blank': (Ext.getCmp('ah_txtAlma_key').getValue() == '' ? 'YES' : 'NO')});
		fextope_tipos_movimientoParameters({'panel': component, 'tipmov_estado_salidas': '1'}); fextope_tipos_movimientoLoad(component.down('#tipmov_id'), true)

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

	osr_Close: function(panel, options) {
		if ( this.getPns_Public_NandinasSearch() !== undefined ) { this.getPns_Public_NandinasSearch().close();  this.getPns_Public_NandinasSearch().destroy(); }
	},

	osr_ViewReport: function(pcTypeEdit, poPanel){
		if ( !poPanel.down('#fechaini').isValid() ) {
			Ext.Msg.alert(translations.mensaje, 'Fecha Inicial NO es Válida', function() { poPanel.down('#fechaini').focus(); }); return false ; }
		if ( !poPanel.down('#fechafin').isValid() ) {
			Ext.Msg.alert(translations.mensaje, 'Fecha Final NO es Válida', function() { poPanel.down('#fechafin').focus(); }); return false ; }
		var _alma_key = poPanel.down('#alma_key').getValue();
		var _fechaini = fjsDateSQL(poPanel.down('#fechaini').getRawValue());  var _fechafin = fjsDateSQL(poPanel.down('#fechafin').getRawValue());
		var _bsg_id = poPanel.down('#bsg_id').getValue();  var _bsc_id = poPanel.down('#bsc_id').getValue();  var _bsf_id = poPanel.down('#bsf_id').getValue();
		var _type_report = poPanel.down('#type_report').getValue();

		if ( fjsIn_array(_type_report, ['STOCK_CONSOLIDADO', 'STOCK_CONSOLIDADO_VoBo']) ) {
        	fext_pdf('', translations.pdf_operations_almacenes_report_stock_title, 'php/pdf/pdf_operations_almacenes_report_stock_consolidado.php?xxAlma_key='+_alma_key+'&xxFechaini='+_fechaini+'&xxFechafin='+_fechafin+'&xxBsg_id='+_bsg_id+'&xxBsc_id='+_bsc_id+'&xxType_report='+_type_report);
		} else if ( fjsIn_array(_type_report, ['SALIDAS_DETALLE_ADUANA']) ) {
			fext_pdf('', translations.pdf_operations_almacenes_report_stock_title, 'php/pdf/pdf_operations_salidas_det_report_aduana.php?xxAlma_key='+_alma_key+'&xxFechaini='+_fechaini+'&xxFechafin='+_fechafin+'&xxBsg_id='+_bsg_id+'&xxBsc_id='+_bsc_id+'&xxType_record='+_type_report+'&xxType_query='+_type_report);
		}
	},

	osr_btnPdfClick: function(button, e, options) {
		this.osr_ViewReport('1', button.up('panel'));
	},

	osr_btnExcelClick: function(button, e, options) {
		this.osr_ViewReport('2', button.up('panel'));
	},

	osr_btnNand_searchClick: function(button, e, options) {
 		fext_windowSearch(this.getPns_Public_NandinasSearch(), button.up('panel'), 'Siace.view.public.NandinasSearch', translations.public_nandinassearch_title, button.up('panel').down('#nand_id').getValue(), '', '', false);
	},

	osr_alma_keyBlur: function(combo, The, options) {
		if ( combo.getValue() !== combo.up('panel').down('#ALMA_KEY').getValue() ) {
			var _cboPers_id = combo.up('panel').down('#pers_id');
			if ( combo.getValue() == '' ) {
				_cboPers_id.setDisabled(true);  _cboPers_id.getStore().removeAll();  _cboPers_id.setValue('');
			} else {
				_cboPers_id.setDisabled(false); _cboPers_id.getStore().load();
			}
		}
	},

	osr_alma_keyFocus: function(combo, The, options) {
		combo.up('panel').down('#ALMA_KEY').setValue(combo.getValue());
	},

	osr_bsc_idChange: function(combo, newValue, oldValue, options) {
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

	osr_bsg_idChange: function(combo, newValue, oldValue, options) {
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

	osr_nand_codigoBlur: function(textfield, The, options) {
		this.osr_nand_codigoSearch('0', textfield.up('panel'));
	},

	osr_nand_codigoFocus: function(textfield, The, options) {
		this.osr_nand_codigoSearch('1', textfield.up('panel'));
	},

	osr_nand_codigoKeypress: function(textfield, e, options) {
		if( e.getCharCode() == 13 ) { this.osr_nand_codigoSearch('13', textfield.up('panel')); }
	},

	osr_nand_codigoSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['nand_id', 'NAND_CODIGO', 'nand_codigo', 'nand_nombre'], 
			            ['php/public_nandinas_json_records.php', 'xxNand_codigo', 'textfield_search', ''], '', '');
	},

	/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	oss_BeforeRender: function( component, options ) {
		var _store = Ext.create('Siace.store.operations.Salidas');
		var _grid = component.down('#grdOperations_salidas');
		var _pagingtoolbar = component.down('#pgtOperations_salidas');
		_grid.bindStore(_store);  _pagingtoolbar.bindStore(_store);
		_store.sort('sal_fecha', 'DESC');
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

	oss_Clean: function() {
		var _win = this.getOss_grdPublic_Vehiculos().up('window');
		var _store = _win.down('#pgtPublic_vehiculos').getStore();
		var _pagingtoolbar = _win.down('#pgtPublic_vehiculos');
		fext_gridClean(_store, _pagingtoolbar);

		_win.down('#btnAccept').setDisabled(true);
	},

	oss_btnAcceptClick: function(button, e, options) {
		var _win = button.up('window');
		var _grid = _win.down('#grdOperations_salidas');
        var _record = _grid.getSelectionModel().getSelection()[0];
        var _close = true;

        if ( _record && _record.data.sal_id !== _win.getCallKey() ) {
        	if ( _win.getCallWindow() !== null ) {
  		      	if ( _win.getTypeReturn() == 'ADD_VENTAS' ) {
  		      		_close = Siace.app.getController('treasury.Ventas').tve_grdTreasury_ventas_det_referenciasAdd(_record);
        		} else {
        			_win.getCallWindow().down('#veh_key').setValue(_record[0].data.veh_key);
        			_win.getCallWindow().down('#veh_placa').setValue(_record[0].data.veh_placa);
        			_win.getCallWindow().down('#tipveh_nombre').setValue(_record[0].data.tipveh_nombre);
        		}
        	}
        	if ( _close ) { _win.close(); if ( _win.getActionDestroy() == true ) { _win.destroy(); } }
		}
	},

	oss_btnCancelClick: function(button, e, options) {
		button.up('window').close(); if ( button.up('window').getActionDestroy() == true ) { button.up('window').destroy(); }
	},

	oss_grdOperations_salidasItemDblClick: function(component, record, item, index, e, options) {
		var _btnAccept = component.up('window').down('#btnAccept');
        _btnAccept.fireEvent('click', _btnAccept, e, options);
	},

	oss_grdOperations_salidasSelectionChange: function(model, record, options) {
		if ( record.length == 1 ) {
			_win = this.getOss_grdOperations_Salidas().up('window');
			_win.down('#btnAccept').setDisabled( record[0].data.sal_id == _win.getCallKey() ? true : false );
		}
	},
});