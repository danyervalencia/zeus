Ext.define('Siace.controller.operations.Registros_Internacionales', {
	extend: 'Ext.app.Controller',
	views: ['operations.Registros_InternacionalesBrowse', 'operations.Registros_InternacionalesEdit'],
    refs: [
        { ref: 'pps_Public_PersonasSearch', selector: 'public_personassearch' },
    ],

	init: function(application) {
		this.control({
			'operations_registros_internacionalesbrowse': { beforerender: this.orib_BeforeRender, },
			'operations_registros_internacionalesbrowse #opc_id': { change: this.orib_opc_idChange, },
			'operations_registros_internacionalesbrowse #btnNew': { click: this.orib_btnNewClick, },
			'operations_registros_internacionalesbrowse #btnModify': { click: this.orib_btnModifyClick, },
			'operations_registros_internacionalesbrowse #btnQuery': { click: this.orib_btnQueryClick, },
			'operations_registros_internacionalesbrowse #btnDelete': { click: this.orib_btnDeleteClick, },
			'operations_registros_internacionalesbrowse #btnIca': { click: this.orib_btnIcaClick, },
			'operations_registros_internacionalesbrowse actioncolumn#acORI': { click: this.orib_acORIDownload, },
            'operations_registros_internacionalesbrowse #alma_key': { change: this.orib_alma_keyChange, },
			'operations_registros_internacionalesbrowse #fechafin': { change: this.orib_fechafinChange, },
			'operations_registros_internacionalesbrowse #fechaini': { change: this.orib_fechainiChange, },
			'operations_registros_internacionalesbrowse #grdOperations_registros_internacionales': { selectionchange: this.orib_grdOperations_registros_internacionalesSelectionChange, },
			'operations_registros_internacionalesbrowse #regint_nro': { change: this.orib_regint_nroChange, },
            'operations_registros_internacionalesbrowse #tipdocint_id': { change: this.orib_tipdocint_idChange, },

			'operations_registros_internacionalesedit': { beforeshow: this.orie_BeforeShow, close: this.orie_Close, },
            'operations_registros_internacionalesedit #btnSave': { click: this.orie_btnSaveClick, },
            'operations_registros_internacionalesedit #btnUndo': { click: this.orie_btnUndoClick, },
            'operations_registros_internacionalesedit #btnExit': { click: this.orie_btnExitClick, },
            'operations_registros_internacionalesedit #btnPers_search': { click: this.orie_btnPers_searchClick, },
            'operations_registros_internacionalesedit #btnRegint_pdfDelete': { click: this.orie_btnRegint_pdfDeleteClick, },
            'operations_registros_internacionalesedit #btnRegint_pdfDownload': { click: this.orie_btnRegint_pdfDownloadClick, },
            'operations_registros_internacionalesedit #ffiRegint_pdf': { change: this.orie_ffiRegint_pdfChange, },
            'operations_registros_internacionalesedit #mone_id': { change: this.orie_mone_idChange, },
			'operations_registros_internacionalesedit #pers_ruc': { blur: this.orie_pers_rucBlur, focus: this.orie_pers_rucFocus, keypress: this.orie_pers_rucKeypress, },
		});
	},

	orib_BeforeRender: function(component, options) {
		fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': component.down('#opc_id'), 'menu_id': component.getMenuId() });
		fextope_almacenesFilter({'objeto': component.down('#alma_key'), 'add_blank': (Ext.getCmp('ah_txtAlma_key').getValue() == '' ? 'YES' : 'NO')});
		fextope_tipos_documentos_internacionalFilter({'objeto': component.down('#tipdocint_id')});

		var _store = Ext.create('Siace.store.operations.Registros_Internacionales');
		var _grid = component.down('#grdOperations_registros_internacionales'); var _pag = component.down('#pagOperations_registros_internacionales');
		_grid.bindStore(_store);  _pag.bindStore(_store);
		_store.sort('regint_fecha', 'DESC'); _store.pageSize = 500;
		_store.on('beforeload', function(store, operations, eOpts) {
			component.down('#btnModify').disable(); component.down('#btnQuery').disable(); component.down('#btnDelete').disable(); component.down('#btnPrinter').disable();

		    store.getProxy().setExtraParam('xxAlma_key', component.down('#alma_key').getValue());
		    store.getProxy().setExtraParam('xxTipdocint_id', component.down('#tipdocint_id').getValue());
		    store.getProxy().setExtraParam('xxRegint_nro', component.down('#regint_nro').getValue());
		    store.getProxy().setExtraParam('xxFechaini', component.down('#fechaini').getSubmitData());
		    store.getProxy().setExtraParam('xxFechafin', component.down('#fechafin').getSubmitData());
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});
	},

	orib_Clean: function(poComponent) {
		var _pag = poComponent.down('#pagOperations_registros_internacionales'); var _store = _pag.getStore();
		fext_gridClean(_store, _pag);

		poComponent.down('#btnModify').disable(); poComponent.down('#btnQuery').disable(); poComponent.down('#btnDelete').disable(); poComponent.down('#btnPrinter').disable();
	},

	orib_ViewEdit: function(poComponent, pcTypeEdit){
	    if ( fjsIn_array(pcTypeEdit, ['2','3']) ) {
	    	var _record = poComponent.down('#grdOperations_registros_internacionales').getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }
	    }

	    var _win = Ext.create('Siace.view.operations.Registros_InternacionalesEdit');
	    _win.setTypeEdit(pcTypeEdit); _win.setCallStore(poComponent.down('#grdOperations_registros_internacionales').getStore());
	    if ( fjsIn_array(pcTypeEdit, ['2','3']) ) { _win.setCallKey(_record.data.regint_key); }
	    _win.show();
	},

	orib_opc_idChange: function(combo, newValue, oldValue, options) {
		combo.up('panel').down('#btnNew').setDisabled(fextpub_uamoButtons(combo, 1));
	},
	orib_btnNewClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 1) ) { return false; } this.orib_ViewEdit(button.up('panel'), '1');
	},

	orib_btnModifyClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 2) ) { return false; } this.orib_ViewEdit(button.up('panel'), '2');
	},

	orib_btnQueryClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 3) ) { return false; } this.orib_ViewEdit(button.up('panel'), '3');
	},

	orib_btnDeleteClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 7) ) { return false; } 
		if ( options == undefined ) {
	        var _record = button.up('panel').down('#grdOperations_registros_internacionales').getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }

			Ext.Msg.confirm('Confirmación', '¿Esta Ud. seguro de ELIMINAR el registro seleccionado?', function(btn){
				if ( btn == 'yes' ) {
					var _win = Ext.create('Siace.view.public.UsuariosPsw2');
					_win.setCallButton(button);
					_win.setCallKey(_record.data.regint_key);
					_win.setSubTitle(_record.data.regint_documento);
					_win.show();
				}
			});
		} else {
			var _win = options.win; var _panel = button.up('panel');
			var _store = _panel.down('#grdOperations_registros_internacionales').getStore();
			Ext.get(_panel.getEl()).mask('Validando información... por favor espere un momento...', 'loading');
			fextpub_sessionVariables();
			Ext.Ajax.request({
				url: 'php/operations_registros_internacionales_delete.php',
				params: { xx0007: 'YES', xxRegint_key: options.key, xxUsur_psw2: options.usur_psw2, xxRegint_observ: options.observ,
					      xxUsursess_key: xxUsursess_key, xxUsur_key: xxUsur_key, xxAlma_key: xxAlma_key },
				success: function(conn, response, options, eOpts) {
					var _result = Siace.util.Util.decodeJSON(conn.responseText);
					if ( _result.success ) {
						_win.close(); _win.destroy();
			            _store.load({
			            	callback: function(opt, success, respon) { Ext.get(_panel.getEl()).unmask(); }
			            });
					} else { Ext.get(_panel.getEl()).unmask(); Siace.util.Util.showErrorMsg(_result.msg); }
				},
				failure: function(conn, response, options, eOpts) { Ext.get(_panel.getEl()).unmask(); Siace.util.Util.showErrorMsg(conn.responseText); }
			});

		}
	},

	orib_btnIcaClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 8005) ) { return false; } 
		var _record = button.up('panel').down('#grdOperations_registros_internacionales').getSelectionModel().getSelection()[0];
		if ( !_record ) { return false; }
        var _mainpanel = Ext.ComponentQuery.query('access_mainpanel')[0];

        _newTab = _mainpanel.add({
            xtype: 'panel',
            closable: true,
            iconCls: 'icon_0032',
            title: 'I.C.A.',
            layout: 'fit',
            html: 'loading PDF...',
            items: [{
                xtype: 'uxiframe',
                src: 'php/pdf/operations_pdf_guias_registros_aduanas_printer_ica.php?xxRegint_key='+_record.data.regint_key,
            }]
        });

        _mainpanel.setActiveTab(_newTab);
	},

	orib_acORIDownload: function(grid, cell, row, col, e, record, t) {
		if ( record.data.regint_pdf == '' ) {
			if ( fextpub_uamoButtons(grid.up('panel').up('panel').down('#opc_id'), 52) ) { return false; }			
			var _win = Ext.create('Siace.view.dataGeneral.WindowFileUpload');
			_win.setTypeFile(/pdf/);
			_win.setTypeMessage('[PDF]');
			_win.setSizeMax(1048576);
			_win.setSizeMessage('1 MB');
			_win.setCallStore(grid.getStore());
			_win.setSchemaTable('siace.registros_internacionales');
			_win.setTableField('regint_key');
			_win.setRecordKey(record.data.regint_key);
			_win.setRecordField('regint_pdf');
			_win.setTable('operations_registros_internacionales');
			_win.setField('pdf');
			_win.down('#documento').setValue(record.data.regint_documento);
			_win.show();
		} else {
			var _src = 'php/resources/download_file.php?xxSchema_table=siace.registros_internacionales&xxTable_field=regint_key&xxRecord_key=' + record.data.regint_key + '&xxRecord_field=regint_pdf&xxTable=operations_registros_internacionales&xxField=pdf';
			fext_FileDownload(undefined, _src);
		}
	},

	orib_alma_keyChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.orib_Clean(); }
	},

	orib_fechafinChange: function(datefield, newValue, oldValue, options) {
		this.orib_Clean(datefield.up('panel'));
	},

	orib_fechainiChange: function(datefield, newValue, oldValue, options) {
		this.orib_Clean(datefield.up('panel'));
	},

	orib_grdOperations_registros_internacionalesSelectionChange: function(model, record, options) {			
		if ( record.length == 1 ) {
			var _panel = model.view.panel.up('panel'); var _cboOpc_id = _panel.down('#opc_id'); _regadua_rows = record[0].data.regadua_rows;
			_panel.down('#btnModify').setDisabled(_regadua_rows*1 > 0 ? true : fextpub_uamoButtons(_cboOpc_id, 2));
			_panel.down('#btnQuery').setDisabled(fextpub_uamoButtons(_cboOpc_id, 3));
			_panel.down('#btnDelete').setDisabled(_regadua_rows*1 > 0 ? true : fextpub_uamoButtons(_cboOpc_id, 7));
			_panel.down('#btnPrinter').setDisabled(false);
			_panel.down('#btnIca').setDisabled(fextpub_uamoButtons(_cboOpc_id, 8005));
		}
	},

	orib_sal_nroChange: function(textfield, newValue, oldValue, options) {
		this.orib_Clean(textfield.up('panel'));
	},

	orib_tipdocint_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.orib_Clean(); }
	},

	orie_BeforeShow: function(component, options) {
		var _typeEdit = component.getTypeEdit();
		fextope_tipos_documentos_internacionalFilter({'objeto': component.down('#tipdocint_id'), 'type_record': 'combo', 'add_blank': 'NO'});
		fextpub_paisesFilter({'objeto': component.down('#pais_id'), 'add_blank': 'NO', 'setValue': false});

        if ( _typeEdit == '1' ) {
        	fextope_almacenesFilter({'objeto': component.down('#alma_key'), 'type_record': 'combo', 'add_blank': 'NO'});
        	var _icon = 'icon_New_90'; var _title = translations.operations_registros_internacionalesedit_title_new;
        } else if ( fjsIn_array(_typeEdit, ['2','3']) ) {
        	fextope_almacenesFilter({'objeto': component.down('#alma_key'), 'type_record': 'combo', 'add_blank': 'NO'});
	        var _form = component.down('form');
	   		_form.load({
	   			method: 'POST', url: 'php/operations_registros_internacionales_json_records.php',
	            params: { xxRegint_key: component.getCallKey(),  xxType_record: 'form' }, waitMsg: 'Loading...',
	            success: function (form, action) {
	                try {
	                    var _model = Ext.create('Siace.model.operations.Registro_Internacional'); var _result = Ext.decode(action.response.responseText);
	                    if ( _result.data[0] ) {
	                        _model.set(_result.data[0]);  _form.loadRecord(_model);

        					if ( _model.data.regint_pdf !== '' ) {
        						component.down('#btnRegint_pdfDownload').setDisabled(false);
        						if ( _typeEdit == '2' ) { component.down('#ffiRegint_pdf').hide(); component.down('#btnRegint_pdfDelete').show(); }
        					}
	                    }
	                }
	                catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
	            },
	            failure: function (form, action) { Ext.Msg.alert("Load failed", action.result.errorMessage); }
	        });

        	if ( _typeEdit == '2' ) { 
        		var _icon = 'icon_Modify_90'; var _title = translations.operations_registros_internacionalesedit_title_modify; 
        	} else { 
        		var _icon = 'icon_Query_90'; var _title = translations.operations_registros_internacionalesedit_title_query; 
				component.down('#alma_key').setDisabled(true);
				component.down('#tipdocint_id').setDisabled(true); component.down('#regint_nro').setDisabled(true); component.down('#ffiRegint_pdf').setDisabled(true);
				component.down('#regint_fecha').setDisabled(true); component.down('#pers_ruc').setDisabled(true); component.down('#btnPers_search').setDisabled(true);
				component.down('#pais_id').setDisabled(true); component.down('#mone_id').setDisabled(true); component.down('#regint_monto_flete').setDisabled(true);
				component.down('#regint_observ').setDisabled(true);
				component.down('#btnSave').setDisabled(true); component.down('#btnUndo').setDisabled(true); component.down('#btnExit').setDisabled(false);

        	}
        }
        component.setIconCls(_icon); component.setTitle(_title);
	},

	orie_Close: function(panel, options) {
		if ( this.getPps_Public_PersonasSearch() !== undefined ) { this.getPps_Public_PersonasSearch().close(); this.getPps_Public_PersonasSearch().destroy(); }
	},

	orie_btnExitClick: function(button, e, options) {
		button.up('window').close();
	},

	orie_btnSaveClick: function(button, e, options) {
	    var _win = button.up('window'); var _frm = _win.down('form');
	    if ( _win.down('#alma_key').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el USUARIO', function() { _win.down('#alma_key').focus(); }); return false ; }
	    if ( _win.down('#tipdocint_id').getValue()*1 <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el TIPO de documento', function() { _win.down('#tipdocint_id').focus(); }); return false ; }
	    if ( _win.down('#regint_nro').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el NUMERO de documento', function() { _win.down('#regint_nro').focus(); }); return false ; }
	    if ( _win.down('#regint_fecha').getValue() == null || _win.down('#regint_fecha').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar la FECHA del documento', function() { _win.down('#regint_fecha').focus(); }); return false ; }
	    if ( _win.down('#pais_id').getValue()*1 <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el PAIS de procedencia', function() { _win.down('#pais_id').focus(); }); return false ; }
		if ( _win.down('#mone_id').getValue()*1>0 && _win.down('#regint_monto_flete').getValue()*1 <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el IMPORTE del flete', function() { _win.down('#regint_monto_flete').focus(); }); return false ; }

	    if ( _frm.getForm().isValid() ) {
			Ext.Msg.confirm(translations.confirmar, translations.mensaje_pregunta_guardar, function(btn){
				if ( btn === 'yes' ) {
			    	var _vs = fextpub_sessionVariables();
			        _frm.getForm().submit({
						method: 'POST',  url: 'php/operations_registros_internacionales_save.php',
						params:{ xx0005: 'OK', 
								 zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
		                waitTitle: translations.valida_titulo, waitMsg: translations.valida_mensaje01,
			            success: function(form, action) {
			            	var result = Siace.util.Util.decodeJSON(action.response.responseText);
			                if ( result.success ) {
			                	if ( _win.getCallStore() !== null ) { _win.getCallStore().load(); }
			                    _win.close();
			                } else { Siace.util.Util.showErrorMsg(result.msg); }
			            },
			            failure: function(form, action) { Siace.util.Util.showErrorMsg(action.response.responseText); }
			        });
				}	
			});
		}
	},

	orie_btnUndoClick: function(button, e, options) {
		button.up('window').close();
	},

	orie_btnRegint_pdfDeleteClick: function(button, e, options) {
		var _win = button.up('window');
		_win.down('#ffiRegint_pdf').reset();
		_win.down('#regint_pdf').setValue('');
		_win.down('#ffiRegint_pdf').show(); button.hide(); _win.down('#btnRegint_pdfDownload').setDisabled(true);
    },

	orie_btnRegint_pdfDownloadClick: function(button, e, options) {
		var _file = button.up('window').down('#ffiRegint_pdf').fileInputEl.dom.files[0];
		var _src = 'php/resources/download_file.php?xxTable=operations_registros_internacionales&xxField=pdf&xxFile_name=' + button.up('window').down('#regint_key').getValue() +'_'+ button.up('window').down('#regint_pdf').getValue();
		fext_FileDownload(_file, _src);
	},

	orie_btnPers_searchClick: function(button, e, options) {
		fext_windowSearch(this.getPps_Public_PersonasSearch(), button.up('window'), 'Siace.view.public.PersonasSearch', translations.public_personas_exportadoressearch_title, button.up('window').down('#pers_key').getValue(), 'EXPORTADORES', 'EXPORTADORES');
	},

	orie_ffiRegint_pdfChange: function(filefield, value, options) {
		var _win = filefield.up('window');
		fext_FileReader(filefield, /pdf/, '[PDF]', 1048576, '1 MB', _win.down('#btnRegint_pdfDelete'), _win.down('#btnRegint_pdfDownload'));
	},

	orie_pers_rucBlur: function(textfield, e, options) {
		this.orie_pers_rucSearch('0', textfield.up('form'));
	},

	orie_pers_rucFocus: function(textfield, e, options) {
		this.orie_pers_rucSearch('1', textfield.up('form'));
	},

	orie_pers_rucKeypress: function(textfield, e, options) {
		if( e.getCharCode() == 13 ) { this.orie_pers_rucSearch('13', textfield.up('form')); }
	},

	orie_pers_rucSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['pers_key', 'PERS_RUC', 'pers_ruc', 'pers_nombre'],
			            ['php/public_personas_json_records.php', 'xxPers_ruc', 'textfield_search', 'EXPORTADORES'], '',
			            ['', '', [''], '']);
	},

	orie_mone_idChange: function(combo, newValue, oldValue, options) {
		if ( fjsIn_array(combo.up('window').getTypeEdit(),['1','2']) ) {
			if ( combo.getValue()*1 > 0 ) {
				combo.up('window').down('#regint_monto_flete').enable();
			}  else {
				combo.up('window').down('#regint_monto_flete').disable();
				combo.up('window').down('#regint_monto_flete').setValue('');
			}
		}
	},
});