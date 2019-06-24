Ext.define('Siace.controller.operations.Registros_Aduanas', {
	extend: 'Ext.app.Controller',
	views: ['operations.Registros_AduanasBrowse', 'operations.Registros_AduanasEdit', 'operations.Registros_AduanasSearchToAdd'],
	stores: [ ],
    refs: [
        { ref: 'orasta_grdOperations_registros_aduanas', selector: 'operations_registros_aduanassearchtoadd #grdOperations_registros_aduanas' },
        { ref: 'pps_Public_PersonasSearch', selector: 'public_personassearch' },
    ],

	init: function(application) {
		this.control({
			'operations_registros_aduanasbrowse': { beforerender: this.orab_BeforeRender, },
			'operations_registros_aduanasbrowse #opc_id': { change: this.orab_opc_idChange, },
			'operations_registros_aduanasbrowse #btnNew': { click: this.orab_btnNewClick, },
			'operations_registros_aduanasbrowse #btnModify': { click: this.orab_btnModifyClick, },
			'operations_registros_aduanasbrowse #btnQuery': { click: this.orab_btnQueryClick, },
			'operations_registros_aduanasbrowse actioncolumn#acOperations_registros_aduanas': { click: this.orab_acOperations_registros_aduanasDownload, },
            'operations_registros_aduanasbrowse #alma_key': { change: this.orab_alma_keyChange, },
			'operations_registros_aduanasbrowse #fechafin': { change: this.orab_fechafinChange, },
			'operations_registros_aduanasbrowse #fechaini': { change: this.orab_fechainiChange, },
			'operations_registros_aduanasbrowse #grdOperations_registros_aduanas': { selectionchange: this.orab_grdOperations_registros_aduanasSelectionchange, },
			'operations_registros_aduanasbrowse #regadua_nro': { change: this.orab_regadua_nroChange, },
            'operations_registros_aduanasbrowse #tipdocadua_id': { change: this.orab_tipdocadua_idChange, },
            'operations_registros_aduanasbrowse #tipregadua_id': { change: this.orab_tipregadua_idChange, },
            'operations_registros_aduanasbrowse #year_id': { change: this.orab_year_idChange, },

			'operations_registros_aduanasedit': { beforeshow: this.orae_BeforeShow, close: this.orae_Close, },
            'operations_registros_aduanasedit #btnSave': { click: this.orae_btnSaveClick, },
            'operations_registros_aduanasedit #btnUndo': { click: this.orae_btnUndoClick, },
            'operations_registros_aduanasedit #btnExit': { click: this.orae_btnExitClick, },
            'operations_registros_aduanasedit #btnPersimpor_search': { click: this.orae_btnPersimpor_searchClick, },
            'operations_registros_aduanasedit #btnRegadua_pdfDelete': { click: this.orae_btnRegadua_pdfDeleteClick, },
            'operations_registros_aduanasedit #btnRegadua_pdfDownload': { click: this.orae_btnRegadua_pdfDownloadClick, },
            'operations_registros_aduanasedit #ffiRegadua_pdf': { change: this.orae_ffiRegadua_pdfChange, },
            'operations_registros_aduanasedit #tipbul_id': { change: this.orae_tipbul_idChange, },
            'operations_registros_aduanasedit #tipdocadua_id': { change: this.orae_tipdocadua_idChange, },
            'operations_registros_aduanasedit #tipmov_id': { change: this.orae_tipmov_idChange, },
            'operations_registros_aduanasedit #tipregadua_id': { change: this.orae_tipregadua_idChange, },
			'operations_registros_aduanasedit #persimpor_ruc': { blur: this.orae_persimpor_rucBlur, focus: this.orae_persimpor_rucFocus, keypress: this.orae_persimpor_rucKeypress, },
			'operations_registros_aduanasedit #regadua_nro': { blur: this.orae_regadua_nroBlur, },

			'operations_registros_aduanassearchtoadd': { beforerender: this.orasta_BeforeRender, },
			'operations_registros_aduanassearchtoadd #btnAccept': { click: this.orasta_btnAcceptClick },
          	'operations_registros_aduanassearchtoadd #btnCancel': { click: this.orasta_btnCancelClick },
			'operations_registros_aduanassearchtoadd #grdOperations_registros_aduanas': { itemdblclick: this.orasta_grdOperations_registros_aduanasItemdblclick, selectionchange: this.orasta_grdOperations_registros_aduanasSelectionChange, },
			'operations_registros_aduanassearchtoadd #regadua_nro': { change: this.orasta_regadua_nroChange, },
            'operations_registros_aduanassearchtoadd #tipdocadua_id': { change: this.orasta_tipdocadua_idChange, },
            'operations_registros_aduanassearchtoadd #year_id': { change: this.orasta_year_idChange, },

		});
	},

	orab_BeforeRender: function(component, options) {
		fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': component.down('#opc_id'), 'menu_id': component.getMenuId() });
		fextope_almacenesFilter({'objeto': component.down('#alma_key'), 'add_blank': (Ext.getCmp('ah_txtAlma_key').getValue() == '' ? 'YES' : 'NO')});
		fextope_tipos_documentos_aduanaFilter({'objeto': component.down('#tipdocadua_id')});

		var _store = Ext.create('Siace.store.operations.Registros_Aduanas');
		var _grid = component.down('#grdOperations_registros_aduanas'); var _pagtool = component.down('#pgtOperations_registros_aduanas');
		_grid.bindStore(_store);  _pagtool.bindStore(_store);
		_store.sort('regadua_fecha', 'DESC'); _store.pageSize = 500;
		_store.on('beforeload', function(store, operations, eOpts) {
			component.down('#btnModify').disable(); component.down('#btnQuery').disable(); component.down('#btnDelete').disable();

		    store.getProxy().setExtraParam('xxAlma_key', component.down('#alma_key').getValue());
		    store.getProxy().setExtraParam('xxTipregadua_id', component.down('#tipregadua_id').getValue());
		    store.getProxy().setExtraParam('xxTipdocadua_id', component.down('#tipdocadua_id').getValue());
		    store.getProxy().setExtraParam('xxYear_id', component.down('#year_id').getValue());
		    store.getProxy().setExtraParam('xxRegadua_nro', component.down('#regadua_nro').getValue());
		    store.getProxy().setExtraParam('xxFechaini', component.down('#fechaini').getSubmitData());
		    store.getProxy().setExtraParam('xxFechafin', component.down('#fechafin').getSubmitData());
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});
	},

	orab_Clean: function(poComponent) {
		var _store = poComponent.down('#pgtOperations_registros_aduanas').getStore();
		var _pagingtoolbar = poComponent.down('#pgtOperations_registros_aduanas');
		fext_gridClean(_store, _pagingtoolbar);

		poComponent.down('#btnModify').disable(); poComponent.down('#btnQuery').disable(); poComponent.down('#btnDelete').disable();
	},

	orab_ViewEdit: function(pcTypeEdit, poComponent){
		if ( fjsIn_array(pcTypeEdit, ['2','3']) ) {
        	var _record = poComponent.down('#grdOperations_registros_aduanas').getSelectionModel().getSelection()[0];
        	if ( !_record ) { return false; }
        }
	    var _win = Ext.create('Siace.view.operations.Registros_AduanasEdit');
	    _win.setTypeEdit(pcTypeEdit); _win.setCallStore(poComponent.down('#grdOperations_registros_aduanas').getStore());
	    if ( fjsIn_array(pcTypeEdit, ['2','3']) ) { _win.setCallKey(_record.data.regadua_key); }
	    _win.show();
	},

	orab_opc_idChange: function(combo, newValue, oldValue, options) {
		combo.up('panel').down('#btnNew').setDisabled(fextpub_uamoButtons(combo, 1));
	},

	orab_btnNewClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 1) ) { return false; } this.orab_ViewEdit('1', button.up('panel'));
	},

	orab_btnModifyClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 2) ) { return false; } this.orab_ViewEdit('2', button.up('panel'));
	},

	orab_btnQueryClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 3) ) { return false; } this.orab_ViewEdit('3', button.up('panel'));
	},

	orab_acOperations_registros_aduanasDownload: function(grid, cell, row, col, e, record, t) {
		if ( record.data.regadua_pdf == '' ) {
			if ( fextpub_uamoButtons(grid.up('panel').up('panel').down('#opc_id'), 52) ) { return false; }
			var _win = Ext.create('Siace.view.dataGeneral.WindowFileUpload');
			_win.setTypeFile(/pdf/);
			_win.setTypeMessage('[PDF]');
			_win.setSizeMax(1048576);
			_win.setSizeMessage('1 MB');
			_win.setCallStore(grid.getStore());
			_win.setSchemaTable('siace.registros_aduanas');
			_win.setTableField('regadua_key');
			_win.setRecordKey(record.data.regadua_key);
			_win.setRecordField('regadua_pdf');
			_win.setTable('operations_registros_aduanas');
			_win.setField('pdf');
			_win.down('#documento').setValue(record.data.regadua_documento);
			_win.show();
		} else {
			var _src = 'php/resources/download_file.php?xxSchema_table=siace.registros_aduanas&xxTable_field=regadua_key&xxRecord_key=' + record.data.regadua_key + '&xxRecord_field=regadua_pdf&xxTable=operations_registros_aduanas&xxField=pdf';
			fext_FileDownload(undefined, _src);
		}
	},

	orab_alma_keyChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.orab_Clean(combo.up('panel')); }
	},

	orab_fechafinChange: function(datefield, newValue, oldValue, options) {
		this.orab_Clean(datefield.up('panel'));
	},

	orab_fechainiChange: function(datefield, newValue, oldValue, options) {
		this.orab_Clean(datefield.up('panel'));
	},

	orab_grdOperations_registros_aduanasSelectionchange: function(model, record, options) {			
		if ( record.length == 1 ) {
			var _panel = model.view.panel.up('panel'); var _cboOpc_id = _panel.down('#opc_id'); _ceticos_documento = record[0].data.ceticos_documento;
			_panel.down('#btnModify').setDisabled(_ceticos_documento == '' ? fextpub_uamoButtons(_cboOpc_id, 2) : true);
			_panel.down('#btnQuery').setDisabled(fextpub_uamoButtons(_cboOpc_id, 3));
			_panel.down('#btnDelete').setDisabled(_ceticos_documento == '' ? fextpub_uamoButtons(_cboOpc_id, 7) : true);
		}
	},

	orab_regadua_nroChange: function(textfield, newValue, oldValue, options) {
		this.orab_Clean(textfield.up('panel'));
	},

	orab_tipdocadua_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.orab_Clean(combo.up('panel')); }
	},

	orab_tipregadua_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.orab_Clean(combo.up('panel')); }
	},

	orab_year_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.orab_Clean(combo.up('panel')); }
	},

	orae_BeforeShow: function(component, options) {
		var _typeEdit = component.getTypeEdit();
		fextope_tipos_movimientoParameters({'panel': component, 'add_blank': 'NO'});
		fextope_tipos_documentos_aduanaFilter({'objeto': component.down('#tipdocadua_id'), 'type_record': 'combo_regadua', 'add_blank': 'NO', 'setValue' : false});
		fextope_aduanasFilter({'objeto': component.down('#adua_id')});
		fextope_aduanas_operacionesFilter({'objeto': component.down('#aduaoper_id')});

		var _cboTipbul_id = component.down('#tipbul_id');
		_cboTipbul_id.bindStore(Ext.create('Siace.store.public.Tipos_Bulto'));
		_cboTipbul_id.getStore().load({  params: { xxType_record: 'combo', xxAdd_blank: 'YES' } });

        if ( _typeEdit == '1' ) {
        	fextope_almacenesFilter({'objeto': component.down('#alma_key'), 'type_record': 'combo', 'add_blank': 'NO'});
        	var _icon = 'icon_New_90'; var _title = translations.operations_registros_aduanasedit_title_new;
        } else if ( fjsIn_array(_typeEdit, ['2','3']) ) {
        	fextope_almacenesFilter({'objeto': component.down('#alma_key'), 'type_record': 'combo', 'add_blank': 'NO'});
	        var _form = component.down('form');
	   		_form.load({
	   			method: 'POST', url: 'php/operations_registros_aduanas_json_records.php',
	            params: { xxRegadua_key: component.getCallKey(),  xxType_record: 'form' }, waitMsg: 'Loading...',
	            success: function (form, action) {
	                try {
	                    var _model = Ext.create('Siace.model.operations.Registro_Aduana'); var _result = Ext.decode(action.response.responseText);
	                    if ( _result.data[0] ) {
	                        _model.set(_result.data[0]);  _form.loadRecord(_model);

							component.down('#regadua_nro').setValue(fjsLpad(_model.data.regadua_nro, 5, '0'));
        					if ( _model.data.regadua_pdf !== '' ) {
        						component.down('#btnRegadua_pdfDownload').disable();
        						if ( _typeEdit == '2' ) { component.down('#ffiRegadua_pdf').hide(); component.down('#btnRegadua_pdfDelete').show(); }
        					}
	                    }
	                }
	                catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
	            },
	            failure: function (form, action) { Ext.Msg.alert('Load failed', action.result.errorMessage); }
	        });

        	if ( _typeEdit == '2' ) { 
        		var _icon = 'icon_Modify_90'; var _title = translations.operations_registros_aduanasedit_title_modify;
        	} else { 
        		var _icon = 'icon_Query_90'; var _title = translations.operations_registros_aduanasedit_title_query; 
				component.down('#alma_key').disable();
				component.down('#tipregadua_id').disable(); component.down('#tipmov_id').disable(); 
				component.down('#tipdocadua_id').disable(); component.down('#adua_id').disable(); component.down('#year_id').disable(); component.down('#aduaoper_id').disable(); 
				component.down('#regadua_nro').disable(); component.down('#ffiRegadua_pdf').disable();
				component.down('#regadua_fecha').disable(); component.down('#persimpor_ruc').disable(); component.down('#btnPersimpor_search').disable();
				component.down('#regint_nro').disable(); component.down('#btnRegint_search').disable();
				component.down('#tipbul_id').disable(); component.down('#regadua_cantid').disable();
				component.down('#regadua_observ').disable();
				component.down('#btnSave').disable(); component.down('#btnUndo').disable(); component.down('#btnExit').enable();
        	}
        }
        component.setIconCls(_icon); component.setTitle(_title);
    },

	orae_Close: function(panel, options) {
		if ( this.getPps_Public_PersonasSearch() !== undefined ) { this.getPps_Public_PersonasSearch().close(); this.getPps_Public_PersonasSearch().destroy(); }
	},

	orae_btnSaveClick: function(button, e, options) {
	    var _win = button.up('window');  var _frm = _win.down('form');
	    if ( _win.down('#alma_key').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el Usuario', function() { _win.down('#alma_key').focus(); }); return false ; }
	    if ( _win.down('#tipregadua_id').getValue()*1 <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el Tipo de Registro de Aduana', function() { _win.down('#tipregadua_id').focus(); }); return false ; }
	    if ( _win.down('#tipmov_id').getValue()*1 <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el Tipo de Declaración', function() { _win.down('#tipmov_id').focus(); }); return false ; }
	    if ( _win.down('#tipdocadua_id').getValue()*1 <= 0 ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar el Tipo de Documento Aduanero', function() { _win.down('#tipdocadua_id').focus(); }); return false ; }
	    if ( !_win.down('#adua_id').isDisabled() &&  _win.down('#adua_id').getValue() <= 0 ) {
				Ext.Msg.alert(translations.mensaje, 'Debe indicar el Código de Aduana', function() { _win.down('#adua_id').focus(); }); return false ; }
	    if ( !_win.down('#year_id').isDisabled() &&  _win.down('#year_id').getValue() <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el Año del documento', function() { _win.down('#year_id').focus(); }); return false ; }
	    if ( !_win.down('#aduaoper_id').isDisabled() &&  _win.down('#aduaoper_id').getValue() <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el Tipo de Operación Aduanera', function() { _win.down('#aduaoper_id').focus(); }); return false ; }
	    if ( _win.down('#regadua_fecha').getValue() == null || _win.down('#regadua_fecha').getValue() == '' ) {
    		Ext.Msg.alert(translations.mensaje, 'Debe indicar La fecha del documento', function() { _win.down('#regadua_fecha').focus(); }); return false ; }
	    if ( _win.down('#persimpor_key').getValue() == '' ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar el Operador', function() { _win.down('#persimpor_key').focus(); }); return false ; }
	    /*if ( _win.down('combo[name=adua_id]').isDisabled() == false ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el Código de Aduana');
	    	return false ; }*/

	    if ( _frm.getForm().isValid() ) {
	    	var _vs = fextpub_sessionVariables();
	        _frm.getForm().submit({
				method: 'POST',  url: 'php/operations_registros_aduanas_save.php',
				params:{ xx0005: 'OK',
						 zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
                waitTitle: translations.valida_titulo, waitMsg: translations.valida_mensaje01,
	            
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
	    }
	},

	orae_btnUndoClick: function(button, e, options) {
		button.up('window').close();
	},

	orae_btnExitClick: function(button, e, options) {
		button.up('window').close();
	},

	orae_btnPersimpor_searchClick: function(button, e, options) {
		fext_windowSearch(this.getPps_Public_PersonasSearch(), button.up('window'), 'Siace.view.public.PersonasSearch', translations.public_personas_importadoressearch_title, button.up('window').down('#persimpor_key').getValue(), 'OPERADORES', 'OPERADORES');
	},

	orae_btnRegadua_pdfDeleteClick: function(button, e, options) {
		var _win = button.up('window');
		_win.down('#ffiRegadua_pdf').reset();
		_win.down('#regadua_pdf').setValue('');
		_win.down('#ffiRegadua_pdf').show(); button.hide(); _win.down('#btnRegadua_pdfDownload').setDisabled(true);
    },

	orae_btnRegadua_pdfDownloadClick: function(button, e, options) {
		var _file = button.up('window').down('#ffiRegadua_pdf').fileInputEl.dom.files[0];
		var _src = 'php/resources/download_file.php?xxTable=operations_registros_aduanas&xxField=pdf&xxFile_name=' + button.up('window').down('#regadua_key').getValue() +'_'+ button.up('window').down('#regadua_pdf').getValue();
		fext_FileDownload(_file, _src);
	},

	orae_ffiRegadua_pdfChange: function(filefield, value, options) {
		var _win = filefield.up('window'); // 2097152
		fext_FileReader(filefield, /pdf/, '[PDF]', 1048576, '1 MB', _win.down('#btnRegadua_pdfDelete'), _win.down('#btnRegadua_pdfDownload'));
	},

	orae_persimpor_rucBlur: function(textfield, e, options) {
		this.orae_persimpor_rucSearch('0', textfield.up('form'));
	},

	orae_persimpor_rucFocus: function(textfield, e, options) {
		this.orae_persimpor_rucSearch('1', textfield.up('form'));
	},

	orae_persimpor_rucKeypress: function(textfield, e, options) {
		if( e.getCharCode() == 13 ) { this.orae_persimpor_rucSearch('13', textfield.up('form')); }
	},

	orae_persimpor_rucSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['persimpor_key', 'PERSIMPOR_RUC', 'persimpor_ruc', 'persimpor_nombre'],
			            ['php/public_personas_json_records.php', 'xxPers_ruc', 'textfield_search', 'OPERADORES'], '',
			            ['', '', [''], '']);
	},

	orae_regadua_nroBlur: function(textfield, the, options) {
		if ( textfield.getValue()*1 > 0 ) { textfield.setValue( fjsLpad(textfield.getValue(), 5, '0') ); }
	},

	orae_tipbul_idChange: function(combo, newValue, oldValue, options) {
		var _win = combo.up('window');
		if ( fjsIn_array(_win.getTypeEdit(), ['1','2']) ) {
			if ( combo.getValue()*1 > 0 ) { _win.down('#regadua_cantid').enable(); }  
			else { _win.down('#regadua_cantid').disable(); _win.down('#regadua_cantid').setValue(''); }
		}
	},

	orae_tipdocadua_idChange: function(combo, newValue, oldValue, options) {
		if ( fjsIn_array(combo.up('window').getTypeEdit(), ['1','2']) ) {
			var _record = combo.getStore().findRecord('tipdocadua_id', combo.getValue());
			var _win = combo.up('window');
			if ( fjsIn_array(_win.getTypeEdit(), ['1','2']) ) {
				if ( _record.data['tipdocadua_estado_aduanas'] == '1' ) { _win.down('#adua_id').enable(); } 
				else { _win.down('#adua_id').disable();  _win.down('#adua_id').setValue(0); }
				if ( _record.data['tipdocadua_estado_years'] == '1' ) { _win.down('#year_id').enable(); } 
				else {  _win.down('#year_id').disable();  _win.down('#year_id').setValue(0); }
				if ( _record.data['tipdocadua_estado_aduanas_operaciones'] == '1' ) { _win.down('#aduaoper_id').enable(); } 
				else {  _win.down('#aduaoper_id').disable();  _win.down('#aduaoper_id').setValue(0); }
				if ( _record.data['tipdocadua_estado_regint'] == '1' ) { _win.down('#btnRegint_search').enable(); } 
				else {  _win.down('#btnRegint_search').disable();  _win.down('#regint_key').setValue(''); _win.down('#regint_nro').setValue(''); _win.down('#regint_nombre').setValue(''); }
			}
		}
	},

	orae_tipmov_idChange: function(combo, newValue, oldValue, options) {
		if ( fjsIn_array(combo.up('window').getTypeEdit(), ['1','2']) ) {
			var _win = combo.up('window');
			if ( _win.down('#tipregadua_id').getValue() == '1' && _win.down('#tipmov_id').getValue() == '31' ) {
					//_win.down('#regint_nro').enable();
			} else {
					//_win.down('#regint_nro').disable();
					_win.down('#regint_key').setValue('');
					_win.down('#REGINT_NRO').setValue('');
					_win.down('#regint_nro').setValue('');
					_win.down('#regint_nombre').setValue('');
			}
		}
	},

	orae_tipregadua_idChange: function(combo, newValue, oldValue, options) {
		fextope_tipos_movimientoLoad(combo.up('form').down('#tipmov_id'), true);
		/*var _tipregadua_id = combo.getValue();
		var _combo = combo.up('form').down('#tipmov_id');
		this.orae_fn_tipos_movimientoFilter(_combo, _tipregadua_id, ''); */
	},

	/*orae_fn_tipos_movimientoFilter: function(combo, tipregadua_id, tipmov_id) {
		var _ing = (tipregadua_id == '1' ? '1' : '');
		var _sal = (tipregadua_id == '2' ? '1' : '');
		combo.getStore().load({
			params: { xxTipmov_estado_ingresos: _ing, xxTipmov_estado_salidas: _sal, xxType_record: 'cbo' },
			callback: function(records, operations, success) {
				combo.setValue( tipmov_id == '' ? records[0].data.tipmov_id : tipmov_id );
    		}
		});
	}, */

	orasta_BeforeRender: function(component, options) {
		fextope_tipos_documentos_aduanaFilter({'objeto': component.down('#tipdocadua_id')});
		//fextpub_yearsCombo(component.down('#year_id'), '1', 'combo', 'YES');

		var _store = Ext.create('Siace.store.operations.Registros_Aduanas');
		var _grid = component.down('#grdOperations_registros_aduanas'); var _pagtool = component.down('#pgtOperations_registros_aduanas');
		_grid.bindStore(_store);  _pagtool.bindStore(_store);
		_store.sort('regadua_fecha', 'DESC'); _store.pageSize = 500;
		_store.on('beforeload', function(store, operations, eOpts) {
			component.down('#btnAccept').disable();

		    store.getProxy().setExtraParam('xxAlma_key', component.getTypeQuery().substr(1,32));
		    store.getProxy().setExtraParam('xxTipregadua_id', component.getTypeQuery().substr(0,1));
		    store.getProxy().setExtraParam('xxTipdocadua_id', component.down('#tipdocadua_id').getValue());
		    store.getProxy().setExtraParam('xxYear_id', component.down('#year_id').getValue());
		    store.getProxy().setExtraParam('xxRegadua_nro', component.down('#regadua_nro').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'grid_searchtoadd');
		    store.getProxy().setExtraParam('xxType_query', 'Search_To_Add');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		}); _store.load();
	},

	orasta_Clean: function(poComponent) {
		var _store = poComponent.down('#pgtOperations_registros_aduanas').getStore();
		var _pagtool = poComponent.down('#pgtOperations_registros_aduanas');
		fext_gridClean(_store, _pagtool);

		poComponent.down('#btnAccept').disable();
	},

	orasta_btnAcceptClick: function(button, e, options) {
		var _win = button.up('window');
		var _grid = _win.down('#grdOperations_registros_aduanas');
        var _record = _grid.getSelectionModel().getSelection()[0];
        var _close = true;

        if ( _record && _record.data.bs_key !== _win.getCallKey() ) {
        	if ( _win.getCallWindow() !== null ) {
        		if ( _win.getTypeReturn() == 'GUIA_ADD' ) {
        			_win.getCallWindow().down('#alma_key').setDisabled(true);
        			var _store = _win.getCallWindow().down('#grdOperations_guias_registros_aduanas').getStore();
        			var _model = _store.findRecord('regadua_key', _record.data.regadua_key);
        			if ( _model == null ) {
	        			_store.add({
	       					regadua_key: _record.data.regadua_key,
	       					regadua_documento: _record.data.regadua_documento,
	        				regadua_fecha: _record.data.regadua_fecha,
	        				alma_abrev: _record.data.alma_abrev,
	        				tipmov_abrev: _record.data.tipmov_abrev,
	        				pers_nombre: _record.data.pers_nombre,
	        				regint_documento: _record.data.regint_documento,
	        				regadua_pdf: _record.data.regadua_pdf,
	    				});
	    			} else {
	    				_close = false;
	    				Ext.Msg.alert(translations.mensaje, 'documento seleccionado ya se encuentra establecido');
	    			}
       			}
        	}
        	if ( _close ) { _win.close();  if ( _win.getActionDestroy() == true ) { _win.destroy(); } }
		}
	},

	orasta_btnCancelClick: function(button, e, options) {
		button.up('window').close();  if ( button.up('window').getActionDestroy() == true ) { button.up('window').destroy(); }
	},

	orasta_grdOperations_registros_aduanasItemdblclick: function(component, record, item, index, e, options) {
		var _btnAccept = component.up('window').down('#btnAccept');
        _btnAccept.fireEvent('click', _btnAccept, e, options);
	},

	orasta_grdOperations_registros_aduanasSelectionChange: function(model, record, options) {
		if ( record.length == 1 ) {
			var _win = model.view.panel.up('window');
			_win.down('#btnAccept').setDisabled( record[0].data.indiv_key == _win.getCallKey() ? true : false );
		}
	},

	orasta_regadua_nroChange: function(textfield, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.orasta_Clean(textfield.up('window')); }
	},

	orasta_tipdocadua_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.orasta_Clean(combo.up('window')); }
	},

	orasta_year_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.orasta_Clean(combo.up('window')); }
	},

});