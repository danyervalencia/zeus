Ext.define('Siace.controller.treasury.Recibos', {
	extend: 'Ext.app.Controller',
	stores: ['array.DocumentosCobro', 'array.Monedas', 'array.Years',],
	views: ['treasury.RecibosBrowse', 'treasury.RecibosEdit', 'treasury.RecibosReports'],
    refs: [
        { ref: 'tre_grdTreasury_Recibos_Det', selector: 'treasury_recibosedit #grdTreasury_recibos_det' },
        { ref: 'tvsxc_Treasury_VentasSearchxCharge', selector: 'treasury_ventassearchxcharge' },
        { ref: 'pis_Public_IndividuosSearch', selector: 'public_individuossearch' },
        { ref: 'pps_Public_PersonasSearch', selector: 'public_personassearch' },
    ],

	init: function(application) {
		this.control({
			'treasury_recibosbrowse': { beforerender: this.trb_BeforeRender, },
			'treasury_recibosbrowse #opc_id': { change: this.trb_opc_idChange, },
			'treasury_recibosbrowse #btnNew': { click: this.trb_btnNewClick, },
			'treasury_recibosbrowse #btnQuery': { click: this.trb_btnQueryClick, },
			'treasury_recibosbrowse #btnAnnular': { click: this.trb_btnAnnularClick, },
			'treasury_recibosbrowse #btnDelete': { click: this.trb_btnDeleteClick, },
			'treasury_recibosbrowse #btnPrinter': { click: this.trb_btnPrinterClick, },
			'treasury_recibosbrowse #btnHide': { click: this.trb_btnHideClick, },
            'treasury_recibosbrowse #concp_id': { change: this.trb_concp_idChange, },
            'treasury_recibosbrowse #doc_id': { change: this.trb_doc_idChange, },
			'treasury_recibosbrowse #fechafin': { change: this.trb_fechainiChange },
			'treasury_recibosbrowse #fechaini': { change: this.trb_fechafinChange, },
			'treasury_recibosbrowse #grdTreasury_recibos': { selectionchange: this.trb_grdTreasury_recibosSelectionchange, },
			'treasury_recibosbrowse #recib_nro': { change: this.trb_recib_nroChange },
            'treasury_recibosbrowse #recib_serie': { change: this.trb_recib_serieChange, },
			'treasury_recibosbrowse #tippag_id': { change: this.trb_tippag_idChange, },

            'treasury_recibosedit': { beforeshow: this.tre_BeforeShow, close: this.tre_Close, },
            'treasury_recibosedit #btnSave': { click: this.tre_btnSaveClick, },
            'treasury_recibosedit #btnUndo': { click: this.tre_btnUndoClick, },
            'treasury_recibosedit #btnExit': { click: this.tre_btnExitClick, },
            'treasury_recibosedit #btnAdd': { click: this.tre_btnAddClick, },
            'treasury_recibosedit #btnSuppress': { click: this.tre_btnSuppressClick, },
            'treasury_recibosedit #btnIndiv_search': { click: this.tre_btnIndiv_searchClick },
            'treasury_recibosedit #btnPers_search': { click: this.tre_btnPers_searchClick, },
			'treasury_recibosedit #concp_id': { change: this.tre_concp_idChange, },
			'treasury_recibosedit #cuebanc_key': { change: this.tre_cuebanc_keyChange, },
			'treasury_recibosedit #grdTreasury_recibos_det': { selectionchange: this.tre_grdTreasury_recibos_detSelectionchange, },
            'treasury_recibosedit #indiv_dni': { blur: this.tre_indiv_dniBlur, focus: this.tre_indiv_dniFocus, keypress: this.tre_indiv_dniKeypress, },
			'treasury_recibosedit #pers_key': { change: this.tre_pers_keyChange, },
			'treasury_recibosedit #pers_ruc': { blur: this.tre_pers_rucBlur, focus: this.tre_pers_rucFocus, keypress: this.tre_pers_rucKeypress, },
			'treasury_recibosedit #recib_monto': { change: this.tre_recib_montoChange, },
			'treasury_recibosedit #tablex_key': { change: this.tre_tablex_keyChange, },
			'treasury_recibosedit #tipdocident_id': { change: this.tre_tipdocident_idChange, },
			'treasury_recibosedit #tippag_id': { change: this.tre_tippag_idChange, },

			'treasury_recibosreports': { beforerender: this.trr_BeforeRender, close: this.trr_Close, },
			'treasury_recibosreports #btnPdf': { click: this.trr_btnPdfClick, },
			'treasury_recibosreports #btnExcel': { click: this.trr_btnExcelClick, },

			'treasury_recibossearch': { beforerender: this.trs_BeforeRender, },
			'treasury_recibossearch #btnAccept': { click: this.trs_btnAcceptClick, },
			'treasury_recibossearch #btnCancel': { click: this.trs_btnCancelClick, },
			'treasury_recibossearch #bs_nombre': { change: this.trs_Clean, },
			'treasury_recibossearch #bscat_id': { change: this.trs_bscat_idChange, },
			'treasury_recibossearch #bsg_id': { change: this.trs_bsg_idChange, },
			'treasury_recibossearch #bst_id': { change: this.trs_bst_idChange, },
			'treasury_recibossearch #grdtreasury_recibos': { itemdblclick: this.trs_grdtreasury_recibosItemdblclick, selectionchange: this.trs_grdtreasury_recibosSelectionchange, },
			'treasury_recibossearch #mone_id': { change: this.trs_mone_idChange, },
		});
	},

	trb_BeforeRender: function( component, options ) {
		fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': component.down('#opc_id'), 'menu_id': component.getMenuId() });
		fextpub_documentos_seriesParameters({'panel': component, 'itemId': 'recib_serie'});
		fextpub_documentosFilter({'objeto':component.down('#doc_id'), 'doc_escobro': '1', 'add_blank': 'NO'});
		fexttre_conceptosFilter({'objeto': component.down('#concp_id')});

		var _store = Ext.create('Siace.store.treasury.Recibos');
		var _grid = component.down('#grdTreasury_recibos'); var _pagtool = component.down('#pgtTreasury_recibos');
		_grid.bindStore(_store);  _pagtool.bindStore(_store);
		_store.sort('recib_documento', 'DESC'); _store.pageSize = 500;
		_store.on('beforeload', function(store, operations, eOpts) {
			component.down('#btnQuery').disable(); component.down('#btnAnnular').disable(); component.down('#btnDelete').disable(); component.down('#btnPrinter').disable();

			store.getProxy().setExtraParam('xxDoc_id', component.down('#doc_id').getValue());
			store.getProxy().setExtraParam('xxRecib_serie', component.down('#recib_serie').getValue());
			store.getProxy().setExtraParam('xxRecib_nro', component.down('#recib_nro').getValue());
		    store.getProxy().setExtraParam('xxFechaini', component.down('#fechaini').getSubmitData());
		    store.getProxy().setExtraParam('xxFechafin', component.down('#fechafin').getSubmitData());
			store.getProxy().setExtraParam('xxConcp_id', component.down('#concp_id').getValue());
			store.getProxy().setExtraParam('xxTippag_id', component.down('#tippag_id').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});
	},

	trb_Clean: function(poComponent) {
		var _store = poComponent.down('#pgtTreasury_recibos').getStore();
		var _pagingtoolbar = poComponent.down('#pgtTreasury_recibos');
		fext_gridClean(_store, _pagingtoolbar);

		poComponent.down('#btnQuery').disable(); poComponent.down('#btnAnnular').disable(); poComponent.down('#btnDelete').disable(); poComponent.down('#btnPrinter').disable();
	},

	trb_Delete: function(pcTypeEdit, poComponent, button, options) {
		if ( options == undefined ) {
	        var _record = poComponent.down('#grdTreasury_recibos').getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }

			Ext.Msg.confirm(translations.confirmar, (pcTypeEdit == '7' ? translations.mensaje_pregunta_eliminar : translations.mensaje_pregunta_anular), function(btn){
				if ( btn == 'yes' ) {
					var _win = Ext.create('Siace.view.public.UsuariosPsw2');
					_win.setCallButton(button);
					_win.setCallKey(_record.data.recib_key);
					_win.setSubTitle(_record.data.recib_documento);
					_win.setFormType(pcTypeEdit == '7' ? '07' : '10');
					_win.show();
				}
			});
		} else {
			var _win = options.win;
			//var _panel = this.getTrb_grdTreasury_Recibos().up('panel');
			var _store = poComponent.down('#grdTreasury_recibos').getStore(); //this.getTrb_grdTreasury_Recibos().getStore();
			var _menu_id = poComponent.getMenuId();
			Ext.get(poComponent.getEl()).mask(translations.mensaje_validando_espere, translations.cargando);
			var _vs = fextpub_sessionVariables();
			Ext.Ajax.request({
				url: 'php/treasury_recibos_delete.php',
				params: { xx0007: 'YES', xxType_edit: pcTypeEdit, xxRecib_key: options.key, xxUsur_psw2: options.usur_psw2, xxRecib_observ: options.observ,
					      zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'], xxMenu_id: _menu_id },
				success: function(conn, response, options, eOpts) {
					var _result = Siace.util.Util.decodeJSON(conn.responseText);
					if ( _result.success ) {
						_win.close(); _win.destroy();
			            _store.load({ callback: function(opt, success, respon) { Ext.get(poComponent.getEl()).unmask(); } });
					} else { Ext.get(poComponent.getEl()).unmask(); Siace.util.Util.showErrorMsg(_result.msg); }
				},
				failure: function(conn, response, options, eOpts) { Ext.get(poComponent.getEl()).unmask(); Siace.util.Util.showErrorMsg(conn.responseText); }
			});
		}
	},

	trb_ViewEdit: function(pcTypeEdit, poComponent) {
		if ( pcTypeEdit == '1' ) {
			if ( poComponent.down('#doc_id').getValue() == '' || poComponent.down('#doc_id').getValue()*1 <= 0 ) {
			    Ext.MessageBox.alert(translations.mensaje, 'Debe indicar el Documento', function() { }); return false ; }
			if ( poComponent.down('#recib_serie').getValue() == '' || poComponent.down('#recib_serie').getValue()*1 <= 0 ) {
				Ext.MessageBox.alert(translations.mensaje, 'Debe indicar la Serie del Documento', function() { poComponent.down('#recib_serie').focus(); }); return false ; }
		} else if ( fjsIn_array(pcTypeEdit, ['2','3']) ) {
	    	var _record = poComponent.down('#grdTreasury_recibos').getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }
	    }

		Ext.get(poComponent.getEl()).mask(translations.mensaje_esperar, 'loading');
	    var _win = Ext.create('Siace.view.treasury.RecibosEdit');
	    _win.setTypeEdit(pcTypeEdit); _win.setCallStore(poComponent.down('#grdTreasury_recibos').getStore());
	    if ( pcTypeEdit == '1' ) { _win.setDoc_id(poComponent.down('#doc_id').getValue()); _win.setRecib_serie(poComponent.down('#recib_serie').getValue()); }
	    else if (fjsIn_array(pcTypeEdit, ['2','3'])) { _win.setCallKey(_record.data.recib_key); }
	    _win.show();
	    Ext.get(poComponent.getEl()).unmask();
	},

	trb_opc_idChange: function(combo, newValue, oldValue, options) {
		combo.up('panel').down('#btnNew').setDisabled(fextpub_uamoButtons(combo, 1));
	},

	trb_btnNewClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 1) ) { return false; } this.trb_ViewEdit('1', button.up('panel'));
	},

	trb_btnQueryClick: function(button, e, options) {
        if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 3) ) { return false; } this.trb_ViewEdit('3', button.up('panel'));
	},

	trb_btnAnnularClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 10) ) { return false; } this.trb_Delete('10', button.up('panel'), button, options);
	},

	trb_btnDeleteClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 7) ) { return false; }  this.trb_Delete('7', button.up('panel'), button, options);
	},

	trb_btnHideClick: function(button, e, options) {
    	var _ventimp = window.open('', '');
    	_ventimp.document.write('<html><head><link rel="stylesheet" type="text/css" href="resources/css/style_printer.css?version=19"><\/head><body style=\"background-color: #FFFFFF\">');
    	_ventimp.document.write(options);
    	_ventimp.document.close();
	},

	trb_btnPrinterClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 8) ) { return false; } 
		var _panel = button.up('panel');
		var _record = _panel.down('#grdTreasury_recibos').getSelectionModel().getSelection()[0];
		if ( !_record ) { return false; }
		Ext.Ajax.request({
		    method: 'POST', url: 'php/treasury_recibos_printer.php',
			params: { xxRecib_key: _record.data.recib_key,  xxType_record: 'printer', xxOrder_by: 'recib_key' },
			success : function(response, options) {
				_panel.down('#btnHide').fireEvent('click', _panel.down('#btnHide'), '', response.responseText);
			},
			failure : function(response, options) { }
		});
	},

	trb_concp_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.trb_Clean(combo.up('panel')); }
	},

	trb_doc_idChange: function(combo, newValue, oldValue, options) {
		fextpub_documentos_seriesLoad({'panel': combo.up('panel'), 'itemId': 'recib_serie'});
		if ( oldValue !== undefined ) { this.trb_Clean(combo.up('panel')); }
	},

	trb_fechainiChange: function(datefield, newValue, oldValue, options) {
		this.trb_Clean(datefield.up('panel'));
	},

	trb_fechafinChange: function(datefield, newValue, oldValue, options) {
		this.trb_Clean(datefield.up('panel'));
	},

	trb_grdTreasury_recibosSelectionchange: function(model, record, options) {			
		if ( record.length == 1 ) {
			var _panel = model.view.panel.up('panel'); var _cboOpc_id = _panel.down('#opc_id'); _flga = record[0].data.recib_flga;
			//_panel.down('#btnModify').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 2));
			//_panel.down('#btnQuery').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 3));
			_panel.down('#btnAnnular').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 10));
			_panel.down('#btnDelete').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 7));
			_panel.down('#btnPrinter').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 8));
		}
	},

	trb_recib_serieChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.trb_Clean(combo.up('panel')); }
	},

	trb_recib_nroChange: function(textfield, newValue, oldValue, options) {
		this.trb_Clean(textfield.up('panel'));
	},

	trb_tippag_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.trb_Clean(combo.up('panel')); }
	},

	tre_BeforeShow: function(component, options) {
		var _typeEdit = component.getTypeEdit();
		component.down('#recib_serie').bindStore(Ext.create('Siace.store.public.Documentos_Series'));
		component.down('#tablex_key').bindStore(Ext.create('Siace.store.treasury.Recibos'));
		component.down('#entibanc_id').bindStore(Ext.create('Siace.store.public.Tablas_Generales'));
		component.down('#cuebanc_key').bindStore(Ext.create('Siace.store.treasury.Cuentas_Bancarias'));

		var _cboConcp_id = component.down('#concp_id');
		_cboConcp_id.bindStore(Ext.create('Siace.store.treasury.Conceptos'));
		component.down('#tipcamb_id').bindStore(Ext.create('Siace.store.public.Tipos_Cambio'));

		var _storeRD = Ext.create('Siace.store.treasury.Recibos_Det');
		component.down('#grdTreasury_recibos_det').bindStore(_storeRD);

		var _cboRecib_serie = component.down('#recib_serie');
        if ( _typeEdit == '1' ) {
        	var _icon = 'icon_New_90'; var _title = translations.treasury_recibosedit_title_new;
        	component.down('#doc_id').setValue(component.getDoc_id());
        	_cboConcp_id.getStore().load({ params: { xxConcp_estado: (component.getDoc_id()=='511' ? '1' : '3'), xxType_record: 'combo_codename_need' } });
			_cboRecib_serie.getStore().add({ docser_serie: component.getRecib_serie(), docser_format: fjsLpad(component.getRecib_serie(), 3, '0'), });
			_cboRecib_serie.setValue(component.getRecib_serie());
			component.down('#tipdocident_id').removeCls('myDisabledClass'); component.down('#tipdocident_id').addCls('x-item-disabled'); component.down('#tipdocident_id').disable();
			if ( component.getDoc_id() == '515' ) { component.down('#cntNexos').setVisible(true); }
			component.down('#tippag_id').setValue(component.getDoc_id()=='511' ? 1 : 5); component.down('#tippag_id').setDisabled(component.getDoc_id()=='511' ? false : true); 
			component.down('#mone_id').setValue(1);
        } else if ( fjsIn_array(_typeEdit, ['2','3']) ) {
        	_cboConcp_id.getStore().load({ params: { xxConcp_estado: '1', xxType_record: 'combo_codename_need' } });
	        var _form = component.down('form');
	   		_form.load({
	   			method: 'POST', url: 'php/treasury_recibos_json_records.php',
	            params: { xxRecib_key: component.getCallKey(), xxType_record: 'form', xxOrder_by: 'r.recib_id' },
	            waitMsg: 'Loading...',
	            success: function (form, action) {
	                try {
	                    var _model = Ext.create('Siace.model.treasury.Recibo');
	                    var _result = Ext.decode(action.response.responseText);
	                    if ( _result.data[0] ) {
	                        _model.set(_result.data[0]);  _form.loadRecord(_model);
							_cboRecib_serie.getStore().add({ docser_serie: _model.data.recib_serie, docser_format: fjsLpad(_model.data.recib_serie, 3, '0'), });
							_cboRecib_serie.setValue(_model.data.recib_serie);
							component.down('#recib_nro').setValue(fjsLpad(_model.data.recib_nro, 6, '0'));
							if ( _model.data.tipdocident_id == '3' ) {
								component.down('#pers_key').setValue(_model.data.pers_key);
								component.down('#pers_ruc').setValue(_model.data.pers_ruc);
								component.down('#pers_nombre').setValue(_model.data.pers_nombre);
							} else if ( _model.data.tipdocident_id == '1' ) {
								component.down('#indiv_key').setValue(_model.data.indiv_key);
								component.down('#indiv_dni').setValue(_model.data.indiv_dni);
								component.down('#indiv_apenom').setValue(_model.data.indiv_apenom);
							}
							if ( _model.data.tippag_id == '4' ) {
								component.down('#entibanc_id').setValue(_model.data.tablex_id);
								component.down('#cheq_nro').setValue(_model.data.tablex_nro);
							} else if ( _model.data.tippag_id == '5' ) {
								component.down('#cuebanc_key').setValue(_model.data.tablex_key);
								component.down('#oper_nro').setValue(_model.data.tablex_nro);
							}
        					component.down('#grdTreasury_recibos_det').getStore().load({
        						params: { xxRecib_key: component.getCallKey(), xxType_record: 'form' }
        					});							
	                    }
	                }
	                catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
	            },
	            failure: function (form, action) {
	                Ext.Msg.alert("Load failed", action.result.errorMessage);
	            }
	        });

        	if ( _typeEdit == '2' ) { 
        		var _icon = 'icon_Modify_90'; var _title = translations.treasury_recibosedit_title_modify;
        	} else { 
        		var _icon = 'icon_Query_90'; var _title = translations.treasury_recibosedit_title_query; 
				component.down('#recib_nro').disable(); component.down('#recib_fecha').disable(); component.down('#concp_id').disable();
				component.down('#tippag_id').disable(); component.down('#mone_id').disable(); component.down('#recib_monto').disable();
				component.down('#recib_observ').disable();
				component.down('#btnSave').setDisabled(true); component.down('#btnUndo').setDisabled(true); component.down('#btnExit').setDisabled(false);

        	}
        }
        component.setIconCls(_icon); component.setTitle(_title);
	},

	tre_Close: function(panel, options) {
		if ( this.getPis_Public_IndividuosSearch() !== undefined ) { this.getPis_Public_IndividuosSearch().close();  this.getPis_Public_IndividuosSearch().destroy(); }
		if ( this.getPps_Public_PersonasSearch() !== undefined ) { this.getPps_Public_PersonasSearch().close();  this.getPps_Public_PersonasSearch().destroy(); }
		if ( this.getTvsxc_Treasury_VentasSearchxCharge() !== undefined ) { this.getTvsxc_Treasury_VentasSearchxCharge().close();  this.getTvsxc_Treasury_VentasSearchxCharge().destroy(); }
	},

	tre_btnSaveClick: function(button, e, options) {
	    var _win = button.up('window'); var _frm = _win.down('form');
	    if ( _win.down('#recib_nro').getValue() == '' || _win.down('#recib_nro').getValue()*1 <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el NUMERO del Recibo', function() { _frm.down('#recib_nro').focus(); }); return false ; }
	    if ( !_win.down('#recib_fecha').isValid() ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar la FECHA del documento', function() { _frm.down('#recib_fecha').focus(); }); return false ; }
	    if ( _win.down('#concp_id').getValue() == '' || _win.down('#concp_id').getValue() == null ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el CONCEPTO del Recibo', function() { _frm.down('#concp_id').focus(); }); return false ; }
	    if ( !_win.down('#pers_ruc').isDisabled() && _win.down('#pers_key').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el Cliente', function() { _frm.down('#pers_ruc').focus(); }); return false ; }
	    if ( !_win.down('#indiv_dni').isDisabled() && _win.down('#indiv_key').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el Cliente', function() { _frm.down('#indiv_dni').focus(); }); return false ; }
		if ( _win.down('#doc_id').getValue() == '515' && (_win.down('#tablex_key').getValue() == '' || _win.down('#tablex_key').getValue() == null) ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar Recibo de REFERENCIA', function() { _frm.down('#tablex_key').focus(); }); return false ; }
	    if ( _win.down('#tippag_id').getValue() == '4' && (_win.down('#entibanc_id').getValue() == '' || _win.down('#entibanc_id').getValue() == null) ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar la ENTIDAD BANCARIA a la que corresponde el cheque', function() { _frm.down('#entibanc_id').focus(); }); return false ; }
	    if ( _win.down('#tippag_id').getValue() == '4' && _win.down('#cheq_nro').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el Número de Cheque', function() { _frm.down('#cheq_nro').focus(); }); return false ; }
	    if ( _win.down('#tippag_id').getValue() == '5' && (_win.down('#cuebanc_key').getValue() == '' || _win.down('#cuebanc_key').getValue() == null) ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar la CUENTA BANCARIA a la que corresponde el depósito', function() { _frm.down('#cuebanc_key').focus(); }); return false ; }
		if ( _win.down('#doc_id').getValue() == '511' ) {
	    	if ( _win.down('#tippag_id').getValue() == '5' && _win.down('#oper_nro').getValue() == '' ) {
	    		Ext.Msg.alert(translations.mensaje, 'Debe indicar el Número de Operación', function() { _frm.down('#oper_nro').focus(); }); return false ; }
	    }
		if ( _win.down('#mone_id').getValue()*1 <= 0 ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar la MONEDA del documento', function() { _win.down('#mone_id').focus(); }); return false ; }
		if ( _win.down('#recib_monto').getValue()*1 <= 0 ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar el IMPORTE del documento', function() { _win.down('#recib_monto').focus(); }); return false ; }
		if ( !_win.down('#panDetalle').isDisabled() ) {
			if ( _win.down('#recib_monto_saldo').getValue()*1 !== 0 ) {
				Ext.Msg.alert(translations.mensaje, 'Aun queda un SALDO en el recibo', function() { _win.down('#btnAdd').focus(); }); return false ; }
		}

		if ( !_win.down('#panDetalle').isDisabled() ) {
			var _detalle = ''; _recib_monto_pago = 0.00;
			var _recRD = _win.down('#grdTreasury_recibos_det').getStore().getRange();
			for ( var _i = 0;  _i < _recRD.length; _i++ ) {
				_detalle += (_i == 0 ? '' : ',') +'{'+ _recRD[_i].get('tablex_key') +','+ _recRD[_i].get('mone_id') +','+ _recRD[_i].get('recibdet_monto') +','+ _recRD[_i].get('recibdet_monto_debe') +','+ _recRD[_i].get('tipcamb_monto') +','+ _recRD[_i].get('tipcamb_oper') +','+ _recRD[_i].get('recibdet_monto_pago') +','+ _recRD[_i].get('recibdet_monto_pago_real') +','+ _recRD[_i].get('recibdet_monto_saldo') +'}';
				_recib_monto_pago += (fjsRound(_recRD[_i].get('recibdet_monto_pago_real'), 2)*1);
			}
			if ( _detalle == '' ) { Ext.Msg.alert(translations.mensaje, 'Documento no registra detalle', function() { _frm.down('#btnAdd').focus(); }); return false ; }
			if ( fjsRound(_recib_monto_pago,2)*1 !== _win.down('#recib_monto').getValue()*1 ) { Ext.Msg.alert(translations.mensaje, 'Importe en sumatoria de detalle ['+_recib_monto_pago+'], es diferente al importe del documento de venta ['+_win.down('#recib_monto').getValue()+']', function() { }); return false ; }
		} else {
			var _detalle = '{0}';
		}

	    if ( _frm.getForm().isValid() ) {
			Ext.Msg.confirm(translations.confirmar, translations.mensaje_pregunta_guardar, function(btn){
			if ( btn == 'yes' ) {
			    var _vs = fextpub_sessionVariables();
			    _frm.getForm().submit({
					method: 'POST', url: 'php/treasury_recibos_save.php',
					params:{ xx0005: 'YES',   xxType_edit: _win.getTypeEdit(),
						     xxDoc_id: _win.down('#doc_id').getValue(), xxRecib_serie: _win.down('#recib_serie').getValue(), xxRecib_nro: _win.down('#recib_nro').getValue(), xxRecib_fecha: _win.down('#recib_fecha').getSubmitData(),
						     xxConcp_id: _win.down('#concp_id').getValue(), xxTipdocident_id: _win.down('#tipdocident_id').getValue(), xxPers_key: (_win.down('#tipdocident_id').getValue() == '3' ? _win.down('#pers_key').getValue(): _win.down('#indiv_key').getValue()),
						     xxTippag_id: _win.down('#tippag_id').getValue(),  xxMone_id: _win.down('#mone_id').getValue(), xxDetalle: _detalle,
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

	tre_btnUndoClick: function(button, e, options) {
		button.up('window').close();
	},

	tre_btnExitClick: function(button, e, options) {
		button.up('window').close();
	},

	tre_btnAddClick: function(button, e, options) {
		var _win = button.up('window');
		if ( _win.down('#recib_fecha').getValue() == '' || !_win.down('#recib_fecha').isValid() ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar la FECHA del documento', function() { _win.down('#recib_fecha').focus(); }); return false ; }
		if ( _win.down('#pers_ruc').isVisible() && _win.down('#pers_key').getValue() == '' ) { 
			Ext.Msg.alert(translations.mensaje, 'Debe indicar el CLIENTE', function() { _win.down('#pers_ruc').focus(); }); return false ; }
		if ( _win.down('#mone_id').getValue()*1 <= 0 ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar la MONEDA del documento', function() { _win.down('#mone_id').focus(); }); return false ; }
		if ( _win.down('#recib_monto').getValue()*1 <= 0 ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar el IMPORTE del documento', function() { _win.down('#recib_monto').focus(); }); return false ; }
		if ( _win.down('#recib_monto_saldo').getValue()*1 <= 0 ) {
			Ext.Msg.alert(translations.mensaje, 'Importe es INSUFICIENTE', function() { _win.down('#recib_monto').focus(); }); return false ; }

		Ext.get(_win.getEl()).mask('Por favor espere un momento...', 'loading');
		if ( _win.down('#pers_ruc').isVisible() ) {
			var _wavsxc = this.getTvsxc_Treasury_VentasSearchxCharge();
    		if ( _wavsxc == undefined ) {
        		_wavsxc = Ext.create('Siace.view.treasury.VentasSearchxCharge');
        		_wavsxc.setTitle(translations.treasury_ventassearchxcharge_title);
        		_wavsxc.setTypeReturn('ADD_RECIBOS');
        	}
        	_wavsxc.show(); 
        	if ( _wavsxc.getPers_key() !== _win.down('#pers_key').getValue() ) {
        		_wavsxc.down('#pers_nombre').setValue( _win.down('#pers_ruc').getValue() +' - '+ _win.down('#pers_nombre').getValue() );
        		_wavsxc.setPers_key(_win.down('#pers_key').getValue());
        		_wavsxc.down('#grdTreasury_ventas').getStore().load();
        	}
        } else if ( _win.down('#indiv_dni').isVisible() ) {
    	}
    	Ext.get(_win.getEl()).unmask();
	},

	tre_btnSuppressClick: function(button, e, options) {
		var _record = this.getTre_grdTreasury_Recibos_Det().getSelectionModel().getSelection()[0];
        if ( _record ) {
        	button.disable();
        	this.getTre_grdTreasury_Recibos_Det().getStore().remove(_record);
        	var _win = button.up('window');
        	_win.down('#recib_monto_pago').setValue( _win.down('#recib_monto_pago').getValue()*1 - _record.data.recibdet_monto_pago_real*1 );
        	_win.down('#recib_monto_saldo').setValue( _win.down('#recib_monto_saldo').getValue()*1 + _record.data.recibdet_monto_pago_real*1 );
		}
	},

	tre_btnIndiv_searchClick: function(button, e, options) {
 		fext_windowSearch(this.getPis_Public_IndividuosSearch(), button.up('window'), 'Siace.view.public.IndividuosSearch', translations.public_individuossearch_title, button.up('window').down('#indiv_key').getValue(), '', '', false);
	},

	tre_btnPers_searchClick: function(button, e, options) {
		fext_windowSearch(this.getPps_Public_PersonasSearch(), button.up('window'), 'Siace.view.public.PersonasSearch', translations.public_personassearch_title_cliente, button.up('window').down('#pers_key').getValue(), 'ONLY_WITH_RUC', '', false);
	},

	tre_concp_idChange: function(combo, newValue, oldValue, options) {
		var _record = combo.getStore().findRecord('concp_id', newValue);
		var _win = combo.up('window');
		if ( _record.data.concp_need_identity == '0' ) {
			fext_removeAddCls(_win.down('#tipdocident_id'), 'myDisabledClass', 'x-item-disabled'); _win.down('#tipdocident_id').disable(); _win.down('#tipdocident_id').setValue('');
		} else {
			fext_removeAddCls(_win.down('#tipdocident_id'), 'x-item-disabled', 'myDisabledClass');
			if ( _record.data.concp_need_identity == '1' ) {
				_win.down('#tipdocident_id').setValue(1); _win.down('#tipdocident_id').disable();
			} else {
				_win.down('#tipdocident_id').setValue(3);
				if ( fjsIn_array(_win.getTypeEdit(), ['1','2']) ) {
					_win.down('#tipdocident_id').setDisabled(_record.data.concp_need_identity == '3' ? true : false);
				}
			}
		}

		_win.down('#tbpTabs').setActiveTab(_record.data.concp_need_docs == '0' ? 1 : 0);
		_win.down('#panDetalle').setDisabled(_record.data.concp_need_docs == '0' ? true : false);
	},

	tre_cuebanc_keyChange: function(combo, newValue, oldValue, options) {
		if ( newValue !== null ) {
			var _record = combo.getStore().findRecord('cuebanc_key', newValue);
			combo.up('window').down('#mone_id').setValue(_record.data.mone_id);
		}
	},

	tre_grdTreasury_recibos_detAdd: function(recordAdd) {
		var _win = this.getTre_grdTreasury_Recibos_Det().up('window'); var _close = false;

		if ( _win.down('#pers_key').getValue !== '' && _win.down('#recib_fecha').getValue !== '' ) {
			var _storeRD = _win.down('#grdTreasury_recibos_det').getStore();
			var _recordRD = _storeRD.findRecord('tablex_key', recordAdd.data.vent_key);
	        if ( _recordRD == null ) {
	        	if ( recordAdd.data.mone_id == _win.down('#mone_id').getValue() ) {
		        	_storeRD.add({ tablex_key: recordAdd.data.vent_key, tablex_documento: recordAdd.data.vent_documento, tablex_fecha: recordAdd.data.vent_fecha, mone_id: recordAdd.data.mone_id, mone_abrev: recordAdd.data.mone_abrev, recibdet_monto: recordAdd.data.vent_monto, recibdet_monto_debe: recordAdd.data.vent_monto_saldo });
					_recordRD = _storeRD.findRecord('tablex_key', recordAdd.data.vent_key);
					if ( _win.down('#recib_monto_saldo').getValue()*1 >= recordAdd.data.vent_monto_saldo*1) {
						_recordRD.set('recibdet_monto_pago', recordAdd.data.vent_monto_saldo);
						_recordRD.set('recibdet_monto_pago_real', recordAdd.data.vent_monto_saldo);
						_recordRD.set('recibdet_monto_saldo', 0.00);
						_recordRD.commit();
						_win.down('#recib_monto_pago').setValue( _win.down('#recib_monto_pago').getValue()*1 + recordAdd.data.vent_monto_saldo*1 );
						_win.down('#recib_monto_saldo').setValue( _win.down('#recib_monto_saldo').getValue()*1 - recordAdd.data.vent_monto_saldo*1 );
					} else {
						_recordRD.set('recibdet_monto_pago', _win.down('#recib_monto_saldo').getValue()*1);
						_recordRD.set('recibdet_monto_pago_real', _win.down('#recib_monto_saldo').getValue()*1);
						_recordRD.set('recibdet_monto_saldo', recordAdd.data.vent_monto_saldo*1 - _win.down('#recib_monto_saldo').getValue()*1);
						_recordRD.commit();
						_win.down('#recib_monto_pago').setValue( _win.down('#recib_monto').getValue()*1 );
						_win.down('#recib_monto_saldo').setValue( 0.00 );
					}
		        	_close = true; _win.down('#concp_id').disable(); _win.down('#tipdocident_id').disable(); _win.down('#pers_ruc').disable(); _win.down('#btnPers_search').disable(); _win.down('#mone_id').disable();
				} else {
	        		if ( _win.down('#tipcamb_id').getStore().data.items.length == 0 ) {
	        			var _me = this;  _close = true; 
						_win.down('#tipcamb_id').getStore().load({
							params: { xxTipcamb_fecha: _win.down('#recib_fecha').getSubmitData(), xxMone_01: _win.down('#mone_id').getValue(), xxMone_02: recordAdd.data.mone_id, xxType_record: 'data' }, 
							callback: function(records, operations, success) {
								if ( records.length == 1 ) { 
									_win.down('#tipcamb_id').setValue(records[0].data.tipcamb_id); 
									_me.tre_grdTreasury_recibos_detAddME(_win, recordAdd);
									_win.down('#concp_id').disable(); _win.down('#tipdocident_id').disable(); _win.down('#pers_ruc').disable(); _win.down('#btnPers_search').disable(); _win.down('#mone_id').disable();
								}
							}
						});
					} else {
						this.tre_grdTreasury_recibos_detAddME(_win, recordAdd);
						_close = true; _win.down('#concp_id').disable(); _win.down('#tipdocident_id').disable(); _win.down('#pers_ruc').disable(); _win.down('#btnPers_search').disable(); _win.down('#mone_id').disable();						
					}
	        	}
		    } else {
		    	Ext.Msg.alert(translations.mensaje, 'Documento seleccionado ya se encuentra establecido en el Detalle');
		    }
		}

		return _close;
	},

	tre_grdTreasury_recibos_detAddME: function(poWindow, recordAdd) {
		var _record = poWindow.down('#tipcamb_id').getStore().findRecord('tipcamb_id', poWindow.down('#tipcamb_id').getValue());
		var _oper = (recordAdd.data.mone_id == _record.data.mone_01 ? _record.data.tipcamb_oper01 : _record.data.tipcamb_oper02);

   		var _storeRD = poWindow.down('#grdTreasury_recibos_det').getStore();
       	_storeRD.add({ tablex_key: recordAdd.data.vent_key, tablex_documento: recordAdd.data.vent_documento, tablex_fecha: recordAdd.data.vent_fecha, mone_id: recordAdd.data.mone_id, mone_abrev: recordAdd.data.mone_abrev, recibdet_monto: recordAdd.data.vent_monto, recibdet_monto_debe: recordAdd.data.vent_monto_saldo, tipcamb_monto: _record.data.tipcamb_venta, tipcamb_oper: _oper });
		var _recordRD = _storeRD.findRecord('tablex_key', recordAdd.data.vent_key);
		if ( _oper == '3' ) { var _monto_saldo = fjsRound(poWindow.down('#recib_monto_saldo').getValue()*1 * _record.data.tipcamb_venta*1, 2)*1; }
		else { var _monto_saldo = fjsRound(poWindow.down('#recib_monto_saldo').getValue()*1 / _record.data.tipcamb_venta*1, 2); }
		
		if ( _monto_saldo >= recordAdd.data.vent_monto_saldo*1 ) {
			_recordRD.set('recibdet_monto_pago', recordAdd.data.vent_monto_saldo);
			if ( _oper == '3' ) { _recordRD.set('recibdet_monto_pago_real', fjsRound((recordAdd.data.vent_monto_saldo*1)/(_record.data.tipcamb_venta*1),2)); }
			else { _recordRD.set('recibdet_monto_pago_real', fjsRound((recordAdd.data.vent_monto_saldo*1)*(_record.data.tipcamb_venta*1),2)); }
			_recordRD.set('recibdet_monto_saldo', 0.00);
			_recordRD.commit();
			var _monto_pago = (poWindow.down('#recib_monto_pago').getValue()*1) + (_recordRD.data.recibdet_monto_pago_real*1);
			poWindow.down('#recib_monto_pago').setValue(_monto_pago*1);
			poWindow.down('#recib_monto_saldo').setValue(poWindow.down('#recib_monto_saldo').getValue()*1 - _monto_pago*1);
		} else {
			_recordRD.set('recibdet_monto_pago', _monto_saldo*1);
			_recordRD.set('recibdet_monto_pago_real', poWindow.down('#recib_monto_saldo').getValue()*1);
			_recordRD.set('recibdet_monto_saldo', (recordAdd.data.vent_monto_saldo*1 - _monto_saldo)*1);
			_recordRD.commit();
			poWindow.down('#recib_monto_pago').setValue(poWindow.down('#recib_monto').getValue()*1);
			poWindow.down('#recib_monto_saldo').setValue(0.00);
		}
	},

	tre_grdTreasury_recibos_detSelectionchange: function(model, record, options) {
		var _win = this.getTre_grdTreasury_Recibos_Det().up('window');
		if ( record.length == 1 ) { 
			_win.down('#btnSuppress').setDisabled(false);
		}
	},

	tre_indiv_dniBlur: function(textfield, The, options) {
		this.tre_indiv_dniSearch('0', textfield.up('form'));
	},

	tre_indiv_dniFocus: function(textfield, The, options) {
		this.tre_indiv_dniSearch('1', textfield.up('form'));
	},

	tre_indiv_dniKeypress: function(textfield, e, options) {
		if( e.getCharCode() == 13 ) { this.tre_indiv_dniSearch('13', textfield.up('form')); }
	},

	tre_indiv_dniSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['indiv_key', 'INDIV_DNI', 'indiv_dni', 'indiv_apenom'], 
			            ['php/public_individuos_json_records.php', 'xxIndiv_dni', 'textfield_search', ''], '1', 
			            ['Siace.view.public.IndividuosEdit', translations.public_individuossedit_title_new, ['indiv_dni'], '']);
	},

	tre_pers_keyChange: function(combo, newValue, oldValue, options) {
		var _win = combo.up('window');
		if ( _win.getTypeEdit() == '1' && _win.down('#doc_id').getValue() == '515' ) {
			var _cboTablex_key = _win.down('#tablex_key');
			_cboTablex_key.getStore().removeAll();
			if ( newValue == '' ) { 
				_cboTablex_key.setValue('');
			} else {
				_cboTablex_key.getStore().load({ 
					params: { xxPers_key: newValue, xxType_record: 'combo_recibosedit', xxType_query: 'CONCEPTO_'+_win.down('#concp_id').getValue(), xxOrder_by: 'recib_documento' },
					callback: function(records, operations, success) { }
				});
			}
		}
	},

	tre_pers_rucBlur: function(textfield, e, options) {
		this.tre_pers_rucSearch('0', textfield.up('form'));
	},

	tre_pers_rucFocus: function(textfield, e, options) {
		this.tre_pers_rucSearch('1', textfield.up('form'));
	},

	tre_pers_rucKeypress: function(textfield, e, options) {
		if( e.getCharCode() == 13 ) { this.tre_pers_rucSearch('13', textfield.up('form')); }
	},

	tre_pers_rucSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['pers_key', 'PERS_RUC', 'pers_ruc', 'pers_nombre'],
			            ['php/public_personas_json_records.php', 'xxPers_ruc', 'textfield_search', ''], '1',
			            ['Siace.view.public.PersonasEdit', translations.public_personasedit_title_new, ['pers_ruc'], ''], '');
	},

	tre_recib_montoChange: function(textfield, e, optioChange){
		var _win = textfield.up('window');
		_win.down('#recib_monto_saldo').setValue( textfield.getValue()*1 - _win.down('#recib_monto_pago').getValue()*1 );
	},

	tre_tablex_keyChange: function(combo, newValue, oldValue, options) {
		var _win = combo.up('window');
		if ( _win.getTypeEdit() == '1' ) {
			if ( newValue == '' ) { 
				_win.down('#cuebanc_key').disable(); _win.down('#oper_nro').disable();
				_win.down('#cuebanc_key').setValue(''); _win.down('#oper_nro').setValue('');
			} else {
				var _record = combo.getStore().findRecord('recib_key', combo.getValue());
				if ( _record.data.tippag_id == '5' ) {
					_win.down('#cuebanc_key').disable(); _win.down('#oper_nro').disable();
					_win.down('#cuebanc_key').setValue(_record.data.tablex_key);
					_win.down('#oper_nro').setValue(_record.data.tablex_nro);
				} else {
					_win.down('#cuebanc_key').enable(); _win.down('#oper_nro').disable();
					_win.down('#cuebanc_key').setValue(''); _win.down('#oper_nro').setValue('');
				}
			}
		}
	},

	tre_tipdocident_idChange: function(combo, newValue, oldValue, options) {
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

	tre_tippag_idChange: function(combo, newValue, oldValue, options) {
		var _win = combo.up('window');
		if ( newValue == '1' ) {
			_win.down('#entibanc_id').removeCls('myDisabledClass'); _win.down('#entibanc_id').addCls('x-item-disabled'); _win.down('#entibanc_id').disable(); _win.down('#entibanc_id').setValue(''); _win.down('#cheq_nro').setVisible(false); _win.down('#cheq_nro').setValue('');
			_win.down('#cuebanc_key').removeCls('myDisabledClass'); _win.down('#cuebanc_key').addCls('x-item-disabled'); _win.down('#cuebanc_key').disable(); _win.down('#cuebanc_key').setValue(''); _win.down('#oper_nro').setVisible(false); _win.down('#oper_nro').setValue('');
			_win.down('#mone_id').setDisabled(fjsIn_array(_win.getTypeEdit(), ['1','2']) ? false : true);
		} else if ( newValue == '4' ) {
			_win.down('#entibanc_id').removeCls('x-item-disabled'); _win.down('#entibanc_id').addCls('myDisabledClass'); _win.down('#entibanc_id').setDisabled(_win.getTypeEdit() == '1' ? false : true);  _win.down('#cheq_nro').setVisible(true);  _win.down('#cheq_nro').setDisabled(_win.getTypeEdit() == '1' ? false : true);
			_win.down('#cuebanc_key').removeCls('myDisabledClass'); _win.down('#cuebanc_key').addCls('x-item-disabled'); _win.down('#cuebanc_key').disable(); _win.down('#cuebanc_key').setValue(''); _win.down('#oper_nro').setVisible(false); _win.down('#oper_nro').setValue('');
			if ( _win.down('#entibanc_id').getStore().getCount() == '0' ) {
				_win.down('#entibanc_id').getStore().load({ params: { xxTabgen_parent: '200', xxType_record: 'combo', xxOrder_by: 'tabgen_nombre' } })
			}
			_win.down('#mone_id').setDisabled(fjsIn_array(_win.getTypeEdit(), ['1','2']) ? false : true);
		} else {
			_win.down('#entibanc_id').removeCls('myDisabledClass'); _win.down('#entibanc_id').addCls('x-item-disabled'); _win.down('#entibanc_id').disable(); _win.down('#entibanc_id').setValue(''); _win.down('#cheq_nro').setVisible(false); _win.down('#cheq_nro').setValue('');
			_win.down('#cuebanc_key').removeCls('x-item-disabled'); _win.down('#cuebanc_key').addCls('myDisabledClass'); _win.down('#cuebanc_key').setDisabled(_win.getTypeEdit() == '1' ? false : true); _win.down('#oper_nro').setVisible(true); _win.down('#oper_nro').setDisabled(_win.getTypeEdit() == '1' && _win.down('#doc_id').getValue()=='511'? false : true);
			if ( _win.down('#cuebanc_key').getStore().getCount() == '0' ) {
				_win.down('#cuebanc_key').getStore().load({ params: { xxType_record: 'combo_recibo', xxOrder_by: 'cuebanc_nro' } })
			}
			_win.down('#mone_id').disable();
		}
	},

	/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
 	trr_BeforeRender: function(component, options) {
		var _str = Ext.create('Ext.data.Store', {
			fields: [ { name: 'typrec_id', type: 'string' }, { name: 'typrec_nombre', type: 'string' }, ],
			data: [
				{ typrec_id: 'REPORT', typrec_nombre: 'Registro de Recibos' },
				{ typrec_id: 'REPORT_DETAIL', typrec_nombre: 'Registro de Recibos - Detalle' },
				{ typrec_id: 'REPORT_CONSOLIDADO_CONCEPTO', typrec_nombre: 'Consolidado por Concepto' },
			]
		});
		var _cboType_record = component.down('#type_record');
		_cboType_record.bindStore(_str);
		_cboType_record.getStore().load({ callback: function(records, operations, success) {  _cboType_record.setValue('REPORT'); } });
		fextpub_documentosFilter({'objeto': component.down('#doc_id'), 'doc_escobro': '1'});
		fexttre_conceptosFilter({'objeto': component.down('#concp_id')});
		fextpub_tipos_pagoFilter({'objeto': component.down('#tippag_id'), 'tippag_esventa': '1'});
	},

	trr_Close: function(panel, options) {
	},

	trr_ViewReport: function(poComponent, pcFormat){
		if ( !poComponent.down('#fechaini').isValid() ) {
			Ext.Msg.alert(translations.mensaje, 'Fecha Inicial NO es Válida', function() { poComponent.down('#fechaini').focus(); }); return false ; }
		if ( !poComponent.down('#fechafin').isValid() ) {
			Ext.Msg.alert(translations.mensaje, 'Fecha Final NO es Válida', function() { poComponent.down('#fechafin').focus(); }); return false ; }

		var _type_record = poComponent.down('#type_record').getValue();
		var _fechaini = fjsDateSQL(poComponent.down('#fechaini').getRawValue());  var _fechafin = fjsDateSQL(poComponent.down('#fechafin').getRawValue());

		var _get = 'xxFormat='+pcFormat +'&xxType_record='+_type_record +'&xxDoc_id='+poComponent.down('#doc_id').getValue() +'&xxDoc_nombre='+poComponent.down('#doc_id').getRawValue() +'&xxConcp_id='+poComponent.down('#concp_id').getValue() + '&xxConcp_codename='+poComponent.down('#concp_id').getRawValue() +'&xxTippag_id='+poComponent.down('#tippag_id').getValue() + '&xxTippag_nombre='+poComponent.down('#tippag_id').getRawValue() +'&xxMone_id='+poComponent.down('#mone_id').getValue() +'&xxMone_nombre='+poComponent.down('#mone_id').getRawValue() +'&xxFechaini='+_fechaini +'&xxFechafin='+_fechafin;
		if ( fjsIn_array(_type_record, ['REPORT']) ) {
        	fext_pdf('', translations.pdf_treasury_ventas_report_title, 'php/pdf/pdf_treasury_recibos_report.php?'+_get);
		} else if ( fjsIn_array(_type_record, ['REPORT_CONSOLIDADO_CONCEPTO']) ) {
        	fext_pdf('', translations.pdf_treasury_ventas_report_title, 'php/pdf/pdf_treasury_recibos_report_consolidado.php?'+_get);
		} else if ( fjsIn_array(_type_record, ['SALIDAS_DETALLE_ADUANA']) ) {
			fext_pdf('', translations.pdf_operations_almacenes_report_stock_title, 'php/pdf/pdf_operations_salidas_det_report_aduana.php?xxAlma_key='+_alma_key+'&xxFechaini='+_fechaini+'&xxFechafin='+_fechafin+'&xxType_record='+_type_report+'&xxType_query='+_type_report);
		}
	},

	trr_btnPdfClick: function(button, e, options) {
		this.trr_ViewReport(button.up('panel'), 'P');
	},

	trr_btnExcelClick: function(button, e, options) {
		this.trr_ViewReport(button.up('panel'), 'E');
	},

	/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	trs_BeforeRender: function(component, options) {
		var _cboBsg_id = component.down('#bsg_id');
		_cboBsg_id.bindStore(Ext.create('Siace.store.public.recibos_Grupos'));
		this.trs_bst_idChange(component.down('#bst_id'), '1', undefined, '');

		var _cboBscat_id = component.down('#bscat_id');
		_cboBscat_id.bindStore(Ext.create('Siace.store.Treasury.recibos_Categorias'));
		_cboBscat_id.getStore().load({
			params: { xxBscat_type: '1', xxType_record: 'combo_abrev', xxAdd_blank: 'YES' },
			callback: function(opt,success,respon) { 
				if ( _cboBscat_id.getStore().getCount() ) { _cboBscat_id.setValue(_cboBscat_id.getStore().getAt(0).data.bscat_id); }
			}
		});
		component.down('#mone_id').setValue(0);

		var _store = Ext.create('Siace.store.Treasury.recibos');
		var _grid = component.down('#grdTreasury_recibos');
		var _pagingtoolbar = component.down('#pgtTreasury_recibos');
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
		var _window = this.gettrs_grdTreasury_recibos().up('window');
		var _store = _window.down('#pgtTreasury_recibos').getStore();
		var _pagingtoolbar = _window.down('#pgtTreasury_recibos');
		fext_gridClean(_store, _pagingtoolbar);

		_window.down('#btnAccept').setDisabled(true);
	},

	trs_btnAcceptClick: function(button, e, options) {
		var _win = button.up('window');
		var _grid = _win.down('#grdTreasury_recibos');
        var _record = _grid.getSelectionModel().getSelection();
        var _close = true;

        if ( _record[0] && _record[0].data.bs_id !== _win.getCallKey() ) {
        	if ( _win.getCallWindow() !== null ) {
        		if ( _win.getTypeReturn() == 'ADD_VENTAS' ) {
        			var _store = _win.getCallWindow().down('#grdTreasury_ventas_det').getStore();
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

	trs_grdTreasury_recibosItemdblclick: function(component, record, item, index, e, options) {
		var _btnAccept = component.up('window').down('#btnAccept');
        _btnAccept.fireEvent('click', _btnAccept, e, options);
	},


	trs_grdTreasury_recibosSelectionchange: function(model, record, options) {
		if ( record.length == 1 ) {
			_win = this.gettrs_grdTreasury_recibos().up('window');
			_win.down('#btnAccept').setDisabled( record[0].data.bs_id == _win.getCallKey() ? true : false );
		}
	},

	trs_mone_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.trs_Clean(); }
	},
});