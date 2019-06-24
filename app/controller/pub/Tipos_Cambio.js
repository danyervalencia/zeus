Ext.define('Siace.controller.public.Tipos_Cambio', {
	extend: 'Ext.app.Controller',
	stores: [ 'public.Tipos_Cambio', ],
	views: [ 'public.Tipos_CambioBrowse', 'public.Tipos_CambioEdit', ],

	init: function(application) {
		this.control({
			'public_tipos_cambiobrowse': { beforerender: this.ptcb_BeforeRender, },
			'public_tipos_cambiobrowse #opc_id': { change: this.ptcb_opc_idChange, },
			'public_tipos_cambiobrowse #btnNew': { click: this.ptcb_btnNewClick },
			'public_tipos_cambiobrowse #btnModify': { click: this.ptcb_btnModifyClick },
			'public_tipos_cambiobrowse #btnQuery': { click: this.ptcb_btnQueryClick },
			'public_tipos_cambiobrowse #fechafin': { change: this.ptcb_fechainiChange },
			'public_tipos_cambiobrowse #fechaini': { change: this.ptcb_fechafinChange, },
			'public_tipos_cambiobrowse #grdPublic_tipos_cambio': { selectionchange: this.ptcb_grdPublic_tipos_cambioSelectionChange, },

            'public_tipos_cambioedit': { beforeshow: this.ptce_BeforeShow, },
            'public_tipos_cambioedit #btnSave': { click: this.ptce_btnSaveClick, },
            'public_tipos_cambioedit #btnUndo': { click: this.ptce_btnUndoClick, },
            'public_tipos_cambioedit #btnExit': { click: this.ptce_btnExitClick, },
		});
	},


	ptcb_BeforeRender: function(component, options) {
		fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': component.down('#opc_id'), 'menu_id': component.getMenuId() });
		component.down('#fechaini').setValue(fjsDateFirstDayMonth());
		component.down('#fechafin').setValue(fjsDateCurrent());

		var _store = Ext.create('Siace.store.public.Tipos_Cambio');
		var _grid = component.down('#grdPublic_tipos_cambio');
		var _pagingtoolbar = component.down('#pgtPublic_tipos_cambio');
		_grid.bindStore(_store);  _pagingtoolbar.bindStore(_store);
		_store.sort('tipcamb_fecha', 'ASC'); _store.pageSize = 500;
		_store.on('beforeload', function(store, operations, eOpts) {
			component.down('#btnModify').disable(); component.down('#btnDelete').disable();

			store.getProxy().setExtraParam('xxFechaini', component.down('#fechaini').getSubmitData());
			store.getProxy().setExtraParam('xxFechafin', component.down('#fechafin').getSubmitData());
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		}); _store.load();
	},

	ptcb_Clean: function(poComponent) {
		var _store = poComponent.down('#pgtPublic_tipos_cambio').getStore();
		var _pagingtoolbar = poComponent.down('#pgtPublic_tipos_cambio');
		fext_gridClean(_store, _pagingtoolbar);

		poComponent.down('#btnModify').disable(); poComponent.down('#btnDelete').disable();
	},

	ptcb_ViewEdit: function(pcTypeEdit, poComponent){
	    if ( fjsIn_array(pcTypeEdit, ['2','3']) ) {
	    	var _record = poComponent.down('#grdPublic_tipos_cambio').getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }
	    }

	    var _win = Ext.create('Siace.view.public.Tipos_CambioEdit');
	    _win.setTypeEdit(pcTypeEdit); _win.setCallStore(poComponent.down('#grdPublic_tipos_cambio').getStore());
	    if ( fjsIn_array(pcTypeEdit, ['2','3']) ) { _win.setCallKey(_record.data.tipcamb_id); }
	    _win.show();
	},

	ptcb_opc_idChange: function(combo, newValue, oldValue, options) {
		combo.up('panel').down('#btnNew').setDisabled(fextpub_uamoButtons(combo, 1));
	},

	ptcb_btnNewClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 1) ) { return false; } this.ptcb_ViewEdit('1', button.up('panel'));
	},

	ptcb_btnModifyClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 2) ) { return false; } this.ptcb_ViewEdit('2', button.up('panel'));
	},

	ptcb_btnQueryClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 3) ) { return false; } this.ptcb_ViewEdit('3', button.up('panel'));
	},

	ptcb_fechainiChange: function(datefield, nextValue, oldValue, options) {
		this.ptcb_Clean(datefield.up('panel'));
	},

	ptcb_fechafinChange: function(datefield, nextValue, oldValue, options) {
		this.ptcb_Clean(datefield.up('panel'));
	},
	
	ptcb_grdPublic_tipos_cambioSelectionChange: function(model, record, options) {	
		if ( record.length == 1 ) {
			var _panel = model.view.panel.up('panel'); var _cboOpc_id = _panel.down('#opc_id');
			_panel.down('#btnModify').setDisabled(fextpub_uamoButtons(_cboOpc_id, 2));
			_panel.down('#btnDelete').setDisabled(fextpub_uamoButtons(_cboOpc_id, 2));
		}
	},

	ptce_BeforeShow: function(component, options) {
		var _typeEdit = component.getTypeEdit();
		var _cboMone_01 = component.down('#mone_01');  var _cboMone_02 = component.down('#mone_02');
		_cboMone_01.bindStore(Ext.create('Siace.store.public.Monedas'));
		_cboMone_02.bindStore(Ext.create('Siace.store.public.Monedas'));

		var _typeEdit = component.getTypeEdit();
        if ( _typeEdit == '1' ) {
        	component.down('#tipcamb_fecha').setValue(fjsDateCurrent());
			_cboMone_01.getStore().load({
				params: { xxMone_id: '1', xxType_record: 'combo', xxOrder_by: 'mone_nombre' },
				callback: function(records, operations, success) {
					if ( records.length > 0 ) { _cboMone_01.enable(); _cboMone_01.setValue(records[0].data.mone_id); }
					else { _cboMone_01.disable(); _cboMone_01.setValue(''); }
				}
			});

			_cboMone_02.getStore().load({ 
				params: { xxType_record: 'combo', xxType_query: 'SOLO_EXTRANJERA', xxOrder_by: 'mone_nombre' },
				callback: function(records, operations, success) {
					if ( records.length > 0 ) { _cboMone_02.enable(); _cboMone_02.setValue(records[0].data.mone_id); }
					else { _cboMone_02.disable(); _cboMone_02.setValue(''); }
				}
			});

        	var _icon = 'icon_New_90'; var _title = translations.public_tipos_cambioedit_title_new;
        } else if ( fjsIn_array(_typeEdit, ['2','3']) ) {
	        var _form = component.down('form');
	   		_form.load({
	   			method: 'POST', url: 'php/public_tipos_cambio_json_records.php',
	            params: { xxTipcamb_id: component.getCallKey(), xxType_record: 'form' },
	            waitMsg: 'Loading...',
	            success: function (form, action) {
	                try {
	                    var _model = Ext.create('Siace.model.public.Tipo_Cambio'); var _result = Ext.decode(action.response.responseText);
	                    if ( _result.data[0] ) {
	                        _model.set(_result.data[0]);  _form.loadRecord(_model);
							_cboMone_01.getStore().add({ mone_id: _result.data[0].mone_01, mone_nombre: _result.data[0].mo01_nombre, }); _cboMone_01.setValue(_result.data[0].mone_01*1);
							_cboMone_02.getStore().add({ mone_id: _result.data[0].mone_02, mone_nombre: _result.data[0].mo02_nombre, }); _cboMone_02.setValue(_result.data[0].mone_02*1);
	                    }
	                }
	                catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
	            },
	            failure: function (form, action) { Ext.Msg.alert("Load failed", action.result.errorMessage); }
	        });

        	if ( _typeEdit == '2' ) { 
        		var _icon = 'icon_Modify_90'; var _title = translations.public_tipos_cambioedit_title_modify;
        		component.down('#tipcamb_fecha').disable(); component.down('#mone_01').disable(); component.down('#mone_02').disable();
        	} else {
        	}
        }
        component.setIconCls(_icon); component.setTitle(_title);
	},

	ptce_btnSaveClick: function(button, e, options) {
	    var _win = button.up('window'); var _frm = _win.down('form');
	    if ( _win.down('#tipcamb_fecha').getValue() == null || _win.down('#tipcamb_fecha').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar la FECHA del Tipo de Cambio', function() { _frm.down('#tipcamb_fecha').focus(); }); return false ; }
	    if ( _win.down('#mone_01').getValue() == '' || _win.down('#mone_01').getValue()*1 <= 0 ) {
		    Ext.Msg.alert(translations.mensaje, 'Debe indicar la Moneda 1', function() { _frm.down('#mone_01').focus(); }); return false ; }
	    if ( _win.down('#mone_02').getValue() == '' || _win.down('#mone_02').getValue()*1 <= 0 ) {
		    Ext.Msg.alert(translations.mensaje, 'Debe indicar la Moneda 2', function() { _frm.down('#mone_02').focus(); }); return false ; }
	    if ( _win.down('#tipcamb_compra').getValue() == '' || _win.down('#tipcamb_compra').getValue()*1 <= 0 ) {
		    Ext.Msg.alert(translations.mensaje, 'Debe indicar el importe para Compra', function() { _frm.down('#tipcamb_compra').focus(); }); return false ; }
	    if ( _win.down('#tipcamb_venta').getValue() == '' || _win.down('#tipcamb_venta').getValue()*1 <= 0 ) {
		    Ext.Msg.alert(translations.mensaje, 'Debe indicar el importe para Venta', function() { _frm.down('#tipcamb_venta').focus(); }); return false ; }

	    if ( _frm.getForm().isValid() ) {
	    	var _vs = fextpub_sessionVariables();
	        _frm.getForm().submit({
				method: 'POST', url: 'php/public_tipos_cambio_save.php',
				params:{ xx0005: 'YES',  xxTipcamb_fecha: _win.down('#tipcamb_fecha').getSubmitData(), xxMone_01: _win.down('#mone_01').getValue(), xxMone_02: _win.down('#mone_02').getValue(),
				         zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
                waitTitle: translations.valida_titulo, waitMsg: translations.valida_mensaje01,
	            
	            success: function(form, action) {
	            	var _result = Siace.util.Util.decodeJSON(action.response.responseText);
	                if ( _result.success ) {
			            if ( _win.getCallStore() !== null ) {
			            	_win.getCallStore().load();
					    } else if ( _win.getCallWindow() !== null ) {
					    	_win.getCallWindow().down('#pers_key').setValue(_result.pers_key);
			    			_win.getCallWindow().down('#pers_ruc').setValue(_frm.down('#pers_ruc').getValue());
			        		_win.getCallWindow().down('#pers_nombre').setValue(_frm.down('#pers_nombre').getValue());
			        	}
	                    _win.close();
	                } else { Siace.util.Util.showErrorMsg(result.msg); }
	            },
	            failure: function(form, action) { Siace.util.Util.showErrorMsg(action.response.responseText); }
	        });
	    }
	},

	ptce_btnUndoClick: function(button, e, options) {
		button.up('window').close();
	},

	ptce_btnExitClick: function(button, e, options) {
		button.up('window').close();
	},
});