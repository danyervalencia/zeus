Ext.define('Siace.controller.public.Vehiculos', {
	extend: 'Ext.app.Controller',
	store: [
		'array.Tipos_Documentos_IdentidadVenta', 
	],
	views: [
		 'public.VehiculosBrowse', 'public.VehiculosEdit', 'public.VehiculosSearch',
	],
    refs: [
        { ref: 'pvb_grdPublic_Vehiculos', selector: 'public_vehiculosbrowse #grdPublic_vehiculos' },
        { ref: 'pve_frmPublic_Vehiculos', selector: 'public_vehiculosedit #frmPublic_vehiculos' },
        { ref: 'pvs_grdPublic_Vehiculos', selector: 'public_vehiculossearch #grdPublic_vehiculos' },
        { ref: 'pis_Public_IndividuosSearch', selector: 'public_individuossearch' },
    ],

	init: function(application) {
		this.control({
			'public_vehiculosbrowse': {	beforerender: this.pvb_BeforeRender, },
			'public_vehiculosbrowse #opc_id': { change: this.pvb_opc_idChange, },
			'public_vehiculosbrowse #btnNew': { click: this.pvb_btnNewClick },
			'public_vehiculosbrowse #btnModify': { click: this.pvb_btnModifyClick },
			'public_vehiculosbrowse #btnQuery': { click: this.pvb_btnQueryClick	},
			'public_vehiculosbrowse #grdPublic_vehiculos': { selectionchange: this.pvb_grdPublic_vehiculosSelectionChange, },
			'public_vehiculosbrowse #pers_nombre': { change: this.pvb_Clean },
			'public_vehiculosbrowse #pers_ruc': { change: this.pvb_Clean },
			'public_vehiculosbrowse #tipdocident_id': { change: this.pvb_tipdocident_idChange },

            'public_vehiculosedit': { beforeshow: this.pve_BeforeShow, },
            'public_vehiculosedit #btnSave': { click: this.pve_btnSaveClick, },
            'public_vehiculosedit #btnUndo': { click: this.pve_btnUndoClick, },
            'public_vehiculosedit #btnExit': { click: this.pve_btnExitClick, },
            'public_vehiculosedit #btnIndiv_search': { click: this.pve_btnIndiv_searchClick },
            'public_vehiculosedit #btnVeh_pdfDelete': { click: this.pve_btnVeh_pdfDeleteClick },
            'public_vehiculosedit #btnVeh_pdfDownload': { click: this.pve_btnVeh_pdfDownloadClick },
			'public_vehiculosedit #marc_id': { change: this.pve_marc_idChange },
            'public_vehiculosedit #ffiVeh_pdf': { change: this.pve_ffiVeh_pdfChange, },
            'public_vehiculosedit #indiv_dni': { blur: this.pve_indiv_dniBlur, focus: this.pve_indiv_dniFocus, },

			'public_vehiculossearch': { beforerender: this.pvs_BeforeRender, },
			'public_vehiculossearch #btnAccept': { click: this.pvs_btnAcceptClick, },
			'public_vehiculossearch #btnCancel': { click: this.pvs_btnCancelClick, },
			'public_vehiculossearch #grdPublic_vehiculos': { itemdblclick: this.pvs_grdPublic_vehiculosItemDblClick, selectionchange: this.pvs_grdPublic_vehiculosSelectionChange, },
			'public_vehiculossearch #tipveh_id': { change: this.pvs_tipveh_idChange },
			'public_vehiculossearch #veh_placa': { change: this.pvs_Clean },
		});
	},

	pvb_BeforeRender: function(component, options) {
		fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': component.down('#opc_id'), 'menu_id': component.getMenuId() });
		var _cboMarc_id = component.down('#marc_id');
		_cboMarc_id.bindStore(Ext.create('Siace.store.public.Bienes_Servs_Clases_Marcas'));
		_cboMarc_id.getStore().load({ 
			params: { xxBsc_id: '149', xxType_record: 'combo', xxAdd_blank: 'YES' },
			callback: function(records, operations, success) {
			   	if ( records.length > 0 ) { _cboMarc_id.setValue(records[0].data.marc_id); }
			    else { _cboMarc_id.disable();  _cboMarc_id.setValue(''); }
    		}
		});

		var _store = Ext.create('Siace.store.public.Vehiculos');
		var _grid = component.down('#grdPublic_vehiculos'); var _pagtool = component.down('#pgtPublic_vehiculos');
		_grid.bindStore(_store);  _pagtool.bindStore(_store);
		_store.sort('veh_placa', 'ASC'); _store.pageSize = 500;
		_store.on('beforeload', function(store, operations, eOpts) {
			component.down('#btnModify').disable(); component.down('#btnQuery').disable(); component.down('#btnDelete').disable();

			//store.getProxy().setExtraParam('xxPers_nombre', component.down('#pers_nombre').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'grid');
			//store.getProxy().setExtraParam('xxType_query', component.down('#type_query').getValue());		    
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});
	},

	ppb_Clean: function() {
		var _panel = this.getPvb_grdPublic_Vehiculos().up('panel');
		var _store = _panel.down('#pgtPublic_vehiculos').getStore();
		var _pagingtoolbar = _panel.down('#pgtPublic_vehiculos');
		fext_gridClean(_store, _pagingtoolbar);

		_panel.down('#btnModify').disable(); _panel.down('#btnQuery').disable(); _panel.down('#btnDelete').disable();
	},

	pvb_ViewEdit: function(pcTypeEdit, poComponent){
		poComponent.getEl().mask(translations.mensaje_esperar, 'loading');
	    if ( fjsIn_array(pcTypeEdit, ['2','3']) ) {
	    	var _record = poComponent.down('#grdPublic_vehiculos').getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }
	    }

	    var _win = Ext.create('Siace.view.public.VehiculosEdit');
	    _win.setTypeEdit(pcTypeEdit); _win.setCallStore(poComponent.down('#grdPublic_vehiculos').getStore());
	    if ( fjsIn_array(pcTypeEdit, ['2','3']) ) { _win.setCallKey(_record.data.veh_key); }
	    _win.show();
	    poComponent.getEl().unmask();
	},

	pvb_opc_idChange: function(combo, newValue, oldValue, options) {
		combo.up('panel').down('#btnNew').setDisabled(fextpub_uamoButtons(combo, 1));
	},

	pvb_btnNewClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 1) ) { return false; } this.pvb_ViewEdit('1', button.up('panel'));
	},

	pvb_btnModifyClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 2) ) { return false; } this.pvb_ViewEdit('2', button.up('panel'));
	},

	pvb_btnQueryClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 3) ) { return false; } this.pvb_ViewEdit('3', button.up('panel'));
	},

	pvb_grdPublic_vehiculosSelectionChange: function(model, record, options) {	
		if ( record.length == 1 ) {
			var _panel = model.view.panel.up('panel'); var _cboOpc_id = _panel.down('#opc_id');
			_panel.down('#btnModify').setDisabled(fextpub_uamoButtons(_cboOpc_id, 2)); 
			_panel.down('#btnQuery').setDisabled(fextpub_uamoButtons(_cboOpc_id, 3)); 
			_panel.down('#btnDelete').setDisabled(fextpub_uamoButtons(_cboOpc_id, 7)); 
		}
	},

	pvb_tipdocident_idChange: function(combobox, newValue, oldValue, options) {
		this.ppb_Clean();
	},

	pve_BeforeShow: function(component, options) {
	    var _cboTipveh_id = component.down('#tipveh_id');
	    _cboTipveh_id.bindStore(Ext.create('Siace.store.public.Tipos_Vehiculo'));
	    _cboTipveh_id.getStore().load({ 
	        params: { xxType_record: 'combo', xxType_query: component.getTypeQuery(), xxAdd_blank: 'YES' },
	        callback: function(records, operations, success) {
	            if ( records.length <= 0 ) { _cboTipveh_id.disable();  _cboTipveh_id.setValue(''); }
	        }
	    });
	
	    var _cboPais_id = component.down('#pais_id');
	    _cboPais_id.bindStore(Ext.create('Siace.store.public.Paises'));
	    _cboPais_id.getStore().load({ 
	        params: {  xxType_record: 'cboPais_id_abrev02', xxType_query: 'VEHICULOS' },
	        callback: function(records, operations, success) {
	            if ( records.length <= 0 ) { _cboPais_id.disable();  _cboPais_id.setValue(''); }
	        }
	    });

		var _cboMarc_id = component.down('#marc_id');
		_cboMarc_id.bindStore(Ext.create('Siace.store.public.Bienes_Servs_Clases_Marcas'));
		_cboMarc_id.getStore().load({ params: { xxBsc_id: '149', xxType_record: 'combo', xxAdd_blank: 'YES' }, });

		var _storeModelos = Ext.create('Siace.store.public.Modelos');
		var _cboMod_id = component.down('#mod_id');
		_cboMod_id.bindStore(_storeModelos);
		_storeModelos.on('beforeload', function(store, operations, eOpts) {
			store.getProxy().setExtraParam('xxMarc_id', component.down('#marc_id').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'combo');
		    store.getProxy().setExtraParam('xxOrder_by', 'mod_nombre');
		    store.getProxy().setExtraParam('xxAdd_blank', 'YES');
		});

		var _cboBsf_id = component.down('#bsf_id');
		_cboBsf_id.bindStore(Ext.create('Siace.store.public.Bienes_Servs_Familias'));
		_cboBsf_id.getStore().load({
			params: { xxBsc_id: '149', xxType_record: 'combo', xxOrder_by: 'f.bsf_nombre', xxAdd_blank: 'YES' },
			callback: function(records, operations, success) {
			   	if ( records.length > 0 ) { _cboBsf_id.setValue(records[0].data.bsf_id); } 
			    else { _cboBsf_id.disable();  _cboBsf_id.setValue(''); }
    		}
		});

		fextpub_yearsFilter({'objeto': component.down('#year_id')});

	    var _typeEdit = component.getTypeEdit();
	    if ( _typeEdit == '1' ) {
	        var _icon = 'icon_New_90'; var _title = translations.public_vehiculosedit_title_new;
	    } else if ( fjsIn_array(_typeEdit, ['2','3']) ) {
	        var _form = component.down('form');
	        _form.load({
	            method: 'POST', url: 'php/public_vehiculos_json_records.php',
	            params: { xxVeh_key: component.getCallKey(),  xxType_record: 'form', xxOrder_by: 'veh_key' },
	            waitMsg: 'Loading...',
	            success: function (form, action) {
	                try {
	                    var _model = Ext.create('Siace.model.public.Vehiculo'); var _resp = Ext.decode(action.response.responseText);
	                    if ( _resp.data[0] ) {
	                        _model.set(_resp.data[0]);  _form.loadRecord(_model);

	                        if ( _model.data.veh_pdf !== '' ) {
	                            if ( _typeEdit == '2' ) { component.down('#ffiVeh_pdf').hide(); component.down('#btnVeh_pdfDelete').show(); }
	                            component.down('#btnVeh_pdfDownload').setDisabled(false);
	                        }
	                    }
	                }
	                catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
	            },
	            failure: function (form, action) { Ext.Msg.alert("Load failed", action.result.errorMessage); }
	        });

	        if ( _typeEdit == '2' ) {
	            var _icon = 'icon_Modify_90'; var _title = translations.public_vehiculosedit_title_modify; 
	            //component.down('#indiv_dni').setDisabled( component.down('#tipdocident_id').getValue() == '99' ? true : false );
	        } else { 
	            var _icon = 'icon_Query_90'; var _title = translations.public_vehiculosedit_title_query; 
	            component.down('#tipveh_id').disable(); component.down('#pais_id').disable(); component.down('#veh_serie').disable();  component.down('#veh_nro').disable(); component.down('#ffiVeh_pdf').disable();
	            component.down('#tipdocident_id').disable(); component.down('#pers_ruc').disable(); component.down('#indiv_dni').disable(); component.down('#btnPers_search').disable();  component.down('#btnIndiv_search').disable(); 
	            component.down('#tipvehcat_id').disable(); component.down('#marc_id').disable(); component.down('#mod_id').disable();
	            component.down('#bsf_id').disable(); component.down('#veh_color').disable(); component.down('#year_id').disable();
	            component.down('#veh_chasis').disable(); component.down('#veh_motor').disable(); component.down('#tipvehcomb_id').disable(); component.down('#tipvehtransm_id').disable();
	            component.down('#veh_observ').disable(); component.down('#veh_cutil').disable();
	            component.down('#btnSave').disable(); component.down('#btnUndo').disable(); component.down('#btnExit').enable();
	        }
	    }
	    component.setIconCls(_icon); component.setTitle(_title); //component.show();
	},

	pve_btnSaveClick: function(button, e, options) {
		var _win = button.up('window');  var _frm = _win.down('form');
	    if ( _win.down('#tipveh_id').getValue()*1 <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el Tipo de Vehículo', function() { _win.down('#tipveh_id').focus(); }); return false ; }
	    if ( _win.down('#pais_id').getValue()*1 <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el Pais', function() { _win.down('#pais_id').focus(); }); return false ; }
		if ( _win.down('#veh_serie').getValue() == '' ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar la Placa', function() { _win.down('#veh_serie').focus(); }); return false ; }
		if ( _win.down('#veh_nro').getValue() == '' ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar la Placa', function() { _win.down('#veh_nro').focus(); }); return false ; }

	    if ( _frm.getForm().isValid() ) {
	    	Ext.Msg.confirm('Confirmación', '¿Esta Ud. seguro de guardar la información?', function(_btn){
				if ( _btn === 'yes' ) {
			    	var _vs = fextpub_sessionVariables(); var _close = true;
			        _frm.getForm().submit({
						method: 'POST',  url: 'php/public_vehiculos_save.php',
						params:{ xx0005: 'YES',
						         zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
		                waitTitle: translations.valida_titulo, waitMsg: translations.valida_mensaje01,
			            success: function(form, action) {
			            	var _result = Siace.util.Util.decodeJSON(action.response.responseText);
			                if ( _result.success ) {
			                	if ( _win.getCallStore() !== null ) {
			                		_win.getCallStore().load();
					        	} else if ( _win.getCallWindow() !== null ) {
					  		      	if ( _win.getTypeReturn() == 'ADD_VENTAS' ) {
					  		      	    var _arrayData = new Array();
									    _arrayData['veh_id'] = _result.veh_id;
									    _arrayData['tipveh_nombre'] = _win.down('#tipveh_id').getRawValue(); _arrayData['pais_abrev03'] = _win.down('#pais_id').getRawValue();
									    _arrayData['veh_placa'] = _win.down('#veh_serie').getValue() +'-'+ _win.down('#veh_nro').getValue();
									    _arrayData['marc_nombre'] = _win.down('#marc_id').getRawValue(); _arrayData['mod_nombre'] = _win.down('#mod_id').getRawValue();
										_close = Siace.app.getController('treasury.Ventas').tve_grdTreasury_ventas_det_referenciasAdd(undefined, _arrayData);
					  		      	} else if ( _win.getTypeReturn() == 'TRACTOS' ) {
					        			_win.getCallWindow().down('#trac_key').setValue(_result.veh_key);
					        			_win.getCallWindow().down('#trac_placa').setValue(_frm.down('#veh_serie').getValue()+'-'+_frm.down('#veh_nro').getValue());
					        			_win.getCallWindow().down('#tractipveh_nombre').setValue(_frm.down('#tipveh_id').getRawValue());
									} else {			        		
					        			_win.getCallWindow().down('#veh_key').setValue(_result.veh_key);
					        			_win.getCallWindow().down('#veh_placa').setValue(_frm.down('#veh_serie').getValue()+'-'+_frm.down('#veh_nro').getValue());
					        			_win.getCallWindow().down('#tipveh_nombre').setValue(_frm.down('#tipveh_id').getRawValue());
					        		}
					        	}
			                    if ( _close ) { _win.close(); }
			                } else {
			                    Siace.util.Util.showErrorMsg(_result.msg);
			                }
			            },
			            failure: function(form, action) {
			                Siace.util.Util.showErrorMsg(action.response.responseText);
			            }
			        });
				}
			});
	    }
	},

	pve_btnUndoClick: function(button, e, options) {
		button.up('window').close();
	},

	pve_btnExitClick: function(button, e, options) {
		button.up('window').close();
	},

	pve_btnIndiv_searchClick: function(button, e, options) {
		funpub_individuosSearch(this.getPis_IndividuosSearch(), button.up('window'), button.up('window').down('hiddenfield[name=indiv_key]').getValue());
	},

	pve_btnVeh_pdfDeleteClick: function(button, e, options) {
		var _win = button.up('window');
		_win.down('#ffiVeh_pdf').reset();
		_win.down('#veh_pdf').setValue('');
		_win.down('#ffiVeh_pdf').show(); button.hide(); _win.down('#btnVeh_pdfDownload').setDisabled(true);
    },

	pve_btnVeh_pdfDownloadClick: function(button, e, options) {
		var _file = button.up('window').down('#ffiVeh_pdf').fileInputEl.dom.files[0];
		var _src = 'php/resources/download_file.php?xxTable=public_vehiculos&xxField=pdf&xxFile_name=' + button.up('window').down('#veh_key').getValue() +'_'+ button.up('window').down('#veh_pdf').getValue();
		fext_FileDownload(_file, _src);
	},

	pve_ffiVeh_pdfChange: function(filefield, value, options) {
		var _win = filefield.up('window');
		fext_FileReader(filefield, /pdf/, '[PDF]', 1048576, '1 MB', _win.down('#btnVeh_pdfDelete'), _win.down('#btnVeh_pdfDownload'));
	},

	pve_indiv_dniFocus: function(textfield, The, options) {
		//funpub_individuosDniSearch('1', textfield.up('form'), 0, '', '');
	},

	pve_indiv_dniBlur: function(textfield, The, options) {
		//funpub_individuosDniSearch('1', textfield.up('form'), 0, '', '');
	},

	pve_marc_idChange: function(combo, newValue, oldValue, options) {
		if ( newValue == '0' ) {
			combo.up('window').down('#mod_id').getStore().removeAll();  combo.up('window').down('');
		} else {
			combo.up('window').down('#mod_id').getStore().load();
		}
	},

	pve_tipdocident_idChange: function(combo, newValue, oldValue, options) {
		combo.up('form').down('textfield[name=pers_ruc]').setDisabled( combo.getValue() == '99' ? true : false );
		var _pais_id = combo.getStore().findRecord('tipdocident_id', combo.getValue()).data['pais_id'];
		var _cboPais_id = combo.up('form').down('combo[name=pais_id]');
		if ( _pais_id*1 > 0 ) {
			_cboPais_id.setValue(_pais_id);
			_cboPais_id.setDisabled('disabled');
		} else {
			_cboPais_id.setDisabled(false);
		}
	},

	pve_tipdocident_idRender: function(combo, e, options) {
		combo.getStore().load({ params: { xxTipdocident_estado_vehiculos: '1' } });
	},

	pve_tipveh_idRender: function(combo, e, options) {
		combo.getStore().load({ params: { xxType_query: combo.up('window').getTypeQuery() } });
	},

	/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	pvs_BeforeRender: function( component, options ) {
		var _cboTipveh_id = component.down('#tipveh_id');
		_cboTipveh_id.bindStore(Ext.create('Siace.store.public.Tipos_Vehiculo'));
		_cboTipveh_id.getStore().load({ 
			params: { xxType_record: 'combo', xxType_query: component.getTypeQuery(), xxAdd_blank: 'YES' },
			callback: function(opt, success, respon) {
			   	if ( _cboTipveh_id.getStore().getCount() > 0 ) {
			    	_cboTipveh_id.setDisabled(false);  _cboTipveh_id.setValue(_cboTipveh_id.getStore().getAt(0).data.tipveh_id);
			    } else {
			    	_cboTipveh_id.setDisabled(true);  _cboTipveh_id.setValue('');
			    }
    		}
		});

		var _store = Ext.create('Siace.store.public.Vehiculos');
		var _grid = component.down('#grdPublic_vehiculos');
		var _pagingtoolbar = component.down('#pgtPublic_vehiculos');
		_grid.bindStore(_store);  _pagingtoolbar.bindStore(_store);
		_store.sort('veh_placa', 'ASC');
		_store.on('beforeload', function(store, scope, options) {
			component.down('#btnAccept').disable();

		    store.getProxy().setExtraParam('xxTipveh_id', component.down('#tipveh_id').getValue());
		    store.getProxy().setExtraParam('xxVeh_placa', component.down('#veh_placa').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'grid_search');
		    store.getProxy().setExtraParam('xxType_query', component.getTypeQuery());
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});
		_store.pageSize = 500; _store.load();
	},

	pvs_Clean: function() {
		var _win = this.getPvs_grdPublic_Vehiculos().up('window');
		var _store = _win.down('#pgtPublic_vehiculos').getStore();
		var _pagingtoolbar = _win.down('#pgtPublic_vehiculos');
		fext_gridClean(_store, _pagingtoolbar);

		_win.down('#btnAccept').disable();
	},

	pvs_btnAcceptClick: function(button, e, options) {
		var _win = button.up('window');
		var _grid = _win.down('#grdPublic_vehiculos');
        var _record = _grid.getSelectionModel().getSelection()[0];
        var _close = true;

        if ( _record && _record.data.veh_id !== _win.getCallKey() && _record.data.veh_key !== _win.getCallKey() ) {
        	if ( _win.getCallWindow() !== null ) {
  		      	if ( _win.getTypeReturn() == 'ADD_VENTAS' ) {
  		      		_close = Siace.app.getController('treasury.Ventas').tve_grdTreasury_ventas_det_referenciasAdd(_record);
  		      	} else if ( _win.getTypeReturn() == 'TRACTOS' ) {
        			_win.getCallWindow().down('#trac_key').setValue(_record.data.veh_key);
        			_win.getCallWindow().down('#trac_placa').setValue(_record.data.veh_placa);
        			_win.getCallWindow().down('#tractipveh_nombre').setValue(_record.data.tipveh_nombre);
        		} else {
        			_win.getCallWindow().down('#veh_key').setValue(_record.data.veh_key);
        			_win.getCallWindow().down('#veh_placa').setValue(_record.data.veh_placa);
        			_win.getCallWindow().down('#tipveh_nombre').setValue(_record.data.tipveh_nombre);
        		}
        	}
        	if ( _close ) { _win.close(); if ( _win.getActionDestroy() == true ) { _win.destroy(); } }
		}
	},

	pvs_btnCancelClick: function(button, e, options) {
		button.up('window').close(); if ( button.up('window').getActionDestroy() == true ) { button.up('window').destroy(); }
	},

	pvs_grdPublic_vehiculosItemDblClick: function(component, record, item, index, e, options) {
		var _btnAccept = component.up('window').down('#btnAccept');
        _btnAccept.fireEvent('click', _btnAccept, e, options);
	},

	pvs_grdPublic_vehiculosSelectionChange: function(model, record, options) {
		if ( record.length == 1 ) {
			_win = this.getPvs_grdPublic_Vehiculos().up('window');
			_win.down('#btnAccept').setDisabled( record[0].data.veh_id == _win.getCallKey() || record[0].data.veh_key == _win.getCallKey() ? true : false );
		}
	},

	pvs_tipveh_idChange: function(component, newValue, oldValue, options) {
		if ( oldValue != undefined ) { this.pvs_Clean(); }
	},
});