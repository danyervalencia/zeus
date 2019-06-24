Ext.define('Siace.controller.public.Partidas_Arancelarias', {
	extend: 'Ext.app.Controller',
	views: ['public.Partidas_ArancelariasBrowse', 'public.Partidas_ArancelariasEdit', 'public.Partidas_ArancelariasSearch'],
    refs: [
        { ref: 'ppas_Partidas_ArancelariasSearch', selector: 'public_partidas_arancelariassearch' },
    ],

	init: function(application) {
		this.control({
			'public_partidas_arancelariasbrowse': { beforerender: this.ppab_BeforeRender, },
			'public_partidas_arancelariasbrowse #panPublic_partidas_arancelarias #opc_id': { change: this.ppab_pppa_opc_idChange, },
			'public_partidas_arancelariasbrowse #panPublic_partidas_arancelarias #btnNew': { click: this.ppab_pppa_btnNewClick, },
			'public_partidas_arancelariasbrowse #panPublic_partidas_arancelarias #btnModify': { click: this.ppab_pppa_btnModifyClick, },
			'public_partidas_arancelariasbrowse #panPublic_partidas_arancelarias #btnQuery': { click: this.ppab_pppa_btnQueryClick, },
			'public_partidas_arancelariasbrowse #panPublic_partidas_arancelarias #grdPublic_partidas_arancelarias': { selectionchange: this.ppab_pppa_grdPublic_partidas_arancelariasSelectionchange, },
			'public_partidas_arancelariasbrowse #panPublic_partidas_arancelarias #nand_nombre': { change: this.ppab_pppa_nand_nombreChange, },
			'public_partidas_arancelariasbrowse #panPublic_partidas_arancelarias #partarancapi_code': { change: this.ppab_pppa_partarancapi_codeChange, },

			'public_partidas_arancelariasedit': { beforerender: this.ppae_BeforeRender, },
            'public_partidas_arancelariasedit #btnSave': { click: this.ppae_btnSaveClick, },
            'public_partidas_arancelariasedit #btnUndo': { click: this.ppae_btnUndoClick, },

			'public_partidas_arancelariassearch': { beforerender: this.ppas_BeforeRender, },
			'public_partidas_arancelariassearch #btnAccept': { click: this.ppas_btnAcceptClick, },
			'public_partidas_arancelariassearch #btnCancel': { click: this.ppas_btnCancelClick, },
			'public_partidas_arancelariassearch #grdPublic_partidas_arancelarias': { itemdblclick: this.ppas_grdPublic_partidas_arancelariasItemdblclick, selectionchange: this.ppas_grdPublic_partidas_arancelariasSelectionchange, },
			'public_partidas_arancelariassearch #nand_codigo': { change: this.ppas_nand_codigoChange, },
			'public_partidas_arancelariassearch #nand_nombre': { change: this.ppas_nand_nombreChange, },
		});
	},

	ppab_BeforeRender: function(component, options) {
		fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': component.down('#opc_id'), 'menu_id': component.getMenuId()});
		fextpub_partidas_arancelarias_capitulosFilter({'objeto': component.down('#partarancapi_code')}); var _me = this;

		_tabPPAT = component.down('#tabPublic_partidas_arancelarias_tributos');
		var _storePPAT = Ext.create('Siace.store.public.Partidas_Arancelarias_Tributos');
		var _gridPPAT = component.down('#grdPublic_partidas_arancelarias_tributos'); var _pagPPAT = component.down('#pagPublic_partidas_arancelarias_tributos');
		_gridPPAT.bindStore(_storePPAT);  _pagPPAT.bindStore(_storePPAT);
		_storePPAT.sort('year_id', 'ASC'); _storePPAT.pageSize = 500;
		_storePPAT.on('beforeload', function(store, operations, eoptions) {
		    var _record = component.down('#grdPublic_partidas_arancelarias').getSelectionModel().getSelection()[0];
		   	store.getProxy().setExtraParam('xxPartaran_key', _record.data.partaran_key);
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		    store.getProxy().setExtraParam('xxPaginate', '1');
		});

		_tabPBS = component.down('#tabPublic_bienes_servs');
		var _storePBS = Ext.create('Siace.store.public.Bienes_Servs');
		var _gridPBS = component.down('#grdPublic_bienes_servs'); var _pagPBS = component.down('#pagPublic_bienes_servs');
		_gridPBS.bindStore(_storePBS);  _pagPBS.bindStore(_storePBS);
		_storePBS.sort('bs_nombre', 'ASC'); _storePBS.pageSize = 500;
		_storePBS.on('beforeload', function(store, operations, eoptions) {
		    var _record = component.down('#grdPublic_partidas_arancelarias').getSelectionModel().getSelection()[0];
		   	store.getProxy().setExtraParam('xxPartaran_key', _record.data.partaran_key);
		    store.getProxy().setExtraParam('xxType_record', 'grid_public_partidas_arancelariasbrowse');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		    store.getProxy().setExtraParam('xxPaginate', '1');
		});

		var _store = Ext.create('Siace.store.public.Partidas_Arancelarias');
		var _grid = component.down('#grdPublic_partidas_arancelarias'); var _pag = component.down('#pagPublic_partidas_arancelarias');
		_grid.bindStore(_store);  _pag.bindStore(_store);
		_store.sort('partaran_codigo', 'ASC'); _store.pageSize = 500;
		_store.on('beforeload', function(store, operations, eOpts) {
			component.down('#btnModify').disable(); component.down('#btnQuery').disable(); component.down('#btnDelete').disable();
			_me.ppab_tabsClean(component, true);

			store.getProxy().setExtraParam('xxPartarancapi_code', component.down('#partarancapi_code').getValue());
			store.getProxy().setExtraParam('xxPartaran_nombre', component.down('#partaran_nombre').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		}); //_store.load();
	},

	ppab_pppa_Clean: function(poComponent) {
		var _pag = poComponent.down('#pagPublic_partidas_arancelarias'); var _store = _pag.getStore();
		fext_gridClean(_store, _pag);
		poComponent.down('#btnModify').disable(); poComponent.down('#btnQuery').disable(); poComponent.down('#btnDelete').disable();
		this.ppab_tabsClean(poComponent.up('panel'), true);
	},

	ppab_tabsClean: function(poComponent, pbBoolean) {
		var _tabPPAT = poComponent.down('#tabPublic_partidas_arancelarias_tributos');
		var _pagPPAT = _tabPPAT.down('#pagPublic_partidas_arancelarias_tributos'); var _storePPAT = _pagPPAT.getStore();
		fext_gridClean(_storePPAT, _pagPPAT);
		_tabPPAT.down('#pagPublic_partidas_arancelarias_tributos').setDisabled(pbBoolean); _tabPPAT.down('#btnNew').setDisabled(pbBoolean); _tabPPAT.down('#btnModify').disable(); _tabPPAT.down('#btnDelete').disable();

		var _tabPBS = poComponent.down('#tabPublic_bienes_servs');
		var _pagPBS = _tabPBS.down('#pagPublic_bienes_servs'); var _storePBS = _pagPBS.getStore();
		fext_gridClean(_storePBS, _pagPBS);
		_tabPBS.down('#pagPublic_bienes_servs').setDisabled(pbBoolean); _tabPBS.down('#btnModify').disable(); _tabPBS.down('#btnQuery').disable();
	},

	ppab_pppa_viewEdit: function(poComponent, pcTypeEdit){
	    if ( fjsIn_array(pcTypeEdit, ['2','3']) ) {
	    	var _record = poComponent.down('#grdPublic_partidas_arancelarias').getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }
	    }

		Ext.get(poComponent.getEl()).mask(translations.mensaje_esperar, 'loading');
	    var _win = Ext.create('Siace.view.public.Partidas_ArancelariasEdit');
	    _win.setTypeEdit(pcTypeEdit); _win.setCallStore(poComponent.down('#grdPublic_partidas_arancelarias').getStore());
	    if ( fjsIn_array(pcTypeEdit, ['2','3','12']) ) { _win.setCallKey(_record.data.partaran_key); }
	    _win.show();
	    Ext.get(poComponent.getEl()).unmask();
	},

	ppab_pppa_opc_idChange: function(combo, newValue, oldValue, options) {
		combo.up('panel').down('#btnNew').setDisabled(fextpub_uamoButtons(combo, 1));
	},

	ppab_pppa_btnNewClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 1) ) { return false; } this.ppab_pppa_viewEdit(button.up('panel'), '1');
	},

	ppab_pppa_btnModifyClick: function(button, e, options) {
        if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 2) ) { return false; } this.ppab_pppa_viewEdit(button.up('panel'), '2');
	},

	ppab_pppa_btnQueryClick: function(button, e, options) {
        if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 3) ) { return false; } this.ppab_pppa_viewEdit(button.up('panel'), '3');
	},


	ppab_pppa_grdPublic_partidas_arancelariasSelectionchange: function(model, record, options) {
		if ( record.length == 1 ) {
			var _panel = model.view.panel.up('panel'); var _cboOpc_id = _panel.down('#opc_id');
			_panel.down('#btnModify').setDisabled(fextpub_uamoButtons(_cboOpc_id, 2));
			_panel.down('#btnQuery').setDisabled(fextpub_uamoButtons(_cboOpc_id, 3));
			_panel.down('#btnDelete').setDisabled(fextpub_uamoButtons(_cboOpc_id, 7));
			this.ppab_tabsClean(_panel.up('panel'), false);
		}
	},

	ppab_pppa_nand_nombreChange: function(textfield, newValue, oldValue, options) {
		this.ppab_pppa_Clean(textfield.up('panel'));
	},

	ppab_pppa_partarancapi_codeChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.ppab_pppa_Clean(combo.up('panel')); }
	},

	/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	ppae_BeforeRender: function(component, options) {
		var _typeEdit = component.getTypeEdit();
        if ( _typeEdit == '1' ) {
        	var _icon = 'icon_New_90'; var _title = 'Nueva Partida Arancelaria';
        	component.down('#partarancapi_code').focus();
        } else if ( fjsIn_array(_typeEdit, ['2','3']) ) {
	        var _form = component.down('form');
	   		_form.load({
	   			method: 'POST', url: 'php/public_partidas_arancelarias_json_records.php',
	            params: { xxPartaran_key: component.getCallKey(),  xxType_record: 'form' }, waitMsg: 'Loading...',
	            success: function (form, action) {
	                try {
	                    var _model = Ext.create('Siace.model.public.Partida_Arancelaria'); var _result = Ext.decode(action.response.responseText);

	                    if ( _result.data[0] ) {
	                        _model.set(_result.data[0]);  _form.loadRecord(_model);
	                        _form.down('#INDIV_DNI').setValue( _model.data.indiv_dni );
							component.down('#cntPdpd').fireEvent('loaddata', component.down('#cntPdpd'), (_typeEdit=='2'?false:true), _model.data.pais_id, _model.data.dpto_id, _model.data.prvn_id, _model.data.dstt_id);
	                    }
	                }
	                catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
	            },
	            failure: function (form, action) {
	                Ext.Msg.alert("Load failed", action.result.errorMessage);
	            }
	        });

        	if ( _typeEdit == '2' ) { 
        		var _icon = 'icon_Modify_90'; var _title = 'Modificar Partida Arancelaria'; 
        	} else { 
        		var _icon = 'icon_Query_90'; var _title = 'Consulta de partida Arancelaria'; 
				component.down('#partarancapi_code').disable(); component.down('#partaranpart_code').disable(); component.down('#partaransubpart_code').disable(); component.down('#partaransubpartnand_code').disable(); component.down('#partaransubpartnac_code').disable();
				component.down('#partaran_nombre').disable(); component.down('#partaran_abrev').disable(); //component.down('#partaran_observ').disable();
				component.down('#btnSave').disable(); component.down('#btnUndo').disable(); component.down('#btnExit').enable();
        	}
        }
        component.setIconCls(_icon); component.setTitle(_title);
	},

	ppae_nand_estadoChange: function(checkbox, newValue, oldValue, options) {
		fun_checkColor(checkbox.up('window'), 'lblBs_estado', newValue);
	},

	ppae_btnSaveClick: function(button, e, options) {
	    var _win = button.up('window'); var _frm = _win.down('form');
		if ( _win.down('#partarancapi_code').getValue() == '' ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar el CAPITULO de la partida arancelaria', function() { _win.down('#partarancapi_code').focus(); }); return false ; }
		if ( _win.down('#partaranpart_code').getValue() == '' ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar la PARTIDA de la partida arancelaria', function() { _win.down('#partaranpart_code').focus(); }); return false ; }
		if ( _win.down('#partaransubpart_code').getValue() == '' ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar la SUB PARTIDA de la partida arancelaria', function() { _win.down('#partaransubpart_code').focus(); }); return false ; }
		if ( _win.down('#partaransubpartnand_code').getValue() == '' ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar la SUB PARTIDA NANDINA de la partida arancelaria', function() { _win.down('#partaransubpartnand_code').focus(); }); return false ; }
		if ( _win.down('#partaransubpartnac_code').getValue() == '' ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar la SUB PARTIDA NACIONAL de la partida arancelaria', function() { _win.down('#partaransubpartnac_code').focus(); }); return false ; }
		if ( _win.down('#partaran_nombre').getValue() == '' ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar Descripción de la partida arancelaria', function() { _win.down('#partaran_nombre').focus(); }); return false ; }

	    if ( _frm.getForm().isValid() ) {
			Ext.Msg.confirm(translations.confirmar, translations.mensaje_pregunta_guardar, function(btn){
			if ( btn == 'yes' ) {
			   	var _vs = fextpub_sessionVariables();
			    _frm.getForm().submit({
					method: 'POST',  url: 'php/public_partidas_arancelarias_save.php',
					params:{ xx0005: 'YES', xxType_edit: _win.getTypeEdit(),
					         zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
	                waitTitle: translations.valida_titulo, waitMsg: translations.valida_mensaje01,
		            
		            success: function(form, action) {
		            	var result = Siace.util.Util.decodeJSON(action.response.responseText);
		                if ( result.success ) {
				            if ( _win.getCallStore() !== null ) {
				            	_win.getCallStore().load();
						    } else if ( _win.getCallWindow() !== null ) {
						    	_win.getCallWindow().down('#partaran_key').setValue(_result.partaran_key);
				    			_win.getCallWindow().down('#partaran_codigo').setValue(_frm.down('#partaran_codigo').getValue());
				        		_win.getCallWindow().down('#partaran_nombre').setValue(_frm.down('#partaran_nombre').getValue());
				        	}
		                    _win.close();
		                } else { Siace.util.Util.showErrorMsg(result.msg); }
		            },
		            failure: function(form, action) { Siace.util.Util.showErrorMsg(action.response.responseText); }
	        	});
			}});
	    }
	},

	ppae_btnUndoClick: function(button, e, options) {
		button.up('window').close();
	},

	/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	ppas_BeforeRender: function(component, options) {
		var _store = Ext.create('Siace.store.public.Partidas_Arancelarias');
		var _grid = component.down('#grdPublic_partidas_arancelarias'); var _pag = component.down('#pagPublic_partidas_arancelarias');
		_grid.bindStore(_store);  _pag.bindStore(_store);
		_store.sort('nand_nombre', 'ASC'); _store.pageSize = 500;
		_store.on('beforeload', function(store, operations, eOpts) {
			component.down('#btnAccept').setDisabled(true);
		    store.getProxy().setExtraParam('xxPartaran_codigo', component.down('#partaran_codigo').getValue());
		    store.getProxy().setExtraParam('xxPartaran_nombre', component.down('#partaran_nombre').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'grid_search');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		    store.getProxy().setExtraParam('xxPaginate', '1');
		});
	},

	ppas_Clean: function(poComponent) {
		var _pag = poComponent.down('#pagPublic_partidas_arancelarias'); var _store = _pag.getStore();
		fext_gridClean(_store, _pag);

		_window.down('#btnAccept').disable();
	},

	ppas_btnAcceptClick: function(button, e, options) {
		var _win = button.up('window');
		var _grid = _win.down('#grdPublic_partidas_arancelarias');
        var _record = _grid.getSelectionModel().getSelection()[0];
        var _close = true;

        if ( _record && _record.data.partaran_key !== _win.getCallKey() ) {
        	if ( _win.getCallWindow() !== null ) {
   				_win.getCallWindow().down('#partaran_key').setValue(_record.data.partaran_key);
   				_win.getCallWindow().down('#partaran_codigo').setValue(_record.data.partaran_codigo);
   				_win.getCallWindow().down('#partaran_nombre').setValue(_record.data.partaran_nombre);
        	}
        	if ( _close ) { _win.close();  if ( _win.getActionDestroy() == true ) { _win.destroy(); } }
		}
	},

	ppas_btnCancelClick: function(button, e, options) {
		button.up('window').close();  if ( button.up('window').getActionDestroy() == true ) { button.up('window').destroy(); }
	},

	ppas_grdPublic_partidas_arancelariasItemdblclick: function(component, record, item, index, e, options) {
		var _btnAccept = component.up('window').down('#btnAccept');
        _btnAccept.fireEvent('click', _btnAccept, e, options);
	},


	ppas_grdPublic_partidas_arancelariasSelectionchange: function(model, record, options) {
		if ( record.length == 1 ) {
			var _win = model.view.panel.up('window')
			_win.down('#btnAccept').setDisabled( record[0].data.partaran_key == _win.getCallKey() ? true : false );
		}
	},

	ppas_partaran_codigoChange: function(textfield, newValue, oldValue, options) {
		this.ppas_Clean(textfield.up('panel'));
	},

	ppas_partaran_nombreChange: function(textfield, newValue, oldValue, options) {
		this.ppas_Clean(textfield.up('panel'));
	},
});