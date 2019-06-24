Ext.define('Siace.controller.operations.Packings', {
	extend: 'Ext.app.Controller',
	views: ['operations.PackingsBrowse', 'operations.PackingsEdit'],
    refs: [
		{ ref: 'ope_grdOperations_packings_det', selector: 'operations_packingsedit #grdOperations_packings_det' },
        { ref: 'pbss_Public_Bienes_ServsSearchM', selector: 'public_bienes_servssearchm' },
        { ref: 'pps_Public_PersonasSearch', selector: 'public_personassearch' },
    ],

	init: function(application) {
		this.control({
			'operations_packingsbrowse': {	beforerender: this.opb_BeforeRender, },
			'operations_packingsbrowse #opc_id': { change: this.opb_opc_idChange, },
			'operations_packingsbrowse #btnNew': { click: this.opb_btnNewClick, },
			'operations_packingsbrowse #btnModify': { click: this.opb_btnModifyClick, },
			'operations_packingsbrowse #btnQuery': { click: this.opb_btnQueryClick, },
			'operations_packingsbrowse #btnVobo': { click: this.opb_btnVoboClick, },
			'operations_packingsbrowse actioncolumn#acOperations_packings': { click: this.opb_acOperations_packingsCLick, },
            'operations_packingsbrowse #alma_key': { change: this.opb_alma_keyChange, },
			'operations_packingsbrowse #fechafin': { change: this.opb_fechafinChange, },
			'operations_packingsbrowse #fechaini': { change: this.opb_fechainiChange, },
			'operations_packingsbrowse #grdOperations_packings': { selectionchange: this.opb_grdOperations_packingsSelectionchange, },
			'operations_packingsbrowse #pack_nro': { change: this.opb_pack_nroChange, },
			'operations_packingsbrowse #pack_serie': { change: this.opb_pack_serieChange, },

			'operations_packingsedit': { beforeshow: this.ope_BeforeShow, close: this.ope_Close, },
            'operations_packingsedit #btnSave': { click: this.ope_btnSaveClick, },
            'operations_packingsedit #btnUndo': { click: this.ope_btnUndoClick, },
            'operations_packingsedit #btnExit': { click: this.ope_btnExitClick, },
            'operations_packingsedit #btnAdd': { click: this.ope_btnAddClick, },
            'operations_packingsedit #btnPack_pdfDelete': { click: this.ope_btnPack_pdfDeleteClick, },
            'operations_packingsedit #btnPack_pdfDownload': { click:  this.ope_btnPack_pdfDownloadClick, },
            'operations_packingsedit #btnPall_new': { click: this.ope_btnPall_newClick, },
            'operations_packingsedit #btnPers_search': { click: this.ope_btnPers_searchClick, },
            'operations_packingsedit #btnReject': { click: this.ope_btnRejectClick, },
            'operations_packingsedit #btnSuppress': { click: this.ope_btnSuppressClick, },
			'operations_packingsedit actioncolumn#acOperations_packings_det': { click: this.ope_acOperations_packings_detCLick, },
            'operations_packingsedit #alma_key': { change: this.ope_alma_keyChange, },
            'operations_packingsedit #ffiPack_pdf': { change: this.ope_ffiPack_pdfChange, },
			'operations_packingsedit #grdOperations_packings_det': { selectionchange: this.ope_grdOperations_packings_detSelectionchange, },
            'operations_packingsedit #pall_id': { change: this.ope_pall_idChange, },
			'operations_packingsedit #pers_ruc': { blur: this.ope_pers_rucBlur, focus: this.ope_pers_rucFocus, keypress: this.ope_pers_rucKeypress, },
		});
	},

	opb_BeforeRender: function(component, options) {
		fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': component.down('#opc_id'), 'menu_id': component.getMenuId() });
		fextope_almacenesFilter({'objeto': component.down('#alma_key'), 'add_blank': (Ext.getCmp('ah_txtAlma_key').getValue() == '' ? 'YES' : 'NO')});

		var _store = Ext.create('Siace.store.operations.Packings');
		var _grid = component.down('#grdOperations_packings');
		var _pagingtoolbar = component.down('#pgtOperations_packings');
		_grid.bindStore(_store);  _pagingtoolbar.bindStore(_store);
		_store.sort('pack_fecha', 'DESC'); _store.pageSize = 500;
		_store.on('beforeload', function(store, operations, eOpts) {
			component.down('#btnModify').disable(); component.down('#btnQuery').disable(); component.down('#btnDelete').disable(); component.down('#btnVobo').disable();

		    store.getProxy().setExtraParam('xxAlma_key', component.down('#alma_key').getValue());
		    store.getProxy().setExtraParam('xxPack_serie', component.down('#pack_serie').getValue());
		    store.getProxy().setExtraParam('xxPack_nro', component.down('#pack_nro').getValue());
		    store.getProxy().setExtraParam('xxFechaini', component.down('#fechaini').getSubmitData());
		    store.getProxy().setExtraParam('xxFechafin', component.down('#fechafin').getSubmitData());
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});
	},

	opb_Clean: function(poComponent) {
		var _store = poComponent.down('#pgtOperations_packings').getStore();
		var _pagingtoolbar = poComponent.down('#pgtOperations_packings');
		fext_gridClean(_store, _pagingtoolbar);

		poComponent.down('#btnModify').disable(); poComponent.down('#btnQuery').disable(); poComponent.down('#btnDelete').disable(); poComponent.down('#btnVobo').disable();
	},

	opb_opc_idChange: function(combo, newValue, oldValue, options) {
		combo.up('panel').down('#btnNew').setDisabled(fextpub_uamoButtons(combo, 1));
	},

	opb_ViewEdit: function(pcTypeEdit, poComponent){
	    Ext.get(poComponent.getEl()).mask(translations.mensaje_esperar, 'loading');

	    if ( fjsIn_array(pcTypeEdit, ['2','3','41']) ) {
	    	var _record = poComponent.down('#grdOperations_packings').getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }
	    }

	    var _win = Ext.create('Siace.view.operations.PackingsEdit');
	    _win.setTypeEdit(pcTypeEdit); _win.setCallWindow(poComponent); _win.setCallStore(poComponent.down('#grdOperations_packings').getStore());
	    if ( fjsIn_array(pcTypeEdit, ['2','3','41']) ) { _win.setCallKey(_record.data.pack_key); }
	    _win.show();
	    Ext.get(poComponent.getEl()).unmask();
	},

	opb_btnNewClick: function(button, e, options) {
		this.opb_ViewEdit('1', button.up('panel'));
	},

	opb_btnModifyClick: function(button, e, options) {
		this.opb_ViewEdit('2', button.up('panel'));
	},

	opb_btnQueryClick: function(button, e, options) {
		this.opb_ViewEdit('3', button.up('panel'));
	},

	opb_btnVoboClick: function(button, e, options) {
		this.opb_ViewEdit('41', button.up('panel'));
	},

	opb_acOperations_packingsCLick: function(grid, cell, row, col, e, record, t) {
		if ( record.data.pack_pdf == '' ) {
			var _win = Ext.create('Siace.view.dataGeneral.WindowFileUpload');
			_win.setTypeFile(/pdf/);
			_win.setTypeMessage('[PDF]');
			_win.setSizeMax(1048576);
			_win.setSizeMessage('1 MB');
			_win.setCallStore(grid.getStore());
			_win.setSchemaTable('siace.packings');
			_win.setTableField('pack_key');
			_win.setRecordKey(record.data.ingcomp_key);
			_win.setRecordField('pack_pdf');
			_win.setTable('operations_packings');
			_win.setField('pdf');
			_win.down('#documento').setValue(record.data.pack_documento);
			_win.show();
		} else {
			var _src = 'php/resources/download_file.php?xxSchema_table=siace.packings&xxTable_field=pack_key&xxRecord_key=' + record.data.pack_key + '&xxRecord_field=pack_pdf&xxTable=operations_packings&xxField=pdf';
			fext_FileDownload(undefined, _src);
		}
	},

	opb_alma_keyChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.opb_Clean(combo.up('panel')); }
	},

	opb_fechafinChange: function(datefield, newValue, oldValue, options) {
		this.opb_Clean(datefield.up('panel'));
	},

	opb_fechainiChange: function(datefield, newValue, oldValue, options) {
		this.opb_Clean(datefield.up('panel'));
	},

	opb_grdOperations_packingsSelectionchange: function(model, record, options) {			
		if ( record.length == 1 ) {
			var _panel = model.view.panel.up('panel').up('panel'); var _cboOpc_id = _panel.down('#opc_id');
			_panel.down('#btnModify').setDisabled(fextpub_uamoButtons(_cboOpc_id, 2));
			_panel.down('#btnQuery').setDisabled(fextpub_uamoButtons(_cboOpc_id, 3));
			_panel.down('#btnDelete').setDisabled(fextpub_uamoButtons(_cboOpc_id, 7));
			_panel.down('#btnVobo').setDisabled(fextpub_uamoButtons(_cboOpc_id, 41));
		}
	},

	opb_pack_nroChange: function(textfield, newValue, oldValue, options) {
		this.opb_Clean(textfield.up('panel'));
	},

	opb_pack_serieChange: function(textfield, newValue, oldValue, options) {
		this.opb_Clean(textfield.up('panel'));
	},

	ope_BeforeShow: function(component, options) {
		var _typeEdit = component.getTypeEdit();
		var _cboPall_id = component.down('#pall_id');
		_cboPall_id.bindStore(Ext.create('Siace.store.operations.Pallets'));

		var _store = Ext.create('Siace.store.operations.Packings_Det');
		var _grid = component.down('#grdOperations_packings_det');
		_grid.bindStore(_store); _store.sort('pall_nro', 'ASC');
	    if ( _typeEdit == '1' ) {
	    	fextope_almacenesFilter({'objeto': component.down('#alma_key'), 'type_record': 'combo', 'add_blank': 'NO'});
			_cboPall_id.getStore().add({ pall_id: 0, pall_codigo: '' }); _cboPall_id.setValue(0);

	    	var _icon = 'icon_New_90'; var _title = translations.operations_packingsedit_title_new;
		} else {
			fextope_almacenesCombo(component.down('#alma_key'), true, '', '', '', 'combo', '');
			component.down('#alma_key').setDisabled(true);
	        var _form = component.down('form');
	   		_form.load({
	   			method: 'POST', url: 'php/operations_packings_json_records.php',
	            params: { xxPack_key: component.getCallKey(),  xxType_record: 'form', xxOrder_by: 'p.pack_id' },
	            waitMsg: 'Loading...',
	            success: function (form, action) {
	                try {
	                    var _model = Ext.create('Siace.model.operations.Packing');
	                    var _result = Ext.decode(action.response.responseText);
	                    if ( _result.data[0] ) {
	                        _model.set(_result.data[0]);  _form.loadRecord(_model);

        					if ( _model.data.pack_pdf !== '' ) {
        						component.down('#btnPack_pdfDownload').setDisabled(false);
        						if ( _typeEdit == '2' ) { component.down('#ffiPack_pdf').hide(); component.down('#btnPack_pdfDelete').show(); }
        					}

					        component.down('#grdOperations_packings_det').getStore().load({
								params: { xxPack_key: _model.data.pack_key, xxType_record: 'grid_packings_edit' }
							});
					        component.down('#pall_id').getStore().load({
								params: { xxPack_key: _model.data.pack_key, xxType_record: 'grid_packings_edit', xxAdd_blank: 'YES' }
							});
	                    }
	                }
	                catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
	            },
	            failure: function (form, action) { Ext.Msg.alert("Load failed", action.result.errorMessage); }
	        });

        	if ( _typeEdit == '2' ) { 
        		var _icon = 'icon_Modify_90'; var _title = translations.operations_packingsedit_title_modify;
        	} else { 
        		var _icon = 'icon_Query_90'; var _title = translations.operations_packingsedit_title_query; 
				component.down('#doc_id').disable(); component.down('#pack_serie').disable();  component.down('#pack_nro').disable();				 
				component.down('#ffiPack_pdf').disable(); component.down('#pack_fecha').disable(); 
				component.down('#pers_ruc').disable(); component.down('#btnPers_search').disable();
				component.down('#btnPall_new').disable();//component.down('#regadua_observ').disable();
				_grid.columns[4].disable();  _grid.columns[6].disable();
				component.down('#btnAdd').disable(); component.down('#btnAdd').setVisible(false);  component.down('#btnSuppress').setVisible(false);  
				component.down('#btnSave').disable(); component.down('#btnUndo').disable(); component.down('#btnExit').enable();
        	}
        	if ( _typeEdit == '41' ) {
        		_grid.columns[0].setVisible(true);
        		var _icon = 'icon_Vobo_90'; var _title = translations.operations_packingsedit_title_vobo; 
        		component.down('#btnReject').setVisible(true);
        	}
		}

        component.setIconCls(_icon); component.setTitle(_title);
	},

	ope_Close: function(panel, options) {
		if ( this.getPps_Public_PersonasSearch() !== undefined ) { this.getPps_Public_PersonasSearch().close();  this.getPps_Public_PersonasSearch().destroy(); }
		if ( this.getPbss_Public_Bienes_ServsSearchM() !== undefined ) { this.getPbss_Public_Bienes_ServsSearchM().close();  this.getPbss_Public_Bienes_ServsSearchM().destroy(); }
	},

	ope_btnSaveClick: function(button, e, options) {
	    var _win = button.up('window'); var _frm = _win.down('form');
	    if ( _frm.down('#alma_key').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el Usuario'); return false ; }
	    if ( _frm.down('#pack_nro').getValue()*1 <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el Numero del documento'); return false ; }
	    if ( _frm.down('#pack_fecha').getValue() == null || _frm.down('#pack_fecha').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar La fecha del documento'); return false ; }
	    if ( _frm.down('#pers_key').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el Proveedor'); return false ; }

		var _pallets = '';  var _packings_det = ''; var _mod = '';
		var _recP = _frm.down('#pall_id').getStore().getRange();
		var _storePackings_det = _frm.down('#grdOperations_packings_det').getStore();
		_storePackings_det.clearFilter(true);

		for ( var _i = 0;  _i < _recP.length; _i++ ) {
			if ( _recP[_i].data.pall_id > 0 ) {
				_mod = _storePackings_det.findRecord('pall_id', _recP[_i].data.pall_id);
				if ( _mod == null || _mod == undefined ) { 
					Ext.Msg.alert(translations.mensaje, 'Pallet ' +_recP[_i].data.pall_codigo+ ' no registra Items'); return false; }
				_pallets += (_pallets == '' ? '' : ',') + '{' + _recP[_i].get('pall_id') +','+ _recP[_i].get('pall_nro') +','+ _recP[_i].get('pall_peso') +','+ 'x'+_recP[_i].get('pall_observ')  + '}';
			}
		}
		
		var _recPD = _storePackings_det.getRange();
		for ( var _j = 0;  _j < _recPD.length; _j++ ) {
			if ( _recPD[_j].data.packdet_cantid == '' || _recPD[_j].data.packdet_cantid*1 <= 0 ) {
				return false;  break; }
			if ( _recPD[_j].data.packdet_peso == '' || _recPD[_j].data.packdet_peso*1 <= 0 ) {
				return false;  break; }
			_packings_det += (_j == 0 ? '' : ',') + '{' + _recPD[_j].data.pall_id +','+ _recPD[_j].data.bs_key +','+ _recPD[_j].data.packdet_cantid  +','+ _recPD[_j].get('packdet_peso') + '}';
		}

	    if ( _frm.getForm().isValid() ) {
			Ext.Msg.confirm('Confirmación', '¿Esta Ud. seguro de guardar la información?', function(btn){
				if ( btn === 'yes' ) {
			    	var _vs = fextpub_sessionVariables();
			        _frm.getForm().submit({
						method: 'POST',  url: 'php/operations_packings_save.php',
						params:{ xx0005: 'YES', Alma_key: _win.down('#alma_key').getValue(), xxPallets: _pallets, xxPackings_det: _packings_det,
								 zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
		                waitTitle: translations.valida_titulo,
		                waitMsg: translations.valida_mensaje01,
			            
			            success: function(form, action) {
			            	var _result = Siace.util.Util.decodeJSON(action.response.responseText);
			                if ( _result.success ) {
			                	if ( _win.getCallStore() !== null ) {
			                		_win.getCallStore().load();
			                	}
			                    _win.close(); _win.destroy();
			                } else {
			                    Siace.util.Util.showErrorMsg(result.msg);
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

	ope_btnUndoClick: function(button, e, options) {
		button.up('window').close();
	},

	ope_btnExitClick: function(button, e, options) {
		button.up('window').close();
	},

	ope_btnAddClick: function(button, e, options) {
		var _alma_key = button.up('window').down('#alma_key').getValue();
		if ( _alma_key.length !== 32 ) { return false; }
		if ( button.up('window').down('#pall_id').getValue()*1 <= 0 ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar el Pallet al que pertenecera el item'); return false; }
		fext_windowSearch(this.getPbss_Public_Bienes_ServsSearchM(), button.up('window'), 'Siace.view.public.Bienes_ServsSearchM', translations.buscar_mercancia, '', _alma_key, 'ADD_PACKING', false);
	},

	ope_btnPack_pdfDeleteClick: function(button, e, options) {
		var _win = button.up('window');
		_win.down('#ffiPack_pdf').reset();
		_win.down('#pack_pdf').setValue('');
		_win.down('#ffiPack_pdf').show(); button.hide(); _win.down('#btnPack_pdfDownload').setDisabled(true);
    },

	ope_btnPack_pdfDownloadClick: function(button, e, options) {
		var _file = button.up('window').down('#ffiPack_pdf').fileInputEl.dom.files[0];
		var _src = 'php/resources/download_file.php?xxTable=operations_packings&xxField=pdf&xxFile_name=' + button.up('window').down('#pack_key').getValue() +'_'+ button.up('window').down('#pack_pdf').getValue();
		fext_FileDownload(_file, _src);
	},

	ope_btnPall_newClick: function(button, e, options) {
		var _win = button.up('window');
	    //Ext.get(_win.getEl()).mask(translations.mensaje_esperar, 'loading');

	    var _typeEdit = '13';
	    var _winPallets = Ext.create('Siace.view.operations.PalletsEdit');
	    if ( _win.down('#pall_id').getValue()*1 > 0 ) {
			var _typeEdit = '17';
	    	var _data = _win.down('#pall_id').getStore().findRecord('pall_id', _win.down('#pall_id').getValue()*1);
			_winPallets.down('#pall_id').setValue(_data.data['pall_id']);
	    	_winPallets.down('#pall_nro').setValue(_data.data['pall_nro']);
	    	_winPallets.down('#pall_peso').setValue(_data.data['pall_peso']);
	    	_winPallets.down('#pall_observ').setValue(_data.data['pall_observ']);
	    }
	    _winPallets.setTypeEdit(_typeEdit);
	    _winPallets.setTypeReturn('Siace.view.operations.PackingsEdit');
	    _winPallets.setCallWindow(_win);
	    _winPallets.setCallStore(_win.down('#pall_id').getStore());
	    _winPallets.show();
	    //Ext.get(_win.getEl()).unmask();
	},

	ope_btnPers_searchClick: function(button, e, options) {
		fext_windowSearch(undefined, button.up('window'), 'Siace.view.public.PersonasSearch', translations.public_personassearch_title, button.up('window').down('#pers_key').getValue(), 'EXPORTADORES', 'EXPORTADORES', '');
	},

	ope_btnRejectClick: function(button, e, options) {
		if ( options == undefined ) {
	        var _record = this.getOpe_grdOperations_packings_det().getSelectionModel().getSelection();
	        if ( _record.length !== 1 ) { return false; }

			var _win = Ext.create('Siace.view.public.UsuariosPsw2');
			_win.setCallButton(button); _win.setCallKey(_record[0].data.packdet_key);
			_win.setFormType('reject_item');
			_win.setSubTitle('Pallet '+_record[0].data.pall_codigo +': &nbsp; '+ (_record[0].data.bsalma_code == '' ? _record[0].data.bs_codigo : _record[0].data.bsalma_code));
			_win.show();
		} else {
			var _win = options.win;
			var _window = this.getOpe_grdOperations_packings_det().up('window');
			var _record = this.getOpe_grdOperations_packings_det().getView().getSelectionModel().getSelection()[0];
			Ext.get(_window.getEl()).mask('Validando información... por favor espere un momento...', 'loading');
			fextpub_sessionVariables();
			Ext.Ajax.request({
				url: 'php/operations_packings_det_save_fase.php',
				params: { xx0005: 'YES', xxPackdet_key: _record.data.packdet_key, xxPack_key: _window.down('#pack_key').getValue(), xxFase_id: _record.data.fase_id,
				          xxUsur_psw2: options.usur_psw2, xxPackdetfase_observ: options.observ,
				          xxAction: 'reject', xxMenu_id: _window.getCallWindow().getMenuId(),
				          xxUsursess_key: xxUsursess_key, xxUsur_key: xxUsur_key, xxAlma_key: xxAlma_key },
				success: function(conn, response, options, eOpts) {
					Ext.get(_window.getEl()).unmask();
					var _result = Siace.util.Util.decodeJSON(conn.responseText);

					if ( _result.success ) {
						_win.close(); _win.destroy();
				        _record.set('fase_id', _result.key.substr(32)*1); _record.commit();
					} else {
						Siace.util.Util.showErrorMsg(_result.msg);
					}
				},
				failure: function(conn, response, options, eOpts) {
					Ext.get(_window.getEl()).unmask();
					Siace.util.Util.showErrorMsg(conn.responseText);
				}
			});
		}
	},

	ope_btnSuppressClick: function(button, e, options) {
		var _selection = this.getOpe_grdOperations_packings_det().getSelectionModel().getSelection()[0];
        if ( _selection ) {
            this.getOpe_grdOperations_packings_det().getStore().remove(_selection);
            button.setDisabled(true);
            if ( this.getOpe_grdOperations_packings_det().getStore().getCount() == 0 ) { button.up('window').down('#alma_key').setDisabled(false); }
		}
	},

	ope_acOperations_packings_detCLick: function(grid, cell, row, col, e, record, t) {
		var _win = grid.up('window');
		if ( _win.getTypeEdit() == '41' ) {
			Ext.get(_win.getEl()).mask('Validando información... por favor espere un momento...', 'loading');			
			var _vs = fextpub_sessionVariables();
			Ext.Ajax.request({
				url: 'php/operations_packings_det_save_fase.php',
				params: { xx0005: 'YES', xxPackdet_key: record.data.packdet_key, xxPack_key: _win.down('#pack_key').getValue(), xxFase_id: record.data.fase_id,
				          xxAction: (record.data.fase_id == '320' ? 'return' : 'ok'), xxMenu_id: _win.getCallWindow().getMenuId(),
				          zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
				success: function(conn, response, options, eOpts) {
					Ext.get(_win.getEl()).unmask();
					var _result = Siace.util.Util.decodeJSON(conn.responseText);

					if ( _result.success ) {
				        record.set('fase_id', _result.key.substr(32)*1); record.commit();
						/*var _store = grid.getStore(); // otra forma recorriendo el store hasta encontrar el deseaso
						_store.each(function(rec, idx) {
						    if ( rec.data.packdet_key == record.data.packdet_key ) {
						        rec.set('fase_id', _result.key.substr(32)*1);
						        rec.commit();
						    }
						}); */
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

	ope_alma_keyChange: function(combo, newValue, oldValue, options) {
		if ( oldValue != undefined ) { 
			if ( this.getPbss_Public_Bienes_ServsSearch() !== undefined ) { this.getPbss_Public_Bienes_ServsSearch().close();  this.getPbss_Public_Bienes_ServsSearch().destroy(); }
		}
	},

	ope_ffiPack_pdfChange: function(filefield, value, options) {
		var _win = filefield.up('window');
		fext_FileReader(filefield, /pdf/, '[PDF]', 1048576, '1 MB', _win.down('#btnPack_pdfDelete'), _win.down('#btnPack_pdfDownload'));
	},

	ope_grdOperations_packings_detSelectionchange: function(model, record, options) {
		var _win = this.getOpe_grdOperations_packings_det().up('window');
		if ( record.length == 1 ) {
			if ( fjsIn_array(_win.getTypeEdit(), ['1','2']) ) {
				_win.down('#btnSuppress').setDisabled(false);
			} else if ( fjsIn_array(_win.getTypeEdit(), ['41']) ) {
				_win.down('#btnReject').setDisabled(record[0].data.fase_id == 301 ? false : true);
			}
		}
	},

	ope_pall_idChange: function(combo, newValue, oldValue, options) {
		var _detalle = ( newValue*1 == 0 ? '' : ' Total Peso = '+combo.getStore().findRecord('pall_id', combo.getValue()*1).data['pall_peso']+' Kgs.' );
		combo.up('window').down('#pall_detalle').setValue(_detalle);
		var _typeEdit = combo.up('window').getTypeEdit();
		if ( fjsIn_array(_typeEdit, ['1','2']) ) {
			if ( newValue == '' ) {
				combo.up('window').down('#btnPall_new').setIconCls('icon_Add_90');
				combo.up('window').down('#btnPall_new').setTooltip('Agregar Pallet');
			} else {
				combo.up('window').down('#btnPall_new').setIconCls('icon_Modify_90');
				combo.up('window').down('#btnPall_new').setTooltip('Modificar Pallet');
			}
		}

		this.getOpe_grdOperations_packings_det().getStore().clearFilter(true);
		if ( combo.getValue()*1 > 0 ) {
			this.getOpe_grdOperations_packings_det().getStore().filter({
				property: 'pall_id',  value: combo.getValue()*1,  exactMatch: true,
	  		});
	  	}
	  	this.getOpe_grdOperations_packings_det().getView().refresh(true);
	},

	ope_pers_rucBlur: function(textfield, e, options) {
		this.ope_pers_rucSearch('0', textfield.up('form'));
	},

	ope_pers_rucFocus: function(textfield, e, options) {
		this.ope_pers_rucSearch('1', textfield.up('form'));
	},

	ope_pers_rucKeypress: function(textfield, e, options) {
		if( e.getCharCode() == 13 ) { this.ope_pers_rucSearch('13', textfield.up('form')); }
	},

	ope_pers_rucSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['pers_key', 'PERS_RUC', 'pers_ruc', 'pers_nombre'],
			            ['php/public_personas_json_records.php', 'xxPers_ruc', 'textfield_search', ''], '',
			            ['', '', [''], '']);
	},

	ope_tipbul_idChange: function(combo, newValue, oldValue, options) {
		if ( fjsIn_array(combo.up('window').getTypeEdit(), ['1','2']) ) {
			if ( combo.getValue()*1 > 0 ) {
				combo.up('window').down('#regadua_cantid').setDisabled(false);
			}  else {
				combo.up('window').down('#regadua_cantid').setDisabled(true);
				combo.up('window').down('#regadua_cantid').setValue('');
			}
		}
	},


	orae_fn_tipos_movimientoFilter: function(combo, tipregadua_id, tipmov_id) {
		var _ing = (tipregadua_id == '1' ? '1' : '');
		var _sal = (tipregadua_id == '2' ? '1' : '');
		combo.getStore().load({
			params: { xxTipmov_estado_ingresos: _ing, xxTipmov_estado_salidas: _sal, xxType_record: 'cbo' },
			callback: function(opt, success, respon) {
				combo.setValue( tipmov_id == '' ? combo.getStore().getAt(0).data.tipmov_id : tipmov_id );
    		}
		});
	}
});