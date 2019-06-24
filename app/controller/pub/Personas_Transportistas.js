Ext.define('Siace.controller.public.Personas_Transportistas', {
	extend: 'Ext.app.Controller',
	views: [
		'public.Personas_TransportistasEdit', 'public.Personas_TransportistasSearch',
	],
    refs: [
        { ref: 'ppts_grdPublic_personas_transportistas', selector: 'public_personas_transportistassearch #grdPublic_personas_transportistas' },
    ],

	init: function(application) {
		this.control({
			'public_personas_transportistasedit': { beforerender: this.ppte_BeforeRender, },
			'public_personas_transportistasedit #btnSave': { click: this.ppte_btnSaveClick, },
			'public_personas_transportistasedit #btnUndo': { click: this.ppte_btnUndoClick, },
            'public_personas_transportistasedit #tipdocident_id': { change: this.ppte_tipdocident_idChange, },

			'public_personas_transportistassearch': { beforerender: this.ppts_BeforeRender, },
			'public_personas_transportistassearch #btnAccept': { click: this.ppts_btnAcceptClick, },
          	'public_personas_transportistassearch #btnCancel': { click: this.ppts_btnCancelClick, },
			'public_personas_transportistassearch #grdPublic_personas_transportistas': {
				itemdblclick: this.ppts_grdPublic_personas_transportistasItemdblclick,
				selectionchange: this.ppts_grdPublic_personas_transportistasSelectionchange,
			},
		});
	},

	ppte_BeforeRender: function(component, options) {
		var _cboTipdocident_id = component.down('#tipdocident_id');
	    _cboTipdocident_id.bindStore(Ext.create('Siace.store.public.Tipos_Documentos_Identidad'));
		_cboTipdocident_id.getStore().load({ 
			params: { xxTipdocident_estado_personas: '1' },
			callback: function(records, operations, success) {
			   	if ( records.length > 0 ) { _cboTipdocident_id.enable();  _cboTipdocident_id.setValue('99'); } 
			    else { _cboTipdocident_id.disable();  _cboTipdocident_id.setValue(''); }
    		}
		});

		var _cboPais_id = component.down('#pais_id');
		_cboPais_id.bindStore(Ext.create('Siace.store.public.Paises'));
		_cboPais_id.getStore().load({ 
			params: { xxType_record: 'combo', xxType_query: 'VEHICULOS', xxAdd_blank: 'YES' }
		});		
	},

	ppte_btnSaveClick: function(button, e, options) {
	    var _win = button.up('window'); var _frm = _win.down('form');
	    if ( _win.down('#tipdocident_id').getValue()*1 <= 0 ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el Tipo de Registro'); return false ; }
	    if ( _win.down('#tipdocident_id').getValue() !== 99 ) {
		    if ( _win.down('#pers_ruc').getValue() == '' ) {
		    	Ext.Msg.alert(translations.mensaje, translations.public_personasedit_msg_falta_ruc, function() { _frm.down('#pers_ruc').focus(); }); return false ; }
	    }

	    if ( _frm.getForm().isValid() ) {
	    	var _vs = fextpub_sessionVariables();
	        _frm.getForm().submit({
				method: 'POST',  url: 'php/public_personas_transportistas_save.php',
				params:{ xx0005: 'OK', xxPais_id: _frm.down('#pais_id').getValue(),
				         xxUsursess_key: _vs['us'], xxUsuracce_key: _vs['ua'], xxUsur_key: _vs['u'], xxArea_key: _vs['a'], xxAlma_key: _vs['alma'] },
                waitTitle: translations.valida_titulo, waitMsg: translations.valida_mensaje01,
	            
	            success: function(form, action) {
	            	var result = Siace.util.Util.decodeJSON(action.response.responseText);
	                if ( result.success ) {
			        	if ( _win.getCallWindow() !== null ) {
			        		_win.getCallWindow().down('#perstransp_key').setValue(result.pers_key);
			        		_win.getCallWindow().down('#perstransp_code').setValue(_frm.down('#perstransp_code').getValue());
			        		_win.getCallWindow().down('#perstransp_nombre').setValue(_frm.down('#pers_nombre').getValue() + (_frm.down('#pers_ruc').getValue()==''?'':' ['+_frm.down('#pers_ruc').getValue()+']'));
			        	}
	                    _win.close();
	                } else { Siace.util.Util.showErrorMsg(result.msg); }
	            },
	            failure: function(form, action) { Siace.util.Util.showErrorMsg(action.response.responseText); }
	        });
	    }
	},

	ppte_btnUndoClick: function(button, e, options) {
		button.up('window').close(); button.up('window').destroy();
	},

	ppte_tipdocident_idChange: function(combo, newValue, oldValue, options) {
		combo.up('form').down('#pers_ruc').setDisabled( combo.getValue() == '99' ? true : false );
		if ( combo.getValue() == '99' ) { combo.up('form').down('#pers_ruc').setValue(''); }
		var _pais_id = combo.getStore().findRecord('tipdocident_id', combo.getValue()).data['pais_id'];
		var _cboPais_id = combo.up('form').down('#pais_id');
		if ( _pais_id*1 > 0 ) { _cboPais_id.setValue(_pais_id); _cboPais_id.disable(); } 
		else { _cboPais_id.enable(); }
	},

	ppts_BeforeRender: function(component, options) {
		var _store = Ext.create('Siace.store.public.Personas');
		var _grid = component.down('#grdPublic_personas_transportistas');
		var _pagingtoolbar = component.down('#pgtPublic_personas_transportistas');
		_grid.bindStore(_store);  _pagingtoolbar.bindStore(_store);
		_store.sort('pers_nombre', 'ASC');
		_store.on('beforeload', function( store, operations, eOpts ) {
			component.down('#btnAccept').setDisabled(true);
		    store.getProxy().setExtraParam('xxPerstransp_code', component.down('#perstransp_code').getValue());
		    store.getProxy().setExtraParam('xxPers_nombre', component.down('#pers_nombre').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'grid_personas_transportistas_search');
		    store.getProxy().setExtraParam('xxType_query', 'TRANSPORTISTAS');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});
		_store.pageSize = 500;
		_store.load();
	},

	ppts_btnAcceptClick: function(button, e, options) {
		var _win = button.up('window');
		var _grid = _win.down('#grdPublic_personas_transportistas');
        var _record = _grid.getSelectionModel().getSelection();

        if ( _record[0] && _record[0].data.pers_key !== _win.getCallKey() ) {        	
        	if ( _win.getCallWindow() !== null ) {
        		_win.getCallWindow().down('#perstransp_key').setValue(_record[0].data.pers_key);
        		_win.getCallWindow().down('#perstransp_code').setValue(_record[0].data.perstransp_code);
        		_win.getCallWindow().down('#perstransp_nombre').setValue(_record[0].data.pers_nombre + (_record[0].data.pers_ruc==''?'':' ['+_record[0].data.pers_ruc+']'));
        	}
        	_win.close(); _win.destroy();
		}
	},

	ppts_btnCancelClick: function(button, e, options) {
		button.up('window').hide();
	},

	ppts_grdPublic_personas_transportistasItemdblclick: function(component, record, item, index, e, options) {
		var _btnAccept = component.up('window').down('#btnAccept');
        _btnAccept.fireEvent('click', _btnAccept, e, options);
	},

	ppts_grdPublic_personas_transportistasSelectionchange: function(model, record, options) {
		if ( record.length == 1 ) {
			_win = this.getPpts_grdPublic_personas_transportistas().up('window');
			_win.down('#btnAccept').setDisabled( record[0].data.pers_key == _win.getCallKey() ? true : false );
		}
	},
});