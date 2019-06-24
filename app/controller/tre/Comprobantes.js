Ext.define('Siace.controller.treasury.Comprobantes', {
	extend: 'Ext.app.Controller',
	stores: ['array.Years',],	
	views: ['treasury.ComprobantesBrowse', 'treasury.ComprobantesEdit', 'treasury.ComprobantesEditPago', 'treasury.Comprobantes_DetAddPago', 'treasury.ComprobantesReports',],
    refs: [
        { ref: 'tce_grdTreasury_Comprobantes_Det', selector: 'treasury_comprobantesedit #grdTreasury_comprobantes_det' },
    ],

	init: function(application) {
		this.control({
			'treasury_comprobantesbrowse': { beforerender: this.tcb_BeforeRender, },
			'treasury_comprobantesbrowse #opc_id': { change: this.tcb_opc_idChange, },
			'treasury_comprobantesbrowse #btnNew': { click: this.tcb_btnNewClick, },
			'treasury_comprobantesbrowse #btnQuery': { click: this.tcb_btnQueryClick, },
			'treasury_comprobantesbrowse #btnDetail': { click: this.tcb_btnDetailClick, },
			'treasury_comprobantesbrowse #btnDelete': { click: this.tcb_btnDeleteClick, },
			'treasury_comprobantesbrowse #btnPrinter': { click: this.tcb_btnPrinterClick, },
			'treasury_comprobantesbrowse #comprob_nro': { change: this.tcb_comprob_nroChange },
            'treasury_comprobantesbrowse #comprob_serie': { change: this.tcb_comprob_serieChange, },
            'treasury_comprobantesbrowse #doc_id': { change: this.tcb_doc_idChange, },
			'treasury_comprobantesbrowse #fechafin': { change: this.tcb_fechainiChange },
			'treasury_comprobantesbrowse #fechaini': { change: this.tcb_fechafinChange, },
			'treasury_comprobantesbrowse #grdTreasury_comprobantes': { selectionchange: this.tcb_grdTreasury_comprobantesSelectionchange, },
			'treasury_comprobantesbrowse #tipcomprob_id': { change: this.tcb_tipcomprob_idChange, },
			'treasury_comprobantesbrowse #year_id': { change: this.tcb_year_idChange, },

            'treasury_comprobantesedit': { beforeshow: this.tce_BeforeShow, close: this.tce_Close, },
            'treasury_comprobantesedit #btnSave': { click: this.tce_btnSaveClick, },
            'treasury_comprobantesedit #btnUndo': { click: this.tce_btnUndoClick, },
            'treasury_comprobantesedit #btnExit': { click: this.tce_btnExitClick, },
            'treasury_comprobantesedit #btnAdd': { click: this.tce_btnAddClick, },
            'treasury_comprobantesedit #btnSuppress': { click: this.tce_btnSuppressClick, },
			'treasury_comprobantesedit #comprob_fecha': { change: this.tce_comprob_fechaChange, },
			'treasury_comprobantesedit #comprob_nro': { blur: this.tce_comprob_nroBlur },
			'treasury_comprobantesedit #cuebanc_key': { change: this.tce_cuebanc_keyChange, },
			'treasury_comprobantesedit #fuefin_id': { change: this.tce_fuefin_idChange, },
			'treasury_comprobantesedit #grdTreasury_comprobantes_det': { selectionchange: this.tce_grdTreasury_comprobantes_detSelectionchange, },

            'treasury_comprobanteseditpago': { beforeshow: this.tcep_BeforeShow, close: this.tcep_Close, },
            'treasury_comprobanteseditpago #btnSave': { click: this.tcep_btnSaveClick, },
            'treasury_comprobanteseditpago #btnUndo': { click: this.tcep_btnUndoClick, },
            'treasury_comprobanteseditpago #btnExit': { click: this.tcep_btnExitClick, },
            'treasury_comprobanteseditpago #btnAdd': { click: this.tcep_btnAddClick, },
            'treasury_comprobanteseditpago #btnSuppress': { click: this.tcep_btnSuppressClick, },
			'treasury_comprobanteseditpago #comprob_nro': { blur: this.tcep_comprob_nroBlur },
			'treasury_comprobanteseditpago #cuebanc_key': { change: this.tcep_cuebanc_keyChange, },
			'treasury_comprobanteseditpago #fuefin_id': { change: this.tcep_fuefin_idChange, },
			'treasury_comprobanteseditpago #grdTreasury_comprobantes_det': { selectionchange: this.tcep_grdTreasury_comprobantes_detSelectionchange, },

			'treasury_comprobantesreports': { beforerender: this.tcr_BeforeRender, close: this.tcr_Close, },
			'treasury_comprobantesreports #btnPdf': { click: this.tcr_btnPdfClick, },
			'treasury_comprobantesreports #btnExcel': { click: this.tcr_btnExcelClick, },

			'treasury_comprobantes_detaddpago': { beforerender: this.tcdap_BeforeRender, },
			'treasury_comprobantes_detaddpago #btnAccept': { click: this.tcdap_btnAcceptClick, },
			'treasury_comprobantes_detaddpago #btnCancel': { click: this.tcdap_btnCancelClick, },
			'treasury_comprobantes_detaddpago #cuebanc_key': { change: this.tcdap_cuebanc_keyChange, },
			'treasury_comprobantes_detaddpago #year_id': { change: this.tcdap_year_idChange, },

			'treasury_comprobantes_detsearchxadd': { beforerender: this.tcdsxa_BeforeRender, },
			'treasury_comprobantes_detsearchxadd #btnAccept': { click: this.tcdsxa_btnAcceptClick, },
			'treasury_comprobantes_detsearchxadd #btnCancel': { click: this.tcdsxa_btnCancelClick, },
			'treasury_comprobantes_detsearchxadd #grdtreasury_comprobantes': {
				//itemdblclick: this.tcdsxa_grdtreasury_comprobantesItemdblclick,
				//selectionchange: this.tcdsxa_grdtreasury_comprobantesSelectionchange,
			},
		});
	},

	tcb_BeforeRender: function(component, options) {
		var _menu_id = component.getMenuId();
		fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': component.down('#opc_id'), 'menu_id': _menu_id });
		fextpub_yearsValue(component.down('#year_id'));
		fextpub_documentos_seriesParameters({'panel': component, 'itemId': 'comprob_serie'});
		fextpub_documentosFilter({'objeto':component.down('#doc_id'), 'doc_id': (_menu_id == '4109' ? '401' : '402'), 'add_blank': 'NO'});
		fextpub_tablas_generalesFilter({'objeto':component.down('#tipcomprob_id'), 'tabgen_parent': (_menu_id == '4109' ? '4020' : '4030')});
		if ( _menu_id == '4109' ) {
			component.down('#btnDetail').setVisible(true);
		}

		var _store = Ext.create('Siace.store.treasury.Comprobantes');
		var _grid = component.down('#grdTreasury_comprobantes'); var _pag = component.down('#pagTreasury_comprobantes');
		_grid.bindStore(_store);  _pag.bindStore(_store);
		_store.sort('comprob_documento', 'DESC'); _store.pageSize = 500;
		_store.on('beforeload', function(store, operations, eOpts) {
			component.down('#btnQuery').disable(); component.down('#btnDelete').disable(); component.down('#btnPrinter').disable(); component.down('#btnDetail').disable();

			store.getProxy().setExtraParam('xxYear_id', component.down('#year_id').getValue());
			store.getProxy().setExtraParam('xxDoc_id', component.down('#doc_id').getValue());
			store.getProxy().setExtraParam('xxComprob_serie', component.down('#comprob_serie').getValue());
			store.getProxy().setExtraParam('xxComprob_nro', component.down('#comprob_nro').getValue());
		    store.getProxy().setExtraParam('xxFechaini', component.down('#fechaini').getSubmitData());
		    store.getProxy().setExtraParam('xxFechafin', component.down('#fechafin').getSubmitData());
			store.getProxy().setExtraParam('xxTipcomprob_id', component.down('#tipcomprob_id').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});
	},

	tcb_Clean: function(poComponent) {
		var _pag = poComponent.down('#pagTreasury_comprobantes'); var _store = _pag.getStore();
		fext_gridClean(_store, _pag);

		poComponent.down('#btnQuery').disable(); poComponent.down('#btnDelete').disable(); poComponent.down('#btnDetail').disable(); poComponent.down('#btnPrinter').disable();
	},

	tcb_ViewEdit: function(poComponent, pcTypeEdit) {
		if ( pcTypeEdit == '1' ) {
			if ( poComponent.down('#doc_id').getValue() == '' || poComponent.down('#doc_id').getValue()*1 <= 0 ) {
			    Ext.MessageBox.alert(translations.mensaje, 'Debe indicar el Documento', function() { }); return false ; }
			if ( poComponent.down('#comprob_serie').getValue() == '' || poComponent.down('#comprob_serie').getValue()*1 <= 0 ) {
				Ext.MessageBox.alert(translations.mensaje, 'Debe indicar la Serie del Documento', function() { poComponent.down('#comprob_serie').focus(); }); return false ; }
		} else if ( fjsIn_array(pcTypeEdit, ['2','3']) ) {
	    	var _record = poComponent.down('#grdTreasury_comprobantes').getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }
	    }

		Ext.get(poComponent.getEl()).mask(translations.mensaje_esperar, 'loading');
	    var _win = (poComponent.getMenuId() == '4109' ? Ext.create('Siace.view.treasury.ComprobantesEdit') : Ext.create('Siace.view.treasury.ComprobantesEditPago'));
	    _win.setTypeEdit(pcTypeEdit); _win.setCallStore(poComponent.down('#grdTreasury_comprobantes').getStore());
	    if ( pcTypeEdit == '1' ) { _win.setComprob_serie( poComponent.down('#comprob_serie').getValue() ); }
	    else if (fjsIn_array(pcTypeEdit, ['2','3'])) { _win.setCallKey(_record.data.comprob_key); }
	    _win.show();
	    Ext.get(poComponent.getEl()).unmask();
	},

	tcb_opc_idChange: function(combo, newValue, oldValue, options) {
		combo.up('panel').down('#btnNew').setDisabled(fextpub_uamoButtons(combo, 1));
	},

	tcb_btnNewClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 1) ) { return false; } this.tcb_ViewEdit(button.up('panel'), '1');
	},

	tcb_btnQueryClick: function(button, e, options) {
        if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 3) ) { return false; } this.tcb_ViewEdit(button.up('panel'), '3');
	},

	tcb_btnDetailClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 15) ) { return false; }
		var _record = button.up('panel').down('#grdTreasury_comprobantes').getSelectionModel().getSelection()[0];
		if ( !_record ) { return false; }

        fext_pdf('', translations.pdf_treasury_comprobantes_printer_title, 'php/pdf/pdf_treasury_comprobantes_det_printer.php?xxComprob_key='+_record.data.comprob_key);
    },

	tcb_btnDeleteClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 7) ) { return false; }
		if ( options == undefined ) {
	        var _record = button.up('panel').down('#grdTreasury_comprobantes').getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }

			Ext.Msg.confirm(translations.confirmar, translations.mensaje_pregunta_eliminar, function(btn){
				if ( btn == 'yes' ) {
					var _win = Ext.create('Siace.view.public.UsuariosPsw2');
					_win.setCallButton(button);
					_win.setCallKey(_record.data.comprob_key);
					_win.setSubTitle(_record.data.comprob_documento);
					_win.setFormType('07'); _win.show();
				}
			});
		} else {
			var _win = options.win; var _panel = button.up('panel');
			var _store = _panel.down('#grdTreasury_comprobantes').getStore();
			var _menu_id = button.up('panel').getMenuId();
			Ext.get(_panel.getEl()).mask(translations.mensaje_validando_espere, translations.cargando);
			var _vs = fextpub_sessionVariables();
			Ext.Ajax.request({
				url: 'php/treasury_comprobantes_delete.php',
				params: { xx0007: 'YES', xxType_edit: '7', xxComprob_key: options.key, xxUsur_psw2: options.usur_psw2, xxComprob_observ: options.observ,
					      zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'], xxMenu_id: _menu_id },
				success: function(conn, response, options, eOpts) {
					var _result = Siace.util.Util.decodeJSON(conn.responseText);
					if ( _result.success ) {
						_win.close();
			            _store.load({ callback: function(opt, success, respon) { Ext.get(_panel.getEl()).unmask(); } });
					} else { Ext.get(_panel.getEl()).unmask(); Siace.util.Util.showErrorMsg(_result.msg); }
				},
				failure: function(conn, response, options, eOpts) { Ext.get(_panel.getEl()).unmask(); Siace.util.Util.showErrorMsg(conn.responseText); }
			});
		}
	},

	tcb_btnPrinterClick: function(button, e, options) {
		var _panel = button.up('panel');
		if ( fextpub_uamoButtons(_panel.down('#opc_id'), 8) ) { return false; } 
		var _record = _panel.down('#grdTreasury_comprobantes').getSelectionModel().getSelection()[0];
		if ( !_record ) { return false; }

        fext_pdf('', 'Comprobante', 'php/pdf/pdf_treasury_comprobantes_printer.php?xxComprob_key='+_record.data.comprob_key);
    },

	tcb_comprob_serieChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.tcb_Clean(combo.up('panel')); }
	},

	tcb_comprob_nroChange: function(textfield, newValue, oldValue, options) {
		this.tcb_Clean(textfield.up('panel'));
	},

	tcb_doc_idChange: function(combo, newValue, oldValue, options) {
		fextpub_documentos_seriesLoad({'panel': combo.up('panel'), 'itemId': 'comprob_serie'});
		if ( oldValue !== undefined ) { this.tcb_Clean(combo.up('panel')); }
	},

	tcb_fechainiChange: function(datefield, newValue, oldValue, options) {
		this.tcb_Clean(datefield.up('panel'));
	},

	tcb_fechafinChange: function(datefield, newValue, oldValue, options) {
		this.tcb_Clean(datefield.up('panel'));
	},

	tcb_grdTreasury_comprobantesSelectionchange: function(model, record, options) {	
		if ( record.length == 1 ) {
			var _panel = model.view.panel.up('panel'); var _cboOpc_id = _panel.down('#opc_id'); _flga = record[0].data.comprob_flga;
			_panel.down('#btnQuery').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 3));
			_panel.down('#btnDetail').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 15));
			_panel.down('#btnDelete').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 7));
			_panel.down('#btnPrinter').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 8));
		}
	},

	tcb_tipcomprob_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.tcb_Clean(combo.up('panel')); }
	},

	tcb_year_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { fextpub_documentos_seriesLoad({'panel': combo.up('panel'), 'itemId': 'comprob_serie'}); this.tcb_Clean(combo.up('panel')); }
	},

	tce_BeforeShow: function(component, options) {
		var _typeEdit = component.getTypeEdit();
		component.down('#comprob_serie').bindStore(Ext.create('Siace.store.public.Documentos_Series'));
		fexttre_cuentas_bancariasFilter({'objeto': component.down('#cuebanc_key'), 'type_record': 'combo_comprobantes', xxOrder_by: 'cuebanc_nro', 'disabled': (_typeEdit == '3' ? true : false)});
		component.down('#fuefin_id').bindStore(Ext.create('Siace.store.budget.Iyueff'));
		component.down('#fuefin_id').getStore().load({ params: { xxType_record: 'combo_fuefin_codename', xxOrder_by: 'fuefin_code' } })

		var _storeCD = Ext.create('Siace.store.treasury.Comprobantes_Det');
		component.down('#grdTreasury_comprobantes_det').bindStore(_storeCD);
		_storeCD.on('beforeload', function(store, operations, eOpts) {
		    store.getProxy().setExtraParam('xxComprob_key', component.down('#comprob_key').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'form');
		});
		component.down('#grdAccounting').bindStore(Ext.create('Siace.store.treasury.Comprobantes_Det'));
		var _storeCED = Ext.create('Siace.store.treasury.Comprobantes_Especificas_Det');
		component.down('#grdTreasury_comprobantes_especificas_det').bindStore(_storeCED);
		_storeCED.on('beforeload', function(store, operations, eOpts) {
		    store.getProxy().setExtraParam('xxComprob_key', component.down('#comprob_key').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'grid_comprobantes_edit');
		});

        if ( _typeEdit == '1' ) {
        	var _icon = 'icon_New_90'; var _title = 'Nuevo Comprobante de Ingreso';
        	var _cboComprob_serie = component.down('#comprob_serie');
			_cboComprob_serie.getStore().add({ docser_serie: component.getComprob_serie(), docser_format: fjsLpad(component.getComprob_serie(), 3, '0'), });
			_cboComprob_serie.setValue(component.getComprob_serie());
			component.down('#pctbl_id').bindStore(Ext.create('Siace.store.accounting.Plan_Contable'));
			//component.down('#pctbl_idx').bindStore(Ext.create('Siace.store.accounting.Plan_Contable'));
			component.down('#pctbl_id').getStore().load({ params: { xxType_record: 'combo', xxType_query: 'COMPROBANTES_DEBE', xxOrder_by: 'pctbl_cuenta' } })
			//component.down('#pctbl_idx').getStore().load({ params: { xxPctbl_cuenta: '467102', xxType_record: 'combo', xxOrder_by: 'pctbl_cuenta' } })
        } else if ( fjsIn_array(_typeEdit, ['2','3']) ) {
	        var _form = component.down('form');
	   		_form.load({
	   			method: 'POST', url: 'php/treasury_comprobantes_json_records.php',
	            params: { xxComprob_key: component.getCallKey(), xxType_record: 'form', xxOrder_by: 'c.comprob_id' },
	            waitMsg: 'Loading...',
	            success: function (form, action) {
	                try {
	                    var _model = Ext.create('Siace.model.treasury.Comprobante'); var _result = Ext.decode(action.response.responseText);
	                    if ( _result.data[0] ) {
	                        _model.set(_result.data[0]);  _form.loadRecord(_model);
							component.down('#comprob_serie').getStore().add({ docser_serie: _model.data.comprob_serie, docser_format: fjsLpad(_model.data.comprob_serie, 3, '0'), });
							component.down('#comprob_serie').setValue(_model.data.comprob_serie);
							component.down('#comprob_nro').setValue(fjsLpad(_model.data.comprob_nro, 6, '0'));
							_storeCD.load(); _storeCED.load();
	                    }
	                }
	                catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
	            },
	            failure: function (form, action) { Ext.Msg.alert("Load failed", action.result.errorMessage); }
	        });

        	if ( _typeEdit == '2' ) { 
        		var _icon = 'icon_Modify_90'; var _title = translations.treasury_comprobantesedit_title_modify;
        	} else { 
        		var _icon = 'icon_Query_90'; var _title = translations.treasury_comprobantesedit_title_query; 
				component.down('#comprob_nro').disable(); component.down('#comprob_fecha').disable(); component.down('#cuebanc_key').disable(); component.down('#fuefin_id').disable();
				component.down('#comprob_observ').disable();
				component.down('#btnSave').setDisabled(true); component.down('#btnUndo').setDisabled(true); component.down('#btnExit').setDisabled(false);

        	}
        }
        component.setIconCls(_icon); component.setTitle(_title);
	},

	tce_Close: function(panel, options) {
		//if ( this.getPps_Public_PersonasSearch() !== undefined ) { this.getPps_Public_PersonasSearch().close();  this.getPps_Public_PersonasSearch().destroy(); }
	},

	tce_btnSaveClick: function(button, e, options) {
	    var _win = button.up('window'); var _frm = _win.down('form');
	    if ( _win.down('#fuefin_id').getValue() == '' || _win.down('#fuefin_id').getValue() == null ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar la FUENTE DE FINANCIAMIENTO del comprobo', function() { _frm.down('#fuefin_id').focus(); }); return false ; }

		var _detalle = ''; _comprob_monto = 0;
		var _recCD = _win.down('#grdTreasury_comprobantes_det').getStore().getRange();
		for ( var _i = 0;  _i < _recCD.length; _i++ ) {
			_detalle += (_i == 0 ? '' : ',') +'{'+ _recCD[_i].get('tablex') +','+ _recCD[_i].get('tablex_key') +',0,'+ _recCD[_i].get('tabley') +','+ _recCD[_i].get('tabley_id') +','+ _recCD[_i].get('tippag_id') +','+ _recCD[_i].get('mone_id') +','+ _recCD[_i].get('tablex_monto_pago_real') +','+ _recCD[_i].get('comprobdet_monto') +',0.00,'+ _recCD[_i].get('pctbl_id') +','+ _recCD[_i].get('espedet_id') +'}';
			_comprob_monto += fjsRound(_recCD[_i].get('comprobdet_monto'), 2)*1;
		}
		if ( _detalle == '' ) { Ext.Msg.alert(translations.mensaje, 'Documento no registra detalle', function() { _frm.down('#btnAdd').focus(); }); return false ; }
		if ( _comprob_monto*1 <= 0 ) { Ext.Msg.alert(translations.mensaje, 'Importe de comprobante no puede ser cero (0)', function() { }); return false ; }

	    if ( _frm.getForm().isValid() ) {
			Ext.Msg.confirm(translations.confirmar, translations.mensaje_pregunta_guardar, function(btn){
			if ( btn == 'yes' ) {
			    var _vs = fextpub_sessionVariables();
			    _frm.getForm().submit({
					method: 'POST', url: 'php/treasury_comprobantes_save.php',
					params:{ xx0005: 'YES',   xxType_edit: _win.getTypeEdit(),
						     xxDoc_id: _win.down('#doc_id').getValue(), xxComprob_serie: _win.down('#comprob_serie').getValue(), xxComprob_nro: _win.down('#comprob_nro').getValue()*1,
						     xxFuefin_id: _win.down('#fuefin_id').getValue(), xxComprob_monto: _comprob_monto, xxDetalle: _detalle,
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

	tce_btnUndoClick: function(button, e, options) {
		button.up('window').close();
	},

	tce_btnExitClick: function(button, e, options) {
		button.up('window').close();
	},

	tce_btnAddClick: function(button, e, options) {
		var _win = button.up('window');
		if ( _win.down('#comprob_fecha').getValue() == '' || !_win.down('#comprob_fecha').isValid() ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar la FECHA del documento', function() { _win.down('#comprob_fecha').focus(); }); return false ; }

		Ext.get(_win.getEl()).mask('Por favor espere un momento...', 'loading');
       	var _winCSA = Ext.create('Siace.view.treasury.Comprobantes_DetSearchxAdd');
       	_winCSA.setTitle(translations.treasury_comprobantes_detsearchxadd_title);
       	_winCSA.setFecha(fjsDateSQL(_win.down('#comprob_fecha').getRawValue())); _winCSA.setCuebanc_key(_win.down('#cuebanc_key').getValue());  _winCSA.setFuefin_id(_win.down('#fuefin_id').getValue());
       	_winCSA.setActionDestroy(true); _winCSA.setTypeReturn('ADD_COMPROBANTE'); _winCSA.show(); 
    	Ext.get(_win.getEl()).unmask();
	},

	tce_btnSuppressClick: function(button, e, options) {
		var _record = this.getTce_grdTreasury_comprobantes_Det().getSelectionModel().getSelection()[0];
        if ( _record ) {
        	button.disable();
        	this.gettce_grdTreasury_comprobantes_Det().getStore().remove(_record);
        	var _win = button.up('window');
        	_win.down('#recib_monto_pago').setValue( _win.down('#recib_monto_pago').getValue()*1 - _record.data.recibdet_monto_pago_real*1 );
        	_win.down('#recib_monto_saldo').setValue( _win.down('#recib_monto_saldo').getValue()*1 + _record.data.recibdet_monto_pago_real*1 );
		}
	},

	tce_comprob_fechaChange: function(textfiled, newValue, oldValue, options) {
		var _win = textfiled.up('window');
		_win.down('#grdTreasury_comprobantes_det').getStore().removeAll();
		_win.down('#grdAccounting').getStore().removeAll();
		_win.down('#grdTreasury_comprobantes_especificas_det').getStore().removeAll();		
	},

	tce_comprob_nroBlur: function(textfield, the, options) {
		textfield.setValue(fjsLpad(textfield.getValue(),6,'0'));
	},

	tce_cuebanc_keyChange: function(combo, newValue, oldValue, options) {
		var _win = combo.up('window');
		if ( _win.getTypeEdit() == '1' ) {
			if ( newValue == '' ) { _win.down('#fuefin_id').enable(); } 
			else {
				_win.down('#fuefin_id').disable();
				var _record = combo.getStore().findRecord('cuebanc_key', newValue);
				combo.up('window').down('#fuefin_id').setValue(_record.data.fuefin_id);
			}
			_win.down('#grdTreasury_comprobantes_det').getStore().removeAll();
			_win.down('#grdAccounting').getStore().removeAll();
			_win.down('#grdTreasury_comprobantes_especificas_det').getStore().removeAll();
		}
	},

	tce_fuefin_idChange: function(combo, newValue, oldValue, options) {
		var _win = combo.up('window');
		_win.down('#grdTreasury_comprobantes_det').getStore().removeAll();
		_win.down('#grdAccounting').getStore().removeAll();
		_win.down('#grdTreasury_comprobantes_especificas_det').getStore().removeAll();		
	},

	tce_grdTreasury_comprobantes_detAdd: function(records) {
		var _win = this.getTce_grdTreasury_Comprobantes_Det().up('window');
		var _storeCD = _win.down('#grdTreasury_comprobantes_det').getStore();
		var _storePC = _win.down('#grdAccounting').getStore();
		var _storeED = _win.down('#grdTreasury_comprobantes_especificas_det').getStore();
		_storeCD.removeAll(); _storePC.removeAll(); _storeED.removeAll();

		if ( _win.down('#cuebanc_key').getValue() !== '' ) {
			var _recPC = _win.down('#cuebanc_key').getStore().findRecord('cuebanc_key', _win.down('#cuebanc_key').getValue());
		}

		var _comprobdet_monto = 0; var _found = ''; var _debe = ''; var pctbl_id = '';
		for ( var _i = 0;  _i < records.length; _i++ ) {
			_comprobdet_monto = fjsRound(records[_i].data.tipcamb_monto*1 <= 0 ? records[_i].data.tablex_monto_pago : (records[_i].data.tablex_monto_pago_real * records[_i].data.tipcamb_monto), 2);
			_storeCD.add({ tablex: records[_i].data.tablex, tablex_key: records[_i].data.tablex_key, tabley: records[_i].data.tabley, tabley_id: records[_i].data.tabley_id, tippag_id: records[_i].data.tippag_id, mone_id: records[_i].data.mone_id, pctbl_id: records[_i].data.pctbl_id, espedet_id: records[_i].data.espedet_id, pctbl_nombre: records[_i].data.pctbl_nombre, espedet_codigo: records[_i].data.espedet_codigo, espedet_nombre: records[_i].data.espedet_nombre, 
				           tablex_documento: records[_i].data.tablex_documento, tablex_fecha: records[_i].data.tablex_fecha, pctbl_cuenta: records[_i].data.pctbl_cuenta, tippag_abrev: records[_i].data.tippag_abrev, mone_abrev: records[_i].data.mone_abrev, tablex_monto: records[_i].data.tablex_monto, tablex_monto_pago: records[_i].data.tablex_monto_pago, tablex_monto_pago_real: records[_i].data.tablex_monto_pago_real, tipcamb_monto: records[_i].data.tipcamb_monto, comprobdet_monto: _comprobdet_monto });

			if ( _win.down('#cuebanc_key').getValue() == '' ) {
				if ( (records[_i].data.tippag_id == '1' || records[_i].data.tippag_id == null) && records[_i].data.mone_id == '1' ) { _pctbl_cuenta = '101101'; }
				else if ( (records[_i].data.tippag_id == '1' || records[_i].data.tippag_id == null) && records[_i].data.mone_id == '2' ) { _pctbl_cuenta = '101102'; }
				else if ( (records[_i].data.tippag_id == '4' || records[_i].data.tablex == '111') && records[_i].data.mone_id == '1' ) { _pctbl_cuenta = '101201'; }
				else if ( (records[_i].data.tippag_id == '4' || records[_i].data.tablex == '111') && records[_i].data.mone_id == '2' ) { _pctbl_cuenta = '101202'; }
				else { pctbl_cuenta = '000000'; }
				var _recPC = _win.down('#pctbl_id').getStore().findRecord('pctbl_cuenta', _pctbl_cuenta);
			} else if ( records[_i].data.doc_id == '515' && fjsIn_array(records[_i].data.conp_id, ['123','124']) ) {
				var _recPC = _win.down('#pctbl_id').getStore().findRecord('pctbl_cuenta', '467102');
			} else if ( records[_i].data.doc_id == '515' && fjsIn_array(records[_i].data.conp_id, ['127']) ) {
				var _recPC = _win.down('#pctbl_id').getStore().findRecord('pctbl_cuenta', '122102');
			}

			_debe = '';
		    _found = _storePC.findBy(function(record, id) {
		        if ( record.get('debe_id') == _recPC.data.pctbl_id ) {
		        	if ( record.get('debe_cuenta') !== '' ) {
		        		record.set('debe_monto', fjsRound(record.get('debe_monto')*1 + _comprobdet_monto*1,2) ); record.commit();
		        	}
		        	if ( record.get('haber_id') == records[_i].data.pctbl_id ) {
		        		record.set('haber_monto', fjsRound(record.get('haber_monto')*1 + _comprobdet_monto*1,2) ); record.commit();
		        		_debe = ''; return true;
		        	} else {
		        		_debe = _recPC.data.pctbl_id;
		        	}
		        }
		    });
		    if ( _found == '-1' ) {
		    	if ( _debe == '' ) {
					_storePC.add({ debe_id: _recPC.data.pctbl_id, pctbl_cuenta: _recPC.data.pctbl_cuenta, debe_cuenta: _recPC.data.pctbl_cuenta, debe_nombre: _recPC.data.pctbl_nombre, debe_monto: _comprobdet_monto,
				                   haber_id: records[_i].data.pctbl_id, haber_cuenta: records[_i].data.pctbl_cuenta, haber_nombre: records[_i].data.pctbl_nombre, haber_monto: _comprobdet_monto });
				} else {
					_storePC.add({ debe_id: _recPC.data.pctbl_id, pctbl_cuenta: _recPC.data.pctbl_cuenta, 
				                   haber_id: records[_i].data.pctbl_id, haber_cuenta: records[_i].data.pctbl_cuenta, haber_nombre: records[_i].data.pctbl_nombre, haber_monto: _comprobdet_monto });					
				}
			}
			_storePC.sort('pctbl_cuenta', 'ASC');

			if ( records[_i].data.tablex == '104' ) {
				Ext.Ajax.request({
		            method: 'POST', url: 'php/treasury_cuentas_bancarias_movimientos_nexos_json_records.php',
			        params: { xxCuebancmov_id: records[_i].data.tabley_id,  xxType_record: 'grid_espedet_sum', xxOrder_by: 'espedet_codigo' },
					success : function(response, options) {
					    var _result = Siace.util.Util.decodeJSON(response.responseText);
					    if ( _result.success ) { 
					    	for (var _j=0; _j < _result.data.length; _j++) {
						    	_found = _storeED.findBy(function(record, id) {
						        	if ( record.get('espedet_id') == _result.data[_j].espedet_id ) {
						        		record.set('comprobespedet_monto', fjsRound(record.get('comprobespedet_monto')*1 + _result.data[_j].espedet_monto*1,2) );
						        		record.set('comprobespedet_monto_igv', fjsRound(record.get('comprobespedet_monto_igv')*1 + _result.data[_j].espedet_monto_igv*1,2) ); record.commit();
					        			return true;
						        	}
						    	});
						    	if ( _found == '-1' ) {
									_storeED.add({ espedet_id: _result.data[_j].espedet_id, espedet_codigo: _result.data[_j].espedet_codigo, espedet_nombre: _result.data[_j].espedet_nombre, comprobespedet_monto: _result.data[_j].espedet_monto, comprobespedet_monto_igv: _result.data[_j].espedet_monto_igv });
								}
							}
					    }
					},
					failure : function(response, options) { }
			    });
			} else {
			    _found = _storeED.findBy(function(record, id) {
			        if ( record.get('espedet_id') == records[_i].data.espedet_id ) {
			        	record.set('comprobespedet_monto', fjsRound(record.get('comprobespedet_monto')*1 + _comprobdet_monto*1,2) ); record.commit();
		        		return true;
			        }
			    });
			    if ( _found == '-1' ) {
					_storeED.add({ espedet_id: records[_i].data.espedet_id, espedet_codigo: records[_i].data.espedet_codigo, espedet_nombre: records[_i].data.espedet_nombre, comprobespedet_monto: _comprobdet_monto });
				}
			}
			_storeED.sort('espedet_codigo', 'ASC');
		}
		return true;
	},

	tce_grdTreasury_comprobantes_detSelectionchange: function(model, record, options) {
	},

	tcep_BeforeShow: function(component, options) {
		var _typeEdit = component.getTypeEdit();
		component.down('#comprob_serie').bindStore(Ext.create('Siace.store.public.Documentos_Series'));
		fextpub_tablas_generalesFilter({'objeto':component.down('#tipcomprob_id'), 'tabgen_parent': '4030', 'add_blank': 'NO', 'setValue': false});
		fexttre_cuentas_bancariasFilter({'objeto': component.down('#cuebanc_key'), 'type_record': 'combo_comprobantes', xxOrder_by: 'cuebanc_nro'});
		component.down('#fuefin_id').bindStore(Ext.create('Siace.store.budget.Iyueff'));
		component.down('#fuefin_id').getStore().load({ params: { xxType_record: 'combo_fuefin_codename', xxOrder_by: 'fuefin_code' } })

		var _storeCD = Ext.create('Siace.store.treasury.Comprobantes_Det');
		component.down('#grdTreasury_comprobantes_det').bindStore(_storeCD);
		_storeCD.on('beforeload', function(store, operations, eOpts) {
		    store.getProxy().setExtraParam('xxComprob_key', component.down('#comprob_key').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'form');
		});
		component.down('#grdAccounting').bindStore(Ext.create('Siace.store.treasury.Comprobantes_Det'));
		var _storeCED = Ext.create('Siace.store.treasury.Comprobantes_Especificas_Det');
		component.down('#grdTreasury_comprobantes_especificas_det').bindStore(_storeCED);
		_storeCED.on('beforeload', function(store, operations, eOpts) {
		    store.getProxy().setExtraParam('xxComprob_key', component.down('#comprob_key').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'grid_comprobantes_edit');
		});

        if ( _typeEdit == '1' ) {
        	var _icon = 'icon_New_90'; var _title = 'Nuevo Comprobante de Pago'
        	var _cboComprob_serie = component.down('#comprob_serie');
			_cboComprob_serie.getStore().add({ docser_serie: component.getComprob_serie(), docser_format: fjsLpad(component.getComprob_serie(), 3, '0'), });
			_cboComprob_serie.setValue(component.getComprob_serie());
			component.down('#pctbl_id').bindStore(Ext.create('Siace.store.accounting.Plan_Contable'));
			//component.down('#pctbl_idx').bindStore(Ext.create('Siace.store.accounting.Plan_Contable'));
			component.down('#pctbl_id').getStore().load({ params: { xxType_record: 'combo', xxType_query: 'COMPROBANTES_DEBE', xxOrder_by: 'pctbl_cuenta' } })
			//component.down('#pctbl_idx').getStore().load({ params: { xxPctbl_cuenta: '467102', xxType_record: 'combo', xxOrder_by: 'pctbl_cuenta' } })
        } else if ( fjsIn_array(_typeEdit, ['2','3']) ) {
	        var _form = component.down('form');
	   		_form.load({
	   			method: 'POST', url: 'php/treasury_comprobantes_json_records.php',
	            params: { xxComprob_key: component.getCallKey(), xxType_record: 'form', xxOrder_by: 'c.comprob_id' },
	            waitMsg: 'Loading...',
	            success: function (form, action) {
	                try {
	                    var _model = Ext.create('Siace.model.treasury.Comprobante'); var _result = Ext.decode(action.response.responseText);
	                    if ( _result.data[0] ) {
	                        _model.set(_result.data[0]);  _form.loadRecord(_model);
							component.down('#comprob_serie').getStore().add({ docser_serie: _model.data.comprob_serie, docser_format: fjsLpad(_model.data.comprob_serie, 3, '0'), });
							component.down('#comprob_serie').setValue(_model.data.comprob_serie);
							component.down('#comprob_nro').setValue(fjsLpad(_model.data.comprob_nro, 6, '0'));
							_storeCD.load(); _storeCED.load();
	                    }
	                }
	                catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
	            },
	            failure: function (form, action) { Ext.Msg.alert("Load failed", action.result.errorMessage); }
	        });

        	if ( _typeEdit == '2' ) { 
        		var _icon = 'icon_Modify_90'; var _title = translations.treasury_comprobantesedit_title_modify;
        	} else { 
        		var _icon = 'icon_Query_90'; var _title = translations.treasury_comprobantesedit_title_query; 
				component.down('#comprob_nro').disable(); component.down('#comprob_fecha').disable(); component.down('#cuebanc_key').disable(); component.down('#fuefin_id').disable();
				component.down('#comprob_observ').disable();
				component.down('#btnSave').setDisabled(true); component.down('#btnUndo').setDisabled(true); component.down('#btnExit').setDisabled(false);

        	}
        }
        component.setIconCls(_icon); component.setTitle(_title);
	},

	tcep_Close: function(panel, options) {
		//if ( this.getPps_Public_PersonasSearch() !== undefined ) { this.getPps_Public_PersonasSearch().close();  this.getPps_Public_PersonasSearch().destroy(); }
	},

	tcep_btnSaveClick: function(button, e, options) {
	    var _win = button.up('window'); var _frm = _win.down('form');
	    if ( !_win.down('#comprob_fecha').isValid() ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar la FECHA de Comprobante de Pago', function() { _frm.down('#comprob_fecha').focus(); }); return false ; }
	    if ( _win.down('#tipcomprob_id').getValue() == '' || _win.down('#tipcomprob_id').getValue() == undefined || _win.down('#tipcomprob_id').getValue() == null ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el TIPO de Comprobante de Pago', function() { _frm.down('#fuefin_id').focus(); }); return false ; }
	    if ( _win.down('#fuefin_id').getValue() == '' || _win.down('#fuefin_id').getValue() == undefined || _win.down('#fuefin_id').getValue() == null ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar la FUENTE DE FINANCIAMIENTO del comprobante de Pago', function() { _frm.down('#fuefin_id').focus(); }); return false ; }

		var _detalle = ''; _comprob_monto = 0;
		var _recCD = _win.down('#grdTreasury_comprobantes_det').getStore().getRange();
		for ( var _i = 0;  _i < _recCD.length; _i++ ) {
			_detalle += (_i == 0 ? '' : ',') +'{'+ _recCD[_i].get('tablex') +','+ _recCD[_i].get('tablex_key') +',0,'+ _recCD[_i].get('tabley') +','+ _recCD[_i].get('tabley_key') +',0,0,'+ _recCD[_i].get('mone_id') +',0,'+ _recCD[_i].get('comprobdet_monto') +',0.00,'+ _recCD[_i].get('pctbl_id') +','+ _recCD[_i].get('espedet_id') +'}';
			_comprob_monto += fjsRound(_recCD[_i].get('comprobdet_monto'), 2)*1;
		}
		if ( _detalle == '' ) { Ext.Msg.alert(translations.mensaje, 'Documento no registra detalle', function() { _frm.down('#btnAdd').focus(); }); return false ; }
		if ( _comprob_monto*1 <= 0 ) { Ext.Msg.alert(translations.mensaje, 'Importe de comprobante no puede ser cero (0)', function() { }); return false ; }

	    if ( _frm.getForm().isValid() ) {
			Ext.Msg.confirm(translations.confirmar, translations.mensaje_pregunta_guardar, function(btn){
			if ( btn == 'yes' ) {
			    var _vs = fextpub_sessionVariables();
			    _frm.getForm().submit({
					method: 'POST', url: 'php/treasury_comprobantes_savepayments.php',
					params:{ xx0005: 'YES',   xxType_edit: _win.getTypeEdit(),
						     xxDoc_id: _win.down('#doc_id').getValue(), xxComprob_serie: _win.down('#comprob_serie').getValue(), xxComprob_nro: _win.down('#comprob_nro').getValue()*1,
						     xxTipcomprob_id: _win.down('#tipcomprob_id').getValue(), xxCuebanc_key: _win.down('#cuebanc_key').getValue(), xxFuefin_id: _win.down('#fuefin_id').getValue(), xxComprob_monto: _comprob_monto, xxDetalle: _detalle,
							 zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
		            waitTitle: translations.valida_titulo, waitMsg: translations.valida_mensaje01,
			        success: function(form, action) {
			            var result = Siace.util.Util.decodeJSON(action.response.responseText);
			            if ( result.success ) {
				            if ( _win.getCallStore() !== null ) { _win.getCallStore().load(); } 
						    else if ( _win.getCallWindow() !== null ) { }
	            	        _win.close();
			            } else { Siace.util.Util.showErrorMsg(result.msg); }
			        },
			        failure: function(form, action) { Siace.util.Util.showErrorMsg(action.response.responseText); }
			    });
			}});
	    }
	},

	tcep_btnUndoClick: function(button, e, options) {
		button.up('window').close();
	},

	tcep_btnExitClick: function(button, e, options) {
		button.up('window').close();
	},

	tcep_btnAddClick: function(button, e, options) {
		var _win = button.up('window');
		if ( _win.down('#tipcomprob_id').getValue() == '' || !_win.down('#tipcomprob_id').getValue() == undefined ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar el Tipo de Comprobante', function() { _win.down('#tipcomprob_id').focus(); }); return false ; }

		Ext.get(_win.getEl()).mask('Por favor espere un momento...', 'loading');
		if ( _win.down('#tipcomprob_id').getValue() == '4031' ) {
       		var _winTCDAP = Ext.create('Siace.view.treasury.Comprobantes_DetAddPago');
       		_winTCDAP.setCallWindow(_win);
       	} else {
       		return false;
       	}
       	_winTCDAP.setTitle('Detalle Documento'); _winTCDAP.show(); 
       	//_winCDA.setFecha(fjsDateSQL(_win.down('#comprob_fecha').getRawValue())); _winCSA.setCuebanc_key(_win.down('#cuebanc_key').getValue());  _winCSA.setFuefin_id(_win.down('#fuefin_id').getValue());
       	//_winCDA.setActionDestroy(true); 
    	Ext.get(_win.getEl()).unmask();
	},

	tcep_btnSuppressClick: function(button, e, options) {
		var _record = this.gettcep_grdTreasury_comprobantes_Det().getSelectionModel().getSelection()[0];
        if ( _record ) {
        	button.disable();
        	this.gettcep_grdTreasury_comprobantes_Det().getStore().remove(_record);
        	var _win = button.up('window');
        	_win.down('#recib_monto_pago').setValue( _win.down('#recib_monto_pago').getValue()*1 - _record.data.recibdet_monto_pago_real*1 );
        	_win.down('#recib_monto_saldo').setValue( _win.down('#recib_monto_saldo').getValue()*1 + _record.data.recibdet_monto_pago_real*1 );
		}
	},

	tcep_comprob_fechaChange: function(textfiled, newValue, oldValue, options) {
		var _win = textfiled.up('window');
		_win.down('#grdTreasury_comprobantes_det').getStore().removeAll();
		_win.down('#grdAccounting').getStore().removeAll();
		_win.down('#grdTreasury_comprobantes_especificas_det').getStore().removeAll();		
	},

	tcep_comprob_nroBlur: function(textfield, the, options) {
		textfield.setValue(fjsLpad(textfield.getValue(),6,'0'));
	},

	tcep_cuebanc_keyChange: function(combo, newValue, oldValue, options) {
		var _win = combo.up('window');
		if ( _win.getTypeEdit() == '1' ) {
			if ( newValue == '' ) { _win.down('#fuefin_id').enable(); } 
			else {
				_win.down('#fuefin_id').disable();
				var _record = combo.getStore().findRecord('cuebanc_key', newValue);
				combo.up('window').down('#fuefin_id').setValue(_record.data.fuefin_id);
			}
			_win.down('#grdTreasury_comprobantes_det').getStore().removeAll();
			_win.down('#grdAccounting').getStore().removeAll();
			_win.down('#grdTreasury_comprobantes_especificas_det').getStore().removeAll();
		}
	},

	tcep_fuefin_idChange: function(combo, newValue, oldValue, options) {
		var _win = combo.up('window');
		_win.down('#grdTreasury_comprobantes_det').getStore().removeAll();
		_win.down('#grdAccounting').getStore().removeAll();
		_win.down('#grdTreasury_comprobantes_especificas_det').getStore().removeAll();		
	},

	tcep_grdTreasury_comprobantes_detAdd: function(records) {
		var _win = this.getTcep_grdTreasury_Comprobantes_Det().up('window');
		var _storeCD = _win.down('#grdTreasury_comprobantes_det').getStore();
		var _storePC = _win.down('#grdAccounting').getStore();
		var _storeED = _win.down('#grdTreasury_comprobantes_especificas_det').getStore();
		_storeCD.removeAll(); _storePC.removeAll(); _storeED.removeAll();

		if ( _win.down('#cuebanc_key').getValue() !== '' ) {
			var _recPC = _win.down('#cuebanc_key').getStore().findRecord('cuebanc_key', _win.down('#cuebanc_key').getValue());
		}

		var _comprobdet_monto = 0; var _found = ''; var _debe = ''; var pctbl_id = '';
		for ( var _i = 0;  _i < records.length; _i++ ) {
			_comprobdet_monto = fjsRound(records[_i].data.tipcamb_monto*1 <= 0 ? records[_i].data.tablex_monto_pago : (records[_i].data.tablex_monto_pago_real * records[_i].data.tipcamb_monto), 2);
			_storeCD.add({ tablex: records[_i].data.tablex, tablex_key: records[_i].data.tablex_key, tabley: records[_i].data.tabley, tabley_id: records[_i].data.tabley_id, tippag_id: records[_i].data.tippag_id, mone_id: records[_i].data.mone_id, pctbl_id: records[_i].data.pctbl_id, espedet_id: records[_i].data.espedet_id, pctbl_nombre: records[_i].data.pctbl_nombre, espedet_codigo: records[_i].data.espedet_codigo, espedet_nombre: records[_i].data.espedet_nombre, 
				           tablex_documento: records[_i].data.tablex_documento, tablex_fecha: records[_i].data.tablex_fecha, pctbl_cuenta: records[_i].data.pctbl_cuenta, tippag_abrev: records[_i].data.tippag_abrev, mone_abrev: records[_i].data.mone_abrev, tablex_monto: records[_i].data.tablex_monto, tablex_monto_pago: records[_i].data.tablex_monto_pago, tablex_monto_pago_real: records[_i].data.tablex_monto_pago_real, tipcamb_monto: records[_i].data.tipcamb_monto, comprobdet_monto: _comprobdet_monto });

			if ( _win.down('#cuebanc_key').getValue() == '' ) {
				if ( (records[_i].data.tippag_id == '1' || records[_i].data.tippag_id == null) && records[_i].data.mone_id == '1' ) { _pctbl_cuenta = '101101'; }
				else if ( (records[_i].data.tippag_id == '1' || records[_i].data.tippag_id == null) && records[_i].data.mone_id == '2' ) { _pctbl_cuenta = '101102'; }
				else if ( (records[_i].data.tippag_id == '4' || records[_i].data.tablex == '111') && records[_i].data.mone_id == '1' ) { _pctbl_cuenta = '101201'; }
				else if ( (records[_i].data.tippag_id == '4' || records[_i].data.tablex == '111') && records[_i].data.mone_id == '2' ) { _pctbl_cuenta = '101202'; }
				else { pctbl_cuenta = '000000'; }
				var _recPC = _win.down('#pctbl_id').getStore().findRecord('pctbl_cuenta', _pctbl_cuenta);
			} else if ( records[_i].data.doc_id == '515' && fjsIn_array(records[_i].data.conp_id, ['123','124']) ) {
				var _recPC = _win.down('#pctbl_id').getStore().findRecord('pctbl_cuenta', '467102');
			} else if ( records[_i].data.doc_id == '515' && fjsIn_array(records[_i].data.conp_id, ['127']) ) {
				var _recPC = _win.down('#pctbl_id').getStore().findRecord('pctbl_cuenta', '122102');
			}

			_debe = '';
		    _found = _storePC.findBy(function(record, id) {
		        if ( record.get('debe_id') == _recPC.data.pctbl_id ) {
		        	if ( record.get('debe_cuenta') !== '' ) {
		        		record.set('debe_monto', fjsRound(record.get('debe_monto')*1 + _comprobdet_monto*1,2) ); record.commit();
		        	}
		        	if ( record.get('haber_id') == records[_i].data.pctbl_id ) {
		        		record.set('haber_monto', fjsRound(record.get('haber_monto')*1 + _comprobdet_monto*1,2) ); record.commit();
		        		_debe = ''; return true;
		        	} else {
		        		_debe = _recPC.data.pctbl_id;
		        	}
		        }
		    });
		    if ( _found == '-1' ) {
		    	if ( _debe == '' ) {
					_storePC.add({ debe_id: _recPC.data.pctbl_id, pctbl_cuenta: _recPC.data.pctbl_cuenta, debe_cuenta: _recPC.data.pctbl_cuenta, debe_nombre: _recPC.data.pctbl_nombre, debe_monto: _comprobdet_monto,
				                   haber_id: records[_i].data.pctbl_id, haber_cuenta: records[_i].data.pctbl_cuenta, haber_nombre: records[_i].data.pctbl_nombre, haber_monto: _comprobdet_monto });
				} else {
					_storePC.add({ debe_id: _recPC.data.pctbl_id, pctbl_cuenta: _recPC.data.pctbl_cuenta, 
				                   haber_id: records[_i].data.pctbl_id, haber_cuenta: records[_i].data.pctbl_cuenta, haber_nombre: records[_i].data.pctbl_nombre, haber_monto: _comprobdet_monto });					
				}
			}
			_storePC.sort('pctbl_cuenta', 'ASC');

			if ( records[_i].data.tablex == '104' ) {
				Ext.Ajax.request({
		            method: 'POST', url: 'php/treasury_cuentas_bancarias_movimientos_nexos_json_records.php',
			        params: { xxCuebancmov_id: records[_i].data.tabley_id,  xxType_record: 'grid_espedet_sum', xxOrder_by: 'espedet_codigo' },
					success : function(response, options) {
					    var _result = Siace.util.Util.decodeJSON(response.responseText);
					    if ( _result.success ) { 
					    	for (var _j=0; _j < _result.data.length; _j++) {
						    	_found = _storeED.findBy(function(record, id) {
						        	if ( record.get('espedet_id') == _result.data[_j].espedet_id ) {
						        		record.set('comprobespedet_monto', fjsRound(record.get('comprobespedet_monto')*1 + _result.data[_j].espedet_monto*1,2) );
						        		record.set('comprobespedet_monto_igv', fjsRound(record.get('comprobespedet_monto_igv')*1 + _result.data[_j].espedet_monto_igv*1,2) ); record.commit();
					        			return true;
						        	}
						    	});
						    	if ( _found == '-1' ) {
									_storeED.add({ espedet_id: _result.data[_j].espedet_id, espedet_codigo: _result.data[_j].espedet_codigo, espedet_nombre: _result.data[_j].espedet_nombre, comprobespedet_monto: _result.data[_j].espedet_monto, comprobespedet_monto_igv: _result.data[_j].espedet_monto_igv });
								}
							}
					    }
					},
					failure : function(response, options) { }
			    });
			} else {
			    _found = _storeED.findBy(function(record, id) {
			        if ( record.get('espedet_id') == records[_i].data.espedet_id ) {
			        	record.set('comprobespedet_monto', fjsRound(record.get('comprobespedet_monto')*1 + _comprobdet_monto*1,2) ); record.commit();
		        		return true;
			        }
			    });
			    if ( _found == '-1' ) {
					_storeED.add({ espedet_id: records[_i].data.espedet_id, espedet_codigo: records[_i].data.espedet_codigo, espedet_nombre: records[_i].data.espedet_nombre, comprobespedet_monto: _comprobdet_monto });
				}
			}
			_storeED.sort('espedet_codigo', 'ASC');
		}
		return true;
	},

	tcep_grdTreasury_comprobantes_detSelectionchange: function(model, record, options) {
	},

	/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	tcdap_BeforeRender: function(component, options) {
		fextpub_areasFilter({'objeto': component.down('#area_key'), 'filter': false});
		fextpub_documentosFilter({'objeto': component.down('#doc_id'), 'doc_esdocumentary': '1', 'type_record': 'combo_abrev'});
		fexttre_cuentas_bancariasFilter({'objeto': component.down('#cuebanc_key'), 'type_record': 'combo_comprobantes', xxOrder_by: 'cuebanc_nro'});
		component.down('#espedet_id').bindStore(Ext.create('Siace.store.budget.Iyueffed'));
	},

	tcdap_btnAcceptClick: function(button, e, options) {
		var _win = button.up('window'); var _frm = _win.down('form');
		if ( _win.down('#doc_id').getValue()*1 <= 0 ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar el TIPO de Documento', function() { _win.down('#doc_id').focus(); }); return false ; }
		if ( _win.down('#year_id').getValue()*1 <= 0 ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar el AÑO de Documento', function() { _win.down('#year_id').focus(); }); return false ; }
		if ( _win.down('#area_key').getValue() == '' ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar la Unidad Orgánica que emite el documento', function() { _win.down('#area_key').focus(); }); return false ; }
		if ( !_win.down('#expe_fecha').isValid() ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar la FECHA que emite el documento', function() { _win.down('#expe_fecha').focus(); }); return false ; }
		if ( _win.down('#cuebanc_key').getValue() == '' ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar la Cuenta Bancaria a la Cual se realiza la transferencia', function() { _win.down('#cuebanc_key').focus(); }); return false ; }
		if ( _win.down('#cuebanc_key').getValue() == _win.getCallWindow().down('#cuebanc_key').getValue() ) {
			Ext.Msg.alert(translations.mensaje, 'Cuenta Bancaria de Abono no debe ser a la cuenta de Cargo', function() { _win.down('#cuebanc_key').focus(); }); return false ; }
		if ( _win.down('#comprobdet_monto').getValue() == '' || _win.down('#comprobdet_monto').getValue()*1 <= 0 ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar el IMPORTE de la transferencia', function() { _win.down('#comprobdet_monto').focus(); }); return false ; }

	    if ( _frm.getForm().isValid() ) {
			Ext.Msg.confirm(translations.confirmar, translations.mensaje_pregunta_guardar, function(btn){
			if ( btn == 'yes' ) {
		    	var _vs = fextpub_sessionVariables(); var _me = this;
		        _frm.getForm().submit({
					method: 'POST',  url: 'php/documentary_expedientes_save.php',
					params:{ xx0005: 'YES', xxType_edit: '1',
					         zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
	                waitTitle: translations.valida_titulo, waitMsg: translations.valida_mensaje01,
					/*_comprobdet_monto = fjsRound(records[_i].data.tipcamb_monto*1 <= 0 ? records[_i].data.tablex_monto_pago : (records[_i].data.tablex_monto_pago_real * records[_i].data.tipcamb_monto), 2);
					_storeCD.add({ tablex: records[_i].data.tablex, tablex_key: records[_i].data.tablex_key, tabley: records[_i].data.tabley, tabley_id: records[_i].data.tabley_id, tippag_id: records[_i].data.tippag_id, mone_id: records[_i].data.mone_id, pctbl_id: records[_i].data.pctbl_id, espedet_id: records[_i].data.espedet_id, pctbl_nombre: records[_i].data.pctbl_nombre, espedet_codigo: records[_i].data.espedet_codigo, espedet_nombre: records[_i].data.espedet_nombre, 
				           tablex_documento: records[_i].data.tablex_documento, tablex_fecha: records[_i].data.tablex_fecha, pctbl_cuenta: records[_i].data.pctbl_cuenta, tippag_abrev: records[_i].data.tippag_abrev, mone_abrev: records[_i].data.mone_abrev, tablex_monto: records[_i].data.tablex_monto, tablex_monto_pago: records[_i].data.tablex_monto_pago, tablex_monto_pago_real: records[_i].data.tablex_monto_pago_real, tipcamb_monto: records[_i].data.tipcamb_monto, comprobdet_monto: _comprobdet_monto }); */
		            success: function(form, action) {
		            	var _result = Siace.util.Util.decodeJSON(action.response.responseText);
			            if ( _result.success ) {
			            	var _recTCB = _win.down('#cuebanc_key').getStore().findRecord('cuebanc_key', _win.down('#cuebanc_key').getValue());
			            	var _recBED = _win.down('#espedet_id').getStore().findRecord('espedet_id', _win.down('#espedet_id').getValue());
			            	var _store = Ext.create('Siace.store.treasury.Comprobantes_DetAdd');
							_store.add({ tablex: '7001', tablex_key: _result.key, tabley: '4003', tabley_key: _win.down('#cuebanc_key').getValue(), mone_id: _recTCB.data.mone_id, mone_abrev: _recTCB.data.mone_abrev, 
								         pctbl_id: _recTCB.data.pctbl_id, pctbl_cuenta: _recTCB.data.pctbl_cuenta, pctbl_nombre: _recTCB.data.pctbl_nombre, 
								         espedet_id: _recBED.data.espedet_id, espedet_codigo: _recBED.data.espedet_codigo, espedet_nombre: _recBED.data.espedet_nombre,
				                  	     tablex_documento: _win.down('#doc_id').getRawValue()+'-'+_win.down('#expe_nro').getValue()+'-'+_win.down('#year_id').getValue()+'-'+_win.down('#area_key').getRawValue()+'/CETICOS ILO', tablex_fecha: _win.down('#expe_fecha').getSubmitValue(),
				                  	     comprobdet_monto: _win.down('#comprobdet_monto').getValue() });
							var _record = _store.findRecord('tablex', 7001); var _close = false;
							_close = fexttre_comprobantes_detAddPago(_win.getCallWindow(), _record, _store);
							if ( _close ) { _win.close();  if ( _win.getActionDestroy() == true ) { _win.destroy(); } }
		                } else { Siace.util.Util.showErrorMsg(result.msg); }
		            },
		            failure: function(form, action) { Siace.util.Util.showErrorMsg(action.response.responseText); }
		        });
			}});
	    }
	},

	tcdap_btnCancelClick: function(button, e, options) {
		var _win = button.up('window');
		_win.close();  if ( _win.getActionDestroy() == true ) { _win.destroy(); }
	},

	tcdap_espedetFilter: function(poComponent) {
		poComponent.down('#espedet_id').getStore().removeAll();
		if (poComponent.down('#year_id').getValue()*1 > 0 && poComponent.down('#cuebanc_key').getValue() !== '' ) {
			var _cboEspedet_id = poComponent.down('#espedet_id');
			_cboEspedet_id.getStore().load({
				params: { xxYear_id: poComponent.down('#year_id').getValue(), xxFuefin_id: poComponent.down('#cuebanc_key').getStore().findRecord('cuebanc_key', poComponent.down('#cuebanc_key').getValue()).data.fuefin_id,
				          xxOrder_by: 'espedet_codigo', xxType_record: 'combo_espedet_id', xxAdd_blank: 'YES' },
				callback: function(records, operations, success) { if ( records.length > 0 ) { _cboEspedet_id.setValue(records[0].data.espedet_id); }}
			});
		}
	},

	tcdap_cuebanc_keyChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.tcdap_espedetFilter(combo.up('window')); }
	},

	tcdap_year_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.tcdap_espedetFilter(combo.up('window')); }
	},
	
	/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	tcdsxa_BeforeRender: function(component, options) {
		component.down('#btnAccept').enable();
		var _store = Ext.create('Siace.store.treasury.Comprobantes_DetAdd');
		var _grid = component.down('#grdTreasury');
		//var _pagingtoolbar = component.down('#pgtTreasury_comprobantes');
		_grid.bindStore(_store);  //_pagingtoolbar.bindStore(_store);
		_store.sort('tablex_documento', 'ASC');
		_store.on('beforeload', function(store, operations, eOpts) {
			//component.down('#btnAccept').setDisabled(true);
		    store.getProxy().setExtraParam('xxFecha', component.getFecha());
		    store.getProxy().setExtraParam('xxCuebanc_key', component.getCuebanc_key());
		    store.getProxy().setExtraParam('xxFuefin_id', component.getFuefin_id());
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxType_query', component.getTypeQuery());
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		    //store.getProxy().setExtraParam('xxPaginate', '1');
		});
		_store.pageSize = 500;  _store.load();
	},

	tcdsxa_btnAcceptClick: function(button, e, options) {
		var _win = button.up('window');
		var _records = _win.down('#grdTreasury').getSelectionModel().getSelection();
		var _close = false;
		if ( _records.length <= 0 ) {
			Ext.Msg.alert(translations.mensaje, 'No se ha seleccionado ningun documento');  return false; }

		_close = this.tce_grdTreasury_comprobantes_detAdd(_records);
		if ( _close ) {
			var _win = button.up('window');
			_win.close();  if ( _win.getActionDestroy() == true ) { _win.destroy(); }
		}
	},

	tcdsxa_btnCancelClick: function(button, e, options) {
		var _win = button.up('window');
		_win.close();  if ( _win.getActionDestroy() == true ) { _win.destroy(); }
	},


	tcdsxa_grdTreasury_comprobantesItemdblclick: function(component, record, item, index, e, options) {
		var _btnAccept = component.up('window').down('#btnAccept');
        _btnAccept.fireEvent('click', _btnAccept, e, options);
	},


	tcdsxa_grdTreasury_comprobantesSelectionchange: function(model, record, options) {
		if ( record.length == 1 ) {
			_win = this.gettrs_grdTreasury_comprobantes().up('window');
			_win.down('#btnAccept').setDisabled( record[0].data.bs_id == _win.getCallKey() ? true : false );
		}
	},

	/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
 	tcr_BeforeRender: function(component, options) {
		var _str = Ext.create('Ext.data.Store', {
			fields: [ { name: 'typrep_id', type: 'string' }, { name: 'typrep_nombre', type: 'string' }, ],
			data: [
				{ typrep_id: 'REPORT', typrep_nombre: 'Comprobantes' },
				{ typrep_id: 'REPORT_DETAIL', typrep_nombre: 'Comprobantes - Detalle' },
				{ typrep_id: 'REPORT_CLASIFICADOR', typrep_nombre: 'Comprobantes - Clasificador Presupuestal' },
				{ typrep_id: 'REPORT_CONTABILIDAD', typrep_nombre: 'Comprobantes - Contabilidad' },
				{ typrep_id: 'REPORT_ANALITICO', typrep_nombre: 'Comprobantes - Analítico' },
				{ typrep_id: 'REPORT_x_ESPEDET', typrep_nombre: 'Comprobantes según Clasificador Presupuestal' },
				{ typrep_id: 'REPORT_x_ESPEDET_DETAIL', typrep_nombre: 'Comprobantes según Clasificador Presupuestal - Detalle' },
			]
		});
		var _cboType_record = component.down('#type_record');
		_cboType_record.bindStore(_str);
		_cboType_record.getStore().load({ callback: function(records, operations, success) {  _cboType_record.setValue('REPORT'); } });

		var _cboTipcomprob_id = component.down('#tipcomprob_id');
		_cboTipcomprob_id.bindStore(Ext.create('Siace.store.public.Tablas_Generales'));
		_cboTipcomprob_id.getStore().load({
			params: { xxTabgen_parent: '4020', xxType_record: 'combo', xxAdd_blank: 'YES' },
			callback: function(records, operations, success) { 
			   	if ( records.length > 0 ) { _cboTipcomprob_id.enable(); _cboTipcomprob_id.setValue(records[0].data.tabgen_id); }
			    else { _cboTipcomprob_id.disable();  _cboTipcomprob_id.setValue(''); }
    		}
		});

		var _cboCuebanc_key = component.down('#cuebanc_key');
		_cboCuebanc_key.bindStore(Ext.create('Siace.store.treasury.Cuentas_Bancarias'));
		_cboCuebanc_key.getStore().load({ 
			params: { xxType_record: 'combo_comprobantes', xxOrder_by: 'cuebanc_nro', xxAdd_blank: 'YES' },
			callback: function(records, operations, success) {
				if ( records.length > 0 ) { _cboCuebanc_key.enable();  _cboCuebanc_key.setValue(records[0].data.cuebanc_key); }
				else { _cboCuebanc_key.disable(); _cboCuebanc_key.setValue(''); }
			}
		})

		var _cboFuefin_id = component.down('#fuefin_id');
		_cboFuefin_id.bindStore(Ext.create('Siace.store.budget.Iyueff'));
		_cboFuefin_id.getStore().load({ 
			params: { xxType_record: 'combo_fuefin_codename', xxOrder_by: 'fuefin_code', xxAdd_blank: 'YES' },
			callback: function(records, operations, success) { 
			   	if ( records.length > 0 ) { _cboFuefin_id.enable(); _cboFuefin_id.setValue(records[0].data.fuefin_id); }
			    else { _cboFuefin_id.disable();  _cboFuefin_id.setValue(''); }
    		}
		});

		var _cboEspedet_id = component.down('#espedet_id');
		_cboEspedet_id.bindStore(Ext.create('Siace.store.treasury.Comprobantes_Especificas_Det'));
		_cboEspedet_id.getStore().load({
			params: { xxType_record: 'UNIQUE_ESPEDET_ID', xxOrder_by: '', xxAdd_blank: 'YES' },
			callback: function(records, operations, success) {
				if ( records.length > 0 ) { _cboEspedet_id.enable();  _cboEspedet_id.setValue(records[0].data.espedet_id); }
				else { _cboEspedet_id.disable(); _cboEspedet_id.setValue(''); }
			}
		})
	},

	tcr_Close: function(panel, options) {
		//if ( this.getPns_Public_NandinasSearch() !== undefined ) { this.getPns_Public_NandinasSearch().close();  this.getPns_Public_NandinasSearch().destroy(); }
	},

	tcr_ViewReport: function(pcFormat, poPanel){
		var _type_record = poPanel.down('#type_record').getValue();
		var _fechaini = fjsDateSQL(poPanel.down('#fechaini').getRawValue());  var _fechafin = fjsDateSQL(poPanel.down('#fechafin').getRawValue());

		//if ( _type_record == 'REPORT_x_ESPEDET' && poPanel.down('#espedet_id').getValue()*1 <= 0 ) {
		//	Ext.Msg.alert(translations.mensaje, 'Debe indicar el Clasificador Presupuestal', function() { poPanel.down('#espedet_id').focus(); }); return false ; }
		if ( !poPanel.down('#fechaini').isValid() ) {
			Ext.Msg.alert(translations.mensaje, 'Fecha Inicial NO es Válida', function() { poPanel.down('#fechaini').focus(); }); return false ; }
		if ( !poPanel.down('#fechafin').isValid() ) {
			Ext.Msg.alert(translations.mensaje, 'Fecha Final NO es Válida', function() { poPanel.down('#fechafin').focus(); }); return false ; }

		var _get = 'xxFormat='+pcFormat +'&xxType_record='+_type_record +'&xxTipcomprob_id='+poPanel.down('#tipcomprob_id').getValue() +'&xxTipcomprob_nombre='+poPanel.down('#tipcomprob_id').getRawValue() +'&xxCuebanc_key='+poPanel.down('#cuebanc_key').getValue() + '&xxCuebanc_nrobanco='+poPanel.down('#cuebanc_key').getRawValue() +'&xxFuefin_id='+poPanel.down('#fuefin_id').getValue() +'&xxFuefin_code='+poPanel.down('#fuefin_id').getRawValue().substr(0,2) +'&xxFuefin_nombre='+poPanel.down('#fuefin_id').getRawValue().substr(3) +'&xxEspedet_id='+poPanel.down('#espedet_id').getValue() +'&xxEspedet_codigo='+poPanel.down('#espedet_id').getRawValue() +'&xxFechaini='+_fechaini +'&xxFechafin='+_fechafin;
		if ( fjsIn_array(_type_record, ['REPORT']) ) {
        	fext_pdf('', 'Reporte Comprobantes', 'php/pdf/pdf_treasury_comprobantes_report.php?'+_get);
		} else if ( fjsIn_array(_type_record, ['REPORT_CLASIFICADOR']) ) {
        	fext_pdf('', 'Reporte Comprobantes - Clasificador', 'php/pdf/pdf_treasury_comprobantes_report_clasificador.php?'+_get);
		} else if ( fjsIn_array(_type_record, ['REPORT_CONTABILIDAD']) ) {
        	fext_pdf('', 'Reporte Comprobantes - Contabilidad', 'php/pdf/pdf_treasury_comprobantes_report_contabilidad.php?'+_get);
		} else if ( fjsIn_array(_type_record, ['REPORT_ANALITICO']) ) {
        	fext_pdf('', 'Reporte Comprobantes - Analítico', 'php/pdf/pdf_treasury_comprobantes_report_analitico.php?'+_get);
		} else if ( fjsIn_array(_type_record, ['SALIDAS_DETALLE_ADUANA']) ) {
			fext_pdf('', translations.pdf_operations_almacenes_report_stock_title, 'php/pdf/pdf_operations_salidas_det_report_aduana.php?xxAlma_key='+_alma_key+'&xxFechaini='+_fechaini+'&xxFechafin='+_fechafin+'&xxType_record='+_type_report+'&xxType_query='+_type_report);
		} else if ( fjsIn_array(_type_record, ['REPORT_x_ESPEDET']) ) {
        	fext_pdf('', 'Reporte Comprobantes segun Clasificador', 'php/pdf/pdf_treasury_comprobantes_report_espedet_only.php?'+_get);
		} else if ( fjsIn_array(_type_record, ['REPORT_x_ESPEDET_DETAIL']) ) {
        	fext_pdf('', 'Reporte Comprobantes segun Clasificador', 'php/pdf/pdf_treasury_comprobantes_report_espedet_only.php?'+_get);
		}
	},

	tcr_btnPdfClick: function(button, e, options) {
		this.tcr_ViewReport('P', button.up('panel'));
	},

	tcr_btnExcelClick: function(button, e, options) {
		this.tcr_ViewReport('E', button.up('panel'));
	},
});