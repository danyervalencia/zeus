Ext.define('Siace.controller.public.Personas_Importadores', {
	extend: 'Ext.app.Controller',
	views: [
		'public.Personas_ImportadoresWindow', 'public.Personas_Importadores_LicenciasEdit',
	],
    refs: [
    	{ ref: 'ppiw_grdPublic_Personas_Importadores_Licencias', selector: 'public_personas_importadoreswindow #grdPublic_personas_importadores_licencias' },
    	{ ref: 'ppiw_grdPublic_Personas_Importadores_Licencias_Individuos', selector: 'public_personas_importadoreswindow #grdPublic_personas_importadores_licencias_individuos' },
    	{ ref: 'pis_Public_IndividuosSearch', selector: 'public_individuossearch' },
    ],

	init: function(application) {
		this.control({
			'public_personas_importadoreswindow': { beforerender: this.ppiw_BeforeRender, },
			'public_personas_importadoreswindow #btnNew': { click: this.ppiw_btnNewClick, },			
			'public_personas_importadoreswindow #btnRenovate': { click: this.ppiw_btnRenovateClick, },
			'public_personas_importadoreswindow #btnQuery': { click: this.ppiw_btnQueryClick, },
			'public_personas_importadoreswindow #btnConstancy': { click: this.ppiw_btnConstancyClick, },
			'public_personas_importadoreswindow #btnPrinter': { click: this.ppiw_btnPrinterClick, },
			'public_personas_importadoreswindow #grdPublic_personas_importadores_licencias': { selectionchange: this.ppiw_grdPublic_personas_importadores_licenciasSelectionchange, },
			'public_personas_importadoreswindow #grdPublic_personas_importadores_licencias_individuos': { selectionchange: this.ppiw_grdPublic_personas_importadores_licencias_individuosSelectionchange, },
			'public_personas_importadoreswindow #persimpor_key': { change: this.ppiw_persimpor_keyChange, },

			'public_personas_importadores_licenciasedit': { beforeshow: this.ppile_BeforeShow, close: this.ppile_Close, },
            'public_personas_importadores_licenciasedit #btnSave': { click: this.ppile_btnSaveClick, },
            'public_personas_importadores_licenciasedit #btnUndo': { click: this.ppile_btnUndoClick, },
            'public_personas_importadores_licenciasedit #btnExit': { click: this.ppile_btnExitClick, },
            'public_personas_importadores_licenciasedit #btnIndiv_search': { click: this.ppile_btnIndiv_searchClick },
            'public_personas_importadores_licenciasedit #indiv_dni': {
                blur: this.ppile_indiv_dniBlur,
                focus: this.ppile_indiv_dniFocus,
                keypress: this.ppile_indiv_dniKeypress,
            },
		});
	},

	ppile_BeforeShow: function(component, options) {
		var _typeEdit = component.getTypeEdit();

		var _str = Ext.create('Ext.data.Store', {
			fields: [ { name: 'doc_id', type: 'int' }, { name: 'doc_nombre', type: 'string' }, ],
			data: [ { doc_id: '509', doc_nombre: 'Credencial de Operador' }, ]
		});
		var _cboDoc_id = component.down('#doc_id');
		_cboDoc_id.bindStore(_str);
		_cboDoc_id.getStore().load({  callback: function(opt,success,respon) { _cboDoc_id.setValue(509); } });

		component.down('#persimporlic_fecha').setValue(fjsDateCurrent(''));
		var _cboActiv_id = component.down('#activ_id');
		_cboActiv_id.bindStore(Ext.create('Siace.store.operations.Actividades'));
		_cboActiv_id.getStore().load({ 
			params: { xxType_record: 'combo_codename', xxActiv_parent: '22', xxOrder_by: 'activ_codename' },
			callback: function(records, operations, success) { }
		})

	    if ( _typeEdit == '1' ) {
	        var _icon = 'icon_New_90'; var _title = 'Nueva Actividad de Cliente';
			var _cboVentdet_key = component.down('#ventdet_key');
			_cboVentdet_key.bindStore(Ext.create('Siace.store.treasury.Ventas_Det'));
			_cboVentdet_key.getStore().load({ 
				params: { xxPers_key: component.down('#pers_key').getValue(), xxType_record: 'combo_personas_importadores_licenciasedit', xxOrder_by: 'vent_documento' },
				callback: function(records, operations, success) { }
			})
        } else if ( fjsIn_array(_typeEdit, ['2','3']) ) {
	        var _form = component.down('form');
	   		_form.load({
	   			method: 'POST', url: 'php/public_personas_importadores_licencias_json_records.php',
	            params: { xxPersimporlic_key: component.getCallKey(), xxType_record: 'form', xxOrder_by: 'persimporlic_key' },
	            waitMsg: 'Loading...',
	            success: function (form, action) {
	                try {
	                    var _model = Ext.create('Siace.model.public.Persona_Importador_Licencia'); var _result = Ext.decode(action.response.responseText);
	                    if ( _result.data[0] ) {
	                        _model.set(_result.data[0]);  _form.loadRecord(_model);
							//component.down('#persimporlic_serie').getStore().add({ docser_serie: _model.data.persimporlic_serie, docser_format: fjsLpad(_model.data.persimporlic_serie, 3, '0'), });
							//component.down('#persimporlic_serie').setValue(_model.data.comprob_serie);
							component.down('#persimporlic_nro').setValue(fjsLpad(_model.data.persimporlic_nro, 5, '0'));
	                    }
	                }
	                catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
	            },
	            failure: function (form, action) { Ext.Msg.alert("Load failed", action.result.errorMessage); }
	        });

        	if ( _typeEdit == '2' ) { 
        		var _icon = 'icon_Modify_90'; var _title = translations.treasury_comprobantesedit_title_modify;
        	} else { 
        		var _icon = 'icon_Query_90'; var _title = 'Consulta Licencia de Actividad'; 
				component.down('#persimporlic_fecha').disable(); component.down('#activ_id').disable(); component.down('#persimporlic_fechaini').disable(); component.down('#persimporlic_fechafin').disable();
				component.down('#ventdet_key').disable(); component.down('#indiv_dni').disable(); component.down('#btnIndiv_search').disable(); component.down('#persimporlic_observ').disable();
				component.down('#btnSave').disable(); component.down('#btnUndo').disable(); component.down('#btnExit').enable();
        	}			
	    } else if ( _typeEdit == '11' ) {
	        var _icon = 'icon_Add_90'; var _title = 'Renovar Licencia';
	        component.down('#activ_id').disable();
	        var _strPI = Ext.create('Siace.store.public.Personas_Importadores');
	        _strPI.load({
				params: { xxPersimpor_key: component.down('#persimpor_key').getValue(), xxType_record: 'data_actividad', xxOrder_by: 'pi.activ_id' },
				callback: function(records, operations, success) { component.down('#activ_id').setValue(records[0].data.activ_id); }
	        })
			var _cboVentdet_key = component.down('#ventdet_key');
			_cboVentdet_key.bindStore(Ext.create('Siace.store.treasury.Ventas_Det'));
			_cboVentdet_key.getStore().load({ 
				params: { xxPers_key: component.down('#pers_key').getValue(), xxType_record: 'combo_personas_importadores_licenciasedit', xxOrder_by: 'vent_documento' },
				callback: function(records, operations, success) { }
			});
	    }
	    component.setIconCls(_icon); component.setTitle(_title);
	},

	ppile_Close: function(panel, options) {
		//if ( this.getPis_Public_IndividuosSearch() !== undefined ) { this.getPis_Public_IndividuosSearch().close();  this.getPis_Public_IndividuosSearch().destroy(); }
	},

	ppile_btnSaveClick: function(button, e, options) {
	    var _win = button.up('window'); var _frm = _win.down('form');
		if ( _win.down('#persimporlic_fecha').getValue() == '' || !_win.down('#persimporlic_fecha').isValid() ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar la Fecha', function() { _win.down('#persimporlic_fecha').focus(); }); return false ; }
	    if ( _win.down('#activ_id').getValue() == '' && _win.down('#activ_id').getValue()*1 <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe seleccionar la Actividad', function() { _win.down('#activ').focus(); }); return false ; }
		if ( _win.down('#persimporlic_fechaini').getValue() == '' || _win.down('#persimporlic_fechaini').getValue() == null ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar el PERIODO INICIAL', function() { _win.down('#persimporlic_fechaini').focus(); }); return false ; }
		if ( !_win.down('#persimporlic_fechaini').isValid() ) {
			Ext.Msg.alert(translations.mensaje, 'Fecha Inicial NO es Válida', function() { _win.down('#persimporlic_fechaini').focus(); }); return false ; }
		if ( _win.down('#persimporlic_fechafin').getValue() == '' || _win.down('#persimporlic_fechafin').getValue() == null ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar el PERIODO FINAL', function() { _win.down('#persimporlic_fechafin').focus(); }); return false ; }
		if ( !_win.down('#persimporlic_fechafin').isValid() ) {
			Ext.Msg.alert(translations.mensaje, 'Fecha Final NO es Válida', function() { _win.down('#persimporlic_fechafin').focus(); }); return false ; }
	    if ( _win.down('#ventdet_key').getValue() == undefined || _win.down('#ventdet_key').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el Registro de Venta', function() { _win.down('#ventdet_key').focus(); }); return false ; }
	    if ( _win.down('#indiv_key').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el Representante Legal', function() { _win.down('#indiv_dni').focus(); }); return false ; }

	    if ( _frm.getForm().isValid() ) {
	    	var _vs = fextpub_sessionVariables();
	        _frm.getForm().submit({
				method: 'POST', url: 'php/public_personas_importadores_licencias_save.php',
				params:{ xx0005: 'YES', xxType_edit: _win.getTypeEdit(),
					     zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
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

	ppile_btnUndoClick: function(button, e, options) {
		button.up('window').close();
	},

	ppile_btnExitClick: function(button, e, options) {
		button.up('window').close();
	},

	ppile_btnIndiv_searchClick: function(button, e, options) {
 		fext_windowSearch(this.getPis_Public_IndividuosSearch(), button.up('window'), 'Siace.view.public.IndividuosSearch', translations.public_individuossearch_title, button.up('window').down('#indiv_key').getValue(), '', '', false);
	},

	ppile_indiv_dniBlur: function(textfield, The, options) {
		this.ppile_indiv_dniSearch('0', textfield.up('form'));
	},

	ppile_indiv_dniFocus: function(textfield, The, options) {
		this.ppile_indiv_dniSearch('1', textfield.up('form'));
	},

	ppile_indiv_dniKeypress: function(textfield, e, options) {
		if( e.getCharCode() == 13 ) { this.ppile_indiv_dniSearch('13', textfield.up('form')); }
	},

	ppile_indiv_dniSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['indiv_key', 'INDIV_DNI', 'indiv_dni', 'indiv_apenom'], 
			            ['php/public_individuos_json_records.php', 'xxIndiv_dni', 'textfield_search', ''], '1', 
			            ['Siace.view.public.IndividuosEdit', translations.public_individuossedit_title_new, ['indiv_dni'], '']);
	},

	/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
	ppiw_BeforeRender: function(component, options) {
		var _form = component.down('form');
	   	_form.load({
	   		method: 'POST', url: 'php/public_personas_json_records.php',
	        params: { xxPers_key: component.getCallKey(),  xxType_record: 'data_window', xxOrder_by: 'p.pers_nombre' },
	        waitMsg: 'Loading...',
	        success: function (form, action) {
	            try {
	                var _model = Ext.create('Siace.model.public.Persona'); var _result = Ext.decode(action.response.responseText);
	                if ( _result.data[0] ) { _model.set(_result.data[0]);  _form.loadRecord(_model); }
                }
                catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
            },
            failure: function (form, action) { Ext.Msg.alert("Load failed", action.result.errorMessage); }
        });

		var _strPIL = Ext.create('Siace.store.public.Personas_Importadores_Licencias');
		var _grdPIL = component.down('#grdPublic_personas_importadores_licencias');
		//var _pagingtoolbar = component.down('#pgtTreasury_comprobantes');
		_grdPIL.bindStore(_strPIL);  //_pagingtoolbar.bindStore(_store);
		_strPIL.sort('persimporlic_fecha', 'DESC');  _strPIL.pageSize = 500;
		_strPIL.on('beforeload', function(store, operations, eOpts) {
			component.down('#btnQuery').disable(); component.down('#btnConstancy').disable(); //component.down('#btnDelete').disable(); component.down('#btnPrinter').disable(); component.down('#btnDetail').disable();
			store.getProxy().setExtraParam('xxPersimpor_key', component.down('#persimpor_key').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    //store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});

		var _strPILI = Ext.create('Siace.store.public.Personas_Importadores_Licencias_Individuos');
		var _grdPILI = component.down('#grdPublic_personas_importadores_licencias_individuos');
		//var _pagingtoolbar = component.down('#pgtTreasury_comprobantes');
		_grdPILI.bindStore(_strPILI);  //_pagingtoolbar.bindStore(_store);
		_strPILI.sort('indiv_apenom', 'ASC');  _strPILI.pageSize = 500;
		_strPILI.on('beforeload', function(store, operations, eOpts) {
			//component.down('#btnConstancy').disable();
			//store.getProxy().setExtraParam('xxPersimpor_key', component.down('#persimpor_key').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    //store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});

		var _cboPersimpor_key = component.down('#persimpor_key'); var _me = this;
		_cboPersimpor_key.bindStore(Ext.create('Siace.store.public.Personas_Importadores'));
		_cboPersimpor_key.getStore().load({ 
			params: { xxPers_key: component.getCallKey(), xxType_record: 'combo_codename', xxOrder_by: 'activ_codename' },
			callback: function(records, operations, success) {
				if ( records.length > 0 ) { _cboPersimpor_key.setValue(records[0].data.persimpor_key); component.down('#btnRenovate').enable(); }
    		}
		});
	},

	ppiw_GridFilter: function(poWindow){
		poWindow.down('#grdPublic_personas_importadores_licencias').getStore().load();
		poWindow.down('#grdPublic_personas_importadores_licencias_individuos').getStore().removeAll();
		poWindow.down('#btnNewCarnet').disable(); poWindow.down('#btnPrinter').disable();
	},

	ppiw_ViewEdit: function(pcTypeEdit, poWindow){
		if ( fjsIn_array(pcTypeEdit, ['1']) ) {
		} else if ( fjsIn_array(pcTypeEdit, ['3']) ) {
	    	var _record = this.getPpiw_grdPublic_Personas_Importadores_Licencias().getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }
	    } else if ( fjsIn_array(pcTypeEdit, ['11']) ) {
	    	if ( poWindow.down('#persimpor_key').getValue() == '' ) { return false; }
	    }

		Ext.get(poWindow.getEl()).mask(translations.mensaje_esperar, 'loading');
		var _win = Ext.create('Siace.view.public.Personas_Importadores_LicenciasEdit');
	    if ( fjsIn_array(pcTypeEdit, ['1']) ) { }
	    else if ( fjsIn_array(pcTypeEdit, ['3']) ) { _win.setCallKey(_record.data.persimporlic_key); }
	    else if ( fjsIn_array(pcTypeEdit, ['11']) ) { _win.down('#persimpor_key').setValue(poWindow.down('#persimpor_key').getValue()); }
	    _win.setTypeEdit(pcTypeEdit); _win.setCallStore(this.getPpiw_grdPublic_Personas_Importadores_Licencias().getStore());
	    _win.down('#pers_key').setValue(poWindow.getCallKey());  _win.down('#pers_nombre').setValue(poWindow.down('#pers_nombre').getValue()); 
	    _win.show();
	    Ext.get(poWindow.getEl()).unmask();
	},

	ppiw_btnNewClick: function(button, e, options) {
		this.ppiw_ViewEdit('1', button.up('window'));
	},

	ppiw_btnRenovateClick: function(button, e, options) {
		this.ppiw_ViewEdit('11', button.up('window'));
	},

	ppiw_btnQueryClick: function(button, e, options) {
		this.ppiw_ViewEdit('3', button.up('window') );
	},

	ppiw_btnConstancyClick: function(button, e, options) {
		var _record = this.getPpiw_grdPublic_Personas_Importadores_Licencias().getSelectionModel().getSelection()[0];
		if ( !_record ) { return false; }

        fext_pdf('', 'Constancia', 'php/pdf/pdf_public_personas_importadores_licencias_constancy.php?xxPersimporlic_key='+_record.data.persimporlic_key);
	},

	ppiw_btnPrinterClick: function(button, e, options) {
		var _record = this.getPpiw_grdPublic_Personas_Importadores_Licencias_Individuos().getSelectionModel().getSelection()[0];
		if ( !_record ) { return false; }

		console.log(_record);
        fext_pdf('', 'Constancia', 'php/pdf/pdf_public_personas_importadores_licencias_individuos_printer.php?xxPersimporlicindiv_key='+_record.data.persimporlicindiv_key);
	},

	ppiw_btnExitClick: function(button, e, options) {
		button.up('window').close();
	},

	ppiw_grdPublic_personas_importadores_licenciasSelectionchange: function(model, record, options) {
		if ( record.length == 1 ) {
			var _panel = this.getPpiw_grdPublic_Personas_Importadores_Licencias().up('panel');
			_panel.down('#btnQuery').enable(); _panel.down('#btnConstancy').enable();
			_panel.down('#grdPublic_personas_importadores_licencias_individuos').getStore().load({ params:{ xxPersimporlic_key: record[0].data.persimporlic_key } });
			_panel.down('#btnNewCarnet').enable(); _panel.down('#btnPrinter').disable();
		}
	},

	ppiw_grdPublic_personas_importadores_licencias_individuosSelectionchange: function(model, record, options) {
		if ( record.length == 1 ) {
			var _panel = this.getPpiw_grdPublic_Personas_Importadores_Licencias().up('panel');
			_panel.down('#btnNewCarnet').enable(); _panel.down('#btnPrinter').enable();
		}
	},

	ppiw_persimpor_keyChange: function(combo, newValue, oldValue, options) {
		this.ppiw_GridFilter(combo.up('window'));
	},

	/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
	puamob_BeforeRender: function(component, options) {
		var _store = Ext.create('Siace.store.public.personas_importadores_Menus_Opciones');
		var _grid = component.down('#grdSubmenus');
		_grid.bindStore(_store);
		_store.on('beforeload', function(store, operations, eOpts) {
		    store.getProxy().setExtraParam('xxUsuracce_key', component.getCallKey());
		    store.getProxy().setExtraParam('xxType_record', 'SUBMENUS');
		});
		_store.pageSize = 500;  _store.load();

		var _storeOpciones = Ext.create('Siace.store.public.personas_importadores_Menus_Opciones');
		var _grdOpciones = component.down('#grdOpciones');
		_grdOpciones.bindStore(_storeOpciones);
		//_storeOpciones.on('beforeload', function(store, operations, eOpts) {
		  //  store.getProxy().setExtraParam('xxType_record', 'OPCIONES');
		//});
		_storeOpciones.pageSize = 500;
	},

	puamob_acOpcionesCLick: function(grid, cell, row, col, e, record, t) {
		if ( record.data.submenu_estado == '1' ) {
			var _win = grid.up('window');
			Ext.get(_win.getEl()).mask('Validando información... por favor espere un momento...', 'loading');			
			var _vs = fextpub_sessionVariables();
			Ext.Ajax.request({
				url: 'php/public_personas_importadores_menus_opciones_save.php',
				params: { xx0005: 'YES', xxUsuraccemenuopc_id: record.data.usuraccemenuopc_id, xxUsuracce_key_: _win.getCallKey(), xxMenuopc_id: record.data.menuopc_id, xxUsuraccemenuopc_estado: (record.data.usuraccemenuopc_estado == '1' ? '0' : '1'),
				          zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
				success: function(conn, response, options, eOpts) {
					Ext.get(_win.getEl()).unmask();
					var _result = Siace.util.Util.decodeJSON(conn.responseText);

					if ( _result.success ) {
						record.set('usuraccemenuopc_id', _result.key.substr(1)*1);  record.set('usuraccemenuopc_estado', _result.key.substr(0,1)*1); record.commit();
					} else {
						Siace.util.Util.showErrorMsg(_result.msg);
					}
				},
				failure: function(conn, response, options, eOpts) {
					Ext.get(_win.getEl()).unmask();
					Siace.util.Util.showErrorMsg(conn.responseText);
				}
			});
		}
	},

	puamob_acSubmenusCLick: function(grid, cell, row, col, e, record, t) {
		var _win = grid.up('window');
		Ext.get(_win.getEl()).mask('Validando información... por favor espere un momento...', 'loading');			
		var _vs = fextpub_sessionVariables();
		Ext.Ajax.request({
			url: 'php/public_personas_importadores_menus_opciones_save.php',
			params: { xx0005: 'YES', xxUsuraccemenuopc_id: record.data.usuraccemenuopc_id, xxUsuracce_key_: _win.getCallKey(), xxMenuopc_id: record.data.menuopc_id, xxUsuraccemenuopc_estado: (record.data.usuraccemenuopc_estado == '1' ? '0' : '1'),
			          zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
			success: function(conn, response, options, eOpts) {
				Ext.get(_win.getEl()).unmask();
				var _result = Siace.util.Util.decodeJSON(conn.responseText);

				if ( _result.success ) {
					record.set('usuraccemenuopc_id', _result.key.substr(1)*1);  record.set('usuraccemenuopc_estado', _result.key.substr(0,1)*1); record.commit();
					_win.down('#grdOpciones').getStore().load({
						params: { xxUsuracce_key: _win.getCallKey(), xxMenu_id: record.data.menu_id,  xxType_record: 'OPCIONES' },
					});
				} else {
					Siace.util.Util.showErrorMsg(_result.msg);
				}
			},
			failure: function(conn, response, options, eOpts) {
				Ext.get(_win.getEl()).unmask();
				Siace.util.Util.showErrorMsg(conn.responseText);
			}
		});
	},

	puamob_grdSubmenusSelectionchange: function(model, record, options) {			
		if ( record.length == 1 ) {
			var _win = this.getPuamob_grdOpciones().up('window');
			this.getPuamob_grdOpciones().getStore().load({
				params: { xxUsuracce_key: _win.getCallKey(), xxMenu_id: record[0].data.menu_id,  xxType_record: 'OPCIONES' },
			});
		}
	},
});