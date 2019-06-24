Ext.define('Siace.controller.operations.Pallets', {
	extend: 'Ext.app.Controller',
	views: [
		'operations.PalletsEdit', // 'operations.GuiasBrowse', 
	],

	init: function(application) {
		this.control({
			'operations_palletsedit': {
                beforeshow: this.ope_BeforeShow,
				//close: this.oge_Close,
			},
            'operations_palletsedit #btnSave': {
                click: this.ope_btnSaveClick,
            },
            'operations_palletsedit #btnUndo': {
                click: this.ope_btnUndoClick,
            },
		});
	},

	ope_BeforeShow: function(component, options) {
		var _typeEdit = component.getTypeEdit();
	    if ( _typeEdit == '13' ) {
	    	//fext_removeAddConfig(component.down('#fcGuia_ing_peso'), '', 'lbl00601');
	    	//fext_removeAddConfig(component.down('#fcGuia_sal_peso'), '', 'lbl00601');
	        var _icon = 'icon_Add_90'; var _title = translations.operations_palletsedit_title_add;
	    } else if ( fjsIn_array(_typeEdit, ['2','3']) ) {
	        fextpub_almacenesCombo(component.down('#alma_key'), true, '', '', 'combo');
	        var _form = component.down('form');
	        _form.load({
	            method: 'POST', url: 'php/operations_guias_json_records.php',
	            params: { xxGuia_key: component.getCallKey(),  xxType_record: 'form' },
	            waitMsg: 'Loading...',
	            success: function (form, action) {
	                try {
	                    var _model = Ext.create('Siace.model.operations.Guia');
	                    var _result = Ext.decode(action.response.responseText);
	                    if ( _result.data[0] ) {
	                        _model.set(_result.data[0]);  _form.loadRecord(_model);

	                        if ( _model.data.indiv_pdf !== '' ) {
	                            if ( _typeEdit == '2' ) { component.down('#ffiIndiv_pdf').hide(); component.down('#btnIndiv_pdfDelete').show(); }
	                            component.down('#btnIndiv_pdfDownload').setDisabled(false);
	                        }
	                    }
	                }
	                catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
	            },
	            failure: function (form, action) {
	                Ext.Msg.alert("Load failed", action.result.errorMessage);
	            }
	        });

	        if ( _typeEdit == '2' ) {
	            var _icon = 'icon_Modify_90'; var _title = translations.public_individuosedit_title_modify; 
	            component.down('#indiv_dni').setDisabled( component.down('#tipdocident_id').getValue() == '99' ? true : false );
	        } else { 
	            var _icon = 'icon_Query_90'; var _title = translations.public_individuosedit_title_consulta; 
	            component.down('#tipdocident_id').setDisabled(true); component.down('#indiv_dni').setDisabled(true); component.down('#ffiIndiv_pdf').setDisabled(true);
	            component.down('#indiv_appaterno').setDisabled(true); component.down('#indiv_apmaterno').setDisabled(true); component.down('#indiv_nombres').setDisabled(true);
	            component.down('#tipsex_id').setDisabled(true); component.down('#tipestaciv_id').setDisabled(true); component.down('#indiv_fechanac').setDisabled(true);
	            component.down('#pais_id').setDisabled(true); component.down('#dpto_id').setDisabled(true); component.down('#prvn_id').setDisabled(true); component.down('#dstt_id').setDisabled(true);
	            component.down('#ffiIndiv_foto').setDisabled(true); component.down('#ffiIndiv_foto').setDisabled(true);
	            component.down('#indiv_mail').setDisabled(true); component.down('#indiv_observ').setDisabled(true);
	            component.down('#btnSave').setDisabled(true); component.down('#btnUndo').setDisabled(true); component.down('#btnExit').setDisabled(false);
	        }
	    }
	    component.setIconCls(_icon); component.setTitle(_title);
	},

	ope_btnSaveClick: function(button, e, options) {
	    var _win = button.up('window');  var _frm = _win.down('form');
	    if ( _win.down('#pall_nro').getValue() == '' || _win.down('#pall_nro').getValue()*1 <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el Número de Pallet'); return false ; }
	    if ( _win.down('#pall_peso').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el Peso del Pallet'); return false ; }

	    if ( _frm.getForm().isValid() ) {
	    	if ( fjsIn_array(_win.getTypeEdit(), ['13','17']) ) {
	    		var _store = _win.getCallStore(); var _locate = false;
				_store.each(function(record){
					if ( record.get('pall_nro') == _win.down('#pall_nro').getValue() && record.get('pall_id') !== _win.down('#pall_id').getValue()*1 ) { _locate = true; }
        		});
        		if ( _locate == true ) { Ext.Msg.alert(translations.mensaje, 'Número de Pallet ya se encuentra registrado'); return false; }

				if ( _win.getTypeEdit() == '13' ) {
	    			var _pall_id = _store.last().data['pall_id'] + 1;
	    			_store.add({ pall_id: _pall_id, pall_nro: _frm.down('#pall_nro').getValue(), pall_peso: _frm.down('#pall_peso').getValue(),
	    		    	         pall_observ: _frm.down('#pall_observ').getValue(), pall_codigo: fjsLpad(_frm.down('#pall_nro').getValue(),2,'0') });
	    			if ( _win.getTypeReturn() == 'Siace.view.operations.PackingsEdit' ) {
	    				_win.getCallWindow().down('#pall_id').setValue( _pall_id );
	    			}
	    		} else {
		    		var _store = _win.getCallStore();
		    		var _data = _store.findRecord('pall_id', _win.down('#pall_id').getValue()*1);
		    		_data.data['pall_nro'] = _frm.down('#pall_nro').getValue();
		    		_data.data['pall_peso'] = _frm.down('#pall_peso').getValue();
		    		_data.data['pall_observ'] = _frm.down('#pall_observ').getValue();
		    		_data.data['pall_codigo'] = fjsLpad(_frm.down('#pall_nro').getValue(), 2, '0');
		    		if ( _win.getTypeReturn() == 'Siace.view.operations.PackingsEdit' ) {
		    			_win.getCallWindow().down('#pall_detalle').setValue(' Total Peso = '+_frm.down('#pall_peso').getValue()+' Kgs.' );
		    		}
		    	}
				_win.close(); _win.destroy();
	    	} else {
		    	var _vs = fextpub_sessionVariables();
		        _frm.getForm().submit({
					method: 'POST', url: 'php/operations_guias_save.php',
					params:{ xx0005: 'OK', xxType_edit: _win.getTypeEdit(), Alma_key: _win.down('#alma_key').getValue(),
					         xxGuia_ing_peso: _guia_ing_peso, xxGuia_sal_peso: _guia_sal_peso, xxRegadua_key: _regadua_key,
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
	    }
	},

	ope_btnUndoClick: function(button, e, options) {
		button.up('window').close();  button.up('window').destroy();
	},
});