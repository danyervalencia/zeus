Ext.define('Siace.controller.operations.Reports', {
	extend: 'Ext.app.Controller',
	views: ['operations.StockReports'],
    refs: [
        { ref: 'pns_Public_NandinasSearch', selector: 'public_nandinassearch' },
    ],

	init: function(application) {
		this.control({
			'operations_stockreports': { beforerender: this.osr_BeforeRender, close: this.osr_Close, },
			'operations_stockreports #btnPdf': { click: this.osr_btnPdfClick, },
			'operations_stockreports #btnExcel': { },
            'operations_stockreports #btnNand_search': { click: this.osr_btnNand_searchClick, },
            'operations_stockreports #alma_key': {
            	blur: this.osr_alma_keyBlur,
            	focus: this.osr_alma_keyFocus,
            },			
			'operations_stockreports #bsc_id': { change: this.osr_bsc_idChange, },
			'operations_stockreports #bsg_id': { change: this.osr_bsg_idChange, },
            'operations_stockreports #nand_codigo': {
                blur: this.osr_nand_codigoBlur,
                focus: this.osr_nand_codigoFocus,
                keypress: this.osr_nand_codigoKeypress,
            },			
		});
	},

	osr_BeforeRender: function(component, options) {
		var _str = Ext.create('Ext.data.Store', {
			fields: [
				{ name: 'typrep_id', type: 'string' },
				{ name: 'typrep_nombre', type: 'string' },
			],
			data: [
				{ typrep_id: 'STOCK_CONSOLIDADO', typrep_nombre: 'Stock Consolidado' },
				{ typrep_id: 'STOCK_CONSOLIDADO_VoBo', typrep_nombre: 'Stock Consolidado - VoBo' },
				{ typrep_id: 'STOCK_CONSOLIDADO_ADUANA', typrep_nombre: 'Stock Consolidado - Aduanas' },
				{ typrep_id: 'STOCK_CONSOLIDADO_VALORIZADO', typrep_nombre: 'Stock Consolidado - Valorizado' },
				{ typrep_id: 'STOCK_DETALLADO', typrep_nombre: 'Stock Detallado' },
				{ typrep_id: 'STOCK_DETALLADO_VoBo', typrep_nombre: 'Stock Detallado - VoBo' },
				{ typrep_id: 'STOCK_DETALLADO_ADUANAS', typrep_nombre: 'Stock Detallado - Aduanas' },
			]
		});
		var _cboType_report = component.down('#type_report');
		_cboType_report.bindStore(_str);
		_cboType_report.getStore().load({ 
			callback: function(opt,success,respon) { _cboType_report.setValue('STOCK_CONSOLIDADO'); }
		});

		fextope_almacenesFilter({'objeto': component.down('#alma_key'), 'type_record': 'combo', 'add_blank': (Ext.getCmp('ah_txtAlma_key').getValue() == '' ? 'YES' : 'NO')});
		//fextope_almacenesCombo(component.down('#alma_key'), false, true, undefined, '', 'combo', Ext.getCmp('ah_txtAlma_key').getValue() == '' ? 'YES' : '')

		var _cboPers_id = component.down('#pers_id');
		_cboPers_id.bindStore(Ext.create('Siace.store.operations.Registros_Aduanas'));
		_cboPers_id.getStore().on('beforeload', function(store, operations, eOpts) {
		    store.getProxy().setExtraParam('xxAlma_key', component.down('#alma_key').getValue());
		    store.getProxy().setExtraParam('xxType_record', 'OPERADORES');
		    store.getProxy().setExtraParam('xxOrder_by', 'pers_nombre');
		    store.getProxy().setExtraParam('xxAdd_blank', 'YES');
		});

		var _cboBsg_id = component.down('#bsg_id');
		_cboBsg_id.bindStore(Ext.create('Siace.store.public.Bienes_Servs_Grupos'));
		var _cboBsc_id = component.down('#bsc_id');
		_cboBsc_id.bindStore(Ext.create('Siace.store.public.Bienes_Servs_Clases'));
		var _cboBsf_id = component.down('#bsf_id');
		_cboBsf_id.bindStore(Ext.create('Siace.store.public.Bienes_Servs_Familias'));

		_cboBsg_id.getStore().load({ params: { xxBst_id: '1', xxType_record: 'combo', xxAdd_blank: 'YES' } });
	},

	osr_Close: function(panel, options) {
		if ( this.getPns_Public_NandinasSearch() !== undefined ) { this.getPns_Public_NandinasSearch().close();  this.getPns_Public_NandinasSearch().destroy(); }
	},

	osr_ViewReport: function(pcTypeEdit, poPanel){
		if ( !poPanel.down('#fechaini').isValid() ) {
			Ext.Msg.alert(translations.mensaje, 'Fecha Inicial NO es Válida', function() { poPanel.down('#fechaini').focus(); }); return false ; }
		if ( !poPanel.down('#fechafin').isValid() ) {
			Ext.Msg.alert(translations.mensaje, 'Fecha Final NO es Válida', function() { poPanel.down('#fechafin').focus(); }); return false ; }
		var _alma_key = poPanel.down('#alma_key').getValue();
		var _fechaini = fjsDateSQL(poPanel.down('#fechaini').getRawValue());  var _fechafin = fjsDateSQL(poPanel.down('#fechafin').getRawValue());
		var _bsg_id = poPanel.down('#bsg_id').getValue();  var _bsc_id = poPanel.down('#bsc_id').getValue();  var _bsf_id = poPanel.down('#bsf_id').getValue();
		var _type_report = poPanel.down('#type_report').getValue();

		if ( fjsIn_array(_type_report, ['STOCK_CONSOLIDADO', 'STOCK_CONSOLIDADO_VoBo']) ) {
        	fext_pdf('', translations.pdf_operations_almacenes_report_stock_title, 'php/pdf/pdf_operations_almacenes_report_stock_consolidado.php?xxAlma_key='+_alma_key+'&xxFechaini='+_fechaini+'&xxFechafin='+_fechafin+'&xxBsg_id='+_bsg_id+'&xxBsc_id='+_bsc_id+'&xxType_report='+_type_report);
		} else if ( fjsIn_array(_type_report, ['STOCK_CONSOLIDADO_ADUANA','STOCK_CONSOLIDADO_VALORIZADO']) ) {
			fext_pdf('', translations.pdf_operations_almacenes_report_stock_title, 'php/pdf/pdf_operations_almacenes_report_stock_consolidado_aduana.php?xxAlma_key='+_alma_key+'&xxFechaini='+_fechaini+'&xxFechafin='+_fechafin+'&xxBsg_id='+_bsg_id+'&xxBsc_id='+_bsc_id+'&xxType_report='+_type_report);
		}
	},

	osr_btnPdfClick: function(button, e, options) {
		this.osr_ViewReport('1', button.up('panel'));
	},

	osr_btnExcelClick: function(button, e, options) {
		this.osr_ViewReport('2', button.up('panel'));
	},

	osr_ExecuteDES:function(poPanel, pcType) {
		//All the conditions are to to try to stop a Javascript error with vector being null
		//var vector = (f.vector && f.vector.value && f.vector.value.length > 7) ? f.vector.value : null;
		var _message = poPanel.down('#message').getValue(); //get the message
		//if (!pcType) { _message = hexToString (_message); }//treat it as hex
    	var _result = fjsDES(poPanel.down('#key').getValue(), _message, pcType, 0, null);
		//if (pcType) _result = stringToHex (_result); //output as hex
		console.log(_result);
		//f.result.value = result; //put the result into the form		
		
		//var cifrado = des(poPanel.down('#key').getValue(), , '', '1', '', '');
		//console.log(cifrado);
	},

	osr_btnDesEClick: function(button, e, options) {
		this.osr_ExecuteDES(button.up('panel'), 1);
	},

	osr_btnDesDClick: function(button, e, options) {
		this.osr_ExecuteDES(button.up('panel'), 0);
	},

	osr_btnNand_searchClick: function(button, e, options) {
 		fext_windowSearch(this.getPns_Public_NandinasSearch(), button.up('panel'), 'Siace.view.public.NandinasSearch', translations.public_nandinassearch_title, button.up('panel').down('#nand_id').getValue(), '', '', false);
	},

	osr_alma_keyBlur: function(combo, The, options) {
		if ( combo.getValue() !== combo.up('panel').down('#ALMA_KEY').getValue() ) {
			var _cboPers_id = combo.up('panel').down('#pers_id');
			if ( combo.getValue() == '' ) {
				_cboPers_id.setDisabled(true);  _cboPers_id.getStore().removeAll();  _cboPers_id.setValue('');
			} else {
				_cboPers_id.setDisabled(false); _cboPers_id.getStore().load();
			}
		}
	},

	osr_alma_keyFocus: function(combo, The, options) {
		combo.up('panel').down('#ALMA_KEY').setValue(combo.getValue());
	},

	osr_bsc_idChange: function(combo, newValue, oldValue, options) {
		var _cboBsf_id = combo.up('panel').down('#bsf_id');
		if ( newValue*1 > 0 ) {
			var _bsg_id = combo.up('panel').down('#bsg_id').getValue();
			_cboBsf_id.getStore().load({
				params: { xxBst_id: '1', xxBsg_id: _bsg_id, xxBsc_id: newValue, xxType_record: 'combo', xxAdd_blank: 'YES' },
				callback: function(opt,success,respon) {
				   	if ( _cboBsf_id.getStore().getCount() > 1 ) {
				    	_cboBsf_id.setDisabled(false);  _cboBsf_id.setValue(_cboBsf_id.getStore().getAt(0).data.bsf_id);
				    } else {
				    	_cboBsf_id.setDisabled(true);  _cboBsf_id.setValue('');
				    }
		    	}
			});
		} else {
			_cboBsf_id.getStore().removeAll(); _cboBsf_id.setValue(''); _cboBsf_id.setDisabled(true);
		}
	},

	osr_bsg_idChange: function(combo, newValue, oldValue, options) {
		var _cboBsc_id = combo.up('panel').down('#bsc_id');
		if ( newValue*1 > 0 ) {
			_cboBsc_id.getStore().load({
				params: { xxBst_id: '1', xxBsg_id: newValue, xxType_record: 'combo', xxAdd_blank: 'YES' },
				callback: function(opt, success, respon) {
				   	if ( _cboBsc_id.getStore().getCount() > 0 ) {
				    	_cboBsc_id.setDisabled(false);  _cboBsc_id.setValue(_cboBsc_id.getStore().getAt(0).data.bsc_id);
				    } else {
				    	_cboBsc_id.setDisabled(true);  _cboBsc_id.setValue(0);
				    }
		    	}
			});
		} else {
			_cboBsc_id.getStore().removeAll(); _cboBsc_id.setValue(0);  _cboBsc_id.setDisabled(true);
		} 
	},

	osr_nand_codigoBlur: function(textfield, The, options) {
		this.osr_nand_codigoSearch('0', textfield.up('panel'));
	},

	osr_nand_codigoFocus: function(textfield, The, options) {
		this.osr_nand_codigoSearch('1', textfield.up('panel'));
	},

	osr_nand_codigoKeypress: function(textfield, e, options) {
		if( e.getCharCode() == 13 ) { this.osr_nand_codigoSearch('13', textfield.up('panel')); }
	},

	osr_nand_codigoSearch: function(pcType, poCallWindow) {
		fext_fieldSearch(pcType, poCallWindow, ['nand_id', 'NAND_CODIGO', 'nand_codigo', 'nand_nombre'], 
			            ['php/public_nandinas_json_records.php', 'xxNand_codigo', 'textfield_search', ''], '', '');
	},
});