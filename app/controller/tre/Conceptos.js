Ext.define('Siace.controller.treasury.Conceptos', {
	extend: 'Ext.app.Controller',
	views: ['treasury.ConceptosBrowse', 'treasury.ConceptosEdit',],

	init: function(application) {
		this.control({
			'treasury_conceptosbrowse': { beforerender: this.tcb_BeforeRender, },
			'treasury_conceptosbrowse #opc_id': { change: this.tcb_opc_idChange, },
			'treasury_conceptosbrowse #btnNew': { click: this.tcb_btnNewClick, },
			'treasury_conceptosbrowse #btnModify': { click: this.tcb_btnModifyClick, },
			'treasury_conceptosbrowse #btnQuery': { click: this.tcb_btnQueryClick, },
			'treasury_conceptosbrowse #btnDelete': { },
			'treasury_conceptosbrowse #concp_nombre': { change: this.tcb_concp_nombreChange, },
			'treasury_conceptosbrowse #espedet_id': { change: this.tcb_espedet_idChange, },
			'treasury_conceptosbrowse #grdTreasury_conceptos': { selectionchange: this.tcb_grdTreasury_conceptosSelectionchange, },
			'treasury_conceptosbrowse #tipconcp_id': { change: this.tcb_tipconcp_idChange, },

            'treasury_conceptosedit': {	beforeshow: this.tce_BeforeShow, },
            'treasury_conceptosedit #btnSave': { click: this.tce_btnSaveClick, },
            'treasury_conceptosedit #btnUndo': { click: this.tce_btnUndoClick, },
            'treasury_conceptosedit #btnExit': { click: this.tce_btnExitClick, },
            'treasury_conceptosedit #btnPctbl_search': { click: this.tce_btnPctbl_searchClick, },
            'treasury_conceptosedit #pctbl_cuenta': { blur: this.tce_pctbl_cuentaBlur, focus: this.tce_pctbl_cuentaFocus, keypress: this.tce_pctbl_cuentaKeypress, },

			/*'treasury_conceptossearch': { beforerender: this.abss_BeforeRender, },
			'treasury_conceptossearch #btnAccept': { click: this.abss_btnAcceptClick, },
			'treasury_conceptossearch #btnCancel': { click: this.abss_btnCancelClick, },
			'treasury_conceptossearch #bs_nombre': { change: this.abss_Clean, },
			'treasury_conceptossearch #bscat_id': { change: this.abss_bscat_idChange, },
			'treasury_conceptossearch #bsg_id': { change: this.abss_bsg_idChange, },
			'treasury_conceptossearch #bst_id': { change: this.abss_bst_idChange, },
			'treasury_conceptossearch #grdtreasury_conceptos': { itemdblclick: this.abss_grdtreasury_conceptosItemdblclick, selectionchange: this.abss_grdtreasury_conceptosSelectionchange, },
			'treasury_conceptossearch #mone_id': { change: this.abss_mone_idChange, }, */
		});
	},

	tcb_BeforeRender: function( component, options ) {
		fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': component.down('#opc_id'), 'menu_id': component.getMenuId() });
		var _cboEspedet_id = component.down('#espedet_id');
		_cboEspedet_id.bindStore(Ext.create('Siace.store.treasury.Conceptos'));
		_cboEspedet_id.getStore().load({
			params: { xxOrder_by: 'espedet_codigo', xxType_record: 'combo_especifica_det', xxAdd_blank: 'YES' },
		});

		var _store = Ext.create('Siace.store.treasury.Conceptos');
		var _grid = component.down('#grdTreasury_conceptos'); var _pagtool = component.down('#pgtTreasury_conceptos');
		_grid.bindStore(_store);  _pagtool.bindStore(_store);
		_store.sort('concp_nombre', 'ASC'); _store.pageSize = 500;
		_store.on('beforeload', function(store, operations, eoptions) {
			component.down('#btnModify').setDisabled(true);
			component.down('#btnQuery').setDisabled(true);
			component.down('#btnDelete').setDisabled(true);
			component.down('#btnPrinter').setDisabled(true);

			//store.getProxy().setExtraParam('xxConcp_code', component.down('#concp_code').getValue());
			store.getProxy().setExtraParam('xxConcp_nombre', component.down('#concp_nombre').getValue());
			store.getProxy().setExtraParam('xxTipconcp_id', component.down('#tipconcp_id').getValue());			
			store.getProxy().setExtraParam('xxEspedet_id', component.down('#espedet_id').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		}); _store.load();
	},

	tcb_Clean: function(poComponent) {
		var _store = poComponent.down('#pgtTreasury_conceptos').getStore();
		var _pagingtoolbar = poComponent.down('#pgtTreasury_conceptos');
		fext_gridClean(_store, _pagingtoolbar);

		poComponent.down('#btnModify').disable(); poComponent.down('#btnQuery').disable(); poComponent.down('#btnDelete').disable();
	},

	tcb_ViewEdit: function(pcTypeEdit, poComponent){
		if ( fjsIn_array(pcTypeEdit, ['2','3']) ) {
        	var _record = poComponent.down('#grdTreasury_conceptos').getSelectionModel().getSelection()[0];
        	if ( !_record ) { return false; }
        }
	    var _win = Ext.create('Siace.view.treasury.ConceptosEdit');
	    _win.setTypeEdit(pcTypeEdit); _win.setCallStore(poComponent.down('#grdTreasury_conceptos').getStore());
	    if ( fjsIn_array(pcTypeEdit, ['2','3']) ) { _win.setCallKey(_record.data.concp_id); }
	    _win.show();
	},

	tcb_opc_idChange: function(combo, newValue, oldValue, options) {
		combo.up('panel').down('#btnNew').setDisabled(fextpub_uamoButtons(combo, 1));
	},

	tcb_btnNewClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 1) ) { return false; } this.tcb_ViewEdit('1', button.up('panel'));
	},

	tcb_btnModifyClick: function(button, e, options) {
        if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 2) ) { return false; } this.tcb_ViewEdit('2', button.up('panel'));
	},

	tcb_btnQueryClick: function(button, e, options) {
        if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 3) ) { return false; } this.tcb_ViewEdit('3', button.up('panel'));
	},

	tcb_btnDeleteClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 7) ) { return false; }
	},

	tcb_bst_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.tcb_Clean(combo.up('panel')); }
	},

	tcb_concp_nombreChange: function(textfield, newValue, oldValue, options) {
		this.tcb_Clean(textfield.up('panel'));
	},

	tcb_espedet_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.tcb_Clean(combo.up('panel')); }
	},

	tcb_grdTreasury_conceptosSelectionchange: function(model, record, options) {			
		if ( record.length == 1 ) {
			var _panel = model.view.panel.up('panel'); var _cboOpc_id = _panel.down('#opc_id'); _flga = record[0].data.concp_flga;
			_modify = (record[0].data.concp_flga == '98' ? true : false);
			_panel.down('#btnModify').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 2));
			_panel.down('#btnQuery').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 3));
			_panel.down('#btnDelete').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 7));
		}
	},

	tcb_tipconcp_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.tcb_Clean(combo.up('panel')); }
	},

	tce_BeforeShow: function(component, options) {
		var _typeEdit = component.getTypeEdit();
		fextbud_especificas_detFilter({'panel': component, 'tiptrans_code': '1', espedet_estado: '1', 'order_by': 'espedet_codename', 'disabled': (_typeEdit == '3' ? true : false), 'setValue': (_typeEdit == '1' ? true : false) });
		fextbud_fuentes_financiamientoFilter({'panel': component, 'disabled': (_typeEdit == '3' ? true : false), 'setValue': (_typeEdit == '1' ? true : false) });

        if ( _typeEdit == '1' ) {
        	var _icon = 'icon_New_90'; var _title = translations.treasury_conceptosedit_title_new;
        } else if ( fjsIn_array(_typeEdit, ['2','3']) ) {
	        var _form = component.down('form');
	   		_form.load({
	   			method: 'POST', url: 'php/treasury_conceptos_json_records.php',
	            params: { xxConcp_id: component.getCallKey(),  xxType_record: 'form' }, waitMsg: 'Loading...',
	            success: function (form, action) {
	                try {
	                    var _model = Ext.create('Siace.model.treasury.Concepto');
	                    var _result = Ext.decode(action.response.responseText);
	                    if ( _result.data[0] ) {
	                        _model.set(_result.data[0]);  _form.loadRecord(_model);
							component.down('#concp_code').setValue(fjsLpad(_model.data.concp_code, 3, '0'));
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
        		var _icon = 'icon_Modify_90'; var _title = translations.treasury_conceptosedit_title_modify;
        	} else { 
        		var _icon = 'icon_Query_90'; var _title = translations.treasury_conceptosedit_title_query; 
				component.down('#concp_code').disable(); component.down('#concp_nombre').disable(); 
				component.down('#pctbl_cuenta').disable(); component.down('#btnPctbl_search').disable();
				component.down('#espedet_id').disable(); component.down('#fuefin_id').disable(); component.down('#concp_observ').disable();
				component.down('#btnSave').disable(); component.down('#btnUndo').disable(); component.down('#btnExit').enable();

        	}
        }
        component.setIconCls(_icon); component.setTitle(_title);
	},

	tce_btnSaveClick: function(button, e, options) {
	    var _win = button.up('window'); var _frm = _win.down('form');
	    if ( _win.down('#concp_code').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el CODIGO del concepto', function() { _win.down('#concp_code').focus(); }); return false ; }
	    if ( _win.down('#concp_nombre').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar la DESCRIPCION del concepto', function() { _win.down('#concp_nombre').focus(); }); return false ; }
	    if ( _win.down('#pctbl_id').getValue() == '' || _win.down('#pctbl_id').getValue()*1 <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar la CUENTA CONTABLE del concepto', function() { _win.down('#pctbl_cuenta').focus(); }); return false ; }
	    if ( _win.down('#espedet_id').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el CLASIFICADOR PRESUPUESTAL del concepto', function() { _win.down('#espedet_id').focus(); }); return false ; }

	    if ( _frm.getForm().isValid() ) {
			Ext.Msg.confirm(translations.confirmar, translations.mensaje_pregunta_guardar, function(btn){
			if ( btn == 'yes' ) {
			    var _vs = fextpub_sessionVariables();
			    _frm.getForm().submit({
					method: 'POST', url: 'php/treasury_conceptos_save.php',
					params:{ xx0005: 'YES', 
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

	tce_btnUndoClick: function(button, e, options) {
		button.up('window').close();
	},

	tce_btnExitClick: function(button, e, options) {
		button.up('window').close();
	},

	tce_btnPCtbl_searchClick: function(button, e, options) {
		funpub_windowSearch(this.getPbss_conceptosSearch(), button.up('window'), 'Siace.view.public.conceptosSearch', translations.Treasury_industriasedit_title_buscar_producto, button.up('window').down('hiddenfield[name=bs_key]').getValue(), '', '', true);
	},

	tce_pctbl_cuentaBlur: function(textfield, The, options) {
		this.tce_pctbl_cuentaSearch('0', textfield.up('form'));
	},

	tce_pctbl_cuentaFocus: function(textfield, The, options) {
		this.tce_pctbl_cuentaSearch('1', textfield.up('form'));
	},

	tce_pctbl_cuentaKeypress: function(textfield, e, options) {
		if( e.getCharCode() == 13 ) { this.tce_pctbl_cuentaSearch('13', textfield.up('form')); }
	},

	tce_pctbl_cuentaSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['pctbl_id', 'PCTBL_CUENTA', 'pctbl_cuenta', 'pctbl_nombre'], 
			            ['php/accounting_plan_contable_json_records.php', 'xxPctbl_cuenta', 'textfield_search', 'ONLY_RECORD'], '', '');
	},

	/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	/*abss_BeforeRender: function(component, options) {
		var _cboBsg_id = component.down('#bsg_id');
		_cboBsg_id.bindStore(Ext.create('Siace.store.public.conceptos_Grupos'));
		this.abss_bst_idChange(component.down('#bst_id'), '1', undefined, '');

		var _cboBscat_id = component.down('#bscat_id');
		_cboBscat_id.bindStore(Ext.create('Siace.store.Treasury.conceptos_Categorias'));
		_cboBscat_id.getStore().load({
			params: { xxBscat_type: '1', xxType_record: 'combo_abrev', xxAdd_blank: 'YES' },
			callback: function(opt,success,respon) { 
				if ( _cboBscat_id.getStore().getCount() ) { _cboBscat_id.setValue(_cboBscat_id.getStore().getAt(0).data.bscat_id); }
			}
		});
		component.down('#mone_id').setValue(0);

		var _store = Ext.create('Siace.store.Treasury.conceptos');
		var _grid = component.down('#grdTreasury_conceptos'); var _pagtool = component.down('#pgtTreasury_conceptos');
		_grid.bindStore(_store);  _pagtool.bindStore(_store);
		_store.sort('bs_nombre', 'ASC'); _store.pageSize = 500;
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
		});  _store.load();
	},

	abss_Clean: function(poComponent) {
		var _store = poComponent.down('#pgtTreasury_conceptos').getStore();
		var _pagingtoolbar = poComponent.down('#pgtTreasury_conceptos');
		fext_gridClean(_store, _pagingtoolbar);

		poComponent.down('#btnAccept').disable();
	},

	abss_btnAcceptClick: function(button, e, options) {
		var _win = button.up('window');
		var _grid = _win.down('#grdTreasury_conceptos');
        var _record = _grid.getSelectionModel().getSelection()[0];
        var _close = true;

        if ( _record && _record.data.bs_id !== _win.getCallKey() ) {
        	if ( _win.getCallWindow() !== null ) {
        		if ( _win.getTypeReturn() == 'ADD_VENTAS' ) {
        			var _store = _win.getCallWindow().down('#grdTreasury_ventas_det').getStore();
        			var _model = _store.findRecord('bs_id', _record.data.bs_id);
        			if ( _model == null ) {
        				var _monto = _win.getCallWindow().down('#vent_monto').getValue();
        				if ( _monto*1 > 0 ) {
        					if ( _record.data.mone_id !== _win.getCallWindow().down('#mone_id').getValue() ) {
								Ext.Msg.alert(translations.mensaje, 'moneda de servicio seleccionado es diferente al establecido en el documento de venta');
								return false;
        					}	
        				} else {
        					_win.getCallWindow().down('#mone_id').setValue(_record.data.mone_id);
        				}
        				_win.getCallWindow().down('#vent_monto').setValue( _win.getCallWindow().down('#vent_monto').getValue()*1 + _record.data.bs_importe );

	        			_store.add({
	       					bs_id: _record.data.bs_id,
	       					bs_codigo: _record.data.bs_codigo,
	        				bs_nombre: _record.data.bs_nombre,
	        				unimed_abrev: _record.data.unimed_abrev,
	        				ventdet_cantid: 1,
	        				ventdet_preuni: _record.data.bs_importe,
	        				ventdet_pretot: _record.data.bs_importe,
	    				});
	    			} else {
	    				_close = false;
	    				Ext.Msg.alert(translations.mensaje, 'servicio seleccionado ya se encuentra establecido');
	    			}
        		} else {
       				_win.getCallWindow().down('#name=bs_key').setValue(_record.data.bs_key);
       				_win.getCallWindow().down('#bs_codigo').setValue(_record.data.bs_codigo);
       				_win.getCallWindow().down('#bs_nombre').setValue(_record.data.bs_nombre);
       			}
        	}
        	if ( _close ) { _win.close();  if ( _win.getActionDestroy() == true ) { _win.destroy(); } }
		}
	},

	abss_btnCancelClick: function(button, e, options) {
		var _win = button.up('window');
		_win.close();  if ( _win.getActionDestroy() == true ) { _win.destroy(); }
	},

	abss_bs_nombreChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.abss_Clean(combo.up('window')); }
	},

	abss_bscat_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.abss_Clean(combo.up('window')); }
	},

	abss_bsg_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.abss_Clean(combo.up('window')); }
	},

	abss_bst_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.abss_Clean(); }

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

	abss_grdTreasury_conceptosItemdblclick: function(component, record, item, index, e, options) {
		var _btnAccept = component.up('window').down('#btnAccept');
        _btnAccept.fireEvent('click', _btnAccept, e, options);
	},


	abss_grdTreasury_conceptosSelectionchange: function(model, record, options) {
		if ( record.length == 1 ) {
			var _win = model.view.panel.up('window');
			_win.down('#btnAccept').setDisabled( record[0].data.bs_id == _win.getCallKey() ? true : false );
		}
	},

	abss_mone_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.abss_Clean(combo.up('window')); }
	},*/
});