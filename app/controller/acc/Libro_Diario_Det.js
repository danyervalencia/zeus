Ext.define('Siace.controller.accounting.Libro_Diario_Det', {
	extend: 'Ext.app.Controller',
	views: ['accounting.Libro_Diario_DetEdit', ],

	init: function(application) {
		this.control({
            'accounting_libro_diario_detedit': { beforeshow: this.aldde_BeforeShow, },
            'accounting_libro_diario_detedit #btnSave': { click: this.aldde_btnSaveClick, },
            'accounting_libro_diario_detedit #btnUndo': { click: this.aldde_btnUndoClick, },
            'accounting_libro_diario_detedit #btnExit': { click: this.aldde_btnExitClick, },
            'accounting_libro_diario_detedit #btnPctbl_search': { click: this.aldde_btnPctbl_searchClick, },
            'accounting_libro_diario_detedit #libdiadet_type': { change: this.aldde_libdiadet_typeChange, },
            'accounting_libro_diario_detedit #pctbl_cuenta': { blur: this.aldde_pctbl_cuentaBlur, focus: this.aldde_pctbl_cuentaFocus, keypress: this.aldde_pctbl_cuentaKeypress, },
		});
	},


	aldde_BeforeShow: function(component, options) {
		var _typeEdit = component.getTypeEdit(); var _form = component.down('form');
   		_form.load({
   			method: 'POST', url: 'php/accounting_libro_diario_json_records.php',
            params: { xxLibdia_id: component.down('#libdia_id').getValue(),  xxType_record: 'window', xxOrder_by : 'libdia_id' }, waitMsg: 'Loading...',
            success: function (form, action) {
                try {
                    var _model = Ext.create('Siace.model.accounting.Libro_Diario'); var _result = Ext.decode(action.response.responseText);
                    if ( _result.data[0] ) {
                        _model.set(_result.data[0]);  _form.loadRecord(_model);
                        _form.down('#subdia_codename').setValue(_model.data.subdia_code +' - '+ _model.data.subdia_nombre); 
						_form.down('#libdia_record').setValue(_model.data.libdia_record);
						_form.down('#documento').setValue(_model.data.documento);
						_form.down('#libdia_monto').setValue(fjsFormatNumeric(_model.data.libdia_monto_me*1 > 0 ? _model.data.libdia_monto_me : _model.data.libdia_monto, 2));
                        //_form.down('#ped_fecha').setValue(Ext.Date.format(_model.data.ped_fecha, 'd/m/Y')); _form.down('#tipped_nombre').setValue(_model.data.tipped_nombre);
                    }
                }
                catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
            },
            failure: function (form, action) { Ext.Msg.alert("Load failed", action.result.errorMessage); }
        });		

		var _str = Ext.create('Ext.data.Store', {
			fields: [ { name: 'libdiadet_type', type: 'int' }, { name: 'libdiadet_typename', type: 'string' }, ],
			data: [{ libdiadet_type: 1, libdiadet_typename: 'Debe' }, { libdiadet_type: 2, libdiadet_typename: 'Haber' }, ]
		});
		var _cboLibdiadet_type = component.down('#libdiadet_type');
		_cboLibdiadet_type.bindStore(_str);
		_cboLibdiadet_type.getStore().load({ callback: function(records, operations, success) { } });

		var _cboLDDP = component.down('#libdiadet_parent');
		_cboLDDP.bindStore(Ext.create('Siace.store.accounting.Libro_Diario_Det'));
		_cboLDDP.getStore().on('beforeload', function(store, operations, options) {
	        store.getProxy().setExtraParam('xxLibdia_id', component.down('#libdia_id').getValue());
	        store.getProxy().setExtraParam('xxType_record', 'EDIT_ONLY');
	        //store.getProxy().setExtraParam('xxType_query', _type_query);
	        store.getProxy().setExtraParam('xxOrder_by', 'pctbl_codename');
		});

        if ( _typeEdit == '1' ) {
        	var _icon = 'icon_New_90'; var _title = 'Nuevo asiento contable';
        	fext_removeAddCls(component.down('#libdiadet_parent'), 'myDisabledClass', 'x-item-disabled');
        } else if ( fjsIn_array(_typeEdit, ['2','3']) ) {
	        var _form = component.down('form');
	   		_form.load({
	   			method: 'POST', url: 'php/accounting_libro_diario_det_json_records.php',
	            params: { xxLibdia_id: component.getCallKey(), xxType_record: 'form' }, waitMsg: 'Loading...',
	            success: function (form, action) {
	                try {
	                    var _model = Ext.create('Siace.model.accounting.Persona_Fono'); var _result = Ext.decode(action.response.responseText);
	                    if ( _result.data[0] ) {
	                    	_model.set(_result.data[0]);  _form.loadRecord(_model);  var _data = _result.data[0];
	                    	component.down('#persfono_estado').setValue( _model.data.persfono_estado == '1' ? true : false);
	                    }
	                }
	                catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
	            },
	            failure: function (form, action) { Ext.Msg.alert("Load failed", action.result.errorMessage); }
	        });

        	if ( _typeEdit == '2' ) { 
        		var _icon = 'icon_Modify_90'; var _title = 'Modificación de Registro Telefónico';
        	} else {
        		var _icon = 'icon_Query_90'; var _title = 'Consulta de Registro Telefónico';
        		component.down('#tipfono_id').disable(); component.down('#compfono_id').disable(); component.down('#persfono_nro').disable();
        		component.down('#persfono_estado').disable(); component.down('#persfono_observ').disable();
        		component.down('#btnSave').disable(); component.down('#btnUndo').disable(); component.down('#btnExit').enable();
        	}
        }
        component.setIconCls(_icon); component.setTitle(_title);
	},

	aldde_btnSaveClick: function(button, e, options) {
	    var _win = button.up('window'); var _frm = _win.down('form');
	    if ( _win.down('#libdiadet_type').getValue() == undefined || _win.down('#libdiadet_type').getValue() == '' ) {
		    Ext.Msg.alert(translations.mensaje, 'Debe indicar el tipo para el asiento contable', function() { _frm.down('#libdiadet_type').focus(); }); return false ; }
	    if ( _win.down('#pctbl_id').getValue() == undefined || _win.down('#pctbl_id').getValue() == '' ) {
		    Ext.Msg.alert(translations.mensaje, 'Debe indicar la cuenta contable', function() { _frm.down('#pctbl_id').focus(); }); return false ; }
	    if ( _win.down('#libdiadet_monto').getValue() == undefined || _win.down('#libdiadet_monto').getValue() == '' ) {
		    Ext.Msg.alert(translations.mensaje, 'Debe indicar el importe del contable', function() { _frm.down('#libdiadet_monto').focus(); }); return false ; }

	    if ( _frm.getForm().isValid() ) {
	    	var _vs = fextpub_sessionVariables();
	        _frm.getForm().submit({
				method: 'POST', url: 'php/accounting_libro_diario_det_save.php',
				params:{ xx0005: 'YES',
				         zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
                waitTitle: translations.valida_titulo, waitMsg: translations.valida_mensaje01,
	            
	            success: function(form, action) {
	            	var _result = Siace.util.Util.decodeJSON(action.response.responseText);
	                if ( _result.success ) {
			            if ( _win.getCallStore() !== null ) {
			            	_win.getCallStore().load();
			        	}
	                    _win.close();
	                } else { Siace.util.Util.showErrorMsg(result.msg); }
	            },
	            failure: function(form, action) { Siace.util.Util.showErrorMsg(action.response.responseText); }
	        });
	    }
	},

	aldde_btnUndoClick: function(button, e, options) {
		button.up('window').close();
	},

	aldde_btnExitClick: function(button, e, options) {
		button.up('window').close();
	},

	aldde_btnPctbl_searchClick: function(button, e, options) {
 		//ext_windowSearch(this.getPns_Public_Partidas_ArancelariasSearch(), button.up('window'), 'Siace.view.public.Partidas_ArancelariasSearch', translations.public_partidas_arancelariassearch_title, button.up('window').down('#partaran_key').getValue(), '', '', false);
	},

	aldde_libdiadet_typeChange: function(combo, newValue, oldValue, options) {
		var _win = combo.up('window'); var _cboLDDP = _win.down('#libdiadet_parent');
		if ( newValue == '1' ) { 
			fext_removeAddCls(_cboLDDP, 'myDisabledClass', 'x-item-disabled'); _cboLDDP.disable();
			_cboLDDP.getStore().removeAll(); _cboLDDP.setValue('');
		} else { 
			fext_removeAddCls(_cboLDDP, 'x-item-disabled', 'myDisabledClass'); _cboLDDP.enable();
		    _cboLDDP.getStore().load({
		        callback: function(records, operations, success) {
		            //if ( (records.length > _length) && _setValue ) { _obj.setDisabled(_disabled); _obj.setValue(records[0].data.bscat_id); }
		            //else if ( records.length > _length ) { _obj.setDisabled(_disabled); }
		            //else { _obj.disable();  _obj.setValue(''); }
		        }
		    });
		}
	},

	aldde_pctbl_cuentaBlur: function(textfield, The, options) {
		this.aldde_pctbl_cuentaSearch('0', textfield.up('form'));
	},

	aldde_pctbl_cuentaFocus: function(textfield, The, options) {
		this.aldde_pctbl_cuentaSearch('1', textfield.up('form'));
	},

	aldde_pctbl_cuentaKeypress: function(textfield, e, options) {
		if( e.getCharCode() == 13 ) { this.aldde_pctbl_cuentaSearch('13', textfield.up('form')); }
	},

	aldde_pctbl_cuentaSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['pctbl_id', 'PCTBL_CUENTA', 'pctbl_cuenta', 'pctbl_nombre'], 
			            ['php/accounting_plan_contable_json_records.php', 'xxPctbl_cuenta', 'textfield_search', ''], '', '');
	},
});