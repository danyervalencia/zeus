Ext.define('Siace.controller.treasury.Entidades_Bancarias_Cheques', {
	extend: 'Ext.app.Controller',
	views: ['treasury.Entidades_Bancarias_ChequesBrowse', ],

	init: function(application) {
		this.control({
			'treasury_entidades_bancarias_chequesbrowse': { beforerender: this.tebcb_BeforeRender, },
			'treasury_entidades_bancarias_chequesbrowse #opc_id': { change: this.tebcb_opc_idChange, },
			'treasury_entidades_bancarias_chequesbrowse #btnModify': { click: this.tebcb_btnModifyClick, },
			'treasury_entidades_bancarias_chequesbrowse #btnQuery': { click: this.tebcb_btnQueryClick, },
			'treasury_entidades_bancarias_chequesbrowse #btnCuebancmov': { click: this.tebcb_btnCuebancmovClick, },
			'treasury_entidades_bancarias_chequesbrowse actioncolumn#acTreasury_cheques': { click: this.tebcb_acTreasury_chequesDownload, },
            'treasury_entidades_bancarias_chequesbrowse #entibanc_id': { change: this.tebcb_entibanc_idChange, },
            'treasury_entidades_bancarias_chequesbrowse #entibancchq_nro': { change: this.tebcb_Clean, },
			'treasury_entidades_bancarias_chequesbrowse #grdTreasury_entidades_bancarias_cheques': { selectionchange: this.tebcb_grdTreasury_entidades_bancarias_chequesSelectionchange, },
            'treasury_entidades_bancarias_chequesbrowse #mone_id': { change: this.tebcb_mone_idChange, },

            'treasury_entidades_bancariasechequesbdit': { beforeshow: this.tcbe_BeforeShow, },
            'treasury_entidades_bancariasechequesbdit #btnSave': { click: this.tcbe_btnSaveClick, },
            'treasury_entidades_bancariasechequesbdit #btnUndo': { click: this.tcbe_btnUndoClick, },
            'treasury_entidades_bancariasechequesbdit #btnExit': { click: this.tcbe_btnExitClick, },
            'treasury_entidades_bancariasechequesbdit #btnPctbl_search': { click: this.tcbe_btnPctbl_searchClick, },
            'treasury_entidades_bancariasechequesbdit #pctbl_cuenta': { blur: this.tcbe_pctbl_cuentaBlur, focus: this.tcbe_pctbl_cuentaFocus, keypress: this.tcbe_pctbl_cuentaKeypress, },

			'treasury_entidades_bancarias_chequesbmovimientosbrow': { beforerender: this.tcbmb_BeforeRender, },
			'treasury_entidades_bancarias_chequesbmovimientosbrow #btnNew': { click: this.tcbmb_btnNewClick, },
			'treasury_entidades_bancarias_chequesbmovimientosbrow #btnQuery': { click: this.tcbmb_btnQueryClick, },
			'treasury_entidades_bancarias_chequesbmovimientosbrow #btnExit': { click: this.tcbmb_btnExitClick, },
            'treasury_entidades_bancarias_chequesbmovimientosbrow #cuebancmov_nro': { change: this.tcbmb_Clean, },
            'treasury_entidades_bancarias_chequesbmovimientosbrow #fechaini': { change: this.tcbmb_Clean, },
            'treasury_entidades_bancarias_chequesbmovimientosbrow #fechafin': { change: this.tcbmb_Clean, },
			'treasury_entidades_bancarias_chequesbmovimientosbrow #grdTreasury_entidades_bancarias_chequesbmovimientos': { selectionchange: this.tcbmb_grdTreasury_cuentas_bancarias_movimientosSelectionchange, },
		});
	},

	tebcb_BeforeRender: function( component, options ) {
		fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': component.down('#opc_id'), 'menu_id': component.getMenuId()});
		fextpub_tablas_generalesFilter({'objeto': component.down('#entibanc_id'), 'tabgen_parent': '200', 'type_record': 'combo'});

		var _store = Ext.create('Siace.store.treasury.Entidades_Bancarias_Cheques');
		var _grid = component.down('#grdTreasury_entidades_bancarias_cheques'); var _pag = component.down('#pagTreasury_entidades_bancarias_cheques');
		_grid.bindStore(_store);  _pag.bindStore(_store);
		_store.sort('entibancchq_fecha', 'ASC'); _store.pageSize = 500;
		_store.on('beforeload', function(store, operations, eoptions) {
			component.down('#btnModify').disable(); component.down('#btnQuery').disable(); component.down('#btnCuebancmov').disable();

		    store.getProxy().setExtraParam('xxEntibanc_id', component.down('#entibanc_id').getValue());
		    store.getProxy().setExtraParam('xxEntibancchq_nro', component.down('#entibancchq_nro').getValue());
		    store.getProxy().setExtraParam('xxMone_id', component.down('#mone_id').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		}); _store.load();
	},

	tebcb_Clean: function(poComponent) {
		var _pag = poComponent.down('#pagTreasury_entidades_bancarias_cheques'); var _store = _pag.getStore();
		fext_gridClean(_store, _pag);
		poComponent.down('#btnModify').disable(); poComponent.down('#btnQuery').disable(); poComponent.down('#btnCuebancmov').disable();
	},

	tebcb_ViewEdit: function(poComponent, pcTypeEdit){
		if ( fjsIn_array(pcTypeEdit, ['2','3']) ) {
        	var _record = poComponent.down('#grdTreasury_cuentas_bancarias_cheques').getSelectionModel().getSelection()[0];
        	if ( !_record ) { return false; }
        }
	    var _win = Ext.create('Siace.view.treasury.Cuentas_BancariasEdit');
	    _win.setTypeEdit(pcTypeEdit); _win.setCallStore(this.gettebcb_grdTreasury_Cuentas_Bancarias().getStore());
	    if ( fjsIn_array(pcTypeEdit, ['2','3']) ) { _win.setCallKey(_record[0].data.cuebanc_key); }
	    _win.show();
	},

	tebcb_opc_idChange: function(combo, newValue, oldValue, options) {
		//combo.up('panel').down('#btnNew').setDisabled(fextpub_uamoButtons(combo, 1));
	},

	tebcb_btnModifyClick: function(button, e, options) {
        if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 2) ) { return false; } this.tebcb_ViewEdit('2', button.up('panel'));
	},

	tebcb_btnQueryClick: function(button, e, options) {
        if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 3) ) { return false; } this.tebcb_ViewEdit('3', button.up('panel'));
	},

	tebcb_btnCuebancmovClick: function(button, e, options) {
    	var _record = this.getTebcb_grdTreasury_Entidades_Bancarias_Cheques().getSelectionModel().getSelection()[0];
        if ( !_record ) { return false; }

		var _panel = button.up('panel');
		Ext.get(_panel.getEl()).mask(translations.mensaje_esperar, 'loading');
	    var _win = Ext.create('Siace.view.treasury.Cuentas_Bancarias_MovimientosEditCHQ');
	    _win.setTypeEdit('1'); _win.down('#entibancchq_key').setValue(_record.data.entibancchq_key);
		_win.down('#entibancchq_detalle').setValue(_record.data.entibancchq_nro +' - '+ _record.data.entibanc_nombre); 
		_win.setCallStore(this.getTebcb_grdTreasury_Entidades_Bancarias_Cheques().getStore()); _win.show();
	    Ext.get(_panel.getEl()).unmask();
	},

	tebcb_acTreasury_chequesDownload: function(grid, cell, row, col, e, record, t) {
		if ( record.data.entibancchq_pdf == '' ) {
			var _win = Ext.create('Siace.view.dataGeneral.WindowFileUpload');
			_win.setTypeFile(/pdf/);
			_win.setTypeMessage('[PDF]');
			_win.setSizeMax(1048576);
			_win.setSizeMessage('1 MB');
			_win.setCallStore(grid.getStore());
			_win.setSchemaTable('treasury.entidades_bancarias_cheques');
			_win.setTableField('entibancchq_key');
			_win.setRecordKey(record.data.entibancchq_key);
			_win.setRecordField('entibancchq_pdf');
			_win.setTable('treasury_entidades_bancarias_cheques');
			_win.setField('pdf');
			_win.down('#documento').setValue(record.data.entibanc_nombre +' - '+record.data.entibancchq_nro);
			_win.show();
		} else {
			var _src = 'php/resources/download_file.php?xxSchema_table=treasury.entidades_bancarias_cheques&xxTable_field=entibancchq_key&xxRecord_key=' + record.data.entibancchq_key + '&xxRecord_field=entibancchq_pdf&xxTable=treasury_entidades_bancarias_cheques&xxField=pdf';
			fext_FileDownload(undefined, _src);
		}
	},

	tebcb_entibanc_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.tebcb_Clean(combo.up('panel')); }
	},

	tebcb_grdTreasury_entidades_bancarias_chequesSelectionchange: function(model, record, options) {			
		if ( record.length == 1 ) {
			var _panel = model.view.panel.up('panel'); var _cboOpc_id = _panel.down('#opc_id'); var _flga = record[0].data.ped_flga;
			_panel.down('#btnQuery').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 3));
			_panel.down('#btnCuebancmov').setDisabled(_flga == '98' || record[0].data.cuebancmov_nro !== '' ? true : fextpub_uamoButtons(_cboOpc_id, 4002));
		}
	},

	tebcb_mone_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.tebcb_Clean(combo.up('panel')); }
	},

	/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	tcbe_BeforeShow: function(component, options) {
		var _typeEdit = component.getTypeEdit();

		var _cboEntibanc_id = component.down('#entibanc_id');
		_cboEntibanc_id.bindStore(Ext.create('Siace.store.public.Tablas_Generales'));
		_cboEntibanc_id.getStore().load({
			params: { xxTabgen_parent: '200', xxType_record: 'combo', xxOrder_by: 'tabgen_nombre'},
		});

		var _cboTipcuebanc_id = component.down('#tipcuebanc_id');
		_cboTipcuebanc_id.bindStore(Ext.create('Siace.store.public.Tablas_Generales'));
		_cboTipcuebanc_id.getStore().load({ params: { xxTabgen_parent: '160', xxType_record: 'combo' } });

		var _cboFuefin_id = component.down('#fuefin_id');
		_cboFuefin_id.bindStore(Ext.create('Siace.store.budget.Fuentes_Financiamiento'));
		_cboFuefin_id.getStore().load({ params: { xxType_record: 'combo_codename', xxFuefin_estado: '1', xxAdd_blank: 'YES' } });

        if ( _typeEdit == '1' ) {
        	var _icon = 'icon_New_90'; var _title = translations.treasury_cuentas_bancariasedit_title_new;
        } else if ( fjsIn_array(_typeEdit, ['2','3']) ) {
	        var _form = component.down('form');
	   		_form.load({
	   			method: 'POST', url: 'php/treasury_cuentas_bancarias_json_records.php',
	            params: { xxCuebanc_key: component.getCallKey(),  xxType_record: 'form' },
	            waitMsg: 'Loading...',
	            success: function (form, action) {
	                try {
	                    var _model = Ext.create('Siace.model.treasury.Cuenta_Bancaria');
	                    var _result = Ext.decode(action.response.responseText);
	                    if ( _result.data[0] ) {
	                        _model.set(_result.data[0]);  _form.loadRecord(_model);
							//component.down('#concp_code').setValue(fjsLpad(_model.data.concp_code, 3, '0'));
							component.down('#PCTBL_CUENTA').setValue(_model.data.pctbl_cuenta);
	                    }
	                }
	                catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
	            },
	            failure: function (form, action) {
	                Ext.Msg.alert("Load failed", action.result.errorMessage);
	            }
	        });

        	if ( _typeEdit == '2' ) { 
        		var _icon = 'icon_Modify_90'; var _title = translations.treasury_cuentas_bancariasedit_title_modify;
        	} else { 
        		var _icon = 'icon_Query_90'; var _title = translations.treasury_cuentas_bancariasedit_title_query; 
				component.down('#entibanc_id').disable(); component.down('#tipcuebanc_id').disable(); component.down('#mone_id').disable();
				component.down('#cuebanc_nro').disable(); component.down('#cuebanc_fechaini').disable();
				component.down('#pctbl_cuenta').disable(); component.down('#btnPctbl_search').disable(); component.down('#fuefin_id').disable(); component.down('#cuebanc_observ').disable();
				component.down('#btnSave').disable(); component.down('#btnUndo').disable(); component.down('#btnExit').enable();
        	}
        }
        component.setIconCls(_icon); component.setTitle(_title);
	},

	tcbe_btnSaveClick: function(button, e, options) {
	    var _win = button.up('window'); var _frm = _win.down('form');
	    if ( _frm.down('#entibanc_id').getValue() == '' || _frm.down('#entibanc_id').getValue()*1 <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar la ENTIDAD BANCARIA', function() { _frm.down('#entibanc_id').focus(); }); return false ; }
	    if ( _frm.down('#tipcuebanc_id').getValue() == '' || _frm.down('#tipcuebanc_id').getValue()*1 <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el TIPO DE CUENTA', function() { _frm.down('#tipcuebanc_id').focus(); }); return false ; }
	    if ( _frm.down('#mone_id').getValue() == '' || _frm.down('#mone_id').getValue()*1 <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el MONEDA de la Cuenta Bancaria', function() { _frm.down('#mone_id').focus(); }); return false ; }
	    if ( _frm.down('#cuebanc_nro').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar El NUMERO de la Cuenta Bancaria', function() { _frm.down('#cuebanc_nro').focus(); }); return false ; }
	    //if ( _frm.down('#cuebanc_fechaini').getRawValue() == '' ) {
	    //	Ext.Msg.alert(translations.mensaje, 'Debe indicar la FECHA DE INICIO de la Cuenta Bancaria', function() { _frm.down('#cuebanc_fechaini').focus(); }); return false ; }
	    if ( _frm.down('#pctbl_id').getValue() == '' || _frm.down('#pctbl_id').getValue()*1 <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar la CUENTA CONTABLE del concepto', function() { _frm.down('#pctbl_cuenta').focus(); }); return false ; }

	    if ( _frm.getForm().isValid() ) {
			Ext.Msg.confirm(translations.confirmar, translations.mensaje_pregunta_guardar, function(btn){
			if ( btn == 'yes' ) {
			    var _vs = fextpub_sessionVariables();
			    _frm.getForm().submit({
					method: 'POST', url: 'php/treasury_cuentas_bancarias_save.php',
					params:{ xx0005: 'YES', 
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
			               	//Siace.util.Alert.msg('Success!', 'User saved.');
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

	tcbe_btnUndoClick: function(button, e, options) {
		button.up('window').close();
	},

	tcbe_btnExitClick: function(button, e, options) {
		button.up('window').close();
	},

	tcbe_btnPCtbl_searchClick: function(button, e, options) {
		//funpub_windowSearch(this.getPbss_conceptosSearch(), button.up('window'), 'Siace.view.public.conceptosSearch', translations.Treasury_industriasedit_title_buscar_producto, button.up('window').down('hiddenfield[name=bs_key]').getValue(), '', '', true);
	},

	tcbe_pctbl_cuentaBlur: function(textfield, The, options) {
		this.tcbe_pctbl_cuentaSearch('0', textfield.up('form'));
	},

	tcbe_pctbl_cuentaFocus: function(textfield, The, options) {
		this.tcbe_pctbl_cuentaSearch('1', textfield.up('form'));
	},

	tcbe_pctbl_cuentaKeypress: function(textfield, e, options) {
		if( e.getCharCode() == 13 ) { this.tcbe_pctbl_cuentaSearch('13', textfield.up('form')); }
	},

	tcbe_pctbl_cuentaSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['pctbl_id', 'PCTBL_CUENTA', 'pctbl_cuenta', 'pctbl_nombre'], 
			            ['php/accounting_plan_contable_json_records.php', 'xxPctbl_cuenta', 'textfield_search', 'ONLY_RECORD'], '', '');
	},

	/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
	tcbmb_BeforeRender: function(component, options) {
		component.down('#fechaini').setValue(fjsDateFirtDayMonth(''));
		component.down('#fechafin').setValue(fjsDateCurrent(''));
		var _store = Ext.create('Siace.store.treasury.Cuentas_Bancarias_Movimientos');
		var _grid = component.down('#grdTreasury_cuentas_bancarias_movimientos');
		var _pagingtoolbar = component.down('#pgtTreasury_cuentas_bancarias_movimientos');
		_grid.bindStore(_store);  _pagingtoolbar.bindStore(_store);
		_store.sort('cuebancmov_fecha', 'ASC');
		_store.on('beforeload', function(store, operations, eOpts) {
			//component.down('#btnQuery').disable(); component.down('#btnReceipts').disable();

			store.getProxy().setExtraParam('xxCuebanc_key', component.down('#cuebanc_key').getValue());
		    store.getProxy().setExtraParam('xxFechaini', component.down('#fechaini').getSubmitData());
		    store.getProxy().setExtraParam('xxFechafin', component.down('#fechafin').getSubmitData());
		    store.getProxy().setExtraParam('xxCuebancmov_nro', component.down('#cuebancmov_nro').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});
		_store.pageSize = 500;  _store.load();

		var _form = component.down('form');
	   	_form.load({
	   		method: 'POST', url: 'php/treasury_cuentas_bancarias_json_records.php',
	        params: { xxCuebanc_key: component.down('#cuebanc_key').getValue(),  xxType_record: 'window', xxOrder_by: 'cuebanc_key' },
	        waitMsg: 'Loading...',
	        success: function (form, action) {
	            try {
	                var _model = Ext.create('Siace.model.treasury.Cuenta_Bancaria');
					var _result = Ext.decode(action.response.responseText);
	                if ( _result.data[0] ) {
	                    _model.set(_result.data[0]);  _form.loadRecord(_model);
	                    component.down('#fuefin_codeabrev').setValue(_result.data[0].fuefin_code+' - '+_result.data[0].fuefin_abrev);
	                }
                }
                catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
            },
            failure: function (form, action) { Ext.Msg.alert("Load failed", action.result.errorMessage); }
        });
	},

	tcbmb_Clean: function() {
		var _panel = this.getTcbmb_grdTreasury_Cuentas_Bancarias_Movimientos().up('panel');
		var _store = _panel.down('#pgtTreasury_cuentas_bancarias_movimientos').getStore();
		var _pagingtoolbar = _panel.down('#pgtTreasury_cuentas_bancarias_movimientos');
		fext_gridClean(_store, _pagingtoolbar);

		_panel.down('#btnQuery').disable();
	},

	tcbmb_ViewEdit: function(pcTypeEdit, poWindow){
		if ( pcTypeEdit == '1' ) {
		} else if ( fjsIn_array(pcTypeEdit, ['2','3']) ) {
	    	//var _record = this.getTcbmb_grdPublic_Usuarios_Accesos().getSelectionModel().getSelection();
	        //if ( _record.length !== 1 ) { return false; }
	    }

		Ext.get(poWindow.getEl()).mask(translations.mensaje_esperar, 'loading');
	    var _win = Ext.create('Siace.view.treasury.Cuentas_Bancarias_MovimientosEditCI');
	    _win.setTypeEdit(pcTypeEdit); _win.setCallStore(this.getTcbmb_grdTreasury_Cuentas_Bancarias_Movimientos().getStore());
	    if ( fjsIn_array(pcTypeEdit, ['1']) ) {
	    	_win.down('#cuebanc_key').setValue(poWindow.down('#cuebanc_key').getValue());
	    	_win.down('#entibanc_nombre').setValue(poWindow.down('#entibanc_nombre').getValue());
	    	_win.down('#cuebanc_nro').setValue(poWindow.down('#cuebanc_nro').getValue());
	    } else if ( fjsIn_array(pcTypeEdit, ['2','3']) ) { _win.setCallKey(_record[0].data.cuebancmov_key); }
	    _win.show();
	    Ext.get(poWindow.getEl()).unmask();
	},

	tcbmb_btnNewClick: function(button, e, options) {
		this.tcbmb_ViewEdit('1', button.up('window'));
	},

	tcbmb_btnQueryClick: function(button, e, options) {
	    var _record = this.getTcbmb_grdTreasury_Ventas().getSelectionModel().getSelection();
	    if ( _record.length !== 1 ) { return false; }

		Ext.get(button.up('window').getEl()).mask(translations.mensaje_esperar, 'loading');
	    var _win = Ext.create('Siace.view.treasury.VentasEdit');
	    _win.setTypeEdit(3);  _win.setCallKey(_record[0].data.vent_key); _win.show();
	    Ext.get(button.up('window').getEl()).unmask();
	},

	tcbmb_btnExitClick: function(button, e, options) {
		button.up('window').close();
	},

	tcbmb_grdTreasury_cuentas_bancarias_movimientosSelectionchange: function(model, record, options) {			
		if ( record.length == 1 ) {
			var _panel = this.getTcbmb_grdTreasury_Cuentas_Bancarias_Movimientos().up('panel');
			_panel.down('#btnQuery').enable();
		}
	},
});