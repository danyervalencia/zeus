Ext.define('Siace.controller.logistics.PedidosBrowse', {
	extend: 'Ext.app.Controller', stores: ['array.logistics.Tipos_Plazos'],
	views: ['logistics.PedidosAssign61', 'logistics.PedidosAttachments', 'logistics.PedidosBrowse', 'logistics.PedidosEdit', 'logistics.PedidosBrowseVobo', 'logistics.PedidosBrowseControl', 'logistics.PedidosPsw2', 'toolbar.CapsLockTooltip' ],	
	refs: [{ ref: 'capsLockToolTip',  selector: 'toolbar_capslocktooltip' }],

	init: function(application) {
		this.control({
			'logistics_pedidosassign61': { beforeshow: this.lpa61_beforeShow, },
			'logistics_pedidosassign61 #btnAccept': { click: this.lpa61_btnAcceptClick, },
			'logistics_pedidosassign61 #btnCancel': { click: this.lpa61_btnCancelClick, },
			'logistics_pedidosassign61 #pedweb_estado': { change: this.lpa61_pedweb_estadoChange, },
			'logistics_pedidosassign61 #usur_psw2': { keypress: this.lpa61_usur_psw2KeyPress, },

			'logistics_pedidosattachments': { beforeshow: this.lpa_beforeShow, },
			'logistics_pedidosattachments #btnEttr': { click: this.lpa_btnEttrClick, },
			'logistics_pedidosattachments #btnPedettr_file1': { click: this.lpa_btnPedettr_file1Click, },
			'logistics_pedidosattachments #btnPedettr_file2': { click: this.lpa_btnPedettr_file2Click, },

			'logistics_pedidosbrowse': { beforerender: this.lpb_BeforeRender, },
			'logistics_pedidosbrowse #panLogistics_pedidos #opc_id': { change: this.lpb_plp_opc_idChange, },
			'logistics_pedidosbrowse #panLogistics_pedidos #btnNew': { click: this.lpb_plp_btnNewClick, },
			'logistics_pedidosbrowse #panLogistics_pedidos #btnModify': { click: this.lpb_plp_btnModifyClick, },
			'logistics_pedidosbrowse #panLogistics_pedidos #btnQuery': { click: this.lpb_plp_btnQueryClick, },
			'logistics_pedidosbrowse #panLogistics_pedidos #btnEttr': { click: this.lpb_plp_btnEttrClick, },
			'logistics_pedidosbrowse #panLogistics_pedidos #btnAttach': { click: this.lpb_plp_btnAttachClick, },
			'logistics_pedidosbrowse #panLogistics_pedidos #btnAnnular': { click: this.lpb_plp_btnAnnularClick, },
			'logistics_pedidosbrowse #panLogistics_pedidos #btnFases': { click: this.lpb_plp_btnFasesClick, },
			'logistics_pedidosbrowse #panLogistics_pedidos #btnPrinter': { click: this.lpb_plp_btnPrinterClick, },
			'logistics_pedidosbrowse #panLogistics_pedidos #btnOrders': { click: this.lpb_plp_btnOrdersClick, },
			'logistics_pedidosbrowse #panLogistics_pedidos #area_key': { change: this.lpb_plp_area_keyChange, },
			'logistics_pedidosbrowse #panLogistics_pedidos #fase_id': { change: this.lpb_plp_fase_idChange, },
			'logistics_pedidosbrowse #panLogistics_pedidos #fechaini': { change: this.lpb_plp_fechainiChange, },
			'logistics_pedidosbrowse #panLogistics_pedidos #fechafin': { change: this.lpb_plp_fechafinChange, },
			'logistics_pedidosbrowse #panLogistics_pedidos #filter': { change: this.lpb_plp_filterChange, },
			'logistics_pedidosbrowse #panLogistics_pedidos #grdLogistics_pedidos': { cellclick: this.lpb_plp_grdLogistics_pedidosCellClick, selectionchange: this.lpb_plp_grdLogistics_pedidosSelectionChange, },
			'logistics_pedidosbrowse #panLogistics_pedidos #meta_id': { change: this.lpb_plp_meta_idChange, },
			'logistics_pedidosbrowse #panLogistics_pedidos #ped_nro': { change: this.lpb_plp_ped_nroChange, },
			'logistics_pedidosbrowse #panLogistics_pedidos #tarea_key': { change: this.lpb_plp_tarea_keyChange, },
			'logistics_pedidosbrowse #panLogistics_pedidos #tipgast_id': { change: this.lpb_plp_tipgast_idChange, },
			'logistics_pedidosbrowse #panLogistics_pedidos #tipped_id': { change: this.lpb_plp_tipped_idChange, },
			'logistics_pedidosbrowse #panLogistics_pedidos #year_id': { change: this.lpb_plp_year_idChange, },
			'logistics_pedidosbrowse #tabLogistics_cotizaciones #opc_id': { change: this.lpb_tlc_opc_idChange, },
			'logistics_pedidosbrowse #tabLogistics_cotizaciones #btnQuery': { click: this.lpb_tlc_btnQueryClick },
			'logistics_pedidosbrowse #tabLogistics_cotizaciones #btnPrinter': { click: this.lpb_tlc_btnPrinterClick },
			'logistics_pedidosbrowse #tabLogistics_cotizaciones #btnCuadro': { click: this.lpb_tlc_btnCuadroClick },
			'logistics_pedidosbrowse #tabLogistics_cotizaciones #grdLogistics_cotizaciones': { selectionchange: this.lpb_tlc_grdLogistics_cotizacionesSelectionChange, },
			'logistics_pedidosbrowse #tabLogistics_ordenes #opc_id': { change: this.lpb_tlo_opc_idChange, },
			'logistics_pedidosbrowse #tabLogistics_ordenes #btnQuery': { click: this.lpb_tlo_btnQueryClick },
			'logistics_pedidosbrowse #tabLogistics_ordenes #btnPrinter': { click: this.lpb_tlo_btnPrinterClick },
			'logistics_pedidosbrowse #tabLogistics_ordenes #grdLogistics_ordenes': { selectionchange: this.lpb_tlo_grdLogistics_ordenesSelectionChange, },

			'logistics_pedidosbrowsecontrol': { beforerender: this.lpbc_BeforeRender },
			'logistics_pedidosbrowsecontrol #panLogistics_pedidos #opc_id': { change: this.lpbc_plp_opc_idChange, },
			'logistics_pedidosbrowsecontrol #panLogistics_pedidos #btnQuery': { click: this.lpbc_plp_btnQueryClick, },
			'logistics_pedidosbrowsecontrol #panLogistics_pedidos #btnAttach': { click: this.lpbc_plp_btnAttachClick, },			
			'logistics_pedidosbrowsecontrol #panLogistics_pedidos #btnFases': { click: this.lpbc_plp_btnFasesClick, },
			'logistics_pedidosbrowsecontrol #panLogistics_pedidos #btnAdd': { click: this.lpbc_plp_btnAddClick, },
			'logistics_pedidosbrowsecontrol #panLogistics_pedidos #btnChange': { click: this.lpbc_plp_btnChangeClick, },
			'logistics_pedidosbrowsecontrol #panLogistics_pedidos #btnPrinter': { click: this.lpbc_plp_btnPrinterClick, },
			'logistics_pedidosbrowsecontrol #panLogistics_pedidos #btnSolicitud': { click: this.lpbc_plp_btnSolicitudClick, },
			'logistics_pedidosbrowsecontrol #panLogistics_pedidos #area_key': { change: this.lpbc_plp_area_keyChange, },
			'logistics_pedidosbrowsecontrol #panLogistics_pedidos #fase_id': { change: this.lpbc_plp_fase_idChange, },
			'logistics_pedidosbrowsecontrol #panLogistics_pedidos #fechaini': { change: this.lpbc_plp_fechainiChange, },
			'logistics_pedidosbrowsecontrol #panLogistics_pedidos #fechafin': { change: this.lpbc_plp_fechafinChange, },
			'logistics_pedidosbrowsecontrol #panLogistics_pedidos #filter': { change: this.lpbc_plp_filterChange, },
			'logistics_pedidosbrowsecontrol #panLogistics_pedidos #grdLogistics_pedidos': { cellclick: this.lpbc_plp_grdLogistics_pedidosCellClick, selectionchange: this.lpbc_plp_grdLogistics_pedidosSelectionChange, },
			'logistics_pedidosbrowsecontrol #panLogistics_pedidos #meta_id': { change: this.lpbc_plp_meta_idChange, },
			'logistics_pedidosbrowsecontrol #panLogistics_pedidos #ped_nro': { change: this.lpbc_plp_ped_nroChange, },
			'logistics_pedidosbrowsecontrol #panLogistics_pedidos #tarea_key': { change: this.lpbc_plp_tarea_keyChange, },
			'logistics_pedidosbrowsecontrol #panLogistics_pedidos #tipgast_id': { change: this.lpbc_plp_tipgast_idChange, },
			'logistics_pedidosbrowsecontrol #panLogistics_pedidos #tipped_id': { change: this.lpbc_plp_tipped_idChange, },
			'logistics_pedidosbrowsecontrol #panLogistics_pedidos #year_id': { change: this.lpbc_plp_year_idChange, },
			'logistics_pedidosbrowsecontrol #tabLogistics_cotizaciones #opc_id': { change: this.lpbc_tlc_opc_idChange, },
			'logistics_pedidosbrowsecontrol #tabLogistics_cotizaciones #btnNew': { click: this.lpbc_tlc_btnNewClick },
			'logistics_pedidosbrowsecontrol #tabLogistics_cotizaciones #btnAnnular': { click: this.lpbc_tlc_btnAnnularClick },
			'logistics_pedidosbrowsecontrol #tabLogistics_cotizaciones #btnPrinter': { click: this.lpbc_tlc_btnPrinterClick },
			'logistics_pedidosbrowsecontrol #tabLogistics_cotizaciones #btnBuenapro': { click: this.lpbc_tlc_btnBuenaproClick },
			'logistics_pedidosbrowsecontrol #tabLogistics_cotizaciones #btnBuenaproDelete': { click: this.lpbc_tlc_btnBuenaproDeleteClick },
			'logistics_pedidosbrowsecontrol #tabLogistics_cotizaciones #btnCuadro': { click: this.lpbc_tlc_btnCuadroClick },
			'logistics_pedidosbrowsecontrol #tabLogistics_cotizaciones #grdLogistics_cotizaciones': { selectionchange: this.lpbc_tlc_grdLogistics_cotizacionesSelectionChange, },
			'logistics_pedidosbrowsecontrol #tabLogistics_ordenes #opc_id': { change: this.lpbc_tlo_opc_idChange, },
			'logistics_pedidosbrowsecontrol #tabLogistics_ordenes #btnQuery': { click: this.lpbc_tlo_btnQueryClick },
			'logistics_pedidosbrowsecontrol #tabLogistics_ordenes #btnPrinter': { click: this.lpbc_tlo_btnPrinterClick },
			'logistics_pedidosbrowsecontrol #tabLogistics_ordenes #grdLogistics_ordenes': { selectionchange: this.lpbc_tlo_grdLogistics_ordenesSelectionChange, },

			'logistics_pedidosbrowsevobo': { beforerender: this.lpbv_BeforeRender, },
			'logistics_pedidosbrowsevobo #opc_id': { change: this.lpbv_opc_idChange, },
			'logistics_pedidosbrowsevobo #btnQuery': { click: this.lpbv_btnQueryClick, },
			'logistics_pedidosbrowsevobo #btnAttach': { click: this.lpbv_btnAttachClick, },
            'logistics_pedidosbrowsevobo #btnFases': { click: this.lpbv_btnFasesClick, },			
			'logistics_pedidosbrowsevobo #btnVobo': { click: this.lpbv_btnVoboClick, },
			'logistics_pedidosbrowsevobo #btnReject': { click: this.lpbv_btnRejectClick, },
			'logistics_pedidosbrowsevobo #area_key': { change: this.lpbv_area_keyChange, },
			'logistics_pedidosbrowsevobo #faseacce_key': { change: this.lpbv_faseacce_keyChange, },
			'logistics_pedidosbrowsevobo #fechaini': { change: this.lpbv_fechainiChange, },
			'logistics_pedidosbrowsevobo #fechafin': { change: this.lpbv_fechafinChange, },
			'logistics_pedidosbrowsevobo #grdLogistics_pedidos': { selectionchange: this.lpbv_grdLogistics_pedidosSelectionChange, },
			'logistics_pedidosbrowsevobo #tipped_id': { change: this.lpbv_tipped_idChange, },
			'logistics_pedidosbrowsevobo #year_id': { change: this.lpbv_year_idChange, },

			'logistics_pedidosedit': { beforeshow: this.lpe_BeforeShow, show: this.lpe_Show, },
            'logistics_pedidosedit #btnSave': { click: this.lpe_btnSaveClick, },
            'logistics_pedidosedit #btnUndo': { click: this.lpe_btnUndoClick, },
            'logistics_pedidosedit #btnExit': { click: this.lpe_btnExitClick, },
            'logistics_pedidosedit #tabLogistics_pedidos #btnAdd': { click: this.lpe_tlp_btnAddClick, },
            'logistics_pedidosedit #tabLogistics_pedidos #btnSuppress': { click: this.lpe_tlp_btnSuppressClick, },
            'logistics_pedidosedit #tabLogistics_pedidos #grdLogistics_pedidos_det': { selectionchange: this.lpe_tlp_grdLogistics_pedidos_detSelectionChange, },
            'logistics_pedidosedit #tabLogistics_pedidos #meta_id': { change: this.lpe_tlp_meta_idChange, },
            'logistics_pedidosedit #tabLogistics_pedidos #tarea_key': { change: this.lpe_tlp_tarea_keyChange, },
            'logistics_pedidosedit #tabEttr03 #btnPedettr_file1Delete': { click: this.lpe_btnPedettr_file1DeleteClick, },
            'logistics_pedidosedit #tabEttr03 #btnPedettr_file1Download': { click: this.lpe_btnPedettr_file1DownloadClick, },
            'logistics_pedidosedit #tabEttr03 #ffiPedettr_file1': { change: this.lpe_ffiPedettr_file1Change, },
            'logistics_pedidosedit #tabEttr03 #btnPedettr_file2Delete': { click: this.lpe_btnPedettr_file2DeleteClick, },
            'logistics_pedidosedit #tabEttr03 #btnPedettr_file2Download': { click: this.lpe_btnPedettr_file2DownloadClick, },
            'logistics_pedidosedit #tabEttr03 #ffiPedettr_file2': { change: this.lpe_ffiPedettr_file2Change, },

			'logistics_pedidosok': { beforeshow: this.lpo_BeforeShow, },
			'logistics_pedidosok #btnNew': { click: this.lpo_btnNewClick, },
			'logistics_pedidosok #btnPrinter': { click: this.lpo_btnPrinterClick, },
			'logistics_pedidosok #btnExit': { click: this.lpo_btnExitClick, },

			'logistics_pedidospsw2': { beforeshow: this.lpp_beforeShow, show: this.lpp_Show, },
			'logistics_pedidospsw2 #btnAccept': { click: this.lpp_btnAcceptClick, },
			'logistics_pedidospsw2 #btnCancel': { click: this.lpp_btnCancelClick, },
			'logistics_pedidospsw2 #pedweb_estado': { change: this.lpp_pedweb_estadoChange, },
			'logistics_pedidospsw2 #usur_psw2': { keypress: this.lpp_usur_psw2KeyPress, }
      	});
	},

	lpa61_beforeShow: function(component, options) {
        var _form = component.down('form'); var _vs = fextpub_sessionVariables();
   		_form.load({
   			method: 'POST', url: 'php/logistics_pedidos_json_records.php',
            params: { xxPed_key: component.getCallKey(),  xxType_record: 'logistics_pedidosassign61', xxType_query: 'logistics_pedidosassign61', xxMenu_id: component.getMenuId(),
                      zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] }, waitMsg: 'Loading...',
            success: function (form, action) {
                try {
                    var _model = Ext.create('Siace.model.logistics.Pedido'); var _result = Ext.decode(action.response.responseText);
                    if ( _result.data[0] ) {
                        _model.set(_result.data[0]);  _form.loadRecord(_model);
                        _form.down('#ped_nro').setValue(fjsLpad(_model.data.ped_nro, 6, '0')); _form.down('#ped_fecha').setValue(Ext.Date.format(_model.data.ped_fecha, 'd/m/Y')); _form.down('#tipped_nombre').setValue(_model.data.tipped_nombre);
                        _form.down('#area_nombre').setValue(_model.data.area_nombre.substr(0,60));
                        _form.down('#meta_codename').setValue(_model.data.meta_code +' &nbsp; '+_model.data.meta_nombre.substr(0,60));
                        _form.down('#tarea_codename').setValue(_model.data.tarea_codigo +' &nbsp; '+_model.data.tarea_nombre.substr(0,50));
						//component.down('#cntPdpd').fireEvent('loaddata', component.down('#cntPdpd'), (_typeEdit=='2'?false:true), _model.data.pais_id, _model.data.dpto_id, _model.data.prvn_id, _model.data.dstt_id);
                    }
                }
                catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
            },
            failure: function (form, action) { Ext.Msg.alert("Load failed", action.result.errorMessage); }
        });

   		var _cboUsuracce_key = component.down('#usuracce_key');
		_cboUsuracce_key.bindStore(Ext.create('Siace.store.logistics.Fases_Accesos_Usuarios_Accesos'));
		_cboUsuracce_key.getStore().load({ 
		    //params: { xxFaseacce_key: _panel.down('#faseacce_key').getValue(), xxAdd_blank: (record.data.faseextr_type=='1'?'':'YES'), xxType_record: 'combo_cotizadores', },
		    params: { xxFase_id: '161', xxAdd_blank: 'YES', xxType_record: 'combo_cotizadores', },
		    callback: function(records, operations, success) { _cboUsuracce_key.setValue(''); }
		});
	},

	lpa61_btnAcceptClick: function(button, e, options) {
		var _win = button.up('window'); var _frm = _win.down('form');
		if ( _win.down('#usuracce_key').getValue() == '' ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar el COTIZADOR al que asignará el requerimiento', function() { _win.down('#usuracce_key').focus(); }); return false ; }

		Ext.Msg.confirm(translations.confirmar, translations.mensaje_pregunta_guardar, function(btn){
			if ( btn == 'yes' ) {
		    	var _vs = fextpub_sessionVariables();
		        _frm.getForm().submit({
					method: 'POST', url: 'php/logistics_pedidos_fases_save_161.php',
					params:{ xx0005: 'YES', xxType_edit: _win.getTypeEdit(), xxPed_key: _win.getCallKey(), xxMenu_id: _win.getMenuId(), 
						     zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
	                waitTitle: translations.valida_titulo, waitMsg: translations.valida_mensaje01,
				            
		            success: function(form, action) {
		            	var _result = Siace.util.Util.decodeJSON(action.response.responseText);
		                if ( _result.success ) {
				            if ( _win.getCallStore() !== null ) { _win.getCallStore().load(); }
						    else if ( _win.getCallWindow() !== null ) { }
			                _win.close();
		                } else { Siace.util.Util.showErrorMsg(_result.msg); }
		            },
		            failure: function(form, action) { Siace.util.Util.showErrorMsg(action.response.responseText); }
		        });
			}
		});
	},

	lpa61_btnCancelClick: function(button, e, options) {
		button.up('window').close();
	},

	lpa_beforeShow: function(component, options) {
        var _form = component.down('form'); var _vs = fextpub_sessionVariables();

   		_form.load({
   			method: 'POST', url: 'php/logistics_pedidos_ettr_json_records.php',
            params: { xxPed_key: component.getCallKey(),  xxType_record: 'attachments',
                      zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] }, waitMsg: 'Loading...',
            success: function (form, action) {
                try {
                    var _model = Ext.create('Siace.model.logistics.Pedido_Ettr'); var _result = Ext.decode(action.response.responseText);
                    if ( _result.data[0] ) {
                        _model.set(_result.data[0]);  _form.loadRecord(_model);
                        if ( _model.data.pedettr_file1 !== '' ) { _form.down('#btnPedettr_file1').enable(); _form.down('#btnPedettr_file1').setTooltip(' Interno '); }
                        if ( _model.data.pedettr_file2 !== '' ) { _form.down('#btnPedettr_file2').enable(); _form.down('#btnPedettr_file2').setTooltip(' Proveedor '); }
                    }
                }
                catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
            },
            failure: function (form, action) { Ext.Msg.alert("Load failed", action.result.errorMessage); }
        });
	},

	lpa_btnEttrClick: function(button, e, options) {
		var _win = button.up('window'); var _title = _win.down("#btnEttr").getText() +" &nbsp;"+ _win.down("#doc_abrev").getValue()+"/ "+_win.down("#ped_documento").getValue(); var _ped_key = _win.getCallKey();
        fext_pdf('', _title, 'php/pdf/pdf_logistics_pedidos_ettr_printer.php?xxPed_key='+_ped_key+'&xxType_record=printer');
	},

	lpa_btnPedettr_file1Click: function(button, e, options) {
		var _win = button.up('window');
		//var _file = button.up('window').down('#ffiPedettr_file1').fileInputEl.dom.files[0];
		var _src = 'php/resources/download_file.php?xxTable=logistics_pedidos_ettr&xxField=file1&xxFile_name=' + _win.down('#pedettr_key').getValue() +'_'+ _win.down('#pedettr_file1').getValue();
		fext_FileDownload(undefined, _src);
	},

	lpa_btnPedettr_file2Click: function(button, e, options) {
		var _win = button.up('window');
		var _src = 'php/resources/download_file.php?xxTable=logistics_pedidos_ettr&xxField=file2&xxFile_name=' + _win.down('#pedettr_key').getValue() +'_'+ _win.down('#pedettr_file2').getValue();
		fext_FileDownload(undefined, _src);
	},

	lpb_BeforeRender: function(component, options) {
		var _menu_id = component.getMenuId(); var _panLP = component.down('#panLogistics_pedidos'); var _tabLPD = component.down('#tabLogistics_pedidos_det'); var _tabLC = component.down('#tabLogistics_cotizaciones'); var _tabLO = component.down('#tabLogistics_ordenes');
		var _grdLP = _panLP.down('#grdLogistics_pedidos'); var _pagLP = _panLP.down('#pagLogistics_pedidos');  var _tab = component.down('#tab01'); var _vs = fextpub_sessionVariables(); var _me = this;
		fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': _panLP.down('#opc_id'), 'menu_id': _menu_id });

		if ( _menu_id == "5101" ) {
			 _tabLC.down('#menu_id').setValue(5119); _tabLO.down('#menu_id').setValue(5120);
			fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': _tabLC.down('#opc_id'), 'menu_id': _tabLC.down('#menu_id').getValue() });
			fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': _tabLO.down('#opc_id'), 'menu_id': _tabLO.down('#menu_id').getValue() });
			fextlog_fasesFilter({'objeto': _panLP.down('#fase_id'), 'doc_id': '501', 'fase_type': '1', 'type_record': 'combo_pedidos_browse', 'type_query': 'combo_pedidos_browse'});
			var _str = Ext.create('Ext.data.Store', {
				fields: [ { name: 'filt', type: 'string' }, { name: 'code', type: 'string' }, ],
				data: [{ filt: '', code: '' }, { filt: '=', code: '=' }, { filt: '<=', code: '<=' }, { filt: '>=', code: '>=' },]
			});
			var _cboFilter = _panLP.down('#filter'); _cboFilter.bindStore(_str);
			_cboFilter.getStore().load({ callback: function(records, operations, success) {  _cboFilter.setValue('>='); } });
		} else if ( _menu_id == '5111' ) {
			_tabLC.down('#menu_id').setValue(5114); _tabLO.down('#menu_id').setValue(5115);
			fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': _tabLC.down('#opc_id'), 'menu_id': _tabLC.down('#menu_id').getValue() });
			fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': _tabLO.down('#opc_id'), 'menu_id': _tabLO.down('#menu_id').getValue() });
			_grdLP.columns[12].hidden = true;
			_panLP.down('#filter').setVisible(false); _panLP.down('#fase_id').setVisible(false); _panLP.down('#btnAdd').setVisible(false);  _panLP.down('#btnChange').setVisible(false);
		} else { return false; }

		fextpub_yearsVisible(_panLP.down('#year_id'), Ext.getCmp('ah_txtYear_id').getValue());
		fextpub_areasFilter({'objeto': _panLP.down('#area_key'), 'visible': false, 'filter': true, 'area_key': Ext.getCmp('ah_txtArea_key').getValue(), 've_usuracce_key': 'YES', 'type_record': 'combo_abrev', 'add_blank': (_menu_id=='5101'?'NO':'')});
		fextbud_tareasAMParameters({'panel': _panLP, 'docu_campo': 'tareausuracce_estado501', 'docu_estado': '1'});
		fextpub_tablas_generalesFilter({'objeto': _panLP.down('#tipgast_id'), 'tabgen_parent': '2020', 'type_record': 'combo_code'});
		fextbud_tareasATParameters({'panel': _panLP, 'docu_campo': 'tareausuracce_estado501', 'docu_estado': '1'});
		fextpub_tablas_generalesFilter({'objeto': _panLP.down('#tipped_id'), 'tabgen_parent': '5005', 'type_record': 'combo_abrev'});

		var _storeLPD = Ext.create('Siace.store.logistics.Pedidos_Det'); var _grdLPD = _tabLPD.down('#grdLogistics_pedidos_det'); var _pagLPD = _tabLPD.down('#pagLogistics_pedidos_det');
		_grdLPD.bindStore(_storeLPD);  _pagLPD.bindStore(_storeLPD); _storeLPD.sort('peddet_item', 'ASC'); _storeLPD.pageSize = 500;
		_storeLPD.on('beforeload', function(store, operations, options) {
		    var _record = _grdLP.getSelectionModel().getSelection()[0];
	    	store.getProxy().setExtraParam('xxPed_key', _record.data.ped_key);
		    store.getProxy().setExtraParam('xxType_record', 'grid_logistics.PedidosBrowseControl');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		    store.getProxy().setExtraParam('xxPaginate', '1');
		});

		var _storeLC = Ext.create('Siace.store.logistics.Cotizaciones'); var _grdLC = _tabLC.down('#grdLogistics_cotizaciones'); var _pagLC = _tabLC.down('#pagLogistics_cotizaciones');
		_grdLC.bindStore(_storeLC);  _pagLC.bindStore(_storeLC); _storeLC.sort('coti_fecha', 'DESC'); _storeLC.pageSize = 500;
		_storeLC.on('beforeload', function(store, operations, options) {
			_tabLC.down('#btnQuery').disable(); _tabLC.down('#btnPrinter').disable();
		    var _record = _grdLP.getSelectionModel().getSelection()[0];
	    	store.getProxy().setExtraParam('xxPed_key', _record.data.ped_key);
		    store.getProxy().setExtraParam('xxType_record', 'grid_logistics.PedidosBrowse');
		    store.getProxy().setExtraParam('ssNO_USK', 'NOT');
		    store.getProxy().setExtraParam('zzUsursess_key', _vs['us']);
		    store.getProxy().setExtraParam('zzUsuracce_key', _vs['ua']);
		    store.getProxy().setExtraParam('zzYear_id', _vs['y']);
		    store.getProxy().setExtraParam('zzUsur_key', _vs['u']);
		    store.getProxy().setExtraParam('zzArea_key', _vs['a']);
		    store.getProxy().setExtraParam('xxMenu_id', component.getMenuId());
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		    store.getProxy().setExtraParam('xxPaginate', '1');
		});

		var _storeLO = Ext.create('Siace.store.logistics.Ordenes'); var _grdLO = _tabLO.down('#grdLogistics_ordenes'); var _pagLO = _tabLO.down('#pagLogistics_ordenes');
		_grdLO.bindStore(_storeLO); _pagLO.bindStore(_storeLO);	_storeLO.sort('orden_fecha', 'ASC'); _storeLO.pageSize = 500;
		_storeLO.on('beforeload', function(store, operations, options) {
			_tabLC.down('#btnPrinter').disable();
		    var _record = _grdLP.getSelectionModel().getSelection()[0];
	    	store.getProxy().setExtraParam('xxTablex', '5000');
	    	store.getProxy().setExtraParam('xxTablex_key', _record.data.ped_key);
		    store.getProxy().setExtraParam('xxType_record', 'grid_logistics.PedidosBrowse');
		    store.getProxy().setExtraParam('ssNO_USK', 'NOT');
		    store.getProxy().setExtraParam('zzUsursess_key', _vs['us']);
		    store.getProxy().setExtraParam('zzUsuracce_key', _vs['ua']);
		    store.getProxy().setExtraParam('zzYear_id', _vs['y']);
		    store.getProxy().setExtraParam('zzUsur_key', _vs['u']);
		    store.getProxy().setExtraParam('zzArea_key', _vs['a']);
		    store.getProxy().setExtraParam('xxMenu_id', component.getMenuId());
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		    store.getProxy().setExtraParam('xxPaginate', '1');
		});

		var _storeLP = Ext.create('Siace.store.logistics.Pedidos');
		_grdLP.bindStore(_storeLP);  _pagLP.bindStore(_storeLP); _storeLP.sort('ped_nro', 'DESC'); _storeLP.pageSize = 500; var _vs = fextpub_sessionVariables();
		_storeLP.on('beforeload', function(store, operations, eOpts) {
			_panLP.down('#btnModify').disable(); _panLP.down('#btnQuery').disable(); _panLP.down('#btnEttr').disable(); _panLP.down('#btnAttach').disable(); _panLP.down('#btnAnnular').disable(); _panLP.down('#btnFases').disable(); _panLP.down('#btnPrinter').disable();
			_me.lpb_tabsClean(component, true);

		    store.getProxy().setExtraParam('xxYear_id', _panLP.down('#year_id').getValue());
		    store.getProxy().setExtraParam('xxArea_key', (component.getMenuId() == '5101' ? (_panLP.down('#area_key').getValue() == '' || _panLP.down('#area_key').getValue() == undefined ? Ext.getCmp('ah_txtArea_key').getValue() : _panLP.down('#area_key').getValue()) : _panLP.down('#area_key').getValue()) );
		    store.getProxy().setExtraParam('xxMeta_id', _panLP.down('#meta_id').getValue());
		    store.getProxy().setExtraParam('xxTipgast_id', _panLP.down('#tipgast_id').getValue());
		    store.getProxy().setExtraParam('xxTarea_key', _panLP.down('#tarea_key').getValue());
		    //store.getProxy().setExtraParam('xxFuefin_id', _panLP.down('#fuefin_id').getValue());
		    store.getProxy().setExtraParam('xxTipped_id', _panLP.down('#tipped_id').getValue());
		    store.getProxy().setExtraParam('xxPed_nro', _panLP.down('#ped_nro').getValue());
		    store.getProxy().setExtraParam('xxFilter', _panLP.down('#filter').getValue());
		    store.getProxy().setExtraParam('xxFase_id', _panLP.down('#fase_id').getValue());
			store.getProxy().setExtraParam('xxFechaini', _panLP.down('#fechaini').getSubmitData());
			store.getProxy().setExtraParam('xxFechafin', _panLP.down('#fechafin').getSubmitData());
			store.getProxy().setExtraParam('xxPed_nro', _panLP.down('#ped_nro').getValue());
		    store.getProxy().setExtraParam('zzUsursess_key', _vs['us']);
		    store.getProxy().setExtraParam('zzUsuracce_key', _vs['ua']);
		    store.getProxy().setExtraParam('zzYear_id', _vs['y']);
		    store.getProxy().setExtraParam('zzUsur_key', _vs['u']);
		    store.getProxy().setExtraParam('zzArea_key', _vs['a']);
		    store.getProxy().setExtraParam('xxMenu_id', component.getMenuId());
		    store.getProxy().setExtraParam('xxType_record', 'grid');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		}); _storeLP.load();
	},

	lpb_tabsClean: function(poComponent, pbBoolean, pnFase) {
		var _tabLPD = poComponent.down('#tabLogistics_pedidos_det'); 
		var _pagLPD = _tabLPD.down('#pagLogistics_pedidos_det'); var _storeLPD = _pagLPD.getStore(); fext_gridClean(_storeLPD, _pagLPD);
		_tabLPD.down('#ped_documento').setValue(''); _tabLPD.down('#ped_fecha').setValue(''); _tabLPD.down('#area_nombre').setValue(''); _tabLPD.down('#meta_codename').setValue(''); _tabLPD.down('#tarea_codename').setValue('');
		_pagLPD.setDisabled(pbBoolean);

		var _tabLC = poComponent.down('#tabLogistics_cotizaciones'); 
		var _pagLC = _tabLC.down('#pagLogistics_cotizaciones'); var _storeLC = _pagLC.getStore(); fext_gridClean(_storeLC, _pagLC);
		_tabLC.down('#ped_documento').setValue(''); _tabLC.down('#ped_fecha').setValue(''); _tabLC.down('#area_nombre').setValue(''); _tabLC.down('#meta_codename').setValue(''); _tabLC.down('#tarea_codename').setValue('');
		var _fase = (Ext.isEmpty(pnFase) ? 0 : pnFase);
		_pagLC.setDisabled(pbBoolean);
		_tabLC.down('#btnQuery').disable(); _tabLC.down('#btnPrinter').disable(); _tabLC.down('#btnCuadro').disable();

		var _tabLO = poComponent.down('#tabLogistics_ordenes');
		var _pagLO = _tabLO.down('#pagLogistics_ordenes'); var _storeLO = _pagLO.getStore(); fext_gridClean(_storeLO, _pagLO);
		_tabLO.down('#ped_documento').setValue(''); _tabLO.down('#ped_fecha').setValue(''); _tabLO.down('#area_nombre').setValue(''); _tabLO.down('#meta_codename').setValue(''); _tabLO.down('#tarea_codename').setValue('')
		_pagLO.setDisabled(pbBoolean); _tabLO.down('#btnQuery').disable(); _tabLO.down('#btnPrinter').disable();
	},


	lpb_plp_Clean: function(poComponent) {
		var _pag = poComponent.down('#pagLogistics_pedidos'); var _store = _pag.getStore(); fext_gridClean(_store, _pag);
		poComponent.down('#btnModify').disable(); poComponent.down('#btnQuery').disable(); poComponent.down('#btnEttr').disable(); poComponent.down('#btnAttach').disable(); poComponent.down('#btnAnnular').disable(); poComponent.down('#btnPrinter').disable();
	},

	lpb_plp_ViewEdit: function(poComponent, pcTypeEdit){
		fextlog_pedidosView({"component": poComponent, "type_edit": pcTypeEdit, "menu_id": poComponent.up("panel").getMenuId(), "opc_id": pcTypeEdit, "year_id": poComponent.down('#year_id').getValue(), "call_store": true});
	},

	lpb_plp_opc_idChange: function(combo, newValue, oldValue, options) {
		combo.up('panel').down('#btnNew').setDisabled(fextpub_uamoButtons(combo, 1));
	},

	lpb_plp_btnNewClick: function(button, e, options) {
		this.lpb_plp_ViewEdit(button.up('panel'), '1');
	},

	lpb_plp_btnModifyClick: function(button, e, options) {
        this.lpb_plp_ViewEdit(button.up('panel'), '2');
	},

	lpb_plp_btnQueryClick: function(button, e, options) {
        this.lpb_plp_ViewEdit(button.up('panel'), '3');
	},

	lpb_plp_btnEttrClick: function(button, e, options) {
        this.lpb_plp_ViewEdit(button.up('panel'), '12');
	},

	lpb_plp_btnAttachClick: function(button, e, options) {
        this.lpb_plp_ViewEdit(button.up('panel'), '59');
	},

	lpb_plp_btnAnnularClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 10) ) { return false; }
		var _panel = button.up('panel');
		if ( options == undefined ) {
	        var _record = _panel.down('#grdLogistics_pedidos').getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }

			Ext.Msg.confirm('Confirmación', '¿Esta Ud. seguro de ANULAR el Registro seleccionado?', function(btn){
				if ( btn == 'yes' ) {
					var _win = Ext.create('Siace.view.public.UsuariosPsw2');
					_win.setCallButton(button); _win.setCallKey(_record.data.ped_key); _win.setSubTitle(_record.data.ped_documento);
					_win.setFormType('10'); _win.show();
				}
			});
		} else {
			var _win = options.win;
			var _store = _panel.down('#grdLogistics_pedidos').getStore(); var _menu_id = _panel.getMenuId();
			Ext.get(_panel.getEl()).mask('Validando información... por favor espere un momento...', 'loading');
			var _vs = fextpub_sessionVariables();
			Ext.Ajax.request({
				url: 'php/logistics_pedidos_delete.php',
				params: { xx0010: 'YES', xxType_edit: '10', xxPed_key: options.key, xxUsur_psw2: options.usur_psw2, xxPed_observ: options.observ,
					      zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'], xxMenu_id: _menu_id },
				success: function(conn, response, options, eOpts) {
					var _result = Siace.util.Util.decodeJSON(conn.responseText);
					if ( _result.success ) {
						_win.close();
			            _store.load({ callback: function(opt, success, respon) { Ext.get(_panel.getEl()).unmask(); } });
					} else { Ext.get(_panel.getEl()).unmask(); Siace.util.Util.showErrorMsg(_result.msg); }
				},
				failure: function(conn, response, options, eOpts) { Ext.get(_panel.getEl()).unmask(); Siace.util.Util.showErrorMsg(conn.responseText); }
			});
		}
	},

	lpb_plp_btnFasesClick: function(button, e, options) {
		fextlog_pedidos_fasesPrinter({"component": button.up("#panLogistics_pedidos"), "menu_id": button.up("logistics_pedidosbrowse").getMenuId()});
	},

	lpb_plp_btnPrinterClick: function(button, e, options) {
	},

	lpb_plp_area_keyChange: function(combo, newValue, oldValue, options) {
		fextbud_tareasAMLoad({'panel':combo.up('panel')});  this.lpb_plp_Clean(combo.up('panel'));
	},

	lpb_plp_fase_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.lpb_plp_Clean(combo.up('panel')); }
	},

	lpb_plp_fechainiChange: function(datefield, newValue, oldValue, options) {
		this.lpb_plp_Clean(datefield.up('panel'));
	},

	lpb_plp_fechafinChange: function(datefield, newValue, oldValue, options) {
		this.lpb_plp_Clean(datefield.up('panel'));
	},

	lpb_plp_filterChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.lpb_plp_Clean(combo.up('panel')); }
	},

	lpb_plp_fuefin_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.lpb_plp_Clean(combo.up('panel')); }
	},

	lpb_plp_grdLogistics_pedidosCellClick: function(cell, td, cellIndex, record, tr, rowIndex, e, options) {
		cell.up("logistics_pedidosbrowse").down("#grdLogistics_pedidos_det").getStore().load();
	},

	lpb_plp_grdLogistics_pedidosSelectionChange: function(model, record, options) {
		if ( record.length == 1 ) {
			var _panLP = model.view.panel.up("#panLogistics_pedidos"); var _cboOpc_id = _panLP.down('#opc_id'); var _flga = record[0].data.ped_flga; var _fase = record[0].data.fase_id*1; var _orden = record[0].data.fase_orden*1;
			_panLP.down("#btnModify").setDisabled(_flga == "98" || _orden > 1 ? true : fextpub_uamoButtons(_cboOpc_id, 2));
			_panLP.down("#btnQuery").setDisabled(_flga == "98" ? true : fextpub_uamoButtons(_cboOpc_id, 3));
			_panLP.down("#btnEttr").setDisabled(_flga == "98" || _orden > 1 ? true : fextpub_uamoButtons(_cboOpc_id, 5001));
			_panLP.down("#btnAttach").setDisabled(_flga == "98" ? true : fextpub_uamoButtons(_cboOpc_id, 59));
			_panLP.down("#btnAnnular").setDisabled(_flga == "98" || _orden > 1 ? true : fextpub_uamoButtons(_cboOpc_id, 10));
			_panLP.down("#btnFases").setDisabled(_flga == "98" ? true : fextpub_uamoButtons(_cboOpc_id, 5002));
			//_panel.down('#btnPrinter').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 8));
			this.lpb_tabsClean(_panLP.up("panel"), false, _fase);
			var _vs = fextpub_sessionVariables();
			Ext.Ajax.request({
		        method: 'POST', url: 'php/logistics_pedidos_json_records.php',
			    params: { xxPed_key: record[0].data.ped_key, xxType_record: 'window_log', xxOrder_by: 'ped_key', ssNO_USK: 'NOT',
			              zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
				success : function(response, options) {
				    var _result = Siace.util.Util.decodeJSON(response.responseText);
				    if ( _result.success ) {
				    	var _tabLPD = _panLP.up('panel').down('#tabLogistics_pedidos_det'); var _tabLC = _panLP.up('panel').down('#tabLogistics_cotizaciones'); var _tabLO = _panLP.up('panel').down('#tabLogistics_ordenes');
				    	if ( _result.data.length == 0 ) {
							_tabLPD.down('#ped_documento').setValue(''); _tabLPD.down('#area_nombre').setValue(''); _tabLPD.down('#meta_codename').setValue(''); _tabLPD.down('#tarea_codename').setValue('');
							_tabLC.down('#ped_documento').setValue(''); _tabLC.down('#area_nombre').setValue(''); _tabLC.down('#meta_codename').setValue(''); _tabLC.down('#tarea_codename').setValue('');
							_tabLO.down('#ped_documento').setValue(''); _tabLO.down('#area_nombre').setValue(''); _tabLO.down('#meta_codename').setValue(''); _tabLO.down('#tarea_codename').setValue('');
				    	} else {
				    		_tabLPD.down('#ped_documento').setValue(_result.data[0].ped_documento); _tabLPD.down('#ped_fecha').setValue(Ext.util.Format.date(_result.data[0].ped_fecha,'d/m/Y')); _tabLPD.down('#area_nombre').setValue(_result.data[0].area_nombre); _tabLPD.down('#meta_codename').setValue(_result.data[0].meta_codename); _tabLPD.down('#tarea_codename').setValue(_result.data[0].tarea_codename);
				    		_tabLC.down('#ped_documento').setValue(_result.data[0].ped_documento); _tabLC.down('#ped_fecha').setValue(Ext.util.Format.date(_result.data[0].ped_fecha,'d/m/Y')); _tabLC.down('#area_nombre').setValue(_result.data[0].area_nombre); _tabLC.down('#meta_codename').setValue(_result.data[0].meta_codename); _tabLC.down('#tarea_codename').setValue(_result.data[0].tarea_codename);
				       	}	_tabLO.down('#ped_documento').setValue(_result.data[0].ped_documento); _tabLO.down('#ped_fecha').setValue(Ext.util.Format.date(_result.data[0].ped_fecha,'d/m/Y')); _tabLO.down('#area_nombre').setValue(_result.data[0].area_nombre); _tabLO.down('#meta_codename').setValue(_result.data[0].meta_codename); _tabLO.down('#tarea_codename').setValue(_result.data[0].tarea_codename);
					}
				},
				failure : function(response, options) { }
			});
		}
	},

	lpb_plp_meta_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { fextbud_tareasATLoad({'panel':combo.up('panel')}); this.lpb_plp_Clean(combo.up('panel')); }
	},

	lpb_plp_ped_nroChange: function(textfiled, newValue, oldValue, options) {
		this.lpb_Clean(textfiled.up('panel'));
	},

	lpb_plp_tarea_keyChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.lpb_plp_Clean(combo.up('panel')); }
	},

	lpb_plp_tipgast_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { fextbud_tareasATLoad({'panel':combo.up('panel')}); this.lpb_plp_Clean(combo.up('panel')); }
	},

	lpb_plp_tipped_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.lpb_plp_Clean(combo.up('panel')); }
	},

	lpb_plp_year_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { fextbud_tareasAMLoad({'panel':combo.up('panel')}); this.lpb_plp_Clean(combo.up('panel')); }
	},

	lpb_tlc_opc_idChange: function(combo, newValue, oldValue, options) {
		if ( !fextpub_uamoButtons(combo, 0) ) { combo.up("tabpanel").child('#tabLogistics_cotizaciones').tab.show(); }
	},

	lpb_tlc_btnQueryClick: function(button, e, options) {
		var _tabLC = button.up("panel");
		fextlog_cotizacionesView({"component": _tabLC, "type_edit": 3, "menu_id": _tabLC.down("#menu_id").getValue(), "opc_id": 3});
	},

	lpb_tlc_btnPrinterClick: function(button, e, options) {
		var _tabLC = button.up("#tabLogistics_cotizaciones");
		fextlog_cotizacionesPrinter({"component": _tabLC, "menu_id": _tabLC.down("#menu_id").getValue()});
	},

	lpb_tlc_btnCuadroClick: function(button, e, options) {
		var _tabLC = button.up("#tabLogistics_cotizaciones"); if ( fextpub_uamoButtons(_tabLC.down('#opc_id'), 5023) ) { return false; } 
		var _record = _tabLC.up("logistics_pedidosbrowse").down("#grdLogistics_pedidos").getSelectionModel().getSelection()[0]; if ( !_record ) { return false; }
		var _vs = fextpub_sessionVariables();
        fext_pdf("", 'C.C.'+_record.data.doc_abrev+"/ "+_record.data.ped_documento, 'php/pdf/pdf_logistics_pedidos_comparative.php?xxPed_key='+_record.data.ped_key+'&zzUsursess_key='+_vs['us']+'&zzUsuracce_key='+_vs['ua']+'&zzYear_id='+_vs['y']+'&zzArea_key='+_vs['a']+"&xxMenu_id="+_tabLC.down('#menu_id').getValue()+"&xxOpc_id=5023");
	},

	lpb_tlc_grdLogistics_cotizacionesSelectionChange: function(model, record, options) {	
		if ( record.length == 1 ) {
			var _tabLC = model.view.panel.up("#tabLogistics_cotizaciones"); var _cboOpc_id = _tabLC.down('#opc_id'); var _flga = record[0].data.coti_flga; var _coti_monto = record[0].data.coti_monto; var _bp_monto = record[0].data.bp_monto;			
			_tabLC.down('#btnQuery').setDisabled(_flga == "98" ? true : fextpub_uamoButtons(_cboOpc_id, 3));
			_tabLC.down('#btnPrinter').setDisabled(_flga == "98" ? true : fextpub_uamoButtons(_cboOpc_id, 8));
		}
	},

	lpb_tlo_opc_idChange: function(combo, newValue, oldValue, options) {
		if ( !fextpub_uamoButtons(combo, 0) ) { combo.up('tabpanel').child('#tabLogistics_ordenes').tab.show(); }
	},

	lpb_tlo_btnQueryClick: function(button, e, options) {
	},

	lpb_tlo_btnPrinterClick: function(button, e, options) {
		var _tabLO = button.up("#tabLogistics_ordenes");
		fextlog_ordenesPrinter({"component": _tabLO, "menu_id": _tabLO.down("#menu_id").getValue()});
	},

	lpb_tlo_grdLogistics_ordenesSelectionChange: function(model, record, options) {	
		if ( record.length == 1 ) {
			var _tabLO = model.view.panel.up("#tabLogistics_ordenes"); var _cboOpc_id = _tabLO.down('#opc_id'); var _flga = record[0].data.orden_flga; var _orden_monto = record[0].data.orden_monto;  var _siaf_nro = record[0].data.siaf_nro; 
			//_tabLO.down('#btnQuery').setDisabled(_flga == '98' || _orden_monto*1 <= 0 ? true : fextpub_uamoButtons(_cboOpc_id, 3));
			_tabLO.down('#btnPrinter').setDisabled(_flga == '98' || _orden_monto*1 <= 0 || _siaf_nro*1 <= 0 ? true : fextpub_uamoButtons(_cboOpc_id, 8)); 
		}
	},

	/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
	lpbc_BeforeRender: function(component, options) {
		var _menu_id = component.getMenuId(); var _panLP = component.down('#panLogistics_pedidos'); var _tabLPD = component.down('#tabLogistics_pedidos_det'); var _tabLC = component.down('#tabLogistics_cotizaciones'); var _tabLO = component.down('#tabLogistics_ordenes');
		var _grdLP = _panLP.down('#grdLogistics_pedidos'); var _pagLP = _panLP.down('#pagLogistics_pedidos');  var _tab = component.down('#tab01'); var _vs = fextpub_sessionVariables(); var _me = this;
		fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': _panLP.down('#opc_id'), 'menu_id': _menu_id });
		if ( _menu_id == '5103' ) {
			 _tabLC.down('#menu_id').setValue(5112); _tabLO.down('#menu_id').setValue(5113);
			fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': _tabLC.down('#opc_id'), 'menu_id': _tabLC.down('#menu_id').getValue() });
			fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': _tabLO.down('#opc_id'), 'menu_id': _tabLO.down('#menu_id').getValue() });
			fextlog_fasesFilter({'objeto': _panLP.down('#fase_id'), 'doc_id': '501', 'fase_type': '1', 'type_record': 'combo_pedidos_browse', 'type_query': 'combo_pedidos_browse', 'value': '151'});
			var _str = Ext.create('Ext.data.Store', {
				fields: [ { name: 'filt', type: 'string' }, { name: 'code', type: 'string' }, ],
				data: [{ filt: '', code: '' }, { filt: '=', code: '=' }, { filt: '<=', code: '<=' }, { filt: '>=', code: '>=' },]
			});
			var _cboFilter = _panLP.down('#filter'); _cboFilter.bindStore(_str);
			_cboFilter.getStore().load({ callback: function(records, operations, success) {  _cboFilter.setValue('>='); } });
		} else if ( _menu_id == '5111' ) {
			_tabLC.down('#menu_id').setValue(5114); _tabLO.down('#menu_id').setValue(5115);
			fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': _tabLC.down('#opc_id'), 'menu_id': _tabLC.down('#menu_id').getValue() });
			fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': _tabLO.down('#opc_id'), 'menu_id': _tabLO.down('#menu_id').getValue() });
			_grdLP.columns[12].hidden = true;
			_panLP.down('#filter').setVisible(false); _panLP.down('#fase_id').setVisible(false); _panLP.down('#btnAdd').setVisible(false);  _panLP.down('#btnChange').setVisible(false);
		} else { return false; }

		fextpub_yearsVisible(_panLP.down('#year_id'), Ext.getCmp('ah_txtYear_id').getValue());
		fextpub_areasFilter({'objeto': _panLP.down('#area_key'), 'filter': false, 've_usuracce_key': 'YES', 'type_record': 'combo_abrev'});
		fextbud_metasParameters({'panel': _panLP});
		fextpub_tablas_generalesFilter({'objeto': _panLP.down('#tipgast_id'), 'tabgen_parent': '2020', 'type_record': 'combo_code'});
		fextbud_tareasParameters({'panel': _panLP});
		fextpub_tablas_generalesFilter({'objeto': _panLP.down('#tipped_id'), 'tabgen_parent': '5005', 'type_record': 'combo_abrev'});

		var _storeLPD = Ext.create('Siace.store.logistics.Pedidos_Det'); var _grdLPD = _tabLPD.down('#grdLogistics_pedidos_det'); var _pagLPD = _tabLPD.down('#pagLogistics_pedidos_det');
		_grdLPD.bindStore(_storeLPD);  _pagLPD.bindStore(_storeLPD); _storeLPD.sort('peddet_item', 'DESC'); _storeLPD.pageSize = 500;
		_storeLPD.on('beforeload', function(store, operations, options) {
		    var _record = _grdLP.getSelectionModel().getSelection()[0];
	    	store.getProxy().setExtraParam('xxPed_key', _record.data.ped_key);
		    store.getProxy().setExtraParam('xxType_record', 'grid_logistics.PedidosBrowseControl');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		    store.getProxy().setExtraParam('xxPaginate', '1');
		});

		var _storeLC = Ext.create('Siace.store.logistics.Cotizaciones'); var _grdLC = _tabLC.down('#grdLogistics_cotizaciones'); var _pagLC = _tabLC.down('#pagLogistics_cotizaciones');
		_grdLC.bindStore(_storeLC);  _pagLC.bindStore(_storeLC); _storeLC.sort('coti_fecha', 'ASC'); _storeLC.pageSize = 500;
		_storeLC.on('beforeload', function(store, operations, options) {
			_tabLC.down('#btnAnnular').disable(); _tabLC.down('#btnPrinter').disable(); _tabLC.down('#btnBuenapro').disable()
		    var _record = _grdLP.getSelectionModel().getSelection()[0];
	    	store.getProxy().setExtraParam('xxPed_key', _record.data.ped_key);
		    store.getProxy().setExtraParam('xxType_record', 'grid_logistics.PedidosBrowseControl');
		    store.getProxy().setExtraParam('ssNO_USK', 'NOT');
		    store.getProxy().setExtraParam('zzUsursess_key', _vs['us']);
		    store.getProxy().setExtraParam('zzUsuracce_key', _vs['ua']);
		    store.getProxy().setExtraParam('zzYear_id', _vs['y']);
		    store.getProxy().setExtraParam('zzUsur_key', _vs['u']);
		    store.getProxy().setExtraParam('zzArea_key', _vs['a']);
		    store.getProxy().setExtraParam('xxMenu_id', component.getMenuId());		    
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		    store.getProxy().setExtraParam('xxPaginate', '1');
		});

		var _storeLO = Ext.create('Siace.store.logistics.Ordenes'); var _grdLO = _tabLO.down('#grdLogistics_ordenes'); var _pagLO = _tabLO.down('#pagLogistics_ordenes');
		_grdLO.bindStore(_storeLO); _pagLO.bindStore(_storeLO);
		_storeLO.sort('orden_fecha', 'ASC'); _storeLO.pageSize = 500;
		_storeLO.on('beforeload', function(store, operations, options) {
			_tabLC.down('#btnPrinter').disable();
		    var _record = _grdLP.getSelectionModel().getSelection()[0];
	    	store.getProxy().setExtraParam('xxTablex', '5000');
	    	store.getProxy().setExtraParam('xxTablex_key', _record.data.ped_key);
		    store.getProxy().setExtraParam('xxType_record', 'grid_logistics.PedidosBrowse');
		    store.getProxy().setExtraParam('ssNO_USK', 'NOT');
		    store.getProxy().setExtraParam('zzUsursess_key', _vs['us']);
		    store.getProxy().setExtraParam('zzUsuracce_key', _vs['ua']);
		    store.getProxy().setExtraParam('zzYear_id', _vs['y']);
		    store.getProxy().setExtraParam('zzUsur_key', _vs['u']);
		    store.getProxy().setExtraParam('zzArea_key', _vs['a']);
		    store.getProxy().setExtraParam('xxMenu_id', component.getMenuId());		    
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		    store.getProxy().setExtraParam('xxPaginate', '1');
		});

		var _storeLP = Ext.create('Siace.store.logistics.Pedidos');
		_grdLP.bindStore(_storeLP);  _pagLP.bindStore(_storeLP); _storeLP.sort('ped_nro', 'DESC'); _storeLP.pageSize = 500;
		_storeLP.on('beforeload', function(store, operations, eOpts) {
			_panLP.down('#btnQuery').disable(); _panLP.down('#btnAttach').disable(); _panLP.down('#btnFases').disable(); _panLP.down('#btnAdd').disable(); _panLP.down('#btnChange').disable(); _panLP.down('#btnPrinter').disable(); _panLP.down('#btnSolicitud').disable();
			_me.lpbc_tabsClean(component, true);

		    store.getProxy().setExtraParam('xxYear_id', _panLP.down('#year_id').getValue());
		    store.getProxy().setExtraParam('xxArea_key', _panLP.down('#area_key').getValue());
		    store.getProxy().setExtraParam('xxMeta_id', _panLP.down('#meta_id').getValue());
		    store.getProxy().setExtraParam('xxTipgast_id', _panLP.down('#tipgast_id').getValue());
		    store.getProxy().setExtraParam('xxTarea_key', _panLP.down('#tarea_key').getValue());
		    //store.getProxy().setExtraParam('xxFuefin_id', _panLP.down('#fuefin_id').getValue());
		    store.getProxy().setExtraParam('xxTipped_id', _panLP.down('#tipped_id').getValue());
		    store.getProxy().setExtraParam('xxPed_nro', _panLP.down('#ped_nro').getValue());
		    store.getProxy().setExtraParam('xxFilter', _panLP.down('#filter').getValue());
		    store.getProxy().setExtraParam('xxFase_id', _panLP.down('#fase_id').getValue());
			//store.getProxy().setExtraParam('xxFechaini', _panLP.down('#fechaini').getSubmitData());
			//store.getProxy().setExtraParam('xxFechafin', _panLP.down('#fechafin').getSubmitData());
			store.getProxy().setExtraParam('xxPed_nro', _panLP.down('#ped_nro').getValue());
		    store.getProxy().setExtraParam('zzUsursess_key', _vs['us']);
		    store.getProxy().setExtraParam('zzUsuracce_key', _vs['ua']);
		    store.getProxy().setExtraParam('zzYear_id', _vs['y']);
		    store.getProxy().setExtraParam('zzUsur_key', _vs['u']);
		    store.getProxy().setExtraParam('zzArea_key', _vs['a']);
		    store.getProxy().setExtraParam('ssNO_USK', (component.getMenuId() == '5103' ? 'NOT' : ''));
		    store.getProxy().setExtraParam('xxMenu_id', component.getMenuId());
		    store.getProxy().setExtraParam('xxType_record', (component.getMenuId() == '5103' ? 'grid_control' : 'grid_quatation'));
		    store.getProxy().setExtraParam('xxType_query', (component.getMenuId() == '5103' ? 'grid_control' : 'grid_quatation'));
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		}); 
		if ( _menu_id == '5111' ) {	_storeLP.load(); }
	},

	lpbc_tabsClean: function(poComponent, pbBoolean, pnFase) {
		var _tabLPD = poComponent.down('#tabLogistics_pedidos_det'); 
		var _pagLPD = _tabLPD.down('#pagLogistics_pedidos_det'); var _storeLPD = _pagLPD.getStore(); fext_gridClean(_storeLPD, _pagLPD);
		_tabLPD.down('#ped_documento').setValue(''); _tabLPD.down('#ped_fecha').setValue(''); _tabLPD.down('#area_nombre').setValue(''); _tabLPD.down('#meta_codename').setValue(''); _tabLPD.down('#tarea_codename').setValue('');
		_pagLPD.setDisabled(pbBoolean);

		var _tabLC = poComponent.down('#tabLogistics_cotizaciones'); 
		var _pagLC = _tabLC.down('#pagLogistics_cotizaciones'); var _storeLC = _pagLC.getStore(); fext_gridClean(_storeLC, _pagLC);
		_tabLC.down('#ped_documento').setValue(''); _tabLC.down('#ped_fecha').setValue(''); _tabLC.down('#area_nombre').setValue(''); _tabLC.down('#meta_codename').setValue(''); _tabLC.down('#tarea_codename').setValue('');
		var _fase = (pnFase == undefined || pnFase == null || pnFase == ''  ? 0 : pnFase);
		_pagLC.setDisabled(pbBoolean); _tabLC.down('#btnNew').setDisabled(pbBoolean == true || _fase*1 < 151 ? true : fextpub_uamoButtons(_tabLC.down('#opc_id'), 1)); _tabLC.down('#btnCuadro').setDisabled(pbBoolean == true || _fase*1 < 151 ? true : fextpub_uamoButtons(_tabLC.down('#opc_id'), 5023));
		_tabLC.down('#btnAnnular').disable(); _tabLC.down('#btnPrinter').disable(); _tabLC.down('#btnBuenapro').disable(); _tabLC.down('#btnBuenaproDelete').disable();

		var _tabLO = poComponent.down('#tabLogistics_ordenes');
		var _pagLO = _tabLO.down('#pagLogistics_ordenes'); var _storeLO = _pagLO.getStore(); fext_gridClean(_storeLO, _pagLO);
		_tabLO.down('#ped_documento').setValue(''); _tabLO.down('#ped_fecha').setValue(''); _tabLO.down('#area_nombre').setValue(''); _tabLO.down('#meta_codename').setValue(''); _tabLO.down('#tarea_codename').setValue('')
		_pagLO.setDisabled(pbBoolean); _tabLO.down('#btnQuery').disable(); _tabLO.down('#btnPrinter').disable();
	},

	lpbc_viewEdit: function(poComponent, pcTypeEdit) {
	    if ( fjsIn_array(pcTypeEdit, ['2','3','12','23','59','ADD161','CHANGE161']) ) {
	    	var _record = poComponent.down('#grdLogistics_pedidos').getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }
	    }

		Ext.get(poComponent.getEl()).mask(translations.mensaje_esperar, 'loading');
		if ( fjsIn_array(pcTypeEdit, ['ADD161','CHANGE161']) ) {
			var _win = Ext.create('Siace.view.logistics.PedidosAssign61');
			if ( pcTypeEdit == 'ADD161' ) { _win.setTitle('Asignar Cotizador a Requerimiento'); _win.down('#btnAccept').setText('Asignar Cotizador'); }
			else { _win.setIconCls('icon_User_change_90'); _win.setTitle('Cambiar Cotizador a Requerimiento'); _win.down('#btnAccept').setIconCls('icon_User_change'); }
			_win.setCallStore(poComponent.down('#grdLogistics_pedidos').getStore()); _win.setCallKey(_record.data.ped_key); _win.setMenuId(poComponent.up('panel').getMenuId()); _win.setTypeEdit(pcTypeEdit);
		} else if ( pcTypeEdit == '59' ) {
		    var _win = Ext.create('Siace.view.logistics.PedidosAttachments');
		    _win.setCallKey(_record.data.ped_key);
		    _win.down('#ped_documento').setValue(_record.data.ped_documento); _win.down('#doc_abrev').setValue(_record.data.doc_abrev);
		    _win.down('#ped_document').setValue('Requerimiento  &nbsp; [ '+_record.data.ped_documento + ' ]');
		    _win.down('#btnEttr').setText(_record.data.tipped_abrev == 'Bien' ? ' E.T. ' : ' T.R. ');  _win.down('#btnEttr').setTooltip(_record.data.tipped_abrev == 'Bien' ? ' Especificaciones Técnicas ' : ' Terminos de Referencia ');
		} else {
	    	var _win = Ext.create('Siace.view.logistics.PedidosEdit'); _win.down('#year_id').setValue(poComponent.down('#year_id').getValue());  _win.setMenuId(poComponent.up('panel').getMenuId());
	    	_win.setTypeEdit(pcTypeEdit); //_win.setCallStore(poComponent.down('#grdLogistics_pedidos').getStore());
	    	if ( fjsIn_array(pcTypeEdit, ['2','3','12','23']) ) { _win.setCallKey(_record.data.ped_key); }
	    	if ( fjsIn_array(pcTypeEdit, ['23']) ) { _win.setNoUsk('NOT'); }
	    }
	    _win.show();
	    Ext.get(poComponent.getEl()).unmask();
	},

	lpbc_plp_Clean: function(poComponent) {
		var _pag = poComponent.down('#pagLogistics_pedidos'); var _store = _pag.getStore();
		fext_gridClean(_store, _pag);
		poComponent.down('#btnQuery').disable(); poComponent.down('#btnAttach').disable(); poComponent.down('#btnPrinter').disable();
	},

	lpbc_plp_opc_idChange: function(combo, newValue, oldValue, options) {
		//combo.up('panel').down('#btnNew').setDisabled(fextpub_uamoButtons(combo, 1));
	},

	lpbc_plp_btnQueryClick: function(button, e, options) {
        if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 3) ) { return false; } this.lpbc_viewEdit(button.up('panel'), '23');
	},

	lpbc_plp_btnAttachClick: function(button, e, options) {
        if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 59) ) { return false; } this.lpbc_viewEdit(button.up('panel'), '59');
	},

	lpbc_plp_btnFasesClick: function(button, e, options) {
		var _panLP = button.up("#panLogistics_pedidos");
		fextlog_pedidos_fasesPrinter({"component": _panLP, "menu_id": _panLP.up("panel").getMenuId()});
	},

	lpbc_plp_btnAddClick: function(button, e, options) {
        if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 5006) ) { return false; } this.lpbc_viewEdit(button.up('panel'), 'ADD161');
	},

	lpbc_plp_btnChangeClick: function(button, e, options) {
        if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 5007) ) { return false; } this.lpbc_viewEdit(button.up('panel'), 'CHANGE161');
	},

	lpbc_plp_btnPrinterClick: function(button, e, options) {
		var _panLP = button.up("#panLogistics_pedidos");
		fextlog_pedidosPrinter({"component": _panLP, "menu_id": _panLP.up("panel").getMenuId()});
	},

	lpbc_plp_btnSolicitudClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 5009) ) { return false; } 
		var _record = button.up('panel').down('#grdLogistics_pedidos').getSelectionModel().getSelection()[0];
		if ( !_record ) { return false; }

        fext_pdf('', 'Sol.Cot. &nbsp'+_record.data.doc_abrev+"/ "+_record.data.ped_documento, 'php/pdf/pdf_logistics_pedidos_application.php?xxPed_key='+_record.data.ped_key);
	},

	lpbc_plp_area_keyChange: function(combo, newValue, oldValue, options) {
		fextbud_metasLoad({'panel':combo.up('panel')});  this.lpbc_plp_Clean(combo.up('panel'));
	},

	lpbc_plp_fase_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.lpbc_plp_Clean(combo.up('panel')); }
	},

	lpbc_fechainiChange: function(datefiled, newValue, oldValue, options) {
		this.lpbc_plp_Clean(datefiled.up('panel'));
	},

	lpbc_plp_fechafinChange: function(datefiled, newValue, oldValue, options) {
		this.lpbc_plp_Clean(datefiled.up('panel'));
	},

	lpbc_plp_filterChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.lpbc_plp_Clean(combo.up('panel')); }
	},

	lpbc_plp_grdLogistics_pedidosCellClick: function(cell, td, cellIndex, record, tr, rowIndex, e, options) {
		cell.up("logistics_pedidosbrowsecontrol").down("#grdLogistics_pedidos_det").getStore().load();
	},

	lpbc_plp_grdLogistics_pedidosSelectionChange: function(model, record, options) {
		if ( record.length == 1 ) {
			var _panLP = model.view.panel.up("#panLogistics_pedidos"); var _cboOpc_id = _panLP.down("#opc_id"); var _flga = record[0].data.ped_flga; var _fase = record[0].data.fase_id*1; var _login = record[0].data.usur_login;
			_panLP.down('#btnQuery').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 3));
			_panLP.down('#btnAttach').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 59));
			_panLP.down('#btnFases').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 5002));
			_panLP.down('#btnAdd').setDisabled(_flga == '98' || _fase < 151 || _login !== '' ? true : fextpub_uamoButtons(_cboOpc_id, 5006));
			_panLP.down('#btnChange').setDisabled(_flga == '98' || _fase < 151 || _login == '' ? true : fextpub_uamoButtons(_cboOpc_id, 5007));
			_panLP.down('#btnPrinter').setDisabled(_flga == '98' || _fase < 151 ? true : fextpub_uamoButtons(_cboOpc_id, 8));
			_panLP.down('#btnSolicitud').setDisabled(_flga == '98' || _fase < 151 ? true : fextpub_uamoButtons(_cboOpc_id, 5009));

			this.lpbc_tabsClean(_panLP.up('panel'), false, _fase);
			var _vs = fextpub_sessionVariables();
			Ext.Ajax.request({
		        method: 'POST', url: 'php/logistics_pedidos_json_records.php',
			    params: { xxPed_key: record[0].data.ped_key, xxType_record: 'window_log', xxOrder_by: 'ped_key', ssNO_USK: 'NOT',
			              zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
				success : function(response, options) {
				    var _result = Siace.util.Util.decodeJSON(response.responseText);
				    if ( _result.success ) {
				    	var _tabLPD = _panLP.up('panel').down('#tabLogistics_pedidos_det'); var _tabLC = _panLP.up('panel').down('#tabLogistics_cotizaciones'); var _tabLO = _panLP.up('panel').down('#tabLogistics_ordenes');
				    	if ( _result.data.length == 0 ) {
							_tabLPD.down('#ped_documento').setValue(''); _tabLPD.down('#area_nombre').setValue(''); _tabLPD.down('#meta_codename').setValue(''); _tabLPD.down('#tarea_codename').setValue('');
							_tabLC.down('#ped_documento').setValue(''); _tabLC.down('#area_nombre').setValue(''); _tabLC.down('#meta_codename').setValue(''); _tabLC.down('#tarea_codename').setValue('');
							_tabLO.down('#ped_documento').setValue(''); _tabLO.down('#area_nombre').setValue(''); _tabLO.down('#meta_codename').setValue(''); _tabLO.down('#tarea_codename').setValue('');
				    	} else {
				    		_tabLPD.down('#ped_documento').setValue(_result.data[0].ped_documento); _tabLPD.down('#ped_fecha').setValue(Ext.util.Format.date(_result.data[0].ped_fecha,'d/m/Y')); _tabLPD.down('#area_nombre').setValue(_result.data[0].area_nombre); _tabLPD.down('#meta_codename').setValue(_result.data[0].meta_codename); _tabLPD.down('#tarea_codename').setValue(_result.data[0].tarea_codename);
				    		_tabLC.down('#ped_documento').setValue(_result.data[0].ped_documento); _tabLC.down('#ped_fecha').setValue(Ext.util.Format.date(_result.data[0].ped_fecha,'d/m/Y')); _tabLC.down('#area_nombre').setValue(_result.data[0].area_nombre); _tabLC.down('#meta_codename').setValue(_result.data[0].meta_codename); _tabLC.down('#tarea_codename').setValue(_result.data[0].tarea_codename);
				       	}	_tabLO.down('#ped_documento').setValue(_result.data[0].ped_documento); _tabLO.down('#ped_fecha').setValue(Ext.util.Format.date(_result.data[0].ped_fecha,'d/m/Y')); _tabLO.down('#area_nombre').setValue(_result.data[0].area_nombre); _tabLO.down('#meta_codename').setValue(_result.data[0].meta_codename); _tabLO.down('#tarea_codename').setValue(_result.data[0].tarea_codename);
					}
				},
				failure : function(response, options) { }
			});
		}
	},

	lpbc_plp_meta_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { fextbud_tareasLoad({'panel':combo.up('panel')}); this.lpbc_plp_Clean(combo.up('panel')); }
	},

	lpbc_plp_ped_nroChange: function(textfiled, newValue, oldValue, options) {
		this.lpbc_plp_Clean(textfiled.up('panel'));
	},

	lpbc_plp_tarea_keyChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.lpbc_plp_Clean(combo.up('panel')); }
	},

	lpbc_plp_tipgast_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { fextbud_tareasATLoad({'panel':combo.up('panel')}); this.lpbc_plp_Clean(combo.up('panel')); }
	},

	lpbc_plp_tipped_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { this.lpbc_Clean(combo.up('panel')); }
	},

	lpbc_plp_year_idChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { fextbud_metasLoad({'panel':combo.up('panel')}); this.lpbc_plp_Clean(combo.up('panel')); }
	},

	lpbc_tlc_ViewEdit: function(poComponent, pcTypeEdit){
    	var _recLP = poComponent.up('panel').up('panel').down('#grdLogistics_pedidos').getSelectionModel().getSelection()[0];
        if ( !_recLP ) { return false; }

	    if ( fjsIn_array(pcTypeEdit, ['2','3']) ) {
	    	var _record = poComponent.down('#grdLogistics_cotizaciones').getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }
	    }

	    var _win = Ext.create('Siace.view.logistics.CotizacionesEdit');
	    _win.setTypeEdit(pcTypeEdit); _win.setCallStore(poComponent.down('#grdLogistics_cotizaciones').getStore());
	    _win.setMenuId(poComponent.up('panel').up('panel').getMenuId());

	    _win.down('#ped_key').setValue(_recLP.data.ped_key); _win.down('#ped_documento').setValue(poComponent.down('#ped_documento').getValue()); _win.down('#ped_fecha').setValue(_recLP.data.ped_fecha); _win.down('#area_nombre').setValue(poComponent.down('#area_nombre').getValue()); _win.down('#meta_codename').setValue(poComponent.down('#meta_codename').getValue()); _win.down('#tarea_codename').setValue(poComponent.down('#tarea_codename').getValue());
	    if ( fjsIn_array(pcTypeEdit, ['2','3']) ) { _win.setCallKey(_record.data.coti_key); }
	    _win.show();
	},

	lpbc_tlc_opc_idChange: function(combo, newValue, oldValue, options) {
		if ( !fextpub_uamoButtons(combo, 0) ) { combo.up('tabpanel').child('#tabLogistics_cotizaciones').tab.show(); }
	},

	lpbc_tlc_btnNewClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 1) ) { return false; } this.lpbc_tlc_ViewEdit(button.up('panel'), '1');
	},


	lpbc_tlc_btnAnnularClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 10) ) { return false; }
		var _panel = button.up('panel');
		if ( options == undefined ) {
	        var _record = _panel.down('#grdLogistics_cotizaciones').getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }

			Ext.Msg.confirm('Confirmación', '¿Esta Ud. seguro de ANULAR el registro seleccionado?', function(btn){
				if ( btn == 'yes' ) {
					var _win = Ext.create('Siace.view.public.UsuariosPsw2');
					_win.setCallButton(button); _win.setCallKey(_record.data.coti_key); //_win.setCallStore(_panel.down('#grdLogistics_cotizaciones').getStore());
					_win.setFormType('10'); _win.setSubTitle(_record.data.coti_documento);
					_win.show();
				}
			});
		} else {
			var _win = options.win;
			var _store = _panel.down('#grdLogistics_cotizaciones').getStore(); var _menu_id = _panel.up('panel').up('panel').getMenuId();
			Ext.get(_panel.getEl()).mask('Validando información... por favor espere un momento...', 'loading');
			var _vs = fextpub_sessionVariables();
			Ext.Ajax.request({
				url: 'php/logistics_cotizaciones_delete.php',
				params: { xx0010: 'YES', xxType_edit: '10', xxCoti_key: options.key, xxUsur_psw2: options.usur_psw2, xxCoti_observ: options.observ,
					      zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'], xxMenu_id: _menu_id },
				success: function(conn, response, options, eOpts) {
					var _result = Siace.util.Util.decodeJSON(conn.responseText);
					if ( _result.success ) {
						_win.close(); _store.load({ callback: function(opt, success, respon) { Ext.get(_panel.getEl()).unmask(); } });
					} else { Ext.get(_panel.getEl()).unmask(); Siace.util.Util.showErrorMsg(_result.msg); }
				},
				failure: function(conn, response, options, eOpts) { Ext.get(_panel.getEl()).unmask(); Siace.util.Util.showErrorMsg(conn.responseText); }
			});
		}		
	},

	lpbc_tlc_btnPrinterClick: function(button, e, options) {
		fextlog_cotizacionesPrinter({"component": button.up("panel"), "menu_id": button.up("panel").down("#menu_id").getValue()});
	},

	lpbc_tlc_btnBuenaproClick: function(button, e, options) {
		var _panel = button.up('panel');
		var _recLP = _panel.up('panel').up('panel').down('#grdLogistics_pedidos').getSelectionModel().getSelection()[0];
	    var _record = _panel.down('#grdLogistics_cotizaciones').getSelectionModel().getSelection()[0];
	    if ( !_record ) { return false; }	
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 5021) ) { return false; }
	    
	    var _win = Ext.create('Siace.view.logistics.Buena_ProEdit');
	    _win.setTypeEdit('1'); _win.setCallStore(_panel.down('#grdLogistics_cotizaciones').getStore()); _win.setMenuId(_panel.up('panel').up('panel').getMenuId());
	    _win.down('#coti_key').setValue(_record.data.coti_key); _win.down('#coti_documento').setValue(_record.data.coti_documento); _win.down('#coti_fecha').setValue(Ext.util.Format.date(_record.data.coti_fecha,'d/m/Y'));  _win.down('#pers_ruc').setValue(_record.data.pers_ruc +' - '+ _record.data.pers_nombre);
	    _win.down('#area_nombre').setValue(_panel.down('#area_nombre').getValue()); _win.down('#meta_codename').setValue(_panel.down('#meta_codename').getValue()); _win.down('#tarea_codename').setValue(_panel.down('#tarea_codename').getValue());
	    _win.down('#ped_documento').setValue(_panel.down('#ped_documento').getValue());
	    _win.down('#ped_fecha').setValue(_panel.down('#ped_fecha').getValue());
	    _win.down('#ped_monto').setValue(fjsFormatNumeric(_recLP.data.ped_monto,2));
	    _win.down('#btnSave').setIconCls('icon_Vobo'); _win.down('#btnSave').setText('Otorgar Buena Pro');
	    _win.show();
	},

	lpbc_tlc_btnBuenaproDeleteClick: function(button, e, options) {
	},

	lpbc_tlc_btnCuadroClick: function(button, e, options) {
		var _panel = button.up('panel'); if ( fextpub_uamoButtons(_panel.down('#opc_id'), 5023) ) { return false; } 
		var _record = _panel.up('panel').up('panel').down('#grdLogistics_pedidos').getSelectionModel().getSelection()[0]; if ( !_record ) { return false; }
		var _vs = fextpub_sessionVariables();
        fext_pdf('', 'C.C.'+_record.data.doc_abrev+"/ "+_record.data.ped_documento, 'php/pdf/pdf_logistics_pedidos_comparative.php?xxPed_key='+_record.data.ped_key+'&zzUsursess_key='+_vs['us']+'&zzUsuracce_key='+_vs['ua']+'&zzYear_id='+_vs['y']+'&zzArea_key='+_vs['a']+'&xxMenu_id=5112&xxOpc_id=5023');
	},

	lpbc_tlc_grdLogistics_cotizacionesSelectionChange: function(model, record, options) {	
		if ( record.length == 1 ) {
			var _panel = model.view.panel.up('panel'); var _cboOpc_id = _panel.down('#opc_id'); var _flga = record[0].data.coti_flga; var _coti_monto = record[0].data.coti_monto; var _bp_monto = record[0].data.bp_monto;
			_panel.down('#btnAnnular').setDisabled(_flga == '98' || _bp_monto*1 > 0 ? true : fextpub_uamoButtons(_cboOpc_id, 10));
			_panel.down('#btnPrinter').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 8)); 
			_panel.down('#btnBuenapro').setDisabled(_flga == '98' || _bp_monto*1 > 0 ? true : fextpub_uamoButtons(_cboOpc_id, 5021));
			//_panel.down('#btnBuenaproDelete').setDisabled(_flga == '98' || _bp_monto*1 <= 0 ? true : fextpub_uamoButtons(_cboOpc_id, 5022));
		}
	},

	lpbc_tlo_opc_idChange: function(combo, newValue, oldValue, options) {
		if ( !fextpub_uamoButtons(combo, 0) ) { combo.up('tabpanel').child('#tabLogistics_ordenes').tab.show(); }
	},

	lpbc_tlo_btnQueryClick: function(button, e, options) {
	},

	lpbc_tlo_btnPrinterClick: function(button, e, options) {
		fextlog_ordenesPrinter({"component": button.up("panel"), "menu_id": button.up("panel").down("#menu_id").getValue()});
	},

	lpbc_tlo_grdLogistics_ordenesSelectionChange: function(model, record, options) {	
		if ( record.length == 1 ) {
			var _panel = model.view.panel.up('panel'); var _cboOpc_id = _panel.down('#opc_id'); var _flga = record[0].data.orden_flga; var _orden_monto = record[0].data.orden_monto;
			//_panel.down('#btnQuery').setDisabled(_flga == '98' || _orden_monto*1 <= 0 ? true : fextpub_uamoButtons(_cboOpc_id, 3));
			_panel.down('#btnPrinter').setDisabled(_flga == '98' || _orden_monto*1 <= 0 ? true : fextpub_uamoButtons(_cboOpc_id, 8)); 
		}
	},

	/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
	lpbv_BeforeRender: function(component, options) {
		fextpub_usuarios_accesos_menus_opcionesPermits({'objeto': component.down('#opc_id'), 'menu_id': component.getMenuId()});
		fextpub_yearsVisible(component.down('#year_id'), Ext.getCmp('ah_txtYear_id').getValue());
		var _cboFaseextr_key = component.down('#faseextr_key');
	    _cboFaseextr_key.bindStore(Ext.create('Siace.store.logistics.Fases_Extras'));
	    _cboFaseextr_key.getStore().load({ params: { xxFaseextr_estado: '1',  xxType_record: 'combo_vobo', xxOrder_by: 'fe.extr_id' } });
		var _cboFaseacce_key = component.down('#faseacce_key'); var _vs = fextpub_sessionVariables(); var _me = this;
	    _cboFaseacce_key.bindStore(Ext.create('Siace.store.logistics.Fases_AccesosUsursess'));
	    _cboFaseacce_key.getStore().load({ 
	        params: { xxDoc_id: '501', xxFase_esvobo: '1', xxOrder_by: 'fase_orden DESC',
	                  zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
	        callback: function(records, operations, success) {
	            if ( records.length > 0 ) { _cboFaseacce_key.setValue(records[0].data.faseacce_key); _me.lpbv_storeLogistics_pedidos(component); }
	            else { _cboFaseacce_key.disable();  _cboFaseacce_key.setValue(''); }
	        }
	    });
		//fextpub_areasFilter({'objeto': component.down('#area_key'), 'visible': false, 'filter': true, 'area_key': Ext.getCmp('ah_txtArea_key').getValue(), 've_usuracce_key': 'YES', 'type_record': 'combo_abrev'});
		//fextbud_tareasAMParameters({'panel': component, 'docu_campo': 'tareausuracce_estado501', 'docu_estado': '1'});
		//fextpub_tablas_generalesFilter({'objeto': component.down('#tipgast_id'), 'tabgen_parent': '500', 'type_record': 'combo_code'});
		//fextbud_tareasATParameters({'panel': component, 'docu_campo': 'tareausuracce_estado501', 'docu_estado': '1'});
		fextpub_tablas_generalesFilter({'objeto': component.down('#tipped_id'), 'tabgen_parent': '5005'});
	},

	lpbv_Clean: function(poComponent) {
		var _pag = poComponent.down('#pagLogistics_pedidos'); var _store = _pag.getStore();
		fext_gridClean(_store, _pag);
		poComponent.down('#btnQuery').disable(); poComponent.down('#btnAttach').disable(); poComponent.down('#btnFases').disable(); poComponent.down('#btnVobo').disable(); poComponent.down('#btnReject').disable();
	},

	lpbv_opc_idChange: function(combo, newValue, oldValue, options) {
		//combo.up('panel').down('#btnNew').setDisabled(fextpub_uamoButtons(combo, 1));
	},

	lpbv_storeLogistics_pedidos: function(poComponent) {
		var _store = Ext.create('Siace.store.logistics.Pedidos');
		var _grd = poComponent.down('#grdLogistics_pedidos'); var _pag = poComponent.down('#pagLogistics_pedidos');
		_grd.bindStore(_store);  _pag.bindStore(_store); var _vs = fextpub_sessionVariables(); 
		_store.sort('ped_nro', 'DESC'); _store.pageSize = 500;
		_store.on('beforeload', function(store, operations, eOpts) {
			poComponent.down('#btnQuery').disable(); poComponent.down('#btnAttach').disable(); poComponent.down('#btnFases').disable(); poComponent.down('#btnVobo').disable(); poComponent.down('#btnReject').disable();

		    store.getProxy().setExtraParam('xxYear_id', poComponent.down('#year_id').getValue());
		    store.getProxy().setExtraParam('xxFaseacce_key', poComponent.down('#faseacce_key').getValue() == '' ? '___' : poComponent.down('#faseacce_key').getValue());
		    store.getProxy().setExtraParam('xxArea_key', poComponent.down('#area_key').getValue());
		    store.getProxy().setExtraParam('xxMeta_id', poComponent.down('#meta_id').getValue());
		    store.getProxy().setExtraParam('xxTipgast_id', poComponent.down('#tipgast_id').getValue());
		    store.getProxy().setExtraParam('xxTarea_key', poComponent.down('#tarea_key').getValue());
		    store.getProxy().setExtraParam('xxTipped_id', poComponent.down('#tipped_id').getValue());
		    store.getProxy().setExtraParam('xxPed_nro', poComponent.down('#ped_nro').getValue());
			store.getProxy().setExtraParam('xxFechaini', poComponent.down('#fechaini').getSubmitData());
			store.getProxy().setExtraParam('xxFechafin', poComponent.down('#fechafin').getSubmitData());
			store.getProxy().setExtraParam('xxNoUsursess_key', 'NOT');
		    store.getProxy().setExtraParam('zzUsursess_key', _vs['us']);
		    store.getProxy().setExtraParam('zzUsuracce_key', _vs['ua']);
		    store.getProxy().setExtraParam('zzYear_id', _vs['y']);
		    store.getProxy().setExtraParam('zzUsur_key', _vs['u']);
		    store.getProxy().setExtraParam('zzArea_key', _vs['a']);
		    store.getProxy().setExtraParam('xxMenu_id', poComponent.getMenuId());
		    store.getProxy().setExtraParam('xxType_record', 'grid_vobo');
		    store.getProxy().setExtraParam('xxType_query', 'grid_vobo');
		    store.getProxy().setExtraParam('xxPaginate', '1');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		}); _store.load();
	},

	lpbv_btnQueryClick: function(button, e, options) {
        if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 3) ) { return false; } this.lpb_viewEdit(button.up('panel'), '23');
	},

	lpbv_btnAttachClick: function(button, e, options) {
        if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 59) ) { return false; } this.lpb_viewEdit(button.up('panel'), '59');
	},

	lpbv_btnFasesClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 5002) ) { return false; } 
		var _record = button.up('panel').down('#grdLogistics_pedidos').getSelectionModel().getSelection()[0];
		if ( !_record ) { return false; }

        fext_pdf('', 'Fases Requerimiento', 'php/pdf/pdf_logistics_pedidos_fases_printer.php?xxPed_key='+_record.data.ped_key+'&xxType_record=printer');
	},

	lpbv_btnVoboClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 41) ) { return false; }
		var _panel = button.up('panel');
		if ( options == undefined ) {
	        var _record = _panel.down('#grdLogistics_pedidos').getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }

			var _win = Ext.create('Siace.view.logistics.PedidosPsw2');
			_win.setCallButton(button); _win.setCallKey(_record.data.pedfase_key); _win.setFormType('41');
			_win.setTitle('VoBo de Requerimiento  [' + _panel.down('#faseacce_key').getRawValue() +']'); _win.setSubTitle(_record.data.ped_documento);
			_win.down('#btnAccept').setText('VoBo');

			var recFE = _panel.down('#faseacce_key').getStore().findRecord('faseacce_key', _panel.down('#faseacce_key').getValue()).data['fase_key']
			var _fase_key = _panel.down('#faseacce_key').getStore().findRecord('faseacce_key', _panel.down('#faseacce_key').getValue()).data['fase_key'];
	        _panel.down('#faseextr_key').getStore().each(function (record) {
	        	if ( record.data.fase_key == _fase_key && record.data.extr_id == '12' ) { _win.down('#ped_certificado').setVisible(true); _win.down('#ped_certificado').enable(); }
	        	if ( record.data.fase_key == _fase_key && record.data.extr_id == '13' ) {
	        		var _cboUsuracce_key = _win.down('#usuracce_key'); _cboUsuracce_key.setVisible(true); _cboUsuracce_key.enable();
				    _cboUsuracce_key.bindStore(Ext.create('Siace.store.logistics.Fases_Accesos_Usuarios_Accesos'));
				    _cboUsuracce_key.getStore().load({ 
				        params: { xxFaseacce_key: _panel.down('#faseacce_key').getValue(), xxAdd_blank: (record.data.faseextr_type=='1'?'':'YES'), xxType_record: 'combo_cotizadores', },
				        callback: function(records, operations, success) { _cboUsuracce_key.setValue(''); } 
				    });
		        }
	        	if ( record.data.fase_key == _fase_key && record.data.extr_id == '14' ) { _win.down('#cntWeb').setVisible(true); _win.down('#pedweb_estado').enable(); }
	        });
			_win.show();
		} else {
			var _win = options.win;
			if ( !_win.down('#ped_certificado').isDisabled() && _win.down('#ped_certificado').getValue()*1 <= 0 ) {
				Ext.Msg.alert(translations.mensaje, 'Debe indicar el Número de Certificado SIAF', function() { _win.down('#ped_certificado').focus(); }); return false ; }
			if ( !_win.down('#usuracce_key').isDisabled() && (_win.down('#usuracce_key').getValue() == null || _win.down('#usuracce_key').getValue() == undefined) ) { 
				Ext.Msg.alert(translations.mensaje, 'Debe indicar el Cotizador al que se enviará el registro', function() { _win.down('#usuracce_key').focus(); }); return false ; }
			if ( !_win.down('#pedweb_dias').isDisabled() && _win.down('#pedweb_dias').getValue()*1 <= 0 ) { 
				Ext.Msg.alert(translations.mensaje, 'Debe indicar los dias de publicacion en la Web', function() { _win.down('#pedweb_dias').focus(); }); return false ; }
			var _store = _panel.down('#grdLogistics_pedidos').getStore(); var _menu_id = _panel.getMenuId();
			Ext.get(_panel.getEl()).mask('Validando información... por favor espere un momento...', 'loading');
			var _vs = fextpub_sessionVariables();
			Ext.Ajax.request({
				url: 'php/logistics_pedidos_fases_save_vobo.php',
				params: { xx0005: 'YES', xxPedfase_key: options.key, xxFaseacce_key: _panel.down('#faseacce_key').getValue(), xxFase_type: '1', xxUsur_psw2: options.usur_psw2, 
						  xxPed_certificado: _win.down('#ped_certificado').getValue(), xxUsuracce_key: _win.down('#usuracce_key').getValue(),
				          xxPedweb_estado: (_win.down('#pedweb_estado').getValue() == true ? '1' : '0'), xxPedweb_dias: _win.down('#pedweb_dias').getValue(), xxPed_observ: options.observ,
					      zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'], xxMenu_id: _menu_id },
				success: function(conn, response, options, eOpts) {
					var _result = Siace.util.Util.decodeJSON(conn.responseText);
					if ( _result.success ) {
						_win.close();
			            _store.load({ callback: function(opt, success, respon) { Ext.get(_panel.getEl()).unmask(); } });
					} else { Ext.get(_panel.getEl()).unmask(); Siace.util.Util.showErrorMsg(_result.msg); }
				},
				failure: function(conn, response, options, eOpts) { Ext.get(_panel.getEl()).unmask(); Siace.util.Util.showErrorMsg(conn.responseText); }
			});
		}		
	},

	lpbv_btnRejectClick: function(button, e, options) {
		if ( fextpub_uamoButtons(button.up('panel').down('#opc_id'), 41) ) { return false; }
		var _panel = button.up('panel');
		if ( options == undefined ) {
	        var _record = _panel.down('#grdLogistics_pedidos').getSelectionModel().getSelection()[0];
	        if ( !_record ) { return false; }

			Ext.Msg.confirm('Confirmación', '¿Esta Ud. seguro de dar el RECHAZAR al registro seleccionado?', function(btn){
				if ( btn == 'yes' ) {
					var _win = Ext.create('Siace.view.logistics.PedidosPsw2');
					_win.setCallButton(button);
					_win.setCallKey(_record.data.pedfase_key);
					_win.setTitle('Rechazar Documento');
					_win.setSubTitle(_record.data.ped_documento);
					_win.down('#btnAccept').setText('Rechazar');
					_win.setFormType('45'); _win.show();
				}
			});
		} else {
			var _win = options.win;
			var _store = _panel.down('#grdLogistics_pedidos').getStore(); var _menu_id = _panel.getMenuId();
			Ext.get(_panel.getEl()).mask('Validando información... por favor espere un momento...', 'loading');
			var _vs = fextpub_sessionVariables();
			Ext.Ajax.request({
				url: 'php/logistics_pedidos_fases_save_reject.php',
				params: { xx0005: 'YES', xxPedfase_key: options.key, xxFaseacce_key: _panel.down('#faseacce_key').getValue(), xxUsur_psw2: options.usur_psw2, xxPed_observ: options.observ,
					      zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'], xxMenu_id: _menu_id },
				success: function(conn, response, options, eOpts) {
					var _result = Siace.util.Util.decodeJSON(conn.responseText);
					if ( _result.success ) {
						_win.close();
			            _store.load({ callback: function(opt, success, respon) { Ext.get(_panel.getEl()).unmask(); } });
					} else { Ext.get(_panel.getEl()).unmask(); Siace.util.Util.showErrorMsg(_result.msg); }
				},
				failure: function(conn, response, options, eOpts) { Ext.get(_panel.getEl()).unmask(); Siace.util.Util.showErrorMsg(conn.responseText); }
			});
		}		
	},

	lpbv_faseacce_keyChange: function(combo, newValue, oldValue, options) {
		if ( oldValue !== undefined ) { combo.up('panel').down('#pagLogistics_pedidos').doRefresh(); }
	},

	lpbv_fechainiChange: function(datefiled, newValue, oldValue, options) {
		this.lpbv_Clean(datefiled.up('panel'));
	},

	lpbv_fechafinChange: function(datefiled, newValue, oldValue, options) {
		this.lpbv_Clean(datefiled.up('panel'));
	},

	lpbv_grdLogistics_pedidosSelectionChange: function(model, record, options) {			
		if ( record.length == 1 ) {
			var _panel = model.view.panel.up('panel'); var _cboOpc_id = _panel.down('#opc_id'); var _flga = record[0].data.ped_flga;
			_panel.down('#btnQuery').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 3));
			_panel.down('#btnAttach').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 59));
			_panel.down('#btnFases').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 5002));
			_panel.down('#btnVobo').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 41));
			_panel.down('#btnReject').setDisabled(_flga == '98' ? true : fextpub_uamoButtons(_cboOpc_id, 45));
		}
	},

	lpbv_tipped_idChange: function(combo, newValue, oldValue, options) {
		if (oldValue !== undefined ) { combo.up('panel').down('#pagLogistics_pedidos').doRefresh(); }
	},

	lpbv_year_idChange: function(combo, newValue, oldValue, options) {
		if (oldValue !== undefined ) { this.lpbv_Clean(combo.up('panel')); }
	},

	/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
	lpe_BeforeShow: function(component, options) {
		var _typeEdit = component.getTypeEdit(); var _tabLP = component.down('#tabLogistics_pedidos'); var _tabEttr01 = component.down('#tabEttr01'); var _tabEttr02 = component.down('#tabEttr02'); var _tabEttr03 = component.down('#tabEttr03');
		fextpub_tablas_generalesFilter({'objeto': _tabLP.down('#tipped_id'), 'tabgen_parent': '5005', 'add_blank': 'NO', 'disabled': (_typeEdit=='1'?false:true)});
 
		var _storeLPTF = Ext.create('Siace.store.logistics.Pedidos_Tareas_Fftred');
		var _grdLPTF = _tabLP.down('#grdLogistics_pedidos_tareas_fftred');
		_grdLPTF.bindStore(_storeLPTF); _storeLPTF.pageSize = 500;
		_storeLPTF.on('beforeload', function(store, operations, Eoptions) {
		    store.getProxy().setExtraParam('xxType_record', 'form');
		    store.getProxy().setExtraParam('xxOrder_by', 'pedtareafte_item');
		});

		var _me = this;  var _txtPed_monto = _tabLP.down('#ped_monto');
		var _grdLPD = _tabLP.down('#grdLogistics_pedidos_det');
		if ( fjsIn_array(_typeEdit, ['1','2']) ) {
			var _storeLPD = Ext.create('Siace.store.logistics.Pedidos_Det',{
		        listeners : {
		            update: function(store, record, operation, options){
		                var _monto = 0;
		                store.each(function(record){ _monto += record.get('peddet_pretot'); });
		                _txtPed_monto.setValue(_monto);
		            }
		        }
			});
			var _ce = Ext.create('Ext.grid.plugin.CellEditing', {
				itemId: 'celogistics_pedidos_det', clicksToEdit: 1,
				listeners: {
				    edit: function(editor, e, options) {
				        var _record = (parseInt(Ext.versions.extjs.shortVersion) >= 410) ? e.record : editor.record;
				        var _apretot = _record.data.peddet_pretot;
				        _record.set('peddet_pretot', fjsRound(_record.data.peddet_cantid * _record.data.peddet_preuni, 2));
				        _me.lpe_tlp_grdLogistics_pedidos_tareas_fftredEdit(component, {'tareafte_id': '', 'espedet_id': _record.data.espedet_id, 'pretot': (_record.data.peddet_pretot*1 - _apretot*1)});
				    },
				}
		    });
		    _ce.init(_grdLPD);
		} else {
			var _storeLPD = Ext.create('Siace.store.logistics.Pedidos_Det');
		}

		_grdLPD.bindStore(_storeLPD); _grdLPD.getView().refresh();
		_storeLPD.sort('peddet_item', 'ASC'); _storeLPD.pageSize = 500;
		_storeLPD.on('beforeload', function(store, operations, eoptions) {
			_tabLP.down('#btnSuppress').disable();
		    store.getProxy().setExtraParam('xxType_record', 'form');
		    store.getProxy().setExtraParam('xxOrder_by', store.sorters.items[0].property +' '+ store.sorters.items[0].direction);
		});

		fextbud_tareas_fftredParameters({'panel': _tabLP, 'objeto': _tabLP.down('#fftr_id'), 'type_query': 'T_FF_TR', 'order_by': 'fftr_codename', 'add_blank': 'NO'});
		if ( fjsIn_array(_typeEdit, ['1','2','12']) ) {
			if (_typeEdit == '1') { var _icon = 'icon_New_90'; var _title = 'Nuevo Requerimiento ::.'; component.down('#ped_fecha').setValue(fjsDateCurrent('')); }
			else if (_typeEdit == '2') { var _icon = 'icon_Modify_90'; var _title = 'Modificar Requerimiento ::.'; }
			else if (_typeEdit == '12') { var _icon = 'icon_Modify_90'; var _title = ''; component.down('tabpanel').setActiveTab(1); }
			fextbud_tareasATParameters({'panel': _tabLP, 'docu_campo': 'tareausuracce_estado501', 'docu_estado': '1', 'type_record': 'combo_codename', 'add_blank': 'NO'});
			fextpub_areasFilter({'objeto': _tabLP.down('#area_key'), 'area_key': Ext.getCmp('ah_txtArea_key').getValue(), 've_usuracce_key': 'YES', 'type_record': 'combo', 'add_blank': 'NO', 'disabled': true});
			fextbud_tareasAMParameters({'panel': _tabLP, 'docu_campo': 'tareausuracce_estado501', 'docu_estado': '1', 'type_record': 'combo_codename', 'add_blank': 'NO'}); 
			if ( _typeEdit == '1' ) { fextbud_tareasAMLoad({'panel': _tabLP}); }
			//else { fextbud_tareasAMLoad({'panel': _tabLP, 'setValue': false }); }
			_tabLP.down('#btnAdd').enable();
		} else if ( fjsIn_array(_typeEdit, ['3','23']) ) {
			var _icon = 'icon_Query_90'; var _title = 'Consulta de Requerimiento ::.';
		}
		if ( fjsIn_array(_typeEdit, ['2','3','12','23']) ) {
			component.setFilterFFTR(false);
			fextpub_tablas_generalesFilter({'objeto': _tabEttr01.down('#lugentr_id'), 'tabgen_parent': '5020', 'add_blank': 'NO', 'disabled': (_typeEdit=='12'?false:true), 'setValue': false});
        	var _form = component.down('form');  var _vs = fextpub_sessionVariables();
   			_form.load({
   				method: 'POST', url: 'php/logistics_pedidos_json_records.php',
            	params: { xxPed_key: component.getCallKey(), xxYear_id: _tabLP.down('#year_id').getValue(), ssNO_USK: component.getNoUsk(), xxType_record: 'form', xxMenu_id: component.getMenuId(),
            	 		  zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
            	waitMsg: 'Loading...',
            	success: function (form, action) {
                	try {
                    	var _model = Ext.create('Siace.model.logistics.Pedido'); var _result = Ext.decode(action.response.responseText);
                    	if ( _result.data[0] ) {
                    		_model.set(_result.data[0]);  _form.loadRecord(_model);  var _data = _result.data[0];
                    		if ( _typeEdit == '12') { component.setTitle('Editar ' +(_data.tipped_id == '5006' ? 'Especificaciones Técnicas' : 'Terminos de Referencia')+ ' de Requerimiento'); }
            				if ( fjsIn_array(_typeEdit, ['3','12','23']) ) {
								component.down('tabpanel').child('#tabEttr01').tab.show();
								component.down('tabpanel').child('#tabEttr02').tab.show();
								component.down('tabpanel').child('#tabEttr03').tab.show();
								if ( fjsIn_array(_data.tipped_id, ['5007','5008']) ) {
									component.down('#tabEttr01').setTitle('Terminos de Referencia I');
									component.down('#tabEttr02').setTitle('Terminos de Referencia II');
									component.down('#tabEttr03').setTitle('Terminos de Referencia III');
									component.down('#tabEttr01').down('#pedettr_lugar').setHeight(60);
									component.down('#tabEttr01').down('#lugentr_id').setVisible(false);
									component.down('#tabEttr01').down('#pedettr_condiciones').setVisible(false);
									component.down('#tabEttr01').down('#pedettr_actividades').setVisible(true);
									component.down('#tabEttr01').down('#pedettr_entregable').setVisible(true);
									component.down('#tabEttr01').down('#pedettr_nombre').setFieldLabel('&nbsp;1. Denominación del Servicio o Consultoría');
									component.down('#tabEttr01').down('#pedettr_objetivo').setFieldLabel('&nbsp;3. Objetivo del Servicio o Consultoría');
									component.down('#tabEttr01').down('#pedettr_lugar').setFieldLabel('&nbsp;4.1. Lugar de Ejecución');
									component.down('#tabEttr02').down('#pedettr_persona').setFieldLabel('&nbsp;5. Requisitos y Perfil del Contratista');
									component.down('#tabEttr02').down('#pedettr_plazo').setFieldLabel('&nbsp;6.1. Plazo de Ejecución');
									component.down('#tabEttr02').down('#pedettr_garantia').setFieldLabel('&nbsp;7.1. Garantía del Servicio');
									component.down('#tabEttr03').down('#pedettr_supervisa').setFieldLabel('&nbsp;9. Supervisión y Conformidad del Servicio y/o Consultoría');
								}
            				}
                        	_tabLP.down('#year_id').setValue(_data.year_id*1); _tabLP.down('#ped_nro').setValue(_data.ped_nro); _tabLP.down('#ped_fecha').setValue(_data.ped_fecha); _tabLP.down('#tipped_id').setValue(parseInt(_data.tipped_id));
							_tabLP.down('#ped_monto').setValue(_data.ped_monto);
                        	if ( fjsIn_array(_typeEdit, ['3','23']) ) {
								fextpub_areasFilter({'objeto': _tabLP.down('#area_key'), 'area_key': _data.area_key, 'type_record': 'combo', 'add_blank': 'NO', 'disabled': true});
								fextbud_metasParameters({'panel': _tabLP, 'meta_id': _data.meta_id, 'type_record': 'combo_codename', 'add_blank': 'NO'}); fextbud_metasLoad({'panel': _tabLP, 'disabled': true, 'meta_id': _data.meta_id});
								fextbud_tareasParameters({'panel': _tabLP, 'tarea_key': _data.tarea_key, 'type_record': 'combo_codename', 'order_by': 'tarea_codename',  'add_blank': 'NO'}); fextbud_tareasLoad({'panel': _tabLP, 'disabled': true, 'filterForce': true, 'tarea_key': _data.tarea_key});
                        	} else {
                        		fextbud_tareasAMLoad({'panel': _tabLP, 'disabled': true, 'meta_id': _data.meta_id });
                        		_tabLP.down('#tarea_key').setValue(_data.tarea_key);
                        	}
					        _tabLP.down('#fftr_id').getStore().load({
					        	params: { xxTarea_key: _data.tarea_key },
					            callback: function(records, operations, success) { _tabLP.down('#fftr_id').setValue(_data.fftr_id); _tabLP.down('#fftr_id').disable(); }
					        });

					        _tabLP.down('#grdLogistics_pedidos_det').getStore().load({
					        	params: { xxPed_key: _data.ped_key },
					        	callback: function(records, operations, success) {
					        		_tabLP.down('#peddet_item').setValue(records[records.length-1].data.peddet_item);
					        	}
					        });
					        _tabLP.down('#grdLogistics_pedidos_tareas_fftred').getStore().load({ params: { xxPed_key: _data.ped_key }, });
                    	}
                	}
                	catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
            	},
            	failure: function (form, action) { Ext.Msg.alert("Load failed", action.result.errorMessage); }
        	});

			if ( fjsIn_array(_typeEdit, ['3','12','23']) ) {
	   			_form.load({
	   				method: 'POST', url: 'php/logistics_pedidos_ettr_json_records.php',
	            	params: { xxPed_key: component.getCallKey(), xxType_record: 'form',
	            	 		  zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
	            	waitMsg: 'Loading...',
	            	success: function (form, action) {
	                	try {
	                		var _model = Ext.create('Siace.model.logistics.Pedido_Ettr'); var _result = Ext.decode(action.response.responseText);
	                    	if ( _result.data[0] ) {
	                    		_model.set(_result.data[0]);  _form.loadRecord(_model);  var _data = _result.data[0];
	        					if ( _data.pedettr_file1 !== '' ) {
	        						component.down('#ffiPedettr_file1').setRawValue(_data.pedettr_file1); component.down('#ffiPedettr_file1').setReadOnly(true); component.down('#btnPedettr_file1Download').enable();
	        						if ( _typeEdit == '12' ) { component.down('#btnPedettr_file1Delete').show(); }
	        					}
	        					if ( _data.pedettr_file2 !== '' ) {
	        						component.down('#ffiPedettr_file2').setRawValue(_data.pedettr_file2); component.down('#ffiPedettr_file2').setReadOnly(true); component.down('#btnPedettr_file2Download').enable();
	        						if ( _typeEdit == '12' ) { component.down('#btnPedettr_file2Delete').show(); }
	        					}
	                    	}
	                    } catch (ex) { Ext.Msg.alert('Status', 'Exception: ' + ex.Message); }
	                }
	            });
	   		}

			_tabLP.down('#tareacomp_key').disable();
			if ( fjsIn_array(_typeEdit, ['3','12','23']) ) {
				_tabLP.down('#btnAdd').disable();
				if ( fjsIn_array(_typeEdit, ['3','23']) ) {
					_tabLP.down('#ped_observ').setReadOnly(true);
					_tabEttr01.down('#pedettr_nombre').setReadOnly(true); _tabEttr01.down('#pedettr_finalidad').setReadOnly(true); _tabEttr01.down('#pedettr_objetivo').setReadOnly(true);  _tabEttr01.down('#pedettr_lugar').setReadOnly(true); _tabEttr01.down('#pedettr_condiciones').setReadOnly(true); _tabEttr01.down('#pedettr_actividades').setReadOnly(true); _tabEttr01.down('#pedettr_entregable').setReadOnly(true);
					_tabEttr02.down('#pedettr_persona').setReadOnly(true); _tabEttr02.down('#pedettr_plazo').setReadOnly(true); _tabEttr02.down('#tipplaz_id').disable(); _tabEttr02.down('#pedettr_plazo_nro').disable();  _tabEttr02.down('#pedettr_fechaini').disable(); _tabEttr02.down('#pedettr_fechafin').disable(); _tabEttr02.down('#pedettr_garantia').setReadOnly(true); _tabEttr02.down('#pedettr_garantia_nro').disable(); _tabEttr02.down('#pedettr_forma_pago').setReadOnly(true);
					_tabEttr03.down('#pedettr_supervisa').setReadOnly(true); _tabEttr03.down('#pedettr_penalidad').disable(); _tabEttr03.down('#pedettr_otros').disable();
					_tabEttr03.down('#ffiPedettr_file1').disable(); _tabEttr03.down('#ffiPedettr_file2').disable();
					component.down('#btnSave').disable(); component.down('#btnUndo').disable(); component.down('#btnExit').enable();
				}
			}
		}
		component.setIconCls(_icon); if ( _title !== '' ) { component.setTitle(_title); }
	},

	lpe_Show: function(component, options) {
		component.getFilterFFTR(true);
	},

	lpe_btnSaveClick: function(button, e, options) {
	    var _win = button.up('window'); var _frm = _win.down('form');
	    if ( _win.getTypeEdit() == '12' ) {
	    	var _tipped_id = _win.down('#tipped_id').getValue(); var _tabEttr01 = _win.down('#tabEttr01'); var _tabEttr02 = _win.down('#tabEttr02'); var _tabEttr03 = _win.down('#tabEttr03');
	    	if ( _tabEttr01.down('#pedettr_nombre').getValue() == '' ) {
	    		_win.down('tabpanel').setActiveTab(1);
				Ext.Msg.alert(translations.mensaje, 'Debe indicar la Denominación del '+(_tipped_id == '5006' ? 'Adquisición' : 'Servicio o Consultoría'), function() { _tabEttr01.down('#pedettr_nombre').focus(); }); return false ; }
	    	if ( _tabEttr01.down('#pedettr_finalidad').getValue() == '' ) {
	    		_win.down('tabpanel').setActiveTab(1);
				Ext.Msg.alert(translations.mensaje, 'Debe indicar la Finalidad Pública', function() { _tabEttr01.down('#pedettr_finalidad').focus(); }); return false ; }
	    	if ( _tabEttr01.down('#pedettr_objetivo').getValue() == '' ) {
	    		_win.down('tabpanel').setActiveTab(1);
				Ext.Msg.alert(translations.mensaje, 'Debe indicar el Objetivo '+(_tipped_id == '5006' ? 'de la Adquisición' : 'Servicio o Consultoría'), function() { _tabEttr01.down('#pedettr_objetivo').focus(); }); return false ; }
			if ( _tipped_id == '5006') {
		    	if ( _tabEttr01.down('#lugentr_id').getValue() == undefined && _tabEttr01.down('#lugentr_id').getValue() == '' ) {
		    		_win.down('tabpanel').setActiveTab(1);
					Ext.Msg.alert(translations.mensaje, 'Debe indicar Lugar de Entrega', function() { _tabEttr01.down('#lugentr_id').focus(); }); return false ; }
			}
	    	if ( _tabEttr01.down('#pedettr_lugar').getValue() == '' ) {
	    		_win.down('tabpanel').setActiveTab(1);
				Ext.Msg.alert(translations.mensaje, 'Debe indicar el Lugar de  '+(_tipped_id == '5006' ? 'Entrega' : 'Ejecución'), function() { _tabEttr01.down('#pedettr_lugar').focus(); }); return false ; }
			if ( _tipped_id == '5006') {
		    	if ( _tabEttr01.down('#pedettr_condiciones').getValue() == '' ) {
		    		_win.down('tabpanel').setActiveTab(1);
					Ext.Msg.alert(translations.mensaje, 'Debe indicar las Condiciones de Operación', function() { _tabEttr01.down('#pedettr_condiciones').focus(); }); return false ; }
			} else {
		    	if ( _tabEttr01.down('#pedettr_actividades').getValue() == '' ) {
		    		_win.down('tabpanel').setActiveTab(1);
					Ext.Msg.alert(translations.mensaje, 'Debe indicar las Actividades y Plan de Trabajo', function() { _tabEttr01.down('#pedettr_actividades').focus(); }); return false ; }
		    	if ( _tabEttr01.down('#pedettr_entregable').getValue() == '' ) {
		    		_win.down('tabpanel').setActiveTab(1);
					Ext.Msg.alert(translations.mensaje, 'Debe indicar los Productos y/o Servicio a obtener', function() { _tabEttr01.down('#pedettr_entregable').focus(); }); return false ; }
			}
	    	if ( _tabEttr02.down('#pedettr_persona').getValue() == '' ) {
	    		_win.down('tabpanel').setActiveTab(2);
				Ext.Msg.alert(translations.mensaje, 'Debe indicar los Requisitos y Perfil del '+(_tipped_id == '5006' ? 'Proveedor' : 'Contratista'), function() { _tabEttr02.down('#pedettr_persona').focus(); }); return false ; }
	    	if ( _tabEttr02.down('#pedettr_plazo').getValue() == '' ) {
	    		_win.down('tabpanel').setActiveTab(2);
				Ext.Msg.alert(translations.mensaje, 'Debe indicar el Plazo de '+(_tipped_id == '5006' ? 'Entrega' : 'Ejecución'), function() { _tabEttr02.down('#pedettr_plazo').focus(); }); return false ; }
	    	if ( _tabEttr02.down('#pedettr_plazo_nro').getValue() == '' ) {
	    		_win.down('tabpanel').setActiveTab(2);
				Ext.Msg.alert(translations.mensaje, 'Debe indicar el Número de días del Plazo de '+(_tipped_id == '5006' ? 'Entrega' : 'Ejecución'), function() { _tabEttr02.down('#pedettr_plazo_nro').focus(); }); return false ; }
	    	if ( _tabEttr02.down('#pedettr_garantia').getValue() == '' ) {
	    		_win.down('tabpanel').setActiveTab(2);
				Ext.Msg.alert(translations.mensaje, 'Debe indicar la Garantía '+(_tipped_id == '5006' ? 'Comercial del Bien' : 'del Servicio'), function() { _tabEttr02.down('#pedettr_garantia').focus(); }); return false ; }
	    	if ( _tabEttr02.down('#pedettr_garantia_nro').getValue() == '' ) {
	    		_win.down('tabpanel').setActiveTab(2);
				Ext.Msg.alert(translations.mensaje, 'Debe indicar el Número de Meses garantia', function() { _tabEttr02.down('#pedettr_garantia_nro').focus(); }); return false ; }
	    	if ( _tabEttr02.down('#pedettr_forma_pago').getValue() == '' ) {
	    		_win.down('tabpanel').setActiveTab(2);
				Ext.Msg.alert(translations.mensaje, 'Debe indicar la Forma de Pago', function() { _tabEttr02.down('#pedettr_forma_pago').focus(); }); return false ; }
	    	if ( _tabEttr03.down('#pedettr_supervisa').getValue() == '' ) {
	    		_win.down('tabpanel').setActiveTab(3);
				Ext.Msg.alert(translations.mensaje, 'Debe indicar la Supervisión y Conformidad del '+(_tipped_id == '5006' ? 'Bien' : 'del Servicio y/o Consultoría'), function() { _tabEttr03.down('#pedettr_supervisa').focus(); }); return false ; }
	    	if ( _tabEttr03.down('#pedettr_penalidad').getValue() == '' ) {
	    		_win.down('tabpanel').setActiveTab(3);
				Ext.Msg.alert(translations.mensaje, 'Debe indicar las Penalidades', function() { _tabEttr03.down('#pedettr_penalidad').focus(); }); return false ; }
		    if ( _frm.getForm().isValid() ) {
				Ext.Msg.confirm(translations.confirmar, translations.mensaje_pregunta_guardar, function(btn){
				if ( btn == 'yes' ) {    	
			    	var _vs = fextpub_sessionVariables();
			        _frm.getForm().submit({
						method: 'POST', url: 'php/logistics_pedidos_ettr_save.php',
						params:{ xx0005: 'YES', xxType_edit: _win.getTypeEdit(),
							     zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
		                waitTitle: translations.valida_titulo, waitMsg: translations.valida_mensaje01,
			            
			            success: function(form, action) {
			            	var _result = Siace.util.Util.decodeJSON(action.response.responseText);
			                if ( _result.success ) {
					            if ( _win.getCallStore() !== null ) { _win.getCallStore().load(); } 
							    else if ( _win.getCallWindow() !== null ) { }
			                    _win.close();
			                } else { Siace.util.Util.showErrorMsg(_result.msg); }
			            },
			            failure: function(form, action) { Siace.util.Util.showErrorMsg(action.response.responseText); }
			        });
				}});
		    }

	    } else {
		    if ( _win.down('#ped_fecha').getValue() == '' ) {
		    	Ext.Msg.alert(translations.mensaje, 'Error de navegador, nose ha establecido la FECHA', function() { }); return false ; }
		    if ( _win.down('#tipped_id').getValue() == '' || _win.down('#tipped_id').getValue() == null || _win.down('#tipped_id').getValue() == undefined ) {
		    	Ext.Msg.alert(translations.mensaje, 'Debe indicar el Tipo de Requerimiento', function() { _win.down('#tipped_id').focus(); }); return false ; }
		    if ( _win.down('#area_key').getValue() == '' ) {
		    	Ext.Msg.alert(translations.mensaje, 'Error de acceso, no se ha establecdo la Unidad Organica', function() { _win.down('#area_key').focus(); }); return false ; }
		    if ( _win.down('#meta_id').getValue() == '' || _win.down('#meta_id').getValue() == null || _win.down('#meta_id').getValue() == undefined ) {
		    	Ext.Msg.alert(translations.mensaje, 'Debe indicar la Meta SIAF', function() { _win.down('#meta_id').focus(); }); return false ; }
		    if ( _win.down('#tarea_key').getValue() == '' || _win.down('#tarea_key').getValue() == null || _win.down('#tarea_key').getValue() == undefined ) {
		    	Ext.Msg.alert(translations.mensaje, 'Debe indicar la Tarea Presupuestal', function() { _win.down('#tarea_key').focus(); }); return false ; }
		    if ( _win.down('#fftr_id').getValue() == '' || _win.down('#fftr_id').getValue() == null || _win.down('#fftr_id').getValue() == undefined ) {
		    	Ext.Msg.alert(translations.mensaje, 'Debe indicar la Fuente de Financiamiento', function() { _win.down('#fftr_id').focus(); }); return false ; }
		    //if ( _win.down('#ped_monto').getValue() == '' || _win.down('#ped_monto').getValue()*1 <= 0 ) {
		    //	Ext.Msg.alert(translations.mensaje, 'IMPORTE de documento no puede ser cero(0)', function() { }); return false ; }
			var _det = ''; var _tarea_fftred = ''; var _ped_monto = 0;
			var _recLPD = _win.down('#grdLogistics_pedidos_det').getStore().getRange();
			var _recLPTFTE = _win.down('#grdLogistics_pedidos_tareas_fftred').getStore().getRange();
			for ( var _i = 0;  _i < _recLPD.length; _i++ ) {
				if ( _recLPD[_i].get('peddet_cantid') == '' || _recLPD[_i].get('peddet_cantid')*1 <= 0 ) {
					Ext.Msg.alert(translations.mensaje, 'Cantidad en detalle no pueder ser cero (0)', function() { }); return false ; }
				if ( _recLPD[_i].get('peddet_preuni')*1 <= 0 && _win.down('#ped_monto').getValue()*1 > 0 ) {
					Ext.Msg.alert(translations.mensaje, 'Debe indicar el Precio Unitario de item: ('+(_i*1+1) +') '+_recLPD[_i].get('bs_nombre'), function() { }); return false ; }
				_det += (_i == 0 ? '' : ',') +'{'+ _recLPD[_i].get('peddet_id') +','+ _i +','+ _recLPD[_i].get('bs_key') +','+ '*' +_recLPD[_i].get('peddet_detalle') +','+ _recLPD[_i].get('peddet_cantid') +','+ _recLPD[_i].get('peddet_preuni')*1 +','+ _recLPD[_i].get('peddet_pretot')*1 +','+ _recLPD[_i].get('espedet_id') +',0,0}';
				_ped_monto += fjsRound(_recLPD[_i].get('peddet_pretot'), 2)*1;
				var _found = false;
				for ( var _j = 0;  _j < _recLPTFTE.length; _j++ ) {
					if ( _recLPTFTE[_j].get('espedet_id') == _recLPD[_i].get('espedet_id') ) { _found = true; }
				}
				if ( _found == false ) {
					Ext.Msg.alert(translations.mensaje, 'No se encuentra Clasificador en registro consolidado', function() { }); return false ; }
			}
			if ( _det == '' ) { Ext.Msg.alert(translations.mensaje, 'Documento no registra detalle', function() { _win.down('#btnAdd').focus(); }); return false ; }
			if ( _ped_monto*1 !== _win.down('#ped_monto').getValue()*1 ) { Ext.Msg.alert(translations.mensaje, 'Importe en sumatoria de detalle ['+_ped_monto+'], es diferente al importe del documento ['+_win.down('#ped_monto').getValue()+']', function() { }); return false ; }
			for ( var _i = 0;  _i < _recLPTFTE.length; _i++ ) {
				//if ( _recLPTFTE[_i].get('pedtareafte_monto') == '' || _recLPTFTE[_i].get('pedtareafte_monto')*1 <= 0 ) {
				//	Ext.Msg.alert(translations.mensaje, 'Importe en Consolidado de Clasificador [' +_recLPTFTE[_i].get('espedet_codigo')+ '] no pueder ser cero (0)', function() { }); return false ; }
				_tarea_fftred += (_i == 0 ? '' : ',') +'{'+ _recLPTFTE[_i].get('pedtareafte_id') +','+ _i +','+ _recLPTFTE[_i].get('tareafte_id') +','+ _recLPTFTE[_i].get('espedet_id') +','+ _recLPTFTE[_i].get('pedtareafte_monto')*1 +',0}';
				_ped_monto += fjsRound(_recLPTFTE[_i].get('tareafte_monto'), 2)*1;
				var _found = false;
				for ( var _j = 0;  _j < _recLPD.length; _j++ ) {
					if ( _recLPD[_j].get('espedet_id') == _recLPTFTE[_i].get('espedet_id') ) { _found = true; }
				}
				if ( _found == false ) {
					Ext.Msg.alert(translations.mensaje, 'No se encuentra Clasificador en detalle de documento', function() { }); return false ; }
			}
			if ( _ped_monto*1 !== _win.down('#ped_monto').getValue()*1 ) { Ext.Msg.alert(translations.mensaje, 'Importe en consolidado de Clasificador ['+_ped_monto+'], es diferente al importe del documento ['+_win.down('#ped_monto').getValue()+']', function() { }); return false ; }
		    if ( _frm.getForm().isValid() ) {
				Ext.Msg.confirm(translations.confirmar, translations.mensaje_pregunta_guardar, function(btn){
				if ( btn == 'yes' ) {    	
			    	var _vs = fextpub_sessionVariables();
			        _frm.getForm().submit({
						method: 'POST', url: 'php/logistics_pedidos_save.php',
						params:{ xx0005: 'YES', xxType_edit: _win.getTypeEdit(), xxYear_id: _win.down('#year_id').getValue(), xxDoc_id: '501', xxPed_fecha: fjsDateSQL(_win.down('#ped_fecha').getRawValue()), xxTipped_id: _win.down('#tipped_id').getValue(),
								 xxArea_key: _win.down('#area_key').getValue(), xxTarea_key: _win.down('#tarea_key').getValue(), xxFuefin_id: _win.down('#fftr_id').getValue().substr(0,3), xxTiprecur_id: _win.down('#fftr_id').getValue().substr(4),
								 xxPed_monto: _win.down('#ped_monto').getValue()*1, xxDet: _det, xxTarea_fftred: _tarea_fftred,
							     zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
		                waitTitle: translations.valida_titulo, waitMsg: translations.valida_mensaje01,
			            
			            success: function(form, action) {
			            	var _result = Siace.util.Util.decodeJSON(action.response.responseText);
			                if ( _result.success ) {
			                	if ( _win.getTypeEdit() == '1' ) {
									var _winF = Ext.create('Siace.view.logistics.PedidosOK');
									_winF.setCallKey(_result.key); _winF.setCallStore(_win.getCallStore());
									_winF.down('#btnAccept').setVisible(false); _winF.down('#btnCancel').setVisible(false); _winF.down('#btnPrinter').setVisible(true); _winF.down('#btnExit').setVisible(true);
									_win.close(); _winF.show();
								} else {
						            if ( _win.getCallStore() !== null ) { _win.getCallStore().load(); } 
								    else if ( _win.getCallWindow() !== null ) { }
				                    _win.close();
				                }
			                } else { Siace.util.Util.showErrorMsg(_result.msg); }
			            },
			            failure: function(form, action) { Siace.util.Util.showErrorMsg(action.response.responseText); }
			        });
				}});
		    }
		}
	},

	lpe_btnUndoClick: function(button, e, options) { button.up('window').close(); },
	lpe_btnExitClick: function(button, e, options) { button.up('window').close(); },

	lpe_tlp_btnAddClick: function(button, e, options) {
        var _win = button.up('window');
        if ( _win.down('#meta_id').getValue() == undefined || _win.down('#meta_id').getValue()*1 <= 0 ) {
        	Ext.Msg.alert(translations.mensaje, 'Debe indicar la META SIAF', function() { _win.down('#meta_id').focus(); }); return false ; }
        if ( _win.down('#tarea_key').getValue() == undefined || _win.down('#tarea_key').getValue() == '' ) {
        	Ext.Msg.alert(translations.mensaje, 'Debe indicar la TAREA Presupuestal', function() { _win.down('#tarea_key').focus(); }); return false ; }
        if ( _win.down('#fftr_id').getValue() == undefined || _win.down('#fftr_id').getValue()*1 <= 0 ) {
        	Ext.Msg.alert(translations.mensaje, 'Debe indicar la Fuente de Financiamiento', function() { _win.down('#fftr_id').focus(); }); return false ; }
      
		_win.setComponentPBSS(fext_componentSearch({'componentCall': _win, 'componentSearch': _win.getComponentPBSS(), 'view': 'Siace.view.public.Bienes_ServsSearch', 'title': 'Búsqueda Catálogo de Bienes y Servicios', 'typeQuery': 'espedet_id', 'typeReturn': 'ADD_PEDIDOS'}));
		_win.getComponentPBSS().setTab02('5');
		_win.getComponentPBSS().setBst_id(_win.down('#tipped_id').getValue() == '5006' ? 1 : 2);
		_win.getComponentPBSS().down('#bst_id').setValue( _win.getComponentPBSS().getBst_id()*1 );
		_win.getComponentPBSS().setTarea_key(_win.down('#tarea_key').getValue());
		_win.getComponentPBSS().setTipgast_code(_win.down('#tarea_key').getStore().findRecord('tarea_key', _win.down('#tarea_key').getValue()).data['tipgast_code']);
		_win.getComponentPBSS().setFuefin_id(_win.down('#fftr_id').getValue().substr(0,3));
		_win.getComponentPBSS().setTiprecur_id(_win.down('#fftr_id').getValue().substr(4));
		_win.getComponentPBSS().setEspedet_type(_win.down('#tipped_id').getValue() == '5006' ? 'B' : 'S');
	},

	lpe_tlp_btnSuppressClick: function(button, e, options) {
		var _win = button.up('panel').up('panel').up('window');
		var _record = _win.down('#grdLogistics_pedidos_det').getSelectionModel().getSelection()[0];
        if ( _record ) {
        	button.disable();
        	_win.down('#grdLogistics_pedidos_det').getStore().remove(_record); var _recLPTFTE = false;
			_win.down('#grdLogistics_pedidos_tareas_fftred').getStore().findBy(function(record, id) {
		        if ( record.get('espedet_id') == _record.data.espedet_id ) {
		        	record.set('pedtareafte_monto', fjsRound(record.get('pedtareafte_monto')*1 - _record.data.peddet_pretot*1, 2) ); record.commit();
	        		if ( record.get('pedtareafte_monto')*1 <= 0 ) { _recLPTFTE = record; }
	        		return true;
		        }
		    });
			if ( _recLPTFTE ) { _win.down('#grdLogistics_pedidos_tareas_fftred').getStore().remove(_recLPTFTE); }

			this.lpe_tlp_ped_montoUpdate(_win, _record.data.peddet_pretot*(-1));
		}
	},

	lpe_tlp_grdLogistics_pedidos_detAdd: function(poComponent, poRecord, poParam) {
		var _storeLPD = poComponent.down('#grdLogistics_pedidos_det').getStore();
        var _modelLPD = _storeLPD.findRecord('bs_key', poRecord.data.bs_key);
        var _close = false;
        if ( _modelLPD == null ) {
        	poComponent.down('#peddet_item').setValue( poComponent.down('#peddet_item').getValue()*1 + 1 );
	        _storeLPD.add({ peddet_item: poComponent.down('#peddet_item').getValue(), bs_key: poRecord.data.bs_key, bs_codigo: poRecord.data.bs_codigo, bs_nombre: poRecord.data.bs_nombre, unimed_abrev: poRecord.data.unimed_abrev, espedet_id: poParam['espedet_id'], espedet_codigo: poParam['espedet_codigo'], peddet_detalle: poParam['detalle'], peddet_cantid: poParam['cantid'], peddet_preuni: poParam['preuni'], peddet_pretot: poParam['pretot']});
			this.lpe_tlp_grdLogistics_pedidos_tareas_fftredEdit(poComponent, poParam); _close = true;
			this.lpe_tlp_ped_montoUpdate(poComponent, poParam['pretot']);
        	//var _monto = poComponent.down('#ped_monto').getValue(); 
        	//poComponent.down('#ped_monto').setValue( poComponent.down('#ped_monto').getValue()*1 + poParam['pretot']*1 ); 
	    } else {
	    	Ext.Msg.alert(translations.mensaje, 'Item seleccionado ya se encuentra establecido en el documento');
	    }
		
		return _close;
	},

	lpe_tlp_grdLogistics_pedidos_detSelectionChange: function(model, record, options) {		
		if ( record.length == 1 ) {
			var _win = model.view.panel.up('panel').up('panel').up('window');
			if ( fjsIn_array(_win.getTypeEdit(), ['1','2']) ) { _win.down('#btnSuppress').enable(); }
		}
	},

	lpe_tlp_grdLogistics_pedidos_tareas_fftredEdit: function(poComponent, poParam) {
		var _storeLPTFTE = poComponent.down('#grdLogistics_pedidos_tareas_fftred').getStore();
		var _found = _storeLPTFTE.findBy(function(record, id) {
			if ( poParam['tareafte_id'] !== '' ) {
				if ( poParam['tareafte_id']*1 > 0 && record.get('tareafte_id') == poParam['tareafte_id'] ) {
				   	record.set('pedtareafte_monto', fjsRound(record.get('pedtareafte_monto')*1 + poParam['pretot']*1,2)); record.commit();
			       	return true;
			     }
			} else {
				if ( poParam['espedet_id']*1 > 0 && record.get('espedet_id') == poParam['espedet_id'] ) {
					record.set('pedtareafte_monto', fjsRound(record.get('pedtareafte_monto')*1 + poParam['pretot']*1,2)); record.commit();
					return true;
				}
			}
		});
		if ( _found == -1 ) {
		  	_storeLPTFTE.add({'tareafte_id': poParam['tareafte_id'], meta_code: poComponent.down('#meta_id').getRawValue().substr(0,4), espedet_id: poParam['espedet_id'], espedet_codigo: poParam['espedet_codigo'], espedet_nombre: poParam['espedet_nombre'], pedtareafte_monto: poParam['pretot']});
		}
	},

	lpe_tlp_meta_idChange: function(combo, newValue, oldValue, options) {
		if ( fjsIn_array(combo.up('window').getTypeEdit(), ['1','2','12']) ) { fextbud_tareasATLoad({'panel': combo.up('panel'), 'disabled': !combo.up('window').getFilterFFTR()}); }
	},

	lpe_tlp_ped_montoUpdate: function(poComponent, pnPretot) {
        var _tab = poComponent.down('#tabLogistics_pedidos'); var _monto = _tab.down('#ped_monto').getValue(); 
        _tab.down('#ped_monto').setValue( _tab.down('#ped_monto').getValue()*1 + pnPretot*1 );
        var _disabled = (_tab.down('#grdLogistics_pedidos_det').getStore().getCount()*1 > 0 ? true : false);
        _tab.down('#tipped_id').setDisabled(_disabled); _tab.down('#meta_id').setDisabled(_disabled); _tab.down('#tarea_key').setDisabled(_disabled); _tab.down('#tareacomp_key').setDisabled(_disabled); _tab.down('#fftr_id').setDisabled(_disabled);        
    },

	lpe_tlp_tarea_keyChange: function(combo, newValue, oldValue, options) {
		//if ( fjsIn_array(combo.up('window').getTypeEdit(), ['1','2']) ) {
		if ( combo.up('window').getFilterFFTR() ) {
			fextbud_tareas_fftredLoad({'panel': combo.up('panel'), 'objeto': combo.up('panel').down('#fftr_id'), 'setValue': false});
		}
	},

	lpe_btnPedettr_file1DeleteClick: function(button, e, options) {
		var _win = button.up('window');
		_win.down('#ffiPedettr_file1').reset(); _win.down('#ffiPedettr_file1').setValue(''); _win.down('#ffiPedettr_file1').setRawValue(''); _win.down('#ffiPedettr_file1').setReadOnly(false);
		_win.down('#pedettr_file1').setValue(''); button.hide(); _win.down('#btnPedettr_file1Download').disable();
    },

	lpe_btnPedettr_file1DownloadClick: function(button, e, options) {
		var _file = button.up('window').down('#ffiPedettr_file1').fileInputEl.dom.files[0];
		var _src = 'php/resources/download_file.php?xxTable=logistics_pedidos_ettr&xxField=file1&xxFile_name=' + button.up('window').down('#pedettr_key').getValue() +'_'+ button.up('window').down('#pedettr_file1').getValue();
		fext_FileDownload(_file, _src);
	},

	lpe_ffiPedettr_file1Change: function(filefield, value, options) {
		var _win = filefield.up('window'); // 2097152
		fext_FileReader(filefield, /pdf/, '[PDF]', 1048576, '1 MB', _win.down('#btnPedettr_file1Delete'), _win.down('#btnPedettr_file1Download'), false);
	},

	lpe_btnPedettr_file2DeleteClick: function(button, e, options) {
		var _win = button.up('window');
		_win.down('#ffiPedettr_file2').reset(); _win.down('#ffiPedettr_file2').setValue(''); _win.down('#ffiPedettr_file2').setRawValue(''); _win.down('#ffiPedettr_file2').setReadOnly(false);
		_win.down('#pedettr_file2').setValue(''); button.hide(); _win.down('#btnPedettr_file2Download').disable();
    },

	lpe_btnPedettr_file2DownloadClick: function(button, e, options) {
		var _file = button.up('window').down('#ffiPedettr_file2').fileInputEl.dom.files[0];
		var _src = 'php/resources/download_file.php?xxTable=logistics_pedidos_ettr&xxField=file2&xxFile_name=' + button.up('window').down('#pedettr_key').getValue() +'_'+ button.up('window').down('#pedettr_file2').getValue();
		fext_FileDownload(_file, _src);
	},

	lpe_ffiPedettr_file2Change: function(filefield, value, options) {
		var _win = filefield.up('window'); // 2097152
		fext_FileReader(filefield, /pdf/, '[PDF]', 1048576, '1 MB', _win.down('#btnPedettr_file2Delete'), _win.down('#btnPedettr_file2Download'), false);
	},

	/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
	lpo_BeforeShow: function(component, options) {
		var _vs = fextpub_sessionVariables();
		Ext.Ajax.request({
            method: 'POST', url: 'php/logistics_pedidos_json_records.php',
            params: { xxPed_key: component.getCallKey(), xxType_record: 'save_ok', xxOrder_by: 'ped_documento',
            	      zzUsursess_key: _vs['us'], zzUsuracce_key: _vs['ua'], zzYear_id: _vs['y'], zzUsur_key: _vs['u'], zzArea_key: _vs['a'], zzAlma_key: _vs['alma'] },
			success : function(response, options) {
		        var _result = Siace.util.Util.decodeJSON(response.responseText);
		        if ( _result.success ) {
					component.down('#doc_nombre').setText(_result.data[0].doc_nombre.toUpperCase());
		        	component.down('#ped_documento').setText(_result.data[0].ped_documento);
				}
			},
			failure : function(response, options){ }
        });
	},

	lpo_btnNewClick: function(button, e, options) {
		button.up('window').close();  button.up('window').destroy();
		this.tvb_ViewEdit('1', button.up('panel'));
	},

	lpo_btnPrinterClick: function(button, e, options) {
	},

	lpo_btnExitClick: function(button, e, options) {
		var _win = button.up('window');
		if ( _win.getCallStore() !== null ) { _win.getCallStore().load(); }
		_win.close();
	},

	lpp_beforeShow: function(component, options) {
		component.down('#subtitle').setValue(component.getSubTitle());
		/*if ( component.getFormText() !== '' ) {
			component.down('#message').setValue(component.getFormText());
		} else if ( component.getFormType() == '41' ) {
			component.down('#message').setFieldStyle('color: #0000A0 !important;');
			component.down('#message').setValue(translations.public_usuariospsw2_message41);
		} else if ( component.getFormType() == '45' ) {
			component.down('#message').setFieldStyle('color: #EC0000 !important;');
			component.down('#message').setValue(translations.public_usuariospsw2_message45);
		}*/
	},

	lpp_Show: function(component, options) {
		component.down('#usur_psw2').focus();
	},

	lpp_btnAcceptClick: function(button, e, options) {
		var _win = button.up('window'); var _usur_psw2 = _win.down('#usur_psw2').getValue();
		if ( _usur_psw2 == '' ) { return false; }
		if ( _win.getFormType() == '45' && _win.down('#observ').getValue() == '' ) {
			Ext.Msg.alert(translations.mensaje, 'Debe indicar el motivo por el cual se va a RECHAZAR el documento', function() { _win.down('#observ').focus(); }); return false ; }

		_usur_psw2 = Siace.util.MD5.encode(_usur_psw2);
		_win.getCallButton().fireEvent('click', _win.getCallButton(), '', {'key':_win.getCallKey(), 'usur_psw2':_usur_psw2, 'observ':_win.down('#observ').getValue(), 'win': _win});
		//_win.close(); _win.destroy();
	},

	lpp_btnCancelClick: function(button, e, options) {
		button.up('window').close();
	},

	lpp_pedweb_estadoChange: function(checkbox, newValue, oldValue, options) {
		fext_removeAddCls(checkbox.up('window').down('#lblPedweb_estado'), newValue == true ? 'lbl00301' : 'lbl00401', newValue == true ? 'lbl00401' : 'lbl00301');
		checkbox.up('window').down('#pedweb_dias').setDisabled(!newValue); if (newValue == false) { checkbox.up('window').down('#pedweb_dias').setValue(''); }

	},

	lpp_usur_psw2KeyPress: function(field, e, options) {
		var _charCode = e.getCharCode();

		if( (e.shiftKey && _charCode >= 97 && _charCode <= 122) || (!e.shiftKey && _charCode >= 65 && _charCode <= 90) ) { 
			if ( this.getCapsLockToolTip() === undefined ) { // #3 podemos usar el getCapsLockToolTip gracias a la configuracion refs en la parte superior
				Ext.widget('toolbar_capslocktooltip', { target: 'txtUsur_psw2', });
			}
			this.getCapsLockToolTip().show();
		} else { 
			if ( this.getCapsLockToolTip() !== undefined ) { this.getCapsLockToolTip().hide(); }
		}
	},
});