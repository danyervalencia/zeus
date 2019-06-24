Ext.define('Siace.controller.operations.Almacenes', {
	extend: 'Ext.app.Controller',
	views: ['operations.AlmacenesBrowse',],
    refs: [
        { ref: 'oae_frmOperations_Almacenes', selector: 'operations_almacenesedit #frmOperations_almacenes' },
    ],

	init: function(application) {
		this.control({
			'operations_almacenesbrowse': { beforerender: this.oab_BeforeRender, },
			'operations_almacenesbrowse #opc_id': { change: this.oab_opc_idChange, },			
			'operations_almacenesbrowse #btnNew': { click: this.oab_btnNewClick, },
			'operations_almacenesbrowse #btnDelete': { click: this.oab_btnDeleteClick, },
			'operations_almacenesbrowse #btnPrinter': { click: this.oab_btnPrinterClick, },
			'operations_almacenesbrowse #alma_estado': { change: this.oab_alma_estadoChange, },
			'operations_almacenesbrowse #alma_nombre': { change: this.oab_alma_nombreChange, },
			'operations_almacenesbrowse #grdOperations_almacenes': { selectionchange: this.oab_grdOperations_almacenesSelectionchange, },

			'operations_almacenesedit': { beforeshow: this.oge_BeforeShow, close: this.oge_Close, },
            'operations_almacenesedit #btnSave': { click: this.oge_btnSaveClick, },
            'operations_almacenesedit #btnUndo': { click: this.oge_btnUndoClick, },
		});
	},

	oab_BeforeRender: function(component, options) {
		fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': component.down('#opc_id'), 'menu_id': component.getMenuId() });
		var _store = Ext.create('Siace.store.operations.Almacenes');
		var _grid = component.down('#grdOperations_almacenes'); var _pag = component.down('#pagOperations_almacenes');
		_grid.bindStore(_store);  _pag.bindStore(_store);
		_store.sort('alma_nombre', 'ASC'); _store.pageSize = 500;
		_store.on('beforeload', function(store, operations, eOpts) {
			component.down('#btnModify').disable(); component.down('#btnQuery').disable(); component.down('#btnDelete').disable(); component.down('#btnPrinter').disable(); component.down('#btnBatches').disable(); component.down('#btnActivities').disable();

		    store.getProxy().setExtraParam('xxAlma_nombre', component.down('#alma_nombre').getValue());
		    store.getProxy().setExtraParam('xxAlma_estado', component.down('#alma_estado').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		}); _store.load();
	},

	oab_Clean: function(poComponent) {
		var _pag = poComponent.down('#pagOperations_almacenes'); var _store = _pag.getStore();
		fext_gridClean(_store, _pagi);

		_panel.down('#btnModify').disable(); _panel.down('#btnQuery').disable(); _panel.down('#btnDelete').disable(); _panel.down('#btnPrinter').disable(); _panel.down('#btnBatches').disable(); _panel.down('#btnActivities').disable();
	},

	oab_ViewEdit: function(pcTypeEdit, poComponent){		
	    if ( fjsIn_array(pcTypeEdit, ['2','3']) ) {
	    	var _record = poComponent.down('#grdOperations_almacenes').getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }
	    }

	    var _win = Ext.create('Siace.view.operations.almacenesEdit');
	    _win.setTypeEdit(pcTypeEdit); _win.setCallStore(poComponent.down('#grdOperations_almacenes').getStore());
	    if ( fjsIn_array(pcTypeEdit, ['2','3']) ) { _win.setCallKey(_record.data.guia_key); }
	    _win.show();
	},

	oab_opc_idChange: function(combo, newValue, oldValue, options) {
		combo.up('panel').down('#btnNew').setDisabled(fextpub_uamoButtons(combo, 1));
	},

	oab_btnNewClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 1) ) { return false; } this.oab_ViewEdit('1', button.up('panel'));
	},

	oab_btnModifyClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 2) ) { return false; } this.oab_ViewEdit('2', button.up('panel'));
	},

	oab_btnQueryClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 3) ) { return false; } this.oab_ViewEdit('3', button.up('panel') );
	},

	oab_btnDeleteClick: function(button, e, options) {
		if ( options == undefined ) {
	        var _record = this.getoab_grdOperations_almacenes().getSelectionModel().getSelection();
	        if ( _record.length !== 1 ) { return false; }

			Ext.Msg.confirm('Confirmación', '¿Esta Ud. seguro de ANULAR el registro seleccionado?', function(btn){
				if ( btn == 'yes' ) {
					var _win = Ext.create('Siace.view.public.UsuariosPsw2');
					_win.setCallButton(button);
					_win.setCallKey(_record[0].data.guia_key);
					_win.setSubTitle(_record[0].data.guia_documento);
					_win.show();
				}
			});
		} else {
			var _win = options.win;
			var _panel = this.getoab_grdOperations_almacenes().up('panel');
			var _store = this.getoab_grdOperations_almacenes().getStore();
			Ext.get(_panel.getEl()).mask('Validando información... por favor espere un momento...', 'loading');
			fextpub_sessionVariables();
			Ext.Ajax.request({
				url: 'php/operations_almacenes_delete.php',
				params: { xx0007: 'YES', xxType_edit: '10', xxGuia_key: options.key, xxUsur_psw2: options.usur_psw2, xxGuia_observ: options.observ,
					      xxUsursess_key: xxUsursess_key, xxUsur_key: xxUsur_key, xxAlma_key: xxAlma_key },
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

	oab_btnPrinterClick: function(button, e, options) {
		//var _record = this.getoab_grdOperations_almacenes().getSelectionModel().getSelection();
		//if ( _record.length !== 1 ) { return false; }

        //ext_pdf('', translations.pdf_operations_almacenes_printer_title, 'php/pdf/pdf_operations_almacenes_printer.php?xxGuia_key='+_record[0].data.guia_key);
	},

	oab_alma_estadoChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.oab_Clean(combo.up('panel')); }
	},

	oab_alma_nombreChange: function(textfield, newValue, oldValue, options) {
		this.oab_Clean(textfield.up('panel'));
	},

	oab_grdOperations_almacenesSelectionchange: function(model, record, options) {			
		if ( record.length == 1 ) {
			var _panel = model.view.panel.up('panel'); var _cboOpc_id = _panel.down('#opc_id'); var _flga = record[0].data.guia_flga;
			_panel.down('#btnModify').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 2)); 
			_panel.down('#btnQuery').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 3)); 
			_panel.down('#btnDelete').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 7));
			_panel.down('#btnPrinter').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 8));
			_panel.down('#btnBatches').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 8009));
			_panel.down('#btnActivities').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 8010));
		}
	},

	oab_guia_serieChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.oab_Clean(); }
	},

	oae_BeforeShow: function(component, options) {
		fextpub_yearsCombo(component.down('#guia_serie'), '1', 'combo', '');

		var _store = Ext.create('Siace.store.operations.almacenes_Registros_Aduanas');
		var _grid = component.down('#grdOperations_almacenes_registros_aduanas');
		//var _pagingtoolbar = component.down('#pgtOperations_almacenes');
		_grid.bindStore(_store);  //_pagingtoolbar.bindStore(_store);
		_store.sort('regadua_fecha', 'DESC');
		_store.on('beforeload', function(store, operations, eOpts) {
			component.down('#btnQuery').setDisabled(true);
			component.down('#btnSuppress').setDisabled(true);

		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});
		_store.pageSize = 500;

		var _typeEdit = component.getTypeEdit();
	    if ( _typeEdit == '1' ) {
	    	fextpub_almacenesCombo(component.down('#alma_key'), true, true, '1', 'combo');
	    	component.down('#guia_fecha').setValue(fjsDateCurrent(''));
	    	fext_removeAddConfig(component.down('#fcGuia_ing_peso'), '', 'lbl00601');
	    	fext_removeAddConfig(component.down('#fcGuia_sal_peso'), '', 'lbl00601');

	        var _icon = 'icon_New_90'; var _title = translations.operations_almacenesedit_title_new;
	    } else if ( fjsIn_array(_typeEdit, ['2','3','11','12']) ) {
	        fextpub_almacenesCombo(component.down('#alma_key'), true, '', '', 'combo');
	        var _form = component.down('form');
	        _form.load({
	            method: 'POST', url: 'php/operations_almacenes_json_records.php',
	            params: { xxGuia_key: component.getCallKey(),  xxType_record: 'form' },
	            waitMsg: 'Loading...',
	            success: function (form, action) {
	                try {
	                    var _model = Ext.create('Siace.model.operations.Guia');
	                    var _result = Ext.decode(action.response.responseText);
	                    if ( _result.data[0] ) {
	                        _model.set(_result.data[0]);  _form.loadRecord(_model);

	                        if ( _model.data.indiv_pdf !== '' ) {
	                            if ( _typeEdit == '2' ) { component.down('#ffiIndiv_pdf').hide(); component.down('#btnIndiv_pdfDelete').show(); }
	                            component.down('#btnIndiv_pdfDownload').setDisabled(false);
	                        }
	                    }
	                }
	                catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
	            },
	            failure: function (form, action) {
	                Ext.Msg.alert("Load failed", action.result.errorMessage);
	            }
	        });

	        if ( _typeEdit == '2' ) {
	            var _icon = 'icon_Modify_90'; var _title = translations.public_individuosedit_title_modify; 
	            component.down('#indiv_dni').setDisabled( component.down('#tipdocident_id').getValue() == '99' ? true : false );
	        } else { 
	            var _icon = 'icon_Query_90'; var _title = translations.public_individuosedit_title_consulta; 
	            component.down('#tipdocident_id').setDisabled(true); component.down('#indiv_dni').setDisabled(true); component.down('#ffiIndiv_pdf').setDisabled(true);
	            component.down('#indiv_appaterno').setDisabled(true); component.down('#indiv_apmaterno').setDisabled(true); component.down('#indiv_nombres').setDisabled(true);
	            component.down('#tipsex_id').setDisabled(true); component.down('#tipestaciv_id').setDisabled(true); component.down('#indiv_fechanac').setDisabled(true);
	            component.down('#pais_id').setDisabled(true); component.down('#dpto_id').setDisabled(true); component.down('#prvn_id').setDisabled(true); component.down('#dstt_id').setDisabled(true);
	            component.down('#ffiIndiv_foto').setDisabled(true); component.down('#ffiIndiv_foto').setDisabled(true);
	            component.down('#indiv_mail').setDisabled(true); component.down('#indiv_observ').setDisabled(true);
	            component.down('#btnSave').setDisabled(true); component.down('#btnUndo').setDisabled(true); component.down('#btnExit').setDisabled(false);
	        }
	    }
	    component.setIconCls(_icon); component.setTitle(_title);
	},

	oae_Close: function(panel, options) {
	},

	oae_btnSaveClick: function(button, e, options) {
	    var _win = button.up('window');
	    var _frm = _win.down('form');
	    if ( _frm.down('#alma_key').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el Usuario'); return false ; }
	    if ( _frm.down('#perstransp_key').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el transportista'); return false ; }
	    if ( _frm.down('#veh_key').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el vehículo de transporte'); return false ; }

		if ( this.getOge_grdOperations_almacenes_registros_aduanas().getStore().getCount() <= 0 ) {
			Ext.Msg.alert(translations.mensaje, 'Debe seleccionar por ll menos un registro aduanero'); return false ; }
		var _regadua_key = ''; var _recordsRA = _frm.down('#grdOperations_almacenes_registros_aduanas').getStore().getRange();
		for ( var _i = 0;  _i < _recordsRA.length; _i++ ){
			_regadua_key += (_i == 0 ? '' : ',') + '{' + _recordsRA[_i].get('regadua_key') + '}';
		}

	    var _guia_ing_peso = 0;  var _guia_sal_peso = 0;
	    if ( _win.getTypeEdit() == '11' ) {
	        if ( _win.down('#guia_ing_peso').getValue() == '' || _win.down('#guia_ing_peso').getValue()*1 <= 0 ) {
	        	Ext.Msg.alert(translations.mensaje, '! Pesaje de Ingreso no puede ser vacio '); return false ; }
	        _guia_ing_peso = _win.down('#guia_ing_peso').getValue();
	    } else if ( _win.getTypeEdit() == '12' ) {
	        if ( _win.down('#guia_sal_peso').getValue() == '' || _win.down('#guia_sal_peso').getValue()*1 <= 0 ) {
	        	Ext.Msg.alert(translations.mensaje, '! Pesaje de Salida no puede ser vacio '); return false ; }
	        if ( _win.down('#guia_sal_peso').getValue()*1 > _win.down('#guia_ing_peso').getValue()*1  ) {
	        	Ext.Msg.alert(translations.mensaje, '! Pesaje de Salida no puede ser mayor a Pesaje de Ingreso '); return false ; }
	        _guia_sal_peso = _win.down('#guia_sal_peso').getValue();
	    }
	    if ( _frm.getForm().isValid() ) {
	    	var _vs = fextpub_sessionVariables();
	        _frm.getForm().submit({
				method: 'POST', url: 'php/operations_almacenes_save.php',
				params:{ xx0005: 'OK', xxType_edit: _win.getTypeEdit(), Alma_key: _win.down('#alma_key').getValue(),
				         xxGuia_ing_peso: _guia_ing_peso, xxGuia_sal_peso: _guia_sal_peso, xxRegadua_key: _regadua_key,
					     xxUsursess_key: _vs['us'], xxUsuracce_key: _vs['ua'], xxUsur_key: _vs['u'], xxAlma_key: _vs['a'] },
                waitTitle: translations.valida_titulo, waitMsg: translations.valida_mensaje01,
	            
	            success: function(form, action) {
	            	var _result = Siace.util.Util.decodeJSON(action.response.responseText);
	                if ( _result.success ) {
			            if ( _win.getCallStore() !== null ) {
			            	_win.getCallStore().load();
					    } else if ( _win.getCallWindow() !== null ) {
					    }
	                    _win.close(); _win.destroy();
	                } else {
	                    Siace.util.Util.showErrorMsg(_result.msg);
	                }
	            },
	            failure: function(form, action) {
	                Siace.util.Util.showErrorMsg(action.response.responseText);
	            }
	        });
	    }
	},

	oae_btnUndoClick: function(button, e, options) {
		button.up('window').close();
	},
});