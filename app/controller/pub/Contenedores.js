Ext.define('Siace.controller.public.Contenedores', {
	extend: 'Ext.app.Controller',
	views: [
		 'public.ContenedoresEdit', 'public.ContenedoresSearch',
	],
    refs: [
        { ref: 'pce_frmPublic_contenedores', selector: 'public_contenedoresedit #frmPublic_contenedores' },
        { ref: 'pcs_grdPublic_contenedores', selector: 'public_contenedoressearch #grdPublic_contenedores' },
        { ref: 'pcs_Public_ContenedoresSearch', selector: 'public_contenedoressearch' },
    ],

	init: function(application) {
		this.control({
            'public_contenedoresedit': { beforeshow: this.pce_BeforeShow, },
            'public_contenedoresedit #btnSave': { click: this.pce_btnSaveClick, },
            'public_contenedoresedit #btnUndo': { click: this.pce_btnUndoClick, },

            'public_contenedoressearch': { beforerender: this.pcs_BeforeRender, },
			'public_contenedoressearch #btnAccept': { click: this.pcs_btnAcceptClick, },
			'public_contenedoressearch #btnCancel': { click: this.pcs_btnCancelClick, },
			'public_contenedoressearch #cont_placa': { change: this.pcs_Clean },
			'public_contenedoressearch #grdPublic_contenedores': { itemdblclick: this.pcs_grdPublic_contenedoresItemdblclick, selectionchange: this.pcs_grdPublic_contenedoresSelectionchange, },
			'public_contenedoressearch #tipcont_id': { change: this.pcs_tipcont_idChange },
		});
	},

	pce_BeforeShow: function(component, options) {
	    var _cboTipcont_id = component.down('#tipcont_id');
	    _cboTipcont_id.bindStore(Ext.create('Siace.store.public.Tipos_Contenedor'));
	    _cboTipcont_id.getStore().load({ 
	        params: { xxType_record: 'combo', xxAdd_blank: 'YES' },
	        callback: function(records, operations, success) {
	            if ( records.length == 0 ) { _cboTipcont_id.disable();  _cboTipcont_id.setValue(''); }
	        }
	    });
	
	    var _typeEdit = component.getTypeEdit();
	    if ( _typeEdit == '1' ) {
	        var _icon = 'icon_New_90'; var _title = translations.public_contenedoresedit_title_new;
	    } else if ( fjsIn_array(_typeEdit, ['2','3']) ) {
	        component.down('#cntPdpd').setChangeEnabled(false);
	        var _form = component.down('form');
	        _form.load({
	            method: 'POST', url: 'php/public_individuos_json_records.php',
	            params: { xxIndiv_key: component.getCallKey(),  xxType_record: 'form' },
	            waitMsg: 'Loading...',
	            success: function (form, action) {
	                try {
	                    var _model = Ext.create('Siace.model.public.Individuo'); var _resp = Ext.decode(action.response.responseText);
	                    if ( _resp.data[0] ) { _model.set(_resp.data[0]);  _form.loadRecord(_model); }
	                }
	                catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
	            },
	            failure: function (form, action) { Ext.Msg.alert("Load failed", action.result.errorMessage); }
	        });

	        if ( _typeEdit == '2' ) {
	            var _icon = 'icon_Modify_90'; var _title = translations.public_individuosedit_title_modify; 
	            component.down('#indiv_dni').setDisabled( component.down('#tipdocident_id').getValue() == '99' ? true : false );
	        } else { 
	            var _icon = 'icon_Query_90'; var _title = translations.public_individuosedit_title_consulta; 
	        }
	    }
	    component.setIconCls(_icon); component.setTitle(_title);
	},

	pce_btnSaveClick: function(button, e, options) {
	    var _win = button.up('window'); var _frm = _win.down('form');
		if ( _win.down('#cont_serie').getValue() == '' ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar la SERIE del contenedor', function() { _win.down('#cont_serie').focus(); }); return false ; }
		if ( _win.down('#cont_nro').getValue() == '' ) {
		    Ext.Msg.alert(translations.mensaje, 'Debe indicar el NUMERO de contenedor', function() { _win.down('#cont_nro').focus(); }); return false ; }
	    if ( _win.down('#tipcont_id').getValue()*1 <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el Tipo de Contenedor', function() { _win.down('#tipcont_id').focus(); }); return false ; }

	    if ( _frm.getForm().isValid() ) {
	    	var _vs = fextpub_sessionVariables();
	        _frm.getForm().submit({
				method: 'POST',  url: 'php/public_contenedores_save.php',
				params:{ xx0005: 'YES',
				         zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
                waitTitle: translations.valida_titulo, waitMsg: translations.valida_mensaje01,
	            success: function(form, action) {
	            	var _result = Siace.util.Util.decodeJSON(action.response.responseText);
	                if ( _result.success ) {
			        	if ( _win.getCallWindow() !== null ) {
		        			_win.getCallWindow().down('#cont_id').setValue(_result.cont_id);
		        			_win.getCallWindow().down('#cont_placa').setValue(_frm.down('#cont_serie').getValue()+'-'+_frm.down('#cont_nro').getValue());
		        			_win.getCallWindow().down('#tipcont_nombre').setValue(_frm.down('#tipcont_id').getRawValue());
		        		}
	                    _win.close();
	                } else { Siace.util.Util.showErrorMsg(_result.msg); }
	            },
	            failure: function(form, action) { Siace.util.Util.showErrorMsg(action.response.responseText); }
	        });
	    }
	},

	pce_btnUndoClick: function(button, e, options) {
		button.up('window').close(); button.up('window').destroy();
	},

	/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	pcs_BeforeRender: function( component, options ) {
		var _cboTipcont_id = component.down('#tipcont_id');
		_cboTipcont_id.bindStore(Ext.create('Siace.store.public.Tipos_Contenedor'));
		_cboTipcont_id.getStore().load({ 
			params: { xxType_record: 'combo', xxAdd_blank: 'YES' },
			callback: function(opt, success, respon) {
			   	if ( _cboTipcont_id.getStore().getCount() > 0 ) {
			    	_cboTipcont_id.setDisabled(false);  _cboTipcont_id.setValue(_cboTipcont_id.getStore().getAt(0).data.tipcont_id);
			    } else {
			    	_cboTipcont_id.setDisabled(true);  _cboTipcont_id.setValue('');
			    }
    		}
		});

		var _store = Ext.create('Siace.store.public.Contenedores');
		var _grid = component.down('#grdPublic_contenedores');
		var _pagingtoolbar = component.down('#pgtPublic_contenedores');
		_grid.bindStore(_store);  _pagingtoolbar.bindStore(_store);
		_store.sort('cont_placa', 'ASC');
		_store.on('beforeload', function(store, scope, options) {
			component.down('#btnAccept').setDisabled(true);

		    store.getProxy().setExtraParam('xxTipcont_id', component.down('#tipcont_id').getValue());
		    store.getProxy().setExtraParam('xxCont_placa', component.down('#cont_placa').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'grid_search');
		    store.getProxy().setExtraParam('xxType_query', component.getTypeQuery());
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});
		_store.pageSize = 500; _store.load();
	},

	pcs_Clean: function() {
		var _win = this.getPcs_grdPublic_contenedores().up('window');
		var _store = _win.down('#pgtPublic_contenedores').getStore();
		var _pagingtoolbar = _win.down('#pgtPublic_contenedores');
		fext_gridClean(_store, _pagingtoolbar);

		_win.down('#btnAccept').setDisabled(true);
	},

	pcs_btnAcceptClick: function(button, e, options) {
		var _win = button.up('window');
		var _grid = _win.down('#grdPublic_contenedores');
        var _record = _grid.getSelectionModel().getSelection();

        if ( _record[0] && _record[0].data.cont_id !== _win.getCallKey() ) {        	
        	if ( _win.getCallWindow() !== null ) {
       			_win.getCallWindow().down('#cont_id').setValue(_record[0].data.cont_id);
       			_win.getCallWindow().down('#cont_placa').setValue(_record[0].data.cont_placa);
       			_win.getCallWindow().down('#tipcont_nombre').setValue(_record[0].data.tipcont_nombre);
        	}
        	_win.close(); if ( _win.getActionDestroy() == true ) { _win.destroy(); }
		}
	},

	pcs_btnCancelClick: function(button, e, options) {
		button.up('window').close(); if ( button.up('window').getActionDestroy() == true ) { button.up('window').destroy(); }
	},

	pcs_tipcont_idRender: function(combo, options) {
		combo.getStore().load({ params: { xxType_record: 'cboTipcont_id', xxAdd_blank: 'BLANK' } });
	},

	pcs_grdPublic_contenedoresItemdblclick: function(component, record, item, index, e, options) {
		var _btnAccept = component.up('window').down('#btnAccept');
        _btnAccept.fireEvent('click', _btnAccept, e, options);
	},

	pcs_grdPublic_contenedoresSelectionchange: function(model, record, options) {
		if ( record.length == 1 ) {
			_win = this.getPcs_grdPublic_contenedores().up('window');
			_win.down('#btnAccept').setDisabled(record[0].data.cont_id == _win.getCallKey() ? true : false);
		}
	},

	pcs_tipcont_idChange: function(component, newValue, oldValue, options) {
		if ( oldValue != undefined ) { this.pcs_Clean(); }
	},
});