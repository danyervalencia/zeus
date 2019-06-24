Ext.define('Siace.controller.treasury.Bienes_Servs', {
	extend: 'Ext.app.Controller',
	views: ['treasury.Bienes_ServsBrowse', 'treasury.Bienes_ServsSearch',],
	stores: ['array.Bienes_Servs_Tipos', 'array.MonedasAB',],
    refs: [
        { ref: 'tbss_grdTreasury_Bienes_Servs', selector: 'treasury_bienes_servssearch #grdTreasury_bienes_servs' },
    ],

	init: function(application) {
		this.control({
			'treasury_bienes_servsbrowse': { beforerender: this.tbsb_BeforeRender, },
			'treasury_bienes_servsbrowse #opc_id': { change: this.tbsb_opc_idChange, },
			'treasury_bienes_servsbrowse #btnNew': { click: this.tbsb_btnNewClick, },
			'treasury_bienes_servsbrowse #btnModify': { click: this.tbsb_btnModifyClick, },
			'treasury_bienes_servsbrowse #btnQuery': { click: this.tbsb_btnQueryClick, },
			'treasury_bienes_servsbrowse #btnDelete': { },
			'treasury_bienes_servsbrowse #bs_nombre': { change: this.tbsb_bs_nombreChange, },
			'treasury_bienes_servsbrowse #bscat_id': { change: this.tbsb_bscat_idChange, },
			'treasury_bienes_servsbrowse #bst_id': { change: this.tbsb_bst_idChange, },
			'treasury_bienes_servsbrowse #espedet_id': { change: this.tbsb_espedet_idChange, focus: this.tbsb_espedet_idFocus, },
			'treasury_bienes_servsbrowse #grdTreasury_bienes_servs': { selectionchange: this.tbsb_grdTreasury_bienes_servsSelectionchange, },
			'treasury_bienes_servsbrowse #mone_id': { change: this.tbsb_mone_idChange, },

			'treasury_bienes_servssearch': { beforerender: this.tbss_BeforeRender, },
			'treasury_bienes_servssearch #btnAccept': { click: this.tbss_btnAcceptClick, },
			'treasury_bienes_servssearch #btnCancel': { click: this.tbss_btnCancelClick, },
			'treasury_bienes_servssearch #bs_nombre': { change: this.tbss_Clean, },
			'treasury_bienes_servssearch #bscat_id': { change: this.tbss_bscat_idChange, },
			'treasury_bienes_servssearch #bsg_id': { change: this.tbss_bsg_idChange, },
			'treasury_bienes_servssearch #bst_id': { change: this.tbss_bst_idChange, },
			'treasury_bienes_servssearch #grdTreasury_bienes_servs': { itemdblclick: this.tbss_grdTreasury_bienes_servsItemdblclick, selectionchange: this.tbss_grdTreasury_bienes_servsSelectionchange,
			},
			'treasury_bienes_servssearch #mone_id': { change: this.tbss_mone_idChange, },
		});
	},

	tbsb_BeforeRender: function( component, options ) {
		fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': component.down('#opc_id'), 'menu_id': component.getMenuId() });
		fexttre_bienes_servs_categoriasFilter({'objeto': component.down('#bscat_id')});
		component.down('#bst_id').setValue(2);
		var _store = Ext.create('Siace.store.treasury.Bienes_Servs');
		var _grid = component.down('#grdTreasury_bienes_servs'); var _pagtool = component.down('#pgtTreasury_bienes_servs');
		_grid.bindStore(_store);  _pagtool.bindStore(_store);
		_store.sort('bs_nombre', 'ASC'); _store.pageSize = 500;
		_store.on('beforeload', function(store, operations, eOpts) {
			component.down('#btnModify').disable(); component.down('#btnQuery').disable(); component.down('#btnDelete').disable(); component.down('#btnPrinter').disable();

			store.getProxy().setExtraParam('xxBst_id', component.down('#bst_id').getValue());
			store.getProxy().setExtraParam('xxBscat_id', component.down('#bscat_id').getValue());
			store.getProxy().setExtraParam('xxMone_id', component.down('#mone_id').getValue());
			store.getProxy().setExtraParam('xxBs_nombre', component.down('#bs_nombre').getValue());
			store.getProxy().setExtraParam('xxEspedet_id', component.down('#espedet_id').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		}); _store.load();
	},

	tbsb_Clean: function(poComponent) {
		var _store = poComponent.down('#pgtTreasury_bienes_servs').getStore();
		var _pagingtoolbar = poComponent.down('#pgtTreasury_bienes_servs');
		fext_gridClean(_store, _pagingtoolbar);

		poComponent.down('#btnModify').disable(); poComponent.down('#btnQuery').disable(); poComponent.down('#btnDelete').disable();
	},

	tbsb_viewEdit: function(typeEdit){
	},

	tbsb_opc_idChange: function(combo, newValue, oldValue, options) {
		combo.up('panel').down('#btnNew').setDisabled(fextpub_uamoButtons(combo, 1));
	},

	tbsb_btnNewClick: function(button, e, options) {
	},

	tbsb_btnModifyClick: function(button, e, options) {
	},

	tbsb_btnQueryClick: function(button, e, options) {
	},

	tbsb_btnDeleteClick: function(button, e, options) {
	},

	tbsb_bs_nombreChange: function(textfield, newValue, oldValue, options) {
		this.tbsb_Clean(textfield.up('panel'));
	},

	tbsb_bscat_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.tbsb_Clean(combo.up('panel')); }
	},

	tbsb_bst_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.tbsb_Clean(combo.up('panel')); }
	},

	tbsb_espedet_idChange: function(combo, newValue, oldValue, options) {
		this.tbsb_Clean(combo.up('panel'));
	},

	tbsb_espedet_idFocus: function(combo, e, options) {
		if ( combo.getStore().data.items.length == 0 ) {
			combo.bindStore(Ext.create('Siace.store.treasury.Bienes_Servs'));
			combo.getStore().load({
				params: { xxOrder_by: 'espedet_codigo', xxType_record: 'combo_especifica_det', xxAdd_blank: 'YES' },
			});
		}
	},

	tbsb_grdTreasury_bienes_servsSelectionchange: function(model, record, options) {			
		if ( record.length == 1 ) {
			var _panel = model.view.panel.up('panel'); var _cboOpc_id = _panel.down('#opc_id');
			_panel.down('#btnModify').setDisabled(fextpub_uamoButtons(_cboOpc_id, 2));
			_panel.down('#btnQuery').setDisabled(fextpub_uamoButtons(_cboOpc_id, 3));
			_panel.down('#btnDelete').setDisabled(fextpub_uamoButtons(_cboOpc_id, 7));
		}
	},

	tbsb_mone_idChange: function(combo, newValue, oldValue, options) {
		this.tbsb_Clean(combo.up('panel'));  //if ( oldValue !== undefined ) { this.tbsb_Clean(); }
	},

	tbse_BeforeShow: function(component, options) {
		var _cboIndus_serie = component.down('combo[name=indus_serie]');
		_cboIndus_serie.bindStore(Ext.create('Siace.store.public.Years'));
		_cboIndus_serie.getStore().load({ 
			params: { xxYear_estado: '1', xxType_record: 'combo' }
		});

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
				//callback: function(opt, success, respon) {
				//	_cboAlma_key.setValue( _cboAlma_key.getStore().getAt(0).data.alma_key );
    			//}
			});

		}
	},

	ibse_btn0005Click: function(button, e, options) {
	    var _win = button.up('window');
	    var _frm = _win.down('form');
	    if ( _frm.down('hiddenfield[name=bs_key]').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el producto final');
	    	return false ; }

		var _arrayInsumos = new Array();  _insumos = '';
		var _recordsInsumos = _frm.down('grid[name=grdtreasury_bienes_servs_insumos]').getStore().getRange();
		for ( var i = 0;  i < _recordsInsumos.length; i++ ){
			_insumos += (i == 0 ? '' : ',') + '{' + _recordsInsumos[i].get('bs_key') + ',0}';
		}
		var _arrayCoeficientes = new Array();  _coeficientes = '';
		var _storeCoeficientes = _frm.down('grid[name=grdtreasury_industrias_coeficientes]').getStore();
		_storeCoeficientes.clearFilter(true);
		var _recordsCoeficientes = _storeCoeficientes.getRange();
		for ( var i = 0;  i < _recordsCoeficientes.length; i++ ) {
			if ( _recordsCoeficientes[i].get('induscoef_cantid') == '' || _recordsCoeficientes[i].get('induscoef_cantid')*1 <= 0 ) {
				return false;  break;
			}
			_coeficientes += (i == 0 ? '' : ',') + '{' + _recordsCoeficientes[i].get('bs_key') +','+ _recordsCoeficientes[i].get('coef_id')  +','+ (_recordsCoeficientes[i].get('return_bs_key')==''? '0':_recordsCoeficientes[i].get('return_bs_key')) +','+ _recordsCoeficientes[i].get('induscoef_cantid') + '}';
		}

	    if ( _frm.getForm().isValid() ) {
			var _store = this.getOib_grdtreasury_industrias().getStore();
			Ext.Msg.confirm(translations.confirmar, translations.mensaje_pregunta_guardar, function(btn){
			if ( btn == 'yes' ) {
			    funpub_sessionVariables();
			    _frm.getForm().submit({
					method: 'POST', url: 'php/treasury_industrias_save.php',
					params:{ xx0005: 'YES', xxInsumos: _insumos, xxCoeficientes: _coeficientes,
							 xxUsursess_key: xxUsursess_key, xxUsur_key: xxUsur_key, xxAlma_key: xxAlma_key },
		            waitTitle: translations.valida_titulo,
		            waitMsg: translations.valida_mensaje01,
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
			}});
	    }
	},

	ibse_btn0006Click: function(button, e, options) {
		// es aconsejable usar con destroy para destruir totalmente el componente
		if ( this.getPbss_Bienes_ServsSearch() !== undefined ) { this.getPbss_Bienes_ServsSearch().close();  this.getPbss_Bienes_ServsSearch().destroy(); }
		//if ( this.getPis_IndividuosSearch() !== undefined ) { this.getPis_IndividuosSearch().close();  this.getPis_IndividuosSearch().destroy(); }
		//if ( this.getPpts_Personas_transportistasSearch() !== undefined ) { this.getPpts_Personas_transportistasSearch().close();  this.getPpts_Personas_transportistasSearch().destroy(); }
		//if ( this.getPvs_VehiculosSearch() !== undefined ) { this.getPvs_VehiculosSearch().close();  this.getPvs_VehiculosSearch().destroy(); }
		button.up('window').close();  button.up('window').destroy();
	},

	ibse_btn0013Click: function(button, e, options) {
		funpub_windowSearch(this.getPbss_Bienes_ServsSearch(), button.up('window'), 'Siace.view.public.Bienes_ServsSearch', translations.treasury_industriasedit_title_buscar_insumo, '', '', 'ADD_INSUMOS', true);
	},

	ibse_btn0014Click: function(button, e, options) {
		//var _selection = this.gettbse_grdtreasury_industrias_insumos().getView().getSelectionModel().getSelection()[0]; // este metodo tambien sirve
		var _selection = this.gettbse_grdtreasury_industrias_insumos().getSelectionModel().getSelection()[0];
        if ( _selection ) {
            this.gettbse_grdtreasury_industrias_insumos().getStore().remove(_selection);
            button.setDisabled(true);
            button.up('form').down('button[name=btnCoefAdd]').setDisabled(true);
            button.up('form').down('button[name=btnCoefDel]').setDisabled(true);
		}
	},

	tbse_btnExitClick: function(button, e, options) {
		// es aconsejable usar con destroy para destruir totalmente el componente
		if ( this.getPbss_Bienes_ServsSearch() !== undefined ) { this.getPbss_Bienes_ServsSearch().close();  this.getPbss_Bienes_ServsSearch().destroy(); }
		button.up('window').close();  button.up('window').destroy();
	},

	tbse_btnBs_searchClick: function(button, e, options) {
		funpub_windowSearch(this.getPbss_Bienes_ServsSearch(), button.up('window'), 'Siace.view.public.Bienes_ServsSearch', translations.treasury_industriasedit_title_buscar_producto, button.up('window').down('hiddenfield[name=bs_key]').getValue(), '', '', true);
	},

    tbse_btnCoefAddClick: function(button, e, options) {
		var _selection = this.gettbse_grdtreasury_industrias_insumos().getSelectionModel().getSelection()[0];
        if ( _selection && _selection.data.bs_key !== '' ) {
        	var _win = Ext.create('Siace.view.treasury.Industrias_CoeficientesAdd');
			_win.setCallWindow(button.up('window'));
        	_win.setCallKey(_selection.data.bs_key);
        	_win.setTitle(translations.treasury_industrias_coeficientesadd_title);
        	//_win.setIconCls('icon_New_90');
        	var _combo = _win.down('combo[name=coef_id]');
			_combo.getStore().load({ params: { xxType_record: 'combo' } });
			_win.show();
		} else {
			Ext.Msg.alert(translations.mensaje, 'No se ha seleccionado ningun insumo al que pertenecera el coeficiente');
		}
	},

	ibse_btnCoefDelClick: function(button, e, options) {
		var _selection = this.gettbse_grdtreasury_industrias_coeficientes().getSelectionModel().getSelection()[0];
        if ( _selection ) {
            this.gettbse_grdtreasury_industrias_coeficientes().getStore().remove(_selection);
            button.setDisabled(true);
		}
	},


	ibse_bs_codigoBlur: function(textfield, The, options) {
		this.tbse_bs_codigoSearch('0', textfield.up('form'));
	},

	ibse_bs_codigoFocus: function(textfield, The, options) {
		this.tbse_bs_codigoSearch('1', textfield.up('form'));
	},

	ibse_bs_codigoKeypress: function(textfield, e, options) {
		if( e.getCharCode() == 13 ) { this.tbse_bs_codigoSearch('13', textfield.up('form')); }
	},

	ibse_bs_codigoSearch: function(pcType, poCallWindow) {
		fun_fieldSearch(pcType, poCallWindow, ['bs_key', 'BS_CODIGO', 'bs_codigo', 'bs_nombre'], 
			            ['php/public_bienes_servs_json_records.php', 'xxBs_codigo', 'textfield_search', ''], '', '');
	},

	/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	tbss_BeforeRender: function(component, options) {
		var _cboBsg_id = component.down('#bsg_id');
		_cboBsg_id.bindStore(Ext.create('Siace.store.public.Bienes_Servs_Grupos'));
		this.tbss_bst_idChange(component.down('#bst_id'), '1', undefined, '');

		if ( fjsIn_array(component.getTypeQuery(), ['ADD_CONTRATOS_CCU','ADD_CONTRATOS_OC']) ) {
			component.down('#bst_id').disable(); component.down('#bsg_id').disable(); component.down('#bscat_id').disable();
		} else {
			var _cboBscat_id = component.down('#bscat_id');
			_cboBscat_id.bindStore(Ext.create('Siace.store.treasury.Bienes_Servs_Categorias'));
			_cboBscat_id.getStore().load({
				params: { xxBscat_type: '1', xxType_record: 'combo_abrev', xxAdd_blank: 'YES' },
				callback: function(records, operations, success) { if ( records.length > 0 ) { _cboBscat_id.setValue(records[0].data.bscat_id); } }
			});
		}

		var _store = Ext.create('Siace.store.treasury.Bienes_Servs');
		var _grid = component.down('#grdTreasury_bienes_servs');
		var _pagingtoolbar = component.down('#pgtTreasury_bienes_servs');
		_grid.bindStore(_store);  _pagingtoolbar.bindStore(_store);
		_store.sort('bs_nombre', 'ASC'); _store.pageSize = 500;
		_store.on('beforeload', function(store, operations, eoptions) {
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

	tbss_Clean: function(poComponent) {
		var _window = this.getTbss_grdTreasury_Bienes_Servs().up('window');
		var _store = _window.down('#pgtTreasury_bienes_servs').getStore();
		var _pagingtoolbar = _window.down('#pgtTreasury_bienes_servs');
		fext_gridClean(_store, _pagingtoolbar);

		_window.down('#btnAccept').setDisabled(true);
	},

	tbss_btnAcceptClick: function(button, e, options) {
		var _win = button.up('window');
		var _grid = _win.down('#grdTreasury_bienes_servs');
        var _record = _grid.getSelectionModel().getSelection()[0];
        var _close = true;

        if ( _record && _record.data.bs_id !== _win.getCallKey() ) {
        	if ( _win.getCallWindow() !== null ) {
        		if ( _win.getTypeReturn() == 'ADD_VENTAS' ) {
        			_close = Siace.app.getController('treasury.Ventas').tve_grdTreasury_ventas_detAdd(_record);
        		} else if ( _win.getTypeReturn() == 'ADD_CONTRATOS' ) {
        			_close = Siace.app.getController('treasury.Contratos').tce_grdServiciosAdd(_win.getCallWindow(), _record);
        		} else {
       				_win.getCallWindow().down('#bs_key').setValue(_record.data.bs_key);
       				_win.getCallWindow().down('#bs_codigo').setValue(_record.data.bs_codigo);
       				_win.getCallWindow().down('#bs_nombre').setValue(_record.data.bs_nombre);
       			}
        	}
        	if ( _close ) { _win.close();  if ( _win.getActionDestroy() == true ) { _win.destroy(); } }
		}
	},

	tbss_btnCancelClick: function(button, e, options) {
		var _win = button.up('window');
		_win.close();  if ( _win.getActionDestroy() == true ) { _win.destroy(); }
	},

	tbss_bs_nombreChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.tbss_Clean(); }
	},

	tbss_bscat_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.tbss_Clean(); }
	},

	tbss_bsg_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.tbss_Clean(); }
	},

	tbss_bst_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.tbss_Clean(); }

		var _cboBsg_id = combo.up('window').down('#bsg_id');
		_cboBsg_id.getStore().load({
			params: { xxBst_id: newValue, xxType_record: 'combo', xxAdd_blank: 'YES' },
			callback: function(records, operations, success) {
			   	if ( records.length > 0 ) { _cboBsg_id.setValue(records[0].data.bsg_id); } 
			    else { _cboBsg_id.setValue(''); }
    		}
		});
	},

	tbss_grdTreasury_bienes_servsItemdblclick: function(component, record, item, index, e, options) {
		var _btnAccept = component.up('window').down('#btnAccept');
        _btnAccept.fireEvent('click', _btnAccept, e, options);
	},


	tbss_grdTreasury_bienes_servsSelectionchange: function(model, record, options) {
		if ( record.length == 1 ) {
			var _win = model.view.panel.up('window');
			_win.down('#btnAccept').setDisabled( record[0].data.bs_id == _win.getCallKey() ? true : false );
		}
	},

	tbss_mone_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.tbss_Clean(combo.up('panel')); }
	},
});