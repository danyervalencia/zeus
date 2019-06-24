Ext.define('Siace.controller.public.Messages', {
	extend: 'Ext.app.Controller',
	views: [
		'public.MessagesBrowse', //'treasury.RecibosEdit',
	],
    refs: [
        { ref: 'pmb_grdPublic_Messages', selector: 'public_messagesbrowse #grdPublic_messages' },
        { ref: 'pis_Public_IndividuosSearch', selector: 'public_individuossearch' },
    ],

	init: function(application) {
		this.control({
			'public_messagesbrowse': {
				beforerender: this.pmb_BeforeRender,
			},
			'public_messagesbrowse #btnNew': {
				click: this.pmb_btnNewClick,
			},
			'public_messagesbrowse #btnQuery': {
				click: this.pmb_btnQueryClick,
			},
			'public_messagesbrowse #btnDelete': {
				click: this.pmb_btnDeleteClick,
			},
            'public_messagesbrowse #tipmess_id': {
            	change: this.pmb_Clean
            },
			'public_messagesbrowse #fechafin': {
				change: this.pmb_Clean
			},
			'public_messagesbrowse #fechaini': {
				change: this.pmb_Clean,
			},
			'public_messagesbrowse #grdPublic_messages': {
				selectionchange: this.pmb_grdPublic_messagesSelectionchange,
			},

            'public_messagesedit': {
                beforeshow: this.pme_BeforeShow,
                close: this.pme_Close,
            },
            'public_messagesedit #btnSave': {
                click: this.pme_btnSaveClick,
            },
            'public_messagesedit #btnUndo': {
                click: this.pme_btnUndoClick,
            },
            'public_messagesedit #btnExit': {
                click: this.pme_btnExitClick,
            },
            'public_messagesedit #btnIndiv_search': {
                click: this.pme_btnIndiv_searchClick
            },
            'public_messagesedit #indiv_dni': {
                blur: this.pme_indiv_dniBlur,
                focus: this.pme_indiv_dniFocus,
                keypress: this.pme_indiv_dniKeypress,
            },
            'public_messagesedit #mess_clave': {
                keypress: this.pme_mess_claveKeypress,
            },
		});
	},

	pmb_BeforeRender: function( component, options ) {
		var _vs = fextpub_sessionVariables();
		var _store = Ext.create('Siace.store.public.Messages');
		var _grid = component.down('#grdPublic_messages');
		var _pagingtoolbar = component.down('#pgtPublic_messages');
		_grid.bindStore(_store);  _pagingtoolbar.bindStore(_store);
		_store.sort('mess_fecha', 'DESC');
		_store.on('beforeload', function(store, operations, eOpts) {
			component.down('#btnQuery').disable(); component.down('#btnDelete').disable(); //component.down('#btnPrinter').disable();

			store.getProxy().setExtraParam('xxUsur02_key', (component.down('#tipmess_id').getValue() == '1' ? _vs['u'] : '') );
			store.getProxy().setExtraParam('xxUsur01_key', (component.down('#tipmess_id').getValue() == '2' ? _vs['u'] : '') );
			store.getProxy().setExtraParam('xxFechaini', component.down('#fechaini').getValue());
			store.getProxy().setExtraParam('xxFechafin', component.down('#fechafin').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});
		_store.pageSize = 500;
	},

	pmb_Clean: function() {
		var _panel = this.getPmb_grdPublic_Messages().up('panel');
		var _store = _panel.down('#pgtPublic_messages').getStore();
		var _pagingtoolbar = _panel.down('#pgtPublic_messages');
		fext_gridClean(_store, _pagingtoolbar);

		_panel.down('#btnQuery').disable(); _panel.down('#btnDelete').disable();
	},

	pmb_ViewEdit: function(pcTypeEdit, poPanel) {
		if ( fjsIn_array(pcTypeEdit, ['2','3']) ) {
	    	var _record = this.getPmb_grdPublic_Messages().getSelectionModel().getSelection();
	        if ( _record.length !== 1 ) { return false; }
	    }

		Ext.get(poPanel.getEl()).mask(translations.mensaje_esperar, 'loading');
	    var _win = Ext.create('Siace.view.public.MessagesEdit');
	    _win.setTypeEdit(pcTypeEdit); //_win.setCallStore(this.getpmb_grdTreasury_Recibos().getStore());
	    if ( pcTypeEdit == '1' ) {  } 
	    else if (fjsIn_array(pcTypeEdit, ['2','3'])) { _win.setCallKey(_record[0].data.mess_key); }
	    _win.show();
	    Ext.get(poPanel.getEl()).unmask();
	},

	pmb_btnNewClick: function(button, e, options) {
		this.pmb_ViewEdit('1', button.up('panel'));
	},

	pmb_btnQueryClick: function(button, e, options) {
        this.pmb_ViewEdit('3', button.up('panel'));
	},

	pmb_grdPublic_messagesSelectionchange: function(model, record, options) {			
		if ( record.length == 1 ) {
			var _panel = this.getPmb_grdPublic_Messages().up('panel');
			_query = (record[0].data.mess_flga == '98' ? true : false);
			_panel.down('#btnQuery').setDisabled(_query);
			_delete = (record[0].data.mess_flga == '98' ? true : false);
			_panel.down('#btnDelete').setDisabled(_delete);
		}
	},

	pme_BeforeShow: function(component, options) {
		var _typeEdit = component.getTypeEdit();

        if ( _typeEdit == '1' ) {
        	var _icon = 'icon_New_90'; var _title = translations.public_messagesedit_title_new;
        } else if ( fjsIn_array(_typeEdit, ['2','3']) ) {
	        var _form = component.down('form');
	   		_form.load({
	   			method: 'POST', url: 'php/public_messages_json_records.php',
	            params: { xxMess_key: component.getCallKey(), xxType_record: 'form', xxOrder_by: 'm.mess_key' },
	            waitMsg: 'Loading...',
	            success: function (form, action) {
	                try {
	                    var _model = Ext.create('Siace.model.public.Message');
	                    var _result = Ext.decode(action.response.responseText);
	                    if ( _result.data[0] ) {
	                        _model.set(_result.data[0]);  _form.loadRecord(_model);
	                        component.down('#mess_encrypt').setValue(_model.data.mess_texto);
	                    }
	                }
	                catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
	            },
	            failure: function (form, action) {
	                Ext.Msg.alert("Load failed", action.result.errorMessage);
	            }
	        });

        	if ( _typeEdit == '2' ) { 
        		var _icon = 'icon_Modify_90'; var _title = translations.treasury_recibosedit_title_modify;
        	} else { 
        		var _icon = 'icon_Query_90'; var _title = translations.treasury_recibosedit_title_query; 
				component.down('#indiv_dni').disable(); component.down('#btnIndiv_search').disable(); component.down('#mess_title').disable();
				component.down('#mess_texto').disable();
				component.down('#btnSave').setDisabled(true); component.down('#btnUndo').setDisabled(true); component.down('#btnExit').setDisabled(false);

        	}
        }
        component.setIconCls(_icon); component.setTitle(_title);
	},

	pme_Close: function(panel, options) {
		if ( this.getPis_Public_IndividuosSearch() !== undefined ) { this.getPis_Public_IndividuosSearch().close();  this.getPis_Public_IndividuosSearch().destroy(); }
	},

	pme_btnSaveClick: function(button, e, options) {
	    var _win = button.up('window'); var _frm = _win.down('form');
	    if ( _win.down('#indiv_key').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el Usuario al que se enviara el correo', function() { _frm.down('#indiv_dni').focus(); }); return false ; }
	    if ( _win.down('#mess_title').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar la TITULO del mensaje', function() { _frm.down('#mess_title').focus(); }); return false ; }
	    if ( _win.down('#mess_texto').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar la CONTENIDO del mensaje', function() { _frm.down('#mess_texo').focus(); }); return false ; }
	    if ( _win.down('#mess_clave').getValue() == '' ) {
	    	Ext.Msg.alert(translations.mensaje, 'Debe indicar la CLAVE PRIVADA del mensaje', function() { _frm.down('#mess_clave').focus(); }); return false ; }

	    if ( _frm.getForm().isValid() ) {
			Ext.Msg.confirm(translations.confirmar, translations.mensaje_pregunta_guardar, function(btn){
			if ( btn == 'yes' ) {
			    var _vs = fextpub_sessionVariables(); var _message = fjsDES(_win.down('#mess_clave').getValue(), _win.down('#mess_texto').getValue(), 1, 0, null)
			    _frm.getForm().submit({
					method: 'POST', url: 'php/public_messages_save',
					params:{ xx0005: 'YES', xxType_edit: _win.getTypeEdit(), xxMess_texto: _message,
							 xxUsursess_key: _vs['us'], xxUsuracce_key: _vs['ua'], xxUsur_key: _vs['u'], xxArea_key: _vs['a'], xxAlma_key: _vs['alma'] },
		            waitTitle: translations.valida_titulo, waitMsg: translations.valida_mensaje01,
			        success: function(form, action) {
			            var result = Siace.util.Util.decodeJSON(action.response.responseText);
			            if ( result.success ) {
				            if ( _win.getCallStore() !== null ) {
				            	_win.getCallStore().load();
						    } else if ( _win.getCallWindow() !== null ) {
						    }
	            	        _win.close();
			            } else { Siace.util.Util.showErrorMsg(result.msg); }
			        },
			        failure: function(form, action) {
			            Siace.util.Util.showErrorMsg(action.response.responseText);
			        }
			    });
			}});
	    }
	},

	pme_btnUndoClick: function(button, e, options) {
		button.up('window').close();
	},

	pme_btnExitClick: function(button, e, options) {
		button.up('window').close();
	},

	pme_btnIndiv_searchClick: function(button, e, options) {
 		fext_windowSearch(this.getPis_Public_IndividuosSearch(), button.up('window'), 'Siace.view.public.IndividuosSearch', translations.public_individuossearch_title, button.up('window').down('#indiv_key').getValue(), '', '', false);
	},


	pme_indiv_dniBlur: function(textfield, The, options) {
		this.pme_indiv_dniSearch('0', textfield.up('form'));
	},

	pme_indiv_dniFocus: function(textfield, The, options) {
		this.pme_indiv_dniSearch('1', textfield.up('form'));
	},

	pme_indiv_dniKeypress: function(textfield, e, options) {
		if( e.getCharCode() == 13 ) { this.pme_indiv_dniSearch('13', textfield.up('form')); }
	},

	pme_indiv_dniSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['indiv_key', 'INDIV_DNI', 'indiv_dni', 'indiv_apenom'], 
			            ['php/public_individuos_json_records.php', 'xxIndiv_dni', 'textfield_search', ''], '1', 
			            ['Siace.view.public.IndividuosEdit', translations.public_individuossedit_title_new, ['indiv_dni'], '']);
	},

	pme_mess_claveKeypress: function(textfield, e, options) {
		if ( e.getCharCode() == 13 && textfield.up('window').getTypeEdit() == '3' ) { 
			var _win = textfield.up('window');
			var _message = fjsDES(textfield.getValue(), _win.down('#mess_encrypt').getValue(), 0, 0, null);
			_win.down('#mess_texto').setValue(_message);
		}
	},
});